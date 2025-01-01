import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SortDescriptor, GroupDescriptor } from '@progress/kendo-data-query';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icBlock from '@iconify/icons-ic/twotone-delete'
import icEdit from '@iconify/icons-ic/twotone-edit'
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DichVuKhamBenhSreach } from '../dich-vu-kham-benh-benh-vien.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dich-vu-kham-benh-benh-vien-list',
  templateUrl: './dich-vu-kham-benh-benh-vien-list.component.html',
  styleUrls: ['./dich-vu-kham-benh-benh-vien-list.component.scss']
})
export class DichVuKhamBenhBenhVienListComponent implements OnInit {
  dichVuKhamBenhSreach = new DichVuKhamBenhSreach();
  models: any = [{ KeyId: true, DisplayName: "Có" }, { KeyId: false, DisplayName: "Không" }];
  public searchCtrl = new FormControl();
  icSearch = icSearch;
  expression: boolean = false;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icBlock = icBlock;
  icEdit = icEdit;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridChildColumns2: any[] = [];



  urlGetDataGridChild: string = "DichVuKhamBenhBenhVien/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DichVuKhamBenhBenhVien/GetTotalPageForGridChildAsync";
  urlGetDataGridChild2: string = "DichVuKhamBenhBenhVien/GetDataForGridChildGiaBenhVienAsync";
  urlGetTotalPageGridChild2: string = "DichVuKhamBenhBenhVien/GetTotalPageForGridChildGiaBenhVienAsync";

  groups: GroupDescriptor[] = [{ field: 'LoaiGia' }];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  // @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild('actionChiTietTemplate', { static: true }) actionChiTietTemplate: TemplateRef<any>;

  @ViewChild('giaBHYTTemplate', { static: true }) giaBHYTTemplate: TemplateRef<any>;
  @ViewChild('giaThuongBenhVienTemplate', { static: true }) giaThuongBenhVienTemplate: TemplateRef<any>;

  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDichVuKhamBenhTaiBenhVien;

    this.gridColumns = [
      // { Field: "Ma", Title: "Mã", Width: 150, Sortable: true,LinkDetail:true},
      // { Field: "MaTT37", Title: "Mã TT37", Width: 150, Sortable: true },
      // { Field: "HangBenhVien", Title: "Hạng Bệnh Viện", Width: 150, Sortable: true },
      // { Field: "Ten", Title: "Tên", Width: 200, Sortable: true },
      // { Field: "TenNoiThucHien", Title: "Nơi thực hiện", Width: 250, Sortable: true },
      // { Field: "MoTa", Title: "Mô tả", MinWidth: 150, Sortable: true},
      // { Field: "HieuLucHienThi", Title: "Hiệu lực", Width: 150, Sortable: true }

      { Field: "Ma", Title: "Mã DV", Width: 150, Sortable: true, LinkDetail: true },
      { Field: "MaTT37", Title: "Tên DV Khám", Width: 150, Sortable: true },
      { Field: "GiaBHYT", Title: "Giá BHYT", Width: 150, Sortable: true, Template: this.giaBHYTTemplate },
      { Field: "GiaThuongBenhVien", Title: "Giá Thường BV", Width: 250, Sortable: true, Template: this.giaThuongBenhVienTemplate },

      { Field: "HieuLucHienThi", Title: "Hiệu lực", Width: 150, Sortable: true },
      { Field: "Ten", Title: "Tên", Width: 200, Sortable: true },
      { Field: "TenNoiThucHien", Title: "Nơi thực hiện", Width: 250, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 150, Sortable: true }
    ];

    this.gridChildColumns = [
      { Field: "GiaHienThi", Title: "Giá", Width: 50, Sortable: true, LinkDetail: false },
      { Field: "TiLeBaoHiemThanhToan", Title: "TLTT(%)", Width: 50, Sortable: true },
      { Field: "TuNgayHienThi", Title: "Từ ngày", Width: 100, Sortable: true, Dir: 'desc', DefaultSort: true },
      { Field: "DenNgayHienThi", Title: "Đến ngày", Width: 100, Sortable: true }
      // { Field: "Action", Title: "", Width: 110, Template: this.actionChiTietTemplate }
    ];
    this.gridChildColumns2 = [
      { Field: "LoaiGia", Title: "Loại Giá", Width: 210, Sortable: true, LinkDetail: false },
      { Field: "GiaHienThi", Title: "Giá", Width: 265, Sortable: true },
      { Field: "TuNgayHienThi", Title: "Từ ngày", Width: 500, Sortable: true, Dir: 'desc', DefaultSort: true },
      { Field: "DenNgayHienThi", Title: "Đến ngày", Width: 500, Sortable: true }
      // { Field: "Action", Title: "", Width: 110, Template: this.actionChiTietTemplate }
    ];
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('DichVuKhamBenhBenhVien/ExportDichVuKhamBenhBenhVien',
        self.gridParent._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'DichVuKhamBenhBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
            self.closePopupLoadingData();
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.closePopupLoadingData();
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ExportDVKB() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('DichVuKhamBenhBenhVien/ExportDVKB',
        self.gridParent._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'ExportDVKB' + dateTimeNow.getFullYear() + '.xlsx');
            self.closePopupLoadingData();
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.closePopupLoadingData();
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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

  timKiem() {
    var queryString = JSON.stringify(this.dichVuKhamBenhSreach);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }
}
