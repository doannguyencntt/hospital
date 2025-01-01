import { ChangeDetectorRef, Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTrangThaiYeuCauTiepNhan } from 'src/app/shared/enum/kham-benh.enum';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BenhVienHangDoi, KhamBenhTemplateDichVuKhamSucKhoe, ListStatusSelectTabKhamBenh, PhieuKhamBenhVo, ThongTinKhamPrevious, YeuCauKhamBenhPrevious } from '../../kham-benh.model';
import { KhamBenhThongTinDoiTuongPopupComponent } from '../kham-benh-thong-tin-doi-tuong-popup/kham-benh-thong-tin-doi-tuong-popup.component';
import { LanKhamHienTaiBenhNhanTiepTheoPopupComponent } from '../lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-tiep-theo-popup/lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component';
import { NghiHuongBhytConfirmPopupComponent } from '../lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component';
import { PhieuKhamBenhVaoVienPopupComponent } from '../lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component';
import { NgayDuongThaiXacNhanPopupComponent } from '../ngay-duong-thai-xac-nhan-popup/ngay-duong-thai-xac-nhan-popup.component';
declare var jQuery: any;
@Component({
  selector: 'app-ket-luan-nguoi-benh-hang-doi-chung-popup',
  templateUrl: './ket-luan-nguoi-benh-hang-doi-chung-popup.component.html',
  styleUrls: ['./ket-luan-nguoi-benh-hang-doi-chung-popup.component.scss']
})
export class KetLuanNguoiBenhHangDoiChungPopupComponent implements OnInit {

  icClose = icClose;

  documentType: DocumentType;
  validationErrors: any;
  popupLoadingData: any;

  phongKhamId: number = 0;
  hangDoiKhamId: number = 0;

  benhNhanHienTai: BenhVienHangDoi = new BenhVienHangDoi();
  maTiepNhan: number = 0;
  isKhamDoan: boolean = false;
  isKhamDoanTatCa: boolean = false;
  loginNoiVien: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
  hinhThucKham: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
  lstStatusSelectTabKhambenh: ListStatusSelectTabKhamBenh = new ListStatusSelectTabKhamBenh();
  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  validationKetLuanErrors: any;
  thongTinKhamTemp: ThongTinKhamPrevious;
  yeuCauKhamBenhPrevious: YeuCauKhamBenhPrevious;

  LaChuyenKhoaKhamNhieu: boolean = false;
  showChiTietHanhChinh: boolean = false;
  cauHinhDichVuKhamThai = 14;
  yeuCauTiepNhanDangThucHien: EnumTrangThaiYeuCauTiepNhan = EnumTrangThaiYeuCauTiepNhan.DangThucHien;
  templateKhoaPhong: string = null;
  tenKhoaPhong: string = null;
  tabActive: string = "card-popup0";
  phieuKhamBenhVo: PhieuKhamBenhVo = new PhieuKhamBenhVo();

  isFullscreen:boolean=false;
  Width:number=800;
  Height:number=600;

  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KetLuanNguoiBenhHangDoiChungPopupComponent>,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    this.phongKhamId = this.data.PhongThucHienId;
    this.hangDoiKhamId = this.data.HangDoiId;

    let menuInfo = this.authService.getAccessUser();
    this.hinhThucKham = menuInfo.HinhThucKhamBenh;

