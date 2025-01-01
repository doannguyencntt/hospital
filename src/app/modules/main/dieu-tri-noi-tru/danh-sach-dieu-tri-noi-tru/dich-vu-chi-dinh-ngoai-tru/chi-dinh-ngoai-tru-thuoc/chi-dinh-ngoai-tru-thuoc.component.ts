import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-chi-dinh-ngoai-tru-thuoc',
  templateUrl: './chi-dinh-ngoai-tru-thuoc.component.html',
  styleUrls: ['./chi-dinh-ngoai-tru-thuoc.component.scss']
})
export class ChiDinhNgoaiTruThuocComponent implements OnInit {

  icDelete = icDelete;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  popupLoadingData: any;
  validationErrors: any;

  gridVTTHThuocColumns: any[] = [];
  gridDataSourceVTTHThuoc: any = {};

  groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'TenDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  public totalGhiNhanVTTHThuoc(field: any) {
    if (this.gridDataSourceVTTHThuoc.data != undefined) {
      switch (field) {
        case 'ThanhTien':
          return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
    }
  };

  @ViewChild('actionVTTHThuocTemplate', { static: true }) actionVTTHThuocTemplate: TemplateRef<any>;
  @ViewChild('stttTemplate', { static: true }) stttTemplate: TemplateRef<any>;
  @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
  @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
  @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;

  @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() yeuCauTiepNhanNgoaiTruid: number;
  @Input() nhomDichVu: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DuocPham;
  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.gridVTTHThuocColumns = [
      { Field: "Action", Title: "", Width: 100, Template: this.actionVTTHThuocTemplate },
      { Field: "STT", Title: "#", Width: 20, Template: this.stttTemplate },
      { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
      { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", MinWidth: 150, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
      { Field: "TenKho", Title: "Tên kho", Width: 150 },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
      { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100 },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100 },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['yeuCauTiepNhanNgoaiTruid']
      && changes['yeuCauTiepNhanNgoaiTruid'].previousValue != changes['yeuCauTiepNhanNgoaiTruid'].currentValue) {
      this.getGridDataGhiNhanVTHHThuoc();
    }
  }

  // 1: loading, 2: update data
  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = "";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.Cancel:
        mess = "Đang hủy dữ liệu..."; break;
      default: mess = "Đang tải dữ liệu...";
    }
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: mess }
    });
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  getGridDataGhiNhanVTHHThuoc(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.View, showLoadingPopup: boolean = true) {
    if (showLoadingPopup) {
      this.showPopupLoadingData(typeLoadingData);
    }

    var objInfo = {
      YeuCauTiepNhanId: this.yeuCauTiepNhanNgoaiTruid,
      NhomDichVuId: this.nhomDichVu
    }

    var url = "DieuTriNoiTru/GetGridDataGhiNhanVTTHThuocChiDinhNgoaiTru";
    this.apiService.post<any>(url, objInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSourceVTTHThuoc = {
          data: resultData,
          total: resultData.length
        }
        this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc
        this.gridChildVTTHThuoc.setDataSource();
        this.closePopupLoadingData();
      }
      else {
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

  XoaGhiNhanVTTHThuoc(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.showPopupLoadingData(EnumTypeLoadingData.Delete);
          let gridItem = {
            YeuCauTiepNhanId: this.yeuCauTiepNhanNgoaiTruid,
            YeuCauGhiNhanId: dataItem.Id
          }

          this.apiService.put<any>("DieuTriNoiTru/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
          },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
