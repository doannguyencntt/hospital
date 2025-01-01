import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, SimpleChange, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoaiTonKhoVatTu, SearchVatTuTonKhoCanhBao, SearchVatTuTonKhoNhapXuat, SearchVatTuTonKhoTongHop, VatTuTonKhoNhapXuatChiTiet } from '../vat-tu-ton-kho.model';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import { VatTuTonKhoPopupComponent } from '../vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LookupItemVo } from 'src/app/shared/models/common.model';
import { VatTuTonKhoChiTietComponent } from '../vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component';

import icBlock from '@iconify/icons-ic/twotone-delete'
import icEdit from '@iconify/icons-ic/twotone-edit'
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icSearch from '@iconify/icons-ic/twotone-search';
import { SuaVatTuTonKhoPopupComponent } from '../sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
    selector: 'app-vat-tu-ton-kho-list',
    templateUrl: './vat-tu-ton-kho-list.component.html',
    styleUrls: ['./vat-tu-ton-kho-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class VatTuTonKhoListComponent implements OnInit {
    documentType: DocumentType = DocumentType.VatTuTonKho;
    searchCtrl = new FormControl();

    searchInfo: SearchVatTuTonKhoCanhBao;
    searchInfoTongHopTonKho: SearchVatTuTonKhoTongHop;
    searchInfoNhapXuatTonKho: SearchVatTuTonKhoNhapXuat;

    isExistData: boolean = true;
    isExistDataTongHopTonKho: boolean = true;
    isExistDataNhapXuatTonKho: boolean = true;

    defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
    defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
    defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';

    tabCanhBaoTonKhoEnabled: boolean = true;
    tabTongHopTonKhoEnabled: boolean = false;
    tabNhapXuatTonKhoEnabled: boolean = false;

    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    vatTuTonKhoCanhBaoDataUrl = 'TonKho/GetDanhSachVatTuTonKhoCanhBaoForGridAsync';
    vatTuTonKhoCanhBaoPagesUrl = 'TonKho/GetTotalVatTuTonKhoCanhBaoPagesForGridAsync';

    vatTuTonKhoTongHopDataUrl = 'TonKho/GetDanhSachVatTuTonKhoTongHopForGridAsync';
    vatTuTonKhoTongHopPagesUrl = 'TonKho/GetTotalVatTuTonKhoTongHopPagesForGridAsync';

    vatTuTonKhoNhapXuatDataUrl = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatForGridAsync';
    vatTuTonKhoNhapXuatPagesUrl = 'TonKho/GetTotalVatTuTonKhoNhapXuatPagesForGridAsync';

    gridColumnsCanhBaoTonKho: any[] = [];
    gridColumnsTongHopTonKho: any[] = [];
    gridColumnsNhapXuatTonKho: any[] = [];

    icSearch = icSearch;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icBlock = icBlock;
    icEdit = icEdit;
    icFileExcel = icFileExcel;

    @Input() searchPlaceHolder: string = "Tìm kiếm theo tên vật tư...";

    @ViewChild('canhBaoTonKhoGrid', { static: false }) gridChildCanhBaoTonKho: GridComponent;
    @ViewChild('tongHopTonKhoGrid', { static: false }) gridChildTongHopTonKho: GridComponent;
    @ViewChild('nhapXuatTonKhoGrid', { static: false }) gridChildNhapXuatTonKho: GridComponent;

    groups: GroupDescriptor[] = [{ field: 'TenNhomVatTu' }];
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

    @ViewChild('tinhTrangCanhBaoTemplate', { static: true }) tinhTrangCanhBaoTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('soLuongTonTemplate', { static: true }) soLuongTonTemplate: TemplateRef<any>;
    @ViewChild('tonDauKyTemplate', { static: true }) tonDauKyTemplate: TemplateRef<any>;
    @ViewChild('nhapTrongKyTemplate', { static: true }) nhapTrongKyTemplate: TemplateRef<any>;
    @ViewChild('xuatTrongKyTemplate', { static: true }) xuatTrongKyTemplate: TemplateRef<any>;
    @ViewChild('tonCuoiKyTemplate', { static: true }) tonCuoiKyTemplate: TemplateRef<any>;
    @ViewChild('theKhoTemplate', { static: true }) theKhoTemplate: TemplateRef<any>;
    @ViewChild('actionTongHopTonKhoTemplate', { static: true }) actionTongHopTonKhoTemplate: TemplateRef<any>;
    @ViewChild('templateHeaderTemplate', { static: true }) templateHeaderTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.searchInfo = new SearchVatTuTonKhoCanhBao();
        this.searchInfoTongHopTonKho = new SearchVatTuTonKhoTongHop();
        this.searchInfoNhapXuatTonKho = new SearchVatTuTonKhoNhapXuat();

        // this.getFirstKho();

        this.gridColumnsCanhBaoTonKho = [
            { Field: 'TenVatTu', Title: 'Vật tư', Width: 300, Sortable: true },
            { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 120, Sortable: true },
            { Field: 'SoLuongTon', Title: 'Số lượng tồn', Width: 150, Sortable: true, Template: this.soLuongTonTemplate },
            { Field: 'CanhBao', Title: 'Cảnh báo', Width: 120, Sortable: true, Template: this.tinhTrangCanhBaoTemplate }
        ];

        this.gridColumnsTongHopTonKho = [
            { Field: 'TenVatTu', Title: 'Vật tư', Width: 300, Sortable: true },
            { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 120, Sortable: true },
            { Field: 'SoLuongTon', Title: 'Số lượng tồn khả dụng', Width: 150, Sortable: true,TemplateHeader: this.templateHeaderTemplate},
            { Field: 'GiaTriSoLuongTonFormat', Title: 'Giá trị tồn', Width: 200, Sortable: true },
            { Field: 'Action', Title: '', Width: 120, Template: this.actionTongHopTonKhoTemplate, Hidden: !this.authService.hasPermission(DocumentType.CapNhatVatTuTonKho, SecurityOperation.Update) }
        ];

        this.gridColumnsNhapXuatTonKho = [
            { Field: "TenNhomVatTu", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'Ma', Title: 'Mã vật tư', Width: 100, Sortable: true, ShowTooltip: true },
            { Field: 'TenVatTu', Title: 'Vật tư', MinWidth: 150, Sortable: true, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 200, Sortable: true },
            { Field: 'TonDauKy', Title: 'Tồn đầu kỳ', Width: 200, Template: this.tonDauKyTemplate },
            { Field: 'NhapTrongKy', Title: 'Nhập trong kỳ', Width: 200, Template: this.nhapTrongKyTemplate },
            { Field: 'XuatTrongKy', Title: 'Xuất trong kỳ', Width: 200, Template: this.xuatTrongKyTemplate },
            { Field: 'TonCuoiKy', Title: 'Tồn cuối kỳ', Width: 200, Template: this.tonCuoiKyTemplate },
            { Field: 'Action', Title: '', Width: 110, Template: this.theKhoTemplate }
        ];
    }

    getFirstKho() {
        this.apiService.post<LookupItemVo>('TonKho/GetFirstKhoVatTu').subscribe(res => {
            if (res) {
                this.searchInfo.KhoId = res.KeyId;
                this.searchInfo.TenKho = res.DisplayName;

                this.searchInfoTongHopTonKho.KhoId = res.KeyId;
                this.searchInfoTongHopTonKho.TenKho = res.DisplayName;

                this.searchInfoNhapXuatTonKho.KhoId = res.KeyId;
                this.searchInfoNhapXuatTonKho.TenKho = res.DisplayName;

                if (this.searchInfo.KhoId && this.tabCanhBaoTonKhoEnabled) {
                    this.searchTonKho();
                }
            } else {
                this.searchInfo.KhoId = 0;
                this.searchInfo.TenKho = '';

                this.searchInfoTongHopTonKho.KhoId = 0;
                this.searchInfoTongHopTonKho.TenKho = '';

                this.searchInfoNhapXuatTonKho.KhoId = 0;
                this.searchInfoNhapXuatTonKho.TenKho = '';
            }
        }, () => { });
    }

    onTabSelect(event: any) {
        if (event.index === 0) {
            this.deselectedTab();
            this.tabCanhBaoTonKhoEnabled = true;

            this.searchTonKho();
        }

        if (event.index === 1) {
            this.deselectedTab();
            this.tabTongHopTonKhoEnabled = true;

            this.searchTonKhoTongHop();
        }

        if (event.index === 2) {
            this.deselectedTab();
            this.tabNhapXuatTonKhoEnabled = true;

            this.searchTonKhoNhapXuat();
        }
    }

    deselectedTab() {
        this.tabCanhBaoTonKhoEnabled = false;
        this.tabTongHopTonKhoEnabled = false;
        this.tabNhapXuatTonKhoEnabled = false;
    }

    KhoChange(event: any) {
        if (event === undefined) {
            this.searchInfo.KhoId = 0;
            this.searchTonKho();
            return;
        }

        this.searchInfo.KhoId = event.KeyId;
        this.searchInfo.TenKho = event.DisplayName;
        this.searchTonKho();
    }

    KhoChangeTongHopTonKho(event: any) {
        if (event === undefined) {
            this.searchInfoTongHopTonKho.KhoId = 0;
            this.searchTonKhoTongHop();
            return;
        }

        this.searchInfoTongHopTonKho.KhoId = event.KeyId;
        this.searchInfoTongHopTonKho.TenKho = event.DisplayName;
        this.searchTonKhoTongHop();
    }

    KhoTonKhoChange(khoId: number) {
        this.searchInfoTongHopTonKho.KhoId = khoId == undefined ? 0 : khoId;
        this.searchTonKhoTongHop();
    }
    KhoChangeNhapXuatTonKho(event: any) {
        if (event === undefined) {
            this.searchInfoNhapXuatTonKho.KhoId = 0;
            this.searchTonKhoNhapXuat();
            return;
        }

        this.searchInfoNhapXuatTonKho.KhoId = event.KeyId;
        this.searchInfoNhapXuatTonKho.TenKho = event.DisplayName;
        this.searchTonKhoNhapXuat();
    }

    CanhBaoChange(event: any) {
        if (event === undefined) {
            this.searchInfo.CanhBaoId = 0;
            this.searchInfo.LoaiCanhBao = 'Tất cả';
            this.searchTonKho();
            return;
        }

        this.searchInfo.LoaiCanhBao = event.DisplayName;
        this.searchTonKho();
    }

    getQueryStringTonKhoCanhBao() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let CanhBaoQueryString = null;
        let SortQueryString = null;

        if (this.searchInfo.KhoId != null) {
            KhoQueryString = this.searchInfo.KhoId;
        }

        if (this.searchInfo.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
        }

        if (this.searchInfo.LoaiCanhBao != null) {
            CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
        }

        if (this.gridChildCanhBaoTonKho) {
            SortQueryString = JSON.stringify(this.gridChildCanhBaoTonKho.sort);
        }

        return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"Sort\":" + SortQueryString + "}";
    }

    getQueryStringTonKhoTongHop() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let SortQueryString = null;

        if (this.searchInfoTongHopTonKho.KhoId != null) {
            KhoQueryString = this.searchInfoTongHopTonKho.KhoId;
        }

        if (this.searchInfoTongHopTonKho.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfoTongHopTonKho.SearchString + "\"";
        }

        if (this.gridChildTongHopTonKho) {
            SortQueryString = JSON.stringify(this.gridChildTongHopTonKho.sort);
        }

        return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";
    }

    getQueryStringTonKhoNhapXuat() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let RangeDateQueryString = null;
        let SortQueryString = null;

        if (this.searchInfoNhapXuatTonKho.KhoId != null) {
            KhoQueryString = this.searchInfoNhapXuatTonKho.KhoId;
        }

        if (this.searchInfoNhapXuatTonKho.SearchString != null) {
            SearchQueryString = "\"" + this.searchInfoNhapXuatTonKho.SearchString + "\"";
        }

        if (this.searchInfoNhapXuatTonKho.RangeDate != null) {
            RangeDateQueryString = "";
            RangeDateQueryString += this.searchInfoNhapXuatTonKho.RangeDate.startDate ? '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfoNhapXuatTonKho.RangeDate.startDate) + '"' : '{"TuNgay":' + null;
            RangeDateQueryString += this.searchInfoNhapXuatTonKho.RangeDate.endDate ? ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfoNhapXuatTonKho.RangeDate.endDate) + '"' + '}' : ',"DenNgay":' + null + '}'
        }

        if (this.gridChildNhapXuatTonKho) {
            SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
        }

        return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString + ",\"Sort\":" + SortQueryString + "}";
    }

    searchTonKho() {
        let queryString = this.getQueryStringTonKhoCanhBao();
        this.defaultAdditionalSearchStringCanhBaoTonKho = queryString;

        if (this.gridChildCanhBaoTonKho) {
            this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
            this.gridChildCanhBaoTonKho.search();
        }
    }

    searchTonKhoTongHop() {
        let queryString = this.getQueryStringTonKhoTongHop();
        this.defaultAdditionalSearchStringTongHopTonKho = queryString;

        if (this.gridChildTongHopTonKho) {
            this.gridChildTongHopTonKho._additionalSearchString = queryString;
            this.gridChildTongHopTonKho.search();
        }
    }

    searchTonKhoNhapXuat() {
        let queryString = this.getQueryStringTonKhoNhapXuat();
        this.defaultAdditionalSearchStringNhapXuatTonKho = queryString;

        if (this.gridChildNhapXuatTonKho) {
            this.gridChildNhapXuatTonKho._additionalSearchString = queryString;
            this.gridChildNhapXuatTonKho.search();
        }
    }

    searchChange() {
        if (this.searchInfo.SearchString == null || this.searchInfo.SearchString == undefined || this.searchInfo.SearchString == "") {
            this.searchInfo.SearchString = undefined;

            this.searchTonKho();
        }
    }

    searchChangeTongHopTonKho() {
        if (this.searchInfoTongHopTonKho.SearchString == null || this.searchInfoTongHopTonKho.SearchString == undefined || this.searchInfoTongHopTonKho.SearchString == "") {
            this.searchInfoTongHopTonKho.SearchString = undefined;

            this.searchTonKhoTongHop();
        }
    }

    searchChangeNhapXuatTonKho() {
        if (this.searchInfoNhapXuatTonKho.SearchString == null || this.searchInfoNhapXuatTonKho.SearchString == undefined || this.searchInfoNhapXuatTonKho.SearchString == "") {
            this.searchInfoNhapXuatTonKho.SearchString = undefined;

            this.searchTonKhoNhapXuat();
        }
    }

    changDateRangeNhapXuatTonKho(event: any) {
        this.searchTonKhoNhapXuat();
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            this.searchTonKho();
        }
    }

    onKeyTongHopTonKho(event: any) {
        if (event.key == "Enter") {
            this.searchTonKhoTongHop();
        }
    }

    onKeyNhapXuatTonKho(event: any) {
        if (event.key == "Enter") {
            this.searchTonKhoNhapXuat();
        }
    }

    onDataBoundGrid(event: any) {
        if (event && event.Data.length > 0) {
            this.isExistData = true;
        } else {
            this.isExistData = false;
        }
    }

    onDataBoundGridTongHopTonKho(event: any) {
        if (event && event.Data.length > 0) {
            this.isExistDataTongHopTonKho = true;
        } else {
            this.isExistDataTongHopTonKho = false;
        }
    }

    onDataBoundGridNhapXuatTonKho(event: any) {
        if (event && event.Data.length > 0) {
            this.isExistDataNhapXuatTonKho = true;
        } else {
            this.isExistDataNhapXuatTonKho = false;
        }
    }

    xemBaoCao() {
        let dialogRef = this.dialog.open(VatTuTonKhoPopupComponent, {
            //disableClose: true,
            width: '794px',
            // height: '500px',
            data: {
                queryString: this.getQueryStringTonKhoCanhBao(),
                canhBao: this.searchInfo.LoaiCanhBao ? this.searchInfo.LoaiCanhBao : 'Tất cả',
                type: LoaiTonKhoVatTu.CanhBaoTonKhoVatTu,
                Title: "Xác nhận"
            }
        });

        dialogRef.afterClosed().subscribe(res => { });
    }

    xemBaoCaoTonKhoTongHop() {
        let dialogRef = this.dialog.open(VatTuTonKhoPopupComponent, {
            //disableClose: true,
            width: '794px',
            // height: '500px',
            data: {
                queryString: this.getQueryStringTonKhoTongHop(),
                type: LoaiTonKhoVatTu.TongHopTonKhoVatTu,
                Title: "Xác nhận"
            }
        });

        dialogRef.afterClosed().subscribe(res => { });
    }

    xemBaoCaoTonKhoNhapXuat() {
        let dialogRef = this.dialog.open(VatTuTonKhoPopupComponent, {
            //disableClose: true,
            width: '794px',
            // height: '500px',
            data: {
                queryString: this.getQueryStringTonKhoNhapXuat(),
                type: LoaiTonKhoVatTu.NhapXuatTonKhoVatTu,
                Title: "Xác nhận"
            }
        });

        dialogRef.afterClosed().subscribe(res => { });
    }

    xemChiTietNhapXuatTonKho(vatTuId: any) {
        const chiTiet = new VatTuTonKhoNhapXuatChiTiet();
        chiTiet.VatTuId = vatTuId;
        chiTiet.KhoId = this.searchInfoNhapXuatTonKho.KhoId ? this.searchInfoNhapXuatTonKho.KhoId : 0;
        chiTiet.RangeDate = this.searchInfoNhapXuatTonKho.RangeDate;

        const dialogRef = this.dialog.open(VatTuTonKhoChiTietComponent, {
            width: '900px',
            data: { Model: chiTiet, Title: 'Thẻ kho' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('Ketqua', result)
        });
    }

    getSharedPrintForm() {
        if (this.tabCanhBaoTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get<any>(`TonKho/GetVatTuTonKhoCanhBaoHTML?search=${this.getQueryStringTonKhoCanhBao()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }

        if (this.tabTongHopTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get<any>(`TonKho/GetVatTuTonKhoTongHopHTML?search=${this.getQueryStringTonKhoTongHop()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }

        if (this.tabNhapXuatTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get<any>(`TonKho/GetVatTuTonKhoNhapXuatHTML?search=${this.getQueryStringTonKhoNhapXuat()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }
    }

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("TonKho/ExportVatTuTonKhoCanhBao", this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "CanhBaoVatTuTonKho" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcelTonKhoTongHop() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("TonKho/ExportVatTuTonKhoTongHop", this.gridChildTongHopTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoTongHop" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    exportExcelTonKhoNhapXuat() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>("TonKho/ExportVatTuTonKhoNhapXuat", this.gridChildNhapXuatTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoNhapXuat" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    ConvertDateTime(datime): String {
        const date = new Date(datime);
        const year = date.getFullYear();
        const rawMonth = parseInt(String(date.getMonth())) + 1;
        const month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        const rawDay = parseInt(String(date.getDate()));
        const day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }
    confrim: any = null;

    suaTonKho(dataItem: any) {
        var data = {
            dataItem: dataItem,
            kho: this.searchInfoTongHopTonKho
        };
        if (this.confrim != null) {
            this.dialog.closeAll();
            this.confrim = null;
        }
        this.confrim = this.dialog
            .open(SuaVatTuTonKhoPopupComponent, {
                disableClose: true,
                width: "1500px",
                data: { data },
            })
            .afterClosed()
            .subscribe(result => {
                this.gridChildTongHopTonKho.setDataSource();
            });
    }
}
