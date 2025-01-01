import { Component, OnInit ,EventEmitter,Output,ViewChild, TemplateRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icInfo from '@iconify/icons-ic/twotone-info';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { DuTruMuaTaiKhoaDuocGoi, TrangThaiDuyet } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-giam-doc-du-tru-mua-ksnk-shared',
    templateUrl: './goi-giam-doc-du-tru-mua-ksnk-shared.component.html',
    styleUrls: ['./goi-giam-doc-du-tru-mua-ksnk-shared.component.scss']
})
export class GoiGiamDocDuTruMuaKSNKSharedComponent implements OnInit {
    thongTinDuTruMuaVatTuTaiKhoaDuocGoi :DuTruMuaTaiKhoaDuocGoi;
    documentType: DocumentType;
    gridColumns: any[] = [];
    gridChildColumns: any[] = [];
    gridChildChildColumns: any[] = [];
    validationErrors : any;
    trangThaiDuyet: boolean = null;
    icInfo = icInfo;
    gridDataSource: any = {};   
    gridChildDataSource: any = {}; 
    data : any[] =[];
    loaiKhoThuoc : boolean = true;
    KhoaId : number = 0;
    KhoId : number = 0;
   
   isDisableTrangThai : boolean = false;
   show : boolean = true;
    IdTrangThai : number = 0;
   @ViewChild('grid', { read: GridComponent, static: false }) gridChild: GridComponent;
   @ViewChild('tongTonKhoTemplate', { static: true }) tongTonKhoTemplate: TemplateRef<any>;
   @ViewChild('hDChuaNhanTemplate', { static: true }) hDChuaNhanTemplate: TemplateRef<any>;
   @ViewChild('tongTonKhoTemplateDuyet', { static: true }) tongTonKhoTemplateDuyet: TemplateRef<any>;
   @ViewChild('hDChuaNhanTemplateDuyet', { static: true }) hDChuaNhanTemplateDuyet: TemplateRef<any>;
   @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
   @ViewChild('loaiTemplate', { static: true }) loaiTemplate: TemplateRef<any>;
   @ViewChild('loaiNhomGroupHeaderTemplate', { static: true }) loaiNhomGroupHeaderTemplate: TemplateRef<any>;
   @ViewChild('sLDuTruKhoTDuocDuyet', { static: true }) sLDuTruKhoTDuocDuyet: TemplateRef<any>;
   @ViewChild('SLDuTruKhoDuocDuyet', { static: true }) SLDuTruKhoDuocDuyet: TemplateRef<any>;
   @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
   @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyet> = new EventEmitter<TrangThaiDuyet>();
   @Output() tinhTrangView = new EventEmitter<number>();
   @Output() dataItem: EventEmitter<any> = new EventEmitter<any>();
    constructor(
      private authService: AuthService,
      private dialog: MatDialog,
      private notificationService: NotificationService,
      private apiService: ApiService,
      private router: Router,
      private route: ActivatedRoute
  ) { }
  groups: GroupDescriptor[] = [{ field: 'Loai' }];
  groupNhoms: GroupDescriptor[] = [{
    field: 'Khoa', aggregates: [
        { field: 'SLDuTru', aggregate: 'sum' },
        { field: 'SLDuKienTrongKy', aggregate: 'sum' }
    ]
  }];
  @ViewChild('soLuongDuTruHeaderTemplate', { static: true }) soLuongDuTruHeaderTemplate: TemplateRef<any>;
  @ViewChild('soLuongDuKienHeaderTemplate', { static: true }) soLuongDuKienHeaderTemplate: TemplateRef<any>;
    ngOnInit() {
      this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = new DuTruMuaTaiKhoaDuocGoi();
      const id : number = this.route.snapshot.params.id;
      const tinhTrang : number = this.route.snapshot.params.tinhTrang;
      if(tinhTrang != undefined && tinhTrang != null )
      {
        // view
        this.tinhTrangView.emit(tinhTrang);
        this.getByIdView(id,tinhTrang);
      }
      
      if(id != undefined || id != null && tinhTrang == undefined)
      {
        this.getById(id);
      }
      this.gridColumns = [
        { Field: 'STT', Title: '#', Width: 40, Sortable: false,Template: this.sttTemplate},
        { Field: 'Loai', Title: 'Loại', Width: 100,ShowTooltip: true, Sortable: false ,Hidden: true,TemplateGroupHeader:this.loaiNhomGroupHeaderTemplate},
        { Field: 'TenVatTu', Title: 'Tên',  ShowTooltip: true,MinWidth: 120, Sortable: false },
        { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false},
        { Field: 'HoatChat', Title: 'Quy cách', Width: 60,ShowTooltip: true, Sortable: false },
        { Field: 'NhaSX', Title: 'Hãng SX', Width: 50, Sortable: false },
        { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false},
        { Field: 'SLDuTru', Title: 'SL dự trù', Width: 150, Sortable: false },
        { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', minWidth: 30, Sortable: false },
        { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 150, Sortable: false },
        { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 150, Sortable: false  },
    ];
  this.gridChildChildColumns = [
    { Field: "Khoa", Title: "Khoa", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
    { Field: 'STT', Title: '#', Width: 30, Sortable: false, Template: this.sttTemplate },
    { Field: 'Kho', Title: 'Kho', minWidth: 100, Sortable: false },
    { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false ,TemplateGroupFooter: this.soLuongDuTruHeaderTemplate},
    { Field: 'SLDuKienTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false,TemplateGroupFooter: this.soLuongDuKienHeaderTemplate },
  ];
    }
    getById(id)
    {
      this.isDisableTrangThai = true;
      this.apiService.post<DuTruMuaTaiKhoaDuocGoi>("YeuCauMuaKSNK/GetDataGoiDuyetDuTruMuaKSNK?idKyDuTru=" + id)
          .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
              this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = resultData;
           
              this.gridDataSource = {
                data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
              };
              this.setDataGridView();
              this.dataItem.emit(this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi);
            }
          });
    
    }
    getDataSourceChild(parentItem:any){    
      return {
        data: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild,
        total: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild.length
      };
    }
    getByIdView(id:number,tinhTrang :number)
    {
      this.isDisableTrangThai = true;
      this.apiService.post<DuTruMuaTaiKhoaDuocGoi>("YeuCauMuaKSNK/GetDataGoiDuyetDuTruMuaKSNKView?idKyDuTru=" + id + "&tinhTrang=" + tinhTrang)
          .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
              this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi = resultData;
              this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi.LyDoTuChoi = resultData.LyDoTuChoi;
              this.gridDataSource = {
                data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
              };
  
              this.setDataGridView();
              this.dataItem.emit(this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi);
            }
          });
    
    }
    setDataGridView() {
      this.gridChild.gridDataSource = this.gridDataSource;
    
      if (this.gridChild !== undefined)
        this.gridChild.setDataSource();
    }
    getSharedData() {
      this.thongTinDuTruMuaVatTuTaiKhoaDuocGoi;
    }
}

