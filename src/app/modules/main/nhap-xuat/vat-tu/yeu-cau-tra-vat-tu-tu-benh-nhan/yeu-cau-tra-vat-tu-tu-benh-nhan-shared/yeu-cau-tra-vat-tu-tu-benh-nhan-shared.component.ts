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
import { CommonService } from 'src/app/core/utilities/common.helper';
import { YeuCauTraVatTuTuBenhNhan, YeuCauTraVatTuTuBenhNhanChiTiet } from '../yeu-cau-tra-vat-tu-tu-benh-nhan.model';

@Component({
  selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-shared',
  templateUrl: './yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.html',
  styleUrls: ['./yeu-cau-tra-vat-tu-tu-benh-nhan-shared.component.scss']
})
export class YeuCauTraVatTuTuBenhNhanSharedComponent implements OnInit {
  yeuCauTraVatTu: YeuCauTraVatTuTuBenhNhan;
  documentType: DocumentType;
  urlGetDataVatTu: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncVatTuTheoKho";
  urlGetTotalPageVatTu: string = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncVatTuTheoKho";
  urlGetDataBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanTheoKhoChild";
  urlGetTotalPageBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncBenhNhanTheoKhoChild";
  @ViewChild('gridChild', { static: true }) gridChild: GridComponent;
  gridVatTuColumns: any[] = [];
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
    this.documentType = DocumentType.TraVatTuTuBenhNhan;
    this.yeuCauTraVatTu = new YeuCauTraVatTuTuBenhNhan();
    this.yeuCauTraVatTu.IsCreate = this.isCreate;
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      //this.phieuLinhId = id;
    }

    this.gridVatTuColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Vật tư", Width: 120, Sortable: true },
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
      //{ Field: "SoLuongDaTra", Title: "SL đã trả", Width: 150, Sortable: false, },
      { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
      { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
    ];
    // console.log("trangThai: ", this.trangThaiVo)
    // console.log("isCreate: ", this.isCreate)

    this.getThongTinKhoaHoanTra();
  }

  getThongTinKhoaHoanTra() {
    if (this.yeuCauTraVatTu.NgayYeuCau == null) {
      this.yeuCauTraVatTu.NgayYeuCau = new Date();
    }

    if (this.yeuCauTraVatTu.NhanVienYeuCauId == null) {
      this.apiService.get<any>("YeuCauTraThuocTuBenhNhan/ThongTinKhoaHoanTra").subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauTraVatTu.KhoaHoanTraId = resultData.KhoaHoanTraId;
            this.yeuCauTraVatTu.TenKhoaTra = resultData.TenKhoaTra;
            this.yeuCauTraVatTu.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
            this.yeuCauTraVatTu.TenNhanVienYeuCau = resultData.TenNhanVienYeuCau;
          }
        });
    }
  }

  getById(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauTraVatTuTuBenhNhan/GetPhieuTraVatTu?id=" + id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.yeuCauTraVatTu = resultData;
            this.gridChild._additionalSearchString = JSON.stringify(this.yeuCauTraVatTu);
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
    this.yeuCauTraVatTu.KhoTraId = khoId;
    this.timKiem();
  }

  timKiem() {
    if (this.yeuCauTraVatTu.RangeFromDate != null && this.yeuCauTraVatTu.RangeFromDate.startDate != null) {
      this.yeuCauTraVatTu.RangeFromDate.TuNgay = CommonService.formatDateTime(this.yeuCauTraVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
      this.yeuCauTraVatTu.TuNgay = CommonService.formatDateTime(this.yeuCauTraVatTu.RangeFromDate.startDate, "dd/mm/yyyy");
    }
    else {
      this.yeuCauTraVatTu.RangeFromDate.TuNgay = null;
      this.yeuCauTraVatTu.TuNgay = null;
    }
    if (this.yeuCauTraVatTu.RangeFromDate != null && this.yeuCauTraVatTu.RangeFromDate.endDate != null) {
      this.yeuCauTraVatTu.RangeFromDate.DenNgay = CommonService.formatDateTime(this.yeuCauTraVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
      this.yeuCauTraVatTu.DenNgay = CommonService.formatDateTime(this.yeuCauTraVatTu.RangeFromDate.endDate, "dd/mm/yyyy");
    }
    else {
      this.yeuCauTraVatTu.RangeFromDate.DenNgay = null;
      this.yeuCauTraVatTu.TuNgay = null;
    }
    var queryString = JSON.stringify(this.yeuCauTraVatTu);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }
  onDataBoundGrid(event: { Data: any[]; }) {
    if (event != undefined && event != null) {
      // console.log("data: ", event.Data)
      this.yeuCauTraVatTu.YeuCauTraVatTuTuBenhNhanChiTiets = [];
      event.Data.forEach((element) => {
        let yeuCauVatTuBenhVienIds = element.YeuCauVatTuBenhVienIds.trim().split(",");
        yeuCauVatTuBenhVienIds.forEach((id: number) => {
          let yeuCauTraVatTuTuBenhNhanChiTiet = new YeuCauTraVatTuTuBenhNhanChiTiet();
          yeuCauTraVatTuTuBenhNhanChiTiet.VatTuBenhVienId = element.VatTuBenhVienId;
          yeuCauTraVatTuTuBenhNhanChiTiet.YeuCauVatTuBenhVienId = id;
          this.yeuCauTraVatTu.YeuCauTraVatTuTuBenhNhanChiTiets.push(yeuCauTraVatTuTuBenhNhanChiTiet);
        });
      });
    }
  }
  getSharedData() {
    return this.yeuCauTraVatTu;
  }
}
