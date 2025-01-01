import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { YeuCauTraThuocTuBenhNhan, YeuCauTraThuocTuBenhNhanChiTiet } from '../yeu-cau-tra-thuoc-tu-benh-nhan.model';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-yeu-cau-tra-thuoc-tu-benh-nhan-shared',
  templateUrl: './yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.html',
  styleUrls: ['./yeu-cau-tra-thuoc-tu-benh-nhan-shared.component.scss']
})
export class YeuCauTraThuocTuBenhNhanSharedComponent implements OnInit {
  yeuCauTraThuoc: YeuCauTraThuocTuBenhNhan;
  documentType: DocumentType;
  urlGetDataDuocPham: string = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncDuocPhamTheoKho";
  urlGetTotalPageDuocPham: string = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncDuocPhamTheoKho";
  urlGetDataBenhNhan: string = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanTheoKhoChild";
  urlGetTotalPageBenhNhan: string = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncBenhNhanTheoKhoChild";
  @ViewChild('gridChild', { static: true }) gridChild: GridComponent;
  gridDuocPhamColumns: any[] = [];
  gridYeuCauChiTietColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupBenhNhan: GroupDescriptor[] = [{ field: 'BenhNhan' }];
  additionalSearchString: any = null;
  @ViewChild('benhNhanGroupHeaderTemplate', { static: true }) benhNhanGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  @ViewChild("ngayDieuTriTemplate", { static: true }) ngayDieuTriTemplate: TemplateRef<any>;
  @ViewChild("ngayTraTemplate", { static: true }) ngayTraTemplate: TemplateRef<any>;
  @Input() isCreate: boolean;
  @Input() validationErrors: any;
  @Input() trangThaiVo: any;
  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.TraThuocTuBenhNhan;
    this.yeuCauTraThuoc = new YeuCauTraThuocTuBenhNhan();
    this.yeuCauTraThuoc.IsCreate = this.isCreate;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      //this.phieuLinhId = id;
    }

    this.gridDuocPhamColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Dược phẩm", Width: 120, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 150, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
      { Field: "TongSoLuongChiDinh", Title: "Tổng SL chỉ định", Width: 150, Sortable: false },
      { Field: "TongSoLuongDaTra", Title: "Tổng SL đã trả", Width: 150, Sortable: false, },
      { Field: "TongSoLuongTraLanNay", Title: "Tổng SL trả lần này", Width: 150, Sortable: false },
    ];

    this.gridYeuCauChiTietColumns = [
      { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
      { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
      { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
      { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
      // { Field: "SoLuongChiDinh", Title: "SL chỉ định", Width: 150, Sortable: false },
      //{ Field: "SoLuongDaTra", Title: "SL đã trả", Width: 150, Sortable: false, },
      { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
      { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
    ];
    console.log("trangThai: ", this.trangThaiVo)
    console.log("isCreate: ", this.isCreate)

    this.getThongTinKhoaHoanTra();
  }

  getThongTinKhoaHoanTra() {
    if (this.yeuCauTraThuoc.NgayYeuCau == null) {
      this.yeuCauTraThuoc.NgayYeuCau = new Date();
    }

    if (this.yeuCauTraThuoc.NhanVienYeuCauId == null) {
      this.apiService.get<any>("YeuCauTraThuocTuBenhNhan/ThongTinKhoaHoanTra").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauTraThuoc.KhoaHoanTraId = resultData.KhoaHoanTraId;
            this.yeuCauTraThuoc.TenKhoaTra = resultData.TenKhoaTra;
            this.yeuCauTraThuoc.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.yeuCauTraThuoc.TenNhanVienYeuCau = resultData.TenNhanVienYeuCau;
          }
        });
    }
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauTraThuocTuBenhNhan/GetPhieuTraDuocPham?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauTraThuoc = resultData;
            this.gridChild._additionalSearchString = JSON.stringify(this.yeuCauTraThuoc);
            this.gridChild.search();
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
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  blur() {
    this.timKiem();
  }
  changeNgayBatDauRange() {
    this.timKiem();
  }

  khoTraChange(khoId: number) {
    this.yeuCauTraThuoc.KhoTraId = khoId;
    this.timKiem();
  }

  timKiem() {
    if (this.yeuCauTraThuoc.RangeFromDate != null && this.yeuCauTraThuoc.RangeFromDate.startDate != null) {
      this.yeuCauTraThuoc.RangeFromDate.TuNgay = CommonService.formatDateTime(this.yeuCauTraThuoc.RangeFromDate.startDate, "mm/dd/yyyy");
      this.yeuCauTraThuoc.TuNgay =  CommonService.formatDateTime(this.yeuCauTraThuoc.RangeFromDate.startDate, "dd/mm/yyyy");
    }
    else {
      this.yeuCauTraThuoc.RangeFromDate.TuNgay = null;
      this.yeuCauTraThuoc.TuNgay = null;
    }
    if (this.yeuCauTraThuoc.RangeFromDate != null && this.yeuCauTraThuoc.RangeFromDate.endDate != null) {
      this.yeuCauTraThuoc.RangeFromDate.DenNgay = CommonService.formatDateTime(this.yeuCauTraThuoc.RangeFromDate.endDate, "mm/dd/yyyy");
      this.yeuCauTraThuoc.DenNgay =   CommonService.formatDateTime(this.yeuCauTraThuoc.RangeFromDate.endDate, "dd/mm/yyyy");
    }
    else {
      this.yeuCauTraThuoc.RangeFromDate.DenNgay = null;
      this.yeuCauTraThuoc.DenNgay = null;
    }
    var queryString = JSON.stringify(this.yeuCauTraThuoc);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }
  onDataBoundGrid(event: { Data: any[]; }) {
    if (event != undefined && event != null) {
      console.log("data: ", event.Data)
      this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets = [];
      event.Data.forEach((element) => {
        let yeuCauDuocPhamBenhVienIds = element.YeuCauDuocPhamBenhVienIds.trim().split(",");
        yeuCauDuocPhamBenhVienIds.forEach((id: number) => {
          let yeuCauTraThuocTuBenhNhanChiTiet = new YeuCauTraThuocTuBenhNhanChiTiet();
          yeuCauTraThuocTuBenhNhanChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
          yeuCauTraThuocTuBenhNhanChiTiet.YeuCauDuocPhamBenhVienId = id;
          this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets.push(yeuCauTraThuocTuBenhNhanChiTiet);
        });
        console.log(this.yeuCauTraThuoc.YeuCauTraThuocTuBenhNhanChiTiets)
      });
    }
  }
  getSharedData() {
    return this.yeuCauTraThuoc;
  }
}
