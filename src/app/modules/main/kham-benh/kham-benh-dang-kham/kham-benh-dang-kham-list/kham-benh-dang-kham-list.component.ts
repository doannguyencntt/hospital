import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icclose from '@iconify/icons-ic/twotone-close';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import { KhamBenhDangKhamTimKiem } from '../kham-benh-dang-kham.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-kham-benh-dang-kham-list',
  templateUrl: './kham-benh-dang-kham-list.component.html',
  styleUrls: ['./kham-benh-dang-kham-list.component.scss']
})
export class KhamBenhDangKhamListComponent implements OnInit {

  icSearch = icSearch;
  icclose = icclose;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  baseRoute: string = "/kham-benh-dang-kham";

  documentType: DocumentType;
  gridColumns: any[] = [];
  //searchString: string;
  searchCtrl = new FormControl();
  timKiemNangCaoObj: KhamBenhDangKhamTimKiem = new KhamBenhDangKhamTimKiem();
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;

  groups: GroupDescriptor[] = [{ field: 'Khoa', dir: 'asc', aggregates: [] }];
  @ViewChild('khoaGroupHeaderTemplate', { static: true }) khoaGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('slBenhNhanNhanTemplate', { static: true }) slBenhNhanNhanTemplate: TemplateRef<any>;
  @ViewChild('phongTemplate', { static: true }) phongTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true, read: GridComponent}) gridChild: GridComponent;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService, 
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenhDangKham;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if(holdQuery != null && holdQuery)
      {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKhamBenhDangKhamList");
        if (additionalSearchString != null) {
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      LocalStorageHelper.removeItem("additionalSearchStringKhamBenhDangKhamList");
    }
    
    this.gridColumns = [
      { Field: "Phong", Title: "Phòng", Width: 200, Sortable: true, Template: this.phongTemplate },
      { Field: "Khoa", Title: "Khoa", Hidden: true, Width: 200, Template: this.khoaGroupHeaderTemplate },

      { Field: "BacSiDangKham", Title: "Bác sĩ đang khám", MinWidth: 150, Sortable: true },
      { Field: "BenhNhanDangKham", Title: "Người bệnh đang khám", Width: 250, Sortable: true },
      { Field: "SoLuongBenhNhan", Title: "SL Người bệnh trong phòng", Width: 200, Sortable: true, Template: this.slBenhNhanNhanTemplate }
    ];
    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '' && !p.Hidden);
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
    // this.gridChild.search();
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridChild._additionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringKhamBenhDangKhamList",queryString);
    this.gridChild.search();
  }

  xemDanhSachBenhNhan(phongBenhVienId: number, tenPhongBenhVien: string)
  {
    if(phongBenhVienId != undefined && phongBenhVienId != null && phongBenhVienId != 0)
    {
      this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/" + phongBenhVienId]); //,{ queryParams: { holdQuery: true} }
    }
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
      this.apiService.postExportExcel<string>("KhamBenh/ExportKhamBenhDangKham", queryGridInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "KhamBenhDangKham" + dateTimeNow.getFullYear() + ".xlsx");
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
