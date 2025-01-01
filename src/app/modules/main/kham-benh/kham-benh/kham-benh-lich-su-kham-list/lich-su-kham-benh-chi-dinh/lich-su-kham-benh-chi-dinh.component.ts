import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

import { ApiService } from 'src/app/core/services/api.service';
import {
  GoiCoChietKhau,
  GoiKhongChietKhau,
  YeuCauDichVuKyThuat,
  YeuCauKhamBenh,
  YeuCauDichVuGiuongBenh,
  YeuCauVatTuBenhVien,
  YeuCauGoiDichVu,
  YeuCauDuocPham,
  TrangThaiYeuCauKhamBenhObjEnum,
  TrangThaiYeuCauDichVuKyThuatObjEnum
} from '../../../kham-benh.model';
import { GroupDescriptor } from '@progress/kendo-data-query';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icCheck from '@iconify/icons-ic/twotone-check';
import icInfo from '@iconify/icons-ic/twotone-info';
import { MatDialog } from '@angular/material';
import { LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent } from '../../lan-kham-hien-tai/lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup/lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import icCheckBox from "@iconify/icons-ic/check";
import { XacNhanChuyenTrangThaiComponent } from '../xac-nhan-chuyen-trang-thai-dich-vu/xac-nhan-chuyen-trang-thai-dich-vu.component';
import { CapNhatThongTinThucHienDvktPopupComponent } from '../../lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icHistory from '@iconify/icons-ic/twotone-history';
import icDone from '@iconify/icons-ic/twotone-done';
@Component({
  selector: 'app-lich-su-kham-benh-chi-dinh',
  templateUrl: './lich-su-kham-benh-chi-dinh.component.html',
  styleUrls: ['./lich-su-kham-benh-chi-dinh.component.scss']
})
export class LichSuKhamBenhChiDinhComponent implements OnInit {
  documentType: DocumentType;
  icCheckBox = icCheckBox;
  icHistory = icHistory;
  icDone = icDone;
  
  gridColumns: any[] = [];
  gridGCKColumns: any[] = [];
  phongBenhVienId: number;
  yeuCauDichVuKyThuat: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
  yeuCauKhamBenh: YeuCauKhamBenh = new YeuCauKhamBenh();
  yeuCauDichVuGiuong: YeuCauDichVuGiuongBenh = new YeuCauDichVuGiuongBenh();
  yeuCauVatTuBenhVien: YeuCauVatTuBenhVien = new YeuCauVatTuBenhVien();
  yeuCauGoiDichVu: YeuCauGoiDichVu = new YeuCauGoiDichVu();
  yeuCauDuocPham: YeuCauDuocPham = new YeuCauDuocPham();

