import { Component, OnInit, Inject, ChangeDetectorRef, EventEmitter, SimpleChanges } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiError } from "src/app/shared/models/api-error.model";
import * as _ from "underscore";
import { ThongTinDichVuChuaDuocXacNhanComponent } from "../../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component";
import { XacNhanInTrucTiepComponent } from "../../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component";
import { CommonThuTien, ThuTienTamUng } from "../../../ngoai-tru/cho-thu-tien/cho-thu-tien.model";
import { CapNhatDonGiaMoi, DanhSachChiPhiKhamChuaBenh, LoaiThanhToan } from "../cho-thu-tien.model";
import { ThongTinPhieuNoiTruPopupComponent } from "../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";

@Component({
	selector: "app-thu-tam-ung-khi-quyet-toan-popup",
	templateUrl: "./thu-tam-ung-khi-quyet-toan-popup.component.html",
	styleUrls: ["./thu-tam-ung-khi-quyet-toan-popup.component.scss"],
})
export class ThuTamUngKhiQuyetToanComponent implements OnInit {
	public icClose = icClose;

	public idYeuCauTiepNhan: number = 0;
	public seletedTienMat: boolean = true;
	public seletedChuyenKhoan: boolean = true;
	public seletedPos: boolean = true;
	public selectMoney: any[] = null;
	public selectMoneyChuyenKhoan: any[] = null;
	public selectMoneyPos: any[] = null;
	public selectMoneyTienTamUngBNDua: any[] = null;
	public tongSoTienTamUng: number = 0;
	public soTienTrongTaiKhoanBenhNhan: number = 0;
	public commonThuTien = new CommonThuTien();
	loadingPopup: any;
	public setDefeautTienMat: any = [this.commonThuTien.TienMat];

	selectItem: number[] = [];
	flagCheckSeletedTienMat: boolean = false;
	flagCheckSeletedChuyenKhoan: boolean = false;
	flagCheckSeletedPos: boolean = false;
	validationErrors: any[] = [];
	documentType: DocumentType;
	tabIndex: number = 0;
	confrim: any = null;
	thuTienTamUng: ThuTienTamUng;
	hoTenNguoiBenh: string;
	tongTienBNThanhToan: number;

	public loaiThanhToan = new LoaiThanhToan();
	showCanhBaoSoTienNhap: boolean = false;

