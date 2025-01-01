import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoHoatDongKhoaKhamBenhSearch, InBaoCaoHoatDongKhoaKhamBenh } from '../bao-cao-hoat-dong-khoa-kham-benh.model';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-hoat-dong-khoa-kham-benh-list',
  templateUrl: './bao-cao-hoat-dong-khoa-kham-benh-list.component.html',
  styleUrls: ['./bao-cao-hoat-dong-khoa-kham-benh-list.component.scss']
})
export class BaoCaoHoatDongKhoaKhamBenhListComponent implements OnInit {
  minDateTuNgay: any;
  baoCaoSearch: BaoCaoHoatDongKhoaKhamBenhSearch = new BaoCaoHoatDongKhoaKhamBenhSearch()
  inBaoCaoHoatDongKhoaKhamBenh: InBaoCaoHoatDongKhoaKhamBenh = new InBaoCaoHoatDongKhoaKhamBenh()
  documentType: DocumentType;
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  gridColumns: any[];
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  sumTongSo: number = null;
  sumBHYTCoGoi: number = null;
  sumBHYTKhongGoiGoi: number = null;
  sumVienPhiCoGoi: number = null;
  sumVienPhiKhongGoiGoi: number = null;
  sumKskBHTN: number = null;
  sumKskDoanCongTy: number = null;
  sumGiayKsk: number = null;
  sumTreEm: number = null;
  sumSLCapCuu: number = null;
  sumSoNguoiVaoVien: number = null;
  sumSoNguoiChuyenVien: number = null;
  sumSoNguoiTuVong: number = null;
  sumSoNguoiDieuTri: number = null;
  sumSoNgay: number = null;
  ishowView: boolean;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  constructor(private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongKhoaKhamBenh;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    // if (window.location.protocol == "http:") {
    //   this.inBaoCaoHoatDongKhoaKhamBenh.HostingName = "http://" + window.location.host;
    // } else {
    //   this.inBaoCaoHoatDongKhoaKhamBenh.HostingName = "https://" + window.location.host;
    // }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 70 }, //0
      { Field: "PhongBenhVien", Title: "Phòng bệnh viện", Width: 300 }, //1
      { Field: "TongSo", Title: "Tổng số", Width: 100 }, //2
      { Field: "_", Title: "Số lần khám", Width: 540 }, //3
      { Field: "_", Title: "BHYT", Width: 70 }, //4
      { Field: "BhytCoGoi", Title: "Có gói", Width: 70 }, //5
      { Field: "BhytKhongGoi", Title: "Không gói", Width: 70 }, //6
      { Field: "_", Title: "Viện phí", Width: 70 }, //7
      { Field: "VienPhiCoGoi", Title: "Có gói", Width: 70 }, //8
      { Field: "VienPhiKhongGoi", Title: "Không gói", Width: 70 }, //9
      { Field: "KskBHTN", Title: "KSK BHTN", Width: 100 }, //10
      { Field: "KskDoanCongTy", Title: "KSK đoàn, Công ty", Width: 100 }, //11
      { Field: "GiayKsk", Title: "Giấy KSK", Width: 100 }, //12
      { Field: "TreEm", Title: "Tr.đó: Trẻ em <=6", Width: 100 }, //13
      { Field: "SoLanCapCuu", Title: "Số lần cấp cứu", Width: 120 }, //14
      { Field: "SoNguoiBenhVaoVien", Title: "Số người bệnh vào viện", Width: 200 }, //15
      { Field: "SoNguoiBenhChuyenVien", Title: "Số người bệnh chuyển viện", Width: 200 }, //16
      { Field: "SoNguoiBenhTuVong", Title: "Số người bệnh tử vong", Width: 200 }, //17
      { Field: "_", Title: "Đ.Trị Ngoại Trú", Width: 240 }, //18
      { Field: "SoNguoiBenhDieuTriNgoaiTru", Title: "Số người bệnh", Width: 120 }, //19
      { Field: "SoNgayDieuTriNgoaiTru", Title: "Số ngày", Width: 120 } //20
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

  public pageChange(event): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = this.skip + this.pageSize;
      console.log(this.dataSource.data)
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridDataSource = {
        data: gridData,
        total: this.dataSource.total
      };
    }
  }
  getFieldColumn(index: number) {
    return this.gridColumns[index].Field;
  }
  getTitleColumn(index: number) {
    return this.gridColumns[index].Title;
  }
  getWidthColumn(index: number) {
    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  }
  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoGrid").parent().width();
    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
    var totalWidth = this.gridColumns.filter((item) => {
      return item.Width != null;
    }).reduce((sum, item) => sum + item.Width, 0);
    if ((widthScreen < totalWidth + minWidth + 100)) {
      return minWidth;
    }
    else {
      return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
    }
  }

  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
    //   this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
    //   this._isLoading = false;
    //   this._isLoadingTotalPage = false;
    //   return;
    // }
    if (!((this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null) 
        || (this.baoCaoSearch.TuNgayFormatHoanThanh != null && this.baoCaoSearch.DenNgayFormatHoanThanh != null))) {
      this.notificationService.showError("Yêu cầu nhập từ ngày và đến ngày bắt đầu khám hoặc hoàn thành khám");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
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

    // let tuNgay = null;
    // let denNgay = null;
    // if(this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null)
    // {
    //   tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    //   denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    // }

    // let tuNgayHoanThanh = null;
    // let denNgayHoanThanh = null;
    // if(this.baoCaoSearch.TuNgayFormatHoanThanh != null && this.baoCaoSearch.DenNgayFormatHoanThanh != null)
    // {
    //   tuNgayHoanThanh = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormatHoanThanh, "dd/mm/yyyy");
    //   denNgayHoanThanh = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormatHoanThanh, "dd/mm/yyyy");
    // }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.FromDateHoanThanh = this.baoCaoSearch.TuNgayFormatHoanThanh;
    this.baoCaoSearch.ToDateHoanThanh = this.baoCaoSearch.DenNgayFormatHoanThanh;
    //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoHoatDongKhoaKhamBenhForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);
        this.gridDataSource = {
          data: gridData,
          total: resultData.TotalRowCount
        };

        this.sumTongSo = resultData.Data.reduce((sum: number, item: { TongSo: number; }) => sum + item.TongSo, 0);
        this.sumBHYTCoGoi = resultData.Data.reduce((sum: number, item: { BhytCoGoi: number; }) => sum + item.BhytCoGoi, 0);
        this.sumBHYTKhongGoiGoi = resultData.Data.reduce((sum: number, item: { BhytKhongGoi: number; }) => sum + item.BhytKhongGoi, 0);
        this.sumVienPhiCoGoi = resultData.Data.reduce((sum: number, item: { VienPhiCoGoi: number; }) => sum + item.VienPhiCoGoi, 0);
        this.sumVienPhiKhongGoiGoi = resultData.Data.reduce((sum: number, item: { VienPhiKhongGoi: number; }) => sum + item.VienPhiKhongGoi, 0);
        this.sumKskBHTN = resultData.Data.reduce((sum: number, item: { KskBHTN: number; }) => sum + item.KskBHTN, 0);
        this.sumKskDoanCongTy = resultData.Data.reduce((sum: number, item: { KskDoanCongTy: number; }) => sum + item.KskDoanCongTy, 0);
        this.sumGiayKsk = resultData.Data.reduce((sum: number, item: { GiayKsk: number; }) => sum + item.GiayKsk, 0);
        this.sumTreEm = resultData.Data.reduce((sum: number, item: { TreEm: number; }) => sum + item.TreEm, 0);
        this.sumSLCapCuu = resultData.Data.reduce((sum: number, item: { SoLanCapCuu: number; }) => sum + item.SoLanCapCuu, 0);
        this.sumSoNguoiVaoVien = resultData.Data.reduce((sum: number, item: { SoNguoiBenhVaoVien: number; }) => sum + item.SoNguoiBenhVaoVien, 0);
        this.sumSoNguoiChuyenVien = resultData.Data.reduce((sum: number, item: { SoNguoiBenhChuyenVien: number; }) => sum + item.SoNguoiBenhChuyenVien, 0);
        this.sumSoNguoiTuVong = resultData.Data.reduce((sum: number, item: { SoNguoiBenhTuVong: number; }) => sum + item.SoNguoiBenhTuVong, 0);
        this.sumSoNguoiDieuTri = resultData.Data.reduce((sum: number, item: { SoNguoiBenhDieuTriNgoaiTru: number; }) => sum + item.SoNguoiBenhDieuTriNgoaiTru, 0);
        this.sumSoNgay = resultData.Data.reduce((sum: number, item: { SoNgayDieuTriNgoaiTru: number; }) => sum + item.SoNgayDieuTriNgoaiTru, 0);

        // if (this.gridDataSource.total != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }
        this._isLoading = false;
        this._isLoadingTotalPage = false;
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
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.FromDateHoanThanh = this.baoCaoSearch.TuNgayFormatHoanThanh;
      this.baoCaoSearch.ToDateHoanThanh = this.baoCaoSearch.DenNgayFormatHoanThanh;
      //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoHoatDongKhoaKhamBenh.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoHoatDongKhoaKhamBenh", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhoaKhamBenh" + dateTimeNow.getFullYear() + ".xlsx");
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

