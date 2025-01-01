import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import icicclose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'app-toa-thuoc-mau-list',
  templateUrl: './toa-thuoc-mau-list.component.html',
  styleUrls: ['./toa-thuoc-mau-list.component.scss']
})
export class ToaThuocMauListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  icicdone = icicdone;
  icicclose = icicclose;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "ToaThuocMau/GetDataForGridToaThuocMauChiTietChildAsync";
  urlGetTotalPageGridChild: string = "ToaThuocMau/GetTotalPageForGridToaThuocMauChiTietChildAsync";
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }


  ngOnInit() {
    this.documentType = DocumentType.ToaThuocMau;
    this.gridColumns = [
      { Field: "Ten", Title: "Toa Thuốc Mẫu", Width: 100, Sortable: true, LinkDetail: true, ShowTooltip: true },
      { Field: "TenICD", Title: "Tên ICD", Width: 200, Sortable: true, ShowTooltip: true },
      { Field: "TenTrieuChung", Title: "Triệu Chứng", Width: 160, Sortable: true },
      { Field: "ChuanDoan", Title: "Chẩn Đoán", Width: 200, Sortable: true },
      { Field: "TenBacSiKeToa", Title: "Bác Sĩ Kê Toa", Width: 200, Sortable: true },
      { Field: "GhiChu", Title: "Ghi Chú", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "IsDisabled", Title: "Trạng Thái", Width: 140, Template: this.trangThaiTemplate }
    ];
    this.gridChildColumns = [
      { Field: "TenDuocPham", Title: "Dược phẩm", Width: 200, Sortable: true, ShowTooltip: true },
      { Field: "SoLuongDisplay", Title: "Số Lượng", Width: 50, Sortable: true },
      { Field: "SoNgayDung", Title: "Số Ngày Dùng", Width: 50, Sortable: true },
      { Field: "DungSangDisplay", Title: "Dùng Sáng", Width: 80, Sortable: true, Template: this.sangTemplate },
      { Field: "DungTruaDisplay", Title: "Dùng Trưa", Width: 80, Sortable: true, Template: this.truaTemplate },
      { Field: "DungChieuDisplay", Title: "Dùng Chiều", Width: 80, Sortable: true, Template: this.chieuTemplate },
      { Field: "DungToiDisplay", Title: "Dùng Tối", Width: 80, Sortable: true, Template: this.toiTemplate },
      { Field: "GhiChu", Title: "Cách dùng", Width: 200, Sortable: true , ShowTooltip: true},

    ];
  }

  updateTrangThaiToaThuoc(id: number, isDisabled: boolean) {
    let comfirm = "ngừng sử dụng";
    if (isDisabled) comfirm = "sử dụng";
    if (!isDisabled) comfirm = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "toa mẫu"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.apiService.post("ToaThuocMau/KichHoatToaThuocMau?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (!isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
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

    this.apiService.postExportExcel<string>("ToaThuocMau/ExportToaThuocMau", this.gridChild._gridQueryInfo).subscribe(res => {
      let dateTimeNow = new Date();
      CommonService.downLoadFile(res, "application/vnd.ms-excel", "ToaThuocMau" + dateTimeNow.getFullYear() + ".xlsx");
      this.dialog.closeAll();
    }, err => {
      this.notificationService.showError(err.Message);
      this.dialog.closeAll();
    })
  }
}
