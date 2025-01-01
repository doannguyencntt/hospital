import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BangKeChiTietTheoNguoiBenhTimKiemNangCao } from '../bang-ke-chi-tiet-theo-nguoi-benh.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
  selector: 'app-bang-ke-chi-tiet-theo-nguoi-benh-list',
  templateUrl: './bang-ke-chi-tiet-theo-nguoi-benh-list.component.html',
  styleUrls: ['./bang-ke-chi-tiet-theo-nguoi-benh-list.component.scss']
})
export class BangKeChiTietTheoNguoiBenhListComponent implements OnInit {

  baoCaoSearch: BangKeChiTietTheoNguoiBenhTimKiemNangCao = new BangKeChiTietTheoNguoiBenhTimKiemNangCao();
  documentType: DocumentType;
  gridColumns: any[];

  icSearch = icSearch;
  searchCtrl = new FormControl();

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  groups: GroupDescriptor[] = [{
    field: 'TenNhom', dir: null, aggregates: [
      { field: 'ThanhTien', aggregate: 'sum' },
      { field: 'TongCongGiaTonKho', aggregate: 'sum' }
    ]
  }];

  tongThanhTien: number = 0;
  tongCongGiaTonKho: number = 0;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tongTienTitleTemplate', { static: true }) tongTienTitleTemplate: TemplateRef<any>;
  @ViewChild('tongChiPhiTemplate', { static: true }) tongChiPhiTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('giaNiemYetTemplate', { static: true }) giaNiemYetTemplate: TemplateRef<any>;
  @ViewChild('giaUuDaiTemplate', { static: true }) giaUuDaiTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTitleGroupFooterTemplate', { static: true }) thanhTienTitleGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('nguoiBenhDaThanhToanTemplate', { static: true }) nguoiBenhDaThanhToanTemplate: TemplateRef<any>;
  @ViewChild('congNoConPhaiThanhToanTemplate', { static: true }) congNoConPhaiThanhToanTemplate: TemplateRef<any>;
  @ViewChild('tenNhomGroupTemplate', { static: true }) tenNhomGroupTemplate: TemplateRef<any>;
  @ViewChild(ComboboxComponent, { static: true }) cboTiepNhan: ComboboxComponent;

  @ViewChild('tongCongGiaTonKhoTemplate', { static: true }) tongCongGiaTonKhoTemplate: TemplateRef<any>;
  @ViewChild('tongCongGiaTonKhoGroupFooterTemplate', { static: true }) tongCongGiaTonKhoGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tongCongGiaTonKhoFooterTemplate', { static: true }) tongCongGiaTonKhoFooterTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBangKeChiTietTheoNguoiBenh;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 30 },
      { Field: "TenNhom", Title: "Nhóm", Width: 180, Hidden: true, TemplateGroupHeader: this.tenNhomGroupTemplate},
      { Field: "NoiDung", Title: "Nội dung", Width: 180},
      { Field: "DonViTinh", Title: "ĐVT", Width: 80, },
      { Field: "SoLuong", Title: "Số lượng", Width: 80, Template: this.soLuongTemplate},
      { Field: "GiaNiemYet", Title: "Giá niêm yết", Width: 100, Template: this.giaNiemYetTemplate},
      { Field: "GiaUuDai", Title: "Giá ưu đãi", Width: 100, Template: this.giaUuDaiTemplate, TemplateFooter: this.thanhTienTitleGroupFooterTemplate}, //, TemplateFooter: this.tongTienTitleTemplate
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Template: this.thanhTienTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate, TemplateFooter: this.tongChiPhiTemplate},
      { Field: "NguoiBenhDaThanhToan", Title: "NB đã thanh toán", Width: 100, Template: this.nguoiBenhDaThanhToanTemplate},
      { Field: "CongNoConPhaiThanhToan", Title: "Công nợ còn phải thanh toán", Width: 100, Template: this.congNoConPhaiThanhToanTemplate },
      { Field: "TongCongGiaTonKho", Title: "Giá tồn kho", Width: 120, Template: this.tongCongGiaTonKhoTemplate, TemplateGroupFooter: this.tongCongGiaTonKhoGroupFooterTemplate, TemplateFooter: this.tongCongGiaTonKhoFooterTemplate},
    ];

    // this.minDateTuNgay = new Date();
    // this.minDateTuNgay.setHours(0, 0, 0, 0);
    // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    // if (this.baoCaoSearch.TuNgayFormat == null) {
    //   this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    // }
    // if (this.baoCaoSearch.DenNgayFormat == null) {
    //   this.baoCaoSearch.DenNgayFormat = new Date();
    //   this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    // }
    this.ganThoiGianTimKiemMacDinh();
  }

  exportExcel() {
    // if (this.baoCaoSearch.NguoiBenhId == null || this.baoCaoSearch.NguoiBenhId == 0) {
    if (this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) {
      this.notificationService.showError("Người bệnh yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBangKeChiTietTheoNguoiBenh", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBangKeChiTietTheoNguoiBenh" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  XemBaoCao() {
    // if (this.baoCaoSearch.NguoiBenhId == null || this.baoCaoSearch.NguoiBenhId == 0) {
    if (this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) {
      this.notificationService.showError("Người bệnh yêu cầu nhập");
      return;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild._skip = 0;
    this.gridChild.search();
    this.getTongCong(this.gridChild._gridQueryInfo);
  }

  getTongCong(queryInfo) {
    this.apiService.post<any>("BaoCao/GetTongCongBangKeChiTietTheoNguoiBenh", queryInfo).subscribe(resultData => {
      this.tongThanhTien = resultData.TongCongChiPhi;
      this.tongCongGiaTonKho = resultData.TongChiPhiGiaTonKho;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  changeHinhThucDen(event)
  {
    this.cboTiepNhan.getDataForLookup();
  }

  changeNguoiGioiThieu(event)
  {
    this.cboTiepNhan.getDataForLookup();
  }

  changeMaTiepNhan(event)
  {
    if(event != undefined && event != null && event !== "0")
    {
      this.ganThoiGianTimKiemMacDinh(true);
    }
    else
    {
      this.ganThoiGianTimKiemMacDinh();
    }
  }

  ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh: boolean = false) {
    if (xoaThoiGianMacDinh) {
      this.baoCaoSearch.TuNgayFormat = null;
      this.baoCaoSearch.DenNgayFormat = null;
    }
    else {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
      this.minDateTuNgay.setDate(1);

      if (this.baoCaoSearch.TuNgayFormat == null) {
        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
      }
      if (this.baoCaoSearch.DenNgayFormat == null) {
        this.baoCaoSearch.DenNgayFormat = new Date();
        //this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
      }

    }
  }
}
