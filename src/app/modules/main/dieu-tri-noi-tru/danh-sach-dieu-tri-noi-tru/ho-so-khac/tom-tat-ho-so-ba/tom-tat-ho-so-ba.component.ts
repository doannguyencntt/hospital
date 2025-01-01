import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TomTatHoSoBenhAnMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TomTatHoSoBenhAn } from './tom-tat-ho-so-ba.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { TomTatHoSoBenhAnPopupComponent } from '../tom-tat-ho-so-ba-popup/tom-tat-ho-so-ba-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tom-tat-ho-so-ba',
    templateUrl: './tom-tat-ho-so-ba.component.html',
    styleUrls: ['./tom-tat-ho-so-ba.component.scss']
})
export class TomTatHoSoBenhAnComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    filterSourceServer = [];
    tomTatHoSoBenhAn = new TomTatHoSoBenhAn();
    id: number;
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
    format = 'n1';
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
    @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
    @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
    @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
    @ViewChild('ngayCamKetTemplate', { static: true }) ngayCamKetTemplate: TemplateRef<any>;

    constructor(
        private apiService: ApiService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.showPopupLoadingData();
        this.id = this.dieuTriNoiTruModel.Id;
        this.getById(this.id);
    }

    getById(id: number) {
        this.apiService.get<any>
            (`DieuTriNoiTru/GetTomTatHoSoBenhAn?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
                this.tomTatHoSoBenhAn = { ...resultData };
                this.returnId.emit(this.tomTatHoSoBenhAn.IdNoiTruHoSo);
                if (this.tomTatHoSoBenhAn.IsCreated === true) {
                    Observable.forkJoin([
                        this.apiService.get<any>
                            (`DieuTriNoiTru/GetKetQuaXNCLS?yeuCauTiepNhanId=${id}`),
                        this.apiService.get<any>
                            (`DieuTriNoiTru/GetTinhTrangNguoiBenh?yeuCauTiepNhanId=${id}`),
                        this.apiService.get<any>
                            (`DieuTriNoiTru/GetPhuongPhapSuDungTrongDieuTri?yeuCauTiepNhanId=${id}`)
                    ]).subscribe(results => {
                         this.tomTatHoSoBenhAn.KqXnCls = results[0];
                        this.tomTatHoSoBenhAn.TinhTrangChuyenTuyen = results[1];
                        this.tomTatHoSoBenhAn.PpDieuTri = results[2];
                        this.closePopupLoadingData();
                    });
                } else {
                    this.closePopupLoadingData();
                }
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
        this.showPopupSavingData();
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdateTomTatHoSoBenhAn?yeuCauTiepNhanId=${this.id}`, this.tomTatHoSoBenhAn)
            .subscribe(res => {
                this.tomTatHoSoBenhAn = { ...res };
                this.returnId.emit(this.tomTatHoSoBenhAn.IdNoiTruHoSo);
                const yeuCauTiepNhanId = this.id;
                this.closePopupLoadingData();
                this.dialog.open(TomTatHoSoBenhAnPopupComponent, {
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
        if (!this.tomTatHoSoBenhAn.NgayThucHien) {
            const validationItem = {
                Field: 'NgayThucHien',
                Message: TomTatHoSoBenhAnMessage.MessageNgayThucHienNotEmpty
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
        this.showPopupSavingData();
        this.apiService.post<any>
            (`DieuTriNoiTru/UpdateTomTatHoSoBenhAn?yeuCauTiepNhanId=${this.id}`, this.tomTatHoSoBenhAn)
            .subscribe(res => {
                this.tomTatHoSoBenhAn = { ...res };
                this.returnId.emit(this.tomTatHoSoBenhAn.IdNoiTruHoSo);
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
            width: '300px',
            height: '90px',
            data: { Title: 'Đang mở hồ sơ bệnh án...' },
        });
    }

    showPopupSavingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '300px',
            height: '90px',
            data: { Title: 'Đang lưu hồ sơ bệnh án...' },
        });
    }

    showPopupHuyPhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '300px',
            height: '90px',
            data: { Title: 'Đang hủy hồ sơ bệnh án...' },
        });
    }

    showPopupDeleteThongTin() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '300px',
            height: '90px',
            data: { Title: 'Đang xóa thông tin người bệnh...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    uploadTaiLieuDone() {
        if (!(this.ref as ViewRef).destroyed) {
            this.ref.detectChanges();
        }
    }
}
