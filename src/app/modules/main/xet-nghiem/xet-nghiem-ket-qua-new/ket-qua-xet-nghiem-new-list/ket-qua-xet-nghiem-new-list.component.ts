import { FormControl } from '@angular/forms';
import { KetQuaXetNghiemNewSearch } from '../xet-nghiem-ket-qua-new.model';
import { Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/file-download';


import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { TrangThaiKetQuaXetNghiemConst } from 'src/app/shared/constants/xet-nghiem-constant';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuDuyetKetQua } from '../../duyet-ket-qua/duyet-ket-qua.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { KetQuaPhieuNewPopupComponent } from '../ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
@Component({
  selector: 'app-ket-qua-xet-nghiem-new-list',
  templateUrl: './ket-qua-xet-nghiem-new-list.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-new-list.component.scss']
})
export class KetQuaXetNghiemNewListComponent implements OnInit {
  baseRoute: string = "/xet-nghiem/ket-qua-new";

  icicdone = icicdone;
  icclose = icClose;
  icEdit = icEdit;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  icPrint = icPrint;
  icDownload = icDownload;

  gridColumns: any[] = [];
  gridChildColumns: any[] = [];

  isScan: boolean = false;

  gridDanhSachXetNghiemColumns: any[] = [];
  gridDanhSachXetNghiemChild1Columns: any[] = [];
  gridDanhSachXetNghiemChild2Columns: any[] = [];

  urlGetDataParent = "KetQuaXetNghiem/GetDataForGridAsync";
  urlGetDataChild1 = "";
  urlGetDataChild2 = "KetQuaXetNghiem/GetDataForGridChildAsync";

  urlGetTotalPageParent = "KetQuaXetNghiem/GetTotalPageForGridAsync";
  urlGetTotalPageChild1 = "";
  urlGetTotalPageChild2 = "KetQuaXetNghiem/GetTotalPageForGridChildAsync";

  documentType: DocumentType = DocumentType.KetQuaXetNghiem;
  ketQuaXetNghiemSearch: KetQuaXetNghiemNewSearch = new KetQuaXetNghiemNewSearch();
  searchCtrl = new FormControl;
  modelQRCode: any;
  addtionStringDefault: string = null;

  query: string = null;
  additionalSearchString: string = null;

  displayToolTipGridNguoiYeuCau: string = null;
  displayToolTipGridNgayYeuCau: string = null;
  displayToolTipGridLyDoYeuCau: string = null;
  displayToolTipGridNguoiDuyet: string = null;
  displayToolTipGridNgayDuyet: string = null;

  inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();

  groupNhomXetNghiem: GroupDescriptor[] = [{ field: "TenNhomDichVuBenhVien" }];

  sort: SortDescriptor[] = [
    {
      field: "TrangThai",
      dir: "asc",
    },
  ];

  sortChild: SortDescriptor[] = [
    {
      field: "MaDichVu",
      dir: "asc",
    },
  ];

  ChoKQChayLai: string = TrangThaiKetQuaXetNghiemConst.ChoKQChayLai;
  ChoKQ: string = TrangThaiKetQuaXetNghiemConst.ChoKQ;
  ChoDuyetKQ: string = TrangThaiKetQuaXetNghiemConst.ChoDuyetKQ;
  DaCoKQ: string = TrangThaiKetQuaXetNghiemConst.DaCoKQ;

  validationErrors: any;
  @ViewChild('actionDanhSachXetNghiemTemplate', { static: true }) actionDanhSachXetNghiemTemplate: TemplateRef<any>;
  @ViewChild('barcodeTemplate', { static: true }) barcodeTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('ngayThucHienTemplate', { static: true }) ngayThucHienTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetKQTemplate', { static: true }) ngayDuyetKQTemplate: TemplateRef<any>;

  // @ViewChild('gridParent', { static: true }) gridParent: GridComponent;
  // @ViewChild(GridComponent, { static: true }) gridParent: GridComponent;

