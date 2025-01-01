import { Component, OnInit, SimpleChanges, EventEmitter, Output, Input, OnChanges } from "@angular/core";
import { process, State, GroupDescriptor } from "@progress/kendo-data-query";
import icCheck from "@iconify/icons-ic/twotone-check";
import { SelectAllCheckboxState, RowClassArgs } from "@progress/kendo-angular-grid";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { DanhSachChiPhiKhamChuaBenh, DanhSachCongNoChoThu, CongNoChoThu, ThongTinMienGiamVo, CommonThuTien, DanhSachDaThuTienReq, LoaiMienGiam, DanhSachMienGiamVo, LoaiChietKhau, ApDungMiemGiamThem, DanhSachChiPhiThuTamUng, LoaiBangKeChiPhi } from "../cho-thu-tien.model";
import { BaseService } from "src/app/core/services/base.service";
import { NotificationService } from "src/app/core/services/notification.service";
import icInfo from "@iconify/icons-ic/twotone-info";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icDelete from "@iconify/icons-ic/twotone-delete";
import { MatDialog } from "@angular/material";
import icRoundEdit from "@iconify/icons-ic/edit";
import icBlock from "@iconify/icons-ic/twotone-block";
import { ApDungMiemGiamThemComponent } from "../../../common/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component";
import { ApDungMiemGiamChoTungDichVuComponent } from "../../../common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component";
declare var jQuery: any;
import * as _ from "underscore";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { CommonPdfPopupComponent } from "../../../common/common-pdf-popup/common-pdf-popup.component";
import { ThemSuatAn, ThoiGianDieuTriSoSinhRaVienViewModel } from "src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.model";
import { CommonPdfPopupNgoaiTruComponent } from "../../../common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component";

@Component({
	selector: "app-ds-chua-thu-tien",
	templateUrl: "./ds-chua-thu-tien.component.html",
	styleUrls: ["./ds-chua-thu-tien.component.scss"],
})
export class DsChuaThuTienComponent implements OnInit, OnChanges {
	@Input() dataSourceChanged: boolean = false;
	documentType: DocumentType;
	icInfo = icInfo;
	icDelete = icDelete;
	icRoundEdit = icRoundEdit;
	icBlock = icBlock;
	format: string = 'n2';
	//Áp dụng công nợ
	@Input() apDungCongNo: boolean = false;
	@Input() apCapNhatThanhToan: boolean = false;

	@Input() position: number = -1;
	@Input() thongTinCongTyBaoHiemTuNhans = [];

	//Áp dụng phần miễm đối tượng ưu đãi
	@Output() loadingCtThanhCong = new EventEmitter<any>();
	@Input() apDungMiemGiam: boolean = true;
	@Input() thongTinMienGiamVos: ThongTinMienGiamVo = null;

	@Output() danhSachChuaThanhToan = new EventEmitter<any>();
	@Output() kiemTraDanhSachXNBHYT = new EventEmitter<any>();

	@Output() afterChanged = new EventEmitter<any>();
	@Output() afterChangedCongNo = new EventEmitter<any>();
	@Output() afterapDungMiemGiam = new EventEmitter<any>();
	@Output() kiemTraDSCongNo = new EventEmitter<any>();
	@Output() afterapDungCNTT = new EventEmitter<any>();
	@Output() afterApDungHuyThanhCong = new EventEmitter<any>();

