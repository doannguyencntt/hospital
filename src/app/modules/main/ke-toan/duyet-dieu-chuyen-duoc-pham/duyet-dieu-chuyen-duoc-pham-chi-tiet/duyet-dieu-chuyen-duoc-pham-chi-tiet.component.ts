import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { YeuCauDieuChuyenDuocPham, YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch, YeuCauDieuChuyenDuocPhamPhieuIn } from '../../../nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { Location } from '@angular/common';
import { KhongDuyetPopupComponent } from '../../../nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/khong-duyet-popup/khong-duyet-popup.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DieuChuyenKhoNoiBoDuocPhamPopupComponent } from '../../../nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component';

@Component({
  selector: 'app-duyet-dieu-chuyen-duoc-pham-chi-tiet',
  templateUrl: './duyet-dieu-chuyen-duoc-pham-chi-tiet.component.html',
  styleUrls: ['./duyet-dieu-chuyen-duoc-pham-chi-tiet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetDieuChuyenDuocPhamChiTietComponent implements OnInit {
  yeuCauDieuChuyenDuocPham: YeuCauDieuChuyenDuocPham = new YeuCauDieuChuyenDuocPham();
  yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch: YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch = new YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch();
  icSearch = icSearch;
  documentType: DocumentType = DocumentType.DanhSachDuyetDieuChuyenNoiBoDuocPham;
  yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();

  gridColumnsUpdateDuyet: any[] = [];
  urlGetDataDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsyncDaTaoYeuCau";
  urlGetTotalDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsyncDaTaoYeuCau";

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('soLuongXuatGrid2Template', { static: true }) soLuongXuatGrid2Template: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid3Template', { static: true }) thanhTienFooterGrid3Template: TemplateRef<any>;
  @ViewChild('gridDuocPhamDieuChuyenDaTaoYeuCau', { read: GridComponent, static: false }) gridDuocPhamDieuChuyenDaTaoYeuCau: GridComponent;
  searchCtrl = new FormControl;

  groups: GroupDescriptor[] = [{ field: 'TenNhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  dataToSumThanhTien: any[] = [];
  validationErrors: any;
  popupLoadingData: any = null;
  popupSavingData: any = null;

  yeuCauDieuChuyenDuocPhamId: number = 0;

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }


  };

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.yeuCauDieuChuyenDuocPhamId = id;
      this.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
    }
    this.gridColumnsUpdateDuyet = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
      { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid3Template, },
    ];
  }

  searchChangesDaTaoYeuCau(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.TimkiemNangCao(this.yeuCauDieuChuyenDuocPhamId);
    }
  }

  TimkiemNangCao(yeuCauDieuChuyenDuocPhamId: number = null) {
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.KhoXuatId = this.yeuCauDieuChuyenDuocPham.KhoXuatId;
    this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.YeuCauDieuChuyenDuocPhamId = yeuCauDieuChuyenDuocPhamId;
    var queryString = JSON.stringify(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch);
    this.gridDuocPhamDieuChuyenDaTaoYeuCau._additionalSearchString = queryString;
    this.gridDuocPhamDieuChuyenDaTaoYeuCau.search();
  }

  onKeyGridDaTaoYeuCau(event: any) {
    if (event.key == "Enter") {
      this.TimkiemNangCao(this.yeuCauDieuChuyenDuocPhamId);
    }
  }

  onDataBoundChild(data: any) {
    if (data != undefined && data != null) {
      this.dataToSumThanhTien = data.Data;
    }
  }

  addingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.addingPage();
      self.apiService.get<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/GetYeuCauDieuChuyenThuoc?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            self.closepopupLoadingData();
            self.yeuCauDieuChuyenDuocPham = resultData;
            self.TimkiemNangCao(resultData.Id);
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closepopupLoadingData();
        });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  duyetDieuChuyenThuoc() {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn duyệt yêu cầu điều chuyển này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.savingPage();
          self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/XuLyDuyetDieuChuyenThuocAsync?yeuCauDieuChuyenDuocPhamId=" + self.yeuCauDieuChuyenDuocPhamId)
            .subscribe(() => {
              self.closepopupSavingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
              self.cancel();
            },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closepopupSavingData();
              });
        }
        else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  khongDuyetDieuChuyenThuoc() {
    this.dialog.open(KhongDuyetPopupComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn từ chối duyệt yêu cầu điều chuyển này không ?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
          this.savingPage();
          this.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/XuLyKhongDuyetDieuChuyenThuocAsync?yeuCauDieuChuyenDuocPhamId=" + this.yeuCauDieuChuyenDuocPhamId + "&lyDoKhongDuyet=" + result)
            .subscribe(() => {
              this.closepopupSavingData();
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Không duyệt"]));
              this.cancel();
            },
              (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  this.notificationService.showError(err.Message);
                }
                this.closepopupSavingData();
              });
        }
        else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }

      }
    });
  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }


  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  inPhieu() {
    var self = this;
    self.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
    self.loadingPage();
    self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: resData,
          }).afterClosed().subscribe(() => {
            // self.location.back();
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      })
  }

  cancel() {
    this.location.back();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
