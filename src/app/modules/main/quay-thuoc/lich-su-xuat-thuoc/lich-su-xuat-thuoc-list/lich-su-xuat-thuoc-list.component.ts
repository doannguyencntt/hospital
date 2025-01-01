import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import icDone from '@iconify/icons-ic/done';
import icInfo from '@iconify/icons-ic/info';
import { Router } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icicclose from '@iconify/icons-ic/twotone-close';
import { QuayXuatThuoc, TagItem, ExportQueryInfoQueryInfo } from '../lich-su-xuat-thuoc.model';
import { MatMenuTrigger } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
@Component({
    selector: 'app-lich-su-xuat-thuoc-list',
    templateUrl: './lich-su-xuat-thuoc-list.component.html',
    styleUrls: ['./lich-su-xuat-thuoc-list.component.scss']
})
export class LichSuXuatThuocListComponent implements OnInit {
    documentType: DocumentType;
    searchString: string;
    icSearch = icSearch;
    icicclose = icicclose;
    icDone = icDone;
    icInfo = icInfo;
    icFilterList = icFilterList;
    gridChildColumns2: any[] = [];
    quayThuocXuatThuocSearch: QuayXuatThuoc;
    showCancelSearch: boolean = false;
    loadPageStart: boolean = false;
    listTagShowOnHeader: Array<TagItem>;
    listTagSearch: Array<TagItem>;
    quayThuocXuatThuocSearchDefault: QuayXuatThuoc;
    searchCtrl = new FormControl;
    icFileExcel = icFileExcel;
    @Input() id: number = null;
    @Input() url1: string = null;
    @Input() url2: string = null;

    urlGetDataGridChild: string = "QuayThuoc/GetDanhSachLichSuXuatThuoc";
    urlGetTotalPageGridChild: string = "QuayThuoc/GetTotalDanhSachLichSuXuatThuoc";

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
    @ViewChild('ThoiDiemXuatThuocStringTemplate', { static: true }) ThoiDiemXuatThuocStringTemplate: TemplateRef<any>;
    @ViewChild('loaiDonThuocTemplate', { static: true }) loaiDonThuocTemplate: TemplateRef<any>;
    @ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
    @ViewChild('templateTextTienMat', { static: true }) templateTextTienMat: TemplateRef<any>;
    @ViewChild('templateTextChuyenKhoan', { static: true }) templateTextChuyenKhoan: TemplateRef<any>;
    @ViewChild('templateTextPos', { static: true }) templateTextPos: TemplateRef<any>;
    constructor(private router: Router, private dialog: MatDialog, private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }
    exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
    sort = [{
        field: 'NgayXuatThuoc',
        dir: 'desc'
    }];
    ngOnInit() {
        this.quayThuocXuatThuocSearch = new QuayXuatThuoc();
        this.quayThuocXuatThuocSearchDefault = new QuayXuatThuoc();
        this.listTagSearch = new Array<TagItem>();
        this.documentType = DocumentType.LichSuQuayThuoc;

        this.gridChildColumns2 = [
            // { Field: "SoDon", Title: "Số đơn", Width: 80, Sortable: true, LinkDetail: true, Template: this.actionTemplate },
            { Field: "SoChungTu", Title: "Số chứng từ", Width: 130, Sortable: true, Template: this.soChungTuTemplate },
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Tên người bệnh", Width: 150, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 100, Sortable: true },
            { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 80, Sortable: true },
            { Field: "NgayXuatThuoc", Title: "TG cấp phát thuốc", Width: 170, Sortable: true, Template: this.ThoiDiemXuatThuocStringTemplate }
        ];

        this.listTagSearch = new Array<TagItem>();
        this.loadPageStart == false
      //this.TimkiemNangCao();
    }

