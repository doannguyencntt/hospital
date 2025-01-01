import { Component, OnInit, ViewChild,  ChangeDetectorRef, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";

import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiService } from 'src/app/core/services/api.service';
import { VatTuCanLinhTrucTiepSearch } from '../yeu-cau-linh-vat-tu.model';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { GroupDescriptor } from '@progress/kendo-data-query';
@Component({
  selector: 'app-danh-sach-vat-tu-can-linh-truc-tiep',
  templateUrl: './danh-sach-vat-tu-can-linh-truc-tiep.component.html',
  styleUrls: ['./danh-sach-vat-tu-can-linh-truc-tiep.component.scss']
})
export class DanhSachVatTuCanLinhTrucTiepComponent implements OnInit {

  documentType: DocumentType;
  searchString: string;
  gridColumns: any[] = [];
  gridChildLevel1Columns: any[] = [];
  gridChildLevel2Columns: any[] = [];
  icFileExcel = icFileExcel;
  vatTuCanLinhTrucTiepSearch:VatTuCanLinhTrucTiepSearch;
  additionalSearchString:string="";
  urlGetDataGrid:string="YeuCauLinhVatTu/GetDanhSachVatTuCanLinhTrucTiepForGrid";
  urlGetDataGridChildLevel1:string="YeuCauLinhVatTu/GetDanhSachChiTietVatTuCanLinhTrucTiepForGrid";
  urlGetDataGridChildLevel2:string="YeuCauLinhVatTu/GetDanhSachChiTietYeuCauTheoVatTuCanLinhTrucTiepForGrid";
  urlGetTotalPageGridChildLevel1:string="YeuCauLinhVatTu/GetTotalPageDanhSachChiTietVatTuCanLinhTrucTiepForGrid";
  urlGetTotalPageGridChildLevel2:string="YeuCauLinhVatTu/GetTotalPageDanhSachChiTietYeuCauTheoVatTuCanLinhTrucTiepForGrid";
  groups: GroupDescriptor[] = [{ field: 'KhoLinh' }];
  groupChilds: GroupDescriptor[] = [{ field: 'MaYeuCauTiepNhan' }];
  groupChildChilds: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('khoLinhGroupHeaderTemplate', { static: true }) khoLinhGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('slTonTemplate', { static: true }) slTonTemplate: TemplateRef<any>;
  @ViewChild('slYCTonTemplate', { static: true }) slYCTonTemplate: TemplateRef<any>;
  @ViewChild('sLTemplate', { static: true }) sLTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTonTemplate', { static: true }) tinhTrangTonTemplate: TemplateRef<any>;
  @ViewChild('grid', { static: true }) grid: GridComponent;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepVatTu;
    this.gridColumns = [
      { Field: "KhoLinh", Title: "", Width: 120,Sortable: true,Hidden:true,TemplateGroupHeader:this.khoLinhGroupHeaderTemplate },
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120,Sortable: true },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SoLuong", Title: "SL", Width: 80 ,Template: this.sLTemplate},
      { Field: "TinhTrangTon", Title: "TÌnh trạng tồn kho", Width: 180 ,Template:this.tinhTrangTonTemplate},
    ];
    this.gridChildLevel1Columns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 150 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100,Template:this.slTonTemplate},
      { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 ,Template:this.slYCTonTemplate},
    ];
    this.gridChildLevel2Columns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120,Sortable: true ,Hidden: false, TemplateGroupHeader: this.nhomGroupHeaderTemplate},
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SoLuong", Title: "SL", Width: 80 ,Template:this.sLTemplate},
    ];
    this.vatTuCanLinhTrucTiepSearch=new VatTuCanLinhTrucTiepSearch();
    this.additionalSearchString="{'KhoLinhId':"+(this.vatTuCanLinhTrucTiepSearch.KhoLinhId!=undefined?this.vatTuCanLinhTrucTiepSearch.KhoLinhId:null)+",'PhongLinhVeId':"+(this.vatTuCanLinhTrucTiepSearch.PhongLinhVeId!=undefined?this.vatTuCanLinhTrucTiepSearch.PhongLinhVeId:null)+"}";
  }
  search($event:any){
    this.additionalSearchString="{'KhoLinhId':"+(this.vatTuCanLinhTrucTiepSearch.KhoLinhId!=undefined?this.vatTuCanLinhTrucTiepSearch.KhoLinhId:null)+",'PhongLinhVeId':"+(this.vatTuCanLinhTrucTiepSearch.PhongLinhVeId!=undefined?this.vatTuCanLinhTrucTiepSearch.PhongLinhVeId:null)+"}";
    this.grid._additionalSearchString=this.additionalSearchString;
    this.grid.setDataSource();
  }
  extOnDataBound(dataSource:any){
  }
  taoPhieuLinh(tenKhoLinh:string){
    var item=this.grid._gridDataSource.data.filter(o=>o.value==tenKhoLinh);
    if(item!=null && item[0].items!=null)
    {
      this.router.navigate(['/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/tao-phieu-linh-vat-tu-truc-tiep'], { queryParams: { KhoLinhId: item[0].items[0].KhoLinhId }});
    }
    
  }
}
