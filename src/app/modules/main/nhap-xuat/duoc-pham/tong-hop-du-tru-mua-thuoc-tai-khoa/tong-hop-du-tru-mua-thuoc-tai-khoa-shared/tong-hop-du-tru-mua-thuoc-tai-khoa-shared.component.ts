import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';

import { DuTruMuaDuocPhamTaiKhoaChiTietVo, DuyetDuTruMuaDuocPhamViewModel, ThongTinLyDoHuyDuyetTaiKhoa, TongHopDuTruMuaThuocTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component';
import { Location } from '@angular/common';
import icInfo from '@iconify/icons-ic/baseline-info';
import { PhieuMuaTruTaiKhoaComponent } from '../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';

@Component({
  selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-shared',
  templateUrl: './tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component.scss']
})
export class TongHopDuTruMuaThuocTaiKhoaSharedComponent implements OnInit {
  documentType: DocumentType;
  danhSachTongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoa;
  duTruMuaDuocPhamTaiKhoaChiTietVo: DuTruMuaDuocPhamTaiKhoaChiTietVo[] = [];
  duyetDuTruMuaDuocPhamViewModel = {} as DuyetDuTruMuaDuocPhamViewModel;
  thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;

  confrim: any;
  popupSavingData: any = null;
  validationErrors: any = null;
  gridChildThuocVacXinColumns: any[] = [];
  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];


  sortDuTruChild: SortDescriptor[] =
    [{
      field: 'Id',
      dir: 'asc'
    }];

  groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  urlGetDataGridChildAsync = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync';
  urlGetTotalPageGridChild = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync';
  public duTruMuaDuocPhamId: any = 0;

  urlGetDataDaXuLy = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsync';
  urlGetTotalPageDaXuLy = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsync';
  urlGetDataDaXuLyChild = 'YeuCauMuaDuocPham/GetDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild';
  urlGetTotalPageDaXuLyChild = 'YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamTaiKhoaChiTietForGridAsyncChild';




  public duTruMuaDuocPhamTaiKhoaId = 0;
  @ViewChild('nhomSLTKDuyet', { static: true }) nhomSLTKDuyet: TemplateRef<any>;
  @ViewChild(TongHopDuTruMuaThuocTaiKhoaSharedComponent, { static: true }) shared: any;
  @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
  @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
  khos: any[] = [];
  hdts: any[] = [];
  @Input() trangThaiVo: any;
  @Input() validationErrorsDuocPham: any;
  @Input() isCreate: boolean;
  @Input() tabSelected: any;
  icInfo = icInfo;

  @Output() hideGuibtn: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router,
              private location: Location,
              private notificationService: NotificationService,
              private authService: AuthService, ) { }

  ngOnInit() {
    console.log('daxuly: ', this.tabSelected);
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
    this.danhSachTongHopDuTruMuaThuocTaiKhoa = new TongHopDuTruMuaThuocTaiKhoa();
    const id = this.route.snapshot.params.id;
    if (id != undefined && id != null) {
      this.duTruMuaDuocPhamTaiKhoaId = id;
      if (this.tabSelected == 'DaXuLy') {
        this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);

      } else {
        this.getThongTinTongHopDuTruMuaTaiKhoa(id);
      }
    }

    this.duTruMuaDuocPhamId = id;
    this.gridChildThuocVacXinColumns = [
      // { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
      { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, ShowTooltip: true },
      { Field: 'HoatChat', Title: 'Hoạt chất', Width: 120, ShowTooltip: true },
      { Field: 'HamLuong', Title: 'Nồng độ/Hàm lượng', Width: 80 },
      { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
      { Field: 'DuongDung', Title: 'Đường Dùng', Width: 50 },
      { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
      { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
      { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
      { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
      { Field: 'SoLuongDuKienSuDung', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100 },
      { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
      { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
      { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
      { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Template: this.nhomSLTKDuyet },
    ];


    this.gridColumns = [
      { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, ShowTooltip: true },
      { Field: 'HoatChat', Title: 'Hoạt chất', Width: 100, ShowTooltip: true },
      { Field: 'HamLuong', Title: 'Nồng độ/Hàm lượng', Width: 80 },
      { Field: 'SoDangKy', Title: 'SĐK', Width: 50 },
      { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
      { Field: 'DuongDung', Title: 'Đường Dùng', Width: 50 },
      { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
      { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
      { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
      { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
      { Field: 'SoLuongDuKienSuDung', Title: 'SL D.Kiến S.Dụng Trong Kỳ', Width: 100 },
      { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 },
    ];

    this.gridColumnsChild = [
      // { Field: 'Nhom', Title: 'Loại', Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: 'LoaiThuoc', Title: 'Nhóm', Width: 100 },
      { Field: 'TenKho', Title: 'Kho', Width: 100 },
      { Field: 'KyDuTruDisplay', Title: 'Kỳ dự trù', Width: 120 },
      { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
      { Field: 'SoLuongDuKienSuDung', Title: 'SL Dự Kiến Trong Kỳ', Width: 100 },
    ];
  }

  getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
    this.apiService.get<any>('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoa/' + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {          
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
        }
      });
  }

  getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id: any) {
    this.apiService.get<any>('YeuCauMuaDuocPham/GetThongTinDuTruDuocPhamTaiKhoaDaXuLy/' + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = resultData;
        }
      });
  }

  onDataBound(event) {
    if (event != undefined && event.Data.length > 0) {
      this.duTruMuaDuocPhamTaiKhoaChiTietVo = event.Data;
    }
  }

  PheDuyet(id: any) {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: {
          Title: 'Xác nhận',
          Message: CommonService.format(SystemMessage.MessConfirm, [
            'Duyệt',
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == 'Yes') {
            this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = id;
            this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamTaiKhoaChiTietVos = this.duTruMuaDuocPhamTaiKhoaChiTietVo;
            this.apiService.post<any>('YeuCauMuaDuocPham/DuyetTaiKhoa/', this.duyetDuTruMuaDuocPhamViewModel)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData) {
                    this.cancel();
                    this.notificationService.showSuccess('Duyệt thành công.');
                  } else {
                    this.notificationService.showError('Duyệt không thành công.');
                  }
                }
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  TuChoi() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent, {
        disableClose: true,
        width: '400px',
        height: '300px',
      }).afterClosed().subscribe((result) => {
        if (result != '' && result != undefined) {
          this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
          this.thongTinLyDoHuyDuyetTaiKhoa.Id = this.duTruMuaDuocPhamTaiKhoaId;
          this.apiService.post<any>('YeuCauMuaDuocPham/TuChoiDuyetTaiKhoa', this.thongTinLyDoHuyDuyetTaiKhoa)
            .subscribe((resultData) => {
              if (resultData !== null && resultData !== undefined) {
                if (resultData) {
                  this.cancel();
                  this.notificationService.showSuccess('Từ chối duyệt thành công.');
                }
              }
            });
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  HuyDuyet(id: any) {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "Hủy Duyệt",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.apiService.post<any>("YeuCauMuaDuocPham/HuyDuyetTaiKhoa/" + id)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData) {                   
                    this.notificationService.showSuccess("Hủy Duyệt thành công.");
                    this.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
                  } else {
                    this.notificationService.showError("Hủy không thành công.");
                  }
                }
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  cancel() {
    // this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa"], {
    //   queryParamsHandling: "preserve",
    // });
    this.location.back();

  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      // esc
      this.cancel();
      event.preventDefault();
    }
  }

  TooltipCustom(duTruGiamDocDetail: any) {
    this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
    this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
  }

  InPhieuTongHopTaiKhoa() {
    const id = this.route.snapshot.params.id;
    this.dialog.open(PhieuMuaTruTaiKhoaComponent, {
      disableClose: false,
      width: '1200px',
      data: { Id: id},
    }).afterClosed().subscribe(() => {
      // this.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa']);
    });
  }
}
