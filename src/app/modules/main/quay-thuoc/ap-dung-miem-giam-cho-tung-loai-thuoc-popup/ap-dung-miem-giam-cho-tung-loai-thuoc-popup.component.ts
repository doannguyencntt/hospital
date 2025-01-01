import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { NotificationService } from 'src/app/core/services/notification.service';
import { ThongTinDuocPham,DanhSachMienGiamVo, LoaiChietKhau, LoaiMienGiam } from "../quay-thuoc.model";

import * as _ from 'underscore';

@Component({
  selector: 'app-ap-dung-miem-giam-cho-tung-loai-thuoc-popup',
  templateUrl: './ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.html',
  styleUrls: ['./ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component.scss']
})
export class ApDungMiemGiamChoTungLoaiThuocPopupComponent implements OnInit {

  icClose = icClose;
  maxSoTienMiemGiamThem: number = 0;
  maxPhanTramMiemGiamThem: number = 0;
  disablePhanTram: boolean = false;
  disableSoTien: boolean = false;
  disableInputPhanTram: boolean = false;
  disableInputSoTien: boolean = false;

  tenDichVu: string = null;
  tongTienTungDichVu: number = 0;
  tongSoTienDuocMiemGiam: number = 0;
  loaiMienGiam = new LoaiMienGiam;
  loaiChietKhau = new LoaiChietKhau;
  tongTatCaSoTienMg: number = 0;
  danhSachMienGiamVos: DanhSachMienGiamVo[] = [];
  danhSachTam: any;
  public isView: boolean = false;
  validationErrors: any;

  format: string = 'n2';
  public tiLeBanDau: number = 0;
  public soTienBanDau: number = 0;
  public kiemTraThayDoiSoTienTiLe: boolean = false;
  public firstApDungDauTien: boolean = false;

