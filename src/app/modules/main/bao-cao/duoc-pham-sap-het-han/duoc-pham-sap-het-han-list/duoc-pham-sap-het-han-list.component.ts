import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import icBlock from '@iconify/icons-ic/twotone-delete'
import icEdit from '@iconify/icons-ic/twotone-edit'
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { LookupItemVo, LookupQueryInfo } from 'src/app/shared/models/common.model';
import { FormControl } from '@angular/forms';
import { searchDuocPhamSapHetHan } from '../duoc-pham-sap-het-han.model';
import { DuocPhamSapHetHanPopupXemComponent } from '../duoc-pham-sap-het-han-popup-xem/duoc-pham-sap-het-han-popup-xem.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-duoc-pham-sap-het-han-list',
  templateUrl: './duoc-pham-sap-het-han-list.component.html',
  styleUrls: ['./duoc-pham-sap-het-han-list.component.scss']
})
export class DuocPhamSapHetHanListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];


  icSearch = icSearch;
  expression: boolean = false;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icBlock = icBlock;
  icEdit = icEdit;
  icFileExcel = icFileExcel;

  documentType: DocumentType;
  gridColumns: any[] = [];
  searchString: string = null;
  searchInfo: searchDuocPhamSapHetHan;
  searchCtrl = new FormControl();
  IsData: boolean = false;

  @Input() searchPlaceHolder: string = "Tìm kiếm theo tên dược phẩm...";
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  // @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild('actionChiTietTemplate', { static: true }) actionChiTietTemplate: TemplateRef<any>;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @ViewChild('tinhTrangTemplate2', { static: true }) tinhTrangTemplate2: TemplateRef<any>;
  @ViewChild('donGiaNhapTemplate', { static: true }) donGiaNhapTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDinhMucDuocPhamTonKho;
    this.searchInfo = new searchDuocPhamSapHetHan;
    // this.GetValue();
    this.gridColumns = [
      { Field: "TenKho", Title: "Kho", Width: 200, Sortable: true },
      { Field: "MaDuocPham", Title: "Mã dược ", Width: 200, Sortable: true },
      { Field: "TenDuocPham", Title: "Dược Phẩm", MinWidth: 200, Sortable: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 200, Sortable: true },
      { Field: "TenHoatChat", Title: "Hoạt Chất", Width: 200, Sortable: true },
      { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 200, Sortable: true },
      { Field: "SoLo", Title: "Số lô", Width: 200, Sortable: true },
      { Field: "ViTri", Title: "Vị Trí", Width: 200, Sortable: true },
      { Field: "DonGiaNhap", Title: "Đơn giá nhập", Width: 200, Sortable: true ,Template: this.donGiaNhapTemplate },
      { Field: "SoLuongTon", Title: "Số lượng tồn", Width: 200, Sortable: true },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 200, Sortable: true ,Template: this.thanhTienTemplate },
      { Field: "NgayHetHanHienThi", Title: "Ngày Hết Hạn", Width: 200, Sortable: true, Template: this.tinhTrangTemplate2 },
      // { Field: "CanhBao", Title: "Cảnh báo", MinWidth: 150, Sortable: true},
      // { Field: "Action", Title: "", Width: 110, Template: this.actionTemplate }
    ];
  }
  GetValue() {
    let KhoQueryString = null;
    let SearchQueryString = null;
    if (this.searchInfo.KhoId != null) {
      KhoQueryString = this.searchInfo.KhoId;
    }
    if (this.searchInfo.searchString != null) {
      SearchQueryString = "\"" + this.searchInfo.searchString + "\"";
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString + "}";
    this.apiService.post<any>("DuocPhamSapHetHan/CheckCaoDuocPhamSapHetHan?search=" + queryString).subscribe(
      resultData => {
        if (resultData.length > 0) {
          console.log("a", resultData)
          this.IsData = true;
        } else {
          this.IsData = false;
        }
      },
      (err: ApiError) => {

      });
  }

  searchTonKho() {
    let KhoQueryString = null;
    let SearchQueryString = null;
    if (this.searchInfo.KhoId != null) {
      KhoQueryString = this.searchInfo.KhoId;
    }
    if (this.searchInfo.searchString != null) {
      SearchQueryString = "\"" + this.searchInfo.searchString + "\"";
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString + "}";
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
    this.GetValue();
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.searchTonKho();
    }
    // if(event.key == "Backspace" ){
    //   console.log("Co vao: ",this.searchInfo)
    //   if(this.searchInfo.searchString==null || this.searchInfo.searchString==undefined|| this.searchInfo.searchString==""){
    //     this.searchInfo.searchString=undefined;

    //     this.searchTonKho();
    //   }
    // }
  }

  searchChange() {
    if (this.searchInfo.searchString == null || this.searchInfo.searchString == undefined || this.searchInfo.searchString == "") {
      this.searchInfo.searchString = undefined;

      this.searchTonKho();
    }
  }

  KhoChange(khoDuocPhamId: any) {
    this.searchInfo.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
    this.searchTonKho();
  }
  
  Gui() {
    let dialogRef = this.dialog.open(DuocPhamSapHetHanPopupXemComponent, {
      //disableClose: true,
      width: '1500px',
      // height: '500px',
      data: { Model: this.searchInfo, Title: "Xác nhận" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Ketqua', result)


    });
  }
  searchChanges() {
    if (this.searchInfo.searchString == null || this.searchInfo.searchString == undefined) {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
  }
  getSharedPrintForm() {
    let KhoQueryString = null;
    let SearchQueryString = null;
    if (this.searchInfo.KhoId != null) {
      KhoQueryString = this.searchInfo.KhoId;
    }
    if (this.searchInfo.searchString != null) {
      SearchQueryString = "\"" + this.searchInfo.searchString + "\"";
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString + "}";
    return new Promise(resolve => {
      this.apiService.get<any>("DuocPhamSapHetHan/InBaoCaoDuocPhamSapHetHan?search=" + queryString).subscribe(resultData => {
        resolve(resultData);
      });
    });
  }
  ConditionQuery() {
    return this.searchInfo;
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DuocPhamSapHetHan/ExportDuocPhamSapHetHan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DuocPhamSapHetHan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
