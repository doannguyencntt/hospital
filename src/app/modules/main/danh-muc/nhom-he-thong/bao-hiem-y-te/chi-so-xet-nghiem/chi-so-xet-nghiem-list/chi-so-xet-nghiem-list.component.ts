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
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';


@Component({
  selector: 'app-chi-so-xet-nghiem-list',
  templateUrl: './chi-so-xet-nghiem-list.component.html',
  styleUrls: ['./chi-so-xet-nghiem-list.component.scss']
})
export class ChiSoXetNghiemListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icClose = icClose;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }


  ngOnInit() {
    this.documentType = DocumentType.DanhMucChiSoXetNghiem;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên chỉ số", Width: 200, Sortable: true },
      { Field: "TenTiengAnh", Title: "Tên tiếng anh", Width: 200, Sortable: true },
      { Field: "ChiSoBinhThuongNam", Title: "Chỉ số xét nghiệm nam", Width: 200, Sortable: true },
      { Field: "ChiSoBinhThuongNu", Title: "Chỉ số xét nghiệm nữ", Width: 200, Sortable: true },
      { Field: "TenLoaiXetNghiem", Title: "Loại xét nghiệm", Width: 200, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 200, Sortable: true },
      { Field: "HieuLuc", Title: "Trạng Thái", Width: 200, Template: this.trangThaiTemplate }
    ];
  }

  updateDanhMucChiSoXetNghiem(id: number, isDisabled: boolean) {
    let confirm = "ngừng sử dụng";
    if (!isDisabled) confirm = "sử dụng";
    if (isDisabled) confirm = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, "chi số xét nghiệm"]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.apiService.post("ChiSoXetNghiem/KichHoatChiSo?id=" + id).subscribe(
                    () => {
                        self.gridChild.search();
                        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [confirm]));
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
      this.apiService.postExportExcel<string>("ChiSoXetNghiem/ExportChiSoXetNghiem", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "ChiSoXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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
