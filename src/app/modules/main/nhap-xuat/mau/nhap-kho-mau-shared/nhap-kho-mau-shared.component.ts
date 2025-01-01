import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KetQuaXetNghiemKhac, NhapKhoMauChiTiet, PhieuNhapKhoMau, TrangThaiDuyetNhapKhoMau } from '../mau.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/sharp-edit';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-nhap-kho-mau-shared',
  templateUrl: './nhap-kho-mau-shared.component.html',
  styleUrls: ['./nhap-kho-mau-shared.component.scss']
})
export class NhapKhoMauSharedComponent implements OnInit {

  icDelete = icDelete;
  icEdit = icEdit;
  icAddCircle = icAddCircle;

  documentype: DocumentType;
  baseRoute: string = "/nhap-xuat/mau/nhap-kho";
  popupLoadingData: any;

  gridDataSource: any = {
    data: [],
    total: 0
  };
  gridColumns: any[] = [];

  validationErrorsChiTiet: any;
  phieuNhapKhoMau: PhieuNhapKhoMau = new PhieuNhapKhoMau();
  phieuNhapKhoMauChiTiet: NhapKhoMauChiTiet = new NhapKhoMauChiTiet();

  @ViewChild('maTuiMauTemplate', { static: true }) maTuiMauTemplate: TemplateRef<any>;
  @ViewChild('ngaySanXuatTemplate', { static: true }) ngaySanXuatTemplate: TemplateRef<any>;
  @ViewChild('ngayLamXNHoaHopTemplate', { static: true }) ngayLamXNHoaHopTemplate: TemplateRef<any>;
  @ViewChild('hanSuDungTemplate', { static: true }) hanSuDungTemplate: TemplateRef<any>;
  @ViewChild('benhNhanTuyenMauTemplate', { static: true }) benhNhanTuyenMauTemplate: TemplateRef<any>;
  @ViewChild('ketQuaKhacTemplate', { static: true }) ketQuaKhacTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @Input() validationErrors: any;
  @Output() trangThaiYeuCau: EventEmitter<TrangThaiDuyetNhapKhoMau> = new EventEmitter<TrangThaiDuyetNhapKhoMau>();
  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.documentype = DocumentType.NhapKhoMau;
    this.phieuNhapKhoMau.NhapKhoMauChiTiets = new Array<NhapKhoMauChiTiet>();
    
    this.huyThongTinMau();

    let id = this.route.snapshot.params.id;
    id = (id === undefined || id === null) ? 0 : id;
    this.getById(id);

