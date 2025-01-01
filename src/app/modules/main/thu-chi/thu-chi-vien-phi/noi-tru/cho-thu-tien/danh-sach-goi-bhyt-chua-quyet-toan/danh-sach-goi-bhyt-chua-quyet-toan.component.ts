import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Location } from '@angular/common';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from "src/app/core/services/auth.service";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ActivatedRoute } from "@angular/router";
import { CongNoChoThu, DanhSachCongNoChoThu } from "../../../ngoai-tru/cho-thu-tien/cho-thu-tien.model";
import icCheck from "@iconify/icons-ic/twotone-check";
import { BaseService } from "src/app/core/services/base.service";
import { GroupDescriptor, State, process } from "@progress/kendo-data-query";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ChiPhiKhamChuaBenhTrongGoiDichVuVo, DanhSachChiPhiTrongGoi } from "../cho-thu-tien.model";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";

declare var $: any;
declare var jQuery: any;
@Component({
	selector: "app-danh-sach-goi-bhyt-chua-quyet-toan",
	templateUrl: "./danh-sach-goi-bhyt-chua-quyet-toan.component.html",
	styleUrls: ["./danh-sach-goi-bhyt-chua-quyet-toan.component.scss"],
})

export class GoiBHYTChuaQuyetToanComponent implements OnInit {
	@Input() yeuCauTiepNhanId: number;
	@Input() TenBenhNhan: string = "";
	@Output() danhSachGoiCoBHYT = new EventEmitter<any>();

	@Input() thongTinCongTyBaoHiemTuNhans = [];
	@Input() position: number = -1;
	@Input() dataSourceChanged: boolean = false;
	@Output() afterChanged = new EventEmitter<any>();
	@Input() apDungCongNo: boolean = false;
	@Output() afterChangedCongNo = new EventEmitter<any>();
	@Output() luuTamChiPhiThanhCongTrongGoi = new EventEmitter<any>();

	public format: string = 'n2';
	public documentType: DocumentType = DocumentType.ThuNgan;

	public groups: GroupDescriptor[] = [{
		field: 'Nhom', aggregates: [
			{ field: 'SoTienQuyetToan', aggregate: 'sum' },
			{ field: 'ThanhTien', aggregate: 'sum' },
			{ field: 'DonGiaBHYT', aggregate: 'sum' },
			{ field: 'BHYTThanhToan', aggregate: 'sum' }
		]
	}];

	public dataSource: any = {
		data: [],
		total: 0,
	};

	public state: State = {
		group: this.groups,
	};

	public gridColumns: any[] = [];
	public validationErrors: any[] = [];
	public goiChuaQuyetToanMarketing: ChiPhiKhamChuaBenhTrongGoiDichVuVo[] = [];
	public danhSachCongNoChoThus: DanhSachCongNoChoThu[] = [];

	public gridData: any;
	public loadingPopup: any;
	public benhNhanId: any;

	constructor(private route: ActivatedRoute,
		private notificationService: NotificationService, private baseService: BaseService,
		private dialog: MatDialog, private location: Location, private authService: AuthService,
		private apiService: ApiService) { }

	@ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
	@ViewChild("gridList", { static: true }) gridList: GridComponent;
	@ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
	@ViewChild('soTienTraLaiBNTemplate', { static: true }) soTienTraLaiBNTemplate: TemplateRef<any>;
	@ViewChild('soTienTraLaiBNGroupFooter', { static: true }) soTienTraLaiBNGroupFooter: TemplateRef<any>;
	@ViewChild('bhytGroupFooter', { static: true }) bhytGroupFooter: TemplateRef<any>;
	@ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
	@ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
	@ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
	@ViewChild('donGiaBHYTTemplate', { static: true }) donGiaBHYTTemplate: TemplateRef<any>;

	goibhyt: string = "goibhyt";
	public icCheck = icCheck;

