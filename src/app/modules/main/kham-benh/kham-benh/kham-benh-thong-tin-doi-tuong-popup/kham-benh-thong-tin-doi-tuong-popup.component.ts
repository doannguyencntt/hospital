import { ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { KhamBenhDiaChiBHYT, KhamBenhThongTinBaoHiemTuNhan, KhamBenhThongTinBenhNhanTimKiemBHYT, KhamBenhThongTinDoiTuongTiepNhan, KhamBenhGiayMienCungChiTra } from '../../kham-benh.model';
import { BaoHiemYTe } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { EnumTypeComponent } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage, TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { TextboxComponent } from 'src/app/shared/component/inputs/textbox/textbox.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TinhTrangThe } from 'src/app/shared/enum/tinh-trang-the.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
declare var jQuery: any;

@Component({
  selector: 'app-kham-benh-thong-tin-doi-tuong-popup',
  templateUrl: './kham-benh-thong-tin-doi-tuong-popup.component.html',
  styleUrls: ['./kham-benh-thong-tin-doi-tuong-popup.component.scss']
})
export class KhamBenhThongTinDoiTuongPopupComponent implements OnInit {

  icClose = icClose;
  icClear = icClear;
  icMoreHoriz = icMoreHoriz;
  icEdit = icEdit;
  icDelete = icDelete;

  documentType: DocumentType = DocumentType.KhamBenh;
  tiepNhanBenhNhan: KhamBenhThongTinDoiTuongTiepNhan = new KhamBenhThongTinDoiTuongTiepNhan();
  themBaoHiemTuNhanModel: KhamBenhThongTinBaoHiemTuNhan = new KhamBenhThongTinBaoHiemTuNhan();
  isUpdateGrid: boolean = false;
  gridDataSourceBHTN: any = {
    data: [],
    total: 0,
  };
  gridCongTyBHTNColumns: any[] = [];
  indexItemBHTNUpdate: number = null;

  //message kiem tra tren BHYT
  messageThanhCong: string = "Kiểm tra thành công";
  messageKhongThanhCong: string = "Kiểm tra không thành công";

  //ngay thang nam sinh
  under6yearsold: boolean = false;
  soTuoiDisplay: string;
  popupLoadingData: any;
  isScanF1 = false;
  modelQRCode: BaoHiemYTe;
  IsCheckBHYT: boolean = null;
  isLoadingDataBHYT: boolean = false;

  validationErrors: any;
  validationCongTyBHTNErrors: any;

  file: any = null;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  
  @ViewChild('HoVaTenTextbox', { static: false }) HoVaTenTextbox: TextboxComponent;
  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;
  @ViewChild('cboQuanHuyenNguoiLienHe', { static: true }) cboQuanHuyenNguoiLienHe: ComboboxComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('ngayHieuLucTemplate', { static: true }) ngayHieuLucTemplate: TemplateRef<any>;
  @ViewChild('ngayDenHanTemplate', { static: true }) ngayDenHanTemplate: TemplateRef<any>;
  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<KhamBenhThongTinDoiTuongPopupComponent>,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private el: ElementRef) { }

  ngOnInit() {

    this.tiepNhanBenhNhan.Id = this.data.YeuCauTiepNhanId;
    this.getThongTinTiepNhan(this.data.YeuCauTiepNhanId);

    this.gridCongTyBHTNColumns = [
      { Field: "TenCongTyBaoHiemTuNhan", Title: "Công ty", Width: 180, Sortable: true },
      { Field: "MaSoThe", Title: "Số thẻ", Width: 100, Sortable: true },
      { Field: "NgayHieuLuc", Title: "Từ ngày", Width: 90, Sortable: true, Template: this.ngayHieuLucTemplate },
      { Field: "NgayHetHan", Title: "Đến ngày", Width: 90, Sortable: true, Template: this.ngayDenHanTemplate },
      { Field: "SoDienThoai", Title: "Điện thoại", Width: 100, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 200, Sortable: true },
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate },
    ];
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

  closePopupLoadingData(elementType: EnumTypeComponent = null, strId: string = null) {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
    if (elementType != null) {
      this.popupLoadingData.afterClosed().subscribe(result => {
        const invalidControl = this.el.nativeElement.querySelector('#'+strId);
        if (invalidControl) {
          invalidControl.focus();
        }
      });
    }

  }

  resetFocus() {
    var $focused = jQuery(':focus');
    jQuery(".k-input").blur();
    setTimeout(function () {
      if ($focused.length > 0) {
        $focused.focus();
      }
    }, 100);
  }

  getThongTinTiepNhan(yeuCauTiepNhanId: number){
    this.showPopupLoadingData();
    this.apiService
      .get<any>("KhamBenh/GetThongTinDoiTuongTiepNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
      .subscribe(
        (resultData) => {
          this.tiepNhanBenhNhan = resultData;
          this.gridDataSourceBHTN.data = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans;
          if (
            this.tiepNhanBenhNhan.NamSinh != null &&
            this.tiepNhanBenhNhan.ThangSinh != null &&
            this.tiepNhanBenhNhan.NgaySinh != null
          ) {
            var ngaySinh = new Date(
              this.tiepNhanBenhNhan.ThangSinh +
              "/" +
              this.tiepNhanBenhNhan.NgaySinh +
              "/" +
              this.tiepNhanBenhNhan.NamSinh +
              "/"
            );
            this.getAge(ngaySinh, new Date());
          }

          this.file = null;
          this.file = this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra;
          this.changeNgayHetHan(this.tiepNhanBenhNhan.BHYTNgayHetHan, this.tiepNhanBenhNhan, true);
          this.closePopupLoadingData();
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  xuLyCapNhatThongTin() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, ["lưu"])
        },
      }).afterClosed().subscribe((result) => {
        if (result == "Yes") {
          this.showPopupLoadingData();
          this.validationErrors = [];
          if (this.tiepNhanBenhNhan.CoBHYT == true
            && this.tiepNhanBenhNhan.TuNhap != true
            && this.tiepNhanBenhNhan.BHYTMaSoThe
            && this.tiepNhanBenhNhan.HoTen
            && (this.tiepNhanBenhNhan.NamSinh != null || this.tiepNhanBenhNhan.NgayThangNamSinh != null)
            && !this.tiepNhanBenhNhan.TuNhap) {
            let thongTinBenhNhan: KhamBenhThongTinBenhNhanTimKiemBHYT = new KhamBenhThongTinBenhNhanTimKiemBHYT(
              this.tiepNhanBenhNhan.BHYTMaSoThe,
              this.tiepNhanBenhNhan.HoTen,
              this.tiepNhanBenhNhan.NgayThangNamSinh,
              null,
              this.tiepNhanBenhNhan.NamSinh
            );
            this.apiService
              .post<any>("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
              .subscribe(
                (resultData) => {
                  this.xuLyCapNhatDoiTuong();
                },
                (err: ApiError) => {
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                  this.closePopupLoadingData();
                }
              );
          }
          else {
            this.xuLyCapNhatDoiTuong();
          }
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyCapNhatDoiTuong() {
    if (this.tiepNhanBenhNhan.TuNhap) {
      this.tiepNhanBenhNhan.TinhTrangThe = TinhTrangThe.KhongXacDinh;
    }

    this.apiService.put<any>("KhamBenh/XuLyCapNhatThongTinDoiTuong", this.tiepNhanBenhNhan)
      .subscribe(
        (resultMess) => {
          if(resultMess != undefined && resultMess != null && resultMess != ''){
            this.notificationService.showWarning(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]) + " " + resultMess);
          }
          else{
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          }
          this.closePopupLoadingData();
          this.close(true);
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  TinhThanhPhoNguoiLienHeChange(event) {
    if(event == undefined || event == null)
    {
      this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = null;
      this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
  }

  QuanHuyenNguoiLienHeChange(event) {
    if(event == undefined || event == null)
    {
      this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = null;
    }
  }

  PhuongXaNguoiLienHeChange(event) {
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = resultData.TinhThanhId;
          this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = resultData.QuanHuyenId;
          this.cboQuanHuyenNguoiLienHe.getDataForLookup();
        },
        (err: any) => {
        });
    }
  }

  cloneDiaChiNguoiGiamHo(important: boolean = false) {
    if (important || !this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId) {
      this.tiepNhanBenhNhan.NguoiLienHeTinhThanhId = this.tiepNhanBenhNhan.TinhThanhId;
    }
    if (important || !this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId) {
      this.tiepNhanBenhNhan.NguoiLienHeQuanHuyenId = this.tiepNhanBenhNhan.QuanHuyenId;
    }
    if (important || !this.tiepNhanBenhNhan.NguoiLienHePhuongXaId) {
      this.tiepNhanBenhNhan.NguoiLienHePhuongXaId = this.tiepNhanBenhNhan.PhuongXaId;
    }
    if (important || !this.tiepNhanBenhNhan.NguoiLienHeDiaChi) {
      this.tiepNhanBenhNhan.NguoiLienHeDiaChi = this.tiepNhanBenhNhan.DiaChi;
    }
  }

  coBHYTChange(event) {
    if (event != true) {
      this.tiepNhanBenhNhan.TuNhap = false;
      this.HoVaTenTextbox.focus();
    }
  }

  tuNhapChange(event) {
    if (event == true) {
      this.tiepNhanBenhNhan.CoBHYT = true;
      this.tiepNhanBenhNhan.IsCheckedBHYT = null;
    }
    if (event == false) {
      this.tiepNhanBenhNhan.CoBHYT = false;
      this.coBHYTChange(false);
    }
  }

  getAge(date_1, date_2) {
    if((date_1 == undefined || date_1 == null) && this.tiepNhanBenhNhan.NamSinh != undefined && this.tiepNhanBenhNhan.NamSinh != null && this.tiepNhanBenhNhan.NamSinh != 0)
    {
        date_1 = new Date(this.tiepNhanBenhNhan.NamSinh, 1, 1);
    }
    date_1 = new Date(date_1);
    date_2 = new Date(date_2);

    //convert to UTC
    let date2_UTC = new Date(Date.UTC(date_2.getFullYear(), date_2.getMonth(), date_2.getDate()));
    let date1_UTC = new Date(Date.UTC(date_1.getFullYear(), date_1.getMonth(), date_1.getDate()));


    //console.log(date1_UTC, date2_UTC, date_1, date_2);
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
      this.cloneDiaChiNguoiGiamHo();
    }
    else {
      this.under6yearsold = false;
    }

    this.soTuoiDisplay = years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    let monthEnd: any = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }

  bindMucHuongFromSoTheBHYT(soTheBHYT: string, theBHYT) {
    if (soTheBHYT != undefined && soTheBHYT != null && soTheBHYT.length >= 3) {
        let maTheArray = soTheBHYT.split("");
        if (maTheArray[2] == '1') {
          theBHYT.BHYTMucHuong = 100;
        }
        else if (maTheArray[2] == '2') {
          theBHYT.BHYTMucHuong = 100;
        }
        else if (maTheArray[2] == '3') {
          theBHYT.BHYTMucHuong = 95;
        }
        else if (maTheArray[2] == '4') {
          theBHYT.BHYTMucHuong = 80;
        }
        else {
          theBHYT.BHYTMucHuong = 100;
        }
    }
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById('barcodeActive') as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
      this.isScanF1 = true;
    }
  }

  onKeyScanner(event) {
    if (event.keyCode === 9) {
      this.HoVaTenTextbox.focus();
    }
  }

  blurMaNoiDKBD(theBHYT) {
    this.setNoiDKBD(theBHYT);
  }

  onKeyMaNoiDKBD(event, theBHYT) {
    if (event.keyCode === 13) {
      this.setNoiDKBD(theBHYT);
    }
  }

  timeoutNoiDKBD = null;
  onChangeMaNoiDKBD(event, theBHYT){
    var self = this;
    clearTimeout(self.timeoutNoiDKBD);
    self.timeoutNoiDKBD = setTimeout(function () {
      self.setNoiDKBD(theBHYT);
    }, 1000);
  }

  setNoiDKBD(theBHYT) {
    this.apiService.post<string>("TiepNhanBenhNhan/GetNoiDangKyBaoHiem?ma=" + theBHYT.BHYTMaDKBD).subscribe(
      resultData => {
        theBHYT.NoiDangKyBHYT = resultData;
      },
      () => {
        //return null;
        //console.log("error")
      });
  }

  blurDiaChi(diaChi) {
    this.setDiaChiBHYTForModel(diaChi);
  }

  onKeyDiaChi($event, diaChi) {
    if ($event.keyCode === 13) {
      this.setDiaChiBHYTForModel(diaChi);
    }
  }

  setDiaChiBHYTForModel(diaChi: string) {
    let self = this;
    if (diaChi == null || diaChi == undefined) {
      this.tiepNhanBenhNhan.TinhThanhId = null;
      this.tiepNhanBenhNhan.QuanHuyenId = null;
      this.tiepNhanBenhNhan.PhuongXaId = null;
      this.tiepNhanBenhNhan.DiaChi = null;
      return;
    }
    let lstDiaChi = diaChi.split(",");
    if (lstDiaChi.length < 3) return;
    let tinhThanhPho = lstDiaChi[lstDiaChi.length - 1].trim();
    let quanHuyen = lstDiaChi[lstDiaChi.length - 2].trim();
    let phuongXa = lstDiaChi[lstDiaChi.length - 3].trim();
    let soNha = null;
    if (lstDiaChi.length >= 4) {
      let index = diaChi.indexOf(lstDiaChi[lstDiaChi.length - 3]);
      soNha = diaChi.slice(0, index - 1);
    }
    let model = new KhamBenhDiaChiBHYT();
    model.TinhThanh = tinhThanhPho;
    model.QuanHuyen = quanHuyen;
    model.PhuongXa = phuongXa;

    this.apiService.post<KhamBenhDiaChiBHYT>("TiepNhanBenhNhan/GetDiaChiBHYT", model).subscribe(
      resultData => {
        //cheat cho combobox hoat dong
        this.tiepNhanBenhNhan.PhuongXaId = null;
        this.tiepNhanBenhNhan.QuanHuyenId = null;
        this.tiepNhanBenhNhan.TinhThanhId = null;

        setTimeout(function () {
          self.tiepNhanBenhNhan.PhuongXaId = resultData.PhuongXaId;
          self.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
          self.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
          self.tiepNhanBenhNhan.DiaChi = soNha;

          if (self.under6yearsold) {
            self.cloneDiaChiNguoiGiamHo();
          }
        }, 500);

        this.tiepNhanBenhNhan.DiaChi = soNha;
      },
      () => {
        //return null;
        //console.log("error")
      });
  }

  close(result = null){
    this.dialogRef.close(result);
  }

  focusElementById(tagId: string) {
    var $focused = jQuery('#' + tagId).find(".k-input");
    jQuery(".k-input").blur();
    setTimeout(function () {
      if ($focused.length > 0) {
        $focused.focus();
      }
    }, 100);
  }

  getThongTinTheBHYT(theBHYT) {
    if (theBHYT.BHYTMaSoThe 
      && this.tiepNhanBenhNhan.HoTen 
      && (this.tiepNhanBenhNhan.NamSinh != null || this.tiepNhanBenhNhan.NgayThangNamSinh != null)
      && !this.tiepNhanBenhNhan.TuNhap) {
      this.showPopupLoadingData();
      let thongTinBenhNhan: KhamBenhThongTinBenhNhanTimKiemBHYT = new KhamBenhThongTinBenhNhanTimKiemBHYT(
        theBHYT.BHYTMaSoThe,
        this.tiepNhanBenhNhan.HoTen,
        this.tiepNhanBenhNhan.NgayThangNamSinh,
        null,
        this.tiepNhanBenhNhan.NamSinh
      );
      this.apiService
        .post<any>("BHYT/GetLichSuKhamChuaBenh", thongTinBenhNhan)
        .subscribe(
          (resultData) => {
            if (resultData == null || (resultData != null && resultData.maKetQua == "050")) {
              this.notificationService.showError('Thẻ BHYT này không tồn tại');
              this.clearThongTinTheBHYT(theBHYT);
              
              //theBHYT.IsChange = false;
              this.isLoadingDataBHYT = false;
              this.closePopupLoadingData(EnumTypeComponent.KTextBox, 'SoTheBHYT');
            }
            else {
              theBHYT.IsCheckedBHYT = this.IsCheckBHYT = true;
              theBHYT.BHYTMaDKBD = resultData.maDKBD;
              theBHYT.BHYTDiaChi = resultData.diaChi;
              theBHYT.CoQuanBHXH = resultData.cqBHXH;
              theBHYT.MaKhuVuc = resultData.maKV;
              theBHYT.BHYTNgayHieuLuc = CommonService.FormatDateStringToDate(resultData.gtTheTu);
              theBHYT.BHYTNgayHetHan = CommonService.FormatDateStringToDate(resultData.gtTheDen);
              this.changeNgayHetHan(theBHYT.NgayHetHan, theBHYT);
              
              theBHYT.BHYTNgayDu5Nam = CommonService.FormatDateStringToDate(resultData.ngayDu5Nam);
              if (theBHYT.BHYTMaDKBD != null && theBHYT.BHYTMaDKBD != "") {
                this.setNoiDKBD(theBHYT);
              }

              this.setDiaChiBHYTForModel(theBHYT.BHYTDiaChi);

              //theBHYT.IsChange = false;
              this.isLoadingDataBHYT = false;
              this.closePopupLoadingData();
            }
          },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            //this.clearThongTinTheBHYT(theBHYT);
            //theBHYT.IsChange = false;
            this.isLoadingDataBHYT = false;
            this.closePopupLoadingData(EnumTypeComponent.KTextBox, 'SoTheBHYT');
          }
        );
    }
    else
    {
      this.isLoadingDataBHYT = false;
    }
  }

  clearThongTinTheBHYT(theBHYT){
    theBHYT.BHYTMaSoThe = null;
    theBHYT.IsCheckedBHYT = false;
    theBHYT.BHYTMaDKBD = null;
    theBHYT.BHYTDiaChi = null;
    theBHYT.CoQuanBHXH = null;
    theBHYT.MaKhuVuc = null;
    theBHYT.BHYTNgayHieuLuc = null;
    theBHYT.BHYTNgayHetHan = null;
    theBHYT.TinhTrangThe = null;
    theBHYT.BHYTNgayDu5Nam = null;
    theBHYT.NoiDangKyBHYT = null;
    theBHYT.BHYTMucHuong = null;
    theBHYT.BHYTDuocMienCungChiTra = false;
    theBHYT.BHYTGiayMienCungChiTraId = null;
    theBHYT.BHYTGiayMienCungChiTra = null;
    theBHYT.BHYTNgayDuocMienCungChiTra = null;
  }

  timeout = null;
  changeThongTinGetBHYT(event, theBHYT, isLoadingDataBHYT) {
    var self = this;
    self.bindMucHuongFromSoTheBHYT(theBHYT.BHYTMaSoThe, theBHYT);
    if (!isLoadingDataBHYT && theBHYT.IsChange) {
      self.isLoadingDataBHYT = true;
      theBHYT.IsCheckedBHYT = null;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
      self.tiepNhanBenhNhan.IsChange = false;
        self.getThongTinTheBHYT(theBHYT);
      }, 1000);
    }
  }

  onKeySoTheBHYT(event, theBHYT, isLoadingDataBHYT)
  {
    if(event.keyCode == 13)
    {
      this.changeThongTinGetBHYT(event, theBHYT, isLoadingDataBHYT);
      this.HoVaTenTextbox.focus();
    }
  }

  changeSoTheBHYT($event, theBHYT)
  {
    if(!this.tiepNhanBenhNhan.TuNhap)
    {
      theBHYT.IsChange = true;
    }
  }

  TinhThanhPhoChange(event) {
    if (event == undefined || event == null) {
      this.tiepNhanBenhNhan.QuanHuyenId = null;
      this.tiepNhanBenhNhan.PhuongXaId = null;
    }
    if (this.under6yearsold) {
      this.cloneDiaChiNguoiGiamHo();
    }
  }

  QuanHuyenChange(event) {
    if (event == undefined || event == null) {
      // this.tiepNhanBenhNhan.QuanHuyenId = event;
      this.tiepNhanBenhNhan.PhuongXaId = null;
    }

    if (this.under6yearsold) {
      this.cloneDiaChiNguoiGiamHo();
    }
  }

  PhuongXaChange($event) {
    this.tiepNhanBenhNhan.PhuongXaId = $event;
    if ($event != null && $event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
        resultData => {
          this.tiepNhanBenhNhan.TinhThanhId = resultData.TinhThanhId;
          this.tiepNhanBenhNhan.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.tiepNhanBenhNhan.TinhThanhId = null;
      this.tiepNhanBenhNhan.QuanHuyenId = null;
    }
    if (this.under6yearsold) {
      this.cloneDiaChiNguoiGiamHo();
    }
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

  changeBoxCoTheBHYT(event){
    this.clearValidationBHYT();
    if (!event) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắc chắn muốn xóa thẻ BHYT của người bệnh?"
        },
      }).afterClosed().subscribe((result) => {
        if (result == "Yes") {
          this.clearThongTinTheBHYT(this.tiepNhanBenhNhan);
          this.file = null;
        }
        else
        {
          this.tiepNhanBenhNhan.CoBHYT = true;
        }
      });
    }
    else {

    }
  }

  clearValidationBHYT() {
    if (this.validationErrors != undefined && this.validationErrors.length != 0) {
      this.validationErrors = this.validationErrors.filter(x => x.Field != "BHYTMaSoThe" && x.Field != "BHYTMaDKBD"
        && x.Field != "NoiDangKyBHYT" && x.Field != "BHYTMucHuong"
        && x.Field != "BHYTDiaChi" && x.Field != "BHYTNgayHieuLuc"
        && x.Field != "BHYTNgayHetHan");
    }
  }

  ThongTinBenhNhanNgaySinhChange(event) {
    if (this.tiepNhanBenhNhan.NgayThangNamSinh != null) {
      this.tiepNhanBenhNhan.NamSinh = this.tiepNhanBenhNhan.NgayThangNamSinh.getFullYear();
    }
    if (event == null || event == undefined) {
      this.under6yearsold = false;
      this.tiepNhanBenhNhan.NamSinh = null;
    }
    this.changeThongTinKiemTraTheBHYT();
    this.changeNgaySinh();
  }

  changeNamSinh(event)
  {
    this.changeThongTinKiemTraTheBHYT();
    this.changeNgaySinh();
  }

  changeNgaySinh(){
    var ngaySinh = new Date(
      this.tiepNhanBenhNhan.ThangSinh +
      "/" +
      this.tiepNhanBenhNhan.NgaySinh +
      "/" +
      this.tiepNhanBenhNhan.NamSinh +
      "/"
    );
    this.getAge(ngaySinh, new Date());
  }

  changeHoTen(event){
    this.changeThongTinKiemTraTheBHYT();
  }

  changeThongTinKiemTraTheBHYT()
  {
    this.tiepNhanBenhNhan.IsChange = true;
  }

  ngayCoHieuLucChange(event, theBHYT) {
    if (event != null && event != undefined) {
      // let dateFormat = new Date(event);
      // theBHYT.BHYTNgayHetHan = new Date(dateFormat.getFullYear() + 1, dateFormat.getMonth(), dateFormat.getDate());

      //BVHD-3518: mặc định là ngà 31/12 của năm hiện tại
      let currentDate = new Date();
      this.tiepNhanBenhNhan.BHYTNgayHetHan = new Date(currentDate.getFullYear(), 11, 31);
      this.changeNgayHetHan(theBHYT.BHYTNgayHetHan, theBHYT);
    }
    else
    {
      theBHYT.BHYTNgayHetHan = null;
    }
  }

  uploadFileDone(event: any)
  {
    // this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra = event;
    if(event)
    {
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.Ma = event.Ma;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.Ten = event.Ten;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.TenGuid = event.TenGuid;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.KichThuoc = event.KichThuoc;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.DuongDan = event.DuongDan;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.LoaiTapTin = event.LoaiTapTin;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.MoTa = event.MoTa;
    }
    else{
      let id = this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra != null ? this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.Id : 0;
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra = new KhamBenhGiayMienCungChiTra();
      this.tiepNhanBenhNhan.BHYTGiayMienCungChiTra.Id = id;
    }
    this.cdRef.detectChanges();
  }

  changeNgayHetHan(event, theBHYT, isFirstLoad = false)
  {
    let dateFormat = new Date();
    let currentDate = new Date(dateFormat.getFullYear(), dateFormat.getMonth(), dateFormat.getDate());
    let ngayHetHan = new Date(event);
    let ngayHetHanDate = new Date(ngayHetHan.getFullYear(), ngayHetHan.getMonth(), ngayHetHan.getDate());
    if(currentDate > ngayHetHanDate)
    {
      theBHYT.IsQuaHanTheBHYT = true;
    }
    else
    {
      theBHYT.IsQuaHanTheBHYT = false;
    }

    if(ngayHetHanDate >= currentDate)
    {
      theBHYT.TinhTrangThe = TinhTrangThe.ConHieuLuc;
    }
    else
    {
      theBHYT.TinhTrangThe = TinhTrangThe.HetHieuLuc;
    }
  }

  // công ty BHTN
  congTyBaoHiemChange(event) {
    if(event != undefined && event != null)
    {
      this.themBaoHiemTuNhanModel.DiaChi = event.DiaChi;
      this.themBaoHiemTuNhanModel.SoDienThoai = event.SoDienThoai;
      this.themBaoHiemTuNhanModel.TenCongTyBaoHiemTuNhan = event.DisplayName;
    }
    else
    {
      this.themBaoHiemTuNhanModel.DiaChi = null;
      this.themBaoHiemTuNhanModel.SoDienThoai = null;
      this.themBaoHiemTuNhanModel.TenCongTyBaoHiemTuNhan = null;
    }
  }

  clearThemBHTN() {
    this.themBaoHiemTuNhanModel = new KhamBenhThongTinBaoHiemTuNhan();
    this.indexItemBHTNUpdate = null;
  }

  huyBHTN() {
    this.isUpdateGrid = false;
    this.clearThemBHTN();
  }

  checkValidAddBHTN(id: number) {
    let itemByIndex = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[this.indexItemBHTNUpdate];
    let model = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans
                        .find(obj => (itemByIndex == undefined || obj != itemByIndex) 
                                      && obj.CongTyBaoHiemTuNhanId == id);
    return model == undefined;
  }

  ThemBHTN() {
    //KiemTraThemCongTyBHTN
    this.validationCongTyBHTNErrors = [];
    this.apiService.post<any>("KhamBenh/KiemTraThemCongTyBHTN", this.themBaoHiemTuNhanModel).subscribe(
      resultData => {
        let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
        if (isValid == false) {
          this.notificationService.showError(TiepNhanBenhNhanMessage.MessageThemBHTN);
        }
        else {
          this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.push(this.themBaoHiemTuNhanModel);
          this.clearThemBHTN();
        }

      },
      (err: any) => {
        if (err != undefined && err.ValidationErrors != null) {
          this.validationCongTyBHTNErrors = err.ValidationErrors;
        }
        else {
          this.notificationService.showError(err.Message);
        }

      });
  }

  SuaBHTN(dataItem, index) {
    this.isUpdateGrid = true;
    this.themBaoHiemTuNhanModel = Object.assign({}, dataItem);
    this.indexItemBHTNUpdate = index;
  }

  LuuBHTN() {
    this.validationCongTyBHTNErrors = null;
    this.apiService.post<any>("DieuTriNoiTru/KiemTraThemCongTyBHTN", this.themBaoHiemTuNhanModel).subscribe(
      resultData => {
        let isValid = this.checkValidAddBHTN(this.themBaoHiemTuNhanModel.CongTyBaoHiemTuNhanId);
        if (isValid == false) {
          this.notificationService.showError(TiepNhanBenhNhanMessage.MessageThemBHTN);
        }
        else {
          let item = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[this.indexItemBHTNUpdate];
          if (item != undefined && item != null) {
            this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans[this.indexItemBHTNUpdate] = Object.assign({}, this.themBaoHiemTuNhanModel);
          }
          this.clearThemBHTN();
        }
      },
      (err: any) => {
        if (err != undefined && err.ValidationErrors != null) {
          this.validationCongTyBHTNErrors = err.ValidationErrors;
        }
        else {
          this.notificationService.showError(err.Message);
        }
      });
  }

  xoaCongTyBHTN(dataItem) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa công ty bảo hiểm tư nhân này không?"
      },
    }).afterClosed().subscribe((result) => {
      if (result == "Yes") {
        let index = this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.findIndex(x => x == dataItem);
        if(index != -1)
        {
          this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans.splice(index, 1);
        }
      }
    });
  }
  
  changeCoBaoHiemTuNhan(event)
  {
    if(!event)
    {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắc chắn muốn xóa công ty bảo hiểm tư nhân này không?"
        },
      }).afterClosed().subscribe((result) => {
        if (result == "Yes") {
          this.tiepNhanBenhNhan.YeuCauTiepNhanCongTyBaoHiemTuNhans = [];
        }
        else
        {
          this.tiepNhanBenhNhan.CoBHTN = true;
        }
      });
    }
  }
}
