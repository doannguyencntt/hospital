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
import { Search, BaoCaoTongHopDoanhThuBacSy ,BaoCaoDoanhThuBacSiQueryInfoQueryInfo} from '../bao-cao-tong-hop-doanh-thu-theo-bac-si.model';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { IntlService } from '@progress/kendo-angular-intl';
declare var jQuery: any;


@Component({
    selector: 'app-bao-cao-tong-hop-doanh-thu-theo-bac-si-list',
    templateUrl: './bao-cao-tong-hop-doanh-thu-theo-bac-si-list.component.html',
    styleUrls: ['./bao-cao-tong-hop-doanh-thu-theo-bac-si-list.component.scss']
})
export class BaoCaoTongHopDoanhThuTheoBacSiListComponent implements OnInit {
    search = new Search();
    public gridView: GridDataResult;
    public pageSize = 50;
    public skip = 0;
    private data1: Object[];
    jqueryString: string = "";
    baoCaoDoanhThuBacSiQueryInfoQueryInfo: BaoCaoDoanhThuBacSiQueryInfoQueryInfo = new BaoCaoDoanhThuBacSiQueryInfoQueryInfo();
    constructor(private apiService: ApiService, public intl: IntlService) {

    }
    //  public pageSize = 50;
    take: number;
    minDateDenNgay: Date = null;
    // date 
    DateStart: string = null;
    DateEnd: string = null;
    DateStartKy: string = null;
    DateEndKy: string = null;
    //-->
    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    public gridData: BaoCaoTongHopDoanhThuBacSy[] = [];
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

    totalDoanhThu: number = 0;
    totalBHYT: number = 0;
    totalThucThu: number = 0;
    totalMienGiam: number = 0;
    totalKhac: number = 0;
    ishowView: boolean = false;
    ishowViewData: boolean = false;
    minDateTuNgay: Date = null;
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
        this.baoCaoDoanhThuBacSiQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
        this.baoCaoDoanhThuBacSiQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0,0,0,0);
      
        if(this.search.RangeDateTimeFilter.DateStart == null)
        {
          this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
    }
    public pageChange(event: PageChangeEvent): void {
        this.baoCaoDoanhThuBacSiQueryInfoQueryInfo.Skip= event.skip;
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
        if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
            this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
        }
    }
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage =true;
        // tu ngay null lây ngay hien tại
        if (this.search.RangeDateTimeFilter.DateStart == null ) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateEnd == null ) {
            this.minDateTuNgay = new Date();
            this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateStart != null) {
            this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
            this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
        }
        this.baoCaoDoanhThuBacSiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoDoanhThuBacSiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateEnd;
        this.ishowViewData = true;
        this.apiService.post<any>("BaoCao/GetBaoCaoTongHopDoanhThuTheoBacSiForGridAsync",this.baoCaoDoanhThuBacSiQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridData= resultData.Data;
                this.gridView  = {
                  data: this.gridData,
                  total: resultData.TotalRowCount
              };
              this._isLoadingTotalPage =false;
              this._isLoading = false;
              if (this.gridView.total != 0){
                this.ishowView = true;
                } else{
                  this.ishowView = false;
                }
            }
        });
        this.apiService.post<any>("BaoCao/GetTotalBaoCaoTongHopDoanhThuTheoBacSiForGridAsync",this.baoCaoDoanhThuBacSiQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.totalDoanhThu = resultData.DoanhThu;
                this.totalBHYT = resultData.Bhyt;
                this.totalThucThu = 0;
                this.totalMienGiam = resultData.MienGiam;
                this.totalKhac = resultData.KhoanGiamTruKhac;
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
        window.location.href = environment.api_url + "/BaoCao/ExportConsolidatedSalesReportByDoctor?startDate=" + dateStart + "&endDate=" + dateEnd;
    }
    searchRefresh(){
        this.XemBaoCao();
    }
}
