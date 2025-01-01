import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCheck from '@iconify/icons-ic/check';
import icPrint from '@iconify/icons-ic/print';
import { FormControl } from '@angular/forms';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanLsTiepNhanNhanVienDetailPopupComponent } from '../kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component';
import { KhamDoanLsTiepNhanInHoSoPopupComponent } from '../kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component';
import { KhamDoanLSTiepNhanNhanVienTimKiem,ExportQueryInfoQueryInfo, ChiTietHopDongKhamSucKhoe,LookupQueryInfo,TiepNhanNhanVienTheoHopDongTimKiemNangCapVo } from '../kham-doan-ls-tiep-nhan-kham-suc-khoe.model';
import { SortDescriptor } from '@progress/kendo-data-query';
import { PhieuDangKyKhamSucKhoePopupComponent } from '../../kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component';
import { KetQuaKhamSucKhoePopupComponent } from '../../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from '../../kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';

@Component({
  selector: 'app-kham-doan-ls-tiep-nhan-detail-popup',
  templateUrl: './kham-doan-ls-tiep-nhan-detail-popup.component.html',
  styleUrls: ['./kham-doan-ls-tiep-nhan-detail-popup.component.scss']
})
export class KhamDoanLsTiepNhanDetailPopupComponent implements OnInit {
  chiTietHopDongKhamSucKhoe = {} as  ChiTietHopDongKhamSucKhoe;
  icSearch = icSearch;
  icCheck = icCheck;
  icPrint = icPrint;

  documentype: DocumentType;
  loading: boolean = false;
  validationErrors: any;
  baseRoute: string = "/kham-doan/kham-doan-ls-tiep-nhan-kham-suc-khoe";
  popupLoadingData: any;
  format: string = 'n2';
  searchCtrl = new FormControl();

  gridDataSource: any = {
    data: [],
    total: 0
  };
  sort: SortDescriptor[] = [{
    field: 'TinhTrang',
    dir: 'asc'
  }];
  exportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo;
  gridColumns: any[] = [];
  timKiemObj: KhamDoanLSTiepNhanNhanVienTimKiem = new KhamDoanLSTiepNhanNhanVienTimKiem();
  idTiepNhan : number;
  // đây là biến tạm, cần cập nhật lại
  isHoanThanhKham: boolean = false;
  tenHopDong : string = null;
  //-------------------------------
  queryInfoLoaihopDong: LookupQueryInfo = new LookupQueryInfo();
  queryInfoTrangThai: LookupQueryInfo = new LookupQueryInfo();

