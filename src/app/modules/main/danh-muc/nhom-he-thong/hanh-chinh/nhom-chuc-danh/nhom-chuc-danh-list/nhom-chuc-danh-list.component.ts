import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from '../../../../../../../../app/shared/component/grid/grid.component';
import { DocumentType } from '../../../../../../../../app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from '../../../../../../../../app/core/services/api.service';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-nhom-chuc-danh-list',
  templateUrl: './nhom-chuc-danh-list.component.html',
  styleUrls: ['./nhom-chuc-danh-list.component.scss']
})
export class NhomChucDanhListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];
  
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;

  constructor(private authService: AuthService, 
    private dialog: MatDialog, 
    private notificationService: NotificationService,
    private apiService : ApiService) { }

    ngOnInit() {
      this.documentType = DocumentType.DanhMucNhomChucDanh;
      this.gridColumns = [
        { Field: "Ma", Title: "Mã", Width: 150, Sortable: true, LinkDetail: true },
        { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: true },
        { Field: "MoTa", Title: "Mô tả", Width: 150, Sortable: true }
      ];
    }
  
    updateTinhTrang(id: number, isDisabled: boolean ) {
      let comfrim = "ngừng sử dụng";
      if(isDisabled) comfrim = "sử dụng";
      var self = this;
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim,"tên bệnh viện"]) }
        }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            self.apiService.post("BenhVien/KichHoatTrangThai?id=" + id).subscribe(
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

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("NhomChucDanh/ExportNhomChucDanh", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "NhomChucDanh" + dateTimeNow.getFullYear() + ".xlsx");
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
