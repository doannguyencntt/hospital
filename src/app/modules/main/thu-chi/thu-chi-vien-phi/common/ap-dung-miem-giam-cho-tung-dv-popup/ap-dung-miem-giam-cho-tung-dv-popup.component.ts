import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { NotificationService } from "src/app/core/services/notification.service";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import {
	DanhSachChiPhiKhamChuaBenh,
	DanhSachMienGiamVo,
	LoaiChietKhau,
	LoaiMienGiam,
} from "../../noi-tru/cho-thu-tien/cho-thu-tien.model";
import * as _ from "underscore";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { NoiDungGhiChuMauPopupComponent } from "../noi-dung-ghi-chu-mau-popup/noi-dung-ghi-chu-mau-popup.component";
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
	selector: "ap-dung-miem-giam-cho-tung-dv-popup",
	templateUrl: "./ap-dung-miem-giam-cho-tung-dv-popup.component.html",
	styleUrls: ["./ap-dung-miem-giam-cho-tung-dv-popup.component.scss"],
})

export class ApDungMiemGiamChoTungDichVuComponent implements OnInit {
	icClose = icClose;
	icAdd = icAdd;

	maxSoTienMiemGiamThem: number = 0;
	maxPhanTramMiemGiamThem: number = 0;
	disablePhanTram: boolean = false;
	disableSoTien: boolean = false;
	disableInputPhanTram: boolean = false;
	disableInputSoTien: boolean = false;

	tenDichVu: string = null;
	tongTienTungDichVu: number = 0;
	tongSoTienDuocMiemGiam: number = 0;
	loaiMienGiam = new LoaiMienGiam();
	loaiChietKhau = new LoaiChietKhau();
	tongTatCaSoTienMg: number = 0;
	danhSachMienGiamVos: DanhSachMienGiamVo[] = [];

	danhSachTam: any;
	public isView: boolean = false;
	validationErrors: any;

	format: string = "n2";
	public tiLeBanDau: number = 0;
	public soTienBanDau: number = 0;
	public kiemTraThayDoiSoTienTiLe: boolean = false;
	public firstApDungDauTien: boolean = false;

