import { Component, OnInit, Input, ViewChild, TemplateRef, ViewEncapsulation, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { TheoDoiSauPhauThuatThuThuat, KhamTheoDoi, DisplayLogicModel } from '../../phau-thuat-thu-thuat.model';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import icEdit from '@iconify/icons-ic/sharp-edit';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { EnumTrangThaiTheoDoiSauPhauThuatThuThuat } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { PhauThuatThuThuatBnTiepTheoPopupComponent } from '../phau-thuat-thu-thuat-bn-tiep-theo-popup/phau-thuat-thu-thuat-bn-tiep-theo-popup.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { Subscription } from 'rxjs';
import { PhauThuatThuThuatTheoDoiSinhTonComponent } from './pttt-theo-doi-sinh-ton/pttt-theo-doi-sinh-ton.component';

@Component({
    selector: 'app-phau-thuat-thu-thuat-theo-doi',
    templateUrl: './phau-thuat-thu-thuat-theo-doi.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-theo-doi.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PhauThuatThuThuatTheoDoiComponent implements OnInit {
    isChangeData: boolean = false;
    isDisableUpdate: boolean = false;
    isSavingData: boolean = false;
    isDataNotChanged: boolean = true;
    isRefreshingData: boolean = false;
    isFirstTime: boolean = true;

    subscription: Subscription;
    logicDisplayCsst = {} as DisplayLogicModel;

    theoDoiSauPhauThuatThuThuat: TheoDoiSauPhauThuatThuThuat;
    khamTheoDois: KhamTheoDoi[] = [];

    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    validationErrors: any;

    phongKhamHienTai: LookupItemVo = {
        DisplayName: null,
        KeyId: Number(this.authService.getPhongLamViecId()),
    };

    icEdit = icEdit;
    icAddCircle = icAddCircle;

    @Input() thongTinBenhNhan: any = null;
    @Input() currentAccessUser: any = null;

    @Output() outputBenhNhanTiepTheo = new EventEmitter();
    @Output() outputPhauThuatThuThuatTheoDoiDataChanged = new EventEmitter();
    @Output() outputPhauThuatThuThuatTheoDoiChiSoSinhTonDataChanged = new EventEmitter();

    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('ptttTheoDoiSt', { static: true }) ptttTheoDoiSt: PhauThuatThuThuatTheoDoiSinhTonComponent;

    constructor(private apiService: ApiService, private authService: AuthService, private notificationService: NotificationService, private broadcastService: BroadcastService, private dialog: MatDialog) { }

    ngOnInit() {
        this.getTheoDoiSauPhauThuatThuThuat();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.validationErrors = null;
            this.isChangeData = false;
            this.outputPhauThuatThuThuatTheoDoiDataChanged.emit(false);
            this.outputPhauThuatThuThuatTheoDoiChiSoSinhTonDataChanged.emit(false);

            // this.getTheoDoiSauPhauThuatThuThuat();
        }
    }

    onDataChange(evt) {
        if(!this.isChangeData) {
            this.isChangeData = true;
            this.outputPhauThuatThuThuatTheoDoiDataChanged.emit(true);
            this.isDataNotChanged = false;
        }
    }

    getTheoDoiSauPhauThuatThuThuatId() {
        return this.theoDoiSauPhauThuatThuThuat.Id;
    }

    getTheoDoiSauPhauThuatThuThuat() {
        if(!this.isFirstTime) {
            this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        } else {
            this.isFirstTime = false;
        }

        this.apiService.get<any>(`PhauThuatThuThuat/GetTheoDoiSauPhauThuatThuThuatByYeuCauTiepNhan?yeuCauTiepNhanId=${this.thongTinBenhNhan.YeuCauTiepNhanId}&isTuongTrinhLai=${this.thongTinBenhNhan.IsTuongTrinhLai}`).subscribe(res => {
            if(res) {
                this.theoDoiSauPhauThuatThuThuat = res;
                this.getKhamTheoDois();
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
        })
    }

    getKhamTheoDois() {
        this.apiService.get<any>(`PhauThuatThuThuat/GetKhamTheoDois?theoDoiSauPhauThuatThuThuatId=${this.theoDoiSauPhauThuatThuThuat.Id}`).subscribe(res => {
            if(res) {
                this.khamTheoDois = res;

                if(this.khamTheoDois.length === 0) {
                    this.addLanKham();
                } else {
                    this.khamTheoDois.forEach(item => {
                        item.ThongTinKhamTheoDoiTemplateObj = JSON.parse(item.ThongTinKhamTheoDoiTemplate);
                    })

                    this.bindDataDynamicComponent();
                    this.dialog.closeAll();
                }
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
        })
    }

    bindDataDynamicComponent() {
        this.khamTheoDois.forEach(item => {
            let strData = item.ThongTinKhamTheoDoiData;

            if (strData) {
                let dataObj = JSON.parse(strData);
                let itemTemp = null;

                if (item.ThongTinKhamTheoDoiTemplateObj) {
                    item.ThongTinKhamTheoDoiTemplateObj.ComponentDynamics.forEach(itemObj => {
                        if (itemObj.groupItems && itemObj.groupItems.length > 0) {
                            itemObj.groupItems.forEach((element) => {
                                itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
                                if (itemTemp) {
                                    element.Value = itemTemp.Value;
                                }
                            });
                        } else {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == itemObj.Id);
                            if (itemTemp) {
                                itemObj.Value = itemTemp.Value;
                            }
                        }
                    })
                }
            }
        })
    }

    processDynamicComponent() {
        let dataKhamTheoTemplate: any;
        let lstDataKhamTheoTemplate: any[] = [];

        if (this.khamTheoDois[0].ThongTinKhamTheoDoiTemplateObj) {
            this.khamTheoDois[0].ThongTinKhamTheoDoiTemplateObj.ComponentDynamics.forEach(
                (component) => {
                    if (component.groupItems && component.groupItems.length > 0) {
                        component.groupItems.forEach((element) => {
                            if (element.Value) {
                                dataKhamTheoTemplate = {
                                    Id: element.Id,
                                    Value: element.Value,
                                };
                                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                            }
                        });
                    } else if (component.Value) {
                        dataKhamTheoTemplate = {
                            Id: component.Id,
                            Value: component.Value,
                        };

                        lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
                    }
                }
            );

            let strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
            return `{"DataKhamTheoTemplate": ${strLstDataKhamTheoTemplate}}`;
        }

        return null;
    }

    EditKhamBenhSession(item) {

    }

    SaveKhamBenhSession() {

    }

    FinishKhamBenhSession() {

    }

    onTabSelect(evt) {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải...' }
        });

        if(evt.index === 0) {
            evt.preventDefault();

            if(this.khamTheoDois[0].ThoiDiemHoanThanhKham) {
                this.addLanKham();
            }
        }

        this.dialog.closeAll();
    }

    addLanKham() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải...' }
        });

        let khamTheoDoi = new KhamTheoDoi();
        khamTheoDoi.TheoDoiSauPhauThuatThuThuatId = this.theoDoiSauPhauThuatThuThuat.Id;
        khamTheoDoi.ThoiDiemBatDauKham = new Date();

        this.apiService.post<any>(`PhauThuatThuThuat/AddKhamTheoDoi`, khamTheoDoi).subscribe(res => {
            if(res) {
                this.getKhamTheoDois();
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
        })
    }

    luuLanKham(isChuyenGiao: boolean = false) {
        // if(this.isSavingData == true || this.isDataNotChanged == true) {
        //     return;
        // }
        if(isChuyenGiao == false) {
            if(this.isSavingData == true || this.isDataNotChanged == true) {
                return;
            }
        }

        this.isSavingData = true;

        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu...' }
        });

        this.khamTheoDois[0].ThongTinKhamTheoDoiData = this.processDynamicComponent();
        this.khamTheoDois[0].ThoiDiemHoanThanhKham = new Date();
        this.khamTheoDois[0].NoiThucHienId = this.phongKhamHienTai.KeyId;
        this.khamTheoDois[0].NhanVienThucHienId = this.currentAccessUser.Id;

        if(this.khamTheoDois[0].KhamTheoDoiBoPhanKhacs) {
            this.khamTheoDois[0].KhamTheoDoiBoPhanKhacs.forEach(item => {
                item.KhamTheoDoiId = this.khamTheoDois[0].Id;
            })
        }

        this.apiService.post<any>(`PhauThuatThuThuat/UpdateKhamTheoDoi`, this.khamTheoDois[0]).subscribe(res => {
            if(res) {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu lần khám"]));

                // this.isSavingData = false;
                this.isChangeData = false;
                this.outputPhauThuatThuThuatTheoDoiDataChanged.emit(false);

                if(isChuyenGiao) {
                    this.chuyenGiao();
                } else {
                    this.refreshLanKham(res.Id);
                }
            }
        }, (err) => {
            this.dialog.closeAll();
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.isSavingData = false;
        })
    }

    huyLanKham()
    {
        if(this.isRefreshingData || !this.isChangeData) {
            return;
        }

        this.isRefreshingData = true;

        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải...' }
        });

        this.refreshLanKham(this.khamTheoDois[0].Id);
        this.isChangeData = false;
        this.outputPhauThuatThuThuatTheoDoiDataChanged.emit(false);
        this.isDataNotChanged = true;
    }

    refreshLanKham(khamTheoDoiId: number) {
        this.apiService.get<any>(`PhauThuatThuThuat/GetKhamTheoDoi?id=${khamTheoDoiId}`).subscribe(res => {
            if(res) {
                this.khamTheoDois[0] = res;
                this.khamTheoDois[0].ThongTinKhamTheoDoiTemplateObj = JSON.parse(this.khamTheoDois[0].ThongTinKhamTheoDoiTemplate);

                this.bindDataDynamicComponent();
                this.dialog.closeAll();
                this.isSavingData = false;
                this.isDataNotChanged = true;
                this.isRefreshingData = false;
            }
        }, (err) => {
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.dialog.closeAll();
            this.isSavingData = false;
            this.isRefreshingData = false;
        })
    }

    chuyenGiaoBenhNhan() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn có muốn chuyển giao NB về Khoa chỉ định ban đầu không?" }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                // Cập nhật trạng thái
                this.luuLanKham(true);
            }
        });
    }

    chuyenGiao() {
        this.theoDoiSauPhauThuatThuThuat.TrangThai = EnumTrangThaiTheoDoiSauPhauThuatThuThuat.KetThucTheoDoi;
        this.theoDoiSauPhauThuatThuThuat.PhongBenhVienId = this.currentAccessUser.PhongBenhVienId;
        this.theoDoiSauPhauThuatThuThuat.NhanVienKetLuanId = this.currentAccessUser.Id;
        
        this.apiService.post<any>("PhauThuatThuThuat/ChuyenGiaoSauPhauThuatThuThuat", this.theoDoiSauPhauThuatThuThuat).subscribe(res => {
            if(res) {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Chuyển giao NB ${this.thongTinBenhNhan.HoTen}`]));
                this.dialog.closeAll();
                this.isSavingData = false;
                this.isDataNotChanged = true;

                //GetThongTinBenhNhanTiepTheo
                this.dialog.open(LoadingComponent, {
                    disableClose: true,
                    width: '200px',
                    height: '90px',
                    data: { Title: 'Đang tải...' }
                });

                this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTiepTheo?phongKhamHienTaiId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanHienTaiId=${this.thongTinBenhNhan.YeuCauTiepNhanId}`).subscribe((res) => {
                    if(res) {
                        this.dialog.closeAll();

                        this.dialog.open(PhauThuatThuThuatBnTiepTheoPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            data: res
                        })
                        .afterClosed()
                        .subscribe(dialogRes => {
                            if(dialogRes) {
                                this.outputBenhNhanTiepTheo.emit(res.YeuCauTiepNhanId);
                            } else {
                                this.outputBenhNhanTiepTheo.emit(0);
                            }
                        });
                    } else {
                        this.dialog.closeAll();
                        this.outputBenhNhanTiepTheo.emit(0);
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                    this.dialog.closeAll();
                });
            }
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
        })
    }

    SaveSinhTon() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: PtttMessage.MessageConfirmSaveCsst }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result === 'Yes') {
                this.outputPhauThuatThuThuatTheoDoiChiSoSinhTonDataChanged.emit(false);

                this.ptttTheoDoiSt.Luu();
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
                this.outputPhauThuatThuThuatTheoDoiChiSoSinhTonDataChanged.emit(false);

                if(this.ptttTheoDoiSt != null){
                    this.ptttTheoDoiSt.canChange = false;
                    this.ptttTheoDoiSt.LoadChiSoSinhHieu(this.thongTinBenhNhan.YeuCauTiepNhanId);
                }
            }
        });
    }

    ngAfterContentInit() {
        const self = this;

        // self.subscription = self.broadcastService.on('DisplayBtnSaveSinhTon', event => {
        //     if (event.message != null) {
        //         self.logicDisplayCsst.IsDisplayReset = event.message;
        //         self.logicDisplayCsst.IsDisplaySave = event.message;
        //     }
        // });
    }

    displayButtonOnChiSoSinhTon(event) {
        this.logicDisplayCsst.IsDisplayReset = event;
        this.logicDisplayCsst.IsDisplaySave = event;

        // if(event) {
        //     this.isChangeData = true;
        //     this.outputPhauThuatThuThuatTheoDoiDataChanged.emit(true);
        // }
        if(event) {
            this.outputPhauThuatThuThuatTheoDoiChiSoSinhTonDataChanged.emit(true);
        }
    }
}
