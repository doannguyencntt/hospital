import {Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef, HostListener} from "@angular/core";
import {ThongTinBenhNhan, ThuTien, DanhSachCongNo, ThongTinCongTyBaoHiemTuNhans, ThongTinMienGiamTheoDoiTuongUuDai, ThongTinMienGiamVoucher, ThongTinMienGiamThem, ThongTinMienGiamVo, LookupItemVo, TaiLieuDinhKemGiayMiemGiamVo, ThongTinVoucherTheoYeuCauTiepNhan, CommonThuTien, TrangThaiThuTien} from "../cho-thu-tien.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "src/app/core/services/base.service";
import {DsChuaThuTienComponent} from "../ds-chua-thu-tien/ds-chua-thu-tien.component";
import {MatDialog} from "@angular/material/dialog";
import {GridComponent} from "src/app/shared/component/grid/grid.component";
import {ApiService} from "src/app/core/services/api.service";
import icCheck from "@iconify/icons-ic/twotone-check";
import {HttpParams} from "@angular/common/http";
import {NotificationService} from "src/app/core/services/notification.service";
import {ChiTietThuTienTamUngComponent} from "../chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component";
import {MultiselectComponent} from "src/app/shared/component/dropdowns/multiselect/multiselect.component";
import {TabStripComponent} from "@progress/kendo-angular-layout";
import {ViewImagePdfComponent} from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import icSearch from "@iconify/icons-ic/twotone-search";
import {LoadingComponent} from "src/app/shared/component/dialogs/loading/loading.component";
import {TrangThaiDaThuTien} from "../../../noi-tru/cho-thu-tien/cho-thu-tien.model";

@Component({
	selector: "app-thong-tin-chi-tiet-da-thu",
	templateUrl: "./thong-tin-chi-tiet-da-thu.component.html",
	styleUrls: ["./thong-tin-chi-tiet-da-thu.component.scss"],
})
export class ThongTinChiTietDaThuComponent implements OnInit {
	trangThanhToan = new TrangThaiDaThuTien();
	public thongTinBenhNhan: ThongTinBenhNhan;
	public thongTinBenhNhantam: any = [];
	public commonThuTien = new CommonThuTien();
	public trangThaiThanhToan = new TrangThaiThuTien();
	public apDungMiemGiam: boolean = false;
	public thongTinMienGiamVo: ThongTinMienGiamVo;
	public thongTinVoucherTheoYeuCauTiepNhan: ThongTinVoucherTheoYeuCauTiepNhan;
	public thongTinMienGiamTheoDoiTuongUuDai = {} as ThongTinMienGiamTheoDoiTuongUuDai;
	public thongTinMienGiamVoucher = {} as ThongTinMienGiamVoucher;
	public thongTinMienGiamThem = {} as ThongTinMienGiamThem;
	public kiemTraThongTinBaoHiemTN: boolean = false;
	public refreshFlagApDung: boolean = false;
	public showCanhBaoSoTienNhap: boolean = false;
	public loaiVoucher: number = 0;
	public listOldVouchers = [];
	public checkedMGTGiaTri: boolean = true;
	public checkedMGTTiLe: boolean = false;
	public checkHiddenSoTienConLai: boolean = false;
	public selectMoneyTienBNDua: any[] = null;
	public selectMoneyTienMat: any[] = null;
	public selectMoneyTienChuyenKhoan: any[] = null;
	public selectMoneyTienPos: any[] = null;
	public radioThuTien: boolean = true;
	public radioThuTamUng: boolean = false;
	public radioTraLaiBN: boolean = false;
	public radioTraNo: boolean = false;
	public voucherLookupItemVo: Array<LookupItemVo>;
	public idYeuCauTiepNhan: number = 0;
	public loaiThanhToan: number = 0;
	public typeThanhToan: number = 0;
	ktSuDungGoi: number;

	public setDefeautTienMat: any = [this.commonThuTien.TienMat];
	public hinhThucThanhToan: any = [
		{KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false},
		{KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false},
		{KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false},
		{KeyId: this.commonThuTien.CongNo, DisplayName: this.commonThuTien.CongNoText, Selected: false, Change: false},
	];

