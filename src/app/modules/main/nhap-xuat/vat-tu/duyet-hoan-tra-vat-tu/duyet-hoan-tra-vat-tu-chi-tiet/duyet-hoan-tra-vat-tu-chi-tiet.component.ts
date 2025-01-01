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
import { DuyetHoanTraVatTu, ThongTinHoanTraVatTu, TuChoiDuyetHoanTraVatTu } from '../hoan-tra-vt.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TuChoiDuyetVatTuComponent } from '../tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component';
import { InPhieuHoanTraVatTuComponent } from '../in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component';
import { InPhieuHoanTraCompoment } from '../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
  selector: 'app-duyet-hoan-tra-vat-tu-chi-tiet',
  templateUrl: './duyet-hoan-tra-vat-tu-chi-tiet.component.html',
  styleUrls: ['./duyet-hoan-tra-vat-tu-chi-tiet.component.scss']
})

export class DuyetHoanTraVatTuChiTietComponent implements OnInit {
  thongTinHoanTraVatTu = new ThongTinHoanTraVatTu();
  documentType: DocumentType;
  gridColumns: any[] = [];
  validationErrors: any = [];
  isDisabled: any;
  urlGetDataAsync = "HoanTra/GetDanhSachHoanTraVatTuChiTietForGridAsync";
  yeuCauNhapKhoVatTuId: number = 0;
  confrim: any;
  thongTinLyDoHuyNhapKhoVatTu = new TuChoiDuyetHoanTraVatTu();
  duyetHoanTraVatTu = new DuyetHoanTraVatTu();

  currentAccessUser: any;
  idPhong: any;
  currentUserInformation: any;

  public groups: GroupDescriptor[] = [{
    field: 'LoaiSuDung', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
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
    this.documentType = DocumentType.DuyetYeuCauHoanTraVatTu;
    this.yeuCauNhapKhoVatTuId = this.route.snapshot.params.id;
    if (this.yeuCauNhapKhoVatTuId) {
      this.currentAccessUser = this.authService.getAccessUser();
      this.idPhong = this.authService.getPhongLamViecId();
      this.getCurrentUserInformation();
      // this.getThongTinDuyetKhoVatTu(this.yeuCauNhapKhoVatTuId);
    }

    this.gridColumns = [
      { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 100 },
      { Field: "VatTu", Title: "Tên Vật Tư", Width: 100 },
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
    this.apiService.get<any>("HoanTra/GetThongTinHoanTraVatTu/" + id)
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

  BackToList() {
    this.router.navigateByUrl("/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu?holdQuery=true");
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

            this.apiService.post<any>("HoanTra/HoanTraVatTuKho/", this.duyetHoanTraVatTu)
              .subscribe((resultData) => {
                // if (resultData !== null && resultData !== undefined) {
                //   if (resultData === "") {
                //     this.BackToList();
                //     this.notificationService.showSuccess("Hoàn trả thành công.");
                //   } else {
                //     this.notificationService.showError(resultData);
                //   }
                // }

                this.notificationService.showSuccess("Duyệt thành công.");
                let yeuCauHoanTraVatTuId = this.yeuCauNhapKhoVatTuId;
                this.dialog.open(InPhieuHoanTraCompoment, {
                  disableClose: true,
                  width: "1200px",
                  data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true, DuocDuyet: true },
                }).afterClosed().subscribe((result) => {
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
      this.confrim = this.dialog.open(TuChoiDuyetVatTuComponent, {
        disableClose: true,
        width: "400px",
        height: "300px",
      }).afterClosed().subscribe((result) => {
        if (result != "" && result != undefined) {
          this.thongTinLyDoHuyNhapKhoVatTu.LyDoHuy = result;
          this.thongTinLyDoHuyNhapKhoVatTu.Id = this.yeuCauNhapKhoVatTuId;
          this.apiService.post<any>("HoanTra/TuChoiHoanTraVatTu", this.thongTinLyDoHuyNhapKhoVatTu)
            .subscribe((resultData) => {
              // if (resultData !== null && resultData !== undefined) {
              //   if (resultData) {
              //     this.notificationService.showSuccess("Từ chối duyệt thành công.");
              //     this.BackToList();
              //   }
              // }
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

    // this.dialog.open(InPhieuHoanTraVatTuComponent, {
    //   disableClose: true,
    //   width: "1200px",
    //   data: { yeuCauHoanTraVatTuId },
    // }).afterClosed().subscribe((result) => { });
    this.dialog.open(InPhieuHoanTraCompoment, {
      disableClose: true,
      width: "1200px",
      data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true, DuocDuyet: true },
    }).afterClosed().subscribe((result) => { });
  }
}
