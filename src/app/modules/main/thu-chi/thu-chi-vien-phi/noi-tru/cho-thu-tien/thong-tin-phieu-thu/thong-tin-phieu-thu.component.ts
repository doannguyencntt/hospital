import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ApiService } from "src/app/core/services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonThuTien, ThongTinHuyPhieu, ThongTinSoPhieuDaThu, TrangThaiThuTienBenhNhan } from "../cho-thu-tien.model";
import icEdit from "@iconify/icons-ic/twotone-edit";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { AuthService } from "src/app/core/services/auth.service";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { XacNhanHuyThuComponent } from "../../../common/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { XacNhanHoanThuComponent } from "../../../common/xac-nhan-hoan-phieu/xac-nhan-hoan-phieu.component";
import { ThongTinPhieuNoiTruPopupComponent } from "../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";

@Component({
	selector: "app-thong-tin-phieu-thu",
	templateUrl: "./thong-tin-phieu-thu.component.html",
	styleUrls: ["./thong-tin-phieu-thu.component.scss"],
})
export class ThongTinPhieuThuComponent implements OnInit {
	@Input() dataSourceChanged: boolean = false;
	@Output() huyThanhCong = new EventEmitter<boolean>();
	@Output() loadingCtThanhCong = new EventEmitter<any>();

	public documentType: DocumentType = DocumentType.ThuNgan;
	public thongTinSoPhieuDaThu = new ThongTinSoPhieuDaThu();
	public yeuCauTiepNhanId: number;
	public icEdit = icEdit;
	public dataSoPhieus: any;
	public commonThuTien = new CommonThuTien();
	public trangThaiThuTienBenhNhan = new TrangThaiThuTienBenhNhan();
	public loadingPopup: any;

	constructor(private route: ActivatedRoute,
		private authService: AuthService,
		private notificationService: NotificationService,
		private apiService: ApiService, private router: Router,
		private dialog: MatDialog) { }

	ngOnInit() {
		this.yeuCauTiepNhanId = this.route.snapshot.params.id;
		if (this.yeuCauTiepNhanId != null && this.yeuCauTiepNhanId != undefined) {
			this.getThongSoPhieu();
		}
	}

	selectionChangeSoPhieu(event: any) {
		if (event != null && event != undefined) {
			this.thongTinSoPhieuDaThu.SoPhieuId = event.KeyId;

			this.thongTinSoPhieuDaThu.LoaiPhieu = event.LoaiPhieu;
			this.thongTinSoPhieuDaThu.TinhTrang = event.TinhTrang;
			this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan = event.LoaiPhieuThuChiThuNgan;

			let loaiPhieuThu = event.LoaiPhieuThuChiThuNgan;
			this.thongTinHuyThanhToan(event.KeyId, loaiPhieuThu);
		} else {
			this.thongTinSoPhieuDaThu = new ThongTinSoPhieuDaThu();
		}
	}

