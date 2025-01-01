import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormControl } from '@angular/forms';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { KhamDoanChuaKetLuanSearch } from '../kham-doan-ket-luan.model';
import icSearch from "@iconify/icons-ic/twotone-search";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SortDescriptor } from "@progress/kendo-data-query";
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-ket-luan-kham-suc-khoe-doan-chua-ket-luan-list',
  templateUrl: './ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.html',
  styleUrls: ['./ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component.scss']
})
export class KetLuanKhamSucKhoeDoanChuaKetLuanListComponent implements OnInit {
  documentType: DocumentType;
  khamDoanChuaKetLuanSearch: KhamDoanChuaKetLuanSearch = new KhamDoanChuaKetLuanSearch();
  baseRoute: string = "/kham-doan/ket-luan-kham-suc-khoe-doan";
  icSearch = icSearch;
  isSelectDuocPham: boolean = false;

  searchCtrl = new FormControl();
  addtionStringDefault: string = null;
  gridColumns: any[] = [];
  lanDauLoadData: boolean = true;
  changeDataCongTy: boolean = false;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('ketLuanTemplate', { static: true }) ketLuanTemplate: TemplateRef<any>;
  @ViewChild('gioiTinhTemplate', { static: true }) gioiTinhTemplate: TemplateRef<any>;
  @ViewChild('dichVuDaThucHienTemplate', { static: true }) dichVuDaThucHienTemplate: TemplateRef<any>;
  validationErrors: any = [];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  @Input() sort: SortDescriptor[] = [
    {
      field: "MaBN",
      dir: "desc",
    },
  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private apiService: ApiService,

    private route: ActivatedRoute) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
    this.khamDoanChuaKetLuanSearch = new KhamDoanChuaKetLuanSearch();

    this.backWithSearch();
    this.gridColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 50, Sortable: true, Template: this.maTNTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "MaNhanVien", Title: "Mã NV", Width: 30, Sortable: true, ShowTooltip: true },
      { Field: "HoTen", Title: "Tên NV", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "TenNgheNghiep", Title: "ĐV/BP", Width: 30, Sortable: true },
      { Field: "GioiTinh", Title: "GIỚI TÍNH", Width: 30, Sortable: true, Template: this.gioiTinhTemplate },
      { Field: "NamSinh", Title: "NĂM SINH", Width: 30, Sortable: true },
      { Field: "SoDienThoai", Title: "SĐT", Width: 40, Sortable: true },
      { Field: "Email", Title: "EMAIL", Width: 40, Sortable: true },
      { Field: "SoChungMinhThu", Title: "CMT", Width: 30, Sortable: true },
      //{ Field: "TenDanToc", Title: "DÂN TỘC", Width: 30, Sortable: true },
      { Field: "TenTinhThanh", Title: "TỈNH/TP", Width: 40, Sortable: true },
      //{ Field: "NhomDoiTuongKhamSucKhoe", Title: "NHÓM KHÁM", Width: 40, Sortable: true },
      { Field: "DichVuDaThucHien", Title: "TÌNH TRẠNG DV", Width: 40, Sortable: true, Template: this.dichVuDaThucHienTemplate },
      { Field: "KSKKetLuanPhanLoaiSucKhoe", Title: "KẾT LUẬN", Width: 30, Sortable: true, Template: this.ketLuanTemplate },
    ];
    this.lanDauLoadData = false;

  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKhamDoanChuaKetLuan");
        if (additionalSearchString != null) {
          this.khamDoanChuaKetLuanSearch = JSON.parse(additionalSearchString);
          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      let menuInfo = this.authService.getAccessUser();
      var queryString = null;
      if (menuInfo.HinhThucKhamBenh != HinhThucKhamBenh.KhamDoanNgoaiVien) {
        LocalStorageHelper.removeItem("additionalSearchStringKhamDoanChuaKetLuan");
        queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
      }
      else {
        this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = this.authService.getCongTyKhamSucKhoeId();
        this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = this.authService.getHopDongKhamSucKhoeId();
        queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
        LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
      }
      this.gridChild.additionalSearchString = queryString;
    }

  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  clearSearch() {
    this.khamDoanChuaKetLuanSearch.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "chuaketluan") {
      this.khamDoanChuaKetLuanSearch.ChuaKetLuan = event;
    }
    if (tinhTrang == "daketluan") {
      this.khamDoanChuaKetLuanSearch.DaKetLuan = event;
    }
    this.timKiem();
  }

  timKiem() {
    // this.location.replaceState(this.baseRoute + '?holdQuery=true');
    this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');

    this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
    var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
    LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
  }

  congTyKhamSucKhoeChange(event: any) {
    this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
    this.changeDataCongTy = true;
    if (event != undefined && event != null) {
      // this.location.replaceState(this.baseRoute + '?holdQuery=true');
      this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');

      this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
      this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
      this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = event.KeyId;
      this.khamDoanChuaKetLuanSearch.TenCongTy = event.Ten;
      let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
      this.gridChild._additionalSearchString = null;
      LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
      this.gridChild.search();
    } else {
      // this.location.replaceState(this.baseRoute + '?holdQuery=true');
      this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');

      this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId = null;
      this.khamDoanChuaKetLuanSearch.TenCongTy = null;
      this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
      this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
      let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
      this.gridChild._additionalSearchString = queryString;
      LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
      this.gridChild.search();
    }
  }

  soHopDongChange(event: any) {
    this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
    if (event != undefined && event != null) {
      this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = event.KeyId;
      this.khamDoanChuaKetLuanSearch.TenSoHopDong = event.DisplayName;
      this.timKiem();
    } else {
      // this.location.replaceState(this.baseRoute + '?holdQuery=true');
      this.router.navigateByUrl('/kham-doan/ket-luan-kham-suc-khoe-doan?holdQuery=true');

      this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = null;
      this.khamDoanChuaKetLuanSearch.TenSoHopDong = null;
      let queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
      this.gridChild._additionalSearchString = queryString;
      this.gridChild.search();
      LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
    }
  }

  chinhSua(id: number, yeuCauTiepNhanId: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      // this.router.navigate(['/kham-doan/ket-luan-kham-suc-khoe-doan/chi-tiet/' + id + "/yeu-cau-tiep-nhan/" + yeuCauTiepNhanId + '/' + false]);
      let url = '/chi-tiet';
      this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, YeuCauTiepNhanId: yeuCauTiepNhanId } });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  changeLookupHopDong(event) {
    if (!this.lanDauLoadData && this.changeDataCongTy) {
      if (event && event.length > 0 && this.khamDoanChuaKetLuanSearch.CongTyKhamSucKhoeId) {
        if (!this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId) {
          this.khamDoanChuaKetLuanSearch.HopDongKhamSucKhoeId = event[0].KeyId;
          this.khamDoanChuaKetLuanSearch.TenSoHopDong = event[0].DisplayName;
        }
        this.changeDataCongTy = false;
        this.khamDoanChuaKetLuanSearch.LaHopDongDaKetLuan = false;
        var queryString = JSON.stringify(this.khamDoanChuaKetLuanSearch);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
        LocalStorageHelper.setItem("additionalSearchStringKhamDoanChuaKetLuan", queryString);
      }

    }
  }

  redirectKetLuanCLS() {
    this.router.navigate(['/kham-doan/kham-doan-ket-luan-cls-ksk'], { queryParams: { "holdQuery": true } });
  }
}
