import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanHopDongKhamChonFilePopupComponent } from '../kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component';
import { KhamDoanHopDongKhamTimNhanVienPopupComponent } from '../kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component';
import { HopDongKhamSucKhoeNhanVien, NgheCongViecTruocDay, TienSuBenh } from '../kham-doan-hop-dong-kham.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { ThongTinNhanVienPopupComponent } from '../thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-kham-doan-hop-dong-kham-list-nhan-vien-popup',
  templateUrl: './kham-doan-hop-dong-kham-list-nhan-vien-popup.component.html',
  styleUrls: ['./kham-doan-hop-dong-kham-list-nhan-vien-popup.component.scss']
})
export class KhamDoanHopDongKhamListNhanVienPopupComponent implements OnInit {
  icClose = icClose;
  icDelete = icDelete;
  icSearch = icSearch;
  icAdd = icAdd;
  loadingPopup: any;
  documentType: DocumentType;
  validationErrors: any = [];
  validationDichVuErrors: any = [];
  hopDongKhamSucKhoeId: number = 0;
  public hopDongNhanVienKhamSucKhoeId = 0;

  gridCongViecColumns: any = [];
  dataSourceCongViec: any = {
    data: [],
    total: 0
  }

  gridTienSuBenhColumns: any = [];
  dataSourceTienSuBenh: any = {
    data: [],
    total: 0
  }

  benhNhanId: number = 0;
  format: string = 'n2';
  popupLoadingData: any;
  danhSachNhanVienCongTy = new HopDongKhamSucKhoeNhanVien();

  @ViewChild('congViecTemplate', { static: true }) congViecTemplate: TemplateRef<any>;
  @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
  @ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;

  @ViewChild('loaiTienSuBenhTemplate', { static: true }) loaiTienSuBenhTemplate: TemplateRef<any>;
  @ViewChild('benhNgheNghiepTemplate', { static: true }) benhNgheNghiepTemplate: TemplateRef<any>;
  @ViewChild('tenBenhTemplate', { static: true }) tenBenhTemplate: TemplateRef<any>;
  @ViewChild('phatHienNamTemplate', { static: true }) phatHienNamTemplate: TemplateRef<any>;
  @ViewChild('actionTienSuBenhTemplate', { static: true }) actionTienSuBenhTemplate: TemplateRef<any>;
  @ViewChild('footerTienSuBenhTemplate', { static: true }) footerTienSuBenhTemplate: TemplateRef<any>;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;

  @ViewChild('comboboxQuanHuyenHoKhau', { static: true }) comboboxQuanHuyenHoKhau: ComboboxComponent;
  @ViewChild('comboboxPhuongXaHoKhau', { static: true }) comboboxPhuongXaHoKhau: ComboboxComponent;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<KhamDoanHopDongKhamListNhanVienPopupComponent>
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanHopDongKham;

    this.hopDongNhanVienKhamSucKhoeId = this.data.Id;
    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;

    if (this.hopDongNhanVienKhamSucKhoeId != 0) {
      this.getDataHopDongKhamSucKhoeNhanVien(this.hopDongNhanVienKhamSucKhoeId);
    }
    this.gridCongViecColumns = [
      { Field: "CongViec", Title: "Công việc", Width: 100, Sortable: true, Template: this.congViecTemplate },
      { Field: "TuNgay", Title: "Từ ngày", Width: 100, Sortable: true, Template: this.tuNgayTemplate, TemplateFooter: this.footerTemplate },
      { Field: "DenNgay", Title: "Đến ngày", Width: 100, Sortable: true, Template: this.denNgayTemplate },
      { Field: "", Title: "", Width: 100, Sortable: true, Template: this.actionTemplate }
    ];

    this.gridTienSuBenhColumns = [
      { Field: "LoaiTienSuBenh", Title: "Loại tiền sử bệnh", Width: 100, Sortable: true, Template: this.loaiTienSuBenhTemplate },
      { Field: "BenhNgheNghiep", Title: "Bệnh nghề nghiệp", Width: 100, Sortable: true, Template: this.benhNgheNghiepTemplate },
      { Field: "TenBenh", Title: "Tên bệnh", Width: 100, Sortable: true, Template: this.tenBenhTemplate, TemplateFooter: this.footerTienSuBenhTemplate },
      { Field: "PhatHienNam", Title: "Phát hiện năm", Width: 100, Sortable: true, Template: this.phatHienNamTemplate },
      { Field: "", Title: "", Width: 100, Sortable: true, Template: this.actionTienSuBenhTemplate }
    ];


  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined
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

