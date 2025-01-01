import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BenhVienHangDoi, ListStatusSelectTabKhamBenh, PhieuKhamBenhVo, ThongTinKhamPrevious, YeuCauKhamBenhPrevious } from '../../kham-benh.model';
import { LanKhamHienTaiChuyenKhamComponent } from '../../kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chuyen-kham/lan-kham-hien-tai-chuyen-kham.component';
import { NghiHuongBhytConfirmPopupComponent } from '../../kham-benh/lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component';
import { PhieuKhamBenhVaoVienPopupComponent } from '../../kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component';

declare var jQuery: any;
@Component({
  selector: 'app-kham-benh-dang-kham-theo-phong-kham-chi-tiet',
  templateUrl: './kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.html',
  styleUrls: ['./kham-benh-dang-kham-theo-phong-kham-chi-tiet.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
})
export class KhamBenhDangKhamTheoPhongKhamChiTietComponent implements OnInit {

  tabActive: string = "card0";
  documentType: DocumentType = DocumentType.KhamBenhDangKham;
  baseRoute: string = "/kham-benh-dang-kham";

  benhNhanHienTai: BenhVienHangDoi;
  phongBenhVienId: number = 0;
  popupLoadingData: any;
  thongTinKhamTemp: ThongTinKhamPrevious;
  yeuCauKhamBenhPrevious: YeuCauKhamBenhPrevious;
  validationKetLuanErrors: any;
  phieuKhamBenhVo: PhieuKhamBenhVo = new PhieuKhamBenhVo();

  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";

  lstStatusSelectTabKhambenh: ListStatusSelectTabKhamBenh = new ListStatusSelectTabKhamBenh();
  constructor(private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.benhNhanHienTai = new BenhVienHangDoi();
    this.phongBenhVienId = this.benhNhanHienTai.PhongBenhVienId;
    // this.route.queryParams.subscribe(result => {
    //     this.trangThaiDanhSach = v;
    // });

    let id = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getBenhNhanDangKham(id);
    }
  }

  showPopupLoadingData() {
    console.log('this.popupLoadingData.openDialogs', this.popupLoadingData);
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

  processDynamicComponent() {
    let dataKhamTheoTemplate: any;
    let lstDataKhamTheoTemplate: any[] = [];

    if (
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj !==
      null
    ) {
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
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

  bindDataDynamicComponent() {
    let strData = this.benhNhanHienTai.YeuCauKhamBenh
      .ThongTinKhamTheoDichVuData;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (
        this.benhNhanHienTai.YeuCauKhamBenh
          .ThongTinKhamTheoDichVuTemplateObj !== null
      ) {
        this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
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

  ganThongTinKhamTamThoi() {
    let yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
    let yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();

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

    this.thongTinKhamTemp = new ThongTinKhamPrevious(
      this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan,
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

      //BVHD-3574
      null,
      null,
      this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh
    );
  }

  ganThongTinYeuCauKhamBenhPerevious() {
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

    this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa = this.yeuCauKhamBenhPrevious.KhongKeToa;


    const yeuCauKhamBenhICDKhacs = [];
    this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;

    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = this.yeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs.slice();

    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
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

  unSelectedTab() {
    this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
    this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
    this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
    this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
    this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
    this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
  }

  scrollTo(element) {
    jQuery(".sidenav-content").animate({
      scrollTop: jQuery("#" + element).position().top + 60,
    });
    this.tabActive = element;
  }

  chuyenDen(element: any, event: any) {
    var self = this;
    setTimeout(function () {
      self.scrollTo(element);
    }, 100);
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
    if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
      self.validationKetLuanErrors = [];
    }

    if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
      self.validationKetLuanErrors = [];
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  getBenhNhanDangKham(hangDoiId: number) {
    this.closePopupLoadingData();
    this.benhNhanHienTai = new BenhVienHangDoi();
    this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
    this.benhNhanHienTai.isShowPanelItemKetLuan = false;

    this.showPopupLoadingData();
    this.apiService
      .get<BenhVienHangDoi>("KhamBenh/GetYeuCauKhamBenhDangKham?hangDoiId=" + hangDoiId)
      .subscribe(
        (resultData) => {
          if (resultData !== undefined && resultData != null) {
            this.benhNhanHienTai = resultData;
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
              this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate
            );
            this.bindDataDynamicComponent();

            this.ganThongTinKhamTamThoi();
            this.ganThongTinYeuCauKhamBenhPerevious();

            this.unSelectedTab();
            let phongBenhVienId = this.authService.getPhongLamViecId();
            let nhanVienId = this.authService.getAccessUser().Id;
            let yeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
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

            this.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;

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

  cancelChangeData() {
    this.benhNhanHienTai.validationErrors = null;
    this.ref.detectChanges();

    this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
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

    //BVHD-3574
    this.benhNhanHienTai.YeuCauKhamBenh.NoiDungKhamBenh = this.thongTinKhamTemp.NoiDungKhamBenh;

    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
  }

  saveChangeData() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.benhNhanHienTai.validationErrors = null;
      this.ref.detectChanges();

      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
      this.loadingPage();
      this.apiService
        .post<any>("KhamBenh/LuuThongTinKhamBenh", this.benhNhanHienTai) //LuuThongTinKhamBenhDangKham
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
            this.closePopupLoadingData();
          },
          (err: ApiError) => {
            if (!this.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
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

  luuKetLuan() {
    var self = this;
    self.validationKetLuanErrors = [];
    self.ref.detectChanges();
    if (this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien == true) {
      self.hoanThanhKham(true);
    } else {
      self.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
      if (this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa != true && this.benhNhanHienTai.YeuCauKhamBenh.KhongKeToa != true) {
        this.benhNhanHienTai.YeuCauKhamBenh.CoKeToa = null;
      }
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
        self.loadingPage();
        if (self.documentType == DocumentType.KhamBenhDangKham) {
          self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
        }
        self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
          () => {
            //console.log("resultKetLuan: ", resultKetLuan)
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
            //console.log(this.validationKetLuanErrors)
            self.closePopupLoadingData();
          });
      } else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }

  }

  huy() {
    this.cancelChangeDataKetLuan();
  }

  xuLyChuyenDichVuKham() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog
        .open(LanKhamHienTaiChuyenKhamComponent, {
          disableClose: false,
          width: "800px",
          data: {
            "YeuCauTiepNhanId": self.benhNhanHienTai.YeuCauTiepNhanId,
            "YeuCauKhamBenhId": self.benhNhanHienTai.YeuCauKhamBenhId,
            "IsKhamBenhDangKham": true
          }
        })
        .afterClosed()
        .subscribe((result) => {
          if (result !== undefined && result !== null) // xử lý chuyển dịch vụ khám
          {
            self.loadingPage();
            result.PhongBenhVienHangDoiTruocId = self.benhNhanHienTai.Id;
            result.IsKhamBenhDangKham = true;
            self.apiService.post("KhamBenh/XuLyChuyenDichVuKham", result) //XuLyChuyenDichVuKhamDangKham
              .subscribe(resultData => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chuyển khám "]));
                self.closePopupLoadingData();
                self.quayLaiDanhSach();
              },
                (err: ApiError) => {
                  self.closePopupLoadingData();
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieuKham() {
    var self = this;
        self.validationKetLuanErrors = [];
        self.ref.detectChanges();
        this.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
        this.phieuKhamBenhVo.CoKhamBenh = true;
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

  inGiayNghiHuongBHXH() {
    // this.apiService.post<any>("KhamBenh/KiemTraYeuCauKhamBenh?yeuCauKhamBenhId=" + this.benhNhanHienTai.YeuCauKhamBenhId).subscribe(
    //   resultData1 => {
    this.dialog.open(NghiHuongBhytConfirmPopupComponent, {
      disableClose: true,
      width: "400px",
      data: { BenhNhanHienTai: this.benhNhanHienTai, DocumentType: this.documentType }
    });
    // }, (err: ApiError) => {
    //   this.validationKetLuanErrors = err.ValidationErrors;
    //   if (err.Message != "Validation Failed") {
    //     this.notificationService.showError(err.Message);
    //   }
    // }
    // )
  }

  quayLaiDanhSach() {
    this.router.navigate([this.baseRoute + "/danh-sach-dang-kham/" + this.benhNhanHienTai.PhongBenhVienId], { queryParams: { holdQuery: true } });
  }

  hoanThanhKham(isNhapVien: boolean = false) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
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
              .post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh)
              .subscribe(
                (res) => {
                  self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                  self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                  self.ganThongTinYeuCauKhamBenhPerevious();

                  self.apiService
                    .post("KhamBenh/XuLyHoanThanhCongDoanKhamHienTaiCuaBenhNhan?hangDoiHienTaiId=" + self.benhNhanHienTai.Id + "&hoanThanhKham=true&isKhamBenhDangKham=true")
                    .subscribe(
                      (resultData) => {
                        self.dialog.open(ConfirmComponent, {
                          disableClose: false,
                          width: "500px",
                          data: {
                            Title: "Xác nhận",
                            Message: "Bạn có muốn in phiếu khám cho người bệnh này không ?",
                          },
                        })
                          .afterClosed()
                          .subscribe((res) => {
                            if (res == "Yes") {
                              self.phieuKhamBenhVo.YeuCauKhamBenhId = this.benhNhanHienTai.YeuCauKhamBenhId;
                              self.phieuKhamBenhVo.CoKhamBenh = true;
                              self.apiService.post<any>("KhamBenh/InPhieuKhamBenh", this.phieuKhamBenhVo).subscribe(
                                resultData => {
                                  if (resultData != null) {
                                    self.dialog
                                      .open(PhieuKhamBenhVaoVienPopupComponent, {
                                        disableClose: true,
                                        width: "1000px",
                                        data: { html: resultData, Title: "PHIẾU KHÁM BỆNH" },
                                      })
                                      .afterClosed()
                                      .subscribe(() => {
                                        self.closePopupLoadingData();
                                        self.quayLaiDanhSach();
                                      });
                                  }
                                  else {
                                    self.closePopupLoadingData();
                                  }
                                },
                                (err: ApiError) => {
                                  if (err.Message != "Validation Failed") {
                                    self.notificationService.showError(err.Message);
                                  };
                                  self.closePopupLoadingData();
                                });
                            } else {
                              self.closePopupLoadingData();
                              self.quayLaiDanhSach();
                            }
                          });
                      },
                      (err: ApiError) => {
                        self.validationKetLuanErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                          self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                      });
                },
                (err: ApiError) => {
                  self.validationKetLuanErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                  self.closePopupLoadingData();
                });
          },
          (err: ApiError) => {
            if (!self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
              self.notificationService.showError("Yêu cầu nhập đầy đủ các trường bắt buộc trong tab khám bệnh");
            }
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingData();
          });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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
            this.luuKetLuan();
          } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan) {
            event.preventDefault();
          }
        }
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

      // ctrl + f1
      let kendoTab = "card";
      if (event.ctrlKey && event.keyCode == 112) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
          self.scrollTo(kendoTab);
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
          self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + p
      if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault();
      }

      // ctrl + H

      // if (event.ctrlKey && event.keyCode == 72) {
      //     if (
      //         self.lstStatusSelectTabKhambenh.selectedTabChanDoan &&
      //         self.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru != true
      //     ) {
      //         event.preventDefault();
      //         if (this.dialog.openDialogs.length > 0) {
      //             return;
      //         }
      //         self.hoanThanhKham();
      //     } else {
      //         event.preventDefault();
      //     }
      // }
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

  //=================== Cập nhật thêm chức năng quay lại chưa khám ========================
  xuLyQuayLaiChuaKham() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn quay lại chưa khám cho người bệnh này không?' }
      }).afterClosed().subscribe(result => {
        if (result == 'Yes') {
          this.showPopupLoadingData();
          this.apiService.put("KhamBenh/XuLyQuayLaiChuaKham?hangDoiId=" + this.benhNhanHienTai.Id)
            .subscribe(
              () => {
                this.closePopupLoadingData();
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Quay lại chưa khám"]));
                this.quayLaiDanhSach();
              },
              (err: ApiError) => {
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
              }
            );
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  //=============================================================================================
}
