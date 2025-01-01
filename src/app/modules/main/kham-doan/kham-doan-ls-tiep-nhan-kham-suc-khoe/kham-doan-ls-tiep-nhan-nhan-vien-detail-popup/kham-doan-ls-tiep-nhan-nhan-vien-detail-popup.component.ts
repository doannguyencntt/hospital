import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { YeuCauTiepNhanKhamSucKhoe,ChiTietKhamSucKhoeCuaNhanVien } from '../kham-doan-ls-tiep-nhan-kham-suc-khoe.model';
import { TrangThaiYeuCauTiepNhan } from 'src/app/shared/enum/kham-doan.enum';

@Component({
  selector: 'app-kham-doan-ls-tiep-nhan-nhan-vien-detail-popup',
  templateUrl: './kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.html',
  styleUrls: ['./kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component.scss']
})
export class KhamDoanLsTiepNhanNhanVienDetailPopupComponent implements OnInit {
  icClose = icClose;
  icDelete = icDelete;

  documentType: DocumentType = DocumentType.KhamDoanTiepNhan;
  validationErrors: any = [];
  validationDichVuErrors: any = [];
  format: string = 'n2';
  popupLoadingData: any;

  gridColumns: any[] = [];
  gridColumnDichVuThems: any[] = [];
  groupThemDichVus: GroupDescriptor[] = [{ field: 'NhomDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  groups: GroupDescriptor[] = [{ field: 'NhomDichVu', dir: null }];

  thongTinHanhChinhNhanVien: YeuCauTiepNhanKhamSucKhoe = new YeuCauTiepNhanKhamSucKhoe();
  yeuCauTiepNhanHoanThanh: TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan.DaHoanTat;
  isHoanThanhKham: boolean = true;

  // đây là biến tạm, cần cập nhật lại
  daBatDauKham: boolean = false;
  //-------------------------------
  
  @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienThemDichVuTemplate', { static: true }) noiThucHienThemDichVuTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<KhamDoanLsTiepNhanNhanVienDetailPopupComponent>
  ) { }

  ngOnInit() {
    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien = new ChiTietKhamSucKhoeCuaNhanVien();
    this.getDataNhanVien(this.data.Id);

    this.gridColumnDichVuThems = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 70},
      { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên DV", Width: 160 },
      { Field: "LoaiGia", Title: "Loại giá", Width: 90, Template: this.loaiGiaTemplate},
      { Field: "SoLuong", Title: "SL", Width: 90, Template: this.soLuongTemplate},
      { Field: "DonGia", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaGroupFooterTemplate},
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.thanhTienGroupFooterTemplate},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienThemDichVuTemplate},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate},
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate}
    ]

    this.gridColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 70},
      { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên DV", Width: 160 },
      { Field: "LoaiGia", Title: "Loại giá", Width: 90},
      { Field: "SoLuong", Title: "SL", Width: 90},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienTemplate},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate},
      { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate}
    ]
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

  getDataNhanVien(id: number) {
    this.showPopupLoadingData();
    this.apiService
      .get<YeuCauTiepNhanKhamSucKhoe>("KhamDoan/GetThongTinHanhChinhNhanVien?hopDongKhamNhanVienId=" + id)
      .subscribe(
        (resultData) => {
          this.thongTinHanhChinhNhanVien = resultData;
          this.isHoanThanhKham = this.thongTinHanhChinhNhanVien.TrangThaiYeuCauTiepNhan == TrangThaiYeuCauTiepNhan.DaHoanTat;
          this.closePopupLoadingData();
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

  xuLyInHoSo(){
    this.close(1);
  }

  TinhThanhPhoChange(event) {
    if (event == undefined || event == null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
    }
  }

  QuanHuyenChange(event) {
    if (event == undefined || event == null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
    }
  }

  PhuongXaChange(event) {
    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = event;
    if (event != null && event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(
        resultData => {
          this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = resultData.TinhThanhId;
          this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        (err: any) => {
        });
    }
    else {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = null;
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
    }
  }

  ThongTinBenhNhanNgaySinhChange(event) {
    if (this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh != null) {
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh.getFullYear();
      this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Tuoi = new Date().getFullYear() - this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
    }
  }

  close(result = null)
  {
    this.dialogRef.close(result);
  }
}
