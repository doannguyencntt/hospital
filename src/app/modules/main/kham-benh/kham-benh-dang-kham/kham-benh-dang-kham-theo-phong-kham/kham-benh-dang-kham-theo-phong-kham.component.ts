import { Location } from '@angular/common';
import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TrangThaiYeuCauKhamBenhObjEnum } from '../../kham-benh.model';
import { KhamBenhDangKhamTimKiem } from '../kham-benh-dang-kham.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-kham-benh-dang-kham-theo-phong-kham',
  templateUrl: './kham-benh-dang-kham-theo-phong-kham.component.html',
  styleUrls: ['./kham-benh-dang-kham-theo-phong-kham.component.scss']
})
export class KhamBenhDangKhamTheoPhongKhamComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  phongBenhVienId: number;

  documentType: DocumentType;
  gridColumns: any[] = [];
  trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
  sort: SortDescriptor[] = [{
    field: 'TrangThai',
    dir: 'asc'
}];
  //searchString: string;
  searchCtrl = new FormControl();
  timKiemNangCaoObj: KhamBenhDangKhamTimKiem = new KhamBenhDangKhamTimKiem();
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  baseRoute: string = "/kham-benh-dang-kham";
  //sttTemplate
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemTiepNhanTemplate', { static: true }) thoiDiemTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService) { 
    }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenhDangKham;
    this.phongBenhVienId = this.route.snapshot.params.id;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKhamBenhDangKhamTheoPhongList");
        if (additionalSearchString != null) {
           //let searchTempObj: KhamBenhDangKhamTimKiem = JSON.parse(additionalSearchString);
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          if(this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
            //searchTempObj.TuNgayDenNgay.startDate = new Date(searchTempObj.TuNgayDenNgay.startDate);
          }
          // else
          // {
          //   this.timKiemNangCaoObj.TuNgayDenNgay.startDate = null;
          //   searchTempObj.TuNgayDenNgay.startDate = null;
          //   console.log('this.timKiemNangCaoObj1', this.timKiemNangCaoObj.TuNgayDenNgay);
          //   console.log('searchTempObj.TuNgayDenNgay.startDate', searchTempObj.TuNgayDenNgay);
          // }
          if(this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
          }
          // console.log('searchTempObj2', searchTempObj);
          // this.timKiemNangCaoObj = searchTempObj;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      this.gridChild.additionalSearchString = this.phongBenhVienId + "";
      LocalStorageHelper.removeItem("additionalSearchStringKhamBenhDangKhamTheoPhongList");
    }

    if (this.phongBenhVienId !== undefined && this.phongBenhVienId !== null) {
      this.timKiemNangCaoObj.PhongBenhVienId = this.phongBenhVienId;
    }

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 90, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 90, Sortable: true},

      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true, Template: this.hoTenTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 80, Sortable: true},
      { Field: "ThoiDiemTiepNhan", Title: "Thời điểm tiếp nhận", Width: 100, Sortable: true, Template: this.thoiDiemTiepNhanTemplate},
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate}
    ];
    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  searchChanges(event){
    if(event != undefined && (event == null || event == ""))
    {
      this.gridChild.searchString = null;
      //this.gridChild.search();
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      //this.gridChild.search();
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.gridChild.searchString = null;
    //this.gridChild.search();
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + "/danh-sach-dang-kham/" + this.phongBenhVienId + '?holdQuery=true');
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringKhamBenhDangKhamTheoPhongList",queryString);
    this.gridChild.search();
  }

  batDauKham(phongBenhVienHangDoiId: number){
    if (this.authService.hasPermission(DocumentType.KhamBenhDangKham, SecurityOperation.Update)) {
      this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/benh-nhan-dang-kham/" + phongBenhVienHangDoiId]);//,{ queryParams: { holdQuery: phongBenhVienId} }
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai(){
    this.router.navigate([this.baseRoute], { queryParams: { holdQuery: true}});
  }

  exportExcel(){
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      let queryGridInfo = this.gridChild._gridQueryInfo;
      this.apiService.postExportExcel<string>("KhamBenh/ExportKhamBenhDangKhamTheoPhongKham", queryGridInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "KhamBenhDangKhamTheoPhongKham" + dateTimeNow.getFullYear() + ".xlsx");
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