  goiCoChietKhau: GoiCoChietKhau[] = [];
  goiKhongChietKhau: GoiKhongChietKhau[] = [];
  benhNhanHienTai = new YeuCauKhamBenh();
  validationErrors: any;
  tongthanhtien: number = 0;
  tongtienBNThanhToan: number = 0;
  tenGoiChietKhau: string = "";
  tongThanhTienTrongGoi: number = 0;
  thanhTienTrongGoi: number = 0;
  tongThanhTienGoiChietKhau: number = 0;
  tLchietKhau: string = "";
  icCheck = icCheck;
  icInfo = icInfo;
  // thành tiền page
  totalThanhTienPage: number = 0;
  totalDVKTTPage: number = 0;
  totalGCKTTPage: number = 0;
  // NB Thanh toán
  totalBNTTPage: number = 0;
  totalDVKBNTTPage: number = 0;
  totalGCKBNTTPage: number = 0;
  @Input() yeuCauKhamBenhId: number;
  @Input() yeuCauTiepNhanId: number;
  @Input() BenhNhan: number;
  @Input() isKhamDoan: boolean;
  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('thanhTienFooter', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;

  @ViewChild('donGiaFooter', { static: true }) donGiafooterTemplate: TemplateRef<any>;
  @ViewChild('tkChietKhauFooter', { static: true }) tkChietKhauFooter: TemplateRef<any>

  // GOI CÓ CHIET KHAU
  groupss: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'ThanhTienTrongGoi', aggregate: 'sum' }] }];
  gridData: any = {
    data: [],
    total: 0
  }
  gridDataSourceVTTHThuoc: any = {};
  listChietKhau: any[] = [];
  gridVTTHThuocColumns: any[] = [];
  // GOI KHONG CÓ CHIET KHAU
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;//

  @ViewChild('TongCongThanhTienKCKGroupFooter', { static: true }) TongCongThanhTienKCKGroupFooter: TemplateRef<any>//
  @ViewChild('TongCongBHTTThanhToanGroupFooter', { static: true }) TongCongBHTTThanhToanGroupFooter: TemplateRef<any>//
  @ViewChild('TongCongBNTTGroupFooter', { static: true }) TongCongBNTTGroupFooter: TemplateRef<any>//
  // template gói kck
  @ViewChild('DonGiaTemplateKCK', { static: true }) DonGiaTemplateKCK: TemplateRef<any>//
  @ViewChild('BNThanhToanTemplateKCK', { static: true }) BNThanhToanTemplateKCK: TemplateRef<any>//
  ///footer
  @ViewChild('TongCongKCKFooter', { static: true }) TongCongKCKFooter: TemplateRef<any>//
  @ViewChild('TongCongThanhTienKCKFooter', { static: true }) TongCongThanhTienKCKFooter: TemplateRef<any>//
  @ViewChild('TongCongBHTTThanhToanFooter', { static: true }) TongCongBHTTThanhToanFooter: TemplateRef<any>//
  @ViewChild('TongCongBNTTFooter', { static: true }) TongCongBNTTFooter: TemplateRef<any>//
  @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;//
  @ViewChild('bhytThanhToanTemplate', { static: true }) bhytThanhToanTemplate: TemplateRef<any>;//
  //
  @ViewChild('ThanhTienTemplateKCK', { static: true }) ThanhTienTemplateKCK: TemplateRef<any>//
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemGrid1Template', { static: true }) donGiaBaoHiemGrid1Template: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemGrid2Template', { static: true }) donGiaBaoHiemGrid2Template: TemplateRef<any>;
  // vtth
  @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
  @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('gridVTTHThuoc', { static: true }) gridChildVTTHThuoc: GridComponent;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;

  groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'TenDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  public totalGhiNhanVTTHThuoc(field: any) {
    if (this.gridDataSourceVTTHThuoc.data != undefined) {
      switch (field) {
        case 'ThanhTien':
          return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
    }
  };
  //
  trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
  trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();
  public totalNotChietKhau(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
      case 'BHYTThanhToan':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
      case 'SoTienMG':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.SoTienMG, 0);
      case 'BNThanhToan':
        return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BNThanhToan, 0);
    }
  };
  // total Page
  gridDataNotChietKhau: any = {
    data: [],
    total: 0
  };
  groups: GroupDescriptor[] = [{
    field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' },
    { field: 'SoTienMG', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }]
  }];
  constructor(private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService,) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamBenh;
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "Ma", Title: "Mã", Width: 120 },
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomDichVuTemplate }, //TemplateGroupHeader: this.nhomGroupHeaderTemplate
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, Template: this.tenDichVuTemplate },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 120, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.TongCongKCKFooter },
      { Field: "DonGia", Title: "Đơn Giá", Width: 120, Template: this.DonGiaTemplateKCK, Hidden: this.isKhamDoan }, //,TemplateGroupFooter: this.TongCongKCKGroupFooter
      { Field: "SoLuong", Title: "SL", Width: 50, Hidden: this.isKhamDoan },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 120, TemplateGroupFooter: this.TongCongThanhTienKCKGroupFooter, TemplateFooter: this.TongCongThanhTienKCKFooter, Template: this.ThanhTienTemplateKCK }, //Template: this.ThanhTienTemplateKCK
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 140, Template: this.donGiaBaoHiemGrid1Template, Hidden: this.isKhamDoan },//, TemplateGroupFooter: this.TongCongBHTTThanhToanGroupFooter, TemplateFooter: this.TongCongBHTTThanhToanFooter },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 120, Template: this.duocHuongBaoHiemTemplate, Hidden: this.isKhamDoan },// TemplateGroupFooter: this.TongCongBNTTGroupFooter, TemplateFooter: this.TongCongBNTTFooter },
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 300, Template: this.noiThucHienTemplate },
      { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 150, Template: this.trangThaiTemplate },
      { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 250 },
      //{ Field: "TenGiuongBenh", Title: "Số giường", Width: 90 },
      { Field: "BenhPhamXetNghiem", Title: "Bệnh phẩm", Width: 150 },
      { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 110 },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
    ];
    this.gridVTTHThuocColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
      { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", MinWidth: 150, ShowTooltip: true },
      { Field: "TenKho", Title: "Tên kho", Width: 150 },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemGrid2Template },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100 },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100 },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 110 },
    ];
    this.getDataGoiDichVuDefault(this.yeuCauKhamBenhId);
    this.getGridDataGhiNhanVTHHThuoc();

  }
  tinhthanhtien(modelGoiKoChietKhau: any) {
    modelGoiKoChietKhau.forEach(element => {
      if (element.TTTienTrongGoi !== null)
        this.tongthanhtien = element.TTTienTrongGoi;
      if (element.ThanhTienTrongGoi !== null)
        this.thanhTienTrongGoi = element.ThanhTienTrongGoi;
    });
  }
  tinhthanhtienDVK(modelGoiKoChietKhau: any) {
    modelGoiKoChietKhau.forEach(element => {
      if (element.TTTienTrongGoi !== null)
        this.tongthanhtien = element.TTTienTrongGoi;
      if (element.ThanhTienTrongGoi !== null)
        this.thanhTienTrongGoi = element.ThanhTienTrongGoi;
    });
  }
  getDataGoiDichVuDefault(yeuCauKhamBenhId: number) {
    var self = this;
    var dialogRef = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.tongthanhtien = 0;
    this.tongtienBNThanhToan = 0;
    this.tongThanhTienGoiChietKhau = 0;
    this.totalGCKTTPage = 0;
    this.totalDVKTTPage = 0;
    this.goiKhongChietKhau = [];

    //yeu cau khac
    this.apiService.get<any>("KhamBenh/GetDataForGridAsyncChiDinDichVuKhac?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId + "&yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        resultData.forEach(element => {
          this.goiKhongChietKhau.push(element);
          this.totalDVKTTPage += element.ThanhTien;
          this.totalDVKBNTTPage += element.BNThanhToan;
        });
        this.gridDataNotChietKhau = {
          data: [...resultData],
          total: [...resultData].length
        };

        // page total grid
        this.totalThanhTienPage = this.totalDVKTTPage;
        this.totalBNTTPage = this.totalDVKBNTTPage;
        dialogRef.close();
      }
    });

  }
  getGridDataGhiNhanVTHHThuoc() {
    var url = "KhamBenh/GetGridDataGhiNhanVTTHThuoc?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId;
    this.apiService.get<any>(url).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSourceVTTHThuoc = {
          data: resultData,
          total: resultData.length
        }
        this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc
        this.gridChildVTTHThuoc.setDataSource();
      }
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  xemChiDinhCuaBacSiKhac() {
    this.dialog.open(LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: { YeuCauTiepNhanId: this.yeuCauTiepNhanId, YeuCauKhamBenhId: this.yeuCauKhamBenhId }
    }).afterClosed().subscribe(() => {
    });
  }

  // cập nhật kiểm tra dịch vụ khác 4 nhóm: PTTT, CDHA, TDCN, XN thì cho phép hoàn thành, hủy hoàn thành
  capNhatThongTinThucHienDichVu(dataItem: any, isThucHien: boolean = true) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var newObj = {
        YeuCauDichVuKyThuatId: dataItem.Id,
        LaThucHienDichVu: isThucHien,
        DocumentType: this.documentType,
        YeuCauKhamBenhId: this.yeuCauKhamBenhId
      }
      this.dialog.open(XacNhanChuyenTrangThaiComponent, {
        disableClose: false,
        width: '600px',
        data: newObj,
      }).afterClosed().subscribe((res) => {
        if (res) {
          var mess = isThucHien ? "Cập nhật thông tin thực hiện dịch vụ" : "Hủy thông tin thực hiện dịch vụ"
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));

          this.getDataGoiDichVuDefault(this.yeuCauKhamBenhId);
          this.getGridDataGhiNhanVTHHThuoc();
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

}
