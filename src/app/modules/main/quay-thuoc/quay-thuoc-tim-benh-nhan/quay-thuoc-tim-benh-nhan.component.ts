import { Component, OnInit, Output, EventEmitter, HostListener, Input, ChangeDetectorRef } from '@angular/core';
import { TimBenhNhan, ThongTinBenhNhan, SearchInfoNhaThuoc, ExportQueryInfoQueryInfo, QuayThuocGridVo } from '../quay-thuoc.model';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { QuayThuocTimBenhNhanPopUpComponent } from '../quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component';
import { QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent } from '../quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { InBangThuTienPopUpComponent } from '../in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { type } from 'os';

@Component({
  selector: 'app-quay-thuoc-tim-benh-nhan',
  templateUrl: './quay-thuoc-tim-benh-nhan.component.html',
  styleUrls: ['./quay-thuoc-tim-benh-nhan.component.scss']
})
export class QuayThuocTimBenhNhanComponent implements OnInit {
  documentType: DocumentType;
  timKiem: TimBenhNhan;
  benhNhanId: ThongTinBenhNhan;
  quayThuocGridVo: QuayThuocGridVo;
  validationErrors: any;
  modelQRCode: any;
  isScanF1: boolean = false;
  tt111: number = 0;
  DateTuNgay: Date = null;
  DateDenNgay: Date = null;
  eXportExel: boolean = false;
  searchUuTien: boolean = true;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  public kiemTraDanhSachThanhToan: boolean = true;
  public kiemTraDanhSachDaThanhToan: boolean = true;

