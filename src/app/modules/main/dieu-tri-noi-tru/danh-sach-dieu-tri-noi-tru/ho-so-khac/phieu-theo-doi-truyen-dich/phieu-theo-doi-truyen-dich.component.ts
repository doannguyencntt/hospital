import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PhieuTheoDoiTruyenDich, DachSachTruyenDich, NoiTruHoSoKhacPhieuTheoDoiTruyenDich, DuocPhamTruyenDich, LookupQueryInfo, Thuoc, TenThuoc, TenThuocValidator, ListTenThuocValidator } from './phieu-theo-doi-truyen-dich.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAddCircle from '@iconify/icons-ic/add-circle';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icSave from '@iconify/icons-ic/outline-save';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ExportQueryInfoQueryInfo } from 'src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhieuTheoDoiTruyenDichPopupComponent } from './phieu-theo-doi-truyen-dich-popup/phieu-theo-doi-truyen-dich-popup.component';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { every } from 'rxjs/operators';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { ElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'app-phieu-theo-doi-truyen-dich',
  templateUrl: './phieu-theo-doi-truyen-dich.component.html',
  styleUrls: ['./phieu-theo-doi-truyen-dich.component.scss']
})
export class PhieuTheoDoiTruyenDichComponent implements OnInit {
  phieuTheoDoiTruyenDich = {} as PhieuTheoDoiTruyenDich;
  noiTruHoSoKhacPhieuTheoDoiTruyenDich: NoiTruHoSoKhacPhieuTheoDoiTruyenDich;
  duocPhamTruyenDich = new Array<DuocPhamTruyenDich>();
  queryinfo: LookupQueryInfo = new LookupQueryInfo();
  queryinfoCombo: LookupQueryInfo = new LookupQueryInfo();
  documentType: DocumentType;
  dataSourceDanhSach: any = {
    data: [],
    total: 0
  };
  dataSourceDanhSachDuPhongAdd: any = {
    data: [],
    total: 0
  };
  timeout = null;
  validationErrors: any;
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
  disableItemAdd: boolean = false;
  dataDuocPham: any;
  tenDichTruyen: string = "";
  tenTruyenDichDuocThem: string = "";
  tinhSoLuongDuocPhamEdit: number = 0;
  tinhSoLuongDuocPhamDefault: number = 0;
  kiemTraDuocThem: boolean = false;
  timeChonUpdate: Date = null;
  timeChonUpdateString: string = null;
  ngay: any;
  dataNhanVien: any;
  kiemTraValidate: boolean = false
  checkKhiIn: boolean = false;
  allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
  isCheck: boolean = false;
  listThuocChange = new Array<TenThuoc>();
  listThuocChangeValidator = new Array<TenThuocValidator>();
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() returnId: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('ngayTemplate', { static: true }) ngayTemplate: TemplateRef<any>;
  @ViewChild('tenDichTruyenTemplate', { static: true }) tenDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('batDauTemplate', { static: true }) batDauTemplate: TemplateRef<any>;
  @ViewChild('ketThucTemplate', { static: true }) ketThucTemplate: TemplateRef<any>;

  @ViewChild('loTemplate', { static: true }) loTemplate: TemplateRef<any>;
  @ViewChild('tocDoTemplate', { static: true }) tocDoTemplate: TemplateRef<any>;
  @ViewChild('yTaThucHienTemplate', { static: true }) yTaThucHienTemplate: TemplateRef<any>;
  @ViewChild('bSChiDinhTemplate', { static: true }) bSChiDinhTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('grid', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }


