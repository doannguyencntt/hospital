import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SortDescriptor } from '@progress/kendo-data-query';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/content-copy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danh-sach-nhom-dich-vu-thuong-dung',
  templateUrl: './danh-sach-nhom-dich-vu-thuong-dung.component.html',
  styleUrls: ['./danh-sach-nhom-dich-vu-thuong-dung.component.scss']
})
export class DanhSachNhomDichVuThuongDungComponent implements OnInit {
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  icicdone = icicdone;
  icClose = icClose;
  icDelete = icDelete;
  icEdit = icEdit;
  documentType: DocumentType;
  icMoreHoriz = icMoreHoriz;
  baseRoute = '/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung';

  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridGoiDv', { static: false }) gridGoiDv: GridComponent;

  urlGetDataGridChild: string = "NhomDichVuThuongDung/GetDataForGridAsync";
  urlGetTotalPageGridChild: string = "NhomDichVuThuongDung/GetTotalPageForGridAsync";

  ngOnInit() {
    this.documentType = DocumentType.GoiDichVuNhomThuongDung;
    this.gridColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Width: 200, Sortable: true, LinkDetail: true },
      { Field: "MoTa", Title: "Mô Tả", MinWidth: 400, Sortable: true },
      { Field: "TinhTrang", Title: "Trạng thái", Width: 150, Template: this.trangThaiTemplate },
      { Field: "", Title: "", Width: 150, Template: this.actionTemplate, HideFilter: true }
    ];
  }

  copy(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate([this.baseRoute + '/them/' + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  delete(id: number) {
    this.gridGoiDv.delete(id);
  }

  updateDichVu(id: number, isDisabled: boolean) {
    let confirm = 'ngừng sử dụng';
    if (isDisabled) { confirm = 'sử dụng'; }
    if (!isDisabled) { confirm = 'ngừng sử dụng'; }
    const self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'nhóm dịch vụ']) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          self.apiService.post('NhomDichVuThuongDung/KichHoatNhomDichVu?id=' + id).subscribe(
            () => {
              self.gridChild.search();
              if (isDisabled) {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Sử dụng']));
              } else {
                self.notificationService.showSuccess
                  (CommonService.format(SystemMessage.ActionSuccessfully, ['Ngừng sử dụng']));
              }
            },
            (err: any) => {
              self.notificationService.showError(err.Message);
            });
        }
      });
    } else {
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

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>('NhomDichVuThuongDung/ExportGoiDichVu',
        this.gridChild._gridQueryInfo).subscribe(res => {
          const dateTimeNow = new Date();
          CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'GoiDvNhomThuongDung' + dateTimeNow.getFullYear() + '.xlsx');
          this.dialog.closeAll();
        }, err => {
          this.notificationService.showError(err.Message);
          this.dialog.closeAll();
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
