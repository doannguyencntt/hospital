

import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { MatDialog } from "@angular/material";
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, State, process } from '@progress/kendo-data-query';
import { BaoCaoBenhNhanKhamNgoaiTruAnVo, SearchBaoCao } from '../../bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.model';
import { BaoCaoBsDsKhamNgoaiTruPopupComponent } from '../../bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component';
import { BaoCaoBenhNhanKhamNgoaiTruSearch, InBaoCaoBenhNhanKhamNgoaiTru } from '../bao-cao-benh-nhan-kham-ngoai-tru.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-bao-cao-benh-nhan-kham-ngoai-tru-list',
  templateUrl: './bao-cao-benh-nhan-kham-ngoai-tru-list.component.html',
  styleUrls: ['./bao-cao-benh-nhan-kham-ngoai-tru-list.component.scss']
})
export class BaoCaoBenhNhanKhamNgoaiTruListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  baoCaoSearch: BaoCaoBenhNhanKhamNgoaiTruSearch = new BaoCaoBenhNhanKhamNgoaiTruSearch();
  inBaoCaoBenhNhanKhamNgoaiTru: InBaoCaoBenhNhanKhamNgoaiTru = new InBaoCaoBenhNhanKhamNgoaiTru();
  public gridView = {
    data: [],
    total: 0,
  };
  public groups: GroupDescriptor[] = [{
    field: 'PhongKham', dir: null, aggregates: [
      // { field: 'PhongKhamId', aggregate: 'min' }
    ]
  }];
  ishowView: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;
  popupLoadingData: any;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tenPhongKhamGroupTemplate', { static: true }) tenPhongKhamGroupTemplate: TemplateRef<any>;
  @ViewChild('phongKhamGroupFooterTemplate', { static: true }) phongKhamGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thoiGianKhamTemplate', { static: true }) thoiGianKhamTemplate: TemplateRef<any>;
  @ViewChild('ngaySinhTemplate', { static: true }) ngaySinhTemplate: TemplateRef<any>;
  @ViewChild('suDungGoiTemplate', { static: true }) suDungGoiTemplate: TemplateRef<any>;
  @ViewChild('ngoaiGioHanhChinhTemplate', { static: true }) ngoaiGioHanhChinhTemplate: TemplateRef<any>;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoLuuTruHoSoBenhAn;
    this.gridColumns = [
      { Field: "ThoiGianKham", Title: "Thời gian khám", Width: 120, Template: this.thoiGianKhamTemplate },
      { Field: "CongTyKhamSucKhoe", Title: "Đoàn KSK", Width: 100 },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100 },
      { Field: "HoTen", Title: "Họ tên NB", Width: 160 },
      { Field: "NgaySinh", Title: "Ngày sinh", Width: 100, Template: this.ngaySinhTemplate },
      { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
      { Field: "TheBHYT", Title: "Thẻ BHYT", Width: 100 },
      { Field: "PhieuKham", Title: "Phiếu khám", Width: 120 },
      { Field: "PhongKham", Title: "Phòng khám", Width: 100,    TemplateGroupHeader: this.tenPhongKhamGroupTemplate, TemplateGroupFooter: this.phongKhamGroupFooterTemplate },
      { Field: "ICD", Title: "ICD", MinWidth: 100 },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100 },
      { Field: "BacSiKham", Title: "BS Khám", Width: 120 },
      { Field: "BacSiKetLuan", Title: "BS kết luận", Width: 120 },
      { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100 },
      { Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 100 },
      { Field: "SuDungGoi", Title: "NB gói", Width: 80, Template: this.suDungGoiTemplate },
      { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 100, Template: this.ngoaiGioHanhChinhTemplate }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }
  }
  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    let khoaId = 0;
    if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
      khoaId = this.baoCaoSearch.KhoaId;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = khoaId.toString() + ";" + tuNgay + ";" + denNgay;
    this.showPopupLoadingData();
    this.ishowView = false;
    this.apiService.post<any>("BaoCao/GetBaoCaoBenhNhanKhamNgoaiTruForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {

        //this.gridView = process(resultData.Data, { group: this.groups });

        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          this.ishowView = true;
        } else {
          this.ishowView = false;
        }

        var self = this;
        setTimeout(function () {
          self.gridView = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };
        }, 50);
      }

      var self = this;
      setTimeout(function () {
        self.closePopupLoadingData();
      }, 50);
    },
    (err: ApiError) => {
        if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
    });
  }  
  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      let khoaId = 0;
      if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
        khoaId = this.baoCaoSearch.KhoaId;

      }
      let phongId = 0;
      if (this.baoCaoSearch.PhongId != undefined && this.baoCaoSearch.PhongId != null) {
        phongId = this.baoCaoSearch.KhoaId;

      }
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = khoaId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoBenhNhanKhamNgoaiTru.HostingName;
      this.showPopupLoadingData();
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBenhNhanKhamNgoaiTru", this.baoCaoSearch)
        .subscribe(res => {
          this.closePopupLoadingData();
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBenhNhanKhamNgoaiTru" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
            this.closePopupLoadingData();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  // InbaoCao() {
  //   if (this.showPrintExport == true) {
  //     let baoCaoBenhNhanKhamNgoaiTruAnVo = new BaoCaoBenhNhanKhamNgoaiTruAnVo();
  //     baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
  //     baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
  //     baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
  //     baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
  //     baoCaoBenhNhanKhamNgoaiTruAnVo.hosting = window.location.protocol + "//" + window.location.host;
  //     this.apiService.post<any>("BaoCao/InBaoCaoBenhNhanKhamNgoaiTru", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(
  //       (result) => {
  //         this.dialog.open(BaoCaoBsDsKhamNgoaiTruPopupComponent, {
  //           disableClose: true,
  //           width: '1000px',
  //           data: { Model: result }
  //         }).afterClosed().subscribe(() => {
  //         });
  //       },
  //       (err: ApiError) => {
  //         this.validationErrors = err.ValidationErrors;
  //         if (err.Message != "Validation Failed") {
  //           this.notificationService.showError(err.Message);
  //         }
  //       });
  //   }
  // }

  showPopupLoadingData() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
}