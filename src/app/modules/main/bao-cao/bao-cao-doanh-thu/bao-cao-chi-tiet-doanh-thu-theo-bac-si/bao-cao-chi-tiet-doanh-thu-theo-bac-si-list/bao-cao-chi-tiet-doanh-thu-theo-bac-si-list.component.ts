import { Component, OnInit, ViewChild, Input } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { BaoCaoDanhThuTheoBacSi, Search,BaoCaoChiTietDoanhThuQueryInfoQueryInfo,DanhSachBacSy} from '../bao-cao-chi-tiet-doanh-thu-theo-bac-si.model';
import { ApiService } from 'src/app/core/services/api.service';
import { process, State } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';

import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
declare var jQuery: any;

@Component({
    selector: 'app-bao-cao-chi-tiet-doanh-thu-theo-bac-si-list',
    templateUrl: './bao-cao-chi-tiet-doanh-thu-theo-bac-si-list.component.html',
    styleUrls: ['./bao-cao-chi-tiet-doanh-thu-theo-bac-si-list.component.scss']
})
export class BaoCaoChiTietDoanhThuTheoBacSiListComponent implements OnInit {
    search = new Search();
    public gridView: GridDataResult;
    public pageSize = 50;
    public skip = 0;
    take: number;
    jqueryString: string = "";
    public groupSTT = new Map();
    //================================Begin value total===========================
    public totalDoanhThu: number = 0;
    public totalCacKhoanGiamTru: number = 0;
    public totalBHYT: number = 0;
    public totalDoanhThuThuan: number = 0;
    public totalKhac: number = 0;
    public totalMienGiam: number = 0;
    //================================End value total===========================
    baoCaoChiTietDoanhThuQueryInfoQueryInfo: BaoCaoChiTietDoanhThuQueryInfoQueryInfo = new BaoCaoChiTietDoanhThuQueryInfoQueryInfo();
    minDateDenNgay: Date = null;
    minDateTuNgay: Date = null;
    // date 
    DateStart: string = null;
    DateEnd: string = null;
    DateStartKy: string = null;
    DateEndKy: string = null;
    //-->
    public danhSachBacSy = new DanhSachBacSy();
    _isLoading: boolean = false;
    _isLoadingTotalPage: boolean = false;
    _showDefaultPagerTemplate: boolean;
    showDefaultPagerTemplate: boolean = true;
    constructor(private apiService: ApiService) {

    }

    sort: SortDescriptor[] = [{
        field: 'Id',
        dir: 'desc'
    }];

    public baoCaoDanhThuTheoBacSi: BaoCaoDanhThuTheoBacSi[] = [];
    private items: any[] = this.baoCaoDanhThuTheoBacSi;
    expression: boolean = false;

    //================================Begin icon==========================
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icClose = icClose;
    //================================End icon==========================

    height: number;
    documentType: DocumentType;
    gridColumns: any[] = [];
    ishowView: boolean = false;
    ishowViewData: boolean = false;

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @Input() heightToolbar: number = 140;

    ngOnInit() { 
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    if(this.search.RangeDateTimeFilter.DateStart == null)
    {
        this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.TuNgay =  this.minDateDenNgay ;
    }
    this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
    this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0,0,0,0);
  
    if(this.search.RangeDateTimeFilter.DateStart == null)
    {
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    }

    //================================Begin group aggregates ===========================
    public aggregates: any[] = [
        { field: 'DoanhThuTheoThang', aggregate: 'sum' },
        { field: 'CacKhoanGiamTru', aggregate: 'sum' },
        { field: 'BhytTheoThang', aggregate: 'sum' },
        { field: 'DoanhThuThuanTheoThang', aggregate: 'sum' },
        { field: 'CacKhoanGiamKhacTheoThang', aggregate: 'sum' },
        { field: 'MienGiamTheoThang', aggregate: 'sum' },
    ];
    public state: State = {
        skip: 0,
        take: 0,
        group: [{ field: 'Stt', aggregates: this.aggregates },]
    }
    //================================End group aggregates ===========================
    public selectValueColumn(field: any, keyColumn: any) {
        switch (field) {
            case 'Ngay':
                return this.groupBySTT(keyColumn).Ngay;
            case 'MaBn':
                return this.groupBySTT(keyColumn).MaBn;
            case 'MaTn':
                return this.groupBySTT(keyColumn).MaTn;
            case 'HoTenBn':
                return this.groupBySTT(keyColumn).HoTenBn;
        }

    }

