import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import icicclose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-duong-dung-list',
  templateUrl: './duong-dung-list.component.html',
  styleUrls: ['./duong-dung-list.component.scss']
})
export class DuongDungListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  icicdone = icicdone;
  icicclose = icicclose;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDuongDung;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 150, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên Đầy Đủ", MinWidth: 400, Sortable: true },
      { Field: "MoTa", Title: "Mô Tả", Width: 250, Sortable: true },
      { Field: "IsDisabled", Title: "Trạng Thái", Width: 150, Template: this.trangThaiTemplate }
    ];
  }

  updateDuongDung(id: number, isDisabled: boolean) {
    let comfrim = "ngừng sử dụng";
    if (isDisabled) comfrim = " sử dụng";
    if (!isDisabled) comfrim = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, "đường dùng"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.apiService.post("DuongDung/KichHoatDuongDung?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [" Sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng Sử dụng"]));
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
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DuongDung/ExportDuongDung", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DuongDung" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
