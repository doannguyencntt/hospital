import {
    Component,
    OnInit,
    ViewChild,
    TemplateRef,
    HostListener,
} from '@angular/core';


import { MatMenuTrigger } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage, DuyetBhytMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

import { TagItem, TimKiemThongTinBenhNhan, XacNhanBhyt } from '../ds-xn-bhyt-noi-tru-ngoai-tru-list.model';

@Component({   
    selector: 'app-ds-xn-bhyt-noi-tru-ngoai-tru-list',
    templateUrl: './ds-xn-bhyt-noi-tru-ngoai-tru-list.component.html',
    styleUrls: ['./ds-xn-bhyt-noi-tru-ngoai-tru-list.component.scss']
})

export class DanhSachNoiTruVaNgoaiTruListComponent implements OnInit {
    gridChoNhanBhytColumns: any[] = [];
    icSearch = icSearch;
    listTagSearch: Array<TagItem>;
    listTagShowOnHeader: Array<TagItem>;
    
    xacNhanBhyt = new XacNhanBhyt();
    xacNhanBhytDefault = new XacNhanBhyt();

    showCancelSearch = false;
    searchCtrl = new FormControl();
    additionalSearchString: string = null;
    public kiemTraDanhSachThanhToan = true;
    public timKiemThongTinBenhNhan = {} as TimKiemThongTinBenhNhan;
    modelQRCode: any;
    icFileExcel = icFileExcel;
    isScanF1 = false;
    timeoutSearchChange: any;
    @ViewChild('gridListXacNhan', { static: false }) gridListXacNhan: GridComponent;
    documentType: DocumentType;
    holdQuery: any = null;
    icFilterList = icFilterList;
    sortConfig = [
        {
            field: 'ChuaXacNhan',
            dir: 'desc',
        },
        {
            field: 'ThoiDiemTiepNhan',
            dir: 'desc'
        },
        {
            field: 'Id',
            dir: 'asc',
        },
    ];
    minDateTuNgay: Date = null;
    urlListBhytNoiTru = 'XacNhanBHYT/GetDataForGridXacNhanNoiTruVaNgoaiTruBHYTAsync';
    urlBhytNoiTruTotalPage = 'XacNhanBHYT/GetTotalPageForGridXacNhanNoiTruVaNgoaiTruBHYTAsync';

    constructor(
        private router: Router,
        private authService: AuthService,
        private route: ActivatedRoute,
        private apiService: ApiService,
        private notificationService: NotificationService,
        private dialog: MatDialog
    ) { }

    @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
    @ViewChild('templateTextSoTienDaXacNhan', { static: true })
    templateTextSoTienDaXacNhan: TemplateRef<any>;
    @ViewChild('templateTextSoTienChoXacNhan', { static: true })
    templateTextSoTienChoXacNhan: TemplateRef<any>;
    @ViewChild('statusTemplate', { static: true }) statusTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemTiepNhanDisplay', { static: true }) thoiDiemTiepNhanDisplay: TemplateRef<any>;
    @ViewChild('templateTextSoTienDaXacNhanDaXacNhan', { static: true })
    templateTextSoTienDaXacNhanDaXacNhan: TemplateRef<any>;
    @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;

    @ViewChild('soTienDaXacNhanTemplate', { static: true }) soTienDaXacNhanTemplate: TemplateRef<any>;

