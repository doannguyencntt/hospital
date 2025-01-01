import { Component, Input, OnInit, ChangeDetectorRef, ViewRef, ViewChild, TemplateRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import icClear from '@iconify/icons-ic/twotone-clear';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icCancel from '@iconify/icons-ic/cancel';
import icAdd from '@iconify/icons-ic/twotone-add';
import icClose from '@iconify/icons-ic/close';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { KetQuaCdhaTdcnDanhSachMauPopupComponent } from '../ket-qua-cdha-tdcn-danh-sach-mau-popup/ket-qua-cdha-tdcn-danh-sach-mau-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietKetQua, NoiDungKetQua, ChuKyKetQua, HinhAnhDinhKemKetQua, ThongTinHanhChinh, LookupItemChonDichVuKyThuat, CanLamSangTimKiem } from '../can-lam-sang';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { KetQuaCdhaTdcnThemHinhAnhPopupComponent } from '../ket-qua-cdha-tdcn-them-hinh-anh-popup/ket-qua-cdha-tdcn-them-hinh-anh-popup.component'
import { ChiDinhGhiNhanVatTuThuoc, YeuCauVatTuBenhVien } from '../../../kham-benh/kham-benh.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';

@Component({
  selector: 'app-ket-qua-cdha-tdcn-shared',
  templateUrl: './ket-qua-cdha-tdcn-shared.component.html',
  styleUrls: ['./ket-qua-cdha-tdcn-shared.component.scss']
})
export class KetQuaCdhaTdcnSharedComponent implements OnInit {
  chiDinhGhiNhanVatTuThuoc: ChiDinhGhiNhanVatTuThuoc = new ChiDinhGhiNhanVatTuThuoc();
  yeuCauVatTuBenhVien: YeuCauVatTuBenhVien = new YeuCauVatTuBenhVien();
  @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;
  gridDataSourceVTTHThuoc: any = {};
  gridVTTHThuocColumns: any[] = [];
  groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'TenDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  totalDVKT: number = 0;
  totalDVKTComplete: number = 0;

  @ViewChild('actionVTTHThuocTemplate', { static: true }) actionVTTHThuocTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('stttTemplate', { static: true }) stttTemplate: TemplateRef<any>;
  @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
  @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
  @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('chonDichVuKyThuat', { static: false }) chonDichVuKyThuat: ComboboxComponent;
  @ViewChild('comboboxLayMau', { static: false }) comboboxLayMau: ComboboxComponent;
  

  icClear = icClear;
  icAddCircle = icAddCircle;
  icCancel = icCancel;
  icAdd = icAdd;
  icClose = icClose;

  documentType: DocumentType;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  file: ChuKyKetQua = new ChuKyKetQua();

  noiDungKetQua: NoiDungKetQua = new NoiDungKetQua();
  thongTinHanhChinh: ThongTinHanhChinh = new ThongTinHanhChinh();
  public lookupItemChonDichVuKyThuat: LookupItemChonDichVuKyThuat = new LookupItemChonDichVuKyThuat();

  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  popupLoadingData: any;
  yeuCauKyThuatId: number;
  yeuCauTiepNhanId: number;
  isThemThuocVatTu: boolean = false;
  kiemTraThuocVatTuDaCo: boolean = false;
  public dichVuDaThucHien: boolean = false;
  public layMauId: boolean = false;
  timKiemObj: CanLamSangTimKiem = new CanLamSangTimKiem();

  @Input() validationErrors: any;
  @Input() nhanVienThucHienLai: boolean = false;

  @Output() trangThaiYeuCauTiepNhan = new EventEmitter<any>();

  @Output() trangThaiDichVuDuocChon = new EventEmitter<any>();
  @Output() nhanVienThucHienKQ = new EventEmitter<any>();

  @Output() tenNguoiSuaSauCung = new EventEmitter<any>();
  @Output() thoiGianSuaSauCung = new EventEmitter<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() { 
    this.documentType = DocumentType.CanLamSang;
    this.noiDungKetQua.ChiTietKetQuaObj = new ChiTietKetQua();
    this.noiDungKetQua.ChiTietKetQuaObj.InKemAnh = true;
    let id = this.route.snapshot.params.id;
    if (id != undefined && id != null) {
      this.yeuCauTiepNhanId = id;
      this.noiDungKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      this.getThongTinBenhNhan(this.yeuCauTiepNhanId);
    }

    this.gridVTTHThuocColumns = [
      { Field: "Action", Title: "", Width: 50, Template: this.actionVTTHThuocTemplate },
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
      { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", MinWidth: 150, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
      { Field: "TenKho", Title: "Tên kho", Width: 150 },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
      { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100 },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100 },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
    ];


    var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachKetQuaCDHATDCN");
    if (additionalSearchString != null) {     
      this.timKiemObj = JSON.parse(additionalSearchString);   
    }

  }

  compressImage(base64Str, maxWidth = 300, maxHeight = 300) {
    return new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        const MAX_WIDTH = maxWidth
        const MAX_HEIGHT = maxHeight
        let width = img.width
        let height = img.height
  
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL())
      }
    })
  }
  
  getSharedData() {
    if(this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems!=null && this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems.length>0)
    {
      this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems.forEach(item=>{
        this.compressImage(item.HinhAnh, 300, 300).then(compressed => {
          item.HinhAnh = compressed.toString();
        })
      });
    }
    this.noiDungKetQua.DataKetQuaCanLamSang = JSON.stringify(this.noiDungKetQua.ChiTietKetQuaObj);
    return this.noiDungKetQua;
  }

  clearData() {
    this.lookupItemChonDichVuKyThuat = new LookupItemChonDichVuKyThuat();
    this.noiDungKetQua = new NoiDungKetQua();
    this.noiDungKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
    this.noiDungKetQua.ChiTietKetQuaObj = new ChiTietKetQua();
  }

  reloadDataSauKhiLuuThanhCong(yeuCauDichVuKyThuatId) {
    this.getTrangThaiYeuCauDichVuKyThuat(yeuCauDichVuKyThuatId);
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

  modelChangeVuKyThuat(event: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();

    this.isThemThuocVatTu = false;

    if (event != undefined && event != null) {
      this.yeuCauKyThuatId = event;
      this.getById(event, this.lookupItemChonDichVuKyThuat);
      this.getTrangThaiYeuCauDichVuKyThuat(event);
      this.getGridDataGhiNhanVTHHThuoc(event);
      this.layMauId = null;
    }
  }

  getTrangThaiYeuCauDichVuKyThuat(yeuCauDichVuKyThuatId: number) {
    this.apiService.get<any>("CanLamSang/TrangThaiYeuCauDichVuKyThuat?yeuCauDichVuKyThuatId=" + yeuCauDichVuKyThuatId)
      .subscribe(
        (resultData) => {     
          
          this.trangThaiYeuCauTiepNhan.emit(resultData.TrangThaiYeuCauTiepNhan);   

          this.dichVuDaThucHien = resultData.TrangThaiDaThucHien;
          this.trangThaiDichVuDuocChon.emit(resultData.TrangThaiDaThucHien);
          this.nhanVienThucHienKQ.emit(resultData.NguoiThucHien);

          this.tenNguoiSuaSauCung.emit(resultData.TenNguoiSuaSauCung);
          this.thoiGianSuaSauCung.emit(resultData.ThoiGianSuaSauCung);

          // this.nhanVienThucHienLai = resultData.NguoiThucHien;
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  dataChange(event) {
    this.getGridDataGhiNhanVTHHThuoc(this.yeuCauKyThuatId);
  }

  dataChangeXoa(event){
    this.isThemThuocVatTu = true;    
    this.kiemTraThuocVatTuDaCo = false; 
  }

  getGridDataGhiNhanVTHHThuoc(yeuCauKyThuatId: any) {
    this.kiemTraThuocVatTuDaCo = false; 
    var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${yeuCauKyThuatId}`;
    this.apiService.get<any[]>(url).subscribe(res => {
      if (res) {
        if (res != undefined && res != null && res.length > 0) {
           this.kiemTraThuocVatTuDaCo = true;
        }
      }
    });
  }

  getThongTinBenhNhan(id: number) {
    this.apiService.get<any>("CanLamSang/GetThongTinChungBenhNhan?id=" + id)
      .subscribe(
        (resultData) => {
          this.thongTinHanhChinh = resultData;
          if (resultData.FileKetQuaCanLamSangs.length > 0)
            this.file = resultData.FileKetQuaCanLamSangs[0];
          if (
            this.thongTinHanhChinh.ThongTinHanhChinhNamSinh != null &&
            this.thongTinHanhChinh.ThongTinHanhChinhThangSinh != null &&
            this.thongTinHanhChinh.ThongTinHanhChinhNgaySinh != null
          ) {
            var ngaySinh = new Date(
              this.thongTinHanhChinh.ThongTinHanhChinhThangSinh +
              "/" +
              this.thongTinHanhChinh.ThongTinHanhChinhNgaySinh +
              "/" +
              this.thongTinHanhChinh.ThongTinHanhChinhNamSinh +
              "/"
            );
            this.getAge(ngaySinh, new Date());
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  getById(id: number, event: any) {
    this.showPopupLoadingData();
    this.apiService.get<any>("CanLamSang/GetThongTinKetQua?id=" + id)
      .subscribe(
        (resultData) => {
          this.noiDungKetQua = resultData;

          this.noiDungKetQua.ChiTietKetQuaObj.NguoiLuuTen = resultData.NguoiLuuTen;
          this.noiDungKetQua.ChiTietKetQuaObj.NguoiLuuId = resultData.NguoiLuuId

          this.lookupItemChonDichVuKyThuat.KeyId = event.KeyId;
          this.lookupItemChonDichVuKyThuat.DisplayName = event.DisplayName;
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

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;

    let days = date_2.getDate() - date_1.getDate();

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

  showPopupDuLieuMacDinh(isKetQuaMau: boolean = true) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(KetQuaCdhaTdcnDanhSachMauPopupComponent, {
        disableClose: false,
        width: '1400px',
        data: { "IsKetQuaMau": isKetQuaMau }
      }).afterClosed().subscribe(result => {

      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chonKetQua(event) {
    if (event) {
      this.noiDungKetQua.ChiTietKetQuaObj.KetQua = event.KetQuaMau;
      this.noiDungKetQua.ChiTietKetQuaObj.KetLuan = event.KetLuanMau;
    }
  }

  themHinhAnh() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dialog
        .open(KetQuaCdhaTdcnThemHinhAnhPopupComponent, {
          disableClose: true,
          width: "1000px",
        })
        .afterClosed()
        .subscribe(result => {
          // trường hợp nhấn hủy
          if (result == undefined || result == null) {
            return;
          }

          // trường hợp nhấn thêm
          if (this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems == undefined) {
            this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems = [];
          }
          this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems = [...this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems, ...result];
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaHinhAnh(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      var index = this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems.findIndex(x => x == dataItem);
      if (index != -1) {
        this.noiDungKetQua.ChiTietKetQuaObj.HinhAnhDinhKems.splice(index, 1);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemHinhAnh(dataItem) {
    this.dialog.open(ViewImagePdfComponent, {
      disableClose: false,
      width: '1000px',
      height: '600px',
      data: { Type: "Image", Title: "Xem ảnh", Description: "", Src: dataItem }
    });
  }

  uploadFileDone($event) {
    this.noiDungKetQua.FileKetQuaCanLamSangs[0] = $event;
    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }
  }


  themGhiNhanVTThuoc(event: any, yeuCauKyThuatId: number) {
    this.isThemThuocVatTu = event;
    this.yeuCauKyThuatId = yeuCauKyThuatId;
  }

  dataBoundYeuCauDichVuKyThuat(event: any) {
    this.totalDVKT = event.length;
    this.totalDVKTComplete = event.filter(o => o.TrangThaiDangThucHien != true).length;
  }
}
