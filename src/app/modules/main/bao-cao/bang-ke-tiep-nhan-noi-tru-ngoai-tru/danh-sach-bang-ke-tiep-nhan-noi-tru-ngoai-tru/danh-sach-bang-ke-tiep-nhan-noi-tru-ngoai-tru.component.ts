import { ChangeDetectorRef, Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
import { BangThongKeTiepNhanNoiTruVaNgoaiTruSearch } from '../bang-ke-tiep-nhan-noi-tru-ngoai-tru.model';
import { FormControl } from '@angular/forms';

declare var jQuery: any;
@Component({
  selector: 'app-danh-sach-bang-ke-tiep-nhan-noi-tru-ngoai-tru',
  templateUrl: './danh-sach-bang-ke-tiep-nhan-noi-tru-ngoai-tru.component.html',
  styleUrls: ['./danh-sach-bang-ke-tiep-nhan-noi-tru-ngoai-tru.component.scss']
})

export class DanhSachBangKeTiepNhanNoiTruVaNgoaiTruComponent implements OnInit {
  bangThongKeTiepNhanNoiTruVaNgoaiTruSearch: BangThongKeTiepNhanNoiTruVaNgoaiTruSearch = new BangThongKeTiepNhanNoiTruVaNgoaiTruSearch();

  documentType: DocumentType;
  icFilterList = icFilterList;
  icSearch = icSearch;
  searchCtrl = new FormControl();
  SearchString = "";

  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };

  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;
  skip = 0;
  take: number;
  pageSize = 50;
  height: number;
  gridView: GridDataResult;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";
  loadingPopup: any;
  defaultAdditionalSearchString:any;

  public aggregates: any[] = [
    { field: 'SoLan', aggregate: 'sum' },
  ];

  public groups: GroupDescriptor[] = [{
    field: 'Nhom',
    aggregates: this.aggregates
  }];

  @ViewChild('baoCaoThongHoatDongCLSKhoaGrid', { static: true }) baoCaoThongHoatDongCLSKhoaGrid: any;
  @ViewChild("soLanGroupHeaderColumnTemplate", { static: true }) soLanGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>
  @Input() heightToolbar: number = 140;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.documentType = DocumentType.BangThongKeTiepNhanNoiTruVaNgoaiTru;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;

    this.gridColumns = [
      { Field: "MaNB", Title: "Mã BN", Width: 200 },
      { Field: "MaTN", Title: "Mã TN", Width: 150 },
      { Field: "SoBenhAn", Title: "Số BA", Width: 100 },
      { Field: "ThoiGianTiepNhanStr", Title: "Thời gian tiếp nhận", Width: 200 },
      { Field: "HoTen", Title: "Họ tên", Width: 150 },
      { Field: "NamSinh", Title: "Năm sinh", Width: 150 },
      { Field: "GioiTinhStr", Title: "Giới tính", Width: 150 },
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 150 },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 150 },
      { Field: "KhoaDieuTri", Title: "Khoa điều trị", Width: 150 },
      { Field: "ThoiGianNhapVienStr", Title: "Thời gian nhập viện", Width: 200 },
      { Field: "ChanDoanVaoVien", Title: "Chẩn đoán vào viện", Width: 200 },
      { Field: "KhoaChuyenDen", Title: "Khoa chuyển đến", Width: 150 },
      { Field: "ThoiGianChuyenKhoaStr", Title: "Thời gian chuyển khoa", Width: 200 },
      { Field: "ChanDoanRaVien", Title: "Chẩn đoán ra viện", Width: 200 },
      { Field: "ThoiGianRaVienStr", Title: "Thời gian ra viện", Width: 200 },
      { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 200 },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 150 },
      { Field: "SoTheBHYT", Title: "Số BHYT", Width: 150 },
      { Field: "LoaiYeuCauTiepNhan", Title: "Loại", Width: 150 },
      { Field: "TrangThaiDieuTri", Title: "Trạng thái", Width: 150 },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TuNgay == null) {
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TuNgay = firstDay;
    }
    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.DenNgay == null) {
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.DenNgay = new Date();
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.DenNgay.setHours(23, 59, 59);
    }
  }

  xemBaoCao() {
    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TuNgay == null || this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.KhoaId === undefined
      || this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.KhoaId === null) {
      this.notificationService.showError("Khoa yêu cầu chọn");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.LoaiYeuCauTiepNhan === undefined ||
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.LoaiYeuCauTiepNhan === null) {
      this.notificationService.showError("Loại yêu cầu chọn");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TrangThaiDieuTri === undefined ||
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TrangThaiDieuTri === null) {
      this.notificationService.showError("Trạng thái yêu cầu chọn");
      return;
    }

    let searchText = this.SearchString != undefined ? this.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

    this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.SearchString = searchText;
    this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TimKiem = this.SearchString;

    this.showLoadingPopup();
    this.apiService.post<any>("BaoCao/GetDataBangThongKeTiepNhanNoiTruVaNgoaiTruForGrid",
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch).subscribe(resultData => {
        if (resultData !== undefined && resultData != null) {
          this.gridDataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };

          this.pageSize = this.gridDataSource.total;

          this.closeAllDialogs();
        }
      });
  }

  xuatBaoCao() {
    const self = this;
    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TuNgay == null || this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.KhoaId === undefined
      || this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.KhoaId === null) {
      this.notificationService.showError("Khoa yêu cầu chọn");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.LoaiYeuCauTiepNhan === undefined ||
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.LoaiYeuCauTiepNhan === null) {
      this.notificationService.showError("Loại yêu cầu chọn");
      return;
    }

    if (this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TrangThaiDieuTri === undefined ||
      this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TrangThaiDieuTri === null) {
      this.notificationService.showError("Trạng thái yêu cầu chọn");
      return;
    }

    let searchText = this.SearchString != undefined ? this.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

    this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.SearchString = searchText;
    this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch.TimKiem = this.SearchString;

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      self.apiService.postExportExcel<string>
        ('BaoCao/ExportBangThongKeTiepNhanNoiTruVaNgoaiTru', this.bangThongKeTiepNhanNoiTruVaNgoaiTruSearch)
        .subscribe(
          resultData => {
            self.dialog.closeAll();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'BangThongKeTiepNhanNoiTruVaNgoaiTru' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.dialog.closeAll();

          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
