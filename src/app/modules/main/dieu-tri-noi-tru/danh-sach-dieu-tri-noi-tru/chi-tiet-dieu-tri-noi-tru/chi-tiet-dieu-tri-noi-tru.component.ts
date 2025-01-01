import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, InPhieuCongKhaiThuocVatTu, NgayDieuTriDauTien, PhieuKhamThamKhamViewModel } from '../../dieu-tri-noi-tru.model';
import { PhieuDieuTriThamKhamComponent } from '../phieu-dieu-tri/phieu-dieu-tri-tham-kham/phieu-dieu-tri-tham-kham.component';
import { PhieuDieuTriComponent } from '../phieu-dieu-tri/phieu-dieu-tri.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { PhieuInCongKhaiThuocPopupComponent } from '../phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { PhieuInCongKhaiVatTuPopupComponent } from '../phieu-dieu-tri/phieu-in-cong-khai-vat-tu-popup/phieu-in-cong-khai-vat-tu-popup.component';
import { ThongTinHanhChinhComponent } from '../thong-tin-hanh-chinh/thong-tin-hanh-chinh.component';
import { TaiNanThuongTichComponent } from '../tai-nan-thuong-tich/tai-nan-thuong-tich.component';
import { TongKetBenhAnNoiKhoaComponent } from '../tong-ket-benh-an-noi-khoa/tong-ket-benh-an-noi-khoa.component';
import { TongKetBenhAnNgoaiKhoaComponent } from '../tong-ket-benh-an-ngoai-khoa/tong-ket-benh-an-ngoai-khoa.component';
import { ThongTinBenhAnComponent } from '../thong-tin-benh-an/thong-tin-benh-an.component';
import { LichSuVaoVienComponent } from '../lich-su-vao-vien/lich-su-vao-vien/lich-su-vao-vien.component';
import { TongKetBenhAnSanKhoaComponent } from '../tong-ket-benh-an-san-khoa/tong-ket-benh-an-san-khoa.component';
import { RaVienNoiTruComponent } from '../ra-vien/ra-vien-noi-tru.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoaiBenhAn } from 'src/app/shared/enum/dieu-tri-noi-tru.enum';
import { TaoBenhAnSoSinhPopupComponent } from '../tao-benh-an-so-sinh-popup/tao-benh-an-so-sinh-popup.component';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import { ThongTinPhieuPdfPopupComponent } from '../thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { BangKeTheoYeuCauComponent } from '../bang-ke-in-theo-yeu-cau-popup/bang-ke-in-theo-yeu-cau-popup.component';
import { isThisSecond } from 'date-fns';

@Component({
  selector: 'app-chi-tiet-dieu-tri-noi-tru',
  templateUrl: './chi-tiet-dieu-tri-noi-tru.component.html',
  styleUrls: ['./chi-tiet-dieu-tri-noi-tru.component.scss'],
})
export class ChiTietDieuTriNoiTruComponent implements OnInit, AfterViewInit {
  popupLoadingData: any;
  inPhieuCongKhaiThuocVatTu: InPhieuCongKhaiThuocVatTu = new InPhieuCongKhaiThuocVatTu();
  id: number;
  chuyenKhoa: string = null;
  tabString: string;
  validationErrors: any = null;
  tabChildPhieuDieutriId: number = 0;
  isDisabledIn: boolean = false;
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  icChevronLeft = icChevronLeft;
  ngayDieuTriHienTai: Date;
  ngayDieuTriDauTienVo: NgayDieuTriDauTien = new NgayDieuTriDauTien();
  kiemTraKetThucBenhAn: boolean = false;
  ketThucBenhAnKhiThanhToan: boolean = false;
  popupSavingData: any;
  dieuTriNoiTru: ChiTietDieuTriNoiTruViewModel = new ChiTietDieuTriNoiTruViewModel();
  laBASanKhoa: boolean = false;

  loaiBenhAnNoiKhoa: number = LoaiBenhAn.NoiKhoa;
  loaiBenhAnNhiKhoa: number = LoaiBenhAn.NhiKhoa;
  loaiBenhAnPhuKhoa: number = LoaiBenhAn.PhuKhoa;
  loaiBenhAnSanKhoaMo: number = LoaiBenhAn.SanKhoaMo;
  loaiBenhAnSanKhoaThuong: number = LoaiBenhAn.SanKhoaThuong;
  loaiBenhAnNgoaiKhoa: number = LoaiBenhAn.NgoaiKhoa;
  loaiBenhAnThamMy: number = LoaiBenhAn.ThamMy;
  loaiBenhAnTreSoSinh: number = LoaiBenhAn.TreSoSinh;

