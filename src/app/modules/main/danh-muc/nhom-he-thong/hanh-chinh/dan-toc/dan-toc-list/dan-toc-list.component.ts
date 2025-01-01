import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import { DanToc } from '../dan-toc.model'

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-dan-toc-list',
  templateUrl: './dan-toc-list.component.html',
  styleUrls: ['./dan-toc-list.component.scss']
})
export class DanTocListComponent implements OnInit {

  danToc = {} as DanToc;
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];

  icDelete =icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  icicdone = icicdone;
  icClose =icClose;
  
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanToc;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên Đầy Đủ", MinWidth: 250, Sortable: true },
      { Field: "TenQuocGia", Title: "Tên quốc gia", Width: 150, Sortable: true},
      { Field: "IsDisabled", Title: "Trạng thái", Width: 150, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate,HideFilter:true},
    ];

  }
  updateDanToc(id: number, isDisabled: boolean) {
    let comfirm = "ngừng sử dụng";
    if (isDisabled) comfirm = "sử dụng";
    if (!isDisabled) comfirm = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "dân tộc"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("DanToc/KichHoatChucDanh?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
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
      this.apiService.postExportExcel<string>("DanToc/ExportDanToc", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DanToc" + dateTimeNow.getFullYear() + ".xlsx");
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
