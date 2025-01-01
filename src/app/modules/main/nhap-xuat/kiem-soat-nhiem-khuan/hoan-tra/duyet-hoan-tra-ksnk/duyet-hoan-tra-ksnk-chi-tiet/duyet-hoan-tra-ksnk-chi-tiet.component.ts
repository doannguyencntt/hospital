import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { HoanTraDuocPhamVatTuMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DuyetHoanTraVatTu, LoaiDuocPhamVatTu, ThongTinHoanTraVatTu, TuChoiDuyetHoanTraVatTu } from '../hoan-tra-ksnk.model';
import { TuChoiDuyetKSNKComponent } from '../tu-choi-duyet-ksnk/tu-choi-duyet-ksnk.component';
import { InPhieuHoanTraKSNKComponent } from '../../yeu-cau-tra-ksnk/in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
  selector: 'app-duyet-hoan-tra-ksnk-chi-tiet',
  templateUrl: './duyet-hoan-tra-ksnk-chi-tiet.component.html',
  styleUrls: ['./duyet-hoan-tra-ksnk-chi-tiet.component.scss']
})

export class DuyetHoanTraKSNKChiTietComponent implements OnInit {
  thongTinHoanTraVatTu = new ThongTinHoanTraVatTu();
  documentType: DocumentType;
  gridColumns: any[] = [];
  validationErrors: any = [];
  isDisabled: any;

  urlGetDataVTAsync = "YeuCauTraKSNK/GetDanhSachHoanTraKSNKChiTietForGridAsync";  
  urlGetDataDPAsync: string = "YeuCauTraKSNK/GetDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";

  yeuCauNhapKhoVatTuId: number = 0;
  confrim: any;
  thongTinLyDoHuyNhapKhoVatTu = new TuChoiDuyetHoanTraVatTu();
  duyetHoanTraVatTu = new DuyetHoanTraVatTu();

  currentAccessUser: any;
  idPhong: any;
  currentUserInformation: any;

  loaiduocphamvattu: any;
  LoaiDuocPhamVatTu: LoaiDuocPhamVatTu;
  loaiDuocPham = LoaiDuocPhamVatTu.LoaiDuocPham;
  loaiVatTu = LoaiDuocPhamVatTu.LoaiVatTu;

