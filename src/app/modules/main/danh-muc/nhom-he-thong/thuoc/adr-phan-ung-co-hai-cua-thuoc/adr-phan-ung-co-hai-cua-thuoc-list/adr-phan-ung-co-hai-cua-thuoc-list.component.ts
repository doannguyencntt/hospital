import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icicdone from '@iconify/icons-ic/twotone-done';
import icicclose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-adr-phan-ung-co-hai-cua-thuoc-list',
  templateUrl: './adr-phan-ung-co-hai-cua-thuoc-list.component.html',
  styleUrls: ['./adr-phan-ung-co-hai-cua-thuoc-list.component.scss']
})
export class AdrPhanUngCoHaiCuaThuocListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  gridColumns: any[] = [];
  icicdone = icicdone;
  icicclose = icicclose;
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  constructor(private dialog: MatDialog, private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }
  ngOnInit() {
    this.documentType = DocumentType.DanhMucAdrPhanUngCoHaiCuaThuoc;
    this.gridColumns = [
      { Field: "TenThuocHoacHoatChat1", Title: "Tên Hoạt Chất 1", Width: 200, Sortable: true, LinkDetail: true },
      { Field: "TenThuocHoacHoatChat2", Title: "Tên Hoạt Chất 2", Width: 200, Sortable: true },
      { Field: "MucDoChuYKhiChiDinhDisplay", Title: "Mức độ chú ý khi chỉ định", Width: 250, Sortable: true },
      { Field: "MucDoTuongTacDisplay", Title: "Mức độ tương tác", Width: 200, Sortable: true },
      { Field: "DuocDongHocDisplay", Title: "Dược động học", Width: 170, Sortable: true },
      { Field: "DuocLucHocDisplay", Title: "Dược lực học", Width: 170, Sortable: true },
      { Field: "ThuocThucAnDisplay", Title: "Thuốc thức ăn", Width: 170, Sortable: true },
      { Field: "QuyTacDisplay", Title: "Quy tắc", Width: 170, Sortable: true },
      { Field: "TuongTacHauQua", Title: "Tương tác hậu quả", Width: 200, Sortable: true },
      { Field: "CachXuLy", Title: "Cách xử lý", Width: 160, Sortable: true },
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
      this.apiService.postExportExcel<string>("ADR/ExportADR", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "ADR" + dateTimeNow.getFullYear() + ".xlsx");
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
