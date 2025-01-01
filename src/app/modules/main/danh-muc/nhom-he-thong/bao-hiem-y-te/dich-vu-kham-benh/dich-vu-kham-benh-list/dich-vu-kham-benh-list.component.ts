import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit'
import { Router } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-dich-vu-kham-benh-list',
  templateUrl: './dich-vu-kham-benh-list.component.html',
  styleUrls: ['./dich-vu-kham-benh-list.component.scss']
})
export class DichVuKhamBenhListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  icMoreHoriz = icMoreHoriz;
  icAdd = icAdd;
  icDelete = icDelete;
  icEdit = icEdit;
  validationErrors: any[] = [];
  documentType: DocumentType = DocumentType.DanhMucDichVuKhamBenh;

  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "DichVuKhamBenh/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DichVuKhamBenh/GetTotalPageForGridChildAsync";

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 140, Sortable: true, LinkDetail: true },
      { Field: "MaTT37", Title: "Mã TT37", Width: 140, Sortable: true },
      { Field: "Ten", Title: "Tên", Width: 200, Sortable: true },
      { Field: "TenKhoa", Title: "Khoa", Width: 200, Sortable: true },
      { Field: "TenHangBenhVien", Title: "Hàng bệnh viện", Width: 200, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", Width: 400, Sortable: true }
    ];

    this.gridChildColumns = [
      { Field: "GiaFormat", Title: "Giá", Width: 150, Sortable: true },
      { Field: "TuNgayFormat", Title: "Từ ngày", Width: 200, Sortable: false },
      { Field: "DenNgayFormat", Title: "Đến ngày", Width: 200, Sortable: false },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 400, Sortable: false },
      { Field: "ActiveName", Title: "Hiệu lực", Width: 200, Sortable: false }
    ];

  }
  updateDichVuKhamBenh(id: number, isDisabled: boolean) {
    let comfrim = "ngừng sử dụng";
    if (isDisabled) comfrim = "ngừng sử dụng";
    if (!isDisabled) comfrim = "sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, "dịch vụ khám bệnh"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("DichVuKhamBenh/KichHoatDichVuKhamBenh?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
            },
            (err: any) => {
              self.notificationService.showError(err.Message);
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    this.apiService.postExportExcel<string>("DichVuKhamBenh/ExportDichVuKhamBenh", this.gridChild._gridQueryInfo).subscribe(res => {
      let dateTimeNow = new Date();
      CommonService.downLoadFile(res, "application/vnd.ms-excel", "DichVuKhamBenh" + dateTimeNow.getFullYear() + ".xlsx");
      this.dialog.closeAll();
    }, err => {
      this.notificationService.showError(err.Message);
      this.dialog.closeAll();
    })
  }

}
