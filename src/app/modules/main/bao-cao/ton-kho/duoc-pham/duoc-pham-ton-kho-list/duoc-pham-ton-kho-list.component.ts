import { SuaDuocPhamTonKhoPopupComponent } from './../sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component';
import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import icBlock from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { searchTonKho, searchNhapXuatTonKho, modelChiTiet,GridQueryInfo } from '../duoc-pham.model';
import { LookupItemVo, LookupQueryInfo,  } from 'src/app/shared/models/common.model';
import { FormControl } from '@angular/forms';
import { DuocPhamTonKhoPopupComponent } from '../duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component';
import { DuocPhamTonKhoPopupTonKhoComponent } from '../duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { debug } from 'util';
import { DuocPhamNhapXuatTonKhoPopupComponent } from '../duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component';
import {
    DuocPhamNhaXuatTonKhoXemChiTietComponent
} from '../duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-ton-kho-list',
    templateUrl: './duoc-pham-ton-kho-list.component.html',
    styleUrls: ['./duoc-pham-ton-kho-list.component.scss']
})
export class DuocPhamTonKhoListComponent implements OnInit {
    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    //defaultAdditionalSearchString = '{"KhoId":1,"CanhBao":"Tất cả"}';
    defaultAdditionalSearchString: string = null;
    icSearch = icSearch;
    expression = false;
    index = 0;
    IsData = false;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icBlock = icBlock;
    icEdit = icEdit;
    icFileExcel = icFileExcel;
    documentType: DocumentType;
    gridColumnsCanhBaoTonKho: any[] = [];
    gridColumnsTongHopTonKho: any[] = [];
    gridColumnsTonKhoDuocPham: any[] = [];
    searchInfo: searchTonKho;
    searchInfo2: searchTonKho;
    searchInfo3: searchNhapXuatTonKho;
    searchString: string = null;
    searchCtrl = new FormControl();

    _gridQueryInfo  :GridQueryInfo;

    tabCanhBaoTonKhoEnabled: boolean = true;
    tabTongHopTonKhoEnabled: boolean = false;
    tabNhapXuatTonKhoEnabled: boolean = false;

    defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
    defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
    defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';

    @Input() searchPlaceHolder = 'Tìm kiếm theo tên dược phẩm...';
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    groups: GroupDescriptor[] = [{ field: 'TenDuocPhamBenhVienPhanNhom' }];

    @ViewChild('canhBaoTonKhoGrid', { static: false }) gridChildCanhBaoTonKho: GridComponent;
    @ViewChild('tongHopTonKhoGrid', { static: false }) gridChildTongHopTonKho: GridComponent;
    @ViewChild('nhapXuatTonKhoGrid', { static: false }) gridChildNhapXuatTonKho: GridComponent;

    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('nxTonDauKyTemplate', { static: true }) nxTonDauKyTemplate: TemplateRef<any>;
    @ViewChild('nxNhapTrongKyTemplate', { static: true }) nxNhapTrongKyTemplate: TemplateRef<any>;
    @ViewChild('nxXuatTrongKyTemplate', { static: true }) nxXuatTrongKyTemplate: TemplateRef<any>;
    @ViewChild('nxTonCuoiKyTemplate', { static: true }) nxTonCuoiKyTemplate: TemplateRef<any>;

