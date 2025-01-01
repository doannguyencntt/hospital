import { Component, Input, NgZone, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupDescriptor, State } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GoiKhongChietKhau, TrangThaiYeuCauKhamBenhObjEnum, TrangThaiYeuCauDichVuKyThuatObjEnum } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, GridChiDinhDichVuNgoaiTruQueryInfoVo, ChiDinhNgoaiTruCanXoa } from '../../../dieu-tri-noi-tru.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icVisibility from '@iconify/icons-ic/visibility';
import icBlock from '@iconify/icons-ic/block';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/view-quilt';
import icInfo from '@iconify/icons-ic/twotone-info';
import icCheck from '@iconify/icons-ic/twotone-check';
import icHotel from '@iconify/icons-ic/baseline-hotel';
import icWarning from '@iconify/icons-ic/warning';
import icCancel from '@iconify/icons-ic/outline-cancel';
import icEditV2 from '@iconify/icons-ic/border-color';
import icReturn from '@iconify/icons-ic/arrow-upward';
import icDone from '@iconify/icons-ic/twotone-done';
import icHistory from '@iconify/icons-ic/twotone-history';
import { HuyDichVuHuyThanhToanPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CapNhatThongTinThucHienDvktPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';

@Component({
  selector: 'app-chi-dinh-ngoai-tru-dich-vu-kham-benh',
  templateUrl: './chi-dinh-ngoai-tru-dich-vu-kham-benh.component.html',
  styleUrls: ['./chi-dinh-ngoai-tru-dich-vu-kham-benh.component.scss']
})
export class ChiDinhNgoaiTruDichVuKhamBenhComponent implements OnInit {

  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icVisibility = icVisibility;
  icBlock = icBlock;
  icInfo = icInfo;
  icCheck = icCheck;
  icHotel = icHotel;
  icWarning = icWarning;
  icCancel = icCancel;
  icEditV2 = icEditV2;
  icReturn = icReturn;
  icDone = icDone;
  icHistory = icHistory;

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  popupLoadingData: any;
  baseController: string = 'DieuTriNoiTru/';

  gridColumns: any[] = [];
  goiKhongChietKhau: GoiKhongChietKhau[] = [];

  tongthanhtien: number = 0;
  tongtienBNThanhToan: number = 0;
  tenGoiChietKhau: string = "";
  tongThanhTienTrongGoi: number = 0;
  thanhTienTrongGoi: number = 0;
  tongThanhTienGoiChietKhau: number = 0;
  nhomDichVuKyThuat: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuKyThuat;

  trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
  trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('stttTemplate', { static: true }) stttTemplate: TemplateRef<any>;
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
  @ViewChild('benhPhamTemplate', { static: true }) benhPhamTemplate: TemplateRef<any>;
  @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
  @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;

  @ViewChild('GridChiDinh', { read: GridComponent, static: false }) gridChild: GridComponent;

  gridDataNotChietKhau: any;
  gridDataSource: any = {};
  public totalNotChietKhau(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
      case 'BHYTThanhToan':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
      case 'BNThanhToan':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BNThanhToan, 0);
    }
  };
  public stateNotChietKhau: State = { skip: 0, take: 15, group: [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }] }] };
  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }] }];

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() yeuCauTiepNhanNgoaiTruid: number;
  @Input() nhomDichVu: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuKhamBenh;

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    this.gridColumns = [
      { Field: "Action", Title: "", Width: 75, Template: this.actionTemplate },
      // { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "STT", Title: "#", Width: 20, Template: this.stttTemplate },
      { Field: "Ma", Title: "Mã", Width: 60 },
      { Field: "Nhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 150, ShowTooltip: true, Template: this.tenDichVuTemplate },
      { Field: "LaDichVuTrongGoi", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
      { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
      { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 80, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate },
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 150, Template: this.noiThucHienTemplate },
      { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 110, Template: this.trangThaiTemplate },
      { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 110 },
       { Field: "BenhPhamXetNghiem", Title: "Bệnh phẩm", Width: 150, Template: this.benhPhamTemplate, Hidden: this.nhomDichVu != EnumNhomGoiDichVu.DichVuKyThuat },
      { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 110 },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['yeuCauTiepNhanNgoaiTruid']
      && changes['yeuCauTiepNhanNgoaiTruid'].previousValue != changes['yeuCauTiepNhanNgoaiTruid'].currentValue) {
      this.getDataGoiDichVuDefault();
    }
  }

  // 1: loading, 2: update data
  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
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

  getDataGoiDichVuDefault() {
    this.showPopupLoadingData(EnumTypeLoadingData.View);
    this.tongthanhtien = 0;
    this.tongtienBNThanhToan = 0;
    this.tongThanhTienGoiChietKhau = 0;

    let obj = new GridChiDinhDichVuNgoaiTruQueryInfoVo(
      this.yeuCauTiepNhanNgoaiTruid,
      this.nhomDichVu
    );

    this.apiService.post<any>("DieuTriNoiTru/GetDataDefaulDichVuChiDinhNgoaiTru", obj).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);

        this.setDataGridView();
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

  getDataUpdateGripViewGoiKhac(showLoadingPopup: boolean = true) {
    if (showLoadingPopup) {
      this.showPopupLoadingData();
    }

    let obj = new GridChiDinhDichVuNgoaiTruQueryInfoVo(
      this.yeuCauTiepNhanNgoaiTruid,
      this.nhomDichVu
    );

    this.apiService.post<any>("DieuTriNoiTru/GetDataDefaulDichVuChiDinhNgoaiTru", obj).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.goiKhongChietKhau.splice(0, this.goiKhongChietKhau.length);
        if (this.gridDataSource != undefined && this.gridDataSource != null && this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
          this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
        }
        this.gridChild.setDataSource();
        var self = this;
        this.ngZone.run(() => {
          resultData.forEach(element => {
            self.goiKhongChietKhau.push(element);
          });
          self.setDataGridView();
        });
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

  setDataGridView() {
    this.gridDataSource = {
      data: this.goiKhongChietKhau,
      total: this.goiKhongChietKhau.length
    };
    this.gridChild.gridDataSource = this.gridDataSource;
    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();

    this.tinhthanhtien(this.goiKhongChietKhau);
    this.closePopupLoadingData();
  }

  tinhthanhtien(modelGoiKoChietKhau: any) {
    this.tongthanhtien = 0;
    this.tongtienBNThanhToan = 0;
    modelGoiKoChietKhau.forEach(element => {
      if (element.ThanhTien !== null)
        this.tongthanhtien += element.ThanhTien;
      if (element.BNThanhToan !== null)
        this.tongtienBNThanhToan += element.BNThanhToan;
    });
  }

  xoaGoiDichVuKhac(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.showPopupLoadingData(EnumTypeLoadingData.Delete);
          let xoaChiDinhViewModel = new ChiDinhNgoaiTruCanXoa();
          xoaChiDinhViewModel.DichVuId = dataItem.Id;

          let url = this.baseController + (this.nhomDichVu == EnumNhomGoiDichVu.DichVuKhamBenh ? "XoaDichVuKhamBenh" : "XoaDichVuKyThuat");
          this.apiService.put(url, xoaChiDinhViewModel).subscribe(result => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.getDataUpdateGripViewGoiKhac(false);
          },
            (err: ApiError) => {
              this.notificationService.showError(err.Message);
              this.closePopupLoadingData();
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huyDichVuDaHuyThanhToan(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(HuyDichVuHuyThanhToanPopupComponent, {
        disableClose: false,
        width: '600px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
      }).afterClosed().subscribe(result => {
        if (result != undefined && result != null && result != "") {
          this.showPopupLoadingData(EnumTypeLoadingData.Cancel);

          let xoaChiDinhViewModel = new ChiDinhNgoaiTruCanXoa();
          xoaChiDinhViewModel.DichVuId = dataItem.Id;
          xoaChiDinhViewModel.LyDoHuyDichVu = result;

          let url = this.baseController + (this.nhomDichVu == EnumNhomGoiDichVu.DichVuKhamBenh ? "XoaDichVuKhamBenh" : "XoaDichVuKyThuat");
          this.apiService.put<any>(url, xoaChiDinhViewModel).subscribe(result => {

            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ"]));
            this.getDataUpdateGripViewGoiKhac(false);
          },
            (err: ApiError) => {
              this.notificationService.showError(err.Message);
              this.closePopupLoadingData();
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  // cập nhật kiểm tra dịch vụ khác 4 nhóm: PTTT, CDHA, TDCN, XN thì cho phép hoàn thành, hủy hoàn thành
  capNhatThongTinThucHienDichVu(dataItem: any, isThucHien: boolean = true) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var newObj = {
        YeuCauDichVuKyThuatId: dataItem.Id,
        LaThucHienDichVu: isThucHien,
        DocumentType: this.documentType,
        YeuCauKhamBenhId: null
      }
      this.dialog.open(CapNhatThongTinThucHienDvktPopupComponent, {
        disableClose: false,
        width: '600px',
        data: newObj,
      }).afterClosed().subscribe((res) => {
        if (res) {
          var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ"
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
          this.getDataUpdateGripViewGoiKhac(true);
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
