import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { QuayThuocListComponent } from 'src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ExportQueryInfoQueryInfo, TimBenhNhanChoCapThuoc } from '../danh-sach-cap-thuoc-bhyt.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icPrint from "@iconify/icons-ic/twotone-print";
import { Location } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ThongTinBenhNhan } from '../../../quay-thuoc.model';
import { InDonThuocPopUpComponent } from '../../../in-don-thuoc-pop-up/in-don-thuoc-pop-up.component';

@Component({
  selector: 'app-danh-sach-don-thuoc-cho-cap-thuoc',
  templateUrl: './danh-sach-don-thuoc-cho-cap-thuoc.component.html',
  styleUrls: ['./danh-sach-don-thuoc-cho-cap-thuoc.component.scss']
})
export class DanhSachDonThuocChoCapThuocComponent implements OnInit {
  timKiem: TimBenhNhanChoCapThuoc = new TimBenhNhanChoCapThuoc();
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();

  icPrint = icPrint;
  documentType: DocumentType;

  gridParentColumnsDSChoCapThuoc: any;
  gridChildColumnsDSChoCapThuoc: any;
  timeoutSearchChange: any;

  id: number = 0;
  benhNhan: ThongTinBenhNhan;
  typeDanhSachThanhToan: number = 0;
  xacNhanIn: boolean = false;
  queryStringSearchUuTien: string;
  dataQuayThuocSearch: any;
  hoquerySearch: boolean;
  loadingPopup: any;
  validationErrors: any;
  modelQRCode: any;
  sortConfig = [
    {
      field: "Id",
      dir: "asc",
    },
  ];
  @ViewChild(GridComponent, { static: true }) gridList: GridComponent;
  @ViewChild(QuayThuocListComponent, { static: true }) gridQuayThuocList: QuayThuocListComponent;

  //Begin Khai báo viewChild
  //==> Parent
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('TongGiaTriDonThuocTemplate', { static: true }) TongGiaTriDonThuocTemplate: TemplateRef<any>;
  @ViewChild('trangThaiChoXuatThuocTemplate', { static: true }) trangThaiChoXuatThuocTemplate: TemplateRef<any>;

  //==> children
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('TongCongDonThuocFooter', { static: true }) TongCongDonThuocFooter: TemplateRef<any>;
  @ViewChild('TinhTrangThuoctemplate', { static: true }) TinhTrangThuoctemplate: TemplateRef<any>;
  @ViewChild('templatePrint', { static: true }) templatePrint: TemplateRef<any>;
  @ViewChild('SoTienThuoctemplate', { static: true }) SoTienThuoctemplate: TemplateRef<any>;

  //End Khai báo viewChild
  baseRoute: string = "/danh-sach-don-thuoc-cho-cap-thuoc";
  urlGetDataGridChild: string = "QuayThuoc/GetDataChoCapThuocBHYTForGridAsync";
  urlGetTotalPageGridChild: string = "QuayThuoc/GetTotalChoCapThuocBHYTPageForGridAsync";
  urlGetDataChild: string = "QuayThuoc/GetDanhSachThuocBenhNhanChild";

  searchUuTien: boolean;
  onHaddleUuTienSearch: any;
  isScanF1: boolean;

  danhSachDieuTriNoiTruTuNgay: any;
  danhSachDieuTriNoiTruDenNgay: any;