    // @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('theKhoTemplate', { static: true }) theKhoTemplate: TemplateRef<any>;
    @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
    @ViewChild('actionChiTietTemplate', { static: true }) actionChiTietTemplate: TemplateRef<any>;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('tinhTrangCanhBaoTemplate', { static: true }) tinhTrangCanhBaoTemplate: TemplateRef<any>;
    @ViewChild('actionTongHopTonKhoTemplate', { static: true }) actionTongHopTonKhoTemplate: TemplateRef<any>;
    @ViewChild('templateHeaderTemplate', { static: true }) templateHeaderTemplate: TemplateRef<any>;
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DuocPhamTonKho;
        this.searchInfo = new searchTonKho();
        this.searchInfo2 = new searchTonKho();
        this.searchInfo3 = new searchNhapXuatTonKho();
        this.defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
        this.defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
        this.defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';
        this.gridColumnsCanhBaoTonKho = [
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', MinWidth: 200, Sortable: true },
            { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
            { Field: 'PhanLoai', Title: 'Phân Nhóm', Width: 200, Sortable: true },
            { Field: 'DonViTinhName', Title: 'Đơn vị tính', Width: 120, Sortable: true },
            { Field: 'SoLuongTon', Title: 'Số lượng tồn', Width: 150, Sortable: true },
            { Field: 'CanhBao', Title: 'Cảnh báo', Width: 120, Sortable: true, Template: this.tinhTrangCanhBaoTemplate },
        ];

        this.gridColumnsTongHopTonKho = [
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', MinWidth: 200, Sortable: true },
            { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
            { Field: 'PhanLoai', Title: 'Phân Nhóm', Width: 200, Sortable: true },
            { Field: 'DonViTinhName', Title: 'Đơn vị tính', Width: 200, Sortable: true },
            { Field: 'SoLuongTon', Title: 'Số lượng tồn Khả dụng', Width: 200, Sortable: true,TemplateHeader: this.templateHeaderTemplate},
            { Field: 'GiaTriSoLuongTonFormat', Title: 'Giá trị tồn', Width: 200, Sortable: true },
            { Field: 'Action', Title: '', Width: 120, Template: this.actionTongHopTonKhoTemplate, Hidden: !this.authService.hasPermission(DocumentType.CapNhatDuocPhamTonKho, SecurityOperation.Update) },
        ];

        this.gridColumnsTonKhoDuocPham = [
            { Field: 'Ma', Title: 'Mã dược phẩm', Width: 100, Sortable: true, ShowTooltip: true },
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true, ShowTooltip: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 200, Sortable: true, ShowTooltip: true },
            { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
            { Field: "TenDuocPhamBenhVienPhanNhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DonViTinhDisplay', Title: 'Đơn vị tính', Width: 100, Sortable: true },
            { Field: 'TonDauKy', Title: 'Tồn đầu kỳ', Width: 150, Sortable: true, Template: this.nxTonDauKyTemplate },
            { Field: 'NhapTrongKy', Title: 'Nhập trong kỳ', Width: 150, Sortable: true, Template: this.nxNhapTrongKyTemplate },
            { Field: 'XuatTrongKy', Title: 'Xuất trong kỳ', Width: 150, Sortable: true, Template: this.nxXuatTrongKyTemplate },
            { Field: 'TonCuoiKy', Title: 'Tồn cuối kỳ', Width: 150, Sortable: true, Template: this.nxTonCuoiKyTemplate },
            { Field: 'TheKho', Title: '', Width: 110, Template: this.theKhoTemplate }
        ];
    }
    ngAfterContentChecked() {
        this.cd.detectChanges();
    }
    onTabSelect(event: any) {
        if (event.index === 0) {
            this.deselectedTab();
            this.tabCanhBaoTonKhoEnabled = true;
            this.index =event.index;
            this.searchCanhBaoTonKho();
        }

        if (event.index === 1) {
            this.deselectedTab();
            this.tabTongHopTonKhoEnabled = true;
            this.index =event.index;
            this.searchTonKho2();
        }

        if (event.index === 2) {
            this.deselectedTab();
            this.tabNhapXuatTonKhoEnabled = true;
            this.index =event.index;
            this.searchTonKho3();
        }
    }

    deselectedTab() {
        this.tabCanhBaoTonKhoEnabled = false;
        this.tabTongHopTonKhoEnabled = false;
        this.tabNhapXuatTonKhoEnabled = false;
    }
    onKey(event: any) {
        if (event.key === 'Enter') {
            this.searchCanhBaoTonKho();
        }
    }
    // search
    searchCanhBaoTonKho() {
        let queryString = this.getQueryStringTonKhoCanhBao();
        this.defaultAdditionalSearchStringCanhBaoTonKho = queryString;

        if (this.gridChildCanhBaoTonKho) {
            this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
            this.gridChildCanhBaoTonKho.search();
        }
    }

    searchTonKho3() {
        let queryString = this.getQueryStringTonKhoNhapXuat();
        this.defaultAdditionalSearchStringNhapXuatTonKho = queryString;

        if (this.gridChildNhapXuatTonKho) {
            this.gridChildNhapXuatTonKho._additionalSearchString = queryString;
            this.gridChildNhapXuatTonKho.search();
        }
    }

    searchTonKho2() {
        let queryString = this.getQueryStringTonKhoTongHop();
        this.defaultAdditionalSearchStringTongHopTonKho = queryString;

        if (this.gridChildTongHopTonKho) {
            this.gridChildTongHopTonKho._additionalSearchString = queryString;
            this.gridChildTongHopTonKho.search();
        }
    }



    // end search 

    getQueryStringTonKhoCanhBao() {
        let KhoQueryString = 0;
        let CanhBaoQueryString = null;

        if (this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }

        if (this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }
        if (this.searchInfo.LoaiCanhBao != null) {
            CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
        }
        if (this.searchInfo.CanhBaoId == 0) {
            CanhBaoQueryString = '"' + 'Tất cả' + '"';
        }
        // let json= {
        //     KhoId:KhoQueryString,
        //     CanhBao : CanhBaoQueryString
        // };
        // let queryStringSearch = JSON.stringify(json);
        const queryStringSearch = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';
        return queryStringSearch;
    }


    getQueryStringTonKhoTongHop() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        const CanhBaoQueryString = null;
        if (this.searchInfo2.KhoId != null) {
            KhoQueryString = this.searchInfo2.KhoId;
        }
        if (this.searchInfo2.searchString != null) {
            SearchQueryString = '"' + this.searchInfo2.searchString + '"';
        }

        // let json= {
        //     KhoId:KhoQueryString,
        //     CanhBao : CanhBaoQueryString,
        //     Description:SearchQueryString
        // };
        // let queryStringSearch = JSON.stringify(json);
        const queryStringSearch =
            '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';

        return queryStringSearch;
    }

    getQueryStringTonKhoNhapXuat() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let RangeDateQueryString = null;
        let SortQueryString = null;
        if (this.searchInfo3.KhoId != null) {
            KhoQueryString = this.searchInfo3.KhoId;
        }
        if (this.searchInfo3.Description != null) {
            SearchQueryString = '"' + this.searchInfo3.Description + '"';
        }
        if (this.searchInfo3.RangeDate != null) {
            RangeDateQueryString =
                '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.startDate) + '"' +
                ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.endDate) + '"' + '}';
        }
        if (this.gridChildNhapXuatTonKho != null) {
            SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
        }
        // let json= {
        //     KhoId:KhoQueryString,
        //     RangeDate : RangeDateQueryString,
        //     Description:SearchQueryString,
        //     Sort :SortQueryString
        // };
        // let queryStringSearch = JSON.stringify(json);
        const queryStringSearch =
            '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"RangeDate":' +
            RangeDateQueryString + ',"Sort":' + SortQueryString + '}';

