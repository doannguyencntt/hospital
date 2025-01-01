import { Component, OnInit, HostListener, ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import { XMLThongTinBenhNhan, GoiDanhSachThongTinBenhNhanCoBHYT, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh } from "../lich-su-bao-hiem-y-te";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { ApiError } from "src/app/shared/models/api-error.model";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { CommonService } from "src/app/core/utilities/common.helper";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { EnumTypeLoadingData } from "../../danh-sach-bao-hiem-y-te/bao-hiem-y-te";
import icEdit from '@iconify/icons-ic/twotone-edit'
import { ThemMaBenhKhacComponent } from "../../danh-sach-bao-hiem-y-te/tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component";
import { ThemMaBacSiComponent } from "../../danh-sach-bao-hiem-y-te/tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-chi-tiet-lich-su-bao-hiem-y-te",
  templateUrl: "./chi-tiet-lich-su-bao-hiem-y-te.component.html",
  styleUrls: ["./chi-tiet-lich-su-bao-hiem-y-te.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class ChiTietLichSuBaoHiemYTeComponent implements OnInit {
  public readonly: boolean = false;
  public thongtinbenhnhan: XMLThongTinBenhNhan;
  public goiDanhSachThongTinBenhNhanCoBHYT = {} as GoiDanhSachThongTinBenhNhanCoBHYT;
  public idYeuCauTiepNhan: number;
  public validationErrors: any;
  public confrim: any = null;
  public MaNhom: any;
  public MaNhomDVKT: any;
  public LyDoRaVien: any;
  public MaTaiNan: any;
  public KetQuaDieuTri: any;
  public TinhTrangRaVien: any;
  public MaLoaiKCB: any;
  public MaPhuongThucThanhToan: any;
  public VersionGoiBHYT: any;
  public DataGoiTinh: any;
  public loadingPopup: any;
  public icEdit = icEdit;
  comboboxLanGoiBHYT
  constructor(private cdRef: ChangeDetectorRef, private dialog: MatDialog, private route: ActivatedRoute, private apiService: ApiService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.thongtinbenhnhan = new XMLThongTinBenhNhan();
    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
      const versionFirst = 0;
      this.getThongBenhNhanTheoYeuCauTiepNhan(this.idYeuCauTiepNhan, versionFirst);
    }
  }

  loadDataEmun() {
    this.apiService.post<any>("BHYT/GetMaNhom").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.MaNhom = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetMaNhomDVKT").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.MaNhomDVKT = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumMatainan").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.MaTaiNan = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumLyDoVaoVien").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.LyDoRaVien = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumKetQuaDieuTri").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.KetQuaDieuTri = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumTinhTrangRaVien").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.TinhTrangRaVien = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumMaLoaiKCB").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.MaLoaiKCB = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumMaPhuongThucThanhToan").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.MaPhuongThucThanhToan = resultData;
      }
    });

    this.apiService.post<any>("BHYT/GetEnumGioiTinh").subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.DataGoiTinh = resultData;
      }
    });
  }

  getThongBenhNhanTheoYeuCauTiepNhan(id: number, version: number) {
    const self = this;
    self.showPopupLoadingData(EnumTypeLoadingData.View);

    self.goiDanhSachThongTinBenhNhanCoBHYT.YeuCauTiepNhanIds = [];
    self.goiDanhSachThongTinBenhNhanCoBHYT.YeuCauTiepNhanIds.push(id);
    self.goiDanhSachThongTinBenhNhanCoBHYT.Version = version;

    self.apiService.post<XMLThongTinBenhNhan>(`BHYT/GetThongTinChiTietBaoHiemYTe`, self.goiDanhSachThongTinBenhNhanCoBHYT).subscribe((resultData) => {
      if (resultData !== undefined && resultData !== null) {
        self.thongtinbenhnhan = resultData;
        self.loadDataEmun();
        self.closeAllDialogs()
      }
    },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
          self.closeAllDialogs();
        }
      });
  }

  downloadThongTinXMLNguoiBenh() {
    const self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: `Bạn chắc chắn muốn tải thông tin người bệnh <span class="green-text">${self.thongtinbenhnhan.HoTen.toUpperCase().bold()} </span> hay không?`
      },
    }).afterClosed().subscribe((result) => {

      if (result == "Yes") {
        self.showPopupLoadingData(EnumTypeLoadingData.LoadingTaiFile);

        self.kiemTraThongTinNguoiBenh();
        if (self.validationErrors.length > 0) { self.closeAllDialogs(); return true; }

        if (self.thongtinbenhnhan != undefined) {
          self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
        }

        self.thongtinbenhnhan.IsDownLoad = true;
        self.thongtinbenhnhan.SoNgayDieuTri = Math.round(self.thongtinbenhnhan.SoNgayDieuTri);

        self.apiService.post<any>(`BHYT/DownloadTungHoSoGiamDinhNguoiBenh`, self.thongtinbenhnhan).subscribe(
          (resultData) => {
            if (resultData.XMLError != undefined) {
              self.notificationService.showSuccess(`Đã xảy ra lỗi vui lòng liên hệ admin`);
              self.closeAllDialogs();
            } else if (resultData.APIError != undefined) {
              self.notificationService.showSuccess(`Đã xảy ra lỗi API trả về vui lòng liên hệ admin`);
              self.closeAllDialogs();
            } else {
              self.apiService.postExportXML<any>(`BHYT/DownloadHoSoGiamDinhXML?NameFileDown=${resultData.NameFileDown}`).subscribe(res => {
                let dateTimeNow = new Date();
                CommonService.downLoadFile(res, `application/xml`, `TongHop${self.thongtinbenhnhan.MaBenh} ${dateTimeNow.getFullYear()}.xml`);
                self.closeAllDialogs();
              }, err => {
                self.notificationService.showError(err.Message);
                self.closeAllDialogs();
              });
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
              self.closeAllDialogs();
            }
          }
        );
      }
    });
  }

  AddNewThuoc() {
    let viTriNew = new HoSoChiTietThuoc();
    viTriNew.NgayYLenh = new Date();
    this.thongtinbenhnhan.HoSoChiTietThuoc.push(viTriNew);
  }

  AddDichVuKyThuat() {
    let viTriNew = new HoSoChiTietDVKT();
    viTriNew.NgayYLenh = new Date();
    viTriNew.NgayKetQua = new Date();
    this.thongtinbenhnhan.HoSoChiTietDVKT.push(viTriNew);
  }

  AddDichVuKyThuatCanLamSang() {
    let viTriNew = new HoSoCanLamSang();
    viTriNew.NgayKQ = new Date();
    this.thongtinbenhnhan.HoSoCanLamSang.push(viTriNew);
  }

  AddDienBienBenh() {
    let viTriNew = new HoSoChiTietDienBienBenh();
    viTriNew.NgayYLenh = new Date();
    this.thongtinbenhnhan.HoSoChiTietDienBienBenh.push(viTriNew);
  }

  capNhatThongTinHoSoGiamDinh() {
    const self = this;
    if (self.thongtinbenhnhan.Version === null) {
      self.notificationService.showError(`Vui lòng chọn lần gửi để cập nhật`);
      return true;
    }

    self.confrim = self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: `Bạn chắc chắn muốn cập nhật thông tin người bệnh <span class="green-text">${self.thongtinbenhnhan.HoTen.toUpperCase().bold()} </span> trực tiếp lên bộ y tế hay không?`
      },
    }).afterClosed().subscribe((result) => {
      if (result == "Yes") {
        self.showPopupLoadingData(EnumTypeLoadingData.DangGuiHoSo);
        self.kiemTraThongTinNguoiBenh();
        if (self.validationErrors.length > 0) { self.closeAllDialogs(); return true; }

        if (self.thongtinbenhnhan != undefined) {
          self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
        }
        self.thongtinbenhnhan.IsDownLoad = true;

        self.apiService.post<any>(`BHYT/CapNhatDownloadHoSoGiamDinhXMLLichSuBHYT`, self.thongtinbenhnhan).subscribe((version) => {
          self.notificationService.showSuccess(`Cập nhật hồ sơ giám định thành công.`);
          self.getThongBenhNhanTheoYeuCauTiepNhan(self.idYeuCauTiepNhan, version)
          self.closeAllDialogs();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
              self.closeAllDialogs();
            }
          }
        );
      }
    });
  }

  chonLanGuiHoSoGiamDinh(ev: any) {
    if (ev != undefined && ev !== null) {
      this.getThongBenhNhanTheoYeuCauTiepNhan(this.idYeuCauTiepNhan, ev);
    }
    else {
      this.thongtinbenhnhan = new XMLThongTinBenhNhan();
      this.thongtinbenhnhan.YeuCauTiepNhanId = this.idYeuCauTiepNhan;
    }
  }

  DeleteVitri(position: any) {
    this.dialog
      .open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa dòng",
          ]),
        },
      })
      .afterClosed()
      .subscribe((result) => {
        /* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.thongtinbenhnhan.HoSoChiTietThuoc.splice(position, 1);
          this.totalTienNguoiBenhXML1();
        }
      });
  }

  DeleteVitriDVKT(position: any) {
    this.dialog
      .open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa dòng",
          ]),
        },
      })
      .afterClosed()
      .subscribe((result) => {
        /* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.thongtinbenhnhan.HoSoChiTietDVKT.splice(position, 1);
          this.totalTienNguoiBenhXML1();
        }
      });
  }

  DeleteVitrilamsang(position: any) {
    this.dialog
      .open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa dòng",
          ]),
        },
      })
      .afterClosed()
      .subscribe((result) => {
        /* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.thongtinbenhnhan.HoSoCanLamSang.splice(position, 1);
        }
      });
  }

  DeleteVitriDienBien(position: any) {
    this.dialog
      .open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa dòng",
          ]),
        },
      })
      .afterClosed()
      .subscribe((result) => {
        /* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.thongtinbenhnhan.HoSoChiTietDienBienBenh.splice(position, 1);
        }
      });
  }

  goiHoSoGiamDinhNguoiBenh() {
    const self = this;
    self.confrim = self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "400px",
      data: {
        Title: "Xác nhận",
        Message: `Bạn chắc chắn muốn gửi thông tin người bệnh <span class="green-text">${self.thongtinbenhnhan.HoTen.toUpperCase().bold()} </span> trực tiếp lên bộ y tế hay không?`
      },
    }).afterClosed().subscribe((result) => {
      /* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        self.showPopupLoadingData(EnumTypeLoadingData.DangGuiHoSo);
        self.kiemTraThongTinNguoiBenh();
        if (self.validationErrors.length > 0) { self.closeAllDialogs(); return true; }

        if (self.thongtinbenhnhan != undefined) {
          self.thongtinbenhnhan.DataJson = JSON.stringify(self.thongtinbenhnhan);
        }
        self.thongtinbenhnhan.IsDownLoad = true;
        self.apiService.post<any>(`BHYT/GuiChiTietTungHoSoGiamDinhNguoiBenhLichSuBHYT`, self.thongtinbenhnhan).subscribe(
          (resultData) => {
            if (resultData.APIError != undefined && resultData.APIError != null) {
              self.notificationService.showError(resultData.APIError);
              self.closeAllDialogs();
            } else {
              self.notificationService.showSuccess(`Gửi hồ sơ giám định thành công.`);
              self.closeAllDialogs();
              self.backToList();
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
              self.closeAllDialogs();
            }
          }
        );
      }
    });
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 68 && event.ctrlKey) {
      this.downloadThongTinXMLNguoiBenh();
      event.preventDefault();
    }
    if (event.keyCode == 83 && event.ctrlKey) {
      this.capNhatThongTinHoSoGiamDinh();
      event.preventDefault();
    }
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.backToList();
      event.preventDefault();
    }
  }

  kiemTraThongTinNguoiBenh() {
    const self = this;
    self.validationErrors = [];
    self.cdRef.detectChanges();
    if (self.thongtinbenhnhan != undefined && self.thongtinbenhnhan != null) {
      self.ktThongTinBenhNhanXML1();
      self.ktHoSoChiTietThuocXML2();
      self.ktHoSoChiTietDVKTXML3();
      self.ktHoSoCanLamSangXML4();
      self.ktHoSoChiTietDienBienBenhXML5();
    }
  }
  ktThongTinBenhNhanXML1() { //Thông tin người bệnh (XML1)
    const self = this;

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaLienKet)) {
      self.validationErrors.push({ Message: "Vui lòng nhập mã liên kết.", Field: "MaLienKet" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoTen)) {
      self.validationErrors.push({ Message: "Vui lòng nhập họ tên.", Field: "HoTen" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GioiTinh)) {
      self.validationErrors.push({ Message: "Vui lòng chọn giới tính.", Field: "GioiTinh" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.DiaChi)) {
      self.validationErrors.push({ Message: "Vui lòng nhập địa chỉ.", Field: "DiaChi" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaThe)) {
      self.validationErrors.push({ Message: "Vui lòng nhập mã thẻ.", Field: "MaThe" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GiaTriTheTu)) {
      self.validationErrors.push({ Message: "Vui lòng chọn giá trị thẻ từ.", Field: "GiaTriTheTu" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.GiaTriTheDen)) {
      self.validationErrors.push({ Message: "Vui lòng chọn giá trị thẻ đến.", Field: "GiaTriTheDen" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaBenh)) {
      self.validationErrors.push({ Message: "Vui lòng chọn mã bệnh.", Field: "MaBenh" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.TenBenh)) {
      self.validationErrors.push({ Message: "Vui lòng nhập tên bệnh.", Field: "TenBenh" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.LyDoVaoVien)) {
      self.validationErrors.push({ Message: "Vui lòng chọn lý do vào viện.", Field: "LyDoVaoVien" });
    }

    if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.MaLoaiKCB)) {
      self.validationErrors.push({ Message: "Vui lòng nhập mã loại KCB.", Field: "MaLoaiKCB" });
    }

    // if (self.thongtinbenhnhan.MienCungChiTra === undefined || self.thongtinbenhnhan.MienCungChiTra === null) {
    //   self.validationErrors.push({ Message: "Miễm cùng chi trả yêu cầu nhập.", Field: "MienCungChiTra" });
    // }
  }
  ktHoSoChiTietThuocXML2() { //Hồ sơ thuốc (XML2)
    const self = this;
    if (self.thongtinbenhnhan.HoSoChiTietThuoc !== undefined && self.thongtinbenhnhan.HoSoChiTietThuoc !== null && self.thongtinbenhnhan.HoSoChiTietThuoc.length > 0) {

      for (let index = 0; index < self.thongtinbenhnhan.HoSoChiTietThuoc.length; index++) {

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaNhom)) {
          self.validationErrors.push({ Message: "Vui lòng chọn mã nhóm.", Field: "HoSoChiTietThuoc[" + index + "].MaNhom" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].SoLuong)) {
          self.validationErrors.push({ Message: "Vui lòng nhập số lượng.", Field: "HoSoChiTietThuoc[" + index + "].SoLuong" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].DonGia)) {
          self.validationErrors.push({ Message: "Vui lòng nhập đơn giá thuốc.", Field: "HoSoChiTietThuoc[" + index + "].DonGia" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].TyLeThanhToan)) {
          self.validationErrors.push({ Message: "Vui lòng nhập tỷ lệ thanh toán.", Field: "HoSoChiTietThuoc[" + index + "].TyLeThanhToan" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].PhamVi)) {
          self.validationErrors.push({ Message: "Vui lòng nhập phạm vi.", Field: "HoSoChiTietThuoc[" + index + "].PhamVi" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MucHuong)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mức hưởng.", Field: "HoSoChiTietThuoc[" + index + "].MucHuong" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaPhuongThucThanhToan)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã phương thức thanh toán.", Field: "HoSoChiTietThuoc[" + index + "].MaPhuongThucThanhToan" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].TenThuoc)) {
          self.validationErrors.push({ Message: "Vui lòng nhập tên thuốc.", Field: "HoSoChiTietThuoc[" + index + "].TenThuoc" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].DonViTinh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập đơn vị tính.", Field: "HoSoChiTietThuoc[" + index + "].DonViTinh" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].NgayYLenh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietThuoc[" + index + "].NgayYLenh" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaBenh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã bệnh.", Field: "HoSoChiTietThuoc[" + index + "].MaBenh" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaThuoc)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã thuốc.", Field: "HoSoChiTietThuoc[" + index + "].MaThuoc" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaKhoa)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã khoa.", Field: "HoSoChiTietThuoc[" + index + "].MaKhoa" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietThuoc[index].MaBacSi)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã bác sĩ.", Field: "HoSoChiTietThuoc[" + index + "].MaBacSi" });
        }
      }

    }
  }

  ktHoSoChiTietDVKTXML3() { //Dịch vụ kỹ thuật (XML3)
    const self = this;
    if (self.thongtinbenhnhan.HoSoChiTietDVKT != undefined && self.thongtinbenhnhan.HoSoChiTietDVKT != null && self.thongtinbenhnhan.HoSoChiTietDVKT.length > 0) {
      for (let index = 0; index < self.thongtinbenhnhan.HoSoChiTietDVKT.length; index++) {

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaNhom)) {
          self.validationErrors.push({ Message: "Vui lòng chọn mã nhóm.", Field: "HoSoChiTietDVKT[" + index + "].MaNhom" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].SoLuong)) {
          self.validationErrors.push({ Message: "Vui lòng nhập số lượng.", Field: "HoSoChiTietDVKT[" + index + "].SoLuong" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].DonGia)) {
          self.validationErrors.push({ Message: "Vui lòng nhập đơn giá.", Field: "HoSoChiTietDVKT[" + index + "].DonGia" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].TyLeThanhToan)) {
          self.validationErrors.push({ Message: "Vui lòng nhập tỷ lệ thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].TyLeThanhToan" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].PhamVi)) {
          self.validationErrors.push({ Message: "Vui lòng nhập phạm vi.", Field: "HoSoChiTietDVKT[" + index + "].PhamVi" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MucHuong)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mức hưởng.", Field: "HoSoChiTietDVKT[" + index + "].MucHuong" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaPhuongThucThanhToan)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã phương thức thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].MaPhuongThucThanhToan" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].NgayYLenh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietDVKT[" + index + "].NgayYLenh" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaKhoa)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã khoa.", Field: "HoSoChiTietDVKT[" + index + "].MaKhoa" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaBenh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã bệnh.", Field: "HoSoChiTietDVKT[" + index + "].MaBenh" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].TienBaoHiemThanhToan)) {
          self.validationErrors.push({ Message: "Vui lòng nhập tiền bảo hiểm thanh toán.", Field: "HoSoChiTietDVKT[" + index + "].TienBaoHiemThanhToan" });
        }

        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDVKT[index].MaBacSi)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã bác sĩ.", Field: "HoSoChiTietDVKT[" + index + "].MaBacSi" });
        }

      }
    }
  }

  ktHoSoCanLamSangXML4() { //Dịch vụ kỹ thuật cận lâm sàng (XML4)
    const self = this;
    if (self.thongtinbenhnhan.HoSoCanLamSang != undefined && self.thongtinbenhnhan.HoSoCanLamSang != null && self.thongtinbenhnhan.HoSoCanLamSang.length > 0) {
      for (let index = 0; index < self.thongtinbenhnhan.HoSoCanLamSang.length; index++) {
        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoCanLamSang[index].MaDichVu)) {
          self.validationErrors.push({ Message: "Vui lòng nhập mã dịch vụ kỹ thuật CLS.", Field: "HoSoCanLamSang[" + index + "].MaDichVu" });
        }
        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoCanLamSang[index].NgayKQ)) {
          self.validationErrors.push({ Message: "Vui lòng nhập ngày có kết quả.", Field: "HoSoCanLamSang[" + index + "].NgayKQ" });
        }
      }
    }
  }

  ktHoSoChiTietDienBienBenhXML5() { //Hồ sơ chi tiết diễn biến bệnh (XML5)
    const self = this;
    if (self.thongtinbenhnhan.HoSoChiTietDienBienBenh != undefined && self.thongtinbenhnhan.HoSoChiTietDienBienBenh != null && self.thongtinbenhnhan.HoSoChiTietDienBienBenh.length > 0) {
      for (let index = 0; index < self.thongtinbenhnhan.HoSoChiTietDienBienBenh.length; index++) {
        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDienBienBenh[index].NgayYLenh)) {
          self.validationErrors.push({ Message: "Vui lòng nhập ngày y lệnh.", Field: "HoSoChiTietDienBienBenh[" + index + "].NgayYLenh" });
        }
        if (self.isUndefinedOrNullOrEmpty(self.thongtinbenhnhan.HoSoChiTietDienBienBenh[index].DienBien)) {
          self.validationErrors.push({ Message: "Vui lòng nhập diễn biến bệnh trong lần khám.", Field: "HoSoChiTietDienBienBenh[" + index + "].DienBien" });
        }
      }
    }
  }

  isUndefinedOrNullOrEmpty(value) {
    return value == undefined || value == null || value === "";
  }

  // Begin Công thức Hồ sơ thuốc (XML2)
  ChangeSoLuongHoSoThuoc(ev: any, item: any) {
    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
    this.congThucTienBaoHiemThanhToanXML2(item);
    this.totalTienNguoiBenhXML1();
  }

  ChangeDonGiaHoSoThuoc(ev: any, item: any) {
    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
    this.congThucTienBaoHiemThanhToanXML2(item);
    this.totalTienNguoiBenhXML1();
  }

  ChangeTyLeThanhToanHoSoThuoc(ev: any, item: any) {
    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
    this.congThucTienBaoHiemThanhToanXML2(item);
    this.totalTienNguoiBenhXML1();
  }

  congThucTienBaoHiemThanhToanXML2(item: any) {
    item.TienBaoHiemThanhToan =
      ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) >= 0 ?
        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
    this.congThucTienBenhNhanCungChiTraXML2(item);
    this.totalTienNguoiBenhXML1();
  }

  congThucTienBenhNhanCungChiTraXML2(item: any) {
    item.TienBenhNhanCungChiTra =
      (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
  }

  // Begin Công thức Dịch vụ kỹ thuật (XML3)
  modelChangeMaNhomDVKT($event) {
    this.totalTienNguoiBenhXML1();
  }

  ChangeSoLuongDichVuKyThuat(ev: any, item: any) {
    item.ThanhTien = item.DonGia * ev * item.TyLeThanhToan / 100;
    this.congThucTienBaoHiemThanhToanXML3(item);
    this.totalTienNguoiBenhXML1();
  }

  ChangeDonGiaDichVuKyThuat(ev: any, item: any) {
    item.ThanhTien = item.SoLuong * ev * item.TyLeThanhToan / 100;
    this.congThucTienBaoHiemThanhToanXML3(item);
    this.totalTienNguoiBenhXML1();
  }

  ChangeTyLeThanhToanDichVuKyThuat(ev: any, item: any) {
    item.ThanhTien = item.SoLuong * item.DonGia * ev / 100;
    this.congThucTienBaoHiemThanhToanXML3(item);
    this.totalTienNguoiBenhXML1();
  }

  congThucTienBaoHiemThanhToanXML3(item: any) {
    item.TienBaoHiemThanhToan =
      ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != undefined &&
        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) != null &&
        (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
        ((item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac) * item.MucHuong / 100) : 0;
    this.congThucTienBenhNhanCungChiTraXML3(item);
    this.totalTienNguoiBenhXML1();
  }

  congThucTienBenhNhanCungChiTraXML3(item: any) {
    item.TienBenhNhanCungChiTra = (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != undefined &&
      (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) != null &&
      (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) >= 0 ?
      (item.ThanhTien - item.TienBenhNhanTuTra - item.TienNguonKhac - item.TienBaoHiemThanhToan) : 0;
  }

  /* Công thức Thông tin người bệnh (XML1) */
  totalTienNguoiBenhXML1() {
    this.thongtinbenhnhan.TienThuoc = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.ThanhTien, 0);

    this.thongtinbenhnhan.TienVatTuYTe = this.thongtinbenhnhan.HoSoChiTietDVKT.filter(x => x.MaNhom === 10 || x.MaNhom === 11).reduce((sum, item) => sum + item.ThanhTien, 0);

    this.thongtinbenhnhan.TienTongChi = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.ThanhTien, 0)
      + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce((sum, item) => sum + item.ThanhTien, 0);

    this.thongtinbenhnhan.TienBenhNhanCungChiTra = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.TienBenhNhanCungChiTra, 0)
      + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce((sum, item) => sum + item.TienBenhNhanCungChiTra, 0);

    this.thongtinbenhnhan.TienBaoHiemThanhToan = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.TienBaoHiemThanhToan, 0)
      + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce((sum, item) => sum + item.TienBaoHiemThanhToan, 0);

    this.thongtinbenhnhan.TienNguonKhac = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.TienNguonKhac, 0)
      + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce((sum, item) => sum + item.TienNguonKhac, 0);

    this.thongtinbenhnhan.TienNgoaiDinhSuat = this.thongtinbenhnhan.HoSoChiTietThuoc.reduce((sum, item) => sum + item.TienNgoaiDinhSuat, 0)
      + this.thongtinbenhnhan.HoSoChiTietDVKT.reduce((sum, item) => sum + item.TienNgoaiDinhSuat, 0);
  }
  /* Công thức Thông tin người bệnh (XML1) */

  showPopupTimMaBenhKhac() {
    this.dialog.open(ThemMaBenhKhacComponent, {
      disableClose: true,
      width: '800px',
      data: { layMaBenhOrTenBenh: true }
    }).afterClosed().subscribe(result => {
      if (result !== undefined && result != null) {
        this.thongtinbenhnhan.MaBenhKhac = result;
        this.notificationService.showSuccess(`Thêm mã bệnh khác thành công`);
      }
    });
  }
  showPopupTimTenBenhKhac() {
    this.dialog.open(ThemMaBenhKhacComponent, {
      disableClose: true,
      width: '800px',
      data: { layMaBenhOrTenBenh: false }
    }).afterClosed().subscribe(result => {
      if (result !== undefined && result != null) {
        this.thongtinbenhnhan.TenBenh = result;
        this.notificationService.showSuccess(`Thêm tên bệnh thành công`);
      }
    });
  }

  clickShowPopupTimMaBS() {
    this.dialog.open(ThemMaBacSiComponent, {
      disableClose: true,
      width: '800px',
      data: {}
    }).afterClosed().subscribe(lstMaChungChiHanhNgheBacSi => {
      if (lstMaChungChiHanhNgheBacSi !== undefined && lstMaChungChiHanhNgheBacSi != null) {
        let showSuccess = new Array<any>();

        if (this.setFieldBacSiForXML2(lstMaChungChiHanhNgheBacSi) !== "")
          showSuccess.push(this.setFieldBacSiForXML2(lstMaChungChiHanhNgheBacSi));

        if (this.setFieldBacSiForXML3(lstMaChungChiHanhNgheBacSi) !== "")
          showSuccess.push(this.setFieldBacSiForXML3(lstMaChungChiHanhNgheBacSi));

        this.notificationService.showSuccess(`Mã bác sĩ thêm cho ${showSuccess.join(",")} thành công`);
      }
    });
  }

  setFieldBacSiForXML2(MaBacSi: string): string {
    let infoXML2 = "";
    if (this.thongtinbenhnhan.HoSoChiTietThuoc != undefined &&
      this.thongtinbenhnhan.HoSoChiTietThuoc != null &&
      this.thongtinbenhnhan.HoSoChiTietThuoc.length > 0) {
      infoXML2 = ("xml2").toUpperCase();
      this.thongtinbenhnhan.HoSoChiTietThuoc.forEach(item => {
        item.MaBacSi = MaBacSi;
      });
    }
    return infoXML2;
  }

  setFieldBacSiForXML3(MaBacSi: string): string {
    let infoXML3 = "";
    if (this.thongtinbenhnhan.HoSoChiTietDVKT != undefined &&
      this.thongtinbenhnhan.HoSoChiTietDVKT != null &&
      this.thongtinbenhnhan.HoSoChiTietDVKT.length > 0) {
      infoXML3 = ("xml3").toUpperCase();
      this.thongtinbenhnhan.HoSoChiTietDVKT.forEach(item => {
        item.MaBacSi = MaBacSi;
      });
    }
    return infoXML3;
  }

  backToList() {
    this.router.navigate(["/lich-su-bao-hiem-y-te"], { queryParamsHandling: "preserve" });
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = "";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.DangGuiHoSo:
        mess = "Đang gửi hồ sơ giám định..."; break;
      case EnumTypeLoadingData.LoadingExcel:
        mess = "Đang tải excel..."; break;
      case EnumTypeLoadingData.LoadingTaiFile:
        mess = "Đang tải hồ sơ giám định..."; break;
      default: mess = "Đang tải dữ liệu...";
    }

    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: mess }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
