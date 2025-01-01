import { ChangeDetectorRef, Component, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef, EventEmitter, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TrangThaiKetQuaXetNghiemConst } from 'src/app/shared/constants/xet-nghiem-constant';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { KetQuaXetNghiemViewKetQuaNewViewModel, ListDataChildNew } from '../xet-nghiem-ket-qua-new.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { PhongPTLookupItemVo } from '../../../phau-thuat-thu-thuat/bang-ke-thuoc-va-vat-tu-phau-thuat/bang-ke-thuoc-va-vat-tu-phau-thuat.model';
declare var $: any;
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-ket-qua-xet-nghiem-new-shared',
  templateUrl: './ket-qua-xet-nghiem-new-shared.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-new-shared.component.scss']
})
export class KetQuaXetNghiemNewSharedComponent implements OnInit, AfterContentInit {
  id: number;
  //1: Chờ kết quả, 2: Chờ kết quả chạy lại, 3: Chờ duyệt kết quả, 4: Đã có kết quả
  type: number;

  ChoKQChayLai: string = TrangThaiKetQuaXetNghiemConst.ChoKQChayLai;
  ChoKQ: string = TrangThaiKetQuaXetNghiemConst.ChoKQ;
  ChoDuyetKQ: string = TrangThaiKetQuaXetNghiemConst.ChoDuyetKQ;
  DaCoKQ: string = TrangThaiKetQuaXetNghiemConst.DaCoKQ;
  kqNhapTay: string = null;

  icSearch = icSearch;
  searchCtrl = new FormControl;
  showToastNotifyError: boolean = false;

  gridColumns: any[] = [];

  documentType: DocumentType = DocumentType.KetQuaXetNghiem;

  disableNhom: boolean = false;
  urlGetDataParent = "";
  urlGetTotalPageParent = "";

  ketQuaXetNghiem: KetQuaXetNghiemViewKetQuaNewViewModel = new KetQuaXetNghiemViewKetQuaNewViewModel();

  gridDataSource: any;
  isSelectDuocPham: boolean = false;

  displayToolTipGridNguoiYeuCau: string = null;
  displayToolTipGridNgayYeuCau: string = null;
  displayToolTipGridLyDoYeuCau: string = null;
  displayToolTipGridNguoiDuyet: string = null;
  displayToolTipGridNgayDuyet: string = null;

  dataChildDisplay: ListDataChildNew[] = new Array<ListDataChildNew>();
  searchString: string;

  validationErrors: any;

