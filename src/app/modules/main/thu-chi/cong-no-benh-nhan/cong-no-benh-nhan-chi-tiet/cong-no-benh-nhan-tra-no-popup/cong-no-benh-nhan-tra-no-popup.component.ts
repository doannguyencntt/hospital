import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoaiThanhToanTraNo, ThongTinTraNo, TraNo } from '../../cong-no-benh-nhan.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-cong-no-benh-nhan-tra-no-popup',
    templateUrl: './cong-no-benh-nhan-tra-no-popup.component.html',
    styleUrls: ['./cong-no-benh-nhan-tra-no-popup.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CongNoBenhNhanTraNoPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.CongNoBenhNhan;
    loadingPopup: any;
    validationErrors: any[] = [];
    showCanhBaoSoTienNhap: boolean = false;

    taiKhoanBenhNhanThuId: number = 0;
    thongTinTraNo: ThongTinTraNo = new ThongTinTraNo();
    soTienChuaThu: number = 0;

    isTienMatSelected: boolean = true;
    isChuyenKhoanSelected: boolean = false;
    isPOSSelected: boolean = false;

    selectMoneyTienMat: any[] = null;
    selectMoneyTienChuyenKhoan: any[] = null;
    selectMoneyTienPOS: any[] = null;
    selectMoneyTienBenhNhanDua: any[] = [];

    loaiThanhToanTraNo = new LoaiThanhToanTraNo();
    hinhThucThanhToanItems: any = [
        { KeyId: this.loaiThanhToanTraNo.TienMat, DisplayName: this.loaiThanhToanTraNo.TienMatDisplay, Selected: false, Change: false },
        { KeyId: this.loaiThanhToanTraNo.ChuyenKhoan, DisplayName: this.loaiThanhToanTraNo.ChuyenKhoanDisplay, Selected: false, Change: false },
        { KeyId: this.loaiThanhToanTraNo.POS, DisplayName: this.loaiThanhToanTraNo.POSDisplay, Selected: false, Change: false }
    ];
    hinhThucThanhToan: any = [this.loaiThanhToanTraNo.TienMat];

    traNo: TraNo = new TraNo();

	icClose = icClose;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog, private dialogRef: MatDialogRef<CongNoBenhNhanTraNoPopupComponent>,
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { 
        this.taiKhoanBenhNhanThuId = data.taiKhoanBenhNhanThuId;
    }

    ngOnInit() {
        this.traNo.Id = this.taiKhoanBenhNhanThuId;
        this.traNo.NgayThu = new Date();
        this.traNo.NoiDungThu = 'Thu tiền công nợ';

        this.getThongTinTraNo();
    }

    getThongTinTraNo() {
        if(this.taiKhoanBenhNhanThuId && this.taiKhoanBenhNhanThuId !== 0) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.showLoadingPopup();
    
                this.apiService.get(`CongNoBenhNhan/GetThongTinTraNo?taiKhoanBenhNhanThuId=${this.taiKhoanBenhNhanThuId}`).subscribe((res: any) => {
                    if(res) {
                        this.thongTinTraNo = res;
                        this.soTienChuaThu = res.SoTienChuaThu;
                        this.traNo.TienMat = res.SoTienChuaThu;
                        this.selectMoneyTienBenhNhanDua = [res.SoTienChuaThu, 100000000000];
                    }
                    
                    this.closeAllDialogs();
                }, (err: ApiError) => {
                    err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    this.closeAllDialogs();
                });
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    huy() {
        this.dialogRef.close('false');
    }

    xuLyTraNo() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            let tongTien = this.traNo.TienMat + this.traNo.ChuyenKhoan + this.traNo.POS;

            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: `Bạn chắc chắn muốn thu của người bệnh ${this.thongTinTraNo.TenBenhNhan.toUpperCase().bold()} với số tiền <span class="green-text">${tongTien.toLocaleString("vi-VI").bold()}</span> không?`
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.showSavingPopup();

                    this.apiService.post(`CongNoBenhNhan/ThuTienTraNo`, this.traNo).subscribe((taiKhoanBenhNhanThuId: any) => {
                        this.notificationService.showSuccess('Đã thu tiền thành công.');
                        this.closeAllDialogs();
                        this.dialogRef.close(taiKhoanBenhNhanThuId);
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    });
                }
            })
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    evtHinhThucThanhToanChanged(event: any) {
        this.showCanhBaoSoTienNhap = false;
        this.clearHinhThucThanhToan();
        this.clearSoTienThanhToan();
    
        event.forEach((item) => {
            switch (item) {
                case this.loaiThanhToanTraNo.TienMat:
                    this.isTienMatSelected = true;
                    break;
                case this.loaiThanhToanTraNo.ChuyenKhoan:
                    this.isChuyenKhoanSelected = true;
                    break;
                case this.loaiThanhToanTraNo.POS:
                    this.isPOSSelected = true;
                    break;
            }
        });

        this.hinhThucThanhToanItems.forEach(item => { item.Change = false; });
    
        //Cập nhật trạng thái chọn
        this.hinhThucThanhToanItems.forEach(item => {
            if (event.filter(o => o == item.KeyId).length > 0) {
                item.Selected = true;

                //Nếu chỉ chọn 1 loại HTTT thì số tiền = số tiền phải thu
                if (event.length == 1) {
                    switch (item.KeyId) {
                        case this.loaiThanhToanTraNo.TienMat:
                            this.traNo.TienMat = this.soTienChuaThu;
                            break;
                        case this.loaiThanhToanTraNo.ChuyenKhoan:
                            this.traNo.ChuyenKhoan = this.soTienChuaThu;
                            break;
                        case this.loaiThanhToanTraNo.POS:
                            this.traNo.POS = this.soTienChuaThu;
                            break;
                    }
                }
            } else {
                item.Selected = false;
            }
        });
    }

    clearHinhThucThanhToan() {
        this.isTienMatSelected = false;
        this.isChuyenKhoanSelected = false;
        this.isPOSSelected = false;
    }

    clearSoTienThanhToan() {
        this.traNo.TienMat = 0;
        this.traNo.ChuyenKhoan = 0;
        this.traNo.POS = 0;
    }

    evtTienMatChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.traNo.ChuyenKhoan - this.traNo.POS;
        this.selectMoneyTienMat = [total, 0];
    
        this.changeInputsValue(type);
    }

    evtChuyenKhoanChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.traNo.TienMat - this.traNo.POS;
        this.selectMoneyTienChuyenKhoan = [total, 0];

        this.changeInputsValue(type);
    }

    evtPOSChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.traNo.TienMat - this.traNo.ChuyenKhoan;
        this.selectMoneyTienPOS = [total, 0];
    
        this.changeInputsValue(type);
    }

    changeInputsValue(type: number) {
        if (this.traNo.TienTraLaiBenhNhan < 0) {
            this.traNo.TienTraLaiBenhNhan = 0;
        }
        
        this.hinhThucThanhToanItems.forEach(item => {
            if (item.KeyId == type) {
                item.Change = true;
            }
        });

        var itemNotChanges = this.hinhThucThanhToanItems.filter(o => o.Selected == true && o.Change == false);

        if (itemNotChanges.length == 1) {
            this.changeSoTien(itemNotChanges[0].KeyId);
        } else {
            if (itemNotChanges.length == 0 && this.hinhThucThanhToanItems.filter(o => o.Selected == true).length == 2) {
                var items = this.hinhThucThanhToanItems.filter(o => o.Selected == true && o.KeyId != type);
                this.changeSoTien(items[0].KeyId);
            }
        }

        if (this.traNo.TienMat + this.traNo.ChuyenKhoan + this.traNo.POS > this.soTienChuaThu) {
            this.showCanhBaoSoTienNhap = true;
        } else {
            this.showCanhBaoSoTienNhap = false;
        }

        this.changeTienTraLaiBenhNhan();
    }

    changeTienTraLaiBenhNhan() {
        if (this.traNo.TienBenhNhanDua > this.traNo.TienMat) {
            this.traNo.TienTraLaiBenhNhan = this.traNo.TienBenhNhanDua - this.traNo.TienMat;
        } else {
            this.traNo.TienTraLaiBenhNhan = 0;
        }
    }

    changeSoTien(item: any) {
        switch (item) {
            case this.loaiThanhToanTraNo.TienMat:
                this.traNo.TienMat = (this.soTienChuaThu - this.traNo.ChuyenKhoan - this.traNo.POS) < 0 ? 0 : this.soTienChuaThu - this.traNo.ChuyenKhoan - this.traNo.POS;
                break;
            case this.loaiThanhToanTraNo.ChuyenKhoan:
                this.traNo.ChuyenKhoan = (this.soTienChuaThu - this.traNo.TienMat - this.traNo.POS) < 0 ? 0 : this.soTienChuaThu - this.traNo.TienMat - this.traNo.POS;
                break;
            case this.loaiThanhToanTraNo.POS:
                this.traNo.POS = (this.soTienChuaThu - this.traNo.ChuyenKhoan - this.traNo.TienMat) < 0 ? 0 : this.soTienChuaThu - this.traNo.ChuyenKhoan - this.traNo.TienMat;
                break;
        }
    }

    evtTienBenhNhanDuaChanged(evt) {
        this.traNo.TienTraLaiBenhNhan = evt && evt > this.soTienChuaThu ? evt - this.soTienChuaThu : 0;
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
