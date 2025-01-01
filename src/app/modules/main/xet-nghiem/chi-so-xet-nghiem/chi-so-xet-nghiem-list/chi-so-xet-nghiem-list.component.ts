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
import { ChiSoXetNghiem, ChiSoXetNghiemChiTiet, ChuaCoDichVuXetNghiemViewModel } from '../chi-so-xet-nghiem.model';
import { ChiSoXetNghiemSharedComponent } from '../chi-so-xet-nghiem-shared/chi-so-xet-nghiem-shared.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { TreeViewComponent } from '@progress/kendo-angular-treeview';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { delay } from 'rxjs/operators';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icRemove from '@iconify/icons-ic/delete';
declare var jQuery: any;
@Component({
  selector: 'app-chi-so-xet-nghiem-list',
  templateUrl: './chi-so-xet-nghiem-list.component.html',
  styleUrls: ['./chi-so-xet-nghiem-list.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChiSoXetNghiemListComponent implements OnInit, AfterContentInit {
  chiSoXN: ChiSoXetNghiem;
  chiSoXNChiTiet: ChiSoXetNghiemChiTiet;
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

  @ViewChild('temp', { read: ChiSoXetNghiemSharedComponent, static: false }) shared: ChiSoXetNghiemSharedComponent;

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
    this.cancel();
  }

  public fetchChiSoXetNghiem(dataItem: any): any {
    var queryString = null;
    this.chiSoXN.Id = dataItem.Id;
    this.chiSoXN.CapDichVu = dataItem.CapDichVu;
    if (dataItem.CapDichVu == 1) {
      this.chiSoXN.DichVuXetNghiemId = dataItem.DichVuXetNghiemId;
      this.chiSoXN.DichVuXetNghiemChaId = dataItem.DichVuXetNghiemId;

    } else {
      this.chiSoXN.DichVuXetNghiemChaId = dataItem.Id;
    }
    if (dataItem.Loai == 1) {
      this.chiSoXN.NhomDichVuBenhVienId = dataItem.Id;
    }
    if (dataItem.Loai == 3) {
      this.chiSoXN.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
    }
    // this.chiSoXN.IdCap = dataItem.IdCap;
    this.chiSoXN.Loai = dataItem.Loai;
    queryString = JSON.stringify(this.chiSoXN);
    this._skip = 0;
    var searchText = this.searchString != undefined ? this.searchString : "";
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

    this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: queryString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
    return this.apiService.post("DichVuXetNghiem/GetDataTreeView", this._gridQueryInfo).pipe(delay(300));
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
    this.documentType = DocumentType.ChiSoXetNghiem;
    this.chiSoXN = new ChiSoXetNghiem();
    this.chiSoXNChiTiet = new ChiSoXetNghiemChiTiet();
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
      this.baseService.getDataForGrid(this.gridQueryInfo, "DichVuXetNghiem/GetDataTreeView")
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
    var searchText = this.chiSoXN.SearchString != undefined ? this.chiSoXN.SearchString : "";
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    var queryInfo = { searchString: searchText };
    this.baseService.getDataForGrid(queryInfo, "DichVuXetNghiem/SearchDichVuXetNghiem")
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
      this.chiSoXN.SearchString = null;
      this.expandedKeys = [];
      this.timKiem();
    }
  }

  expand(dataItem: any) {
    // console.log("dataItem Left: ", dataItem)
    this.capDichVu = dataItem.CapDichVu;
    this.hasChild = dataItem.HasChildren;
    this.isCreateChild = false;
    if ((dataItem.CapDichVu == 1 || dataItem.CapDichVu == 2 || dataItem.CapDichVu == 3)) {
      if (dataItem.CapDichVu == 1) {
        if (dataItem.DichVuXetNghiemId != null) {
          if (!this.expandedKeys.includes(dataItem.IdCap)) {
            this.getById(dataItem.DichVuXetNghiemId, dataItem.DichVuXetNghiemId, dataItem.ChiSoCha);

          }
        } else {
          var chuaCoDichVuXetNghiemViewModel = new ChuaCoDichVuXetNghiemViewModel();
          chuaCoDichVuXetNghiemViewModel.TenCha = dataItem.TenCha;
          chuaCoDichVuXetNghiemViewModel.TenDichVuKyThuat = dataItem.TenDichVuKyThuat;
          chuaCoDichVuXetNghiemViewModel.Ma = dataItem.Ma;
          chuaCoDichVuXetNghiemViewModel.CapDichVu = dataItem.CapDichVu;
          chuaCoDichVuXetNghiemViewModel.NhomDichVuBenhVienId = dataItem.NhomDichVuBenhVienId;
          chuaCoDichVuXetNghiemViewModel.Ten = dataItem.TenDichVuKyThuat;
          chuaCoDichVuXetNghiemViewModel.DichVuKyThuatBenhVienId = dataItem.Id;
          chuaCoDichVuXetNghiemViewModel.LoaiMauXetNghiem = dataItem.LoaiMauXetNghiem;


          if (!this.expandedKeys.includes(dataItem.IdCap)) {
            this.getInfoChuaCoXetNghiem(chuaCoDichVuXetNghiemViewModel);

          }
        }
      }
      else if (dataItem.CapDichVu == 2) {
        this.getById(dataItem.Id, dataItem.DichVuXetNghiemChaId, dataItem.ChiSoCha);
      }
      else {
        if (!this.expandedKeys.includes(dataItem.IdCap)) {
          this.getById(dataItem.Id, dataItem.DichVuXetNghiemId, dataItem.ChiSoCha);
        }

      }
    }
    else {
      if (dataItem.HasChildren) {
        this.isUpdate = false;
        this.isCreate = false;
        this.isShow = false;

      }
    }
    this.expandLogic(dataItem, false);

  }

  ///////////////////////////////////////////////////// GET  <=======
  getInfoChuaCoXetNghiem(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.post<ChiSoXetNghiemChiTiet>("DichVuXetNghiem/GetChuaChiSoXetNghiem", dataItem).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.chiSoXNChiTiet = resultData;
            this.chiSoXNChiTiet.CoChiSoXetNghiem = this.dataItemLeftClick.CoChiSoXetNghiem;
          }
          this.isUpdate = true;
          this.isCreate = false;
          this.isShow = true;
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
  getById(id: number, dichVuXetNghiemId: number, chiSoCha: string) {
    this.chiSoXNChiTiet = new ChiSoXetNghiemChiTiet();
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.apiService.get<ChiSoXetNghiemChiTiet>("DichVuXetNghiem/GetChiSoXetNghiem?id=" + id + "&dichVuXetNghiemId=" + dichVuXetNghiemId + "&chiSoCha=" + chiSoCha).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.chiSoXNChiTiet = resultData;
            if (this.dataItemLeftClick != undefined && this.dataItemLeftClick != null) {
              this.chiSoXNChiTiet.CoChiSoXetNghiem = this.dataItemLeftClick.CoChiSoXetNghiem;
            } else {
              this.chiSoXNChiTiet.CoChiSoXetNghiem = resultData.CoChiSoXetNghiem;
            }
            this.isUpdate = true;
            this.isCreate = false;
            this.isShow = true;
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
    // }
  }

  /////////////////////////////////////////////////////END GET  <=======


  ///////////////////////////////////////////////////// CLICK  <=======
  onLeftClick(event: MouseEvent, dataItem: any) {
    // console.log("data Left: ", dataItem)
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

  onRightClick(event: MouseEvent, dataItem: any) {
    // console.log("data Right: ", dataItem)
    this.capDichVu = dataItem.CapDichVu;
    this.hasChild = dataItem.HasChildren;
    if (this.isShow == true) {
      this.isShow = false;
    }
    if (event.type === "contextmenu") {
      event.preventDefault();
      if (dataItem.CapDichVu == 1 || (dataItem.CapDichVu == 2) || (dataItem.CapDichVu == 3)) {
        if (dataItem.CapDichVu == 1 || dataItem.CapDichVu == 2) {
          this.chiSoXNChiTiet = Object.assign({}, dataItem);
          //console.log("data chiSoXNChiTiet: ", this.chiSoXNChiTiet)
        }
        else {
          this.isCreateChild = false;
        }
        this.dataItemRighClick = dataItem;
        if (this.capDichVu == 1) {
          this.items = [{ text: 'Thêm chỉ số con', icon: 'plus' }, { text: 'Sửa', icon: 'edit' }];
        } else if (this.capDichVu == 2) {
          this.items = [{ text: 'Thêm chỉ số con', icon: 'plus' }, { text: 'Sửa', icon: 'edit' }, { text: 'Xóa', icon: 'close' }];
        }
        else {
          this.items = [{ text: 'Sửa', icon: 'edit' }, { text: 'Xóa', icon: 'close' }];
        }
        this.treeContextMenu.show({ left: event.pageX, top: event.pageY });
      }
    }
    else {
      this.dataItemRighClick = null;
    }
    this.dataItemLeftClick = null;

  }

  onSelect({ item }): void {
    if (item.text === 'Thêm chỉ số con') {
      this.themChiSoCon();
      //console.log(item);
    }
    if (item.text === 'Sửa') {
      this.sua()
      // console.log(item);
    }
    if (item.text === 'Xóa') {
      this.xoa();
      //console.log(item);
    }
  }
  ///////////////////////////////////////////////////// END -  CLICK  <=======


  themChiSoCon() {
    this.validationErrors = [];
    this.isCreate = true;
    this.isCreateChild = true;
    this.isUpdate = false;
    this.isShow = true;
    // this.chiSoXNChiTiet = this.dataItemRighClick;
    this.chiSoXNChiTiet = Object.assign({}, this.dataItemRighClick);
  }

  reLoad() {
    this.baseService.getDataForGrid(this.gridQueryInfo, "DichVuXetNghiem/GetDataTreeView")
      .subscribe((resultData: any[]) => {
        this.data = resultData;
      })
  }
  xoa() {
    this.isCreate = false;
    this.isUpdate = false;
    this.isShow = false;

    //console.log("them Data:", this.dataItemRighClick)
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa chỉ số xét nghiệm này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        self.validationErrors = [];
        self.ref.detectChanges();
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          self.chiSoXNChiTiet.Id = self.dataItemRighClick.Id;
          self.chiSoXNChiTiet.IsDelete = true;
          self.chiSoXNChiTiet.HieuLuc = true;
          self.chiSoXNChiTiet.CapDichVu = this.dataItemRighClick.CapDichVu;

          self.apiService.post<any>("DichVuXetNghiem/XoaChiSoXetNghiem", self.chiSoXNChiTiet).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.chiSoXNChiTiet.IsDelete = false;
              self.chiSoXNChiTiet = new ChiSoXetNghiemChiTiet();
              self.isShow = false;
              self.isUpdate = false;
              self.isCreate = false;
              self.expandedKeys = [];
              self.validationErrors = [];
              self.reLoad();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  sua() {
    // console.log("this.dataItemRighClick: ", this.dataItemRighClick)
    if (this.dataItemRighClick.CapDichVu == 1) {
      this.isCreateChild = false;
      if (this.dataItemRighClick.CoChiSoXetNghiem) {
        this.getById(this.dataItemRighClick.DichVuXetNghiemId, this.dataItemRighClick.DichVuXetNghiemId, this.dataItemRighClick.ChiSoCha);
      } else {
        var chuaCoDichVuXetNghiemViewModel = new ChuaCoDichVuXetNghiemViewModel();
        chuaCoDichVuXetNghiemViewModel.TenCha = this.dataItemRighClick.TenCha;
        chuaCoDichVuXetNghiemViewModel.TenDichVuKyThuat = this.dataItemRighClick.TenDichVuKyThuat;
        chuaCoDichVuXetNghiemViewModel.Ma = this.dataItemRighClick.Ma;
        chuaCoDichVuXetNghiemViewModel.CapDichVu = this.dataItemRighClick.CapDichVu;
        chuaCoDichVuXetNghiemViewModel.NhomDichVuBenhVienId = this.dataItemRighClick.NhomDichVuBenhVienId;
        chuaCoDichVuXetNghiemViewModel.Ten = this.dataItemRighClick.TenDichVuKyThuat;
        chuaCoDichVuXetNghiemViewModel.DichVuKyThuatBenhVienId = this.dataItemRighClick.Id;
        this.getInfoChuaCoXetNghiem(chuaCoDichVuXetNghiemViewModel);
      }
    }
    else if (this.dataItemRighClick.CapDichVu == 2) {
      this.getById(this.dataItemRighClick.Id, this.dataItemRighClick.DichVuXetNghiemChaId, this.dataItemRighClick.ChiSoCha);
    } else {
      this.getById(this.dataItemRighClick.Id, this.dataItemRighClick.DichVuXetNghiemId, this.dataItemRighClick.ChiSoCha);
    }
  }

  cancel() {
    this.validationErrors = [];
    this.chiSoXNChiTiet = new ChiSoXetNghiemChiTiet();
    if (this.isUpdate) {
      this.isUpdate = false;
      this.isShow = false;
    }
    if (this.isCreate) {
      this.isCreate = false;
      this.isShow = false;
    }
  }

  themChiSoXNChiTiet() {
    var self = this;
    self.chiSoXNChiTiet = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn thêm thông tin chỉ số XN này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
          self.addingPage();
          self.chiSoXNChiTiet.IsCreateChild = true;
          if (self.dataItemRighClick.CapDichVu == 2) {
            self.chiSoXNChiTiet.DichVuXetNghiemId = self.dataItemRighClick.DichVuXetNghiemChaId;
          }
          self.apiService.post<any>("DichVuXetNghiem/ThemChiSoXetNghiem", self.chiSoXNChiTiet).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
              self.closePopupAddingData();
              self.chiSoXNChiTiet.IsCreateChild = false;
              self.isShow = false;
              self.isUpdate = false;
              self.isCreate = false;
              self.expandedKeys = [];
              self.validationErrors = [];
              self.reLoad();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupAddingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  luuChiSoXNChiTiet() {
    var self = this;

    self.chiSoXNChiTiet = self.shared.getSharedData();
    self.validationErrors = [];
    self.ref.detectChanges();
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có muốn lưu thông tin chỉ số XN này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if ((self.chiSoXNChiTiet.CoChiSoXetNghiem == true && self.chiSoXNChiTiet.CapDichVu == 1)
          || self.chiSoXNChiTiet.CapDichVu == 2 || self.chiSoXNChiTiet.CapDichVu == 3) {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.savingPage();
            if (self.chiSoXNChiTiet.CapDichVu == 3) {
              if (self.dataItemLeftClick != undefined && self.dataItemLeftClick != null) {
                self.chiSoXNChiTiet.DichVuXetNghiemId = self.dataItemLeftClick.DichVuXetNghiemId;
              } else if (self.dataItemRighClick != undefined && self.dataItemRighClick != null) {
                self.chiSoXNChiTiet.DichVuXetNghiemId = self.dataItemRighClick.DichVuXetNghiemId;
              }
            }
            self.apiService.post<any>("DichVuXetNghiem/CapNhatChiSoXetNghiem", self.chiSoXNChiTiet).subscribe(
              () => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                // self.isShow = false;
                // self.isUpdate = false;
                self.isCreate = false;
                self.closePopupSavingData();
                // self.expandedKeys = [];
                self.validationErrors = [];
                // self.timKiem();
                jQuery("#node" + self.chiSoXNChiTiet.Id).text(self.chiSoXNChiTiet.TenChiSo);
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        } else {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
            self.savingPage();
            self.chiSoXNChiTiet.IsCreateChild = false;
            if (self.dataItemRighClick != undefined && self.dataItemRighClick != null) {
              self.chiSoXNChiTiet.DichVuKyThuatBenhVienId = self.dataItemRighClick.DichVuKyThuatBenhVienId;
            }
            self.apiService.post<any>("DichVuXetNghiem/ThemChiSoXetNghiem", self.chiSoXNChiTiet).subscribe(
              () => {
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
                self.closePopupSavingData();
                self.isShow = false;
                self.isUpdate = false;
                self.isCreate = false;
                self.expandedKeys = [];
                self.reLoad();

              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                }
                self.closePopupSavingData();
              });
          } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      }
    })
  }

  XuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("DichVuXetNghiem/ExportDataTreeView").subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DSDichVuXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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
