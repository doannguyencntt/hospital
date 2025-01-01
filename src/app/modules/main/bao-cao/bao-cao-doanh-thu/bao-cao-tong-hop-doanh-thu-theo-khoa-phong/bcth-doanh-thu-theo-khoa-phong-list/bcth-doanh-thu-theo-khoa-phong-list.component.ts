import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
import { Search, DoanhThuTheoKhoaPhong,BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo } from '../bao-cao-tong-hop-doanh-thu-theo-khoa-phong.model';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;

@Component({
    selector: 'app-bcth-doanh-thu-theo-khoa-phong-list',
    templateUrl: './bcth-doanh-thu-theo-khoa-phong-list.component.html',
    styleUrls: ['./bcth-doanh-thu-theo-khoa-phong-list.component.scss']
})

export class BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent implements OnInit {

    search = new Search();
    public gridView: GridDataResult;
    public pageSize = 50;
    public skip = 0;
    take: number;
    private data1: Object[];
    jqueryString: string = "";
    // -->
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
    //-->
    // date 
    DateStart: string = null;
    DateEnd: string = null;
    DateStartKy: string = null;
    DateEndKy: string = null;
    //-->
    baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo: BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo = new BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo();
    constructor(private apiService: ApiService) {

    }

    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];
    minDateDenNgay: Date = null;
    minDateTuNgay: Date = null;
    public gridData: DoanhThuTheoKhoaPhong[] = [];
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
    documentType: DocumentType;
    gridColumns: any[] = [];
    ishowView: boolean = false;
    ishowViewData: boolean = false;
    _isLoading: boolean = false;
    _isLoadingTotalPage: boolean = false;
    _showDefaultPagerTemplate: boolean;
    showDefaultPagerTemplate: boolean = true;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @Input() heightToolbar: number = 140;
    ngOnInit() {
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
        this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhDenNgay =  this.search.RangeDateTimeSoSanh.DateEnd ;
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
        this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.Skip= event.skip;
        this.skip = event.skip;
        this.XemBaoCao();
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
        // k chọn date thi default date now
        if (this.search.RangeDateTimeFilter.DateStart == null ) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateStart == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.search.RangeDateTimeSoSanh.DateEnd = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
        }
        // format date "dd/mm/yyyy" hh
            this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
            this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
            this.DateStartKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "dd/mm/yyyy");
            this.DateEndKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "dd/mm/yyyy");
        this.ishowViewData = true;
        this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhTuNgay = this.search.RangeDateTimeSoSanh.DateStart;
        
        this.apiService.post<any>("BaoCao/GetBaoCaoTongHopDoanhThuTheoKhoaPhongForGridAsync", this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridData= resultData;
                //this.gridData= resultData.Data;
                this.gridView  = {
                  data: resultData.Data,
                  total:  resultData.TotalRowCount
              };
             this._isLoading= false;
             this._isLoadingTotalPage = false;
             if (this.gridView.total != 0){
                this.ishowView = true;
                } else{
                  this.ishowView = false;
                }
            }
        });
        this.apiService.post<any>("BaoCao/GetTotalBaoCaoTongHopDoanhThuTheoKhoaPhongForGridAsync", this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridData= resultData;

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
        if (this.search.RangeDateTimeFilter.DateStart == null ) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateStart == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeSoSanh.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.search.RangeDateTimeSoSanh.DateEnd = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.minDateTuNgay = new Date();
            this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
        }
        // format date "dd/mm/yyyy" hh
            this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "MM/dd/yyyy");
            this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "MM/dd/yyyy");
            this.DateStartKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "MM/dd/yyyy");
            this.DateEndKy = CommonService.formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "MM/dd/yyyy");

        window.location.href = environment.api_url + "/BaoCao/ExportAggregateRevenueReportByDepartment?startDate=" +  this.DateStart + "&endDate=" + this.DateEnd + "&startDateKySoSanh=" + this.DateStartKy + "&endDateKySoSanh=" + this.DateEndKy;
    }
    searchRefresh(){
        this.XemBaoCao();
    }
}
