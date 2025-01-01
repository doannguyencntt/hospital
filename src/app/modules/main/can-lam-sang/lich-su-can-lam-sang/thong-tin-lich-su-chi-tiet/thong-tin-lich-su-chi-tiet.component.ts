import { Component, OnInit, HostListener, ViewChild, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { BaseService } from "src/app/core/services/base.service";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import {
  ThongTinBenhNhan,
  ListDanhSachCanLamSang,
  ThongTinCanLamSang,
} from "../lich-su-can-lam-sang";
import { HttpParams } from "@angular/common/http";
import { MatDialog } from "@angular/material";
import { ViewImagePdfComponent } from "src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { KetQuaNhomXetNghiem } from "../../danh-sach-ket-qua-can-lam-sang/can-lam-sang";
declare var $: any;
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { ViewImagePdfListClsComponent } from '../view-image-pdf-list-cls/view-image-pdf-list-cls.component';
import { Location } from '@angular/common';
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { AuthService } from "src/app/core/services/auth.service";
import { XemKetQuaCdhaTdcnPopupComponent } from "../xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component";
import { Http, RequestOptions, ResponseContentType } from "@angular/http";
import { saveFile } from "src/app/core/utilities/file-download.helper";
import { KetQuaCdhaTdcnInPhieuPopupComponent } from "../../danh-sach-ket-qua-can-lam-sang/ket-qua-cdha-tdcn-in-phieu-popup/ket-qua-cdha-tdcn-in-phieu-popup.component";
@Component({
  selector: "app-thong-tin-lich-su-chi-tiet",
  templateUrl: "./thong-tin-lich-su-chi-tiet.component.html",
  styleUrls: ["./thong-tin-lich-su-chi-tiet.component.scss"],
})
export class ThongTinLichSuChiTietComponent implements OnInit {
  public thongTinBenhNhan: ThongTinBenhNhan;
  public idYeuCauTiepNhan: number = 0;
  documentType: DocumentType;
  icRedEye = icRedEye;

  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  popupLoadingData: any;

  gridColumns: any;

  @ViewChild("ngayChiDinhTemplate", { static: true }) ngayChiDinhTemplate: TemplateRef<any>;
  @ViewChild("ngayThucHienTemplate", { static: true }) ngayThucHienTemplate: TemplateRef<any>;
  @ViewChild("fileChuKyTemplate", { static: true }) fileChuKyTemplate: TemplateRef<any>;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog,
    private location: Location,
    private notificationService: NotificationService,
    private authService: AuthService,
    private http: Http
  ) {
    this.baseService.controllerName = "CanLamSang";
  }

  ngOnInit() {
    this.documentType = DocumentType.CanLamSang;
    this.thongTinBenhNhan = {} as ThongTinBenhNhan;
    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
      this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
    }

    this.gridColumns = [
      { Field: "DichVu", Title: "Dịch vụ", Width: 160, Sortable: true},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 100, Sortable: true },
      { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 120, Sortable: true },
      { Field: "NgayChiDinh", Title: "Ngày chỉ định", Width: 80, Sortable: true, Template: this.ngayChiDinhTemplate },
      { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 100, Sortable: true },
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 80, Sortable: true, Template: this.ngayThucHienTemplate },
      { Field: "BacSiKetLuan", Title: "BS Kết luận", Width: 100, Sortable: true },
      { Field: "MayTraKetQua", Title: "Máy trả KQ", Width: 60, Sortable: true },
      { Field: "FileChuKy", Title: "File chữ ký", Width: 80, Sortable: true, Template: this.fileChuKyTemplate},
      { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate }
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

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  BackToList() {
    this.location.back();
  }

  getThongTinYeuCauBenhNhan(id) {
    this.showPopupLoadingData();
    this.baseService.getById<any>(id).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.thongTinBenhNhan = resultData;
        if (
          this.thongTinBenhNhan.NamSinh != null &&
          this.thongTinBenhNhan.ThangSinh != null &&
          this.thongTinBenhNhan.NgaySinh != null
        ) {
          var ngaySinh = new Date(
            this.thongTinBenhNhan.ThangSinh +
            "/" +
            this.thongTinBenhNhan.NgaySinh +
            "/" +
            this.thongTinBenhNhan.NamSinh +
            "/"
          );
          this.getAge(ngaySinh, new Date());
        }
      }
      this.closePopupLoadingData();
    }, err => {
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
      this.closePopupLoadingData();
    });
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

  taiFileChuKy(dataItem)
  {
    this.showPopupLoadingData();
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((resp) => {
        const options = new RequestOptions({ responseType: ResponseContentType.Blob });
        this.http.get(resp, options).subscribe(res => {
          saveFile(res.blob(), dataItem.FileChuKy);
        });
        this.closePopupLoadingData();
      }, err => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  xemKetQua(dataItem) {      
    var obj = {
      "Id": dataItem.Id,
      "HostingName": window.location.protocol + "//" + window.location.host
    };
    this.apiService.post<string>("CanLamSang/XuLyInPhieuKetQua", obj).subscribe(res => {
      this.closePopupLoadingData();
        this.dialog.open(KetQuaCdhaTdcnInPhieuPopupComponent, {
          disableClose: false,
          width: '1200px',
          data: { res, yeuCauDVKyThuatId: dataItem.Id, dichVuKyThuatBenhVienId: dataItem.Id },
        }).afterClosed().subscribe(result => {
        });
      }, err => {       
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
    });
  }

  getThongTinCanLamSang(id) {
    // this.dialog.open(LoadingComponent, {
    //   disableClose: true,
    //   width: "200px",
    //   height: "90px",
    //   data: { Title: "Đang tải dữ liệu..." },
    // });
    // this.apiService
    //   .get<any>("CanLamSang/GetThongTinKLichSuCanLamSang/" + id)
    //   .subscribe((resultData) => {
    //     if (resultData !== null && resultData !== undefined) {
    //       this.thongTinCanLamSangs = resultData.DanhSachCanLamSangs;
    //       this.ketQuaNhomXetNghiems = resultData.KetQuaNhomXetNghiems;
    //       resultData.DanhSachCanLamSangs.forEach((element) => {
    //         if (element.LoaiYeuCauKyThuat === 3) {
    //           this.chuanDoanHinhAnh = true;
    //         }
    //         if (element.LoaiYeuCauKyThuat === 4) {
    //           this.thamDoChucNang = true;
    //         }
    //         this.dialog.closeAll();
    //       });
    //       this.dialog.closeAll();
    //     }
    //   });
  }

  xemTaiLieu(dataItem) {
    this.showPopupLoadingData();
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: dataItem.DuongDan,
      },
    });
    this.apiService
      .get<any>("TaiLieuDinhKem/GetTaiLieuUrl", params)
      .subscribe((resp) => {
        this.closePopupLoadingData();
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
      }, err => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.BackToList();
      event.preventDefault();
    }
  }

  ViewImagePDF(dataItem) {
    this.dialog.open(ViewImagePdfListClsComponent, {
      disableClose: true,
      width: '1000px',
      height: 'auto',
      data: { Model: dataItem }
    }).afterClosed()
      .subscribe((result) => {
      });
  }
}
