import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaoCaoTinhThoiGianSuDungDVCuaKHSearch, InTinhThoiGianSuDungDVCuaKH } from '../bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list',
  templateUrl: './bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.html',
  styleUrls: ['./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.scss']
})
export class BaoCaoTinhThoiGianSuDungDvCuaKhListComponent implements OnInit {
  baoCaoSearch: BaoCaoTinhThoiGianSuDungDVCuaKHSearch = new BaoCaoTinhThoiGianSuDungDVCuaKHSearch();
  inTinhThoiGianSuDungDVCuaKH: InTinhThoiGianSuDungDVCuaKH = new InTinhThoiGianSuDungDVCuaKH();
  public pageSize = 50;
  public skip = 0;
  take: number;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  public data: any[]
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  @Input() heightToolbar: number = 140;
  popupLoadingData: any;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('ThoiDiemTNTemplate', { static: true }) ThoiDiemTNTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemBSKhamTemplate', { static: true }) ThoiDiemBSKhamTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemRaChiDinhTemplate', { static: true }) ThoiDiemRaChiDinhTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemLayMauXNTemplate', { static: true }) ThoiDiemLayMauXNTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemTraKetQuaXNTemplate', { static: true }) ThoiDiemTraKetQuaXNTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemThucHienCLSTemplate', { static: true }) ThoiDiemThucHienCLSTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemBacSiKetLuanTemplate', { static: true }) ThoiDiemBacSiKetLuanTemplate: TemplateRef<any>;
  @ViewChild('ThoiDiemBacSiKeDonThuocTemplate', { static: true }) ThoiDiemBacSiKeDonThuocTemplate: TemplateRef<any>;

  // public pageChange(event: PageChangeEvent): void {
  //   this.baoCaoSearch.Skip = event.skip;
  //   this.skip = event.skip;
  //   //this.XemBaoCao();
  // }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoSoLieuThoiGianSuDungDV;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;


    this.gridColumns = [      
      { Field: "HoTenKH", Title: "Họ tên khách hàng", Width: 35 },
      // { Field: "MaBN", Title: "Mã người bệnh", Width: 20 },
      { Field: "MaYeuCauTiepNhan", Title: "Mã người bệnh", Width: 20 },
      { Field: "ThoiDiemTN", Title: "Thời điểm tiếp nhận tại quầy LT", Width: 20, Template: this.ThoiDiemTNTemplate },
      { Field: "ThoiDiemBSKham", Title: "Thời điểm BS mở HS khám", Width: 20, Template: this.ThoiDiemBSKhamTemplate },
      { Field: "ThoiDiemRaChiDinh", Title: "Thời điểm BS ra chỉ định CLS", Width: 20, Template: this.ThoiDiemRaChiDinhTemplate },
      { Field: "ThoiDiemLayMauXN", Title: "Thời điểm KH lấy mẫu XN", Width: 20, Template: this.ThoiDiemLayMauXNTemplate },
      { Field: "ThoiDiemTraKetQuaXN", Title: "Thời điểm trả KQXN", Width: 20, Template: this.ThoiDiemTraKetQuaXNTemplate },
      { Field: "ThoiDiemThucHienCLS", Title: "Thời điểm KH thực hiện CĐHA", Width: 20, Template: this.ThoiDiemThucHienCLSTemplate },
      { Field: "ThoiDiemBacSiKetLuan", Title: "Thời điểm BS kết luận", Width: 20, Template: this.ThoiDiemBacSiKetLuanTemplate },
      { Field: "ThoiDiemBacSiKeDonThuoc", Title: "Thời điểm BS kê đơn thuốc", Width: 20, Template: this.ThoiDiemBacSiKeDonThuocTemplate },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
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
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inTinhThoiGianSuDungDVCuaKH.HostingName;
      this.showPopupLoadingData();
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoSoLieuTinhThoiGianSuDungDVCuaKH", this.baoCaoSearch)
        .subscribe(res => {
          this.closePopupLoadingData();
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhThoiGianSuDungDVCuaKH" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.closePopupLoadingData();
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  XemBaoCao() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
   
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inTinhThoiGianSuDungDVCuaKH.HostingName;
    this.showPopupLoadingData();
    this.ishowView = false;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoSoLieuTinhThoiGianSuDungDVCuaKHForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;

        if (this.dataSource.total != 0) {
          this.ishowView = true;
        } else {
          this.ishowView = false;
        }

        var self = this;
        setTimeout(function () {
          self.dataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };
        }, 50);
      }
      var self = this;
      setTimeout(function () {
        self.closePopupLoadingData();
      }, 50);
    },
    (err: ApiError) => {
        if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
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
