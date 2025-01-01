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
import { KhamDoanLSTiepNhanTimKiem,SearchDateRange } from '../kham-doan-ls-tiep-nhan-kham-suc-khoe.model';

@Component({
  selector: 'app-kham-doan-ls-tiep-nhan-kham-suc-khoe-list',
  templateUrl: './kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.html',
  styleUrls: ['./kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component.scss']
})
export class KhamDoanLsTiepNhanKhamSucKhoeListComponent implements OnInit {
 
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  searchCtrl = new FormControl();
  documentType: DocumentType;
  baseRoute: string = "/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe";

  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";

  timKiemObj: KhamDoanLSTiepNhanTimKiem = new KhamDoanLSTiepNhanTimKiem();
  searchDateRange = new SearchDateRange();
  @ViewChild('tenHopDongTemplate', { static: true }) tenHopDongTemplate: TemplateRef<any>;
  @ViewChild('ngayBatDauKhamTemplate', { static: true }) ngayBatDauKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayKetThucKhamTemplate', { static: true }) ngayKetThucKhamTemplate: TemplateRef<any>;
  @ViewChild('soLuongBenhNhanTemplate', { static: true }) soLuongBenhNhanTemplate: TemplateRef<any>;
  @ViewChild('soLuongBenhNhanDaDenTemplate', { static: true }) soLuongBenhNhanDaDenTemplate: TemplateRef<any>;
  @ViewChild('gridDaHoanThanhKham', { read: GridComponent, static: true }) gridDaHoanThanhKham: GridComponent;

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
    this.documentType = DocumentType.KhamDoanLichSuTiepNhanKhamSucKhoe;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery && this.gridDaHoanThanhKham != undefined && this.gridDaHoanThanhKham != null) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe");

        this.gridDaHoanThanhKham.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
        if(additionalSearchString != undefined && additionalSearchString != null && additionalSearchString != "")
        {
          let stringObjBack :any;
          stringObjBack = JSON.parse(additionalSearchString) ;
          this.timKiemObj = stringObjBack;
        }
        hasLocalSearchString = true;
      }
    }
    if(!hasLocalSearchString && this.gridDaHoanThanhKham != undefined && this.gridDaHoanThanhKham != null)
    {
      this.gridDaHoanThanhKham.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe");
    }

    this.gridColumns = [
      { Field: "TenHopDong", Title: "Hợp đồng", Width: 100, Sortable: true, Template: this.tenHopDongTemplate},
      { Field: "TenCongTy", Title: "Tên công ty", Width: 180, Sortable: true},
      { Field: "SoLuongBenhNhan", Title: "SL NB ", Width: 60, Sortable: true, Template: this.soLuongBenhNhanTemplate},
      { Field: "SoBenhNhanDaDen", Title: "SL NB Đã đến", Width: 60, Sortable: true, Template: this.soLuongBenhNhanDaDenTemplate},
      { Field: "NgayBatDauKham", Title: "Ngày BĐ khám", Width: 80, Sortable: true, Template: this.ngayBatDauKhamTemplate},
      { Field: "NgayKetThucKham", Title: "Ngày KT khám", Width: 80, Sortable: true, Template: this.ngayKetThucKhamTemplate}
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }
  changeDateSearch(event){
    if(event != undefined && event != null && event != "")
    {
      this.timKiemObj.FromToDate = event;
      if (this.timKiemObj.FromToDate != null && this.timKiemObj.FromToDate.startDate != null) {
        this.timKiemObj.NgayBatDau = CommonService.formatDateTime(this.timKiemObj.FromToDate.startDate, 'mm/dd/yyyy');
      } else {
        this.timKiemObj.NgayBatDau = null;
      }
      if (this.timKiemObj.FromToDate != null && this.timKiemObj.FromToDate.endDate != null) {
        this.timKiemObj.NgayKetThuc = CommonService.formatDateTime(this.timKiemObj.FromToDate.endDate, 'mm/dd/yyyy');
      } else {
        this.timKiemObj.NgayKetThuc = null;
      }
      this.timKiemNangCao();
    }
    else{
      this.timKiemObj.FromToDate = null;
      if(this.timKiemObj.FromToDate = null)
      {
        this.timKiemObj.NgayBatDau = null;
        this.timKiemObj.NgayKetThuc = null;
      }
      this.timKiemNangCao();
    }
     
  }
  // chức năng tìm kiếm cần cập nhật lại theo tab đang chọn
  searchChanges(event) {
    this.timKiemObj.SearchString = event;
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
      this.timKiemNangCao();
    }
  }
  thoiDiemTNChange() {
    // this.timKiemNangCao();
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemObj.SearchString = null;
    this.gridDaHoanThanhKham.searchString = null;
    this.timKiemNangCao();
  }
  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    var queryString = JSON.stringify(this.timKiemObj);
    this.gridDaHoanThanhKham._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachLichSuTiepNanKhamSucKhoe",queryString);
    this.gridDaHoanThanhKham.search();
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("KhamDoan/ExportLichSuTiepNhanKhamSucKhoeDoan", this.gridDaHoanThanhKham._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "LichSuTiepNhanKhamSucKhoeDoan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  xemChiTiet(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate([this.baseRoute + "/hop-dong/" + dataItem.HopDongId +"/" + dataItem.CongTyId]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
