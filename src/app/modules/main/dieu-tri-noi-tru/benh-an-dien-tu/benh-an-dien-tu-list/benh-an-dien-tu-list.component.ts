import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import icArrowBack from '@iconify/icons-ic/round-arrow-back-ios';
import icArrowForward from '@iconify/icons-ic/round-arrow-forward-ios';
import icZoomIn from '@iconify/icons-ic/zoom-in';
import icZoomOut from '@iconify/icons-ic/zoom-out';
import icPrint from "@iconify/icons-ic/twotone-print";
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BenhAnDienTuTimKiemNangCao, BenhAnDienTuDetail } from '../benh-an-dien-tu.model';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { BenhAnDienTuBenhAnPopupComponent } from '../benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { BangKeTheoYeuCauComponent } from '../../danh-sach-dieu-tri-noi-tru/bang-ke-in-theo-yeu-cau-popup/bang-ke-in-theo-yeu-cau-popup.component';
import { ThongTinPhieuPdfPopupComponent } from '../../danh-sach-dieu-tri-noi-tru/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
declare var $;
@Component({
  selector: 'app-benh-an-dien-tu-list',
  templateUrl: './benh-an-dien-tu-list.component.html',
  styleUrls: ['./benh-an-dien-tu-list.component.scss'],
  animations: [stagger60ms, fadeInUp400ms]
})
export class BenhAnDienTuListComponent implements OnInit {

  icSearch = icSearch;
  icArrowBack = icArrowBack;
  icArrowForward = icArrowForward;
  icZoomIn = icZoomIn;
  icZoomOut = icZoomOut;
  icPrint = icPrint;

  documentType: DocumentType = DocumentType.BenhAnDienTu;
  gridColumns: any[] = [];
  modelQRCode: any;
  isScanF1: boolean = false;
  strAdditionalSearchString: string = "";
  searchCtrl = new FormControl();
  baseRoute: string = "/benh-an-dien-tu";
  popupLoadingData: any;
  timKiemNangCaoObj: BenhAnDienTuTimKiemNangCao = new BenhAnDienTuTimKiemNangCao();

  noiTruBenhAnId: number = null;
  benhAnDienTu: any = null;
  filePdf: any = null;
  fileUrl: any = null;
  hosting: string = "";
  indexGayBenhAnHienTai: number = 0;
  htmlGayBenhAnHienTai: Array<string> = [];
  indexHtmlGayBenhAnHienTai:number = 0;
  showBtnPrevHtml: boolean = false;
  showBtnNextHtml: boolean = false;
  src: string = "";
  isLoadingDataPrev: boolean = false;
  isLoadingDataNext: boolean = false;

