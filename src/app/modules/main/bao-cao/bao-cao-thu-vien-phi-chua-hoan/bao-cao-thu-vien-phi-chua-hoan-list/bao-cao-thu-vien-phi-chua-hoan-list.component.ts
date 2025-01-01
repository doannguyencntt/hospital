import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoThuVienPhiChuaHoanTimKiemNangCao } from '../bao-cao-thu-vien-phi-chua-hoan.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-bao-cao-thu-vien-phi-chua-hoan-list',
  templateUrl: './bao-cao-thu-vien-phi-chua-hoan-list.component.html',
  styleUrls: ['./bao-cao-thu-vien-phi-chua-hoan-list.component.scss']
})
export class BaoCaoThuVienPhiChuaHoanListComponent implements OnInit {

  baoCaoSearch: BaoCaoThuVienPhiChuaHoanTimKiemNangCao = new BaoCaoThuVienPhiChuaHoanTimKiemNangCao();
  documentType: DocumentType;
  gridColumns: any[];

  icSearch = icSearch;
  searchCtrl = new FormControl();

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  tongTienTamUng: number = null;
  tongTienDaHoan: number = null;
  
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tenGroupTemplate', { static: true }) tenGroupTemplate: TemplateRef<any>;

  @ViewChild('tongCongTitleFooterTemplate', { static: true }) tongCongTitleFooterTemplate: TemplateRef<any>;
  @ViewChild('ngayThuTemplate', { static: true }) ngayThuTemplate: TemplateRef<any>;
  @ViewChild('soTienTamUngTemplate', { static: true }) soTienTamUngTemplate: TemplateRef<any>;
  @ViewChild('soTienDaHoanTemplate', { static: true }) soTienDaHoanTemplate: TemplateRef<any>;
  @ViewChild('soTienTamUngGroupFooterTemplate', { static: true }) soTienTamUngGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('soTienDaHoanGroupFooterTemplate', { static: true }) soTienDaHoanGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('soTienTamUngFooterTemplate', { static: true }) soTienTamUngFooterTemplate: TemplateRef<any>;
  @ViewChild('soTienDaHoanFooterTemplate', { static: true }) soTienDaHoanFooterTemplate: TemplateRef<any>;

  groups: GroupDescriptor[] = [{ field: 'TenNhomThuVienPhiChuaHoan', dir: 'asc', aggregates: [{ field: 'SoTienTamUng', aggregate: 'sum' }, { field: 'SoTienDaHoan', aggregate: 'sum' }] }];
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoThuVienPhiChuaHoan;

    this.gridColumns = [
      { Field: "TenNhomThuVienPhiChuaHoan", Hidden: true, HideFilter: true, Title: "", Width: 30, TemplateGroupHeader: this.tenGroupTemplate},
      // { Field: "STT", Title: "STT", Width: 30},
      { Field: "MaBN", Title: "Mã NB", Width: 90},
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 90},
      { Field: "HoTen", Title: "Họ tên", Width: 160, TemplateFooter: this.tongCongTitleFooterTemplate },
      { Field: "BienLai", Title: "Biên lai", Width: 100},
      { Field: "NgayThu", Title: "Ngày thu", Width: 80, Template: this.ngayThuTemplate},
      { Field: "SoTienTamUng", Title: "Số tiền tạm ứng", Width: 140, Template: this.soTienTamUngTemplate, TemplateGroupFooter: this.soTienTamUngGroupFooterTemplate, TemplateFooter: this.soTienTamUngFooterTemplate},
      { Field: "SoTienDaHoan", Title: "Số tiền đã hoàn", Width: 140, Template: this.soTienDaHoanTemplate, TemplateGroupFooter: this.soTienDaHoanGroupFooterTemplate, TemplateFooter: this.soTienDaHoanFooterTemplate}
    ];

    this.ganThoiGianTimKiemMacDinh();
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoThuVienPhiChuaHoan", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoThuVienPhiChuaHoan" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild._skip = 0;
    this.gridChild.search();
    this.getTongCong(this.gridChild._gridQueryInfo);
  }

  ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh: boolean = false) {
    if (xoaThoiGianMacDinh) {
      this.baoCaoSearch.TuNgayFormat = null;
      this.baoCaoSearch.DenNgayFormat = null;
    }
    else {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.minDateTuNgay.setDate(1);

      this.minDateDenNgay = new Date();
      this.minDateDenNgay.setHours(0, 0, 0, 0);

      if (this.baoCaoSearch.TuNgayFormat == null) {
        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
      }
      if (this.baoCaoSearch.DenNgayFormat == null) {
        this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
      }
    }
  }

  getTongCong(queryInfo) {
    this.apiService.post<any>("BaoCao/GetTongCongThuVienPhiChuaHoan", queryInfo).subscribe(resultData => {
      this.tongTienTamUng = resultData.TongTienTamUng;
      this.tongTienDaHoan = resultData.TongTienDaHoan;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
}
