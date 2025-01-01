import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import icDone from '@iconify/icons-ic/done';
import icInfo from '@iconify/icons-ic/info';
import { Router } from '@angular/router';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icicclose from '@iconify/icons-ic/twotone-close';

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
import { ApiError } from 'src/app/shared/models/api-error.model';
import { HuyXuatThuocTrongNgay, ThongTinHuyPhieu } from '../../quay-thuoc.model';
import { XacNhanHuyThuBanThuocComponent } from '../../xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component';
import { ExportQueryInfoQueryInfo, QuayXuatThuoc, TagItem } from '../danh-sach-lich-su-huy-ban-thuoc.model';

@Component({
    selector: 'app-lich-su-huy-ban-thuoc-list',
    templateUrl: './lich-su-huy-ban-thuoc-list.component.html',
    styleUrls: ['./lich-su-huy-ban-thuoc-list.component.scss']
})

export class LichSuHuyBanThuocListComponent implements OnInit {
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

    urlGetDataGridChild: string = "QuayThuoc/GetDataForGridLichSuHuyBanThuocAsync";
    urlGetTotalPageGridChild: string = "QuayThuoc/GetTotalPageForGridLichSuHuyBanThuocAsync";

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('loaiDonThuocTemplate', { static: true }) loaiDonThuocTemplate: TemplateRef<any>;
    @ViewChild('soTienThuTemplate', { static: true }) soTienThuTemplate: TemplateRef<any>;
    @ViewChild('templateTextTienMat', { static: true }) templateTextTienMat: TemplateRef<any>;
    @ViewChild('templateTextChuyenKhoan', { static: true }) templateTextChuyenKhoan: TemplateRef<any>;
    @ViewChild('templateTextPos', { static: true }) templateTextPos: TemplateRef<any>;
    @ViewChild('ngayHuyTemplate', { static: true }) ngayHuyTemplate: TemplateRef<any>;
    @ViewChild('huyPhieuThuTemplate', { static: true }) huyPhieuThuTemplate: TemplateRef<any>;

    constructor(private router: Router, private dialog: MatDialog, private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }
    exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();

    sort = [{
        field: 'NgayHuy',
        dir: 'desc'
    }];

    ngOnInit() {
        this.quayThuocXuatThuocSearch = new QuayXuatThuoc();
        this.quayThuocXuatThuocSearchDefault = new QuayXuatThuoc();
        this.listTagSearch = new Array<TagItem>();
        this.documentType = DocumentType.DanhSachLichSuHuyBanThuoc;

        this.gridChildColumns2 = [
            { Field: "SoDon", Title: "Số đơn", Width: 100, Sortable: true, LinkDetail: true, Template: this.actionTemplate },
            { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
            { Field: "HoTen", Title: "Tên người bệnh", MinWidth: 250, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
            { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
            { Field: "SoTienThu", Title: "Tổng giá trị đơn thuốc", Width: 150, Sortable: true, Template: this.soTienThuTemplate },
            { Field: "TienMat", Title: "Tiền mặt", Width: 150, Sortable: true, Template: this.templateTextTienMat },
            { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 150, Sortable: true, Template: this.templateTextChuyenKhoan },
            { Field: "Pos", Title: "Pos", Width: 150, Sortable: true, Template: this.templateTextPos },
            { Field: "NgayHuy", Title: "Ngày hủy", Width: 160, Sortable: true, Template: this.ngayHuyTemplate },
            { Field: "NguoiHuy", Title: "Người hủy", Width: 160, Sortable: true},
            { Field: "LyDoHuyThu", Title: "Lý Do Hủy", Width: 160, Sortable: true},           
        ];

        this.listTagSearch = new Array<TagItem>();
        this.loadPageStart == false
        this.TimkiemNangCao();
    }

    Timkiem() { 
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString != null) {
            QueryString = this.searchString;
        }
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }

    TimkiemNangCao() {
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
        this.router.navigate(['lich-su-huy-ban-thuoc/lich-su-huy-ban-thuoc-chi-tiet' + '/' +
            event.Id + '/' + event.MaBN + '/' + event.TaiKhoanBenhNhanThuId]); // id la taikhoanbenhnhanthuId, va tai khoan benh nhan chi , maBN la benhNhanid
    }

    exportExcel() {
        // const self = this;
        // self.showPopupLoadingData();
        var self = this;
        let dialogRef = self.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            self.apiService.postExportExcel<string>('QuayThuoc/ExportLichSuBanThuoc',
                self.exportQueryInfoQueryInfo).subscribe(
                    resultData => {
                        // self.closePopupLoadingData();
                        dialogRef.close();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                            'LichSuBanThuoc' + dateTimeNow.getFullYear() + '.xlsx');
                    },
                    (err: any) => {
                        self.notificationService.showError(err.Message);
                    });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    huyXuatThuoc(thongTinSoPhieuDaThu: any) {
        var self = this;

        let huyXuatThuocTrongNgay = new HuyXuatThuocTrongNgay();
        huyXuatThuocTrongNgay.TaiKhoanBenhNhanThuId = thongTinSoPhieuDaThu.TaiKhoanBenhNhanThuId;
        huyXuatThuocTrongNgay.ThuHoiPhieu = false;

        self.dialog
            .open(XacNhanHuyThuBanThuocComponent, { disableClose: true, width: "800px", data: { huyXuatThuocTrongNgay } })
            .afterClosed()
            .subscribe(resultData => {
                if (resultData != undefined && resultData !== null && resultData !== "") {
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Hủy xuất thuốc']));
                    self.gridChild.search();
                }
            },
                (err: ApiError) => {
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
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

