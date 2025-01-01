import { PhieuDeNghiTestTruocKhiDungThuoc, NoiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc, DanhSachThuocCanTest } from './phieu-de-nghi-test-truoc-khi-dung.model';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuDeNghiTestTruocKdPopupComponent } from './phieu-de-nghi-test-truoc-kd-popup/phieu-de-nghi-test-truoc-kd-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
declare var $: any;
@Component({
  selector: 'app-phieu-de-nghi-test-truoc-khi-dung',
  templateUrl: './phieu-de-nghi-test-truoc-khi-dung.component.html',
  styleUrls: ['./phieu-de-nghi-test-truoc-khi-dung.component.scss']
})
export class PhieuDeNghiTestTruocKhiDungComponent implements OnInit {
  phieuDeNghiTestTruocKhiDungThuoc = {} as PhieuDeNghiTestTruocKhiDungThuoc;
  noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc: NoiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc;
  documentType: DocumentType;
  gridColumns: any[] = [];

  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;
  icClear = icClear;
  checkDieuKienThemPhieu: boolean = false;
  dataDSNhanVien: any;
  dataCheDoChamSoc: any;
  yeuCauTiepNhanId: number = 0;
  getNhanVienId: any;
  validationErrors: any;
  gridDataSource: any = {};
  dataSourceDanhSachCanTest: any = {
    data: [],
    total: 0
  };
  dataNhanVien: any;
  dataDuocPham: any;

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  tenTaiKhoanDangNhap: string = "";
  @ViewChild('Grid', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('ngayThuTemplate', { static: true }) ngayThuTemplate: TemplateRef<any>;
  @ViewChild('thuocTemplate', { static: true }) thuocTemplate: TemplateRef<any>;
  @ViewChild('phuongPhapThuTemplate', { static: true }) phuongPhapThuTemplate: TemplateRef<any>;
  @ViewChild('nguoiThuTemplate', { static: true }) nguoiThuTemplate: TemplateRef<any>;
  @ViewChild('bacSiChiDinhTemplate', { static: true }) bacSiChiDinhTemplate: TemplateRef<any>;
  @ViewChild('soLoTemplate', { static: true }) soLoTemplate: TemplateRef<any>;
  @ViewChild('bSDocVaKiemTraTemplate', { static: true }) bSDocVaKiemTraTemplate: TemplateRef<any>;
  @ViewChild('ngayDocKQTemplate', { static: true }) ngayDocKQTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.phieuDeNghiTestTruocKhiDungThuoc = new PhieuDeNghiTestTruocKhiDungThuoc();
    this.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = new Array<DanhSachThuocCanTest>();
    this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc = new NoiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc()
    this.gridColumns = [
      { Field: "NgayThu", Title: "Ngày thử", Width: 120, Template: this.ngayThuTemplate },
      { Field: "Thuoc", Title: "Thuốc", Width: 120, Template: this.thuocTemplate },
      { Field: "PhuongPhapThu", Title: "Phương pháp thử", Width: 120, Template: this.phuongPhapThuTemplate },
      { Field: "BacSiChiDinh", Title: "Bác sĩ chỉ định", Width: 120, Template: this.bacSiChiDinhTemplate },
      { Field: "NguoiThu", Title: "Người thử", Width: 120, Template: this.nguoiThuTemplate },
      { Field: "BSDocVaKiemTra", Title: "Bác sĩ đọc và kiểm tra", Width: 120, Template: this.bSDocVaKiemTraTemplate },
      { Field: "NgayDocKQ", Title: "Ngày đọc kết quả", Width: 120, Template: this.ngayDocKQTemplate },
      { Field: "Action", Title: "", Width: 20, Template: this.actionTemplate }
    ];
    this.getNhanVienDuocPham();
    this.getData();
  }
  getNhanVienDuocPham() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa").subscribe(
      (result) => {
        this.dataNhanVien = result;
      });
    this.apiService.post<any>("DieuTriNoiTru/GetDanhSachDuocPhamQuocGiaDeNghiTest").subscribe(
      (result) => {
        this.dataDuocPham = result;
      });
  }
  modelChangeDongYDeNghiTest(event) { }
  InPhieu(item: any) {
    var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id,
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 22,
      LoaiPhieuIn: item
    }
    //In phiếu đề nghị
    if (item == 1) //In phiếu đề nghị
    {
      if (self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id == 0) {
        // tạo mới và
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu đề nghị test trước khi dùng thuốc này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            // ngày utc in
            if (self.dataSourceDanhSachCanTest.data != null) {
              self.dataSourceDanhSachCanTest.data.forEach(element => {
                if (element.NgayThu != undefined && element.NgayThu != null) {
                  let ngayThuString = "";
                  let ngay = new Date(element.NgayThu);
                  ngayThuString = CommonService.formatDateTime(ngay, "mm/dd/yyyy");
                  element.NgayThuUTC = ngayThuString;
                }
              });
            }
            self.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = self.dataSourceDanhSachCanTest.data;
            const thongTinHoSo = JSON.stringify(this.phieuDeNghiTestTruocKhiDungThuoc);
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.FileChuKy = self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.LoaiHoSoDieuTriNoiTru = 22;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.ThongTinHoSo = thongTinHoSo;
            let checkSave: boolean = true;

            // validate
            let dataValidator = {
              HoTen: self.phieuDeNghiTestTruocKhiDungThuoc.HoTen,
              NamSinh: self.phieuDeNghiTestTruocKhiDungThuoc.NamSinh,
              GioiTinh: self.phieuDeNghiTestTruocKhiDungThuoc.GioiTinh,
              DiaChi: self.phieuDeNghiTestTruocKhiDungThuoc.DiaChi
            };
            if (self.phieuDeNghiTestTruocKhiDungThuoc.SelectBenhNhanHoacNguoiNha == false) {
              self.apiService.post<any>("DieuTriNoiTru/ValidatorPhieuDeNghiTestTruocKhiDung", dataValidator).subscribe(
                (result) => {
                  if (result != null) {
                    checkSave = false;
                  }
                  else {
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result.Id;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                            (result) => {
                              self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                              }).afterClosed().subscribe(() => {
                              });
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
                },
                (err: ApiError) => {
                  checkSave = false;
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });
            }
            else {
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                (result) => {
                  if (result != null) {
                    dataIn.NoiTruHoSoKhacId = result.Id;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    self.Huy();
                    self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                      (result) => {
                        self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                          disableClose: true,
                          width: '1000px',
                          data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
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
        },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      }
      else {
        // update và in 
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu đề nghị test trước khi dùng thuốc này không ?",
          },
        }).afterClosed().subscribe((res) => {
          // ngày utc in
          if (res == "Yes") {
            // ngày utc in
            if (self.dataSourceDanhSachCanTest.data != null) {
              self.dataSourceDanhSachCanTest.data.forEach(element => {
                if (element.NgayThu != undefined && element.NgayThu != null) {
                  let ngayThuString = "";
                  let ngay = new Date(element.NgayThu);
                  ngayThuString = CommonService.formatDateTime(ngay, "mm/dd/yyyy");
                  element.NgayThuUTC = ngayThuString;
                }
              });
            }
            self.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = self.dataSourceDanhSachCanTest.data;
            const thongTinHoSo = JSON.stringify(this.phieuDeNghiTestTruocKhiDungThuoc);
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.FileChuKy = self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.LoaiHoSoDieuTriNoiTru = 22;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.ThongTinHoSo = thongTinHoSo;
            let checkSave: boolean = true;
            //validate
            let dataValidator = {
              HoTen: self.phieuDeNghiTestTruocKhiDungThuoc.HoTen,
              NamSinh: self.phieuDeNghiTestTruocKhiDungThuoc.NamSinh,
              GioiTinh: self.phieuDeNghiTestTruocKhiDungThuoc.GioiTinh,
              DiaChi: self.phieuDeNghiTestTruocKhiDungThuoc.DiaChi
            };
            if (self.phieuDeNghiTestTruocKhiDungThuoc.SelectBenhNhanHoacNguoiNha == false) {
              self.apiService.post<any>("DieuTriNoiTru/ValidatorPhieuDeNghiTestTruocKhiDung", dataValidator).subscribe(
                (result) => {
                  if (result != null) {
                    checkSave = false;
                  }
                  else {
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                            (result) => {
                              self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                              }).afterClosed().subscribe(() => {
                              });
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
                },
                (err: ApiError) => {
                  checkSave = false;
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });
            }
            else {
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                (result) => {
                  if (result != null) {
                    dataIn.NoiTruHoSoKhacId = result;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                    self.Huy();
                    self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                      (result) => {
                        self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                          disableClose: true,
                          width: '1000px',
                          data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
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
        },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      }
    }
    // phiếu giấy phản ứng thuốc
    if (item == 2) {
      if (self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id == 0) {
        // tạo mới và in
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu giấy phản ứng thuốc này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            // ngày utc in
            if (self.dataSourceDanhSachCanTest.data != null) {
              self.dataSourceDanhSachCanTest.data.forEach(element => {
                if (element.NgayThu != undefined && element.NgayThu != null) {
                  let ngayThuString = "";
                  let ngay = new Date(element.NgayThu);
                  ngayThuString = CommonService.formatDateTime(ngay, "mm/dd/yyyy");
                  element.NgayThuUTC = ngayThuString;
                }
              });
            }
            self.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = self.dataSourceDanhSachCanTest.data;
            const thongTinHoSo = JSON.stringify(this.phieuDeNghiTestTruocKhiDungThuoc);
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.FileChuKy = self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.LoaiHoSoDieuTriNoiTru = 22;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.ThongTinHoSo = thongTinHoSo;
            let checkSave: boolean = true;
            //validate
            let dataValidator = {
              HoTen: self.phieuDeNghiTestTruocKhiDungThuoc.HoTen,
              NamSinh: self.phieuDeNghiTestTruocKhiDungThuoc.NamSinh,
              GioiTinh: self.phieuDeNghiTestTruocKhiDungThuoc.GioiTinh,
              DiaChi: self.phieuDeNghiTestTruocKhiDungThuoc.DiaChi
            };
            if (self.phieuDeNghiTestTruocKhiDungThuoc.SelectBenhNhanHoacNguoiNha == false) {
              self.apiService.post<any>("DieuTriNoiTru/ValidatorPhieuDeNghiTestTruocKhiDung", dataValidator).subscribe(
                (result) => {
                  if (result != null) {
                    checkSave = false;
                  }
                  else {
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result.Id;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                            (result) => {
                              self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                              }).afterClosed().subscribe(() => {
                              });
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
                },
                (err: ApiError) => {
                  checkSave = false;
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });
            }
            else {
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                (result) => {
                  if (result != null) {
                    dataIn.NoiTruHoSoKhacId = result.Id;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    self.Huy();
                    self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                      (result) => {
                        self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                          disableClose: true,
                          width: '1000px',
                          data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
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
        },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          });
      }
      else {
        // update và in 
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in phiếu giấy phản ứng thuốc này không ?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            // ngày utc in
            if (self.dataSourceDanhSachCanTest.data != null) {
              self.dataSourceDanhSachCanTest.data.forEach(element => {
                if (element.NgayThu != undefined && element.NgayThu != null) {
                  let ngayThuString = "";
                  let ngay = new Date(element.NgayThu);
                  ngayThuString = CommonService.formatDateTime(ngay, "mm/dd/yyyy");
                  element.NgayThuUTC = ngayThuString;
                }
              });
            }
            self.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = self.dataSourceDanhSachCanTest.data;
            const thongTinHoSo = JSON.stringify(this.phieuDeNghiTestTruocKhiDungThuoc);
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.FileChuKy = self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.LoaiHoSoDieuTriNoiTru = 22;
            this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.ThongTinHoSo = thongTinHoSo;

            let checkSave: boolean = true;
            // trường hợp in theo người thân
            if (self.phieuDeNghiTestTruocKhiDungThuoc.SelectBenhNhanHoacNguoiNha == false) {
              let dataValidator = {
                HoTen: self.phieuDeNghiTestTruocKhiDungThuoc.HoTen,
                NamSinh: self.phieuDeNghiTestTruocKhiDungThuoc.NamSinh,
                GioiTinh: self.phieuDeNghiTestTruocKhiDungThuoc.GioiTinh,
                DiaChi: self.phieuDeNghiTestTruocKhiDungThuoc.DiaChi
              };
              self.apiService.post<any>("DieuTriNoiTru/ValidatorPhieuDeNghiTestTruocKhiDung", dataValidator).subscribe(
                (result) => {
                  if (result != null) {
                    checkSave = false;
                  }
                  else {
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                            (result) => {
                              self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                              }).afterClosed().subscribe(() => {
                              });
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
                },
                (err: ApiError) => {
                  checkSave = false;
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });

            }
            else // in theo người bệnh
            {
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                (result) => {
                  if (result != null) {
                    dataIn.NoiTruHoSoKhacId = result;
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                    self.Huy();
                    self.apiService.post<any>("DieuTriNoiTru/InPhieuDeNghiTestTruocKhiDungThuoc", dataIn).subscribe(
                      (result) => {
                        self.dialog.open(PhieuDeNghiTestTruocKdPopupComponent, {
                          disableClose: true,
                          width: '1000px',
                          data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
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
  onChangeNamSinh(data) {
    this.phieuDeNghiTestTruocKhiDungThuoc.NamSinh = data;
  }

  themDanhSachCanTest() {
    let newItem = new DanhSachThuocCanTest();
    let current: Date = new Date();
    newItem.NgayDocKQ = CommonService.formatDateTime(current, "mm/dd/yyyy");
    let ngayKQDate = new Date(newItem.NgayDocKQ);
    newItem.NgayDocKQUTC = CommonService.formatDateTime(ngayKQDate, "mm/dd/yyyy");
    this.dataSourceDanhSachCanTest.data.push(newItem);
  }
  xoa(item: any) {
    this.validationErrors = [];
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceDanhSachCanTest.data.splice(this.dataSourceDanhSachCanTest.data.findIndex(x => x == item), 1);
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
      }
    });

  }
  getData() {
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuDeNghiTestTruocKhiDung?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuDeNghiTestTruocKhiDungThuoc = thongTinHoSo;
          self.dataSourceDanhSachCanTest.data = thongTinHoSo.DanhSachThuocCanTestArr;
          thongTinHoSo.DanhSachThuocCanTestArr.forEach(element => {
            if (element.NgayDocKQ != undefined && element.NgayDocKQ != null) {
              let ngayThuString = "";
              let ngay = new Date(element.NgayDocKQ);
              element.NgayDocKQ = ngay;
            }
          });
          self.dataSourceDanhSachCanTest.total = thongTinHoSo.DanhSachThuocCanTestArr.length;
          self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id);
          self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuDeNghiTestTruocKhiDungThuoc = new PhieuDeNghiTestTruocKhiDungThuoc();

          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.phieuDeNghiTestTruocKhiDungThuoc.TaiKhoanDangNhap = result.TenNhanVien;
              self.phieuDeNghiTestTruocKhiDungThuoc.NgayThucHien = result.NgayThucHien;
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
    // ngày utc in
    if (self.dataSourceDanhSachCanTest.data != null) {
      self.dataSourceDanhSachCanTest.data.forEach(element => {
        if (element.NgayThu != undefined && element.NgayThu != null) {
          let ngayThuString = "";
          let ngay = new Date(element.NgayThu);
          ngayThuString = CommonService.formatDateTime(ngay, "mm/dd/yyyy");
          element.NgayThuUTC = ngayThuString;
        }
      });
    }
    self.phieuDeNghiTestTruocKhiDungThuoc.DanhSachThuocCanTestArr = self.dataSourceDanhSachCanTest.data;
    const thongTinHoSo = JSON.stringify(this.phieuDeNghiTestTruocKhiDungThuoc);
    this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.FileChuKy = self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy;
    this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.LoaiHoSoDieuTriNoiTru = 22;
    this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.ThongTinHoSo = thongTinHoSo;
    let checkSave: boolean = true;
   
    let dataValidator = {
      HoTen: self.phieuDeNghiTestTruocKhiDungThuoc.HoTen,
      NamSinh: self.phieuDeNghiTestTruocKhiDungThuoc.NamSinh,
      GioiTinh: self.phieuDeNghiTestTruocKhiDungThuoc.GioiTinh,
      DiaChi: self.phieuDeNghiTestTruocKhiDungThuoc.DiaChi
    };
    if (self.phieuDeNghiTestTruocKhiDungThuoc.SelectBenhNhanHoacNguoiNha == false) {
      self.apiService.post<any>("DieuTriNoiTru/ValidatorPhieuDeNghiTestTruocKhiDung", dataValidator).subscribe(
        (result) => {
          if (result != null) {
            checkSave = false;
          }
          else{
            self.dialog.open(ConfirmComponent, {
              disableClose: false,
              width: "500px",
              data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu lại phiếu đề nghị test trước khi dùng thuốc này không ?",
              },
            }).afterClosed().subscribe((res) => {
              if (res == "Yes") {
      
                self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
                  (result) => {
                    if(result.Id != undefined)
                    {
                      this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result.Id;
                      self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    }
                    else{
                      this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result;
                      self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                    }
                    this.getData();
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
        },
        (err: ApiError) => {
          checkSave = false;
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
    else{
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu lại phiếu đề nghị test trước khi dùng thuốc này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuPhieuDeNghiTestTruocKhiDungThuoc", self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc).subscribe(
            (result) => {
              if(result.Id != undefined)
              {
                this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result.Id;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              }
              else{
                this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
              }
              this.getData();
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
  Huy() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuDeNghiTestTruocKhiDung?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuDeNghiTestTruocKhiDungThuoc = thongTinHoSo;
          self.dataSourceDanhSachCanTest.data = thongTinHoSo.DanhSachThuocCanTestArr;
          self.dataSourceDanhSachCanTest.total = thongTinHoSo.DanhSachThuocCanTestArr.length
          self.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc.Id);
          self.phieuDeNghiTestTruocKhiDungThuoc.FileChuKy = [...result.ListFile];
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  changeNgay(event: any, dataItem: any) {
    if (event != undefined && event != null && event != "") {
      let ngayDocChange = CommonService.formatDateTime(event, "mm/dd/yyyy");
      dataItem.NgayDocKQUTC = ngayDocChange;
    }
  }
}