	ngOnChanges(changes: SimpleChanges) {
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		if (this.dataSourceChanged) {
			this.getYeuCauGoiBenhNhan(this.yeuCauTiepNhanId);
			this.afterChanged.emit();
		}
		if (this.apDungCongNo) {
			this.bindChiaTienCongNo();
			this.afterChangedCongNo.emit();
		}
	}

	ngOnInit() {
		if (this.yeuCauTiepNhanId != undefined && this.yeuCauTiepNhanId != null) {
			this.getYeuCauGoiBenhNhan(this.yeuCauTiepNhanId);
		}

		this.benhNhanId = this.route.snapshot.params.id;
		this.gridColumns = [
			{ Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
			{ Field: "Ma", Title: "Mã", Width: 30, Sortable: false },
			{ Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 100, Sortable: false, Template: this.tenGoiTemplate },
			{ Field: "LoaiGia", Title: "Loại Giá", Width: 70, Sortable: false },
			{ Field: "Soluong", Title: "SL", Width: 50, Sortable: false },
			{ Field: "DonGia", Title: "Đơn giá", Width: 50, Sortable: false, Template: this.donGiaTemplate },
			{ Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate },
			{ Field: "DonGiaBHYT", Title: "BHYT", Width: 80, Sortable: false, Template: this.donGiaBHYTTemplate, TemplateFooter: this.bhytGroupFooter },
			{ Field: "SoTienQuyetToan", Title: "Số Tiền quyết toán", Width: 150, Sortable: false, Template: this.soTienTraLaiBNTemplate, TemplateFooter: this.soTienTraLaiBNGroupFooter },
			{ Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 130, Sortable: false },
		];
	}

	public total(field: any) {
		switch (field) {
			case "SoTienQuyetToan":
				return this.XuLyTotalForField("SoTienQuyetToan");
				break;
			case "ThanhTien":
				return this.XuLyTotalForField("ThanhTien");
				break;
			case "DonGiaBHYT":
				return this.XuLyTotalForField("DonGiaBHYT");
				break;
			case "BHYTThanhToan":
				return this.XuLyTotalForField("BHYTThanhToan");
				break;
		}
	}

	XuLyTotalForField(field: any) {
		let sum = 0;
		this.goiChuaQuyetToanMarketing.forEach(element => {
			if (element.CheckedDefault) {
				switch (field) {
					case "SoTienQuyetToan":
						sum = sum + element.SoTienQuyetToan;
						break;
					case "ThanhTien":
						sum = sum + element.ThanhTien;
						break;
					case "DonGiaBHYT":
						sum = sum + element.DonGiaBHYT;
						break;
					case "BHYTThanhToan":
						sum = sum + element.BHYTThanhToan;
						break;
				}
			}
		});
		return sum;
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

	async getYeuCauGoiBenhNhan(id) {
		this.showLoadingPopup();

		let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
		let responseThongTinBenhNhan = await this.baseService.getById<any>(id).toPromise();

		if (responseThongTinBenhNhan !== undefined && responseThongTinBenhNhan !== null)
			danhSachCongNoChoThu = this.mapCongTyBHTN(responseThongTinBenhNhan);

		if (responseThongTinBenhNhan != undefined && responseThongTinBenhNhan != null) {
			let responseDanhSachThuPhiDichVuNoiTru = await this.apiService.post<any>("ThuNganNoiTru/GetDataDichVuTrongGoiCoBHYTForGrid/" + id).toPromise();
			if (responseDanhSachThuPhiDichVuNoiTru != undefined && responseDanhSachThuPhiDichVuNoiTru != null) {

				this.dataSource.data = responseDanhSachThuPhiDichVuNoiTru.Data;
				this.goiChuaQuyetToanMarketing = responseDanhSachThuPhiDichVuNoiTru.Data;

				if (this.goiChuaQuyetToanMarketing.length > 0 && danhSachCongNoChoThu.CongNoChoThus.length > 0) {
					for (let index = 0; index < this.goiChuaQuyetToanMarketing.length; index++) {

						let dsDanhSachCongNoChoThus = this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus;
						this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus = [];

						for (let subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
							let soTienCongNoChoThuByTheoCongTy = dsDanhSachCongNoChoThus.filter(c =>
								c.CongTyBaoHiemTuNhanId == danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId)
								.reduce((sum, item) => sum + item.SoTienCongNoChoThu, 0);

							let congNoItem = new CongNoChoThu();
							congNoItem.CongTyBaoHiemTuNhanId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId;
							congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu = soTienCongNoChoThuByTheoCongTy > 0 ? soTienCongNoChoThuByTheoCongTy : 0;
							congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
							congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
							this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus.push(congNoItem);
						}
					}

					this.danhSachCongNoChoThus = [];
					this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
				}
			}

			this.gridData = process(this.goiChuaQuyetToanMarketing, this.state);
			this.goiChuaQuyetToanMarketing.filter(element => element.CheckedDefault == true);
			this.danhSachGoiCoBHYT.emit(this.goiChuaQuyetToanMarketing);
			this.setRemoveGroupFooterOnly();
			this.closeAllDialogs();
		}
	}

	soTienBenhNhanCanThanhToan(): number {
		let totalBHYT = 0;
		let totalThanhTien = 0;
		if (this.goiChuaQuyetToanMarketing != undefined && this.goiChuaQuyetToanMarketing != null) {
			this.goiChuaQuyetToanMarketing.forEach(element => {
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
		if (this.goiChuaQuyetToanMarketing != undefined && this.thongTinCongTyBaoHiemTuNhans != null) {
			for (let index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
				totalCongNoThanhToan += this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
			}
		}
		return totalCongNoThanhToan;
	}

	tinhTienCongNo(itemThanhTien, itemBHYTThanhToan, congNoId, totalTT, congNoTruocDos): number {
		let totalCongNo = 0;
		if (this.thongTinCongTyBaoHiemTuNhans != undefined && this.thongTinCongTyBaoHiemTuNhans != null) {
			totalCongNo = this.thongTinCongTyBaoHiemTuNhans.filter(item => item.Id == congNoId).reduce((sum, item) => sum + item.SoTienCongNo, 0);
		}
		return totalCongNo == 0 ? totalCongNo :
			Math.round(((totalCongNo / totalTT) * (itemThanhTien - itemBHYTThanhToan)) * 100) / 100;
	}

	bindItemCongTyApDungSoTien() {
		let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
		for (let index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
			let congNo = new CongNoChoThu;
			congNo.ViTri = index;
			congNo.CongTyBaoHiemTuNhanId = this.thongTinCongTyBaoHiemTuNhans[index].Id;
			congNo.TenCongTy = this.thongTinCongTyBaoHiemTuNhans[index].TenCongTy;
			congNo.SoTienCongNoChoThu = 0;
			danhSachCongNoChoThu.CongNoChoThus.push(congNo);
		}
		return danhSachCongNoChoThu;
	}

	bindChiaTienCongNo() {
		let totalTT = this.soTienBenhNhanCanThanhToan();
		let totalCongNo = this.totalCongNo();
		this.danhSachCongNoChoThus = [];

		if (this.goiChuaQuyetToanMarketing.length > 0 && totalCongNo > totalTT) {
			this.notificationService.showError("Số tiền thanh toán công nợ không hợp lệ");
			return;
		}

		if (this.thongTinCongTyBaoHiemTuNhans.length > 0) {
			let danhSachCongNoChoThu = new DanhSachCongNoChoThu;
			danhSachCongNoChoThu = this.bindItemCongTyApDungSoTien();

			var tongCongNo = 0;
			if (danhSachCongNoChoThu.CongNoChoThus.length > 0) {
				for (let index = 0; index < this.goiChuaQuyetToanMarketing.length; index++) {
					if (this.position != -1) {
						this.goiChuaQuyetToanMarketing[index].SoTienQuyetToan =
							(this.goiChuaQuyetToanMarketing[index].ThanhTien - this.goiChuaQuyetToanMarketing[index].BHYTThanhToan);

						if (index != this.goiChuaQuyetToanMarketing.length - 1) {
							if (this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus.length > 0) {
								this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
									danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu =
									this.tinhTienCongNo(this.goiChuaQuyetToanMarketing[index].ThanhTien,
										this.goiChuaQuyetToanMarketing[index].BHYTThanhToan,
										danhSachCongNoChoThu.CongNoChoThus[this.position].CongTyBaoHiemTuNhanId,
										totalTT,
										this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus,
									);

								tongCongNo += this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
							}
						} else {
							this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
								danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu =
								this.thongTinCongTyBaoHiemTuNhans[this.position].SoTienCongNo - tongCongNo;
						}
					}
				}

				this.goiChuaQuyetToanMarketing.forEach(element => {
					if (element.CheckedDefault === true) {
						let totalCongNo = 0;
						element.DanhSachCongNoChoThus.forEach(element => { totalCongNo += element.SoTienCongNoChoThu });
						return element.SoTienQuyetToan = element.ThanhTien - element.BHYTThanhToan - (totalCongNo);
					}
				});

				this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
			}
		}

		this.gridData = process(this.goiChuaQuyetToanMarketing, this.state);
		this.goiChuaQuyetToanMarketing.filter(element => element.CheckedDefault == true);
		this.danhSachGoiCoBHYT.emit(this.goiChuaQuyetToanMarketing);
	}

	setRemoveGroupFooterOnly() {
		setTimeout(function () {
			if (jQuery("#danhSachGoiDVGrid .k-group-footer").length == 1) {
				jQuery("#danhSachGoiDVGrid .k-group-footer").hide();
			} else {
				jQuery("#danhSachGoiDVGrid .k-group-footer").show();
			}
		}, 100);
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
		this.goiChuaQuyetToanMarketing.forEach(element => {
			element.DanhSachCongNoChoThus.forEach(cn => {
				if (cn.CongTyBaoHiemTuNhanId === field) {
					sumItemCongNo += cn.SoTienCongNoChoThu;
				}
			});
		});
		return sumItemCongNo;
	}

	BackToList() {
		this.location.back();
	}

	luuTamChiPhiTrongGoiNoiTru() {
		this.dialog.open(ConfirmComponent, {
			disableClose: false,
			width: '400px',
			data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["lưu tạm chi phí trong gói"]) }
		}).afterClosed().subscribe(result => {
			if (result === 'Yes') {
				let danhSachChiPhiTrongGoi = new DanhSachChiPhiTrongGoi();
				danhSachChiPhiTrongGoi.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus = this.goiChuaQuyetToanMarketing;
				danhSachChiPhiTrongGoi.Id = this.yeuCauTiepNhanId;

				if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
					this.apiService
						.post("ThuNganNoiTru/LuuTamChiPhiNoiTruTrongGoi", danhSachChiPhiTrongGoi).subscribe(
							() => {
								this.notificationService.showSuccess("Lưu tạm chi phí trong gói thành công");
								this.luuTamChiPhiThanhCongTrongGoi.emit(true);
							},
							(err: ApiError) => {
								if (err.Message != "Validation Failed") {
									this.notificationService.showError(err.Message);
								}
							}
						);
				}
				else {
					this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
				}
			}
		});
	}

	modelChangeCongNo(ev: any, data: any, vitri: any) {
		if (ev === undefined && ev === null) {
			data.DanhSachCongNoChoThus[vitri].SoTienCongNoChoThu = 0;
		} else {
			if (data !== undefined && data !== null) {
				data.SoTienQuyetToan = data.ThanhTien - data.DonGiaBHYTThanhToan - ev;
			}
		}

		this.goiChuaQuyetToanMarketing.filter(element => element.CheckedDefault == true);
		this.danhSachGoiCoBHYT.emit(this.goiChuaQuyetToanMarketing);
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