	allowedExtensions: string[] = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".pdf", ".PDF"];
	icSearch = icSearch;
	tabIndex: number = 0;
	selectedValueThuPhi: string = this.commonThuTien.ThuTien;
	danhsachBHTN: any = [];
	icCheck = icCheck;
	validationErrors: any[] = [];
	documentType: DocumentType;
	soLuongDichVuChuaDuocBHYTXN: number = 0;
	hostingName: string;
	taiKhoanThuId: any;
	dataSourceChanged: boolean = false;
	dataSourceChangedTamUng: boolean = false;
	dataSourceChangedHuyThanhToan: boolean = false;
	dataSourceChangedThuNo: boolean = false;
	danhSachCongNos: DanhSachCongNo[] = [];
	soDuTaiKhoanBenhNhan: number = 0;
	soTienConLaiBenhNhan: number = 0;
	apDungCongNo: boolean = false;
	apCapNhatThanhToan: boolean = false;
	position: number = 0;
	flagShowThongTinMienGiam: boolean = false;
	flagShowDoiTuongUuDai: boolean = false;
	flagEnableVoucher: boolean = false;
	flagEnableMGThem: boolean = false;
	disabledMGThem: boolean = false;
	disabledVoucher: boolean = false;
	disabledTiLeMG: boolean = true;
	disabledSoTienMG: boolean = false;
	flagCheckSeletedTienMat: boolean = false;
	flagCheckSeletedChuyenKhoan: boolean = false;
	flagCheckSeletedPos: boolean = false;
	flagCheckSeletedCongNo: boolean = false;
	checkSeletedTienMat: boolean = false;
	checkSeletedChuyenKhoan: boolean = false;
	checkSeletedPos: boolean = false;
	checkSeletedCongNo: boolean = false;
	arrayThanhToans: any[] = [];
	arrayThanhToanstmp: any[] = [];
	isExistFile: boolean = false;
	flagApDung: boolean = false;
	flagShowDoiTuongUuDaiOrVoucher: boolean = false;
	confrim: any = null;
	standardMG: number = 0;
	listVouchers: number[] = [];
	listTmpVouchers: number[] = [];
	thuNganValidationErrors: any;
	thuTien: ThuTien;
	tongTienBNThanhToan: number = 0;
	danhSachChuaThanhToans = {
		data: [],
		SoTienBenhNhan: 0,
		HoTen: "",
		SoLuongBYHTChuaXN: 0,
	};

	public listVoucherItem: Array<string> = [];
	newBarcode: string = "";
	public value: any = [];
	modelQRCode: any;

	constructor(private route: ActivatedRoute, private dialog: MatDialog, private apiService: ApiService, private router: Router, private cdRef: ChangeDetectorRef, private notificationService: NotificationService, private baseService: BaseService) {
		this.baseService.controllerName = "ThuNgan";
	}

	@ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
	@ViewChild("voucherList", {static: false}) voucherList: MultiselectComponent;
	@ViewChild(DsChuaThuTienComponent, {static: false}) dsChuaThuTienComponent: DsChuaThuTienComponent;
	@ViewChild(ChiTietThuTienTamUngComponent, {static: false}) ChiTietThuTienTamUngComponent: ChiTietThuTienTamUngComponent;
	@ViewChild("actionTemplateSTCongNo", {static: true}) actionTemplateSTCongNo: TemplateRef<any>;
	@ViewChild("actionTemplateSubmitCongNo", {static: true}) actionTemplateSubmitCongNo: TemplateRef<any>;
	@ViewChild("tabDanhSachThuTien", {static: false}) tabDanhSachThuTien: TabStripComponent;
	@ViewChild("multiselect", {static: false}) public multiselect: any;

	gridBaoHiemTNs: any[] = [];
	dataSourceDanhSachBHTN = {
		data: [],
		total: 0,
	};
	dataSourceDanhSachCongNo: any = {
		data: [],
		total: 0,
	};

	public dataCongNo = this.dataSourceDanhSachBHTN.data;
	public taiLieuDinhKemGiayMiemGiamVo = new TaiLieuDinhKemGiayMiemGiamVo();

	ngOnInit() {
		if (window.location.protocol == this.commonThuTien.Http) {
			this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
		} else {
			this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
		}
		this.idYeuCauTiepNhan = this.route.snapshot.params.id;
		this.thongTinBenhNhan = {} as ThongTinBenhNhan;
		this.tongTienBNThanhToan = 0;
		this.selectedValueThuPhi;
		if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && this.route.snapshot.queryParams.loaiThanhToan !== null) {
			this.loaiThanhToan = parseInt(this.route.snapshot.queryParams.loaiThanhToan);
		}
		if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
			this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
			this.GetThongTheVoucher();
			this.kiemTraSuDungGoi();
		}
		
		//Thông tin bảo hiểm tư nhân
		this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
		this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
		this.gridBaoHiemTNs = [
			{Field: "TenCongTy", Title: "Công ty", Width: 200, Sortable: false},
			// {Field: "MaSoThe", Title: "Số thẻ", Width: 50, Sortable: true, ShowTooltip: true},
			// {Field: "TuNgayStr", Title: "Từ ngày", Width: 50, Sortable: true, ShowTooltip: true},
			// {Field: "DenNgayStr", Title: "Đến ngày", Width: 50, Sortable: true, ShowTooltip: true},
			// {Field: "SoDienThoai", Title: "Số điện thoại", Width: 50, Sortable: true, ShowTooltip: true},
			// {Field: "DiaChi", Title: "Địa chỉ", Width: 50, Sortable: true, ShowTooltip: true},
			{Field: "CongNo", Title: "CÔNG NỢ", Width: 150, Sortable: true, Template: this.actionTemplateSTCongNo},
		];
	}

	BackToList() {
		let yctn = this.route.snapshot.queryParams.yctn;
		if (yctn) {
			this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
		} else {
			this.router.navigate(["/danh-sach-thu-tien-noi-tru"], {
				queryParamsHandling: "preserve",
			});
		}
	}

	loadingCtThanhCong(loading: any) {
		if (loading) {
			this.dialog.closeAll();
		}
	}

	getThongTinYeuCauBenhNhan(id) {
		this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: {},
		});
		this.baseService.getById<any>(id).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.thongTinBenhNhan = resultData;
				this.getSoDuTaiKhoanBenhNhan(this.idYeuCauTiepNhan);
				if (resultData.ThongTinCongTyBaoHiemTuNhans.length > 0) {
					this.dataSourceDanhSachBHTN.data = resultData.ThongTinCongTyBaoHiemTuNhans;

					this.kiemTraThongTinBaoHiemTN = true;
					this.apDungCongNo = true;

					//thêm biến tạm cho model công nợ
					this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.forEach(element => {
						var congNoItem = new ThongTinCongTyBaoHiemTuNhans();
						congNoItem.Id = element.Id;
						congNoItem.SoTienCongNo = element.SoTienCongNo;
						congNoItem.TenCongTy = element.TenCongTy;
						this.thongTinBenhNhantam.push(congNoItem);
					});
				} else {
					this.apDungMiemGiam = true;
				}
			}
		});
	}

	kiemTraSuDungGoi() {
		this.apiService.get<any>("ThuNgan/KiemTraSuDungGoi/" + this.idYeuCauTiepNhan).subscribe((resultData) => {
			if (resultData) {
				this.ktSuDungGoi = resultData;
			}
		});
	}

	chiTietGoiMarketing() {
		if (this.ktSuDungGoi != undefined && this.ktSuDungGoi != null) {
			this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/" + this.ktSuDungGoi);
		}
	}

	huyThanhCong(daHuy: boolean) {
		if (daHuy) {
			this.apCapNhatThanhToan = true;
			this.apDungCongNo = true;
			this.getSoDuTaiKhoanBenhNhan(this.idYeuCauTiepNhan);
			this.dataSourceChangedHuyThanhToan = true;
			this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + this.idYeuCauTiepNhan + "?loaiThanhToan=1");
		}
	}

	public totalTienCongNo(field: any) {
		switch (field) {
			case "SoTienCongNo":
				//  this.setLastItem(4);
				return this.dataSourceDanhSachBHTN.data.reduce((sum, item) => sum + item.SoTienCongNo, 0);
		}
	}

	getSoDuTaiKhoanBenhNhan(id: number) {
		this.apiService.get<number>("ThuNgan/SoDuTaiKhoanBenhNhan/" + id).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.soDuTaiKhoanBenhNhan = resultData;
			}
		});

		this.apiService.get<number>("ThuNgan/SoTienUocLuongConLai/" + id).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.soTienConLaiBenhNhan = resultData;
			}
		});
	}

	uploadFileDone(tapTin: any) {
		this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
		if (!(this.cdRef as ViewRef).destroyed) {
			this.cdRef.detectChanges();
		}
		if (tapTin != null) {
			this.thuNganValidationErrors = [];
		}
		if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null) {
			var thongTinMGThem = {
				IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
				TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
			};
			this.apiService.post<any>("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem).subscribe(
				resultData => {
					if (resultData) {
						this.cdRef.detectChanges();
					}
					this.notificationService.showSuccess(this.commonThuTien.ApDungGiayMiemGiamThanhCong);
				},
				() => {}
			);
		}
	}

	onKey(event: any) {
		if (event.keyCode === 13) {
		}
	}

	onKeyTienMatonKeyTienMat() {
		this.thuTien.TienTraLaiBenhNhan = 0;
		this.thuTien.TienBenhNhanDua = 0;
	}

	GetThongTheVoucher() {
		this.value = [];
		this.apiService.get<any>("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + this.idYeuCauTiepNhan).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				resultData.forEach(element => {
					this.value.push(element.DisplayName);
					this.listVoucherItem.push(element.DisplayName);
					this.newBarcode = "";
				});
			}
		});
	}

	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}

	async xemTaiLieu(dataItem) {
		const params = new HttpParams({
			fromObject: {
				tenGuid: dataItem.TenGuid,
				duongDan: dataItem.DuongDan,
			},
		});
		this.apiService.get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe(resp => {
			if (resp) {
				if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "PDF",
							Title: "Xem tài liệu",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				} else {
					this.dialog.open(ViewImagePdfComponent, {
						disableClose: false,
						width: "1000px",
						height: "600px",
						data: {
							Type: "Image",
							Title: "Xem ảnh",
							Description: resp.MoTa !== null ? resp.MoTa : "",
							Src: resp,
						},
					});
				}
			}
		});
	}

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 27 && !event.ctrlKey) {
			this.BackToList();
			event.preventDefault();
		}
	}
}