  @ViewChild('gridParent', { read: GridComponent, static: true }) gridParent: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute,
    private authService: AuthService, private notificationService: NotificationService,
    private location: Location, private renderer: Renderer2,
    private apiService: ApiService) { }

  ngOnInit() {
    this.ketQuaXetNghiemSearch = new KetQuaXetNghiemNewSearch();
    let dateNow = new Date();
    this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.ketQuaXetNghiemSearch.FromDate = CommonService.formatDateTime(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.ketQuaXetNghiemSearch.FromDate = null;
    }

    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.ketQuaXetNghiemSearch.ToDate = CommonService.formatDateTime(
        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.ketQuaXetNghiemSearch.ToDate = null;
    }
    var queryString = JSON.stringify(this.ketQuaXetNghiemSearch);
    this.addtionStringDefault = queryString;
    this.backWithSearch();
    this.gridDanhSachXetNghiemColumns = [
      { Field: "BarCode", Title: "Barcode", Width: 150, Sortable: true, Template: this.barcodeTemplate },
      { Field: "MaTN", Title: "Mã TN", Width: 150, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 150, Sortable: true },
      { Field: "HoTen", Title: "Họ Tên", Width: 150, Sortable: true },
      { Field: "GioiTinh", Title: "Giới Tính", Width: 100, Sortable: true },
      { Field: "NamSinh", Title: "Năm Sinh", Width: 100, Sortable: true },
      { Field: "DiaChi", Title: "Địa Chỉ", Width: 100, Sortable: true },
      { Field: "TrangThai", Title: "Trạng Thái", Width: 100, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "NguoiThucHien", Title: "Người thực hiện", Width: 150, Sortable: true },
      { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 130, Sortable: true, Template: this.ngayThucHienTemplate },
      { Field: "NguoiDuyetKQ", Title: "Người Duyệt KQ", Width: 150, Sortable: true },
      { Field: "NgayDuyetKQ", Title: "Ngày Duyệt KQ", Width: 130, Sortable: true, Template: this.ngayDuyetKQTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionDanhSachXetNghiemTemplate }
    ];
    this.gridDanhSachXetNghiemChild2Columns = [
      { Field: "TenNhomDichVuBenhVien", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "MaDichVu", Title: "Mã DV", Width: 100, Sortable: false },
      { Field: "TenDichVu", Title: "Tên DV", Width: 400, Sortable: false },
      { Field: "ThoiGianChiDinhDisplay", Title: "Thời Gian Chỉ Định", Width: 200, Sortable: false },
      { Field: "NguoiChiDinh", Title: "Người Chỉ Định", Width: 150, Sortable: false },
      { Field: "BenhPham", Title: "Bệnh Phẩm", Width: 150, Sortable: false },
      { Field: "LoaiMau", Title: "Loại Mẫu", Width: 150, Sortable: false }
    ];
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 81 && event.ctrlKey && this.isScan != true) {
      this.isScan = true;
      event.preventDefault();
      this.QuetMaQRCodeClick();
    }
  }

  barcodeClick(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      if (dataItem.TrangThai == 2) {
        this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/1/" + dataItem.YeuCauTiepNhanId]);
      }
      else if (dataItem.TrangThai == 1) {
        this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/2/" + dataItem.YeuCauTiepNhanId]);
      }
      else if (dataItem.TrangThai == 3) {
        this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/3/" + dataItem.YeuCauTiepNhanId]);
      }
      else if (dataItem.TrangThai == 4) {
        this.router.navigate(["/xet-nghiem/ket-qua-new" + "/cap-nhat/" + dataItem.Id + "/4/" + dataItem.YeuCauTiepNhanId]);
      }
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  CheckboxChange(event: any, text: string) {
    if (text === 'choKetQua') {
      this.ketQuaXetNghiemSearch.ChoKetQua = event;
    }
    if (text === 'choDuyetKetQua') {
      this.ketQuaXetNghiemSearch.ChoDuyetKetQua = event;
    }
    if (text === 'daCoKetQua') {
      this.ketQuaXetNghiemSearch.DaCoKetQua = event;
    }
    //this.Timkiem();
  }

  clearSearch() {
    if (this.ketQuaXetNghiemSearch.SearchString == "" || this.ketQuaXetNghiemSearch.SearchString == null) {
      this.Timkiem();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringKetQuaXetNghiemNew");
        if (additionalSearchString != null) {
          this.ketQuaXetNghiemSearch = JSON.parse(additionalSearchString);
          if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != undefined && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != "") {
            this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = new Date(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat);
          }
          else {
            this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat = null;
          }
          if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != undefined && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null && this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != "") {
            this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = new Date(this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat);
          }
          else {
            this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat = null;

          }
          this.addtionStringDefault = additionalSearchString;
          this.gridParent.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringKetQuaXetNghiemNew");
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat != null) {
      this.ketQuaXetNghiemSearch.FromDate = CommonService.formatDateTime(
        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.ketQuaXetNghiemSearch.FromDate = null;
    }

    if (this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat != null) {
      this.ketQuaXetNghiemSearch.ToDate = CommonService.formatDateTime(
        this.ketQuaXetNghiemSearch.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.ketQuaXetNghiemSearch.ToDate = null;
    }
    var queryString = JSON.stringify(this.ketQuaXetNghiemSearch);
    this.gridParent._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringKetQuaXetNghiemNew", queryString);
    this.gridParent.search();
  }

  exportExcel() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });

      this.apiService.postExportExcel<string>('KetQuaXetNghiem/ExportKetQuaXetNghiem', this.gridParent._gridQueryInfo).subscribe(resultData => {
        const dateTimeNow = new Date();
        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
        this.dialog.closeAll();
      },
        (err: any) => {
          this.notificationService.showError(err.Message);
          this.dialog.closeAll();
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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

  changeQR(evt) {
    if (evt != null && typeof evt == "string" && evt.endsWith("@")) {
      // this.modelQRCode = event;
      var dataTimKiem = evt.split("|");
      if (dataTimKiem.length > 1) {
        this.ketQuaXetNghiemSearch.SearchString = dataTimKiem[0];
      } else {
        this.ketQuaXetNghiemSearch.SearchString = evt.slice(0, -1);
      }
      this.Timkiem();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScan = false;
  }

  setUpDataTooltip(dataItem) {
    //console.log("setUpDataTooltip = ", dataItem);
    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyet;
    this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
  }
  checkHiddenIcon(item, danhSachLoaiMau) {
    // console.log("checkHiddenIcon = ", item, danhSachLoaiMau);
    // return true;
    for (let i = 0; i < danhSachLoaiMau.length; i++) {
      if (item == danhSachLoaiMau[i]) {
        return true;
      }
    }

    return false;
  }

  isMauKhongDat(mau, danhSachMauKhongDat) {
    for (let i = 0; i < danhSachMauKhongDat.length; i++) {
      if (mau == danhSachMauKhongDat[i]) {
        return true;
      }
    }

    return false;
  }

  popupLoadingData: any;
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
  print(id: number, yeuCauTiepNhanId: number) {
    this.showPopupLoadingData();
    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
    this.inPhieuDuyetKetQua.Header = true;
    this.inPhieuDuyetKetQua.PhienXetNghiemId = id;
    this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
    let dialogRef: any;
    let dataChiTietXetNghiem: any[] = [];
    
    this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + this.inPhieuDuyetKetQua.YeuCauTiepNhanId + "&phienXetNghiemId=" + this.inPhieuDuyetKetQua.PhienXetNghiemId).subscribe(
      (result) => {
        if (result != null) {
          result.forEach(element => {
            if (element.ChiTietKetQuaXetNghiems != null) {
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
            if (result != undefined && result != null && result != "") {
              if (result == 'No') {
                this.closePopupLoadingData();
              }
              else {
                this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(
                  arrHtml => {

                    this.dialog.open(KetQuaPhieuNewPopupComponent, {
                      disableClose: false,
                      width: '1000px',
                      data: arrHtml
                    }).afterClosed().subscribe(result => {
                    });
                    this.closePopupLoadingData();
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
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });


  }

}
