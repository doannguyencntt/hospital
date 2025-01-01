import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaoCaoTiepNhanBenhNhanKhamSearch, InBaoCaoTiepNhanBenhNhanKham } from '../bao-cao-tiep-nhan-benh-nhan-kham.model';
import { BaoCaoTiepNhanBenhNhanKhamPopupComponent } from '../bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
@Component({
  selector: 'app-bao-cao-tiep-nhan-benh-nhan-kham-list',
  templateUrl: './bao-cao-tiep-nhan-benh-nhan-kham-list.component.html',
  styleUrls: ['./bao-cao-tiep-nhan-benh-nhan-kham-list.component.scss']
})
export class BaoCaoTiepNhanBenhNhanKhamListComponent implements OnInit {
  baoCaoSearch: BaoCaoTiepNhanBenhNhanKhamSearch = new BaoCaoTiepNhanBenhNhanKhamSearch();
  inBaoCaoTiepNhanBenhNhanKham: InBaoCaoTiepNhanBenhNhanKham = new InBaoCaoTiepNhanBenhNhanKham();
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  documentType: DocumentType;
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null }];

  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  popupLoadingData: any;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTiepNhanTemplate', { static: true }) thoiGianTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('ngoaiGioHanhChinhTemplate', { static: true }) ngoaiGioHanhChinhTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTiepNhanBenhNhanKham;
    // this.skip = 0;
    // this.take = (this.pageSize * this.skip) + this.pageSize;
    //this.inBaoCaoTiepNhanBenhNhanKham.HostingName = window.location.protocol + "//" + window.location.host;
    this.gridColumns = [
      //{ Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate }, //0
      { Field: "ThoiGianTiepNhan", Title: "Thời gian tiếp nhận", Width: 70, Template: this.thoiGianTiepNhanTemplate },//1
      { Field: "MaTN", Title: "Mã TN", Width: 50 },
      { Field: "HoTenBN", Title: "Họ tên NB", Width: 100 },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 50 },
      { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 40 },
      { Field: "BHTYMaSoThe", Title: "Thẻ BHYT", Width: 50 },
      { Field: "DichVu", Title: "Nội dung", Width: 160, ShowTooltip: true },
      // { Field: "TenPhongKham", Title: "Phòng khám", Width: 70 },
      // { Field: "TrangThaiDisplay", Title: "Trạng thái", Width: 50 },
      { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 50, Template: this.ngoaiGioHanhChinhTemplate },
      { Field: "HinhThucDen", Title: "Hình thức đến", Width: 50 },
      { Field: "NoiGioiThieu", Title: "Nơi giới thiệu", Width: 50 },
      { Field: "TenNhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
  }

  // pageChange(event): void {
  //   this.skip = event;
  //   if (this.dataSource.data.length == 0) {
  //     this.XemBaoCao();
  //   } else {
  //     var takeTo = +this.skip + +this.pageSize;
  //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
  //     this.gridDataSource = {
  //       data: gridData,
  //       total: this.dataSource.total
  //     };
  //   }
  // }
  public pageChange(event): void {
    this.skip = event;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridDataSource = {
        data: gridData,
        total: this.dataSource.total
      };
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
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild.search();
    // this.showPopupLoadingData();
    // this.apiService.post<any>("BaoCao/GetDataBaoCaoTiepNhanBenhNhanKhamForGridAsync", this.baoCaoSearch).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     this.dataSource = {
    //       data: resultData.Data,
    //       total: resultData.TotalRowCount
    //     };
    //     var takeTo = +this.skip + +this.pageSize;
    //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
    //     this.gridDataSource = {
    //       data: gridData,
    //       total: resultData.TotalRowCount
    //     };
    //     // if (this.gridView.total != 0) {
    //     //   this.ishowView = true;
    //     // } else {
    //     //   this.ishowView = false;
    //     // }
    //     this.gridChild._isLoading = false;
    //     this.gridChild._isLoadingTotalPage = false;
    //   }
    //   this.closePopupLoadingData();
    // },
    // (err: ApiError) => {
    //     if (err.Message != "Validation Failed") {
    //         this.notificationService.showError(err.Message);
    //     }
    //     this.closePopupLoadingData();
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
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.baoCaoSearch.HostingName = this.inBaoCaoTiepNhanBenhNhanKham.HostingName;
      //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoTiepNhanBenhNhanKham.HostingName;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTiepNhanBenhNhanKham", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTiepNhanBenhNhanKham" + dateTimeNow.getFullYear() + ".xlsx");
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
  // InBaoCao() {
  //   this.inBaoCaoTiepNhanBenhNhanKham.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoTiepNhanBenhNhanKham.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoTiepNhanBenhNhanKhamPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoTiepNhanBenhNhanKham,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }

  changeValueStart() {
    // this.minDateDenNgay = new Date();
    // if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
    //   && this.baoCaoSearch.DenNgayFormat > this.baoCaoSearch.TuNgayFormat) {
    //   this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    // }
  }

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
