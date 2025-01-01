import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BienBanHoiChanPhauThuatMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BienBanHoiChanPhauThuat, PhieuHoiChan, NoiTruHoSoKhacBienBanHoiChanPhauThuat,ThanhVienThamGia,ThongTinThanhVienThamGia } from './bien-ban-hoi-chan-phau-thuat.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BienBanHoiChanPhauThuatPopupComponent } from '../bien-ban-hoi-chan-phau-thuat-popup/bien-ban-hoi-chan-phau-thuat-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import icAdd from '@iconify/icons-ic/twotone-add';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { AuthService } from 'src/app/core/services/auth.service';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-bien-ban-hoi-chan-phau-thuat',
    templateUrl: './bien-ban-hoi-chan-phau-thuat.component.html',
    styleUrls: ['./bien-ban-hoi-chan-phau-thuat.component.scss']
})
export class BienBanHoiChanPhauThuatComponent implements OnInit {
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    noiTruHoSoKhacBienBanHoiChanPhauThuat = {} as NoiTruHoSoKhacBienBanHoiChanPhauThuat;
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any[] = [];
    filterSourceServer = [];
    dataSourceFilterThanhVienThamGia = [];
    dataSourceFilterNhomPhauThuat = [];
    dataSourceFilterNhomGayMe = [];
    bienBanHoiChanPhauThuat = new BienBanHoiChanPhauThuat();
    thanhVienThamGia = new ThanhVienThamGia();
    thanhVienThamGias = new Array<ThanhVienThamGia>();
    id: number;
    newEmployee = '';
    showAddNewBbhc = false;
    showGrid: boolean = false;
    queryinfo: LookupQueryInfo = new LookupQueryInfo();
    gridColumns = [];
    gridColumnThanhVienThamGias = [];
    icDelete = icDelete;
    icClear = icClear;
    icAdd = icAdd;
    gridDataSource: any = {
        data: [],
        total: 0
    };
    dataSourceThanhVienThamGia: any = {
        data: [],
        total: 0
    };
    listPhieuCurrent = [];
    current: Date = new Date();
    getNhanVienId: any;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('gridHoiChan', { static: true }) gridHoiChan: GridComponent;
    @ViewChild('multiSelectThanhVienThamGia', { static: true }) public multiSelectThanhVienThamGia: any;
    @ViewChild('multiSelectNhomPhauThuat', { static: true }) public multiSelectNhomPhauThuat: any;
    @ViewChild('multiSelectNhomGayMe', { static: true }) public multiSelectNhomGayMe: any;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('ngayHoiChanTemplate', { static: true }) ngayHoiChanTemplate: TemplateRef<any>;

