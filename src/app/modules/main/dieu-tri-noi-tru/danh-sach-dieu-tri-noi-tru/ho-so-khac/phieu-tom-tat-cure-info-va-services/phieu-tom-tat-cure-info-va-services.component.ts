import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { CuringInfoAndServicesGeneralSheet, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CureInfoAndServicesSheet } from './phieu-tom-tat-cure-info-va-services.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { PhieuCureInfoVaServicesPopupComponent } from '../phieu-cure-info-va-services-popup/phieu-cure-info-va-services-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-tom-tat-cure-info-va-services',
    templateUrl: './phieu-tom-tat-cure-info-va-services.component.html',
    styleUrls: ['./phieu-tom-tat-cure-info-va-services.component.scss']
})
export class PhieuTomTatCureInfoAndServicesComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    cureInfoAndServicesSheet = new CureInfoAndServicesSheet();
    id: number;
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private notificationService: NotificationService,
    ) { }

    ngOnInit() {
        this.id = this.dieuTriNoiTruModel.Id;
        this.getById(this.id);
    }

    getById(id: number) {
        this.apiService.get<any>
            (`DieuTriNoiTru/GetCuringInfoAndServicesGeneralSheet?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
                this.returnId.emit(resultData.NoiTruHoSoKhacId)
                this.cureInfoAndServicesSheet = { ...resultData };
            });
    }

    print() {
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdateCuringInfoAndServicesGeneralSheet?yeuCauTiepNhanId=${this.id}`, this.cureInfoAndServicesSheet)
            .subscribe(() => {
                this.getById(this.id);
                const yeuCauTiepNhanId = this.id;
                this.dialog.open(PhieuCureInfoVaServicesPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { yeuCauTiepNhanId }
                }).afterClosed().subscribe(_ => { });
            },
                (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                });
    }

    cancel() {
        this.validationErrors = [];
        this.getById(this.id);
    }

    validation() {
        const validationResult = [];
        if (!this.cureInfoAndServicesSheet.NgayThucHien) {
            const validationItem = {
                Field: 'NgayThucHien',
                Message: CuringInfoAndServicesGeneralSheet.MessageNgayThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.cureInfoAndServicesSheet.BsDieuTri) {
            const validationItem = {
                Field: 'BsDieuTri',
                Message: CuringInfoAndServicesGeneralSheet.MessageBsDieuTriNotEmpty
            };
            validationResult.push(validationItem);
        }
        return validationResult;
    }

    save() {
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.showPopupLoadingData();
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdateCuringInfoAndServicesGeneralSheet?yeuCauTiepNhanId=${this.id}`, this.cureInfoAndServicesSheet)
            .subscribe(() => {
                this.closePopupLoadingData();
                this.getById(this.id);
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
            },
                (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                });
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu phiếu...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }
}
