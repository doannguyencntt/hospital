import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, HostListener, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { TreeViewComponent } from '@progress/kendo-angular-treeview';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { delay } from 'rxjs/operators';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icRemove from '@iconify/icons-ic/delete';
import { DanhSachKyThuat, DichVuKyThuatChiTiet } from '../tu-dien-dich-vu-ky-thuat.model';
import { TuDienDichVuKyThuatSharedComponent } from '../tu-dien-dich-vu-ky-thuat-shared/tu-dien-dich-vu-ky-thuat-shared.component';

declare var jQuery: any;
@Component({
  selector: 'app-tu-dien-dich-vu-ky-thuat-list',
  templateUrl: './tu-dien-dich-vu-ky-thuat-list.component.html',
  styleUrls: ['./tu-dien-dich-vu-ky-thuat-list.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TuDienDichVuKyThuatListComponent implements OnInit, AfterContentInit {
  danhSachKyThuat: DanhSachKyThuat;
  dichVuKyThuatChiTiet: DichVuKyThuatChiTiet;

  contextMenuPosition = { x: 0, y: 0 };
  documentType: DocumentType;
  icSearch = icSearch;
  icEdit = icEdit;
  icAdd = icAdd;
  icDelete = icDelete;
  icRemove = icRemove;
  icFileExcel = icFileExcel;
  _gridQueryInfo: GridQueryInfo;
  _isLoading: boolean = false;
  _skip: number = 0;
  _pageSize: number = 10;
  _take: number;
  _gridDataSource: any;
  _additionalSearchString: string;
  isCreate: boolean = false;
  isCreateChild: boolean = false;

  isUpdate: boolean = false;
  capDichVu: number = null;
  dichVuXetNghiemId: number = null;

  hasChild: boolean = false;
  dataChiSoXetNghiemChild: any = null;
  dataItemRighClick: any = null;
  dataItemLeftClick: any = null;

  popupSavingData: any;
  popupLoadingData: any;
  popupAddingData: any;

  searchCtrl = new FormControl();
  gridQueryInfo: GridQueryInfo;
  // gridQueryInfoChild: GridQueryInfo;
  validationErrors: any = null;
  isShow: boolean = false;
  xetNghiemId: number = null;
  lstChildData: any[] = [];
  expandedKeys: any[] = [];
  public data: any[] = [];
  timeout: any = null;
  @Input() searchPlaceHolder: string = "Nhập từ khóa...";
  @Input() gridDataSource: any;
  @Input() searchString: string = null;
  @Input() lazyLoadPage: boolean = false;
  @Input() useAddDeault: boolean = true;
  @Input() sort: SortDescriptor[] = null;
  @Input() formIsPopup: boolean = false;
  @Input() componentCreate: any = null;
  @Input() baseRoute: string;
  @Output() extOnSearch = new EventEmitter<any>();
  @ViewChild('temp', { read: TuDienDichVuKyThuatSharedComponent, static: false }) shared: TuDienDichVuKyThuatSharedComponent;

  @ViewChild(MatMenuTrigger, { static: false }) contextMenu: MatMenuTrigger;
  @ViewChild('treeview', { static: true })
  public treeview: TreeViewComponent;

  @ViewChild('treemenu', { static: true })
  public treeContextMenu: ContextMenuComponent;
  // public items: any[] = [{ text: 'Thêm chỉ số con', icon: 'plus' },{ text: 'Sửa', icon: 'edit' },{ text: 'Xóa', icon: 'close' }];
  public items: any[] = [];


  public iconClassConTextMenu({ text, items }: any): any {
    return {
      icon: 'plus',
    };
  }
  public hasChildren = (item: any) => item.HasChildren == true;

  public fetchChildren = (dataItem: any) => {
    return this.fetchChiSoXetNghiem(dataItem);
  };

  private expandLogic(dataItem: any, isDefault: boolean) {
    let index = this.expandedKeys.findIndex(key => key === dataItem.IdCap);
    var nhomDichVuBenhVienIds = dataItem.IdCap.split(";");
    let nhomDichVuBenhVienId = nhomDichVuBenhVienIds[0];
    if (!isDefault) {
      if (index === -1 && dataItem.HasChildren) {
        this.expandedKeys.push(dataItem.IdCap);
      } else {
        var expandedKeysTemp = this.expandedKeys.slice();
        expandedKeysTemp.forEach(element => {
          let item = element.split(";");
          let nhomDichVuBenhVienIdEx = item[0];
          if (dataItem.Loai == 1) {
            if (nhomDichVuBenhVienIdEx == nhomDichVuBenhVienId) {
              this.expandedKeys.splice(element, 1);
            }
          } else if (dataItem.Loai == 2) {
            if (nhomDichVuBenhVienIdEx == nhomDichVuBenhVienId && dataItem.DichVuXetNghiemChaId == null) {
              let data = dataItem.IdCap.split(";");
              let dataChaId = data[0];
              let dataId = data[3];
              let el = element.split(";");
              let elChaId = el[0];
              let elTen = el[1];
              let elLoai = el[2];
              let elId = el[3];
              if (elTen == "dvkt" && elLoai == "2" && elId == dataId && elChaId == dataChaId || (elTen == "dvxn" && elLoai == "3")) {
                let indexz = this.expandedKeys.findIndex(key => key === element);
                this.expandedKeys.splice(indexz, 1);
                // console.log("expandedKeys 2: ", this.expandedKeys)
              }
            }
          }
          else {
            if (nhomDichVuBenhVienIdEx == nhomDichVuBenhVienId && dataItem.CapDichVu == 2) {
              let data = dataItem.IdCap.split(";");
              let dataChaId = data[0];
              let dataId = data[3];
              let el = element.split(";");
              let elChaId = el[0];
              let elTen = el[1];
              let elLoai = el[2];
              let elId = el[3];
              if (elTen == "dvxn" && elLoai == "3" && elChaId == dataChaId && dataId == elId) {
                let indexz = this.expandedKeys.findIndex(key => key === element);
                this.expandedKeys.splice(indexz, 1);
                // console.log("expandedKeys 3: ", this.expandedKeys)
              }
            }
          }
        });
      }
    }
    // console.log("key: ", this.expandedKeys)
    //this.cancel();
  }

  public fetchChiSoXetNghiem(dataItem: any): any {
    var queryString = null;
    this.danhSachKyThuat.Id = dataItem.Id;
    this.danhSachKyThuat.CapDichVu = dataItem.CapDichVu;
    this.danhSachKyThuat.DichVuKyThuatId = dataItem.DichVuKyThuatId;
    this.danhSachKyThuat.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    this.danhSachKyThuat.Loai = dataItem.Loai;
    queryString = JSON.stringify(this.danhSachKyThuat);
    this._skip = 0;
    var searchText = this.searchString != undefined ? this.searchString : "";
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

    this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: queryString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
    return this.apiService.post("TuDienDichVuKyThuat/GetDataTreeView", this._gridQueryInfo).pipe(delay(300));
  }
  public iconClass(dataItem: any) {
    return {
      'k-i-folder': dataItem.HasChildren == true,
      'k-icon': true
    };
  }
  constructor(private baseService: BaseService, private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.TuDienDichVuKyThuat;
    this.danhSachKyThuat = new DanhSachKyThuat();
    this.dichVuKyThuatChiTiet = new DichVuKyThuatChiTiet();
    this.getDataTreeView();
  }

  ngAfterContentInit() {
    setTimeout(function () {
      jQuery('.csxn-content').css({ 'height': (jQuery(window).height() - 190) + 'px' });
      jQuery('.form-content').css({ 'height': (jQuery(window).height() - 252) + 'px' });
    }, 500);

    jQuery(window).resize(function () {
      setTimeout(function () {
        jQuery('.csxn-content').css({ 'height': (jQuery(window).height() - 190) + 'px' });
        jQuery('.form-content').css({ 'height': (jQuery(window).height() - 252) + 'px' });
      }, 500);
    });
  }

  getDataTreeView() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.loadingPage();
      this.baseService.getDataForGrid(this.gridQueryInfo, "TuDienDichVuKyThuat/GetDataTreeView")
        .subscribe((resultData: any[]) => {
          this.closePopupLoadingData()
          this.data = resultData;
        })
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  timKiem() {
    // this.treeview.data.map
    this.isUpdate = false;
    this.isCreate = false;
    this.isShow = false;
    var searchText = this.danhSachKyThuat.SearchString != undefined ? this.danhSachKyThuat.SearchString : "";
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    var queryInfo = { searchString: searchText };
    this.baseService.getDataForGrid(queryInfo, "TuDienDichVuKyThuat/SearchDichVuKyThuatBenhVien")
      .subscribe((resultData: any[]) => {
        this.data = resultData;
        this._isLoading = false;
      })
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

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
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

  closePopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  searchChanges(dataItem: any) {
    if (dataItem != undefined && (dataItem == null || dataItem == "")) {
      this.danhSachKyThuat.SearchString = null;
      this.expandedKeys = [];
      this.timKiem();
    }
  }

  expand(dataItem: any) {
    console.log("dataItem Left: ", dataItem)
    // this.dichVuKyThuatChiTiet = dataItem;
    this.capDichVu = dataItem.CapDichVu;
    this.hasChild = dataItem.HasChildren;
    this.isCreateChild = false;

    if (dataItem.CapDichVu === 2) {
      this.isShow = true;
    }
    if (dataItem.CapDichVu === 2) { this.getInfo(dataItem); }
    
    this.expandLogic(dataItem, false);
  }

  getInfo(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.post<DichVuKyThuatChiTiet>("TuDienDichVuKyThuat/GetDichVuKyThuats?dichVuKyThuatBenhVienId=" + dataItem.Id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.dichVuKyThuatChiTiet = resultData;
          }
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }

        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ///////////////////////////////////////////////////// CLICK  <=======
  onLeftClick(event: MouseEvent, dataItem: any) {
    if (event.type === "click") {
      event.preventDefault();
      this.expand(dataItem);
      this.dataItemLeftClick = dataItem;
    } else {
      this.isUpdate = false;
      this.dataItemLeftClick = null;
    }
    this.dataItemRighClick = null;
  }

  reLoad() {
    this.baseService.getDataForGrid(this.gridQueryInfo, "TuDienDichVuKyThuat/GetDataTreeView")
      .subscribe((resultData: any[]) => {
        this.data = resultData;
      })
  }

  cancel() {
    this.validationErrors = [];
    this.shared.huyDichVuKyThuat();
    this.isShow = false;
    if (this.isUpdate) {
      this.isUpdate = false;
      this.isShow = false;
    }
    if (this.isCreate) {
      this.isCreate = false;
      this.isShow = false;
    }
  }

  luuDichVukyThuatBenhVienMauKetQua() {
    var self = this;
    self.dichVuKyThuatChiTiet = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu thông tin dịch vụ này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.apiService.post<any>("TuDienDichVuKyThuat/LuuDichVukyThuatBenhVienMauKetQua", self.dichVuKyThuatChiTiet).subscribe(
          () => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
            self.isCreate = false;
            self.closePopupSavingData();
            self.validationErrors = [];
          },
          (err: ApiError) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              self.notificationService.showError(err.Message);
            }
            self.closePopupSavingData();
          });
      }
    })
  }

  @HostListener('document:contextmenu', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.type === "contextmenu") {
      event.preventDefault();
      setTimeout(function () {
      }, 100);
    }
  }
}