    @ViewChild('thanhVienThamGiaTemplate', { static: true }) thanhVienThamGiaTemplate: TemplateRef<any>;
    @ViewChild('viTriCongTacTemplate', { static: true }) viTriCongTacTemplate: TemplateRef<any>;
    @ViewChild('actionThanhVienThamGiaTemplate', { static: true }) actionThanhVienThamGiaTemplate: TemplateRef<any>;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef,
        private authService: AuthService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.id = this.dieuTriNoiTruModel.Id;
        this.getNhanVienId = this.authService.getAccessUser();
        this.gridColumns = [
            { Field: 'NgayHoiChanDisplay', Title: 'Ngày hội chẩn', Width: 165, Template: this.ngayHoiChanTemplate },
            { Field: 'ThanhVienThamGiaDisplay', Title: 'Thành viên tham gia', Width: 300 },
            { Field: 'ChanDoan', Title: 'Chẩn đoán', Width: 500 },
            { Field: '', Title: '', HideFilter: true, Width: 50, Template: this.actionTemplate }
        ];
        this.gridColumnThanhVienThamGias = [
            { Field: 'ThanhVienThamGia', Title: 'Thành viên tham gia', Width: 200, Template: this.thanhVienThamGiaTemplate },
            { Field: 'ViTriCongTac', Title: 'Vị trí công tác', Width: 150 , Template: this.viTriCongTacTemplate},
            { Field: '', Title: '', HideFilter: true, Width: 50, Template: this.actionThanhVienThamGiaTemplate }
        ];
        this.getListBacSi();
        this.getById(this.id);
        this.getDanhSachBienBanHoiChanPhauThuat(this.id);
    }

    getListBacSi() {
        this.apiService.post<any>
            ('DieuTriNoiTru/GetChuToa', this.queryinfo).subscribe(resultData => {
                this.filterSourceServer = [...resultData];
                this.dataSourceFilterThanhVienThamGia = [...this.filterSourceServer];
                this.dataSourceFilterNhomGayMe = [...this.filterSourceServer];
                this.dataSourceFilterNhomPhauThuat = [...this.filterSourceServer];
                setTimeout(() => {
                    $('kendo-textbox-container > kendo-multiselect .k-multiselect-wrap.k-floatwrap').css('margin-top', '20px');
                    $('kendo-textbox-container > kendo-multiselect').css('background-color', '#F2F2F2');
                }, 50);
            });
    }

    getById(id: number) {
        this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuBienBanHoiChanPhauThuat?yeuCauTiepNhanId=" + id).subscribe(
            (result) => {
                if (result != null) {
                    let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                    this.bienBanHoiChanPhauThuat = thongTinHoSo;
                  
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result.Id;
                    this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);
                    this.bienBanHoiChanPhauThuat.FileChuKy = [...result.ListFile];
                    this.thanhVienThamGias = [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias]
                    this.dataSourceThanhVienThamGia ={
                        data: [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias],
                        total:[...this.bienBanHoiChanPhauThuat.ThanhVienThamGias].length
                    };
                }
                else {
                    this.bienBanHoiChanPhauThuat = new BienBanHoiChanPhauThuat();

                    let nhanVienThucHienId = this.getNhanVienId.Id;
                    this.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + this.getNhanVienId.Id + "&yeuCauTiepNhanId=" + id).subscribe(
                        (result) => {
                            this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = 0;
                            this.bienBanHoiChanPhauThuat.NguoiThucHienReadonly = result.TenNhanVien;
                            this.bienBanHoiChanPhauThuat.NgayThucHienReadonly = result.NgayThucHien;
                        },
                        (err: ApiError) => {
                            this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                            }
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
    getDanhSachBienBanHoiChanPhauThuat(id: number) {
        this.apiService.post<any>("DieuTriNoiTru/GetDanhSachBienBanHoiChanPhauThuat?yeuCauTiepNhanId=" + id).subscribe(
            (result) => {
                if (result != null) {
                    this.gridDataSource = {
                        data: result,
                        total: result.length
                    };
                    this.setDataGridView();
                    if (this.gridDataSource.total != 0) {
                        this.showAddNewBbhc = true;
                    }
                    else{
                        this.showAddNewBbhc = false;
                    }
                }
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }
    setDataGridView() {
        this.gridHoiChan.gridDataSource = this.gridDataSource;

        if (this.gridHoiChan !== undefined) {
            this.gridHoiChan.setDataSource();
        }
    }
    onOpenNhanVienThamGia(isOpen: boolean) {
        if (isOpen) {
            this.dataSourceFilterThanhVienThamGia = [...this.filterSourceServer];
        }
    }

    onOpenNhanVienGayMe(isOpen: boolean) {
        if (isOpen) {
            this.dataSourceFilterNhomGayMe = [...this.filterSourceServer];
        }
    }

    onOpenNhanVienPhauThuat(isOpen: boolean) {
        if (isOpen) {
            this.dataSourceFilterNhomPhauThuat = [...this.filterSourceServer];
        }
    }

    print() {
        let dataIn = {
          HostingName: window.location.protocol + "//" + window.location.host,
          IdNoiTruHoSo: this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id,
          YeuCauTiepNhanId: this.id,
          LoaiHoSoDieuTriNoiTru: 7,
          Header:null
        }
        if(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id == 0)
        {
          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có in biên bản hội chẩn phẩu thuật này không?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
              
                this.validationErrors = this.validation();
                if (this.validationErrors && this.validationErrors.some(x => x)) {
                    return;
                }
                this.bienBanHoiChanPhauThuat.ThanhVienThamGias =  this.dataSourceThanhVienThamGia.data;
                const thongTinHoSo = JSON.stringify(this.bienBanHoiChanPhauThuat);
                this.noiTruHoSoKhacBienBanHoiChanPhauThuat.YeuCauTiepNhanId = this.id;
                this.noiTruHoSoKhacBienBanHoiChanPhauThuat.FileChuKy = this.bienBanHoiChanPhauThuat.FileChuKy;
                this.noiTruHoSoKhacBienBanHoiChanPhauThuat.LoaiHoSoDieuTriNoiTru = 7;
                this.noiTruHoSoKhacBienBanHoiChanPhauThuat.ThongTinHoSo = thongTinHoSo;
        
                this.showPopupLoadingData();
                this.apiService.post<any>
                    ("DieuTriNoiTru/UpdateVaCreateBienBanHoiChanPhauThuat", this.noiTruHoSoKhacBienBanHoiChanPhauThuat)
                    .subscribe(
                        (result) => {
                        this.showAddNewBbhc = true;
                        if (this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id == null) {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu ']));
                        }
                        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result.Id;
                        this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);
                        let idIN = result.Id;
                        this.getDanhSachBienBanHoiChanPhauThuat(this.id);
                        // this.getById(this.id);
                        this.cancel();
                        let dataIns = {
                            HostingName: window.location.protocol + "//" + window.location.host,
                            IdNoiTruHoSo:   idIN,
                            YeuCauTiepNhanId: this.id,
                            LoaiHoSoDieuTriNoiTru: 7,
                            Header:null
                          }
                        this.apiService.post<any>("DieuTriNoiTru/PhieuInBienBanHoiChanPhauThuat", dataIns).subscribe(
                            (result) => {
                              this.dialog.open(BienBanHoiChanPhauThuatPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                              }).afterClosed().subscribe(() => {
                              });
                            },
                            (err: ApiError) => {
                              this.validationErrors = err.ValidationErrors;
                              if (err.Message != "Validation Failed") {
                                this.notificationService.showError(err.Message);
                              }
                            });
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
        else{
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                  Title: "Xác nhận",
                  Message: "Bạn có in biên bản hội chẩn phẩu thuật này không?",
                },
              }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                  
                    this.validationErrors=[];
                    this.cdRef.detectChanges();
                    this.validationErrors = this.validation();
                    if (this.validationErrors && this.validationErrors.some(x => x)) {
                        return;
                    }
                    this.bienBanHoiChanPhauThuat.ThanhVienThamGias =  this.dataSourceThanhVienThamGia.data;
                    const thongTinHoSo = JSON.stringify(this.bienBanHoiChanPhauThuat);
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.YeuCauTiepNhanId = this.id;
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.FileChuKy = this.bienBanHoiChanPhauThuat.FileChuKy;
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.LoaiHoSoDieuTriNoiTru = 7;
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.ThongTinHoSo = thongTinHoSo;
            
                    this.showPopupLoadingData();
                    this.apiService.post<any>
                        ("DieuTriNoiTru/UpdateVaCreateBienBanHoiChanPhauThuat", this.noiTruHoSoKhacBienBanHoiChanPhauThuat)
                        .subscribe(
                            (result) => {
                            this.showAddNewBbhc = true;
                            if (this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id == null) {
                                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật']));
                            }
                            this.getById(this.id);
                            let idIn = result;
                            this.getDanhSachBienBanHoiChanPhauThuat(this.id);
                            // this.getById(this.id);
                            this.cancel();
                            let dataIns = {
                                HostingName: window.location.protocol + "//" + window.location.host,
                                IdNoiTruHoSo:   idIn,
                                YeuCauTiepNhanId: this.id,
                                LoaiHoSoDieuTriNoiTru: 7,
                                Header:null
                              }
                            this.apiService.post<any>("DieuTriNoiTru/PhieuInBienBanHoiChanPhauThuat", dataIns).subscribe(
                                (result) => {
                                  this.dialog.open(BienBanHoiChanPhauThuatPopupComponent, {
                                    disableClose: true,
                                    width: '1000px',
                                    data: { Model: result }
                                  }).afterClosed().subscribe(() => {
                                  });
                                },
                                (err: ApiError) => {
                                  this.validationErrors = err.ValidationErrors;
                                  if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                  }
                                });
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
    }

    cancel() {
        this.validationErrors = [];
        if(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id != 0)
        {
            this.getPhieu(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);
        }
        else{
            this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuBienBanHoiChanPhauThuat?yeuCauTiepNhanId=" + this.id).subscribe(
                (result) => {
                    if (result != null) {
                        let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                        this.bienBanHoiChanPhauThuat = thongTinHoSo;
    
    
                        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result.Id;
                        this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);
                        this.bienBanHoiChanPhauThuat.FileChuKy = [...result.ListFile];
                        this.thanhVienThamGias = [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias]
                        this.dataSourceThanhVienThamGia ={
                            data: [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias],
                            total:[...this.bienBanHoiChanPhauThuat.ThanhVienThamGias].length
                        };
                    }
                    else {
                        this.bienBanHoiChanPhauThuat = new BienBanHoiChanPhauThuat();
    
                        let nhanVienThucHienId = this.getNhanVienId.Id;
                        this.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + this.getNhanVienId.Id + "&yeuCauTiepNhanId=" + this.id).subscribe(
                            (result) => {
    
                                this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = 0;
                                this.bienBanHoiChanPhauThuat.NguoiThucHienReadonly = result.TenNhanVien;
                                this.bienBanHoiChanPhauThuat.NgayThucHienReadonly = result.NgayThucHien;
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
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
       
    }

    validation() {
        const validationResult = [];
        if (!this.bienBanHoiChanPhauThuat.NgayThucHien) {
            const validationItem = {
                Field: 'NgayThucHien',
                Message: BienBanHoiChanPhauThuatMessage.MessageNgayThucHienNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanHoiChanPhauThuat.BacSiDieuTri) {
            const validationItem = {
                Field: 'BacSiDieuTri',
                Message: BienBanHoiChanPhauThuatMessage.MessageBsDieuTriNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanHoiChanPhauThuat.BacSiGayMe) {
            const validationItem = {
                Field: 'BacSiGayMe',
                Message: BienBanHoiChanPhauThuatMessage.MessageBsGayMeNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanHoiChanPhauThuat.BacSiTruongKhoa) {
            const validationItem = {
                Field: 'BacSiTruongKhoa',
                Message: BienBanHoiChanPhauThuatMessage.MessageBsTruongKhoaNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanHoiChanPhauThuat.BacSiDuyetMo) {
            const validationItem = {
                Field: 'BacSiDuyetMo',
                Message: BienBanHoiChanPhauThuatMessage.MessageBsDuyetMoNotEmpty
            };
            validationResult.push(validationItem);
        }
        if (!this.bienBanHoiChanPhauThuat.ThoiGianHoiChan) {
            const validationItem = {
                Field: 'ThoiGianHoiChan',
                Message: BienBanHoiChanPhauThuatMessage.MessageNgayHoiChanNotEmpty
            };
            validationResult.push(validationItem);
        }
        return validationResult;
    }
    changeThoiGianHoiChan(event) {
        if (event != undefined && event != null && event != "") {
            this.bienBanHoiChanPhauThuat.ThoiGianHoiChan = event;
            let ngay = CommonService.formatDateTime(event, "mm/dd/yyyy");
            this.bienBanHoiChanPhauThuat.ThoiGianHoiChanUTC = ngay;
        }
        else {
            this.bienBanHoiChanPhauThuat.ThoiGianHoiChanUTC = null;
        }

    }
    save() {
        this.uploadTaiLieuDone();
        this.validationErrors=[];
        this.cdRef.detectChanges();
        this.validationErrors = this.validation();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.bienBanHoiChanPhauThuat.ThanhVienThamGias =  this.dataSourceThanhVienThamGia.data;
        const thongTinHoSo = JSON.stringify(this.bienBanHoiChanPhauThuat);
        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.YeuCauTiepNhanId = this.id;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.FileChuKy = this.bienBanHoiChanPhauThuat.FileChuKy;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.LoaiHoSoDieuTriNoiTru = 7;
        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.ThongTinHoSo = thongTinHoSo;

        this.showPopupLoadingData();
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
              Title: "Xác nhận",
              Message: "Bạn có muốn lưu biên bản hội chẩn phẩu thuật này không?",
            },
          }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                this.apiService.post<any>
                ("DieuTriNoiTru/UpdateVaCreateBienBanHoiChanPhauThuat", this.noiTruHoSoKhacBienBanHoiChanPhauThuat)
                .subscribe(
                    (result) => {
                    this.showAddNewBbhc = true;
                    if (result.Id == undefined) {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Cập nhật ']));
                        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result;
                    }
                    else{
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu ']));
                        this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result.Id;
                    }
                    this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);
                    this.getDanhSachBienBanHoiChanPhauThuat(this.id);
                    // this.getById(this.id);
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

    blurThanhVienThamGia() {
        if (!this.bienBanHoiChanPhauThuat.ThanhVienThamGia) {
            this.bienBanHoiChanPhauThuat.ThanhVienThamGia = [];
        }
        if (this.newEmployee && this.newEmployee !== '') {
            this.filterSourceServer.push(this.newEmployee);
            this.bienBanHoiChanPhauThuat.ThanhVienThamGia.push(this.newEmployee);
        }
        this.newEmployee = '';
    }

    blurNhomPhauThuat() {
        if (!this.bienBanHoiChanPhauThuat.NhomPhauThuat) {
            this.bienBanHoiChanPhauThuat.NhomPhauThuat = [];
        }
        if (this.newEmployee && this.newEmployee !== '') {
            this.filterSourceServer.push(this.newEmployee);
            this.bienBanHoiChanPhauThuat.NhomPhauThuat.push(this.newEmployee);
        }
        this.newEmployee = '';
    }

    blurNhomGayMe() {
        if (!this.bienBanHoiChanPhauThuat.NhomGayMe) {
            this.bienBanHoiChanPhauThuat.NhomGayMe = [];
        }
        if (this.newEmployee && this.newEmployee !== '') {
            this.filterSourceServer.push(this.newEmployee);
            this.bienBanHoiChanPhauThuat.NhomGayMe.push(this.newEmployee);
        }
        this.newEmployee = '';
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu biên bản...' },
        });
    }

    showPopupLoadingPhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lấy biên bản...' },
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

    showPopupDeletePhieu() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xóa biên bản...' },
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    onKeyChooseThanhVien(event: any) {
        if (event.keyCode === 13) {
            this.multiSelectThanhVienThamGia.blur();
            this.multiSelectThanhVienThamGia.focus();
        }
    }

    onKeyChooseNhomGayMe(event: any) {
        if (event.keyCode === 13) {
            this.multiSelectNhomGayMe.blur();
            this.multiSelectNhomGayMe.focus();
        }
    }

    onKeyChooseNhomPhauThuat(event: any) {
        if (event.keyCode === 13) {
            this.multiSelectNhomPhauThuat.blur();
            this.multiSelectNhomPhauThuat.focus();
        }
    }

    filterChangeThanhVienThamGia(filter: any) {
        this.dataSourceFilterThanhVienThamGia = [...this.filterSourceServer];
        if (filter.trim() != undefined && filter.trim() != "" && filter.trim() != null) {
            if (filter != null && filter != "") {
                this.newEmployee = filter;
                this.dataSourceFilterThanhVienThamGia = this.filterSourceServer.filter(
                    s => s.toLowerCase().indexOf(filter.toLowerCase()) >= 0
                );
            }
        }
        // else {
        //     this.newEmployee = filter;
        // }

    }

    filterChangeNhomPhauThuat(filter: any) {
        this.dataSourceFilterNhomPhauThuat = [...this.filterSourceServer];
        if (filter.trim() != undefined && filter.trim() != "" && filter.trim() != null) {
            if (filter != null && filter != "") {
                this.newEmployee = filter;
                this.dataSourceFilterNhomPhauThuat = this.filterSourceServer.filter(
                    s => s.toLowerCase().indexOf(filter.toLowerCase()) >= 0
                );
            }
        }
        // else {
        //     this.newEmployee = filter;
        // }
    }

    filterChangeNhomGayMe(filter: any) {
        this.dataSourceFilterNhomGayMe = [...this.filterSourceServer];
        if (filter.trim() != undefined && filter.trim() != "" && filter.trim() != null) {
            if (filter && filter !== '') {
                this.newEmployee = filter;
                this.dataSourceFilterNhomGayMe = this.filterSourceServer.filter(
                    s => s.toLowerCase().indexOf(filter.toLowerCase()) >= 0
                );
            }
        }
        // else {
        //     this.newEmployee = filter;
        // }
    }

    addNewBbhc() {
        this.showAddNewBbhc = false;
        this.bienBanHoiChanPhauThuat = new BienBanHoiChanPhauThuat();
        this.noiTruHoSoKhacBienBanHoiChanPhauThuat = new NoiTruHoSoKhacBienBanHoiChanPhauThuat();
        let nhanVienThucHienId = this.getNhanVienId.Id;
        this.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + this.getNhanVienId.Id + "&yeuCauTiepNhanId=" + this.id).subscribe(
            (result) => {

                this.bienBanHoiChanPhauThuat.NguoiThucHienReadonly = result.TenNhanVien;
                this.bienBanHoiChanPhauThuat.NgayThucHienReadonly = result.NgayThucHien;
                this.dataSourceThanhVienThamGia={
                    data:[],
                    total:0
                };
            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    getPhieu(id: number) {
        this.showPopupLoadingPhieu();
        this.apiService.post<any>("DieuTriNoiTru/ViewNoiTruHoSoKhac?noiTruHoSoKhacId=" + id).subscribe(
            (result) => {
                if (result != null) {
                    let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
                    this.bienBanHoiChanPhauThuat = thongTinHoSo;
                   
                    this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id = result.Id;
                    this.returnId.emit(this.noiTruHoSoKhacBienBanHoiChanPhauThuat.Id);

                    this.bienBanHoiChanPhauThuat.FileChuKy = [...result.ListFile];
                    this.thanhVienThamGias = [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias]
                    this.dataSourceThanhVienThamGia ={
                        data: [...this.bienBanHoiChanPhauThuat.ThanhVienThamGias],
                        total:[...this.bienBanHoiChanPhauThuat.ThanhVienThamGias].length
                    };
                    this.closePopupLoadingData();
                }

            },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        this.showAddNewBbhc = true;
    }

    delete(id: number) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: BienBanHoiChanPhauThuatMessage.MessageConfirmDeletePhieu }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.showPopupDeletePhieu();
               
                    this.apiService.post<any>("DieuTriNoiTru/XoaBienBanHoiChanPhauThuat?id="+ id).subscribe(
                    () => {
                        this.closePopupLoadingData();
                        this.getDanhSachBienBanHoiChanPhauThuat(this.id);
                        this.getById(this.id);
                        this.cancel();
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa ']));
                    },
                    (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                        this.closePopupLoadingData();
                    });
            }
        });
    }
    uploadTaiLieuDone() {
        if (!(this.ref as ViewRef).destroyed) {
            this.ref.detectChanges();
        }
    }
    changeNgayThucHien(event) {
    }
    themThanhVienThamGia(){
        if(this.thanhVienThamGia.KeyId == null )
        {
            this.validationErrors.push({
                Message: "Vui lòng chọn thành viên tham gia.",
                Field: "ThanhVienThamGia",
              });
            return;
        }else{
            let kiemTraThanhVienDaTonTai = this.thanhVienThamGias.filter(d=>d.KeyId == this.thanhVienThamGia.KeyId );
            if(kiemTraThanhVienDaTonTai.length > 0)
            {
                this.notificationService.showError("Thành viên tham gia đã tồn tại.");
                return;
            }
            else{
                this.thanhVienThamGias.push(this.thanhVienThamGia);
                this.thanhVienThamGia = new ThanhVienThamGia();
                let data = [...this.thanhVienThamGias];
                this.dataSourceThanhVienThamGia ={
                    data: data,
                    total:data.length
                };
            }
           
        }
    }
    deleteThanhVienThamGia(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: BienBanHoiChanPhauThuatMessage.MessageConfirmDeleteThanhVienThamGia }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                let data =[...this.dataSourceThanhVienThamGia.data];
                this.dataSourceThanhVienThamGia.data.splice(data.findIndex(x => x === dataItem), 1);
                this.dataSourceThanhVienThamGia.total = this.dataSourceThanhVienThamGia.data.length;
                this.thanhVienThamGias =this.dataSourceThanhVienThamGia.data;
                // this.dataSourceThanhVienThamGia ={
                //     data: [...dt],
                //     total:[...dt].length
                // };
                this.showPopupDeletePhieu();
                this.closePopupLoadingData();
            }
        });
    }
}
