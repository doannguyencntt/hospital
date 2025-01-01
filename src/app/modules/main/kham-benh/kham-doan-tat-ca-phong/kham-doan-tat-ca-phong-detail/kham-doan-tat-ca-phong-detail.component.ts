import { ChangeDetectorRef, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { HoatDongNhanVien, LookupItemVo } from 'src/app/shared/models/common.model';
import { BenhVienHangDoi, HangDoiKhamBenhInputViewModel, ListStatusSelectTabKhamBenh, ThongTinChangeDichVuKhamDoanTatCaPrevious, ThongTinKetLuanKhamDoanPrevious, ThongTinKhamPrevious, YeuCauKhamBenh, YeuCauKhamBenhPrevious } from '../../kham-benh.model';
import { KhamDoanTatCaPhongTimKiemNangCao } from '../kham-doan-tat-ca-phong.model';
import icSearch from "@iconify/icons-ic/twotone-search";
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { LanKhamHienTaiBenhNhanTiepTheoPopupComponent } from '../../kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-tiep-theo-popup/lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component';
import { KetQuaMauPopupComponent } from '../../../kham-doan/kham-doan-ket-luan-cls-ksk/ket-qua-mau-popup/ket-qua-mau-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../../../kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { PopupKetQuaKskEditComponent } from '../../../kham-doan/kham-doan-ket-luan/popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component';
import { KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent } from '../../../kham-doan/kham-doan-ket-luan/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component';
import { Subscription } from 'rxjs';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanTatCaPhongDvChuaThucHienPopupComponent } from '../kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component';
declare var jQuery: any;
@Component({
  selector: 'app-kham-doan-tat-ca-phong-detail',
  templateUrl: './kham-doan-tat-ca-phong-detail.component.html',
  styleUrls: ['./kham-doan-tat-ca-phong-detail.component.scss'],
  animations: [stagger60ms, fadeInUp400ms]
})
export class KhamDoanTatCaPhongDetailComponent implements OnInit {

  icSearch = icSearch;
  tabActive: string = "card0";
  documentType: DocumentType = DocumentType.KhamDoanKhamBenhTatCaPhong;
  baseRoute: string = "/kham-doan/kham-doan-tat-ca-phong";

  benhNhanHienTai: BenhVienHangDoi;
  phongBenhVienId: number = 0;
  popupLoadingData: any;
  thongTinKhamTemp: ThongTinKhamPrevious;
  thongTinKetLuanKhamDoanPrevious: ThongTinKetLuanKhamDoanPrevious;
  yeuCauKhamBenhPrevious: YeuCauKhamBenhPrevious;
  thongTinChangeDichVuKhamDoanTatCaPrevious: ThongTinChangeDichVuKhamDoanTatCaPrevious;
  validationKetLuanErrors: any;

  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";
  lstStatusSelectTabKhambenh: ListStatusSelectTabKhamBenh = new ListStatusSelectTabKhamBenh();
  isSelectedParentTabKhamBenh: boolean = true;

  gridChuanBiKhamColumns: any[] = [];
  dataSourceChuanBiKham = {
    data: [],
    total: 0,
  };
  isScanF1: boolean = false;
  modelQRCode: any;
  slHangDoi: number = 0;
  timKiemObj: KhamDoanTatCaPhongTimKiemNangCao = new KhamDoanTatCaPhongTimKiemNangCao();
  phongKhamHienTai: LookupItemVo = {
    DisplayName: null,
    KeyId: Number(this.authService.getPhongLamViecId()),
  };
  
  isKhamDoan: boolean = true;
  isKhamDoanTatCa: boolean = true;
  loginNoiVien: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
  hinhThucKham: HinhThucKhamBenh = HinhThucKhamBenh.NoiVien;
  isLoadingKhamDoan: boolean = false;
  timeSaveChangeDataChuyenKhoaKSK: Date = null;
  isUpdateTimeSaveChuyenKhoaKSK: boolean = false;

  subscription: Subscription;
  phongKhamBenh: HoatDongNhanVien;

  // cập nhật thêm tính năng chỉ xem ở màn hình khám đoàn tất cả
  isReadOnly: boolean = false;