  loaiTienSuBenhChange(dataItem: any, rowIndex: any) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSuId = dataItem.KeyId;
      this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSu = dataItem.DisplayName;
    }
    else {
      this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSuId = null;
      this.dataSourceTienSuBenh.data[rowIndex].LoaiTienSu = null;
    }
  }

  xuLyLuuNhanVienCongTy() {
    this.validationErrors = [];
		this.cdRef.detectChanges();
    
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.danhSachNhanVienCongTy.HopDongKhamSucKhoeId = this.hopDongKhamSucKhoeId;
      if (this.dataSourceCongViec.data.length > 0) {
        this.danhSachNhanVienCongTy.NgheCongViecTruocDays = this.dataSourceCongViec.data;
      }
      if (this.dataSourceTienSuBenh.data.length > 0) {
        this.danhSachNhanVienCongTy.TienSuBenhs = this.dataSourceTienSuBenh.data;
      }     
      if (this.benhNhanId != 0) { this.danhSachNhanVienCongTy.BenhNhanId = this.benhNhanId }      
      this.apiService.post<any>("KhamDoan/ThemHoacCapNhatHopDongKhamSucKhoeNhanVien", this.danhSachNhanVienCongTy).subscribe(res => {
        if (res != 0) {
          this.dialogRef.close("Yes");
        }
      }, err => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  NhapTuFileExcel() {
    this.showLoadingPopup();
    this.dialog.open(KhamDoanHopDongKhamChonFilePopupComponent, {
      disableClose: false,
      width: '800px'
    }).afterClosed().subscribe(result => {
      this.closeAllDialogs();
    });
  }

  benhNgheNghiepChange(dataItem: any) {
    
    if (dataItem != undefined && dataItem != null) {
      //this.dataSourceCongViec.data[rowIndex].TenBenh = dataItem.DisplayName;  
    }
    else {
      //this.dataSourceCongViec.data[rowIndex].TenBenh = null;     
    }
  }

  ThemCongViecTruocDo() {  
    this.dataSourceCongViec.data.push(new NgheCongViecTruocDay());
  }

  xoaCongViecTruocDo(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceCongViec.data.splice(this.dataSourceCongViec.data.findIndex((x: any) => x == item), 1);
      }
    });
  }

  ThemTienSuBenh() {
    var model =  new TienSuBenh();
    model.Id= this.dataSourceTienSuBenh.data.length + 1
    this.dataSourceTienSuBenh.data.push(model);
  }

  xoaTienSuBenh(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.dataSourceTienSuBenh.data.splice(this.dataSourceTienSuBenh.data.findIndex((x: any) => x == item), 1);
      }
    });
  }

  mangThai(mangThai: any) {
    if (mangThai) {
      this.danhSachNhanVienCongTy.GioiTinh = GioiTinh.Nu;
    }
    else {
      this.danhSachNhanVienCongTy.GioiTinh = null;
    }
  }

  showPopupTimNhanVien() {
    this.dialog.open(KhamDoanHopDongKhamTimNhanVienPopupComponent, {
      disableClose: false,
      width: '1600px'
    }).afterClosed().subscribe(result => {
      if (result !== undefined && result !== null) {
        this.danhSachNhanVienCongTy = null;
        this.danhSachNhanVienCongTy = result;
        this.benhNhanId = result.Id;

        let nam = new Date(result.NgayThangNamSinh);
        this.danhSachNhanVienCongTy.Id = 0;
        if (result.NgayThangNamSinh != null) {
          this.danhSachNhanVienCongTy.NamSinh = nam.getFullYear();
          this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - nam.getFullYear();
        }
        if (result.NamSinh != null) {
          this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - result.NamSinh;
        }
        this.danhSachNhanVienCongTy.GioiTinh = result.GioiTinh == 1 ? GioiTinh.Nam : GioiTinh.Nu;
        this.danhSachNhanVienCongTy.BenhNhanId = result.Id;
        this.danhSachNhanVienCongTy.MaBN = result.MaBN;
      }
    });
  }

  TinhThanhPhoChange(event) {
    if (event == undefined || event == null) {
      this.danhSachNhanVienCongTy.QuanHuyenId = null;
      this.danhSachNhanVienCongTy.PhuongXaId = null;
    }
  }

  QuanHuyenChange(event) {
    if (event == undefined || event == null) {
      this.danhSachNhanVienCongTy.PhuongXaId = null;
    }
  }

  PhuongXaChange(event) {
    this.danhSachNhanVienCongTy.PhuongXaId = event;
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.danhSachNhanVienCongTy.TinhThanhId = resultData.TinhThanhId;
          this.danhSachNhanVienCongTy.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.danhSachNhanVienCongTy.TinhThanhId = null;
      this.danhSachNhanVienCongTy.QuanHuyenId = null;
    }
  }


  TinhThanhPhoHoKhauChange(event) {
    if (event == undefined || event == null) {
      this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = null;
      this.danhSachNhanVienCongTy.HoKhauPhuongXaId = null;
    }
  }

  QuanHuyenHoKhauChange(event) {
    if (event == undefined || event == null) {
      this.danhSachNhanVienCongTy.HoKhauPhuongXaId = null;
    }
  }
  PhuongXaHoKhauChange(event) {
    this.danhSachNhanVienCongTy.HoKhauPhuongXaId = event;
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.danhSachNhanVienCongTy.HoKhauTinhThanhId = resultData.TinhThanhId;
          this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyenHoKhau.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.danhSachNhanVienCongTy.HoKhauTinhThanhId = null;
      this.danhSachNhanVienCongTy.HoKhauQuanHuyenId = null;
    }
  }

  ThongTinBenhNhanNgaySinhChange(event) {
    if (this.danhSachNhanVienCongTy.NgayThangNamSinh != null) {
      this.danhSachNhanVienCongTy.NamSinh = this.danhSachNhanVienCongTy.NgayThangNamSinh.getFullYear();
      this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - this.danhSachNhanVienCongTy.NamSinh;
    }
    else{
      this.danhSachNhanVienCongTy.NgayThangNamSinh = null;
    }
  }

  ThongTinBenhNhanNamSinhChange(event: any) {
    this.danhSachNhanVienCongTy.Tuoi = new Date().getFullYear() - event;
  }

  getDataHopDongKhamSucKhoeNhanVien(id: number) {
    this.showPopupLoadingData();
    this.apiService.get<any>("KhamDoan/GetThongTinHopDongKhamSucKhoeNhanVien?hopDongKhamSucKhoeNhanVienId=" + id).subscribe(
      (resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.danhSachNhanVienCongTy = resultData;         
          this.dataSourceCongViec.data = resultData.NgheCongViecTruocDays != null ? resultData.NgheCongViecTruocDays : [];
          this.dataSourceTienSuBenh.data = resultData.TienSuBenhs != null ? resultData.TienSuBenhs : [];
          this.closePopupLoadingData();
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      }
    );
  }


  close() {
    this.dialogRef.close();
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
