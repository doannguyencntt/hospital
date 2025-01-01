import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-mau-va-che-pham-list',
  templateUrl: './mau-va-che-pham-list.component.html',
  styleUrls: ['./mau-va-che-pham-list.component.scss']
})
export class MauVaChePhamListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];
  @ViewChild('gridMauVaChePham', { static: false }) gridMauVaChePham: GridComponent;
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  constructor(private dialog: MatDialog,private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucMauVaChePham;9
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true,LinkDetail: true  },
      { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: true},
      { Field: "TheTichs", Title: "Thể tích(ml)", Width: 250,Sortable: true},
      { Field: "GiaTriToiDas", Title: "Giá trị tối đa", Width: 250,Sortable: true},
    ];
  }
  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
        self.apiService.postExportExcel<string>('MauVaChePham/ExportMauVaChePham',
            self.gridMauVaChePham._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'MauVaChePham' + dateTimeNow.getFullYear() + '.xlsx');
                },
                (err: any) => {
                    self.notificationService.showError(err.Message);
                });
    } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
}

showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
    });
}

closePopupLoadingData() {
    this.dialog.closeAll();
}
}
