import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BangTheoDoiHoiTinhMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BangTheoDoiHoiTinh, PhieuHoiTinh } from './bang-theo-doi-hoi-tinh.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BangTheoDoiHoiTinhPopupComponent } from '../bang-theo-doi-hoi-tinh-popup/bang-theo-doi-hoi-tinh-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bang-theo-doi-hoi-tinh',
    templateUrl: './bang-theo-doi-hoi-tinh.component.html',
    styleUrls: ['./bang-theo-doi-hoi-tinh.component.scss']
})
export class BangTheoDoiHoiTinhComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    filterSourceServer = [];
    bangTheoDoiHoiTinh = new BangTheoDoiHoiTinh();
    id: number;
    newEmployee = '';
    showAddNewPhieu = false;
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
    listPhieuCurrent = [];
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('gridBangTheoDoiHoiTinh', { static: false }) gridBangTheoDoiHoiTinh: GridComponent;
    @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('cmndTemplate', { static: true }) cmndTemplate: TemplateRef<any>;
    @ViewChild('namSinhTemplate', { static: true }) namSinhTemplate: TemplateRef<any>;
    @ViewChild('quanHeTemplate', { static: true }) quanHeTemplate: TemplateRef<any>;
    @ViewChild('diaChiTemplate', { static: true }) diaChiTemplate: TemplateRef<any>;
    @ViewChild('ngayCamKetTemplate', { static: true }) ngayCamKetTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.id = this.dieuTriNoiTruModel.Id;
        this.gridColumns = [
            { Field: 'NgayThucHienDisplay', Title: 'Ngày thực hiện', Width: 165, Template: this.ngayThucHienTemplate },
            { Field: 'CachMo', Title: 'Cách mổ', Width: 165 },
            { Field: 'DdNhan', Title: 'Điều dưỡng nhận', Width: 800 },
            { Field: '', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
        ];
        this.getById(this.id);
    }

    getById(id: number) {
        this.apiService.get<any>
            (`DieuTriNoiTru/GetBangTheoDoiHoiTinh?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
                this.bangTheoDoiHoiTinh = { ...resultData };
                this.returnId.emit(this.bangTheoDoiHoiTinh.IdNoiTruHoSo);
                if (this.bangTheoDoiHoiTinh.ListPhieu && this.bangTheoDoiHoiTinh.ListPhieu.some(x => x)) {
                    if (LocalStorageHelper.getItem('idBangTheoDoiHoiTinh')) {
                        const idsString: string = LocalStorageHelper.getItem('idBangTheoDoiHoiTinh');
                        const ids = JSON.parse(idsString);
                        // ids.forEach(idItem => {
                        //     if (!this.bangTheoDoiHoiTinh.ListPhieu.some(x => x.Id === idItem)) {
                        //         // delete what is not saved before
                        //         this.bangTheoDoiHoiTinh.ListPhieu
                        //             .splice(this.bangTheoDoiHoiTinh.ListPhieu
                        //                 .indexOf(this.bangTheoDoiHoiTinh.ListPhieu.filter(x => x.Id === idItem)[0]), 1);
                        //     }
                        // });

                        if (this.bangTheoDoiHoiTinh.ThongTinHoSo &&
                            this.bangTheoDoiHoiTinh.ThongTinHoSo !== '') {
                            this.showAddNewPhieu = true;
                        }

                        if (this.bangTheoDoiHoiTinh.ListPhieu.some(x => x)) {
                            this.showGrid = true;
                        }
                        this.gridDataSource = {
                            data: this.bangTheoDoiHoiTinh.ListPhieu,
                            total: this.bangTheoDoiHoiTinh.ListPhieu.length
                        };
                    } else {
                        if (this.bangTheoDoiHoiTinh.ThongTinHoSo &&
                            this.bangTheoDoiHoiTinh.ThongTinHoSo !== '') {
                            this.showAddNewPhieu = true;
                        }

                        if (this.bangTheoDoiHoiTinh.ListPhieu.some(x => x)) {
                            this.showGrid = true;
                        }
                        this.gridDataSource = {
                            data: this.bangTheoDoiHoiTinh.ListPhieu,
                            total: this.bangTheoDoiHoiTinh.ListPhieu.length
                        };
                        // LocalStorageHelper.setItem('idBangTheoDoiHoiTinh', null);
                        // this.bangTheoDoiHoiTinh.ListPhieu = [];
                        // this.gridDataSource = {
                        //     data: [],
                        //     total: 0
                        // };
                    }
                    this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
                }
            });
    }

    validation() {
        const validationResult = [];
        if (!this.bangTheoDoiHoiTinh.NgayThucHien) {
            const validationItem = {
                Field: 'NgayThucHien',
                Message: BangTheoDoiHoiTinhMessage.MessageNgayThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }

        return validationResult;
    }

    print() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn in bảng theo dõi hồi tỉnh này không ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                this.apiService.post<any>
            (`DieuTriNoiTru/UpdateBangTheoDoiHoiTinh?yeuCauTiepNhanId=${this.id}`, this.bangTheoDoiHoiTinh)
            .subscribe(res => {
                this.bangTheoDoiHoiTinh = { ...res };
                this.returnId.emit(this.bangTheoDoiHoiTinh.IdNoiTruHoSo);
                if (this.bangTheoDoiHoiTinh.ListPhieu &&
                    this.bangTheoDoiHoiTinh.ListPhieu.some(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                    this.bangTheoDoiHoiTinh.ListPhieu.filter(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)
                    [0].NgayThucHienDisplay = this.bangTheoDoiHoiTinh.NgayThucHienReadonly;
                }

                if (this.gridDataSource && this.gridDataSource.data.some(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                    this.gridDataSource.data.filter(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)[0].NgayThucHienDisplay
                        = this.bangTheoDoiHoiTinh.NgayThucHienReadonly;
                }

               

                if (!this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id).includes(this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                    this.showAddNewPhieu = true;
                }
                if(res.IsSave)
                {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                }else{
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                }
                if (this.gridBangTheoDoiHoiTinh) {
                    this.gridBangTheoDoiHoiTinh.gridDataSource = { ...this.gridDataSource };
                    this.gridBangTheoDoiHoiTinh.setDataSource();
                }
                this.getById(this.id);
                this.closePopupLoadingData();
                const yeuCauTiepNhanId = this.id;
                this.dialog.open(BangTheoDoiHoiTinhPopupComponent, {
                    disableClose: false,
                    width: '1200px',
                    data: { yeuCauTiepNhanId, NoiTruHoSoId: this.bangTheoDoiHoiTinh.IdNoiTruHoSo }
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

    cancel() {
        this.validationErrors = [];
        this.showPopupHuyPhieu();
        this.getById(this.id)
        this.closePopupLoadingData();
        //this.getByPhieu(this.bangTheoDoiHoiTinh.IdNoiTruHoSo);
    }

    save() {
        this.uploadTaiLieuDone();
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.showPopupLoadingData();

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn lưu bảng theo dõi hồi tỉnh này không ?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
    
                this.apiService.post<any>
                (`DieuTriNoiTru/UpdateBangTheoDoiHoiTinh?yeuCauTiepNhanId=${this.id}`, this.bangTheoDoiHoiTinh)
                .subscribe(res => {
                    this.bangTheoDoiHoiTinh = { ...res };
                    this.returnId.emit(this.bangTheoDoiHoiTinh.IdNoiTruHoSo);
                    if (this.bangTheoDoiHoiTinh.ListPhieu &&
                        this.bangTheoDoiHoiTinh.ListPhieu.some(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                        this.bangTheoDoiHoiTinh.ListPhieu.filter(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)
                        [0].NgayThucHienDisplay = this.bangTheoDoiHoiTinh.NgayThucHienReadonly;
                    }
    
                    if (this.gridDataSource && this.gridDataSource.data.some(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                        this.gridDataSource.data.filter(x => x.Id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo)[0].NgayThucHienDisplay
                            = this.bangTheoDoiHoiTinh.NgayThucHienReadonly;
                    }
    
                  
    
                    if (!this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id).includes(this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                        this.showAddNewPhieu = true;
                    }
                    if(res.IsSave)
                    {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                    }else{
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                    }
                    if (this.gridBangTheoDoiHoiTinh) {
                        this.gridBangTheoDoiHoiTinh.gridDataSource = { ...this.gridDataSource };
                        this.gridBangTheoDoiHoiTinh.setDataSource();
                    }
                    this.getById(this.id);
                    this.closePopupLoadingData();
                },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
            }
            else{
                this.closePopupLoadingData();
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
            width: '250px',
            height: '90px',
            data: { Title: 'Đang lưu bảng theo dõi...' },
        });
    }

    showPopupLoadingPhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang lấy bảng theo dõi...' },
        });
    }

    showPopupHuyPhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang hủy bảng theo dõi...' },
        });
    }

    showPopupDeletePhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
            height: '90px',
            data: { Title: 'Đang xóa bảng theo dõi...' },
        });
    }

    showPopupDeleteThongTin() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '250px',
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

    addNewBangTheoDoi() {
        this.showAddNewPhieu = false;
        // this.getById(this.id);
        if(this.bangTheoDoiHoiTinh.ListPhieu.length != 0)
        {
            if (!this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id).includes(this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
                this.showGrid = true;
    
                if (typeof this.bangTheoDoiHoiTinh.NgayThucHien === 'string') {
                    this.bangTheoDoiHoiTinh.NgayThucHien = new Date(this.bangTheoDoiHoiTinh.NgayThucHien);
                }
    
                const phieuHoiTinh: PhieuHoiTinh = {
                    Id: null,
                    CachMo: this.bangTheoDoiHoiTinh.CachMo,
                    DdNhan: this.bangTheoDoiHoiTinh.DdNhan,
                    NgayThucHienDisplay: this.bangTheoDoiHoiTinh.NgayThucHienReadonly
                };
    
                this.bangTheoDoiHoiTinh.ListPhieu.push(phieuHoiTinh);
                this.gridDataSource = {
                    data: this.bangTheoDoiHoiTinh.ListPhieu,
                    total: this.bangTheoDoiHoiTinh.ListPhieu.length
                };
    
                const idPhieu = JSON.stringify(this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id));
                LocalStorageHelper.setItem('idBangTheoDoiHoiTinh', idPhieu);
    
                if (this.gridBangTheoDoiHoiTinh) {
                    this.gridBangTheoDoiHoiTinh.gridDataSource = { ...this.gridDataSource };
                    this.gridBangTheoDoiHoiTinh.setDataSource();
                }
            }
        }
        else{
            this.showGrid = false;
        }
        this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
        this.bangTheoDoiHoiTinh = new BangTheoDoiHoiTinh();
        this.bangTheoDoiHoiTinh.ListPhieu = [...this.listPhieuCurrent];
    }

    getPhieu(id: number, e: any) {
        e.preventDefault();
        this.showPopupLoadingPhieu();
        if (this.bangTheoDoiHoiTinh.IdNoiTruHoSo &&
            !this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id).includes(this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
            this.addNewPhieuTheoDoi();
        }
        this.showAddNewPhieu = true;
        this.getByPhieu(id);
    }

    addNewPhieuTheoDoi() {
        this.showAddNewPhieu = false;
          
        if (!this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id).includes(this.bangTheoDoiHoiTinh.IdNoiTruHoSo)) {
            this.showGrid = true;

            if (typeof this.bangTheoDoiHoiTinh.NgayThucHien === 'string') {
                this.bangTheoDoiHoiTinh.NgayThucHien = new Date(this.bangTheoDoiHoiTinh.NgayThucHien);
            }

            const phieuHoiTinh: PhieuHoiTinh = {
                Id: this.bangTheoDoiHoiTinh.IdNoiTruHoSo,
                CachMo: this.bangTheoDoiHoiTinh.CachMo,
                DdNhan: this.bangTheoDoiHoiTinh.DdNhan,
                NgayThucHienDisplay: this.bangTheoDoiHoiTinh.NgayThucHienReadonly
            };

            this.bangTheoDoiHoiTinh.ListPhieu.push(phieuHoiTinh);
            this.gridDataSource = {
                data: this.bangTheoDoiHoiTinh.ListPhieu,
                total: this.bangTheoDoiHoiTinh.ListPhieu.length
            };

            const idPhieu = JSON.stringify(this.bangTheoDoiHoiTinh.ListPhieu.map(x => x.Id));
            LocalStorageHelper.setItem('idBangTheoDoiHoiTinh', idPhieu);

            if (this.gridBangTheoDoiHoiTinh) {
                this.gridBangTheoDoiHoiTinh.gridDataSource = { ...this.gridDataSource };
                this.gridBangTheoDoiHoiTinh.setDataSource();
            }
        }
        this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
        this.bangTheoDoiHoiTinh = new BangTheoDoiHoiTinh();
        this.bangTheoDoiHoiTinh.ListPhieu = [...this.listPhieuCurrent];
    }

    delete(id: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận xóa phiếu', Message: BangTheoDoiHoiTinhMessage.MessageConfirmDeletePhieu }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.showPopupDeletePhieu();
                this.apiService.get<any>(`DieuTriNoiTru/DeleteBangTheoDoiHoiTinh?phieuId=${id}&&yctnId=${this.id}`).subscribe(
                    () => {
                        this.closePopupLoadingData();
                        this.bangTheoDoiHoiTinh.ListPhieu
                            .splice(this.bangTheoDoiHoiTinh.ListPhieu
                                .indexOf(this.bangTheoDoiHoiTinh.ListPhieu.filter(x => x.Id === id)[0]), 1);
                        this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
                        this.gridDataSource = {
                            data: this.bangTheoDoiHoiTinh.ListPhieu,
                            total: this.bangTheoDoiHoiTinh.ListPhieu.length
                        };
                        if(this.gridDataSource.total== 0)
                        {
                            this.showGrid = false;
                        }
                        if (this.gridBangTheoDoiHoiTinh) {
                            this.gridBangTheoDoiHoiTinh.gridDataSource = { ...this.gridDataSource };
                            this.gridBangTheoDoiHoiTinh.setDataSource();
                        }
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa ']));
                        this.getById(this.id);
                    },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
            }
        });
        // if (this.bangTheoDoiHoiTinh.IdNoiTruHoSo && id === this.bangTheoDoiHoiTinh.IdNoiTruHoSo) {
        //     this.notificationService.showError(BangTheoDoiHoiTinhMessage.MessageNotAllowDelete);
        // } else {
           
        // }
    }

    getByPhieu(id: number) {
        if (id) {
            this.apiService.get<any>
                (`DieuTriNoiTru/GetBangTheoDoiCuThe?phieuId=${id}&&yctnId=${this.id}`).subscribe(resultData => {
                    this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
                    this.bangTheoDoiHoiTinh = { ...resultData };
                    this.bangTheoDoiHoiTinh.ListPhieu = [...this.listPhieuCurrent];
                    this.closePopupLoadingData();
                },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
        } else {
            this.listPhieuCurrent = [...this.bangTheoDoiHoiTinh.ListPhieu];
            this.bangTheoDoiHoiTinh = new BangTheoDoiHoiTinh();
            this.bangTheoDoiHoiTinh.ListPhieu = [...this.listPhieuCurrent];
            this.closePopupLoadingData();
        }
    }
}