  @ViewChild("maTNTemplate", { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild("hoTenTemplate", { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild("tienTrinhTemplate", { static: true }) tienTrinhTemplate: TemplateRef<any>;
  @ViewChild('gridTatCa', { read: GridComponent, static: true }) gridTatCa: GridComponent;
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private location:Location,
    private broadcastService: BroadcastService
  ) { }

  ngOnInit() {
    this.benhNhanHienTai = new BenhVienHangDoi();
    this.phongBenhVienId = this.benhNhanHienTai.PhongBenhVienId;

    let menuInfo = this.authService.getAccessUser();
    this.hinhThucKham = menuInfo.HinhThucKhamBenh;

    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)
      && !this.authService.hasPermission(this.documentType, SecurityOperation.Add)
      && !this.authService.hasPermission(this.documentType, SecurityOperation.Update)
      && !this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.isReadOnly = true;
    }

    // xử lý load lại hàng đợi the query param
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachHangChoKhamDoanTatCa");
        console.log('additionalSearchString', additionalSearchString);
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      let menuInfo = this.authService.getAccessUser();
      var queryString = null;
      if (menuInfo.HinhThucKhamBenh != HinhThucKhamBenh.KhamDoanNgoaiVien) {
        LocalStorageHelper.removeItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa");
        queryString = JSON.stringify(this.timKiemObj);
      }
      else {
        this.timKiemObj.CongTyId = this.authService.getCongTyKhamSucKhoeId();
        this.timKiemObj.HopDongId = this.authService.getHopDongKhamSucKhoeId();

        queryString = JSON.stringify(this.timKiemObj);
        LocalStorageHelper.setItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa", queryString);
        hasLocalSearchString = true;
      }
    }
    this.refreshHangDoiHienTai();


    this.gridChuanBiKhamColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 60, Sortable: false, Template: this.maTNTemplate },
      { Field: "HoTen", Title: "Họ tên", MinWidth: 100, Sortable: false, ShowTooltip: true, Template: this.hoTenTemplate },
      { Field: "TenGioiTinh", Title: "GT", Width: 35, Sortable: false },
      // { Field: "Tuoi", Title: "Tuổi", Width: 30, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 35, Sortable: false },
      //{ Field: "TienTrinh", Title: "DV", Width: 30, Sortable: false, Template: this.tienTrinhTemplate }
    ];
  }

  showPopupLoadingData() {
    console.log('this.popupLoadingData.openDialogs', this.popupLoadingData);
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

  ngAfterContentInit() {
    this.subscription = this.broadcastService.on("ChuyenPhong", (event) => {
      if (event.message) {
        console.log('event.message', event.message);
        this.ChuyenPhongNoiBo(event.message);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ChuyenPhongNoiBo(item: any){
    console.log('ChuyenPhongNoiBo', item);
    let phongBenhVienId = this.authService.getPhongLamViecId();
    if (phongBenhVienId !== item.KeyId) {
      if (this.benhNhanHienTai.Id != 0 && this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
        this.saveChangeData(null, null, null, item);
      }
      else
      {
        this.xuLyChuyenPhongKham(item);
      }
    }
    else{
      this.closePopupLoadingData();
            this.broadcastService.broadcast({
                name: "ChuyenPhongThanhCong",
                message: true,
            });
    }
  }

  xuLyChuyenPhongKham(item) {
    this.phongKhamHienTai.KeyId = item.KeyId;
    this.LuuHoatDongNhanVien();

    // //chọn phòng khám nào load data phần đó
    // if (item) {
    //   this.refreshHangDoiHienTai();
    // }
    // this.broadcastService.broadcast({
    //   name: "ChuyenPhongThanhCong",
    //   message: true,
    // });
    // this.closePopupLoadingData();
  }

  LuuHoatDongNhanVien() {
    this.authService.setPhongLamViecId(this.phongKhamHienTai.KeyId);
    this.phongKhamBenh = {} as HoatDongNhanVien;
    this.phongKhamBenh.PhongKhamBenhId = this.phongKhamHienTai.KeyId;
    this.apiService
      .post("HoatDongNhanVien/LuuHoatDongNhanVien", this.phongKhamBenh)
      .subscribe((resultData) => {
        this.closePopupLoadingData();
        this.broadcastService.broadcast({
          name: "ChuyenPhongThanhCong",
          message: true,
        });
        
        this.refreshPage();
      },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  refreshPage() {
    var currentUrl = this.router.url.lastIndexOf("?") >= 0 ? this.router.url.substr(0, this.router.url.lastIndexOf("?")) : this.router.url;
    var queryParams = null;
    this.route.queryParams
      .subscribe(params => {
        queryParams = params;
      });
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([currentUrl], { queryParams: queryParams })
    );
  }

  loadThongTinKhamDoanKhamBenh() {
    this.refreshHangDoiHienTai();

    this.getBenhNhanDangKham(this.benhNhanHienTai.Id);
  }

  refreshHangDoiHienTai(showPopupLoading: boolean = false) {
    if (this.timKiemObj.CongTyId == null) {
      this.clearHangDoi();
    }
    else {
      if (showPopupLoading) {
        this.showPopupLoadingData();
      }
      this.location.replaceState(this.baseRoute + '?holdQuery=true');
      this.timKiemObj.HopDongKhamNhanVienId = this.benhNhanHienTai.Id != 0 ? this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId : null;
      let queryString = JSON.stringify(this.timKiemObj);
      LocalStorageHelper.setItem("additionalSearchStringDanhSachHangChoKhamDoanTatCa", queryString);

      this.apiService.post<Array<YeuCauKhamBenh>>("KhamBenh/GetDanhSachHangDoiKhamDoanTatCa", this.timKiemObj)
        .subscribe((resultData) => {
          if (resultData !== undefined && resultData != null) {
            this.dataSourceChuanBiKham = {
              data: resultData,
              total: resultData.length,
            };
            if (this.dataSourceChuanBiKham.data.length != this.slHangDoi) {
              this.slHangDoi = this.dataSourceChuanBiKham.data.length;
            }
          } else {
            this.clearHangDoi();
          }
          this.closePopupLoadingData();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
    }
  }

  clearHangDoi() {
    this.dataSourceChuanBiKham = {
      data: [],
      total: 0,
    };
    this.slHangDoi = 0;
  }

  getBenhNhanDangKham(hangDoiId: number, isLoading: boolean = true) {
    this.closePopupLoadingData();
    this.benhNhanHienTai = new BenhVienHangDoi();
    this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
    this.benhNhanHienTai.isShowPanelItemKetLuan = false;

    if(isLoading)
    {
      this.showPopupLoadingData();
    }
    this.apiService.get<BenhVienHangDoi>("KhamBenh/GetYeuCauKhamBenhDangKhamTheoHopDongKhamDoan?hangDoiId=" + hangDoiId)
      .subscribe(
        (resultData) => {
          if (resultData !== undefined && resultData != null) {
            this.benhNhanHienTai = resultData;
            this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
              this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplate
            );

            this.refreshHangDoiHienTai();

            this.bindDataDynamicComponent();

            this.benhNhanHienTai.YeuCauKhamBenh.IsKhamDoan = true;
            this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
              element.TemplateKhamCacCoQuanObj = JSON.parse(element.ThongTinKhamTheoDichVuTemplate);
              this.bindDataDynamicComponent(element.TemplateKhamCacCoQuanObj, element.ThongTinKhamTheoDichVuData);
            });

            this.ganThongTinKhamTamThoi();

            this.unSelectedTab();
            this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
            this.isSelectedParentTabKhamBenh = true;

            if (
              this.benhNhanHienTai.YeuCauTiepNhan.NamSinh != null &&
              this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh != null &&
              this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh != null
            ) {
              var ngaySinh = new Date(
                this.benhNhanHienTai.YeuCauTiepNhan.ThangSinh +
                "/" +
                this.benhNhanHienTai.YeuCauTiepNhan.NgaySinh +
                "/" +
                this.benhNhanHienTai.YeuCauTiepNhan.NamSinh +
                "/"
              );
              this.getAge(ngaySinh, new Date());
            }

            this.closePopupLoadingData();
          } else {
            this.benhNhanHienTai = new BenhVienHangDoi();
            this.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        }
      );
  }

  timKiemBenhNhan(event: any) {
    if (event.key == "Enter") {
      this.refreshHangDoiHienTai();
    }
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
      "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }

  changeQR(event) {
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      var dataTimKiem = event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiemObj.SearchString = dataTimKiem[0];
      } else {
        this.timKiemObj.SearchString = event.slice(0, -1);
      }
      this.refreshHangDoiHienTai();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }

  timeoutSearchChange: any;
  searchChange(event) {
    var self = this;
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      self.timeoutSearchChange = setTimeout(function () {
        self.modelQRCode = event;
        self.changeQR(self.modelQRCode);
      }, 10);
    }
    else if (event == null || event == "") {
      this.modelQRCode = null;
      this.refreshHangDoiHienTai();
    }
  }

  batDauKham(hangDoi: any) {
    if (hangDoi == undefined || hangDoi == null || hangDoi.Id == this.benhNhanHienTai.Id) {
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update) 
        || (this.isReadOnly && (this.benhNhanHienTai.Id == 0 || !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh))) {
      this.showPopupLoadingData();
      if (this.benhNhanHienTai.Id != 0) {
        if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
          this.saveChangeData(hangDoi.Id, null, null, null, false);
        }
        else {
          this.getBenhNhanDangKham(hangDoi.Id);
        }
      } else {
        this.getBenhNhanDangKham(hangDoi.Id);
      }
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  processDynamicComponent(thongTinTempLateObj: any = null) {
    let dataKhamTheoTemplate: any;
    let lstDataKhamTheoTemplate: any[] = [];
    let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
    if (tempplate != null) {
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
        = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
    }
    let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;

    if (
      thongTinKhamTheoDichVuTemplateObj !== null
    ) {
      thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
        (item) => {
          if (
            item.groupItems != undefined &&
            item.groupItems != null &&
            item.groupItems.length > 0
          ) {
            item.groupItems.forEach((element) => {
              if (element.Value != undefined && element.Value !== null) {
                dataKhamTheoTemplate = {
                  Id: element.Id,
                  Value: element.Value,
                };
                lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
              }
            });
          } else if (item.Value != undefined && item.Value !== null) {
            dataKhamTheoTemplate = {
              Id: item.Id,
              Value: item.Value,
            };
            lstDataKhamTheoTemplate.push(dataKhamTheoTemplate);
          }
        }
      );

      let strLstDataKhamTheoTemplate = JSON.stringify(lstDataKhamTheoTemplate);
      let saveTemplate =
        '{"DataKhamTheoTemplate": ' + strLstDataKhamTheoTemplate + "}";
      return saveTemplate;
    }
    return null;
  }

  bindDataDynamicComponent(thongTinTempLateObj: any = null, thongTinDataObj: any = null) {
    let tempplate = this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.find(x => x.IsDungChuyenKhoaLogin);
    if (tempplate != null) {
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
        = tempplate.TemplateKhamCacCoQuanObj != null && tempplate.TemplateKhamCacCoQuanObj != "" ? Object.assign({}, tempplate.TemplateKhamCacCoQuanObj) : null;
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = tempplate.ThongTinKhamTheoDichVuData;
    }
    let strData = thongTinDataObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData : thongTinDataObj;
    let thongTinKhamTheoDichVuTemplateObj = thongTinTempLateObj == null ? this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj : thongTinTempLateObj;
    if (strData != undefined && strData != null) {
      let dataObj = JSON.parse(strData);
      let itemTemp = null;
      if (thongTinKhamTheoDichVuTemplateObj !== null) {
        thongTinKhamTheoDichVuTemplateObj.ComponentDynamics.forEach(
          (item) => {
            if (
              item.groupItems != undefined &&
              item.groupItems != null &&
              item.groupItems.length > 0
            ) {
              item.groupItems.forEach((element) => {
                itemTemp = dataObj.DataKhamTheoTemplate.find(
                  (x) => x.Id == element.Id
                );
                if (itemTemp != null) {
                  element.Value = itemTemp.Value;
                }
              });
            } else {
              itemTemp = dataObj.DataKhamTheoTemplate.find(
                (x) => x.Id == item.Id
              );
              if (itemTemp != null) {
                item.Value = itemTemp.Value;
              }
            }
          }
        );
      }
    }
  }

  ganThongTinKhamTamThoi() {
    let yeuCauKhamBenhKhamBoPhanKhacs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs.slice();
    let yeuCauKhamBenhChanDoanPhanBiets = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets.slice();

    //trường hợp sửa data đã lưu trực tiếp trên grid
    const ketQuaSinhHieus = [];
    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));


    let khamBenhBenhNhanDiUngThuocs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs.slice();
    let khamBenhBenhNhanTienSuBenhs = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs.slice();
    let yeuCauKhamBenhBoPhanTonThuongs = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs.slice();
    let ThongTinKhamTheoDichVuTemplateObj = JSON.stringify(
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj
    );

    // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
    var isCheckDichVuKhamSucKhoeTatCas = [];
    var isChangeDichVuKhamSucKhoeTatCas = [];
    var templateDichVuKhamSucKhoeTatCas = [];
    this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
      templateDichVuKhamSucKhoeTatCas.push(JSON.stringify(
        element.TemplateKhamCacCoQuanObj
      ));

      // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
      isCheckDichVuKhamSucKhoeTatCas.push(element.IsCheckedDichVu);
      isChangeDichVuKhamSucKhoeTatCas.push(element.IsChangeData);
    });


    ketQuaSinhHieus.forEach(element => {
      if (element.IsUpdate) {
        element.IsUpdate = false;
      }
    });

    this.thongTinKhamTemp = new ThongTinKhamPrevious(
      //BVHD-3706
      // this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan,
      this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan,

      this.benhNhanHienTai.YeuCauKhamBenh.BenhSu,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu,
      this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan,
      this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan,
      this.benhNhanHienTai.YeuCauKhamBenh.HoHap,
      this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa,
      this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc,
      this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh,
      this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop,
      this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong,
      this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat,
      this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong,
      this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa,
      this.benhNhanHienTai.YeuCauKhamBenh.DaLieu,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId,
      this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD,
      this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu,
      ThongTinKhamTheoDichVuTemplateObj,
      yeuCauKhamBenhKhamBoPhanKhacs,
      yeuCauKhamBenhChanDoanPhanBiets,
      ketQuaSinhHieus,
      khamBenhBenhNhanDiUngThuocs,
      khamBenhBenhNhanTienSuBenhs,
      yeuCauKhamBenhBoPhanTonThuongs,
      null,
      templateDichVuKhamSucKhoeTatCas
    );

    this.thongTinKetLuanKhamDoanPrevious = new ThongTinKetLuanKhamDoanPrevious(
      this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang,
      this.benhNhanHienTai.YeuCauTiepNhan.KSKDanhGiaCanLamSang,
      this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId,
      this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu,
      this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat
    );

    // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
    this.thongTinChangeDichVuKhamDoanTatCaPrevious = new ThongTinChangeDichVuKhamDoanTatCaPrevious(
      isCheckDichVuKhamSucKhoeTatCas,
      isChangeDichVuKhamSucKhoeTatCas
    );
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;

    // let days = date_2.getDate() - date_1.getDate() + 1;
    let days = date_2.getDate() - date_1.getDate();//Thach edit

    if (days < 0) {
      date_2.setMonth(date_2.getMonth() - 1);
      days += this.DaysInMonth(date_2);
    }

    let months = date_2.getMonth() - date_1.getMonth();
    if (months < 0) {
      date_2.setFullYear(date_2.getFullYear() - 1);
      months += 12;
    }
    let years = date_2.getFullYear() - date_1.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.isDuoi6Tuoi = true;
    } else {
      this.isDuoi6Tuoi = false;
    }

    this.Duoi6TuoiDisplay =
      years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth(),
      1
    );
    let monthEnd: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth() + 1,
      1
    );
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }

  onParentTabSelect(event) {
    if (event.index == 0 || event.title == 'Khám bệnh') {
      // dùng để ràng buộc hot key
      this.isSelectedParentTabKhamBenh = true;

      // reload hàng chờ
      this.refreshHangDoiHienTai();
    }
    else {
      this.isSelectedParentTabKhamBenh = false;
    }
  }

  unSelectedTab() {
    this.lstStatusSelectTabKhambenh.selectedTabKhamBenh = false;
    this.lstStatusSelectTabKhambenh.selectedTabLichSuKham = false;
    this.lstStatusSelectTabKhambenh.selectedTabChiDinh = false;
    this.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = false;
    this.lstStatusSelectTabKhambenh.selectedTabChanDoan = false;
    this.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = false;
    this.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = false;
  }

  scrollTo(element) {
    jQuery(".sidenav-content").animate({
      scrollTop: jQuery("#" + element).position().top + 60,
    });
    this.tabActive = element;
  }

  chuyenDen(element: any, event: any, isKhamDoan: boolean = false) {
    var self = this;
    // setTimeout(function () {
    //   self.scrollTo(element);
    // }, 100);
    if (!(self.isKhamDoan && event.index == 0)) {
      setTimeout(function () {
          self.scrollTo(element);
      }, 100);
  }
    if (event.index == 0 || event.title == "KHÁM BỆNH") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
    }
    if (event.index == 1 || event.title == "LỊCH SỬ KHÁM") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
    }
    if (event.index == 2 || event.title == "CHỈ ĐỊNH") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
    }
    if (event.index == 3 || event.title == "KQ CLS") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
    }
    if (event.index == 5 || event.title == "TƯỜNG TRÌNH PT/TT") {
      self.unSelectedTab();
      self.lstStatusSelectTabKhambenh.selectedTabTuongTrinhPttt = true;
      self.validationKetLuanErrors = [];
    }
    if (!isKhamDoan) {
      if (event.index == 4 || event.title == "CHẨN ĐOÁN") {
        self.unSelectedTab();
        self.lstStatusSelectTabKhambenh.selectedTabChanDoan = true;
        self.validationKetLuanErrors = [];
      }
    } else {
      if (event.index == 4 || event.title == "TƯ VẤN THUỐC") {
        self.unSelectedTab();
        self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
        self.validationKetLuanErrors = [];
      }
    }
   
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  cancelChangeData() {
    this.benhNhanHienTai.validationErrors = null;
    this.ref.detectChanges();

    //BVHD-3706
    ///this.benhNhanHienTai.YeuCauTiepNhan.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;
    this.benhNhanHienTai.YeuCauKhamBenh.TrieuChungTiepNhan = this.thongTinKhamTemp.TrieuChungTiepNhan;

    this.benhNhanHienTai.YeuCauKhamBenh.BenhSu = this.thongTinKhamTemp.BenhSu;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanCuaNoiGioiThieu = this.thongTinKhamTemp.ChanDoanCuaNoiGioiThieu;

    this.benhNhanHienTai.YeuCauKhamBenh.KhamToanThan = this.thongTinKhamTemp.KhamToanThan;
    this.benhNhanHienTai.YeuCauKhamBenh.TuanHoan = this.thongTinKhamTemp.TuanHoan;
    this.benhNhanHienTai.YeuCauKhamBenh.HoHap = this.thongTinKhamTemp.HoHap;
    this.benhNhanHienTai.YeuCauKhamBenh.TieuHoa = this.thongTinKhamTemp.TieuHoa;
    this.benhNhanHienTai.YeuCauKhamBenh.ThanTietNieuSinhDuc = this.thongTinKhamTemp.ThanTietNieuSinhDuc;

    this.benhNhanHienTai.YeuCauKhamBenh.ThanKinh = this.thongTinKhamTemp.ThanKinh;
    this.benhNhanHienTai.YeuCauKhamBenh.CoXuongKhop = this.thongTinKhamTemp.CoXuongKhop;
    this.benhNhanHienTai.YeuCauKhamBenh.TaiMuiHong = this.thongTinKhamTemp.TaiMuiHong;
    this.benhNhanHienTai.YeuCauKhamBenh.RangHamMat = this.thongTinKhamTemp.RangHamMat;
    this.benhNhanHienTai.YeuCauKhamBenh.NoiTietDinhDuong = this.thongTinKhamTemp.NoiTietDinhDuong;
    this.benhNhanHienTai.YeuCauKhamBenh.SanPhuKhoa = this.thongTinKhamTemp.SanPhuKhoa;
    this.benhNhanHienTai.YeuCauKhamBenh.DaLieu = this.thongTinKhamTemp.DaLieu;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoICDId = this.thongTinKhamTemp.ChanDoanSoBoICDId;
    this.benhNhanHienTai.YeuCauKhamBenh.TenChanDoanSoBoICD = this.thongTinKhamTemp.TenChanDoanSoBoICD;
    this.benhNhanHienTai.YeuCauKhamBenh.ChanDoanSoBoGhiChu = this.thongTinKhamTemp.ChanDoanSoBoGhiChu;
    this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuTemplateObj = JSON.parse(
      this.thongTinKhamTemp.ThongTinKhamTheoDichVuTemplateObj
    );

    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhKhamBoPhanKhacs = this.thongTinKhamTemp.YeuCauKhamBenhKhamBoPhanKhacs.slice();
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhChanDoanPhanBiets = this.thongTinKhamTemp.YeuCauKhamBenhChanDoanPhanBiets.slice();
    //this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = this.thongTinKhamTemp.KetQuaSinhHieus.slice();
    // trường hợp sửa data đã lưu trực tiếp trên grid
    const ketQuaSinhHieus = [];
    this.thongTinKhamTemp.KetQuaSinhHieus.forEach(val => ketQuaSinhHieus.push(Object.assign({}, val)));
    this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus = ketQuaSinhHieus;


    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs = this.thongTinKhamTemp.KhamBenhBenhNhanDiUngThuocs.slice();
    this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs = this.thongTinKhamTemp.KhamBenhBenhNhanTienSuBenhs.slice();
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhBoPhanTonThuongs = this.thongTinKhamTemp.YeuCauKhamBenhBoPhanTonThuongs.slice();

    this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach((element, index) => {
      element.TemplateKhamCacCoQuanObj = JSON.parse(this.thongTinKhamTemp.TemplateDichVuKhamSucKhoeTatCas[index]);

      // cập nhật chọn/bỏ chọn khám dịch ở khám đoàn tất cả
      element.IsCheckedDichVu = this.thongTinChangeDichVuKhamDoanTatCaPrevious.IsCheckDichVuKhamSucKhoeTatCas[index];
      element.IsChangeData = false;
    });

    // gán lại thông tin kết luận khám đoàn
    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang = this.thongTinKetLuanKhamDoanPrevious.KSKKetQuaCanLamSang;
    this.benhNhanHienTai.YeuCauTiepNhan.KSKDanhGiaCanLamSang = this.thongTinKetLuanKhamDoanPrevious.KSKDanhGiaCanLamSang;
    this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId = this.thongTinKetLuanKhamDoanPrevious.PhanLoaiSucKhoeId;
    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu = this.thongTinKetLuanKhamDoanPrevious.KSKKetLuanGhiChu;
    this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat = this.thongTinKetLuanKhamDoanPrevious.KSKKetLuanCacBenhTat;

    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;
  }

  saveChangeData(hangDoiId: number = null, luaChonHoanThanhKham: any = null, phieuIn: number = null, chuyenPhong: any = null, isLoading: boolean = true) {
    //this.closePopupLoadingData();
    if (this.authService.hasPermission(this.documentType,SecurityOperation.Update)) {
      this.benhNhanHienTai.validationErrors = null;
      this.ref.detectChanges();
      if(isLoading)
      {
        this.loadingPage();
      }
      this.benhNhanHienTai.YeuCauKhamBenh.ThongTinKhamTheoDichVuData = this.processDynamicComponent();
      this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
        element.ThongTinKhamTheoDichVuData = this.processDynamicComponent(element.TemplateKhamCacCoQuanObj);
      });
      this.benhNhanHienTai.YeuCauTiepNhan.IsKhamDoanTatCa = true;
      this.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham = luaChonHoanThanhKham != null;
      this.apiService
        .post<any>("KhamBenh/LuuThongTinKhamBenhKhamDoan", this.benhNhanHienTai)
        .subscribe(
          (resultData) => {
            if(!this.isUpdateTimeSaveChuyenKhoaKSK)
            {
              let mess = this.benhNhanHienTai.YeuCauKhamBenh.IsHoanThanhKham ? "Hoàn thành khám" : "Lưu";
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
            }

            if (luaChonHoanThanhKham == null) {
              this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh = false;

              this.benhNhanHienTai.isShowPanelItemKhamBenh = false;
              this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs =
                resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanDiUngThuocs;
              this.benhNhanHienTai.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs =
                resultData.YeuCauTiepNhan.BenhNhan.KhamBenhBenhNhanTienSuBenhs;
              this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus =
                resultData.YeuCauTiepNhan.KetQuaSinhHieus;

              if(this.benhNhanHienTai.YeuCauTiepNhan.IsDuChuyenKhoaKhamSucKhoeChinh != true)
              {
                this.benhNhanHienTai.YeuCauTiepNhan.PhanLoaiSucKhoeId = null;
                this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanPhanLoaiSucKhoe = null;
                //BVHD-3349
                // this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanGhiChu = null;
                // this.benhNhanHienTai.YeuCauTiepNhan.KSKKetLuanCacBenhTat = null;
              }

              this.ganThongTinKhamTamThoi();
              if (hangDoiId != null) {
                this.getBenhNhanDangKham(hangDoiId, isLoading);
              }
              else {
                this.closePopupLoadingData();
                if(phieuIn)
                {
                  if(phieuIn == 1) // In Sổ KSK định kỳ
                  {
                    this.inSoKSK();
                  }
                  else if(phieuIn == 2) // In kết quả KSK
                  {
                    this.inKetQuaKSK();
                  }
                }
                else if(this.isUpdateTimeSaveChuyenKhoaKSK)
                {
                  this.timeSaveChangeDataChuyenKhoaKSK = new Date();
                  this.isUpdateTimeSaveChuyenKhoaKSK = false;
                }
                else if(chuyenPhong != null){
                  this.xuLyChuyenPhongKham(chuyenPhong);
                }
              }
            }
            else {
              if (luaChonHoanThanhKham == "tuChon") {
                this.benhNhanHienTai = new BenhVienHangDoi();
                this.refreshHangDoiHienTai();
              } else if (luaChonHoanThanhKham > 0) {
                // result là id hàng đợi tiếp theo
                this.getBenhNhanDangKham(luaChonHoanThanhKham);
              }
            }
          },
          (err: ApiError) => {
            this.benhNhanHienTai.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          }
        );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  hoanThanhKham() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.timKiemObj.HopDongKhamNhanVienId = this.benhNhanHienTai.Id != 0 ? this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId : null;

      // 22/11/2021: cập nhật KSK ko mặc định tự chọn người bệnh khi hoàn thành khám
      this.saveChangeData(null, "tuChon");
      // let dialogRefTiepTheo = this.dialog.open(LanKhamHienTaiBenhNhanTiepTheoPopupComponent, {
      //   disableClose: false,
      //   width: "600px",
      //   data: {
      //     "IsKhamDoanTatCa": true,
      //     "QueryInfo": this.timKiemObj
      //   },
      // })
      //   .afterClosed()
      //   .subscribe((result) => {
      //     if (
      //       result == "boQua" ||
      //       result == null ||
      //       result == 0
      //     ) {
      //       // giữ nguyên màn hình hiện tại 
      //     }
      //     else {
      //       this.saveChangeData(null, result);
      //     }
      //   });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  kiemTraDichVuChuaThucHienKhiHoanThanhKham(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có chắn chắn muốn lưu và hoàn thành khám không?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          // xử lý kiểm tra dịch vụ chưa thực hiện
          let arrayYCKBDangChonId = [];
          this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
            if (element.IsCheckedDichVu) {
              arrayYCKBDangChonId.push(element.YeuCauKhamBenhId);
            }
          });
          var kiemTraVo = {
            YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId,
            YeuCauKhamBenhDangChonThucHienIds: arrayYCKBDangChonId
          };
          this.apiService.put<any>("KhamBenh/KiemTraDichVuKhamDoanChuaThucHien", kiemTraVo).subscribe(resultData => {
            // BVHD-3668: xử lý kiểm tra nhóm DV Khám chưa thực hiện đã cập nhật ở API chung với nhóm DVKT
            // let arrayTenDichVuKhamKhongThucHien = [];
            // this.benhNhanHienTai.YeuCauKhamBenh.TemplateDichVuKhamSucKhoes.forEach(element => {
            //   if (!element.IsCheckedDichVu) {
            //     arrayTenDichVuKhamKhongThucHien.push(element.TenChuyenKhoa);
            //   }
            // });
            // resultData.DichVuKhamBenhs = arrayTenDichVuKhamKhongThucHien;
            if (resultData && (resultData.DichVuKhamBenhs.length > 0 || resultData.DichVuKyThuats.length > 0)) {
              this.dialog.open(KhamDoanTatCaPhongDvChuaThucHienPopupComponent, {
                disableClose: false,
                width: '750px',
                data: resultData,
              }).afterClosed().subscribe((result) => {
                if (result === 'Yes') {
                  this.hoanThanhKham();
                }
              });
            }
            else {
              this.hoanThanhKham();
            }
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ketQuaMau() {
    this.dialog.open(KetQuaMauPopupComponent, {
        width: "400px",
        data: { Model: null }
      })
      .afterClosed()
      .subscribe((result) => {
        if (result.Model != undefined) {
          result.Model.Data.forEach(element => {
            if (element.isCheck == true) {
              this.benhNhanHienTai.YeuCauTiepNhan.KSKKetQuaCanLamSang += element.NoiDung + ',';
            }
          });
        }
      });
  }

  xuLyIn(phieuIn: number) {
    if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
      this.saveChangeData(null, null, phieuIn);
    }
    else {
      if (phieuIn == 1) {
        this.inSoKSK();
      }
      else if (phieuIn == 2) {
        this.inKetQuaKSK();
      }
    }
  }

  inSoKSK() {
      this.dialog.open(SoKhamSucKhoeDinhKyPopupComponent, {
        disableClose: false,
        width: '1000px',
        data: this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId
      });
  }

  inKetQuaKSK() {
    this.apiService.post<any>("KhamDoan/GetDataKetQuaKSKDoanEdit?hopDongKhamSucKhoeId=" + this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId).subscribe(
      (resData) => {
        if (resData != undefined && resData != null) {
          let dialogRef = this.dialog.open(PopupKetQuaKskEditComponent, {
            disableClose: false,
            width: '1500px',
            height: 'auto',
            data: {
              Model: resData,
              hopDongKhamSucKhoeId: this.benhNhanHienTai.YeuCauTiepNhan.HopDongKhamSucKhoeNhanVienId,
              YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId
            }
          });
          dialogRef.afterClosed().subscribe(result => {
          });
        }
      },
      (err: ApiError) => {
        this.benhNhanHienTai.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  xuLySaveDataChoKetQuaMauChuyenKhoaKSK(event){
    console.log('xuLySaveDataChoKetQuaMauChuyenKhoaKSK', event);
    this.isUpdateTimeSaveChuyenKhoaKSK = true;
    this.saveChangeData();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    var self = this;

    if (self.benhNhanHienTai.Id != 0) {
      // kiểm tra lưu // ctr + s
      if (event.ctrlKey && event.keyCode == 83) {
        if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
          if (this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh && !this.isReadOnly) {
            event.preventDefault();
            if (this.dialog.openDialogs.length > 0) {
              return;
            }
            this.saveChangeData();
          } else if (!this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh) {
            event.preventDefault();
          }
          else
          {
            event.preventDefault();
          }
        }
      }
      // esc
      if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh) {
        // kiểm tra hủy
        if (
          event.keyCode == 27 &&
          this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
          && !this.isReadOnly
        ) {
          event.preventDefault();
          this.cancelChangeData();
        } else if (
          event.keyCode == 27 &&
          !this.benhNhanHienTai.YeuCauKhamBenh.IsChangeKhamBenh
        ) {
          event.preventDefault();
        }
      }

      // ctrl + f1
      let kendoTab = "card";
      if (event.ctrlKey && event.keyCode == 112) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabKhamBenh = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + f2
      if (event.ctrlKey && event.keyCode == 113) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabLichSuKham = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + f3
      if (event.ctrlKey && event.keyCode == 114) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabChiDinh = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + f5
      if (event.ctrlKey && event.keyCode == 116) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabKetQuaCLS = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + f6
      if (event.ctrlKey && event.keyCode == 117) {
        event.preventDefault();
        setTimeout(function () {
          self.unSelectedTab();
          self.lstStatusSelectTabKhambenh.selectedTabTuVanThuocKhamDoan = true;
          self.scrollTo(kendoTab);
        }, 100);
      }

      // ctrl + p
      if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault();
      }

      // ctrl + H
      if (event.ctrlKey && event.keyCode == 72) {
        if (self.lstStatusSelectTabKhambenh.selectedTabKhamBenh  && !this.isReadOnly) {
          event.preventDefault();
          if (this.dialog.openDialogs.length > 0) {
            return;
          }
          //self.saveChangeData(null, true);
          self.kiemTraDichVuChuaThucHienKhiHoanThanhKham();
        } else {
          event.preventDefault();
        }
      }
    } else {
      if (
        event.ctrlKey &&
        (event.keyCode == 83 ||
          event.keyCode == 27 ||
          event.keyCode == 112 ||
          event.keyCode == 113 ||
          event.keyCode == 114 ||
          event.keyCode == 115 ||
          event.keyCode == 116 ||
          event.keyCode == 117 ||
          event.keyCode == 39 ||
          event.keyCode == 80 ||
          event.keyCode == 72)
      ) {
        event.preventDefault();
      }
    }
  }

  chuyenLoaiKham() {
    // cần xử lý lưu data trước khi chuyển
    this.isLoadingKhamDoan = true;

    var url = "/kham-benh"
    this.router.navigate([url], { queryParams: { IsKhamDoanTatCa: true } });
  }
}