  sort: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]
  @Output() trangThaiIn: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('tenTemplate', { static: true }) tenTemplate: TemplateRef<any>;
  @ViewChild('kqCuTemplate', { static: true }) kqCuTemplate: TemplateRef<any>;
  @ViewChild('kqTuMayTemplate', { static: true }) kqTuMayTemplate: TemplateRef<any>;
  @ViewChild('kqNhapTayTemplate', { static: true }) kqNhapTayTemplate: TemplateRef<any>;
  @ViewChild('kqDuyetTemplate', { static: true }) kqDuyetTemplate: TemplateRef<any>;
  @ViewChild('damKQTemplate', { static: true }) damKQTemplate: TemplateRef<any>;
  @ViewChild('chiSoBinhThuongTemplate', { static: true }) chiSoBinhThuongTemplate: TemplateRef<any>;
  @ViewChild('donViTinhTemplate', { static: true }) donViTinhTemplate: TemplateRef<any>;
  @ViewChild('gioTiepNhanTemplate', { static: true }) gioTiepNhanTemplate: TemplateRef<any>;
  @ViewChild('gioNhanMauTemplate', { static: true }) gioNhanMauTemplate: TemplateRef<any>;
  @ViewChild('mayXNTemplate', { static: true }) mayXNTemplate: TemplateRef<any>;
  @ViewChild('nguoiDuyetTemplate', { static: true }) nguoiDuyetTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;

  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('gridChiTietKetQuaXn', { static: false }) gridChiTietKetQuaXn: GridComponent;
  phongLookupItemVos: PhongPTLookupItemVo[] = [];

  checkAll: boolean = null;
  checkBoxNhom: boolean = null;

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  popupLoadingData: any;

  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  constructor(
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private baseService: BaseService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private errorService: ErrorService
  ) {
    this.id = this.route.snapshot.params.id;
    this.type = this.route.snapshot.params.type;
    //console.log("constructor = ", this.id, this.type);
  }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Nhom", Title: "", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      // { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },//, Hidden: this.type == 4
      { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
      { Field: "GiaTriCu", Title: "KQ Cũ", Width: 100, Sortable: false, Template: this.kqCuTemplate },
      { Field: "GiaTriTuMay", Title: "KQ Từ Máy", Width: 100, Sortable: false, Template: this.kqTuMayTemplate },
      { Field: "GiaTriNhapTay", Title: "KQ Nhập Tay", Width: 100, Sortable: false, Template: this.kqNhapTayTemplate },
      { Field: "ToDamGiaTri", Title: "Đậm KQ", Width: 50, Sortable: false, Template: this.damKQTemplate },
      { Field: "CSBT", Title: "CSBT", Width: 100, Sortable: false, Template: this.chiSoBinhThuongTemplate },
      { Field: "DonVi", Title: "ĐVT", Width: 50, Sortable: false, Template: this.donViTinhTemplate },
      { Field: "ThoiDiemGuiYeuCauDisplay", Title: "Giờ Tiếp Nhận Mẫu", Width: 150, Sortable: false, Template: this.gioTiepNhanTemplate },
      { Field: "ThoiDiemNhanKetQuaDisplay", Title: "Giờ Nhận KQ", Width: 150, Sortable: false, Template: this.gioNhanMauTemplate },
      { Field: "MayXetNghiemId", Title: "Máy XN", Width: 150, Sortable: false, Template: this.mayXNTemplate },
      { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 100, Sortable: false, Template: this.ngayDuyetTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: false, Template: this.nguoiDuyetTemplate }
    ];
    this.checkAll = false;
    if (this.id !== undefined && this.id !== null) {
      this.getById(this.id);
    }
    this.getDataMayXN();
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

  }

  getDataMayXN() {
    let queryInfo = new LookupQueryInfo();
    this.apiService.post<any>("KetQuaXetNghiem/GetListLookupMayXetNghiem",
      queryInfo)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.phongLookupItemVos = resultData;
        }
      });
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
  getById(id: number) {
    this.loadingPage();
    this.baseService.getById<KetQuaXetNghiemViewKetQuaNewViewModel>(id).subscribe(resultData => {
      if (resultData !== null && resultData !== undefined) {
        this.closePopupLoadingData();
        this.ketQuaXetNghiem = resultData;
        this.setDataSourceForGrid();
      }

    },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  searchChanges($event) {

    //console.log("searchString = ", this.searchString, $event);
    this.searchString = $event;
    if ($event == "" || $event == undefined) {
      this.setDataSourceForGrid();
    }
  }

  onKeySearchChanges($event) {
    if ($event.keyCode == 13) {
      this.setDataSourceForGrid();
    }
  }

  setDataSourceForGrid() {
    //search
    if (this.searchString == undefined || this.searchString == null || this.searchString == "") {
      this.dataChildDisplay = [...this.ketQuaXetNghiem.dataChild];
    }
    else {
      let search = CommonService.removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
      this.dataChildDisplay = [...this.ketQuaXetNghiem.dataChild].filter(o =>
        (o.Ten != null && CommonService.removeVietnamese(o.Ten).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.DonVi != null && CommonService.removeVietnamese(o.DonVi).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.TenMayXetNghiem != null && CommonService.removeVietnamese(o.TenMayXetNghiem).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NguoiDuyet != null && CommonService.removeVietnamese(o.NguoiDuyet).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NgayDuyetDisplay != null && CommonService.removeVietnamese(o.NgayDuyetDisplay).toLocaleLowerCase().trim().indexOf(search) != -1)
      );
    }

    this.ketQuaXetNghiem.dataChild.forEach(dataItem => {
      if ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
        && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')
        && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) {
        if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
          dataItem.HighLightClass =
            ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
              && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
        } else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
          dataItem.HighLightClass = null;
        }
        if (dataItem.Level != 1) {
          dataItem.HighLightClass =
            ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
              && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
        }
      } else {
        if (dataItem.DaDuyet != true) {
          dataItem.HighLightClass = 'bg-row-lightblue2';
        }
      }
    })
    this.gridDataSource = [];
    this.gridDataSource = {
      data: this.dataChildDisplay,
      total: this.dataChildDisplay.length
    };
    // kiem tra có Duyêt kết quả in
    let kiemTraTrangThaiIn = this.gridDataSource.data.findIndex(s => s.ThoiDiemDuyetKetQua != null);
    if (kiemTraTrangThaiIn == -1) {

      this.trangThaiIn.emit(false);
    }
    else {
      this.trangThaiIn.emit(true);
    }
    // console.log("gridDataSource = ", this.gridDataSource);

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridChiTietKetQuaXn != undefined) {
      this.gridChiTietKetQuaXn._gridDataSource = { ...this.gridDataSource }
      this.gridChiTietKetQuaXn.setDataSource();
      //this.cdRef.detectChanges();
    }
  }

  getSharedDataGoiDuyet() {
    let lstDataCheckBoxCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
    let lstDataCurrentLv1 = lstDataCheckBoxCurrent.filter(x => x.Level == 1 && x.CheckBox && !x.DaGoiDuyet);
    let lstDataCurrentLv2 = lstDataCheckBoxCurrent.filter(x => x.Level == 2);
    var lstDataLv2 = [];
    if (lstDataCurrentLv2.length > 0) {
      lstDataCurrentLv2.forEach(element => {
        if (lstDataCurrentLv1.findIndex(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) !== -1) {
          lstDataLv2.push(element);
        }
      });
    }
    var lstDataLv3 = [];
    let lstDataCurrentLv3 = lstDataCheckBoxCurrent.filter(x => x.Level == 3);
    if (lstDataCurrentLv3.length > 0) {
      lstDataCurrentLv3.forEach(element => {
        if (lstDataLv2.findIndex(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) !== -1) {
          lstDataLv3.push(element);
        }
      });
    }
    let dataChild = lstDataCurrentLv1.concat(lstDataLv2.concat(lstDataLv3));

    let dataGoiDuyet = Object.assign({}, this.ketQuaXetNghiem)
    dataGoiDuyet.dataChild = dataChild;
    return dataGoiDuyet;
  }



  setUpDataTooltip(dataItem) {
    this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
    this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
    this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
    this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyetChayLai;
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

  CheckHighlight(dataItem: any, currentValue: any) {
    dataItem.GiaTriNhapTay = currentValue;
    dataItem.HighLightClass = dataItem.DaGoiDuyet == true && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '') ? 'bg-row-lightRed' : null;
    let giaTriNhap = Number(currentValue);
    if (!isNaN(giaTriNhap) || currentValue == '') {
      if ((dataItem.GiaTriMin == null || dataItem.GiaTriMin == '') && (dataItem.GiaTriMax == null || dataItem.GiaTriMax == '') || currentValue == '') {
        dataItem.ToDamGiaTri = false;
      } else if (dataItem.GiaTriMin != null && dataItem.GiaTriMax == null) {
        let min = Number(dataItem.GiaTriMin);
        if (giaTriNhap < min) {
          dataItem.ToDamGiaTri = true;
        } else {
          dataItem.ToDamGiaTri = false;
        }
      } else if (dataItem.GiaTriMin == null && dataItem.GiaTriMax != null) {
        let max = Number(dataItem.GiaTriMax);
        if (giaTriNhap > max) {
          dataItem.ToDamGiaTri = true;
        } else {
          dataItem.ToDamGiaTri = false;
        }
      }
      else {
        let min = Number(dataItem.GiaTriMin);
        let max = Number(dataItem.GiaTriMax);
        if (giaTriNhap < min || giaTriNhap > max) {
          dataItem.ToDamGiaTri = true;
        } else {
          dataItem.ToDamGiaTri = false;
        }
      }
    } else {
      dataItem.ToDamGiaTri = false;
    }
  }

  isMauKhongDat(mau, danhSachMauKhongDat) {
    for (let i = 0; i < danhSachMauKhongDat.length; i++) {
      if (mau == danhSachMauKhongDat[i]) {
        return true;
      }
    }

    return false;
  }
  mayXNChange(event: any, level: number, dichVuXetNghiemId: number) {
    if (level == 1) {
      let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
      // console.log("data: ", lstDataCurrent)
      let lstDataCurrentLv2 = lstDataCurrent.filter(x => x.Level == 2);
      let lstDataCurrentLv3 = lstDataCurrent.filter(x => x.Level == 3);
      if (lstDataCurrentLv2.length > 0) {
        lstDataCurrentLv2.forEach(element => {
          if (element.DichVuXetNghiemChaId == dichVuXetNghiemId) {
            element.MayXetNghiemId = event;
          }
        });
      }
      if (lstDataCurrentLv3.length > 0) {
        lstDataCurrentLv3.forEach(element => {
          element.MayXetNghiemId = lstDataCurrentLv2.find(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) != null ? event : null;
        });
      }
      this.gridChiTietKetQuaXn._gridDataSource = { ...lstDataCurrent }
      this.gridChiTietKetQuaXn.setDataSource();
    }
  }

  checkBoxChange(event: any, dataItem: any) {
    let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
    lstDataCurrent.forEach(element => {
      if (element.Id == dataItem.Id) {
        element.CheckBox = event;
        // element.CheckBoxParent = event;
      }
    });
    if (lstDataCurrent.some(x => !x.CheckBox && x.Level == 1)) {
      this.checkAll = false;
    } else {
      this.checkAll = true;
    }

    if (lstDataCurrent.some(x => !x.CheckBox && x.Level == 1 && x.NhomDichVuBenhVienId == dataItem.NhomDichVuBenhVienId)) {
      lstDataCurrent.forEach(element => {
        element.CheckBoxParent = false;
      })
    } else if (lstDataCurrent.every(x => x.CheckBox && x.Level == 1 && x.NhomDichVuBenhVienId == dataItem.NhomDichVuBenhVienId)) {
      lstDataCurrent.forEach(element => {
        element.CheckBoxParent = true;
      })
    }
    this.gridChiTietKetQuaXn._gridDataSource = { ...lstDataCurrent }
    this.gridChiTietKetQuaXn.setDataSource();
  }

  checkBoxAllChange(event: any) {
    let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
    this.checkAll = event;
    lstDataCurrent.forEach(element => {
      if (element.DaGoiDuyet != true) {
        element.CheckBox = event;
        element.CheckBoxParent = event;
      }
    });
    this.gridChiTietKetQuaXn._gridDataSource = { ...lstDataCurrent }
    this.gridChiTietKetQuaXn.setDataSource();
  }

  checkBoxNhomChange(event: any, data: any) {
    data.items.forEach(element => {
      if (element.Level == 1 && element.DaGoiDuyet == null) {
        element.CheckBox = event;
        element.CheckBoxParent = event;
      }
    });
    let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
    if (lstDataCurrent.some(x => x.CheckBoxParent != true && x.Level == 1)) {
      this.checkAll = false;
    } else {
      this.checkAll = true;
    }
    this.gridChiTietKetQuaXn._gridDataSource = { ...lstDataCurrent }
    this.gridChiTietKetQuaXn.setDataSource();
  }

  TooltipCustom(dataItem: any) {
    if (dataItem != null && dataItem != '') {
      this.kqNhapTay = dataItem;
    }
    else {
      this.kqNhapTay = null;
    }
  }

  updateDataSauKhiLuu(dataChilds) {
    let lstDataCurrent = this.gridChiTietKetQuaXn.getAllDataFromDatasource();
    lstDataCurrent.forEach(element => {
      let dataChild = dataChilds.find(o => o.Id == element.Id);
      if (dataChild) {
        element.ThoiDiemNhanKetQuaDisplay = dataChild.ThoiDiemNhanKetQuaDisplay;
      }
    });
    this.gridChiTietKetQuaXn._gridDataSource = { ...lstDataCurrent }
    this.gridChiTietKetQuaXn.setDataSource();
  }

  luu() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.validationErrors = null;
      self.baseService.update(self.ketQuaXetNghiem).subscribe(
        (resData) => {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          self.updateDataSauKhiLuu(resData);
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (self.showToastNotifyError == true) {
            var mess = self.errorService.getValidationErrors(err);
            if (mess != null) {
              self.notificationService.showError(mess);
            }
          }
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    }
  }

  currentCellFocused: any = null;
  onKeydownGrid(obj: any) {
    var self = this;
    if (obj.FocusGridContent == true && obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter" || obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft'
      //||e.code === 'ArrowDown'||e.code === 'ArrowUp'
    ) {

      setTimeout(function () {
        var cellFocused = obj.Sender.focusCell();
        if (obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter") {
          if (obj.Event.target.id.indexOf('GiaTriNhapTay-') >= 0) {
            let id = Number(obj.Event.target.id.replace('GiaTriNhapTay-', ''));
            let dataAll = [];
            obj.Sender.data.data.forEach(item => {
              item.items.filter(z => !z.DaDuyet).forEach(e => {
                dataAll.push(e);
              });
            });
            let index = dataAll.findIndex((z => z.Id == id))
            let dataNext = dataAll[index + 1];
            if (dataNext != undefined && dataNext != null) {
              let idNext = null;
              if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                idNext = dataAll[index + 2].Id;
              } else {
                idNext = dataAll[index + 1].Id;
              }
              // document.getElementById("GiaTriNhapTay-" + dataNext).focus();
              $(document).ready(function () {
                // $('#introdukt').focus()
                // $('#introdukt').select()

                //or if you want to be more efficient and use less characters, chain it
                $("#GiaTriNhapTay-" + idNext).focus().select();

              });
            }

          }
          //Action on Đậm KQ
          if (cellFocused != undefined && cellFocused.dataItem != null) {
            if (cellFocused.colIndex == 4) {
              cellFocused.dataItem.ToDamGiaTri = cellFocused.dataItem.ToDamGiaTri == true ? false : true;
            }
          }
          //Action on Máy XN
          if (cellFocused != undefined && cellFocused.dataItem != null) {
            if (cellFocused.colIndex == 9) {
              let id = cellFocused.dataItem.Id;
              let dataAll = [];
              obj.Sender.data.data.forEach(item => {
                item.items.filter(z => !z.DaDuyet).forEach(e => {
                  dataAll.push(e);
                });
              });
              let index = dataAll.findIndex((z => z.Id == id))
              let dataNext = dataAll[index + 1];
              if (dataNext != undefined && dataNext != null) {
                let idNext = null;
                if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                  idNext = dataAll[index + 2].Id;
                } else {
                  idNext = dataAll[index + 1].Id;
                }
                // document.getElementById("GiaTriNhapTay-" + dataNext).focus();
                $(document).ready(function () {
                  $("#MayXetNghiemId-" + idNext + " input").focus();

                });
              }
            }
          }
        }
        else {
          if (obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft' || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp') {
            if (cellFocused != undefined && cellFocused.dataItem != null) {
              //Action on KQ nhập tay
              if (cellFocused.colIndex == 3 || cellFocused.colIndex == 9) {
                //Đang focus vào input mà di chuyển phím thì nó phải nhấn 2 lần mới ra khỏi input dc, chỗ này xứ lý vấn đề đó

                if (self.currentCellFocused != null && (self.currentCellFocused.colIndex != cellFocused.colIndex || self.currentCellFocused.rowIndex != cellFocused.rowIndex)) {
                  if (cellFocused.colIndex == 3) {
                    $("#GiaTriNhapTay-" + cellFocused.dataItem.Id).focus().select();
                  }
                  else if (cellFocused.colIndex == 9) {
                    $("#MayXetNghiemId-" + cellFocused.dataItem.Id + " input").focus();
                  }
                }
                else {
                  var nextCellFocus = null;
                  if (obj.Event.code === 'ArrowRight') {
                    nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex + 1);
                  }
                  if (obj.Event.code === 'ArrowLeft') {
                    nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex - 1);
                  }
                  if (obj.Event.code === 'ArrowDown') {
                    nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex + 1, cellFocused.colIndex);
                  }
                  if (obj.Event.code === 'ArrowUp') {
                    nextCellFocus = self.gridChiTietKetQuaXn.grid.focusCell(cellFocused.rowIndex - 1, cellFocused.colIndex);
                  }
                  if (nextCellFocus != undefined && nextCellFocus.dataItem != null) {
                    if (cellFocused.colIndex == 3) {
                      $("#GiaTriNhapTay-" + nextCellFocus.dataItem.Id).focus().select();
                    }
                    else if (cellFocused.colIndex == 9) {
                      $("#MayXetNghiemId-" + nextCellFocus.dataItem.Id + " input").focus();
                    }
                    cellFocused = nextCellFocus;
                  }
                }
              }
            }

          }
        }
        self.cdRef.detectChanges();
        self.currentCellFocused = cellFocused;
      })
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }
  ngayDuyet: string = null;
  TooltipCustomNgayDuyet(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      let valueObj = {
        YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
        DichVuXetNghiemId: dataItem.DichVuXetNghiemId,
        DichVuXetNghiemTen: dataItem.Ten,
        KetQuaXetNghiemChiTietId: dataItem.Id
      };
      this.apiService.post<any>("DuyetKetQuaXetNghiem/GetNgayDuyetKetQuaCu", valueObj).subscribe(
        resultData => {
          if (resultData != null && resultData != undefined) {
            this.ngayDuyet = resultData;
          }
        },
        () => {
        });
    }
    else {
      this.ngayDuyet = null;
    }
  }

  getSharedDataLuu() {
    return this.ketQuaXetNghiem;
  }
}

