import { Location } from '@angular/common';
import { AfterContentInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
import { KhamDoanTiepNhanNhanVienTimKiem } from '../kham-doan-tiep-nhan.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import icCheck from '@iconify/icons-ic/check';
import icPrint from '@iconify/icons-ic/print';
import { FormControl } from '@angular/forms';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanTiepNhanInHoSoPopupComponent } from '../kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component';
import { TimKiemHopDongKhamTheoCongTy, YeuCauTiepNhanKhamSucKhoe } from '../../kham-doan.model';
import { TrangThaiYeuCauKhamBenh } from 'src/app/shared/enum/kham-benh.enum';
import { PhieuDangKyKhamSucKhoePopupComponent } from '../phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component';
import { KetQuaKhamSucKhoePopupComponent } from '../ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { KhamDoanTiepNhanFilePopupComponent } from '../kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { BangHuongDanKhamSucKhoePopupComponent } from '../bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component';
import { HinhThucKhamBenh } from 'src/app/shared/enum/kham-doan.enum';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { SortDescriptor } from '@progress/kendo-data-query';
declare var jQuery: any;


@Component({
  selector: 'app-kham-doan-tiep-nhan-detail-popup',
  templateUrl: './kham-doan-tiep-nhan-detail-popup.component.html',
  styleUrls: ['./kham-doan-tiep-nhan-detail-popup.component.scss']
})
export class KhamDoanTiepNhanDetailPopupComponent implements OnInit,AfterContentInit {
  icSearch = icSearch;
  icCheck = icCheck;
  icPrint = icPrint;

  documentype: DocumentType;
  loading: boolean = false;
  validationErrors: any;
  baseRoute: string = "/kham-doan/tiep-nhan";
  popupLoadingData: any;
  format: string = 'n2';
  searchCtrl = new FormControl();

  urlGetData: string = "KhamDoan/GetDataNhanVienTheoHopDongForGrid";
  urlGetTotal: string = "KhamDoan/GetTotalNhanVienTheoHopDongForGrid";
  gridDataSource: any = {
    data: [],
    total: 0
  };
  gridColumns: any[] = [];
  timKiemObj: KhamDoanTiepNhanNhanVienTimKiem = new KhamDoanTiepNhanNhanVienTimKiem();
  thongTinHopDong: TimKiemHopDongKhamTheoCongTy = new TimKiemHopDongKhamTheoCongTy();

  chuaKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.ChuaKham;
  dangKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangKham;
  daKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DaKham;
  strAdditionalSearchString: string = "";
  lanDauLoadData: boolean = true;
  changeDataCongTy: boolean = false;
  xemChiTietHopDong:boolean=false;
  idSelect:number=null;


  // đây là biến tạm, cần cập nhật lại
  isHoanThanhKham: boolean = false;
  //-------------------------------

  arrNguoiBenhBatDauKhamId: Array<number> = [];
  sort: SortDescriptor[] = [
    {
      field: "TrangThaiYeuCauTiepNhan",
      dir: "asc",
    },
  ];

  @ViewChild('maNhanVienTemplate', { static: true }) maNhanVienTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('thoiGianTiepNhanTemplate', { static: true }) thoiGianTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridNhanVien', { static: true }) gridNhanVien: GridComponent;
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
    this.documentype = DocumentType.KhamDoanTiepNhan;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachTiepNhanKhamDoan");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          this.thongTinHopDong.CongTyId = this.timKiemObj.CongTyId;
          this.thongTinHopDong.HopDongId = this.timKiemObj.HopDongId;
          if(this.thongTinHopDong.CongTyId != null && this.thongTinHopDong.HopDongId != null
            && this.thongTinHopDong.CongTyId != 0 && this.thongTinHopDong.HopDongId != 0)
          {
            this.getThongTinHopDongById(false);
          }
          this.gridNhanVien.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      let menuInfo = this.authService.getAccessUser();
      var queryString = null;
      if (menuInfo.HinhThucKhamBenh != HinhThucKhamBenh.KhamDoanNgoaiVien) {
        this.kiemTraChonHopDong();
        LocalStorageHelper.removeItem("additionalSearchStringDanhSachTiepNhanKhamDoan");
        queryString = JSON.stringify(this.timKiemObj);
      }
      else
      {
        this.timKiemObj.CongTyId = this.thongTinHopDong.CongTyId = this.authService.getCongTyKhamSucKhoeId();
        this.timKiemObj.HopDongId = this.thongTinHopDong.HopDongId = this.authService.getHopDongKhamSucKhoeId();

        queryString = JSON.stringify(this.timKiemObj);
        LocalStorageHelper.setItem("additionalSearchStringDanhSachTiepNhanKhamDoan", queryString);
        this.getThongTinHopDongById();
      }
      
