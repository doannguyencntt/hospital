import { Component, OnInit, ViewChild, Input } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { process, State } from '@progress/kendo-data-query';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
import { BaoCaoChiTietThuTienVienPhiBenhNhan, Search, NhanVienThuNgan, QuayThuNgan, SearchField, BaoCaoThuPhiVienPhiQueryInfoQueryInfo } from '../bao-cao-thu-tien-vien-phi';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { HttpClient } from "@angular/common/http";

declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-danh-sach-thu-tien-vien-phi',
  templateUrl: './bao-cao-danh-sach-thu-tien-vien-phi.component.html',
  styleUrls: ['./bao-cao-danh-sach-thu-tien-vien-phi.component.scss']
})
export class BaoCaoChiTietThuTienVienPhiBenhNhanComponent implements OnInit {
  search = new Search();
  public gridView: GridDataResult;
  public gridQueryInfo: GridQueryInfo;
  public nhanVienThuNgan = new NhanVienThuNgan();
  public quayThuNgan = new QuayThuNgan();
  quayThu: string = "";
  nguoiThu: string = "";
  public pageSize = 50;
  public skip = 0;
  take: number;
  jqueryString: string = "";
  public groupSTT = new Map();
  DateStart: string = null;
  DateEnd: string = null;
  //================================Begin value total===========================
  public totalDoanhThu: number = 0;
  public totalBHYTChiTra: number = 0;
  public totalBHYTTuNhanChiTra: number = 0;
  public totalMiemGiam: number = 0;

  public totalVoucher: number = 0;
  public totalThuTuBenhNhan: number = 0;
  public totalTienMat: number = 0;
  public totalChuyenKhoan: number = 0;
  public totalPos: number = 0;
  //================================End value total===========================

  constructor(private apiService: ApiService, private http: HttpClient) {

  }

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  public baoCaoChiTietThuTienVienPhiBenhNhan: BaoCaoChiTietThuTienVienPhiBenhNhan[] = [];
  baoCaoChiTietList: BaoCaoChiTietThuTienVienPhiBenhNhan = new BaoCaoChiTietThuTienVienPhiBenhNhan();
  private items: any[] = this.baoCaoChiTietThuTienVienPhiBenhNhan;
  expression: boolean = false;

  //================================Begin icon==========================
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icClose = icClose;
  //================================End icon==========================
  //================================Begin paging==========================
  baoCaoThuPhiVienPhiQueryInfoQueryInfo: BaoCaoThuPhiVienPhiQueryInfoQueryInfo = new BaoCaoThuPhiVienPhiQueryInfoQueryInfo();
  _isLoadingTotalPage: boolean = false;
  //==========================================================
  height: number;
  documentType: DocumentType;
  gridColumns: any[] = [];
  ishowView: boolean = false;
  ishowViewData: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  _isLoading: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

  ngOnInit() {
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0,0,0,0);
  
    if(this.search.RangeDateTimeFilter.DateStart == null)
    {
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
  }

  //================================Begin group aggregates ===========================
  public aggregates: any[] = [
    { field: 'DoanhThu', aggregate: 'sum' },
    { field: 'BHYTChiTra', aggregate: 'sum' },
    { field: 'BHYTTuNhanChiTra', aggregate: 'sum' },
    { field: 'MiemGiam', aggregate: 'sum' },
    { field: 'Voucher', aggregate: 'sum' },
    { field: 'ThuTuBenhNhan', aggregate: 'sum' },
    { field: 'TienMat', aggregate: 'sum' },
    { field: 'ChuyenKhoan', aggregate: 'sum' },
    { field: 'Pos', aggregate: 'sum' },

    { field: 'TenBenhNhan', aggregate: 'count' },
    { field: 'MaBenhNhan', aggregate: 'count' },
    { field: 'NgayThuStr', aggregate: 'count' },
  ];
  public state: State = {
    skip: 0,
    take: 0,
    group: [{ field: 'STT', aggregates: this.aggregates }]
  };
  //================================End group aggregates ===========================

