import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDuocChiTietXuatNoiBoSearch, InBaoCaoDuocChiTietXuatNoiBo } from '../bao-cao-duoc-chi-tiet-xuat-noi-bo.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-duoc-chi-tiet-xuat-noi-bo-list',
  templateUrl: './bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.html',
  styleUrls: ['./bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.scss']
})
export class BaoCaoDuocChiTietXuatNoiBoListComponent implements OnInit {
  baoCaoSearch: BaoCaoDuocChiTietXuatNoiBoSearch = new BaoCaoDuocChiTietXuatNoiBoSearch();
  inBaoCaoDuocChiTietXuatNoiBo: InBaoCaoDuocChiTietXuatNoiBo = new InBaoCaoDuocChiTietXuatNoiBo();
  minDateTuNgay: any;
  documentType: DocumentType

  gridColumns: any = []
  gridDataSource: any = {
    data: [],
    total: 0
  };
  heightToolbar: number = 140;
  height: number;
  listKho: any = [];
  listThongTinThuoc: any = [];
  showPrintExport: boolean = false;

  gridTemp: any = []
  icFilterList = icFilterList;

  public pageSize = 50;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;

  @ViewChild("sttTemplate", { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild("soTienCongNoTemplate", { static: true }) soTienCongNoTemplate: TemplateRef<any>;
  @ViewChild("soTienDaThanhToanTemplate", { static: true }) soTienDaThanhToanTemplate: TemplateRef<any>;
  @ViewChild("soTienConNoTemplate", { static: true }) soTienConNoTemplate: TemplateRef<any>;
  @ViewChild("soTienHoanTraTemplate", { static: true }) soTienHoanTraTemplate: TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDuocChiTietXuatNoiBo
    if (window.location.protocol == "http:") {
      this.inBaoCaoDuocChiTietXuatNoiBo.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoDuocChiTietXuatNoiBo.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100 },
      { Field: "ThongTinThuoc", Title: "Mã Dược: Tên thuốc, hoá chất, vtyt + Hàm lượng", Width: 200 },
      { Field: "DVT", Title: "ĐVT", Width: 100 },
    ]

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

  ngAfterContentInit() {
    const self = this;
    self.height = jQuery(window).height() - self.heightToolbar;
    if (self.height < 400) {
      self.height = 400;
    }
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - self.heightToolbar;
      if (self.height < 400) {
        self.height = 400;
      }
    });
    this.cd.detectChanges();
  }

  getSoLuong(field, thongTinThuoc) {
    if (this.gridTemp) {
      var sumSoLuongs = this.gridTemp.filter(s => s.Kho == field && s.ThongTinThuoc == thongTinThuoc);
      if (sumSoLuongs.length > 0) {
        return sumSoLuongs.reduce((sum, item) => sum + item.SoLuong, 0);
      }
    }
  }

  getThanhTien(field, thongTinThuoc) {
    if (this.gridTemp) {
      var sumTTiens = this.gridTemp.filter(s => s.Kho == field && s.ThongTinThuoc == thongTinThuoc);
      if (sumTTiens.length > 0) {
        return sumTTiens.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
    }
  }

  totalThanhTien(field) {
    if (this.gridTemp) {
      var listItemTheoKho = this.gridTemp.filter(s => s.Kho == field);
      if (listItemTheoKho.length > 0) {
        return listItemTheoKho.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
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

  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    this.XemBaoCao();
  }

  reFresh(){
    this.skip = 0;
    this.XemBaoCao()
  }

  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Khoa yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoDuocChiTietXuatNoiBoForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          this.showPrintExport = true;
        }
        this.gridTemp = [...resultData.Data];
        this.gridTemp.forEach(element => {
          var check = this.gridDataSource.data.filter(s => s.ThongTinThuoc == element.ThongTinThuoc)[0];
          if (!check) {
            this.gridDataSource.data.push({ Id: element.Id, ThongTinThuoc: element.ThongTinThuoc, DVT: element.DVT })
          }
          var check1 = this.listKho.filter(s => s == element.Kho)[0];
          if (!check1) {
            this.listKho.push(element.Kho);
          }
        });
        this.gridDataSource.total = this.gridDataSource.data.length;

        var takeTo = +this.skip + +this.pageSize;
        this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);

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
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      let khoId = 0;
      if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
        khoId = this.baoCaoSearch.KhoId;
      }
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoDuocChiTietXuatNoiBo.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDuocChiTietXuatNoiBo", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuocChiTietXuatNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
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