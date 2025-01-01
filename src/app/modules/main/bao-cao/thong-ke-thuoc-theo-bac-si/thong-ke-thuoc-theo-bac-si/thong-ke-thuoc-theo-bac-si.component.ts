import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridDataResult } from '@progress/kendo-angular-grid';
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
import { BaoCaoThongKeThuocTheoBacSiSearch } from '../thong-ke-thuoc-theo-bac-si.model';

@Component({
  selector: 'app-thong-ke-thuoc-theo-bac-si',
  templateUrl: './thong-ke-thuoc-theo-bac-si.component.html',
  styleUrls: ['./thong-ke-thuoc-theo-bac-si.component.scss']
})

export class ThongKeThuocTheoBacSiComponent implements OnInit {
  baoCaoThongKeThuocTheoBacSiSearch: BaoCaoThongKeThuocTheoBacSiSearch = new BaoCaoThongKeThuocTheoBacSiSearch();

  documentType: DocumentType;
  icFilterList = icFilterList;
  icSearch = icSearch;


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

  public aggregates: any[] = [
    { field: 'ThanhTien', aggregate: 'sum' },    
    { field: 'SoLuong', aggregate: 'sum' },
    { field: 'DonViTinh', aggregate: 'count' }
  ];

  public groups: GroupDescriptor[] = [{
    field: 'Loai',
    aggregates: this.aggregates
  }];

  @ViewChild('baoCaoThongHoatDongCLSKhoaGrid', { static: true }) baoCaoThongHoatDongCLSKhoaGrid: any;

  @ViewChild("soLanGroupHeaderColumnTemplate", { static: true }) soLanGroupHeaderColumnTemplate: TemplateRef<any>;


  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>

  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('tongCongGroupFooterTemplate', { static: true }) tongCongGroupFooterTemplate: TemplateRef<any>;

  @ViewChild("soLuongTemplate", { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('soLuongFooterTemplate', { static: true }) soLuongFooterTemplate: TemplateRef<any>;
  @ViewChild('soLuongGroupFooterTemplate', { static: true }) soLuongGroupFooterTemplate: TemplateRef<any>;

  @ViewChild("thanhTienTemplate", { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;

  @Input() heightToolbar: number = 140;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.ThongKeThuocTheoBacSi;
    this.gridColumns = [
      { Field: "Loai", Title: "Loại", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      {
        Field: "TenThuocHamLuong", Title: "Tên thuốc - Hàm lượng", Width: 150,
        TemplateFooter: this.tongCongFooterTemplate, TemplateGroupFooter: this.tongCongGroupFooterTemplate
      },
      { Field: "DonViTinh", Title: "Đơn vị", Width: 100 },
      {
        Field: "SoLuong", Title: "Số lượng", Width: 200, Template: this.soLuongTemplate,
        TemplateFooter: this.soLuongFooterTemplate, TemplateGroupFooter: this.soLuongGroupFooterTemplate
      },
      {
        Field: "ThanhTien", Title: "Thành tiền", Width: 150, Template: this.thanhTienTemplate,
        TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate
      }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null) {
      this.baoCaoThongKeThuocTheoBacSiSearch.TuNgay = firstDay;
    }

    if (this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
      this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay = new Date();
      this.baoCaoThongKeThuocTheoBacSiSearch.DenNgay.setHours(23, 59, 59);
    }

  }

  xemBaoCao() {
    const self = this;
    if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
      self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
      self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
      || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
      self.notificationService.showError("Bác sĩ yêu cầu chọn");
      return;
    }

    self.showLoadingPopup();
    self.apiService.post<any>("BaoCao/GetDataThongKeThuocTheoBacSiForGrid",
      self.baoCaoThongKeThuocTheoBacSiSearch).subscribe(resultData => {
        if (resultData !== undefined && resultData != null) {
          self.gridDataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };
          self.closeAllDialogs();
        }
      });
  }

  xuatBaoCao() {
    const self = this;

    if (self.baoCaoThongKeThuocTheoBacSiSearch.TuNgay == null ||
      self.baoCaoThongKeThuocTheoBacSiSearch.DenNgay == null) {
      self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === undefined
      || self.baoCaoThongKeThuocTheoBacSiSearch.BacSiId === null) {
      self.notificationService.showError("Bác sĩ yêu cầu chọn");
      return;
    }

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      self.apiService.postExportExcel<string>
        ('BaoCao/ExportThongKeThuocTheoBacSi', this.baoCaoThongKeThuocTheoBacSiSearch)
        .subscribe(
          resultData => {
            self.dialog.closeAll();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'ThongKeThuocTheoBacSi' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.dialog.closeAll();

          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  public totalGroup(dataGroups: any) {
    console.log(dataGroups);
  };

  public total(field: any) {
    switch (field) {
      case 'SoLuong':
        return this.XuLyTotalForField('SoLuong');
      case 'ThanhTien':
        return this.XuLyTotalForField('ThanhTien');
      case 'TongCong':
        return this.gridDataSource.data.length;
    }
  };

  XuLyTotalForField(field: any) {
    let sum = 0;
    if (this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
      this.gridDataSource.data.forEach(element => {
        switch (field) {
          case 'SoLuong':
            sum = sum + element.SoLuong;
            break;
          case 'ThanhTien':
            sum = sum + element.ThanhTien;
            break;
        }
      });
      return sum;
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
