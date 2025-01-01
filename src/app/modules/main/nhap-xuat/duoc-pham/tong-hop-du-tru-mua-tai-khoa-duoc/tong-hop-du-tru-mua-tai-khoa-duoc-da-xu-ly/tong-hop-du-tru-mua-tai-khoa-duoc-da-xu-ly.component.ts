import { Component, OnInit, ViewChild, TemplateRef,Input ,Output,EventEmitter} from '@angular/core';
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
import icInfo from '@iconify/icons-ic/baseline-info';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { TongHopDuTruMuaTaiKhoaDuoc, TongHopDuTruTuaTaiKhoaDuocSearch, TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy } from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
import { Location } from '@angular/common';
import { EnumLoaiKhoDuTru } from '../enums-loai-kho-du-tru';
@Component({
    selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly',
    templateUrl: './tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.scss']
})
export class TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent implements OnInit {

    tongHopDuTruTuaTaiKhoaDuoc: TongHopDuTruMuaTaiKhoaDuoc = new TongHopDuTruMuaTaiKhoaDuoc();
    tongHopDuTruTuaTaiKhoaDuocSearch: TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy;
    icMoreHoriz = icMoreHoriz;
    icActivated = icicActivated;
    icicUnActivated = icicUnActivated;
    icicdone = icicdone;
    icclose = icClose;
    icEdit = icEdit;
    icSearch = icSearch;
    icAdd = icAdd;
    icInfo = icInfo;
    icFilterList = icFilterList;
    icFileExcel = icFileExcel;

    documentType: DocumentType;
    gridColumns: any[] = [];
    khos: any[] = [];
    hdts: any[] = [];
    gridChildColumns: any[] = [];
    gridChildChildColumns: any[] = [];
    gridChildChildChildColumns: any[] = [];
    gridChildChildChildKhoColumns : any[]= [];
    gridChildChildChildKhoaColumns : any[]= [];
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
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
    @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
    @ViewChild('soPhieuDuTruKhoIdTemplate', { static: true }) soPhieuDuTruKhoIdTemplate: TemplateRef<any>;
    @ViewChild('ngayGiamDocDuyetTemplate', { static: true }) ngayGiamDocDuyetTemplate: TemplateRef<any>;
    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

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
    baseRoute: string = "/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc";
    gridDataSource: any = {};
    data: any[] = [];
    theFirstSearch: any;
    @Input() sort: SortDescriptor[] = [
        {
          field: "Nhom",
          dir: "desc",
        },
      ];
    groupsChildChild: GroupDescriptor[] = [{ field: 'Loai' }];
    holdQuery: any = null;
    query: string = null;
    additionalSearchString: string = null;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router,
        private route: ActivatedRoute,
        private location:Location,
    ) { }
    @Output() indextapStringDaXuLy = new EventEmitter<any>();
    ngOnInit() {
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
        this.tongHopDuTruTuaTaiKhoaDuocSearch = new TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy();
        this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString = null;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery != null &&
            LocalStorageHelper.getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy') != null
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy'
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
            // this.gridChild.search();
        } else {
            LocalStorageHelper.setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy', null);
            this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
           
        }
        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'DuTruTheo', Title: 'KỲ Dự trù', Width: 180, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'TinhTrang', Title: 'Tình trạng', Width: 150, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: 'NgayGiamDocDuyet', Title: 'Ngày g.đốc duyệt', Width: 150, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', MinWidth: 120, Sortable: true },
        ];
        this.gridChildColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 200, Sortable: false ,Template: this.soPhieuDuTruKhoIdTemplate},
            { Field: 'KhoaKhoaString', Title: 'Khoa/Kho', Width: 120, Sortable: false },
            //{ Field: 'KyDuTruTheo', Title: 'KỲ Dự trù', Width: 200, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 200, Sortable: false },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 200, Sortable: false , Template: this.NYCTemplate},
            { Field: 'NgayKhoaDuocDuyet', Title: 'Ngày K.Dược duyệt', Width: 200, Sortable: false ,Template: this.NKDDTemplate},
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
            { Field: 'TenDuocPham', Title: 'Tên',ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true,Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false},
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'SLDuTruTKhoDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKhoDuocDuyet', Title: ' K.dược duyệt', minWidth: 100, Sortable: false },
        ];
        this.gridChildChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'LoaiDuTru', Title: 'Nhóm', Width: 150, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 150, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienTrongKy', Title: 'SL dự kiến trong kỳ', minWidth: 100, Sortable: true },
        ];
        this.gridChildChildChildKhoColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
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
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn ', Width: 100, Sortable: false ,Template:this.tongTonKhoTemplate},
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false ,Template:this.hDChuaNhanTemplate},
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildChildKhoaColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true,MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true,Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false},
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false},
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false},
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false},
            // { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false ,Template:this.tongTonKhoTemplate},
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false ,Template:this.hDChuaNhanTemplate},
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildColumns =[
          { Field: 'STT', Title: '#', Width: 50, Sortable: false,Template:this.sttTemplate},
            { Field: 'Nhom', Title: 'Nhóm', Width: 200, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
            //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false},
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL dự kiến trong kỳ', Width: 100, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false }
        ];
    }
    TooltipCustom(duTruDetail: any) {
        this.khos = [...duTruDetail.TongTonList];
        this.hdts = [...duTruDetail.HopDongChuahapList];
    }
    xemChiTiet(id: number,TrangThaiDuTru:any) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/gui/' + id + '/' + TrangThaiDuTru.TinhTrang  + '?holdQuery=true');
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }

      xemChiTietDuTru(IdKhoaDuTruDuocPhamTheoKhoa:number, dataItem:any)
      {
          
          if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

              this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/xem-chi-tiet-tu-da-xu-ly/' + IdKhoaDuTruDuocPhamTheoKhoa + '/'+dataItem.LoaiKho + '?holdQuery=true');
          } else {
              this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
      }
      CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
        if (dangChoDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.DaGoiVaDangChoDuyet = $event;
        } else if (tuChoiDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.TuChoiDuyet = $event;
        }
        else if (daDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.DaDuyet = $event;
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
        const tongHopDuTruTuaTaiKhoaDuocSearchClone: TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));
      
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate != null) {
            const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
            , startDate.getDate(), 0,0));
        }
      
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate != null) {
            const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
            , endDate.getDate(), 0, 0));
        }
        if(this.searchString != undefined && this.searchString != "" &&  this.searchString != null){
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString =this.searchString;
        }
        else{
          tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString= '';
        }
        this.query = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
      
        const queryForHole = JSON.parse(JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone));
        if (queryForHole.RangeDuyet != null) {
            if (queryForHole.RangeDuyet.startDate != null) {
                queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
            }
            if (queryForHole.RangeDuyet.endDate != null) {
                queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
            }
        }
      
        LocalStorageHelper.setItem(
            'additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy',
            JSON.stringify(queryForHole)
        );
      if(this.gridChild)
      {
        this.gridChild._additionalSearchString = this.query;
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
      }
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
