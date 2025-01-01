import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao } from '../bao-cao-tong-hop-cong-no-chua-thanh-toan.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
  selector: 'app-bao-cao-tong-hop-cong-no-chua-thanh-toan-list',
  templateUrl: './bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.html',
  styleUrls: ['./bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component.scss']
})
export class BaoCaoTongHopCongNoChuaThanhToanListComponent implements OnInit {

  baoCaoSearch: BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao = new BaoCaoTongHopCongNoChuaThanhToanTimKiemNangCao();
  documentType: DocumentType;
  gridColumns: any[];

  icSearch = icSearch;
  searchCtrl = new FormControl();

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  tongTienCLS: number = 0;
  tongTienCLSNgoaiTru: number = 0;
  tongTienCLSNoiTru: number = 0;
  tongTienGiuong: number = 0;
  tongTienThuocVatTu: number = 0;
  tongTienThuoc: number = 0;
  tongTienVatTu: number = 0;
  tongTienTestCovid: number = 0;
  tongTienSuatAn: number = 0;
  tongTienKhachThanhToan: number = 0;
  tongChiPhi: number = 0;


  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tongTienTitleTemplate', { static: true }) tongTienTitleTemplate: TemplateRef<any>;
  @ViewChild('tongTienCLSTemplate', { static: true }) tongTienCLSTemplate: TemplateRef<any>;
  @ViewChild('tongTienCLSNgoaiTruTemplate', { static: true }) tongTienCLSNgoaiTruTemplate: TemplateRef<any>;
  @ViewChild('tongTienCLSNoiTruTemplate', { static: true }) tongTienCLSNoiTruTemplate: TemplateRef<any>;
  @ViewChild('tongTienGiuongTemplate', { static: true }) tongTienGiuongTemplate: TemplateRef<any>;
  @ViewChild('tongTienThuocVatTuTemplate', { static: true }) tongTienThuocVatTuTemplate: TemplateRef<any>;
  @ViewChild('tongTienThuocTemplate', { static: true }) tongTienThuocTemplate: TemplateRef<any>;
  @ViewChild('tongTienVatTuTemplate', { static: true }) tongTienVatTuTemplate: TemplateRef<any>;
  @ViewChild('tongTienTestCovidTemplate', { static: true }) tongTienTestCovidTemplate: TemplateRef<any>;
  @ViewChild('tongTienSuatAnTemplate', { static: true }) tongTienSuatAnTemplate: TemplateRef<any>;
  @ViewChild('tongTienKhachThanhToanTemplate', { static: true }) tongTienKhachThanhToanTemplate: TemplateRef<any>;
  @ViewChild('tongChiPhiTemplate', { static: true }) tongChiPhiTemplate: TemplateRef<any>;
  @ViewChild(ComboboxComponent, { static: true }) cboTiepNhan: ComboboxComponent;

  @ViewChild('cLSTemplate', { static: true }) cLSTemplate: TemplateRef<any>;
  @ViewChild('cLSNgoaiTruTemplate', { static: true }) cLSNgoaiTruTemplate: TemplateRef<any>;
  @ViewChild('cLSNoiTruTemplate', { static: true }) cLSNoiTruTemplate: TemplateRef<any>;
  @ViewChild('giuongTemplate', { static: true }) giuongTemplate: TemplateRef<any>;
  @ViewChild('thuocVatTuTemplate', { static: true }) thuocVatTuTemplate: TemplateRef<any>;
  @ViewChild('thuocTemplate', { static: true }) thuocTemplate: TemplateRef<any>;
  @ViewChild('vatTuTemplate', { static: true }) vatTuTemplate: TemplateRef<any>;
  @ViewChild('testCovidTemplate', { static: true }) testCovidTemplate: TemplateRef<any>;
  @ViewChild('suatAnTemplate', { static: true }) suatAnTemplate: TemplateRef<any>;
  @ViewChild('khachThanhToanTemplate', { static: true }) khachThanhToanTemplate: TemplateRef<any>;
  @ViewChild('chiPhiTemplate', { static: true }) chiPhiTemplate: TemplateRef<any>;
  @ViewChild('raVienTemplate', { static: true }) raVienTemplate: TemplateRef<any>;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTongHopCongNoChuaThanhToan;

