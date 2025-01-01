import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, TemplateRef, ViewRef,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuSoKet15NgayDieuTri, NoiTruHoSoKhacSoKet15NgayDieuTri, LookupQueryInfo, ExportQueryInfoQueryInfo, DanhSachSoKet15NgayDieuTri,FileChuKyModel, ChiTietDieuTriNoiTruViewModel} from '../../../dieu-tri-noi-tru.model';
import icDelete from '@iconify/icons-ic/delete';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { PhieuInPhieuSoKetMuoiLamComponent } from './phieu-in-phieu-so-ket-muoi-lam/phieu-in-phieu-so-ket-muoi-lam.component';
import icClear from '@iconify/icons-ic/twotone-clear';
import {
  FileRestrictions,
  SelectEvent,
  RemoveEvent
} from "@progress/kendo-angular-upload";
import { UploadComponent } from 'src/app/shared/component/uploads/upload/upload.component';
@Component({
  selector: 'app-phieu-so-ket-muoi-lam-ngay-dieu-tri',
  templateUrl: './phieu-so-ket-muoi-lam-ngay-dieu-tri.component.html',
  styleUrls: ['./phieu-so-ket-muoi-lam-ngay-dieu-tri.component.scss']
})
export class PhieuSoKetMuoiLamNgayDieuTriComponent implements OnInit {
  phieuSoKet15NgayDieuTri = {} as PhieuSoKet15NgayDieuTri;
  noiTruHoSoKhacSoKet15NgayDieuTri: NoiTruHoSoKhacSoKet15NgayDieuTri;
  popupLoadingData: any = null;
  validationErrors: any;
  documentType: DocumentType;
  getNhanVienId: any;
  data: any;
  icDelete = icDelete;
  icClear= icClear;
  gridDataSourceSoKet: any = [];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  queryinfo: LookupQueryInfo = new LookupQueryInfo();
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  checkDieuKienThemPhieuSoKet: boolean = false;
  checkDieuKienHienGrid: boolean = false;
  gridColumns: any[] = [];
  tenTaiKhoanDangNhap : string= "";
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @Input() yeuCauTiepNhanId: number = 0;
  @ViewChild('GridSoKet', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('upload15NgayDieuTri', { read: UploadComponent, static: false }) upload15NgayDieuTri: UploadComponent;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    ) { }

