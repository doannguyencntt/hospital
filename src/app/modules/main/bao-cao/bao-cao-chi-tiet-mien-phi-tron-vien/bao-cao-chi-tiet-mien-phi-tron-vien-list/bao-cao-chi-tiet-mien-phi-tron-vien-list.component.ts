import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoChiTietMienPhiTronVienSearch, InBaoCaoChiTietMienPhiTronVien } from '../bao-cao-chi-tiet-mien-phi-tron-vien.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-bao-cao-chi-tiet-mien-phi-tron-vien-list',
  templateUrl: './bao-cao-chi-tiet-mien-phi-tron-vien-list.component.html',
  styleUrls: ['./bao-cao-chi-tiet-mien-phi-tron-vien-list.component.scss']
})
export class BaoCaoChiTietMienPhiTronVienListComponent implements OnInit {
  baoCaoSearch: BaoCaoChiTietMienPhiTronVienSearch = new BaoCaoChiTietMienPhiTronVienSearch();
  inBaoCaoChiTietMienPhiTronVien: InBaoCaoChiTietMienPhiTronVien = new InBaoCaoChiTietMienPhiTronVien();
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
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;

  giamPhi: number = 0;
  mienPhi: number = 0;
  tongGiamPhi: number = 0;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("thanhTienTemplate", { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild("giamPhiTemplate", { static: true }) giamPhiTemplate: TemplateRef<any>;
  @ViewChild("mienPhiTemplate", { static: true }) mienPhiTemplate: TemplateRef<any>;
  @ViewChild("tongGiamPhiMienPhiTemplate", { static: true }) tongGiamPhiMienPhiTemplate: TemplateRef<any>;
  @ViewChild("tongCongTemplateFooter", { static: true }) tongCongTemplateFooter: TemplateRef<any>;
  @ViewChild("giamPhiSumTemplateFooter", { static: true }) giamPhiSumTemplateFooter: TemplateRef<any>;
  @ViewChild("mienPhiSumTemplateFooter", { static: true }) mienPhiSumTemplateFooter: TemplateRef<any>;
  @ViewChild("tongGiamPhiMienPhiSumTemplateFooter", { static: true }) tongGiamPhiMienPhiSumTemplateFooter: TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoChiTietMienPhiTronVien
    if (window.location.protocol == "http:") {
      this.inBaoCaoChiTietMienPhiTronVien.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoChiTietMienPhiTronVien.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "TenKhoaPhong", Title: "Khoa/Phòng", Width: 100 },
      { Field: "MaNB", Title: "Mã NB", Width: 70 },
      { Field: "MaTN", Title: "Mã TN", Width: 70 },
      { Field: "TenBN", Title: "Tên BN", Width: 100 },
      { Field: "NgaySinhDisplay", Title: "Năm sinh", Width: 70 },
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 70 },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 160 },
      { Field: "ThanhTien", Title: "Số tiền phải thanh toán", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongTemplateFooter },
      { Field: "GiamPhi", Title: "Giảm phí", Width: 80, Template: this.giamPhiTemplate, TemplateFooter: this.giamPhiSumTemplateFooter },
      { Field: "MienPhi", Title: "Miễn phí", Width: 80, Template: this.mienPhiTemplate, TemplateFooter: this.mienPhiSumTemplateFooter },
      { Field: "TongGiamPhiMienPhi", Title: "Tổng giảm phí, miễn phí", Width: 100, Template: this.tongGiamPhiMienPhiTemplate, TemplateFooter: this.tongGiamPhiMienPhiSumTemplateFooter },
      { Field: "LyDo", Title: "Lý do", Width: 120 },
    ]
    
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }
  }

  totalGiamPhi() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.GiamPhi, 0);
    }
  }

  totalMienPhi() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.MienPhi, 0);
    }
  }

  totalTongGiamPhiMienPhi() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongGiamPhiMienPhi, 0);
    }
  }

  pageChange(event) {
    this.skip = event;
    // this.XemBaoCao();
    var takeTo = +this.skip + +this.pageSize;
    this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    this.gridView.total = this.gridDataSource.total;
  }


  seachChange(event) {
    this.skip = 0;
    this.XemBaoCao();
  }


  XemBaoCao() {
    // this.gridChild._isLoadingTotalPage = true;
    // this.gridChild._isLoading = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      // this.gridChild._isLoadingTotalPage = false;
      // this.gridChild._isLoading = false;
      return;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild.search();
    this.getTongCong(this.gridChild._gridQueryInfo);

    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    // this.apiService.post<any>("BaoCao/GetDataBaoCaoChiTietMienPhiTronVienForGridAsync", this.baoCaoSearch).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
    //       this.showPrintExport = true;
    //     }
    //     this.showGrid = true;
    //     // this.gridDataSource.data = [...resultData.Data];
    //     // this.gridDataSource.total = this.gridDataSource.data.length;
    //     // this.gridDataSource = {
    //     //   data: resultData.Data,
    //     //   total: resultData.TotalRowCount
    //     // };

    //     // var takeTo = +this.skip + +this.pageSize;
    //     // this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);
    //     // console.log(this.gridDataSource)
    //     // this.gridChild.setDataSource();
    //     this.gridDataSource.data = [...resultData.Data];
    //     this.gridDataSource.total = this.gridDataSource.data.length;

    //     // this.gridChild.setDataSource();
    //     var takeTo = +this.skip + +this.pageSize;
    //     this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    //     this.gridView.total = this.gridDataSource.total;

    //     this.gridChild._isLoadingTotalPage = false;
    //     this.gridChild._isLoading = false;
    //   }
    // });

  }

  getTongCong(queryInfo) {
    this.apiService.post<any>("BaoCao/GetTongCongChiPhiMienPhiTronVien", queryInfo).subscribe(resultData => {
      this.giamPhi = resultData.GiamPhi;
      this.mienPhi = resultData.MienPhi;
      this.tongGiamPhi = resultData.TongGiamPhiMienPhi;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
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
      // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoChiTietMienPhiTronVien", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoChiTietMienPhiTronVien" + dateTimeNow.getFullYear() + ".xlsx");
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