  chonQuay(item: any) {
    this.quayThuNgan = item;
  }
  chonQuayChange(item: any) {
    if (item != undefined) {
      this.quayThuNgan.KeyId = item;
    }
    else {
      this.quayThuNgan.KeyId = 0;
    }
  }
  chonNhanVien(item: any) {
    this.nhanVienThuNgan = item;
  }
  chonNhanVienChange(item: any) {
    if (item != undefined) {
      this.nhanVienThuNgan.KeyId = item;
    }
    else {
      this.nhanVienThuNgan.KeyId = 0;
    }
  }

  public selectValueColumn(field: any, keyColumn: any) {
    switch (field) {
      case 'NgayThuStr':
        return this.groupBySTT(keyColumn).NgayThuStr;
      case 'MaBenhNhan':
        return this.groupBySTT(keyColumn).MaBenhNhan;
      case 'MaTiepNhan':
        return this.groupBySTT(keyColumn).MaTiepNhan;
      case 'TenBenhNhan':
        return this.groupBySTT(keyColumn).TenBenhNhan;
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

  public pageChange(event: PageChangeEvent): void {
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.Skip = event.skip;
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
  changeValueStartTuNgaythang(event: any) {
    this.minDateDenNgay = new Date();

    if (this.search.RangeDateTimeFilter.DateStart == null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
      this.search.RangeDateTimeFilter.DateStart = null;
    }

  }
  changeValueStartDenNgay(event: any) {
    this.minDateDenNgay = new Date();
    if (this.search.RangeDateTimeFilter.DateEnd == null) {
      this.search.RangeDateTimeFilter.DateEnd = null;
    }

  }
  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.search.RangeDateTimeFilter.DateStart == null ) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    if ( this.search.RangeDateTimeFilter.DateEnd == null) {
      this.minDateTuNgay = new Date();
      this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    }
       if (this.search.RangeDateTimeFilter.DateStart != null)  {
      this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");

    }
    if (this.search.RangeDateTimeFilter.DateEnd != null) {
      this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
    }
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
    this.ishowViewData = true;
    this.apiService.post<any>("BaoCao/GetBaoCaoChiTietThuTienVienPhiBenhNhanForGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
    
        this.baoCaoChiTietThuTienVienPhiBenhNhan = resultData.Data;
        this.state.take = this.baoCaoChiTietThuTienVienPhiBenhNhan.length;
        //
        this.groupSTT = this.groupBy(this.baoCaoChiTietThuTienVienPhiBenhNhan, pet => pet.STT);
        let dataList = process(this.baoCaoChiTietThuTienVienPhiBenhNhan, this.state);
       
        this.gridView = {
          data: dataList.data.sort(),
          total: resultData.TotalRowCount
        };
        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
      if (this.gridView.total != 0){
        this.ishowView = true;
        } else{
          this.ishowView = false;
        }
    });
    // tính tổng sum báo cáo
    this.apiService.post<any>("BaoCao/GetTotalBaoCaoChiTietThuTienVienPhiBenhNhanForGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.baoCaoChiTietThuTienVienPhiBenhNhan = resultData.Data;

        this.totalDoanhThu = resultData.DoanhThu;
        this.totalBHYTChiTra = resultData.BHYTChiTra;
        this.totalBHYTTuNhanChiTra = resultData.BHYTTuNhanChiTra;
        this.totalMiemGiam = resultData.MiemGiam;
        this.totalVoucher = resultData.Voucher;
        this.totalThuTuBenhNhan = resultData.ThuTuBenhNhan;
        this.totalTienMat = resultData.TienMat;
        this.totalChuyenKhoan = resultData.ChuyenKhoan;
        this.totalPos = resultData.Pos;
      }
    });


  }
  // downloadFile(url: string,fileName:string) {

  //   // Process the file downloaded
  //   this.http.get(url, options).subscribe(res => {
  //       //const fileName = getFileNameFromResponseContentDisposition(res);
  //       saveFile(res.blob(), fileName);
  //   });
  
  XuatBaoCao() {
    if (this.search.RangeDateTimeFilter.DateStart == null ) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    if ( this.search.RangeDateTimeFilter.DateEnd == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    }
      this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "MM/dd/yyyy");
      this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "MM/dd/yyyy");
    window.location.href = environment.api_url + "/BaoCao/ExportBaoCaoChiTietThuTienBenhNhan?phongBenhVienId=" + this.quayThuNgan.KeyId + "&nhanVienId=" + this.nhanVienThuNgan.KeyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd;
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
  searchRefresh() {
    this.XemBaoCao();
  }
}
