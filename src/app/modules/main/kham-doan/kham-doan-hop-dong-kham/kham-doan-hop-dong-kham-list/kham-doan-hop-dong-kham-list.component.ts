import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPersonAdd from '@iconify/icons-ic/person-add';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { KhamDoanHopDongKhamTimKiem } from '../kham-doan-hop-dong-kham.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanHopDongKhamDetailPopupComponent } from '../kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component';
import { KhamDoanHopDongKhamListNhanVienPopupComponent } from '../kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-kham-doan-hop-dong-kham-list',
  templateUrl: './kham-doan-hop-dong-kham-list.component.html',
  styleUrls: ['./kham-doan-hop-dong-kham-list.component.scss']
})
export class KhamDoanHopDongKhamListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icAdd = icAdd;
  icDelete = icDelete;
  icPersonAdd = icPersonAdd;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  baseRoute: string = "/kham-doan/hop-dong-kham";
  dataSachDiaDiemKham: any = { data: [], total: 0 }
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  timKiemObj: KhamDoanHopDongKhamTimKiem = new KhamDoanHopDongKhamTimKiem();
  sortHopDongKham: SortDescriptor[] =[{field: "TrangThai", dir: "asc"},{field: "Id", dir: "desc"}];

  @ViewChild('maHopDongTemplate', { static: true }) maHopDongTemplate: TemplateRef<any>;
  @ViewChild('ngayHopDongTemplate', { static: true }) ngayHopDongTemplate: TemplateRef<any>;
  @ViewChild('ngayKhamTemplate', { static: true }) ngayKhamTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
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
    this.documentType = DocumentType.KhamDoanHopDongKham;
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKhamDoanDanhSachHopDongKham");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      this.gridChild.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringKhamDoanDanhSachHopDongKham");
    }

    this.gridColumns = [
      { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true, Template: this.maHopDongTemplate },
      { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
      { Field: "NgayHopDong", Title: "Ngày hợp đồng", Width: 100, Sortable: true, Template: this.ngayHopDongTemplate },
      { Field: "DiaChiKham", Title: "Địa điểm khám", Width: 120, Sortable: true },
      { Field: "LoaiHopDongDisplay", Title: "Loại hợp đồng", Width: 120, Sortable: true },
      { Field: "NgayKham", Title: "Ngày khám", Width: 100, Sortable: true, Template: this.ngayKhamTemplate },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionTemplate }
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
    this.gridChild.searchString = null;
    
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    var queryString = JSON.stringify(this.timKiemObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringKhamDoanDanhSachHopDongKham", queryString);
    this.gridChild.search();
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("KhamDoan/ExportDanhSachHopDongKham", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "HopDongKham" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupChiTiet(id: number = null) {
    let securityOperation = SecurityOperation.Add;
    let url = '/them';
    if (id != null) {
      securityOperation = SecurityOperation.Update;
      url = '/chi-tiet/';
    }
    if (this.authService.hasPermission(this.documentType, securityOperation)) {
      this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupNhanVien(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(KhamDoanHopDongKhamListNhanVienPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: { Id: id }
      }).afterClosed().subscribe(result => {
        this.gridChild.search();
      });
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
          this.apiService.delete<any>("KhamDoan/XuLyXoaHopDongKham?id=" + Id).subscribe(res => {
            if(res.Item1){
              this.notificationService.showError(res.Item2);
            }else{
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              this.gridChild.search();
            }           
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
