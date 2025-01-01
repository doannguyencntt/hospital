import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    ViewChild,
    SimpleChanges,
    OnChanges,
    EventEmitter,
    Output
} from '@angular/core';
import { AccessUser } from 'src/app/shared/models/access-user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { EnumTrangThaiPhauThuatThuThuat } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { PhauThuatThuThuatEkipThucHienComponent } from './pttt-ekip-thuc-hien/pttt-ekip-thuc-hien.component';
import { PhauThuatThuThuatTuongTrinhPTTTComponent } from './pttt-tuong-trinh-pttt/pttt-tuong-trinh-pttt.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { PtttComboboxModel, ComboboxPttt, DisplayLogicModel, ListStatusTabTuongTrinh, ThongTinChiDinhDichVu, TrangThaiYeuCauDichVuKyThuat } from '../../phau-thuat-thu-thuat.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { PhauThuatThuThuatSinhTonComponent } from './pttt-sinh-ton/pttt-sinh-ton.component';
import { HostListener } from '@angular/core';
import { KhongThucHienPtttListPopupComponent } from './khong-thuc-hien-pttt-list-popup/khong-thuc-hien-pttt-list-popup.component';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phau-thuat-thu-thuat-tuong-trinh',
    templateUrl: './phau-thuat-thu-thuat-tuong-trinh.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-tuong-trinh.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PhauThuatThuThuatTuongTrinhComponent implements OnInit, OnChanges {
    currentUser: AccessUser;
    trangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat;
    yctnId = 0;
    ycdvktId = 0;
    isDangPhauThuat = false;
    IsDaTuongTrinh = false;
    IsNotFirstLoading = false;
    queryInfo: LookupQueryInfo = new LookupQueryInfo();
    ptttCombobox = {} as PtttComboboxModel;
    logicDisplay = {} as DisplayLogicModel;
    logicDisplayTt = {} as DisplayLogicModel;
    logicDisplayCsst = {} as DisplayLogicModel;
    ptChinh = null;
    lstKhongThucHien: any;
    documentType: DocumentType;
    lstStatusSelectedTab: ListStatusTabTuongTrinh = new ListStatusTabTuongTrinh();

    isExistPhauThuat: boolean = false;
    isExistDoubleKetLuanVaTheoDoi: boolean = false;
    isTuongTrinhLai: boolean = false;

    thongTinChiDinhDichVu: ThongTinChiDinhDichVu = new ThongTinChiDinhDichVu();

    @ViewChild('lstPtttCmb', { static: false }) lstPtttCmb: ComboboxComponent;
    @ViewChild('ptttSinhTon', { static: false }) ptttSinhTon: PhauThuatThuThuatSinhTonComponent;
    @ViewChild('ekip', { static: false }) ekip: PhauThuatThuThuatEkipThucHienComponent;
    @ViewChild('tuongTrinh', { static: false }) tuongTrinh: PhauThuatThuThuatTuongTrinhPTTTComponent;

    @Input() thongTinBenhNhan: any;

    @Output() showKetLuan: EventEmitter<any> = new EventEmitter<any>();
    @Output() navigateKetLuan: EventEmitter<any> = new EventEmitter<any>();
    @Output() chuyenBenhNhan: EventEmitter<any> = new EventEmitter<any>();
    @Output() chuyenGiaoKetLuanBenhNhan: EventEmitter<any> = new EventEmitter<any>();
    @Output() updateTuongTrinhTabHeader: EventEmitter<any> = new EventEmitter<any>();
    @Output() outputSoDuTaiKhoanChanged = new EventEmitter();
    @Output() outputSoDuTaiKhoanConLaiChanged = new EventEmitter();
    @Output() outputDichVuKhongCanTuongTrinhChanged = new EventEmitter();

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.PhauThuatThuThuatTheoNgay;
        this.currentUser = this.authService.getAccessUser();
        // tslint:disable-next-line: radix
        this.currentUser.PhongBenhVienId = parseInt(this.authService.getPhongLamViecId());
        this.yctnId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        const url = `PhauThuatThuThuat/GetListPtttBn?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.yctnId}&IsTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`;
        this.LoadDsPttt(url, false, false);
        this.GetDvKhongThucHien();
    }

    GetDvKhongThucHien() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get<any>
                // tslint:disable-next-line: max-line-length
                (`PhauThuatThuThuat/GetListTuongTrinhHuy?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.yctnId}&IsTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`)
                .subscribe(res => {
                    if (res != null && res.some(x => x)) {
                        this.lstKhongThucHien = [...res];
                        const dvKhongThucHienHtml = '<p class="decor-dv-ko-thuc-hien">Dv không thực hiện</p>';
                        $('#show-khong-thuc-hien').html(dvKhongThucHienHtml);
                    }
                    if (res != null && !res.some(x => x)) {
                        this.lstKhongThucHien = [];
                        const dvKhongThucHienHtml = '';
                        $('#show-khong-thuc-hien').html(dvKhongThucHienHtml);
                    }
                }, err => {
                    this.notificationService.showError(err.Message);
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.currentUser = this.authService.getAccessUser();
            // tslint:disable-next-line: radix
            this.currentUser.PhongBenhVienId = parseInt(this.authService.getPhongLamViecId());
        }
    }

    deselectedTab() {
        this.lstStatusSelectedTab.selectedTabEkip = false;
        this.lstStatusSelectedTab.selectedTabTuongTrinh = false;
        this.lstStatusSelectedTab.selectedTabVtThuoc = false;
        this.lstStatusSelectedTab.selectedTabCsst = false;
    }

    ShowModal() {
        this.dialog.open(KhongThucHienPtttListPopupComponent, {
            disableClose: true,
            width: '1000px',
            data: this.lstKhongThucHien
        })
            .afterClosed()
            .subscribe();
    }

    OnOpen(isOpen: boolean) {
        if (isOpen) {
            const url = `PhauThuatThuThuat/GetListPtttBn?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.yctnId}&IsTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`;
            this.lstPtttCmb.url = url;
            this.lstPtttCmb.data = null;
            this.lstPtttCmb.queryInfo.Query = null;
            return;
        }
        this.lstPtttCmb.url = '';
    }

    LoadDsPttt(url: string, isAllowOpenKetLuanPopup = true, isAllowBnNext = true, isNotLoadFirstItem = false) {
        $('.wrapBtnLuu').parent().css('display', '');
        $('.wrapBtnLuu').parent().css('justify-content', '');
        $('app-pttt-sinh-ton').parent().parent().css('overflow', '');
        $('.wrapBtnLuu').parent().css('flex-direction', '');
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get<boolean>(`PhauThuatThuThuat/IsExistDoubleKetLuanVaTheoDoi?yeuCauTiepNhanId=${this.yctnId}&phongBenhVienId=${this.currentUser.PhongBenhVienId}`).subscribe(result => {
                this.isExistDoubleKetLuanVaTheoDoi = result;

                this.apiService.get<boolean>(`PhauThuatThuThuat/CheckHasPhauThuat?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.yctnId}&isExistTheoDoi=${ this.isExistDoubleKetLuanVaTheoDoi}`).subscribe(res => {
                    this.isExistPhauThuat = res;

                    this.apiService.post<Array<ComboboxPttt>>(url, this.queryInfo).subscribe(
                        resultData => {
                            if (resultData !== undefined && resultData != null) {
                                this.ptttCombobox.lstPttt = [...resultData];
                                this.deselectedTab();
                                this.lstStatusSelectedTab.selectedTabEkip = true;
        
                                if (this.ptttCombobox != null && this.ptttCombobox.lstPttt.some(x => x)) {
                                    this.getThongTinChiDinhDichVu(this.ptttCombobox.lstPttt[0].KeyId);

                                    this.ptttCombobox.ptttId = this.ptttCombobox.lstPttt[0].KeyId;
                                    this.IsDaTuongTrinh = this.ptttCombobox.lstPttt[0].IsDaTuongTrinh;
                                    this.isTuongTrinhLai = this.ptttCombobox.lstPttt[0].TrangThaiYeuCauDichVuKyThuat == TrangThaiYeuCauDichVuKyThuat.DaThucHien

                                    let displayCombobox = this.ptttCombobox.lstPttt[0].DisplayName;
                                    let bacSiName = this.ptttCombobox.lstPttt[0].BacSi;
        
                                    if (isNotLoadFirstItem) {
                                        this.ptttCombobox.ptttId = this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0] != null ?
                                            this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0].KeyId : 0;
                                        this.IsDaTuongTrinh = this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0] != null ?
                                            this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0].IsDaTuongTrinh : false;
                                        this.isTuongTrinhLai = this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0] != null ?
                                            this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0].TrangThaiYeuCauDichVuKyThuat == TrangThaiYeuCauDichVuKyThuat.DaThucHien : false;
                                        displayCombobox = this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0] != null ?
                                            this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0].DisplayName : null;
                                        bacSiName = this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0] != null ?
                                            this.ptttCombobox.lstPttt.filter(x => x.KeyId === this.ycdvktId)[0].BacSi : null;
                                    }
        
                                    this.ycdvktId = this.ptttCombobox.ptttId;
                                    this.ptttCombobox.ptttDisplay = displayCombobox;
                                    this.isDangPhauThuat = false;
                                    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                                        this.apiService.get<boolean>
                                            (`PhauThuatThuThuat/LaPhauThuat?ycdvktId=${this.ycdvktId}`)
                                            .subscribe(res => {
                                                if (res === true) {
                                                    if (bacSiName !== '') {
                                                        this.isDangPhauThuat = true;
                                                        this.ptChinh = bacSiName;
                                                        if (this.tuongTrinh != null) {
                                                            this.tuongTrinh.canChange = false;
                                                            this.tuongTrinh.getKhoaPhong(this.currentUser.PhongBenhVienId, this.ycdvktId);
                                                        }
                                                        if (this.ptttSinhTon != null) {
                                                            this.ptttSinhTon.ptttStonGrid.canChange = false;
                                                            this.ptttSinhTon.ptttStonGrid.LoadChiSoSinhHieu(this.yctnId);
                                                        }
                                                    }
                                                }
                                                if (res === false) {
                                                    this.apiService.get<boolean>
                                                        (`PhauThuatThuThuat/ThuThuatCoBacSi?ycdvktId=${this.ycdvktId}`)
                                                        .subscribe(result => {
                                                            if (result === true) {
                                                                this.isDangPhauThuat = true;
                                                            }
                                                        });
                                                }
                                                if (this.ekip != null) {
                                                    this.ekip.LoadThongTinEkipCoBan(this.currentUser.PhongBenhVienId, this.ycdvktId);
                                                    this.ekip.IsDaTuongTrinh = this.IsDaTuongTrinh;
                                                    this.ekip.ekipGrid.validationMsg = null;
                                                    this.ekip.ekipGrid.LoadEkip(this.ycdvktId);
                                                    this.ekip.ekipGrid.IsDaTuongTrinh = this.IsDaTuongTrinh;
                                                }
                                            });
                                    } else {
                                        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                                    }
                                }
        
                                if (!this.ptttCombobox.lstPttt.some(x => x)) {
                                    this.isDangPhauThuat = false;
                                    this.ptttCombobox.ptttId = null;
                                    this.ptttCombobox.ptttDisplay = null;
                                    this.chuyenBenhNhan.emit(isAllowBnNext);
                                }
        
                                let willShowKl = false;
        
                                // if (this.ptttCombobox.lstPttt != null && this.ptttCombobox.lstPttt.some(x => x)
                                //     && this.ptttCombobox.lstPttt.every(x => x.IsDaTuongTrinh)) {
                                //     this.apiService.get<boolean>
                                //         // tslint:disable-next-line: max-line-length
                                //         (`PhauThuatThuThuat/CheckHasPhauThuat?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.yctnId}`)
                                //         // tslint:disable-next-line: deprecation
                                //         .subscribe(result => {
                                //             if (result === true) {
                                //                 willShowKl = true;
                                //                 this.showKetLuan.emit(willShowKl);
                                //             } else {
                                //                 this.chuyenGiaoKetLuanBenhNhan.emit(true);
                                //             }
                                //         });
                                // }
        
                                // if (this.ptttCombobox.lstPttt != null && this.ptttCombobox.lstPttt.some(x => x.IsDaTuongTrinh)) {
                                //     if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                                //         this.apiService.get<boolean>
                                //             // tslint:disable-next-line: max-line-length
                                //             (`PhauThuatThuThuat/IsExistDoubleKetLuanVaTheoDoi?yeuCauTiepNhanId=${this.yctnId}&phongBenhVienId=${this.currentUser.PhongBenhVienId}`)
                                //             .subscribe(res => {
                                //                 willShowKl = res;
                                //                 this.showKetLuan.emit(willShowKl);
                                //             });
                                //     } else {
                                //         this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                                //     }
                                // }

                                if (this.ptttCombobox.lstPttt != null && this.ptttCombobox.lstPttt.some(x => x) && this.ptttCombobox.lstPttt.every(x => x.IsDaTuongTrinh)) {
                                    if(this.isExistPhauThuat) {
                                        willShowKl = true;
                                        this.showKetLuan.emit(willShowKl);
                                    } else {
                                        if(this.ptttCombobox.lstPttt.every(p => p.TrangThaiYeuCauDichVuKyThuat != TrangThaiYeuCauDichVuKyThuat.DaThucHien))  {
                                            this.chuyenGiaoKetLuanBenhNhan.emit(true);
                                        }
                                    }
                                } else if (this.ptttCombobox.lstPttt != null && this.ptttCombobox.lstPttt.some(x => x.IsDaTuongTrinh)) {
                                    willShowKl = this.isExistDoubleKetLuanVaTheoDoi;
                                    this.showKetLuan.emit(willShowKl);
                                }
        
                                if (this.IsNotFirstLoading && isAllowOpenKetLuanPopup && willShowKl) {
                                    this.dialog.open(ConfirmComponent, {
                                        disableClose: false,
                                        width: '400px',
                                        data: { Title: 'Xác nhận', Message: PtttMessage.MessageChuyenTabKetLuan }
                                    }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                                        if (result === 'Yes') {
                                            this.navigateKetLuan.emit(true);
                                        }
                                    });
                                }
        
                                const daTuongTrinh = this.ptttCombobox.lstPttt.filter(x => x.IsDaTuongTrinh).length;
                                const tongTuongTrinh = this.ptttCombobox.lstPttt.length;
                                const tuongTrinhTitle = 'tường trình (' + daTuongTrinh + '/' + tongTuongTrinh + ')';
                                this.updateTuongTrinhTabHeader.emit(tuongTrinhTitle);
                                this.IsNotFirstLoading = true;
                            }
                        },
                        (err) => {
                            this.notificationService.showError(err.Message);
                        });
                });
            }, err => {
                this.notificationService.showError(err.Message);
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    onSaveEkip() {
        const self = this;
        self.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmSaveEkip }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                self.ekip.Save();
            }
        });
    }

    onResetEkip() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmResetEkip }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.ekip.canChange = false;
                this.ekip.ekipGrid.canChange = false;
                this.ekip.LoadThongTinEkipCoBan(this.currentUser.PhongBenhVienId, this.ycdvktId);
                this.ekip.IsDaTuongTrinh = this.IsDaTuongTrinh;
                this.ekip.ekipGrid.validationMsg = null;
                this.ekip.ekipGrid.LoadEkip(this.ycdvktId);
                this.ekip.ekipGrid.IsDaTuongTrinh = this.IsDaTuongTrinh;
                this.logicDisplay.IsDisplayReset = false;
                this.logicDisplay.IsDisplaySave = false;
            }
        });
    }

    onSaveTuongTrinh() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmSaveTuongTrinh }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.tuongTrinh.Save();
            }
        });
    }

    onResetTuongTrinh() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmResetTuongTrinh }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.tuongTrinh.canChange = false;
                this.tuongTrinh.getKhoaPhong(this.currentUser.PhongBenhVienId, this.ycdvktId);
            }
        });
    }

    SpecifyYcdvkt(eventData: ComboboxPttt) {
        if (eventData != undefined && eventData != null) {

            this.getThongTinChiDinhDichVu(eventData.KeyId);

            $('.wrapBtnLuu').parent().css('display', '');
            $('.wrapBtnLuu').parent().css('justify-content', '');
            $('app-pttt-sinh-ton').parent().parent().css('overflow', '');
            $('.wrapBtnLuu').parent().css('flex-direction', '');
            this.ptChinh = null;
            this.isDangPhauThuat = false;
            this.ycdvktId = eventData != null ? eventData.KeyId : -1;
            this.IsDaTuongTrinh = eventData != null ? eventData.IsDaTuongTrinh : false;
            this.isTuongTrinhLai = eventData.TrangThaiYeuCauDichVuKyThuat == TrangThaiYeuCauDichVuKyThuat.DaThucHien
            this.logicDisplay.IsDisplayReset = false;
            this.logicDisplay.IsDisplaySave = false;
            this.logicDisplayTt.IsDisplayReset = false;
            this.logicDisplayTt.IsDisplaySave = false;
            this.logicDisplayCsst.IsDisplayReset = false;
            this.logicDisplayCsst.IsDisplaySave = false;
            if (this.ekip != null) {
                this.ekip.LoadThongTinEkipCoBan(this.currentUser.PhongBenhVienId, this.ycdvktId);
                this.ekip.IsDaTuongTrinh = this.IsDaTuongTrinh;
                this.ekip.ekipGrid.validationMsg = null;
                this.ekip.ekipGrid.LoadEkip(this.ycdvktId);
                this.ekip.ekipGrid.IsDaTuongTrinh = this.IsDaTuongTrinh;
            }
            if (this.tuongTrinh != null) {
                this.tuongTrinh.getKhoaPhong(this.currentUser.PhongBenhVienId, this.ycdvktId);
            }

            if (this.ptttSinhTon != null) {
                this.ptttSinhTon.ptttStonGrid.LoadChiSoSinhHieu(this.yctnId);
            }
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabEkip = true;

            if (eventData != null && eventData.BacSi != null && eventData.BacSi !== '') {
                this.isDangPhauThuat = true;
                this.ptChinh = eventData.BacSi;
            }
            this.apiService.get<boolean>
                (`PhauThuatThuThuat/LaPhauThuat?ycdvktId=${this.ycdvktId}`)
                // tslint:disable-next-line: deprecation
                .subscribe(res => {
                    if (res === false) {
                        this.apiService.get<boolean>
                            (`PhauThuatThuThuat/ThuThuatCoBacSi?ycdvktId=${this.ycdvktId}`)
                            // tslint:disable-next-line: deprecation
                            .subscribe(result => {
                                if (result === true) {
                                    this.isDangPhauThuat = true;
                                }
                            });
                    }
                });
        } else {
            this.thongTinChiDinhDichVu = new ThongTinChiDinhDichVu();
        }
    }

    onTabSelect(eventData: any) {
        if (eventData.index === 3) {
            $('.wrapBtnLuu').parent().css('display', 'flex');
            $('.wrapBtnLuu').parent().css('justify-content', 'space-between');
            $('.wrapBtnLuu').parent().css('flex-direction', 'column');
            $('app-pttt-sinh-ton').parent().parent().css('overflow', 'auto');
        } else {
            $('.wrapBtnLuu').parent().css('display', '');
            $('.wrapBtnLuu').parent().css('justify-content', '');
            $('app-pttt-sinh-ton').parent().parent().css('overflow', '');
            $('.wrapBtnLuu').parent().css('flex-direction', '');
        }

        if (eventData.index === 0) {
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabEkip = true;
        }
        if (eventData.index === 1) {
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabTuongTrinh = true;

            this.tuongTrinh.setThoiGianBatDauPhauThuat();
        }
        if (eventData.index === 2) {
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabVtThuoc = true;
        }
        if (eventData.index === 3) {
            this.deselectedTab();
            this.lstStatusSelectedTab.selectedTabCsst = true;
        }
    }

    AfterSavingEkip(bsChinh: string) {
        this.isDangPhauThuat = true;
        this.ptChinh = bsChinh;
        const url =
            `PhauThuatThuThuat/GetListPtttBn?noiThucHienId=${this.currentUser.PhongBenhVienId}&yctnId=${this.ekip.yctnId}&IsTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`;
        this.logicDisplay.IsDisplayReset = false;
        this.logicDisplay.IsDisplaySave = false;
        if (this.ekip.ekip.IsPhauThuat) {
            this.LoadDsPttt(url, false, true, true);
        }
        this.GetDvKhongThucHien();
    }

    OnDisplaySaveCancelEkip(isDisplay: boolean) {
        this.logicDisplay.IsDisplayReset = isDisplay;
        this.logicDisplay.IsDisplaySave = isDisplay;
    }

    OnDisplayBtnForTuongTrinh(isDisplay: boolean) {
        this.logicDisplayTt.IsDisplayReset = isDisplay;
        this.logicDisplayTt.IsDisplaySave = isDisplay;
    }

    OnDisplayBtnForSinhTon(isDisplay: boolean) {
        this.logicDisplayCsst.IsDisplayReset = isDisplay;
        this.logicDisplayCsst.IsDisplaySave = isDisplay;
    }

    SaveSinhTon() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmSaveCsst }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.ptttSinhTon.ptttStonGrid.Luu();
            }
        });
    }

    ResetSinhTon() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmResetCsst }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.ptttSinhTon.ptttStonGrid.canChange = false;
                this.ptttSinhTon.ptttStonGrid.LoadChiSoSinhHieu(this.yctnId);
            }
        });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        const self = this;
        // tslint:disable-next-line: deprecation
        if (event.ctrlKey && event.keyCode === 83) {
            // kiểm tra lưu // ctr + s
            event.preventDefault();
            if (self.lstStatusSelectedTab.selectedTabEkip && self.logicDisplay.IsDisplaySave) {
                self.dialog.closeAll();
                self.onSaveEkip();
            }
            if (self.lstStatusSelectedTab.selectedTabTuongTrinh && self.logicDisplayTt.IsDisplaySave) {
                self.dialog.closeAll();
                self.onSaveTuongTrinh();
            }
            if (self.lstStatusSelectedTab.selectedTabCsst && self.logicDisplayCsst.IsDisplaySave) {
                self.dialog.closeAll();
                self.SaveSinhTon();
            }
        }

        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27) {
            event.preventDefault();
            if (self.lstStatusSelectedTab.selectedTabEkip && self.logicDisplay.IsDisplayReset) {
                self.dialog.closeAll();
                self.onResetEkip();
            }
            if (self.lstStatusSelectedTab.selectedTabTuongTrinh && self.logicDisplayTt.IsDisplayReset) {
                self.dialog.closeAll();
                self.onResetTuongTrinh();
            }
            if (self.lstStatusSelectedTab.selectedTabCsst && self.logicDisplayCsst.IsDisplayReset) {
                self.dialog.closeAll();
                self.ResetSinhTon();
            }
        }
    }

    SoDuTaiKhoanChanged(evt) {
        this.outputSoDuTaiKhoanChanged.emit(evt);
    }

    SoDuTaiKhoanConLaiChanged(evt) {
        this.outputSoDuTaiKhoanConLaiChanged.emit(evt);
    }

    getThongTinChiDinhDichVu(yeuCauDichVuKyThuatId) {
        this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinChiDinhDichVu?yeuCauDichVuKyThuatId=${yeuCauDichVuKyThuatId}`).subscribe(res => {
            if (res) {
                this.thongTinChiDinhDichVu = res;
                this.outputDichVuKhongCanTuongTrinhChanged.emit(res.IsDichVuKhongCanTuongTrinh);
            }
        }, err => {
            this.notificationService.showError(err.Message);
        });
    }
}
