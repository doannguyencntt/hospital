import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icDelete from '@iconify/icons-ic/delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { NoiTruHoSoKhacPhieuCongKhaiThuocVatTu, PhieuCongKhaiThuocVatTu, Table } from './phieu-cong-khai-dich-thuoc-vat-tu.model';
// import { PhieuCongKhaiThuocVatTuPopupComponent } from './phieu-cong-khai-dich-thuoc-vat-tu-popup/phieu-cong-khai-dich-vu-ky-thuat-popup.component';

@Component({
  selector: 'app-phieu-cong-khai-dich-thuoc-vat-tu',
  templateUrl: './phieu-cong-khai-dich-thuoc-vat-tu.component.html',
  styleUrls: ['./phieu-cong-khai-dich-thuoc-vat-tu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class PhieuCongKhaiThuocVatTuComponent implements OnInit {

  phieuCongKhaiThuocVatTu = {} as PhieuCongKhaiThuocVatTu;
  noiTruHoSoKhacphieuCongKhaiThuocVatTu: NoiTruHoSoKhacPhieuCongKhaiThuocVatTu;
  table: Table[];

  hostingName: string;
  filePDF: any;
  fileUrl: any;

  maxColumns = 7;
  icDelete = icDelete;
  icClear = icClear;
  columnTableNgayThang: number = 0;
  addTable: boolean = false;
  slTable: number = 1;
  htmlTable: string = "";
  yeuCauTiepNhanId: number = 0;
  validationErrors: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  getNhanVienId: any;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.noiTruHoSoKhacphieuCongKhaiThuocVatTu = new NoiTruHoSoKhacPhieuCongKhaiThuocVatTu();

    this.getNhanVienId = this.authService.getAccessUser();
    this.showColumnsViewTable();
    this.getData();
  }

  showColumnsViewTable() {
    var self = this;
    this.validationErrors = [];
    if (self.phieuCongKhaiThuocVatTu.NgayVaoVien != null && self.phieuCongKhaiThuocVatTu.NgayRaVien != null) {
      // let startDate = new Date(self.phieuCongKhaiThuocVatTu.NgayVaoVien);
      // let endDate = new Date(self.phieuCongKhaiThuocVatTu.NgayRaVien);
      // let seconds1Ngay = 24 * 60 * 60;
      // let secondstuNgayDenNgay = (endDate.getTime() - startDate.getTime()) / 1000;
      // self.columnTableNgayThang = secondstuNgayDenNgay / seconds1Ngay;
      // if (self.columnTableNgayThang > self.maxColumns) {
      //   let phanNguyen = self.columnTableNgayThang / self.maxColumns;
      //   let phanDu = self.columnTableNgayThang % self.maxColumns;
      //   self.slTable = phanNguyen;
      //   if (phanDu > 0) {
      //     self.slTable = phanNguyen + 1;
      //   }
      //   self.addTable = true;
      //   self.addColumnsTable(true);
      // }
      // else {
      //   self.slTable = 1;
      //   self.addTable = true;
      //   self.addColumnsTable(true);
      // }
    }
    self.addColumnsTable(true);
  }

  addColumnsTable(check: boolean) {
    var self = this;
    this.validationErrors = [];
    if (typeof (self.phieuCongKhaiThuocVatTu.NgayVaoVien) == "string") {
      self.phieuCongKhaiThuocVatTu.NgayVaoVien = new Date(self.phieuCongKhaiThuocVatTu.NgayVaoVien);
    }
    if (typeof (self.phieuCongKhaiThuocVatTu.NgayRaVien) == "string") {
      self.phieuCongKhaiThuocVatTu.NgayRaVien = new Date(self.phieuCongKhaiThuocVatTu.NgayRaVien);
    }
    let modelGetData = {
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      NgayVaoVien: CommonService.formatDateTime(self.phieuCongKhaiThuocVatTu.NgayVaoVien, "mm/dd/yyyy"),
      NgayRaVien: CommonService.formatDateTime(self.phieuCongKhaiThuocVatTu.NgayRaVien, "mm/dd/yyyy")
    };
    self.apiService.post<any>("DieuTriNoiTru/GetDataPhieuCongKhaiThuocVatTu", modelGetData).subscribe(
      (result) => {
        if (result != null) {
          if (check == true) {
            self.table = new Array<Table>()
            let tmp = "data"
            let titleHtmlTable = '';
            let stt = 1;
            result.forEach(elementPhieu => {
              if (elementPhieu != "") {
                titleHtmlTable += elementPhieu;
              }
            });
            self.htmlTable = titleHtmlTable;
            let data = {
              Html: self.htmlTable
            };
            self.table.push(data);
          }
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });

  }

  blurNgayVao(event) {
    this.showColumnsViewTable();
  }

  blurNgayRa(event) {
    this.showColumnsViewTable();
  }

  getData() {
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuCongKhaiThuocVatTu?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuCongKhaiThuocVatTu = thongTinHoSo;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id = result.Id;
          self.returnId.emit(this.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id);
          self.table = thongTinHoSo.TableString;
          self.phieuCongKhaiThuocVatTu.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuCongKhaiThuocVatTu = new PhieuCongKhaiThuocVatTu();

          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.phieuCongKhaiThuocVatTu.TaiKhoanDangNhap = result.TenNhanVien;
              self.phieuCongKhaiThuocVatTu.NgayThucHien = result.NgayThucHien;
              self.phieuCongKhaiThuocVatTu.ChanDoan = result.ChanDoan;
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  Luu() {
    var self = this;
    self.phieuCongKhaiThuocVatTu.TableString = self.table
    const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuocVatTu);
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.FileChuKy = self.phieuCongKhaiThuocVatTu.FileChuKy;
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.LoaiHoSoDieuTriNoiTru = 37;
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayRaVien = self.phieuCongKhaiThuocVatTu.NgayRaVien;
    self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayVaoVien = self.phieuCongKhaiThuocVatTu.NgayVaoVien;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu lại phiếu công khai Thuốc , Vật tư này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {

        self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuocVatTu", self.noiTruHoSoKhacphieuCongKhaiThuocVatTu).subscribe(
          (result) => {
            if (result.Id != undefined) {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            }
            if (result.Id == undefined) {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
            }
            self.Huy();
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      }
    },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  Huy() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuCongKhaiThuocVatTu?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuCongKhaiThuocVatTu = thongTinHoSo;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id);
          self.table = thongTinHoSo.TableString
          self.phieuCongKhaiThuocVatTu.FileChuKy = [...result.ListFile];
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }

  xuLyIn(dataIn: any) {
    let hosting = "";
    if (window.location.protocol == "http:") {
        hosting = "http://" + window.location.host;
    } else {
        hosting = "https://" + window.location.host;
    }
    dataIn.Hosting = hosting;
    this.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuocVatTuYte", dataIn).subscribe(
      (result) => {
        this.dialog.open(null, {
          disableClose: true,
          width: '1000px',
          data: { Model: result }
        }).afterClosed().subscribe(() => {
        });
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  In() {
    var self = this;
    let hosting = "";
    if (window.location.protocol == "http:") {
        hosting = "http://" + window.location.host;
    } else {
        hosting = "https://" + window.location.host;
    }

    let dataIn = {
      Hosting: hosting,
      NoiTruHoSoKhacId: self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id,
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 37,
    }
    if (self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.Id == 0) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu công khai Thuốc , Vật tư này không?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.phieuCongKhaiThuocVatTu.TableString = self.table
          const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuocVatTu);
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.FileChuKy = self.phieuCongKhaiThuocVatTu.FileChuKy;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.LoaiHoSoDieuTriNoiTru = 37;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.ThongTinHoSo = thongTinHoSo;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayRaVien = self.phieuCongKhaiThuocVatTu.NgayRaVien;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayVaoVien = self.phieuCongKhaiThuocVatTu.NgayVaoVien;
          self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuocVatTu", self.noiTruHoSoKhacphieuCongKhaiThuocVatTu).subscribe(
            (result) => {
              if (result != null) {
                dataIn.NoiTruHoSoKhacId = result.Id;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.Huy();
                self.xuLyIn(dataIn);
              }
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });

        }
      },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
    else {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu công khai Thuốc , Vật tư này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.phieuCongKhaiThuocVatTu.TableString = self.table
          const thongTinHoSo = JSON.stringify(self.phieuCongKhaiThuocVatTu);
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.FileChuKy = self.phieuCongKhaiThuocVatTu.FileChuKy;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.LoaiHoSoDieuTriNoiTru = 37;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.ThongTinHoSo = thongTinHoSo;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayRaVien = self.phieuCongKhaiThuocVatTu.NgayRaVien;
          self.noiTruHoSoKhacphieuCongKhaiThuocVatTu.NgayVaoVien = self.phieuCongKhaiThuocVatTu.NgayVaoVien;
          self.apiService.post<any>("DieuTriNoiTru/LuuPhieuCongKhaiThuocVatTu", self.noiTruHoSoKhacphieuCongKhaiThuocVatTu).subscribe(
            (result) => {
              if (result != null) {
                dataIn.NoiTruHoSoKhacId = result;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.Huy();
                self.xuLyIn(dataIn);
              }
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
  }
}