  public danhSachChiPhi: ThongTinDuocPham;
  tamdanhSachChiPhi = {} as ThongTinDuocPham;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<any>,
    private cdRef: ChangeDetectorRef,
  ) {
  }
  ngOnInit() {
 
    this.tamdanhSachChiPhi = JSON.parse(JSON.stringify(this.data.dataItem));
    this.danhSachChiPhi = { ...this.data.dataItem };
    
    this.bindCheckboxMienGiamThem(this.data.dataItem);
    this.danhSachTam = JSON.parse(JSON.stringify(this.data.dataItem));;
    this.tongTienTungDichVu = this.soTienTruocKhiMiemGiam();
    this.tongTienTungDichVu = this.tongTienTungDichVu < 0 ? 0 : this.tongTienTungDichVu;
    if(this.danhSachChiPhi.DanhSachMienGiamVos != null)
    {
      this.tinhSoTienMiemGiam(this.danhSachChiPhi);
    }
    this.tenDichVu = this.data.dataItem.TenDichVu;
  }

  resetLaiTongSoTienMG() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(
      (item) => {
        item.TongTienMiemGiam = 0;
      });
  }

  soTienTruocKhiMiemGiam() {
    let thanhTien = this.data.dataItem.DonGia * this.data.dataItem.SoLuongMua;
    let soTienCongNo = 0;
    if (this.data.dataItem.DanhSachCongNoChoThus != undefined && this.data.dataItem.DanhSachCongNoChoThus.length > 0) {
      this.data.dataItem.DanhSachCongNoChoThus.forEach(item => {
        soTienCongNo = soTienCongNo + item.SoTienCongNoChoThu;
      });
    }
    return thanhTien - soTienCongNo;
  }

  changePhanTram(ev: any, item: any) {
    if (ev != undefined && ev != null) {
      item.TiLe = ev;
    } else {
      item.TiLe = 0;
      item.TongTienMiemGiam = 0;
    }
    this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhi);
  }

  changeTien: boolean = false;
  changeSoTien(ev: any, item: any) {
    if (ev != undefined && ev != null) {
      item.SoTien = ev;
    } else {
      item.SoTien = 0;
      item.TongTienMiemGiam = 0;
    }
    this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhi);
  }

  kiemTraTiLeVaSoTien() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
      if (element.LoaiMienGiam === 3) {
        if (this.firstApDungDauTien && element.TiLe === this.tiLeBanDau && element.SoTien === this.soTienBanDau) {
          this.kiemTraThayDoiSoTienTiLe = true;
        }
      }
    });
  }

  apDungPhanTram(ev: any, item: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    this.disableInputPhanTram = ev;
    this.firstApDungDauTien = true;
    this.kiemTraTiLeVaSoTien();
    this.data.dataItem = { ...this.danhSachChiPhi };  
    if (!ev) {
      item.TiLe = 0;
      item.TongTienMiemGiam = 0;
    }
    this.tinhSoTienMiemGiamTiLe(this.danhSachChiPhi);
  }

  apDungSoTien(ev: any, item: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    this.disableInputSoTien = ev;
    this.firstApDungDauTien = true;
    this.kiemTraTiLeVaSoTien();
    this.data.dataItem = { ...this.danhSachChiPhi };  

    if (!ev) {
      item.SoTien = 0;
      item.TongTienMiemGiam = 0;
    }
    
    this.tinhSoTienMiemGiamSoTienMGT(this.danhSachChiPhi);
  }

  resetPhanTram() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
      if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
        element.TiLe = 0;
        element.TongTienMiemGiam = 0;
      }
    });
  }

  resetSoTien() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
      if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
        element.SoTien = 0;
        element.TongTienMiemGiam = 0;
      }
    });
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  resetMGT() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
      if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1) {
        element.TiLe = 0;
        element.TongTienMiemGiam = 0;
      }
      if (element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2) {
        element.SoTien = 0;
        element.TongTieMiemGiam = 0;
      }
    });
  }

  close() {
    this.tamdanhSachChiPhi.apdungMGTThanhCong = false;
    this.dialogRef.close(this.tamdanhSachChiPhi);
  }

  HuyApDungMGT() {
    this.tamdanhSachChiPhi.apdungMGTThanhCong = false;
    this.dialogRef.close(this.tamdanhSachChiPhi);
  }

  ApDungMGT() {
    this.validationErrors = [];
    this.cdRef.detectChanges();

    this.data.dataItem.DanhSachMienGiamVos.forEach(element => {
      if (this.disableInputPhanTram && element.LoaiMienGiam === 3 && element.LoaiChietKhau == 1 && (element.TiLe === undefined || element.TiLe === null || element.TiLe === 0)) {
        this.validationErrors.push({
          Message: "Vui lòng nhập tỉ lệ miễn giảm.",
          Field: "TiLe",
        });
      }
      if (this.disableInputSoTien && element.LoaiMienGiam === 3 && element.LoaiChietKhau == 2 && (element.SoTien === undefined || element.SoTien === null || element.SoTien === 0)) {
        this.validationErrors.push({
          Message: "Vui lòng nhập số tiền miễn giảm.",
          Field: "SoTien",
        });
      }
    });

    if (this.validationErrors.length > 0) {
      return false;
    }
    else {
      if (this.disableInputPhanTram || this.disableInputSoTien || this.kiemTraThayDoiSoTienTiLe) {
        this.data.dataItem.apdungMGTThanhCong = true;
      }
      else {
        this.data.dataItem.apdungMGTThanhCong = false;
      }
      if (this.tongTatCaSoTienMg > this.tongTienTungDichVu) {
        this.notificationService.showError("Tổng số tiền miễn giảm lớn hơn số tiền miễn giảm thực tế.");
      } else {
        this.dialogRef.close(this.data.dataItem);
      }
    }
  }

  tinhSoTienMiemGiamTiLe(dataItem: ThongTinDuocPham) {
    this.tongTatCaSoTienMg = 0;
    var tiLePhanTramConLai = 100;
    if (this.tongTienTungDichVu !== 0) {
      var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
      var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
      dsMienGiamTheoSoTien.forEach(item => {
        this.tongTatCaSoTienMg += item.TongTienMiemGiam;
      });
      if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
        //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
        dsMienGiamTheoPhanTram = _.sortBy(dsMienGiamTheoPhanTram, 'LoaiMienGiam');
        dsMienGiamTheoPhanTram.forEach(item => {
          //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống          
          item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? (item.TiLe * this.tongTienTungDichVu) / 100 : 0;
          this.tongTatCaSoTienMg += item.TongTienMiemGiam;
          if (item.TiLe >= tiLePhanTramConLai) {
            tiLePhanTramConLai = 0;
          }
          else {
            tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
          }
        });
      }
    }

  }


  tinhSoTienMiemGiamSoTienMGT(dataItem: ThongTinDuocPham) {
    this.tongTatCaSoTienMg = 0;
    var soTienConLai = this.tongTienTungDichVu;
    if (this.tongTienTungDichVu !== 0) {
      var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
      var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
      dsMienGiamTheoPhanTram.forEach(item => {
        this.tongTatCaSoTienMg += item.TongTienMiemGiam;
      });
      if (dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
        //miễm giảm sô tiền nhâp thoải mái
        dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
        dsMienGiamTheoSoTien.forEach(item => {
          if (item.SoTien >= soTienConLai) {
            soTienConLai = 0;
          }
          else {
            soTienConLai = soTienConLai - item.SoTien;
          }
          item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
          this.tongTatCaSoTienMg += item.TongTienMiemGiam;
        });
      }
    }
  }

  tinhSoTienMiemGiam(dataItem: ThongTinDuocPham) {
    this.tongTatCaSoTienMg = 0;
    var tiLePhanTramConLai = 100;
    var soTienConLai = this.tongTienTungDichVu;  
    var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 1 && item.TiLe != 0);
    var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(item => item.LoaiChietKhau == 2 && item.SoTien != 0);
    if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
      //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
      dsMienGiamTheoPhanTram = _.sortBy(dsMienGiamTheoPhanTram, 'LoaiMienGiam');
      dsMienGiamTheoPhanTram.forEach(item => {
        //Nếu tỉ lệ còn lại sau khi đổ từ trên xuống
        if (tiLePhanTramConLai > 0) {
          item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
        }
        else {
          item.TiLe = 0;
        }
        item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? (item.TiLe * this.tongTienTungDichVu) / 100 : 0;
        this.tongTatCaSoTienMg += item.TongTienMiemGiam;
        if (item.TiLe >= tiLePhanTramConLai) {
          tiLePhanTramConLai = 0;
        }
        else {
          tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
        }
      });
    }
    if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
      tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
      soTienConLai = tiLePhanTramConLai != 0 ? ((dataItem.ThanhTien * tiLePhanTramConLai) / 100) : dataItem.ThanhTien;
      //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
      dsMienGiamTheoSoTien = _.sortBy(dsMienGiamTheoSoTien, 'LoaiMienGiam');
      dsMienGiamTheoSoTien.forEach(item => {
        //Nếu số tiền còn lại sau khi đổ từ trên xuống
        if (soTienConLai > 0) {
          item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
        }
        else {
          item.SoTien = 0;
        }
        item.TongTienMiemGiam = this.tongTienTungDichVu !== 0 ? item.SoTien : 0;
        this.tongTatCaSoTienMg += item.TongTienMiemGiam;
        if (item.SoTien >= soTienConLai) {
          soTienConLai = 0;
        }
        else {
          soTienConLai = soTienConLai - item.SoTien;
        }
      });
    }

  }

  //=====================Xử lý miễn giảm thêm bind giá trị miễm giám thêm và checkbox =================================     
  bindCheckboxMienGiamThem(dataItem: ThongTinDuocPham) {
    if(dataItem.DanhSachMienGiamVos != null)
    {
      dataItem.DanhSachMienGiamVos.filter(item => item.LoaiMienGiam === 3).forEach(item => {
        if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoTiLe) {
          if (item.TiLe != null && item.TiLe != 0) {
            this.disablePhanTram = true;
            this.disableInputPhanTram = true;
            this.tiLeBanDau = item.TiLe;
          } else {
            this.disablePhanTram = false;
            this.disableInputPhanTram = false;
            item.TongTienMiemGiam = 0;
          }
        }
        if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoSoTien) {
          if (item.SoTien != null && item.SoTien != 0) {
            this.disableSoTien = true;
            this.disableInputSoTien = true;
            this.soTienBanDau = item.SoTien;
          } else {
            this.disableSoTien = false;
            this.disableInputSoTien = false;
            item.TongTienMiemGiam = 0;
          }
        }
      });
    }
  }
}
