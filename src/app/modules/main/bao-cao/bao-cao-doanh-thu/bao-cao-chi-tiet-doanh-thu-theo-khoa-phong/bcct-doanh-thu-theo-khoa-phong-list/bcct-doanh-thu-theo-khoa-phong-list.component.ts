import { Component, OnInit, TemplateRef, ViewChild, AfterContentInit, Input } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { Search, DoanhThuTheoKhoaPhong, BaoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo } from '../bao-cao-chi-tiet-doanh-thu-theo-khoa-phong.model';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { environment } from 'src/environments/environment';
import {State } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';

import { DataStateChangeEvent } from '@progress/kendo-angular-grid';
declare var jQuery: any;

@Component({
    selector: 'app-bcct-doanh-thu-theo-khoa-phong-list',
    templateUrl: './bcct-doanh-thu-theo-khoa-phong-list.component.html',
    styleUrls: ['./bcct-doanh-thu-theo-khoa-phong-list.component.scss']
})
export class BaoCaoChiTietDoanhThuTheoKhoaPhongListComponent implements OnInit {
    search = new Search();
    public gridView: GridDataResult;
    public gridViewDetail: GridDataResult;
    public pageSize = 50;
    public skip = 0;
    take: number;
    public skipDetail = 0;
    private data1: Object[];
    jqueryString: string = "";
    public groupSTT = new Map();
    constructor(private apiService: ApiService) {

    }
    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];
    // date 
    DateStart: string = null;
    DateEnd: string = null;
    DateStartKy: string = null;
    DateEndKy: string = null;
    //-->
    public gridData: DoanhThuTheoKhoaPhong[] = [];
    public gridDataDetail: DoanhThuTheoKhoaPhong[] = [];
    private items: any[] = this.gridData;
    public data: any[]
    lstKhoaPhong: any[];
    lstMonth: any[];
    lstSoSanhKy: any[];
    expression: boolean = false;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icClose = icClose;
    STT: number = 1;
    height: number;
    tenBN: string = "";
    documentType: DocumentType;
    dataSource: any = {
        data: [],
        total: 0
    };

    minDateDenNgay: Date = null;

    minDateTuNgay: Date = null;
    _isLoading: boolean = false;
    _isLoadingTotalPage: boolean = false;
    _showDefaultPagerTemplate: boolean;
    showDefaultPagerTemplate: boolean = true;
    totalDoanhThuThang: number = 0;
    totalMienGiamThang: number = 0;
    totalKhacThang: number = 0;
    totalBHYTThang: number = 0;
    totalDoanhThuThuanThang: number = 0;
    //
    totalDoanhThuKy: number = 0;
    totalMienGiamKy: number = 0;
    totalKhacKy: number = 0;
    totalBHYTKy: number = 0;
    totalDoanhThuThuanKy: number = 0;
    ishowView: boolean = false;
    isbool: boolean = false;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @Input() heightToolbar: number = 140;
    baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo: BaoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo = new BaoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo();
    @ViewChild('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true }) baoCaoChiTietDoanhthuTheoKhoaPhongGrid: any;
    @ViewChild('DoanhThuThang', { static: true }) DoanhThuThang: TemplateRef<any>;
    @ViewChild('MienGiamTheoThang', { static: true }) MienGiamTheoThang: TemplateRef<any>;
    @ViewChild('ChiPhiKhacTheoThang', { static: true }) ChiPhiKhacTheoThang: TemplateRef<any>;
    @ViewChild('BHYTThang', { static: true }) BHYTThang: TemplateRef<any>;
    @ViewChild('DoanhThuThuanTheoThang', { static: true }) DoanhThuThuanTheoThang: TemplateRef<any>;
    @ViewChild('DoanhThuTheoKySoSanh', { static: true }) DoanhThuTheoKySoSanh: TemplateRef<any>;
    @ViewChild('mienGiamTheoKySoSanh', { static: true }) mienGiamTheoKySoSanh: TemplateRef<any>;
    @ViewChild('ChiPhiKhacTheoKySoSanh', { static: true }) ChiPhiKhacTheoKySoSanh: TemplateRef<any>;
    @ViewChild('BhytTheoKySoSanh', { static: true }) BhytTheoKySoSanh: TemplateRef<any>;
    @ViewChild('DoanhThuThuanTheoKySoSanh', { static: true }) DoanhThuThuanTheoKySoSanh: TemplateRef<any>;
    hidden : boolean = true;
    urlGetDataGridChild: string = "";
    urlGetPageDataGridChild : string = "";
    public aggregates: any[] = [
        { field: 'DoanhThuThang', aggregate: 'sum' },
        { field: 'MienGiamThang', aggregate: 'sum' },
        { field: 'KhacThang', aggregate: 'sum' },
        { field: 'BHYTThang', aggregate: 'sum' },
        { field: 'DoanhThuThuanThang', aggregate: 'sum' },
        { field: 'DoanhThuKy', aggregate: 'sum' },
        { field: 'MienGiamKy', aggregate: 'sum' },
        { field: 'KhacKy', aggregate: 'sum' }, { field: 'BHYTKy', aggregate: 'sum' },
        { field: 'BHYTKy', aggregate: 'sum' },
        { field: 'DoanhThuThuanKy', aggregate: 'sum' },

    ];

    public state: State = {
        skip: 0,
        take: 10,
        group: []
    };

    gridColumns: any[];
    gridColumnsChild: any[];
    ngOnInit() {
       
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhDenNgay = this.search.RangeDateTimeSoSanh.DateEnd;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 60 }, //0 
            { Field: "KhoaPhong", Title: "Khoa/Phòng", Width: 120 },//1
            { Field: "DichVu", Title: "Dịch vụ", MinWidth: 500 },//2
            { Field: "DoanhThuTheoThang", Title: "Doanh thu", Width: 120, Template: this.DoanhThuThang },//3
            { Field: "MienGiamTheoThang", Title: "Các khoản giảm trừ DT", Width: 240, Template: this.MienGiamTheoThang },//4
            { Field: "ChiPhiKhacTheoThang", Title: "Khác", Width: 120, Template: this.ChiPhiKhacTheoThang , Hidden : true},//5
            { Field: "BhytTheoThang", Title: "BHYT", Width: 120, Template: this.BHYTThang },//5
            { Field: "DoanhThuThuanTheoThang", Title: "Doanh Thu Thuần", Width: 150, Template: this.DoanhThuThuanTheoThang },//6
            { Field: "DoanhThuTheoKySoSanh", Title: "Doanh thu", Width: 120, Template: this.DoanhThuTheoKySoSanh },//7
            { Field: "MienGiamTheoKySoSanh", Title: "Các khoản giảm trừ DT", Width: 240, Template: this.mienGiamTheoKySoSanh },//7
            { Field: "ChiPhiKhacTheoKySoSanh", Title: "Khác", Width: 120, Template: this.ChiPhiKhacTheoKySoSanh , Hidden : true},//7
            { Field: "BhytTheoKySoSanh", Title: "BHYT", Width: 120, Template: this.BhytTheoKySoSanh },//8
            { Field: "DoanhThuThuanTheoKySoSanh", Title: "Doanh Thu Thuần", Width: 150, Template: this.DoanhThuThuanTheoKySoSanh },//8
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0,0,0,0);
      
        if(this.search.RangeDateTimeFilter.DateStart == null)
        {
          this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if(this.search.RangeDateTimeSoSanh.DateStart == null)
        {
          this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
        }
    }
    public pageChange(event: PageChangeEvent): void {
        if (event != null) {
            this.skip = event.skip;
            this.isbool = true;
        }
    }
    pageChangeDetail(event: PageChangeEvent): void {
        if (event != null) {
            this.skipDetail = event.skip;
        }
    }
    columnResize(event: any): void {
        //khi resize column parent thì column child cũng resize theo
        if (event != null && event.length > 0) {
            event.forEach(element => {
                var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
                if (columnIndex >= 0) {
                    this.gridColumns[columnIndex].Width = element.newWidth;
                    if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
                        jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
                    }
                }
            });
        }
    }

    getFieldColumn(index: number) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index: number) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index: number) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    getMinWidthColumn(minWidth: number) {
        var widthParent = jQuery("#baoCaoChiTietDoanhthuTheoKhoaPhongGrid").parent().width();
        var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
        var totalWidth = this.gridColumns.filter((item) => {
            return item.Width != null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if ((widthScreen < totalWidth + minWidth + 100)) {
            return minWidth;
        }
        else {
            return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
        }
    }
    detailExpand(event: any) {
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KhoaPhongId = event.dataItem.Id;
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
        let denNgay = CommonService.formatDateTime(this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.DenNgay, "mm/dd/yyyy");
        let tuNgay = CommonService.formatDateTime(this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.TuNgay, "mm/dd/yyyy");
        let denNgayKy = CommonService.formatDateTime(this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhDenNgay, "mm/dd/yyyy");
        let tuNgayKy = CommonService.formatDateTime(this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhTuNgay, "mm/dd/yyyy");
        this.urlGetDataGridChild = "BaoCao/GetBaoCaoChiTietDoanhThuTheoKhoaPhongForDetailGridAsync?khoaPhongId=" + this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KhoaPhongId + "&tuNgay=" +tuNgay +"&denNgay=" +denNgay + "&KySoSanhTuNgay=" + tuNgayKy + "&kySoSanhDenNgay=" + denNgayKy;
        // this.urlGetDataGridChild = "BaoCao/GetBaoCaoChiTietDoanhThuTheoKhoaPhongForDetailGridAsync?khoaPhongId=" + this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KhoaPhongId + "&tuNgay=" +tuNgay +"&denNgay=" +denNgay + "&KySoSanhTuNgay=" + tuNgayKy + "&kySoSanhDenNgay=" + denNgayKy;
    }
    ngAfterContentInit() {
        var self = this;
        self.height = jQuery(window).height() - 180;
        if (self.height < 400)
            self.height = 400;
        jQuery(window).resize(function () {
            self.height = jQuery(window).height() - 180;
            if (self.height < 400)
                self.height = 400;
        });

    }
    changeValueStart(event: any) {
        this.minDateDenNgay = new Date();

        if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart || this.search.RangeDateTimeSoSanh.DateStart != null && this.search.RangeDateTimeSoSanh.DateEnd != null && this.search.RangeDateTimeSoSanh.DateEnd > this.search.RangeDateTimeSoSanh.DateStart) {
            this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
            this.search.RangeDateTimeSoSanh.DateEnd = this.minDateDenNgay;
        }
    }
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        if (this.search.RangeDateTimeFilter.DateStart == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateStart == null ) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateEnd == null ) {
            this.minDateDenNgay = new Date();
            this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.search.RangeDateTimeSoSanh.DateEnd = this.minDateDenNgay;
        }
        if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeSoSanh.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeSoSanh.DateEnd != null)  {
            this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
            this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
            this.DateStartKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "dd/mm/yyyy");
            this.DateEndKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "dd/mm/yyyy");
        }
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhTuNgay = this.search.RangeDateTimeSoSanh.DateStart;
        this.ishowView = true;
        this.apiService.post<any>("BaoCao/GetBaoCaoChiTietDoanhThuTheoKhoaPhongForMasterGridAsync", this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData !== undefined && resultData != null) {

                    this.gridData = resultData;

                    this.gridView = {
                        data: resultData.Data,
                        total: resultData.TotalRowCount
                    };
                    this._isLoadingTotalPage = false;
                    this.gridView.data.forEach((item, idx) => {
                        this.baoCaoChiTietDoanhthuTheoKhoaPhongGrid.collapseRow(idx);
                    })
                    this._isLoading = false;
                    
                }
            }
        });
        
        this.apiService.post<any>("BaoCao/GetTotalBaoCaoTongHopDoanhThuTheoKhoaPhongForGridAsync", this.baoCaoChiTietDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridData = resultData;

                // thang
                this.totalDoanhThuThang = resultData.DoanhThuTheoThang;
                this.totalDoanhThuThuanThang = resultData.DoanhThuThuanTheoThang;
                this.totalBHYTThang = resultData.BhytTheoThang;
                this.totalMienGiamThang = resultData.MienGiamTheoThang;
                this.totalKhacThang = resultData.ChiPhiKhacTheoThang;
                // ky
                this.totalDoanhThuKy = resultData.DoanhThuTheoKySoSanh;
                this.totalDoanhThuThuanKy = resultData.DoanhThuThuanTheoKySoSanh;
                this.totalBHYTKy = resultData.BhytTheoKySoSanh;
                this.totalMienGiamKy = resultData.MienGiamTheoKySoSanh;
                this.totalKhacKy = resultData.ChiPhiKhacTheoKySoSanh;
            }
        });
    }

    XuatBaoCao() {
        if (this.search.RangeDateTimeFilter != null) {
            if (this.search.RangeDateTimeFilter.DateStart == null) {
                var currentYear = new Date();
                var thisYear = currentYear.getFullYear();
                this.search.RangeDateTimeFilter.DateStart = new Date("January 1, " + thisYear + " 00:00:00");
            }
        }
        var dateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
        var dateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");

        if (this.search.RangeDateTimeSoSanh != null) {
            if (this.search.RangeDateTimeSoSanh.DateStart == null) {
                var currentYear = new Date();
                var thisYear = currentYear.getFullYear();
                this.search.RangeDateTimeSoSanh.DateStart = new Date("January 1, " + thisYear + " 00:00:00");
            }
        }
        var dateStartKySoSanh = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "mm/dd/yyyy");
        var dateEndKySoSanh = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "mm/dd/yyyy");

        window.location.href = environment.api_url + "/BaoCao/ExportDetailedRevenueReportByDepartment?startDate=" + dateStart + "&endDate=" + dateEnd + "&startDateKySoSanh=" + dateStartKySoSanh + "&endDateKySoSanh=" + dateEndKySoSanh;
    }

    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }
    searchRefresh(){
        this.XemBaoCao();
    }
}
