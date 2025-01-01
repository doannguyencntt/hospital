import { ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import icAddCircle from '@iconify/icons-ic/add-circle';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { KhamDoanHopDongKhamChonFilePopupComponent } from '../kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component';
import { KhamDoanHopDongKhamListNhanVienPopupComponent } from '../kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { KhamDoanGoiKhamSucKhoeChonFilePopupComponent } from '../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component';
import { KhamDoanHopDongKham, HopDongSucKhoeDiaDiem, MoLaiHopDong } from '../kham-doan-hop-dong-kham.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { HopDongKhamChonGoiKhamFilePopupComponent } from '../goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component';
import { GoiKhamViewPopupComponent } from '../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DanhSachPhongKhamCongTyComponent } from '../danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component';
import { ThongTinNhanVienPopupComponent } from '../thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component';
import { ThongTinGoiKhamPopupComponent } from '../thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component';
import { ThongTinKetThucHopDongPopupComponent } from '../thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component';
import { KhamDoanDvThongKePopupComponent } from '../kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component';
import { MoLaiHopDongKhamComponent } from '../mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component';

@Component({
  selector: 'app-kham-doan-hop-dong-kham-detail-popup',
  templateUrl: './kham-doan-hop-dong-kham-detail-popup.component.html',
  styleUrls: ['./kham-doan-hop-dong-kham-detail-popup.component.scss']
})
export class KhamDoanHopDongKhamDetailPopupComponent implements OnInit {
  icClose = icClose;
  icDelete = icDelete;
  icAdd = icAdd;
  icAddCircle = icAddCircle;

  khamDoanHopDongKham = new KhamDoanHopDongKham();
  documentType: DocumentType;
  popupLoadingData: any;

  gridNhanVienColumns: any[] = [];
  gridDiaDiemKhamColumns: any[] = [];
  gridGoiKhamColumns: any[] = [];
  gridDanhSachPhongKhamCongTyColumns: any[] = [];
  validationErrors: any = [];
  validationKhamErrors: any = [];
  validationDichVuErrors: any = [];
  dataSachDiaDiemKham: any = { data: [], total: 0 }
  loadingPopup: any;

  isDisabled: boolean = null;
  id: number;
  additiongStringDefault: string = null;
  baseRoute: string = "/kham-doan/hop-dong-kham";
  title: string = "";
  header: string = "";
  format: string = 'n2';
  sortNhanVien: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('maPhongKhamTemplate', { static: true }) maPhongKhamTemplate: TemplateRef<any>;
  @ViewChild('tenPhongTemplate', { static: true }) tenPhongTemplate: TemplateRef<any>;
  @ViewChild('ghiChuPhongKhamKhamTemplate', { static: true }) ghiChuPhongKhamKhamTemplate: TemplateRef<any>;
  @ViewChild('actionKhamPhongKhamTemplate', { static: true }) actionKhamPhongKhamTemplate: TemplateRef<any>;


  @ViewChild('diaDiemKhamTemplate', { static: true }) diaDiemKhamTemplate: TemplateRef<any>;
  @ViewChild('congViecKhamTemplate', { static: true }) congViecKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayKhamTemplate', { static: true }) ngayKhamTemplate: TemplateRef<any>;
  @ViewChild('ghiChuKhamTemplate', { static: true }) ghiChuKhamTemplate: TemplateRef<any>;
  @ViewChild('actionKhamTemplate', { static: true }) actionKhamTemplate: TemplateRef<any>;
  @ViewChild('footerTemplate', { static: true }) footerTemplate: TemplateRef<any>;

  @ViewChild('maGoiKhamTemplate', { static: true }) maGoiKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayHieuLucGoiKhamTemplate', { static: true }) ngayHieuLucGoiKhamTemplate: TemplateRef<any>;
  @ViewChild('ngayKetThucGoiKhamTemplate', { static: true }) ngayKetThucGoiKhamTemplate: TemplateRef<any>;
  @ViewChild('actionGoiKhamTemplate', { static: true }) actionGoiKhamTemplate: TemplateRef<any>;
  @ViewChild('gridGoiKhamSucKhoe', { static: false }) gridGoiKhamSucKhoe: GridComponent;

  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild('actionNhanVienTemplate', { static: true }) actionNhanVienTemplate: TemplateRef<any>;
  @ViewChild('nhanVienGrid', { static: false }) nhanVienGrid: GridComponent;

  @ViewChild('ngayHieuLucTemplate', { static: true }) ngayHieuLucTemplate: TemplateRef<any>;
  @ViewChild('ngayKetThucTemplate', { static: true }) ngayKetThucTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('gridDanhSachNhanSuGrid', { static: false }) gridDanhSachNhanSuGrid: GridComponent;


  constructor(private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.documentType = DocumentType.KhamDoanHopDongKham;
    this.id = this.route.snapshot.params.id;
    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;

    this.khamDoanHopDongKham.TenTrangThaiHopDongKham = "Đang thực hiện";

    if (this.id != 0) {
      this.title = "Chi tiết hợp đồng khám sức khỏe";
      this.header = "Chi Tiết Hợp Đồng Khám Sức Khỏe";
      this.getDataHopDongKham(this.id);
      let stringJSON = {
        HopDongKhamSucKhoeId: this.id,
        IsHopDongKhamSucKhoe: true
      }
      this.additiongStringDefault = JSON.stringify(stringJSON);
    }
    else {
      this.title = "Thêm hợp đồng khám sức khỏe";
      this.header = "Thêm Hợp Đồng Khám Sức Khỏe";
    }
    this.gridDiaDiemKhamColumns = [
      { Field: "DiaDiemKham", Title: "Địa điểm khám", Width: 220, Template: this.diaDiemKhamTemplate },
      { Field: "CongViec", Title: "Công việc", Width: 120, Template: this.congViecKhamTemplate, TemplateFooter: this.footerTemplate },
      { Field: "Ngay", Title: "Ngày", Width: 100, Template: this.ngayKhamTemplate },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, Template: this.ghiChuKhamTemplate },
      { Field: "Action", Title: "", Width: 40, Template: this.actionKhamTemplate }
    ];

    this.gridGoiKhamColumns = [
      { Field: "MaGoiKham", Title: "Mã gói khám", Width: 100, Sortable: true, Template: this.maGoiKhamTemplate },
      { Field: "TenGoiKham", Title: "Tên gói khám", Width: 160, Sortable: true },
      { Field: "TenCongTy", Title: "Tên công ty", Width: 240, Sortable: true },
      { Field: "SoHopDong", Title: "SHĐ", Width: 100, Sortable: true },
      { Field: "NgayHieuLuc", Title: "Ngày hiệu lực", Width: 100, Sortable: true, Template: this.ngayHieuLucTemplate },
      { Field: "NgayKetThuc", Title: "Ngày kết thúc", Width: 100, Sortable: true, Template: this.ngayKetThucTemplate },
      { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionGoiKhamTemplate }
    ];

    this.gridDanhSachPhongKhamCongTyColumns = [
      { Field: "MaPhong", Title: "Mã Phòng", Width: 120, Template: this.maPhongKhamTemplate },
      { Field: "TenPhong", Title: "Tên Phòng", Width: 100, Template: this.tenPhongTemplate },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, Template: this.ghiChuPhongKhamKhamTemplate },
      { Field: "Action", Title: "", Width: 40, Template: this.actionKhamPhongKhamTemplate }
    ];

    this.gridNhanVienColumns = [
      { Field: "STTNhanVien", Title: "STT", Width: 60 },
      { Field: "MaBN", Title: "Mã NB", Width: 60 },
      { Field: "MaNhanVien", Title: "Mã NV", Width: 60 },
      { Field: "HoTen", Title: "Tên NV", Width: 120, Template: this.hoTenTemplate },
      { Field: "TenDonVi", Title: "ĐV/BP", Width: 80 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80 },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80 },
      { Field: "SoDienThoai", Title: "SĐT", Width: 80 },
      { Field: "Email", Title: "Email", Width: 80 },
      { Field: "CMTSHC", Title: "CMT/SHC", Width: 80 },
      { Field: "DanToc", Title: "Dân tộc", Width: 80 },
      { Field: "TinhThanhPho", Title: "Tỉnh/TP", Width: 80 },
      { Field: "NhomKham", Title: "Nhóm khám", Width: 80 },
      { Field: "Action", Title: "", Width: 50, Template: this.actionNhanVienTemplate }
    ]

    this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
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

  getDataHopDongKham(id: number) {
    this.showPopupLoadingData();
    this.apiService.get<any>("KhamDoan/GetThongTinHopDongKham?hopDongKhamId=" + id).subscribe(
      (resultData) => {
        if (resultData !== undefined && resultData != null) {
          this.khamDoanHopDongKham = resultData;
          this.dataSachDiaDiemKham.data = resultData.HopDongKhamSucKhoeDiaDiems != null ? resultData.HopDongKhamSucKhoeDiaDiems : [];
          this.closePopupLoadingData();
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      }
    );
  }

  xoaHopDongKhamSucKhoeNhanVien(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.apiService.post<any>("KhamDoan/XoaHopDongKhamSucKhoeNhanVien?nhanVienHDKhamId=" + id).subscribe(
            (resultData) => {
              if (resultData !== undefined && resultData != null) {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                this.nhanVienGrid.search();
                //Cập nhật lại sô lương nhân viên khám trong hop đồng
                this.capNhanSoLuongNhanVienKhamTrongHopDong(this.id);

                this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
                this.closePopupLoadingData();
              }
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            }
          );
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupChiTietGoiKham(id: number = null) {
    let securityOperation = SecurityOperation.Add;
    let url = '/them';
    if (id != null) {
      securityOperation = SecurityOperation.Update;
      url = '/chi-tiet';
    }

    if (this.authService.hasPermission(this.documentType, securityOperation)) {
      var dataKhamDoan = {
        CongTyKhamSucKhoeId: this.khamDoanHopDongKham.CongTyKhamSucKhoeId,
        HopDongKhamSucKhoeId: this.khamDoanHopDongKham.Id,
        TenCongTyKhamSucKhoe: this.khamDoanHopDongKham.TenCongTy,
        TenHopDongKhamSucKhoe: this.khamDoanHopDongKham.SoHopDong,
        NgayHieuLuc: this.khamDoanHopDongKham.NgayHieuLuc,
        NgayKetThuc: this.khamDoanHopDongKham.NgayKetThuc,
        GoiKhamId: id,
        LaHopDongKhamSucKhoe: true,
        IsCreatedHopDongKhamSucKhoe: id == 0 ? true : false,
      }
      this.dialog.open(GoiKhamViewPopupComponent, {
        width: "1400px",
        disableClose: true,
        data: { khamDoanHopDongKham: dataKhamDoan }
      }).afterClosed().subscribe((result) => {
        this.gridGoiKhamSucKhoe.search();
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupThemNhanVien() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      let id = this.id;
      this.dialog.open(KhamDoanHopDongKhamListNhanVienPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: { Id: 0, hopDongKhamSucKhoeId: id }
      }).afterClosed().subscribe(result => {
        if (result != undefined && result != null && result != "") {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["thêm nhân viên"]));
          this.nhanVienGrid.search();
          //Cập nhật lại sô lương nhân viên khám trong hop đồng
          this.capNhanSoLuongNhanVienKhamTrongHopDong(this.id);
          this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  capNhanSoLuongNhanVienKhamTrongHopDong(id: number) {
    this.apiService.post<any>("KhamDoan/CapNhatSoLuongNhanVienKhamTrongHopDong?hopDongKhamId=" + id).subscribe(
      (resultData) => {
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      }
    );
  }

  viewEditHopDongNVSK(hopDongNhanVienKhamSKId: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      let id = this.id;
      this.dialog.open(KhamDoanHopDongKhamListNhanVienPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: { Id: hopDongNhanVienKhamSKId, hopDongKhamSucKhoeId: id }
      }).afterClosed().subscribe(result => {
        if (result != undefined && result != null && result != "") {
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["sữa nhân viên"]));
          this.nhanVienGrid.search();
          //Cập nhật lại sô lương nhân viên khám trong hop đồng
          this.capNhanSoLuongNhanVienKhamTrongHopDong(this.id);
          this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  NhapTuFileExcel() {
    this.showLoadingPopup();
    this.dialog.open(KhamDoanHopDongKhamChonFilePopupComponent, {
      disableClose: false,
      width: '800px',
      data: { hopDongKhamSucKhoeId: this.id }
    }).afterClosed().subscribe(result => {
      if (result != undefined && result != null && result.length > 0) {
        this.dialog.open(ThongTinNhanVienPopupComponent, {
          disableClose: false,
          width: '800px',
          data: { thongTinNhanViens: result }
        }).afterClosed().subscribe(result => {
          this.closeAllDialogs();
        });
      }
      if (result) {
        this.nhanVienGrid.search();
        //Cập nhật lại sô lương nhân viên khám trong hop đồng
        this.capNhanSoLuongNhanVienKhamTrongHopDong(this.id);
        this.getTotalDanhSachNhanVienCongTyTheoHopDongKham();
      }
      this.closeAllDialogs();
    });
  }

  NhapGoiKhamTuFileExcel() {

    this.dialog.open(HopDongKhamChonGoiKhamFilePopupComponent, {
      disableClose: false,
      width: '800px',
      data: { hopDongKhamSucKhoeId: this.id }
    }).afterClosed().subscribe(result => {
      if (result) {
        if (result.length > 0) {
          this.dialog.open(ThongTinGoiKhamPopupComponent, {
            disableClose: false,
            width: '800px',
            data: { thongTinGoiKhams: result }
          }).afterClosed().subscribe(result => {
          });
        }
        this.gridGoiKhamSucKhoe.search();
      }
    });
  }

  showPopupDanhSachPhongKhamCongTy(data: any) {
    this.dialog.open(DanhSachPhongKhamCongTyComponent, {
      disableClose: false,
      width: '800px',
      data: { hopDongKhamSucKhoeId: this.id, dataDSCongTy: data }
    }).afterClosed().subscribe(result => {
      if (result) { this.gridDanhSachNhanSuGrid.search(); }
    });
  }

  xoaPhongKhamTaiCongTy(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.apiService.post<any>("KhamDoan/XoaPhongKhamTaiCongTy?id=" + id).subscribe(() => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.gridDanhSachNhanSuGrid.search();
          }, err => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          })
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  themDiaDiemDanhSachKham() {
    this.dataSachDiaDiemKham.data.push(new HopDongSucKhoeDiaDiem());
  }

  xoaDiaDiemDanhSachKham(item: any) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.dataSachDiaDiemKham.data.splice(this.dataSachDiaDiemKham.data.findIndex((x: any) => x == item), 1);
      }
    });
  }

  onChangeSetTenCongViec(dataItem: any, rowIndex: number) {
    if (dataItem != undefined && dataItem != null && rowIndex != undefined && rowIndex != null) {
      this.dataSachDiaDiemKham.data[rowIndex].CongViec = dataItem.DisplayName;
    }
    else {
      this.dataSachDiaDiemKham.data[rowIndex].CongViec = null;
    }
  }

  xuLyLuu() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    let mess = "Bạn có chắc chắn muốn tạo hợp đồng này?";
    let securityOperation = SecurityOperation.Add;
    if (this.id != 0) {
      this.khamDoanHopDongKham.Id = this.id;
      securityOperation = SecurityOperation.Update;
      mess = "Bạn có chắc chắn muốn lưu hợp đồng này?";
    }
    if (this.authService.hasPermission(this.documentType, securityOperation)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: mess }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          //===========================================Data mẫu ======================================       
          if (this.dataSachDiaDiemKham.data.length > 0) {
            this.khamDoanHopDongKham.HopDongKhamSucKhoeDiaDiems = this.dataSachDiaDiemKham.data;
          }
          this.apiService.post<any>("KhamDoan/ThemHoacCapNhatHopDongKham", this.khamDoanHopDongKham).subscribe(res => {
            if (res != 0) {
              this.id = res;
              this.router.navigate([this.baseRoute + '/chi-tiet/' + res]);
              this.getDataHopDongKham(this.id);
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            }
            else {
              this.quayLai();
            }
          }, err => {
            this.validationErrors = err.ValidationErrors;
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

  getTotalDanhSachNhanVienCongTyTheoHopDongKham() {
    this.apiService.get<any>("KhamDoan/GetTotalDanhSachNhanVienCongTyTheoHopDongKham?hopDongKhamId=" + this.id)
      .subscribe((totalNhanVien) => {
        this.khamDoanHopDongKham.SoNguoiKham = totalNhanVien;
        if (totalNhanVien > 0) {
          this.isDisabled = true;
        } else {
          this.isDisabled = false;
        }
      }, err => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      })
  }

  xoaGoiKham(Id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.apiService.post<any>("KhamDoan/XoaGoiKhamSucKhoeDoan?id=" + Id).subscribe(() => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
            this.gridGoiKhamSucKhoe.search();
          }, err => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          })
        }
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai() {
    this.location.back();
  }


  thongKe() {
    this.dialog.open(KhamDoanDvThongKePopupComponent, {
      disableClose: false,
      width: '1500px',
      data: { HopDongKhamSucKhoeId: this.id }
    }).afterClosed().subscribe(() => {
    });
  }

  ketThucHopDong() {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn kết thúc hợp đồng này không ?" }
    }).afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.apiService.get<any>("KhamDoan/KiemTraHopDongNhanVienChuaKham?hopDongKhamId=" + this.id).subscribe(
          (resultData) => {
            if (resultData !== undefined && resultData != null) {
              if (resultData[0].NhanVienKhamXong) {
                this.apiService.post<any>("KhamDoan/KetThucHopDongKham?hopDongKhamId=" + this.id).subscribe(
                  (resultData) => {
                    this.router.navigateByUrl("/kham-doan/hop-dong-kham");
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["kết thúc hợp đồng"]));
                  },
                  (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                      this.notificationService.showError(err.Message);
                    }
                  }
                );
              } else {
                this.dialog.open(ThongTinKetThucHopDongPopupComponent, {
                  disableClose: false,
                  width: '900px',
                  data: { hopDongKhamSucKhoeId: this.id }
                }).afterClosed().subscribe(result => {
                });
              }
            }
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          }
        );
      }
    });
  }

  moLaiThucHopDong() {
    this.dialog.open(MoLaiHopDongKhamComponent, {
      disableClose: false,
      width: '600px',
      data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn mở lại hợp đồng này không ?" }
    }).afterClosed().subscribe(result => {
      if (result !== null && result != "") {
        let moLaiHopDong = new MoLaiHopDong();
        moLaiHopDong.HopDongKhamSucKhoeId = this.id;
        moLaiHopDong.LyDoMoLaiHopDong = result;
        this.apiService.post<any>("KhamDoan/MoLaiHopDongKham", moLaiHopDong).subscribe(
          (resultData) => {
            this.router.navigateByUrl("/kham-doan/hop-dong-kham");
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Mở lại hợp đồng"]));
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
          }
        );
      }
    });
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }

}
