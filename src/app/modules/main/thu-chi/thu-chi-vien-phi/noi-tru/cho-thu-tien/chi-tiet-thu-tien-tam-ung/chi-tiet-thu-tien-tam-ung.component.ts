import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output, OnChanges, SimpleChanges, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ApiService } from "src/app/core/services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ThuTienTamUng, CommonThuTien, LoaiThanhToan } from "../cho-thu-tien.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ThongTinPhieuPdfPopupComponent } from "../../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import { XacNhanInTrucTiepComponent } from "../../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component";
import { ThongTinDichVuChuaDuocXacNhanComponent } from "../../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component";
import { ThongTinPhieuNoiTruPopupComponent } from "../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";

@Component({
	selector: "app-chi-tiet-thu-tien-tam-ung",
	templateUrl: "./chi-tiet-thu-tien-tam-ung.component.html",
	styleUrls: ["./chi-tiet-thu-tien-tam-ung.component.scss"],
})
export class ChiTietThuTienTamUngComponent implements OnInit, OnChanges {
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

	public setDefeautTienMat: any = [this.commonThuTien.TienMat];
	public loaiThanhToan = new LoaiThanhToan();

	selectItem: number[] = [];
	flagCheckSeletedTienMat: boolean = false;
	flagCheckSeletedChuyenKhoan: boolean = false;
	flagCheckSeletedPos: boolean = false;
	validationErrors: any[] = [];
	documentType: DocumentType;
	tabIndex: number = 0;
	confrim: any = null;
	thuTienTamUng: ThuTienTamUng;

	showCanhBaoSoTienNhap: boolean = false;

	public hinhThucThanhToan: any = [
		{ KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false },
		{ KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false },
		{ KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false },
	];

	@Input() dataSourceChangedTamUng: boolean = false;
	@Output() tienTrongTaiKhoan = new EventEmitter<any>();
	@Input() HoTenBenhNhan: string = null;
	@Input() SoTienThanhToanDV: number = 0;
	@Output() afterChanged = new EventEmitter<any>();

	constructor(private dialog: MatDialog, private apiService: ApiService, private router: Router, private cdRef: ChangeDetectorRef, private notificationService: NotificationService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.idYeuCauTiepNhan = this.route.snapshot.params.id;
		this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
		this.thuTienTamUng = {} as ThuTienTamUng;
		this.selectItem = [1];
		this.defeautSoTien();
		this.flagCheckSeletedTienMat = true;
		this.thuTienTamUng.NgayThuTamUng = new Date();
		this.thuTienTamUng.NoiDungThuTamUng = "Thu tiền khám.";
	}

	onKey(event: any) {
		if (event.keyCode === 13) {
		}
	}

	InPhieuThu() { }

	ngOnChanges(value: SimpleChanges) {
		if (this.dataSourceChangedTamUng == true) {
			this.afterChanged.emit();
		}
	}

	soTienTamUngToiThieu: number = 0;
	getThongTinYeuCauBenhNhan(id) {
		this.apiService.get<any>("ThuNgan/SoTienTamUng/" + id).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.soTienTamUngToiThieu = resultData.SoTienTamUngToiThieu;
				this.tongSoTienTamUng = resultData.SoTienTamUng;
				this.thuTienTamUng.TienMat = this.tongSoTienTamUng;
				let total = this.tongSoTienTamUng;
				this.selectMoney = [total];
			}
		});
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

	getSoDuTaiKhoanBenhNhan(id) {
		this.apiService.get<number>("ThuNgan/SoDuTaiKhoanBenhNhan/" + id).subscribe((resultData) => {
			if (resultData !== null && resultData !== undefined) {
				this.tienTrongTaiKhoan.emit(resultData);
				this.soTienTrongTaiKhoanBenhNhan = resultData;
			}
		});
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

		let duaLaiBenhNhan = false;
		let soTienBenhNhanTra = tongTienThu;
		let hoten = this.HoTenBenhNhan;

		if (this.confrim != null) {
			this.dialog.closeAll();
			this.confrim = null;
		}
		this.confrim = this.dialog
			.open(ThongTinDichVuChuaDuocXacNhanComponent, {
				disableClose: false,
				width: "800px",
				data: { soTienBenhNhanTra, hoten, duaLaiBenhNhan },
			})
			.afterClosed()
			.subscribe((r) => {
				if (r == "Yes") {
					self.apiService.post("ThuNganNoiTru/ThuTienTamUng", this.thuTienTamUng).subscribe(
						(res) => {
							this.notificationService.showSuccess(this.commonThuTien.ShowTienTamUngThanhCong);
							//====================Checked res thành công tra id check id  ====================
							this.getSoDuTaiKhoanBenhNhan(this.idYeuCauTiepNhan);

							if (res != 0) {
								if (res != null && r.res != 0) {
									//====================Chon thông tin tương ứng ta show modal và in phiếu ====================
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
												this.router.navigate(["/danh-sach-thu-tien-noi-tru"], {
													queryParamsHandling: "preserve",
												});
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
			});
	}
	inPhieuPdf(taiKhoanThuId: any, loaiTypes: any) {
		let loading = this.dialog.open(LoadingComponent, {
			disableClose: true,
			width: "200px",
			height: "90px",
			data: { Title: 'Đang tải...' }
		});

		let idYeuCauTiepNhan = this.idYeuCauTiepNhan;
		let taiKhoanChiId = 0;
		let phieuHoanUngIds = "";

		this.dialog
			.open(ThongTinPhieuNoiTruPopupComponent, {
				disableClose: false,
				width: "1000px",
				data: { taiKhoanThuId, taiKhoanChiId, idYeuCauTiepNhan, loaiTypes, phieuHoanUngIds , tamUng: true },
			})
			.afterClosed()
			.subscribe((result) => {
				this.router.navigate(["/danh-sach-thu-tien-noi-tru"], {
					queryParamsHandling: "preserve",
				});
				loading.close();
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

	@HostListener("document:keydown", ["$event"])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode == 83 && event.ctrlKey) {
			// ctrl + s
			if (this.tabIndex == 0) {
				this.ThuTienTamUng();
			}
			event.preventDefault();
		}
	}
}
