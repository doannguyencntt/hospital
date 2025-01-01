import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoBienBanKiemKeDpVtSearch } from '../bao-cao-bien-ban-kiem-ke-dp-vt.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-bao-cao-bien-ban-kiem-ke-dp-vt-list',
  templateUrl: './bao-cao-bien-ban-kiem-ke-dp-vt-list.component.html',
  styleUrls: ['./bao-cao-bien-ban-kiem-ke-dp-vt-list.component.scss']
})
export class BaoCaoBienBanKiemKeDpVtListComponent implements OnInit {

  baoCaoSearch: BaoCaoBienBanKiemKeDpVtSearch = new BaoCaoBienBanKiemKeDpVtSearch();
  minDateTuNgay: any;
  documentType: DocumentType
  gridColumns: any = []

  gridDataSource: any = {
    data: [],
    total: 0
  };

  gridView: any = {
    data: [],
    total: 0
  };

  public pageSize = 50;
  public skip = 0;

  public take: number;

  showGrid: boolean = false;
  showPrintExport: boolean = false;

  icFilterList = icFilterList;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBienBanKiemKeDuocVT;

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "MaDuoc", Title: "Mã dược", Width: 100 },
      { Field: "Ten", Title: "Tên thuốc, vật tư, hoá chất", Width: 200 },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 100 },
      { Field: "HoatChat", Title: "Tên hoạt chất", Width: 100 },
      { Field: "DVT", Title: "ĐVT", Width: 100 },
      { Field: "SoLuongHienCo", Title: "Số lượng hiện có", Width: 100 },
      { Field: "SoLo", Title: "Số lô SX", Width: 100 },
      { Field: "HanDungStr", Title: "Hạn dùng", Width: 100 },
      { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
    ]


    if (this.baoCaoSearch.GioThongKeFormat == null) {
      this.baoCaoSearch.GioThongKeFormat = new Date();
    }
  }

  seachChange(event) {
    this.skip = 0;
    this.XemBaoCao();
  }

  pageChange(event) {
    this.skip = event;
    if (this.gridDataSource.data.length === 0) {
      this.XemBaoCao();
    } else {

      if (this.baoCaoSearch.GioThongKeFormat === null) {
        this.notificationService.showError("Giờ thống kê yêu cầu nhập");
        return;
      }
      if (!this.baoCaoSearch.KhoId) {
        this.notificationService.showError("Kho yêu cầu nhập");
        return;
      }

      this.gridChild._isLoadingTotalPage = true;
      this.gridChild._isLoading = true;
      this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;
      
      this.baoCaoSearch.Skip = this.skip;
      this.baoCaoSearch.Take = this.skip + this.pageSize;

      this.getThongTinDataKiemKeDuocPhamVatTu(this.baoCaoSearch);
    }
  }

  XemBaoCao() {
    if (this.baoCaoSearch.GioThongKeFormat == null) {
      this.notificationService.showError("Giờ thống kê yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }

    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;

    this.baoCaoSearch.Skip = 0;
    this.baoCaoSearch.Take = 50;

    this.getThongTinDataKiemKeDuocPhamVatTu(this.baoCaoSearch);
  }

  getThongTinDataKiemKeDuocPhamVatTu(baoCaoSearch) {
    debugger;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoBienBanKiemKeDPVTForGridAsync", baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          this.showPrintExport = true;
        }

        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        this.gridView.data = this.gridDataSource.data;
        this.gridView.total = this.gridDataSource.total;

        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }
    });

  }

  exportExcel() {
    if (this.baoCaoSearch.GioThongKeFormat == null) {
      this.notificationService.showError("Giờ thống kê yêu cầu nhập");
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });

      this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBienBanKiemKeDPVT", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBienBanKiemKe" + dateTimeNow.getFullYear() + ".xlsx");
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
}

