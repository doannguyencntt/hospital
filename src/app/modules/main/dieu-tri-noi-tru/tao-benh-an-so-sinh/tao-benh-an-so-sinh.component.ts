import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseService } from "src/app/core/services/base.service";
import { ApiService } from "src/app/core/services/api.service";
import { MatDialog } from "@angular/material";
import { LookupItemChuyenKhoaVo, ThongTinBenhAnMe } from "./tao-benh-an-so-sinh.model";
import { LookupItemVo } from "src/app/shared/models/common.model";
import { ChiTietDieuTriNoiTruViewModel, DacDiemTreSoSinh, DieuTriNoiTru, TaoBenhAnSoSinhKhacKhoa, ThongTinTheoDoiSoSinhDuocChon } from "../dieu-tri-noi-tru.model";
import { ThongTinDoiTuongSoSinhTiepNhan } from "../tiep-nhan-noi-tru/tiep-nhan-noi-tru.model";
import { ComboboxComponent } from "src/app/shared/component/dropdowns/combobox/combobox.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { CommonService } from "src/app/core/utilities/common.helper";
import { TiepNhanNoiTruChiDinhPopupComponent } from "../tiep-nhan-noi-tru/tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component";

@Component({
	selector: "app-tao-benh-an-so-sinh",
	templateUrl: "./tao-benh-an-so-sinh.component.html",
	styleUrls: ["./tao-benh-an-so-sinh.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TaoBenhAnSoSinhComponent implements OnInit {
	tiepNhanBenhNhan: ThongTinDoiTuongSoSinhTiepNhan = new ThongTinDoiTuongSoSinhTiepNhan();
	validationErrors: any;
	popupLoadingData: any;
	dataThongTinBenhAnMe: any;
	thongTinHanhChinhBenhAnMe: any;
	dataKhoaPhongChuyenVe: any;

	public currentKhoaPhongChuyenVe: LookupItemChuyenKhoaVo = new LookupItemChuyenKhoaVo();
	public thongTinBenhAnMe: ThongTinBenhAnMe = new ThongTinBenhAnMe();
	documentType: DocumentType = DocumentType.TaoBenhAnSoSinh;

	dieuTriNoiTru: ChiTietDieuTriNoiTruViewModel = new ChiTietDieuTriNoiTruViewModel();
	dacDiemTreSoSinh: DacDiemTreSoSinh = new DacDiemTreSoSinh();
	public apGarSelectItems: any = [
		{ KeyId: 1, DisplayName: "1 phút" },
		{ KeyId: 2, DisplayName: "5 phút" },
		{ KeyId: 3, DisplayName: "10 phút" },
	];

	dataSource: any = {
		data: [],
		total: 0
	}
	thongTinTheoDoiSoSinhDuocChon: ThongTinTheoDoiSoSinhDuocChon = new ThongTinTheoDoiSoSinhDuocChon();
	@ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
	@ViewChild('comboboxKhoaChuyenBenhAnSoSinhVe', { static: true }) comboboxKhoaChuyenBenhAnSoSinhVe: ComboboxComponent;
	@ViewChild('comboboxChonBA', { static: true }) comboboxChonBA: ComboboxComponent;
	@ViewChild('cboQuanHuyenNguoiLienHe', { static: true }) cboQuanHuyenNguoiLienHe: ComboboxComponent;

	constructor(private route: ActivatedRoute, private authService: AuthService, private notificationService: NotificationService,
		private baseService: BaseService, private apiService: ApiService, private dialog: MatDialog,private cdRef: ChangeDetectorRef) { }


	ngOnInit() {
		this.getKhoaPhongChuyenVe();
		this.tiepNhanBenhNhan.NgayThangNamSinh = this.dacDiemTreSoSinh.DeLuc;
	}

	getThongTinBenhAnMe(yeuCauTiepNhanId: number) {
		this.showPopupLoadingData();
		this.apiService
			.get<any>("DieuTriNoiTru/GetThongTinTiepNhanBenhAnMe?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
			.subscribe(
				(resultData) => {
					this.tiepNhanBenhNhan = resultData;
					this.tiepNhanBenhNhan.NgayThangNamSinh = this.dacDiemTreSoSinh.DeLuc;
					this.getKhoaPhongChuyenVe();
					this.closePopupLoadingData();
				},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
					this.closePopupLoadingData();
				}
			);
	}

	getChonBenhAnMe() {
		this.apiService.post<any>("DieuTriNoiTru/ChonBenhAnMe").subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.dataThongTinBenhAnMe = resultData;
				//this.comboboxChonBA.getDataForLookup();
			}
		});
	}

	getKhoaPhongChuyenVe() {
		this.apiService.post<any>("DieuTriNoiTru/KhoaChuyenBenhAnSoSinhVe").subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.dataKhoaPhongChuyenVe = resultData;
				this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = resultData[0].KeyId;
				this.currentKhoaPhongChuyenVe.KeyId = resultData[0].KeyId;
				this.currentKhoaPhongChuyenVe.DisplayName = resultData[0].DisplayName;
			}
		});
	}


	getThongTinHanhChinh(id: number) {
		this.apiService.get<any>("DieuTriNoiTru/" + id).subscribe(resultData => {
			if (resultData !== null && resultData !== undefined) {
				this.dieuTriNoiTru = resultData;
				this.getThongTinBenhAnMe(id);
			}
		});
	}

	selectionChangeBenhAnMe(dateItem: any) {
		if (dateItem != undefined && dateItem != null) {
			this.thongTinBenhAnMe.KeyId = dateItem.KeyId;
			this.thongTinBenhAnMe.DisplayName = dateItem.DisplayName;
			this.getThongTinHanhChinh(dateItem.Id);
		}
	}
	TinhThanhPhoChange(event) {
		if (event == undefined || event == null) {
			this.tiepNhanBenhNhan.QuanHuyenId = null;
			this.tiepNhanBenhNhan.PhuongXaId = null;
		}
		else {
			this.comboboxQuanHuyen.getDataForLookup();
		}
	}

	QuanHuyenChange(event) {
		if (event == undefined || event == null) {
			// this.tiepNhanBenhNhan.QuanHuyenId = event;
			this.tiepNhanBenhNhan.PhuongXaId = null;
		}
	}

	PhuongXaChange($event) {
		this.tiepNhanBenhNhan.PhuongXaId = $event;
		if ($event != null && $event != undefined) {
			this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
				resultData => {
					this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
					this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
					this.comboboxQuanHuyen.getDataForLookup();
				},
				(err: any) => {
				});
		}
		else {
			this.tiepNhanBenhNhan.TinhThanhId = null;
			this.tiepNhanBenhNhan.QuanHuyenId = null;
		}
	}

	TinhThanhPhoNguoiLienHeChange(event) {
		if (event == undefined || event == null) {
			this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
			this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
		}
		else {
			this.cboQuanHuyenNguoiLienHe.getDataForLookup();
		}
	}

	QuanHuyenNguoiLienHeChange(event) {
		if (event == undefined || event == null) {
			this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
		}
	}

	PhuongXaNguoiLienHeChange(event) {
		if (event != null && event != undefined) {
			this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
				resultData => {
					this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
					this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
					this.cboQuanHuyenNguoiLienHe.getDataForLookup();
				},
				(err: any) => {
				});
		}
	}

	showPopupLoadingData() {
		if (this.popupLoadingData == undefined
			|| this.popupLoadingData == null
			|| this.popupLoadingData.openDialogs == undefined
			|| (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
			this.popupLoadingData = this.dialog.open(LoadingComponent, {
				disableClose: true,
				width: "200px",
				height: "90px",
				data: { Title: "Đang tải dữ liệu..." },
			});
		}

	}

	closePopupLoadingData() {
		if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
			this.popupLoadingData.close();
		}
	}	

	xuLyTaoBenhAnSoSinh() {
		this.validationErrors =[];
		this.cdRef.detectChanges();
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
			if (this.thongTinBenhAnMe.KeyId == undefined && this.thongTinBenhAnMe.KeyId == null) {
				this.validationErrors.push({				
					Message: "Vui lòng chọn bệnh án mẹ",
					Field: "YeuCauTiepNhanMeId",
				});
				return;
			}
			if (this.tiepNhanBenhNhan.TenBanDau == undefined && this.tiepNhanBenhNhan.TenBanDau == null) {
					this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
			}else{
				if (this.thongTinBenhAnMe.KeyId != undefined && this.thongTinBenhAnMe.KeyId != null) {
					this.apiService.get<any>("DieuTriNoiTru/BenhAnMeCoConTrungTen?yeuCauTiepNhanBenhAnMeId=" + this.thongTinBenhAnMe.KeyId + "&hoTen=" + this.tiepNhanBenhNhan.TenBanDau).subscribe((resultData) => {
						if (resultData) {
						this.taoBenhAnSoSinh(`<span class="red-text">Đã tạo BA con có tên ${this.tiepNhanBenhNhan.TenBanDau.toUpperCase().bold()} .Bạn có chắc muốn tạo tiếp BA này không?</span>`);
						}
						else {
							this.taoBenhAnSoSinh("Bạn có chắc chắn muốn tạo bệnh án sơ sinh không?");
						}
					});
				}
			}	
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	taoBenhAnSoSinh(message: any) {
		this.dialog.open(ConfirmComponent, {
			disableClose: false,
			width: "400px",
			data: {
				Title: "Xác nhận",
				Message: message
			},
		})
			.afterClosed()
			.subscribe((result) => {
				if (result == "Yes") {
					this.showPopupLoadingData();
					this.validationErrors = [];

					//lưu đăc điểm sơ sinh thành công tạo bệnh án sơ sinh
					if (this.dieuTriNoiTru != undefined && this.dieuTriNoiTru != null) {
						this.LuuDacDiemSoSinhCuaChoBenhAnMeKhacKhoa(this.thongTinBenhAnMe.KeyId);
					}
				}
			});
	}

	LuuDacDiemSoSinhCuaChoBenhAnMeKhacKhoa(yeuCauTiepNhanMeId: number) {
		let taoBenhAnSoSinhKhacKhoa = new TaoBenhAnSoSinhKhacKhoa();
		this.tiepNhanBenhNhan.YeuCauTiepNhanId = this.thongTinBenhAnMe.KeyId;
		taoBenhAnSoSinhKhacKhoa.BenhAnSoSinhChiTietViewModel = this.tiepNhanBenhNhan;
		taoBenhAnSoSinhKhacKhoa.DacDiemTreSoSinh = this.dacDiemTreSoSinh;


		this.apiService.post<any>("DieuTriNoiTru/XuLyTaoBenhAnSoSinhKhacKhoa", taoBenhAnSoSinhKhacKhoa)
			.subscribe(
				(result) => {
					this.closePopupLoadingData();
					this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo bệnh án"]));
					this.xuLyChiDinhEkipVaDichVuGiuong(result.BenhAnSoSinhChiTietViewModel);
					if (result.ResultYeuCauTiepNhanId != undefined && result.ResultYeuCauTiepNhanId != null) {
						this.luuThongTinSoSinhDuocChon(this.thongTinBenhAnMe.YeuCauTiepNhanMeId, result.ResultYeuCauTiepNhanId);
					}
				},
				(err: ApiError) => {
					this.validationErrors = err.ValidationErrors;
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
					this.closePopupLoadingData();
				}
			);
	}

	luuThongTinSoSinhDuocChon(yeuCauTiepNhanMeId: number, yeuCauTiepNhanConId: number) {
		this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanMeId = yeuCauTiepNhanMeId;
		this.thongTinTheoDoiSoSinhDuocChon.YeuCauTiepNhanConId = yeuCauTiepNhanConId;
		this.thongTinTheoDoiSoSinhDuocChon.DacDiemTreSoSinhs.push(this.dacDiemTreSoSinh);
		this.apiService
			.post<any>("DieuTriNoiTru/LuuThongTinSoSinhDuocChon", this.thongTinTheoDoiSoSinhDuocChon)
			.subscribe(
				(resultData) => {

				},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
				}
			);
	}

	selectionChangeKhoaPhongChuyenVe(dataItem: any) {
		if (dataItem != undefined && dataItem != null) {
			this.currentKhoaPhongChuyenVe.KeyId = dataItem.KeyId;
			this.tiepNhanBenhNhan.KhoaChuyenBenhAnSoSinhVeId = dataItem.KeyId;
			this.currentKhoaPhongChuyenVe.DisplayName = dataItem.DisplayName;
		}
	}

	xuLyChiDinhEkipVaDichVuGiuong(yeuCauTiepNhan: any) {
		this.dialog.open(TiepNhanNoiTruChiDinhPopupComponent, {
			disableClose: false,
			width: '1300px',
			data: {
				KhoaId: this.currentKhoaPhongChuyenVe.KeyId,
				TenKhoa: this.currentKhoaPhongChuyenVe.DisplayName,

				// KhoaId: yeuCauTiepNhan.ResultKhoaNhapVienId,
				// TenKhoa: yeuCauTiepNhan.ResultTenKhoaNhapVien,

				YeuCauTiepNhanId: yeuCauTiepNhan.ResultYeuCauTiepNhanId,
				ThoiDiemNhapVien: yeuCauTiepNhan.NgayThangNamSinh,
				KhongCanChiDinhGiuong: yeuCauTiepNhan.ResultKhongCanChiDinhGiuong,
				BenhNhanId: yeuCauTiepNhan.ResultBenhNhanId
			}
		}).afterClosed().subscribe(result => {
			this.huy();
		});
	}
	modelChangeGioiTinh(event: any) {
		if (event === 1) {
			this.tiepNhanBenhNhan.GioiTinh = event;
			this.tiepNhanBenhNhan.GioiTinhDisplay = "Nam";
		}
		if (event === 2) {
			this.tiepNhanBenhNhan.GioiTinh = event;
			this.tiepNhanBenhNhan.GioiTinhDisplay = "Nữ";
		}
	}
	modelChangeGioiTinhTiepNhan(event: any) {
		if (event === 1) {
			this.dacDiemTreSoSinh.GioiTinhId = event;
			this.dacDiemTreSoSinh.GioiTinh = "Trai";
		}
		if (event === 2) {
			this.dacDiemTreSoSinh.GioiTinhId = event;
			this.dacDiemTreSoSinh.GioiTinh = "Gái";
		}
	}

	modelChangeNgaySinh(event: any) {
		this.dacDiemTreSoSinh.DeLuc = event;
	}

	modelChangeDeLuc(event: any) {
		this.tiepNhanBenhNhan.NgayThangNamSinh = event;
	}

	huy() {
		this.getKhoaPhongChuyenVe();
		this.tiepNhanBenhNhan = new ThongTinDoiTuongSoSinhTiepNhan();
		this.dacDiemTreSoSinh = new DacDiemTreSoSinh();
		this.dieuTriNoiTru = new ChiTietDieuTriNoiTruViewModel();
		this.thongTinBenhAnMe.KeyId = null;
		this.thongTinBenhAnMe.DisplayName = null;
	}
}