      this.gridNhanVien.additionalSearchString = queryString;
    }

    this.gridColumns = [
      { Field: "Stt", Title: "STT", Width: 50},
      { Field: "Action", Title: "", Width: 75, Template: this.actionTemplate},
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100},
      { Field: "TenNhanVien", Title: "Tên NV", Width: 200, Template: this.maNhanVienTemplate},
      { Field: "GioiTinh", Title: "GT", Width: 50},
      { Field: "NamSinh", Title: "NS", Width: 50},
      // { Field: "SoDienThoai", Title: "SĐT", Width: 90},
      // { Field: "Email", Title: "Email", Width: 90},
      // { Field: "ChungMinhThu", Title: "CMT/HC", Width: 90},
      //{ Field: "DanToc", Title: "Dân tộc", Width: 90},
      // { Field: "TinhThanh", Title: "Tỉnh/TP", Width: 90},
      // { Field: "DonViBoPhan", Title: "ĐV/BP", Width: 90},
      //{ Field: "NhomKham", Title: "Nhóm khám", Width: 90},
      { Field: "TinhTrang", Title: "Tình trạng", Width: 90, Template: this.tinhTrangTemplate},
      { Field: "ThoiDiemTiepNhan", Title: "Thời gian tiếp nhận", Width: 90, Template: this.thoiGianTiepNhanTemplate}
    ]
    this.lanDauLoadData = false;
    
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    jQuery("#splitter").css({"height":jQuery(window).height()-170})
  }

  changeCongTy(event) {
    // if(!event)
    // {
      this.thongTinHopDong.HopDongId = null;
      this.changeDataCongTy = true;
      this.clearThongTinHopDong();
    //}
    
    this.timKiemNangCao();
  }

  changeHopDong(event) {
    if (event != undefined && event != null) {
      this.getThongTinHopDongById();
    }
    else
    {
      this.clearThongTinHopDong();
    
      this.timKiemNangCao();
    }
  }

  changeLookupHopDong(event)
  {
    if(!this.lanDauLoadData && this.changeDataCongTy)
    {
      if(event && event.length > 0 && this.thongTinHopDong.CongTyId && !this.thongTinHopDong.HopDongId )
      {
        this.thongTinHopDong.HopDongId = event[0].KeyId;
        // this.changeDataCongTy = false;
        this.getThongTinHopDongById();
      }
      this.changeDataCongTy = false;
    }
  }

  clearThongTinHopDong(){
    this.thongTinHopDong.NgayHopDong = null;
    this.thongTinHopDong.LoaiHopDong = null;
    this.thongTinHopDong.TrangThai = null;
    this.thongTinHopDong.SoBenhNhan = null;
    this.thongTinHopDong.NgayHieuLuc = null;
    this.thongTinHopDong.NgayKetThuc = null;
  }

  getThongTinHopDongById(reloadGrid: boolean = true) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.showPopupLoadingData();
      this.gridNhanVien.mySelection = [];
      this.apiService.post<any>("KhamDoan/TimKiemThongTinHopDongKhamTheoCongTy", this.thongTinHopDong)
        .subscribe((resultData) => {
          this.thongTinHopDong = resultData;
          // this.thongTinHopDong.HopDongId = resultData.HopDongId;
          // this.thongTinHopDong.NgayHopDong = resultData.NgayHopDong;
          // this.thongTinHopDong.LoaiHopDong = resultData.LoaiHopDong;
          // this.thongTinHopDong.TrangThai = resultData.TrangThai;
          // this.thongTinHopDong.SoBenhNhan = resultData.SoBenhNhan;
          // this.thongTinHopDong.NgayHieuLuc = resultData.NgayHieuLuc;
          // this.thongTinHopDong.NgayKetThuc = resultData.NgayKetThuc;
          if(reloadGrid)
          {
            this.timKiemNangCao();
          }
          this.closePopupLoadingData();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
      //this.timKiemNangCao();
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

  kiemTraChonHopDong(){
    this.timKiemObj.CongTyId = !this.thongTinHopDong.CongTyId ?  0 : this.thongTinHopDong.CongTyId;
    this.timKiemObj.HopDongId = !this.thongTinHopDong.HopDongId ?  0 : this.thongTinHopDong.HopDongId;
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    this.kiemTraChonHopDong();

    var queryString = JSON.stringify(this.timKiemObj);
    LocalStorageHelper.setItem("additionalSearchStringDanhSachTiepNhanKhamDoan", queryString);
    this.gridNhanVien._additionalSearchString = this.strAdditionalSearchString = queryString;
    this.gridNhanVien.search();
  }

  inHoSo(hopDongKhamSucKhoeNhanVienId: number) {
    this.dialog.open(KhamDoanTiepNhanInHoSoPopupComponent, {
      disableClose: false,
      width: '300px',
      data: {}
    }).afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(KhamDoanTiepNhanFilePopupComponent, {
          disableClose: false,
          width: '1000px',
          data: { "Id": hopDongKhamSucKhoeNhanVienId, "HoSoDaChon": result }
        }).afterClosed().subscribe(result => {
          this.gridNhanVien.search();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.gridNhanVien.search();
          });
      }
      else {
        this.gridNhanVien.search();
      }
    });
  }

  chuyenDenKhamBenh(){
    this.router.navigate(['/kham-benh'], { queryParams: { IsKhamDoan: true } });
  }

  inHoSoTungPhieu(phieuIn: any, id: number) {
    if (phieuIn == 1) {
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
    if (phieuIn == 2) {
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
    if (phieuIn == 3) {
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
    if (phieuIn == 4) {
      if (this.authService.hasPermission(this.documentype, SecurityOperation.View)) {
        this.dialog.open(BangHuongDanKhamSucKhoePopupComponent, {
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

  batDauKham(dataItem: any) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh này?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            let thongTinHanhChinhNhanVien: YeuCauTiepNhanKhamSucKhoe = new YeuCauTiepNhanKhamSucKhoe();
            thongTinHanhChinhNhanVien.IsBatDauKhamTuDanhSach = true;
            thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVienDanhSachId = dataItem.Id;
            this.apiService.put<any>("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", thongTinHanhChinhNhanVien).subscribe(res => {
              let mess = "Bắt đầu khám";
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              this.closePopupLoadingData();
              this.inHoSo(dataItem.Id);
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupChiTietNhanVien(dataItem: any) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      if(this.gridNhanVien!=null && this.gridNhanVien._gridDataSource!=null && this.gridNhanVien._gridDataSource.data!=null)
      {
        var dataItemOlds=this.gridNhanVien._gridDataSource.data.filter(o=>o.Id==this.idSelect);
        if(dataItemOlds!=null && dataItemOlds.length>0)
        {
          dataItemOlds[0].HighLightClass=null;
        }
      }
      dataItem.HighLightClass="bg-row-lightblue";
      this.idSelect=null;
      var self=this;
      setTimeout(function(){
        self.idSelect=dataItem.Id;
      },1);
      
      //this.router.navigate([this.baseRoute + '/nhan-vien/' + id], { queryParams: { IsDichVuPhatSinh: this.timKiemObj.TrangThai.DichVuPhatSinh } });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  onChangeBenhNhanBatDauKham(event) {
    this.arrNguoiBenhBatDauKhamId = event;
  }

  xuLyBatDauKhamNhieuNhanVien() {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh đang chọn không?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            let arrayHopDongNhanVienId = {
              HopDongKhamSucKhoeNhanVienIds: this.arrNguoiBenhBatDauKhamId
            };
            this.apiService.put<any>("KhamDoan/XuLyBatDauKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(res => {
              this.arrNguoiBenhBatDauKhamId = [];
              this.gridNhanVien.search();
              let mess = "Bắt đầu khám";
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              this.gridNhanVien.mySelection = [];
              this.closePopupLoadingData();
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyQuayLaiChuaKhamNhieuNhanVien(){
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Update)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn quay lại chưa khám cho nhân viên đang chọn không?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.showPopupLoadingData();
            let arrayHopDongNhanVienId = {
              HopDongKhamSucKhoeNhanVienIds: this.arrNguoiBenhBatDauKhamId
            };
            this.apiService.put<any>("KhamDoan/XuLyQuayLaiChuaKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(res => {
              this.arrNguoiBenhBatDauKhamId = [];
              this.gridNhanVien.search();
              let mess = "Quay lại chưa khám";
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [mess]));
              this.gridNhanVien.mySelection = [];
              this.closePopupLoadingData();
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai(){
    this.location.back();
  }
}