    this.getBenhNhanDangKham(this.phongKhamId, this.hangDoiKhamId);
  }

  ngAfterContentInit() {
    this.fullscreen();
  }

  close(laHoanThanhKham: boolean = false){
    this.dialogRef.close(laHoanThanhKham);
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

  processDynamicComponent(thongTinTempLateObj: any = null) {
    let dataKhamTheoTemplate: any;
    let lstDataKhamTheoTemplate: any[] = [];
    if (this.isKhamDoan) {
      let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
      if (tempplate != null) {
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
          = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
      }
    }
    let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
    // console.log('processDynamicComponent', thongTinKhamTheoDichVuTemplateObj);

    if (
      thongTinKhamTheoDichVuTemplateObj !== null
    ) {
      thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
        (item) => {
          if (
            item.groupItems != undefined &&
            item.groupItems != null &&
            item.groupItems.length > 0
          ) {
            item.groupItems.forEach((element) => {
              if (element.Value != undefined && element.Value !== null) {
                dataKhamTheoTemplate = {
                  Id: element.Id,
                  Value: element.Value,
                };
                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
              }
            });
          } else if (item.Value != undefined && item.Value !== null) {
            dataKhamTheoTemplate = {
              Id: item.Id,
              Value: item.Value,
            };
            lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
          }
        }
      );

      let strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
      let saveTemplate =
        '{"DataKhamTheoTemplate": ' + strLstDataKhamTheoTemplate + "}";
      return saveTemplate;
    }
    return null;
  }

  bindDataDynamicComponent(thongTinTempLateObj: any = null, thongTinDataObj: any = null) {
    if (this.isKhamDoan) {
      let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
      if (tempplate != null) {
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
          = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = tempplate.ThongTinKhamTheoDichVuData;
      }
    }
    let strData = thongTinDataObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData : thongTinDataObj;
    let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (thongTinKhamTheoDichVuTemplateObj !== null) {
        thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
          (item) => {
            if (
              item.groupItems != undefined &&
              item.groupItems != null &&
              item.groupItems.length > 0
            ) {
              item.groupItems.forEach((element) => {
                itemTemp = dataObj.DataKhamTheoTemplate.find(
                  (x) => x.Id == element.Id
                );
                if (itemTemp != null) {
                  element.Value = itemTemp.Value;
                }
              });
            } else {
              itemTemp = dataObj.DataKhamTheoTemplate.find(
                (x) => x.Id == item.Id
              );
              if (itemTemp != null) {
                item.Value = itemTemp.Value;
              }
            }
          }
        );
      }
    }
  }

  unSelectedTab() {
    this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
    this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
    this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
    this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
    this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
    this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
    this.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = false;
  }

  chuyenDen(element: any, event: any, isKhamDoan: boolean = false) {
    var self = this;
    // if (!(self.isKhamDoan && event.index == 0)) {
    //   setTimeout(function () {
    //     self.scrollTo(element);
    //   }, 100);
    // }
    if (event.index == 0 || event.title == "KHÁM BỆNH") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
    }
    if (event.index == 1 || event.title == "LỊCH SỬ KHÁM") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
    }
    if (event.index == 2 || event.title == "CHỈ ĐỊNH") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
    }
    if (event.index == 3 || event.title == "KQ CLS") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
    }

    if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
      self.validationKetLuanErrors = [];
    }
    if (!isKhamDoan) {
      if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
        self.unSelectedTab();
        self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
        self.validationKetLuanErrors = [];
      }
    } else {
      if (event.index == 4 || event.title == "TƯ VẤN THUỐC") {
        self.unSelectedTab();
        self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
        self.validationKetLuanErrors = [];
      }
    }

  }

  scrollTo(element) {
    jQuery(".mat-dialog-content").animate({
        scrollTop: jQuery("#" + element).position().top + (this.isKhamDoan ? 60 : 85),
    });
    this.tabActive = element;
}

  ganThongTinKhamTamThoi() {
    let yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
    let yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();
    //let ketQuaSinhHieus = Object.assign([], this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus); //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.slice();

    //trường hợp sửa data đã lưu trực tiếp trên grid
    const ketQuaSinhHieus = [];
    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));


    let khamBenhBenhNhanDiUngThuocs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.slice();
    let khamBenhBenhNhanTienSuBenhs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.slice();
    let yeuCauKhamBenhBoPhanTonThuongs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.slice();
    let ThongTinKhamTheoDichVuTemplateObj = JSON.stringify(
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
    );

    ketQuaSinhHieus.forEach(element => {
      if (element.IsUpdate) {
        element.IsUpdate = false;
      }
    });

    // khám đoàn
    const templateDichVuKhamSucKhoes = [];
    if (this.isKhamDoan) {
      this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(val => {
        var newObj = new KhamBenhTemplateDichVuKhamSucKhoe(
          val.YeuCauKhamBenhId,
          val.ChuyenKhoaKhamSucKhoe,
          val.TenChuyenKhoa,
          val.ThongTinKhamTheoDichVuTemplate,
          { "ComponentDynamics": [] },
          val.ThongTinKhamTheoDichVuData,
          val.IsDaKham,
          val.IsDungChuyenKhoaLogin);
        val.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(element => {
          newObj.TemplateKhamCacCoQuanObj.ComponentDynamics.push(Object.assign({}, element));
        });
        templateDichVuKhamSucKhoes.push(newObj);
      });
    }

    this.thongTinKhamTemp = new ThongTinKhamPrevious(
      //BVHD-3706
      // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan,
      this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan,

      this.benhNhanHienTai.YeuCauKhamBenh.BenhSu,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu,
      this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan,
      this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan,
      this.benhNhanHienTai.YeuCauKhamBenh.HoHap,
      this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa,
      this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc,
      this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh,
      this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop,
      this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong,
      this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat,
      this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong,
      this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa,
      this.benhNhanHienTai.YeuCauKhamBenh.DaLieu,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId,
      this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu,
      ThongTinKhamTheoDichVuTemplateObj,
      yeuCauKhamBenhKhamBoPhanKhacs,
      yeuCauKhamBenhChanDoanPhanBiets,
      ketQuaSinhHieus,
      khamBenhBenhNhanDiUngThuocs,
      khamBenhBenhNhanTienSuBenhs,
      yeuCauKhamBenhBoPhanTonThuongs,
      templateDichVuKhamSucKhoes,
      null,
      this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh
    );
  }

  cancelChangeData() {
    this.benhNhanHienTai.validationErrors = null;
    this.ref.detectChanges();

    //BVHD-3706
    // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
    this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;

    this.benhNhanHienTai.YeuCauKhamBenh.BenhSu = this.thongTinKhamTemp.BenhSu;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu = this.thongTinKhamTemp.ChanDoanCuaNoiGioiThieu;

    this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan = this.thongTinKhamTemp.KhamToanThan;
    this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan = this.thongTinKhamTemp.TuanHoan;
    this.benhNhanHienTai.YeuCauKhamBenh.HoHap = this.thongTinKhamTemp.HoHap;
    this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa = this.thongTinKhamTemp.TieuHoa;
    this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc = this.thongTinKhamTemp.ThanTietNieuSinhDuc;

    this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh = this.thongTinKhamTemp.ThanKinh;
    this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop = this.thongTinKhamTemp.CoXuongKhop;
    this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong = this.thongTinKhamTemp.TaiMuiHong;
    this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat = this.thongTinKhamTemp.RangHamMat;
    this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong = this.thongTinKhamTemp.NoiTietDinhDuong;
    this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa = this.thongTinKhamTemp.SanPhuKhoa;
    this.benhNhanHienTai.YeuCauKhamBenh.DaLieu = this.thongTinKhamTemp.DaLieu;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId = this.thongTinKhamTemp.ChanDoanSoBoICDId;
    this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = this.thongTinKhamTemp.TenChanDoanSoBoICD;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = this.thongTinKhamTemp.ChanDoanSoBoGhiChu;
    this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
      this.thongTinKhamTemp.ThongTinKhamTheoDichVuTemplateObj
    );

    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.slice();
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.slice();
    //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = this.thongTinKhamTemp.KetQuaSinhHieus.slice();
    // trường hợp sửa data đã lưu trực tiếp trên grid
    const ketQuaSinhHieus = [];
    this.thongTinKhamTemp.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = ketQuaSinhHieus;


    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.slice();
    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.slice();
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.slice();

    //khám đoàn
    // const templateDichVuKhamSucKhoes = [];
    // this.thongTinKhamTemp.TemplateDichVuKhamSucKhoes.forEach(val => templateDichVuKhamSucKhoes.push(Object.assign({}, val)));
    // this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes = templateDichVuKhamSucKhoes.slice();
    const templateDichVuKhamSucKhoes = [];
    if (this.isKhamDoan) {
      this.thongTinKhamTemp.TemplateDichVuKhamSucKhoes.forEach(val => {
        var newObj = new KhamBenhTemplateDichVuKhamSucKhoe(
          val.YeuCauKhamBenhId,
          val.ChuyenKhoaKhamSucKhoe,
          val.TenChuyenKhoa,
          val.ThongTinKhamTheoDichVuTemplate,
          { "ComponentDynamics": [] },
          val.ThongTinKhamTheoDichVuData,
          val.IsDaKham,
          val.IsDungChuyenKhoaLogin);
        val.TemplateKhamCacCoQuanObj.ComponentDynamics.forEach(element => {
          newObj.TemplateKhamCacCoQuanObj.ComponentDynamics.push(Object.assign({}, element));
        });
        templateDichVuKhamSucKhoes.push(newObj);
      });
    }
    this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes = templateDichVuKhamSucKhoes.slice();

    //BVHD-3574
    this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh = this.thongTinKhamTemp.NoiDungKhamBenh;

    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
  }

  saveChangeData(hangDoiId: number = null, ignoreCheckValidPhanLoaiSucKhoeId: boolean = false) {
    if (
        this.authService.hasPermission(
            this.documentType,
            SecurityOperation.Update
        )
    ) {
        this.benhNhanHienTai.validationErrors = null;
        this.ref.detectChanges();

        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
        if(ignoreCheckValidPhanLoaiSucKhoeId)
        {
            // biến IsDuChuyenKhoaKhamSucKhoeChinh chỉ dùng để lưu, hoàn thành khám ở khám đoàn tất cả => vì có kết hợp chức năng kết luận
            // còn lưu, hoàn thành khám từng dv khám KSK thì ko cần check phân loại
            this.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh = false;
        }
        this.showPopupLoadingData();
        this.apiService
            .post<any>("KhamBenh/LuuThongTinKhamBenh", this.benhNhanHienTai)
            .subscribe(
                (resultData) => {
                    this.notificationService.showSuccess(
                        CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"])
                    );

                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

                    this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
                        resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
                    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
                        resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
                    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                        resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
                    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                        resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
                    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                        resultData.YeuCauTiepNhan.KetQuaSinhHieus;

                    if (resultData.YeuCauKhamBenh.IcdchinhId != 0 && resultData.YeuCauKhamBenh.IcdchinhId != null) {
                        this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId =
                            resultData.YeuCauKhamBenh.IcdchinhId;
                    }
                    if (resultData.YeuCauKhamBenh.TenICDChinh != null && resultData.YeuCauKhamBenh.TenICDChinh != "") {
                        this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh =
                            resultData.YeuCauKhamBenh.TenICDChinh;
                    }
                    if (resultData.YeuCauKhamBenh.GhiChuICDChinh != null && resultData.YeuCauKhamBenh.GhiChuICDChinh != "") {
                        this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh =
                            resultData.YeuCauKhamBenh.GhiChuICDChinh;
                    }

                    this.ganThongTinKhamTamThoi();
                    // if(hangDoiId != null)
                    // {
                    //     this.XuLyBatDauKhamBenhNhan(hangDoiId);
                    // }
                    // else
                    // {
                    //     this.closePopupLoadingData();
                    // }
                    this.closePopupLoadingData();
                },
                (err: ApiError) => {
                    if (!this.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                        this.unSelectedTab();
                        this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                        this.notificationService.showError(
                            "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
                        );
                    }
                    this.benhNhanHienTai.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
}

  ganThongTinYeuCauKhamBenhPerevious() {

    //let yeuCauKhamBenhICDKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.slice();

    const yeuCauKhamBenhICDKhacs = [];
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));

    this.yeuCauKhamBenhPrevious = new YeuCauKhamBenhPrevious(this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId, this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh,
      this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh, this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham,
      this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham, this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham,
      this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien,
      this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId,
      this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien, this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien,
      this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien,
      this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId,
      this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong, this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien,
      this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId, this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien,
      this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien, this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong,
      this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS, this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet, this.benhNhanHienTai.YeuCauKhamBenh.GhiChu,
      this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.YeuCauKhamBenhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomGiaDichVuKyThuatBenhVienId,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.MaGiaDichVu,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVu, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhanVienChiDinhId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu,
      this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru,
      this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru, this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri,
      this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa, this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa,
      this.benhNhanHienTai.YeuCauKhamBenh.KetQuaXetNghiemCLS, this.benhNhanHienTai.YeuCauKhamBenh.PhuongPhapTrongDieuTri,
      yeuCauKhamBenhICDKhacs);
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;

    // let days = date_2.getDate() - date_1.getDate() + 1;
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

  getBenhNhanDangKham(phongKhamId: number, hangDoiId: number) {
    this.closePopupLoadingData();
    this.benhNhanHienTai = new BenhVienHangDoi();
    this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
    this.benhNhanHienTai.isShowPanelItemKetLuan = false;

    this.showPopupLoadingData();
    this.apiService
      .get<BenhVienHangDoi>(
        "KhamBenh/GetYeuCauKhamBenhDangKhamTheoPhongKham?phongKhamId=" +
        phongKhamId +
        "&hangDoiId=" +
        hangDoiId + 
        "&laKhamDoan=" +
        this.isKhamDoan +
        "&laKetLuanHangDoiChung=" +
        true
      )
      .subscribe(
        (resultData) => {
          if (resultData !== undefined && resultData != null) {
            //BVHD-3574
            this.LaChuyenKhoaKhamNhieu = resultData.LaDichVuKhamNhieu;

            // dùng cờ này để check trạng thái YCKB chưa hoàn thành 
            resultData.YeuCauKhamBenh.IsKhamBenhDangKham = true;
            //=============================================================

            this.benhNhanHienTai = resultData;

            this.maTiepNhan = this.benhNhanHienTai.YeuCauTiepNhanId;
            // console.log(resultData)
            //this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate = '{"ComponentDynamics":[{"Type":4,"Id":"group","Label":"Mắt","fxFlex":"100%","fxFlexSm":"100%","groupItems":[{"Type":1,"Id":"ThiLucKhongKinh","Label":"Thị lực không kính","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"ThiLucKhongKinhMatTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":2,"Id":"ThiLucKhongKinhMatPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":1,"Id":"NhanAp","Label":"Nhãn áp","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"NhanApMatTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":"mmhg"},{"Type":2,"Id":"NhanApMatPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":"mmhg"},{"Type":1,"Id":"ThiLucCoKinh","Label":"Thị lực có kính","Value":null,"fxFlex":"20%","fxFlexSm":"20%"},{"Type":2,"Id":"ThiLucCoKinhTrai","Label":"Mắt trái","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null},{"Type":2,"Id":"ThiLucCoKinhPhai","Label":"Mắt phải","Value":null,"fxFlex":"40%","fxFlexSm":"40%", "placeholder":null}]},{"Type":3,"Id":"TuanHoan","Label":"Tuần hoàn","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"HoHap","Label":"Hô hấp","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"TieuHoa","Label":"Tiêu hóa","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"ThanTietNieuSinhDuc","Label":"Thận - Tiết niệu - Sinh dục","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"ThanKinh","Label":"Thần kinh","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"CoXuongKhop","Label":"Cơ - Xương - Khớp","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"RangHamMat","Label":"Răng - Hàm - Mặt","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"NoiTietDinhDuong","Label":"Nội tiết - Dinh dưỡng","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"SanPhuKhoa","Label":"Sản phụ khoa","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true},{"Type":3,"Id":"DaLieu","Label":"Da liễu","Value":null,"fxFlex":"100%","fxFlexSm":"100%", "maxlength":4000, "minHeight": 22, "useVoice": true}]}';
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
              this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate
            );

            this.bindDataDynamicComponent();

            // if (this.isKhamDoan) {
            //   this.benhNhanHienTai.YeuCauKhamBenh.IsKhamDoan = true;
            //   this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
            //     element.TemplateKhamCacCoQuanObj = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
            //     this.bindDataDynamicComponent(element.TemplateKhamCacCoQuanObj, element.ThongTinKhamTheoDichVuData);
            //   });
            // }

            this.ganThongTinKhamTamThoi();
            this.ganThongTinYeuCauKhamBenhPerevious();

            // this.unSelectedTab();
            // let phongBenhVienId = this.authService.getPhongLamViecId();
            // let nhanVienId = this.authService.getAccessUser().Id;
            // let yeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
            this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
            //this.isSelectedParentTabKhamBenh = true;

            if (
              this.benhNhanHienTai.YeuCauTiepNhan.NamSinh != null &&
              this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh != null &&
              this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh != null
            ) {
              var ngaySinh = new Date(
                this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh +
                "/" +
                this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh +
                "/" +
                this.benhNhanHienTai.YeuCauTiepNhan.NamSinh +
                "/"
              );
              this.getAge(ngaySinh, new Date());
            }

            this.closePopupLoadingData();
          } else {
            this.benhNhanHienTai = new BenhVienHangDoi();
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

  capNhatDoiTuong() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(KhamBenhThongTinDoiTuongPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: {
          "YeuCauTiepNhanId": this.benhNhanHienTai.YeuCauTiepNhanId
        }
      }).afterClosed().subscribe(result => {
        if(result)
        {
          this.benhNhanHienTai = new BenhVienHangDoi();
          this.getBenhNhanDangKham(this.phongKhamId, this.hangDoiKhamId);
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  luuKetLuan() {
    var self = this;
    self.validationKetLuanErrors = [];
    self.ref.detectChanges();
    self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
    if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
      self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
    }
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.showPopupLoadingData();
      self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
      self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
        (res) => {
          self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
          self.ganThongTinYeuCauKhamBenhPerevious();
          self.closePopupLoadingData();
        },
        (err: ApiError) => {
          self.validationKetLuanErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }

  cancelChangeDataKetLuan() {
    this.validationKetLuanErrors = [];
    this.ref.detectChanges();

    this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId = this.yeuCauKhamBenhPrevious.IcdchinhId;
    this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh = this.yeuCauKhamBenhPrevious.TenICDChinh;
    this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham = this.yeuCauKhamBenhPrevious.CoTaiKham;
    this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham = this.yeuCauKhamBenhPrevious.NgayTaiKham;
    this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham = this.yeuCauKhamBenhPrevious.GhiChuTaiKham;
    this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien = this.yeuCauKhamBenhPrevious.CoNhapVien;
    this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien = this.yeuCauKhamBenhPrevious.CoChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId = this.yeuCauKhamBenhPrevious.KhoaPhongNhapVienId;
    this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien = this.yeuCauKhamBenhPrevious.TenKhoaPhongNhapVien;
    this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien = this.yeuCauKhamBenhPrevious.TinhTrangBenhNhanChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien = this.yeuCauKhamBenhPrevious.LoaiLyDoChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien = this.yeuCauKhamBenhPrevious.ThoiDiemChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien = this.yeuCauKhamBenhPrevious.PhuongTienChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId = this.yeuCauKhamBenhPrevious.NhanVienHoTongChuyenVienId;
    this.benhNhanHienTai.YeuCauKhamBenh.HoTenNhanVienHoTong = this.yeuCauKhamBenhPrevious.HoTenNhanVienHoTong;
    this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien = this.yeuCauKhamBenhPrevious.LyDoNhapVien;
    this.benhNhanHienTai.YeuCauKhamBenh.BenhVienChuyenVienId = this.yeuCauKhamBenhPrevious.BenhVienChuyenVienId;
    this.benhNhanHienTai.YeuCauKhamBenh.TenBenhVienChuyenVien = this.yeuCauKhamBenhPrevious.TenBenhVienChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.LyDoChuyenVien = this.yeuCauKhamBenhPrevious.LyDoChuyenVien;
    this.benhNhanHienTai.YeuCauKhamBenh.CoTuVong = this.yeuCauKhamBenhPrevious.CoTuVong;
    this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS = this.yeuCauKhamBenhPrevious.TomTatKetQuaCLS;
    this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh = this.yeuCauKhamBenhPrevious.GhiChuICDChinh;
    this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet = this.yeuCauKhamBenhPrevious.CachGiaiQuyet;
    this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = this.yeuCauKhamBenhPrevious.GhiChu;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomChiPhi = this.yeuCauKhamBenhPrevious.NhomChiPhi;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.Gia = this.yeuCauKhamBenhPrevious.Gia;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan = this.yeuCauKhamBenhPrevious.SoLan;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DuocHuongBaoHiem = this.yeuCauKhamBenhPrevious.DuocHuongBaoHiem;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThai = this.yeuCauKhamBenhPrevious.TrangThai;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TrangThaiThanhToan = this.yeuCauKhamBenhPrevious.TrangThaiThanhToan;
    this.benhNhanHienTai.YeuCauKhamBenh.NhanVienChiDinhId = this.yeuCauKhamBenhPrevious.NhanVienChiDinhId;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemChiDinh = this.yeuCauKhamBenhPrevious.ThoiDiemChiDinh;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemDangKy = this.yeuCauKhamBenhPrevious.ThoiDiemDangKy;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenNhomDichVu = this.yeuCauKhamBenhPrevious.TenNhomDichVu;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.NhomDichVuBenhVienId = this.yeuCauKhamBenhPrevious.NhomDichVuBenhVienId;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.DieuTriNgoaiTru;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri = this.yeuCauKhamBenhPrevious.ThoiDiemBatDauDieuTri;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.TenDichVuHienThi = this.yeuCauKhamBenhPrevious.TenDichVuHienThi;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId = this.yeuCauKhamBenhPrevious.DichVuKyThuatBenhVienId;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.LoaiDichVuKyThuat = this.yeuCauKhamBenhPrevious.LoaiDichVuKyThuat;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauKhamBenhId = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhId;
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.YeuCauTiepNhanId = this.yeuCauKhamBenhPrevious.YeuCauTiepNhanId;
    this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru = this.yeuCauKhamBenhPrevious.CoDieuTriNgoaiTru;

    //this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = this.yeuCauKhamBenhPrevious.CoKeToa;
    this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa = this.yeuCauKhamBenhPrevious.KhongKeToa;


    const yeuCauKhamBenhICDKhacs = [];
    this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;

    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.slice();

    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
  }

  huy() {
    this.cancelChangeDataKetLuan();
  }

  inPhieuKham() {
    var self = this;
    self.validationKetLuanErrors = [];
    self.ref.detectChanges();
    this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
    this.phieuKhamBenhVo.CoKhamBenh = true;
    this.phieuKhamBenhVo.CoKhamBenhVaoVien = false;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.showPopupLoadingData();
      self.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
        resultData => {
          if (resultData != null) {
            self.closePopupLoadingData();
            self.dialog.open(PhieuKhamBenhVaoVienPopupComponent, {
              disableClose: true,
              width: "1000px",
              data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
            });
          }
        },
        (err: ApiError) => {
          self.validationKetLuanErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          };
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieuKhamVaoVien() {
    var self = this;
    self.validationKetLuanErrors = [];
    self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
    if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
      self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
    }
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
      self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
        (res) => {
          self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
          self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
          self.ganThongTinYeuCauKhamBenhPerevious();
          this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
          this.phieuKhamBenhVo.CoKhamBenhVaoVien = true;
          this.phieuKhamBenhVo.CoKhamBenh = false;
          if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.showPopupLoadingData();
            self.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
              resultData => {
                if (resultData != null) {
                  self.closePopupLoadingData();
                  self.dialog.open(PhieuKhamBenhVaoVienPopupComponent, {
                    disableClose: true,
                    width: "1000px",
                    data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                  });
                }
              },
              (err: ApiError) => {
                self.validationKetLuanErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                };
                self.closePopupLoadingData();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        },
        (err: ApiError) => {
          self.validationKetLuanErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          //console.log(this.validationKetLuanErrors)
          self.closePopupLoadingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inGiayNghiHuongBHXH() {
    this.apiService.post<any>("KhamBenh/KiemTraYeuCauKhamBenh?yeuCauKhamBenhId=" + this.benhNhanHienTai.YeuCauKhamBenhId).subscribe(
      resultData1 => {
        this.dialog.open(NghiHuongBhytConfirmPopupComponent, {
          disableClose: true,
          width: "400px",
          data: { BenhNhanHienTai: this.benhNhanHienTai, DocumentType: this.documentType }
        });
      }, (err: ApiError) => {
        this.validationKetLuanErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      }
    )
  }

  //----------------------------BVHD-3698--------------------------------------------------------
  inGiayNghiDuongThai() {
    let dataYCKB = {
      YeuCauKhamBenhId: this.benhNhanHienTai.YeuCauKhamBenhId,
      TuNgay: null,
      DenNgay: null,
    };
    this.dialog.open(NgayDuongThaiXacNhanPopupComponent, {
      disableClose: false,
      width: '400px',
      data: dataYCKB
    });
  }
  //----------------------------end BVHD-3698----------------------------------------------------

  hoanThanhKham(isNhapVien: boolean = false) {
    if (
      this.authService.hasPermission(
        this.documentType,
        SecurityOperation.Update
      )
    ) {
      var self = this;
      self.validationKetLuanErrors = null;
      self.benhNhanHienTai.validationErrors = null;
      self.ref.detectChanges();
      if (
        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == true ||
        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator == false
      ) {
        self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = null;
      }
      if (self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && self.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
        self.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
      }

      if (!self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham) {
        self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = true;
      }
      ///------------- xử lý lưu thông tin tab khám bệnh
      self.showPopupLoadingData();
      self.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = self.processDynamicComponent();

      self.apiService
        .post<any>("KhamBenh/LuuThongTinKhamBenh", self.benhNhanHienTai)
        .subscribe(
          (resultData) => {
            self.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
            self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = false;

            self.benhNhanHienTai.isShowPanelItemKhamBenh = false;
            self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs =
              resultData.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs;
            self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets =
              resultData.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets;
            self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
              resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
            self.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
              resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
            self.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
              resultData.YeuCauTiepNhan.KetQuaSinhHieus;

            self.ganThongTinKhamTamThoi();

            ///------------- xử lý lưu thông tin tab chẩn đoán ---> cần update lại api
            self.apiService
              .post<any>("KhamBenh/CapNhatThongTinQuayLaiYeuCauKhamTruoc", self.benhNhanHienTai.YeuCauKhamBenh)
              .subscribe(
                (resultData) => {
                  if (isNhapVien) {
                    self.inPhieuKhamHoanThanhKham("tuChon");
                  }
                  else {
                    // cập nhật người bệnh hiện tại thành chờ làm chỉ định/ hoàn thành khám
                    self.ganThongTinYeuCauKhamBenhPerevious();
                    this.dialog
                      .open(ConfirmComponent, {
                        disableClose: false,
                        width: "500px",
                        data: {
                          Title: "Xác nhận",
                          Message:
                            "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                        },
                      })
                      .afterClosed()
                      .subscribe((res) => {
                        if (res == "Yes") {
                          self.inPhieuKhamHoanThanhKham("tuChon");
                        } else {
                          self.apiService
                            .post(
                              "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                              self.benhNhanHienTai.Id +
                              "&hoanThanhKham=true" +
                              "&isKhamBenhDangKham=true"
                            )
                            .subscribe(
                              (resultData) => {

                                self.closePopupLoadingData();
                                self.close(true);
                              },
                              (err: ApiError) => {
                                self.benhNhanHienTai.validationErrors =
                                  err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                  self.notificationService.showError(
                                    err.Message
                                  );
                                }
                                self.closePopupLoadingData();
                              }
                            );
                        }
                      });
                  }
                  // else {
                  //   let dialogRefTiepTheo = self.dialog
                  //     .open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
                  //       disableClose: false,
                  //       width: "600px",
                  //       data: {
                  //         phongKhamHienTaiId: self.phongKhamHienTai.KeyId,
                  //         hangDoiHienTaiId: self.benhNhanHienTai.Id,
                  //         laKhamDoan: self.isKhamDoan,
                  //         searchBenhNhan: self.searchStringHangDoiHienTai
                  //       },
                  //     })
                  //     .afterClosed()
                  //     .subscribe((result) => {
                  //       self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                  //       if (result == "tuChon") {
                  //         // cập nhật người bệnh hiện tại thành chờ làm chỉ định/ hoàn thành khám
                  //         self.ganThongTinYeuCauKhamBenhPerevious();
                  //         this.dialog
                  //           .open(ConfirmComponent, {
                  //             disableClose: false,
                  //             width: "500px",
                  //             data: {
                  //               Title: "Xác nhận",
                  //               Message:
                  //                 "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                  //             },
                  //           })
                  //           .afterClosed()
                  //           .subscribe((res) => {
                  //             if (res == "Yes") {
                  //               self.inPhieuKhamHoanThanhKham(result);
                  //             } else {
                  //               self.apiService
                  //                 .post(
                  //                   "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
                  //                   self.benhNhanHienTai.Id +
                  //                   "&hoanThanhKham=true"
                  //                 )
                  //                 .subscribe(
                  //                   (resultData) => {
                  //                     // clear data người bệnh hiện tại
                  //                     self.benhNhanHienTai = new BenhVienHangDoi();
                  //                     self.refreshHangDoi(
                  //                       self.phongKhamHienTai.KeyId
                  //                     );
                  //                     self.closePopupLoadingData();
                  //                   },
                  //                   (err: ApiError) => {
                  //                     self.benhNhanHienTai.validationErrors =
                  //                       err.ValidationErrors;
                  //                     if (err.Message != "Validation Failed") {
                  //                       self.notificationService.showError(
                  //                         err.Message
                  //                       );
                  //                     }
                  //                     self.closePopupLoadingData();
                  //                   }
                  //                 );
                  //             }
                  //           });
                  //       } else if (
                  //         result == "boQua" ||
                  //         result == null ||
                  //         result == 0
                  //       ) {
                  //         // giữ nguyên màn hình hiện tại
                  //         this.dialog
                  //           .open(ConfirmComponent, {
                  //             disableClose: false,
                  //             width: "500px",
                  //             data: {
                  //               Title: "Xác nhận",
                  //               Message:
                  //                 "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                  //             },
                  //           })
                  //           .afterClosed()
                  //           .subscribe((res) => {
                  //             if (res == "Yes") {
                  //               self.inPhieuKhamHoanThanhKham(result);
                  //             } else {
                  //               self.closePopupLoadingData();
                  //             }
                  //           });
                  //       } else if (result > 0) {
                  //         // result là id hàng đợi tiếp theo
                  //         self.ganThongTinYeuCauKhamBenhPerevious();
                  //         this.dialog
                  //           .open(ConfirmComponent, {
                  //             disableClose: false,
                  //             width: "500px",
                  //             data: {
                  //               Title: "Xác nhận",
                  //               Message:
                  //                 "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                  //             },
                  //           })
                  //           .afterClosed()
                  //           .subscribe((res) => {
                  //             if (res == "Yes") {
                  //               self.inPhieuKhamHoanThanhKham(result);
                  //             } else {
                  //               self.XuLyBatDauKhamBenhNhan(result, true);
                  //             }
                  //           });
                  //       }
                  //     });
                  // }
                },
                (err: ApiError) => {
                  self.validationKetLuanErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingData();
                }
              );
          },
          (err: ApiError) => {
            self.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = false;
            if (!self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
              self.unSelectedTab();
              self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
              self.notificationService.showError(
                "Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh"
              );
            }
            self.benhNhanHienTai.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingData();
          }
        );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieuKhamHoanThanhKham(result: any) {
    this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
    if (this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien == true) {
      this.phieuKhamBenhVo.CoKhamBenhVaoVien = true;
    }
    this.phieuKhamBenhVo.CoKhamBenh = true;
    if (this.phieuKhamBenhVo.CoKhamBenh && this.phieuKhamBenhVo.CoKhamBenhVaoVien) {
      this.phieuKhamBenhVo.CoHeader = true;
    }
    this.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
      resultData => {
        if (resultData != null) {
          this.dialog
            .open(PhieuKhamBenhVaoVienPopupComponent, {
              disableClose: true,
              width: "1000px",
              data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
            })
            .afterClosed()
            .subscribe(() => {
              this.chonBenhNhanTiepTheoKhiIn(result);
            });
        }
      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        };
        this.closePopupLoadingData();
      });
  }

  chonBenhNhanTiepTheoKhiIn(results: any) {
    let self = this;
    //if (results == "tuChon") {
    self.apiService
      .post(
        "KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" +
        self.benhNhanHienTai.Id +
        "&hoanThanhKham=true" +
        "&isKhamBenhDangKham=true"
      )
      .subscribe(
        () => {
          self.closePopupLoadingData();
          self.close(true);
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        }
      );
    // } else if (results == "boQua" || results == null || results == 0) {
    //     self.closePopupLoadingData();
    // } else if (results > 0) {
    //     self.XuLyBatDauKhamBenhNhan(results, true);
    // }
  }

  @HostListener("document:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
        var self = this;

        if (self.benhNhanHienTai.Id != 0) {
            // kiểm tra lưu // ctr + s
            if (event.ctrlKey && event.keyCode == 83) {
                if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        this.saveChangeData();
                    } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
                        event.preventDefault();
                    }
                }
                //KẾT LUẬN
                else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        //this.luuKetLuan();
                    } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
                        event.preventDefault();
                    }
                }

                // // tường trình pt/tt
                // else if (self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt) {
                //     event.preventDefault();
                //     if (this.dialog.openDialogs.length > 0) {
                //         return;
                //     }
                //     if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat) {
                //         self.onSaveTuongTrinh();
                //     }
                // }
            }

            // esc
            if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
                // kiểm tra hủy
                if (
                    event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                ) {
                    event.preventDefault();
                    this.cancelChangeData();
                } else if (
                    event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
                ) {
                    event.preventDefault();
                }
            } else if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan) {
                if (
                    event.keyCode == 27 &&
                    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                ) {
                    event.preventDefault();
                    this.cancelChangeDataKetLuan();
                } else if (
                    event.keyCode == 27 &&
                    !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
                ) {
                    event.preventDefault();
                }
            } 
            // else if (self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt) {
            //     // tường trình pt/tt

            //     // tslint:disable-next-line: deprecation
            //     if (
            //         event.keyCode === 27 &&
            //         this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
            //     ) {
            //         event.preventDefault();
            //         self.onResetTuongTrinh();
            //     } else if (
            //         event.keyCode === 27 &&
            //         !this.benhNhanHienTai.YeuCauKhamBenh.IsChangePhauThuat
            //     ) {
            //         event.preventDefault();
            //     }
            // }

            // ctrl + f1
            let kendoTab = "card";
            if (event.ctrlKey && event.keyCode == 112) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
                    if(!self.isKhamDoan)
                    {
                        self.scrollTo(kendoTab);
                    }
                }, 100);
            }

            // ctrl + f2
            if (event.ctrlKey && event.keyCode == 113) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f3
            if (event.ctrlKey && event.keyCode == 114) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f5
            if (event.ctrlKey && event.keyCode == 116) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + f6
            if (event.ctrlKey && event.keyCode == 117) {
                event.preventDefault();
                setTimeout(function () {
                    self.unSelectedTab();
                    if(!self.isKhamDoan)
                    {
                        self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
                    }
                    else
                    {
                        self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
                    }
                    self.scrollTo(kendoTab);
                }, 100);
            }

            // ctrl + p
            if (event.ctrlKey && event.keyCode == 80) {
                event.preventDefault();
            }

            // ctrl + H

            if (event.ctrlKey && event.keyCode == 72) {
                if (self.lstStatusSelectTabKhambenh.selectedTabChanDoan && self.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru != true){
                    event.preventDefault();
                    if (this.dialog.openDialogs.length > 0) {
                        return;
                    }
                    self.hoanThanhKham();
                }
                // else if(self.isKhamDoan && self.lstStatusSelectTabKhambenh.selectedTabKhamBenh){
                //     event.preventDefault();
                //     if (this.dialog.openDialogs.length > 0) {
                //         return;
                //     }
                //     this.luuVaHoanThanhKhamDoan();
                // }
                else {
                    event.preventDefault();
                }
            }
        } else {
            if (
                event.ctrlKey &&
                (event.keyCode == 83 ||
                    event.keyCode == 27 ||
                    event.keyCode == 112 ||
                    event.keyCode == 113 ||
                    event.keyCode == 114 ||
                    event.keyCode == 115 ||
                    event.keyCode == 116 ||
                    event.keyCode == 117 ||
                    event.keyCode == 39 ||
                    event.keyCode == 80 ||
                    event.keyCode == 72)
            ) {
                event.preventDefault();
            }
        }
    } 

  fullscreen() {
    CommonService.fullScreenDialog(this.isFullscreen, this.Height, this.Width, 137);
    this.isFullscreen = !this.isFullscreen;
  }
}
