import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BangKiemAnToanPhauThuatMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BangKiemAnToanPhauThuat } from './bang-kiem-an-toan-phau-thuat.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BangKiemAnToanPhauThuatPopupComponent } from '../bang-kiem-an-toan-phau-thuat-popup/bang-kiem-an-toan-phau-thuat-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bang-kiem-an-toan-phau-thuat',
    templateUrl: './bang-kiem-an-toan-phau-thuat.component.html',
    styleUrls: ['./bang-kiem-an-toan-phau-thuat.component.scss']
})
export class BangKiemAnToanPhauThuatComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    filterSourceServer = [];
    bangKiemAnToanPhauThuat = new BangKiemAnToanPhauThuat();
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
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
    @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
    @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
    @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
    @ViewChild('ngayCamKetTemplate', { static: true }) ngayCamKetTemplate: TemplateRef<any>;

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
            (`DieuTriNoiTru/GetBangKiemAnToanPhauThuat?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
                this.bangKiemAnToanPhauThuat = { ...resultData };
                this.returnId.emit(this.bangKiemAnToanPhauThuat.IdNoiTruHoSo);
                this.closePopupLoadingData();
            }, err => {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            });
    }

    print() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn in bảng kiểm an toàn phẩu thuật này không?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (this.validationErrors && this.validationErrors.some(x => x)) {
                    return;
                }
                this.apiService.post<any>
                    (`DieuTriNoiTru/UpdateBangKiemAnToanPhauThuat?yeuCauTiepNhanId=${this.id}`, this.bangKiemAnToanPhauThuat)
                    .subscribe(res => {
                        this.bangKiemAnToanPhauThuat = { ...res };
                        this.returnId.emit(this.bangKiemAnToanPhauThuat.IdNoiTruHoSo);
                        const yeuCauTiepNhanId = this.id;
                        this.dialog.open(BangKiemAnToanPhauThuatPopupComponent, {
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
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
        
    }
    ngayKiemChange(event){
        this.validationErrors = [];
        if(event != undefined && event != null && event != "")
        {
            let dateNow = Date.now;
            if(event > dateNow)
            {
                const validationItem = {
                    Field: 'NgayKiem',
                    Message: BangKiemAnToanPhauThuatMessage.MessageNgayKiemNotEmpty
                };
                this.validationErrors.push(validationItem);
            }
        }
    }
    cancel() {
        this.validationErrors = [];
        this.showPopupHuyPhieu();
        this.getById(this.id);
    }

    validation() {
        const validationResult = [];
        if (!this.bangKiemAnToanPhauThuat.NgayKiem) {
            const validationItem = {
                Field: 'NgayKiem',
                Message: BangKiemAnToanPhauThuatMessage.MessageNgayKiemNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (this.bangKiemAnToanPhauThuat.NgayKiem ) {
            let dateNow = new Date();
            if(this.bangKiemAnToanPhauThuat.NgayKiem > dateNow)
            {
                const validationItem = {
                    Field: 'NgayKiem',
                    Message: BangKiemAnToanPhauThuatMessage.MessageNgayKiemNotInvalid
                };
                validationResult.push(validationItem);
            }
        }
        return validationResult;
    }

    save() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn lưu lại bảng kiểm an toàn phẩu thuật này không?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
    
                if (this.validationErrors && this.validationErrors.some(x => x)) {
                    return;
                }
                this.showPopupLoadingData();
                this.apiService.post<any>
                    (`DieuTriNoiTru/UpdateBangKiemAnToanPhauThuat?yeuCauTiepNhanId=${this.id}`, this.bangKiemAnToanPhauThuat)
                    .subscribe(res => {
                        this.bangKiemAnToanPhauThuat = { ...res };
                        this.returnId.emit(this.bangKiemAnToanPhauThuat.IdNoiTruHoSo);
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                        this.closePopupLoadingData();
                    },
                        (err: ApiError) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
            }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
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
        console.log(this.bangKiemAnToanPhauThuat.FileChuKy);
        if (!(this.ref as ViewRef).destroyed) {
            this.ref.detectChanges();
        }
    }
}
