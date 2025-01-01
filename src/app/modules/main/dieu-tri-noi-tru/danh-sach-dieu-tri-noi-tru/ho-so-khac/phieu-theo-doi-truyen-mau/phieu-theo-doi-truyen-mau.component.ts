import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuTheoDoiTruyenMau, NoiTruHoSoKhacPhieuTheoDoiTruyenMau, DachSachTruyenMau, LookupQueryInfo, phieuTheoDoiTruyenMauMessage } from './phieu-theo-doi-tm.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClear from '@iconify/icons-ic/twotone-clear';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuTheoDoiTruyenMauPopupComponent } from './phieu-theo-doi-truyen-mau-popup/phieu-theo-doi-truyen-mau-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
  selector: 'app-phieu-theo-doi-truyen-mau',
  templateUrl: './phieu-theo-doi-truyen-mau.component.html',
  styleUrls: ['./phieu-theo-doi-truyen-mau.component.scss']
})
export class PhieuTheoDoiTruyenMauComponent implements OnInit {
  phieuTheoDoiTruyenMau = {} as PhieuTheoDoiTruyenMau;
  noiTruHoSoKhacPhieuTheoDoiTruyenMau: NoiTruHoSoKhacPhieuTheoDoiTruyenMau;
  queryinfo: LookupQueryInfo = new LookupQueryInfo();
  documentType: DocumentType;
  dataSourceDanhSach: any = {
    data: [],
    total: 0
  };
  format: string = 'n2';
  validationErrors: any;
  validationErrorsHuyetAp: any[] = [];
  listGridValidateHuyetAp: any;
  gridColumns: any[] = [];
  current: Date = new Date();
  icAdd = icAdd;
  icDelete = icDelete;
  icAddCircle = icAddCircle;
  icEdit = icEdit;
  icSave = icSave;
  icClear = icClear;
  yeuCauTiepNhanId: number = 0;
  getNhanVienId: any;
  dataNhanVien: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  @ViewChild('thoiGianTemplate', { static: true }) thoiGianTemplate: TemplateRef<any>;
  @ViewChild('tocDoTruyenTemplate', { static: true }) tocDoTruyenTemplate: TemplateRef<any>;
  @ViewChild('mauSacDaNiemMacTemplate', { static: true }) mauSacDaNiemMacTemplate: TemplateRef<any>;
  @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
  @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
  @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
  @ViewChild('machTemplate', { static: true }) machTemplate: TemplateRef<any>;
  @ViewChild('dienBienKhacTemplate', { static: true }) dienBienKhacTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('grid', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private cdRef: ChangeDetectorRef) { }


  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.noiTruHoSoKhacPhieuTheoDoiTruyenMau = new NoiTruHoSoKhacPhieuTheoDoiTruyenMau();
    this.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = new Array<DachSachTruyenMau>();
    this.queryinfo = new LookupQueryInfo();

    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.gridColumns = [
      { Field: "ThoiGian", Title: "Thời gian", Width: 120, Template: this.thoiGianTemplate },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền(giọt/phút)", Width: 150, Template: this.tocDoTruyenTemplate },
      { Field: "MauSacDaNiemMac", Title: "Màu sắc da - niêm mạc", Width: 150, Template: this.mauSacDaNiemMacTemplate },
      { Field: "NhipTho", Title: "Nhịp thở (l/phút)", Width: 120, Template: this.nhipThoTemplate },
      { Field: "ThanNhiet", Title: "Thân nhiệt (°C)", Width: 120, Template: this.thanNhietTemplate },
      { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 120, Template: this.huyetApTemplate },
      { Field: "Mach", Title: "Mạch (l/phút)", Width: 120, Template: this.machTemplate },
      { Field: "DienBienKhac", Title: "Diễn biến khác", Width: 120, Template: this.dienBienKhacTemplate },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
    if (this.yeuCauTiepNhanId != 0) {
      this.getById(this.yeuCauTiepNhanId);
      this.getNhanVien();
    }
  }
  getNhanVien() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa", this.queryinfo).subscribe(
      (result) => {
        this.dataNhanVien = result;
      });
  }

  themDanhSachTruyenMau() {
    let newItem = new DachSachTruyenMau();
    this.dataSourceDanhSach.data.push(newItem);
  }
  xoa(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceDanhSach.data.splice(this.dataSourceDanhSach.data.findIndex(x => x == item), 1);
        this.themDanhSachTruyenMau();
      }
    });

  }
  onChangeSLMauTruyenThucTe(event: number) {
    this.phieuTheoDoiTruyenMau.SLMauTruyenThucTe = event;
  }
  ngungTruyenHoiChange() {

  }
  getById(id: number) {
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuTheoDoiTruyenMau?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuTheoDoiTruyenMau = thongTinHoSo;
          self.dataSourceDanhSach.data = thongTinHoSo.DachSachTruyenMauArr;
          self.dataSourceDanhSach.total = thongTinHoSo.DachSachTruyenMauArr.length;
          if (self.phieuTheoDoiTruyenMau.MaDonViMauTruyenId != 0) {

          }
          self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id);
          self.phieuTheoDoiTruyenMau.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuTheoDoiTruyenMau = new PhieuTheoDoiTruyenMau();
          this.themDanhSachTruyenMau();
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetThongTinDefaultPhieuTheoDoiTruyenMauCreate?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
              self.phieuTheoDoiTruyenMau.TaiKhoanDangNhap = result.TenNhanVien;
              self.phieuTheoDoiTruyenMau.NgayThucHien = result.NgayThucHien;
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
  getPhieuTheoDoiTruyenMau() {

  }
  onChangeLanTruyenMauThu(soLan: number) {
    this.phieuTheoDoiTruyenMau.LanTruyenMauThu = soLan;
  }
  changeMaDonVimau(event) {
    var self = this;
    if (  event != this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId) {

      this.phieuTheoDoiTruyenMau = new PhieuTheoDoiTruyenMau();
      this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId = event;

      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau = new NoiTruHoSoKhacPhieuTheoDoiTruyenMau();
      this.dataSourceDanhSach = {
        data: [],
        total: 0
      };
      if(event != undefined)
      {
        self.apiService.post<any>("DieuTriNoiTru/GetDanhSachMaDonViMau?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId + "&MaDVMID=" + event).subscribe(
          (result) => {
            if (result != null) {
              this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId = result[0].KeyId;
              this.phieuTheoDoiTruyenMau.DisplayName = result[0].DisplayName;
              this.getItemPhieuTruyenMau(event,this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId,this.phieuTheoDoiTruyenMau.DisplayName);
            }
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
          })
      }
    }
  }
  getItemPhieuTruyenMau(item:any,maDonViMauTruyenId:any,displayName:any){
    this.validationErrors = [];
    // show cái cuối cùng
    this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuTheoDoiTruyenMauSoSanhMaDonViMau?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&maDonViMauId=" + item).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          this.phieuTheoDoiTruyenMau = thongTinHoSo;
          this.dataSourceDanhSach.data = thongTinHoSo.DachSachTruyenMauArr;
          this.dataSourceDanhSach.total = thongTinHoSo.DachSachTruyenMauArr.length;
          if (this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId != 0) {

          }
          this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id);
          this.phieuTheoDoiTruyenMau.FileChuKy = [...result.ListFile];
        }
        else {
          this.phieuTheoDoiTruyenMau = new PhieuTheoDoiTruyenMau();
          this.phieuTheoDoiTruyenMau.MaDonViMauTruyenId = maDonViMauTruyenId;
          this.phieuTheoDoiTruyenMau.DisplayName = displayName;
          this.themDanhSachTruyenMau();
          let nhanVienThucHienId = this.getNhanVienId.Id;
          this.apiService.post<any>("DieuTriNoiTru/GetThongTinDefaultPhieuTheoDoiTruyenMauCreate?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(
            (result) => {
              this.phieuTheoDoiTruyenMau.TaiKhoanDangNhap = result.TenNhanVien;
              this.phieuTheoDoiTruyenMau.NgayThucHien = result.NgayThucHien;
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  ChangebatDauTruyen(event) {
    if (event != undefined && event != null && event != "") {
      this.phieuTheoDoiTruyenMau.BatDauTruyenHoiStringUTC = CommonService.formatDateTime(this.phieuTheoDoiTruyenMau.BatDauTruyenHoi, "dd/mm/yyyy");
    }
    else {
      this.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = null;
    }
  }
  ChangeNgungTruyenHoi(event) {
    if (event != undefined && event != null && event != "") {
      this.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = CommonService.formatDateTime(this.phieuTheoDoiTruyenMau.NgungTruyenHoi, "dd/mm/yyyy");
    }
    else {
      this.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = null;
    }
  }
  Luu() {
    var self = this;
    self.validationErrors = [];
    self.cdRef.detectChanges();
    let isSave: boolean = true;
    self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = self.dataSourceDanhSach.data;

    self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
      if ((element.HuyetAp1 != null && element.HuyetAp2 == null) || (element.HuyetAp1 == null && element.HuyetAp2 != null)) {
        self.notificationService.showError("Huyết áp không được để trống");
        isSave = false;
      }
    });
    if (isSave == true) {
      if (self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.length == 0) {
        self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = null;
      }
      else {
        self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
          element.HuyetAp = element.HuyetAp1 + "/" + element.HuyetAp2;
        });
      }
      self.phieuTheoDoiTruyenMau.BatDauTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.BatDauTruyenHoi), "dd/mm/yyyy");
      if (self.phieuTheoDoiTruyenMau.NgungTruyenHoi != null) {
        self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.NgungTruyenHoi), "dd/mm/yyyy");
      }
      else {
        self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = null;
      }
      const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenMau);
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
      self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.FileChuKy = self.phieuTheoDoiTruyenMau.FileChuKy;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.LoaiHoSoDieuTriNoiTru = 27;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.ThongTinHoSo = thongTinHoSo;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.MaDonViMauTruyenId = self.phieuTheoDoiTruyenMau.MaDonViMauTruyenId;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.BatDauTruyenHoi = self.phieuTheoDoiTruyenMau.BatDauTruyenHoi;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.DDTruyenMauId = self.phieuTheoDoiTruyenMau.DDTruyenMauId;
      this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.NgungTruyenHoi = self.phieuTheoDoiTruyenMau.NgungTruyenHoi;

      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn lưu lại phiếu theo dõi truyền máu này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenMau", self.noiTruHoSoKhacPhieuTheoDoiTruyenMau).subscribe(
            (result) => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
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
  }
  Huy() {
    var self = this;
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuTheoDoiTruyenMauSoSanhMaDonViMau?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId + "&maDonViMauId=" + self.phieuTheoDoiTruyenMau.MaDonViMauTruyenId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuTheoDoiTruyenMau = thongTinHoSo;
          self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id);
          self.dataSourceDanhSach = {
            data: thongTinHoSo.DachSachTruyenMauArr,
            total: thongTinHoSo.DachSachTruyenMauArr.length
          };
          self.phieuTheoDoiTruyenMau.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuTheoDoiTruyenMau = new PhieuTheoDoiTruyenMau();
          this.themDanhSachTruyenMau();
          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetThongTinDefaultPhieuTheoDoiTruyenMauCreate?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {
              self.phieuTheoDoiTruyenMau.TaiKhoanDangNhap = result.TenNhanVien;
              self.phieuTheoDoiTruyenMau.NgayThucHien = result.NgayThucHien;
              self.dataSourceDanhSach = {
                data: [],
                total: 0
              };
              let newItem = new DachSachTruyenMau();
              this.dataSourceDanhSach.data.push(newItem);
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
  In() {
    var self = this;
    self.validationErrors = [];
    self.cdRef.detectChanges();
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 27,
    }
    if (this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.Id == 0) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu theo dõi truyền máu  này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          let isSave: boolean = true;
          self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = self.dataSourceDanhSach.data;
          self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
            if ((element.HuyetAp1 != null && element.HuyetAp2 == null) || (element.HuyetAp1 == null && element.HuyetAp2 != null)) {
              self.notificationService.showError("Huyết áp không được để trống");
              isSave = false;
            }
          });
          if (isSave == true) {
            if (self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.length == 0) {
              self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = null;
            }
            else {
              self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
                element.HuyetAp = element.HuyetAp1 + "/" + element.HuyetAp2;
              });
            }

            self.phieuTheoDoiTruyenMau.BatDauTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.BatDauTruyenHoi), "dd/mm/yyyy");
            if (self.phieuTheoDoiTruyenMau.NgungTruyenHoi != null) {
              self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.NgungTruyenHoi), "dd/mm/yyyy");
            }
            else {
              self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = null;
            }
            const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenMau);
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.FileChuKy = self.phieuTheoDoiTruyenMau.FileChuKy;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.LoaiHoSoDieuTriNoiTru = 27;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.ThongTinHoSo = thongTinHoSo;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.MaDonViMauTruyenId = self.phieuTheoDoiTruyenMau.MaDonViMauTruyenId;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.BatDauTruyenHoi = self.phieuTheoDoiTruyenMau.BatDauTruyenHoi;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.DDTruyenMauId = self.phieuTheoDoiTruyenMau.DDTruyenMauId;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.NgungTruyenHoi = self.phieuTheoDoiTruyenMau.NgungTruyenHoi;

            self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenMau", self.noiTruHoSoKhacPhieuTheoDoiTruyenMau).subscribe(
              (result) => {
                if (result != null) {

                  dataIn.NoiTruHoSoKhacId = result;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.Huy();
                  self.apiService.post<any>("DieuTriNoiTru/InPhieuTheoDoiTruyenMau", dataIn).subscribe(
                    (result) => {
                      self.dialog.open(PhieuTheoDoiTruyenMauPopupComponent, {
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
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu theo dõi truyền máu  này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {

          self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = self.dataSourceDanhSach.data;
          let isSave: boolean = true;
          self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
            if ((element.HuyetAp1 != null && element.HuyetAp2 == null) || (element.HuyetAp1 == null && element.HuyetAp2 != null)) {
              self.notificationService.showError("Huyết áp không được để trống");
              isSave = false;
            }
          });
          if (isSave == true) {
            if (self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.length == 0) {
              self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr = null;
            }
            else {
              self.phieuTheoDoiTruyenMau.DachSachTruyenMauArr.forEach(element => {
                element.HuyetAp = element.HuyetAp1 + "/" + element.HuyetAp2;
              });
            }
            self.phieuTheoDoiTruyenMau.BatDauTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.BatDauTruyenHoi), "dd/mm/yyyy");
            if (self.phieuTheoDoiTruyenMau.NgungTruyenHoi != null) {
              self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = CommonService.formatDateTime(new Date(self.phieuTheoDoiTruyenMau.NgungTruyenHoi), "dd/mm/yyyy");
            }
            else {
              self.phieuTheoDoiTruyenMau.NgungTruyenHoiStringUTC = null;
            }

            const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenMau);
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacPhieuTheoDoiTruyenMau.FileChuKy = self.phieuTheoDoiTruyenMau.FileChuKy;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.LoaiHoSoDieuTriNoiTru = 27;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.ThongTinHoSo = thongTinHoSo;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.MaDonViMauTruyenId = self.phieuTheoDoiTruyenMau.MaDonViMauTruyenId;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.BatDauTruyenHoi = self.phieuTheoDoiTruyenMau.BatDauTruyenHoi;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.DDTruyenMauId = self.phieuTheoDoiTruyenMau.DDTruyenMauId;
            this.noiTruHoSoKhacPhieuTheoDoiTruyenMau.NgungTruyenHoi = self.phieuTheoDoiTruyenMau.NgungTruyenHoi;
            self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenMau", self.noiTruHoSoKhacPhieuTheoDoiTruyenMau).subscribe(
              (result) => {
                if (result != null) {

                  dataIn.NoiTruHoSoKhacId = result;
                  self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                  self.Huy();
                  self.apiService.post<any>("DieuTriNoiTru/InPhieuTheoDoiTruyenMau", dataIn).subscribe(
                    (result) => {
                      self.dialog.open(PhieuTheoDoiTruyenMauPopupComponent, {
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
