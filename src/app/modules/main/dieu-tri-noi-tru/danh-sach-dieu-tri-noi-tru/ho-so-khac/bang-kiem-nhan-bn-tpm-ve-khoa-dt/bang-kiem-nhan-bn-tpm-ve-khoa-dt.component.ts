import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild,Input,Output,EventEmitter } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClear from '@iconify/icons-ic/twotone-clear';
import { BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu, LookupQueryInfo, NoiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu, ExportQueryInfoQueryInfo,FileChuKyModel } from './bang-kiem-nhan-nguoi-benh-tu-pm.model';
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
import { BangKiemNbAtPhauThuatDtPopupComponent } from './bang-kiem-nb-at-phau-thuat-dt-popup/bang-kiem-nb-at-phau-thuat-dt-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
declare var $: any;
@Component({
  selector: 'app-bang-kiem-nhan-bn-tpm-ve-khoa-dt',
  templateUrl: './bang-kiem-nhan-bn-tpm-ve-khoa-dt.component.html',
  styleUrls: ['./bang-kiem-nhan-bn-tpm-ve-khoa-dt.component.scss']
})
export class BangKiemNhanBnTpmVeKhoaDtComponent implements OnInit {
  bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = {} as BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu;
  noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu: NoiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu;
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
  multiselectQueryInfo = new LookupQueryInfo();
  getNhanVienId: any;
  validationErrors: any = [];
  gridDataSource: any = {
    data:[],
    total: 0
  };
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();  
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  tenTaiKhoanDangNhap : string ="";
  @ViewChild('Grid', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
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
    this.gridColumns = [
      { Field: "", Title: "#", Width: 15, Template: this.sttTemplate },
      { Field: "Ngay", Title: "Ngày bàn giao", Width: 50, Template: this.tuNgayTemplate },
      { Field: "HoTenPTV", Title: "Họ tên PTV", Width: 50 },
      { Field: "Action", Title: "Bảng kiểm bà giao sau PT", Width: 50, Template: this.actionTemplate }
    ];
    this.multiselectQueryInfo.ParameterDependencies = "",
      this.multiselectQueryInfo.Id = id;
    this.multiselectQueryInfo.Take = 50;
    this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = new BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu();
    this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = new NoiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu();
    this.get();
    this.getDanhSach();
    this.getData();
    this.getNhanVienId = this.authService.getAccessUser();
  }
  get() {
    this.apiService.post<any>("DieuTriNoiTru/GetDanhSachPhauThuatVien").subscribe(
      (result) => {
        this.dataDSNhanVien = result;
      });
    // this.apiService.post<any>("DieuTriNoiTru/GetDanhSachCheDoChamSoc").subscribe(
    //   (result) => {
    //     this.dataCheDoChamSoc = result;
    //   });
    setTimeout(() => {
      $('kendo-textbox-container > kendo-multiselect .k-multiselect-wrap.k-floatwrap').css('margin-top', '20px');
      $('kendo-textbox-container > kendo-multiselect').css('background-color', '#F2F2F2');
    }, 50);
  }
  ngayNhanChange(event: any) {
    
    if(this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id == 0 && this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id == null){
      let newDate = new Date();
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan = newDate;
      if(newDate != null)
      {
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhanUTC = CommonService.formatDateTime(newDate, "mm/dd/yyyy");
      }
      else{
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhanUTC = null;
      }
    }
    else{
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan = event;
      if(event != null)
      {
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhanUTC = CommonService.formatDateTime(event, "mm/dd/yyyy");
      }
      else{
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhanUTC = null;
      }
    }

   
   this.validator();
  }
  validator(){
    let dateNow = new Date();
    this.validationErrors = [];
    if (dateNow < this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan) {
      this.validationErrors.push({
        Message: "Ngày nhận không hợp lệ.",
        Field: "NgayNhan",
      });
    }
  }
  In() { 
    var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id,
      YeuCauTiepNhanId: this.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 18,
    }
      if(this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id == 0)
      {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: "500px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có in bảng kiểm an toàn người bệnh phẩu thuật về khoa điều trị này không?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            const thongTinHoSo = JSON.stringify(this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu);
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.LoaiHoSoDieuTriNoiTru = 18;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.ThongTinHoSo = thongTinHoSo;
            
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan;
            self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanPhauThuatTuPhongDieuTri", self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu).subscribe(
              (result) => {
                if(result != null)
                {
                dataIn.NoiTruHoSoKhacId = result.Id;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.checkDieuKienThemPhieu = true;
                self.getData();
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InBangKiemAnToanNguoiBenhPTVeKhoaDieuTri", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(BangKiemNbAtPhauThuatDtPopupComponent, {
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
                let dateNow = new Date();
                this.validationErrors = [];
                if (dateNow < self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan) {
                  this.validationErrors.push({
                    Message: "Ngày nhận không hợp lệ.",
                    Field: "NgayNhan",
                  });
                }
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
            Message: "Bạn có in bảng kiểm an toàn người bệnh phẩu thuật về khoa điều trị này không?",
          },
        }).afterClosed().subscribe((res) => {
          if (res == "Yes") {
            const thongTinHoSo = JSON.stringify(this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu);
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.LoaiHoSoDieuTriNoiTru = 18;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.ThongTinHoSo = thongTinHoSo;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao;
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan;
            self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanPhauThuatTuPhongDieuTri", self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu).subscribe(
              (result) => {
                if(result != null)
                {
                dataIn.NoiTruHoSoKhacId = result;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                self.checkDieuKienThemPhieu = true;
                self.getData();
                self.Huy();
                self.apiService.post<any>("DieuTriNoiTru/InBangKiemAnToanNguoiBenhPTVeKhoaDieuTri", dataIn).subscribe(
                  (result) => {
                          self.dialog.open(BangKiemNbAtPhauThuatDtPopupComponent, {
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
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
      }
  }
  Huy() {
    var self = this;
    this.getDanhSach();
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinBenhNhanPtVephongDieuTri?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          this.checkDieuKienThemPhieu = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          thongTinHoSo.FileChuKy = [...result.ListFile];
          self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = thongTinHoSo;
          self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id);
          ///result.ListFile.forEach(val => self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy.push(Object.assign({}, val)));
          this.ref.detectChanges();
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
    const thongTinHoSo = JSON.stringify(this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu);
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.LoaiHoSoDieuTriNoiTru = 18;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.ThongTinHoSo = thongTinHoSo;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayNhan;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiGiao;
    self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan = self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NguoiNhan;
    // validate truoc khi luu 
    //update
    //
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu lại bảng kiểm an toàn người bệnh phẩu thuật từ phòng điều trị này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.apiService.post<any>("DieuTriNoiTru/LuuBangKiemAnToanPhauThuatTuPhongDieuTri", self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu).subscribe(
          (result) => {
            self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = result.Id;
            if(self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id == 0)
            {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            }
            else{
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
            }
           
            self.checkDieuKienThemPhieu = true;
            self.getData();
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
  getDanhSach() {
    var self = this;
    self.exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString();
    self.apiService.post<any>("DieuTriNoiTru/GetDanhSachNguoiBenhAnToanPTTuPhongDieuTri", self.exportQueryInfoQueryInfo).subscribe(
      (result) => {
        self.gridDataSource = {
          data: result.Data,
          total: result.Data.length
        };
        if(self.gridDataSource.total == 0){
          self.checkDieuKienThemPhieu = false;
        }
        self.setDataGridView();
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
      this.gridChild.setDataSource();
  }
  getData() {
    var self = this;
    this.getDanhSach();
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinBenhNhanPtVephongDieuTri?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          self.checkDieuKienThemPhieu = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          thongTinHoSo.FileChuKy = [...result.ListFile];
          self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = thongTinHoSo;
          self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id);
          ///result.ListFile.forEach(val => self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy.push(Object.assign({}, val)));
          console.log('self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy', self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy);
          this.ref.detectChanges();
        }
        else {
          self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = new BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu();

          let nhanVienThucHienId = self.getNhanVienId.Id;
          self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
            (result) => {

              self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.TaiKhoanDangNhap = result.TenNhanVien;
              self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayThucHien = result.NgayThucHien;
              self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = 0;
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
  viewData(data: any) {
    var self = this;
    this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = new BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu();
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinBenhNhanPtVephongDieuTriViewDS?noiTruHoSoKhacId=" + data.Id).subscribe(
      (result) => {
        if (result != null) {
          this.checkDieuKienThemPhieu = true;
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = thongTinHoSo;
          this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = result.Id;
          this.returnId.emit(this.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id);
          self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy = [...result.ListFile];
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  xoa(dataItem) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn xóa phiếu bảng kiểm an toàn người bệnh phẩu thuật từ phòng điều trị này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.apiService.post<any>("DieuTriNoiTru/xoaBangKiemAnToanPhauThuatTuPhongDieuTri?Id=" + dataItem.Id).subscribe(
          (result) => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.getDanhSach();
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
        Message: "Bạn có muốn thêm mới bảng kiểm an toàn người bệnh phẩu thuật từ phòng điều trị này không?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        this.checkDieuKienThemPhieu = false;
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu = new BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu();
        this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.FileChuKy = new Array<FileChuKyModel>();
        const thongTinHoSo = JSON.stringify(self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu);
        self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.Id = 0;
        self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
        self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.LoaiHoSoDieuTriNoiTru = 5;
        self.noiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.ThongTinHoSo = thongTinHoSo;
        this.getTaiKhoanDangNhap();
        self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.TaiKhoanDangNhap = self.tenTaiKhoanDangNhap;
        let nhanVienThucHienId = self.getNhanVienId.Id;
        self.apiService.post<any>("DieuTriNoiTru/GetTenNguoiThucHien?idNguoiLogin=" + self.getNhanVienId.Id + "&yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
          (result) => {

            self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.TaiKhoanDangNhap = result.TenNhanVien;
            self.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NgayThucHien = result.NgayThucHien;
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
  onChangeketqua(dataItem){
   this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.SoMauBenhPham = dataItem;
  }
  changeTruyenDich(dataItem){
    if(dataItem == false)
    {
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.ViTri = null;
    }
  }
  changeTuTrangBenhNhan(dataItem){
    if(dataItem == false)
    {
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.NhapTuTrang = null;
    }
  }
  changeGiaiPhauBenh(dataItem){
    if(dataItem == false)
    {
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.SoMauBenhPham = null;
    }
  }
  changeBVHT(event,index)
  {
    if(index == 1 && event == true){
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.BV == true;
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.HT == false ;
    }
    if(index == 2 && event == true){
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.BV == false;
      this.bangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu.HT == true ;
    }
  }
}
