import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCopy from '@iconify/icons-ic/outline-content-copy';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { KhamDoanGoiKhamSucKhoeTimKiem } from '../kham-doan-goi-kham-suc-khoe.model';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanGoiKhamSucKhoeDetailPopupComponent } from '../kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component';

@Component({
  selector: 'app-kham-doan-goi-kham-suc-khoe-list',
  templateUrl: './kham-doan-goi-kham-suc-khoe-list.component.html',
  styleUrls: ['./kham-doan-goi-kham-suc-khoe-list.component.scss']
})
export class KhamDoanGoiKhamSucKhoeListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icAdd = icAdd;
  icDelete = icDelete;
  icCopy = icCopy;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  baseRoute: string = "/kham-doan/goi-kham";

  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  timKiemObj: KhamDoanGoiKhamSucKhoeTimKiem = new KhamDoanGoiKhamSucKhoeTimKiem();

  @ViewChild('maGoiKhamTemplate', { static: true }) maGoiKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayHieuLucTemplate', { static: true }) ngayHieuLucTemplate: TemplateRef<any>;
  @ViewChild('ngayKetThucTemplate', { static: true }) ngayKetThucTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('grid', { static: true }) grid: GridComponent;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanGoiKhamSucKhoe;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKhamDoanDanhSachGoiKham");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          this.grid.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      this.grid.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringKhamDoanDanhSachGoiKham");
    }

    this.gridColumns = [
      { Field: "MaGoiKham", Title: "Mã gói khám", Width: 100, Sortable: true, Template: this.maGoiKhamTemplate },
      { Field: "TenGoiKham", Title: "Tên gói khám", Width: 160, Sortable: true },
      { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
      { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true },
      { Field: "NgayHieuLuc", Title: "Ngày hiệu lực", Width: 100, Sortable: true, Template: this.ngayHieuLucTemplate },
      { Field: "NgayKetThuc", Title: "Ngày kết thúc", Width: 100, Sortable: true, Template: this.ngayKetThucTemplate },
      { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  searchChanges(event) {
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemObj.SearchString = null;
    this.grid.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    var queryString = JSON.stringify(this.timKiemObj);
    this.grid._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringKhamDoanDanhSachGoiKham", queryString);
    this.grid.search();
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("KhamDoan/ExportDanhSachKhamSucKhoeDoan", this.grid._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DSKhamSucKhoeDoan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupChiTiet(id: number = null, isCopy: boolean = false) {
    let securityOperation = SecurityOperation.Add;
    let url = '/them';
    if (id != null) {
      securityOperation = SecurityOperation.Update;
      url = '/chi-tiet';
    }
    if (this.authService.hasPermission(this.documentType, securityOperation)) {
      // this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
      this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, IsCopy: isCopy } });
      // this.dialog.open(KhamDoanGoiKhamSucKhoeDetailPopupComponent, {
      //   disableClose: false,
      //   width: '1600px',
      //   data: { Id: id, IsCopy: isCopy }
      // }).afterClosed().subscribe(result => {
      //   this.grid.search();
      // });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoa(Id: number) {   
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.apiService.post<any>("KhamDoan/XoaGoiKhamSucKhoeDoan?id=" + Id).subscribe(() => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.grid.search();
          }, err => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          })
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
