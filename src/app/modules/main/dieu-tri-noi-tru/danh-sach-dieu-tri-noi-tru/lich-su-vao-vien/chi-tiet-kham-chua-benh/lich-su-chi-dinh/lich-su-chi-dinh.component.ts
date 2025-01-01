import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { process,GroupDescriptor, State } from '@progress/kendo-data-query';
import { GoiCoChietKhau, GoiKhongChietKhau, TrangThaiYeuCauDichVuKyThuatObjEnum, TrangThaiYeuCauKhamBenhObjEnum, YeuCauDichVuGiuongBenh, YeuCauDichVuKyThuat, YeuCauDuocPham, YeuCauGoiDichVu, YeuCauKhamBenh, YeuCauVatTuBenhVien } from 'src/app/modules/main/kham-benh/kham-benh.model';
import icCheck from '@iconify/icons-ic/twotone-check';
import icInfo from '@iconify/icons-ic/twotone-info';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-lich-su-chi-dinh',
  templateUrl: './lich-su-chi-dinh.component.html',
  styleUrls: ['./lich-su-chi-dinh.component.scss']
})
export class LichSuChiDinhComponent implements OnInit {
  @Input() yeuCauKhamBenhId: number;
  @Input() yeuCauTiepNhanId: number;

  documentType: DocumentType;
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
  totalThanhTienPage: number = 0;
  totalDVKTTPage: number = 0;
  totalGCKTTPage: number = 0;
  totalBNTTPage: number = 0;
  totalDVKBNTTPage: number = 0;
  totalGCKBNTTPage: number = 0;

  @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild('thanhTienFooter', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooter', { static: true }) donGiafooterTemplate: TemplateRef<any>;
  @ViewChild('tkChietKhauFooter', { static: true }) tkChietKhauFooter: TemplateRef<any>;
  groupss: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'ThanhTienTrongGoi', aggregate: 'sum' }] }];
  gridData: any = { data: [], total: 0 }
  gridDataSourceVTTHThuoc: any = {};
  gridDataSourceVTTH: any = {};
  listChietKhau: any[] = [];
  gridVTTHColumns: any[] = [];
  gridThuocColumns: any[] = [];
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('TongCongThanhTienKCKGroupFooter', { static: true }) TongCongThanhTienKCKGroupFooter: TemplateRef<any>
  @ViewChild('TongCongBHTTThanhToanGroupFooter', { static: true }) TongCongBHTTThanhToanGroupFooter: TemplateRef<any>
  @ViewChild('TongCongBNTTGroupFooter', { static: true }) TongCongBNTTGroupFooter: TemplateRef<any>
  @ViewChild('DonGiaTemplateKCK', { static: true }) DonGiaTemplateKCK: TemplateRef<any>
  @ViewChild('BNThanhToanTemplateKCK', { static: true }) BNThanhToanTemplateKCK: TemplateRef<any>
  @ViewChild('TongCongKCKFooter', { static: true }) TongCongKCKFooter: TemplateRef<any>
  @ViewChild('TongCongThanhTienKCKFooter', { static: true }) TongCongThanhTienKCKFooter: TemplateRef<any>
  @ViewChild('TongCongBHTTThanhToanFooter', { static: true }) TongCongBHTTThanhToanFooter: TemplateRef<any>
  @ViewChild('TongCongBNTTFooter', { static: true }) TongCongBNTTFooter: TemplateRef<any>
  @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('bhytThanhToanTemplate', { static: true }) bhytThanhToanTemplate: TemplateRef<any>;
  @ViewChild('ThanhTienTemplateKCK', { static: true }) ThanhTienTemplateKCK: TemplateRef<any>
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
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
  @ViewChild('gridVTTH', { static: true }) gridChildVTTH: GridComponent;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
  stateNotChietKhau: State = {
    skip: 0, take: 15,
    group: [{
      field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' },
      { field: 'SoTienMG', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }]
    }]
  };
  groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'TenDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  public totalGhiNhanVTTHThuoc(field: any) {
    if (this.gridDataSourceVTTHThuoc.data != undefined) {
      switch (field) {
        case 'ThanhTien':
          return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
      }
    }
  };

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

  gridDataNotChietKhau: any;
  groups: [{
    field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }, { field: 'BHYTThanhToan', aggregate: 'sum' },
      { field: 'SoTienMG', aggregate: 'sum' }, { field: 'BNThanhToan', aggregate: 'sum' }]
  }];
  constructor(private apiService: ApiService, private dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService,) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 50 },
      { Field: "Ma", Title: "Mã", Width: 120 },
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.nhomDichVuTemplate },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 200, Sortable: true, Template: this.tenDichVuTemplate },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 120, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.TongCongKCKFooter },
      { Field: "DonGia", Title: "Đơn Giá", Width: 120, Template: this.DonGiaTemplateKCK },
      { Field: "SoLuong", Title: "SL", Width: 50 },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 120, TemplateGroupFooter: this.TongCongThanhTienKCKGroupFooter, TemplateFooter: this.TongCongThanhTienKCKFooter, Template: this.ThanhTienTemplateKCK },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 140, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 120, Template: this.duocHuongBaoHiemTemplate },
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 300, Template: this.noiThucHienTemplate },
      { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 150, Template: this.trangThaiTemplate },
      { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 250 },
      { Field: "BenhPhamXetNghiem", Title: "Bệnh phẩm", Width: 150 },
    ];

    this.gridVTTHColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
      { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuYeuCau", Title: "Tên", MinWidth: 150, ShowTooltip: true },
      { Field: "TenKho", Title: "Tên kho", Width: 150 },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100 },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100 },
    ];

    this.gridThuocColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
      { Field: "TenDichVu", Title: "TenDichVu", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVuYeuCau", Title: "Tên", MinWidth: 150, ShowTooltip: true },
      { Field: "TenKho", Title: "Tên kho", Width: 150 },
      { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
      { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
      { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 100 },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 100 },
    ];

    this.getDataGoiDichVuDefault(this.yeuCauKhamBenhId);
    this.getGridDataGhiNhanVTHHThuoc();
    this.getGridDataGhiNhanVTHH();

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
    this.apiService.get<any>("KhamBenh/GetDataForGridAsyncChiDinDichVuKhac?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId + "&yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        resultData.forEach(element => {
          this.goiKhongChietKhau.push(element);
          this.totalDVKTTPage += element.ThanhTien;
          this.totalDVKBNTTPage += element.BNThanhToan;
          let indexDichVuKhamBenh = 1;
          resultData.forEach((x: { STT: number; Nhom: string }) => {
            x.STT = indexDichVuKhamBenh;
            indexDichVuKhamBenh++;
          });
        }); 
        this.gridDataNotChietKhau = process(resultData, this.stateNotChietKhau);
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
        this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc;
        this.gridChildVTTHThuoc.setDataSource();
      }
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  getGridDataGhiNhanVTHH() {
    var url = "KhamBenh/GetGridDataGhiNhanVTTH?yeuCauKhamBenhId=" + this.yeuCauKhamBenhId;
    this.apiService.get<any>(url).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSourceVTTH = {
          data: resultData,
          total: resultData.length
        }
        this.gridChildVTTH.gridDataSource = this.gridDataSourceVTTH;
        this.gridChildVTTH.setDataSource();
      }
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

}
