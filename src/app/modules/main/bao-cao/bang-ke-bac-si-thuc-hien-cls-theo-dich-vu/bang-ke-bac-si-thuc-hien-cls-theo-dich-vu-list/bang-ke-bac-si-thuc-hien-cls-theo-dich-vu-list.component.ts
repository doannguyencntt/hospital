import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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
import { BangKeBacSiThucHienClsTheoDichVuTimKiemNangCao } from '../bang-ke-bac-si-thuc-hien-cls-theo-dich-vu.model';

@Component({
  selector: 'app-bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list',
  templateUrl: './bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list.component.html',
  styleUrls: ['./bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list.component.scss']
})
export class BangKeBacSiThucHienClsTheoDichVuListComponent implements OnInit {

  baoCaoSearch: BangKeBacSiThucHienClsTheoDichVuTimKiemNangCao = new BangKeBacSiThucHienClsTheoDichVuTimKiemNangCao();
  documentType: DocumentType;
  gridColumns: any[];

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('noiDungTemplate', { static: true }) noiDungTemplate: TemplateRef<any>;
  @ViewChild('tongSoTemplate', { static: true }) tongSoTemplate: TemplateRef<any>;
  @ViewChild('capCuuTemplate', { static: true }) capCuuTemplate: TemplateRef<any>;
  @ViewChild('khamNoiTemplate', { static: true }) khamNoiTemplate: TemplateRef<any>;
  @ViewChild('khamNhiTemplate', { static: true }) khamNhiTemplate: TemplateRef<any>;
  @ViewChild('khamTaiMuiHongTemplate', { static: true }) khamTaiMuiHongTemplate: TemplateRef<any>;
  @ViewChild('khamRangHamMatTemplate', { static: true }) khamRangHamMatTemplate: TemplateRef<any>;
  @ViewChild('khamMatTemplate', { static: true }) khamMatTemplate: TemplateRef<any>;
  @ViewChild('khamNgoaiTemplate', { static: true }) khamNgoaiTemplate: TemplateRef<any>;
  @ViewChild('khamDaLieuTemplate', { static: true }) khamDaLieuTemplate: TemplateRef<any>;
  @ViewChild('khamPhuSanTemplate', { static: true }) khamPhuSanTemplate: TemplateRef<any>;
  @ViewChild('khamThamMyTemplate', { static: true }) khamThamMyTemplate: TemplateRef<any>;
  @ViewChild('khamTiemChungTemplate', { static: true }) khamTiemChungTemplate: TemplateRef<any>;


  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongKhamBenhTheoDichVu;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 30, Template: this.sttTemplate},
      { Field: "NoiDung", Title: "", Width: 150, Template: this.noiDungTemplate},
      { Field: "TongSo", Title: "Tổng số", Width: 80, Template: this.tongSoTemplate},
      { Field: "KhamCapCuu", Title: "Cấp cứu", Width: 80, Template: this.capCuuTemplate},
      { Field: "KhamNoi", Title: "Nội", Width: 80, Template: this.khamNoiTemplate},
      { Field: "KhamNhi", Title: "Nhi", Width: 80, Template: this.khamNhiTemplate},
      { Field: "KhamTaiMuiHong", Title: "TMH", Width: 80, Template: this.khamTaiMuiHongTemplate},
      { Field: "KhamRangHamMat", Title: "RHM", Width: 80, Template: this.khamRangHamMatTemplate},
      { Field: "KhamMat", Title: "Mắt", Width: 80, Template: this.khamMatTemplate},
      { Field: "KhamNgoai", Title: "Ngoại", Width: 80, Template: this.khamNgoaiTemplate},
      { Field: "KhamDaLieu", Title: "Da liễu", Width: 80, Template: this.khamDaLieuTemplate},
      { Field: "KhamPhuSan", Title: "Phụ sản", Width: 80, Template: this.khamPhuSanTemplate},
      { Field: "KhamThamMy", Title: "Thẩm mỹ", Width: 80, Template: this.khamThamMyTemplate},
      { Field: "KhamTiemChung", Title: "Tiêm chủng", Width: 80, Template: this.khamTiemChungTemplate}
    ];

    this.ganThoiGianTimKiemMacDinh();
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
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
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoHoatDongKhamBenhTheoDichVu", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhamBenhTheoDichVu" + dateTimeNow.getFullYear() + ".xlsx");
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
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
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
  }

  ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh: boolean = false) {
    if (xoaThoiGianMacDinh) {
      this.baoCaoSearch.TuNgayFormat = null;
      this.baoCaoSearch.DenNgayFormat = null;
    }
    else {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.minDateTuNgay.setDate(1);

      if (this.baoCaoSearch.TuNgayFormat == null) {
        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
      }
      if (this.baoCaoSearch.DenNgayFormat == null) {
        this.baoCaoSearch.DenNgayFormat = new Date();
      }
    }
  }
}
