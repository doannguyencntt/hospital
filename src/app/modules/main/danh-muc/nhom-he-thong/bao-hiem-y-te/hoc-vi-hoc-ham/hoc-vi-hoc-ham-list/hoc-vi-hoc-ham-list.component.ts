import { Component, OnInit, ViewChild} from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-hoc-vi-hoc-ham-list',
  templateUrl: './hoc-vi-hoc-ham-list.component.html',
  styleUrls: ['./hoc-vi-hoc-ham-list.component.scss']
})
export class HocViHocHamListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  documentType: DocumentType;
  gridColumns: any[] = [];

  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;

  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucHocViHocHam;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên Học Vị", Width: 200, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 400, Sortable: true }
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
      this.apiService.postExportExcel<string>("HocViHocHam/ExportHocViHocHam", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "HocViHocHam" + dateTimeNow.getFullYear() + ".xlsx");
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