    public groupBySTT(keyColumn: any): any {
        let valueGroup: any = [];
        this.groupSTT.forEach((value, key) => {
            if (keyColumn == key) {
                valueGroup = value[0];
            }
        });
        return valueGroup;
    }
    chonBacSy(item: any) {
        if(item != undefined)
        {
          this.danhSachBacSy.KeyId = item;
        }
        else{
          this.danhSachBacSy.KeyId = null;
        }
      }
     
    public pageChange(event: PageChangeEvent): void {
        this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.Skip= event.skip;
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
    public totalGroupHeaderDoanhThu: string = "";
    public totalGroupHeaderCacKhoanGiamTru: string = "";
    public totalGroupHeaderBHYT: string = "";
    public totalGroupHeaderDoanhThuThuan: string = "";
    public totalGroupHeaderKhac: string = "";
    public totalGroupHeaderMienGiam: string = "";
    XemBaoCao() {
        this._isLoading= true;
        this._isLoadingTotalPage = true;
        if (this.search.RangeDateTimeFilter.DateStart == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0,0,0,0);
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
        if (this.search.RangeDateTimeFilter.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
        }
            this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
            this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
        this.ishowViewData = true;
        this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
       

        if( this.danhSachBacSy.KeyId == null ||  this.danhSachBacSy.KeyId == 0)
        {
            this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.BacSiId = 0;
        }
        else{
            this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.BacSiId = this.danhSachBacSy.KeyId;
        }
      
        this.apiService.post<any>("BaoCao/GetBaoCaoChiTietDoanhThuTheoBacSiForGridAsync", this.baoCaoChiTietDoanhThuQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.baoCaoDanhThuTheoBacSi = resultData.Data;
                this.state.take =this.baoCaoDanhThuTheoBacSi.length;
                //
                this.groupSTT = this.groupBy(this.baoCaoDanhThuTheoBacSi, pet => pet.Stt);
                let dataList = process( this.baoCaoDanhThuTheoBacSi, this.state);
                this.gridView  = {
                  data: dataList.data.sort(),
                  total: resultData.TotalRowCount
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
        this.apiService.post<any>("BaoCao/GetTotalBaoCaoChiTietDoanhThuTheoBacSiForGridAsync", this.baoCaoChiTietDoanhThuQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.baoCaoDanhThuTheoBacSi = resultData;
                this.totalDoanhThu = resultData.DoanhThuTheoThang;
                // this.totalCacKhoanGiamTru = resultData.DoanhThuTheoThang;
                this.totalKhac = resultData.CacKhoanGiamKhacTheoThang;
                this.totalMienGiam = resultData.MienGiamTheoThang;
                this.totalBHYT = resultData.BhytTheoThang;
                this.totalDoanhThuThuan = resultData.DoanhThuThuanTheoThang;
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
        
        if( this.danhSachBacSy.KeyId == null ||  this.danhSachBacSy.KeyId == 0)
        {
            this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.BacSiId = 0;
        }
        else{
            this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.BacSiId = this.danhSachBacSy.KeyId;
        }
        window.location.href = environment.api_url + "/BaoCao/ExportDetailedSalesReportByDoctor?startDate=" + dateStart + "&endDate=" + dateEnd + "&bacSiId=" + this.baoCaoChiTietDoanhThuQueryInfoQueryInfo.BacSiId;
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
