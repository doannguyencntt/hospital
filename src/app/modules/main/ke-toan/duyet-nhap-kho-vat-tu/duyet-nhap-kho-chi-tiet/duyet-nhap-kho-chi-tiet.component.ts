import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ThongTinDuyetKhoVatTu, ThongTinLyDoHuyNhapKhoVatTu } from '../duyet-nhap-kho.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TuChoiDuyetVatTuComponent } from '../tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component';
import { GroupDescriptor } from '@progress/kendo-data-query/dist/npm/grouping/group-descriptor.interface';
import { SortDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InPhieuNhapKhoVatTu } from '../../../nhap-xuat/vat-tu/nhap-kho/nhap-kho';
import { XacNhanChonPhieuInVatTuPopupComponent } from '../../../nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component';


@Component({
  selector: 'app-duyet-nhap-kho-chi-tiet',
  templateUrl: './duyet-nhap-kho-chi-tiet.component.html',
  styleUrls: ['./duyet-nhap-kho-chi-tiet.component.scss']
})
export class DuyetVatTuNhapKhoChiTietComponent implements OnInit {
  thongTinDuyetKhoVatTu = new ThongTinDuyetKhoVatTu();
  documentType: DocumentType;
  gridColumns: any[] = [];
  validationErrors: any = [];
  isDisabled: any;
  urlGetDataAsync = "KeToan/GetDanhSachDuyetKhoVatTuChiTietForGridAsync";
  yeuCauNhapKhoVatTuId: number = 0;
  confrim: any;
  thongTinLyDoHuyNhapKhoVatTu = new ThongTinLyDoHuyNhapKhoVatTu();
  popupLoadingData: any;
  inPhieuNhapKhoVatTu: InPhieuNhapKhoVatTu = new InPhieuNhapKhoVatTu();

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
    this.documentType = DocumentType.DuyetNhapKhoVatTu;
    this.yeuCauNhapKhoVatTuId = this.route.snapshot.params.id;
    if (this.yeuCauNhapKhoVatTuId != undefined && this.yeuCauNhapKhoVatTuId != null) {
      this.getThongTinDuyetKhoVatTu(this.yeuCauNhapKhoVatTuId);
    }
    this.gridColumns = [
      { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaCungCap", Title: "NCC", Width: 100, TemplateFooter: this.headerTongCongGroupFooter },
      { Field: "HopDongThau", Title: "Hợp Đồng Thầu", Width: 100 },
      { Field: "VatTu", Title: "Tên Vật Tư", MinWidth: 100 },
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
  getThongTinDuyetKhoVatTu(id: number) {
    this.apiService.get<any>("KeToan/GetThongTinDuyetKhoVatTu/" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinDuyetKhoVatTu = resultData;
        }
      });
  }

  BackToList() {
    this.router.navigateByUrl("/ke-toan/duyet-nhap-kho-vat-tu?holdQuery=true");
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
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
            this.apiService.post<any>("KeToan/DuyetDuocVatTuKho/" + this.yeuCauNhapKhoVatTuId)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData === "") {
                    // this.dialog.open(ConfirmComponent, {
                    //   disableClose: false,
                    //   width: "500px",
                    //   data: {
                    //     Title: "Xác nhận in",
                    //     Message: "Bạn có muốn in phiếu nhập kho này không ?",
                    //   },
                    // }).afterClosed().subscribe((res) => {
                    //   if (res == "Yes") {
                    // this.loadingPage();
                    this.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
                    this.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = this.yeuCauNhapKhoVatTuId;
                    this.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
                    this.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
                    this.dialog.open(XacNhanChonPhieuInVatTuPopupComponent, {
                      disableClose: false,
                      width: "400px",
                      data: this.inPhieuNhapKhoVatTu,
                    }).afterClosed().subscribe(() => {
                      this.BackToList();
                    });

                    // } else {
                    //   this.BackToList();
                    // }
                    // });
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
          this.thongTinLyDoHuyNhapKhoVatTu.YeuCauNhapKhoVatTuId = this.yeuCauNhapKhoVatTuId;
          this.apiService.post<any>("KeToan/TuChoiDuyetVatTuNhapKho", this.thongTinLyDoHuyNhapKhoVatTu)
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