	thongTinHuyThanhToan(keyId: any, loaiPhieuThu: any) {
		this.showLoadingPopup();
		this.apiService.get<ThongTinSoPhieuDaThu>("ThuNganNoiTru/GetThongTinPhieuThu/" + keyId + "/" + loaiPhieuThu).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.thongTinSoPhieuDaThu = resultData;
				this.thongTinSoPhieuDaThu.SoPhieuId = keyId;
				this.thongTinSoPhieuDaThu.TenSoPhieu = resultData.SoPhieu;
				this.dataSourceChanged = true;

				this.loadingCtThanhCong.emit(true);
				this.closeAllDialogs();
			}
		});
	}

	loadingThanhCong(loading: any) {
		if (loading) {
			this.thongTinHuyThanhToan(this.thongTinSoPhieuDaThu.SoPhieuId, this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan);
			this.dataSourceChanged = true;
		}
	}

	getThongSoPhieu() {
		this.apiService.post<any>("ThuNganNoiTru/GetSoPhieu/" + this.yeuCauTiepNhanId).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.dataSoPhieus = resultData;
				if (resultData.length > 0) {
					this.thongTinHuyThanhToan(resultData[0].KeyId, resultData[0].LoaiPhieuThuChiThuNgan);
				}
			}
		});
	}

	bangKeChiPhi(thongTinSoPhieuDaThu: any) {
		this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InCPKhamNoiTru,InBangKeChiPhiGoiKhamChuaBenhStr");
	}

	phieuIn(thongTinSoPhieuDaThu: any) {
		if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.ThuTheoChiPhiNumber) {
			this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InPhieuThu");
		}
		if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.ThuTamUngNumber) {
			this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InPhieuThuTamUng");
		}
		if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.HoanUngNumber) {
			this.inPhieuPdf(0, thongTinSoPhieuDaThu.Id, "InPhieuHoanUng");
		}
		if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.HoanThuNumber) {
			this.inPhieuPdf(0, thongTinSoPhieuDaThu.Id, "InPhieuHoanThu");
		}
	}

	huyPhieuThu(thongTinSoPhieuDaThu: any, thuHoiPhieu: any) {
		let thongTinHuyPhieu = new ThongTinHuyPhieu();
		thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
		thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
		thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
		thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;
		thongTinHuyPhieu.TamUng = this.thongTinSoPhieuDaThu.TamUng;
		thongTinHuyPhieu.ThuTienGoiDichVu = this.thongTinSoPhieuDaThu.ThuTienGoiDichVu;

		let loaiType = 'NoiTru';

		this.dialog
			.open(XacNhanHuyThuComponent, { disableClose: true, width: "800px", data: { thongTinHuyPhieu, thuHoiPhieu, loaiType } })
			.afterClosed()
			.subscribe((res) => {
				if (res != undefined && res != null && res != "") {
					this.huyThanhCong.emit(true);
					this.getThongSoPhieu();
					this.notificationService.showSuccess("Hủy phiếu thu thành công.");
				}
			},
				(err: ApiError) => {
					if (err.Message != "Validation Failed") {
						this.notificationService.showError(err.Message);
					}
				});
	}

	hoanPhieuThu(thongTinSoPhieuDaThu: any) {
		let thuHoiPhieu = false;
		let thongTinHuyPhieu = new ThongTinHuyPhieu();
		thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
		thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
		thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
		thongTinHuyPhieu.LaPhieuChi = this.thongTinSoPhieuDaThu.LaPhieuChi;
		thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;
		thongTinHuyPhieu.TamUng = this.thongTinSoPhieuDaThu.TamUng;
		thongTinHuyPhieu.ThuTienGoiDichVu = this.thongTinSoPhieuDaThu.ThuTienGoiDichVu;
		let loaiType = 'NoiTru';

		this.dialog
			.open(XacNhanHoanThuComponent, { disableClose: true, width: "800px", data: { thongTinHuyPhieu, thuHoiPhieu, loaiType } })
			.afterClosed()
			.subscribe(resultData => {
				if (resultData != undefined && resultData !== null && resultData !== "") {
					this.huyThanhCong.emit(true);
					this.getThongSoPhieu();
					this.notificationService.showSuccess("Hoàn phiếu thu thành công.");
				}
			}, (err: ApiError) => {
				if (err.Message != "Validation Failed") {
					this.notificationService.showError(err.Message);
				}
			});
	}

	inPhieuPdf(taiKhoanThuId: any, taiKhoanChiId: any, loaiTypes: any) {
		this.showLoadingPopup();

		let idYeuCauTiepNhan = this.yeuCauTiepNhanId;
		let phieuHoanUngIds = "";

		this.dialog
			.open(ThongTinPhieuNoiTruPopupComponent, {
				disableClose: false,
				width: "1000px",
				data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
			})
			.afterClosed()
			.subscribe(() => {
				this.closeAllDialogs();
			});
	}

	hoanUngKhongThucHienDV(thongTinSoPhieuDaThu: any) {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
			this.dialog
				.open(ConfirmComponent, {
					disableClose: false,
					width: "400px",
					data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn hoàn ứng số tiền người bệnh này không ?" },
				})
				.afterClosed()
				.subscribe(result => {
					if (result === "Yes") {
						this.apiService.post("ThuNganNoiTru/HoanUngKhongThucHienDichVu/" + thongTinSoPhieuDaThu.Id).subscribe(
							() => {
								this.huyThanhCong.emit(true);
								this.getThongSoPhieu();
								this.notificationService.showSuccess("Hoàn ứng thành công.");
							},
							(err: ApiError) => {
								if (err.Message != "Validation Failed") {
									this.notificationService.showError(err.Message);
								}
							}
						);
					}
				});
		}
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
