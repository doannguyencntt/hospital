import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
import { NhapKhoDuocPhamSearch, LookupItemViTriVo, rangeDate } from '../nhap-kho.model';
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
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icPrint from "@iconify/icons-ic/twotone-print";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuNhapKhoDuocPhamPopupComponent } from '../phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import icDelete from '@iconify/icons-ic/twotone-delete';

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
  baseRoute: string = "/nhap-xuat/duoc-pham/nhap-kho";
  popupLoadingData: any;

  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icEdit = icEdit;
  icSearch = icSearch;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFileExcel = icFileExcel;
  icPrint = icPrint;
  icDelete = icDelete;
  holdQuery: any = null;
  query: string = null;
  validationErrors: any;
  additionalSearchString: string = null;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataGridChild: string = "NhapKhoDuocPham/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "NhapKhoDuocPham/GetTotalPageForGridChildAsync";
  nhapKho: NhapKhoDuocPhamSearch;
  searchString: string;
  searchCtrl = new FormControl;
  ListVitri: Array<LookupItemViTriVo> = [];
  //checkListFiter:boolean = true;
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

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  theFirstSearch: any;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('parentGrid', { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @ViewChild('trangThaTemplate', { static: true }) trangThaTemplate: TemplateRef<any>;
  @ViewChild('headerTemplate', { static: true }) headerTemplate: TemplateRef<any>;
  @ViewChild('vitriTemplate', { static: true }) vitriTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;

  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('ngayHoaDonTemplate', { static: true }) ngayHoaDonTemplate: TemplateRef<any>;

  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;

  @ViewChild('giaTemplate', { static: true }) giaTemplate: TemplateRef<any>;

  public range = { startDate: null, endDate: null };
  constructor(
    private authService: AuthService,
    private dialog: MatDialog, private elem: ElementRef,
    private notificationService: NotificationService, private location: Location,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    //this.checkListFiter = true;
    this.documentType = DocumentType.NhapKhoDuocPham;

    this.nhapKho = new NhapKhoDuocPhamSearch();

    //
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }

    //console.log("ngOnInit = ", this.holdQuery, LocalStorageHelper.getItem('additionalSearchStringNhapKho'));

    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringNhapKho') != null
    ) {
      this.additionalSearchString = LocalStorageHelper.getItem(
        'additionalSearchStringNhapKho'
      );

      // this.xacNhanBhyt = new XacNhanBhyt();
      // this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
      this.backWithSearch();
      //this.nhapKho = JSON.parse(this.additionalSearchString);
      //console.log("additionalSearchString = ", this.additionalSearchString);
    } else {
      LocalStorageHelper.setItem('additionalSearchStringNhapKho', null);
      this.additionalSearchString = JSON.stringify(this.nhapKho);
    }
    //

    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Chứng Từ", Width: 200, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "SoChungTu", Title: "Số Hóa Đơn", MinWidth: 120, Sortable: true, Template: this.soChungTuTemplate },
      // { Field: "LoaiNguoiGiaoDisplay", Title: "Loại Người Giao", Width: 120, Sortable: false },
      // { Field: "TenNguoiGiao", Title: "Tên Người Giao", Width: 150, Sortable: true },
      { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
      { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true, ShowTooltip: true },
      { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true, ShowTooltip: true },
      { Field: "NgayNhapDisplay", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
      { Field: "TinhTrangDisplay", Title: "Tình Trạng", Width: 120, Sortable: false, Template: this.tinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyetDisplay", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
    ];



    this.gridChildColumns = [
      { Field: "Nhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "NhaThauDisplay", Title: "NCC", Width: 264, ShowTooltip: true, Sortable: false },
      { Field: "TenHDThau", Title: "HĐ Thầu", MinWidth: 150, Sortable: false },
      { Field: "TenDuocPham", Title: "Dược Phẩm", Width: 150, Sortable: false },
      { Field: "Loai", Title: "Loại", Width: 120, Sortable: false },
      // { Field: "Nhom", Title: "Nhóm", Width: 120, Sortable: true },
      { Field: "SoLo", Title: "Số Lô", Width: 100, Sortable: false },
      { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 140, Sortable: false },
      { Field: "MaVach", Title: "Mã Vạch", Width: 120, Sortable: false },
      { Field: "SLDisplay", Title: "SL", Width: 100, Sortable: false },
      { Field: "GiaNhap", Title: "Giá nhập", Width: 120, Sortable: false, Template: this.giaTemplate },
      { Field: "VAT", Title: "VAT(%)", Width: 100, Sortable: false },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 140, Sortable: false },
      // { Field: "ViTri", Title: "Vị Trí", Width: 100, Sortable: true},
    ];

    //this.theFirstSearch= JSON.stringify(this.nhapKho);

    // this.gridColumns.forEach(column => {
    //   if (column.Visible == null)
    //     column.Visible = true;
    // });
    // this.GetListLookupViTri();
  }

  themMoiNhapKho() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/them"]);
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
        this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + id]);
      }
      else if (dataItem.DuocKeToanDuyet == false) {
        this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/" + id]);
      }
      else {
        this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/da-duyet/" + id]);
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
      let xuatKhoClone: NhapKhoDuocPhamSearch = JSON.parse(JSON.stringify(this.nhapKho));
      let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
      LocalStorageHelper.setItem(
        'additionalSearchStringNhapKho',
        JSON.stringify(queryForHole)
      );

      this.gridChild._additionalSearchString = JSON.stringify(this.nhapKho);
      this.gridChild.search();
      //this.Timkiem();
    }
  }

  clearSearchInStore() {
    this.additionalSearchString = LocalStorageHelper.getItem(
      'additionalSearchStringNhapKho'
    );
    let res = JSON.parse(this.additionalSearchString);
    res.SearchString = null;
    LocalStorageHelper.setItem(
      'additionalSearchStringNhapKho',
      JSON.stringify(res)
    );
  }

  backWithSearch() {
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringNhapKho");
        if (additionalSearchString != null) {
          let nhapKhoClone: NhapKhoDuocPhamSearch = JSON.parse(additionalSearchString);

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

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    QueryString = this.nhapKho.SearchString;

    let nhapKhoClone: NhapKhoDuocPhamSearch = JSON.parse(JSON.stringify(this.nhapKho));

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

    this.query = JSON.stringify(nhapKhoClone);

    let queryForHole = JSON.parse(JSON.stringify(nhapKhoClone));
    // queryForHole.RangeNhap = new rangeDate();
    // queryForHole.RangeDuyet = new rangeDate();
    // queryForHole.SearchString = null;

    LocalStorageHelper.setItem(
      'additionalSearchStringNhapKho',
      JSON.stringify(this.nhapKho)
    );

    this.gridChild._additionalSearchString = this.query;
    this.gridChild.searchString = QueryString;
    //LocalStorageHelper.setItem("additionalSearchStringNhapKhoDP", QueryString);
    this.gridChild.search();
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.showPopupLoadingData();
      self.apiService.postExportExcel<string>('NhapKhoDuocPham/ExportNhapKhoDuocPham',
        self.gridChild._gridQueryInfo).subscribe(
          resultData => {
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'NhapKhoDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
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
    this.router.navigateByUrl('/nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
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
    self.apiService.post<any>("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + id).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuNhapKhoDuocPhamPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }).afterClosed().subscribe(() => {
            self.closePopupLoadingDatas();
            this.router.navigateByUrl('/nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingDatas();
      }
    );
  }

  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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
          this.apiService.post<any>("NhapKhoDuocPham/XoaYeuCauNhapKhoDuocPham?id=" + id).subscribe(
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
