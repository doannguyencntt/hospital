import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from '../../../../../../../../app/shared/component/grid/grid.component';
import { DocumentType } from '../../../../../../../../app/shared/enum/document-type.enum';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiService } from '../../../../../../../../app/core/services/api.service';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit'
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { FormControl } from '@angular/forms';
import { DichVuKyThuatChonFilePopupComponent } from '../dich-vu-ky-thuat-chon-file-popup/dich-vu-ky-thuat-chon-file-popup.component';
import { ThongTinDichVuKyThuatPopupComponent } from '../thong-tin-dich-vu-ky-thuat-popup/thong-tin-dich-vu-ky-thuat-popup.component';
import { Router } from "@angular/router";
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-dich-vu-ky-thuat-list',
  templateUrl: './dich-vu-ky-thuat-list.component.html',
  styleUrls: ['./dich-vu-ky-thuat-list.component.scss']
})

export class DichVuKyThuatListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  icMoreHoriz = icMoreHoriz;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icDelete = icDelete;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  searchString: string;
  searchCtrl = new FormControl;
  icEdit = icEdit;
  validationErrors: any[] = [];

  documentType: DocumentType = DocumentType.DanhMucDichVuKyThuat;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "DichVuKyThuat/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "DichVuKyThuat/GetTotalPageForGridChildAsync";

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
      { Field: "Ten", Title: "Tên", Width: 250, Sortable: true, ShowTooltip: true },
      { Field: "TenTiengAnh", Title: "Tên tiếng anh", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "Ma4350", Title: "Mã TT 43/50", Width: 100, Sortable: true, ShowTooltip: true },
      { Field: "MaGia", Title: "Mã giá", Width: 120, Sortable: true },
      { Field: "TenGia", Title: "Tên giá", Width: 150, Sortable: true, ShowTooltip: true },
      { Field: "TenNhomChiPhi", Title: "Nhóm chi phí", Width: 170, Sortable: true },
      { Field: "TenNhomDichVuKyThuat", Title: "Nhóm dịch vụ kỹ thuật", Width: 230, Sortable: true },
      { Field: "TenLoaiPhauThuatThuThuat", Title: "Loại phẫu thuật thủ thuật", Width: 160, Sortable: true, ShowTooltip: true },
      { Field: "MoTa", Title: "Mô tả", Width: 140, Sortable: true, ShowTooltip: true },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
    ];

    this.gridChildColumns = [
      { Field: "TenHangBenhVien", Title: "Hạng bệnh viện", Width: 150, Sortable: true },
      { Field: "GiaFormat", Title: "Giá", Width: 150, Sortable: true },
      { Field: "TuNgayFormat", Title: "Từ ngày", Width: 120, Sortable: true },
      { Field: "DenNgayFormat", Title: "Đến ngày", Width: 120, Sortable: true },
      { Field: "ThongTu", Title: "Thông tư", Width: 180, Sortable: true },
      { Field: "QuyetDinh", Title: "Quyết định", Width: 180, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 400, Sortable: true },
      { Field: "TenHieuLuc", Title: "Hiệu lực", Width: 150, Sortable: true }
    ];
  }


  updateDichVuKyThuat(id: number, isDisabled: boolean) {
    let comfrim = "ngừng sử dụng";
    if (isDisabled) comfrim = "sử dụng";
    if (!isDisabled) comfrim = "ngừng sử dụng";
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfrim, "kỹ thuật"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.apiService.post("DichVuKyThuat/KichHoatKyThuat?id=" + id).subscribe(
            () => {
              self.gridChild.search();
              if (isDisabled)
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng"]));
              else
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Ngừng sử dụng"]));
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

    this.apiService.postExportExcel<string>("DichVuKyThuat/ExportDichVuKyThuat", this.gridChild._gridQueryInfo).subscribe(res => {
      let dateTimeNow = new Date();
      CommonService.downLoadFile(res, "application/vnd.ms-excel", "DichVuKyThuat" + dateTimeNow.getFullYear() + ".xlsx");
      this.dialog.closeAll();
    }, err => {
      this.notificationService.showError(err.Message);
      this.dialog.closeAll();
    })
  }

  searchChanges(event: any) {
    if (event != undefined && (event == null || event == "")) {
      this.gridChild.searchString = null;
      this.timkiem();
    }
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.timkiem();
    }
  }

  timkiem() {
    this.gridChild.searchString = this.searchString;
    this.gridChild.search();
  }

  NhapDichVuKyThuatFileExcel() {
    this.dialog.open(DichVuKyThuatChonFilePopupComponent, {
      disableClose: false,
      width: '800px',
    }).afterClosed().subscribe(result => {
      if (result) {
        if (result.length > 0) {
          this.dialog.open(ThongTinDichVuKyThuatPopupComponent, {
            disableClose: false,
            width: '800px',
            data: { thongTin: result }
          }).afterClosed().subscribe(result => {
          });
        }
      }
    });
  }

  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat/chinh-sua/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoa(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("DichVuKyThuat/XoaDichVuKyThuat?id=" + id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              // this.timKiem();
              this.gridChild.search();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
}
