import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { FormControl } from '@angular/forms';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { KhamDoanTiepNhanDetailPopupComponent } from '../kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component';
import { KhamDoanTiepNhanTimKiem } from '../kham-doan-tiep-nhan.model';

@Component({
  selector: 'app-kham-doan-tiep-nhan-list',
  templateUrl: './kham-doan-tiep-nhan-list.component.html',
  styleUrls: ['./kham-doan-tiep-nhan-list.component.scss']
})
export class KhamDoanTiepNhanListComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  baseRoute: string = "/kham-doan/tiep-nhan";

  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";

  timKiemObj: KhamDoanTiepNhanTimKiem = new KhamDoanTiepNhanTimKiem();
  
  @ViewChild('tenHopDongTemplate', { static: true }) tenHopDongTemplate: TemplateRef<any>;
  @ViewChild('ngayBatDauKhamTemplate', { static: true }) ngayBatDauKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayKetThucKhamTemplate', { static: true }) ngayKetThucKhamTemplate: TemplateRef<any>;
  @ViewChild('soLuongBenhNhanTemplate', { static: true }) soLuongBenhNhanTemplate: TemplateRef<any>;
  @ViewChild('soLuongBenhNhanDaDenTemplate', { static: true }) soLuongBenhNhanDaDenTemplate: TemplateRef<any>;
  @ViewChild('gridChuaHoanThanhKham', { read: GridComponent, static: false }) gridChuaHoanThanhKham: GridComponent;
  @ViewChild('gridDaHoanThanhKham', { read: GridComponent, static: false }) gridDaHoanThanhKham: GridComponent;

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
    this.documentType = DocumentType.DuyetNhapKhoMau;

    // let hasLocalSearchString = false;
    // if (this.route.snapshot.queryParams.holdQuery != undefined) {
    //   let holdQuery = this.route.snapshot.queryParams.holdQuery;
    //   if (holdQuery != null && holdQuery) {
    //     var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachTiepNanKhamSucKhoe");

    //     this.gridChuaHoanThanhKham.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
    //     hasLocalSearchString = true;
    //   }
    // }
    // if(!hasLocalSearchString)
    // {
    //   this.gridChuaHoanThanhKham.additionalSearchString = null;
    //   LocalStorageHelper.removeItem("additionalSearchStringDanhSachTiepNanKhamSucKhoe");
    // }

    this.gridColumns = [
      { Field: "TenHopDong", Title: "Hợp đồng", Width: 100, Sortable: true, Template: this.tenHopDongTemplate},
      { Field: "TenCongTy", Title: "Tên công ty", Width: 180, Sortable: true},
      { Field: "SoLuongBenhNhan", Title: "SL NB ", Width: 60, Sortable: true, Template: this.soLuongBenhNhanTemplate},
      { Field: "SoLuongBenhNhanDaDen", Title: "SL NB Đã đến", Width: 60, Sortable: true, Template: this.soLuongBenhNhanDaDenTemplate},
      { Field: "DiaDiemKham", Title: "Địa điểm khám", Width: 120, Sortable: true},
      { Field: "NgayBatDauKham", Title: "Ngày BĐ khám", Width: 80, Sortable: true, Template: this.ngayBatDauKhamTemplate},
      { Field: "NgayKetThucKham", Title: "Ngày KT khám", Width: 80, Sortable: true, Template: this.ngayKetThucKhamTemplate}
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  // chức năng tìm kiếm cần cập nhật lại theo tab đang chọn
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
    this.gridChuaHoanThanhKham.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    var queryString = JSON.stringify(this.timKiemObj);
    this.gridChuaHoanThanhKham._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachTiepNanKhamSucKhoe",queryString);
    this.gridChuaHoanThanhKham.search();
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("KhamDoan/ExportDanhSachTiepNhanKhamSucKhoe", this.gridChuaHoanThanhKham._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "TiephHanKhamSucKhoe" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate([this.baseRoute + "/hop-dong/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
