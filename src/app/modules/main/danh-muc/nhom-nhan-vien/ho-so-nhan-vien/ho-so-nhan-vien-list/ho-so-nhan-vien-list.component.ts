import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-ho-so-nhan-vien-list',
  templateUrl: './ho-so-nhan-vien-list.component.html',
  styleUrls: ['./ho-so-nhan-vien-list.component.scss']
})
export class HoSoNhanVienListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;

  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService){}
 
  ngOnInit() {
    this.documentType = DocumentType.DanhMucNhanVien;
    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true, LinkDetail: true },
      { Field: "SoChungMinhThu", Title: "Số CMT", Width: 150, Sortable: true},
      // { Field: "NgaySinh", Title: "Ngày Sinh", Width: 150, Sortable: true },
      { Field: "SoDienThoaiDisplay", Title: "Số Điện Thoại", Width: 150, Sortable: true },
      { Field: "Email", Title: "Email", Width: 200, Sortable: true },
      { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 200, Sortable: true }
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
      this.apiService.postExportExcel<string>("NhanVien/ExportHoSoNhanVien", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "ExportHoSoNhanVien" + dateTimeNow.getFullYear() + ".xlsx");
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
