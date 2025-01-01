import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import icClose from '@iconify/icons-ic/twotone-close';
import { GoiChuaQuyetToanMarketing, LoaiThanhToan, ThuTienMarketing } from '../cho-thu-tien-goi-marketing.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';


@Component({
    selector: 'app-thu-tien-marketing-popup',
    templateUrl: './thu-tien-marketing-popup.component.html',
    styleUrls: ['./thu-tien-marketing-popup.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ThuTienMarketingPopupComponent implements OnInit {
    documentType: DocumentType = DocumentType.ThuNgan;
    goiChuaQuyetToanMarketing: GoiChuaQuyetToanMarketing[] = [];
    gridColumns: any;

    benhNhanId: number = 0;
    tenBenhNhan: string = "";

    loadingPopup: any;
    validationErrors: any[] = [];
    showCanhBaoSoTienNhap: boolean = false;

    taiKhoanBenhNhanThuId: number = 0;
    thongTinthuTienMarketing: ThuTienMarketing = new ThuTienMarketing();
    soTienChuaThu: number = 0;

    isTienMatSelected: boolean = true;
    isChuyenKhoanSelected: boolean = false;
    isPOSSelected: boolean = false;

    selectMoneyTienMat: any[] = null;
    selectMoneyTienChuyenKhoan: any[] = null;
    selectMoneyTienPOS: any[] = null;
    selectMoneyTienBenhNhanDua: any[] = [];

    loaiThanhToanthuTienMarketing = new LoaiThanhToan();
    hinhThucThanhToanItems: any = [
        { KeyId: this.loaiThanhToanthuTienMarketing.TienMat, DisplayName: this.loaiThanhToanthuTienMarketing.TienMatDisplay, Selected: false, Change: false },
        { KeyId: this.loaiThanhToanthuTienMarketing.ChuyenKhoan, DisplayName: this.loaiThanhToanthuTienMarketing.ChuyenKhoanDisplay, Selected: false, Change: false },
        { KeyId: this.loaiThanhToanthuTienMarketing.POS, DisplayName: this.loaiThanhToanthuTienMarketing.POSDisplay, Selected: false, Change: false }
    ];

    hinhThucThanhToan: any = [this.loaiThanhToanthuTienMarketing.TienMat];

    thuTienMarketing: ThuTienMarketing = new ThuTienMarketing();

    icClose = icClose;


    @ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
    @ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
    @ViewChild('thuLanNayTemplate', { static: true }) thuLanNayTemplate: TemplateRef<any>;
    @ViewChild('tongSoTienThuLanNayGroupFooter', { static: true }) tongSoTienThuLanNayGroupFooter: TemplateRef<any>;
    @ViewChild('chuaThuGroupFooter', { static: true }) chuaThuGroupFooter: TemplateRef<any>;
    @ViewChild('ngungSuDungTemplate', { static: true }) ngungSuDungTemplate: TemplateRef<any>;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog,
        private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef,
        private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) {
        this.taiKhoanBenhNhanThuId = data.taiKhoanBenhNhanThuId;
        this.goiChuaQuyetToanMarketing = data.dataChonThanhToan;
        this.benhNhanId = data.benhNhanId;
        this.tenBenhNhan = data.tenBenhNhan;
    }

    ngOnInit() {
        let tenGoi = [];
        this.goiChuaQuyetToanMarketing.forEach((element) => {
            {
                tenGoi.push(element.TenGoi);
                element.SoTienThuLanNay = element.NgungSuDung ? 0 : element.ChuaThu;

                return (element);
            }
        });
        this.gridColumns = [
            { Field: "TenGoi", Title: "Tên Gói", Width: 100, Sortable: false },
            { Field: "ChuaThu", Title: "Chưa thu", Width: 80, Sortable: false, Template: this.chuaThuTemplate, TemplateFooter: this.chuaThuGroupFooter },
            { Field: "NgungSuDung", Title: "Tạm ngưng", Width: 50, Sortable: false, Template: this.ngungSuDungTemplate },
            { Field: "", Title: "Lần thu này", Width: 80, Sortable: false, Template: this.thuLanNayTemplate, TemplateFooter: this.tongSoTienThuLanNayGroupFooter },
        ];
        this.thuTienMarketing.Id = this.taiKhoanBenhNhanThuId;
        this.thuTienMarketing.NgayThu = new Date();
        this.thuTienMarketing.NoiDungThu = `Thu tiền gói : ${tenGoi.join()}`;
        this.getThongTinthuTienMarketing();
        this.thuTienMarketing.TienMat = this.goiChuaQuyetToanMarketing.reduce((sum, item) => sum + item.SoTienThuLanNay, 0);
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    modelChangeSoTienThuLanNay(event: any, dataItem: any) {
        this.goiChuaQuyetToanMarketing.forEach(element => {
            if (dataItem.Id === element.Id && dataItem.SoTienThuLanNay == undefined && dataItem.SoTienThuLanNay == null) {
                element.SoTienThuLanNay = 0;
            }
        });

        this.showCanhBaoSoTienNhap = false;
        this.clearHinhThucThanhToan();
        this.clearSoTienThanhToan();

        this.thuTienMarketing.TienMat = this.goiChuaQuyetToanMarketing.reduce((sum, item) => sum + item.SoTienThuLanNay, 0);
        this.isTienMatSelected = true;
        this.hinhThucThanhToan = [this.loaiThanhToanthuTienMarketing.TienMat];
    }

    getThongTinthuTienMarketing() {
        if (this.taiKhoanBenhNhanThuId && this.taiKhoanBenhNhanThuId !== 0) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.closeAllDialogs();
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    public total(field: any) {
        switch (field) {
            case 'ChuaThu':
                return this.goiChuaQuyetToanMarketing.reduce((sum, item) => sum + item.ChuaThu, 0);
            case 'SoTienThuLanNay':
                this.soTienChuaThu = this.goiChuaQuyetToanMarketing.reduce((sum, item) => sum + item.SoTienThuLanNay, 0);
                return this.goiChuaQuyetToanMarketing.reduce((sum, item) => sum + item.SoTienThuLanNay, 0);
        }
    }

    huy() {
        this.dialogRef.close(null);
    }

    xuLythuTienMarketing() {
        this.showLoadingPopup();
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.thuTienMarketing.BenhNhanId = this.benhNhanId;
            this.thuTienMarketing.GoiChuaQuyetToanMarketing = this.goiChuaQuyetToanMarketing;

            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: `Bạn chắc chắn muốn thu của người bệnh ${this.tenBenhNhan.toUpperCase().bold()} với số tiền <span class="green-text">${this.soTienChuaThu.toLocaleString("vi-VI").bold()}</span> không?`
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    this.showSavingPopup();
                    this.apiService.put(`ThuNganMarketing/ThuTienBenhNhan`, this.thuTienMarketing).subscribe((taiKhoanBenhNhanThuId: any) => {
                        this.notificationService.showSuccess('Đã thu tiền thành công.');
                        this.closeAllDialogs();
                        this.dialogRef.close(taiKhoanBenhNhanThuId);
                    }, (err: ApiError) => {
                        err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        this.closeAllDialogs();
                    });
                }
                this.closeAllDialogs();
            })


        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            this.closeAllDialogs();
        }
    }

    evtHinhThucThanhToanChanged(event: any) {
        this.showCanhBaoSoTienNhap = false;
        this.clearHinhThucThanhToan();
        this.clearSoTienThanhToan();
        event.forEach((item) => {
            switch (item) {
                case this.loaiThanhToanthuTienMarketing.TienMat:
                    this.isTienMatSelected = true;
                    break;
                case this.loaiThanhToanthuTienMarketing.ChuyenKhoan:
                    this.isChuyenKhoanSelected = true;
                    break;
                case this.loaiThanhToanthuTienMarketing.POS:
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
                        case this.loaiThanhToanthuTienMarketing.TienMat:
                            this.thuTienMarketing.TienMat = this.soTienChuaThu;
                            break;
                        case this.loaiThanhToanthuTienMarketing.ChuyenKhoan:
                            this.thuTienMarketing.ChuyenKhoan = this.soTienChuaThu;
                            break;
                        case this.loaiThanhToanthuTienMarketing.POS:
                            this.thuTienMarketing.POS = this.soTienChuaThu;
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
        this.thuTienMarketing.TienMat = 0;
        this.thuTienMarketing.ChuyenKhoan = 0;
        this.thuTienMarketing.POS = 0;
    }

    evtTienMatChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.thuTienMarketing.ChuyenKhoan - this.thuTienMarketing.POS;
        this.selectMoneyTienMat = [total, 0];

        this.changeInputsValue(type);
    }

    evtChuyenKhoanChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.thuTienMarketing.TienMat - this.thuTienMarketing.POS;
        this.selectMoneyTienChuyenKhoan = [total, 0];

        this.changeInputsValue(type);
    }

    evtPOSChanged(event: any, type: any) {
        let total = this.soTienChuaThu - this.thuTienMarketing.TienMat - this.thuTienMarketing.ChuyenKhoan;
        this.selectMoneyTienPOS = [total, 0];

        this.changeInputsValue(type);
    }

    changeInputsValue(type: number) {
        if (this.thuTienMarketing.TienTraLaiBenhNhan < 0) {
            this.thuTienMarketing.TienTraLaiBenhNhan = 0;
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

        if (this.thuTienMarketing.TienMat + this.thuTienMarketing.ChuyenKhoan + this.thuTienMarketing.POS > this.soTienChuaThu) {
            this.showCanhBaoSoTienNhap = true;
        } else {
            this.showCanhBaoSoTienNhap = false;
        }

        this.changeTienTraLaiBenhNhan();
    }

    changeTienTraLaiBenhNhan() {
        if (this.thuTienMarketing.TienBenhNhanDua > this.thuTienMarketing.TienMat) {
            this.thuTienMarketing.TienTraLaiBenhNhan = this.thuTienMarketing.TienBenhNhanDua - this.thuTienMarketing.TienMat;
        } else {
            this.thuTienMarketing.TienTraLaiBenhNhan = 0;
        }
    }

    changeSoTien(item: any) {
        switch (item) {
            case this.loaiThanhToanthuTienMarketing.TienMat:
                this.thuTienMarketing.TienMat = (this.soTienChuaThu - this.thuTienMarketing.ChuyenKhoan - this.thuTienMarketing.POS) < 0 ? 0 : this.soTienChuaThu - this.thuTienMarketing.ChuyenKhoan - this.thuTienMarketing.POS;
                break;
            case this.loaiThanhToanthuTienMarketing.ChuyenKhoan:
                this.thuTienMarketing.ChuyenKhoan = (this.soTienChuaThu - this.thuTienMarketing.TienMat - this.thuTienMarketing.POS) < 0 ? 0 : this.soTienChuaThu - this.thuTienMarketing.TienMat - this.thuTienMarketing.POS;
                break;
            case this.loaiThanhToanthuTienMarketing.POS:
                this.thuTienMarketing.POS = (this.soTienChuaThu - this.thuTienMarketing.ChuyenKhoan - this.thuTienMarketing.TienMat) < 0 ? 0 : this.soTienChuaThu - this.thuTienMarketing.ChuyenKhoan - this.thuTienMarketing.TienMat;
                break;
        }
    }

    evtTienBenhNhanDuaChanged(evt) {
        this.thuTienMarketing.TienTraLaiBenhNhan = evt && evt > this.soTienChuaThu ? evt - this.soTienChuaThu : 0;
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
