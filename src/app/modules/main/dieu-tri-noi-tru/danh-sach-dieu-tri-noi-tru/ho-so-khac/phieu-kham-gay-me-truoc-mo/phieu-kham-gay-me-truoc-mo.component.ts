import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { PhieuKhamGayMeTruocMoMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuKhamGayMeTruocMo } from './phieu-kham-gay-me-truoc-mo.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { PhieuKhamGayMeTruocMoPopupComponent } from '../phieu-kham-gay-me-truoc-mo-popup/phieu-kham-gay-me-truoc-mo-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-phieu-kham-gay-me-truoc-mo',
    templateUrl: './phieu-kham-gay-me-truoc-mo.component.html',
    styleUrls: ['./phieu-kham-gay-me-truoc-mo.component.scss']
})
export class PhieuKhamGayMeTruocMoComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    filterSourceServer = [];
    phieuKhamGayMeTruocMo = new PhieuKhamGayMeTruocMo();
    id: number ;
    newEmployee = '';
    showAddNewBbhc = false;
    showGrid = false;
    icAddCircle = icAddCircle;
    queryinfo: LookupQueryInfo = new LookupQueryInfo();
    gridColumns = [];
    icDelete = icDelete;
    icClear = icClear;
    gridDataSource: any = {
        data: [],
        total: 0
    };
    format = 'n2';
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
    @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
    @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
    @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
    @ViewChild('ngayCamKetTemplate', { static: true }) ngayCamKetTemplate: TemplateRef<any>;
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.id = this.dieuTriNoiTruModel.Id;
        this.getById(this.id);
    }

    getById(id: number) {
        this.apiService.get<any>
            (`DieuTriNoiTru/GetPhieuKhamGayMeTruocMo?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
                this.phieuKhamGayMeTruocMo = { ...resultData };
                if(this.phieuKhamGayMeTruocMo.RangGia == null)
                {
                    this.phieuKhamGayMeTruocMo.RangGia= 0;
                }
                this.returnId.emit(this.phieuKhamGayMeTruocMo.IdNoiTruHoSo);
                this.closePopupLoadingData();
            }, err => {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            });
    }

    print() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdatePhieuKhamGayMeTruocMo?yeuCauTiepNhanId=${this.id}`, this.phieuKhamGayMeTruocMo)
            .subscribe(res => {
                this.phieuKhamGayMeTruocMo = { ...res };
                this.returnId.emit(this.phieuKhamGayMeTruocMo.IdNoiTruHoSo);
                const yeuCauTiepNhanId = this.id;
                this.dialog.open(PhieuKhamGayMeTruocMoPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { yeuCauTiepNhanId }
                }).afterClosed().subscribe(() => { });
            },
                (err: ApiError) => {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                });

    }

    cancel() {
        this.validationErrors = [];
        this.showPopupHuyPhieu();
        this.getById(this.id);
    }

    validation() {
        const validationResult = [];
        if (!this.phieuKhamGayMeTruocMo.NgayKham) {
            const validationItem = {
                Field: 'NgayKham',
                Message: PhieuKhamGayMeTruocMoMessage.MessageNgayKhamNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.phieuKhamGayMeTruocMo.NgayHenKham) {
            const validationItem = {
                Field: 'NgayHenKham',
                Message: PhieuKhamGayMeTruocMoMessage.MessageNgayHenKhamNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.phieuKhamGayMeTruocMo.DdThucHien) {
            const validationItem = {
                Field: 'DdThucHien',
                Message: PhieuKhamGayMeTruocMoMessage.MessageDdThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.phieuKhamGayMeTruocMo.BsGmHs) {
            const validationItem = {
                Field: 'BsGmHs',
                Message: PhieuKhamGayMeTruocMoMessage.MessageBsGmhsNotEmpty
            };
            validationResult.push(validationItem);
        }
        return validationResult;
    }

    save() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.showPopupLoadingData();
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdatePhieuKhamGayMeTruocMo?yeuCauTiepNhanId=${this.id}`, this.phieuKhamGayMeTruocMo)
            .subscribe(res => {
                this.phieuKhamGayMeTruocMo = { ...res };
                this.returnId.emit(this.phieuKhamGayMeTruocMo.IdNoiTruHoSo);
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật ']));
                this.closePopupLoadingData();
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
            data: { Title: 'Đang lưu biên bản...' },
        });
    }

    showPopupHuyPhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang hủy biên bản...' },
        });
    }

    showPopupDeleteThongTin() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xóa thông tin người bệnh...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    uploadTaiLieuDone() {
        console.log(this.phieuKhamGayMeTruocMo.FileChuKy);
        if (!(this.ref as ViewRef).destroyed) {
            this.ref.detectChanges();
        }
    }
}
