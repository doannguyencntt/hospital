import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BienBanCamKetPhauThuatMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BienBanCamKetPhauThuat, ThongTinNguoiBenh } from './bien-ban-cam-ket-phau-thuat.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BienBanCamKetPhauThuatPopupComponent } from '../bien-ban-cam-ket-phau-thuat-popup/bien-ban-cam-ket-phau-thuat-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bien-ban-cam-ket-phau-thuat',
    templateUrl: './bien-ban-cam-ket-phau-thuat.component.html',
    styleUrls: ['./bien-ban-cam-ket-phau-thuat.component.scss']
})
export class BienBanCamKetPhauThuatComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    validationNamSinhErrors: any[] = [];
    filterSourceServer = [];
    bienBanCamKetPhauThuat = new BienBanCamKetPhauThuat();
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
    listGrid:any;
    format = 'n1';
    isAddThongTinBenhNhan:boolean = true;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @ViewChild('gridCamKet', { static: false }) gridCamKet: GridComponent;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
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
        this.gridColumns = [
            { Field: 'HoTen', Title: 'Họ tên', Width: 165, Template: this.hoTenTemplate },
            { Field: 'NamSinh', Title: 'Năm sinh', Width: 165, Template: this.namSinhTemplate },
            { Field: 'Cmnd', Title: 'CMND', Width: 165, Template: this.cmndTemplate },
            { Field: 'QuanHe', Title: 'Quan hệ', Width: 165, Template: this.quanHeTemplate },
            { Field: 'DiaChi', Title: 'Địa chỉ', Width: 165, Template: this.diaChiTemplate },
            { Field: '', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
        ];
        this.getById(this.id);
    }

    getById(id: number) {
        this.apiService.get<any>
            (`DieuTriNoiTru/GetBienBanCamKetPhauThuat?yeuCauTiepNhanId=${id}`).subscribe(resultData => {
              
                    this.bienBanCamKetPhauThuat = { ...resultData };
                    this.returnId.emit(this.bienBanCamKetPhauThuat.IdNoiTruHoSo);
                    if (this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs && this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs.some(x => x)) {
                        setTimeout(() => {
                            $('app-grid#grid-bien-ban-cam-ket-phau-thuat').css('width', '100%');
                        }, 50);
                        this.gridDataSource.data = [...this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs];
                        this.gridDataSource.total = this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs.length;
                        this.listGrid = this.gridDataSource.data;
                    }
                    else{
                        this.gridDataSource.data = [];
                       }
               
                this.closePopupLoadingData();
            }, err => {
                this.notificationService.showError(err.Message);
                this.closePopupLoadingData();
            });
    }

    print() {
      

                this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: "500px",
                    data: {
                      Title: "Xác nhận",
                      Message: "Bạn có muốn in bảng cam kết phẩu thuật này không?",
                    },
                  }).afterClosed().subscribe((res) => {
                    if (res == "Yes") {
                        this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs = [...this.gridDataSource.data];
                        this.listGrid = this.gridDataSource.data;
                        this.uploadTaiLieuDone();
                        this.validationErrors = this.validation();
                        this.validationNamSinhErrors =[];
                        if (this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs != null) {
                            let i: number = 0;
                            this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs.forEach(element => {
                                let ngayHoiChan = new Date();
                                let year: number = ngayHoiChan.getFullYear();
                                if (element.NamSinh > year) {
                                    this.isAddThongTinBenhNhan = false;
                                    const validationItem = {
                                        Field: 'listGrid[' + i + '].NamSinh',
                                        Message: BienBanCamKetPhauThuatMessage.MessageConfirmNamSinhNotValue
                                    };
                                    this.validationNamSinhErrors.push(validationItem);
                                }
                                i++;
                            });
                        }
                        if ((this.validationErrors && this.validationErrors.some(x => x)) || (this.validationNamSinhErrors && this.validationNamSinhErrors.some(x => x))) {
                            return;
                        }
                        this.apiService.post<any>
                            (`DieuTriNoiTru/UpdateBienBanCamKetPhauThuat?yeuCauTiepNhanId=${this.id}`, this.bienBanCamKetPhauThuat)
                            .subscribe(res => {
                                this.bienBanCamKetPhauThuat = { ...res };
                                this.returnId.emit(this.bienBanCamKetPhauThuat.IdNoiTruHoSo);
                                const yeuCauTiepNhanId = this.id;
                                if(res.CheckCreateOrUpdate == true)
                                {
                                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                                }
                                if(res.CheckCreateOrUpdate == false)
                                {
                                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                                }
                                this.dialog.open(BienBanCamKetPhauThuatPopupComponent, {
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

    cancel() {
        this.validationErrors = [];
        this.showPopupHuyPhieu();
        this.getById(this.id);
    }

    validation() {
        const validationResult = [];
        if (!this.bienBanCamKetPhauThuat.NgayThucHien) {
            const validationItem = {
                Field: 'NgayThucHien',
                Message: BienBanCamKetPhauThuatMessage.MessageNgayThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanCamKetPhauThuat.NgayHoiChan) {
            const validationItem = {
                Field: 'NgayHoiChan',
                Message: BienBanCamKetPhauThuatMessage.MessageNgayHoiChanNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanCamKetPhauThuat.BsGiaiThich) {
            const validationItem = {
                Field: 'BsGiaiThich',
                Message: BienBanCamKetPhauThuatMessage.MessageBsGiaiThichNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanCamKetPhauThuat.PhuongPhapPttt) {
            const validationItem = {
                Field: 'PhuongPhapPttt',
                Message: BienBanCamKetPhauThuatMessage.MessagePhuongPhapPtttNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanCamKetPhauThuat.BacSiThucHien) {
            const validationItem = {
                Field: 'BacSiThucHien',
                Message: BienBanCamKetPhauThuatMessage.MessageBsThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (this.bienBanCamKetPhauThuat.NgayHoiChan != null && this.bienBanCamKetPhauThuat.NgayThucHien != null) {
            let ngayHoiChan = new Date(this.bienBanCamKetPhauThuat.NgayHoiChan);
            let ngayThucHien = new Date(this.bienBanCamKetPhauThuat.NgayThucHien);
            if( ngayThucHien < ngayHoiChan)
            {
                const validationItem = {
                    Field: 'NgayThucHien',
                    Message: BienBanCamKetPhauThuatMessage.MessageNgayThucHien
                };
                validationResult.push(validationItem);
            }
          
        }
        return validationResult;
    }
    save() {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn lưu lại bảng cam kết phẩu thuật này không?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs = [...this.gridDataSource.data];
                this.listGrid = this.gridDataSource.data;
                this.uploadTaiLieuDone();
                this.validationErrors = this.validation();
                this.validationNamSinhErrors =[];
                if(this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs != null)
                {
                    let i : number = 0;
                    this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs.forEach(element => {
                        let ngayHoiChan = new Date();
                        let year:number =ngayHoiChan.getFullYear();
                        if( element.NamSinh > year)
                        {
                            this.isAddThongTinBenhNhan = false;
                            const validationItem = {
                                Field: 'listGrid['+ i + '].NamSinh',
                                Message: BienBanCamKetPhauThuatMessage.MessageConfirmNamSinhNotValue
                            };
                            this.validationNamSinhErrors.push(validationItem);
                        }
                        i++;
                    });
                }
                if ((this.validationErrors && this.validationErrors.some(x => x)) || (this.validationNamSinhErrors && this.validationNamSinhErrors.some(x => x))) {
                    return;
                }
                this.showPopupLoadingData();
                this.apiService.post<any>
                    (`DieuTriNoiTru/UpdateBienBanCamKetPhauThuat?yeuCauTiepNhanId=${this.id}`, this.bienBanCamKetPhauThuat)
                    .subscribe(res => {
                        this.bienBanCamKetPhauThuat = { ...res };
                        this.returnId.emit(this.bienBanCamKetPhauThuat.IdNoiTruHoSo);
                        if(res.CheckCreateOrUpdate == true)
                        {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                        }
                        if(res.CheckCreateOrUpdate == false)
                        {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                        }
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

    delete(id: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận xóa phiếu', Message: BienBanCamKetPhauThuatMessage.MessageConfirmDeleteThongTin }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.gridDataSource.data
                    .splice(this.gridDataSource.data
                        .indexOf(this.gridDataSource.data.filter(x => x.Id === id)[0]), 1);
                this.gridDataSource.total = this.gridDataSource.data.length;
                this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs =[...this.gridDataSource.data];
                if (this.gridCamKet) {
                    this.gridCamKet.setDataSource();
                }
                this.validationNamSinhErrors=[];
                if(this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs != null)
                {
                    let i : number = 0;
                    this.bienBanCamKetPhauThuat.ThongTinNguoiBenhs.forEach(element => {
                        let ngayHoiChan = new Date();
                        let year:number =ngayHoiChan.getFullYear();
                        if( element.NamSinh > year)
                        {
                            this.isAddThongTinBenhNhan = false;
                            const validationItem = {
                                Field: 'listGrid['+ i + '].NamSinh',
                                Message: BienBanCamKetPhauThuatMessage.MessageConfirmNamSinhNotValue
                            };
                            this.validationNamSinhErrors.push(validationItem);
                        }
                        i++;
                    });
                }
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa ']));
            }
        });
    }

    uploadTaiLieuDone() {
        console.log(this.bienBanCamKetPhauThuat.FileChuKy);
        if (!(this.ref as ViewRef).destroyed) {
            this.ref.detectChanges();
        }
    }

    addNewInfo() {
        const newInfo = new ThongTinNguoiBenh();
        newInfo.Id = Math.round(Math.random() * 1000000000);
        this.gridDataSource.data.push(newInfo);
        this.gridDataSource.total = this.gridDataSource.data.length;
        setTimeout(() => {
            $('app-grid#grid-bien-ban-cam-ket-phau-thuat').css('width', '100%');
        }, 50);
    }
}
