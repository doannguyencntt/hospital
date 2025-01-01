import { Component, OnInit, HostListener, ChangeDetectorRef, ViewRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/core/services/api.service";
import { BaseService } from "src/app/core/services/base.service";
import {
  ThongTinBenhNhan,
  ThongTinCanLamSang,
  ListDanhSachCanLamSang,
  KetQuaNhomXetNghiem, GiayKetQuaLamSang, CanLamSang
} from "../can-lam-sang";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { ApiError } from "src/app/shared/models/api-error.model";
import { NotificationService } from "src/app/core/services/notification.service";
import { MatDialog } from "@angular/material";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
import { CommonService } from "src/app/core/utilities/common.helper";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icInfo from '@iconify/icons-ic/twotone-info';
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import icDetele from '@iconify/icons-ic/twotone-delete-forever';
import icClear from '@iconify/icons-ic/twotone-clear';
import { HttpParams } from '@angular/common/http';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { FileState } from '@progress/kendo-angular-upload';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { TimKiemDSBaoHiemYTe } from '../../../bao-hiem-y-te/danh-sach-bao-hiem-y-te/bao-hiem-y-te';

@Component({
  selector: "app-thong-tin-chi-tiet",
  templateUrl: "./thong-tin-chi-tiet.component.html",
  styleUrls: ["./thong-tin-chi-tiet.component.scss"],
})
export class ThongTinChiTietComponent implements OnInit {
  public thongTinBenhNhan: ThongTinBenhNhan;
  public listDanhSachCanLamSang: ListDanhSachCanLamSang;
  public thongTinCanLamSangs: ThongTinCanLamSang[] = [];
  public thongTinCanLamSang = {} as ThongTinCanLamSang;
  public ketQuaNhomXetNghiems: KetQuaNhomXetNghiem[] = [];
  public idYeuCauTiepNhan: number = 0;
  tabIndex: number = 0;
  validationErrors: any[] = [];
  currentId: any = 0;
  tenNhanVienThucHien: string = null;
  public xetNghiem: boolean = false;
  public chuanDoanHinhAnh: boolean = false;
  public thamDoChucNang: boolean = false;
  confrim: any = null;
  documentType: DocumentType;
  icInfo = icInfo;
  icRedEye = icRedEye;
  icDetele = icDetele;
  icClear = icClear;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF', '.docx', '.doc', '.xls', '.xlsx'];
  loaiKetQua: any;
  additionalSearchString: string = null;
  canLamSang = new CanLamSang();

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private router: Router,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private authService: AuthService,
    private cdRef: ChangeDetectorRef,
  ) {
    this.baseService.controllerName = "CanLamSang";
  }

  ngOnInit() {
    this.documentType = DocumentType.CanLamSang;
    this.thongTinBenhNhan = {} as ThongTinBenhNhan;
    this.currentId = this.authService.getAccessUser().Id;
    this.tenNhanVienThucHien = this.authService.getAccessUser().UserName;

    this.listDanhSachCanLamSang = {} as ListDanhSachCanLamSang;
    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
    
    this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringCLS');
    this.canLamSang = JSON.parse(this.additionalSearchString);

    this.loaiKetQua = this.canLamSang.ChuaCoKetQua === true ? 1 : 2;
    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
      this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
      this.getThongTinCanLamSang(this.idYeuCauTiepNhan);
    }
  }

  BackToList() {
    this.router.navigate(["/ket-qua-cdha-tdcn"], {
      queryParamsHandling: "preserve",
    });
  }

  getThongTinYeuCauBenhNhan(id) {
    this.baseService.getById<any>(id).subscribe((resultData) => {
      if (resultData !== null && resultData !== undefined) {
        this.thongTinBenhNhan = resultData;
      }
    });
  }

  getThongTinCanLamSang(id) {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });
    this.apiService
      .get<any>("CanLamSang/GetThongTinCanLamSang/" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinCanLamSangs = resultData.DanhSachCanLamSangs;
          this.ketQuaNhomXetNghiems = resultData.KetQuaNhomXetNghiems;
          this.thongTinCanLamSangs.forEach((e) => {
            if (e.GiayKetQuaLamSang === null && e.GhiChu !== null) {
              e.KiemTraFileKetQua = true;
            } else {
              e.KiemTraFileKetQua = false;
            }
          });
          this.ketQuaNhomXetNghiems.forEach((e) => {
            if ((e.GiayKetQuaNhomCanLamSang === null || e.GiayKetQuaNhomCanLamSang.length === 0) && e.KetLuan !== null) {
              e.KiemTraFileKetQua = true;
            } else {
              e.KiemTraFileKetQua = false;
            }
          });
          resultData.DanhSachCanLamSangs.forEach((element) => {
            if (element.LoaiYeuCauKyThuat === 3) {
              this.chuanDoanHinhAnh = true;
            }
            if (element.LoaiYeuCauKyThuat === 4) {
              this.thamDoChucNang = true;
            }
          });
        }
        this.dialog.closeAll();
      });
  }

  showButton(state: FileState): boolean {
    return (state === FileState.Uploaded) ? true : false;
  }
  async viewFile(dataItem) {
    let duongDan = dataItem.DuongDan;

    if (dataItem.IsExistingFile !== true) { //save tmp
      duongDan = dataItem.DuongDanTmp;
    }
    const params = new HttpParams({
      fromObject: {
        tenGuid: dataItem.TenGuid,
        duongDan: duongDan,
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

  // DeleteFile(thongTinCanLamSang: any, data: any) {
  //   const index = thongTinCanLamSang.GiayKetQuaLamSang.findIndex(item => item.TenGuid === data.TenGuid);
  //   if (index >= 0) {
  //     thongTinCanLamSang.GiayKetQuaLamSang.splice(index, 1);
  //   }    
  // }

  // DeleteFileNhomXetNghiem(thongTinNhomXetNghiemCanLamSang: any, data: any) {
  //   const index = thongTinNhomXetNghiemCanLamSang.GiayKetQuaNhomCanLamSang.findIndex(item => item.TenGuid === data.TenGuid);
  //   if (index >= 0) {
  //     thongTinNhomXetNghiemCanLamSang.GiayKetQuaNhomCanLamSang.splice(index, 1);
  //   }  
  // }

  setUpTooltip() { }

  SaveCanLamSang() {
    if (
      this.authService.hasPermission(
        this.documentType,
        SecurityOperation.Update
      )
    ) {

      this.validationErrors = [];
      this.cdRef.detectChanges();

      //kiểm tra cận lâm sàng ko chọn người thực hiện
      for (let index = 0; index < this.thongTinCanLamSangs.length; index++) {
        if (this.thongTinCanLamSangs[index].GiayKetQuaLamSang !== null && (this.thongTinCanLamSangs[index].NhanVienThucHienId === undefined
          || this.thongTinCanLamSangs[index].NhanVienThucHienId === null)) {
          this.validationErrors.push({
            Message: "Vui lòng chọn nhân viên thực hiện.",
            Field: "thongTinCanLamSangs[" + index + "].NhanVienThucHienId",
          });
        }
      }

      for (let index = 0; index < this.ketQuaNhomXetNghiems.length; index++) {
        if (this.ketQuaNhomXetNghiems[index].GiayKetQuaNhomCanLamSang != null) {
          if (this.ketQuaNhomXetNghiems[index].NhanVienThucHienId === undefined || this.ketQuaNhomXetNghiems[index].NhanVienThucHienId === null) {
            this.validationErrors.push({
              Message: "Vui lòng chọn nhân viên thực hiện.",
              Field: "ketQuaNhomXetNghiems[" + index + "].NhanVienThucHienId",
            });
          }
        }
      }

      //Trường hợp chọn check vào ô Không có file kết quả thì phải bắt buộc nhập ghi chú
      for (let index = 0; index < this.thongTinCanLamSangs.length; index++) {
        if ((this.thongTinCanLamSangs[index].GiayKetQuaLamSang == null || this.thongTinCanLamSangs[index].GiayKetQuaLamSang.length == 0) && this.thongTinCanLamSangs[index].KiemTraFileKetQua === true
          && (this.thongTinCanLamSangs[index].GhiChu === "" || this.thongTinCanLamSangs[index].GhiChu === undefined || this.thongTinCanLamSangs[index].GhiChu === null)) {
          this.validationErrors.push({
            Message: "Vui lòng nhập thông tin ghi chú.",
            Field: "thongTinCanLamSangs[" + index + "].GhiChu",
          });
        }
      }

      for (let index = 0; index < this.ketQuaNhomXetNghiems.length; index++) {
        if ((this.ketQuaNhomXetNghiems[index].GiayKetQuaNhomCanLamSang == null || this.ketQuaNhomXetNghiems[index].GiayKetQuaNhomCanLamSang.length == 0) && this.ketQuaNhomXetNghiems[index].KiemTraFileKetQua === true
          && (this.ketQuaNhomXetNghiems[index].KetLuan === "" || this.ketQuaNhomXetNghiems[index].KetLuan === undefined || this.ketQuaNhomXetNghiems[index].KetLuan === null)) {
          this.validationErrors.push({
            Message: "Vui lòng nhập thông tin ghi chú.",
            Field: "thongTinNhomXetNghiemCanLamSang[" + index + "].KetLuan",
          });
        }
      }

      if (this.validationErrors.length > 0) {
        return true;
      }

      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: CommonService.format(SystemMessage.MessConfirm, [
              "cập nhật",
            ]),
          },
        })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.listDanhSachCanLamSang.YeuCauTiepNhanId = this.idYeuCauTiepNhan;
            this.listDanhSachCanLamSang.DanhSachCanLamSangs = this.thongTinCanLamSangs;
            this.listDanhSachCanLamSang.KetQuaNhomXetNghiems = this.ketQuaNhomXetNghiems;
            this.apiService
              .post<any>(
                "CanLamSang/CapNhatKetQuaCanLamSang",
                this.listDanhSachCanLamSang
              )
              .subscribe(
                (resultData) => {
                  if (resultData) {
                    this.notificationService.showSuccess("Cập nhật kết quả cận lâm sàng thành công.");
                  }
                },
                (err: ApiError) => { }
              );
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 83 && event.ctrlKey) {
      // ctrl + s
      if (this.tabIndex == 0) {
        this.SaveCanLamSang();
      }
      event.preventDefault();
    }
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.BackToList();
      event.preventDefault();
    }
  }
}