    this.gridColumns = [
      // { Field: "STT", Title: "STT", Width: 30 },
      { Field: "ThoiDiemTiepNhanDisplay", Title: "Ngày tiếp nhận", Width: 90, TemplateFooter: this.tongTienTitleTemplate},
      // { Field: "NoiGioiThieuDisplay", Title: "Bác sỹ", Width: 180, },
      { Field: "HinhThucDenDisplay", Title: "Hình thức đến", Width: 180, },
      { Field: "MaBN", Title: "Mã y tế", Width: 100, },
      { Field: "MaYeuCauTiepNhan", Title: "Mã tiếp nhận", Width: 100, },
      { Field: "HoTen", Title: "Họ và tên", Width: 180, },
      { Field: "PhongPhauThuat", Title: "Phòng PT", Width: 160, },
      { Field: "NgayPhauThuatDisplay", Title: "Ngày PT", Width: 160, },
      { Field: "DichVuKyThuat", Title: "Dịch vụ kỹ thuật", Width: 200, },
      // { Field: "ChiPhiCanLamSan", Title: "Chi phí cls", Width: 120, TemplateFooter: this.tongTienCLSTemplate, Template: this.cLSTemplate },
      { Field: "ChiPhiCanLamSanNgoaiTru", Title: "Chi phí cls ngoại trú", Width: 120, TemplateFooter: this.tongTienCLSNgoaiTruTemplate, Template: this.cLSNgoaiTruTemplate },
      { Field: "ChiPhiCanLamSanNoiTru", Title: "Chi phí cls nội trú", Width: 120, TemplateFooter: this.tongTienCLSNoiTruTemplate, Template: this.cLSNoiTruTemplate },
      { Field: "ChiPhiGiuong", Title: "Chi phí giường", Width: 120, TemplateFooter: this.tongTienGiuongTemplate, Template: this.giuongTemplate },
      // { Field: "ChiPhiThuocVTYT", Title: "Chi phí thuốc, VTYT", Width: 120, TemplateFooter: this.tongTienThuocVatTuTemplate, Template: this.thuocVatTuTemplate },
      { Field: "ChiPhiThuoc", Title: "Chi phí thuốc", Width: 120, TemplateFooter: this.tongTienThuocTemplate, Template: this.thuocTemplate },
      { Field: "ChiPhiVTYT", Title: "Chi phí VTYT", Width: 120, TemplateFooter: this.tongTienVatTuTemplate, Template: this.vatTuTemplate },
      { Field: "ChiPhiThuePhongMo", Title: "Chi phí thuê phòng mổ", Width: 120, },
      { Field: "GiamDau", Title: "Giảm đau", Width: 120, },
      { Field: "TestCovid", Title: "Test covid", Width: 120, TemplateFooter: this.tongTienTestCovidTemplate, Template: this.testCovidTemplate },
      { Field: "SuatAn", Title: "Dịch vụ khác", Width: 120, TemplateFooter: this.tongTienSuatAnTemplate, Template: this.suatAnTemplate },
      { Field: "NguoiBenhDaThanhToan", Title: "KH đã thanh toán", Width: 120, TemplateFooter: this.tongTienKhachThanhToanTemplate, Template: this.khachThanhToanTemplate },
      { Field: "CongNoChuaThanhToan", Title: "Tổng công nợ chưa thanh toán", Width: 120, },
      { Field: "ChiPhiCaPhauThuat", Title: "Tổng chi phí ca PT", Width: 120, TemplateFooter: this.tongChiPhiTemplate, Template: this.chiPhiTemplate },
      { Field: "ThoiGianGayMeDisplay", Title: "TGGM", Width: 100, },
      { Field: "ThoiGianBanGiaoDisplay", Title: "TGTM", Width: 100, },
      { Field: "RaVien", Title: "Ra viện", Width: 80, Template: this.raVienTemplate},
    ];

    this.ganThoiGianTimKiemMacDinh();
  }

  exportExcel() {
    if ((this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) 
        && (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null)) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
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
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTongHopCongNoChuaThanhToan", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopCongNoChuaThanhToan" + dateTimeNow.getFullYear() + ".xlsx");
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
    if ((this.baoCaoSearch.MaYeuCauTiepNhan == undefined || this.baoCaoSearch.MaYeuCauTiepNhan == null) 
        && (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null)) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
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
    this.apiService.post<any>("BaoCao/GetTongCongCongNoChuaThanhToan", queryInfo).subscribe(resultData => {
      this.tongTienCLS = resultData.ChiPhiCanLamSan;
      this.tongTienCLSNgoaiTru = resultData.ChiPhiCanLamSanNgoaiTru;
      this.tongTienCLSNoiTru = resultData.ChiPhiCanLamSanNoiTru;
      this.tongTienGiuong = resultData.ChiPhiGiuong;
      this.tongTienThuocVatTu = resultData.ChiPhiThuocVTYT;
      this.tongTienThuoc = resultData.ChiPhiThuoc;
      this.tongTienVatTu = resultData.ChiPhiVTYT;
      this.tongTienTestCovid = resultData.TestCovid;
      this.tongTienSuatAn = resultData.SuatAn;
      this.tongTienKhachThanhToan = resultData.NguoiBenhDaThanhToan;
      this.tongChiPhi = resultData.ChiPhiCaPhauThuat;
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