	public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];
	public congNoChoThus: CongNoChoThu[] = [];
	public commonThuTien = new CommonThuTien();
	gridColumnsChuaThuTien: any[] = [];
	public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];
	public tamDanhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh[] = [];

	public loaiMienGiam = new LoaiMienGiam();
	public danhSachMienGiamVo = new DanhSachMienGiamVo();
	public loaiChietKhau = new LoaiChietKhau();
	public apDungMGT = new ApDungMiemGiamThem();

	loadingPopup: any;
	confrim: any = null;
	dataSource: any = {
		data: [],
		total: 0,
	};

	urlGetDataGrid: string = "ThuNgan/GetDataForGridChoXacNhanAsync";
	urlGetTotalPageGrid: string = "ThuNgan/GetTotalPageForGridChoXacNhanAsync";
	public yeuCauTiepNhanId: number = 0;
	public apDungCNAndMiemGiam: boolean = false;
	public groups: GroupDescriptor[] = [
		{
			field: "Nhom",
			aggregates: [
				{ field: "ThanhTien", aggregate: "sum" },
				{ field: "BHYTThanhToan", aggregate: "sum" },
				{ field: "SoTienMG", aggregate: "sum" },
				{ field: "DaThanhToan", aggregate: "sum" },
				{ field: "BNConPhaiThanhToan", aggregate: "sum" },
			],
		},
	];

	public checkboxOnly: boolean = true;
	public gridData: any;

	public danhSachChiPhiKhamChuaBenhtam: DanhSachChiPhiKhamChuaBenh[] = this.danhSachChiPhiKhamChuaBenh;
	public state: State = {
		group: this.groups,
	};

	public duyetBaoHiemYT: boolean = false;
	public disabledDuyetBaoHiemYT: boolean = true;
	public icCheck = icCheck;
	public keySelectBy: string = "Id";
	public mySelection: number[] = [];
	public mySelectionInPage: number[] = [];
	public selectAllState: SelectAllCheckboxState = "unchecked";

	ngOnInit() {
		this.documentType = DocumentType.ThuNgan;
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, true);
	}

	ngOnChanges(value: SimpleChanges) {
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		if (this.dataSourceChanged == true) {
			this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, false);
			this.afterChanged.emit();
		}
		if (this.apDungCongNo == true) {
			this.apDungCNAndMiemGiam = true;
			this.tamDanhSachChiPhiKhamChuaBenh = [];
			this.bindChiaTienCongNo();
			this.afterChangedCongNo.emit();
		}
		if (this.apDungMiemGiam == true) {
			this.apDungCNAndMiemGiam = false;
			this.afterapDungMiemGiam.emit();
		}
		if (this.apCapNhatThanhToan == true) {
			this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, false);
			this.afterapDungCNTT.emit();
		}
	}

	constructor(private route: ActivatedRoute, private apiService: ApiService, private dialog: MatDialog, private baseService: BaseService, private router: Router, private authService: AuthService, private notificationService: NotificationService) { }
	public total(field: any) {
		switch (field) {
			case "BNConPhaiThanhToan":
				return this.XuLyTotalForField("BNConPhaiThanhToan");
				break;
			case "DaThanhToan":
				return this.XuLyTotalForField("DaThanhToan");
				break;
			case "SoTienMG":
				return this.XuLyTotalForField("SoTienMG");
				break;
			case "ThanhTien":
				return this.XuLyTotalForField("ThanhTien");
				break;
			case "BHYTThanhToan":
				return this.XuLyTotalForField("BHYTThanhToan");
				break;
		}
	}

	public totalCongno(field: any, group: any) {
		let sumItemCongNo = 0;
		group.items.forEach(element => {
			element.DanhSachCongNoChoThus.forEach(cn => {
				if (cn.CongTyBaoHiemTuNhanId === field) {
					sumItemCongNo += cn.SoTienCongNoChoThu;
				}
			});
		});
		return sumItemCongNo;
	}
	public totalCongnoFooter(field: any) {
		let sumItemCongNo = 0;
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			element.DanhSachCongNoChoThus.forEach(cn => {
				if (cn.CongTyBaoHiemTuNhanId === field) {
					sumItemCongNo += cn.SoTienCongNoChoThu;
				}
			});
		});
		return sumItemCongNo;
	}

	XuLyTotalForField(field: any) {
		let sum = 0;
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			if (element.CheckedDefault) {
				switch (field) {
					case "BNConPhaiThanhToan":
						sum = sum + element.BNConPhaiThanhToan;
						break;
					case "DaThanhToan":
						sum = sum + element.DaThanhToan;
						break;
					case "SoTienMG":
						sum = sum + element.SoTienMG;
						break;
					case "ThanhTien":
						sum = sum + element.ThanhTien;
						break;
					case "BHYTThanhToan":
						sum = sum + element.BHYTThanhToan;
						break;
				}
			}
		});
		return sum;
	}

	extCheckboxSelection(event: any[]) {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			return (element.CheckedDefault = false);
		});
		if (event.length > 0) {
			for (let index = 0; index < event.length; index++) {
				this.danhSachChiPhiKhamChuaBenh.forEach(element => {
					if ((element.DuocHuongBHYT && element.KiemTraBHYTXacNhan) || !element.DuocHuongBHYT) {
						if (element.Id == event[index]) {
							return (element.CheckedDefault = true);
						}
					}
				});
			}
		}
		this.resetGiaTienCongNo();
		this.myDanhSachChuaThanhToan();
	}

	resetGiaTienCongNo() {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			if (element.CheckedDefault != true) {
				element.DanhSachCongNoChoThus.forEach(congNo => {
					congNo.SoTienCongNoChoThu = 0;
				});
			}
		});
	}

	myDanhSachChuaThanhToan() {
		let danhSachChuaThanhToans: any[];
		danhSachChuaThanhToans = this.danhSachChiPhiKhamChuaBenh.filter(element => element.CheckedDefault == true);
		this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);

		let kiemTraDanhSachXNBHYT = this.danhSachChiPhiKhamChuaBenh.filter(element => element.DuocHuongBHYT === true
			&& element.KiemTraBHYTXacNhan !== true);
		this.kiemTraDanhSachXNBHYT.emit(kiemTraDanhSachXNBHYT);
	}

	setSelectAll() {
		setTimeout(function () {
			if (!jQuery("#selectAllCheckboxId").prop("checked")) {
				jQuery("#selectAllCheckboxId").trigger("click");
			}
		}, 1000);
	}

	ChangCheckboxToaThuoc(event: any, data: any) {
		data.forEach(element => {
			for (const danhSachChiPhiKhamChuaBenh of this.danhSachChiPhiKhamChuaBenh) {
				if (danhSachChiPhiKhamChuaBenh.Id === element.Id) {
					danhSachChiPhiKhamChuaBenh.CheckedDefault = event;
					jQuery("#selectCheckboxId" + danhSachChiPhiKhamChuaBenh.Id).trigger("click");
				}
			}
		});
	}

	mapCongTyBHTN(responseThongTinBenhNhan: any) {
		let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
		if (responseThongTinBenhNhan !== null && responseThongTinBenhNhan !== undefined) {
			for (let index = 0; index < responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length; index++) {
				let congNo = new CongNoChoThu;
				congNo.ViTri = index;
				congNo.CongTyBaoHiemTuNhanId = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].Id;
				congNo.TenCongTy = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].TenCongTy;
				congNo.SoTienCongNoChoThu = 0;
				danhSachCongNoChoThu.CongNoChoThus.push(congNo);
			}
		}
		return danhSachCongNoChoThu;
	}

	async getThongTinYeuCauBenhNhan(id, congNoMiemGiam: any) {
		this.showLoadingPopup();

		this.danhSachCongNoChoThus = [];
		let danhSachCongNoChoThu = new DanhSachCongNoChoThu();

		let responseThongTinBenhNhan = await this.baseService.getById<any>(id).toPromise();
		if (responseThongTinBenhNhan !== undefined && responseThongTinBenhNhan !== null)
			danhSachCongNoChoThu = this.mapCongTyBHTN(responseThongTinBenhNhan);

		if (responseThongTinBenhNhan != undefined && responseThongTinBenhNhan != null) {
			let responseDanhSachThuPhiDichVuNgoaiTru = await this.apiService.get<any>("ThuNgan/DanhSachThuPhiDichVu/" + id).toPromise();
			if (responseDanhSachThuPhiDichVuNgoaiTru != undefined && responseDanhSachThuPhiDichVuNgoaiTru != null) {
				this.dataSource.data = responseDanhSachThuPhiDichVuNgoaiTru;
				this.danhSachChiPhiKhamChuaBenh = responseDanhSachThuPhiDichVuNgoaiTru;

				//=====================get data lam tròn xuống  Math.floor ============================
				for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
					// kiểm tra xác nhận bảo hiểm y tế hay không?
					if (this.danhSachChiPhiKhamChuaBenh[index].DuocHuongBHYT) {
						var fillterThuocBHYTXN = this.danhSachChiPhiKhamChuaBenh.filter(c => c.LoaiNhom === 6 && c.KiemTraBHYTXacNhan == false);
						if (fillterThuocBHYTXN.length === 0) {
							this.duyetBaoHiemYT = true;
							this.disabledDuyetBaoHiemYT = false;
							this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault = this.danhSachChiPhiKhamChuaBenh[index].KiemTraBHYTXacNhan ? true : false;
						} else {
							this.checkboxOnly = false;
							this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault = this.danhSachChiPhiKhamChuaBenh[index].KiemTraBHYTXacNhan ? true : false;
						}
					}
				}

				//===================== Bind nếu có công nợ đầu tiên ====================================
				if (this.danhSachChiPhiKhamChuaBenh.length > 0 && danhSachCongNoChoThu.CongNoChoThus.length > 0) {
					for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {

						let dsDanhSachCongNoChoThus = this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus;
						this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus = [];

						for (let subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
							let soTienCongNoChoThuByTheoCongTy = dsDanhSachCongNoChoThus.filter(c =>
								c.CongTyBaoHiemTuNhanId == danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId)
								.reduce((sum, item) => sum + item.SoTienCongNoChoThu, 0);

							let congNoItem = new CongNoChoThu();
							congNoItem.CongTyBaoHiemTuNhanId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId;
							congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu = soTienCongNoChoThuByTheoCongTy > 0 ? soTienCongNoChoThuByTheoCongTy : 0;
							congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
							congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
							this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus.push(congNoItem);
						}
					}

					this.danhSachCongNoChoThus = [];
					this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
				}

				// if (congNoMiemGiam != true) {
				// 	this.bindChiaTienCongNo();
				// }
			}
			this.gridData = process(this.danhSachChiPhiKhamChuaBenh, this.state);

			this.myDanhSachChuaThanhToan();
			this.setSelectAll();

			this.setRemoveGroupFooterOnly();
			this.loadingCtThanhCong.emit(true);

			this.closeAllDialogs();
		}
	}

	bindTamCongNo() {
		this.gridData = process(this.tamDanhSachChiPhiKhamChuaBenh, this.state);
		this.myDanhSachChuaThanhToan();
	}

	setRemoveGroupFooterOnly() {
		setTimeout(function () {
			if (jQuery("#danhSachChuaThuTienGrid .k-group-footer").length == 1) {
				jQuery("#danhSachChuaThuTienGrid .k-group-footer").hide();
			} else {
				jQuery("#danhSachChuaThuTienGrid .k-group-footer").show();
			}
		}, 100);
	}

	soTienBenhNhanCanThanhToan(): number {
		let totalBHYT = 0;
		let totalThanhTien = 0;
		if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
			this.danhSachChiPhiKhamChuaBenh.forEach(element => {
				if (element.CheckedDefault === true) {
					totalThanhTien += element.ThanhTien;
					totalBHYT += element.BHYTThanhToan;
				}
			});
		}
		return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
	}

	totalCongNo(): number {
		let totalCongNoThanhToan = 0;
		for (let index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
			totalCongNoThanhToan += this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
		}
		return totalCongNoThanhToan;
	}

	findLast() {
		for (let index = this.danhSachChiPhiKhamChuaBenh.length - 1; index >= 0; index--) {
			if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault == true) {
				return index;
			}
		}
		return -1;
	}

	bindChiaTienCongNo() {
		let totalTT = this.soTienBenhNhanCanThanhToan();
		let totalCongNo = this.totalCongNo();
		if (this.danhSachChiPhiKhamChuaBenh.length > 0 && totalCongNo > totalTT) {
			this.notificationService.showError("Số tiền thanh toán công nợ không hợp lệ");
			return;
		}

		this.danhSachCongNoChoThus = [];
		if (this.thongTinCongTyBaoHiemTuNhans.length > 0) {
			let danhSachCongNoChoThu = new DanhSachCongNoChoThu();
			for (let index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
				let congNo = new CongNoChoThu();
				congNo.ViTri = index;
				congNo.CongTyBaoHiemTuNhanId = this.thongTinCongTyBaoHiemTuNhans[index].Id;
				congNo.TenCongTy = this.thongTinCongTyBaoHiemTuNhans[index].TenCongTy;
				congNo.SoTienCongNoChoThu = 0;
				danhSachCongNoChoThu.CongNoChoThus.push(congNo);
			}

			var lastItem = this.findLast();
			var tongCongNo = 0;
			if (danhSachCongNoChoThu.CongNoChoThus.length > 0) {
				var kiemTraCongNoTruocDo = this.tamDanhSachChiPhiKhamChuaBenh.some(cc => cc.DanhSachCongNoChoThus.some(ccc => ccc.SoTienCongNoChoThu != 0));
				for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
					if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
						if (this.position != -1) {
							this.danhSachChiPhiKhamChuaBenh[index].TLMG = 0;
							this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
							this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].SoTienMG - this.danhSachChiPhiKhamChuaBenh[index].DaThanhToan;
							if (index == lastItem) {
								if (!kiemTraCongNoTruocDo) {
									this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ? this.thongTinCongTyBaoHiemTuNhans[this.position].SoTienCongNo - tongCongNo : this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
								}
							}
							if (index != lastItem) {
								if (this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus.length > 0) {
									if (kiemTraCongNoTruocDo) {
										this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
											danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu =
											this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
										tongCongNo += this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
									} else {
										this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
											danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
												this.tinhTienCongNo(this.danhSachChiPhiKhamChuaBenh[index].ThanhTien,
													this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan, danhSachCongNoChoThu.CongNoChoThus[this.position].CongTyBaoHiemTuNhanId,
													totalTT) :
												this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;

										tongCongNo += this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
									}
								}
							}
							this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
						}
					} else {
						if (this.position != -1) {
							this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu = 0;
						}
					}
				}
				this.danhSachChiPhiKhamChuaBenh.forEach(element => {
					if (element.CheckedDefault === true) {
						let totalCongNo = 0;
						element.DanhSachCongNoChoThus.forEach(element => {
							totalCongNo += element.SoTienCongNoChoThu;
						});
						return (element.BNConPhaiThanhToan = element.ThanhTien - element.BHYTThanhToan - totalCongNo - element.DaThanhToan);
					}
				});
				this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
			}
		}

		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			element.SoTienMG = this.tinhSoTienMiemGiam(element);
			this.modelChangeSoTienMG(element);
		});

		this.gridData = process(this.danhSachChiPhiKhamChuaBenh, this.state);
		this.myDanhSachChuaThanhToan();
	}

	tinhTienCongNo(itemThanhTien, itemBHYTThanhToan, congNoId, totalTT): number {
		let totalCongNo = 0;
		//kiểm tra công nợ được áp dụng tiền
		for (let index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
			if (this.thongTinCongTyBaoHiemTuNhans[index].Id == congNoId) {
				totalCongNo = this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
			}
		}
		var itemSoTienCongNo = Math.round(parseFloat(((totalCongNo / totalTT) * (itemThanhTien - itemBHYTThanhToan)).toPrecision(15)) * 100) / 100;
		return itemSoTienCongNo;
	}

	public rowCallback(context: RowClassArgs) {
		const capNhatThanhToan = context.dataItem.CapNhatThanhToan == true;
		return {
			"bg-row-lightpurple": capNhatThanhToan,
		};
	}

	tinhTiLeMiemGiamInGrid(data: DanhSachChiPhiKhamChuaBenh) {
		let tongCongNoItem = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
		let sumSoTienBenhNhanTra = data.ThanhTien - data.BHYTThanhToan - tongCongNoItem;
		if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
			return 0;
		}
		return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
	}

	itemTotalCongNo(danhSachCongNoChoThus: any): number {
		let toatalCongNo = 0;
		danhSachCongNoChoThus.forEach(cn => {
			if (cn.SoTienCongNoChoThu >= 0) {
				toatalCongNo += cn.SoTienCongNoChoThu;
			}
		});
		return toatalCongNo;
	}

	tinhTLMGTheoSoTien(totalSoTienBenhNhanThanhToan: any, totalSoTienConDuocMiemGiam: any): number {
		let tle = totalSoTienConDuocMiemGiam / totalSoTienBenhNhanThanhToan;
		return parseInt((tle * 100).toString());
	}

	tinhSoTienTheoTLMG(totalSoTienBenhNhanThanhToan: any, tiLeMienGiam: any): number {
		let tien = Math.round(totalSoTienBenhNhanThanhToan * tiLeMienGiam);
		return Math.floor(tien / 100);
	}

	modelChangeCongNo(ev: any, data: any, vitri: any) {
		if (ev == undefined && ev == null) {
			data.DanhSachCongNoChoThus[vitri].SoTienCongNoChoThu = 0;
		}
		this.changeInputCongNoBindGrid(ev, data);
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			if (element.Id === data.Id) {
				//element.SoTienMG = this.tinhSoTienMiemGiam(element);
				this.modelChangeSoTienMG(element);
			}
		});
	}

	modelChangeSoTienMG(data: any) {
		this.changeInputSoTienMGBindGrid(data);
		this.myDanhSachChuaThanhToan();
	}

	changeInputCongNoBindGrid(ev: any, dsChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh) {
		for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
			if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan != true && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
				if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
					this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - ev - this.danhSachChiPhiKhamChuaBenh[index].SoTienMG;
					this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
				}
			} else {
				if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
					if (ev - this.danhSachChiPhiKhamChuaBenh[index].DaThanhToan <= 0) {
						this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = -ev;
					}
					//  else {
					// 	this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = 0;
					// 	//this.notificationService.showError(this.commonThuTien.SoTienCongNoNhapVuotQuaTienDV);
					// }
				}
			}
		}

		this.tamDanhSachChiPhiKhamChuaBenh = [...this.danhSachChiPhiKhamChuaBenh];
		this.bindTamCongNo();
	}

	changeInputSoTienMGBindGrid(dsChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh) {
		for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
			let totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
			if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
				if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
					dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - dsChiPhiKhamChuaBenh.BHYTThanhToan - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG - dsChiPhiKhamChuaBenh.DaThanhToan;
					this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
				}
			}
		}
		this.gridData = process(this.danhSachChiPhiKhamChuaBenh, this.state);
	}

	unCheckedBindSoTienMG(id: any) {
		for (let index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
			if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan === false && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
				if (this.danhSachChiPhiKhamChuaBenh[index].Id === id) {
					this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
					this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].TongCongNo;
				}
			}

			//trường hợp này sẽ check bỏ uncheck số tiền bind về lúc đầu
			if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan === true && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === false) {
				if (this.danhSachChiPhiKhamChuaBenh[index].Id === id) {
					this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
					this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].TongCongNo;
				}
			}
		}
		this.gridData = process(this.danhSachChiPhiKhamChuaBenh, this.state);
	}

	onSelectChangeCheckbox(e: any, val: any) {
		//this.unCheckedBindSoTienMG(val);
		this.mySelection = [];
		if (e.target.checked) {
			this.mySelectionInPage.push(val);
		} else {
			this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
		}
		var allData = this.dataSource.data;
		const len = this.mySelectionInPage.length;
		this.mySelection = this.mySelection.concat(this.mySelectionInPage);

		if (len === 0) {
			this.selectAllState = "unchecked";
		} else if (len > 0 && len < allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).length) {
			this.selectAllState = "indeterminate";
		} else {
			this.selectAllState = "checked";
		}
		this.extCheckboxSelection(this.mySelection);
	}

	onSelectAllChange(checkedState: SelectAllCheckboxState) {
		var allData = this.dataSource.data;
		if (allData == undefined) allData = [];
		if (checkedState === "checked") {
			this.mySelectionInPage = allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map(item => item[this.keySelectBy]);
			this.mySelection = this.mySelection.concat(this.mySelectionInPage);
			this.selectAllState = "checked";
		} else {
			var mySelectionRemove = allData.filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map(item => item[this.keySelectBy]);
			if (mySelectionRemove != null && mySelectionRemove.length > 0) {
				mySelectionRemove.forEach(obj => {
					this.mySelection.splice(this.mySelection.indexOf(obj), 1);
				});
			}
			this.mySelectionInPage = [];
			this.selectAllState = "unchecked";
		}
		this.extCheckboxSelection(this.mySelection);
		this.bindCheckToaThuoc();
	}

	bindCheckToaThuoc() {
		var checkToaThuocs = this.danhSachChiPhiKhamChuaBenh.filter(c => c.LoaiNhom == 6 && c.CheckedDefault === true);
		if (checkToaThuocs.length > 0) {
			this.duyetBaoHiemYT = true;
		} else {
			this.duyetBaoHiemYT = false;
		}
	}

	apDungMiemGiamThem() {
		let type = `NgoaiTru`;
		let yeuCauTiepNhanId = this.yeuCauTiepNhanId;

		let dataMGT = new ApDungMiemGiamThem;
		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog.open(ApDungMiemGiamThemComponent, {
			disableClose: true,
			width: "700px",
			data: { dataMGT, type, yeuCauTiepNhanId }
		}).afterClosed().subscribe((result) => {
			if (result != null) {
				if (result != null) {
					switch (result.Type) {
						case 'MiemGiam':
							this.bindMiemGiamPhanTramVaSoTien(result.DataResult);
							break;
						case 'MiemGiamBangThanhTien':
							this.bindMiemGiamBangThanhTienDichVu(result.DataResult);
							break;
					}
				}
			}
		});
	}


	bindMiemGiamBangThanhTienDichVu(result: any) {
		if (result != undefined && result != null) {
			if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
				this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);
				//tính số tiền miễm giam tren grid
				let danhSachMiemGiamBangThanhTien = result;
				this.danhSachChiPhiKhamChuaBenh.forEach(element => {
					danhSachMiemGiamBangThanhTien.forEach(dsChonMG => {
						if (dsChonMG.Id == element.Id) {
							element.SoTienMG = this.tinhSoTienMiemGiamBangThanhTienDichVu(element);
							this.modelChangeSoTienMG(element);
						}
					});
				});
			}

		}
	}

	bindMiemGiamPhanTramVaSoTien(result: any) {
		if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
			this.danhSachChiPhiKhamChuaBenh.forEach(element => {
				for (const danhSachMienGiam of element.DanhSachMienGiamVos.filter(x => x.LoaiMienGiam === this.loaiMienGiam.MienGiamThem)) {
					element.DanhSachMienGiamVos.splice(element.DanhSachMienGiamVos.indexOf(danhSachMienGiam), 1);
				}
			});

			if (result.TiLe != undefined && result.TiLe != null) {
				this.bindMiemGiamThemTiLe(result.TiLe, result.GhiChu, result.NoiDungGhiChuMiemGiamId);
			}

			if (result.SoTien != undefined && result.SoTien != null) {
				this.bindMiemGiamThemSoTien(result.SoTien, result.GhiChu, result.NoiDungGhiChuMiemGiamId);
			}

			this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);

			//tính số tiền miễm giam tren grid
			this.danhSachChiPhiKhamChuaBenh.forEach(element => {
				element.SoTienMG = this.tinhSoTienMiemGiam(element);
				this.modelChangeSoTienMG(element);
			});
		}
	}


	apDungMiemGiamChoTungDichVu(dataItem: any) {
		this.tamDanhSachChiPhiKhamChuaBenh = this.danhSachChiPhiKhamChuaBenh;
		let isView = true;
		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog
			.open(ApDungMiemGiamChoTungDichVuComponent, {
				disableClose: true,
				width: "700px",
				data: { dataItem, isView },
			})
			.afterClosed()
			.subscribe(result => {
				if (result != null) {
					//tính số tiền miễm giam tren grid					
					if (result.apdungMGTThanhCong) {
						this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);
						this.danhSachChiPhiKhamChuaBenh.forEach(element => {
							if (element.Id === result.Id) {

								element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
								element.NoiDungGhiChuMiemGiamId = result.NoiDungGhiChuMiemGiamId;

								element.SoTienMG = this.tinhSoTienMiemGiam(element);
								this.modelChangeSoTienMG(element);
							}
						});
					} else {
						this.danhSachChiPhiKhamChuaBenh.forEach(element => {
							if (element.Id === result.Id) {
								element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
								element.NoiDungGhiChuMiemGiamId = result.NoiDungGhiChuMiemGiamId;
								
								element.DanhSachMienGiamVos.forEach(item => {
									result.DanhSachMienGiamVos.forEach(item1 => {
										if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 1) {
											{
												item.TiLe = item1.TiLe;
												item.TongTienMiemGiam = 0;
												item.DaSuDung = false;
											}
										}
										if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 2) {
											{
												item.SoTien = item1.SoTien;
												item.TongTienMiemGiam = 0;
												item.DaSuDung = false;
											}
										}
									});
								});
							}
						});
					}
				}
			});
	}

	bindMiemGiamThemTiLe(tiLe: number, ghiChu: string, noiDungGhiChuMiemGiamId: any) {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			let dsMiemGiamThem = new DanhSachMienGiamVo();
			dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
			dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoTiLe;
			dsMiemGiamThem.TiLe = tiLe;

			element.GhiChuMienGiamThem = ghiChu;
			element.NoiDungGhiChuMiemGiamId = noiDungGhiChuMiemGiamId;

			element.DanhSachMienGiamVos.push(dsMiemGiamThem);
		});
	}

	bindMiemGiamThemSoTien(soTien: number, ghiChu: string, noiDungGhiChuMiemGiamId: any) {
		this.danhSachChiPhiKhamChuaBenh.forEach(element => {
			let dsMiemGiamThem = new DanhSachMienGiamVo();
			dsMiemGiamThem.LoaiMienGiam = this.loaiMienGiam.MienGiamThem;
			dsMiemGiamThem.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
			dsMiemGiamThem.SoTien = soTien;
			dsMiemGiamThem.SoTienMiemGiamTatCa = soTien;

			element.GhiChuMienGiamThem = ghiChu;
			element.NoiDungGhiChuMiemGiamId = noiDungGhiChuMiemGiamId;

			element.DanhSachMienGiamVos.push(dsMiemGiamThem);
		});
	}

	soTienCongNoChoTungDichVu(dataItem: any) {
		let soTienCongNo = 0;
		dataItem.DanhSachCongNoChoThus.forEach(element => {
			soTienCongNo = soTienCongNo + element.SoTienCongNoChoThu;
		});
		return soTienCongNo;
	}


	tinhSoTienMiemGiamBangThanhTienDichVu(dataItem: DanhSachChiPhiKhamChuaBenh) {
		if (dataItem != undefined && dataItem != null) {
			let tongTienTungDichVu = ((dataItem.DonGia * dataItem.Soluong));
			if (tongTienTungDichVu > 0) {
				if (dataItem.DanhSachMienGiamVos != undefined && dataItem.DanhSachMienGiamVos != null) {
					var dsMienGiamTheoTiLe = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
					dsMienGiamTheoTiLe = _.sortBy(dsMienGiamTheoTiLe, 'LoaiMienGiam');
					dsMienGiamTheoTiLe.forEach(item => {
						item.TiLe = 0;
						item.TongTienMiemGiam = 0;
					});
					var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2);
					dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
					dsMienGiamTheoSoTien.forEach(item => {
						item.TongTienMiemGiam = tongTienTungDichVu;
						item.SoTien = tongTienTungDichVu;
					});
				} else {
					dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
					dsMienGiamTheoSoTien.forEach(item => {
						item.SoTien = 0;
					});
				}

			}
			return tongTienTungDichVu;
		}
	}

	tinhSoTienMiemGiam(dataItem: DanhSachChiPhiKhamChuaBenh) {
		if (dataItem != undefined && dataItem != null) {
			let tongTatCaSoTienMg = 0;
			var tiLePhanTramConLai = 100;
			let tongTienTungDichVu = ((dataItem.DonGia * dataItem.Soluong)) - dataItem.BHYTThanhToan;
			var soTienConLai = tongTienTungDichVu;
			if (tongTienTungDichVu > 0) {
				if (dataItem.DanhSachMienGiamVos != undefined && dataItem.DanhSachMienGiamVos != null) {
					var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
					var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
					if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
						dsMienGiamTheoPhanTram = _.sortBy(dsMienGiamTheoPhanTram, 'LoaiMienGiam');
						dsMienGiamTheoPhanTram.forEach(item => {
							if (tiLePhanTramConLai > 0) {
								item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
							}
							else {
								item.TiLe = 0;
							}
							item.TongTienMiemGiam = Math.round((item.TiLe * tongTienTungDichVu) / 100 * 100) / 100;
							tongTatCaSoTienMg += item.TongTienMiemGiam;
							if (item.TiLe >= tiLePhanTramConLai) {
								tiLePhanTramConLai = 0;
							}
							else {
								tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
							}
						});
					}
					if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
						tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
						//soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien - dataItem.BHYTThanhToan - this.soTienCongNoChoTungDichVu(dataItem)) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien - dataItem.BHYTThanhToan - this.soTienCongNoChoTungDichVu(dataItem);

						//Khách muốn khi nhập số tiền miễm giảm thì cần bind thành tiền dv vào miễm giảm lun
						soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien;

						//Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
						dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
						dsMienGiamTheoSoTien.forEach(item => {
							//Nếu số tiền còn lại sau khi đổ từ trên xuống
							if (soTienConLai > 0) {
								item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
							}
							else {
								item.SoTien = 0;
							}
							item.TongTienMiemGiam = item.SoTien;
							tongTatCaSoTienMg += item.TongTienMiemGiam;
							if (item.SoTien >= soTienConLai) {
								soTienConLai = 0;
							}
							else {
								soTienConLai = soTienConLai - item.SoTien;
							}
						});
					} else {
						dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
						dsMienGiamTheoSoTien.forEach(item => {
							//NẾU PHẦN TRĂM MÀ SÀI HẾT THÌ BIND TIỀN TẤT CẢ CON LẠI BẰNG 0
							item.SoTien = 0;
						});
					}
				}
			}
			return tongTatCaSoTienMg < 0 ? 0 : tongTatCaSoTienMg;
		}
	}

	BackToList() {
		let yctn = this.route.snapshot.queryParams.yctn;
		if (yctn) {
			this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
		} else {
			this.router.navigate(["/danh-sach-thu-dich-vu"], {
				queryParamsHandling: "preserve",
			});
		}
	}

	luuTamChiPhiNgoaitru() {
		this.dialog
			.open(ConfirmComponent, {
				disableClose: false,
				width: "400px",
				data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["lưu tạm chi phí"]) },
			})
			.afterClosed()
			.subscribe(result => {
				if (result === "Yes") {
					this.showLoadingPopup();

					let danhSachChiPhiThuTamUng = new DanhSachChiPhiThuTamUng();
					danhSachChiPhiThuTamUng.DanhSachChiPhiKhamChuaBenhDaChons = this.danhSachChiPhiKhamChuaBenh;
					danhSachChiPhiThuTamUng.Id = this.yeuCauTiepNhanId;
					if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
						this.apiService.post("ThuNgan/LuuTamChiPhiNgoaiTru", danhSachChiPhiThuTamUng).subscribe(
							() => {
								this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, true);
								this.bindChiaTienCongNo();
								this.closeAllDialogs();
								this.notificationService.showSuccess("Lưu tạm chi phí thành công");
							},
							(err: ApiError) => {
								if (err.Message != "Validation Failed") {
									this.notificationService.showError(err.Message);
									this.closeAllDialogs();
								}
							}
						);
					} else {
						this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
						this.closeAllDialogs();
					}
				}
			});
	}

	xemTruocChiPhi() {
		this.showLoadingPopup();

		let arrFileUrl: Array<any> = [];
		let arrFilePdf: Array<any> = [];

		let hostingName = "http://" + "//" + window.location.host;
		this.apiService.postExportPdf<any>("ThuNgan/XemTruocBangKeChiPhi?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&hostingName=" + hostingName).subscribe(
			(file) => {
				let newBlob = new Blob([file], { type: "application/pdf" });
				let datalocalURL = window.URL.createObjectURL(newBlob);
				arrFileUrl.push(datalocalURL);
				arrFilePdf.push(file);
				if (arrFilePdf.length > 0) {
					this.dialog
						.open(CommonPdfPopupNgoaiTruComponent, {
							disableClose: false,
							width: "1000px",
							data: { arrFileUrl, arrFilePdf, yeuCauTiepNhanId: this.yeuCauTiepNhanId, loaiBangKeChiPhi: LoaiBangKeChiPhi.XemTruocBangKe },
						})
						.afterClosed()
						.subscribe(result => { this.closeAllDialogs(); });
				} else {
					this.notificationService.showError("Chưa có thông tin dịch vụ.");
					this.closeAllDialogs();
				}
			},
			(err: ApiError) => {
				if (err.Message !== "Validation Failed") {
					this.closeAllDialogs();
				}
			}
		);
	}

	showLoadingPopup() {
		if (!this.loadingPopup) {
			this.loadingPopup = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: '200px',
				height: '90px',
				data: { Title: 'Đang tải...' }
			});
		}
	}

	showSavingPopup() {
		if (!this.loadingPopup) {
			this.loadingPopup = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: '200px',
				height: '90px',
				data: { Title: 'Đang lưu...' }
			});
		}
	}

	closeAllDialogs() {
		if (this.loadingPopup) {
			this.loadingPopup.close();
			this.loadingPopup = null;
		}
	}
}
