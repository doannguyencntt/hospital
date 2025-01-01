import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DoanhThuNhaThuocVo, Search } from '../doanh-thu-nha-thuoc.model';
import { AuthService } from 'src/app/core/services/auth.service';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-doanh-thu-nha-thuoc-list',
    templateUrl: './doanh-thu-nha-thuoc-list.component.html',
    styleUrls: ['./doanh-thu-nha-thuoc-list.component.scss']
})
export class DoanhThuNhaThuocListComponent implements OnInit {
    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
        private route: ActivatedRoute
    ) { }
    gridColumns: any[] = [];
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    documentType: DocumentType;
    searchCtrl = new FormControl();
    baseRoute = '/bao-cao/doanh-thu-nha-thuoc';
    dataDoanhThuNhaThuoc: DoanhThuNhaThuocVo[] = [];
    coData: boolean = false;
    timKiemNangCaoObj: Search = new Search();
    queryString: string;
    strAdditionalSearchString: string = "";
    sort = [{
        field: 'Ngay',
        dir: 'asc'
      }];


    @Input() bodyComponent: any;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('tienMatTemplate', { static: true }) tienMatTemplate: TemplateRef<any>;
    @ViewChild('tienMatFooterTemplate', { static: true }) tienMatFooterTemplate: TemplateRef<any>;
    @ViewChild('chuyenTemplate', { static: true }) chuyenTemplate: TemplateRef<any>;
    @ViewChild('chuyenFooterTemplate', { static: true }) chuyenFooterTemplate: TemplateRef<any>;
    @ViewChild('posTemplate', { static: true }) posTemplate: TemplateRef<any>;
    @ViewChild('posFooterTemplate', { static: true }) posFooterTemplate: TemplateRef<any>;
    @ViewChild('congNoTemplate', { static: true }) congNoTemplate: TemplateRef<any>;
    @ViewChild('soChungTuFooterTemplate', { static: true }) soChungTuFooterTemplate: TemplateRef<any>;
    @ViewChild('congNoFooterTemplate', { static: true }) congNoFooterTemplate: TemplateRef<any>;

    public totalThanhTienKhoLe(field: string) {
        switch (field) {
            case 'ThanhTien':
                return this.dataDoanhThuNhaThuoc.reduce((sum: number, item: { ThanhTien: number; }) => sum + item.ThanhTien, 0);
            case 'TienMat':
                return this.dataDoanhThuNhaThuoc.reduce((sum: number, item: { TienMat: number; }) => sum + item.TienMat, 0);
            case 'ChuyenKhoan':
                return this.dataDoanhThuNhaThuoc.reduce((sum: number, item: { ChuyenKhoan: number; }) => sum + item.ChuyenKhoan, 0);
            case 'Pos':
                return this.dataDoanhThuNhaThuoc.reduce((sum: number, item: { Pos: number; }) => sum + item.Pos, 0);
            case 'CongNo':
                return this.dataDoanhThuNhaThuoc.reduce((sum: number, item: { CongNo: number; }) => sum + item.CongNo, 0);
        }
    }

    ngOnInit() {
        this.documentType = DocumentType.BaoCaoDoanhThuNhaThuoc;
        this.gridColumns = [
            { Field: 'SoChungTu', Title: 'Số Chứng Từ', Width: 127, Sortable: true, TemplateFooter: this.soChungTuFooterTemplate },
            { Field: 'Ngay', Title: 'Ngày', Width: 120, Sortable: true, Template: this.ngayTemplate },
            { Field: 'MaYTe', Title: 'Mã Y Tế', Width: 95, Sortable: true },
            { Field: 'BenhNhan', Title: 'Tên Người Bệnh', Width: 130, Sortable: true },
            { Field: 'NgayThangnamSinh', Title: 'Năm Sinh', Width: 88, Sortable: true },
            { Field: 'GioiTinh', Title: 'Giới Tính', Width: 70, Sortable: true },
            { Field: 'ThanhTien', Title: 'Thành Tiền', Width: 130, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate },
            { Field: 'TienMat', Title: 'Tiền Mặt', Width: 130, Sortable: true, Template: this.tienMatTemplate, TemplateFooter: this.tienMatFooterTemplate },
            { Field: 'ChuyenKhoan', Title: 'Chuyển khoản', Width: 130, Sortable: true, Template: this.chuyenTemplate, TemplateFooter: this.chuyenFooterTemplate },
            { Field: 'Pos', Title: 'Pos', Width: 130, Sortable: true, Template: this.posTemplate, TemplateFooter: this.posFooterTemplate },
            { Field: 'CongNo', Title: 'Công Nợ',  Width: 130, Sortable: true, Template: this.congNoTemplate, TemplateFooter: this.congNoFooterTemplate },
            { Field: 'NguoiBan', Title: 'Người Bán', Width: 120, Sortable: true },
            { Field: 'GhiChu', Title: 'Ghi Chú', Width: 100, Sortable: true },
            { Field: 'ChiTietCongNo', Title: 'Chi tiết công nợ', Width: 120, Sortable: true },
            { Field: 'SoHoaDon', Title: 'Số hóa đơn', Width: 100, Sortable: true },
            { Field: 'LyDoHuyBanThuoc', Title: 'Lý do hủy bán thuốc', Width: 100, Sortable: true }            
        ];

        let minDateTuNgay = new Date();
        minDateTuNgay.setHours(0, 0, 0, 0);

        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringBaoCaoDoanhThuNhaThuocList");
                if (additionalSearchString != null) {
                    this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                        this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                    }
                    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            LocalStorageHelper.removeItem("additionalSearchStringBaoCaoDoanhThuNhaThuocList");
            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = minDateTuNgay;
            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date();
            this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
            this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
            const queryString = JSON.stringify(this.timKiemNangCaoObj);
            this.gridChild.additionalSearchString = this.strAdditionalSearchString = queryString;
            LocalStorageHelper.setItem('additionalSearchStringBaoCaoDoanhThuNhaThuocList', queryString);
            //this.timKiemNangCao();
        }
    }

    timKiemNangCao() {
        if(this.timKiemNangCaoObj.TuNgayDenNgay.endDate==null || this.timKiemNangCaoObj.TuNgayDenNgay.startDate==null)
        {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
          this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
        }
        else {
          this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
        }
        if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
          this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
        }
        else
        {
          this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
        }

        const queryString = JSON.stringify(this.timKiemNangCaoObj);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

        LocalStorageHelper.setItem('additionalSearchStringBaoCaoDoanhThuNhaThuocList', queryString);
        this.gridChild.search();
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.timKiemNangCao();
        }
    }

    searchChange(event) {
        if (event != undefined && (event == null || event == "")) {
            this.timKiemNangCao();
        }
    }

    clearSearch() {
        this.timKiemNangCaoObj.SearchString = null;
        this.timKiemNangCao();
    }

    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.post<any>('BaoCaoDoanhThuNhaThuoc/InDanhMucDaHetHan', this.timKiemNangCaoObj).subscribe(resultData => {
                resolve(resultData);
            });
        });
    }

    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
            if(this.timKiemNangCaoObj.TuNgayDenNgay.endDate==null || this.timKiemNangCaoObj.TuNgayDenNgay.startDate==null)
            {
                this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                return;
            }
            self.showPopupLoadingData();
            this.timKiemNangCaoObj.HostingName = window.location.protocol + "//" + window.location.host;
            if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy HH:mm");
            }
            else {
                this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
            }
            if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy HH:mm");
            }
            else {
                this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
            }
            this.timKiemNangCao();
            let query = self.gridChild._gridQueryInfo;
            query.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
            self.apiService.postExportExcel<string>('BaoCaoDoanhThuNhaThuoc/ExportBaoCaoDoanhThuNhaThuoc',
                self.gridChild._gridQueryInfo).subscribe(
                    resultData => {
                        self.closePopupLoadingData();
                        const dateTimeNow = new Date();
                        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoDoanhThuNhaThuoc' + dateTimeNow.getFullYear() + '.xlsx');
                    },
                    (err: any) => {
                        self.notificationService.showError(err.Message);
                        self.closePopupLoadingData();
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

    GetListAsync(eventList) {
        console.log('eventList', eventList);
        this.dataDoanhThuNhaThuoc = [...eventList.Data];
        if(eventList && eventList.Data.length > 0)
        {
            this.coData = true;
        }
        else
        {
            this.coData = false;
        }
    }

    InBaoCao(){

    }
}
