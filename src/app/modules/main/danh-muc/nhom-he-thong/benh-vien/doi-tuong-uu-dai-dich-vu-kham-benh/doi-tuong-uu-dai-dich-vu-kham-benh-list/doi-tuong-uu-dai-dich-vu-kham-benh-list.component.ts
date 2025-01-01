import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-kham-benh-list',
  templateUrl: './doi-tuong-uu-dai-dich-vu-kham-benh-list.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-kham-benh-list.component.scss']
})
export class DoiTuongUuDaiDichVuKhamBenhListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];
  groups: GroupDescriptor[] = [{ field: 'LoaiGia' }];
  expression: boolean = false;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose
  gridChildColumns2: any[] = [];
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "DoiTuongUuDaiDichVuKhamBenhBenhVien/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DoiTuongUuDaiDichVuKhamBenhBenhVien/GetTotalPageForGridChildAsync";
  urlGetDataGridChild2: string = "DoiTuongUuDaiDichVuKhamBenhBenhVien/GetDataForGridChildAsync";
  urlGetTotalPageGridChild2: string = "DoiTuongUuDaiDichVuKhamBenhBenhVien/GetTotalPageForGridChildAsync";
  constructor(private authService: AuthService,
    private apiService : ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
  ngOnInit() {
    this.documentType = DocumentType.DoiTuongUuDaiDichVuKhamBenh;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true,LinkDetail:true},
      { Field: "Ma4350", Title: "Mã TT37", Width: 120, Sortable: true },
      { Field: "Ten", Title: "Tên", MinWidth: 170, Sortable: true },
      //{ Field: "TenKhoa", Title: "Khoa", Width: 120, Sortable: true }
    ];
    this.gridChildColumns2 = [
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true},
      { Field: "TiLeUuDai", Title: "Tỉ lệ ưu đãi", Width: 120, Sortable: true }

    ];
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('DoiTuongUuDaiDichVuKhamBenhBenhVien/ExportDoiTuongUuDaiDichVuKhamBenh',
        self.gridParent._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'DoiTuongUuDaiDichVuKhamBenh' + dateTimeNow.getFullYear() + '.xlsx');
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
