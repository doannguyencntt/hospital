import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component'
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { FormControl } from '@angular/forms';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { NhapKhoVatTuSearch, LookupItemViTriVo, rangeDate, InPhieuNhapKhoVatTu } from '../nhap-kho';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuNhapKhoVatTuPopupComponent } from '../phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component';
import icPrint from "@iconify/icons-ic/twotone-print";
import icDelete from '@iconify/icons-ic/twotone-delete';
import { XacNhanChonPhieuInVatTuPopupComponent } from '../xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component';

@Component({
  selector: 'app-nhap-kho-list',
  templateUrl: './nhap-kho-list.component.html',
  styleUrls: ['./nhap-kho-list.component.scss']
})
export class NhapKhoListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  baseRoute: string = "/nhap-xuat/vat-tu/nhap-kho";
  validationErrors: any;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icEdit = icEdit;
  icDelete = icDelete;
  icSearch = icSearch;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icPrint = icPrint;
  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "NhapKhoVatTu/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "NhapKhoVatTu/GetTotalPageForGridChildAsync";
  nhapKho: NhapKhoVatTuSearch;
  inPhieuNhapKhoVatTu: InPhieuNhapKhoVatTu = new InPhieuNhapKhoVatTu();
  searchString: string;
  searchCtrl = new FormControl;
  ListVitri: Array<LookupItemViTriVo> = [];
  popupLoadingData: any;

  groups: GroupDescriptor[] = [{ field: 'LoaiSuDung' }];

  sortNhapKho: SortDescriptor[] =
    [{
      field: "NgayNhap",
      dir: "desc"
    },
    {
      field: "Id",
      dir: "asc"
    }]
  sortNhapKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]

  theFirstSearch: any;

  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;


  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('parentGrid', { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('ngayhdTemplate', { static: true }) ngayhdTemplate: TemplateRef<any>;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;

  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;

  @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;
  @ViewChild('ngayHoaDonTemplate', { static: true }) ngayHoaDonTemplate: TemplateRef<any>;

  constructor(private authService: AuthService,
    private dialog: MatDialog, private elem: ElementRef,
    private notificationService: NotificationService, private location: Location,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.documentType = DocumentType.NhapKhoVatTu;
    this.nhapKho = new NhapKhoVatTuSearch();
    this.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;

    //
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }

    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringNhapKhoVT') != null
    ) {
      this.additionalSearchString = LocalStorageHelper.getItem(
        'additionalSearchStringNhapKhoVT'
      );
      this.backWithSearch();
      // this.xacNhanBhyt = new XacNhanBhyt();
      // this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
      //this.nhapKho = JSON.parse(this.additionalSearchString);
      //console.log("additionalSearchString = ", this.additionalSearchString);
    } else {
      LocalStorageHelper.setItem('additionalSearchStringNhapKhoVT', null);
      this.additionalSearchString = JSON.stringify(this.nhapKho);
    }


    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Chứng Từ", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "SoChungTu", Title: "Số Hóa Đơn", MinWidth: 200, Sortable: true, Template: this.soChungTuTemplate },
      // { Field: "LoaiNguoiGiaoDisplay", Title: "Loại Người Giao", Width: 120, Sortable: false },
      { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
      { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true, ShowTooltip: true },
      // { Field: "TenNguoiGiao", Title: "Tên Người Giao", Width: 150, Sortable: true },
      { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true },
      { Field: "NgayNhap", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
      { Field: "TinhTrang", Title: "Tình Trạng", Width: 120, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 100, Template: this.actionTemplate }
    ];



    this.gridChildColumns = [
      { Field: "LoaiSuDung", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "NhaThauDisplay", Title: "NCC", Width: 264, ShowTooltip: true, Sortable: false },
      { Field: "TenHDThau", Title: "HĐ Thầu", MinWidth: 150, Sortable: false },
      { Field: "TenVatTu", Title: "Vật Tư", Width: 150, Sortable: false },
      { Field: "Loai", Title: "Loại", Width: 120, Sortable: false },
      { Field: "SoLo", Title: "Số Lô", Width: 100, Sortable: false },
      { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 140, Sortable: false },
      { Field: "MaVach", Title: "Mã Vạch", Width: 120, Sortable: false },
      { Field: "SLDisplay", Title: "SL", Width: 100, Sortable: false },
      { Field: "GiaNhap", Title: "Giá nhập", Width: 120, Sortable: false, Template: this.giaTemplate },
      { Field: "VAT", Title: "VAT(%)", Width: 100, Sortable: false },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 140, Sortable: false },
      // { Field: "ViTri", Title: "Vị Trí", Width: 100, Sortable: true},
    ];

    this.theFirstSearch = JSON.stringify(this.nhapKho);

  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringNhapKhoVT");
        if (additionalSearchString != null) {
          let nhapKhoClone: NhapKhoVatTuSearch = JSON.parse(additionalSearchString);

          if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {

            let startDate = new Date(nhapKhoClone.RangeNhap.startDate);
            //let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
            nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
              , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));

            // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
            // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
          }
          if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
            let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
            nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
              , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
          }

          if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
            let startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
            //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
            nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
              , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));

            // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
            // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
          }
          if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
            let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
            nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
              , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
          }
          this.nhapKho = JSON.parse(additionalSearchString);
          this.gridChild.additionalSearchString = JSON.stringify(nhapKhoClone);
          this.gridChild.searchString = this.nhapKho.SearchString;
        }
      }
    }
  }

  themMoiNhapKho() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(id: number, dataItem: any) {
    //console.log("xemChiTiet = ", dataItem);
    //return;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      if (dataItem.DuocKeToanDuyet == null) {
        this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/chinh-sua/" + id]);
      }
      else if (dataItem.DuocKeToanDuyet == false) {
        this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/tu-choi-duyet/" + id]);
      }
      else {
        this.router.navigate(["/nhap-xuat/vat-tu/nhap-kho/da-duyet/" + id]);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.Timkiem();
    }
  }

  clearSearch() {
    if (this.nhapKho.SearchString == "" || this.nhapKho.SearchString == null) {
      this.gridChild.searchString = "";
      //LocalStorageHelper.setItem("additionalSearchStringNhapKho", null);
      let xuatKhoClone: NhapKhoVatTuSearch = JSON.parse(JSON.stringify(this.nhapKho));
      let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
      LocalStorageHelper.setItem(
        'additionalSearchStringNhapKhoVT',
        JSON.stringify(queryForHole)
      );
      console.log(this.nhapKho);
      this.gridChild._additionalSearchString = JSON.stringify(this.nhapKho);
      this.gridChild.search();
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    QueryString = this.nhapKho.SearchString;

    let nhapKhoClone: NhapKhoVatTuSearch = JSON.parse(JSON.stringify(this.nhapKho));

    if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {

      let startDate = new Date(nhapKhoClone.RangeNhap.startDate);
      // let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
      nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
        , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));

      // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
      // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
    }
    if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
      let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
      nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
        , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
    }
    if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
      let startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
      //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
      nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
        , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));

      // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
      // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
    }

    if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
      let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
      nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
        , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
    }

    this.query = JSON.stringify(nhapKhoClone);

    let queryForHole = JSON.parse(JSON.stringify(nhapKhoClone));
    // queryForHole.RangeNhap = new rangeDate();
    // queryForHole.RangeDuyet = new rangeDate();
    // queryForHole.SearchString = null;

    LocalStorageHelper.setItem(
      'additionalSearchStringNhapKhoVT',
      JSON.stringify(this.nhapKho)
    );

    this.gridChild._additionalSearchString = this.query;
    this.gridChild.searchString = QueryString;
    this.gridChild.search();
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('NhapKhoVatTu/ExportNhapKhoVatTu',
        self.gridChild._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'NhapKhoVatTu' + dateTimeNow.getFullYear() + '.xlsx');
            self.closePopupLoadingData();
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.closePopupLoadingData();
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }

  onKeyNgayNhap($event) {
    //console.log("onKeyNgayNhap = ", $event);
    if ($event.keyCode == 13) {
      this.Timkiem();
    }
  }
  changeNgayNhapRange($event) {
    //console.log("changeNgayNhapRange = ", $event);
    this.Timkiem();
  }
  blur($event) {
    //console.log("blur = ", $event);
    this.Timkiem();
  }
  onKeyNgayDuyet($event) {
    if ($event.keyCode == 13) {
      this.Timkiem();
    }
  }
  changeNgayDuyetRange($event) {
    this.Timkiem();
  }

  CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
    this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
    if (dangChoDuyet) {
      this.nhapKho.DangChoDuyet = $event;
    }
    else if (tuChoiDuyet) {
      this.nhapKho.TuChoiDuyet = $event;
    }
    else if (daDuyet) {
      this.nhapKho.DaDuyet = $event;
    }
    this.Timkiem();
  }
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

  inPhieu(id: number) {
    var self = this;
    self.loadingPage();
    self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = id;
    self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
    self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
    self.dialog.open(XacNhanChonPhieuInVatTuPopupComponent, {
      disableClose: false,
      width: "400px",
      data: self.inPhieuNhapKhoVatTu,
    }).afterClosed().subscribe(() => {
      this.router.navigateByUrl('/nhap-xuat/vat-tu/nhap-kho?holdQuery=true');
    });
  }

  xoa(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("NhapKhoVatTu/XoaYeuCauNhapKhoVatTu?id=" + id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              this.Timkiem();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
}
