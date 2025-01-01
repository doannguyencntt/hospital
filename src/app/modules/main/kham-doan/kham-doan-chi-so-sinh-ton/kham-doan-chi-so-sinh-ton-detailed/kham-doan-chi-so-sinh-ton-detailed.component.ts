import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage, TaiKhoanNguoiDungMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanChiSoSinhTonDetailed, KetQuaSinhHieu } from '../kham-doan-chi-so-sinh-ton.model';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icEdit from '@iconify/icons-ic/sharp-edit';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { delayWhen, retryWhen, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-chi-so-sinh-ton-detailed',
    templateUrl: './kham-doan-chi-so-sinh-ton-detailed.component.html',
    styleUrls: ['./kham-doan-chi-so-sinh-ton-detailed.component.scss']
})
export class KhamDoanChiSoSinhTonDetailedComponent implements OnInit {

    icAddCircle = icAddCircle;
    icDelete = icDelete;
    icEdit = icEdit;
    documentType: DocumentType;
    validationErrors: any = [];
    popupLoadingData: any;
    baseRoute = '/kham-doan/cong-ty';
    id: number;
    current: Date = new Date();
    dataSourceSinhHieu: any = {
        data: [],
        total: 0
    };
    dataSourceSinhHieuDisplay: any = {
        data: [],
        total: 0
    };
    format = 'n1';
    gridSinhHieuColumns: any[] = [];

    khamDoanSinhTon: KhamDoanChiSoSinhTonDetailed = new KhamDoanChiSoSinhTonDetailed();

    title = '';
    header = '';

    @ViewChild('actionSinhHieuTemplate', { static: true }) actionSinhHieuTemplate: TemplateRef<any>;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('spO2Template', { static: true }) spO2Template: TemplateRef<any>;
 @ViewChild('gridSinhHieu', { static: false }) gridChild: GridComponent;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private location: Location,
        private apiService: ApiService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanCongTy;

        this.getDataCongTy(this.data.Id,this.data.YeuCauTiepNhanId);

