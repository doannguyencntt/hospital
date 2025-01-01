import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';

import icDone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-quoc-gia-list',
  templateUrl: './quoc-gia-list.component.html',
  styleUrls: ['./quoc-gia-list.component.scss']
})

export class QuocGiaListComponent implements OnInit {
  icdone = icDone;
  icclose = icClose;
  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;

  documentType: DocumentType;
  gridColumns: any[] = [];

  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucQuocGia;
    
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 170, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên", Width: 170, Sortable: true },
      { Field: "TenVietTat", Title: "Tên viết tắt", Width: 170, Sortable: true },
      { Field: "QuocTich", Title: "Quốc tịch", Width: 170, Sortable: true },
      { Field: "MaDienThoaiQuocTe", Title: "Mã điện thoại quốc tế", Width: 200, Sortable: true },
      { Field: "ThuDo", Title: "Thủ đô", Width: 170, Sortable: true },
      { Field: "ChauLuc", Title: "Châu lục", Width: 170, Sortable: true },
      { Field: "IsDisabled", Title: "Trạng thái", Width: 250, Sortable: true, Template: this.trangThaiTemplate }
    ];
  }

  updateTinhTrang(id: number, isDisabled: boolean) {
    let self = this;
    let comfirm = isDisabled ? "sử dụng" : "ngừng sử dụng";

    if(self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "quốc gia"]) }
      }).afterClosed().subscribe(res => {/* result is a string:Yes,No,No answer*/
        if (res == "Yes") {
          self.apiService.post(`QuocGia/KichHoatTrangThai?id=${id}`).subscribe(() => {
            self.gridChild.search();

            isDisabled ?
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"])) :
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
          }, (err: any) => {
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
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("QuocGia/ExportQuocGia", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "QuocGia" + dateTimeNow.getFullYear() + ".xlsx");
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
