import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ThongTinDuyetKhoDuocPham, ThongTinLyDoHuyNhapKhoDuocPham } from '../duyet-nhap-kho.model';
import { TuChoiDuyetDuocPhamComponent } from '../tu-choi-duyet-duoc-pham/tu-choi-duyet-duoc-pham.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { PhieuNhapKhoDuocPhamPopupComponent } from '../../../nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-duyet-nhap-kho-chi-tiet',
  templateUrl: './duyet-nhap-kho-chi-tiet.component.html',
  styleUrls: ['./duyet-nhap-kho-chi-tiet.component.scss']
})
export class DuyetNhapKhoChiTietComponent implements OnInit {
  thongTinDuyetKhoDuocPham = new ThongTinDuyetKhoDuocPham();
  thongTinLyDoHuyNhapKhoDuocPham = new ThongTinLyDoHuyNhapKhoDuocPham();
  documentType: DocumentType;
  gridColumns: any[] = [];
  validationErrors: any;
  isDisabled: boolean = false;
  yeuCauNhapKhoDuocPhamId: number = 0;
  confrim: any;
  urlGetDataAsync = "KeToan/GetDanhSachDuyetKhoDuocPhamChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "KeToan/GetTotalDanhSachDuyetKhoDuocPhamChiTietForGridAsync";
  public groups: GroupDescriptor[] = [{
    field: 'Nhom', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
    ]
  }];

  public dataSource: any = {
    data: [],
    total: 0
  }

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

  @ViewChild('headerTongCongGroupFooter', { static: true }) headerTongCongGroupFooter: TemplateRef<any>;
  @ViewChild('tongSoTienDonGiaNhapGroupFooter', { static: true }) tongSoTienDonGiaNhapGroupFooter: TemplateRef<any>;
  @ViewChild('tongSoTienGiaBanGroupFooter', { static: true }) tongSoTienGiaBanGroupFooter: TemplateRef<any>;

  ngOnInit() {
    this.documentType = DocumentType.DuyetNhapKhoDuocPham;
    this.yeuCauNhapKhoDuocPhamId = this.route.snapshot.params.id;
    if (this.yeuCauNhapKhoDuocPhamId != undefined && this.yeuCauNhapKhoDuocPhamId != null) {
      this.getThongTinDuyetKhoDuocPham(this.yeuCauNhapKhoDuocPhamId);
    }
    this.gridColumns = [
      { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaCungCap", Title: "NCC", Width: 100, TemplateFooter: this.headerTongCongGroupFooter },
      { Field: "HopDongThau", Title: "Hợp Đồng Thầu", Width: 100 },
      { Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
      { Field: "LoaiBHYT", Title: "Loại", Width: 140, Template: this.TinhTrangBHYTTemplate },
      { Field: "SoLo", Title: "Số Lô", Width: 100 },
      { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140 },
      { Field: "MaVach", Title: "Mã Vạch", Width: 100 },
      { Field: "SLConLaiHD", Title: "Số Lượng Còn Lại HĐ", Width: 140 },
      { Field: "SoLuongNhap", Title: "Số Lượng Nhập", Width: 100 },
      { Field: "DonGiaNhap", Title: "Đơn Giá Nhập", Width: 100, Template: this.giaNhapTemplate, TemplateFooter: this.tongSoTienDonGiaNhapGroupFooter },
      { Field: "VAT", Title: "VAT(%)", Width: 50 },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH THANH TOÁN(%)", Width: 120 },
      { Field: "GiaBan", Title: "Giá bán", Width: 100, Template: this.giaBanTemplate, TemplateFooter: this.tongSoTienGiaBanGroupFooter },
    ];
  }
  sortDuyetKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]
  getThongTinDuyetKhoDuocPham(id: number) {
    this.apiService.get<any>("KeToan/GetThongTinDuyetKhoDuocPham/" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinDuyetKhoDuocPham = resultData;
        }
      });
  }

  BackToList() {
    this.router.navigateByUrl("/ke-toan/duyet-nhap-kho?holdQuery=true");
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
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "Duyệt",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.apiService.post<any>("KeToan/DuyetDuocPhamNhapKho/" + this.yeuCauNhapKhoDuocPhamId)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData === "") {
                    this.BackToList();
                    this.notificationService.showSuccess("Duyệt thành công.");
                  } else {
                    this.notificationService.showError(resultData);
                  }
                }
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  popupLoadingData: any;
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingDatas() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  duyetVaIn() {
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
            "Duyệt",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.apiService.post<any>("KeToan/DuyetDuocPhamNhapKho/" + this.yeuCauNhapKhoDuocPhamId)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData === "") {
                    this.loadingPage();
                    this.notificationService.showSuccess("Duyệt thành công.");
                    this.apiService.post<any>("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + this.yeuCauNhapKhoDuocPhamId).subscribe(
                      resData => {
                        if (resData != undefined && resData != null) {
                          this.dialog.open(PhieuNhapKhoDuocPhamPopupComponent, {
                            disableClose: false,
                            width: '1200px',
                            data: resData,
                          }).afterClosed().subscribe(() => {
                            this.closePopupLoadingDatas();
                            this.BackToList();
                          });
                        }
                      },
                      (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                          this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingDatas();
                      }
                    );
                  } else {
                    this.notificationService.showError(resultData);
                  }
                }
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
      this.confrim = this.dialog.open(TuChoiDuyetDuocPhamComponent, {
        disableClose: true,
        width: "400px",
        height: "300px",
      }).afterClosed().subscribe((result) => {
        if (result != "" && result != undefined) {
          this.thongTinLyDoHuyNhapKhoDuocPham.LyDoHuy = result;
          this.thongTinLyDoHuyNhapKhoDuocPham.YeuCauNhapKhoDuocPhamId = this.yeuCauNhapKhoDuocPhamId;
          this.apiService.post<any>("KeToan/TuChoiDuyetDuocPhamNhapKho", this.thongTinLyDoHuyNhapKhoDuocPham)
            .subscribe((resultData) => {
              if (resultData !== null && resultData !== undefined) {
                if (resultData) {
                  this.notificationService.showSuccess("Từ chối duyệt thành công.");
                  this.BackToList();
                }
              }
            });
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  extOnDataBound(dataItem: any) {
    if (dataItem != undefined && dataItem.Data.length > 0) {
      this.dataSource.data = dataItem.Data;
    }
  }

  public tongCongGia(field: any) {
    switch (field) {
      case 'DonGiaNhap':
        return this.dataSource.data.reduce((sum, item) => sum + item.DonGiaNhap, 0);
      case 'GiaBan':
        return this.dataSource.data.reduce((sum, item) => sum + item.GiaBan, 0);
    }
  }
}
