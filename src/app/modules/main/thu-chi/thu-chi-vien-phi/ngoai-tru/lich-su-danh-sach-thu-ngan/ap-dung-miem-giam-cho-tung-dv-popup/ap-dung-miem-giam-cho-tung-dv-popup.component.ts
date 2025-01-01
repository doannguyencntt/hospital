import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { DanhSachChiPhiKhamChuaBenh, DanhSachMienGiamVo, LoaiChietKhau, LoaiMienGiam } from '../../cho-thu-tien/cho-thu-tien.model';
import * as _ from 'underscore';

@Component({
  selector: "ap-dung-miem-giam-cho-tung-dv-popup",
  templateUrl: "./ap-dung-miem-giam-cho-tung-dv-popup.component.html",
  styleUrls: ["./ap-dung-miem-giam-cho-tung-dv-popup.component.scss"],
})
export class MiemGiamChoTungDichVuComponent implements OnInit {
  icClose = icClose;
  format: string = 'n2';
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

  public danhSachChiPhiKhamChuaBenh: DanhSachChiPhiKhamChuaBenh;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<any>,
    private cdRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.danhSachChiPhiKhamChuaBenh = this.data.dataItem;
    this.isView = this.data.isView;
    this.bindCheckboxMienGiamThem(this.data.dataItem);

    this.danhSachTam = this.data.dataItem;
    this.tongTienTungDichVu = this.soTienTruocKhiMiemGiam();
    this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
    this.tenDichVu = this.data.dataItem.TenDichVu;
  }

  resetLaiTongSoTienMG() {
    this.data.dataItem.DanhSachMienGiamVos.forEach(
      (item) => {
        item.TongTienMiemGiam = 0;
      });
  }

  soTienTruocKhiMiemGiam() {
    let thanhTien = this.data.dataItem.DonGia * this.data.dataItem.Soluong;   
    return thanhTien - this.data.dataItem.BHYTThanhToan - this.data.dataItem.TongCongNo;
  }

  soTienMiemGiamVuotMucChoPhep() {
    let tongTienMGT = 0;
    this.danhSachMienGiamVos.forEach(element => {
      tongTienMGT = tongTienMGT + element.TongTienMiemGiam;
    });
    return tongTienMGT;
  }

  soTienSauMiemGiam() {
    let soTienTruocKhiMiemGiam = this.soTienTruocKhiMiemGiam();
    let soTienSauMiemGiam = this.soTienMiemGiamVuotMucChoPhep();
    return soTienTruocKhiMiemGiam - soTienSauMiemGiam;
  }

  tinhSoTienMiemGiam(dataItem: DanhSachChiPhiKhamChuaBenh) {
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
        item.TongTienMiemGiam = Math.round((item.TiLe * this.tongTienTungDichVu) / 100);
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
        item.TongTienMiemGiam = item.SoTien;
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

  XuLyMiemGiamThemChietKhauTheoTiLe(item: any, soTienSauMiemGiam: any) {
    if (item.TiLe)
      item.TongTienMiemGiam = soTienSauMiemGiam * (item.TiLe / 100);
    else
      item.TongTienMiemGiam = 0;
  }

  XuLyMiemGiamThemChietKhauTheoSoTien(item: any) {
    if (this.disableSoTien) {
      this.tongTatCaSoTienMg = this.soTienMiemGiamVuotMucChoPhep();
      if (item.SoTien > 0 && item.SoTien < this.tongTienTungDichVu - this.tongTatCaSoTienMg)
        item.SoTien = item.SoTien;
      else
        item.SoTien = this.tongTienTungDichVu - this.tongTatCaSoTienMg;

      item.TongTienMiemGiam = item.SoTien;
    }
  }

  soTienBenhNhanThanhTo() {
    let tongTienMGT = 0;
    this.danhSachMienGiamVos.forEach(element => {
      tongTienMGT = tongTienMGT + element.TongTienMiemGiam;
    });
    return tongTienMGT;
  }

  apDungPhanTram(ev: any, item: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (ev) {
      this.disableInputPhanTram = !ev;
      this.resetTiLe();
      this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
    } else {
      this.disableInputPhanTram = !ev;
      this.resetTiLe();
      this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
    }

  }

  apDungSoTien(ev: any, item: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (ev) {
      this.disableInputSoTien = !ev;
      this.resetSoTien();
      this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
    } else {
      this.disableInputSoTien = !ev;
      this.resetSoTien();
      this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
    }
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  close() {
    this.dialogRef.close(null);
  }

  HuyApDungMGT() {
    this.dialogRef.close(null);
  }

  changePhanTram(ev: any, item: any) {
    this.resetLaiTongSoTienMG();
    this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
  }

  resetTiLe() {
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

  changeSoTien(ev: any, item: any) {
    this.resetLaiTongSoTienMG();
    this.tinhSoTienMiemGiam(this.danhSachChiPhiKhamChuaBenh);
  }
  
  //=====================Xử lý miễn giảm thêm bind giá trị miễm giám thêm và checkbox =================================     
  bindCheckboxMienGiamThem(dataItem: DanhSachChiPhiKhamChuaBenh) {
    dataItem.DanhSachMienGiamVos.filter(item => item.LoaiMienGiam === 3).forEach(item => {
      if (item.LoaiChietKhau === this.loaiChietKhau.ChietKhauTheoTiLe) {
        if (item.TiLe != null && item.TiLe != 0) {
          this.disablePhanTram = true;
          this.disableInputPhanTram = true;
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
        } else {
          this.disableSoTien = false;
          this.disableInputSoTien = false;
          item.TongTienMiemGiam = 0;
        }
      }
    });
  }
}
