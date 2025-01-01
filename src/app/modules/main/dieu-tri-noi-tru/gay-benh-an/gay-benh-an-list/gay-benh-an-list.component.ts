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
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icEdit from "@iconify/icons-ic/twotone-edit";
import { Router } from '@angular/router';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-gay-benh-an-list',
  templateUrl: './gay-benh-an-list.component.html',
  styleUrls: ['./gay-benh-an-list.component.scss']
})
export class GayBenhAnListComponent implements OnInit {
  documentType: DocumentType = DocumentType.DanhMucGayBenhAn;
  gridColumns: any[] = [];
  icicdone = icicdone;
  icicclose = icicclose;
  icEdit = icEdit;
  icDelete = icDelete;
  icMoreHoriz = icMoreHoriz;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private notificationService: NotificationService,
    private apiService: ApiService) { }


  ngOnInit() {
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: true, LinkDetail: true },
      { Field: "ViTri", Title: "vị trí gáy", Width: 100, Sortable: true },
      { Field: "Ten", Title: "Tên", Width: 180, Sortable: true },
      { Field: "TenPhieuHoSo", Title: "Phiếu/hồ sơ", Width: 300, ShowTooltip: true },
      { Field: "IsDisabled", Title: "Trạng Thái", Width: 200, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate, },
    ];
  }

  sua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/benh-an-dien-tu/gay-benh-an/chinh-sua/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  validationErrors: any;
  xoa(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("BenhAnDienTu/XoaGayBenhAn?id=" + id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              this.gridChild.search();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("BenhAnDienTu/ExportGayBenhAn", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DSGayBenhAn" + dateTimeNow.getFullYear() + ".xlsx");
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