  htmlGayBenhAnTatCa: Array<string> = [];

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.hosting = window.location.protocol + "//" + window.location.host;
  }

  timeoutSearchChange: any;
  searchChanges(event){
    var self = this;
        if (event != null && typeof event == "string" && event.endsWith("@")) {
            self.timeoutSearchChange = setTimeout(function () {
                self.modelQRCode = event;
                self.changeQR(self.modelQRCode);
            }, 10);
        }
        else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
            this.modelQRCode = null;
            this.timKiemNangCao();
        }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    // this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayNhapVien != null && this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayNhapVien.DenNgay = null;
    }

    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgayXuatVien != null && this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgayXuatVien.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    LocalStorageHelper.setItem("additionalSearchStringBenhAnDienTu",queryString);

    this.showPopupLoadingData();
    this.apiService.post<any>("BenhAnDienTu/TimKiemNoiTruBenhAn", this.timKiemNangCaoObj).subscribe(
      (res) => {
        this.closePopupLoadingData();
          if(res && res.Data != null)
          {
            if(res.Data.length == 1)
            {
              this.noiTruBenhAnId = res.Data[0].Id;
              this.getGayBenhAnDienTuTheoBenhAn();
            }
            else if(res.Data.length > 1)
            {
              this.showPopupTimKiemNguoiBenh();
            }
          }
      },
      (err: ApiError) => {
          if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
      });
  }

  showPopupTimKiemNguoiBenh() {
    let dialogRef = this.dialog.open(BenhAnDienTuBenhAnPopupComponent, {
      disableClose: false,
      width: '1400px',
      height: '600px',
      data: this.timKiemNangCaoObj,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null && result != undefined) {
        this.noiTruBenhAnId = result;
        this.getGayBenhAnDienTuTheoBenhAn();
      }
    });
  }

  getGayBenhAnDienTuTheoBenhAn() {
    if (this.noiTruBenhAnId != null && this.noiTruBenhAnId != 0) {
      this.showPopupLoadingData();
      this.apiService.get<any>("BenhAnDienTu/GetGayBenhAnDienTuTheoBenhAn?noiTruBenhAnId=" + this.noiTruBenhAnId).subscribe(
        (res) => {
          this.closePopupLoadingData();
          if (res) {
            this.benhAnDienTu = res;
            // this.fileUrl = null;
            // this.filePdf = null;
            if(this.benhAnDienTu.GayBenhAns.length > 0)
            {
              this.chonGayBenhAn(this.benhAnDienTu.GayBenhAns[0]);
            }
          }
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    }
  }

  chonGayBenhAn(gayBenhAn, indexGay: number = 0){
    if(gayBenhAn != undefined && gayBenhAn != null)
    {
      this.getThongTinTheoGayBenhAn(gayBenhAn, indexGay);

      let indexPrev = indexGay - 1;
      let indexNext = indexGay + 1;

      if(indexPrev >= 0)
      {
        var gayBenhAnPrev = this.benhAnDienTu.GayBenhAns[indexPrev];
        if(gayBenhAnPrev != undefined && gayBenhAnPrev != null)
        {
          this.showBtnPrevHtml = true;
          if(gayBenhAnPrev.Htmls == undefined || gayBenhAnPrev.Htmls == null || gayBenhAnPrev.Htmls.length == 0)
          {
            if(!gayBenhAnPrev.IsLoading !== true)
            {
              this.getThongTinTheoGayBenhAn(gayBenhAnPrev, -1, true);
            }
          }
        }
        else{
          this.showBtnPrevHtml = false;
        }
      }
      else{
        this.showBtnPrevHtml = false;
      }

      if(indexNext >= 0)
      {
        var gayBenhAnNext = this.benhAnDienTu.GayBenhAns[indexNext];
        if(gayBenhAnNext != undefined && gayBenhAnNext != null)
        {
          this.showBtnNextHtml = true;
          if(gayBenhAnNext.Htmls == undefined || gayBenhAnNext.Htmls == null || gayBenhAnNext.Htmls.length == 0)
          {
            if(gayBenhAnNext.IsLoading !== true)
            {
              this.getThongTinTheoGayBenhAn(gayBenhAnNext, -1, false, true);
            }
          }
        }
        else{
          this.showBtnNextHtml = false;
        }
      }
      else{
        this.showBtnNextHtml = false;
      }
    }
  }

  getThongTinTheoGayBenhAn(gayBenhAn: any, indexGay: number = 0, isLoadPrev: boolean = false, isLoadNext: boolean = false, layTatCa: boolean = false) {
    if(indexGay != -1 || layTatCa)
    {
      this.showPopupLoadingData();
      if(!layTatCa)
      {
        this.indexGayBenhAnHienTai = indexGay;
      }
    }

    let thongTinBenhAnCanIn = new BenhAnDienTuDetail();
    thongTinBenhAnCanIn.NoiTruBenhAnId = this.benhAnDienTu.NoiTruBenhAnId;
    thongTinBenhAnCanIn.MaYeuCauTiepNhan = this.benhAnDienTu.MaYeuCauTiepNhan;
    thongTinBenhAnCanIn.BenhNhanId = this.benhAnDienTu.BenhNhanId;
    thongTinBenhAnCanIn.Hosting = this.hosting;
    thongTinBenhAnCanIn.LaInPhieu = layTatCa;

    if(layTatCa)
    {
      this.benhAnDienTu.GayBenhAns.forEach(element => {
        thongTinBenhAnCanIn.GayBenhAns.push(Object.assign({}, element));
      });
    }
    else{
      thongTinBenhAnCanIn.GayBenhAns.push(Object.assign({}, gayBenhAn));
    }

    
    if(gayBenhAn != null && gayBenhAn.Htmls && !layTatCa)
    {
      if(indexGay != -1)
      {
        this.htmlGayBenhAnHienTai = [];
        this.htmlGayBenhAnHienTai = gayBenhAn.Htmls;
        if(this.indexHtmlGayBenhAnHienTai == -1)
        {
          this.indexHtmlGayBenhAnHienTai = this.htmlGayBenhAnHienTai.length - 1;
        }
        else{
          this.indexHtmlGayBenhAnHienTai = 0;
        }
        // this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(gayBenhAn.Htmls[this.indexHtmlGayBenhAnHienTai]);
        this.getSrcHtml(this.indexHtmlGayBenhAnHienTai, gayBenhAn.Htmls);
        this.closePopupLoadingData();
      }
    }
    else {
      if(isLoadPrev)
      {
        this.isLoadingDataPrev = isLoadPrev;
      }
      if(isLoadNext)
      {
        this.isLoadingDataNext = isLoadNext;
      }
      if(gayBenhAn != undefined && gayBenhAn != null)
      {
        gayBenhAn.IsLoading = true;
      }
      this.apiService.post<Array<string>>('BenhAnDienTu/GetFilePDFBenhAnDienTuFromHtml', thongTinBenhAnCanIn).subscribe(
        htmls => {
          if (gayBenhAn != undefined && gayBenhAn != null) {
            gayBenhAn.IsLoading = false;
          }
          // let newBlob = new Blob([file], { type: "application/pdf" });
          // let datalocalURL = window.URL.createObjectURL(newBlob);
          // this.fileUrl = datalocalURL;
          // this.filePdf = file;
          //this.print(htmls,htmls[0]);
          if (isLoadPrev) {
            this.isLoadingDataPrev = false;
          }
          if (isLoadNext) {
            this.isLoadingDataNext = false;
          }
          // trường hợp lấy theo gáy bệnh án
          if(gayBenhAn != null)
          {
            gayBenhAn.Htmls = htmls;

            if (indexGay != -1) {
              this.htmlGayBenhAnHienTai = [];
              this.htmlGayBenhAnHienTai = htmls;
              if (this.indexHtmlGayBenhAnHienTai == -1) {
                this.indexHtmlGayBenhAnHienTai = this.htmlGayBenhAnHienTai.length - 1;
              }
              else {
                this.indexHtmlGayBenhAnHienTai = 0;
              }
              //this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmls[this.indexHtmlGayBenhAnHienTai]);
              this.getSrcHtml(this.indexHtmlGayBenhAnHienTai, this.htmlGayBenhAnHienTai);
              //this.dataContainer.nativeElement.innerHTML = htmls;
              this.closePopupLoadingData();
            }
          }
          // trường hợp lấy tất cả html
          else if(layTatCa)
          {
            this.htmlGayBenhAnTatCa = [];
            this.htmlGayBenhAnTatCa = htmls;
            this.closePopupLoadingData();
            this.print(this.htmlGayBenhAnTatCa, this.htmlGayBenhAnTatCa[0]);
          }
        },
        (err: ApiError) => {
          if (err.Message !== 'Validation Failed') {
            this.notificationService.showError(err.Message);
          }
          if (isLoadPrev) {
            this.isLoadingDataPrev = false;
          }
          if (isLoadNext) {
            this.isLoadingDataNext = false;
          }
          if (gayBenhAn != undefined && gayBenhAn != null) {
            gayBenhAn.IsLoading = false;
          }
          if(indexGay != -1 || layTatCa)
          {
            this.closePopupLoadingData();
          }
        });
    }
  }

  chuyenPhieu(isNext: boolean = true)
  {
    if(isNext)
    {
      this.indexHtmlGayBenhAnHienTai += 1;
    }
    else{
      this.indexHtmlGayBenhAnHienTai -= 1;
    }

    if(this.indexHtmlGayBenhAnHienTai == -1 || this.indexHtmlGayBenhAnHienTai > this.htmlGayBenhAnHienTai.length - 1)
    {
      if (isNext) {
        this.indexGayBenhAnHienTai += 1;
        this.indexHtmlGayBenhAnHienTai = 0;
      }
      else {
        this.indexGayBenhAnHienTai -= 1;
        this.indexHtmlGayBenhAnHienTai = -1;
      }
      let gayBenhAn = this.benhAnDienTu.GayBenhAns[this.indexGayBenhAnHienTai];
      this.chonGayBenhAn(gayBenhAn, this.indexGayBenhAnHienTai);
    }
    else
    {
      this.getSrcHtml(this.indexHtmlGayBenhAnHienTai, this.htmlGayBenhAnHienTai);
    }
  }

  getSrcHtml(index: number, htmls: any)
  {
    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmls[index]);
  }

  i:number=0;
  print(htmls:string[],html:string)
  {    
    var self=this;
    if(self.i==htmls.length)
    {
      self.i=0;
      return;
    }
    else
    {
      setTimeout(function() { 
        self.notificationService.showInfo('Đang in trang '+(self.i+1)+'/'+htmls.length);
        if (html != undefined && html != null && html.length > 0) {
          let typeSize = "1.5in 0.87in";
          let typeLayout = "portrait";
          var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
          if (WindowPrt != null && WindowPrt != undefined) {
            WindowPrt.focus();
            WindowPrt.close();
            WindowPrt.document.write(html);
            WindowPrt.document.close();
    
            var contents = WindowPrt.document.documentElement.innerHTML;
            var frame1 = self.renderer.createElement('iframe');
            frame1.name = "frame1";
            frame1.style.position = "absolute";
            frame1.style.top = "-1000000px";
            document.body.appendChild(frame1);
            var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
            frameDoc.document.open();
            frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
            frameDoc.document.write('</head><body>');
            frameDoc.document.write(contents);
            frameDoc.document.write('</body></html>');
            frameDoc.document.close();
            setTimeout(function () {
              window.frames["frame1"].focus();
              window.frames["frame1"].print();
              document.body.removeChild(frame1);
            }, 1000);
          }
        }
        self.i++;
        if (self.i <= htmls.length) {
          self.print(htmls,htmls[self.i]);
        }
      }, 1000);
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
            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
        } else {
            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
        }
        this.timKiemNangCao();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.Cancel:
        mess = "Đang hủy dữ liệu..."; break;
      default: mess = "Đang tải dữ liệu...";
    }
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: mess }
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }


  // bảng kê chi phí
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
    this.apiService.postExportPdf<any>("DieuTriNoiTru/InPhieuThu?yeuCauTiepNhanId=" + this.noiTruBenhAnId + "&hostingName=" + hostingName).subscribe(
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
    this.apiService.postExportPdf<any>("DieuTriNoiTru/XemBangKeChiPhiTheoKhoa?yeuCauTiepNhanId=" + this.noiTruBenhAnId + "&hostingName=" + hostingName).subscribe(
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

  //============================================================================

  zoom: number =1;
  zoomIn(){
    this.zoom += 0.1;
    $('.target').css('transform', 'scale(' + this.zoom + ')');
    this.getHeightIframeByZoomValue();
  }
  zoomOut(){
    this.zoom -= 0.1;
    $('.target').css('transform', 'scale(' + this.zoom + ')');
    this.getHeightIframeByZoomValue();
    // var w = $(".container-iframe").width();
    // var h = $(".container-iframe").height();
    // let x = 1;
    // if (x === -1) {
    //   this.zoom = this.zoom * 1.1;
    //   w = w * 0.9;
    //   h = h * 0.9;
    //   $("#myiframe").width(w + "px");
    //   $("#myiframe").height(h + "px")
    // } else {
    //   this.zoom = this.zoom * 0.9;
    //   w = w * 1.1;
    //   h = h * 1.1;
    //   $("#myiframe").width(w + "px");
    //   $("#myiframe").height(h + "px")
    // }

    // $('#myiframe').css('transform', `scale(${this.zoom})`);
  }

  getHeightIframeByZoomValue()
  {
    var valueZoom = 1 - this.zoom;
    //var step = valueZoom/0.1 - 1;
    document.getElementById('myiframe').style.height = ((valueZoom*1000) + 850) + 'px';
  }

  InGayBenhAn() {
    if (this.htmlGayBenhAnHienTai != undefined && this.htmlGayBenhAnHienTai.length > 0) {
      let html = this.htmlGayBenhAnHienTai[this.indexHtmlGayBenhAnHienTai];
      if (html != undefined && html != null && html != '') {
        let htmlNganTrang = "<br><hr style =\"border-top: 1px dotted gray;\"><br>";
        let htmlBreakPage = "<div class=\"pagebreak\"></div>";
        html = this.replaceAll(html, htmlNganTrang, htmlBreakPage);

        let typeSize = "A4";
        let typeLayout = "portrait";
        
        var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
        if (WindowPrt != null && WindowPrt != undefined) {
          WindowPrt.focus();
          WindowPrt.close();
          WindowPrt.document.write(html);
          WindowPrt.document.close();

          var contents = WindowPrt.document.documentElement.innerHTML;
          // if (soLuongIn > 1) {
          //   for (var i = 2; i <= soLuongIn; i++) {
          //     contents += "<p class='pagebreak'></p>" + WindowPrt.document.documentElement.innerHTML;
          //   }
          // }
          var frame1 = this.renderer.createElement('iframe');
          frame1.name = "frame1";
          frame1.style.position = "absolute";
          frame1.style.top = "-1000000px";
          document.body.appendChild(frame1);
          var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
          frameDoc.document.open();
          frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
          frameDoc.document.write('</head><body>');
          frameDoc.document.write(contents);
          frameDoc.document.write('</body></html>');
          frameDoc.document.close();
          setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            document.body.removeChild(frame1);
          }, 500);
        }
      }
    }
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
