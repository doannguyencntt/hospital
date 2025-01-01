import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiTietDieuTriNoiTruViewModel, DayModel, InPhieuCongKhaiThuocVatTu, LstYearOrderByModel, MonthModel, PhieuKhamThamKhamViewModel, XacNhanInPhieuTruyenMau, YearModel, XacNhanInPhieuAn, NgayDieuTriDauTien } from '../../dieu-tri-noi-tru.model';
import { PhieuDieuTriDvktComponent } from './phieu-dieu-tri-dvkt/phieu-dieu-tri-dvkt.component';
import { PhieuDieuTriPopupNgayComponent } from './phieu-dieu-tri-popup-ngay/phieu-dieu-tri-popup-ngay.component';
import { PhieuDieuTriThamKhamComponent } from './phieu-dieu-tri-tham-kham/phieu-dieu-tri-tham-kham.component';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { PhieuInCongKhaiVatTuPopupComponent } from './phieu-in-cong-khai-vat-tu-popup/phieu-in-cong-khai-vat-tu-popup.component';
import { PhieuInTruyenMauPopupComponent } from './phieu-in-truyen-mau/phieu-in-truyen-mau-popup.component';
import { PhieuInSuatAnPopupComponent } from './phieu-in-suat-an-popup/phieu-in-suat-an-popup.component';
import { PhieuDieuTriThuocComponent } from './phieu-dieu-tri-thuoc/phieu-dieu-tri-thuoc.component';
import { PhieuDieuTriVatTuComponent } from './phieu-dieu-tri-vat-tu/phieu-dieu-tri-vat-tu.component';
import { ThongTinPhieuInSuatAnComponent } from './thong-tin-phieu-in-suat-an/thong-tin-phieu-in-suat-an.component';
@Component({
  selector: 'app-phieu-dieu-tri',
  templateUrl: './phieu-dieu-tri.component.html',
  styleUrls: ['./phieu-dieu-tri.component.scss']
})
export class PhieuDieuTriComponent implements OnInit {
  inPhieu: XacNhanInPhieuTruyenMau = new XacNhanInPhieuTruyenMau();

  inPhieuAn: XacNhanInPhieuAn = new XacNhanInPhieuAn();

  phieuDieuTriHienTaiId: number;
  ngayDieuTriHienTai: Date;
  constngayDieuTriDauTien: Date;

  ngayDieuTriHienTaiHienThi: string = "Chưa có";

  lstYear: Array<YearModel> = new Array<YearModel>();
  lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();

  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;
  tabString: string;
  thongTinPhieuKham: PhieuKhamThamKhamViewModel = new PhieuKhamThamKhamViewModel();
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Input() validationErrors: any;

  @ViewChild("tabChildStrip", { static: true }) tabChildStrip: TabStripComponent;

  @ViewChild(PhieuDieuTriThamKhamComponent, { static: false }) phieuDieuTriThamKhamShared: any;
  @ViewChild(PhieuDieuTriThuocComponent, { static: false }) phieuDieuTriThuocComponentShared: any;
  @ViewChild(PhieuDieuTriVatTuComponent, { static: false }) phieuDieuTriVatTuComponentShared: any;

  @ViewChild(PhieuDieuTriDvktComponent, { static: false }) phieuDichVuKyThuatShared: any;

  @Input() id: number;
  @Input() dataBenhNhan: any;

