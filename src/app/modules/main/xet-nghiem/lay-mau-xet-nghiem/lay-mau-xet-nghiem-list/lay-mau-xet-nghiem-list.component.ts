import { Location } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icHowToReg from '@iconify/icons-ic/outline-how-to-reg';
import icPrint from '@iconify/icons-ic/outline-print';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icDone from '@iconify/icons-ic/check-circle';
import icClear from '@iconify/icons-ic/highlight-off';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { InPhieuKetQuaLayMau, LayMauXetNghiemTimKiem } from '../lay-mau-xet-nghiem.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LayMauXetNghiemCreateComponent } from '../lay-mau-xet-nghiem-create/lay-mau-xet-nghiem-create.component';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LayMauXetNghiemKetQuaPopupComponent } from '../lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';

@Component({
  selector: 'app-lay-mau-xet-nghiem-list',
  templateUrl: './lay-mau-xet-nghiem-list.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-list.component.scss']
})
export class LayMauXetNghiemListComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  icHowToReg = icHowToReg;
  icPrint = icPrint;
  icFilterList = icFilterList;
  icDone = icDone;
  icClear = icClear;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridNhomXetNghiemColumns: any[] = [];
  gridDichVuColumns: any[] = [];
  modelQRCode: any;
  isScanF1: boolean = false;
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";

  searchCtrl = new FormControl();
  timKiemNangCaoObj: LayMauXetNghiemTimKiem = new LayMauXetNghiemTimKiem();
  baseRoute: string = "/xet-nghiem/lay-mau";
  popupLoadingData: any;

  inPhieuDuyetKetQua: InPhieuKetQuaLayMau = new InPhieuKetQuaLayMau();
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null, aggregates: [] }];

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('barcodeTemplate', { static: true }) barcodeTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild('soDienThoaiTemplate', { static: true }) soDienThoaiTemplate: TemplateRef<any>;
  @ViewChild('trangThaiNhomTemplate', { static: true }) trangThaiNhomTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  @ViewChild('coDuKetQuaTemplate', { static: true }) coDuKetQuaTemplate: TemplateRef<any>;
  @ViewChild('loaiMauTemplate', { static: true }) loaiMauTemplate: TemplateRef<any>;
  @ViewChild('tenLoaiMauTemplate', { static: true }) tenLoaiMauTemplate: TemplateRef<any>;
  @ViewChild('thoiGianChiDinhTemplate', { static: true }) thoiGianChiDinhTemplate: TemplateRef<any>;
  @ViewChild('phieuGuiMauXetNghiemTemplate', { static: true }) phieuGuiMauXetNghiemTemplate: TemplateRef<any>;
  @ViewChild('ngayLayMauTemplate', { static: true }) ngayLayMauTemplate: TemplateRef<any>;
  @ViewChild('ngayNhanMauTemplate', { static: true }) ngayNhanMauTemplate: TemplateRef<any>;
  @ViewChild('thoiDiemChiDinhHoacNgayDieuTriTemplate', { static: true }) thoiDiemChiDinhHoacNgayDieuTriTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;


  @ViewChild('menuTrigger', {read: MatMenuTrigger, static: false}) trigger: MatMenuTrigger;
  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.documentType = DocumentType.LayMauXetNghiem;
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringLayMauXetNghiem");
        if (additionalSearchString != null) {
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          if(this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
          }
          if(this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
          }
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      this.gridChild.additionalSearchString =JSON.stringify(this.timKiemNangCaoObj);
      LocalStorageHelper.removeItem("additionalSearchStringLayMauXetNghiem");
    }

    this.gridColumns = [
      //{ Field: "Barcode", Title: "Barcode", Width: 290, Sortable: false, Template: this.barcodeTemplate },
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate},
      { Field: "BarcodeDisplay", Title: "Barcode", Width: 100, Sortable: false},
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 100, Sortable: true},
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true, Template: this.hoTenTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
      { Field: "GioiTinh", Title: "Giới tính", Width: 80, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", MinWidth: 220, Sortable: true },
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 100, Sortable: true, Template: this.soDienThoaiTemplate},
      { Field: "SoLuongChoLay", Title: "SL chờ lấy", Width: 100, Sortable: true},
      // { Field: "SoLuongChoGui", Title: "SL chờ gửi", Width: 60, Sortable: true},
      { Field: "CoDuKetQua", Title: "Có đủ KQ", Width: 100, Sortable: false, Template: this.coDuKetQuaTemplate},
      { Field: "Action", Title: "", Width: 25, Sortable: false, Template: this.actionTemplate}
    ];

    this.gridNhomXetNghiemColumns = [
      { Field: "TenNhom", Title: "Xét nghiệm", Width: 180, Sortable: true},
      { Field: "Barcode", Title: "Mã Barcode", Width: 120, Sortable: true},
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiNhomTemplate},
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauTemplate},
      { Field: "ThoiDiemChiDinhHoacNgayDieuTri", Title: "Thời gian chỉ định", Width: 100, Sortable: true, Template: this.thoiDiemChiDinhHoacNgayDieuTriTemplate},
      { Field: "NgayLayMau", Title: "Ngày lấy mẫu", Width: 100, Sortable: true, Template: this.ngayLayMauTemplate},
      { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.phieuGuiMauXetNghiemTemplate}
    ];

    this.gridDichVuColumns = [
      { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: true},
      { Field: "TenDichVu", Title: "Tên DV", Width: 240, Sortable: true},
      { Field: "Barcode", Title: "Mã Barcode", Width: 120, Sortable: true},
      { Field: "TenNhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiNhomTemplate},
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: true, Template: this.thoiGianChiDinhTemplate},
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: true },
      { Field: "BenhPham", Title: "Bệnh phẩm", Width: 120, Sortable: true },
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 80, Sortable: true, Template: this.tenLoaiMauTemplate },
      { Field: "NgayLayMau", Title: "Ngày cấp Barcode", Width: 100, Sortable: true, Template: this.ngayLayMauTemplate},
      { Field: "NguoiLayMau", Title: "Người cấp Barcode", Width: 100, Sortable: true},
      { Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 100, Sortable: true, Template: this.ngayNhanMauTemplate},
      { Field: "NguoiNhanMau", Title: "Người nhận mẫu", Width: 100, Sortable: true},
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 100, Sortable: true, Template: this.ngayDuyetTemplate},
      { Field: "TenNguoiDuyet", Title: "Người duyệt mẫu", Width: 100, Sortable: true},
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
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
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringLayMauXetNghiem",queryString);
    this.gridChild.search();
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

  @HostListener("document:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
      if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
        this.isScanF1 = true;
        event.preventDefault();
        this.QuetMaQRCodeClick();
      }
    }

  taoPhieuGuiMau(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.dialog.open(LayMauXetNghiemCreateComponent, {
        disableClose: false,
        width: '1600px',
        //data: { Id: id }
      }).afterClosed().subscribe(result => {
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(id: number)
  {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate([this.baseRoute + "/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTietPhieuGuiMau(id: number) {
    if (this.authService.hasPermission(DocumentType.GoiMauXetNghiem, SecurityOperation.View)) {
      this.router.navigate(["/xet-nghiem/goi-mau/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyBenhNhanNhanKetQua(yeuCauTiepNhanId){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn đã trả kết quả xét nghiệm này rồi phải không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          self.apiService.put("XetNghiem/XuLyBenhNhanNhanKetQua?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Trả kết quả"]));
            self.gridChild.search();
            self.closePopupLoadingData();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupLoadingData();
            });
          }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyXuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("XetNghiem/ExportDanhSachLayMauXetNghiem", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DanhSachLayMauXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
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

  xemKetQuaXetNghiem(yeuCauTiepNhanId: number){
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      this.showPopupLoadingData();
      this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
      this.inPhieuDuyetKetQua.Header = true;
      this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
      this.apiService.post<any>('XetNghiem/InKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
        resData => {
          this.closePopupLoadingData();
            if (resData) {
                resData.forEach(e => {
                    const WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                    WindowPrt.focus();
                    WindowPrt.close();
                    WindowPrt.document.write(e.Html);
                    WindowPrt.document.close();
                    var typeSize = "A4";
                    var typeLayout = "portrait";

                    var contents = WindowPrt.document.documentElement.innerHTML;
                    var frame1 = this.renderer.createElement('iframe');
                    frame1.name = "frame1";
                    frame1.style.position = "absolute";
                    frame1.style.top = "-1000000px";
                    document.body.appendChild(frame1);
                    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                    frameDoc.document.open();
                    frameDoc.document.write('<html><head><title>Kết quả</title><style>*{ box-sizing: border-box;} @media print {@page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet">');
                    frameDoc.document.write('</head><body>');
                    frameDoc.document.write(contents);
                    frameDoc.document.write('</body></html>');
                    frameDoc.document.close();
                    setTimeout(function () {
                        window.frames["frame1"].focus();
                        window.frames["frame1"].print();
                        document.body.removeChild(frame1);
                    }, 500);
                });
            }
        },
        (err: ApiError) => {
            if (err.Message !== 'Validation Failed') {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        }
    );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedPrintForm(yeuCauTiepNhanId: number = 0) {
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      return new Promise(resolve => {
        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
        this.inPhieuDuyetKetQua.Header = true;
        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
        this.apiService.post<any>('XetNghiem/InKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
          resData => {
            var contents = "";
            resData.forEach(e => {
              contents += e.Html + "<div class='pagebreak'></div>";
            });
            resolve(contents);
            this.closePopupLoadingData();
          },
          (err: ApiError) => {
            if (err.Message !== 'Validation Failed') {
              this.notificationService.showError(err.Message);
            }
            resolve(null);
            this.closePopupLoadingData();
          });
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  getSharedExportHtmlContent(yeuCauTiepNhanId: number = 0){
    if (this.authService.hasPermission(DocumentType.LayMauXetNghiem, SecurityOperation.View)) {
      this.showPopupLoadingData();
      
      this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
      this.inPhieuDuyetKetQua.Header = true;
      this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
      let dialogRef: any;
      let dataChiTietXetNghiem:any[] =[] ;
      let inLayMau : boolean = true;
      
      this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&inDanhSachLayMauDaCoKetQua=" + inLayMau).subscribe(
        (result) => {
            if(result != null)
            {
              result.forEach(element => {
                if(element.ChiTietKetQuaXetNghiems != null)
                {
                  element.ChiTietKetQuaXetNghiems.forEach(elements => {
                    dataChiTietXetNghiem.push(elements);
                  });
                }
                
              });
              dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
                disableClose: true,
                width: '1000px',
                // height: '300px',
                data: dataChiTietXetNghiem,
            }).afterClosed().subscribe((result) => {
              if(result != undefined && result != null && result != "")
              {
                  if(result == 'No')
                  {
                    this.closePopupLoadingData();
                  }
                  else{
                    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                    this.inPhieuDuyetKetQua.Header = true;
                    this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
                    this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                    this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                    //this.apiService.postExportPdf<any>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                      this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                        arrHtml => {
                          // let newBlob = new Blob([resData], { type: "application/pdf" });
                          // let datalocalURL = window.URL.createObjectURL(newBlob);
                          // document.querySelector("iframe").src = datalocalURL;
                
                          this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
                            disableClose: false,
                            width: '1000px',
                            data: arrHtml
                          }).afterClosed().subscribe(result => {
                          });
                
                          // const dateTimeNow = new Date();
                          // CommonService.downLoadFile(resData, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + '.pdf');
                          this.closePopupLoadingData();
                          // var self = this;
                          // setTimeout(function () {
                          //   if(self.trigger.menuOpen)
                          //     self.trigger.closeMenu();
                          // }, 1000);
                        },
                        (err: ApiError) => {
                          if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                          }
                          this.closePopupLoadingData();
                        });
                  }
              }
            });
            };
        },
        (err: ApiError) => {
          // this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    
      // this.apiService.postExportPdf<Array<string>>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
        
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
