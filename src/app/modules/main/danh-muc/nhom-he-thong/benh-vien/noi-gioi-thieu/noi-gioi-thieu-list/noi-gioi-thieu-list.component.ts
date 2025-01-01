import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icicdone from '@iconify/icons-ic/twotone-done';
import icicclose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-noi-gioi-thieu-list',
  templateUrl: './noi-gioi-thieu-list.component.html',
  styleUrls: ['./noi-gioi-thieu-list.component.scss']
})
export class NoiGioiThieuListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  icicdone = icicdone;
  icicclose = icicclose;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }


  ngOnInit() {
    this.documentType = DocumentType.DanhMucNoiGioiThieu;
    this.gridColumns = [
      { Field: "Ten", Title: "Tên", Width: 240, Sortable: true, LinkDetail: true },
      { Field: "DonVi", Title: "Đơn Vị", Width: 180, Sortable: true },
      { Field: "SoDienThoaiDisplay", Title: "Số Điện Thoại", Width: 180, Sortable: true },
      { Field: "MoTa", Title: "Mô Tả", minWidth: 180, Sortable: true },
      { Field: "IsDisabled", Title: "Trạng Thái", Width: 200, Template: this.trangThaiTemplate },
      { Field: "HoTenNguoiQuanLy", Title: "Người Quản Lý", Width: 300, Sortable: true },
    ];
  }

  updateNoiGioiThieu(id: number, isDisabled: boolean) {
    let comfirm = "ngừng sử dụng";
    if (isDisabled) comfirm = "sử dụng";
    if (!isDisabled) comfirm = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "nơi giới thiệu"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("NoiGioiThieu/KichHoatNoiGioiThieu?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (!isDisabled)
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
  
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("NoiGioiThieu/ExportNoiGioiThieu", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "NoiGioiThieu" + dateTimeNow.getFullYear() + ".xlsx");
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
