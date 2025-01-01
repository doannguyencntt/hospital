import { Component, OnInit, ViewChild } from '@angular/core';
import { BaoCaoThongKeSoLuongThuThuatSearchVT, InBaoCaoThongKeSoLuongThuThuat } from '../bao-cao-thong-ke-so-luong-thu-thuat.model';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-bao-cao-thong-ke-so-luong-thu-thuat-list',
  templateUrl: './bao-cao-thong-ke-so-luong-thu-thuat-list.component.html',
  styleUrls: ['./bao-cao-thong-ke-so-luong-thu-thuat-list.component.scss']
})
export class BaoCaoThongKeSoLuongThuThuatListComponent implements OnInit {
  validationErrors: any;
  minDateTuNgay: any;
  gridColumns: any = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  showPrintExport: boolean = false;
  showGrid: boolean = false;
  baoCaoSearch: BaoCaoThongKeSoLuongThuThuatSearchVT = new BaoCaoThongKeSoLuongThuThuatSearchVT()
  documentType: DocumentType;
  inBaoCaoThongKeSoLuongThuThuat: InBaoCaoThongKeSoLuongThuThuat = new InBaoCaoThongKeSoLuongThuThuat()
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  constructor(private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoSoLuongThuThuat;

    if (window.location.protocol == "http:") {
      this.inBaoCaoThongKeSoLuongThuThuat.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoThongKeSoLuongThuThuat.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "PhongThucHien", Title: "Phòng thực hiện", Width: 140 },
      { Field: "LoaiI", Title: "Loại I", Width: 40 },
      { Field: "LoaiII", Title: "Loại II", Width: 40 },
      { Field: "LoaiIII", Title: "Loại III", Width: 40 },
      { Field: "DacBiet", Title: "Đặc biệt", Width: 40 },
      { Field: "Khac", Title: "Khác", Width: 40 },
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
    this.gridChild._isLoading = true;
    this.gridChild._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild.search();
    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoThongKeSoLuongThuThuat.HostingName;
    // this.apiService.post<any>("BaoCao/GetDataBaoCaoThongKeSoLuongThuThuat", this.baoCaoSearch).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     this.showPrintExport = true;
    //     this.gridDataSource = {
    //       data: resultData.Data,
    //       total: resultData.TotalRowCount
    //     };

    //     // if (this.gridDataSource.total != 0) {
    //     //   this.showGrid = true;
    //     // } else {
    //     //   this.showGrid = false;
    //     // }
    //     this.gridChild._isLoading = false;
    //     this.gridChild._isLoadingTotalPage = false;
    //   }
    // });
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
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoThongKeSoLuongThuThuat.HostingName;
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.baoCaoSearch.HostingName = this.inBaoCaoThongKeSoLuongThuThuat.HostingName;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoThongKeSoLuongThuThuat", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoThongKeSoLuongThuThuat" + dateTimeNow.getFullYear() + ".xlsx");
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