        this.gridSinhHieuColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 137, Template: this.nhipTimTemplate },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 100, Template: this.thanNhietTemplate },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 135, Template: this.huyetApTemplate },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 150, Template: this.nhipThoTemplate },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 113, Template: this.canNangTemplate },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 117, Template: this.chieuCaoTemplate },
            { Field: 'BMI', Title: 'BMI (kg/m²)', Width: 91, Template: this.BMITemplate },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 120, Template: this.glassgowTemplate },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 120, Template: this.spO2Template },
            { Field: 'NgayThucHien', Title: 'Ngày thực hiện', Width: 145 },
            { Field: 'Action', Title: '', Width: 70, Template: this.actionSinhHieuTemplate }
        ];
    }

    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }

    submit() {
        const sendingParam = {
            data: [...this.dataSourceSinhHieu.data],
            Id: this.data.YeuCauTiepNhanId
        };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.showPopupLoadingData();
            this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync',
                sendingParam)
                // tslint:disable-next-line: deprecation
                .subscribe(
                    _ => {
                        this.notificationService.
                            showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật']));
                        //this.quayLai();
                                this.dataSourceSinhHieu = {
                                    data: [],
                                    total: 0
                                };

                                this.dataSourceSinhHieuDisplay = {
                                    data: [],
                                    total: 0
                                };
                        this.apiService.get<any>
                    (`KhamDoan/GetDataListForChiSoSinhTon?id=`+this.data.YeuCauTiepNhanId).subscribe((resultData) => {
                        if (resultData !== null && resultData !== undefined) {
                            this.dataSourceSinhHieu = {
                                data: [...resultData.Data],
                                total: resultData.Data.length
                            };
                            this.dataSourceSinhHieuDisplay = {
                                data: [...resultData.Data],
                                total: resultData.Data.length
                            };
                        }
                    });
                        this.closePopupLoadingData();
                    },
                    (err: any) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    getDataCongTy(id: number,yeuCauTiepNhanId:number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.showPopupLoadingData();
            Observable.forkJoin([
                this.apiService.get<KhamDoanChiSoSinhTonDetailed>
                    (`KhamDoan/GetHopDongKhamSucKhoe?id=${id}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.khamDoanSinhTon = new KhamDoanChiSoSinhTonDetailed();
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        ))),
                this.apiService.get<any>
                    (`KhamDoan/GetDataListForChiSoSinhTon?id=${yeuCauTiepNhanId}`)
                    .pipe(retryWhen(errors =>
                        errors.pipe(
                            tap(_ => {
                                this.dataSourceSinhHieu = {
                                    data: [],
                                    total: 0
                                };

                                this.dataSourceSinhHieuDisplay = {
                                    data: [],
                                    total: 0
                                };
                            }),
                            delayWhen(_ => {
                                return timer(5 * 1000);
                            })
                        )))
                // tslint:disable-next-line: deprecation
            ]).subscribe(results => {
                this.khamDoanSinhTon = { ...results[0] };
                this.dataSourceSinhHieu = {
                    data: [...results[1].Data],
                    total: results[1].Data.length
                };
                this.dataSourceSinhHieuDisplay = {
                    data: [...results[1].Data],
                    total: results[1].Data.length
                };
                this.closePopupLoadingData();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    themChiSoSinhTon() {
        if (this.dataSourceSinhHieuDisplay.data.findIndex(x => x.Id === 0) === -1) {
            
            const newItem = new KetQuaSinhHieu();
            newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
            this.dataSourceSinhHieuDisplay.data.push(newItem);
            this.dataSourceSinhHieu.data.push(newItem);
        } else {
            const sendingParam = {
                data: [...this.dataSourceSinhHieu.data],
                Id: this.data.YeuCauTiepNhanId
            };
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                this.showPopupLoadingData();
                this.apiService.post('KhamDoan/UpdateChiSoSinhTonAsync',
                    sendingParam)
                    // tslint:disable-next-line: deprecation
                    .subscribe(
                        _ => {
                            this.notificationService.
                                showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ['Cập nhật']));
                           
                            //this.quayLai();
                                    this.dataSourceSinhHieu = {
                                        data: [],
                                        total: 0
                                    };
    
                                    this.dataSourceSinhHieuDisplay = {
                                        data: [],
                                        total: 0
                                    };
                            this.apiService.get<any>
                        (`KhamDoan/GetDataListForChiSoSinhTon?id=`+this.data.YeuCauTiepNhanId).subscribe((resultData) => {
                            if (resultData !== null && resultData !== undefined) {
                                this.dataSourceSinhHieu = {
                                    data: [...resultData.Data],
                                    total: resultData.Data.length
                                };

                                this.dataSourceSinhHieuDisplay = {
                                    data: [...resultData.Data],
                                    total: resultData.Data.length
                                };
                                const newItem = new KetQuaSinhHieu();
                                newItem.NgayThucHien = CommonService.formatDateTimeSACH(this.current, 'dd/mm/yyyy').toString();
                                this.dataSourceSinhHieuDisplay.data.push(newItem);
                                this.dataSourceSinhHieu.data.push(newItem);
                            }
                        });
                            this.closePopupLoadingData();
                        },
                        (err: any) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
            } 
            
        }
    }

    onChangeNhipTim(data: any, input: any) {
        if (input % 1 !== 0) {
            data.NhipTim = input.toFixed();

            if (typeof data.NhipTim === 'string') {
                data.NhipTim = Number(data.NhipTim);
            }
        }
    }

    onChangeNhipTho(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.NhipTho = input.toFixed();

            if (typeof dataItem.NhipTho === 'string') {
                dataItem.NhipTho = Number(dataItem.NhipTho);
            }
        }
    }

    onChangeHuyetApTamThu(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamThu = input.toFixed();

            if (typeof dataItem.HuyetApTamThu === 'string') {
                dataItem.HuyetApTamThu = Number(dataItem.HuyetApTamThu);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeHuyetApTamTruong(input: any, dataItem) {
        if (input % 1 !== 0) {
            dataItem.HuyetApTamTruong = input.toFixed();

            if (typeof dataItem.HuyetApTamTruong === 'string') {
                dataItem.HuyetApTamTruong = Number(dataItem.HuyetApTamTruong);
            }
        }

        if (dataItem.HuyetApTamThu === null && dataItem.HuyetApTamTruong === null) {
            dataItem.HuyetAp = null;
        } else {
            dataItem.HuyetAp = dataItem.HuyetApTamThu + '/' + dataItem.HuyetApTamTruong;
        }
    }

    onChangeCanNang(data: any) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }

        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    onChangeChieuCao(data: any) {
        const chieuCao = data.ChieuCao / 100;

        if (chieuCao === 0) {
            data.BMI = null;
            return;
        }

        data.BMI = data.CanNang / (chieuCao * chieuCao);
    }

    suaChiSoSinhHieu(dataItem: any) {
        
        if (dataItem) {
            dataItem.IsUpdate = true;
            this.dataSourceSinhHieu.data.filter(x => x === dataItem)[0].IsUpdate = true;
            dataItem.NgayThucHien = CommonService.formatDateTimeSACH(new Date(), 'dd/mm/yyyy').toString();
        }
    }

    xoaChiSoSinhHieu(item: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed()
            // tslint:disable-next-line: deprecation
            .subscribe(result => {
                if (result === 'Yes' && this.dataSourceSinhHieuDisplay.data.some(x => x === item)) {
                    this.dataSourceSinhHieu.data.filter(x => x === item)[0].IsDelete = true;
                    this.dataSourceSinhHieuDisplay.data.splice(this.dataSourceSinhHieuDisplay.data.findIndex(x => x === item), 1);
                }
            });
    }

    quayLai() {
        this.location.back();
    }
}
