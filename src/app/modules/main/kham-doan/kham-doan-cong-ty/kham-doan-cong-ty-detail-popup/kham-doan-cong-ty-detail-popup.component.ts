import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import { Location } from '@angular/common';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { KhamDoanCongTyMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { KhamDoanCongTyPhongPopupComponent } from '../kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component';
import { KhamDoanCongTy } from '../kham-doan-cong-ty.model';
import { KhamDoanCongTyService } from '../kham-doan-cong-ty.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-cong-ty-detail-popup',
    templateUrl: './kham-doan-cong-ty-detail-popup.component.html',
    styleUrls: ['./kham-doan-cong-ty-detail-popup.component.scss']
})
export class KhamDoanCongTyDetailPopupComponent implements OnInit {

    icClose = icClose;
    icAddCircle = icAddCircle;
    icDelete = icDelete;

    documentType: DocumentType;
    validationErrors: any = [];
    format = 'n2';
    popupLoadingData: any;
    baseRoute = '/kham-doan/cong-ty';
    id: number;
    khamDoanCongTy: KhamDoanCongTy = new KhamDoanCongTy();
    loading = false;

    gridColumns: any[] = [];

    title = '';
    header = '';

    @ViewChild('maPhongTemplate', { static: true }) maPhongTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridChild', { static: true }) gridChild: GridComponent;
    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private location: Location,
        private notificationService: NotificationService,
        private baseService: KhamDoanCongTyService
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanCongTy;

        this.id = this.route.snapshot.params.id;
        this.id = (this.id === undefined || this.id === null) ? 0 : this.id;

        if (this.id === 0) {
            this.title = 'Thêm công ty';
            this.header = 'Thêm Công Ty';
        } else {
            this.title = 'Chi tiết công ty';
            this.header = 'Chi Tiết Công Ty';
            this.getById(this.id);
        }
    }

    getById(id: number) {
        // tslint:disable-next-line: deprecation
        this.baseService.getById<KhamDoanCongTy>(id).subscribe(resultData => {
            this.khamDoanCongTy = { ...resultData };
        });
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

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    OnValidate() {
        this.validationErrors = [];
        if (!this.khamDoanCongTy.Ma) {
            const validate = {
                Field: 'Ma',
                Message: KhamDoanCongTyMessage.MessageMaNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.khamDoanCongTy.Ten) {
            const validate = {
                Field: 'Ten',
                Message: KhamDoanCongTyMessage.MessageTenNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.khamDoanCongTy.SoDienThoai) {
            const validate = {
                Field: 'SoDienThoai',
                Message: KhamDoanCongTyMessage.MessageSdtNotNull
            };
            this.validationErrors.push(validate);
        }

        if (!this.khamDoanCongTy.DiaChi) {
            const validate = {
                Field: 'DiaChi',
                Message: KhamDoanCongTyMessage.MessageDiaChiNotNull
            };
            this.validationErrors.push(validate);
        }

        // if (!this.khamDoanCongTy.NguoiDaiDien) {
        //     const validate = {
        //         Field: 'NguoiDaiDien',
        //         Message: KhamDoanCongTyMessage.MessageNguoiDaiDienNotNull
        //     };
        //     this.validationErrors.push(validate);
        // }

        // if (!this.khamDoanCongTy.NguoiLienHe) {
        //     const validate = {
        //         Field: 'NguoiLienHe',
        //         Message: KhamDoanCongTyMessage.MessageNguoiLienHeNotNull
        //     };
        //     this.validationErrors.push(validate);
        // }

        if (this.khamDoanCongTy.CoHoatDong == null) {
            const validate = {
                Field: 'CoHoatDong',
                Message: KhamDoanCongTyMessage.MessageCoHoatDongNotNull
            };
            this.validationErrors.push(validate);
        }
    }

    xuLyLuu() {
        let securityOperation = SecurityOperation.Add;
        let mess = 'Bạn có chắc chắn muốn tạo công ty này không?';
        if (this.id !== 0) {
            securityOperation = SecurityOperation.Update;
            mess = 'Bạn có chắc chắn muốn lưu công ty này không?';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: mess }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.OnValidate();
                    if (this.id !== 0) {
                        this.loading = true;

                        if (this.validationErrors != null && this.validationErrors.some(x => x)) {
                            this.loading = false;
                            return;
                        }
                        // tslint:disable-next-line: deprecation
                        this.baseService.update(this.khamDoanCongTy).subscribe(_ => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Chỉnh sửa']));
                            this.loading = false;
                            this.quayLai();
                        },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                this.notificationService.showError(mess);
                                this.loading = false;
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            });
                    } else {
                        this.loading = true;
                        if (this.validationErrors != null && this.validationErrors.some(x => x)) {
                            this.loading = false;
                            return;
                        }
                        // tslint:disable-next-line: deprecation
                        this.baseService.create(this.khamDoanCongTy).subscribe(resultData => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Thêm']));
                            this.loading = false;
                            this.quayLai();
                        },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                this.notificationService.showError(mess);
                                this.loading = false;
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            });
                    }
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupPhongKhamCongTy(id: number = null) {
        let securityOperation = SecurityOperation.Add;
        if (this.id != null) {
            securityOperation = SecurityOperation.Update;
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.dialog.open(KhamDoanCongTyPhongPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Id: id }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                this.gridChild.search();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    quayLai() {
        this.location.back();
    }
}
