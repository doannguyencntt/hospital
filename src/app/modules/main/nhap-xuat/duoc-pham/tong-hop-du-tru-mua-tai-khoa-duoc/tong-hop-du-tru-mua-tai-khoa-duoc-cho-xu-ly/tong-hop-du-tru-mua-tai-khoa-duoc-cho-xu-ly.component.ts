import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
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
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { TongHopDuTruMuaTaiKhoaDuoc ,TongHopDuTruTuaTaiKhoaDuocSearch,DuTruMuaDuocPhamKhoDuocChiTiet,DuTruMuaDuocPhamKhoDuoc} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { EnumLoaiKhoDuTru } from '../enums-loai-kho-du-tru' ;
import icInfo from '@iconify/icons-ic/baseline-info';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TuChoiDuyetPopupComponent } from '../tu-choi-duyet-popup/tu-choi-duyet-popup.component';
@Component({
  selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly',
  templateUrl: './tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent implements OnInit {

  tongHopDuTruTuaTaiKhoaDuoc:TongHopDuTruMuaTaiKhoaDuoc  = new TongHopDuTruMuaTaiKhoaDuoc();
  tongHopDuTruTuaTaiKhoaDuocSearch:TongHopDuTruTuaTaiKhoaDuocSearch;
  duTruMuaDuocPhamKhoDuoc :DuTruMuaDuocPhamKhoDuoc;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icEdit = icEdit;
  icSearch = icSearch;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icInfo= icInfo;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  khoGridChildColumns: any[] = [];
  gridChildChildColumns: any[] = [];

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
  @ViewChild('ngayKhoaDuocDuyetTemplate', { static: true }) ngayKhoaDuocDuyetTemplate: TemplateRef<any>;
  @ViewChild('ngayGiamDocDuyetTemplate', { static: true }) ngayGiamDocDuyetTemplate: TemplateRef<any>;
  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tongTonKhoTemplate', { static: true }) tongTonKhoTemplate: TemplateRef<any>;
  @ViewChild('hDChuaNhanTemplate', { static: true }) hDChuaNhanTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
  @ViewChild("gridChoXuLy", { static: true }) gridChild: GridComponent;
  @ViewChild('loaiNhomGroupHeaderTemplate', { static: true }) loaiNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  baseRoute: string = "/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc";
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  totalTrangThaiChoDuyet :number = 0;
  totalTrangThaiChoGoi :number = 0;
  listItemDuTruMuaDuocPhamChTiet = [];
  gridDataSource: any = {};   
data : any[] =[];
  theFirstSearch: any;

  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  groupTrangThais: GroupDescriptor[] = [{
    field: 'TrangThai', dir: null, aggregates: [
        { field: 'TrangThai', aggregate: 'count' },
       ]
}];
groupsChildChild: GroupDescriptor[] = [{ field: 'Loai' }];
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
    this.tongHopDuTruTuaTaiKhoaDuocSearch = new TongHopDuTruTuaTaiKhoaDuocSearch();
    this.duTruMuaDuocPhamKhoDuoc = new DuTruMuaDuocPhamKhoDuoc();
    if (this.route.snapshot.queryParams.holdQuery != null) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
  }
  if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc') != null
  ) {
      this.additionalSearchString = LocalStorageHelper.getItem(
          'additionalSearchStringTongHopDuTruMuaTaiKhoDuoc'
      );
      this.tongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(this.additionalSearchString);
      if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet != null)
            {
                if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null)
                {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
                }
                if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate == null)
                {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                }
                if(this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate == null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null)
                {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
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
      LocalStorageHelper.setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc', null);
      this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
      if(this.searchString != null )
      {
        this.gridChild.searchString = this.searchString;
      }
      this.gridChild.search();
  }
  // TemplateGroupHeader: this.nhomDichVuTemplate
    this.gridColumns = [
      { Field: "TrangThai", Title: "", Width: 80,Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
      { Field: 'KhoaKhoa', Title: 'Khoa/Kho', MinWidth: 120, Sortable: true },
      { Field: 'KyDuTru', Title: 'Kỳ Dự trù', Width: 180, Sortable: true },
      { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
      { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true ,Template: this.ngayYeuCauTemplate},
      { Field: 'NgayKhoaDuocDuyet', Title: 'Ngày K.Dược duyệt', Width: 150, Sortable: true, Template: this.ngayKhoaDuocDuyetTemplate},
      // { Field: 'NgayGiamDocDuyet', Title: 'Ngày giám đốc duyệt', minWidth: 200, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
      { Field: '', Title: '', HideFilter: true, Width: 200, Template: this.actionTemplate }
  ];
  this.gridChildColumns = [
    { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
    { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true,MinWidth: 120, Sortable: false },
    { Field: 'HoatChat', Title: 'Hoạt chất',ShowTooltip: true, Width: 80, Sortable: false },
    { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false},
    { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
    { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
    { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
    { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
    { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false},
    // { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
    { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
    { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
    { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false ,Template:this.tongTonKhoTemplate},
    { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false ,Template:this.hDChuaNhanTemplate},
    { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
    { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', minWidth: 100, Sortable: false },
];
this.khoGridChildColumns = [
  { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
  { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
  { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true,MinWidth: 120, Sortable: false },
  { Field: 'HoatChat', Title: 'Hoạt chất',ShowTooltip: true, Width: 80, Sortable: false },
  { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false},
  { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
  { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
  { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
  { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
  { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false},
  { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
  { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
  { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
  { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
  { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false ,Template:this.tongTonKhoTemplate},
  { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false ,Template:this.hDChuaNhanTemplate},
  { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false }
];
this.gridChildChildColumns =[
  { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
    { Field: 'Nhom', Title: 'Nhóm', Width: 200, Sortable: false },
    { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
    //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 100, Sortable: true },
    { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false},
    { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
     { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
];

  }
  TooltipCustom(duTruDetail: any) {
    this.khos = [...duTruDetail.TongTonList];
    this.hdts = [...duTruDetail.HopDongChuahapList];
}
  theFirstValueFormat(str : string){
        let strGroup = str.split('-');
        if(strGroup.length != 0)
        {
            return strGroup[0];
        }
  }
  theFirstValueFormatChuKy(str : string){
    let strGroup = str.split('-');
    if(strGroup.length != 0)
    {
        return strGroup[1]+'-'+strGroup[2];
    }
}
theFirstValueKyDuTruMuaDuocPhamVatTuId(str : string){
  let strGroup = str.split('-');
  if(strGroup.length != 0)
  {
      return strGroup[3];
  }
}
xemChiTietDuTruMuaDuocPhamTaiKhoDuoc(id: number, dataItem: number,TrangThaiDuTru:number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      if (EnumLoaiKhoDuTru.Khole  == dataItem ) {
          this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/duyet/' + id + '/'+ dataItem + '/'+ TrangThaiDuTru +'?holdQuery=true');
      } else {
          this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/duyet/' + id + '/'+ dataItem + '/'+ TrangThaiDuTru +'?holdQuery=true');
      }
  } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  }
  }
  CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
    this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc?holdQuery=true');
    if (dangChoDuyet) {
        this.tongHopDuTruTuaTaiKhoaDuocSearch.ChoDuyet = $event;
    } else if (tuChoiDuyet) {
        this.tongHopDuTruTuaTaiKhoaDuocSearch.ChoGoi = $event;
    }
    this.Timkiem();
}

onKey(event: any) {
  if (event.keyCode === 13) {
      this.Timkiem();
  }
}
Timkiem() {
  let QueryString = null;
  this.gridChild._additionalSearchString = null;
  if(this.searchString !== "")
  {
    QueryString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
  }
  this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
  const tongHopDuTruTuaTaiKhoaDuocSearchClone: TongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));

  if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate != null) {
      const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate);
      tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
      , startDate.getDate(), 0,0));
  }

  if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate != null) {
      const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate);
      tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
      , endDate.getDate(), 0,0));
  }

  if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate != null) {
      const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate);
      tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate = new Date(startDate);
  }

  if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate != null) {
      const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate);
      tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate = new Date(endDate);
  }
  if(this.searchString != undefined && this.searchString != "" &&  this.searchString != null){
      tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString =this.searchString;
  }
  else{
    tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString= '';
  }
  this.query = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);

  const queryForHole = JSON.parse(JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone));
  if (queryForHole.RangeNhap != null) {
      if (queryForHole.RangeNhap.startDate != null) {
          queryForHole.RangeNhap.startDate = new Date(queryForHole.RangeNhap.startDate);
      }
      if (queryForHole.RangeNhap.endDate != null) {
          queryForHole.RangeNhap.endDate = new Date(queryForHole.RangeNhap.endDate);
      }
  }
  if (queryForHole.RangeDuyet != null) {
      if (queryForHole.RangeDuyet.startDate != null) {
          queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
      }
      if (queryForHole.RangeDuyet.endDate != null) {
          queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
      }
  }

  LocalStorageHelper.setItem(
      'additionalSearchStringTongHopDuTruMuaTaiKhoDuoc',
      JSON.stringify(queryForHole)
  );
  this.gridChild._additionalSearchString = this.query;
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
TuChoi(Id: any,KhoId: number){
    var self = this;
    self.duTruMuaDuocPhamKhoDuoc.Id = Id;
    if(KhoId === 5)
    {
      if(self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null)
      {
          self.listItemDuTruMuaDuocPhamChTiet =[];
          self.apiService.post<any>("YeuCauMuaDuocPham/GetListDuTruMuaKhoaChiTiet?muaDuTruDuocPhamId="+Id)
            .subscribe((resultData) => {
              resultData.forEach(element => {
                  self.listItemDuTruMuaDuocPhamChTiet.push(element)
              });
              if(resultData != undefined || resultData != undefined)
              {
                  self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                  self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = true;
                  self.dialog.open(TuChoiDuyetPopupComponent, {
                      disableClose: false,
                      width: '400px',
                      data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                    }).afterClosed().subscribe(result => {
                      if (result != null) {
                      self.duTruMuaDuocPhamKhoDuoc.LyDoTruongKhoaTuChoi = result;
                      self.apiService.post("YeuCauMuaDuocPham/TuChoi",self.duTruMuaDuocPhamKhoDuoc)
                        .subscribe((resultData) => {
                          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
                          this.gridChild.search();
                        },
                          (err: ApiError) => {
                            if (err.Message != "Validation Failed") {
                              this.notificationService.showError(err.Message);
                            }
                          });
              
                      }});
              }
            },
              (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
      }
    }
    if(KhoId !==5)
    {
      if(self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null)
      {
          self.listItemDuTruMuaDuocPhamChTiet =[];
          self.apiService.post<any>("YeuCauMuaDuocPham/GetListDuTruMuaChiTiet?muaDuTruDuocPhamId="+Id)
            .subscribe((resultData) => {
              resultData.forEach(element => {
                  self.listItemDuTruMuaDuocPhamChTiet.push(element)
              });
              if(resultData != undefined || resultData != undefined)
              {
                  self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                  self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = false;
                  self.dialog.open(TuChoiDuyetPopupComponent, {
                      disableClose: false,
                      width: '400px',
                      data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                    }).afterClosed().subscribe(result => {
                      if (result != null) {
                      self.duTruMuaDuocPhamKhoDuoc.LyDoTruongKhoaTuChoi = result;
                      self.apiService.post("YeuCauMuaDuocPham/TuChoi",self.duTruMuaDuocPhamKhoDuoc)
                        .subscribe((resultData) => {
                          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
                          this.gridChild.search();
                        },
                          (err: ApiError) => {
                            if (err.Message != "Validation Failed") {
                              this.notificationService.showError(err.Message);
                            }
                          });
              
                      }});
              }
            },
              (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
              });
      }
    }
}
duyet(Id:any,khoId: number){
    var self = this;
    self.duTruMuaDuocPhamKhoDuoc.Id = Id;
    if(self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null)
    {
        self.listItemDuTruMuaDuocPhamChTiet =[];
        if(khoId === 5)
        {
          self.apiService.post<any>("YeuCauMuaDuocPham/GetListDuTruMuaKhoaChiTiet?muaDuTruDuocPhamId="+Id)
          .subscribe((resultData) => {
            resultData.forEach(element => {
                self.listItemDuTruMuaDuocPhamChTiet.push(element)
            });
            if(resultData != undefined || resultData != undefined)
            {
                self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = true;
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
                  }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                    self.apiService.post("YeuCauMuaDuocPham/Duyet",self.duTruMuaDuocPhamKhoDuoc)
                      .subscribe((resultData) => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
                        this.gridChild.search();
                      },
                        (err: ApiError) => {
                          if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                          }
                        });
            
                    }});
            }
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
        if(khoId !== 5)
        {
          self.apiService.post<any>("YeuCauMuaDuocPham/GetListDuTruMuaChiTiet?muaDuTruDuocPhamId="+Id)
          .subscribe((resultData) => {
            resultData.forEach(element => {
                self.listItemDuTruMuaDuocPhamChTiet.push(element)
            });
            if(resultData != undefined || resultData != undefined)
            {
                self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = false;
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
                  }).afterClosed().subscribe(result => {
                    if (result === 'Yes') {
                    self.apiService.post("YeuCauMuaDuocPham/Duyet",self.duTruMuaDuocPhamKhoDuoc)
                      .subscribe((resultData) => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
                        this.gridChild.search();
                      },
                        (err: ApiError) => {
                          if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                          }
                        });
            
                    }});
            }
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
    }
 
}
HuyDuyet(dataItem: any,khoId: number){  
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        self.apiService.post("YeuCauMuaDuocPham/HuyDuyet",{id:dataItem.Id,loaiKho:dataItem.KhoId})
        .subscribe((resultData) => {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy duyệt"]));
          this.gridChild.search();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          });

      }});    
 
}
GoiGiamDocDuyet(value: any){
  var self = this;
  console.log("value",value);
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/gui/" + value]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  // var self = this;
  // self.dialog.open(ConfirmComponent, {
  //     disableClose: false,
  //     width: '400px',
  //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi duyệt dự trù này không?" }
  //   }).afterClosed().subscribe(result => {
  //     if (result === 'Yes') {
  //     self.apiService.post("YeuCauMuaDuocPham/GoiGiamDoc",self.duTruMuaDuocPhamKhoDuoc)
  //       .subscribe((resultData) => {
  //         this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt thành công "]));
  //         this.gridChild.search();
  //       },
  //         (err: ApiError) => {
  //           if (err.Message != "Validation Failed") {
  //             this.notificationService.showError(err.Message);
  //           }
  //         });

  //     }});
}

}
