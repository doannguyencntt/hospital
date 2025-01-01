import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duoc-pham-benh-vien-list',
  templateUrl: './duoc-pham-benh-vien-list.component.html',
  styleUrls: ['./duoc-pham-benh-vien-list.component.scss']
})
export class DuocPhamBenhVienListComponent implements OnInit {
  documentType: DocumentType;
  searchString: any;
  public searchCtrl = new FormControl();
  expression: boolean = false;
  gridColumns: any[] = [];

  baseRoute: string = "/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien";

  @ViewChild('gridDuocPhamBenhVien', { static: false }) gridDuocPhamBenhVien: GridComponent;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(private dialog: MatDialog, private route: ActivatedRoute,
    private location: Location, private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }
  public icSearch = icSearch;
  ngOnInit() {
    this.documentType = DocumentType.DanhMucDuocPhamBenhVien;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachDuocPhamBV");
        if (additionalSearchString != null) {
          this.gridChild.searchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachDuocPhamBV");
    }

    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 78, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên", MinWidth: 150, Sortable: true, LinkDetail: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 100, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 100, Sortable: true },
      { Field: "TenDonViTinh", Title: "ĐVT", Width: 80, Sortable: true },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 100, Sortable: true },
      { Field: "QuyCach", Title: "Quy cách", Width: 120, Sortable: true },
      { Field: "PhanNhom", Title: "Phân nhóm", Width: 242, Sortable: true },
      { Field: "SoDangKy", Title: "Số đăng kí", Width: 100, Sortable: true },
      { Field: "MaHoatChat", Title: "Mã hoạt chất", Width: 128, Sortable: true },
    ];

  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('DuocPhamBenhVien/ExportDuocPhamBenhVien',
        self.gridDuocPhamBenhVien._gridQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DuocPhamBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  extOnDataBound(queryString: any) {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    queryString = this.gridChild.searchString;
    LocalStorageHelper.setItem("additionalSearchStringDanhSachDuocPhamBV", queryString);
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }
}
