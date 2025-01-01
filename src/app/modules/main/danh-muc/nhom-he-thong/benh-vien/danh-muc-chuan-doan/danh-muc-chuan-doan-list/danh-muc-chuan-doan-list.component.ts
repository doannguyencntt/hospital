import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-danh-muc-chuan-doan-list',
  templateUrl: './danh-muc-chuan-doan-list.component.html',
  styleUrls: ['./danh-muc-chuan-doan-list.component.scss']
})
export class DanhMucChuanDoanListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;

  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucNhomChanDoan;
    this.gridColumns = [
      { Field: "TenTiengViet", Title: "Tên Tiếng Việt", Width: 400, Sortable: true, LinkDetail: true },
      { Field: "TenTiengAnh", Title: "Tên Tiếng Anh", Width: 400, Sortable: true },
      { Field: "GhiChu", Title: "Ghi Chú", MinWidth: 100, Sortable: true },
    ];
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DanhMucChuanDoan/ExportDanhMucChanDoan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DanhMucChanDoan" + dateTimeNow.getFullYear() + ".xlsx");
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
