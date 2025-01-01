import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icInfo from '@iconify/icons-ic/baseline-info';
import {
    TongHopDuTruMuaTaiKhoaDuoc,
    TongHopDuTruTuaTaiKhoaDuocSearchTuChoi
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc.model';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-tu-choi',
    templateUrl: './tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-tu-choi.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-tu-choi.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocTuChoiComponent implements OnInit {

    tongHopDuTruTuaTaiKhoaDuoc:TongHopDuTruMuaTaiKhoaDuoc  = new TongHopDuTruMuaTaiKhoaDuoc();
    tongHopDuTruTuaTaiKhoaDuocSearch:TongHopDuTruTuaTaiKhoaDuocSearchTuChoi;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icEdit = icEdit;
    icSearch = icSearch;
    icAdd = icAdd;
    icInfo =icInfo;
    icFilterList = icFilterList;
    icFileExcel = icFileExcel;
    loading: boolean = false;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildKhoColumns: any[] = [];
    gridChildKhoaColumns: any[] = [];
    gridChildChildColumns: any[] = [];
    gridChildChildChildColumns: any[] = [];
    gridChildChildChildKhoaColumns: any[] = [];
   
  khos: any[] = [];
  hdts: any[] = [];
    searchString: string;
    searchCtrl = new FormControl();
    icDelete = icDelete;
  
    @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
    @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
    @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  
    @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
    @ViewChild('ngayTuChoiTemplate', { static: true }) ngayTuChoiTemplate: TemplateRef<any>;
    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
      @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
      @ViewChild('soPhieuDuTruKhoIdTemplate', { static: true }) soPhieuDuTruKhoIdTemplate: TemplateRef<any>;
      @ViewChild('ngayGiamDocDuyetTemplate', { static: true }) ngayGiamDocDuyetTemplate: TemplateRef<any>;
  
  
      @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
      @ViewChild('#grid1', { static: false }) grid1: GridComponent;
      @ViewChild('#grid2', { static: false }) grid2: GridComponent;
      @ViewChild('gridChildChildChildChild', { static: false }) gridChildChildChildChild: GridComponent;
      @ViewChild('NYCTemplate', { static: true }) NYCTemplate: TemplateRef<any>;
      @ViewChild('NKDDTemplate', { static: true }) NKDDTemplate: TemplateRef<any>;
      @ViewChild('loaitemplate', { static: true }) loaitemplate: TemplateRef<any>;
      @ViewChild('tongTonKhoTemplate', { static: true }) tongTonKhoTemplate: TemplateRef<any>;
      @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
      @ViewChild('hDChuaNhanTemplate', { static: true }) hDChuaNhanTemplate: TemplateRef<any>;
      @ViewChild('ngayYeuCauChildTemplate', { static: true }) ngayYeuCauChildTemplate: TemplateRef<any>;
      @ViewChild('loaiNhomGroupHeaderTemplate', { static: true }) loaiNhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  
    gridDataSource: any = {};
  data : any[] =[];
    theFirstSearch: any;
  
    holdQuery: any = null;
    query: string = null;
    additionalSearchString: string = null;
  
    constructor(
      private authService: AuthService,
      private dialog: MatDialog,
      private notificationService: NotificationService,
      private apiService: ApiService,
      private router: Router,
      private route: ActivatedRoute
  ) { }
  groupsChildChild: GroupDescriptor[] = [{ field: 'Loai' }];
    ngOnInit() {
      this.documentType = DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc;
      this.tongHopDuTruTuaTaiKhoaDuocSearch = new TongHopDuTruTuaTaiKhoaDuocSearchTuChoi();
      if (this.route.snapshot.queryParams.holdQuery != null) {
        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (
        this.holdQuery != null &&
        LocalStorageHelper.getItem('additionalSearchStringTongHopDuTruMuaVatTuTuChoiTaiKhoDuocDaXuLy') != null
    ) {
        this.additionalSearchString = LocalStorageHelper.getItem(
            'additionalSearchStringTongHopDuTruMuaVatTuTuChoiTaiKhoDuocDaXuLy'
        );
        this.tongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(this.additionalSearchString);
        if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap != null)
              {
                  if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate != null)
                  {
                      this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate;
                      this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate;
                  }
                  if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate == null)
                  {
                      this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate;
                  }
                  if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate == null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate != null)
                  {
                      this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate;
                  }
  
              }
              if(this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString != null)
              {
                  this.searchString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
              }
              this.query = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
              this.gridChild._additionalSearchString = this.query;
              if(this.searchString != null )
              {
                this.gridChild.searchString = this.searchString;
              }
              this.gridChild.search();
    } else {
        LocalStorageHelper.setItem('additionalSearchStringTongHopDuTruMuaVatTuTuChoiTaiKhoDuocDaXuLy', null);
        this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
    }
      this.gridColumns = [
        { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
        { Field: 'KhoaKho', Title: 'Khoa/Kho', Width: 150, Sortable: true },
        { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 180, Sortable: true },
        { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
        { Field: 'NgayYeuCau', Title: 'Ngày Yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate},
        { Field: 'NgayTuChoi', Title: 'Ngày từ chối', Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate},
        { Field: 'NguoiTuChoi', Title: 'Người từ chối', Width: 150, Sortable: true,},
        { Field: 'LyDo', Title: 'Lý do', MinWidth: 150, Sortable: true },
    ];
    this.gridChildKhoColumns = [
      { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
      { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
      { Field: 'VatTu', Title: 'Tên', ShowTooltip: true,MinWidth: 120, Sortable: false },
      { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
      { Field: 'HoatChat', Title: 'Quy cách',ShowTooltip: true, Width: 80, Sortable: false },
      { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
      { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false},
      { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 150, Sortable: false },
      { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
      { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false ,Template:this.tongTonKhoTemplate},
      { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false ,Template:this.hDChuaNhanTemplate},
      { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 150, Sortable: false },
  ];
  this.gridChildKhoaColumns = [
    { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
    { Field: 'VatTu', Title: 'Tên', ShowTooltip: true,Width: 120, Sortable: false },
    { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
    { Field: 'HoatChat', Title: 'Quy cách',ShowTooltip: true, Width: 80, Sortable: false },
    { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
    { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false},
    { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 150, Sortable: false },
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 30, Sortable: false },
    { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
    { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 150, Sortable: false ,Template:this.tongTonKhoTemplate},
    { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false ,Template:this.hDChuaNhanTemplate},
    { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 150, Sortable: false },
    { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false },
  ];
  this.gridChildChildChildKhoaColumns = [
    { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
    { Field: 'HoatChat', Title: 'Quy cách', ShowTooltip: true,Width: 80, Sortable: false },
    { Field: 'VatTu', Title: 'Tên', ShowTooltip: true,Width: 120, Sortable: false },
    { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
    { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
    { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false},
    { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 150, Sortable: false },
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 30, Sortable: false },
    { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 150, Sortable: false },
    { Field: 'KhoTongTon', Title: 'Kho tổng tồn ', Width: 150, Sortable: false ,Template:this.tongTonKhoTemplate},
    { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 150, Sortable: false ,Template:this.hDChuaNhanTemplate},
    { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 150, Sortable: false },
    { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false },
  ];
  this.gridChildChildColumns =[
    { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
      { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
      { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false},
      { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
  ];
    }
    TooltipCustom(duTruDetail: any) {
      this.khos = [...duTruDetail.TongTonList];
      this.hdts = [...duTruDetail.HopDongChuahapList];
  }
    xemChiTiet(IdKhoaDuTruVatTu:number, dataItem: any) {
         if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigateByUrl('nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc/xem-chi-tiet-tu-choi/' + IdKhoaDuTruVatTu +'/'+ dataItem.LoaiKho + '?holdQuery=true');
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
  onKey(event: any) {
    if (event.keyCode === 13) {
      //   this.Timkiem();
      if(this.searchString != undefined && this.searchString != null)
      {
          this.gridChild.searchString = this.searchString;
      }
      else{
          this.gridChild.searchString= '';
      }
      this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc?holdQuery=true');
      this.gridChild.search();
      this.Timkiem();
    }
  }
  Timkiem() {
      let QueryString = null;
      this.gridChild._additionalSearchString = null;
    if (this.searchString !== "") {
      QueryString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
    }
  
      this.router.navigateByUrl('/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa-duoc?holdQuery=true');
      const tongHopDuTruTuaTaiKhoaDuocSearchClone: TongHopDuTruTuaTaiKhoaDuocSearchTuChoi = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));
      if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate != null) {
          const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate);
          tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate = new Date(startDate);
      }
  
      if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate != null) {
          const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate);
          tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate = new Date(endDate);
      }
       if(this.searchString != null)
    {
      tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = this.searchString;
    }
    
    var queryString = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
    LocalStorageHelper.setItem(
      'additionalSearchStringTongHopDuTruMuaVatTuTuChoiTaiKhoDuocDaXuLy',
      JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone)
  );
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }
  clearSearch() {
    if(this.searchString=="")
    {
      this.gridChild.searchString = "";
      this.Timkiem();
    }
  }
  changeNgayNhapRange() {
    this.Timkiem();
  }
  
  changeNgayDuyetRange(range: any) {
    this.Timkiem();
  }
}
