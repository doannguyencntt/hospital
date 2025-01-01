import { Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import icPrint from '@iconify/icons-ic/outline-print';
import icError from '@iconify/icons-ic/baseline-error';
import icAdd from '@iconify/icons-ic/add';
import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LayMauXetNghiemCreateComponent } from '../lay-mau-xet-nghiem-create/lay-mau-xet-nghiem-create.component';
import { LayMauXetNghiemXacNhanHuyPopupComponent } from '../lay-mau-xet-nghiem-xac-nhan-huy-popup/lay-mau-xet-nghiem-xac-nhan-huy-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CapBarcodeTheoDichVu, InPhieuKetQuaLayMau, KiemTraBarcodeLayMauXetNghiem, LayMauXetNghiemBarcodeQueryInfo, LayMauXetNghiemTimKiem, ThongTinYeuCauTiepNhanLayMau, XacNhanLayMauXetNghiem } from '../lay-mau-xet-nghiem.model';
import { LookupItemVo, LookupQueryInfo } from 'src/app/shared/models/common.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LayMauXetNghiemInBarcodeComponent } from '../lay-mau-xet-nghiem-in-barcode/lay-mau-xet-nghiem-in-barcode.component';
import { LayMauXetNghiemKetQuaPopupComponent } from '../lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { LayMauXetNghiemInPhieuGuiMauComponent } from '../lay-mau-xet-nghiem-in-phieu-gui-mau/lay-mau-xet-nghiem-in-phieu-gui-mau.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';

@Component({
  selector: 'app-lay-mau-xet-nghiem-detail',
  templateUrl: './lay-mau-xet-nghiem-detail.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-detail.component.scss']
})
export class LayMauXetNghiemDetailComponent implements OnInit {

  icPrint = icPrint;
  icError = icError;
  icAdd = icAdd;
  icDone = icDone;
  icClear = icClear;

  loading: boolean = false;
  documentType: DocumentType;
  baseRoute: string = "xet-nghiem/lay-mau";
  validationErrors: any;

  gridNhomXetNghiemColumns: any[] = [];
  gridDichVuChuaCapColumns: any[] = [];
  gridDichVuDaCapColumns: any[] = [];
  gridNhomXetNghiemLichSuHuyMauColumns: any[] = [];
  gridDichVuLichSuHuyMauColumns: any[] = [];

  yeuCauTiepNhanId: number = null;
  popupLoadingData: any;
  dataYeuCauTiepNhan: ThongTinYeuCauTiepNhanLayMau = new ThongTinYeuCauTiepNhanLayMau();
  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";

  barcodeNumbers: any[] = [];
  barcodeSoLuongIn: number = null;
  strBarCodeNumber: string = null;
  barcodeKeyId: number = null;
  barcodeDisplay: string = null;
  queryInfoBarcode: LookupQueryInfo = new LookupQueryInfo();
  layMauXetNghiemBarcodeQueryInfo: LayMauXetNghiemBarcodeQueryInfo = new LayMauXetNghiemBarcodeQueryInfo();
  
