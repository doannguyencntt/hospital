import { Component, OnInit, ViewChild,  ChangeDetectorRef, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";

import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiService } from 'src/app/core/services/api.service';
import { DuocPhamCanLinhTrucTiepSearch } from '../yeu-cau-linh-thuoc.model';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { GroupDescriptor } from '@progress/kendo-data-query';
import { CommonService } from "src/app/core/utilities/common.helper";
@Component({
  selector: 'app-danh-sach-duoc-pham-can-linh-truc-tiep',
  templateUrl: './danh-sach-duoc-pham-can-linh-truc-tiep.component.html',
  styleUrls: ['./danh-sach-duoc-pham-can-linh-truc-tiep.component.scss']
})
export class DanhSachDuocPhamCanLinhTrucTiepComponent implements OnInit {

  dataSourceAfterSearch:any=null;
  danhSachLinhTuKho:any[]=[];
  documentType: DocumentType;
  searchString: string;
  gridColumns: any[] = [];
  gridChildLevel1Columns: any[] = [];
  gridChildLevel2Columns: any[] = [];
  icFileExcel = icFileExcel;
  duocPhamCanLinhTrucTiepSearch:DuocPhamCanLinhTrucTiepSearch;
  additionalSearchString:string="";
  urlGetDataGrid:string="YeuCauLinhDuocPham/GetDanhSachDuocPhamCanLinhTrucTiepForGrid";
  urlGetDataGridChildLevel1:string="YeuCauLinhDuocPham/GetDanhSachChiTietDuocPhamCanLinhTrucTiepForGrid";
  urlGetDataGridChildLevel2:string="YeuCauLinhDuocPham/GetDanhSachChiTietYeuCauTheoDuocPhamCanLinhTrucTiepForGrid";
  urlGetTotalPageGridChildLevel1:string="YeuCauLinhDuocPham/GetTotalPageDanhSachChiTietDuocPhamCanLinhTrucTiepForGrid";
  urlGetTotalPageGridChildLevel2:string="YeuCauLinhDuocPham/GetTotalPageDanhSachChiTietYeuCauTheoDuocPhamCanLinhTrucTiepForGrid";
  groups: GroupDescriptor[] = [{ field: 'KhoLinh' }];
  groupChilds: GroupDescriptor[] = [{ field: 'MaYeuCauTiepNhan'}];
  groupChildChilds: GroupDescriptor[] = [{ field: 'Nhom'}];
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
    
    this.documentType = DocumentType.TaoYeuCauLinhTrucTiepDuocPham;
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
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180, ShowTooltip: true },
      { Field: "DuongDung", Title: "ĐD", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true,Hidden: true,  TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 150 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100,Template: this.slTonTemplate},
      { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 ,Template: this.slYCTonTemplate},
    ];
    this.gridChildLevel2Columns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120,Sortable: true },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      // { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      // { Field: "BacSiKeToa", Title: "BS kê toa", Width: 150 },
      // { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
      { Field: "SoLuong", Title: "SL", Width: 80 ,Template: this.sLTemplate},
    ];
    this.duocPhamCanLinhTrucTiepSearch=new DuocPhamCanLinhTrucTiepSearch();
    this.additionalSearchString="{'KhoLinhId':"+(this.duocPhamCanLinhTrucTiepSearch.KhoLinhId!=undefined?this.duocPhamCanLinhTrucTiepSearch.KhoLinhId:null)+",'PhongLinhVeId':"+(this.duocPhamCanLinhTrucTiepSearch.PhongLinhVeId!=undefined?this.duocPhamCanLinhTrucTiepSearch.PhongLinhVeId:null)+"}";
  }
  search(event:any){
    // this.additionalSearchString="{'KhoLinhId':"+(this.duocPhamCanLinhTrucTiepSearch.KhoLinhId!=undefined?this.duocPhamCanLinhTrucTiepSearch.KhoLinhId:null)+",'PhongLinhVeId':"+(this.duocPhamCanLinhTrucTiepSearch.PhongLinhVeId!=undefined?this.duocPhamCanLinhTrucTiepSearch.PhongLinhVeId:null)+"}";
    // this.grid._additionalSearchString=this.additionalSearchString;
    // this.grid.setDataSource();
    if(event==undefined || event==null)
    {      
      this.grid.gridDataSource={
        data:this.dataSourceAfterSearch.Data,
        total:this.dataSourceAfterSearch.TotalRowCount
      };
      this.grid.setDataSource();
      return;
    }
    var dataFilter=[];
    this.dataSourceAfterSearch.Data.forEach(item => {
      if(item!=null )
      {
        if(event==item.KhoLinhId)
          {
            dataFilter.push(item);
          }
      }
    });
    this.grid.gridDataSource={
      data:dataFilter,
      total:dataFilter.length
    }
    this.grid.setDataSource();
  }
  extOnDataBound(dataSource:any){
    if(dataSource!=null && dataSource.Data!=null && dataSource.Data.length>0 && this.dataSourceAfterSearch==null){
      this.dataSourceAfterSearch={...dataSource};
      dataSource.Data.forEach(element => {
        var checkExitLinhTuKho=CommonService.findObjectByKey(this.danhSachLinhTuKho,"KeyId",element.KhoLinhId);
        if(checkExitLinhTuKho==null)
        {
          this.danhSachLinhTuKho.push({KeyId:element.KhoLinhId, DisplayName:element.KhoLinh});
        }
      });
    }
  }
  taoPhieuLinh(tenKhoLinh:string){
    var item=this.grid._gridDataSource.data.filter(o=>o.value==tenKhoLinh);
    if(item!=null && item[0].items!=null)
    {
      this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-truc-tiep'], { queryParams: { KhoLinhId: item[0].items[0].KhoLinhId }});
    }
    
  }
}
