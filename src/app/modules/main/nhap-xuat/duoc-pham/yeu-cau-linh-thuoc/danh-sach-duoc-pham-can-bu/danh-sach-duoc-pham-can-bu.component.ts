import { Component, OnInit, ViewChild, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";

import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiService } from 'src/app/core/services/api.service';
import { DuocPhamCanBuSearch } from '../yeu-cau-linh-thuoc.model';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-danh-sach-duoc-pham-can-bu',
  templateUrl: './danh-sach-duoc-pham-can-bu.component.html',
  styleUrls: ['./danh-sach-duoc-pham-can-bu.component.scss']
})
export class DanhSachDuocPhamCanBuComponent implements OnInit {

  dataSourceAfterSearch:any=null;
  danhSachLinhTuKho:any[]=[];
  danhSachLinhVekho:any[]=[];
  documentType: DocumentType;
  searchString: string;
  popupLoadingData: any = null;
  gridColumns: any[] = [];
  gridChildLevel1Columns: any[] = [];
  gridChildLevel2Columns: any[] = [];
  icFileExcel = icFileExcel;
  validationErrors: any = null;
  duocPhamCanBuSearch: DuocPhamCanBuSearch;
  additionalSearchString: string = "";
  urlGetDataGrid: string = "YeuCauLinhDuocPham/GetDanhSachDuocPhamCanBuForGrid";
  urlGetDataGridChildLevel1: string = "YeuCauLinhDuocPham/GetDanhSachChiTietDuocPhamCanBuForGrid";
  urlGetDataGridChildLevel2: string = "YeuCauLinhDuocPham/GetDanhSachChiTietYeuCauTheoDuocPhamCanBuForGrid";
  urlGetTotalPageGridChildLevel1: string = "YeuCauLinhDuocPham/GetTotalPageDanhSachChiTietDuocPhamCanBuForGrid";
  urlGetTotalPageGridChildLevel2: string = "YeuCauLinhDuocPham/GetTotalPageDanhSachChiTietYeuCauTheoDuocPhamCanBuForGrid";
  groups: GroupDescriptor[] = [{ field: 'KhoLinh' }];
  groupChilds: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('actionChildTemplate', { static: true }) actionChildTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: false }) gridChildLevel1: GridComponent;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
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
    this.documentType = DocumentType.TaoYeuCauLinhBuDuocPham;
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.STTTemplate },
      { Field: "KhoLinh", Title: "Kho lĩnh", Width: 200, Hidden: true },
      { Field: "KhoBu", Title: "Kho bù", MinWidth: 120 },
      { Field: "Action", Title: "", Width: 120, Template: this.actionTemplate }
    ];
    this.gridChildLevel1Columns = [
      { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SoLuongDaBu", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 100 },
      { Field: "Action", Title: "", Width: 100, Template: this.actionChildTemplate },

    ];
    this.gridChildLevel2Columns = [
      { Field: "STT", Title: "#", Width: 25 },
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BSKeToa", Title: "BS kê toa", Width: 150 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 170 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 170 },
      { Field: "SLDaBu", Title: "SL đã bù", Width: 100 },
      { Field: "SL", Title: "SL cần bù", Width: 160 },
    ];
    this.duocPhamCanBuSearch = new DuocPhamCanBuSearch();
    this.additionalSearchString = "{'KhoLinhId':" + (this.duocPhamCanBuSearch.KhoLinhId != undefined ? this.duocPhamCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.duocPhamCanBuSearch.KhoBuId != undefined ? this.duocPhamCanBuSearch.KhoBuId : null) + "}";
  }
  search(event: any,type:number) {
    // this.additionalSearchString = "{'KhoLinhId':" + (this.duocPhamCanBuSearch.KhoLinhId != undefined ? this.duocPhamCanBuSearch.KhoLinhId : null) + ",'KhoBuId':" + (this.duocPhamCanBuSearch.KhoBuId != undefined ? this.duocPhamCanBuSearch.KhoBuId : null) + "}";
    // this.grid._additionalSearchString = this.additionalSearchString;
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
        if((type==1 && event==item.KhoLinhId) ||
          (type==2 && event==item.KhoBuId))
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
  extOnDataBound(dataSource: any) {
    if(dataSource!=null && dataSource.Data!=null && dataSource.Data.length>0 && this.dataSourceAfterSearch==null){   
        this.dataSourceAfterSearch={...dataSource};
        dataSource.Data.forEach(element => {
          var checkExitLinhTuKho=CommonService.findObjectByKey(this.danhSachLinhTuKho,"KeyId",element.KhoLinhId);
          if(checkExitLinhTuKho==null)
          {
            this.danhSachLinhTuKho.push({KeyId:element.KhoLinhId, DisplayName:element.KhoLinh});
          }
          var checkExitLinhVekho=CommonService.findObjectByKey(this.danhSachLinhVekho,"KeyId",element.KhoBuId);
          if(checkExitLinhVekho==null)
          {
            this.danhSachLinhVekho.push({KeyId:element.KhoBuId, DisplayName:element.KhoBu});
          }
        });
      }   
  }
  taoPhieuLinh(dataItem: any) {
    this.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/tao-phieu-linh-thuoc-bu'], { queryParams: { KhoLinhId: dataItem.KhoLinhId, KhoBuId: dataItem.KhoBuId } });
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  khongBu(dataItem: any) {
    //console.log(dataItem)
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn không  bù cho dược phẩm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.loadingPage();
          self.apiService.post<any>("YeuCauLinhDuocPham/KhongBuDuocPham?yeuCauLinhDuocPhamIdstring=" + dataItem.YeuCauLinhDuocPhamIdstring).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              dataItem.KhongLinhBu = true;
              self.gridChildLevel1.search();
              self.closePopupLoadingData();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

}
