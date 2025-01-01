import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icicclose from '@iconify/icons-ic/twotone-close';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icPrint from '@iconify/icons-ic/twotone-print';
import { BaseService } from 'src/app/core/services/base.service';

import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatMenuTrigger } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { TheBenhNhanBenhNhanPopupComponent } from '../the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-benh-nhan-list',
  templateUrl: './benh-nhan-list.component.html',
  styleUrls: ['./benh-nhan-list.component.scss']
})
export class BenhNhanListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridDataSource: any;
  mySelection: number[] = [];
  groups: GroupDescriptor[] = [{ field: 'MaSoThe' }];
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('acTionTemplate', { static: true }) acTionTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;
  @ViewChild('chiTietTemplate', { static: true }) chiTietTemplate: TemplateRef<any>;

  icAdd = icAdd;
  icFilterList = icFilterList;
  icicclose = icicclose;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icEdit = icEdit;
  icPrint = icPrint;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  searchString: string;
  hostingName: string;
  searchCtrl = new FormControl;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private baseService: BaseService,
  ) {
  }

  ngOnInit() {
    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    this.documentType = DocumentType.BenhNhan;
    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true, Template: this.chiTietTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 100, Sortable: true },
      { Field: "SoChungMinhThu", Title: "Chứng minh thư", Width: 150, Sortable: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 100, Sortable: true },
      { Field: "Email", Title: "Email", Width: 200, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 200, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Template: this.acTionTemplate }

    ];

  }
  extDetailExpand(event: any) {
    console.log(event)
  }

  clearSearch() {
    this.searchString = "";
    this.gridChild.search();
  }

  view(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/chinh-sua/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  add() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  edit(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/benh-nhan/benh-nhan/chinh-sua/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  delete(id: number) {
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.baseService.deleteById(id)
            .subscribe(
              () => {
                this.gridChild.search();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
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

  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
  }

  Timkiem() {
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    if (this.searchString != null) {
      QueryString = this.searchString;
    }
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }
  InTheBenhNhan(id: number) {
    this.dialog
      .open(TheBenhNhanBenhNhanPopupComponent, {
        disableClose: true,
        width: "480px",
        data: id,
      }).afterClosed();
  }

  XuatExcel() {

    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("BenhNhan/ExportBenhNhan", this.gridChild._gridQueryInfo).subscribe(
        resultData => {
          //console.log(resultData);
          let dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "BenhNhan" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        },
        err => {
          this.notificationService.showError(err.Message);
          this.dialog.closeAll();
        })
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }


    //window.location.href = environment.api_url + "/BenhNhan/ExportBenhNhan?queryInfo=" + this.gridChild._gridQueryInfo;
  }
}
