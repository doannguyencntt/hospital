import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
import { BaoCaoHoatDongNoiTruSearch } from '../bao-cao-hoat-dong-noi-tru.model';
@Component({
  selector: 'app-bao-cao-hoat-dong-noi-tru-list',
  templateUrl: './bao-cao-hoat-dong-noi-tru-list.component.html',
  styleUrls: ['./bao-cao-hoat-dong-noi-tru-list.component.scss']
})
export class BaoCaoHoatDongNoiTruListComponent implements OnInit {
  baoCaoSearch: BaoCaoHoatDongNoiTruSearch = new BaoCaoHoatDongNoiTruSearch();
  public gridView: GridDataResult;
  height: number;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

	@ViewChild("tongTemplate", { static: true }) tongTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongNoiTru;
    this.baoCaoSearch.NoiDieuTriId = 0;
    this.gridColumns = [
      { Field: "Muc", Title: "Mục", Width: 500 },
      { Field: "Tong", Title: "Tổng", Width: 200 ,Template: this.tongTemplate }
    ];


    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(6, 30, 0, 0);

    this.minDateDenNgay = new Date();
    this.minDateDenNgay.setHours(6, 30, 0, 0);
    this.minDateDenNgay.setDate(this.minDateDenNgay.getDate() + 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    }
  }
  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.baoCaoSearch.NoiDieuTriId == null) {
      this.notificationService.showError("Chưa chọn nơi điều trị");
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
      let NoiDieuTriId = 0;
      if (this.baoCaoSearch.NoiDieuTriId != undefined && this.baoCaoSearch.NoiDieuTriId != null) {
        NoiDieuTriId = this.baoCaoSearch.NoiDieuTriId;
      }

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = NoiDieuTriId + ";0;" + tuNgay + ";" + denNgay;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoHoatDongNoiTru", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
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
    this.gridChild._isLoading = true;
    this.gridChild._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }
    if (this.baoCaoSearch.NoiDieuTriId == null) {
      this.notificationService.showError("Chưa chọn nơi điều trị");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
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
    let NoiDieuTriId = 0;
    if (this.baoCaoSearch.NoiDieuTriId != undefined && this.baoCaoSearch.NoiDieuTriId != null) {
      NoiDieuTriId = this.baoCaoSearch.NoiDieuTriId;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = NoiDieuTriId + ";0;" + tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoHoatDongNoiTruForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
        console.log(resultData);
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        // if (this.dataSource.total != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }

        this.gridChild._isLoading = false;
        this.gridChild._isLoadingTotalPage = false;
      }
    });
  }

  // InBaoCao() {
  //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
  //   {
  //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //       return;
  //   }
  //   let khoId = 0;
  //   if (this.baoCaoSearch.KhoaId != null) {
  //     khoId = this.baoCaoSearch.KhoaId;
  //   }
  //   this.inBaoCaoXuatNhapTon.KhoId = khoId;
  //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoXuatNhapTon,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }
}