  ngOnInit() {
    this.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
    this.noiTruHoSoKhacSoKet15NgayDieuTri = new NoiTruHoSoKhacSoKet15NgayDieuTri();
    this.getNhanVienId = this.authService.getAccessUser();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.gridColumns = [
      { Field: "", Title: "#", Width: 35, Template: this.sttTemplate },
      { Field: "TuNgayString", Title: "Từ ngày", Width: 100, Template: this.tuNgayTemplate },
      { Field: "DenNgayString", Title: "Đến ngày", Width: 100 },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
    this.getData();
    this.getNhanVien();

  }
  getNhanVien() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa", this.queryinfo).subscribe(
      (result) => {
        this.data = result;
      });
  }
  getDanhSachSoKet(){
    var self = this;
    self.exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString() ;
    self.apiService.post<any>("DieuTriNoiTru/GetDanhSachPhieuSoKet15NgayDieuTri", self.exportQueryInfoQueryInfo).subscribe(
      (result) => {
        this.gridDataSource = {
          data: result.Data,
          total: result.Data.length
        };
         this.setDataGridView();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  getData() {
    var self = this;
    this.getDanhSachSoKet();
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTriSave?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          this.checkDieuKienThemPhieuSoKet = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
          if(self.phieuSoKet15NgayDieuTri.NgayThucHien != null){
            self.phieuSoKet15NgayDieuTri.NgayThucHienText = self.phieuSoKet15NgayDieuTri.NgayThucHienText;
          }
          self.phieuSoKet15NgayDieuTri = thongTinHoSo;
          self.phieuSoKet15NgayDieuTri.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
          self.phieuSoKet15NgayDieuTri.FileChuKy = new Array<FileChuKyModel>();
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTri?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
              this.getTaiKhoanDangNhap();
              this.checkDieuKienThemPhieuSoKet = false;
              this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = 0;
              self.phieuSoKet15NgayDieuTri = result;
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
  onKey() { }
  In() {
    var self = this;
    let tuNgay = CommonService.formatDateTime(new Date(self.phieuSoKet15NgayDieuTri.TuNgay), "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(new Date(self.phieuSoKet15NgayDieuTri.DenNgay), "dd/mm/yyyy");
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: self.noiTruHoSoKhacSoKet15NgayDieuTri.Id,
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 5,
      TuNgay : tuNgay,
      DenNgay : denNgay
    }
    if(self.noiTruHoSoKhacSoKet15NgayDieuTri.Id == 0)
    {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu sơ kết 15 ngày điều trị này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          const thongTinHoSo = JSON.stringify(self.phieuSoKet15NgayDieuTri);
          self.noiTruHoSoKhacSoKet15NgayDieuTri.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.FileChuKy = self.phieuSoKet15NgayDieuTri.FileChuKy;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.LoaiHoSoDieuTriNoiTru = 5;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.ThongTinHoSo = thongTinHoSo;
          let validatorsPhieuSoKet15NgayDieuTri = {
            TuNgay: self.phieuSoKet15NgayDieuTri.TuNgay,
            DenNgay: self.phieuSoKet15NgayDieuTri.DenNgay,
            NgayThucHien: self.phieuSoKet15NgayDieuTri.NgayThucHien,
            TruongKhoa: self.phieuSoKet15NgayDieuTri.TruongKhoa,
            BSDieuTri: self.phieuSoKet15NgayDieuTri.BSDieuTri
          };
          self.apiService.post<any>("DieuTriNoiTru/CheckValidationForPhieuSoKet15NgayDieuTri", validatorsPhieuSoKet15NgayDieuTri).subscribe(
            (result) => {
              // không bt viết gì trong đây
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuSoKet15NgayDieuTri", self.noiTruHoSoKhacSoKet15NgayDieuTri).subscribe(
                (result) => {
                  if(result != null){
                    dataIn.NoiTruHoSoKhacId =result;
                    this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result;
                    this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.checkDieuKienThemPhieuSoKet = true;
                  self.getDanhSachSoKet();
                  self.Huy();
                  self.apiService.post<any>("DieuTriNoiTru/InPhieuSoKet15NgayDieuTri", dataIn).subscribe(
                    (result) => {
                      self.dialog.open(PhieuInPhieuSoKetMuoiLamComponent, {
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
    else{
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu sơ kết 15 ngày điều trị này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          const thongTinHoSo = JSON.stringify(self.phieuSoKet15NgayDieuTri);
          self.noiTruHoSoKhacSoKet15NgayDieuTri.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.FileChuKy = self.phieuSoKet15NgayDieuTri.FileChuKy;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.LoaiHoSoDieuTriNoiTru = 5;
          self.noiTruHoSoKhacSoKet15NgayDieuTri.ThongTinHoSo = thongTinHoSo;
          let validatorsPhieuSoKet15NgayDieuTri = {
            TuNgay: self.phieuSoKet15NgayDieuTri.TuNgay,
            DenNgay: self.phieuSoKet15NgayDieuTri.DenNgay,
            NgayThucHien: self.phieuSoKet15NgayDieuTri.NgayThucHien,
            TruongKhoa: self.phieuSoKet15NgayDieuTri.TruongKhoa,
            BSDieuTri: self.phieuSoKet15NgayDieuTri.BSDieuTri
          };
          self.apiService.post<any>("DieuTriNoiTru/CheckValidationForPhieuSoKet15NgayDieuTri", validatorsPhieuSoKet15NgayDieuTri).subscribe(
            (result) => {
              // không bt viết gì trong đây
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuSoKet15NgayDieuTri", self.noiTruHoSoKhacSoKet15NgayDieuTri).subscribe(
                (result) => {
                  if(result != null){
                    dataIn.NoiTruHoSoKhacId =result;
                    this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result;
                    this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                  self.checkDieuKienThemPhieuSoKet = true;
                  self.getDanhSachSoKet();
                  self.Huy();
                  self.apiService.post<any>("DieuTriNoiTru/InPhieuSoKet15NgayDieuTri", dataIn).subscribe(
                    (result) => {
                      self.dialog.open(PhieuInPhieuSoKetMuoiLamComponent, {
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
    if(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id != 0)
    {
      this.viewDataSoKet(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
    }
    else{
      if (this.phieuSoKet15NgayDieuTri != null) {
        self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTriSave?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
          (result) => {
            if (result != null) {
              this.checkDieuKienThemPhieuSoKet = true;
              let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
              this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result.Id;
              this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
              self.phieuSoKet15NgayDieuTri = thongTinHoSo;
              if(self.phieuSoKet15NgayDieuTri.NgayThucHien != null){
                self.phieuSoKet15NgayDieuTri.NgayThucHienText = self.phieuSoKet15NgayDieuTri.NgayThucHienText;
              }
              self.phieuSoKet15NgayDieuTri.FileChuKy = [...result.ListFile];
            }
            else
            {
              self.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
              self.phieuSoKet15NgayDieuTri.FileChuKy = new Array<FileChuKyModel>();
              let nhanVienThucHienId = self.getNhanVienId.Id;
              self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTri?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
                (result) => {
                  this.getTaiKhoanDangNhap();
                  this.checkDieuKienThemPhieuSoKet = false;
                  this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = 0;
                  self.phieuSoKet15NgayDieuTri = result;
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
                });
            }
          });
      }
      else {
        this.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
      }
    }
   
  }
  Luu() {
    var self = this;
    const thongTinHoSo = JSON.stringify(self.phieuSoKet15NgayDieuTri);
    self.noiTruHoSoKhacSoKet15NgayDieuTri.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacSoKet15NgayDieuTri.FileChuKy = self.phieuSoKet15NgayDieuTri.FileChuKy;
    self.noiTruHoSoKhacSoKet15NgayDieuTri.LoaiHoSoDieuTriNoiTru = 5;
    self.noiTruHoSoKhacSoKet15NgayDieuTri.ThongTinHoSo = thongTinHoSo;
    let validatorsPhieuSoKet15NgayDieuTri = {
      TuNgay: self.phieuSoKet15NgayDieuTri.TuNgay,
      DenNgay: self.phieuSoKet15NgayDieuTri.DenNgay,
      NgayThucHien: self.phieuSoKet15NgayDieuTri.NgayThucHien,
      TruongKhoa: self.phieuSoKet15NgayDieuTri.TruongKhoa,
      BSDieuTri: self.phieuSoKet15NgayDieuTri.BSDieuTri
    };
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu phiếu sơ kết 15 ngày điều trị này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          self.apiService.post<any>("DieuTriNoiTru/CheckValidationForPhieuSoKet15NgayDieuTri", validatorsPhieuSoKet15NgayDieuTri).subscribe(
            (result) => {
              // không bt viết gì trong đây
              self.apiService.post<any>("DieuTriNoiTru/LuuPhieuSoKet15NgayDieuTri", self.noiTruHoSoKhacSoKet15NgayDieuTri).subscribe(
                (result) => {
                 
                  if(result.Id != undefined)
                  {
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                    self.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result.Id;
                    this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
                  }
                  if(result.Id === undefined)
                  {
                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                    self.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result;
                    this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
                  }
                  self.checkDieuKienThemPhieuSoKet = true;
                  self.getDanhSachSoKet();
                  self.Huy();
                },
                (err: ApiError) => {
                  self.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                  }
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
  ngayThucHienChange() {
    if (this.phieuSoKet15NgayDieuTri.NgayThucHien != null) {
      this.phieuSoKet15NgayDieuTri.NgayThucHien = this.phieuSoKet15NgayDieuTri.NgayThucHien;
      // this.phieuSoKet15NgayDieuTri.NgayThucHienText = CommonService.formatDate(this.phieuSoKet15NgayDieuTri.NgayThucHien, "dd/mm/yyyy");
    }
  }
  // update 1/6 /2021
  tuNgayChange() {

  }
  denNgayChange() {

  }
  getTaiKhoanDangNhap(){
    var self = this;
       self.apiService.post<any>("DieuTriNoiTru/GetTenDangNhap").subscribe(
            (result) => {
                this.tenTaiKhoanDangNhap = result;
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
  }
  ThemPhieu() {

    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn thêm mới phiếu sơ kết 15 ngày điều trị không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.checkDieuKienThemPhieuSoKet = false;
        this.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
        // clear file
        this.phieuSoKet15NgayDieuTri.FileChuKy = undefined;

        // this.upload15NgayDieuTri.clearFiles();
        const thongTinHoSo = JSON.stringify(self.phieuSoKet15NgayDieuTri);
        self.noiTruHoSoKhacSoKet15NgayDieuTri.Id = 0;
        self.noiTruHoSoKhacSoKet15NgayDieuTri.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
        self.noiTruHoSoKhacSoKet15NgayDieuTri.LoaiHoSoDieuTriNoiTru = 5;
        self.noiTruHoSoKhacSoKet15NgayDieuTri.ThongTinHoSo = thongTinHoSo;
        this.getTaiKhoanDangNhap();
        self.phieuSoKet15NgayDieuTri.TaiKhoanDangNhap = self.tenTaiKhoanDangNhap;
        let validatorsPhieuSoKet15NgayDieuTri = {
          TuNgay: self.phieuSoKet15NgayDieuTri.TuNgay,
          DenNgay: self.phieuSoKet15NgayDieuTri.DenNgay,
          NgayThucHien: self.phieuSoKet15NgayDieuTri.NgayThucHien,
          TruongKhoa: self.phieuSoKet15NgayDieuTri.TruongKhoa,
          BSDieuTri: self.phieuSoKet15NgayDieuTri.BSDieuTri
        };
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTri?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
              this.getTaiKhoanDangNhap();
              this.checkDieuKienThemPhieuSoKet = false;
              this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = 0;
              self.phieuSoKet15NgayDieuTri = result;
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
      }

      this.ref.detectChanges();
    },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  viewDataSoKet(data: any) {
    var self = this;
    self.phieuSoKet15NgayDieuTri = new PhieuSoKet15NgayDieuTri();
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuSoKet15NgayDieuTriViewDS?noiTruHoSoKhacId=" + data).subscribe(
      (result) => {
        if (result != null) {
          this.checkDieuKienThemPhieuSoKet = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuSoKet15NgayDieuTri = thongTinHoSo;
          if(self.phieuSoKet15NgayDieuTri.NgayThucHien != null){
            self.phieuSoKet15NgayDieuTri.NgayThucHienText = self.phieuSoKet15NgayDieuTri.NgayThucHienText;
          }
          this.noiTruHoSoKhacSoKet15NgayDieuTri.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacSoKet15NgayDieuTri.Id);
          self.phieuSoKet15NgayDieuTri.FileChuKy = [...result.ListFile];
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  setDataGridView() {
    this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
    {
      this.gridChild.setDataSource();
    }
     
  }
  xoaSoKet(dataItem){
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn xóa phiếu sơ kết 15 ngày điều trị này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.apiService.post<any>("DieuTriNoiTru/xoaSoKet?Id="+ dataItem.Id).subscribe(
          (result) => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.getDanhSachSoKet();
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