    ngOnInit() {
        this.documentType = DocumentType.DSXNNgoaiTruVaNoiTruBHYT;

        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringXacNhanBHYT') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringXacNhanBHYT'
            );
            this.xacNhanBhyt = new XacNhanBhyt();
            this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
            if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null && this.xacNhanBhyt.ThoiDiemTiepNhanTu !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanTu);
            } else {
                this.xacNhanBhyt.ThoiDiemTiepNhanTu = null;
            }
            if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null && this.xacNhanBhyt.ThoiDiemTiepNhanDen !== '') {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date(this.xacNhanBhyt.ThoiDiemTiepNhanDen);
            } else {
                this.xacNhanBhyt.ThoiDiemTiepNhanDen = null;

            }
        } else {
            LocalStorageHelper.setItem('additionalSearchStringXacNhanBHYT', null);
        }

        this.gridChoNhanBhytColumns = [
            {
                Field: 'ThoiDiemTiepNhanDisplay',
                Title: 'Thời gian TN',
                Width: 100,
                Sortable: true,              
            },
            // { Field: 'MaXacNhan', Title: 'Mã XN', Width: 75, Sortable: true },
            { Field: 'MaTiepNhan', Title: 'Mã TN', Width: 100, Sortable: true },
            { Field: 'MaBenhNhan', Title: 'Mã NB', Width: 90, Sortable: true },
            { Field: 'HoTen', Title: 'HỌ TÊN', Width: 90, Sortable: true },
            { Field: 'NamSinh', Title: 'NĂM SINH', Width: 100, Sortable: true },            
            { Field: 'GioiTinh', Title: 'GIỚI TÍNH', Width: 100, Sortable: true },
            { Field: 'DiaChi', Title: 'ĐỊA CHỈ', Width: 100, Sortable: true },
            { Field: 'SoDienThoai', Title: 'SỐ ĐIỆN THOẠI', Width: 100, Sortable: true },
            { Field: 'SoTienDaXacNhan', Title: 'SỐ TIỀN ĐÃ XN', Width: 100, Sortable: true, Template : this.soTienDaXacNhanTemplate},
            { Field: 'ThoiDiemDuyetDisplay', Title: 'THỜI ĐIỂM DUYỆT', Width: 100, Sortable: true },
            { Field: 'LoaiDieuTri', Title: 'LOẠI ĐIỀU TRỊ', Width: 100, Sortable: true },
            { Field: 'NguoiDuyet', Title: 'NGƯỜI DUYỆT', Width: 100, Sortable: true },
        ];     

        this.listTagSearch = new Array<TagItem>();

        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);      
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu == null) {
          this.xacNhanBhyt.ThoiDiemTiepNhanTu =firstDayOfMonth;
          this.xacNhanBhyt.FromDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen == null) {
          this.xacNhanBhyt.ThoiDiemTiepNhanDen = new Date();
          this.xacNhanBhyt.ToDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        }

        const queryString = JSON.stringify(this.xacNhanBhyt);
        this.additionalSearchString = queryString;
    }

    checkTrangThai(event: any, type: number) {      
        if (type === 1) { this.xacNhanBhyt.NgoaiTru = event; }
        if (type === 2) { this.xacNhanBhyt.NoiTru = event; }
        this.TimkiemNangCao();
    }

    TimkiemNangCao() {
        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        } else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        } else {
            this.xacNhanBhyt.ToDate = null;
        }

        this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
        const queryString = JSON.stringify(this.xacNhanBhyt);

        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = this.xacNhanBhyt.SearchString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
        }
        
        LocalStorageHelper.setItem(
            'additionalSearchStringXacNhanBHYT',
            queryString
        );

        this.showCancelSearch =
            this.listTagShowOnHeader != null &&
            this.listTagShowOnHeader.length > 0;
    }

    searchChanges(event) {
        const self = this;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }

        self.timeoutSearchChange = setTimeout(() => {
            if (event != null && event.endsWith('@')) {
                const dataTimKiem = event.split('|');
                if (dataTimKiem.length > 1) {
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                } else {
                    self.xacNhanBhyt.SearchString = event.slice(0, -1);
                    self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                }
                self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
            }
            if (self.xacNhanBhyt.SearchString == null || self.xacNhanBhyt.SearchString === '') {
                if (self.gridListXacNhan != null) {
                    self.gridListXacNhan.searchString = '';
                    self.gridListXacNhan.search();
                }
            }
        }, 100);
    }   

    clearSearch() {
        this.xacNhanBhyt.SearchString = '';
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.search();
        }
    }

    Timkiem() {
        let QueryString = null;

        if (this.xacNhanBhyt.SearchString != null) {          
            QueryString = this.xacNhanBhyt.SearchString;
        }

        if (this.xacNhanBhyt.NamSinh != null) {
            this.xacNhanBhyt.NamSinh = Math.round(this.xacNhanBhyt.NamSinh);
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanTu != null) {
            this.xacNhanBhyt.FromDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanTu, 'dd/mm/yyyy');
        } else {
            this.xacNhanBhyt.FromDate = null;
        }
        if (this.xacNhanBhyt.ThoiDiemTiepNhanDen != null) {
            this.xacNhanBhyt.ToDate = CommonService.formatDateTime(this.xacNhanBhyt.ThoiDiemTiepNhanDen, 'dd/mm/yyyy');
        } else {
            this.xacNhanBhyt.ToDate = null;
        }

        const queryString = JSON.stringify(this.xacNhanBhyt);
        if (this.gridListXacNhan != null) {
            this.gridListXacNhan.searchString = QueryString;
            this.gridListXacNhan._additionalSearchString = queryString;
            this.gridListXacNhan.search();
            LocalStorageHelper.setItem(
                'additionalSearchStringXacNhanBHYT',
                queryString
            );
        }
    }

    xacNhan(data: any) {
        const self = this;
        self.dialog
            .open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: 'Bạn có chắc chắn duyệt những bảo hiểm này không?',
                },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result === 'Yes') {
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                        self.apiService.get('XacNhanBHYT/DuyetBaoHiemChoXnAsync?yeuCauTiepNhanId=' + data.Id).subscribe(
                            () => {
                                self.notificationService.showSuccess(DuyetBhytMessage.MessageXnThanhCong);
                                self.gridListXacNhan.setDataSource();
                            }, err => {
                                self.notificationService.showError(err.Message);
                            });
                    } else {
                        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                }
            });
    }

    QuetMaQRCodeClick() {
        const elementBarcode: HTMLElement = document.getElementById(
            'barcodeActive'
        ) as HTMLElement;
        if (elementBarcode != null) {
            elementBarcode.click();
        }
    }

    changeQR($event) {
        if ($event != null && typeof $event === 'string' && $event.endsWith('@')) {
            this.modelQRCode = $event;
            const dataTimKiem = $event.split('|');
            if (dataTimKiem.length > 1) {
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
            } else {
                this.xacNhanBhyt.SearchString = $event.slice(0, -1);
                this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
            }
            this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
        } else {
            this.notificationService.showError(
                'Không tìm thấy thông tin cần tìm.'
            );
        }
        this.isScanF1 = false;
    }

    getThongTinYeuCauBenhNhan(timKiemThongTinBenhNhan: TimKiemThongTinBenhNhan) {
        this.apiService
            .post<any>(
                'XacNhanBHYT/GetXacNhanBHYTByMaBNVaMaTT/',
                timKiemThongTinBenhNhan
            )
            .subscribe((resultData) => {
                if (resultData.length > 0 && resultData !== undefined) {
                    //this.thongTinChiTiet(resultData[0]);
                } else {
                    this.notificationService.showError(
                        'Thông tìm thấy thông tin cần tìm.'
                    );
                }
            });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 81 && event.ctrlKey && this.isScanF1 !== true) {
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }

    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('XacNhanBHYT/ExportNoiTruVaNgoaiTruBHYTHoanThanh', self.gridListXacNhan._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'DSXacNhanBHYT' + dateTimeNow.getFullYear() + '.xlsx');
                },
                (err: any) => {
                    self.notificationService.showError(err.Message);
                });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.TimkiemNangCao();
        }
    }

    toggleColumnVisibility(column, event) {
        this.gridListXacNhan.toggleColumnVisibility(column, event);
    }
}