  @Input() typeDanhSachThanhToan: number;
  @Input() hoquerySearch: boolean = false;
  @Input() dataQuayThuocSearch: any;
  @Output() dataSearch = new EventEmitter<any>();
  @Output() onHaddlekiemTraDonThuocThanhToan = new EventEmitter<any>();
  @Output() onHaddleeXportExel = new EventEmitter<any>();
  @Output() onHaddleUuTienSearch = new EventEmitter<any>();
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private router: Router,
    private cd: ChangeDetectorRef,
    private authService: AuthService, private notificationService: NotificationService,
    private route: ActivatedRoute) { }
  queRyInFoSearchNhaThuoc: SearchInfoNhaThuoc = new SearchInfoNhaThuoc();
  // icon
  icFileExcel = icFileExcel;
  ngOnInit() {
    this.documentType = DocumentType.QuayThuoc;
    this.quayThuocGridVo = new QuayThuocGridVo();
    this.benhNhanId = new ThongTinBenhNhan();
    this.timKiem = new TimBenhNhan()
    if (this.timKiem.RangeDate.startDate == null) {
      this.DateTuNgay = new Date();
      this.timKiem.RangeDate.startDate = this.DateTuNgay;
    }
    if (this.timKiem.RangeDate.endDate == null) {
      this.DateDenNgay = new Date();
      this.timKiem.RangeDate.endDate = this.DateDenNgay;
    }


    if (this.typeDanhSachThanhToan == 1) // đang thanh toán
    {
      this.kiemTraDanhSachThanhToan = true;
      this.kiemTraDanhSachDaThanhToan = false;
      this.TimkiemId(this.typeDanhSachThanhToan);
    }
    if (this.typeDanhSachThanhToan == 2) // đã thanh toán
    {
      this.kiemTraDanhSachThanhToan = false;
      this.kiemTraDanhSachDaThanhToan = true;
      this.TimkiemId(this.typeDanhSachThanhToan);
    }
    if (this.typeDanhSachThanhToan == 0) // đang thanh toán  và đãn thanh toán
    {
      this.kiemTraDanhSachThanhToan = true;
      this.kiemTraDanhSachDaThanhToan = true;
      this.TimkiemId(this.typeDanhSachThanhToan);
    }
    if (this.typeDanhSachThanhToan == 3) // đang thanh toán  và đãn thanh toán
    {
      this.kiemTraDanhSachThanhToan = false;
      this.kiemTraDanhSachDaThanhToan = false;
      this.TimkiemId(this.typeDanhSachThanhToan);
    }
    if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
      this.timKiem.KiemTraThanhToan = 0;
      let data = this.timKiem.KiemTraThanhToan;
    }
    if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
      this.timKiem.KiemTraThanhToan = 3;
      let data = this.timKiem.KiemTraThanhToan;
      // this.onHaddlekiemTraDonThuocThanhToan.emit(data);
      this.TimkiemId(this.typeDanhSachThanhToan);
    }
    this.route
      .queryParams
      .subscribe(v => {
        this.timKiem.KiemTraThanhToan = v.page;

      });
    this.TimKiem(false);

  }
  TimkiemId(typeDanhSachThanhToan) {
    var searching = LocalStorageHelper.getItem<string>("additionalSearchStringChiTietNhaThuoc");
    let KiemTraLoCalAdditonalExit;
    if (searching != undefined && searching !== null && searching !== "") {
      KiemTraLoCalAdditonalExit = JSON.parse(searching);
      if (KiemTraLoCalAdditonalExit.MaBenhNhan != null) {
        this.timKiem.MaBenhNhan = KiemTraLoCalAdditonalExit.MaBenhNhan;
      }
      if (KiemTraLoCalAdditonalExit.MaTiepNhan != null) {
        this.timKiem.MaTiepNhan = KiemTraLoCalAdditonalExit.MaTiepNhan;
      }
      if (KiemTraLoCalAdditonalExit.HoTen != null) {
        this.timKiem.HoTen = KiemTraLoCalAdditonalExit.HoTen;
      }
      if (KiemTraLoCalAdditonalExit.SoDienThoai != null) {
        this.timKiem.SoDienThoai = KiemTraLoCalAdditonalExit.SoDienThoai;
      }
      if (KiemTraLoCalAdditonalExit.typeDanhSachThanhToan != null) {
        this.typeDanhSachThanhToan = KiemTraLoCalAdditonalExit.typeDanhSachThanhToan;
      }
      if (KiemTraLoCalAdditonalExit.DateStart != null) {
        this.timKiem.RangeDate.startDate = new Date(KiemTraLoCalAdditonalExit.DateStart);
      }
      else {
        this.timKiem.RangeDate.startDate = null;
      }
      if (KiemTraLoCalAdditonalExit.DateEnd != null) {
        this.timKiem.RangeDate.endDate = new Date(KiemTraLoCalAdditonalExit.DateEnd);
      }
      else {
        this.timKiem.RangeDate.endDate = null;
      }
    }
    if (searching == null || searching == undefined || searching == "") {
      this.timKiem.MaBenhNhan = null;
      this.timKiem.MaTiepNhan = null;
      this.timKiem.HoTen = null;
      this.timKiem.SoDienThoai = null;
      this.typeDanhSachThanhToan = this.timKiem.KiemTraThanhToan;

    }
  }
  ngOnChanges(event: any) {
    if (event.dataQuayThuocSearch != null || event.dataQuayThuocSearch != undefined) {
      if (event.dataQuayThuocSearch.currentValue != null || event.dataQuayThuocSearch.currentValue != undefined) {
        this.dataQuayThuocSearch = event.dataQuayThuocSearch.currentValue;
        if (this.dataQuayThuocSearch.Data.length > 0) {
          if (this.dataQuayThuocSearch.Data.length == 1) {
            
            if (this.hoquerySearch == true) {
              this.XemChiTiet(this.dataQuayThuocSearch.Data);
            }
          }
        }
        else {
          if (this.hoquerySearch == true) {
          this.searchAll();
          }
        }
      }
    }

  }
  XemChiTiet(data) {
    if (data != null) {
      if (data != null && data.length > 0) {
        if (data.length == 1) {
          //KHông có toa thuốc đang chờ thanh toán hoặc chờ xuất thuốc
          if (this.dataQuayThuocSearch.Data[0].Id > 0) {
            if (this.timKiem.KiemTraThanhToan == undefined) {
              this.timKiem.KiemTraThanhToan = 3;
            }
            this.router.navigate(['nha-thuoc/mua-thuoc/' + data[0].Id + '/' + data[0].MaBN + '/' + data[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
          }
        }
      }
    }
  }
  searchAll() {
    let maBenhNhanQueryString = null;
    let maTiepNhanQueryString = null;
    let hoTenNhanQueryString = null;
    let sdtQueryString = null;
    let KtraQueryString = null;
    let KtraQueryRangeStartString = null;
    let KtraQueryRangeEndString = null;

    if (this.timKiem.MaBenhNhan != null) {
      maBenhNhanQueryString = "\"" + this.timKiem.MaBenhNhan + "\"";
      this.queRyInFoSearchNhaThuoc.MaBenhNhan = this.timKiem.MaBenhNhan;
    }
    if (this.timKiem.MaTiepNhan != null) {
      maTiepNhanQueryString = "\"" + this.timKiem.MaTiepNhan + "\"";
      this.queRyInFoSearchNhaThuoc.MaTiepNhan = this.timKiem.MaTiepNhan;
    }
    if (this.timKiem.HoTen != null) {
      hoTenNhanQueryString = "\"" + this.timKiem.HoTen + "\"";
      this.queRyInFoSearchNhaThuoc.HoTen = this.timKiem.HoTen;
    }
    if (this.timKiem.SoDienThoai != null) {
      sdtQueryString = "\"" + this.timKiem.SoDienThoai + "\"";
      this.queRyInFoSearchNhaThuoc.SoDienThoai = this.timKiem.SoDienThoai;
    }
    if (this.timKiem.KiemTraThanhToan != null) {
      KtraQueryString = "\"" + this.timKiem.KiemTraThanhToan + "\"";
      this.queRyInFoSearchNhaThuoc.KiemTraThanhToan = "\"" + this.timKiem.KiemTraThanhToan + "\"";
    }
    if (this.timKiem.RangeDate.endDate != null) {
      KtraQueryRangeEndString = "\"" + CommonService.formatDateTime(this.timKiem.RangeDate.endDate, "mm/dd/yyyy") + "\"";
    }
    if (this.timKiem.RangeDate.startDate != null) {
      KtraQueryRangeStartString = "\"" + CommonService.formatDateTime(this.timKiem.RangeDate.startDate, "mm/dd/yyyy") + "\"";
    }
    //

    if (this.timKiem.MaBenhNhan == "") {
      maBenhNhanQueryString = null;
      this.queRyInFoSearchNhaThuoc.MaBenhNhan = "";
    }
    if (this.timKiem.MaTiepNhan == null) {
      maTiepNhanQueryString = null;
      this.queRyInFoSearchNhaThuoc.MaTiepNhan = "";
    }
    if (this.timKiem.HoTen == null) {
      hoTenNhanQueryString = null;
      this.queRyInFoSearchNhaThuoc.HoTen = "";
    }
    if (this.timKiem.SoDienThoai == null) {
      sdtQueryString = null;
      this.queRyInFoSearchNhaThuoc.SoDienThoai = "";
    }
    if (this.timKiem.KiemTraThanhToan == null) {
      KtraQueryString = null;
      this.queRyInFoSearchNhaThuoc.KiemTraThanhToan = "";
    }
    if (this.timKiem.RangeDate.startDate == null) {
      KtraQueryRangeStartString = null;
    }
    if (this.timKiem.RangeDate.endDate == null) {
      KtraQueryRangeEndString = null;
    }
    let dateTimeNow = new Date();
    let queryString = "{\"MaBenhNhan\":" + maBenhNhanQueryString + ",\"MaTiepNhan\":" + maTiepNhanQueryString
      + ",\"HoTen\":" + hoTenNhanQueryString + ",\"SoDienThoai\":" + sdtQueryString + ",\"KiemTraThanhToan\":" + KtraQueryString + ",\"DateStart\":" + KtraQueryRangeStartString + ",\"DateEnd\":" + KtraQueryRangeEndString + "}";
    this.apiService.post<Array<any>>("QuayThuoc/TimKiemBenhNhan?search=" + queryString).subscribe(
      resultData => {
        // dialogRef.close();
        if (resultData != null && resultData.length > 0) {
          if (resultData.length == 1) {
            //KHông có toa thuốc đang chờ thanh toán hoặc chờ xuất thuốc
            if (resultData[0].Id > 0) {
              if (this.timKiem.KiemTraThanhToan == undefined) {
                this.timKiem.KiemTraThanhToan = 3;
              }
              this.router.navigate(['nha-thuoc/mua-thuoc/' + resultData[0].Id + '/' + resultData[0].MaBN + '/' + resultData[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
            }
            else if (resultData[0].DonThuocThanhToanExits == true) {
              if (this.timKiem.KiemTraThanhToan == undefined) {
                this.timKiem.KiemTraThanhToan = 3;
              }

              this.router.navigate(['nha-thuoc/mua-toa-cu/' + resultData[0].MaBN + '/' + this.timKiem.KiemTraThanhToan]);
            }
          }
          else {
            if (resultData.length == 1) {
              if (resultData[0].Id > 0) {
                this.router.navigate(['nha-thuoc/mua-thuoc/' + resultData[0].Id + '/' + resultData[0].MaBN + '/' + resultData[0].TrangThai + '/' + this.timKiem.KiemTraThanhToan]);
              }
              else {
                if (resultData[0].DonThuocThanhToanExits == true) {
                  this.router.navigate(['nha-thuoc/mua-toa-cu/' + resultData[0].MaBN + '/' + this.timKiem.KiemTraThanhToan]);
                }
                else {
                  let dialogRef = this.dialog.open(QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent, {
                    disableClose: true,
                    width: '500px',
                    data: { Model: resultData[0], KiemTraThanhToan: this.timKiem.KiemTraThanhToan, Title: "XÁC NHẬN" }
                  }).afterClosed().subscribe(result => {
                  });
                }

              }
            }
            else {
              let dialogRef = this.dialog.open(QuayThuocTimBenhNhanPopUpComponent, {
                width: '1500px',
                data: { Model: resultData, Title: "Tìm kiếm người bệnh" }
              }).afterClosed().subscribe(result => {
                if (typeof (result) == 'object') {
                  this.dataSearch.emit(result);
                }
              });
            }
          }
        } else if (resultData == null) {
          this.notificationService.showError("Không có người bệnh.");
        }
        else {
          // this.notificationService.showError("Người bệnh này chưa có toa thuốc tại bệnh viện.");
          let dialogRef = this.dialog.open(QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent, {
            disableClose: true,
            width: '500px',
            data: { Model: null, KiemTraThanhToan: this.timKiem.KiemTraThanhToan, TenBenhNhanSearch: this.timKiem.HoTen, SoDienThoaiSearch: this.timKiem.SoDienThoai, Title: "XÁC NHẬN" } // null là người bệnh không tồn tại
          }).afterClosed().subscribe(result => {
          });
        }
      },
      (err: ApiError) => {

      });
  }
  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
      event.preventDefault();
      this.QuetMaQRCodeClick();
      this.isScanF1 = true;
    }
    else if (event.keyCode == 81 && this.isScanF1 == true) {
      event.preventDefault();
    }
  }
  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }
  changeQR($event) {
    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
      this.modelQRCode = $event;
      var dataTimKiem = $event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiem.MaBenhNhan = dataTimKiem[0];
        this.TimKiem(true);
      } else {
        this.timKiem.MaTiepNhan = $event.slice(0, -1); // Mã tiếp nhận @
        this.TimKiem(true);
      }
    }
    else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }
  onKey3(event: any) {
    if (event.key == 'Enter') {
    }
  }
  changRange(event: any) {
  }
  TimKiem(kiemTra:boolean) {
    this.hoquerySearch =kiemTra;
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.router.navigate(['nha-thuoc'], { queryParams: { page: this.timKiem.KiemTraThanhToan,hoQuerysearch:true} })
    let dateTimeNow = new Date();
    this.quayThuocGridVo.MaBenhNhan = this.timKiem.MaBenhNhan;
    this.quayThuocGridVo.MaTiepNhan = this.timKiem.MaTiepNhan;
    this.quayThuocGridVo.HoTen = this.timKiem.HoTen;
    this.quayThuocGridVo.SoDienThoai = this.timKiem.SoDienThoai;
    if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
      this.timKiem.KiemTraThanhToan = 0;
    }
    if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
      this.timKiem.KiemTraThanhToan = 3;
    }
    this.quayThuocGridVo.KiemTraThanhToan = this.timKiem.KiemTraThanhToan;
    this.quayThuocGridVo.DieuKienLoadVaoChiTiet = true;
    if (this.timKiem.RangeDate.endDate != null) {
      this.quayThuocGridVo.DateEnd = CommonService.formatDate(this.timKiem.RangeDate.endDate, "mm/dd/yyyy")+" 11:59 PM";
    }
    else {
      this.quayThuocGridVo.DateEnd = null;
    }
    if (this.timKiem.RangeDate.startDate != null) {
      this.quayThuocGridVo.DateStart = CommonService.formatDate(this.timKiem.RangeDate.startDate, "mm/dd/yyyy")+" 12:00 AM";
    }
    else {
      this.quayThuocGridVo.DateStart = null;
    }
    this.quayThuocGridVo.DateNow = dateTimeNow;
    let queryStringSearchUuTien = JSON.stringify(this.quayThuocGridVo);
    LocalStorageHelper.setItem("additionalSearchStringChiTietNhaThuoc", queryStringSearchUuTien);
    if (this.searchUuTien == true) {
      this.onHaddleUuTienSearch.emit(queryStringSearchUuTien);
      dialogRef.close();
    }
  }

  KhachVangLai() { }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.TimKiem(true);
    }
  }
  blurChange($event: any, isSoTheBHYT: boolean) {

  }
  shareData1() {
    return this.benhNhanId;
  }
  checkTrangThai(event: any, type: number) {
    this.cd.detectChanges();
    if (type == 1 && event == true) {
      this.kiemTraDanhSachThanhToan = event;

      this.router.navigate(['nha-thuoc'], { queryParams: { page: type } });

    }
    else if (type == 1 && event == false) {
      this.kiemTraDanhSachThanhToan = false;
    }
    if (type == 2 && event == true) {
      this.kiemTraDanhSachDaThanhToan = event;

      this.router.navigate(['nha-thuoc'], { queryParams: { page: type } });
    }
    else if (type == 2 && event == false) {
      this.kiemTraDanhSachDaThanhToan = false;
    }
    if (this.kiemTraDanhSachThanhToan == true) {
      this.router.navigate(['nha-thuoc'], { queryParams: { page: 1 } });
      this.timKiem.KiemTraThanhToan = 1;
      let data = this.timKiem.KiemTraThanhToan;
    }
    if (this.kiemTraDanhSachDaThanhToan == true) {
      this.router.navigate(['nha-thuoc'], { queryParams: { page: 2 } });
      this.timKiem.KiemTraThanhToan = 2;
      let data = this.timKiem.KiemTraThanhToan;
    }
    if (this.kiemTraDanhSachThanhToan == true && this.kiemTraDanhSachDaThanhToan == true) {
      this.router.navigate(['nha-thuoc'], { queryParams: { page: 0 } });
      this.timKiem.KiemTraThanhToan = 0;
      let data = this.timKiem.KiemTraThanhToan;
    }
    if (this.kiemTraDanhSachThanhToan == false && this.kiemTraDanhSachDaThanhToan == false) {
      this.router.navigate(['nha-thuoc'], { queryParams: { page: 3 } });
      this.timKiem.KiemTraThanhToan = 3;
      let data = this.timKiem.KiemTraThanhToan;
    }
    this.TimKiem(true);
  }
  timeoutSearchChange: any;

  searchChangeMaBN(event) {
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
          self.timKiem.MaBenhNhan = dataTimKiem[0];
          self.TimKiem(true);
        } else {
          self.timKiem.MaBenhNhan = null;
          self.timKiem.MaTiepNhan = event.slice(0, -1);
          self.TimKiem(true);
        }
      }
    }, 100);
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
          self.TimKiem(true);
        } else {
          self.timKiem.MaTiepNhan = null;
          self.timKiem.MaBenhNhan = event.slice(0, -1);
          self.TimKiem(true);
        }
      }
    }, 100);
  }
  // EXPORT ÊXCEL
  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    let dateTimeNow = new Date();
    this.quayThuocGridVo.MaBenhNhan = this.timKiem.MaBenhNhan;
    this.quayThuocGridVo.MaTiepNhan = this.timKiem.MaTiepNhan;
    this.quayThuocGridVo.HoTen = this.timKiem.HoTen;
    this.quayThuocGridVo.SoDienThoai = this.timKiem.SoDienThoai;
    this.quayThuocGridVo.KiemTraThanhToan = this.timKiem.KiemTraThanhToan;
    this.quayThuocGridVo.DieuKienLoadVaoChiTiet = true;
    if (this.timKiem.RangeDate.endDate != null) {
      this.quayThuocGridVo.DateEnd = CommonService.formatDateTime(this.timKiem.RangeDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.quayThuocGridVo.DateEnd = null;
    }
    if (this.timKiem.RangeDate.startDate != null) {
      this.quayThuocGridVo.DateStart = CommonService.formatDateTime(this.timKiem.RangeDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.quayThuocGridVo.DateStart = null;
    }
    this.quayThuocGridVo.DateNow = dateTimeNow;
    let queryStringSearchUuTien = JSON.stringify(this.quayThuocGridVo);
    self.exportQueryInfoQueryInfo.AdditionalSearchString = queryStringSearchUuTien;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('QuayThuoc/ExportDonThuocTrongNgay',
        self.exportQueryInfoQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DonThuocTrongNgay' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }
  blur(event: any) {
    this.TimKiem(true);
  }
}