    Timkiem() { // cần kiểm tra lại
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString != null) {
            QueryString = this.searchString;
        }
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }

    TimkiemNangCao() { // cần kiểm tra lại
        this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));

        if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.quayThuocXuatThuocSearch.FromDate = CommonService.formatDateTime(this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.quayThuocXuatThuocSearch.FromDate = null;
        }

        if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.quayThuocXuatThuocSearch.ToDate = CommonService.formatDateTime(this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.quayThuocXuatThuocSearch.ToDate = null;
        }
        var queryString = JSON.stringify(this.quayThuocXuatThuocSearch);
        this.gridChild.searchString = this.searchString;
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0
    }

    closeMenu() {
        this.trigger.closeMenu();
    }

    ngOnChanges() {
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat == null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
                this.Timkiem();
            }
            else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
                this.TimkiemNangCao();
            }
            else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat == null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
                this.TimkiemNangCao();
            }
            else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
                this.TimkiemNangCao();
            }
        }
    }

    clear() {
        if (this.searchString == null || this.searchString == "") {
            this.gridChild.searchString = "";
            this.Timkiem();
        }
    }

    clearSearch() {
        this.searchString = "";
        this.gridChild.search();
    }

    searchChanges() {
        if (this.searchString == null || this.searchString == "") {
            this.gridChild.searchString = "";
            this.gridChild.search();
        }
        else if (this.searchString == null || this.searchString == "" && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.TimkiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat == null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.TimkiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
            this.TimkiemNangCao();
        }
        else if (this.searchString == null || this.searchString == "" && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
            this.TimkiemNangCao();
        }
    }


    thoiDiemTNChange() {
        if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat == null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
            this.Timkiem();
        }
        else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.TimkiemNangCao();
        }
        else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat == null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.TimkiemNangCao();
        }
        else if (this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanTuFormat != null && this.quayThuocXuatThuocSearch.ThoiDiemTiepNhanDenFormat == null) {
            this.TimkiemNangCao();
        }
    }

    getDropdownItem(obj: any, keyValue: any, titleValue: any) {
        let index = this.listTagSearch.findIndex(x => x.Key == keyValue && x.Title == titleValue);
        if (obj == undefined && this.listTagSearch.findIndex(x => x.Title == titleValue) != -1) {
            let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
            this.listTagSearch.splice(indexTitle, 1);
        }
        if (obj != undefined && obj.KeyId != null) {
            if (obj.KeyId == null) {
                if (index != -1) {
                    this.listTagSearch.splice(index, 1);
                }
            }
            else {
                if (index < 0) {
                    let item = new TagItem();
                    item.Key = keyValue;
                    item.Value = obj.DisplayName;
                    item.Title = titleValue;
                    let indexTitle = this.listTagSearch.findIndex(x => x.Title == titleValue);
                    if (indexTitle >= 0) {
                        this.listTagSearch.splice(indexTitle, 1);
                    }
                    this.listTagSearch.push(item);
                }
                else {
                    this.listTagSearch.pop();
                    this.listTagSearch[index].Value = obj.DisplayName;
                }
            }
        }
        else {
            if (index != -1) {
                this.listTagSearch.splice(index, 1);

            }
        }
    }

    Xem(event: any) {       
        this.router.navigate(['lich-su-xuat-thuoc/lich-su-xuat-thuoc-chi-tiet' + '/' +
            event.Id + '/' + event.MaBN + '/' + event.LoaiDuocPhamVatTu]);
    }

    exportExcel() {
        var self = this;
        let dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('QuayThuoc/ExportLichSuXuatThuoc',
                self.exportQueryInfoQueryInfo).subscribe(
                    resultData => {
                        // self.closePopupLoadingData();
                        dialogRef.close();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'LichSuXuatThuoc' + dateTimeNow.getFullYear() + '.xlsx');
                    },
                    (err: any) => {
                        self.notificationService.showError(err.Message);
                    });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupLoadingData() {
        var self = this;
        let dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }

    closePopupLoadingData() {
        this.dialog.closeAll();
    }
}