    this.gridColumns = [
      { Field: "MaTuiMau", Title: "Mã túi máu", Width: 80, Template: this.maTuiMauTemplate },
      { Field: "TenDichVu", Title: "Chế phẩm máu", Width: 120},
      { Field: "TenNhomMau", Title: "Nhóm máu túi máu", Width: 70 },
      { Field: "NgaySanXuat", Title: "Ngày sản xuất", Width: 90, Template: this.ngaySanXuatTemplate },
      { Field: "NgayLamXetNghiemHoaHop", Title: "Ngày làm XN hòa hợp", Width: 90, Template: this.ngayLamXNHoaHopTemplate },
      { Field: "NguoiLamXetNghiemHoaHop", Title: "Người làm XN hòa hợp", Width: 90 },
      { Field: "HanSuDung", Title: "HSD", Width: 90, Template: this.hanSuDungTemplate },
      { Field: "TenKetQuaXetNghiemSotRet", Title: "Sốt rét", Width: 60},
      { Field: "TenKetQuaXetNghiemGiangMai", Title: "Giang mai", Width: 60},
      { Field: "TenKetQuaXetNghiemHCV", Title: "HCV", Width: 60},
      { Field: "TenKetQuaXetNghiemHBV", Title: "HBV", Width: 60},
      { Field: "TenKetQuaXetNghiemHIV", Title: "HIV", Width: 60},
      // { Field: "TenKetQuaPhanUngCheoOngI", Title: "KQ phản ứng chéo ống I", Width: 60},
      // { Field: "TenKetQuaPhanUngCheoOngII", Title: "KQ phản ứng chéo ống II", Width: 60},
      // { Field: "TenKetQuaXetNghiemMoiTruongMuoi", Title: "Môi trường muối", Width: 60},
      // { Field: "TenKetQuaXetNghiem37oCKhangGlubulin", Title: "37o C/Kháng glubin", Width: 60},
      // { Field: "TenKetQuaXetNghiemNAT", Title: "NAT", Width: 60},
      { Field: "KetQuaXetNghiemKhacs", Title: "Kết quả khác", Width: 240, Template: this.ketQuaKhacTemplate},
      // { Field: "NguoiThucHien1", Title: "Người thực hiện 1", Width: 90 },
      // { Field: "NguoiThucHien2", Title: "Người thực hiện 2", Width: 90 },
      { Field: "TenBenhNhanTruyenMau", Title: "Xuất cho người bệnh", Width: 120, Template: this.benhNhanTuyenMauTemplate },
      { Field: "Action", Title: "", Width: 70, Template: this.actionTemplate }
    ]
  }

  getById(id: number) {

    this.showPopupLoadingData();
    this.apiService.get<PhieuNhapKhoMau>("NhapKhoMau/GetPhieuNhapKhoMau?id=" + id)
      .subscribe((resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.phieuNhapKhoMau = resultData;
          this.trangThaiYeuCau.emit(new TrangThaiDuyetNhapKhoMau(this.phieuNhapKhoMau.TenTrangThai, this.phieuNhapKhoMau.DuocKeToanDuyet));
          this.gridDataSource.data = this.phieuNhapKhoMau.NhapKhoMauChiTiets;
          this.closePopupLoadingData();
        }
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
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

  getData() {
    this.phieuNhapKhoMau.NhapKhoMauChiTiets.forEach((element, index) => {
      element.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x != element).map(({ MaTuiMau }) => MaTuiMau);
      element.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x != element).map(({ YeuCauTruyenMauId }) => YeuCauTruyenMauId);
    });
    return this.phieuNhapKhoMau;
  }

  changeLoaiNguoiGiao(){
    this.phieuNhapKhoMau.NguoiGiaoId = this.phieuNhapKhoMau.TenNguoiGiao = null;
  }

  huyThongTinMau(){
    this.phieuNhapKhoMauChiTiet = new NhapKhoMauChiTiet();
    this.phieuNhapKhoMauChiTiet.NgayNhap = new Date();
    this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs = new Array<KetQuaXetNghiemKhac>();
    this.validationErrorsChiTiet = [];
  }

  themKetQuaXetNghiemKhac(){
    this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.push(new KetQuaXetNghiemKhac());
  }

  getLength(){
    return Array(this.phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.length % 5);
  }

  chonChePhamMau(event)
  {
    if(event != undefined && event != null)
    {
      this.phieuNhapKhoMauChiTiet.TenMauVaChePham = event.DisplayName;
    }
    else
    {
      this.phieuNhapKhoMauChiTiet.TenMauVaChePham = null;
    }
  }

  chonNhomMau(event){
    if(event != undefined && event != null)
    {
      this.phieuNhapKhoMauChiTiet.TenNhomMau = event.DisplayName;
    }
    else
    {
      this.phieuNhapKhoMauChiTiet.TenNhomMau = null;
    }
  }

  chonYeuToRh(event){
    if(event != undefined && event != null)
    {
      this.phieuNhapKhoMauChiTiet.TenYeuToTh = event.DisplayName;
    }
    else
    {
      this.phieuNhapKhoMauChiTiet.TenYeuToTh = null;
    }
  }

  chonYeuCauTruyenMau(event)
  {
    if(event != undefined && event != null)
    {
      this.phieuNhapKhoMauChiTiet.ThongTinYeuCauTruyenMau = event;
      this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = event.HoTen;
      this.phieuNhapKhoMauChiTiet.MaDichVu = event.MaChePhamMau;
      this.phieuNhapKhoMauChiTiet.TenDichVu = event.TenChePhamMau;
      this.phieuNhapKhoMauChiTiet.MauVaChePhamId = event.ChePhamMauId;
      this.phieuNhapKhoMauChiTiet.PhanLoaiMau = event.PhanLoaiMau;
      this.phieuNhapKhoMauChiTiet.TheTich = event.TheTich;
    }
    else
    {
      this.phieuNhapKhoMauChiTiet.ThongTinYeuCauTruyenMau = null;
      this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = null;
      this.phieuNhapKhoMauChiTiet.MaDichVu = null;
      this.phieuNhapKhoMauChiTiet.TenDichVu = null;
      this.phieuNhapKhoMauChiTiet.MauVaChePhamId = null;
      this.phieuNhapKhoMauChiTiet.PhanLoaiMau = null;
      this.phieuNhapKhoMauChiTiet.TheTich = null;
    }
  }
  chonNguoiLamXNHP(event)
  {
    
    if(event != undefined && event != null)
    {
      this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = event.KeyId;
      this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop =  event.DisplayName;
    }
    else
    {
      this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = null;
      this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop =  null;
    }
  }

  themThongTinMau() {
    this.validationErrorsChiTiet = [];
    this.cdRef.detectChanges;
    
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Add)) {
      this.phieuNhapKhoMauChiTiet.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.map(({MaTuiMau}) => MaTuiMau);
      this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.map(({YeuCauTruyenMauId}) => YeuCauTruyenMauId);
      this.apiService.post<NhapKhoMauChiTiet>("NhapKhoMau/KiemTraValidationThemMauVaChePham", this.phieuNhapKhoMauChiTiet).subscribe(res => {      
        this.phieuNhapKhoMau.NhapKhoMauChiTiets.push(res);
        this.huyThongTinMau();
      }, err => {
        this.validationErrorsChiTiet = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  capNhatThongTinMau() {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      let index = this.phieuNhapKhoMauChiTiet.Index;
      let chiTiet = this.phieuNhapKhoMau.NhapKhoMauChiTiets[index];
      if (chiTiet != undefined && chiTiet != null) {
        this.phieuNhapKhoMauChiTiet.MaTuiMauDangNhaps = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x.Index != index).map(({ MaTuiMau }) => MaTuiMau);
        this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauIdDangChons = this.phieuNhapKhoMau.NhapKhoMauChiTiets.filter(x => x.Index != index).map(({ YeuCauTruyenMauId }) => YeuCauTruyenMauId);
        this.apiService.post<NhapKhoMauChiTiet>("NhapKhoMau/KiemTraValidationThemMauVaChePham", this.phieuNhapKhoMauChiTiet).subscribe(res => {
          this.phieuNhapKhoMau.NhapKhoMauChiTiets[index] = Object.assign({}, res);
          this.huyThongTinMau();
        }, err => {
          this.validationErrorsChiTiet = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        })
      }
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaNhapMauChiTiet(index) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Delete)) {
      if (this.phieuNhapKhoMau.NhapKhoMauChiTiets != null && this.phieuNhapKhoMau.NhapKhoMauChiTiets.length > 0) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            this.phieuNhapKhoMau.NhapKhoMauChiTiets.splice(index, 1);
          }
        });
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  suaNhapMauChiTiet(dataItem, index)
  {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      if (this.phieuNhapKhoMau.NhapKhoMauChiTiets != null && this.phieuNhapKhoMau.NhapKhoMauChiTiets.length > 0) {
        this.validationErrorsChiTiet = [];
        dataItem.Index = index;
        this.phieuNhapKhoMauChiTiet.MauVaChePhamId = dataItem.MauVaChePhamId;
        setTimeout(() => {
          this.phieuNhapKhoMauChiTiet = Object.assign({}, dataItem);
          this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHopId = dataItem.NguoiLamXetNghiemHoaHopId;
          this.phieuNhapKhoMauChiTiet.NguoiLamXetNghiemHoaHop = dataItem.NguoiLamXetNghiemHoaHop;
          this.phieuNhapKhoMauChiTiet.TenMauVaChePham = dataItem.TenMauVaChePham;
        }, 300);
        // this.phieuNhapKhoMauChiTiet.YeuCauTruyenMauId = dataItem.YeuCauTruyenMauId;
        // this.phieuNhapKhoMauChiTiet.TenBenhNhanTruyenMau = dataItem.TenBenhNhanTruyenMau;
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaKetQuaXetNghiemKhac(phieuNhapKhoMauChiTiet, index)
  {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Delete)) {
      if (phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs != null && phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.length > 0) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            phieuNhapKhoMauChiTiet.KetQuaXetNghiemKhacs.splice(index, 1);
          }
        });
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  clearValidateErrorOtherCallback(event: any) {
    CommonService.clearValidateErrorOtherCallback(this, event);
  }
}
