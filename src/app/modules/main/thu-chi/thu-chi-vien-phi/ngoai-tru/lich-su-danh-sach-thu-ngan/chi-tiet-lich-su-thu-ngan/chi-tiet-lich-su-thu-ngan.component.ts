import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseService } from "src/app/core/services/base.service";
import {
  ThongTinBenhNhan,
  ThongTinThanhToan,
} from "../lich-su-danh-sach-thu-ngan";
import { HttpParams } from "@angular/common/http";
import { ApiService } from "src/app/core/services/api.service";
import { ThongTinMienGiamVo } from "../../cho-thu-tien/cho-thu-tien.model";
import { ViewImagePdfComponent } from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import { MatDialog } from "@angular/material";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ViewFileCompoment } from "../view-file/view-file.component";
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: "app-chi-tiet-lich-su-thu-ngan",
  templateUrl: "./chi-tiet-lich-su-thu-ngan.component.html",
  styleUrls: ["./chi-tiet-lich-su-thu-ngan.component.scss"],
})
export class ChiTietLichSuThuNganComponent implements OnInit {
  public idYeuCauTiepNhan: number = 0;
  public soBLHD: number = 0;
  public loaiPhieu: string = "0";
  public kiemTraDanhSachThanhToan: boolean = false;
  public thongTinBenhNhan: ThongTinBenhNhan;
  public kiemTraThongTinBaoHiemTN: boolean = false;
  public coMiemGiam: boolean = false;
  thongTinMienGiamVos: ThongTinMienGiamVo = null;
  thongTinThanhToan: ThongTinThanhToan = null;
  public flagEnableMGThem: boolean = false;
  public checkHiddenSoTienConLai: boolean = false;
  public checkedMGTGiaTri: boolean = false;
  public checkedMGTTiLe: boolean = false;
  public kiemTraPhieuHuy: boolean = true;

  gridBaoHiemTNs: any[] = [];
  listVouchers: number[] = [];
  public loaiVoucher: number = 0;
  dataSourceDanhSachBHTN = {
    data: [],
    total: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private baseService: BaseService,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {
    this.baseService.controllerName = "ThuNgan";
  }

  ngOnInit() {
    this.thongTinMienGiamVos = {} as ThongTinMienGiamVo;
    this.thongTinBenhNhan = {} as ThongTinBenhNhan;
    this.thongTinThanhToan = {} as ThongTinThanhToan;

    this.soBLHD = this.route.snapshot.params.id;
    this.loaiPhieu = this.route.snapshot.params.loaiId;
    this.idYeuCauTiepNhan = this.route.snapshot.params.yeuCauTiepNhanId;

    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });
    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
      this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
      this.getThongTinMienGiam(this.idYeuCauTiepNhan);
      this.getThongTinThanhToan(this.soBLHD, this.loaiPhieu);
    }

    //Thông tin bảo hiểm tư nhân
    this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
    this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
    this.gridBaoHiemTNs = [
      { Field: "TenCongTy", Title: "Công ty", Width: 120, Sortable: false },
      { Field: "MaSoThe", Title: "Số thẻ", Width: 80, Sortable: true },
      { Field: "TuNgayStr", Title: "Từ ngày", Width: 90, Sortable: true },
      { Field: "DenNgayStr", Title: "Đến ngày", Width: 90, Sortable: true },
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 80, Sortable: true, },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: true },
    ];

    if (this.loaiPhieu === "0") {
      this.kiemTraPhieuHuy = false;
    }
  }

  getThongTinYeuCauBenhNhan(id) {
    this.baseService.getById<any>(id).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.thongTinBenhNhan = resultData;
        if (resultData.ThongTinCongTyBaoHiemTuNhans.length > 0) {
          this.dataSourceDanhSachBHTN.data =
            resultData.ThongTinCongTyBaoHiemTuNhans;
          this.kiemTraThongTinBaoHiemTN = true;
        }
      }
    });
  }

  async xemTaiLieu(dataItem) {
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((resp) => {
        if (resp) {
          if (
            dataItem.TenGuid.indexOf(".pdf") != -1 ||
            dataItem.TenGuid.indexOf(".PDF") != -1
          ) {
            this.dialog.open(ViewImagePdfComponent, {
              disableClose: false,
              width: "1000px",
              height: "600px",
              data: {
                Type: "PDF",
                Title: "Xem tài liệu",
                Description: resp.MoTa !== null ? resp.MoTa : "",
                Src: resp,
              },
            });
          } else {
            this.dialog.open(ViewImagePdfComponent, {
              disableClose: false,
              width: "1000px",
              height: "600px",
              data: {
                Type: "Image",
                Title: "Xem ảnh",
                Description: resp.MoTa !== null ? resp.MoTa : "",
                Src: resp,
              },
            });
          }
        }
      });
  }

  BackToList() {
    // this.router.navigate(["/lich-su-thu-ngan"]);
    this.location.back();

  }

  getThongTinMienGiam(id: number) {
    this.apiService
      .get<any>("ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinMienGiamVos = resultData;
          if (
            resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != null ||
            resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != undefined
          ) {
            this.coMiemGiam = true;
          }
          if (
            resultData.ThongTinMienGiamThemVo != null ||
            resultData.ThongTinMienGiamThemVo != undefined
          ) {
            this.flagEnableMGThem = true;
            this.coMiemGiam = true;
            if (resultData.ThongTinMienGiamThemVo.TiLeMienGiam != 0) {
              this.checkHiddenSoTienConLai = true;
              this.checkedMGTTiLe = true;
            } else {
              this.checkedMGTGiaTri = true;
            }
          }
          if (
            resultData.ThongTinMienGiamVoucherVo != null ||
            resultData.ThongTinMienGiamVoucherVo != undefined
          ) {
            this.coMiemGiam = true;
            this.loaiVoucher = resultData.ThongTinMienGiamVoucherVo.LoaiVoucher;
            if (resultData.ThongTinMienGiamVoucherVo.MaVouchers.length > 0) {
              this.listVouchers = [];
              resultData.ThongTinMienGiamVoucherVo.MaVouchers.forEach(
                (element) => {
                  this.listVouchers.push(element.KeyId);
                }
              );
            }
          }
        }
      });
  }

  getThongTinThanhToan(taiKhoanThuId: number, loaiPhieu: string) {
    this.apiService
      .get<any>(
        "ThuNgan/GetThongTinThanhToan/" + taiKhoanThuId + "/" + loaiPhieu
      )
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinThanhToan = resultData;
          this.dialog.closeAll();
        }
      });
  }

  loadingThanhCong(loading: any) {
    this.dialog.closeAll();
  }

  InPhieu() {
    let tk = this.soBLHD;
    let result: any[] = [];
    if (this.thongTinThanhToan.ThuChiTienBenhNhanStr === "Thu theo chi phí") {
      result = ["InPhieuThu"];
    }
    if (this.thongTinThanhToan.ThuChiTienBenhNhanStr === "Thu tạm ứng") {
      result = ["InPhieuThuTamUng"];
    }
    if (this.thongTinThanhToan.ThuChiTienBenhNhanStr === "Trả lại người bệnh") {
      result = ["InPhieuChi"];
    }
    if (result.length > 0) {
      this.dialog
        .open(ViewFileCompoment, {
          disableClose: true,
          width: "1200px",
          data: { tk, result },
        })
        .afterClosed()
        .subscribe((result) => { });
    }
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 80 && event.ctrlKey) {
      this.InPhieu();
      event.preventDefault();
    }
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.BackToList();
      event.preventDefault();
    }
  }
}
