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
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { thongKeBSKeDonTheoThuocSearch } from '../thong-ke-bac-si-ke-don-theo-thuoc.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-thong-ke-bac-si-ke-don-theo-thuoc',
  templateUrl: './thong-ke-bac-si-ke-don-theo-thuoc.component.html',
  styleUrls: ['./thong-ke-bac-si-ke-don-theo-thuoc.component.scss']
})

export class ThongKeBacSiKeDonTheoThuocComponent implements OnInit {
  baoCaoSearch: thongKeBSKeDonTheoThuocSearch = new thongKeBSKeDonTheoThuocSearch();

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

  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";
  loadingPopup: any;

  @ViewChild('baoCaoThongHoatDongCLSKhoaGrid', { static: true }) baoCaoThongHoatDongCLSKhoaGrid: any;
  @ViewChild("soLanGroupHeaderColumnTemplate", { static: true }) soLanGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>

  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;

  @ViewChild("soLuongDonTemplate", { static: true }) soLuongDonTemplate: TemplateRef<any>;
  @ViewChild('soLuongDonFooterTemplate', { static: true }) soLuongDonFooterTemplate: TemplateRef<any>;

  @ViewChild("soLuongDaKeTemplate", { static: true }) soLuongDaKeTemplate: TemplateRef<any>;
  @ViewChild('soLuongDaKeFooterTemplate', { static: true }) soLuongDaKeFooterTemplate: TemplateRef<any>;

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.ThongKeBSKeDonTheoThuoc;

    this.gridColumns = [
      {
        Field: "TenBacSi", Title: "Tên bác sĩ", Width: 150,
        TemplateFooter: this.tongCongFooterTemplate,
      },
      { Field: "KhoaPhongBacSi", Title: "Khoa", Width: 100 },
      {
        Field: "SoLuongDon", Title: "Số lượng đơn", Width: 200, Template: this.soLuongDonTemplate,
        TemplateFooter: this.soLuongDonFooterTemplate,
      },
      {
        Field: "SoLuongDaKe", Title: "Số lượng đã kê", Width: 150, Template: this.soLuongDaKeTemplate,
        TemplateFooter: this.soLuongDaKeFooterTemplate
      }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = firstDay;
    }

    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
      this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
    }

  }

  xemBaoCao() {
    const self = this;
    if (self.baoCaoSearch.TuNgay == null ||
      self.baoCaoSearch.DenNgay == null) {
      self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (self.baoCaoSearch.BacSiId === undefined
      || self.baoCaoSearch.BacSiId === null) {
      self.notificationService.showError("Bác sĩ yêu cầu chọn");
      return;
    }

    self.showLoadingPopup();
    self.apiService.post<any>("BaoCao/GetDataThongKeBacSiKeDonTheoThuocForGrid",
      self.baoCaoSearch).subscribe(resultData => {
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

    if (self.baoCaoSearch.TuNgay == null ||
      self.baoCaoSearch.DenNgay == null) {
      self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (self.baoCaoSearch.BacSiId === undefined
      || self.baoCaoSearch.BacSiId === null) {
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
        ('BaoCao/ExportThongKeBacSiKeDonTheoThuoc', this.baoCaoSearch)
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
      case 'SoLuongDon':
        return this.XuLyTotalForField('SoLuongDon');
      case 'SoLuongDaKe':
        return this.XuLyTotalForField('SoLuongDaKe');
      case 'TongCong':
        return this.gridDataSource.data.length;
    }
  };

  XuLyTotalForField(field: any) {
    let sum = 0;
    if (this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
      this.gridDataSource.data.forEach(element => {
        switch (field) {
          case 'SoLuongDon':
            sum = sum + element.SoLuongDon;
            break;
          case 'SoLuongDaKe':
            sum = sum + element.SoLuongDaKe;
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