        return queryStringSearch;
    }





    onKey2(event: any) {
        if (event.key == 'Enter') {
            this.searchTonKho2();
        }
    }

    searchChangeCanhBaoTonKho() {
        if (this.searchInfo.searchString == null || this.searchInfo.searchString == undefined || this.searchInfo.searchString == '') {
            if (this.gridChildCanhBaoTonKho != undefined) {
                this.gridChildCanhBaoTonKho.searchString = null;
            }
            this.searchCanhBaoTonKho();
        }
    }
    searchChangeTongHopTonKho() {
        if (this.searchInfo2.searchString == null || this.searchInfo2.searchString == undefined || this.searchInfo2.searchString == '') {
            if (this.gridChildTongHopTonKho != undefined) {
                this.gridChildTongHopTonKho.searchString = null;
            }
            this.searchTonKho2();
        }
    }

    onKey3(event: any) {
        if (event.key == 'Enter') {
            this.searchTonKho3();
        }
    }
    searchChange() {
        if (this.searchInfo3.Description == '' || this.searchInfo3.Description == null || this.searchInfo3.Description == undefined) {
            if (this.gridChildNhapXuatTonKho != undefined) {
                this.gridChildNhapXuatTonKho.searchString = null;
            }
            this.searchTonKho3();
        }
    }


    KhoCanhBaoChange(khoDuocPhamId: number) {
        this.searchInfo.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
        this.searchCanhBaoTonKho();
    }

    KhoChange2(event: any) {
        if (event == null || event === undefined) {
            this.searchInfo2.KhoId = 0;
            this.searchTonKho2();
            return;
        }
        this.searchInfo2.KhoId = event.KeyId;
        this.searchInfo2.TenKho = event.DisplayName;
        this.searchTonKho2();
    }
    KhoTonKhoChange(khoDuocPhamId: number) {
        this.searchInfo2.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
        this.searchTonKho2();
    }
    KhoChange3(event: any) {
        if (event != null && event != undefined) {
            this.searchInfo3.KhoId = event;
        }
        else {
            this.searchInfo3.KhoId = 0;
        }
        this.searchTonKho3();
    }
    changRange(event: any) {
        this.searchTonKho3();

    }
    // cảnh báo tồn kho
    KhoChange(event: any) {
        if (event === undefined) {
            this.searchInfo.KhoId = 0;
            this.searchCanhBaoTonKho();
            return;
        }

        this.searchInfo.KhoId = event.KeyId;
        this.searchInfo.TenKho = event.DisplayName;
        this.searchCanhBaoTonKho();
    }
    CanhBaoChange(event: any) {
        if (!event) {
            this.searchInfo.CanhBaoId = 0;
            this.searchInfo.LoaiCanhBao = 'Tất cả';
            this.searchCanhBaoTonKho();
            return;
        }

        this.searchInfo.LoaiCanhBao = event.DisplayName;
        this.searchCanhBaoTonKho();
    }
    //end cảnh báo tồn kho
    getFirstKho() {
        this.apiService.post<LookupItemVo>('TonKho/GetKhoFirst').subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {

                    this.searchInfo.KhoId = resultData.KeyId;
                    this.searchInfo.TenKho = resultData.DisplayName;
                    if (this.searchInfo.KhoId != undefined && this.searchInfo.KhoId != null && this.index == 0) {
                        this.searchCanhBaoTonKho();
                    }
                    this.searchInfo3.KhoId = resultData.KeyId;
                    this.searchInfo3.TenKho = resultData.DisplayName;
                }
                // this.searchTonKho3();
            },
            () => {
            });
    }

    // CANH BAO TON KHO
    showPopupBaoCaoTonKho() {
        const dialogRef = this.dialog.open(DuocPhamTonKhoPopupComponent, {
            width: '900px',
            data: { Model: this.searchInfo, Title: 'Xác nhận' }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }

    getSharedPrintForm() {
        if (this.index == 0) {
            let KhoQueryString = 0;
            let CanhBaoQueryString = null;
            let SearchQueryString = null;

            if (this.searchInfo.KhoId != null) {
                KhoQueryString = this.searchInfo.KhoId;
            }
            if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
            }
            if (this.searchInfo.LoaiCanhBao == null ) {
                CanhBaoQueryString = '"' + 'Tất cả' + '"';
            }
            if (KhoQueryString == null || KhoQueryString == undefined) {
                KhoQueryString = 0;
            }
            if (this.searchInfo.searchString != null) {
                SearchQueryString = '"' + this.searchInfo.searchString + '"';
            }
            const queryString =
                '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + ',"searchString":' + SearchQueryString + '}';
            return new Promise(resolve => {
                this.apiService.post<any>('TonKho/GetCanhBaoDuocPhamHTML?search=' + queryString).subscribe(resultData => {
                    resolve(resultData);
                });
            });

        }
        if (this.index == 1) {
            let KhoQueryString = 0;
            let SearchQueryString = null;
            if (this.searchInfo2.searchString != null) {
                SearchQueryString = '"' + this.searchInfo2.searchString + '"';
            }
            if (this.searchInfo2.KhoId != null) {
                KhoQueryString = this.searchInfo2.KhoId;
            }
            if (KhoQueryString == null || KhoQueryString == undefined) {
                KhoQueryString = 0;
            }
            const queryString = '{"KhoId":' + KhoQueryString + ',"searchString":' + SearchQueryString + '}';
            return new Promise(resolve => {
                this.apiService.post<any>('TonKho/GetTonKhoDuocPhamHTML?search=' + queryString).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }

        if (this.index == 2) {
            let KhoQueryString = 0;
            let SearchQueryString = null;
            let RangeDateQueryString = null;
            let SortQueryString = null;
            if (this.searchInfo3.KhoId != null) {
                KhoQueryString = this.searchInfo3.KhoId;
            }
            if (this.searchInfo3.Description != null) {
                SearchQueryString = '"' + this.searchInfo3.Description + '"';
            }
            if (this.searchInfo3.RangeDate != null) {
                RangeDateQueryString = '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.startDate) +
                    '"' + ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.endDate) + '"' + '}';
            }
            if (this.gridChildNhapXuatTonKho != null && this.gridChildNhapXuatTonKho != undefined) {
                SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
            }
            const queryString = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"RangeDate":' +
                RangeDateQueryString + ',"Sort":' + SortQueryString + '}';
            return new Promise(resolve => {
                this.apiService.post<any>('TonKho/GetXuatNhapTonKhoHTML?search=' + queryString).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }
    }

    // TONG HOP TON KHO
    showPopupTongHopTonKho() {
        const dialogRef = this.dialog.open(DuocPhamTonKhoPopupTonKhoComponent, {
            width: '900px',
            data: { Model: this.searchInfo2, Title: 'Xác nhận' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('Ketqua', result)
        });
    }
    //
    showPopup3() {

        // console.log("showPopup3= ", this.gridChildNhapXuatTonKho.sort);
        if (this.gridChildNhapXuatTonKho != null && this.gridChildNhapXuatTonKho != undefined) {
            this.searchInfo3.Sort = JSON.parse(JSON.stringify(this.gridChildNhapXuatTonKho.sort));
        }
        const dialogRef = this.dialog.open(DuocPhamNhapXuatTonKhoPopupComponent, {
            width: '900px',
            data: { Model: this.searchInfo3, Title: 'Xác nhận' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('Ketqua', result)
        });
    }
    //
    xem(duocPhamId: any) {
        const model = new modelChiTiet();
        model.DuocPhamId = duocPhamId;
        model.KhoId = this.searchInfo3.KhoId;
        model.RangeDate = this.searchInfo3.RangeDate;
        const dialogRef = this.dialog.open(DuocPhamNhaXuatTonKhoXemChiTietComponent, {
            width: '900px',
            data: { Model: model, Title: 'Thẻ kho' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('Ketqua', result)
        });
    }
    GetValue() {
        {
            let KhoQueryString = 0;
            let CanhBaoQueryString = null;
            let SearchQueryString = null;

            if (this.searchInfo.KhoId != null) {
                KhoQueryString = this.searchInfo.KhoId;
            }
            if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
            }
            if (KhoQueryString == null || KhoQueryString == undefined) {
                KhoQueryString = 0;
            }
            if (this.searchInfo.searchString != null) {
                SearchQueryString = '"' + this.searchInfo.searchString + '"';
            }
            const queryString = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString +
                ',"searchString":' + SearchQueryString + '}';
            this.apiService.post<any>('TonKho/GetListKhoToView?search=' + queryString).subscribe(
                resultData => {
                    if (resultData.length > 0) {

                        this.IsData = true;
                    } else {
                        this.IsData = false;
                    }
                },
                (err: ApiError) => {

                });
        }
    }

    onDataBound(event) {
        if (event != undefined && event.Data.length > 0) {
            this.IsData = true;
        } else {
            this.IsData = false;
        }
    }

    GetValue2() {
        {
            let KhoQueryString = 0;
            let SearchQueryString = null;
            if (this.searchInfo2.searchString != null) {
                SearchQueryString = '"' + this.searchInfo2.searchString + '"';
            }
            if (this.searchInfo2.KhoId != null) {
                KhoQueryString = this.searchInfo2.KhoId;
            }
            if (KhoQueryString == null || KhoQueryString == undefined) {
                KhoQueryString = 0;
            }
            const queryString = '{"KhoId":' + KhoQueryString + ',"searchString":' + SearchQueryString + '}';
            this.apiService.post<any>('TonKho/GetListKhoTonKhoToView?search=' + queryString).subscribe(
                resultData => {
                    // console.log("length data2", resultData.length)
                    if (resultData.length > 0) {
                        // console.log("aaa2", resultData)
                        this.IsData = true;
                    } else {
                        this.IsData = false;
                    }
                },
                (err: ApiError) => {

                });
        }
    }

    ConvertDateTime(datime): String {
        // console.log("ConvertDateTime = ",datime);
        const date = new Date(datime);
        const year = date.getFullYear();
        const rawMonth = parseInt(String(date.getMonth())) + 1;
        const month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        const rawDay = parseInt(String(date.getDate()));
        const day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }

    exportExcelCanhBaoTonKho() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.gridChildCanhBaoTonKho != undefined) {
            let KhoQueryString = 0;
            let CanhBaoQueryString = null;
            if (this.searchInfo.KhoId != null) {
                KhoQueryString = this.searchInfo.KhoId;
            }

            if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
            }

            const queryString = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';
            this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
            this.gridChildCanhBaoTonKho._gridQueryInfo.additionalSearchString = queryString;
        }

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('TonKho/ExportCanhBaoTonKho', this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'CanhBaoTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcelTongHopTonKho() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.gridChildCanhBaoTonKho != undefined) {
            let KhoQueryString = 0;
            let SearchQueryString = null;
            const CanhBaoQueryString = null;
            if (this.searchInfo2.KhoId != null) {
                KhoQueryString = this.searchInfo2.KhoId;
            }
            if (this.searchInfo2.searchString != null) {
                SearchQueryString = '"' + this.searchInfo2.searchString + '"';
            }

            const queryString = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString +
                ',"CanhBao":' + CanhBaoQueryString + '}';
            this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
            this.gridChildCanhBaoTonKho._gridQueryInfo.additionalSearchString = queryString;
        }


        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            if (this.gridChildCanhBaoTonKho != undefined) {
                this.apiService.postExportExcel<string>('TonKho/ExportTongHopTonKho', this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'TongHopTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
            }
            else {
                let KhoQueryString = 0;
                let SearchQueryString = null;
                const CanhBaoQueryString = null;
                if (this.searchInfo2.KhoId != null) {
                    KhoQueryString = this.searchInfo2.KhoId;
                }
                if (this.searchInfo2.searchString != null) {
                    SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                }

                const queryString = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString +
                    ',"CanhBao":' + CanhBaoQueryString + '}';
                 let _isLoading: boolean = false;
                 let _skip: number = 0;
                 let _pageSize: number = 10;
                 let _take: number;
                 let _gridDataSource: any;
                 let _additionalSearchString: string;
                 this._gridQueryInfo = { skip: _skip, take: _take, pageSize: _pageSize, searchString: "", additionalSearchString: queryString, sort: this.sort, lazyLoadPage: false };
                    
                this.apiService.postExportExcel<string>('TonKho/ExportTongHopTonKho', this._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'TongHopTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
            }

        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcelNhapXuatTonKho() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        let queryString = this.getQueryStringTonKhoNhapXuat();
        let _isLoading: boolean = false;
        let _skip: number = 0;
        let _pageSize: number = 10;
        let _take: number;
        let _gridDataSource: any;
        let _additionalSearchString: string;
        this._gridQueryInfo = { skip: _skip, take: _take, pageSize: _pageSize, searchString: "", additionalSearchString: queryString, sort: this.sort, lazyLoadPage: false };
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            if(this.gridChildNhapXuatTonKho != undefined)
            {
                this.apiService.postExportExcel<string>('TonKho/ExportNhapXuatTonKho', this.gridChildNhapXuatTonKho._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'NhapXuatTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
            }
            else{
                this.apiService.postExportExcel<string>('TonKho/ExportNhapXuatTonKho', this._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'NhapXuatTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
            }
           
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    confrim: any = null;
    suaTonKho(dataItem: any) {
        var data = {
            dataItem: dataItem,
            kho: this.searchInfo2
        };
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog
            .open(SuaDuocPhamTonKhoPopupComponent, {
                disableClose: true,
                width: "1500px",
                data: { data },
            })
            .afterClosed()
            .subscribe(result => {
                //this.gridChildTongHopTonKho.setDataSource();
            });
    }
}
