import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SortDescriptor, GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-dich-vu-ky-thuat-benh-vien-list',
  templateUrl: './dich-vu-ky-thuat-benh-vien-list.component.html',
  styleUrls: ['./dich-vu-ky-thuat-benh-vien-list.component.scss']
})
export class DichVuKyThuatBenhVienListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'TenNhomDichVuBenhVien',
    dir: 'asc'
  }];
  groups: GroupDescriptor[] = [{ field: 'LoaiGia' }];
  groupsParent: GroupDescriptor[] = [{ field: 'TenNhomDichVuBenhVien' }];
  expression: boolean = false;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridChildColumns2: any[] = [];
  urlGetDataGridChild: string = "DichVuKyThuatBenhVien/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DichVuKyThuatBenhVien/GetTotalPageForGridChildAsync";
  urlGetDataGridChild2: string = "DichVuKyThuatBenhVien/GetDataForGridChildGiaBenhVienAsync";
  urlGetTotalPageGridChild2: string = "DichVuKyThuatBenhVien/GetTotalPageForGridGiaBenhVienAsync";
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  // @ViewChild('hieuLucTemplate', { static: true }) hieuLucTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: false }) gridParent: GridComponent;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    //this.documentType = DocumentType.DanhMucDichVuKyThuat;
    this.documentType = DocumentType.DanhMucDichVuKyThuatTaiBenhVien;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true,LinkDetail:true},
      { Field: "Ma4350", Title: "Mã 4350", Width: 120, Sortable: true },
      { Field: "Ten", Title: "Tên", MinWidth: 170, Sortable: true },
      { Field: "TenNoiThucHien", Title: "Nơi thực hiện", Width: 200, Sortable: true },
      { Field: "NgayBatDauHienThi", Title: "Ngày bắt đầu", Width: 110, Sortable: true },
      { Field: "ThongTu", Title: "Thông Tư", Width: 150, Sortable: true },
      { Field: "NghiDinh", Title: "Nghị Định", Width: 150, Sortable: true },
      { Field: "NoiBanHanh", Title: "Nơi ban hành", Width: 150, Sortable: true },
      { Field: "SoMayTT", Title: "Số máy TT", Width: 150, Sortable: true },
      { Field: "SoMayCBCM", Title: "Số CBCM", Width: 150, Sortable: true },
      { Field: "ThoiGianThucHien", Title: "Thời gian thực hiện", Width: 170, Sortable: true },
      { Field: "SoCaCP", Title: "Số Ca CP", Width: 150, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", Width: 250, Sortable: true },
      { Field: "HieuLucHienThi", Title: "Hiệu lực", Width: 100, Sortable: true },
      {
        Field: 'TenNhomDichVuBenhVien', Title: 'Nhóm', Width: 150,Hidden:true, Sortable: true,TemplateGroupHeader: this.groupTemplate
      },
      { Field: "LoaiPhauThuatThuThuat", Title: "Loại PTTT", Width: 150, Sortable: true },
      { Field: "LoaiMauXetNghiemText", Title: "Loại mẫu xét nghiệm", MinWidth: 170, Sortable: true },
      
    ];

    this.gridChildColumns = [
      { Field: "GiaHienThi", Title: "Giá", Width: 50, Sortable: true, LinkDetail: false },
      { Field: "TiLeThanhToan", Title: "TLTT(%)", Width: 50, Sortable: true },
      { Field: "TuNgayDisplay", Title: "Từ ngày", Width: 100, Sortable: true, Dir: 'desc', DefaultSort: true  },
      { Field: "DenNgayDisplay", Title: "Đến ngày", Width: 100, Sortable: true }
    ];

    this.gridChildColumns2 = [
      { Field: "LoaiGia", Title: "Loại Giá", Width: 217, Sortable: true },
      { Field: "GiaHienThi", Title: "Giá", Width: 260, Sortable: true, LinkDetail: false },
     
      { Field: "TuNgayDisplay", Title: "Từ ngày", Width: 500, Sortable: true, Dir: 'desc', DefaultSort: true  },
      { Field: "DenNgayDisplay", Title: "Đến ngày", Width: 500, Sortable: true }
    ];
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('DichVuKyThuatbenhVien/ExportDichVuKyThuatbenhVien',
        self.gridParent._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'DichVuKyThuatbenhVien' + dateTimeNow.getFullYear() + '.xlsx');
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
}