  @ViewChild("tabStrip", { static: true }) tabStrip: TabStripComponent;
  @ViewChild(LichSuVaoVienComponent, { static: false }) lichSuVaoVienComponent: LichSuVaoVienComponent;

  @ViewChild(PhieuDieuTriComponent, { static: false }) phieuDieuTriShared: any;
  @ViewChild(ThongTinHanhChinhComponent, { static: false }) thongTinHanhChinhShared: ThongTinHanhChinhComponent;
  @ViewChild(TaiNanThuongTichComponent, { static: false }) taiNanThuongTichShared: TaiNanThuongTichComponent;

  @ViewChild(ThongTinBenhAnComponent, { static: false }) thongTinBenhAnShared: ThongTinBenhAnComponent;
  @ViewChild(RaVienNoiTruComponent, { static: false }) raVienNoiTruComponent: RaVienNoiTruComponent;

  @ViewChild(TongKetBenhAnNoiKhoaComponent, { static: false }) tongKetBenhAnNoiKhoaShared: TongKetBenhAnNoiKhoaComponent;
  @ViewChild(TongKetBenhAnNgoaiKhoaComponent, { static: false }) tongKetBenhAnNgoaiKhoaShared: TongKetBenhAnNgoaiKhoaComponent;
  @ViewChild(TongKetBenhAnSanKhoaComponent, { static: false }) tongKetBenhAnSanKhoaShared: TongKetBenhAnSanKhoaComponent;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private router: Router
    , private apiService: ApiService, private notificationService: NotificationService) {
    this.id = this.route.snapshot.params.id;
    this.chuyenKhoa = this.route.snapshot.params.chuyenkhoa;
    this.route.queryParams.subscribe(params => {
      this.tabString = params['tab'];
    });
    this.dieuTriNoiTru.Id = this.id;
  }

  ngOnInit() {

    if (this.id !== undefined && this.id !== null) {
      this.getById(this.id);
      // this.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(this.id);
      this.kiemTraKetThucNoiTruBenhAn(this.id);
      this.ketThucNoiTruBenhAnKhiThanhToanTien(this.id);
    }
  }

  ngAfterViewInit() {
    //console.log("this.tabString = ", this.tabString, this.tabStrip);
    //this.tabStrip.selectTab(3);
    if (this.tabString != undefined && this.tabString == "lich-su-vao-vien") {
      this.tabStrip.selectTab(0);
    }
    else if (this.tabString != undefined && this.tabString == "thong-tin-hanh-chinh") {
      this.tabStrip.selectTab(1);
    }
    else if (this.tabString != undefined && this.tabString == "phong-giuong-bs-dieu-tri") {
      this.tabStrip.selectTab(2);
    }
    else if (this.tabString != undefined && this.tabString == "dich-vu-chi-dinh-ngoai-tru") {
      this.tabStrip.selectTab(3);
    }
    else if (this.tabString != undefined && this.tabString == "phieu-dieu-tri") {
      this.tabStrip.selectTab(4);
    }
    else if (this.tabString != undefined && this.tabString == "tai-nan-thuong-tich") {
      this.tabStrip.selectTab(5);
    }
    else if (this.tabString != undefined && this.tabString == "thong-tin-benh-an") {
      this.tabStrip.selectTab(6);
    }
    else if (this.tabString != undefined && this.tabString == "tong-ket-benh-an") {
      this.tabStrip.selectTab(7);
    }
    else if (this.tabString != undefined && this.tabString == "ra-vien") {
      this.tabStrip.selectTab(8);
    }
    else if (this.tabString != undefined && this.tabString == "ho-so-khac") {
      this.tabStrip.selectTab(9);
    }
    else if (this.tabString != undefined && this.tabString == "luu-tru-benh-an") {
      this.tabStrip.selectTab(10);
    }

    this.cdRef.detectChanges();
  }

  getById(id: number) {
    var self = this;
    this.baseService.getById<ChiTietDieuTriNoiTruViewModel>(id).subscribe(resultData => {
      if (resultData !== null && resultData !== undefined) {
        this.dieuTriNoiTru = resultData;
        this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = this.dieuTriNoiTru.IsDaChiDinhBacSi && (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh && this.dieuTriNoiTru.KhoaPhuSanId == this.dieuTriNoiTru.KhoaId ? true : this.dieuTriNoiTru.IsDaChiDinhGiuong);
        // this.getIsDaChiDinhBacSiVaGiuong();
        if (this.chuyenKhoa === undefined && !this.dieuTriNoiTru.CungKhoaDangNhap) {
          var currentUrl = "dieu-tri-noi-tru";
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate([currentUrl]));
        }
        //KetThucBenhAn mình dựa biến này để kiểm tra không cho sửa bệnh án nếu là chuyển khoa
        if (this.chuyenKhoa != undefined) {
          this.dieuTriNoiTru.KetThucBenhAn = true;
        }

        if (this.dieuTriNoiTru.LoaiBenhAnEnum == LoaiBenhAn.SanKhoaMo || this.dieuTriNoiTru.LoaiBenhAnEnum == LoaiBenhAn.SanKhoaThuong) {
          this.laBASanKhoa = true;
        }
        self.cdRef.detectChanges();
      }
    });
  }

  ngayDieuTriHienTaiChange(event) {
    this.ngayDieuTriHienTai = event;
  }


  onTabSelect(event: any) {
    var tab = "";
    switch (event.index) {
      case 0: tab = "lich-su-vao-vien"; break;
      case 1: tab = "thong-tin-hanh-chinh"; break;
      case 2: tab = "phong-giuong-bs-dieu-tri"; break;
      case 3: tab = "dich-vu-chi-dinh-ngoai-tru"; break;
      case 4: tab = "phieu-dieu-tri"; break;
      case 5: tab = "tai-nan-thuong-tich"; break;
      case 6: tab = "thong-tin-benh-an"; break;
      case 7: tab = "tong-ket-benh-an"; break;
      case 8: tab = "ra-vien"; break;
      case 9: tab = "ho-so-khac"; break;
      default: tab = "lich-su-vao-vien"; break;
    }
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: tab,
        tabChild: "tham-kham",
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // trigger navigation
    });
  }

  inPhieuTruyenMau() {
    this.phieuDieuTriShared.inPhieuTruyenMau();
  }

  inPhieuAn() {
    this.phieuDieuTriShared.inPhieuSuatAn();
  }
  
  dichVuThuocVatTuChuaThucHien() {
    this.phieuDieuTriShared.dichVuThuocVatTuChuaThucHien();
  }

  InToDieuTriTheoNgay() {
    this.phieuDieuTriShared.InToDieuTriTheoNgay();
  }

  InTatCaToDieuTri() {
    this.phieuDieuTriShared.InTatCaToDieuTri();
  }

  phieuDieuTriTabChange($event) {
    //console.log("phieuDieuTriTabChange = ", $event);
    this.tabChildPhieuDieutriId = $event.index;
  }

  CheckHiddenBottom(id: number, childId: number = null, childIdActive: number = null) {
    //id start to 0 from .....
    //console.log("tabStrip = ", this.tabStrip.tabs.toArray().indexOf(this.tabStrip.tabs.filter(o => o.active)[0]));
    if (this.tabStrip == undefined) return true;
    if (id == this.tabStrip.tabs.toArray().indexOf(this.tabStrip.tabs.filter(o => o.active)[0])) {
      if (childId == null) {
        return false;
      }

      if (childIdActive != null && childId == childIdActive) {
        return false;
      }
      else {
        return true;
      }
    }
    return true;
  }



  HuyThongLichSuVaoVien() {
    this.lichSuVaoVienComponent.BackToList();
  }

  HuyThongTinRaVien() {
    this.raVienNoiTruComponent.huyThongTinRaVien();
  }

  LuuThongTinRaVien() {
    this.raVienNoiTruComponent.luuThongTinRaVien();
  }

  ketThucThongTinBenhAn() {
    this.raVienNoiTruComponent.ketThucThongTinBenhAn();
  }

  moThongTinBenhAn() {
    this.raVienNoiTruComponent.moThongTinBenhAn();
  }

  inThongTinBenhAn() {
    this.raVienNoiTruComponent.inThongTinBenhAn();
  }

  inBangkeChiPhi() {

    this.dialog.open(BangKeTheoYeuCauComponent, {
      disableClose: false,
      width: '600px'
    }).afterClosed()
      .subscribe((chonPhieuIn) => {
        if (typeof chonPhieuIn === "boolean") {
          if (chonPhieuIn) {
            this.phieuInTaCa();
          } else {
            this.phieuInChiPhiTheoKhoa();
          }
        }
      });
  }

  phieuInTaCa() {
    let arrFileUrl: Array<any> = [];
    let arrFilePdf: Array<any> = [];

    let loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });
    let hostingName = window.location.protocol + '//' + window.location.host;
    this.apiService.postExportPdf<any>("DieuTriNoiTru/InPhieuThu?yeuCauTiepNhanId=" + this.id + "&hostingName=" + hostingName).subscribe(
      (file) => {
        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);
        arrFileUrl.push(datalocalURL);
        arrFilePdf.push(file);
        if (arrFilePdf.length > 0) {
          this.dialog
            .open(ThongTinPhieuPdfPopupComponent, {
              disableClose: false,
              width: "1000px",
              data: { arrFileUrl, arrFilePdf },
            })
            .afterClosed()
            .subscribe(() => {
              loading.close();
            });
        } else {
          this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
          loading.close();
        }
      },
      (err: ApiError) => {
        if (err.Message !== "Validation Failed") {
          this.notificationService.showError(err.Message);
          loading.close();
        }
      }
    );
  }

  phieuInChiPhiTheoKhoa() {
    let arrFileUrl: Array<any> = [];
    let arrFilePdf: Array<any> = [];

    let loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: {},
    });
    let hostingName = window.location.protocol + '//' + window.location.host;
    this.apiService.postExportPdf<any>("DieuTriNoiTru/XemBangKeChiPhiTheoKhoa?yeuCauTiepNhanId=" + this.id + "&hostingName=" + hostingName).subscribe(
      (file) => {

        let newBlob = new Blob([file], { type: "application/pdf" });
        let datalocalURL = window.URL.createObjectURL(newBlob);
        arrFileUrl.push(datalocalURL);
        arrFilePdf.push(file);

        if (arrFilePdf.length > 0) {
          this.dialog
            .open(ThongTinPhieuPdfPopupComponent, {
              disableClose: false,
              width: "1000px",
              data: { arrFileUrl, arrFilePdf },
            })
            .afterClosed()
            .subscribe(() => {
              loading.close();
            });
        } else {
          this.notificationService.showError("Bảng chi phí chưa có dịch vụ.");
          loading.close();
        }

      },
      (err: ApiError) => {
        if (err.Message !== "Validation Failed") {
          this.notificationService.showError(err.Message);
          loading.close();
        }
      }
    );
  }

  HuyThongTinBenhAn() {
    this.thongTinBenhAnShared.huyBenhAn();
  }

  LuuThongTinBenhAn() {
    this.thongTinBenhAnShared.luuBenhAn();
  }

  kiemTraKetThucNoiTruBenhAn(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/KiemTraKetThucBenhAn/" + id)
        .subscribe((resultData) => {
          if (this.chuyenKhoa != undefined) {
            this.kiemTraKetThucBenhAn = true;
          }else{
            this.kiemTraKetThucBenhAn = resultData;
          }         
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ketThucNoiTruBenhAnKhiThanhToanTien(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<any>("DieuTriNoiTru/KiemTraKetBenhAnKhiThuTien/" + id)
        .subscribe((resultData) => {
          this.ketThucBenhAnKhiThanhToan = resultData;
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  HuyTongKetBenhAn() {
    //this.tongKetBenhAnNoiKhoaShared.huyBenhAn();
    //this.tongKetBenhAnNgoaiKhoaShared.huyBenhAn();
    if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNoiKhoa
      || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNhiKhoa || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh) {
      this.tongKetBenhAnNoiKhoaShared.huyBenhAn();
    }
    else if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnPhuKhoa || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNgoaiKhoa
      || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnThamMy) {
      this.tongKetBenhAnNgoaiKhoaShared.huyBenhAn();
    }
    else if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnSanKhoaMo || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnSanKhoaThuong) {
      this.tongKetBenhAnSanKhoaShared.huyBenhAn();
    }
  }

  LuuTongKetBenhAn() {
    //this.tongKetBenhAnNoiKhoaShared.luuBenhAn();
    //this.tongKetBenhAnNgoaiKhoaShared.luuBenhAn();
    //this.tongKetBenhAnSanKhoaShared.LuuThongTinBenhAnSanKhoa();
    if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNoiKhoa
      || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNhiKhoa || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh) {
      this.tongKetBenhAnNoiKhoaShared.luuBenhAn();
    }
    else if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnPhuKhoa || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnNgoaiKhoa
      || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnThamMy) {
      this.tongKetBenhAnNgoaiKhoaShared.luuBenhAn();
    }
    else if (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnSanKhoaMo || this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnSanKhoaThuong) {
      this.tongKetBenhAnSanKhoaShared.LuuThongTinBenhAnSanKhoa();
    }
  }

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }


  LuuPhieuKham() {
    let data: PhieuKhamThamKhamViewModel = this.phieuDieuTriShared.getSharedData();
    data.Id = this.id;
    this.validationErrors = null;
    this.cdRef.detectChanges();
    this.savingPage();
    // data.DienBiens.forEach((element, index) => {
    //     element.IdView = index + 1;
    // });
    this.apiService.post<any>("DieuTriNoiTru/UpdatePhieuDieuTriThamKham", data).subscribe(
      resultData => {
        this.closepopupSavingData();
        this.phieuDieuTriShared.reloadGrid(resultData);

        this.notificationService.showSuccess(ChiTietDieuTriMessage.MessageUpdatePhieuKhamSuccess);
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closepopupSavingData();
      });
    //console.log("data = ", data);
  }
  HuyPhieuKham() {
    this.phieuDieuTriShared.reloadPage();
  }

  getPhieuDieuTriId(phieuDieuTriId: number) {
    this.cdRef.detectChanges();
    this.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = phieuDieuTriId;
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  inPhieuCongKhaiThuoc() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 1;
    self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuInCongKhaiThuocPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { Html: resData, Title: "PHIẾU CÔNG KHAI THUỐC", LaPhieuThucHien: false },
          }
          ).afterClosed().subscribe(() => {
            self.closePopupLoadingData();
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      }
    );
  }

  inPhieuCongKhaiVatTu() {
    var self = this;
    self.loadingPage();
    self.cdRef.detectChanges();
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 2;
    self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          if (resData == undefined || resData == null) {
            self.notificationService.showError("Không có dịch vụ nào để in");
          }
          else {
            self.dialog.open(PhieuInCongKhaiVatTuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Html: resData, Title: "PHIẾU CÔNG KHAI VTYT", LaPhieuThucHien: false },
            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingData();
            });
          }
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      }
    );
  }

  huyThongTinHanhChinh() {
    this.tabString = "lich-su-vao-vien";
    this.tabStrip.selectTab(0);
  }

  luuThongTinHanhChinh() {
    this.thongTinHanhChinhShared.luuThongTinHanhChinh();
  }

  huyTaiNanThuongTich() {
    this.taiNanThuongTichShared.huyTaiNanThuongTich();
  }

  luuTaiNanThuongTich() {
    this.taiNanThuongTichShared.luuTaiNanThuongTich();
  }

  InChiDinh() {
    this.phieuDieuTriShared.InChiDinh();
  }
  InPhieuXN() {
    this.phieuDieuTriShared.InPhieuXN();
  }

  disabledInPhieuThuocVT(event: any) {
    if (event) {
      this.isDisabledIn = true;
    }
    else {
      this.isDisabledIn = false;
    }
  }

  kiemTraTaoBenhAnSoSinh() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.loadingPage();
      this.apiService.get<boolean>("DieuTriNoiTru/KiemTraTaoBenhAnSoSinh?yeuCauTiepNhanId=" + this.id)
        .subscribe(
          (resultData) => {
            this.closePopupLoadingData();
            if (resultData) {
              this.dialog.open(TaoBenhAnSoSinhPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: this.id
              }).afterClosed().subscribe(result => {
                switch (this.tabString) {
                  case 'tong-ket-benh-an':
                    if (this.tongKetBenhAnSanKhoaShared != undefined && this.tongKetBenhAnSanKhoaShared != null) {
                      this.tongKetBenhAnSanKhoaShared.getThongTinBenhAnNoiSanKhoa(this.id);
                    }
                    break;
                  default:
                    break;
                }

              });
            }
          },
          (err: any) => {
            this.notificationService.showError(err.Message);
            this.closePopupLoadingData();
          }
        );
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  back() {
    this.router.navigateByUrl("/dieu-tri-noi-tru?holdQuery=true");
    // this.router.navigate(['/dieu-tri-noi-tru'], {
    //   queryParamsHandling: 'preserve',
    // });
  }

  // getIsDaChiDinhBacSiVaGiuong() {
  //   this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhBacSiVaGiuong?yeuCauTiepNhanId=${this.id}`).subscribe((res) => {
  //     this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = res;
  //   }, (err: ApiError) => {
  //     err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
  //   });
  // }

  thongTinBenhNhanChanged(evt) {
    if (evt) {
      this.getById(this.id);
    }
  }

  // isDaChiDinhBacSiVaGiuongChanged(evt) {
  //   this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = evt;
  // }

  isDaChiDinhBacSiChanged(evt) {
    this.dieuTriNoiTru.IsDaChiDinhBacSi = evt;
    this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = this.dieuTriNoiTru.IsDaChiDinhBacSi && (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh && this.dieuTriNoiTru.KhoaPhuSanId == this.dieuTriNoiTru.KhoaId ? true : this.dieuTriNoiTru.IsDaChiDinhGiuong);
  }

  isDaChiDinhGiuongChanged(evt) {
    this.dieuTriNoiTru.IsDaChiDinhGiuong = evt;
    this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = this.dieuTriNoiTru.IsDaChiDinhBacSi && (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh && this.dieuTriNoiTru.KhoaPhuSanId == this.dieuTriNoiTru.KhoaId ? true : this.dieuTriNoiTru.IsDaChiDinhGiuong);
  }

  khoaDieuTriChanged(evt) {
    this.dieuTriNoiTru.KhoaId = evt ? evt.KhoaPhongChuyenDenId : null;
    this.dieuTriNoiTru.Khoa = evt ? evt.KhoaPhongChuyenDenDisplay : null;
    this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = this.dieuTriNoiTru.IsDaChiDinhBacSi && (this.dieuTriNoiTru.LoaiBenhAnEnum == this.loaiBenhAnTreSoSinh && this.dieuTriNoiTru.KhoaPhuSanId == this.dieuTriNoiTru.KhoaId ? true : this.dieuTriNoiTru.IsDaChiDinhGiuong);
  }

  InPhieuKhamBenh() {
    this.thongTinBenhAnShared.InPhieuKhamBenh();
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // ctr + s
    if (event.ctrlKey && event.keyCode == 83) {

      console.log("HotKey = ", this.tabChildPhieuDieutriId, this.tabString);

      event.preventDefault();

      switch (this.tabString) {
        case 'lich-su-vao-vien':
          break;
        case 'thong-tin-hanh-chinh':
          this.luuThongTinHanhChinh();
          break;
        // case 'phong-giuong-bs-dieu-tri': //Không có
        //   break;
        case 'phieu-dieu-tri':
          if (this.tabChildPhieuDieutriId == 0) {
            this.LuuPhieuKham();
          }
          break;
        case 'tai-nan-thuong-tich':
          this.luuTaiNanThuongTich();
          break;
        case 'thong-tin-benh-an':
          this.LuuThongTinBenhAn();
          break;
        case 'tong-ket-benh-an':
          this.LuuTongKetBenhAn();
          break;
        case 'ra-vien':
          this.LuuThongTinRaVien();
          break;
        // case 'ho-so-khac':
        //   break;
        default:
          break;
      }
    }
  }
  khacKhoaDieuTri: boolean = false;
  checkKhacKhoaDieuTri(event: boolean) {
    this.khacKhoaDieuTri = event;
  }
  navigate(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  thongTinPhieuKhamData: PhieuKhamThamKhamViewModel = new PhieuKhamThamKhamViewModel();
  khoaChiDinhId: number = 0;
  laNgayDieuTriDauTienChange(event) {
    console.log("laNgayDieuTriDauTienChange: ", event)
    this.ngayDieuTriDauTienVo = event;
  }

  apDungDonThuocChoCacNgaySau() {
    this.phieuDieuTriShared.apDungDonThuocChoCacNgaySau();
  }

  saoChepDonThuocNgayKhacApDungNgayHienTai() {
    this.phieuDieuTriShared.saoChepDonThuocNgayKhacApDungNgayHienTai();
  }

  apDungDonVTYTChoCacNgaySau() {
    this.phieuDieuTriShared.apDungDonVTYTChoCacNgaySau();
  }

  saoChepDonVTYTNgayKhacApDungNgayHienTai() {
    this.phieuDieuTriShared.saoChepDonVTYTNgayKhacApDungNgayHienTai();
  }

}