  @Output() tabSelectChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() ngayDieuTriHienTaiChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() laNgayDieuTriDauTienChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() phieuDieuTriId: EventEmitter<any> = new EventEmitter<any>();
  @Output() disabledInPhieuThuocVT: EventEmitter<any> = new EventEmitter<any>();
  @Output() checkKhacKhoaDieuTri: EventEmitter<any> = new EventEmitter<boolean>();


  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private authService: AuthService, private router: Router
    , private apiService: ApiService, private notificationService: NotificationService) {

    this.route.queryParams.subscribe(params => {
      this.tabString = params['tabChild'];
    });
  }

  ngOnInit() {
    //this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
    //this.dummyData();
    this.getNgayDieuTri(this.id);
    this.getNgayNhapVien(this.id);
    //console.log("YCTNId = ", this.id);
  }

  getActiveTab() {
    //console.log("this.tabString = ", this.tabString, this.tabChildStrip);
    //this.tabChildStrip.selectTab(3);
    if (this.tabString != undefined && this.tabString == "tham-kham") {
      this.tabChildStrip.selectTab(0);
    }
    else if (this.tabString != undefined && this.tabString == "dvkt") {
      this.tabChildStrip.selectTab(1);
    }
    else if (this.tabString != undefined && this.tabString == "kq-cls") {
      this.tabChildStrip.selectTab(2);
    }
    else if (this.tabString != undefined && this.tabString == "thuoc") {
      this.tabChildStrip.selectTab(3);
    }
    else if (this.tabString != undefined && this.tabString == "vat-tu") {
      this.tabChildStrip.selectTab(4);
    }
    else if (this.tabString != undefined && this.tabString == "truyen-mau") {
      this.tabChildStrip.selectTab(5);
    }
    else if (this.tabString != undefined && this.tabString == "suat-an") {
      this.tabChildStrip.selectTab(6);
    }
    this.cdRef.detectChanges();
  }
  onTabSelect(event: any) {
    var tab = "";
    switch (event.index) {
      case 0: tab = "tham-kham"; break;
      case 1: tab = "dvkt"; break;
      case 2: tab = "kq-cls"; break;
      case 3: tab = "thuoc"; break;
      case 4: tab = "vat-tu"; break;
      case 5: tab = "truyen-mau"; break;
      case 6: tab = "suat-an"; break;
      default: tab = "tham-kham"; break;
    }
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tabChild: tab
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // trigger navigation
    });
    this.tabSelectChange.emit(event);
  }
  getNgayDieuTriHienTai(yearModel: YearModel[]) {
    if (yearModel != null && yearModel.length > 0) {
      var now = new Date();
      var result = yearModel[0].Months[0].Days[0];
      yearModel.filter(o => o.Year === now.getFullYear()).forEach(y => {
        y.Months.filter(b => b.Month === now.getMonth() + 1).forEach(m => {
          m.Days.filter(c => c.Day === now.getDate()).forEach(d => {
            result = d;
            return;
          });
        });
      });
      return result;
    }
    return null;
  }
  khoaDieuTriHienTaiId: number = 0;
  ngayDieuTriDauTienVo: NgayDieuTriDauTien = new NgayDieuTriDauTien();
  getNgayDieuTri(yeuCauTiepNhanId: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetNgayDieuTri?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined && resultData.LstYearOrderBy.length > 0) {
          this.lstYear = resultData.LstYear;
          this.lstYearOrderBy = resultData.LstYearOrderBy;
          let khoaDieuTris = this.lstYearOrderBy.filter(z => z.LaNgayDieuTriDauTien);
          this.setDateTimeForModel();

          this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);
          var ndtht = this.getNgayDieuTriHienTai(this.lstYear);

          this.ngayDieuTriHienTai = ndtht.FullDate; //new Date(this.lstYear[0].Months[0].Days[0].FullDate);
          this.phieuDieuTriHienTaiId = ndtht.PhieuDieuTriId;
          this.phieuDieuTriId.emit(this.phieuDieuTriHienTaiId);
          this.ngayDieuTriHienTaiChange.emit(this.ngayDieuTriHienTai);
          if (khoaDieuTris.length > 0) {
            this.constngayDieuTriDauTien = new Date(khoaDieuTris[0].Date);
            this.ngayDieuTriDauTienVo.LaNgayDieuTriDauTien = ndtht.LaNgayDieuTriDauTien;
            this.ngayDieuTriDauTienVo.KhoaChiDinhId = khoaDieuTris[0].KhoaId;
          } else {
            this.constngayDieuTriDauTien = new Date();
            this.ngayDieuTriDauTienVo.LaNgayDieuTriDauTien = false;
            this.ngayDieuTriDauTienVo.KhoaChiDinhId = this.khoaDieuTriHienTaiId;
          }
          this.ngayDieuTriHienTaiHienThi = ndtht.FullDateDisplay;


        }
        this.getActiveTab();
      },
      (err: ApiError) => {

      });
  }
  ngayNhapVien: Date = null;
  getNgayNhapVien(yeuCauTiepNhanId: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetNgayNhapVien?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          this.ngayNhapVien = resultData;
        }
      },
      () => {

      });
  }

  setDateTimeForModel() {
    this.lstYear.forEach(o => {
      o.Months.forEach(m => {
        m.Days.forEach(d => {
          if (d.FullDate != undefined && d.FullDate != null) {
            d.FullDate = new Date(d.FullDate);
          }
          if (d.FullDateNext != undefined && d.FullDateNext != null) {
            d.FullDateNext = new Date(d.FullDateNext);
          }
          if (d.FullDatePre != undefined && d.FullDatePre != null) {
            d.FullDatePre = new Date(d.FullDatePre);
          }
        })
      })
    });

    if (this.lstYearOrderBy != undefined && this.lstYearOrderBy.length > 0) {
      for (let i = 0; i < this.lstYearOrderBy.length; i++) {
        this.lstYearOrderBy[i].Date = new Date(this.lstYearOrderBy[i].Date);
      }
    }
  }

  // dummyData(){
  //   let yearStart = 2010;
  //   for(let i =0; i<9; i++)
  //   {
  //     let model = new YearModel();
  //     model.Year = yearStart + i;
  //     for(let k =0; k<4; k++){
  //       let monthStart = 3;
  //       let modelMoth = new MonthModel();
  //       modelMoth.Month = monthStart + k;
  //       model.Months.push(modelMoth);
  //       for(let j =0; j<20; j++){
  //         let dayStart = 1;
  //         let modelDay = new DayModel();
  //         modelDay.Day = dayStart + j;
  //         modelDay.Year =  +JSON.stringify(JSON.parse(model.Year + ""));
  //         modelDay.Month = +JSON.stringify(JSON.parse(model.Months[k].Month + ""));
  //         modelDay.FullDate = new Date(modelDay.Year,modelDay.Month - 1,modelDay.Day);
  //         modelDay.FullDateDisplay = CommonService.formatDate(modelDay.FullDate, "dd/mm/yyyy");

  //         this.lstYearOrderBy.push(modelDay.FullDate);

  //         model.Months[k].Days.push(modelDay);
  //       }
  //     }
  //     this.lstYear.push(model);
  //   }

  //   this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);

  //   //
  //   this.ngayDieuTriHienTai = this.lstYear[0].Months[0].Days[0].FullDate;
  //   this.ngayDieuTriHienTaiChange.emit(this.ngayDieuTriHienTai);
  //   this.ngayDieuTriHienTaiHienThi = this.lstYear[0].Months[0].Days[0].FullDateDisplay;
  // }

  setDateNextPrev(lstYear: YearModel[], lstYearOrderBy: LstYearOrderByModel[]) {
    lstYear.forEach(o => {
      o.Months.forEach(m => {
        m.Days.forEach(d => {
          //let dateIndex = lstYearOrderBy.findIndex(p => p.Date.getTime() === d.FullDate.getTime() && p.KhoaId);
          let dateIndex = lstYearOrderBy.findIndex(p => p.PhieuDieuTriId == d.PhieuDieuTriId);
          if (lstYearOrderBy.length == 1) {
            d.FullDateNext = d.FullDate;
            d.FullDatePre = d.FullDate;
            d.PhieuDieuTriIdNext = d.PhieuDieuTriId;
            d.PhieuDieuTriIdPre = d.PhieuDieuTriId;
          }
          else if (dateIndex == 0) {
            d.FullDatePre = lstYearOrderBy[lstYearOrderBy.length - 1].Date;
            d.FullDateNext = lstYearOrderBy[dateIndex + 1].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[lstYearOrderBy.length - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[dateIndex + 1].PhieuDieuTriId;
          }
          else if (dateIndex == lstYearOrderBy.length - 1) {
            d.FullDatePre = lstYearOrderBy[dateIndex - 1].Date;
            d.FullDateNext = lstYearOrderBy[0].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[dateIndex - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[0].PhieuDieuTriId;
          }
          else {
            d.FullDatePre = lstYearOrderBy[dateIndex - 1].Date;
            d.FullDateNext = lstYearOrderBy[dateIndex + 1].Date;
            d.PhieuDieuTriIdPre = lstYearOrderBy[dateIndex - 1].PhieuDieuTriId;
            d.PhieuDieuTriIdNext = lstYearOrderBy[dateIndex + 1].PhieuDieuTriId;
          }


          d.FullDateNextDisplay = CommonService.formatDate(d.FullDateNext, "dd/mm/yyyy");
          d.FullDatePreDisplay = CommonService.formatDate(d.FullDatePre, "dd/mm/yyyy");

        });
      });
    });

  }

  // setNextYearAndPreYear(lstYear: Array<YearModel>){
  //   let yearNext: number;
  //   let monthNext: number;
  //   let dayNext: number;

  //   let rangeYear = lstYear.length;
  //   lstYear.forEach(y => {
  //     let yearIndex = lstYear.findIndex(p => p == y);
  //     let rangeMonth = y.Months.length;
  //     y.Months.forEach(m => {
  //       let monthIndex = y.Months.findIndex(p => p == m);
  //       let rangeDay = m.Days.length;
  //       m.Days.forEach(d => {
  //         let dayIndex = m.Days.findIndex(p => p == d);
  //         if(dayIndex < rangeDay - 1){
  //           let dayNext = m.Days[dayIndex + 1].Day;
  //           let monthNext = m.Month;
  //           let yearNext = y.Year;
  //           d.FullDateNext = new Date(yearNext, monthNext, dayNext);
  //           d.FullDateNextDisplay = CommonService.formatDate(d.FullDateNext, "dd/mm/yyyy");
  //         }
  //         else{

  //         }

  //       });
  //     });

  //   });


  // }

  CheckHiddenBottom() {
    if (this.tabChildStrip.tabs.toArray().indexOf(this.tabChildStrip.tabs.filter(o => o.active)[0]) == 0) {
      return false;
    }
    return true;
  }

  getKhoaTheoPhieuDieuTri(phieuDieuTriId: number, laNgayDieuTriDauTien: boolean) {
    let params = {
      yeuCauTiepNhanId: this.id,
      phieuDieuTriId: phieuDieuTriId
    };
    this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKham", params).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          let ngayDieuTriDauTienVo = new NgayDieuTriDauTien();
          ngayDieuTriDauTienVo.LaNgayDieuTriDauTien = laNgayDieuTriDauTien;
          ngayDieuTriDauTienVo.LaKhoaChiDinh = this.khoaDieuTriHienTaiId === resultData.KhoaChiDinhId ? true : false;
          if (laNgayDieuTriDauTien) {
            ngayDieuTriDauTienVo.KhoaChiDinhId = this.khoaDieuTriHienTaiId;
          }
          else {
            ngayDieuTriDauTienVo.KhoaChiDinhId = this.lstYearOrderBy.filter(z => z.PhieuDieuTriId == this.phieuDieuTriHienTaiId)[0].KhoaId;
          }
          this.laNgayDieuTriDauTienChange.emit(ngayDieuTriDauTienVo);
        }
      },
      () => {
      });
  }


  decreaseDate() {
    //console.log("decreaseDate = ",this.ngayDieuTriHienTai, this.lstYear);

    let find = false;
    this.lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {

          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            //console.log("find");
            if (find) return false;
            this.ngayDieuTriHienTai = d.FullDatePre;
            this.phieuDieuTriHienTaiId = d.PhieuDieuTriIdPre;
            this.ngayDieuTriHienTaiChange.emit(this.ngayDieuTriHienTai);
            this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(d.FullDatePre, "dd/mm/yyyy");
            find = true;
          }
        });
      });
    });
    if (this.constngayDieuTriDauTien != undefined && this.constngayDieuTriDauTien != null
      && this.constngayDieuTriDauTien.getDate() == this.ngayDieuTriHienTai.getDate()
      && this.constngayDieuTriDauTien.getMonth() == this.ngayDieuTriHienTai.getMonth()
      && this.constngayDieuTriDauTien.getFullYear() == this.ngayDieuTriHienTai.getFullYear()
      && this.khoaDieuTriHienTaiId == this.lstYearOrderBy.filter(z => z.PhieuDieuTriId == this.phieuDieuTriHienTaiId)[0].KhoaId
    ) {
      this.getKhoaTheoPhieuDieuTri(this.phieuDieuTriHienTaiId, true);
    }
    else {
      this.getKhoaTheoPhieuDieuTri(this.phieuDieuTriHienTaiId, false);
    }
  }
  increaseDate() {
    // if (this.constphieuDieuTriDauTienId == this.phieuDieuTriHienTaiId) {
    //   this.laNgayDieuTriDauTienChange.emit(true);
    // }
    // else {
    //   this.laNgayDieuTriDauTienChange.emit(false);
    // }
    let find = false;
    this.lstYear.forEach(y => {
      if (find) return false;
      y.Months.forEach(m => {
        if (find) return false;
        m.Days.forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            if (find) return false;
            this.ngayDieuTriHienTai = d.FullDateNext;
            this.phieuDieuTriHienTaiId = d.PhieuDieuTriIdNext;
            this.ngayDieuTriHienTaiChange.emit(this.ngayDieuTriHienTai);
            this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(d.FullDateNext, "dd/mm/yyyy");
            find = true;
          }

        });
      });
    });
    if (this.constngayDieuTriDauTien != undefined && this.constngayDieuTriDauTien != null
      && this.constngayDieuTriDauTien.getDate() == this.ngayDieuTriHienTai.getDate()
      && this.constngayDieuTriDauTien.getMonth() == this.ngayDieuTriHienTai.getMonth()
      && this.constngayDieuTriDauTien.getFullYear() == this.ngayDieuTriHienTai.getFullYear()
      && this.khoaDieuTriHienTaiId == this.lstYearOrderBy.filter(z => z.PhieuDieuTriId == this.phieuDieuTriHienTaiId)[0].KhoaId
    ) {
      this.getKhoaTheoPhieuDieuTri(this.phieuDieuTriHienTaiId, true);
    }
    else {

      this.getKhoaTheoPhieuDieuTri(this.phieuDieuTriHienTaiId, false);

    }
  }


  contentDate() {
    let dialogRef = this.dialog.open(PhieuDieuTriPopupNgayComponent, {
      disableClose: true,
      width: '500px',
      height: '500px',
      data: {
        lstYear: this.lstYear,
        lstYearOrderBy: this.lstYearOrderBy,
        currentDate: this.ngayDieuTriHienTai,
        phieuDieuTriId: this.phieuDieuTriHienTaiId,
        id: this.id,
        dieuTriNoiTruModel: this.dieuTriNoiTruModel,
        ngayNhapVien: this.ngayNhapVien
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != 'NoResult') {
        var date = null;
        var month = null;
        var year = null;
        if (result.lstYearOrderBy.length > 0) {
          if (result.lstYearOrderBy.filter(z => z.KhoaId == this.khoaDieuTriHienTaiId && z.LaNgayDieuTriDauTien).length > 0) {
            date = new Date(result.lstYearOrderBy.filter(z => z.KhoaId == this.khoaDieuTriHienTaiId && z.LaNgayDieuTriDauTien)[0].Date).getDate();
            month = new Date(result.lstYearOrderBy.filter(z => z.KhoaId == this.khoaDieuTriHienTaiId && z.LaNgayDieuTriDauTien)[0].Date).getMonth();
            year = new Date(result.lstYearOrderBy.filter(z => z.KhoaId == this.khoaDieuTriHienTaiId && z.LaNgayDieuTriDauTien)[0].Date).getFullYear();
            this.constngayDieuTriDauTien = new Date(year, month, date);
          }
          else {
            this.constngayDieuTriDauTien = new Date();
          }
        }

        this.lstYear = result.lstYear;
        this.lstYearOrderBy = result.lstYearOrderBy;

        if (result.ngayDieuTriHienTai != undefined && result.ngayDieuTriHienTai != null) {
          this.ngayDieuTriHienTai = result.ngayDieuTriHienTai;
          if (date == this.ngayDieuTriHienTai.getDate()
            && month == this.ngayDieuTriHienTai.getMonth()
            && year == this.ngayDieuTriHienTai.getFullYear()
            && this.khoaDieuTriHienTaiId == this.lstYearOrderBy.filter(z => z.PhieuDieuTriId == result.PhieuDieuTriId)[0].KhoaId
          ) {
            this.getKhoaTheoPhieuDieuTri(result.PhieuDieuTriId, true);
          }
          else {
            // let ngayDieuTriDauTienVo = new NgayDieuTriDauTien();
            // ngayDieuTriDauTienVo.LaNgayDieuTriDauTien = false;
            // ngayDieuTriDauTienVo.KhoaChiDinhId = this.lstYearOrderBy.filter(z => z.PhieuDieuTriId == result.PhieuDieuTriId)[0].KhoaId;
            // ngayDieuTriDauTienVo.LaKhoaChiDinh = this.khoaDieuTriHienTaiId == this.thongTinPhieuKham.KhoaChiDinhId ? true : false;
            // this.laNgayDieuTriDauTienChange.emit(ngayDieuTriDauTienVo);
            this.getKhoaTheoPhieuDieuTri(result.PhieuDieuTriId, false);

          }
          this.phieuDieuTriHienTaiId = result.PhieuDieuTriId;

          // this.ngayDieuTriHienTaiChange.emit(this.ngayDieuTriHienTai);
          this.ngayDieuTriHienTaiHienThi = CommonService.formatDate(this.ngayDieuTriHienTai, "dd/mm/yyyy");
        }
        //

        //this.setDateNextPrev(this.lstYear, this.lstYearOrderBy);
        if (result.isHasRemove) {
          window.location.reload();
        }
      }

    });
  }

  getSharedData() {
    return this.phieuDieuTriThamKhamShared.getSharedData();
  }

  reloadGrid(data: PhieuKhamThamKhamViewModel) {
    this.phieuDieuTriThamKhamShared.reloadGrid(data);
  }

  reloadPage() {
    this.phieuDieuTriThamKhamShared.reloadPage();
  }

  InChiDinh() {
    this.phieuDichVuKyThuatShared.XacNhanIn();
  }
  InPhieuXN() {
    this.phieuDichVuKyThuatShared.XacNhanInXN();
  }
  disabledInPhieu(event: any) {
    if (event) {
      this.disabledInPhieuThuocVT.emit(true);
    }
    else {
      this.disabledInPhieuThuocVT.emit(false);
    }
  }

  InToDieuTriTheoNgay() {
    this.phieuDieuTriThamKhamShared.InToDieuTriTheoNgay();
  }

  InTatCaToDieuTri() {
    this.phieuDieuTriThamKhamShared.InTatCaToDieuTri();
  }
  isFirstEmit: boolean = true;
  getThongTinPhieuKham(event: PhieuKhamThamKhamViewModel) {
    this.thongTinPhieuKham = event;
    this.apiService.post<any>("DieuTriNoiTru/GetNoiTruKhoaChuyenDen?yeuCauTiepNhanId=" + this.id).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          this.khoaDieuTriHienTaiId = resultData;
          this.ngayDieuTriDauTienVo.LaKhoaChiDinh = this.thongTinPhieuKham.KhoaChiDinhId == resultData;
          if (this.isFirstEmit) {
            this.laNgayDieuTriDauTienChange.emit(this.ngayDieuTriDauTienVo);
            this.isFirstEmit = false;
          }
        }
      },
      () => {

      });
    this.checkKhacKhoaDieuTri.emit(event.KhoaChiDinh != this.dieuTriNoiTruModel.Khoa);
  }

  dichVuThuocVatTuChuaThucHien() {
    this.apiService.get<any>("DieuTriNoiTru/KiemTraPhieuDieuTriChuaThucHien?yeuCauTiepNhanId=" + this.id)
      .subscribe((resultData) => {
        var mess = "<table class='table' width='100%'><tr><th>NGÀY ĐIỀU TRỊ</th><th>LOẠI</th><th>TÊN DỊCH VỤ</th><th>KHOA CHỈ ĐỊNH</th><th>NỘI DUNG</th></tr>";
        if (resultData != undefined && resultData != null && resultData.length > 0) {
          resultData.forEach(item => {
            if (item.KhoaChiDinh != undefined && item.KhoaChiDinh != null) {
              mess += "<tr>";
              mess += "<td>" + item.NgayDieuTri + "</td>";
              mess += "<td>" + item.Loai + "</td>";
              mess += "<td>" + item.TenDichVu + "</td>";
              mess += "<td>" + item.KhoaChiDinh + "</td>";
              mess += "<td>" + item.NoiDung + "</td>";
              mess += "</tr>"
            }
          });
        } else {
          mess += "<tr>";
          mess += "<td class='text_align' colspan='4'>Không có thông tin</td>";
          mess += "</tr>"
        }

        mess += "</table>";
        this.dialog.open(NotificationComponent, {
          disableClose: false,
          width: '800px',
          data: { Title: "DANH MỤC DỊCH VỤ , THUỐC , VẬT TƯ CHƯA THỰC HIỆN ", Message: mess }
        });
      }, (err: ApiError) => {
        if (err.ValidationErrors == null || err.ValidationErrors.length == 0) {
          this.notificationService.showError(err.Message);
        }

      });
  }

  inPhieuSuatAn() {
    var self = this;
    self.inPhieuAn.Hosting = window.location.protocol + "//" + window.location.host;
    self.inPhieuAn.PhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuAn.YeuCauTiepNhanId = parseNumber(self.id);
    self.dialog.open(ThongTinPhieuInSuatAnComponent, {
      disableClose: false,
      width: '700px',
      data: self.inPhieuAn,
    }
    ).afterClosed().subscribe(() => {
    });
  }

  inPhieuTruyenMau() {
    var self = this;
    self.inPhieu.Hosting = window.location.protocol + "//" + window.location.host;
    self.inPhieu.PhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieu.YeuCauTiepNhanId = parseNumber(self.id);
    self.apiService.post<any>("DieuTriNoiTru/InPhieuTruyenMau", self.inPhieu).subscribe(
      resData => {
        if (resData == undefined || resData == null) {
          self.notificationService.showError("Không có dịch vụ nào để in");
        }
        else {
          self.dialog.open(PhieuInTruyenMauPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }
          ).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      }
    );
  }

  apDungDonThuocChoCacNgaySau() {
    this.phieuDieuTriThuocComponentShared.apDungDonThuocChoCacNgaySau();
  }

  saoChepDonThuocNgayKhacApDungNgayHienTai() {
    this.phieuDieuTriThuocComponentShared.saoChepDonThuocNgayKhacApDungNgayHienTai();
  }

  apDungDonVTYTChoCacNgaySau() {
    this.phieuDieuTriVatTuComponentShared.apDungDonVTYTChoCacNgaySau();
  }

  saoChepDonVTYTNgayKhacApDungNgayHienTai() {
    this.phieuDieuTriVatTuComponentShared.saoChepDonVTYTNgayKhacApDungNgayHienTai();
  }
}
