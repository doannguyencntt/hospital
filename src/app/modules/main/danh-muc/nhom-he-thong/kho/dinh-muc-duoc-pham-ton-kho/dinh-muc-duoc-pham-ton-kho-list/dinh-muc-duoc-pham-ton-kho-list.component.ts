import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-dinh-muc-duoc-pham-ton-kho-list',
  templateUrl: './dinh-muc-duoc-pham-ton-kho-list.component.html',
  styleUrls: ['./dinh-muc-duoc-pham-ton-kho-list.component.scss']
})
export class DinhMucDuocPhamTonKhoListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucDinhMucDuocPhamTonKho;
    this.gridColumns = [
      { Field: "TenKhoDuocPham", Title: "Tên Kho Dược Phẩm", Width: 200, Sortable: true },
      { Field: "TenDuocPham", Title: "Tên Dược Phẩm", Width: 300, Sortable: true, LinkDetail: true },
      { Field: "TonToiThieu", Title: "Tồn Tối Thiểu", Width: 150, Sortable: true },
      { Field: "TonToiDa", Title: "Tồn Tối Đa", Width: 130, Sortable: true },
      { Field: "SoNgayTruocKhiHetHan", Title: "Số Ngày Trước Khi Hết Hạn", Width: 250, Sortable: true },
      { Field: "MoTa", Title: "Mô Tả", MinWidth: 350, Sortable: true },
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
      this.apiService.postExportExcel<string>("DinhMucDuocPhamTonKho/ExportDinhMucDuocPhamTonKho", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DinhMucDuocPhamTonKho" + dateTimeNow.getFullYear() + ".xlsx");
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
