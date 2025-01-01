import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GiuongBenhSearch } from '../danh-muc-giuong-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import icAdd from '@iconify/icons-ic/twotone-add';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: 'app-danh-muc-giuong-benh-list',
  templateUrl: './danh-muc-giuong-benh-list.component.html',
  styleUrls: ['./danh-muc-giuong-benh-list.component.scss']
})
export class DanhMucGiuongBenhListComponent implements OnInit {

  documentType: DocumentType;
  gridColumns: any[] = [];

  icSearch = icSearch;
  icAdd = icAdd;
  icFileExcel = icFileExcel;

  giuongBenhSearch: GiuongBenhSearch = new GiuongBenhSearch();
  searchString: string;

  searchCtrl = new FormControl;

  icFilterList = icFilterList;

  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('coHieuLucTemplate', { static: true }) coHieuLucTemplate: TemplateRef<any>;
  @ViewChild('laGiuongNoiTemplate', { static: true }) laGiuongNoiTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog,
    private notificationService: NotificationService, private apiService: ApiService) { }

  ngOnInit() {

    this.documentType = DocumentType.DanhMucGiuongBenh;
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 60, Sortable: true },
      { Field: "Ten", Title: "Tên", Width: 200, Sortable: true, LinkDetail: true },

      { Field: "Khoa", Title: "Khoa", Width: 150, Sortable: true },
      { Field: "Phong", Title: "Phòng", Width: 150, Sortable: true },
      { Field: "MoTa", Title: "Mô tả", MinWidth: 200, Sortable: true },
      { Field: "LaGiuongNoi", Title: "Giường nôi", Width: 150, Sortable: true, Template: this.laGiuongNoiTemplate },
      { Field: "CoHieuLuc", Title: "Có Hiệu Lực", Width: 150, Sortable: true, Template: this.coHieuLucTemplate },
    ];

  }

  TimkiemNangCao() {

    var queryString = JSON.stringify(this.giuongBenhSearch);

    this.gridChild.searchString = this.searchString;
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  onKey(event) {
    //console.log("onKey = ", this.searchString);
    if (event.keyCode === 13) {
      this.TimkiemNangCao();
    }
  }
  searchChanges() {
    //console.log("model = ", this.searchString);
    if (this.searchString == null || this.searchString == undefined || this.searchString == "") {
      this.TimkiemNangCao();
    }
  }

  themMoi() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/danh-muc/nhom-giuong-benh/danh-muc-giuong-benh/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  phongChange(event) {
    //console.log("phongChange = ", event);
    this.giuongBenhSearch.PhongId = event;
    this.TimkiemNangCao();

  }

  khoaChange($event) {
    this.giuongBenhSearch.KhoaId = $event;
    if ($event == null) {
      this.TimkiemNangCao();
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
      this.apiService.postExportExcel<string>("GiuongBenh/ExportGiuongBenh", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "GiuongBenh" + dateTimeNow.getFullYear() + ".xlsx");
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
