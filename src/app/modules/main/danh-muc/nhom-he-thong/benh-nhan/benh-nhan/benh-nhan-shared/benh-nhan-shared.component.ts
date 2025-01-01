import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';
import {
  PrintSession, ThongTinBenhNhan, BenhNhanTienSuBenhViewModel
  , BenhNhan, BenhNhanDiUngThuocViewModel, BenhNhanBaoHiemTuNhanViewModel, BenhNhanTienSuBenhChiTiet, BenhNhanDiUngThuocChiTiet
} from '../benh-nhan.model';
import { ThemBaoHiemTuNhan, ThemBaoHiemTuNhanGridVo } from 'src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DatePipe, IntlService } from '@progress/kendo-angular-intl';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BaseService } from 'src/app/core/services/base.service';
import { BaoHiemYTe } from '../../../../bao-hiem-y-te/bao-hiem-y-te.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { TheBenhNhanBenhNhanPopupComponent } from '../the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { ThongTinBenhNhanTimKiemBHYT } from 'src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';

@Component({
  selector: 'app-benh-nhan-shared',
  templateUrl: './benh-nhan-shared.component.html',
  styleUrls: ['./benh-nhan-shared.component.scss']
})
export class BenhNhanSharedComponent implements OnInit {
  printSession = {} as PrintSession;
  benhNhan: BenhNhan;
  validationErrors: any;
  isCreate = true;
  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;
  benhNhanId: number = 0;
  maSoTheDaTimKiem: string;
  hoTenDaTimKiem: string;
  isScanF1 = false;
  isLoadingDataBHYT: boolean = false;
  IsCheckBHYT: boolean = null;

  tenDiUng: string;
  isSearchQRCodeEnable: boolean = true;
  ngaySinhDaTimKiem: Date;
  thongTinBenhNhan: ThongTinBenhNhan;

  //=============BẢO HIỂM TƯ NHÂN
  baoHiemTuNhan: BenhNhanBaoHiemTuNhanViewModel = new BenhNhanBaoHiemTuNhanViewModel();
  lstBHTN: BenhNhanBaoHiemTuNhanViewModel[] = [];
  gridDataSourceBHTN: any = {
    data: [],
    total: 0
  }
  gridColumns: any[] = [];
  isUpdateGrid: boolean = false;
  isIdNeedUpdate: number = null;
  showFormDetailBaoHiemTuNhan: boolean = false;
  validationErrorsBHTN: any;
  modelQRCode: BaoHiemYTe;
  popupLoadingData: any;

  //=============TIỀN SỬ BỆNH
  tienSuBenh: BenhNhanTienSuBenhViewModel = new BenhNhanTienSuBenhViewModel();
  lstTienSuBenh: BenhNhanTienSuBenhViewModel[] = [];
  gridDataSourceTienSuBenh: any = {
    data: [],
    total: 0
  }
  gridColumnsTienSuBenh: any[] = [];
  tenBenh: string = null;
  isUpdateGridTienSuBenh: boolean = false;
  showFormDetailTienSuBenh: boolean = false;
  validationErrorsTSB: any;
  //=============DỊ ỨNG THUỐC
  diUngThuoc: BenhNhanDiUngThuocViewModel = new BenhNhanDiUngThuocViewModel();
  lstDiUngThuoc: BenhNhanDiUngThuocViewModel[] = [];
  gridDataSourceDiUngThuoc: any = {
    data: [],
    total: 0
  }
  idLoaiDiUng: number = 0;
  gridColumnsDiUngThuoc: any[] = [];
  isUpdateGridDiUngThuoc: boolean = false;
  showFormDetailDiUngThuoc: boolean = false;
  validationErrorsDUT: any;

  isSelectBHTN: boolean = false;
  isSelectTSB: boolean = false;
  isSelectDUT: boolean = false;

  under6yearsold: boolean = false;
  soTuoiDisplay: string;

