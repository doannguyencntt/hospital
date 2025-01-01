import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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
  selector: 'app-nha-san-xuat-list',
  templateUrl: './nha-san-xuat-list.component.html',
  styleUrls: ['./nha-san-xuat-list.component.scss']
})
export class NhaSanXuatListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  @ViewChild('gridNhaSanXuat', { static: false }) gridNhaSanXuat: GridComponent;
  constructor(private dialog: MatDialog,private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }
  ngOnInit() {
    this.documentType = DocumentType.DanhMucNhaSanXuat;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên", MinWidth: 250, Sortable: true },
    ];
  }
  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
        self.apiService.postExportExcel<string>('NhaSanXuat/ExportNhaSanXuat',
            self.gridNhaSanXuat._gridQueryInfo).subscribe(
                resultData => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
                        'NhaSanXuat' + dateTimeNow.getFullYear() + '.xlsx');
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
