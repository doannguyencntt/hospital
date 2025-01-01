import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import icDone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-icd-list',
  templateUrl: './icd-list.component.html',
  styleUrls: ['./icd-list.component.scss']
})
export class IcdListComponent implements OnInit {
  documentType: DocumentType;
  expression: boolean = false;
  icDone = icDone;
  icClose = icClose;
  gridColumns: any[] = [];
  urlGetDataGrid = "QuanLyICD/GetDataForGridAsync";
  urlGetTotalPageGrid = "QuanLyICD/GetTotalPageForGridAsync";
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;

  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService) { }


  ngOnInit() {
    this.documentType = DocumentType.QuanLyICD;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 80, Sortable: true, LinkDetail: true },
      { Field: "MaChiTiet", Title: "Mã chi tiết", Width: 80, Sortable: true },
      { Field: "TenTiengViet", Title: "Tên Tiếng Việt", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "TenTiengAnh", Title: "Tên Tiếng Anh", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "TenLoaiICD", Title: "Tên Loại ICD", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "TenKhoa", Title: "Tên Khoa", Width: 120, Sortable: true },
      { Field: "GioiTinh", Title: "Giới Tính", Width: 70, Sortable: true, Template: this.gioiTinhTemplate },
      { Field: "ManTinh", Title: "Mãn Tính", Width: 90, Sortable: true },
      { Field: "BenhThuongGap", Title: "Bệnh Thường Gặp", Width: 90, Sortable: true },
      { Field: "BenhNam", Title: "Bệnh Năm", Width: 90, Sortable: true },
      { Field: "KhongBaoHiem", Title: "Không Bảo Hiểm", Width: 90, Sortable: true },
      { Field: "NgoaiDinhSuat", Title: "Ngoài Định Suất", Width: 90, Sortable: true },
      { Field: "ChuanDoanLamSan", Title: "Chẩn đoán lâm sàn", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "ThongTinThamKhaoChoBenhNhan", Title: "Thông tin tham khảo cho người bệnh", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "TenGoiKhac", Title: "Tên Gọi khác", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "LoiDanCuaBacSi", Title: "Lời Dặn Bác Sĩ", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "MoTa", Title: "Mô Tả", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "HieuLuc", Title: "Hiệu lực", Width: 130, Sortable: true, Template: this.trangThaiTemplate },


    ];
  }

  updateICD(id: number, hieuLuc: boolean) {
    let comfirm = "ngừng sử dụng";
    if (!hieuLuc) comfirm = "sử dụng";
    if (hieuLuc) comfirm = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "ICD"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("QuanLyICD/KichHoatHieuLuc?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (hieuLuc)
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

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("QuanLyICD/ExportICD", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "QuanLyICD" + dateTimeNow.getFullYear() + ".xlsx");
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