  //data temp
  lichSuHuyMaus: any[] = [];
  barcodeDangChon: LookupItemVo = new LookupItemVo(null, null);
  inPhieuDuyetKetQua: InPhieuKetQuaLayMau = new InPhieuKetQuaLayMau();
  timKiemNangCaoObj: LayMauXetNghiemTimKiem = new LayMauXetNghiemTimKiem();
  strAdditionalSearchStringChuaCapBarcode: string = "";
  strAdditionalSearchStringDaCapBarcode: string = "";
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null, aggregates: [] }];
  dungBarcodeMoi: boolean = true;
  arrDichVuChon: Array<number> = new Array<number>();
  arrDichVuHuyBarcode: Array<number> = new Array<number>();
  isShowXacNhanMauNhieuDichVu: boolean = false;
  

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tenNhomTemplate', { static: true }) tenNhomTemplate: TemplateRef<any>;
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
  @ViewChild('ngayLayMauTemplate', { static: true }) ngayLayMauTemplate: TemplateRef<any>;
  @ViewChild('ngayGuiTemplate', { static: true }) ngayGuiTemplate: TemplateRef<any>;
  @ViewChild('ngayNhanTemplate', { static: true }) ngayNhanTemplate: TemplateRef<any>;
  @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('thoiGianChiDinhTemplate', { static: true }) thoiGianChiDinhTemplate: TemplateRef<any>;

  @ViewChild('trangThaiNhomTemplate', { static: true }) trangThaiNhomTemplate: TemplateRef<any>;
  @ViewChild('loaiMauTemplate', { static: true }) loaiMauTemplate: TemplateRef<any>;
  @ViewChild('tenLoaiMauTemplate', { static: true }) tenLoaiMauTemplate: TemplateRef<any>;
  @ViewChild('actionNhomXetNghiemTemplate', { static: true }) actionNhomXetNghiemTemplate: TemplateRef<any>;

  @ViewChild('gridNhom', { read: GridComponent, static: false }) gridNhom: GridComponent;
  @ViewChild('ngayGuiMauTemplate', { static: true }) ngayGuiMauTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridChuaCapCode', { read: GridComponent, static: false }) gridChuaCapCode: GridComponent;
  @ViewChild('gridDaCapCode', { read: GridComponent, static: false }) gridDaCapCode: GridComponent;
  @ViewChild('actionGridDaCapCodeTemplate', { static: true }) actionGridDaCapCodeTemplate: TemplateRef<any>;
  @ViewChild('ngayNhanMauTemplate', { static: true }) ngayNhanMauTemplate: TemplateRef<any>;
  @ViewChild('barcodeTemplate', { static: true }) barcodeTemplate: TemplateRef<any>;
  //@ViewChild("multiple", { static: false }) public msInput: MultiSelectComponent;

  constructor(private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.documentType = DocumentType.LayMauXetNghiem;
    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
    this.queryInfoBarcode.Take = 50;
    if (this.yeuCauTiepNhanId !== undefined && this.yeuCauTiepNhanId !== null) {
      this.layMauXetNghiemBarcodeQueryInfo.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      this.queryInfoBarcode.ParameterDependencies = JSON.stringify(this.layMauXetNghiemBarcodeQueryInfo);
      this.getThongTinYeuCauTiepNhanLayMau(this.yeuCauTiepNhanId);
    }

    this.xuLyGetSearchString();

    this.gridNhomXetNghiemColumns = [
      { Field: "TenNhom", Title: "Xét nghiệm", MinWidth: 120, Sortable: true, Template: this.tenNhomTemplate},
      { Field: "Barcode", Title: "Mã Barcode", Width: 100, Sortable: true},
      { Field: "TrangThai", Title: "Trạng thái", Width: 80, Sortable: true, Template: this.trangThaiNhomTemplate},
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 140, Sortable: false, Template: this.loaiMauTemplate},
      { Field: "NgayLayMau", Title: "Ngày lấy mẫu", Width: 100, Sortable: true, Template: this.ngayLayMauTemplate},
      { Field: "TenNguoiLayMau", Title: "Người lấy mẫu", Width: 120, Sortable: true},

      // tạm thời đóng lại
      // { Field: "NgayGui", Title: "Ngày gửi", Width: 100, Sortable: true, Template: this.ngayGuiTemplate},
      // { Field: "TenNGuoiGui", Title: "Người gửi", Width: 120, Sortable: true},
      // { Field: "SoPhieu", Title: "Số phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate},
      // { Field: "TenNguoiNhan", Title: "Người nhận", Width: 120, Sortable: true},
      // { Field: "NgayNhan", Title: "Ngày nhận", Width: 100, Sortable: true, Template: this.ngayNhanTemplate},
      
      { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 120, Sortable: true},
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 100, Sortable: true, Template: this.ngayThucHienTemplate},
      { Field: "TenNguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: true},
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 100, Sortable: true, Template: this.ngayDuyetTemplate},
      { Field: "Action", Title: "", Width: 160, Sortable: false, Template: this.actionNhomXetNghiemTemplate}
    ];
    this.gridDichVuChuaCapColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: true},
      { Field: "TenDichVu", Title: "Tên DV", Width: 240, Sortable: true},
      { Field: "TenNhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      //{ Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiNhomTemplate},
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: true, Template: this.thoiGianChiDinhTemplate},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: true },
      { Field: "BenhPham", Title: "Bệnh phẩm", Width: 120, Sortable: true },
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 80, Sortable: true, Template: this.tenLoaiMauTemplate }
    ];

    this.gridDichVuDaCapColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: true},
      { Field: "TenDichVu", Title: "Tên DV", Width: 240, Sortable: true},
      { Field: "Barcode", Title: "Mã Barcode", Width: 100, Sortable: true, Template: this.barcodeTemplate},
      { Field: "TenNhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiNhomTemplate},
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: true, Template: this.thoiGianChiDinhTemplate},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: true },
      { Field: "BenhPham", Title: "Bệnh phẩm", Width: 120, Sortable: true },
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 80, Sortable: true, Template: this.tenLoaiMauTemplate },
      { Field: "NgayLayMau", Title: "Ngày cấp Barcode", Width: 100, Sortable: true, Template: this.ngayLayMauTemplate},
      { Field: "NguoiLayMau", Title: "Người cấp Barcode", Width: 100, Sortable: true},
      { Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 180, Sortable: true, Template: this.ngayNhanMauTemplate},
      { Field: "NguoiNhanMau", Title: "Người nhận mẫu", Width: 100, Sortable: true},
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 100, Sortable: true, Template: this.ngayDuyetTemplate},
      { Field: "TenNguoiDuyet", Title: "Người duyệt mẫu", Width: 100, Sortable: true},
      { Field: "Action", Title: "", Width: 320, Sortable: false, Template: this.actionGridDaCapCodeTemplate, LockColumn: true}
    ];

    this.gridNhomXetNghiemLichSuHuyMauColumns = [
      { Field: "TenNhom", Title: "Xét nghiệm", Width: 220, Sortable: true},
      { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: true},
      { Field: "NgayLayMau", Title: "Ngày lấy mẫu", Width: 100, Sortable: true, Template: this.ngayLayMauTemplate},
      { Field: "NguoiLayMau", Title: "Người lấy mẫu", Width: 120, Sortable: true},
      { Field: "NgayGui", Title: "Ngày gửi", Width: 100, Sortable: true, Template: this.ngayGuiMauTemplate},
      { Field: "NguoiGui", Title: "Người gửi", Width: 120, Sortable: true},
      { Field: "SoPhieu", Title: "Số phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate}
    ];
    this.gridDichVuLichSuHuyMauColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 100, Sortable: true},
      { Field: "TenDichVu", Title: "Tên DV", Width: 260, Sortable: true},
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 140, Sortable: true},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 160, Sortable: true },
      { Field: "BenhPham", Title: "Bệnh phẩm", Width: 120, Sortable: true},
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 120, Sortable: true}
    ];

    // get data barcode
    this.getDataBarcode();
  }

  xuLyGetSearchString(){
    this.timKiemNangCaoObj.IsGridChuaCapCode = true;
    var queryStringChuaCap = JSON.stringify(this.timKiemNangCaoObj);
    this.strAdditionalSearchStringChuaCapBarcode = queryStringChuaCap;

    this.timKiemNangCaoObj.TrangThai.ChoLayMau = false;
    this.timKiemNangCaoObj.TrangThai.ChoGuiMau = true;
    this.timKiemNangCaoObj.TrangThai.ChoDuyetKetQua = true;
    this.timKiemNangCaoObj.TrangThai.ChoKetQua = true;
    this.timKiemNangCaoObj.TrangThai.DaCoKetQUa = true;
    this.timKiemNangCaoObj.TrangThai.DaLayMau = true;
    this.timKiemNangCaoObj.IsGridChuaCapCode = false;
    var queryStringDaCap = JSON.stringify(this.timKiemNangCaoObj);
    this.strAdditionalSearchStringDaCapBarcode = queryStringDaCap;
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

  getThongTinYeuCauTiepNhanLayMau(yeuCauTiepNhanId: number) {
    this.showPopupLoadingData();
    this.apiService
      .get<ThongTinYeuCauTiepNhanLayMau>("XetNghiem/GetDanhThongTinYeuCauTiepNhanLayMau?yeuCauTiepNhanId=" + yeuCauTiepNhanId)
      .subscribe(
        (resultData) => {
          if (resultData !== undefined && resultData != null) {
            this.dataYeuCauTiepNhan = resultData;
            var ngaySinh = new Date(
              this.dataYeuCauTiepNhan.ThangSinh +
              "/" +
              this.dataYeuCauTiepNhan.NgaySinh +
              "/" +
              this.dataYeuCauTiepNhan.NamSinh +
              "/"
            );
            this.getAge(ngaySinh, new Date());
            this.closePopupLoadingData();
          } else {
            this.dataYeuCauTiepNhan = new ThongTinYeuCauTiepNhanLayMau();
            this.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;
    let days = date_2.getDate() - date_1.getDate();//Thach edit

    if (days < 0) {
      date_2.setMonth(date_2.getMonth() - 1);
      days += this.DaysInMonth(date_2);
    }

    let months = date_2.getMonth() - date_1.getMonth();
    if (months < 0) {
      date_2.setFullYear(date_2.getFullYear() - 1);
      months += 12;
    }
    let years = date_2.getFullYear() - date_1.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.isDuoi6Tuoi = true;
    } else {
      this.isDuoi6Tuoi = false;
    }

    this.Duoi6TuoiDisplay =
      years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth(),
      1
    );
    let monthEnd: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth() + 1,
      1
    );
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }

  getDataBarcode(){
    this.apiService.post<any>("XetNghiem/GetListBarcodeTheoYeuCauTiepNhan", this.queryInfoBarcode).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.barcodeNumbers = resultData.map(x => x.KeyId + "");
      }
    });
  }

  chonBarcode(event) {
    if (event.key == "Enter") {
      this.getThongTinBarcodeDangChon();
    }
  }
  blurChangeBarCode(){
    if(this.strBarCodeNumber!=null && this.strBarCodeNumber!="")
    {
      this.getThongTinBarcodeDangChon();
    }
  }

  getThongTinBarcodeDangChon(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.validationErrors = [];
      var thongTinBarcode = new KiemTraBarcodeLayMauXetNghiem(
        this.yeuCauTiepNhanId,
        this.strBarCodeNumber,
        false,
        this.barcodeSoLuongIn,
        false
      );
      this.apiService.post<any>("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.gridNhom._gridDataSource.data.forEach(element => {
            if (element.NgayLayMau === null) {
              this.barcodeDangChon = new LookupItemVo(resultData.KeyId, resultData.DisplayName);
              element.Barcode = resultData.DisplayName;
              element.BarcodeNumber = resultData.KeyId;

              if(this.barcodeNumbers.findIndex(x => x == resultData.KeyId+"") == -1)
              {
                this.barcodeNumbers.push(resultData.KeyId+"");
              }
            }
          });
        }
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  capMoiBarcode() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.validationErrors = [];
      var thongTinBarcode = new KiemTraBarcodeLayMauXetNghiem(
        this.yeuCauTiepNhanId,
        this.strBarCodeNumber,
        false,
        this.barcodeSoLuongIn,
        true
      );
      this.apiService.post<any>("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.barcodeDangChon = new LookupItemVo(resultData.KeyId, resultData.DisplayName);
          this.barcodeDisplay = resultData.KeyId;
          this.barcodeKeyId = resultData.KeyId;
          this.strBarCodeNumber = resultData.KeyId +"";
          this.layMauXetNghiemBarcodeQueryInfo.BarcodeNumbers.push(resultData.KeyId);
          this.queryInfoBarcode.ParameterDependencies = JSON.stringify(this.layMauXetNghiemBarcodeQueryInfo);
          
          this.gridNhom._gridDataSource.data.forEach(element => {
            if (element.NgayLayMau === null) {
              element.Barcode = resultData.DisplayName;
              element.BarcodeNumber = resultData.KeyId;
            }
          });
        }
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyLayMau(dataItem){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận lấy mẫu này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let xacNhanLayMauXetNghiem = new XacNhanLayMauXetNghiem(
            self.yeuCauTiepNhanId,
            dataItem.BenhNhanId,
            dataItem.PhienXetNghiemId,
            dataItem.NhomDichVuBenhVienId,
            dataItem.BarcodeNumber,
            dataItem.Barcode
          );
          self.apiService.put("XetNghiem/XuLyLayMauXetNghiem", xacNhanLayMauXetNghiem).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lấy mẫu"]));
            self.gridNhom.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              self.gridNhom.search();
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyCapNhatLayMau(dataItem)
  {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận lấy lại mẫu không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let xacNhanLayLaiMauXetNghiem = new XacNhanLayMauXetNghiem(
            self.yeuCauTiepNhanId,
            dataItem.BenhNhanId,
            dataItem.PhienXetNghiemId,
            dataItem.NhomDichVuBenhVienId
          );
          self.apiService.put("XetNghiem/XuLyLayLaiMauXetNghiem", xacNhanLayLaiMauXetNghiem).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lấy lại mẫu"]));
            self.gridNhom.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              self.barcodeDangChon.KeyId = null;
              self.gridNhom.search();
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyGuiMau(){
    var self = this;
    if (self.authService.hasPermission(DocumentType.GoiMauXetNghiem, SecurityOperation.Add)) {
      self.dialog.open(LayMauXetNghiemCreateComponent, {
        disableClose: false,
        width: '1600px',
        //data: { Id: id }
      }).afterClosed().subscribe(result => {
        if(result === true)
        {
          self.gridNhom.search();
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huyMau(){
    this.dialog.open(LayMauXetNghiemXacNhanHuyPopupComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc hủy mẫu này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        // xử lý hủy mẫu
        // this.apiService.post("YeuCauLinhDuocPham/XuLyKhongDuyetYeuCauLinhDuocPhamThuong", this.yeuCauLinhThuoc)
        //   .subscribe((resultData) => {
        //     this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Không duyệt"]));
        //   },
        //     (err: ApiError) => {
        //       if (err.Message != "Validation Failed") {
        //         this.notificationService.showError(err.Message);
        //       }
        //     });
      }
    });
  }

  xuLyBenhNhanNhanKetQua(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn đã trả kết quả xét nghiệm này rồi phải không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          self.apiService.put("XetNghiem/XuLyBenhNhanNhanKetQua?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Trả kết quả"]));
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
          }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai(){
    this.router.navigate([this.baseRoute], { queryParams: { holdQuery: true}});
  }

  thongTinTuChoi: any;
  tooltipCustom(loaiMauXetNghiem: any) {
    this.thongTinTuChoi = loaiMauXetNghiem;
  }

  getDataLichSuTuChoi() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      var self = this;

      self.showPopupLoadingData();
      self.apiService.get<any>("XetNghiem/GetLichSuTuChoiMau?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(resultData => {
        self.lichSuHuyMaus = resultData;
        self.closePopupLoadingData();
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chuyenDen(event){
    // if(event.index === 1){
    //   this.getDataLichSuTuChoi();
    // }
    this.arrDichVuHuyBarcode = [];
  }

  xemChiTietPhieuGuiMau(id: number) {
    if (this.authService.hasPermission(DocumentType.GoiMauXetNghiem, SecurityOperation.View)) {
      this.router.navigate(["/xet-nghiem/goi-mau/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  InBarcode() {
    this.validationErrors = [];
    var thongTinBarcode = new KiemTraBarcodeLayMauXetNghiem(
      this.yeuCauTiepNhanId,
      this.strBarCodeNumber,
      true,
      this.barcodeSoLuongIn,
      false
    );
    this.apiService.post<any>("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.dialog.open(LayMauXetNghiemInBarcodeComponent, {
          disableClose: true,
          width: "300px",
          data: { 'YeuCauTiepNhanId': this.yeuCauTiepNhanId, 'BarcodeNumber': this.strBarCodeNumber, 'BarcodeId': resultData.DisplayName, 'SoLuong': this.barcodeSoLuongIn },
        });
      }
    },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  InBarcodeDaCapCode(dataItem) {
    this.dialog.open(LayMauXetNghiemInBarcodeComponent, {
      disableClose: true,
      width: "300px",
      data: { 'YeuCauTiepNhanId': this.yeuCauTiepNhanId, 'BarcodeNumber': dataItem.BarcodeNumber, 'BarcodeId': dataItem.Barcode, 'SoLuong': 1 },
    });
  }

  changeCapMoiBarcode(event)
  {
    console.log('changeCapMoiBarcode', event);
    if(event != undefined && event != null)
    {
      this.strBarCodeNumber = event +"";
      this.getThongTinBarcodeDangChon();
    }
    else
    {
      this.strBarCodeNumber = null;
    }
  }

  onDataBoundGridNhom(event)
  {
    if(event != null && event.Data.length > 0)
    {
      this.barcodeSoLuongIn = 0;
      event.Data.forEach(element => {
        if (element.NgayLayMau === null) {
          if(this.barcodeDangChon !== undefined && this.barcodeDangChon.KeyId !== null)
          {
            element.Barcode = this.barcodeDangChon.DisplayName;
            element.BarcodeNumber = this.barcodeDangChon.KeyId;
          }
          this.barcodeSoLuongIn += element.LoaiMaus.length;
        }
      });
    }
    else
    {
      this.barcodeSoLuongIn = null;
    }
  }

  xemKetQuaXetNghiem(){
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      this.showPopupLoadingData();
      this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
      this.inPhieuDuyetKetQua.Header = true;
      this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      this.apiService.post<any>('XetNghiem/InKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
        resData => {
          this.closePopupLoadingData();
            if (resData) {
                resData.forEach(e => {
                    const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                    WindowPrt.focus();
                    WindowPrt.close();
                    WindowPrt.document.write(e.Html);
                    WindowPrt.document.close();
                    var typeSize = "A4";
                    var typeLayout = "portrait";

                    var contents = WindowPrt.document.documentElement.innerHTML;
                    var frame1 = this.renderer.createElement('iframe');
                    frame1.name = "frame1";
                    frame1.style.position = "absolute";
                    frame1.style.top = "-1000000px";
                    document.body.appendChild(frame1);
                    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                    frameDoc.document.open();
                    frameDoc.document.write('<html><head><title>Kết quả</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
                    frameDoc.document.write('</head><body>');
                    frameDoc.document.write(contents);
                    frameDoc.document.write('</body></html>');
                    frameDoc.document.close();
                    setTimeout(function () {
                        window.frames["frame1"].focus();
                        window.frames["frame1"].print();
                        document.body.removeChild(frame1);
                    }, 500);
                });
            }
        },
        (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        }
    );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedPrintForm() {
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      return new Promise(resolve => {
        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
        this.inPhieuDuyetKetQua.Header = true;
        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        this.apiService.post<any>('XetNghiem/InKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
          resData => {
            var contents = "";
            resData.forEach(e => {
              contents += e.Html + "<div class='pagebreak'></div>";
            });
            resolve(contents);
            this.closePopupLoadingData();
          },
          (err: ApiError) => {
            if (err.Message !== 'Validation Failed') {
              this.notificationService.showError(err.Message);
            }
            resolve(null);
            this.closePopupLoadingData();
          });
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedExportHtmlContent(){
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      this.showPopupLoadingData();
      let dialogRef: any;
      let dataChiTietXetNghiem:any[] =[] ;
      let inLayMau : boolean = true;
      this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&inDanhSachLayMauDaCoKetQua=" + inLayMau).subscribe(
        (result) => {
            if(result != null)
            {
              result.forEach(element => {
                if(element.ChiTietKetQuaXetNghiems != null)
                {
                  element.ChiTietKetQuaXetNghiems.forEach(elements => {
                    dataChiTietXetNghiem.push(elements);
                  });
                }
                
              });
              dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
                disableClose: true,
                width: '1000px',
                // height: '300px',
                data: dataChiTietXetNghiem,
            }).afterClosed().subscribe((result) => {
              if(result != undefined && result != null && result != "")
              {
                  if(result == 'No')
                  {
                    this.closePopupLoadingData();
                  }
                  else{
                    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                    this.inPhieuDuyetKetQua.Header = true;
                    this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                    this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                    this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                    //this.apiService.postExportPdf<any>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                    this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                      arrHtml => {
                        // const dateTimeNow = new Date();
                        // CommonService.downLoadFile(resData, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + '.pdf');
                        //   this.closePopupLoadingData();
                        this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
                          disableClose: false,
                          width: '1000px',
                          data: arrHtml
                        }).afterClosed().subscribe(result => {
                        });
                        this.closePopupLoadingData();
                      },
                      (err: ApiError) => {
                        if (err.Message !== 'Validation Failed') {
                          this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                      });
                  }
              }
            });
            };
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyLayGuiVaNhanMau(dataItem){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận lấy mẫu này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let xacNhanLayMauXetNghiem = new XacNhanLayMauXetNghiem(
            self.yeuCauTiepNhanId,
            dataItem.BenhNhanId,
            dataItem.PhienXetNghiemId,
            dataItem.NhomDichVuBenhVienId,
            dataItem.BarcodeNumber,
            dataItem.Barcode
          );
          self.apiService.put("XetNghiem/XuLyLayGuiVaNhanMauXetNghiem", xacNhanLayMauXetNghiem).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lấy mẫu"]));
            self.closePopupLoadingData();
            // if (resultData != undefined && resultData != null) {
            //   self.dialog.open(LayMauXetNghiemInPhieuGuiMauComponent, {
            //     disableClose: false,
            //     width: '1200px',
            //     data: resultData,
            //   }).afterClosed().subscribe(result => {
            //     self.gridNhom.search();
            //   });
            // }
            // else {
            //   self.gridNhom.search();
            // }
            self.gridNhom.search();
          },
            (err: ApiError) => {
              self.gridNhom.search();
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyCapNhatLayGuiVaNhanMau(dataItem)
  {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận lấy lại mẫu không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let xacNhanLayLaiMauXetNghiem = new XacNhanLayMauXetNghiem(
            self.yeuCauTiepNhanId,
            dataItem.BenhNhanId,
            dataItem.PhienXetNghiemId,
            dataItem.NhomDichVuBenhVienId,
            dataItem.BarcodeNumber,
            dataItem.Barcode
          );
          self.apiService.put("XetNghiem/XuLyLayLaiGuiVaNhanMauXetNghiem", xacNhanLayLaiMauXetNghiem).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lấy lại mẫu"]));
            self.closePopupLoadingData();
            if (resultData != undefined && resultData != null) {
              self.dialog.open(LayMauXetNghiemInPhieuGuiMauComponent, {
                disableClose: false,
                width: '1200px',
                data: resultData,
              }).afterClosed().subscribe(result => {
                self.gridNhom.search();
              });
            }
            else {
              self.gridNhom.search();
            }
          },
            (err: ApiError) => {
              if(self.barcodeDangChon != undefined)
              {
                self.barcodeDangChon.KeyId = null;
              }
              self.gridNhom.search();
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyHuyMauXetNghiem(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn hủy cấp Barcode này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let xacNhanLayLaiMauXetNghiem = new XacNhanLayMauXetNghiem(
            self.yeuCauTiepNhanId,
            dataItem.BenhNhanId,
            dataItem.PhienXetNghiemId,
            dataItem.NhomDichVuBenhVienId,
            dataItem.BarcodeNumber,
            dataItem.Barcode
          );
          self.apiService.put("XetNghiem/XuLyHuyMauXetNghiem", xacNhanLayLaiMauXetNghiem).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy cấp Barcode"]));
            self.gridNhom.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              if (self.barcodeDangChon != undefined) {
                self.barcodeDangChon.KeyId = null;
              }
              self.gridNhom.search();
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  // cập nhật lấy mẫu
  chonDichVu(event)
  {
    console.log('gridChuaCapCode', this.gridChuaCapCode, event);
    if(event && event.length > 0)
    {
      this.barcodeSoLuongIn = event.length; 
      this.arrDichVuChon = event;
    }
    else
    {
      this.barcodeSoLuongIn = null;
      this.arrDichVuChon = [];
    }
  }

  capMoiBarcodeVer2() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.validationErrors = [];
      let barcodeDangChonDisplay = !this.dungBarcodeMoi ? this.barcodeDangChon.DisplayName : null;
      var thongTinBarcode = new KiemTraBarcodeLayMauXetNghiem(
        this.yeuCauTiepNhanId,
        this.strBarCodeNumber,
        false,
        this.barcodeSoLuongIn,
        this.dungBarcodeMoi,
        barcodeDangChonDisplay
      );
      this.apiService.post<any>("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.barcodeDangChon = new LookupItemVo(resultData.KeyId, resultData.DisplayName);
          this.barcodeDisplay = resultData.KeyId;
          this.barcodeKeyId = resultData.KeyId;
          this.strBarCodeNumber = resultData.KeyId +"";
          // this.layMauXetNghiemBarcodeQueryInfo.BarcodeNumbers.push(resultData.KeyId);
          // this.queryInfoBarcode.ParameterDependencies = JSON.stringify(this.layMauXetNghiemBarcodeQueryInfo);
        }
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeCapMoiBarcodeVer2(event)
  {
    if(event != undefined && event != null)
    {
      this.strBarCodeNumber = event.KeyId +"";
      this.barcodeKeyId = event.KeyId;
      this.barcodeDangChon.DisplayName = event.DisplayName;
    }
    else
    {
      this.strBarCodeNumber = null;
      this.barcodeKeyId = null;
      this.barcodeDangChon.DisplayName = null;
    }
    console.log('this.barcodeDangChon', this.barcodeDangChon, event);
  }

  CapVaInBarcode() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.validationErrors = [];
      let barcodeDangChonDisplay = !this.dungBarcodeMoi ? this.barcodeDangChon.DisplayName : null;
      let barcodeDangChonKeyId = this.barcodeKeyId == null ? null : this.barcodeKeyId.toString();


      // trường hợp tạo barocde mới -> tự động: sẽ mặc định tự động cấp mới barcode, html bỏ
      let IsCapBarcodeChoDichVu= true;
      if(this.dataYeuCauTiepNhan.IsAutoBarcode && this.dungBarcodeMoi)
      {
        IsCapBarcodeChoDichVu = false;
      }
      var thongTinBarcode = new KiemTraBarcodeLayMauXetNghiem(
        this.yeuCauTiepNhanId,
        barcodeDangChonKeyId,
        true, // cheat validation
        this.barcodeSoLuongIn,
        this.dungBarcodeMoi,
        barcodeDangChonDisplay,
        IsCapBarcodeChoDichVu
      );
      this.apiService.post<any>("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe((resultDataBarcode) => {
        var thongTinBarcode = new CapBarcodeTheoDichVu(
          this.yeuCauTiepNhanId,
          this.dataYeuCauTiepNhan.BenhNhanId,
          resultDataBarcode.KeyId,
          resultDataBarcode.DisplayName,
          this.barcodeSoLuongIn,
          this.arrDichVuChon
        );
        this.apiService.put<any>("XetNghiem/XuLyCapBarcodeChoDichhVuDangChon", thongTinBarcode)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cấp barcode"]));
            this.dialog.open(LayMauXetNghiemInBarcodeComponent, {
              disableClose: true,
              width: "300px",
              data: { 'YeuCauTiepNhanId': this.yeuCauTiepNhanId, 'BarcodeNumber': resultDataBarcode.KeyId, 'BarcodeId': resultDataBarcode.DisplayName, 'SoLuong': this.barcodeSoLuongIn },
            }).afterClosed().subscribe(() => {
              this.barcodeSoLuongIn = null;
              this.gridChuaCapCode.search();
            });
          },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyXacNhanNhanMau(dataItem = null){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận nhận mẫu này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let arrayTemp = new Array<number>();
          if(dataItem != null)
          {
            arrayTemp.push(dataItem.Id);
          }
          else
          {
            arrayTemp = self.arrDichVuHuyBarcode;
          }
          var obj = {
            YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
            BenhNhanId: self.dataYeuCauTiepNhan.BenhNhanId,
            YeuCauDichVuKyThuatIds: arrayTemp
          }
          // self.apiService.put("XetNghiem/XuLyXacNhanNhanMauXetNghiem?phienXetNghiemChiTietId=" + dataItem.PhienXetNghiemChiTietId).subscribe(resultData => {
          self.apiService.put("XetNghiem/XuLyXacNhanNhanMauXetNghiem", obj).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Nhận mẫu"]));
            self.gridDaCapCode.clearCheckBox();
            self.arrDichVuHuyBarcode = [];
            self.gridDaCapCode.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chonDichVuHuyBarcode(event)
  {
    if(event && event.length > 0)
    {
      this.arrDichVuHuyBarcode = event;
    }
    else
    {
      this.arrDichVuHuyBarcode = [];
    }
  }

  xacNhanHuyMauXetNghiem(dataItem = null) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn hủy cấp Barcode cho dịch vụ đang chọn không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let arrayTemp = new Array<number>();
          if(dataItem != null)
          {
            arrayTemp.push(dataItem.Id);
          }
          else
          {
            arrayTemp = self.arrDichVuHuyBarcode;
          }
          var obj = {
            YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
            BenhNhanId: self.dataYeuCauTiepNhan.BenhNhanId,
            YeuCauDichVuKyThuatIds: arrayTemp
          }
          self.apiService.put("XetNghiem/XuLyXacNhanHuyCapBarcodeTheoDichVu", obj).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy cấp Barcode"]));
            self.gridDaCapCode.clearCheckBox();
            self.arrDichVuHuyBarcode = [];
            self.gridDaCapCode.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  timeout = null;
  capNhatThoiGianNhanMau(event, dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      //this.showPopupLoadingData();
      var self = this;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(function () {
        var obj = {
          YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
          YeuCauDichVuKyThuatId: dataItem.Id,
          NgayNhanMau: dataItem.NgayNhanMau
        }
        self.apiService.put<any>("XetNghiem/CapNhatGridItemThoiGianNhanMau", obj).subscribe(() => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));
          self.gridDaCapCode.search();
          //this.closePopupLoadingData();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            //this.closePopupLoadingData();
          });
      }, 1500);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeHinhThucBarcode(event)
  {
    this.validationErrors = [];
    this.barcodeDangChon = new LookupItemVo(null, null);
    this.strBarCodeNumber = null;
    this.barcodeKeyId = null;
  }

  getDataGridDaCapBarcode(event)
  {
    console.log("getDataGridDaCapBarcode", event);
    if(event && event.Data.length > 0 && event.Data.findIndex(x => x.IsShowXacNhanNhanMau == true) != -1)
    {
      this.isShowXacNhanMauNhieuDichVu = true;
    }
    else{
      this.isShowXacNhanMauNhieuDichVu = false;
    }
  }
}