	public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh;
	tamDanhSachChiPhiKhamChuaBenh = {} as DanhSachChiPhiKhamChuaBenh;
	public documentType: DocumentType = DocumentType.ThuNgan;
	public noiDungGhiChuMiemGiamId: any = null;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public sanitizer: DomSanitizer,
		private notificationService: NotificationService,
		private dialogRef: MatDialogRef<any>,
		private cdRef: ChangeDetectorRef,
		private authService: AuthService,
		private dialog: MatDialog,
	) { }

	ngOnInit() {
		this.tamDanhSachChiPhiKhamChuaBenh = JSON.parse(
			JSON.stringify(this.data.dataItem)
		);

		this.danhSachChiPhiKhamChuaBenh = { ...this.data.dataItem };
		this.bindCheckboxMienGiamThem(this.data.dataItem);
		this.danhSachTam = JSON.parse(JSON.stringify(this.data.dataItem));
		this.tongTienTungDichVu = this.soTienTruocKhiMiemGiam();
		this.tongTienTungDichVu =
			this.tongTienTungDichVu < 0 ? 0 : this.tongTienTungDichVu;
		this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
		this.tenDichVu = this.data.dataItem.TenDichVu;
	}

	resetLaiTongSoTienMG() {
		this.data.dataItem.DanhSachMienGiamVos.forEach((item) => {
			item.TongTienMiemGiam = 0;
		});
	}

	soTienTruocKhiMiemGiam() {
		let thanhTien = this.data.dataItem.DonGia * this.data.dataItem.Soluong;
		return thanhTien - this.data.dataItem.BHYTThanhToan; //	//thanhTien - this.data.dataItem.BHYTThanhToan - soTienCongNo
	}

	changePhanTram(ev: any, item: any) {
		if (ev != undefined && ev != null) {
			item.TiLe = ev;
		} else {
			item.TiLe = 0;
			item.TongTienMiemGiam = 0;
		}
		this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhiKhamChuaBenh);
	}

	changeTien: boolean = false;
	changeSoTien(ev: any, item: any) {
		if (ev != undefined && ev != null) {
			item.SoTien = ev;
		} else {
			item.SoTien = 0;
			item.TongTienMiemGiam = 0;
		}
		this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhiKhamChuaBenh);
	}

	kiemTraTiLeVaSoTien() {
		this.data.dataItem.DanhSachMienGiamVos.forEach((element) => {
			if (element.LoaiMienGiam === 3) {
				if (
					this.firstApDungDauTien &&
					element.TiLe === this.tiLeBanDau &&
					element.SoTien === this.soTienBanDau
				) {
					this.kiemTraThayDoiSoTienTiLe = true;
				}
			}
		});
	}

	apDungPhanTram(ev: any, item: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.disableInputPhanTram = ev;
		this.firstApDungDauTien = true;
		this.kiemTraTiLeVaSoTien();
		this.data.dataItem = { ...this.danhSachChiPhiKhamChuaBenh };
		if (!ev) {
			item.TiLe = 0;
			item.TongTienMiemGiam = 0;
		}
		this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhiKhamChuaBenh);
	}

	apDungSoTien(ev: any, item: any) {
		this.validationErrors = [];
		this.cdRef.detectChanges();
		this.disableInputSoTien = ev;
		this.firstApDungDauTien = true;
		this.kiemTraTiLeVaSoTien();
		this.data.dataItem = { ...this.danhSachChiPhiKhamChuaBenh };

		if (!ev) {
			item.SoTien = 0;
			item.TongTienMiemGiam = 0;
		}

		this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhiKhamChuaBenh);
	}

	resetPhanTram() {
		this.data.dataItem.DanhSachMienGiamVos.forEach((element) => {
			if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
				element.TiLe = 0;
				element.TongTienMiemGiam = 0;
			}
		});
	}

	resetSoTien() {
		this.data.dataItem.DanhSachMienGiamVos.forEach((element) => {
			if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
				element.SoTien = 0;
				element.TongTienMiemGiam = 0;
			}
		});
	}

	replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, "g"), replace);
	}

	resetMGT() {
		this.data.dataItem.DanhSachMienGiamVos.forEach((element) => {
			if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
				element.TiLe = 0;
				element.TongTienMiemGiam = 0;
			}
			if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
				element.SoTien = 0;
				element.TongTieMiemGiam = 0;
			}
		});
	}

	close() {
		this.tamDanhSachChiPhiKhamChuaBenh.apdungMGTThanhCong = false;		
		this.dialogRef.close(this.tamDanhSachChiPhiKhamChuaBenh);
	}

	HuyApDungMGT() {
		this.tamDanhSachChiPhiKhamChuaBenh.apdungMGTThanhCong = false;
		this.dialogRef.close(this.tamDanhSachChiPhiKhamChuaBenh);
	}

	ApDungMGT() {
		this.validationErrors = [];
		this.cdRef.detectChanges();

		if (
			this.disableInputPhanTram ||
			this.disableInputSoTien ||
			this.kiemTraThayDoiSoTienTiLe
		) {
			this.data.dataItem.apdungMGTThanhCong = true;
		} else {
			this.data.dataItem.apdungMGTThanhCong = false;
		}

		if (this.data.dataItem.NoiDungGhiChuMiemGiamId== undefined || this.data.dataItem.NoiDungGhiChuMiemGiamId == null) {
			this.notificationService.showError("Vui lòng chọn lý do miễn giảm");
			return true;
		}

		var kiemTraSoTienMiemGiamThem = this.danhSachChiPhiKhamChuaBenh.DanhSachMienGiamVos.filter(c => c.LoaiMienGiam === 3);
		if (kiemTraSoTienMiemGiamThem[0].SoTien > this.data.dataItem.ThanhTien) {
			this.notificationService.showError(
				"Tổng số tiền miễn giảm lớn hơn số tiền miễn giảm thực tế."
			);
		} else {
			this.dialogRef.close(this.data.dataItem);
		}
	}

	tinhSoTienMiemGiamTiLe(dataItem: DanhSachChiPhiKhamChuaBenh) {
		this.tongTatCaSoTienMg = 0;
		var tiLePhanTramConLai = 100;
		if (this.tongTienTungDichVu !== 0) {
			var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(
				(item) => item.LoaiChietKhau == 1 && item.TiLe != 0
			);
			var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(
				(item) => item.LoaiChietKhau == 2 && item.SoTien != 0
			);
			dsMienGiamTheoSoTien.forEach((item) => {
				this.tongTatCaSoTienMg += item.TongTienMiemGiam;
			});
			if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
				//Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
				dsMienGiamTheoPhanTram = _.sortBy(
					dsMienGiamTheoPhanTram,
					"LoaiMienGiam"
				);
				dsMienGiamTheoPhanTram.forEach((item) => {
					//Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
					item.TongTienMiemGiam =
						this.tongTienTungDichVu !== 0
							? Math.round(
								((item.TiLe * this.tongTienTungDichVu) / 100) * 100
							) / 100
							: 0;
					this.tongTatCaSoTienMg += item.TongTienMiemGiam;
					if (item.TiLe >= tiLePhanTramConLai) {
						tiLePhanTramConLai = 0;
					} else {
						tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
					}
				});
			}
		}
	}

	tinhSoTienMiemGiamSoTienMGT(dataItem: DanhSachChiPhiKhamChuaBenh) {
		this.tongTatCaSoTienMg = 0;
		var soTienConLai = this.tongTienTungDichVu;
		if (this.tongTienTungDichVu !== 0) {
			var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(
				(item) => item.LoaiChietKhau == 2 && item.SoTien != 0
			);
			var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(
				(item) => item.LoaiChietKhau == 1 && item.TiLe != 0
			);
			dsMienGiamTheoPhanTram.forEach((item) => {
				this.tongTatCaSoTienMg += item.TongTienMiemGiam;
			});
			if (dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
				//miễm giảm sô tiền nhâp thoải mái
				dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, "LoaiMienGiam");
				dsMienGiamTheoSoTien.forEach((item) => {
					if (item.SoTien >= soTienConLai) {
						soTienConLai = 0;
					} else {
						soTienConLai = soTienConLai - item.SoTien;
					}
					item.TongTienMiemGiam =
						this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
					this.tongTatCaSoTienMg += item.TongTienMiemGiam;
				});
			}
		}
	}

	// Các bác vô làm sao nhớ chổ này làm tròn 2 số sau số 2 số Example 22342.341 ==> 22342.34
	tinhSoTienMiemGiam(dataItem: DanhSachChiPhiKhamChuaBenh) {
		this.tongTatCaSoTienMg = 0;
		var tiLePhanTramConLai = 100;
		var soTienConLai = this.tongTienTungDichVu;
		var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(
			(item) => item.LoaiChietKhau == 1 && item.TiLe != 0
		);
		var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(
			(item) => item.LoaiChietKhau == 2 && item.SoTien != 0
		);
		if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
			//Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
			dsMienGiamTheoPhanTram = _.sortBy(dsMienGiamTheoPhanTram, "LoaiMienGiam");
			dsMienGiamTheoPhanTram.forEach((item) => {
				//Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
				if (tiLePhanTramConLai > 0) {
					item.TiLe =
						item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
				} else {
					item.TiLe = 0;
				}
				item.TongTienMiemGiam =
					this.tongTienTungDichVu !== 0
						? Math.round(((item.TiLe * this.tongTienTungDichVu) / 100) * 100) /
						100
						: 0;
				this.tongTatCaSoTienMg += item.TongTienMiemGiam;
				if (item.TiLe >= tiLePhanTramConLai) {
					tiLePhanTramConLai = 0;
				} else {
					tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
				}
			});
		}
		if (
			tiLePhanTramConLai > 0 &&
			dsMienGiamTheoSoTien != null &&
			dsMienGiamTheoSoTien.length > 0
		) {
			tiLePhanTramConLai =
				dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0
					? tiLePhanTramConLai
					: 0;
			soTienConLai =
				tiLePhanTramConLai != 0
					? (dataItem.ThanhTien * tiLePhanTramConLai) / 100
					: dataItem.ThanhTien;
			//Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
			dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, "LoaiMienGiam");
			dsMienGiamTheoSoTien.forEach((item) => {
				//Nếu số tiền còn lại sau khi đổ từ trên xuống
				if (soTienConLai > 0) {
					item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
				} else {
					item.SoTien = 0;
				}
				item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
				this.tongTatCaSoTienMg += item.TongTienMiemGiam;
				if (item.SoTien >= soTienConLai) {
					soTienConLai = 0;
				} else {
					soTienConLai = soTienConLai - item.SoTien;
				}
			});
		}
	}

	//=====================Xử lý miễn giảm thêm bind giá trị miễm giám thêm và checkbox =================================
	bindCheckboxMienGiamThem(dataItem: DanhSachChiPhiKhamChuaBenh) {
		dataItem.DanhSachMienGiamVos.filter(
			(item) => item.LoaiMienGiam === 3
		).forEach((item) => {
			if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoTiLe) {
				if (item.TiLe != null && item.TiLe != 0) {
					this.disablePhanTram = true;
					this.disableInputPhanTram = true;
					this.tiLeBanDau = item.TiLe;
				} else {
					this.disablePhanTram = false;
					this.disableInputPhanTram = false;
					item.TongTienMiemGiam = 0;
				}
			}
			if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoSoTien) {
				if (item.SoTien != null && item.SoTien != 0) {
					this.disableSoTien = true;
					this.disableInputSoTien = true;
					this.soTienBanDau = item.SoTien;
				} else {
					this.disableSoTien = false;
					this.disableInputSoTien = false;
					item.TongTienMiemGiam = 0;
				}
			}
		});
	}


	showPopupGhiChuMiemGiam() {
		if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
			this.dialog.open(NoiDungGhiChuMauPopupComponent, {
				disableClose: false,
				width: '1400px',
				// data: { "LoaiBenhAn": this.LoaiBenhAn }
			}).afterClosed().subscribe(result => {
			});
		}
		else {
			this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
		}
	}

	selectionChonNoiDungMiemGiam(event: any) {
		if (event != undefined && event != null) {
			this.data.dataItem.NoiDungGhiChuMiemGiamId = event.KeyId;
			this.data.dataItem.GhiChuMienGiamThem = event.NoiDungMiemGiam;
		} else {
			this.data.dataItem.NoiDungGhiChuMiemGiamId = null;
			this.data.dataItem.GhiChuMienGiamThem = null;
		}
	}

}
