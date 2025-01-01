import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from '../../../../../../../../app/shared/component/grid/grid.component';
import { DocumentType } from '../../../../../../../../app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { Router } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-noi-dung-mau-pdf-list',
  templateUrl: './noi-dung-mau-pdf-list.component.html',
  styleUrls: ['./noi-dung-mau-pdf-list.component.scss']
})

export class NoiDungMauPdfListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];
  expression : boolean = false;
  icMoreHoriz = icMoreHoriz;
  icEdit = icEdit;

  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(private router: Router, private dialog: MatDialog,
              private authService: AuthService, private notificationService: NotificationService, private apiService: ApiService) {
   }

  ngOnInit() {
    this.documentType = DocumentType.QuanLyNoiDungMauXuatRaPdf;
    this.gridColumns = [
      { Field: "Description", Title: "Mô tả", MinWidth: 200, Sortable: true,LinkDetail: true},
      { Field: "PhienBan", Title: "Phiên bản", Width: 100, Sortable: true },
      { Field: "DateUpdateText", Title: "Ngày cập nhật", Width: 120, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Template : this.actionTemplate },
    ];
  }

  edit(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-xuat-ra-pdf/chinh-sua/" + id]);
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
      this.apiService.postExportExcel<string>("Template/ExportTemplate", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "NoiDungMauPDF" + dateTimeNow.getFullYear() + ".xlsx");
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
