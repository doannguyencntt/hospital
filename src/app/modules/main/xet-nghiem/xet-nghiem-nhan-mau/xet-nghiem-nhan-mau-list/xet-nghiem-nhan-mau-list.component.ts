import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
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
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ThongTinYeuCauTiepNhanXetNghiem } from '../../xet-nghiem-cap-code/xet-nghiem-cap-code.model';
import { XetNghiemNhanMauTimKiem } from '../xet-nghiem-nhan-mau.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { LayMauXetNghiemBarcodeQueryInfo } from '../../lay-mau-xet-nghiem/lay-mau-xet-nghiem.model';

@Component({
  selector: 'app-xet-nghiem-nhan-mau-list',
  templateUrl: './xet-nghiem-nhan-mau-list.component.html',
  styleUrls: ['./xet-nghiem-nhan-mau-list.component.scss'],
  animations: [stagger60ms, fadeInUp400ms]
})
export class XetNghiemNhanMauListComponent implements OnInit {

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

  documentType: DocumentType = DocumentType.NhanMauXetNghiem;
  gridColumns: any[] = [];
  modelQRCode: any;
  isScanF1: boolean = false;
  strAdditionalSearchString: string = "";
  searchCtrl = new FormControl();
  timKiemNangCaoObj: XetNghiemNhanMauTimKiem = new XetNghiemNhanMauTimKiem();
  baseRoute: string = "/xet-nghiem/xac-nhan-nhan-mau";
  popupLoadingData: any;
  dataYeuCauTiepNhan: ThongTinYeuCauTiepNhanXetNghiem = new ThongTinYeuCauTiepNhanXetNghiem();

  isDuoi6Tuoi: boolean = false;
  Duoi6TuoiDisplay: string = "";

  gridDichVuChuaCapColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null, aggregates: [] }];
  arrDichVuChon: Array<number> = new Array<number>();
  arrDichVuTatCaDichVu: Array<any> = [];
  arrNhomDichVuDangChon: Array<string> = [];
  isCheckedAll: boolean = true;
  isFirstLoad: boolean = true;

  barcodeDisplay: string = null;
  queryInfoBarcode: LookupQueryInfo = new LookupQueryInfo();
  layMauXetNghiemBarcodeQueryInfo: LayMauXetNghiemBarcodeQueryInfo = new LayMauXetNghiemBarcodeQueryInfo();

  urlGetDataDaCapCode: string = "XetNghiem/GetDataForGridDaCapCode";
  urlGetTotalDaCapCode: string = "XetNghiem/GetTotalPageForGridDaCapCode";

  urlGetDataDVDaCapCode: string = "XetNghiem/GetDataForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau";
  urlGetTotalDVDaCapCode: string = "XetNghiem/GetTotalPageForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau";
  
  @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
  @ViewChild('gridDVDaCapCode', {read: GridComponent, static: true }) gridDVDaCapCode: GridComponent;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenLoaiMauTemplate', { static: true }) tenLoaiMauTemplate: TemplateRef<any>;
  @ViewChild('thoiGianChiDinhTemplate', { static: true }) thoiGianChiDinhTemplate: TemplateRef<any>;
  @ViewChild('thoiGianCapCodeTemplate', { static: true }) thoiGianCapCodeTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', {read: TemplateRef, static: true}) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', {read: TemplateRef, static: true}) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('trangThaiNhomTemplate', { static: true }) trangThaiNhomTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) maTNTemplate: TemplateRef<any>;
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.NhanMauXetNghiem;
    let hasLocalSearchString = false;
    this.queryInfoBarcode.Take = 50;

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringXacNhanNhanMauXetNghiem");
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
          if(this.timKiemNangCaoObj.YeuCauTiepNhanId != null)
          {
            this.getThongTinYeuCauTiepNhan(this.timKiemNangCaoObj.YeuCauTiepNhanId, this.timKiemNangCaoObj.PhienXetNghiemId);
          }
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      let now = new Date();
      let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.timKiemNangCaoObj.TuNgayDenNgay.endDate = currentDate;
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
      this.gridChild.additionalSearchString =JSON.stringify(this.timKiemNangCaoObj);
      LocalStorageHelper.removeItem("additionalSearchStringXacNhanNhanMauXetNghiem");
    }

    this.gridColumns = [
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: true, Template: this.maTNTemplate},
      { Field: "HoTen", Title: "Tên NB", Width: 100, Sortable: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 40, Sortable: true },
      { Field: "Barcode", Title: "Barcode", Width: 80, Sortable: false}
    ];

    this.gridDichVuChuaCapColumns = [
      { Field: "CheckBox", Title: "", Width: 30 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate},
      { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: false},
      { Field: "TenDichVu", Title: "Tên DV", Width: 240, Sortable: false},
      { Field: "TenNhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "LoaiMau", Title: "Loại mẫu", Width: 80, Sortable: false, Template: this.tenLoaiMauTemplate },
      { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: false },
      { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: false, Template: this.thoiGianChiDinhTemplate},
      { Field: "NguoiLayMau", Title: "Người cấp code", Width: 120, Sortable: false },
      { Field: "ThoiGianCapCode", Title: "Thời gian cấp code", Width: 80, Sortable: false, Template: this.thoiGianCapCodeTemplate},
      { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: false, Template: this.trangThaiNhomTemplate},
    ];
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

    LocalStorageHelper.setItem("additionalSearchStringXacNhanNhanMauXetNghiem",queryString);
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

  changeValueTinhTrang(value: string)
  {
    if(value == 'chuaNhanMau')
    {
      this.timKiemNangCaoObj.TrangThai.ChuaNhanMau = true;
      this.timKiemNangCaoObj.TrangThai.DaNhanMau = false;
    }
    else if('daNhanMau')
    {
      this.timKiemNangCaoObj.TrangThai.ChuaNhanMau = false;
      this.timKiemNangCaoObj.TrangThai.DaNhanMau = true;
    }
    this.huyChonBenhNhan();
  }

  getAge(date_1, date_2) {
    let yAppendix, mAppendix, dAppendix;
    let days = date_2.getDate() - date_1.getDate();//Thach edit

    if (days < 0) {
      date_2.setMonth(date_2.getMonth() - 1);
      days += this.DaysInMonth(date_2);
    }

    let months = date_2.getMonth() - date_1.getMonth();
    if (months < 0) {
      date_2.setFullYear(date_2.getFullYear() - 1);
      months += 12;
    }
    let years = date_2.getFullYear() - date_1.getFullYear();

    if (years > 1) yAppendix = " years";
    else yAppendix = " year";
    if (months > 1) mAppendix = " months";
    else mAppendix = " month";
    if (days > 1) dAppendix = " days";
    else dAppendix = " day";

    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
      this.isDuoi6Tuoi = true;
    } else {
      this.isDuoi6Tuoi = false;
    }

    this.Duoi6TuoiDisplay =
      years + " Tuổi " + months + " Tháng " + days + " Ngày ";
  }

  DaysInMonth(date2_UTC) {
    let monthStart: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth(),
      1
    );
    let monthEnd: any = new Date(
      date2_UTC.getFullYear(),
      date2_UTC.getMonth() + 1,
      1
    );
    let monthLength: any = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
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

  // get thông tin
  getThongTinYeuCauTiepNhan(yeuCauTiepNhanId: number, phienXetNghiemId: number = null) {
    if (yeuCauTiepNhanId) {
      this.huyChonBenhNhan(true);
      this.showPopupLoadingData();

      this.layMauXetNghiemBarcodeQueryInfo.YeuCauTiepNhanId = yeuCauTiepNhanId;
      this.queryInfoBarcode.ParameterDependencies = JSON.stringify(this.layMauXetNghiemBarcodeQueryInfo);
      var obj = {
        YeuCauTiepNhanId: yeuCauTiepNhanId,
        PhienXetNghiemId: phienXetNghiemId
      }
      this.apiService
        .post<ThongTinYeuCauTiepNhanXetNghiem>("XetNghiem/GetThongTinBenhNhanXetNghiem", obj)
        .subscribe(
          (resultData) => {
            if (resultData !== undefined && resultData != null) {
              this.dataYeuCauTiepNhan = resultData;
              var ngaySinh = new Date(
                this.dataYeuCauTiepNhan.ThangSinh +
                "/" +
                this.dataYeuCauTiepNhan.NgaySinh +
                "/" +
                this.dataYeuCauTiepNhan.NamSinh +
                "/"
              );
              this.getAge(ngaySinh, new Date());
              this.closePopupLoadingData();
              this.timKiemNangCaoObj.YeuCauTiepNhanId = yeuCauTiepNhanId;
              this.timKiemNangCaoObj.PhienXetNghiemId = phienXetNghiemId;
            } else {
              this.closePopupLoadingData();
            }
            this.timKiemNangCao();
          },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          }
        );
    }
  }

  huyChonBenhNhan(chuyenBenhNhan: boolean = false){
    this.dataYeuCauTiepNhan = new ThongTinYeuCauTiepNhanXetNghiem();
    if(!chuyenBenhNhan)
    {
      this.timKiemNangCaoObj.YeuCauTiepNhanId = null;
      this.timKiemNangCaoObj.PhienXetNghiemId = null;
    }
    this.arrDichVuChon = [];
    this.arrNhomDichVuDangChon = [];
    this.arrDichVuTatCaDichVu = [];
    this.isCheckedAll = true;
    this.isFirstLoad = true;
    this.timKiemNangCao();
  }

  xuLyRefreshQuyeryGridDichVu() {
    this.timKiemNangCaoObj.ThoiDiemHienTai = new Date();
    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    LocalStorageHelper.setItem("additionalSearchStringXacNhanNhanMauXetNghiem", queryString);
    this.strAdditionalSearchString = queryString;
  }

  // xử lý nhận, hủy nhận mẫu
  onDataBoundGridChuaCapCode(event) {
    this.arrDichVuTatCaDichVu = [];
    this.arrNhomDichVuDangChon = [];
    this.arrDichVuChon = []
    this.arrDichVuTatCaDichVu = event.Data;

    if(this.isFirstLoad)
    {
      var self = this;
      setTimeout(function () {
        self.isFirstLoad = false;
        self.chonTatCaDichVuTrongGoi(true);
      }, 800);
    }
  }

  xuLyCheckDichVu(id: number, tenNhom: string, checked: boolean)
  {
    if (checked) {
      var indexDichVuDaChon = this.arrDichVuChon.findIndex(x => x == id);
      if (indexDichVuDaChon == -1) {
        this.arrDichVuChon.push(id);
      }

      let name = 'ckbItem-' + id;
      let checkboxes = document.getElementsByName(name);
      checkboxes.forEach(cbk => {
        if (!cbk['checked']) {
          document.getElementById(cbk['id']).click();
        }
      });

      if(tenNhom != null)
      {
        var indexNhom = this.arrNhomDichVuDangChon.findIndex(x => x == tenNhom);
          if (indexNhom == -1) {
            this.arrNhomDichVuDangChon.push(tenNhom);
          }
      }
    }
    else {
      let index = this.arrDichVuChon.findIndex(x => x == id);
      if (indexDichVuDaChon != -1) {
        this.arrDichVuChon.splice(index, 1);
      }

      let name = 'ckbItem-' + id;
      let checkboxes = document.getElementsByName(name);
      checkboxes.forEach(cbk => {
        if (cbk['checked']) {
          document.getElementById(cbk['id']).click();
        }
      });

      if(tenNhom != null)
      {
        var indexNhom = this.arrNhomDichVuDangChon.findIndex(x => x == tenNhom);
        if (indexNhom != -1) {
          this.arrNhomDichVuDangChon = this.arrNhomDichVuDangChon.filter(x => x != tenNhom);
        }
      }
    }
  }

  changeCheckNhomDichVu(event, tenNhom) {
    this.arrDichVuTatCaDichVu.forEach(element => {
      if (element.TenNhom == tenNhom && element.IsActive) {
        if (event.target.checked) {
          this.xuLyCheckDichVu(element.Id, tenNhom, true);
        }
        else {
          this.xuLyCheckDichVu(element.Id, tenNhom, false);
        }
      }
    });
  }

  chonTatCaDichVuTrongGoi(event)
  {
    if (event) {
      let lstDichVu = this.arrDichVuTatCaDichVu.filter(x => x.IsActive);
      console.log('lstDichVu active', lstDichVu);
      this.arrNhomDichVuDangChon = [];
      lstDichVu.forEach(element => {
        this.xuLyCheckDichVu(element.Id, element.TenNhom, true);

        this.arrNhomDichVuDangChon.forEach(gr => {
          let nameGr = 'ckbGroup-' + gr;
          var element = <HTMLInputElement> document.getElementById(nameGr);
          if (!element.checked) {
            element.checked = true;
          }
        });
      });
      
    }
    else {
      let arrDichVuDaChonTemp = []; // this.arrDichVuChon;
      this.arrDichVuChon.forEach(val => arrDichVuDaChonTemp.push(val));
      console.log('lstDichVu active', this.arrDichVuChon);
      if(arrDichVuDaChonTemp.length > 0)
      {
        arrDichVuDaChonTemp.forEach(dichVuId => {
          this.xuLyCheckDichVu(dichVuId, null, false);
        });

        this.arrNhomDichVuDangChon.forEach(gr => {
          let nameGr = 'ckbGroup-' + gr;
          var element = <HTMLInputElement> document.getElementById(nameGr);
          if (element.checked) {
            element.checked = false;
          }
        });
        this.arrNhomDichVuDangChon = [];
      }
    }
  }

  chonDichVu(event, dataItem) {
    var indexNhom = this.arrNhomDichVuDangChon.findIndex(x => x == dataItem.TenNhom);

    if (event) {
      if (this.arrDichVuChon.findIndex(x => x == dataItem.Id) == -1) {
        this.arrDichVuChon.push(dataItem.Id);
      }

      if (indexNhom == -1) {
        this.arrNhomDichVuDangChon.push(dataItem.TenNhom);
      }

      let slDichVuDaChon = this.arrDichVuChon.length;
      let slDichVuTheoGoi = this.arrDichVuTatCaDichVu.filter(x => x.IsActive).length;
      if (slDichVuDaChon == slDichVuTheoGoi) {
        var element = document.getElementById("ckbHeader");
        element['checked'] = true;
      }

      let nameGr = 'ckbGroup-' + dataItem.TenNhom;
      var cbkGroup = <HTMLInputElement>document.getElementById(nameGr);
      if (!cbkGroup.checked) {
        cbkGroup.checked = true;
      }
    }
    else {
      var index = this.arrDichVuChon.findIndex(x => x == dataItem.Id);
      if (index != -1) {
        this.arrDichVuChon.splice(index, 1);
        var element = document.getElementById("ckbHeader");
        element['checked'] = false;
      }

      var lstDichVuKhaDungTrongNhom = this.arrDichVuTatCaDichVu.filter(x => x.TenNhom === dataItem.TenNhom && x.IsActive);
      var lstDichVuDangCHonTrongNhom = this.arrDichVuChon.filter(x => lstDichVuKhaDungTrongNhom.findIndex(a => a.Id == x) != - 1);
      if(lstDichVuDangCHonTrongNhom.length == 0)
      {
        let nameGr = 'ckbGroup-' + dataItem.TenNhom;
        var cbkGroup = <HTMLInputElement>document.getElementById(nameGr);
        if (cbkGroup.checked) {
          cbkGroup.checked = false;
        }

        if (indexNhom != -1) {
          this.arrNhomDichVuDangChon = this.arrNhomDichVuDangChon.filter(x => x != dataItem.TenNhom);
        }
      }
    }
  }

  xuLyXacNhanNhanMau(dataItem = null){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận nhận mẫu này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let arrayTemp = new Array<number>();
          if(dataItem != null)
          {
            arrayTemp.push(dataItem.Id);
          }
          else
          {
            arrayTemp = self.arrDichVuChon;
          }
          var obj = {
            YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
            BenhNhanId: self.dataYeuCauTiepNhan.BenhNhanId,
            YeuCauDichVuKyThuatIds: arrayTemp
          }
          self.apiService.put("XetNghiem/XuLyXacNhanNhanMauDichVuChuaNhanMau", obj).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tiếp nhận mẫu"]));
            self.arrDichVuChon = [];
            // self.gridDVDaCapCode.search();
            self.xuLyRefreshQuyeryGridDichVu();
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

  xacNhanHuyMauXetNghiem(dataItem = null) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn hủy nhận mẫu cho dịch vụ đang chọn không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.showPopupLoadingData();
          let arrayTemp = new Array<number>();
          if(dataItem != null)
          {
            arrayTemp.push(dataItem.Id);
          }
          else
          {
            arrayTemp = self.arrDichVuChon;
          }
          var obj = {
            YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
            BenhNhanId: self.dataYeuCauTiepNhan.BenhNhanId,
            YeuCauDichVuKyThuatIds: arrayTemp
          }
          self.apiService.put("XetNghiem/XuLyXacNhanHuyNhanMauTheoDichVu", obj).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy tiếp nhận mẫu"]));
            self.arrDichVuChon = [];
            self.xuLyRefreshQuyeryGridDichVu();
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

  kiemTraAnHienGroupDichVu(tenNhom: string)
  {
    let arrDichVu = this.arrDichVuTatCaDichVu.filter(x => x.TenNhom == tenNhom && x.IsActive == true);
    return arrDichVu.length > 0;
  }
}
