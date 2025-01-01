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
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-dich-vu-ky-thuat-list',
  templateUrl: './dich-vu-ky-thuat-list.component.html',
  styleUrls: ['./dich-vu-ky-thuat-list.component.scss']
})

export class DichVuKyThuatListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];



  expression : boolean = false;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose

  documentType: DocumentType;
  gridColumns: any[] = [];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  // @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;

  constructor(private authService: AuthService, 
              private dialog: MatDialog, 
              private notificationService: NotificationService,
              private apiService : ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDichVuKyThuat;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 150, Sortable: true},
      { Field: "Ten", Title: "Tên kỹ thuật", Width: 200, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 150, Sortable: true},
      { Field: "IsDisabled", Title: "Trạng thái", Width: 150, Template : this.trangThaTemplate },
      // { Field: "Action", Title: "", Width: 110, Template: this.actionTemplate }
    ];
  }


  updateDichVuKyThuat(id: number, isDisabled: boolean ) {
      let comfrim = "ngừng sử dụng";
      if(isDisabled) comfrim = "sử dụng";
      if(!isDisabled) comfrim = "ngừng sử dụng";
      var self = this;
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim,"kỹ thuật"]) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            self.apiService.post("DichVuKyThuat/KichHoatKyThuat?id=" + id).subscribe(
                () => {
                  self.gridChild.search();
                  if(isDisabled)
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


}