  public groups: GroupDescriptor[] = [{
    field: 'LoaiSuDung', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
    ]
  }];

  public groupDPs: GroupDescriptor[] = [{
    field: 'Nhom', aggregates: [

    ]
  }];


  sortDuyetKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]

  constructor(
    private authService: AuthService,
    private dialog: MatDialog, private elem: ElementRef,
    private notificationService: NotificationService,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  @ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('giaBanTemplate', { static: true }) giaBanTemplate: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('soLuongHoanTraTemplate', { static: true }) soLuongHoanTraTemplate: TemplateRef<any>;



  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauHoanTraKSNK;
    this.yeuCauNhapKhoVatTuId = this.route.snapshot.params.id;
    this.loaiduocphamvattu = Number(this.route.snapshot.params.loaiduocphamvattu);

    if (this.yeuCauNhapKhoVatTuId) {
      this.currentAccessUser = this.authService.getAccessUser();
      this.idPhong = this.authService.getPhongLamViecId();
      this.getCurrentUserInformation();
    }

    this.gridColumns = [
      { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      // { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 100 },
      { Field: "VatTu", Title: "Tên", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
      { Field: "SoLo", Title: "Số Lô", Width: 100 },
      { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
      { Field: "SoLuongHoanTra", Title: "Số Lượng Hoàn Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
    ];

  }

  getCurrentUserInformation() {
    if (this.currentAccessUser) {
      this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentAccessUser.Id + "&idPhongBenhVien=" + this.idPhong).subscribe((res: any) => {
        this.currentUserInformation = res;
        this.getThongTinDuyetKhoVatTu(this.yeuCauNhapKhoVatTuId);
      });
    }
  }

  getThongTinDuyetKhoVatTu(id: number) {
    if (this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiVatTu) {
      this.apiService.get<any>("YeuCauTraKSNK/GetThongTinHoanTraKSNK/" + id)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.thongTinHoanTraVatTu = resultData;
            if (this.thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet') {
              this.thongTinHoanTraVatTu.TenNguoiNhan = this.thongTinHoanTraVatTu.TenNguoiYeuCau;
              this.thongTinHoanTraVatTu.NguoiNhanId = this.thongTinHoanTraVatTu.NguoiYeuCauId;
              this.thongTinHoanTraVatTu.TenNguoiTra = this.currentUserInformation.Ten;
              this.thongTinHoanTraVatTu.NguoiTraId = this.currentAccessUser.Id;
            }
          }
        });
    }
    if (this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiDuocPham) {
      this.apiService.get<any>("YeuCauTraKSNK/GetThongTinDuyetHoanTraDuocPhamKSNK/" + id).subscribe(res => {
        if (res) {
          this.thongTinHoanTraVatTu = res;
          if (this.thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet') {
            this.thongTinHoanTraVatTu.TenNguoiNhan = this.thongTinHoanTraVatTu.TenNguoiYeuCau;
            this.thongTinHoanTraVatTu.NguoiNhanId = this.thongTinHoanTraVatTu.NguoiYeuCauId;
            this.thongTinHoanTraVatTu.TenNguoiTra = this.currentUserInformation.Ten;
            this.thongTinHoanTraVatTu.NguoiTraId = this.currentAccessUser.Id;
          }
        }
      }, err => {
        this.notificationService.showError(err.Message);
      });
    }

  }

  BackToList() {
    this.router.navigateByUrl("/nhap-xuat/ksnk/duyet-hoan-tra-ksnk?holdQuery=true");
  }

  duyet() {
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
          Message: HoanTraDuocPhamVatTuMessage.MessageXacNhanDuyetHoanTraDuocPham
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.validationErrors = null;
            this.duyetHoanTraVatTu.Id = this.yeuCauNhapKhoVatTuId;
            this.duyetHoanTraVatTu.NguoiTraId = this.thongTinHoanTraVatTu.NguoiTraId ? this.thongTinHoanTraVatTu.NguoiTraId : 0;
            this.duyetHoanTraVatTu.NguoiNhanId = this.thongTinHoanTraVatTu.NguoiNhanId ? this.thongTinHoanTraVatTu.NguoiNhanId : 0;
            this.duyetHoanTraVatTu.LoaiDuocPhamVatTu = this.loaiduocphamvattu;

            this.apiService.post<any>("YeuCauTraKSNK/HoanTraKSNKKho/", this.duyetHoanTraVatTu)
              .subscribe((resultData) => {
                this.notificationService.showSuccess("Duyệt thành công.");
                let yeuCauHoanTraVatTuId = this.yeuCauNhapKhoVatTuId;

                let hoanTraDuocPhamId = this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiDuocPham ? yeuCauHoanTraVatTuId : null;
                let hoanTraVatTuId = this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiVatTu ? yeuCauHoanTraVatTuId : null;

                this.dialog.open(InPhieuHoanTraKSNKComponent, {
                  disableClose: true,
                  width: "1200px",
                  data: { HoanTraDuocPhamId: hoanTraDuocPhamId, HoanTraVatTuId: hoanTraVatTuId, LaTuTruc: true, DuocDuyet: true },
                }).afterClosed().subscribe(() => {
                  this.BackToList();
                });

              }, err => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  khongPheDuyet() {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(TuChoiDuyetKSNKComponent, {
        disableClose: true,
        width: "400px",
        height: "300px",
      }).afterClosed().subscribe((result) => {
        if (result != "" && result != undefined) {
          this.thongTinLyDoHuyNhapKhoVatTu.LyDoHuy = result;
          this.thongTinLyDoHuyNhapKhoVatTu.Id = this.yeuCauNhapKhoVatTuId;
          this.thongTinLyDoHuyNhapKhoVatTu.LoaiDuocPhamVatTu = this.loaiduocphamvattu;

          this.apiService.post<any>("YeuCauTraKSNK/TuChoiHoanTraKSNK", this.thongTinLyDoHuyNhapKhoVatTu)
            .subscribe((resultData) => {
              this.notificationService.showSuccess("Từ chối duyệt thành công.");
              this.BackToList();
            }, err => {
              err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  InPhieuHoanTra() {
    let yeuCauHoanTraVatTuId = this.yeuCauNhapKhoVatTuId;
    let hoanTraDuocPhamId = this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiDuocPham ? yeuCauHoanTraVatTuId : null;
    let hoanTraVatTuId = this.loaiduocphamvattu === LoaiDuocPhamVatTu.LoaiVatTu ? yeuCauHoanTraVatTuId : null;

    this.dialog.open(InPhieuHoanTraKSNKComponent, {
      disableClose: true,
      width: "1200px",
      data: { HoanTraDuocPhamId: hoanTraDuocPhamId, HoanTraVatTuId: hoanTraVatTuId, LaTuTruc: true, DuocDuyet: true },
    }).afterClosed().subscribe(() => {
    });
  }
}
