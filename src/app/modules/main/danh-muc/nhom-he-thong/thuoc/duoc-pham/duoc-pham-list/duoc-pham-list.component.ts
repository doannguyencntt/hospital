import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormControl } from '@angular/forms';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { DuocPhamChonFilePopupComponent } from '../duoc-pham-chon-file-popup/duoc-pham-chon-file-popup.component';
import { ThongTinDuocPhamPopupComponent } from '../thong-tin-duoc-pham-popup/thong-tin-duoc-pham-popup.component';

@Component({
  selector: 'app-duoc-pham-list',
  templateUrl: './duoc-pham-list.component.html',
  styleUrls: ['./duoc-pham-list.component.scss']
})
export class DuocPhamListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  icSearch = icSearch;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icDelete = icDelete;
  
  searchCtrl = new FormControl();
  searchString:any;
  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
 
  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDuocPham;
    this.gridColumns = [
      { Field: "Ten", Title: "Tên Dược Phẩm", Width: 150, Sortable: true, LinkDetail: true },
      { Field: "SoDangKy", Title: "Số Đăng Ký", Width: 150, Sortable: true},
      { Field: "MaHoatChat", Title: "Mã Hoạt Chất", MinWidth: 200, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 150, Sortable: true },
      { Field: "QuyCach", Title: "Đơn vị sơ cấp", Width: 200, Sortable: true },
      { Field: "TenDonViTinh", Title: "Đơn vị thứ cấp", Width: 200, Sortable: true },
      { Field: "HeSoDinhMucDonViTinh", Title: "Hệ số định mức", Width: 200, Sortable: true },
      { Field: "TenDuongDung", Title: "Đường Dùng", Width: 250, Sortable: true },
      { Field: "TenLoaiThuocHoacHoatChat", Title: "Loại Thuốc", Width: 250, Sortable: true }
    ];
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DuocPham/ExportDuocPham", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DuocPham" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  NhapTuFileExcel(){
    this.dialog.open(DuocPhamChonFilePopupComponent, {
      disableClose: false,
      width: '800px',
    }).afterClosed().subscribe(result => {
      if (result != undefined && result != null && result.length > 0) {
        this.dialog.open(ThongTinDuocPhamPopupComponent, {
          disableClose: false,
          width: '800px',
          data: { thongTin: result }
        }).afterClosed().subscribe(result => {
        });
      }
    });
  }
}