  constructor(private router: Router, private location: Location, private authService: AuthService,
    private apiService: ApiService, private notificationService: NotificationService,
    private route: ActivatedRoute, private cd: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDonThuocChoCapThuocBHYT;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDSChoCapThuoc");
        if (additionalSearchString != null) {
          this.timKiem = JSON.parse(additionalSearchString);
        }
      }
    }
    else {
      let dateNow = new Date();
      if (this.timKiem.RangeDate.startDate == null) {
        this.timKiem.RangeDate.startDate = dateNow;
      }
      if (this.timKiem.RangeDate.endDate == null) {
        this.timKiem.RangeDate.endDate = dateNow;
      }
    }
    this.gridParentColumnsDSChoCapThuoc = [
      { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinhHienThi", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 120, Sortable: true },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120, Sortable: true },
      { Field: "TongGiaTriDonThuoc", Title: "Tổng giá trị đơn thuốc", Width: 200, Sortable: true, Template: this.TongGiaTriDonThuocTemplate },
    ];

    this.gridChildColumnsDSChoCapThuoc = [
      { Field: "STT", Title: "#", Width: 100, Sortable: true },
      { Field: "LoaiDonThuoc", Title: "", Width: 200, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "MaDon", Title: "Mã Đơn", Width: 100, Sortable: true },
      { Field: "NgayKeDon", Title: "Ngày kê đơn", Width: 200, Sortable: true },
      { Field: "DVKham", Title: "Dịch vụ khám", minWidth: 200, Sortable: true },
      { Field: "BSKham", Title: "Bác sĩ khám", Width: 200, Sortable: true },
      { Field: "SoTienDisPlay", Title: "Số tiền ", Width: 80, Sortable: true, TemplateFooter: this.TongCongDonThuocFooter, Template: this.SoTienThuoctemplate },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Sortable: true, Template: this.TinhTrangThuoctemplate },
      { Field: "", Title: "", Width: 120, Sortable: true, Template: this.templatePrint },
    ];
    this.queryStringSearchUuTien = JSON.stringify(this.timKiem);
    this.TimKiemChoCapThuocBHYT();

  }

  TimKiemChoCapThuocBHYT() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    let timKiemChoCapThuocBHYTJSon = JSON.stringify(this.timKiem);
    this.convertDateTimeToUTC();
    if (this.gridList != undefined) {
      this.gridList.searchString = timKiemChoCapThuocBHYTJSon;
      this.gridList._additionalSearchString = timKiemChoCapThuocBHYTJSon;
      this.gridList.search();
    }
    this.reverseDateTime();
    LocalStorageHelper.setItem("additionalSearchStringDSChoCapThuoc", timKiemChoCapThuocBHYTJSon);
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimKiemChoCapThuocBHYT();
    }
  }

  searchChangeMaBN(event) {
    var self = this;
    if (this.timeoutSearchChange != null) {
      clearTimeout(this.timeoutSearchChange);
      this.timeoutSearchChange = null;
    }
    this.timeoutSearchChange = setTimeout(function () {
      if (event !== undefined && event.endsWith("@")) {
        var dataTimKiem = event.split("|");
        if (dataTimKiem.length > 1) {
          self.timKiem.MaBenhNhan = dataTimKiem[0];
          self.TimKiemChoCapThuocBHYT();
        } else {
          self.timKiem.MaBenhNhan = null;
          self.timKiem.MaTiepNhan = event.slice(0, -1);
          self.TimKiemChoCapThuocBHYT();
        }
      }
    }, 100);
  }

  convertDateTimeToUTC() {
    if (this.timKiem.RangeDate.startDate) {
      this.danhSachDieuTriNoiTruTuNgay = new Date(this.timKiem.RangeDate.startDate);
      this.timKiem.RangeDate.startDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes()));
    }

    if (this.timKiem.RangeDate.endDate) {
      this.danhSachDieuTriNoiTruDenNgay = new Date(this.timKiem.RangeDate.endDate);
      this.timKiem.RangeDate.endDate = new Date(Date.UTC(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes()));
    }
  }

  reverseDateTime() {
    if (this.timKiem.RangeDate.startDate) {
      this.timKiem.RangeDate.startDate = new Date(this.danhSachDieuTriNoiTruTuNgay.getFullYear(), this.danhSachDieuTriNoiTruTuNgay.getMonth(), this.danhSachDieuTriNoiTruTuNgay.getDate(), this.danhSachDieuTriNoiTruTuNgay.getHours(), this.danhSachDieuTriNoiTruTuNgay.getMinutes());
    }
    if (this.timKiem.RangeDate.endDate) {
      this.timKiem.RangeDate.endDate = new Date(this.danhSachDieuTriNoiTruDenNgay.getFullYear(), this.danhSachDieuTriNoiTruDenNgay.getMonth(), this.danhSachDieuTriNoiTruDenNgay.getDate(), this.danhSachDieuTriNoiTruDenNgay.getHours(), this.danhSachDieuTriNoiTruDenNgay.getMinutes());
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

  xemChoCapThuocBHYT(event: any) {
    this.router.navigate(['danh-sach-don-thuoc-cho-cap-thuoc/cho-cap-thuoc-bhyt/' + event.YeuCauTiepNhanId + '/' + event.BenhNhanId + '/' + event.TrangThai]);
  }

  exportExcel() {
    const self = this;
    self.showLoadingPopup();
    let timKiemChoCapThuocBHYTJSon = JSON.stringify(self.timKiem);
    self.exportQueryInfoQueryInfo.AdditionalSearchString = timKiemChoCapThuocBHYTJSon;
    self.convertDateTimeToUTC();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('QuayThuoc/ExportDonThuocChoCapThuocBHYT',
        self.exportQueryInfoQueryInfo).subscribe(
          resultData => {
            self.closeAllDialogs();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DanhSachDonThuocChoCapThuocBHYT' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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


  PrinAllDonThuocBenhNhan(donThuocThanhToanId: number, LoaiDonThuoc: any, YeuCauKhambenhId: any) {
    var data = {
      LoaiDonThuoc: LoaiDonThuoc,
      YeuCauKhambenhId: YeuCauKhambenhId,
      Hosting: null,
      TiepNhanId: donThuocThanhToanId
    }
    if (window.location.protocol == "http:") {
      data.Hosting = "http://" + window.location.host;
    } else {
      data.Hosting = "https://" + window.location.host;
    }

    this.apiService.post<any>("QuayThuoc/InThuocBenhNhan", data).subscribe(
      resultData => {
        let dialogRef = this.dialog.open(InDonThuocPopUpComponent, {
          width: '1000px',
          data: { Model: resultData, InDonThuocDanhSachList: false, InBangKe: true, InPhieuThu: false }
        }).afterClosed().subscribe(() => { });
      }, () => { });
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }
  searchChangeMaTN(event) {
    //xóa sreach trước đó
    var self = this;
    if (this.timeoutSearchChange != null) {
      clearTimeout(this.timeoutSearchChange);
      this.timeoutSearchChange = null;
    }
    this.timeoutSearchChange = setTimeout(function () {
      if (event !== undefined && event.endsWith("@")) {
        var dataTimKiem = event.split("|");
        if (dataTimKiem.length > 1) {
          self.timKiem.MaTiepNhan = dataTimKiem[0];
          self.TimKiemChoCapThuocBHYT();
        } else {
          self.timKiem.MaTiepNhan = null;
          self.timKiem.MaBenhNhan = event.slice(0, -1);
          self.TimKiemChoCapThuocBHYT();
        }
      }
    }, 100);
  }

  changeQR($event) {
    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
      this.modelQRCode = $event;
      var dataTimKiem = $event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiem.MaBenhNhan = dataTimKiem[0];
        this.TimKiemChoCapThuocBHYT();
      } else {
        this.timKiem.MaTiepNhan = $event.slice(0, -1); // Mã tiếp nhận @
        this.TimKiemChoCapThuocBHYT();
      }
    }
    else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }
}