	public hinhThucThanhToan: any = [
		{ KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false },
		{ KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false },
		{ KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false },
	];
	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
		private dialog: MatDialog, private apiService: ApiService,
		public sanitizer: DomSanitizer, private notificationService: NotificationService,
		private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) { }

	ngOnInit() {
		this.hoTenNguoiBenh = this.data.hoTenNguoiBenh;
		this.tongTienBNThanhToan = this.data.tongTienBNThanhToan;
		this.idYeuCauTiepNhan = this.data.idYeuCauTiepNhan;

		this.thuTienTamUng = {} as ThuTienTamUng;
		this.selectItem = [1];
		this.defeautSoTien();
		this.flagCheckSeletedTienMat = true;
		this.thuTienTamUng.NgayThuTamUng = new Date();
		this.thuTienTamUng.NoiDungThuTamUng = "Thu tiền khám.";
	}

	close() {
		this.dialogRef.close();
	}

	huy() { this.dialogRef.close(); }


	onKey(event: any) {
		if (event.keyCode === 13) {
		}
	}
	
    evtHinhThucThanhToanChanged(event: any) {
        this.showCanhBaoSoTienNhap = false;
        this.clearHinhThucThanhToan();
        this.clearSoTienThanhToan();
    
        event.forEach((item) => {
            switch (item) {
                case this.loaiThanhToan.TienMat:
                    this.flagCheckSeletedTienMat = true;
                    break;
                case this.loaiThanhToan.ChuyenKhoan:
                    this.flagCheckSeletedChuyenKhoan = true;
                    break;
                case this.loaiThanhToan.POS:
                    this.flagCheckSeletedPos = true;
                    break;
            }
        });

        this.hinhThucThanhToan.forEach(item => { item.Change = false; });
    
        //Cập nhật trạng thái chọn
        this.hinhThucThanhToan.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;

                //Nếu chỉ chọn 1 loại HTTT thì số tiền = số tiền phải thu
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case this.loaiThanhToan.TienMat:
                            this.thuTienTamUng.TienMat = this.tongSoTienTamUng;
                            break;
                        case this.loaiThanhToan.ChuyenKhoan:
                            this.thuTienTamUng.ChuyenKhoan = this.tongSoTienTamUng;
                            break;
                        case this.loaiThanhToan.POS:
                            this.thuTienTamUng.POS = this.tongSoTienTamUng;
                            break;
                    }
                }
            } else {
                item.Selected = false;
            }
        });
    }

	clearSoTienThanhToan() {
        this.thuTienTamUng.TienMat = 0;
        this.thuTienTamUng.ChuyenKhoan = 0;
        this.thuTienTamUng.POS = 0;
    }

	clearHinhThucThanhToan() {
		this.flagCheckSeletedTienMat = false;
		this.flagCheckSeletedChuyenKhoan = false;
		this.flagCheckSeletedPos = false;
	}

	//==================================Tính thu tiền và in phiếu thu==================================
	defeautSoTien() {
		this.thuTienTamUng.TienMat = 0;
		this.thuTienTamUng.POS = 0;
		this.thuTienTamUng.ChuyenKhoan = 0;
		this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		this.thuTienTamUng.TienBenhNhanDua = 0;
	}

	kiemTraNhapSoTienTra() {
		let soTienNhapTra = this.thuTienTamUng.ChuyenKhoan + this.thuTienTamUng.POS + this.thuTienTamUng.TienMat;
		if (this.tongSoTienTamUng !== soTienNhapTra) return true;
		return false;
	}

	changeValueTienBenhNhanDua(ev: any) {
		this.thuTienTamUng.TienTraLaiBenhNhan = this.thuTienTamUng.TienBenhNhanDua - this.thuTienTamUng.TienMat;
		if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
			this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		}
	}
	
	evtTienMatChanged(event: any, type: any) {
        let total = this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS;
        this.selectMoney = [total, 0];
    
        this.changeInputsValue(type);
    }

    evtChuyenKhoanChanged(event: any, type: any) {
        let total = this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS;
        this.selectMoneyChuyenKhoan = [total, 0];

        this.changeInputsValue(type);
    }

    evtPOSChanged(event: any, type: any) {
        let total = this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.ChuyenKhoan;
        this.selectMoneyPos = [total, 0];
    
        this.changeInputsValue(type);
    }

	changeInputsValue(type: number) {
		if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
			this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		}

		this.hinhThucThanhToan.forEach(item => {
			if (item.KeyId == type) {
				item.Change = true;
			}
		});

		var itemNotChanges = this.hinhThucThanhToan.filter(o => o.Selected == true && o.Change == false);

		if (itemNotChanges.length == 1) {
			this.changeSoTien(itemNotChanges[0].KeyId);
		} else {
			if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(o => o.Selected == true).length == 2) {
				var items = this.hinhThucThanhToan.filter(o => o.Selected == true && o.KeyId != type);
				this.changeSoTien(items[0].KeyId);
			}
		}

		if (this.thuTienTamUng.TienMat + this.thuTienTamUng.ChuyenKhoan + this.thuTienTamUng.POS > this.tongSoTienTamUng) {
			this.showCanhBaoSoTienNhap = true;
		} else {
			this.showCanhBaoSoTienNhap = false;
		}

		this.changeTienTraLaiBenhNhan();
	}

	changeTienTraLaiBenhNhan() {
		if (this.thuTienTamUng.TienBenhNhanDua > this.thuTienTamUng.TienMat) {
			this.thuTienTamUng.TienTraLaiBenhNhan = this.thuTienTamUng.TienBenhNhanDua - this.thuTienTamUng.TienMat;
		} else {
			this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		}
	}

	changeSoTien(item: any) {
		switch (item) {
			case this.loaiThanhToan.TienMat:
				this.thuTienTamUng.TienMat = (this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS;
				break;
			case this.loaiThanhToan.ChuyenKhoan:
				this.thuTienTamUng.ChuyenKhoan = (this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS;
				break;
			case this.loaiThanhToan.POS:
				this.thuTienTamUng.POS = (this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.TienMat) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.TienMat;
				break;
		}
	}

	modelChangeTienTamUngBNDua(event: any) {
		this.selectMoneyTienTamUngBNDua = [this.tongSoTienTamUng, 100000000000];
		this.thuTienTamUng.TienTraLaiBenhNhan = event - this.thuTienTamUng.TienMat;
		if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
			this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		}
	}

	ThuTienTamUng() {
		var self = this;
		this.validationErrors = [];
		this.cdRef.detectChanges();

		let tongTienThu = this.thuTienTamUng.POS + this.thuTienTamUng.TienMat + this.thuTienTamUng.ChuyenKhoan;
		this.thuTienTamUng.Id = this.idYeuCauTiepNhan;

		if (!this.flagCheckSeletedTienMat && !this.flagCheckSeletedChuyenKhoan && !this.flagCheckSeletedPos) {
			this.notificationService.showError(this.commonThuTien.VuiLongChonHTTT);
			return true;
		}

		if (this.kiemTraNhapSoTienTra()) {
			this.notificationService.showError(this.commonThuTien.ErrorSoTienNhapKhongDung);
			return true;
		}

		if (tongTienThu == 0) {
			this.notificationService.showError(this.commonThuTien.ErrorKiemTraSoTienTamUng);
			return true;
		}

		if (this.flagCheckSeletedTienMat) {
			if (this.thuTienTamUng.TienBenhNhanDua != 0 && this.thuTienTamUng.TienBenhNhanDua < this.thuTienTamUng.TienMat) {
				this.notificationService.showError(this.commonThuTien.ErrorSoTienBenhNhanDuaKhongDung);
				return true;
			}
		}

		if (this.thuTienTamUng.NoiDungThuTamUng == "") {
			this.validationErrors.push({
				Message: this.commonThuTien.ErrorNoiDungThuTamUng,
				Field: this.commonThuTien.NoiDungThuTamUng,
			});
			return true;
		}

		self.apiService.post("ThuNganNoiTru/ThuTienTamUng", this.thuTienTamUng).subscribe(
			(res) => {
				this.notificationService.showSuccess(this.commonThuTien.ShowTienTamUngThanhCong);
				//====================Checked res thành công tra id check id  ===================
				if (res != 0) {
					if (res != null ) {
					
						let tk = res;
						this.dialog
							.open(XacNhanInTrucTiepComponent, {
								disableClose: true,
								width: "400px",
								data: "ThuTamUng",
							})
							.afterClosed()
							.subscribe((resulttamung) => {
								if (resulttamung == "Yes") {
									this.inPhieuPdf(tk, "InPhieuThuTamUng");
								} else {
									this.dialogRef.close("Yes");
								}
							});
					}
				}
			},
			(err: ApiError) => {
				this.validationErrors = err.ValidationErrors;
				if (err.Message != "Validation Failed") {
					this.notificationService.showError(err.Message);
				}
			}
		);
	}

	inPhieuPdf(taiKhoanThuId: any, loaiTypes: any) {
		this.showLoadingPopup();

		let idYeuCauTiepNhan = this.idYeuCauTiepNhan;
		let taiKhoanChiId = 0;
		let phieuHoanUngIds = "";

		this.dialog
			.open(ThongTinPhieuNoiTruPopupComponent, {
				disableClose: false,
				width: "1000px",
				data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds },
			})
			.afterClosed()
			.subscribe((result) => {
				this.dialogRef.close("Yes");
				this.closeAllDialogs();
			});
	}

	onValueChangeSoTienTamUng(ev: any) {
		this.thuTienTamUng.TienMat = 0;
		this.thuTienTamUng.POS = 0;
		this.thuTienTamUng.ChuyenKhoan = 0;
		this.thuTienTamUng.TienTraLaiBenhNhan = 0;
		this.thuTienTamUng.TienBenhNhanDua = 0;

		if (this.flagCheckSeletedTienMat === true) {
			this.thuTienTamUng.TienMat = ev;
		}
		if (this.flagCheckSeletedTienMat === false &&
			this.flagCheckSeletedChuyenKhoan === true) {
			this.thuTienTamUng.ChuyenKhoan = ev;
		}
		if (this.flagCheckSeletedChuyenKhoan == false &&
			this.flagCheckSeletedPos === true) {
			this.thuTienTamUng.POS = ev;
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