  ngOnInit() {
    this.documentType = DocumentType.DanhSachDieuTriNoiTru;
    this.noiTruHoSoKhacPhieuTheoDoiTruyenDich = new NoiTruHoSoKhacPhieuTheoDoiTruyenDich();
    this.phieuTheoDoiTruyenDich.DachSachTruyenDichArr = new Array<DachSachTruyenDich>();
    const id: number = this.dieuTriNoiTruModel.Id;
    this.yeuCauTiepNhanId = id;
    this.getNhanVienId = this.authService.getAccessUser();
    this.gridColumns = [
      { Field: "NgayThu", Title: "Ngày", Width: 120, Template: this.ngayTemplate },
      { Field: "TenDichTruyen", Title: "Tên dịch truyền", Width: 120, Template: this.tenDichTruyenTemplate },
      { Field: "SoLuong", Title: "Số lượng", Width: 150, Template: this.soLuongTemplate },
      { Field: "LoSoSX", Title: "Lô/số SX", Width: 90, Template: this.loTemplate },
      { Field: "TocDo", Title: "Tốc độ", Width: 120, Template: this.tocDoTemplate, TemplateFooter: this.footerTemplate },
      { Field: "BatDau", Title: "Bắt đầu", Width: 120, Template: this.batDauTemplate },
      { Field: "KetThuc", Title: "Kết thúc", Width: 120, Template: this.ketThucTemplate },
      { Field: "BSChiDinh", Title: "Bác sĩ chỉ định", Width: 120, Template: this.bSChiDinhTemplate },
      { Field: "YTaThucHien", Title: "Y tá thực hiện", Width: 120, Template: this.yTaThucHienTemplate },
      { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
    ];
    if (this.yeuCauTiepNhanId != 0) {
      this.getById(this.yeuCauTiepNhanId);
      this.queryinfoCombo.ParameterDependencies = this.yeuCauTiepNhanId.toString();
      this.getNhanVien();
    }
  }
  getNhanVien() {
    this.apiService.post<any>("DieuTriNoiTru/GetChuToa", this.queryinfo).subscribe(
      (result) => {
        this.dataNhanVien = result;
      });
  }
  getById(id: number) {

    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuTheoDoiTruyenDich?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuTheoDoiTruyenDich = thongTinHoSo;
          self.dataSourceDanhSach.data = thongTinHoSo.DachSachTruyenDichArr
          self.dataSourceDanhSach.total = thongTinHoSo.DachSachTruyenDichArr.length;
          self.duocPhamTruyenDich = thongTinHoSo.DachSachTruyenDichArrDefault;
          self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id);
          self.phieuTheoDoiTruyenDich.FileChuKy = [...result.ListFile];
        }
        else {
          self.phieuTheoDoiTruyenDich = new PhieuTheoDoiTruyenDich();
          let exportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
          exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString();
          self.apiService.post<any>("DieuTriNoiTru/GetDataDanhSachTruyenDichForGridAsync", exportQueryInfoQueryInfo).subscribe(
            (result) => {
              if (result != null) {
                self.phieuTheoDoiTruyenDich.TaiKhoanDangNhap = result.TenNhanVien;
                self.phieuTheoDoiTruyenDich.NgayThucHien = result.NgayThucHien;
                self.phieuTheoDoiTruyenDich.ChanDoan = result.ChanDoan;
                
                // self.dataSourceDanhSach.data = result.ListPhieuTheoDoiTruyenDich
                // self.dataSourceDanhSach.total = result.ListPhieuTheoDoiTruyenDich.length;
                // self.duocPhamTruyenDich = result.ListPhieuTheoDoiTruyenDichDefault;
                // self.duocPhamTruyenDich.forEach(elements => {
                //   self.dataSourceDanhSach.data.forEach(element => {
                //     let ngay = CommonService.formatDate(new Date(element.NgayThu), "mm/dd/yyyy");
                //     let ngayEdit = CommonService.formatDate(new Date(elements.NgayThu), "mm/dd/yyyy");
                //     if (element.TenDuocPhamTruyenDich == elements.TenDuocPhamTruyenDich && ngay == ngayEdit) {
                //       element.FistCheck = false;
                //     }
                //   });
                // });

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
  themDanhSachTruyenDich() {
    this.kiemTraDuocThem = true;
    this.disableItemAdd = true;
    let newItem = new DachSachTruyenDich();
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
      }
    });

  }
  changeKetThuc(dataItem) {
    if (dataItem != undefined && dataItem != null) {
      if (dataItem.KetThuc < dataItem.BatDau) {
        this.notificationService.showError("Thời gian kết thúc không hợp lệ");
      }
    }
  }
  changeDichTruyen(event: any, data: any) {
    var self = this;
    if (event != null || event != undefined) {
      self.ngay = event;
      this.disableItemAdd = false;
      if (self.kiemTraDuocThem == false) {
        self.dataDuocPham = [];
      }
      else {
        let exportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  
         if(this.dataSourceDanhSach.data.length != 0)
         {
          let checkBind :boolean  = null;
           for (let index = 0; index < this.dataSourceDanhSach.data.length; index++) {
             const element = this.dataSourceDanhSach.data[0];
              if(element.TenDichTruyen == null && element.SoLuong == null)
              {
                checkBind = true;
              }
           }
          if(checkBind == true)
          {
            exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString() + "|" + CommonService.formatDate(self.timeChonUpdate, "mm/dd/yyyy") + "|" + event + '|' + "false";
            self.apiService.post<any>("DieuTriNoiTru/GetDataBindTruyenDichTheoNgayForGridAsync", exportQueryInfoQueryInfo).subscribe(
              (result) => {
                if (result != null) {
                  data.TenTruyenDich = result.TenDuocPhamTruyenDich;
                  data.SoLuong = result.Sl;
                  data.YTaThucHien = result.YTaThucHien;
                  data.BatDau = result.BatDau;
                  data.KetThuc = result.KetThuc;
                  data.BSChiDinh = result.BSChiDinh;
                  data.LoSoSX = result.LoSoSX;
                  data.TocDo = result.TocDo;
                  data.NoiTruChiTietYLenhThucHien = result.NoiTruChiTietYLenhThucHien;
                  data.NoiTruPhieuDieuTriId = result.NoiTruPhieuDieuTriId;
                  data.NgayPhieuDieuTri = result.NgayPhieuDieuTri;
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
            exportQueryInfoQueryInfo.AdditionalSearchString = self.yeuCauTiepNhanId.toString() + "|" + CommonService.formatDate(self.timeChonUpdate, "mm/dd/yyyy") + "|" + event + '|' + "true" + "|" + this.danhSachThuocTheoNgay(self.timeChonUpdate);
            self.apiService.post<any>("DieuTriNoiTru/GetDataBindTruyenDichTheoNgayForGridAsync", exportQueryInfoQueryInfo).subscribe(
              (result) => {
                if (result != null) {
                  data.TenTruyenDich = result.TenDuocPhamTruyenDich;
                  data.SoLuong = result.Sl;
                  data.YTaThucHien = result.YTaThucHien;
                  data.BatDau = result.BatDau;
                  data.KetThuc = result.KetThuc;
                  data.BSChiDinh = result.BSChiDinh;
                  data.LoSoSX = result.LoSoSX;
                  data.TocDo = result.TocDo;
                  data.NoiTruChiTietYLenhThucHien = result.NoiTruChiTietYLenhThucHien;
                  data.NoiTruPhieuDieuTriId = result.NoiTruPhieuDieuTriId;
                  data.NgayPhieuDieuTri = result.NgayPhieuDieuTri;
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
    }
    else {
      data.TenTruyenDich = null;
      data.SoLuong = null;
      data.YTaThucHien = null;
      data.BatDau = null;
      data.KetThuc = null;
      data.BSChiDinh = null;
      data.LoSoSX = null;
      data.TocDo = null;
      data.NoiTruPhieuDieuTriId = null;
      data.NgayPhieuDieuTri = null;
      data.NoiTruChiTietYLenhThucHien = null;
    }
  }
  ngayChange(event :any,dataItem : any) {
    var self = this;
    if (event != undefined || event != null) {
      self.timeChonUpdate = event;
      dataItem.Ngay = CommonService.formatDateTime(event, "mm/dd/yyyy");
    }
    else{
      self.timeChonUpdate = null;
      dataItem.Ngay = null;
    }
  }

  onChangeSoLuong(dataItem: any, sl: number) {
    // kiểm tra sl co vuot so luong ban dau
    let soLuong: number = 0;

  }
  Luu() {
    var self = this;
   
    let kiemTraSave = true;
   // kiem tra sl tung item list có bằng sl ban đầu

    this.validationErrors = [];
    this.listThuocChangeValidator = new Array<TenThuocValidator>();
    this.dataSourceDanhSach.data.forEach(element => {
      let date = new Date(element.NgayThu);
      let ngayThu = CommonService.formatDateTime(date, "mm/dd/yyyy");

      let thuoc = {
        YeuCauTiepNhanId: this.yeuCauTiepNhanId,
        DuocPhamId: element.IdTruyenDich != null ? element.IdTruyenDich : null,
        NgayThu: ngayThu,
        SoLuong: element.SoLuong != null ? element.SoLuong : null,
        TenDuocPham: element.TenTruyenDich != null ? element.TenTruyenDich : null,
      };
      this.listThuocChangeValidator.push(thuoc);
    });
    if(this.listThuocChangeValidator.length == 0)
    {
      this.listThuocChangeValidator = [];
    }
    let obj = new ListTenThuocValidator();
    obj.listTruyenDich = this.listThuocChangeValidator;
    this.apiService.post<any>("DieuTriNoiTru/ValidatorTotalSlKhongVuotTongBanDau", obj).subscribe(
      (result) => {
        if (result != undefined && result != null) {
          if (result == true) {
            kiemTraSave = true;
            if (kiemTraSave == true) {
              
              self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: "500px",
                data: {
                  Title: "Xác nhận",
                  Message: "Bạn có muốn lưu lại phiếu theo dõi truyền dịch này không ?",
                },
              }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                  // kiểm tra list array trống cut đi
                  if (self.dataSourceDanhSach.data != null) { 
                    self.dataSourceDanhSach.data.forEach(element => {
                      if (element.IdTruyenDich == undefined || element.IdTruyenDich == 0) {
                        self.dataSourceDanhSach.data.splice(this.dataSourceDanhSach.data.findIndex((x: any) => x == element), 1);
                      }
                    });
                  }
                  // string json
                  self.phieuTheoDoiTruyenDich.DachSachTruyenDichArr = self.dataSourceDanhSach.data;
                  self.phieuTheoDoiTruyenDich.DachSachTruyenDichArrDefault = self.duocPhamTruyenDich;
                  const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenDich);
                  this.noiTruHoSoKhacPhieuTheoDoiTruyenDich.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                  self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.FileChuKy = self.phieuTheoDoiTruyenDich.FileChuKy;
                  self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.LoaiHoSoDieuTriNoiTru = 23;
                  self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.ThongTinHoSo = thongTinHoSo;

                  self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenDich", self.noiTruHoSoKhacPhieuTheoDoiTruyenDich).subscribe(
                    (result) => {
                      self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                      self.Huy();
                      self.ref.detectChanges();
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
          else {
            kiemTraSave = false;
            this.notificationService.showError("Số lượng dịch truyền lưu lớn hơn số lượng dịch truyền chỉ định");
          }
        }
      },
      (err: ApiError) => {
        kiemTraSave = false;
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  Huy() {
    var self = this;
    // show cái cuối cùng
    self.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuTheoDoiTruyenDich?yeuCauTiepNhanId=" + self.yeuCauTiepNhanId).subscribe(
      (result) => {
        if (result != null) {
          let thongTinHoSo = JSON.parse(result.ThongTinHoSo);
          self.phieuTheoDoiTruyenDich = thongTinHoSo;
          self.dataSourceDanhSach.data = thongTinHoSo.DachSachTruyenDichArr;
          self.dataSourceDanhSach.total = thongTinHoSo.DachSachTruyenDichArr.length;
          self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id = result.Id;
          self.returnId.emit(self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id);
          self.phieuTheoDoiTruyenDich.FileChuKy = [...result.ListFile];
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  InPhieu() {
    var self = this;
    let dataIn = {
      Hosting: null,
      NoiTruHoSoKhacId: self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id,
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      LoaiHoSoDieuTriNoiTru: 23,
    }
    if (self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id == 0) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có in phiếu theo dõi truyền dịch  này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.dataSourceDanhSach.data != null) {
            self.dataSourceDanhSach.data.forEach(element => {
              if (element.IdTruyenDich == undefined || element.IdTruyenDich == 0) {
                self.dataSourceDanhSach.data.splice(this.dataSourceDanhSach.data.findIndex((x: any) => x == element), 1);
              }
            });
          }
          let kiemTraSave = true;
          // kiem tra sl tung item list có bằng sl ban đầu

          this.validationErrors = [];
          this.listThuocChangeValidator = new Array<TenThuocValidator>();
          this.dataSourceDanhSach.data.forEach(element => {
            let date = new Date(element.NgayThu);
            let ngayThu = CommonService.formatDateTime(date, "mm/dd/yyyy")

            let thuoc = {
              YeuCauTiepNhanId: this.yeuCauTiepNhanId,
              DuocPhamId: element.IdTruyenDich != null ? element.IdTruyenDich : null,
              NgayThu: ngayThu,
              SoLuong: element.SoLuong != null ? element.SoLuong : null,
              TenDuocPham: element.TenTruyenDich != null ? element.TenTruyenDich : null,
            };
            this.listThuocChangeValidator.push(thuoc);
          });
          let obj = new ListTenThuocValidator();
          obj.listTruyenDich = this.listThuocChangeValidator;

          this.apiService.post<any>("DieuTriNoiTru/ValidatorTotalSlKhongVuotTongBanDau", obj).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                if (result == true) {
                  kiemTraSave = true;
                  if (kiemTraSave == true) {
                    self.phieuTheoDoiTruyenDich.DachSachTruyenDichArr = self.dataSourceDanhSach.data;
                    self.phieuTheoDoiTruyenDich.DachSachTruyenDichArrDefault = self.duocPhamTruyenDich;
                    const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenDich);
                    this.noiTruHoSoKhacPhieuTheoDoiTruyenDich.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.FileChuKy = self.phieuTheoDoiTruyenDich.FileChuKy;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.LoaiHoSoDieuTriNoiTru = 23;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.ThongTinHoSo = thongTinHoSo;
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenDich", self.noiTruHoSoKhacPhieuTheoDoiTruyenDich).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuTheoDoiTruyenDich", dataIn).subscribe(
                            (results) => {
                              self.dialog.open(PhieuTheoDoiTruyenDichPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: results }
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
                else {
                  kiemTraSave = false;
                  this.notificationService.showError("Số lượng dịch truyền lưu không bằng số lượng dịch truyền chỉ định");
                }
              }
            },
            (err: ApiError) => {
              kiemTraSave = false;
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
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
          Message: "Bạn có in phiếu theo dõi truyền dịch  này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          if (self.dataSourceDanhSach.data != null) {
            self.dataSourceDanhSach.data.forEach(element => {
              if (element.IdTruyenDich == undefined || element.IdTruyenDich == 0) {
                self.dataSourceDanhSach.data.splice(this.dataSourceDanhSach.data.findIndex((x: any) => x == element), 1);
              }
            });
          }
          let kiemTraSave = true;
          // kiem tra sl tung item list có bằng sl ban đầu

          this.validationErrors = [];
          this.listThuocChangeValidator = new Array<TenThuocValidator>();
          this.dataSourceDanhSach.data.forEach(element => {
            let date = new Date(element.NgayThu);
            let ngayThu = CommonService.formatDateTime(date, "mm/dd/yyyy")

            let thuoc = {
              YeuCauTiepNhanId: this.yeuCauTiepNhanId,
              DuocPhamId: element.IdTruyenDich != null ? element.IdTruyenDich : null,
              NgayThu: ngayThu,
              SoLuong: element.SoLuong != null ? element.SoLuong : null,
              TenDuocPham: element.TenTruyenDich != null ? element.TenTruyenDich : null,
            };
            this.listThuocChangeValidator.push(thuoc);
          });
          let obj = new ListTenThuocValidator();
          obj.listTruyenDich = this.listThuocChangeValidator;

          this.apiService.post<any>("DieuTriNoiTru/ValidatorTotalSlKhongVuotTongBanDau", obj).subscribe(
            (result) => {
              if (result != undefined && result != null) {
                if (result == true) {
                  kiemTraSave = true;
                  if (kiemTraSave == true) {
                    self.phieuTheoDoiTruyenDich.DachSachTruyenDichArr = self.dataSourceDanhSach.data;
                    self.phieuTheoDoiTruyenDich.DachSachTruyenDichArrDefault = self.duocPhamTruyenDich;
                    const thongTinHoSo = JSON.stringify(this.phieuTheoDoiTruyenDich);
                    this.noiTruHoSoKhacPhieuTheoDoiTruyenDich.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id = self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.Id;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.FileChuKy = self.phieuTheoDoiTruyenDich.FileChuKy;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.LoaiHoSoDieuTriNoiTru = 23;
                    self.noiTruHoSoKhacPhieuTheoDoiTruyenDich.ThongTinHoSo = thongTinHoSo;
                    self.apiService.post<any>("DieuTriNoiTru/LuuPhieuTheoDoiTruyenDich", self.noiTruHoSoKhacPhieuTheoDoiTruyenDich).subscribe(
                      (result) => {
                        if (result != null) {
                          dataIn.NoiTruHoSoKhacId = result;
                          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
                          self.Huy();
                          self.apiService.post<any>("DieuTriNoiTru/InPhieuTheoDoiTruyenDich", dataIn).subscribe(
                            (results) => {
                              self.dialog.open(PhieuTheoDoiTruyenDichPopupComponent, {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: results }
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
                else {
                  kiemTraSave = false;
                  this.notificationService.showError("Số lượng dịch truyền lưu không bằng số lượng dịch truyền chỉ định");
                }
              }
            },
            (err: ApiError) => {
              kiemTraSave = false;
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
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
  danhSachThuocTheoNgay(event) {
    if (event != null) {
      if (this.dataSourceDanhSach.data != null) {
        this.listThuocChange = new Array<TenThuoc>();
        this.dataSourceDanhSach.data.forEach(element => {
          let date = new Date(element.NgayThu);
          if (date.getDay() == event.getDay() && date.getMonth() == event.getMonth() && date.getFullYear() == event.getFullYear()) {
            let thuoc = {
              IdTruyenDich: element.IdTruyenDich != null ? element.IdTruyenDich : null,
              NgayThu: event,
              SL: element.SoLuong != null ? element.SoLuong : null,
              TenDuocPham: element.TenTruyenDich != null ? element.TenTruyenDich : null,
            };

            this.listThuocChange.push(thuoc);
          }
        });
        let jsonListThuocChange = JSON.stringify(this.listThuocChange);
        return jsonListThuocChange;
      }
      else{
        this.listThuocChange = new Array<TenThuoc>();
        let thuoc = {
          IdTruyenDich:  null,
          NgayThu: event,
          SL:  null,
          TenDuocPham:  null,
        };
        this.listThuocChange.push(thuoc);
        let jsonListThuocChange = JSON.stringify(this.listThuocChange);
        return jsonListThuocChange;
      }
    }
    else {
      return null;
    }

  }
}