  queryInfoCongTy: LookupQueryInfo = new LookupQueryInfo();
  additionalSearchString : string ="";
  @ViewChild('tenNhanVienTemplate', { static: true }) tenNhanVienTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridNhanVien', { static: false }) gridNhanVien: GridComponent;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private location:Location,
    private router: Router
  ) { }
  ngOnInit() {
    this.documentype = DocumentType.KhamDoanLichSuTiepNhanKhamSucKhoe; // cần cập nhật lại
    let idCongTy = this.route.snapshot.params.idCongTy;
    let idHopDong = this.route.snapshot.params.idHopDong;
    idCongTy = (idCongTy === undefined || idCongTy === null) ? 0 : idCongTy;
    idHopDong = (idHopDong === undefined || idHopDong === null) ? 0 : idHopDong;

    this.chiTietHopDongKhamSucKhoe.CongTyId = idCongTy;
    this.queryInfoCongTy.Id = this.chiTietHopDongKhamSucKhoe.CongTyId;
    this.chiTietHopDongKhamSucKhoe.HopDongId = idHopDong;
    
    let modelgrid =  new TiepNhanNhanVienTheoHopDongTimKiemNangCapVo();
        modelgrid.CongTyId = idCongTy;
        modelgrid.HopDongId =idHopDong;
        modelgrid.IsLichSu = true;
        modelgrid.TrangThai = this.timKiemObj.TrangThai;
    this.additionalSearchString =JSON.stringify(modelgrid);
    this.getById(idHopDong,idCongTy);
    
    this.gridColumns = [
      { Field: "MaNhanVien", Title: "Mã NV", Width: 80},
      { Field: "TenNhanVien", Title: "Tên NV", Width: 220, Template: this.tenNhanVienTemplate},
      { Field: "DonViBoPhan", Title: "ĐV/BP", Width: 90},
      { Field: "GioiTinh", Title: "Giới tính", Width: 90},
      { Field: "NamSinh", Title: "Năm sinh", Width: 90},
      { Field: "SoDienThoai", Title: "SĐT", Width: 90},
      { Field: "Email", Title: "Email", Width: 90},
      { Field: "ChungMinhThu", Title: "CMT", Width: 90},
      { Field: "SHC", Title: "SHC", Width: 90},
      { Field: "DanToc", Title: "Dân tộc", Width: 90},
      { Field: "TinhThanh", Title: "Tỉnh/TP", Width: 90},
      { Field: "NhomKham", Title: "Nhóm khám", Width: 90},
      { Field: "GhiChu", Title: "Ghi chú", Width: 90},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 120, Template: this.tinhTrangTemplate},
      { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate}
    ]
  }
  getById(idHopDong: number,idCongTy: number) {
    // fisrt data DS nhân viên
    this.showPopupLoadingData();
    let model ={
      HopDongId:idHopDong,
      CongTyId:idCongTy
    };
    this.apiService.post<any>("KhamDoan/TimKiemThongTinHopDongKhamTheoCongTy",model)
      .subscribe((resultData) => {
        this.chiTietHopDongKhamSucKhoe = resultData;
        this.queryInfoLoaihopDong.Id = this.chiTietHopDongKhamSucKhoe.LoaiHopDong;
        this.queryInfoTrangThai.Id = this.chiTietHopDongKhamSucKhoe.TrangThai;
        
        this.closePopupLoadingData();
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  clearValidateErrorOtherCallback(event: any) {
    CommonService.clearValidateErrorOtherCallback(this, event);
  }

  // tìm kiếm nhân viên
  searchChanges(event) {
    if (event == null || event == "") {
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemObj.SearchString = null;
    this.gridNhanVien.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    var queryString = JSON.stringify(this.timKiemObj);
    if(this.gridNhanVien != undefined && this.gridNhanVien != null)
    {
      let modelgrid =  new TiepNhanNhanVienTheoHopDongTimKiemNangCapVo();
      modelgrid.CongTyId = this.chiTietHopDongKhamSucKhoe.CongTyId;
      modelgrid.HopDongId =this.chiTietHopDongKhamSucKhoe.HopDongId;
      modelgrid.IsLichSu = true;
      modelgrid.TrangThai = this.timKiemObj.TrangThai;
      modelgrid.SearchString =this.timKiemObj.SearchString;

      this.gridNhanVien._additionalSearchString = JSON.stringify(modelgrid);
      this.gridNhanVien.search();
    }
  }

  inHoSo(phieuIn: any, id : number) {
    if(phieuIn == 1){
      if (this.authService.hasPermission(this.documentype, SecurityOperation.View)) {
        this.dialog.open(SoKhamSucKhoeDinhKyPopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    if(phieuIn == 2){
      if (this.authService.hasPermission(this.documentype, SecurityOperation.View)) {
        this.dialog.open(PhieuDangKyKhamSucKhoePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    if(phieuIn == 3){
      if (this.authService.hasPermission(this.documentype, SecurityOperation.View)) {
        this.dialog.open(KetQuaKhamSucKhoePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: id
        }).afterClosed().subscribe(result => {
        });
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
  }

  showPopupChiTietNhanVien(id: number) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.router.navigate([this.baseRoute + '/nhan-vien/' + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai(){
    this.location.back();
  }
}