  documentType: DocumentType;
  isSetValue: boolean = false;
  isCheckedBHYT: boolean = false;
  isActivePopup: boolean = false;
  @ViewChild('gridBHTNBenhNhan', { static: true }) gridChildBHTN: GridComponent;
  @ViewChild('gridTienSuBenh', { static: false }) gridTienSuBenh: GridComponent;
  @ViewChild('gridDiUngThuoc', { static: false }) gridDiUngThuoc: GridComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('actionTemplateTienSuBenh', { static: true }) actionTemplateTienSuBenh: TemplateRef<any>;
  @ViewChild('actionTemplateDiUngThuoc', { static: true }) actionTemplateDiUngThuoc: TemplateRef<any>;
  @ViewChild('tenThuocTemplate', { static: true }) tenThuocTemplate: TemplateRef<any>;
  @ViewChild('loaiDiUngTemplate', { static: true }) loaiDiUngTemplate: TemplateRef<any>;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public intl: IntlService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router,
    private baseService: BaseService) { }


  ngOnInit() {
    this.thongTinBenhNhan = new ThongTinBenhNhan();
    this.benhNhan = new BenhNhan();
    this.baoHiemTuNhan = new BenhNhanBaoHiemTuNhanViewModel();
    this.baoHiemTuNhan.CongTyBHTNIds = new Array<number>();
    this.documentType = DocumentType.BenhNhan;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.benhNhanId = id;
      this.getById(id);
      this.isCreate = false;

    } else {

      this.benhNhan.CoBHYT = true;
      this.setDefaultData();
    }
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60 },
      { Field: "CongTyDisplay", Title: "Công ty", Width: 200 },
      { Field: "MaSoThe", Title: "Số thẻ", Width: 150 },
      { Field: "NgayHieuLucDisplay", Title: "Từ ngày", Width: 150 },
      { Field: "NgayHetHanDisplay", Title: "Đến ngày", Width: 150 },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 150 },
      { Field: "DiaChi", Title: "Địa chỉ", minWidth: 150 },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];

    this.gridColumnsTienSuBenh = [
      { Field: "STT", Title: "STT", Width: 60 },
      { Field: "TenLoaiTienSuBenh", Title: "Loại Tiền Sử Bệnh", Width: 250 },
      { Field: "TenBenh", Title: "Tên Bệnh", minWidth: 200 },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplateTienSuBenh },
    ];

    this.gridColumnsDiUngThuoc = [
      { Field: "STT", Title: "STT", Width: 60 },
      { Field: "LoaiDiUngDisplay", Title: "Loại Dị Ứng", Width: 250 },
      { Field: "TenDiUng", Title: "Tên Dị Ứng", Width: 300 },
      { Field: "BieuHienDiUng", Title: "Biểu Hiện Dị Ứng", minWidth: 150 },
      { Field: "MucDoDisplay", Title: "Mức độ", Width: 150 },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplateDiUngThuoc },
    ];

  }

  getSharedData() {
    return this.benhNhan;
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      var dialog = self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: "Đang tải dữ liệu..." }
      });
      self.baseService.getById<BenhNhan>(id).subscribe(resultData => {
        self.benhNhan = resultData;
        if (resultData.NamSinh != null && resultData.ThangSinh != null && resultData.NgaySinh != null) {
          let ngayThangNamSinh = new Date(resultData.NgayThangNamSinh);
          this.getAge(ngayThangNamSinh, new Date);

        }
        if (self.benhNhan.BenhNhanTienSuBenhs != []) {
          self.lstTienSuBenh = new Array<BenhNhanTienSuBenhViewModel>();
          self.lstTienSuBenh = self.benhNhan.BenhNhanTienSuBenhs
          self.gridDataSourceTienSuBenh.data = self.benhNhan.BenhNhanTienSuBenhs;
          let indexs = 1;
          self.gridDataSourceTienSuBenh.data.forEach((obj: { STT: number; }) => {
            obj.STT = indexs;
            indexs++;
          });
          self.setValueForGridTienSuBenh();
        }
        if (self.benhNhan.BenhNhanDiUngThuocs != []) {
          self.lstDiUngThuoc = new Array<BenhNhanDiUngThuocViewModel>();
          self.lstDiUngThuoc = self.benhNhan.BenhNhanDiUngThuocs;
          console.log("self.lstDiUngThuoc: ", self.lstDiUngThuoc)
          self.gridDataSourceDiUngThuoc.data = self.benhNhan.BenhNhanDiUngThuocs;
          let indexs = 1;
          self.gridDataSourceDiUngThuoc.data.forEach((obj: { STT: number; }) => {
            obj.STT = indexs;
            indexs++;
          });
          self.setValueForGridDiUngThuoc();
        }
        if (self.benhNhan.BenhNhanCongTyBaoHiemTuNhans != []) {
          self.lstBHTN = new Array<BenhNhanBaoHiemTuNhanViewModel>();
          self.lstBHTN = self.benhNhan.BenhNhanCongTyBaoHiemTuNhans;
          self.gridDataSourceBHTN.data = self.benhNhan.BenhNhanCongTyBaoHiemTuNhans;
          let index2 = 1;
          self.gridDataSourceBHTN.data.forEach((obj: { STT: number; }) => {
            obj.STT = index2;
            index2++;
          });
          self.setValueForGridCongTyBHTN();
        }
        dialog.close();
      },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          dialog.close();
        }
      );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  // Người bệnh

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    let monthEnd: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }
  getAge(date_1, date_2) {

    date_1 = new Date(date_1);
    date_2 = new Date(date_2);
    // }
    //convert to UTC
    let date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
    let date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));

    let yAppendix, mAppendix, dAppendix;
    //--------------------------------------------------------------
    let days = date2_UTC.getDate() - date1_UTC.getDate();
    if (days < 0) {

      date2_UTC.setMonth(date2_UTC.getMonth() - 1);
      days += this.DaysInMonth(date2_UTC);
    }
    //--------------------------------------------------------------
    let months = date2_UTC.getMonth() - date1_UTC.getMonth();
    if (months < 0) {
      date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
      months += 12;
    }
    //--------------------------------------------------------------
    let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.under6yearsold = true;
    }
    else {
      this.under6yearsold = false;
    }

    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
    //console.log(years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);
  }





  TinhThanhPhoChange(event: any) {
    this.benhNhan.QuanHuyenId = null;
    this.benhNhan.PhuongXaId = null;
  }

  QuanHuyenChange(event: any) {
    this.benhNhan.QuanHuyenId = event;
    this.benhNhan.PhuongXaId = null;
  }

  PhuongXaChange(event: any) {
    if (event != null && event != undefined) {
      this.apiService.post<any>("benhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.benhNhan.TinhThanhId = resultData.TinhThanhId;
          this.benhNhan.QuanHuyenId = resultData.QuanHuyenId;
        },
        (err: any) => {
        });
    }
    else {
      this.benhNhan.TinhThanhId = null;
      this.benhNhan.QuanHuyenId = null;
    }
  }

  TinhThanhPhoNguoiLienHeChange(event: any) {
    this.benhNhan.NguoiLienHeQuanHuyenId = null;
    this.benhNhan.NguoiLienHePhuongXaId = null;
  }

  QuanHuyenNguoiLienHeChange(event: any) {
    this.benhNhan.NguoiLienHeQuanHuyenId = event;
    this.benhNhan.NguoiLienHePhuongXaId = null;
  }

  PhuongXaNguoiLienHeChange(event: any) {
    if (event != null && event != undefined) {
      this.apiService.post<any>("benhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.benhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
          this.benhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
        },
        (err: any) => {
        });
    }
    else {
      this.benhNhan.NguoiLienHeTinhThanhId = null;
      this.benhNhan.NguoiLienHeQuanHuyenId = null;
    }
  }


  ThongTinBenhNhanMaSoTHeChange($event) {
    if (this.maSoTheDaTimKiem == $event && this.ngaySinhDaTimKiem == this.benhNhan.NgayThangNamSinh
      && this.hoTenDaTimKiem == this.benhNhan.HoTen) {
      this.isSearchQRCodeEnable = false;
    }
    else {
      this.isSearchQRCodeEnable = true;
    }
  }

  ThongTinBenhNhanNgaySinhChange($event) {
    if (this.hoTenDaTimKiem == this.benhNhan.HoTen && this.ngaySinhDaTimKiem == $event
      && this.maSoTheDaTimKiem == this.benhNhan.BHYTMaSoThe) {
      this.isSearchQRCodeEnable = false;
    }
    else {
      this.isSearchQRCodeEnable = true;
    }
    if (this.benhNhan.NgayThangNamSinh != null) {
      this.benhNhan.NamSinh = this.benhNhan.NgayThangNamSinh.getFullYear();
    }
  }

  setDefaultData() {

    this.isSearchQRCodeEnable = true;

    this.hoTenDaTimKiem = null;
    this.maSoTheDaTimKiem = null;
    this.ngaySinhDaTimKiem = null;
    // this.soPhanTramHuongBHYT = null;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectBHTN != true) {
        this.themCongTyBHTN();
      }
      else {
        this.isSelectBHTN = false;
      }
      if (this.isSelectTSB != true) {
        this.themTienSuBenh();
      }
      else {
        this.isSelectTSB = false;
      }
      if (this.isSelectDUT != true) {
        this.ThemDiUngThuoc();
      }
      else {
        this.isSelectDUT = false;
      }
    }
  }

  setValueBHYT(model: BaoHiemYTe) {
    //console.log("setValueBHYT = ", model, this.isSetValue);
    if (model != null && model.maSoBHXH == null && this.isSetValue == false && model != undefined || this.isActivePopup == true) return;
    this.isSetValue = true;
    this.benhNhan.BHYTMaSoThe = model.maThe;
    this.benhNhan.BHYTDiaChi = model.diaChi;
    this.benhNhan.BHYTMaDKBD = model.maDKBD;
    var dateParts2 = model.gtTheTu.split("/");
    this.benhNhan.BHYTNgayHieuLuc = new Date(+dateParts2[2], +dateParts2[1] - 1, + dateParts2[0]);

    if (model.gtTheDen != undefined && model.gtTheDen != null) {
      var dateParts3 = model.gtTheDen.split("/");
      this.benhNhan.BHYTNgayHetHan = new Date(+dateParts3[2], +dateParts3[1] - 1, + dateParts3[0]);
    }
    this.benhNhan.BHYTCoQuanBHXH = model.cqBHXH;

    if (model.ngayDu5Nam != null && model.ngayDu5Nam != undefined && model.ngayDu5Nam != "") {
      var dateParts4 = model.ngayDu5Nam.split("/");
      this.benhNhan.BHYTNgayDu5Nam = new Date(+dateParts4[2], + dateParts4[1] - 1, +dateParts4[0]);
    }
    this.getAge(this.benhNhan.NgayThangNamSinh, new Date);
    this.hoTenDaTimKiem = model.hoTen;
    this.maSoTheDaTimKiem = model.maThe;
    this.ngaySinhDaTimKiem = this.benhNhan.NgayThangNamSinh
    this.isSetValue = false;
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  clearThongTinTheBHYT(benhNhan: BenhNhan) {
    benhNhan.BHYTMaSoThe = null;
    benhNhan.BHYTDiaChi = null;
    benhNhan.BHYTMaDKBD = null;
    benhNhan.BHYTCoQuanBHXH = null;
    benhNhan.BHYTNgayHieuLuc = null;
    benhNhan.BHYTNgayHetHan = null;
    benhNhan.BHYTNgayDu5Nam = null;
  }

  setNoiDKBD(benhNhan) {
    this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + benhNhan.MaDKBD).subscribe(
      resultData => {
        benhNhan.NoiDangKyBHYT = resultData;
      },
      () => {
      });
  }

  timeout = null;
  changeThongTinGetBHYT(benhNhan, isLoadingDataBHYT) {
    var self = this;
    if (!isLoadingDataBHYT && benhNhan.IsChange) {
      self.isLoadingDataBHYT = true;
      benhNhan.IsCheckedBHYT = null;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
        self.getThongTinTheBHYT(benhNhan);
      }, 1000);
    }
  }

  onKeySoTheBHYT(event, benhNhan, isLoadingDataBHYT) {
    if (event.keyCode == 13) {
      this.changeThongTinGetBHYT(benhNhan, isLoadingDataBHYT);
    }
  }

  changeSoTheBHYT(theBHYT: any) {
    if (!this.benhNhan.TuNhap) {
      theBHYT.IsChange = true;
    }
  }

  getThongTinTheBHYT(benhNhan: BenhNhan) {
    if (benhNhan.BHYTMaSoThe
      && this.benhNhan.HoTen
      && (this.benhNhan.NamSinh != null || this.benhNhan.NgayThangNamSinh != null)
      && !this.benhNhan.TuNhap) {
      this.showPopupLoadingData();
      let thongTinBenhNhan: ThongTinBenhNhanTimKiemBHYT = new ThongTinBenhNhanTimKiemBHYT(
        benhNhan.BHYTMaSoThe,
        this.benhNhan.HoTen,
        this.benhNhan.NgayThangNamSinh,
        null,
        this.benhNhan.NamSinh
      );
      this.apiService
        .post<any>("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
        .subscribe(
          (resultData) => {
            if (resultData == null || (resultData != null && resultData.maKetQua == "050")) {
              this.notificationService.showError('Thẻ BHYT này không tồn tại');
              this.clearThongTinTheBHYT(benhNhan);
              this.isLoadingDataBHYT = false;
            }
            else {
              benhNhan.BHYTMaDKBD = resultData.maDKBD;
              benhNhan.BHYTDiaChi = resultData.diaChi;
              benhNhan.BHYTCoQuanBHXH = resultData.cqBHXH;
              benhNhan.BHYTNgayHieuLuc = CommonService.FormatDateStringToDate(resultData.gtTheTu);
              benhNhan.BHYTNgayHetHan = CommonService.FormatDateStringToDate(resultData.gtTheDen);
              benhNhan.BHYTNgayDu5Nam = CommonService.FormatDateStringToDate(resultData.ngayDu5Nam);
              if (benhNhan.BHYTMaDKBD != null && benhNhan.BHYTMaDKBD != "") {
                this.setNoiDKBD(benhNhan);
              }
              this.isLoadingDataBHYT = false;
              this.closePopupLoadingData();
            }
          },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.clearThongTinTheBHYT(benhNhan);
            this.isLoadingDataBHYT = false;
            this.closePopupLoadingData();
          }
        );
    }
    else {
      this.isLoadingDataBHYT = false;
    }
  }

  changeQR($event) {
    if ($event != null) {
      this.modelQRCode = $event;
      this.setValueBHYT(this.modelQRCode);
    }
    else {
    }
    this.isScanF1 = false;
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
      this.isScanF1 = true;
    }
  }
  inputQrCode(qrCode: string) {
    //console.log("qrCode:", qrCode)
    this.apiService.post<any>("BHYT/GetInfoFromURL/?model=" + qrCode).subscribe(
      resultData => {
        if (resultData != undefined) {
          this.setValueBHYT(resultData);
          //console.log("data trả về BHYT:", resultData)
        }
      },
      () => {
      });

  }

  getThongTinBHYTonKey(isSoTheBHYT: boolean) {
    if (isSoTheBHYT == true && this.benhNhan.BHYTMaSoThe != null
      && this.benhNhan.BHYTMaSoThe.includes("$")) {
      this.inputQrCode(this.benhNhan.BHYTMaSoThe);
    }
  }

  congTyBaoHiemChange(event: number) {
    if (event != undefined && event != null) {
      this.validationErrors = null;
      this.apiService.post<ThemBaoHiemTuNhan>("benhNhan/GetThongTinBHTN/?congTyBaoHiemTuNhanId=" + event).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.baoHiemTuNhan.DiaChi = resultData.DiaChi;
            this.baoHiemTuNhan.SoDienThoai = resultData.SoDienThoai;
          }
          else {
            this.baoHiemTuNhan.DiaChi = null;
            this.baoHiemTuNhan.SoDienThoai = null;
          }
        },
        () => {
          this.baoHiemTuNhan.DiaChi = null;
          this.baoHiemTuNhan.SoDienThoai = null;
        });
    }
    else {
      this.baoHiemTuNhan.DiaChi = null;
      this.baoHiemTuNhan.SoDienThoai = null;
    }
  }

  //=====================THÔNG TIN BẢO HIỂM TƯ NHÂN
  ThemTTBHNDetail() {
    this.baoHiemTuNhan = new BenhNhanBaoHiemTuNhanViewModel();
    this.showFormDetailBaoHiemTuNhan = !this.showFormDetailBaoHiemTuNhan;

    this.showFormDetailTienSuBenh = false;
    this.showFormDetailDiUngThuoc = false;

    if (this.validationErrorsBHTN == undefined) {
      this.validationErrorsBHTN = [];
    } else {
      if (this.validationErrorsBHTN != null && this.validationErrorsBHTN.length != 0) {
        this.validationErrorsBHTN = [];
      }
    }
  }

  enableUpdateGird(id: number) {
    this.isUpdateGrid = true;
    this.isIdNeedUpdate = id;
  }

  updateGridBHTN(dataItem: ThemBaoHiemTuNhanGridVo) {
    this.isUpdateGrid = true;
    this.showFormDetailBaoHiemTuNhan = true;
    //set
    this.baoHiemTuNhan.CongTyBaoHiemTuNhanId = dataItem.CongTyBaoHiemTuNhanId;
    this.baoHiemTuNhan.DiaChi = dataItem.DiaChi;
    this.baoHiemTuNhan.MaSoThe = dataItem.MaSoThe;
    this.baoHiemTuNhan.NgayHetHan = dataItem.NgayHetHan;
    this.baoHiemTuNhan.NgayHieuLuc = dataItem.NgayHieuLuc;
    this.baoHiemTuNhan.SoDienThoai = dataItem.SoDienThoai;
    //this.themBaoHiemTuNhanModel.STT = dataItem.STT; 
    this.enableUpdateGird(this.baoHiemTuNhan.CongTyBaoHiemTuNhanId);
  }

  clearThemBHTN() {
    this.showFormDetailBaoHiemTuNhan = false;
    this.baoHiemTuNhan = new BenhNhanBaoHiemTuNhanViewModel();
  }

  huyBHTN() {
    this.validationErrorsBHTN = null;
    this.isUpdateGrid = false;
    this.clearThemBHTN();
  }

  getArrayCongTyBHTNId() {
    this.baoHiemTuNhan.CongTyBHTNIds = new Array<number>();
    this.lstBHTN.forEach(element => {
      let congTyBHTNId = element.CongTyBaoHiemTuNhanId;
      this.baoHiemTuNhan.CongTyBHTNIds.push(congTyBHTNId);
    });
  }

  dangXuLy:boolean=false;
  themCongTyBHTN() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    var self = this;
    this.getArrayCongTyBHTNId();
    self.baoHiemTuNhan.BenhNhanId = self.benhNhanId;
    self.validationErrorsBHTN = [];
    self.ref.detectChanges();
    self.apiService.post<BenhNhanBaoHiemTuNhanViewModel>("BenhNhan/ThemBHTN", self.baoHiemTuNhan).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          self.lstBHTN.push(resultData);
          self.setValueForGridCongTyBHTN();
          self.huyBHTN();
        }
        self.dangXuLy=false;
      },
      (err: ApiError) => {
        self.validationErrorsBHTN = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.dangXuLy=false;
      });
  }

  xoaCongTyBHTN(dataItem: any) {
    this.lstBHTN.splice(this.lstBHTN.findIndex((x: any) => x == dataItem), 1);
    this.validationErrorsBHTN = [];
    this.setValueForGridCongTyBHTN();
  }

  setValueForGridCongTyBHTN() {
    this.gridDataSourceBHTN = {
      data: this.lstBHTN,
      total: this.lstBHTN.length
    }
    let STT = 1;
    this.lstBHTN.forEach(element => {
      element.STT = STT;
      STT++;
    });
    this.gridChildBHTN.gridDataSource = this.gridDataSourceBHTN;
    this.gridChildBHTN.setDataSource();
    this.pushDataCongTyBHTN();
  }

  pushDataCongTyBHTN() {
    this.benhNhan.BenhNhanCongTyBaoHiemTuNhans = new Array<BenhNhanBaoHiemTuNhanViewModel>();
    this.lstBHTN.forEach(obj => {
      let model = new BenhNhanBaoHiemTuNhanViewModel();
      model.BenhNhanId = obj.BenhNhanId;
      model.CongTyBaoHiemTuNhanId = obj.CongTyBaoHiemTuNhanId;
      model.MaSoThe = obj.MaSoThe;
      model.DiaChi = obj.DiaChi;
      model.SoDienThoai = obj.SoDienThoai;
      model.NgayHieuLuc = obj.NgayHieuLuc;
      model.NgayHetHan = obj.NgayHetHan;
      this.benhNhan.BenhNhanCongTyBaoHiemTuNhans.push(model);
    });
  }




  //=====================TIỀN SỬ BỆNH
  ThemTienSuBenhDetail() {
    this.tienSuBenh = new BenhNhanTienSuBenhViewModel();
    this.showFormDetailTienSuBenh = !this.showFormDetailTienSuBenh;
    this.showFormDetailBaoHiemTuNhan = false;
    this.showFormDetailDiUngThuoc = false;

    if (this.validationErrorsTSB == undefined) {
      this.validationErrorsTSB = [];
    } else {
      if (this.validationErrorsTSB != null && this.validationErrorsTSB.length != 0) {
        this.validationErrorsTSB = [];
      }
    }

  }

  clearThemTienSuBenh() {
    this.showFormDetailTienSuBenh = false;
    this.tienSuBenh = new BenhNhanTienSuBenhViewModel();
  }

  huyTienSuBenh() {
    this.validationErrorsTSB = null;
    this.isUpdateGridTienSuBenh = false;
    this.clearThemTienSuBenh();
  }


  getArrayTenTienSuBenh() {
    this.tienSuBenh.TenTienSuBenhs = new Array<BenhNhanTienSuBenhChiTiet>();
    this.lstTienSuBenh.forEach(element => {
      let model = new BenhNhanTienSuBenhChiTiet();
      model.LoaiTienSuBenh = element.LoaiTienSuBenh;
      model.TenBenh = element.TenBenh;
      this.tienSuBenh.TenTienSuBenhs.push(model);
    });
  }

  themTienSuBenh() {
    var self = this;
    self.tienSuBenh.BenhNhanId = self.benhNhanId;
    self.getArrayTenTienSuBenh();
    self.validationErrorsTSB = [];
    self.ref.detectChanges();
    self.apiService.post<BenhNhanTienSuBenhViewModel>("BenhNhan/ThemTienSuBenh", self.tienSuBenh).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          self.lstTienSuBenh.push(resultData);
          self.setValueForGridTienSuBenh();
          self.clearThemTienSuBenh();
        }
      }
      ,
      (err: ApiError) => {
        self.validationErrorsTSB = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  xoaTienSuBenh(dataItem: any) {
    this.lstTienSuBenh.splice(this.lstTienSuBenh.findIndex((x: any) => x == dataItem), 1);
    this.validationErrorsTSB = [];
    this.setValueForGridTienSuBenh();
  }

  setValueForGridTienSuBenh() {
    this.gridDataSourceTienSuBenh = {
      data: this.lstTienSuBenh,
      total: this.lstTienSuBenh.length
    }
    let STT = 1;
    this.lstTienSuBenh.forEach(element => {
      element.STT = STT;
      STT++;
    });
    this.gridTienSuBenh.gridDataSource = this.gridDataSourceTienSuBenh;
    this.gridTienSuBenh.setDataSource();
    this.pushDataTienSuBenh();
  }

  pushDataTienSuBenh() {
    this.benhNhan.BenhNhanTienSuBenhs = new Array<BenhNhanTienSuBenhViewModel>();
    this.lstTienSuBenh.forEach(obj => {
      let model = new BenhNhanTienSuBenhViewModel();
      model.BenhNhanId = obj.BenhNhanId;
      model.TenBenh = obj.TenBenh;
      model.LoaiTienSuBenh = obj.LoaiTienSuBenh;
      model.TenLoaiTienSuBenh = obj.TenLoaiTienSuBenh;
      this.benhNhan.BenhNhanTienSuBenhs.push(model);
    });
  }

  //=====================DỊ ỨNG THUỐC

  ThemDiUngThuocDetail() {
    this.showFormDetailTienSuBenh = false;
    this.showFormDetailBaoHiemTuNhan = false;
    this.showFormDetailDiUngThuoc = !this.showFormDetailDiUngThuoc;
    if (this.validationErrorsDUT == undefined) {
      this.validationErrorsDUT = [];
    } else {
      if (this.validationErrorsDUT != null && this.validationErrorsDUT.length != 0) {
        this.validationErrorsDUT = [];
      }
    }
  }

  clearThemDiUngThuoc() {
    this.showFormDetailDiUngThuoc = false;
    this.diUngThuoc = new BenhNhanDiUngThuocViewModel();
  }

  huyDiUngThuoc() {
    this.validationErrorsDUT = null;
    this.isUpdateGridDiUngThuoc = false;
    this.clearThemDiUngThuoc();
  }

  getArrayDiUngThuoc() {
    this.diUngThuoc.TenDiUngThuocs = new Array<BenhNhanDiUngThuocChiTiet>();
    this.lstDiUngThuoc.forEach(element => {
      let model = new BenhNhanDiUngThuocChiTiet();
      model.LoaiDiUng = element.LoaiDiUng;
      model.TenDiUng = element.TenDiUng;
      model.ThuocId = element.ThuocId;
      this.diUngThuoc.TenDiUngThuocs.push(model);
    });
    console.log("this.lstDiUngThuoc: ", this.lstDiUngThuoc)

    console.log("this.diUngThuoc.TenDiUngThuocs: ", this.diUngThuoc.TenDiUngThuocs)
  }

  ThemDiUngThuoc() {
    var self = this;
    self.diUngThuoc.BenhNhanId = self.benhNhanId;
    self.getArrayDiUngThuoc();
    self.validationErrorsDUT = [];
    self.ref.detectChanges();
    self.diUngThuoc.TenDiUng = self.tenDiUng;
    self.apiService.post<BenhNhanDiUngThuocViewModel>("BenhNhan/ThemDiUngThuoc", self.diUngThuoc).subscribe(
      resultData => {
        self.tenDiUng = null;
        if (resultData != undefined && resultData != null) {
          self.lstDiUngThuoc.push(resultData);
          self.setValueForGridDiUngThuoc();
          self.clearThemDiUngThuoc();
        }
      }
      ,
      (err: ApiError) => {
        self.validationErrorsDUT = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  xoaDiUngThuoc(dataItem: any) {
    this.lstDiUngThuoc.splice(this.lstDiUngThuoc.findIndex((x: any) => x == dataItem), 1);
    this.validationErrorsDUT = [];
    this.setValueForGridDiUngThuoc();
  }

  setValueForGridDiUngThuoc() {
    this.gridDataSourceDiUngThuoc = {
      data: this.lstDiUngThuoc,
      total: this.lstDiUngThuoc.length
    }
    let STT = 1;
    this.lstDiUngThuoc.forEach(element => {
      element.STT = STT;
      STT++;
    });
    this.gridDiUngThuoc.gridDataSource = this.gridDataSourceDiUngThuoc;
    this.gridDiUngThuoc.setDataSource();
    this.pushDataDiUngThuoc();
  }

  pushDataDiUngThuoc() {
    this.benhNhan.BenhNhanDiUngThuocs = new Array<BenhNhanDiUngThuocViewModel>();
    this.lstDiUngThuoc.forEach(obj => {
      let model = new BenhNhanDiUngThuocViewModel();
      model.BenhNhanId = obj.BenhNhanId;
      model.TenDiUng = obj.TenDiUng;
      model.LoaiDiUng = obj.LoaiDiUng;
      model.BieuHienDiUng = obj.BieuHienDiUng;
      model.MucDo = obj.MucDo;
      this.benhNhan.BenhNhanDiUngThuocs.push(model);
    });
  }

  // ----------------

  onSelectLoaiDiUng() {
    this.validationErrorsDUT = [];
    this.diUngThuoc.ThuocId = null;
    this.diUngThuoc.TenDiUng = null;
    this.diUngThuoc.BieuHienDiUng = null;
    this.diUngThuoc.MucDo = null;
  }

  onSelectThuoc(dataItem: any) {
    this.tenDiUng = dataItem.DisplayName;
  }

  InTheBenhNhanBenhNhan() {
    this.dialog
      .open(TheBenhNhanBenhNhanPopupComponent, {
        disableClose: true,
        width: "480px",
        data: this.benhNhanId,
      }).afterClosed();
  }

  openComboboxBHTN(event) {
    if (event) {
      this.isSelectBHTN = true;
    }
    else {
      this.isSelectBHTN = false;
    }
  }

  openDropDownListTSB(event) {
    if (event) {
      this.isSelectTSB = true;
    }
    else {
      this.isSelectTSB = false;
    }

  }

  openDropDownListDUT(event) {
    if (event) {
      this.isSelectDUT = true;
    }
    else {
      this.isSelectDUT = false;
    }
  }


  NamSinhChange(event) {
    //console.log("NamSinhChange = ", event);
    let dateNow = new Date();
    if (event >= dateNow.getFullYear() - 6) {
      this.under6yearsold = true;
    }
    else {
      this.under6yearsold = false;
    }

    this.soTuoiDisplay = dateNow.getFullYear() - event + " Tuổi " + 0 + " Tháng " + 0 + " Ngày ";
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
      event.preventDefault();
      this.QuetMaQRCodeClick();
    }
    else if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 == true) {
      event.preventDefault();
    }
  }

}