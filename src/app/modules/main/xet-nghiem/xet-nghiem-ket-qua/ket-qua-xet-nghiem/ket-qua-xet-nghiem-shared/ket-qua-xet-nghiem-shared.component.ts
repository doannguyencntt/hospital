import { ChangeDetectorRef, Component, Input, OnInit, Output, TemplateRef, ViewChild, ViewRef, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { KetQuaXetNghiemViewKetQuaViewModel, ListDataChild } from '../ket-qua-xet-nghiem.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TrangThaiKetQuaXetNghiemConst } from 'src/app/shared/constants/xet-nghiem-constant';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-ket-qua-xet-nghiem-shared',
  templateUrl: './ket-qua-xet-nghiem-shared.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-shared.component.scss']
})
export class KetQuaXetNghiemSharedComponent implements OnInit {

  id: number;
  //1: Chờ kết quả, 2: Chờ kết quả chạy lại, 3: Chờ duyệt kết quả, 4: Đã có kết quả
  type: number;

  ChoKQChayLai: string = TrangThaiKetQuaXetNghiemConst.ChoKQChayLai;
  ChoKQ: string = TrangThaiKetQuaXetNghiemConst.ChoKQ;
  ChoDuyetKQ: string = TrangThaiKetQuaXetNghiemConst.ChoDuyetKQ;
  DaCoKQ: string = TrangThaiKetQuaXetNghiemConst.DaCoKQ;

  icSearch = icSearch;
  searchCtrl = new FormControl;

  gridColumns: any[] = [];

  documentType: DocumentType = DocumentType.KetQuaXetNghiem;

  disableNhom: boolean = false;
  urlGetDataParent = "";
  urlGetTotalPageParent = "";

  ketQuaXetNghiem: KetQuaXetNghiemViewKetQuaViewModel = new KetQuaXetNghiemViewKetQuaViewModel();

  gridDataSource: any;

  displayToolTipGridNguoiYeuCau: string = null;
  displayToolTipGridNgayYeuCau: string = null;
  displayToolTipGridLyDoYeuCau: string = null;
  displayToolTipGridNguoiDuyet: string = null;
  displayToolTipGridNgayDuyet: string = null;

  dataChildDisplay: ListDataChild[] = new Array<ListDataChild>();
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
  @ViewChild('gridParent', { static: false }) gridParent: GridComponent;
  checkAll: boolean = null;
  checkBoxNhom: boolean = null;

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  popupLoadingData: any;

  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  constructor(
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog, private baseService: BaseService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,

  ) {
    this.id = this.route.snapshot.params.id;
    this.type = this.route.snapshot.params.type;
    //console.log("constructor = ", this.id, this.type);
  }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Nhom", Title: "", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },//, Hidden: this.type == 4
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
    this.baseService.getById<KetQuaXetNghiemViewKetQuaViewModel>(id).subscribe(resultData => {
      if (resultData !== null && resultData !== undefined) {
        console.log("resultData : ", resultData);
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
        //(o.GiaTriCu != null && o.GiaTriCu.toLocaleLowerCase().trim().indexOf(search) != -1)
        (o.Ten != null && CommonService.removeVietnamese(o.Ten).toLocaleLowerCase().trim().indexOf(search) != -1)
        //|| (o.GiaTriTuMay != null && o.GiaTriTuMay.toLocaleLowerCase().trim().indexOf(search) != -1)
        //|| (o.GiaTriNhapTay != null && o.GiaTriNhapTay.toLocaleLowerCase().trim().indexOf(search) != -1)
        //|| (o.CSBT != null && o.CSBT.toLocaleLowerCase().trim().indexOf(search) != -1 )
        || (o.DonVi != null && CommonService.removeVietnamese(o.DonVi).toLocaleLowerCase().trim().indexOf(search) != -1)
        //|| (o.ThoiDiemGuiYeuCauDisplay != null &&  o.ThoiDiemGuiYeuCauDisplay.toLocaleLowerCase().trim().indexOf(search) != -1)
        //|| (o.ThoiDiemNhanKetQuaDisplay != null && o.ThoiDiemNhanKetQuaDisplay.toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.TenMayXetNghiem != null && CommonService.removeVietnamese(o.TenMayXetNghiem).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NguoiDuyet != null && CommonService.removeVietnamese(o.NguoiDuyet).toLocaleLowerCase().trim().indexOf(search) != -1)
        || (o.NgayDuyetDisplay != null && CommonService.removeVietnamese(o.NgayDuyetDisplay).toLocaleLowerCase().trim().indexOf(search) != -1)
      );
    }
    //set highlight
    if (this.type != 1) {
      //console.log("result = ", this.dataChildDisplay.filter(x => x.ThoiDiemDuyetKetQua == null || (x.GiaTriTuMay == null && x.GiaTriNhapTay == null)), this.dataChildDisplay);
      this.dataChildDisplay.filter(x => x.ThoiDiemDuyetKetQua == null || (x.GiaTriTuMay == null && x.GiaTriNhapTay == null))
        .forEach(x => { x.HighLightClass = 'bg-row-lightRed'; })
    }
    this.dataChildDisplay.filter(x => x.DaGoiDuyet == true).forEach(dataItem => {
      if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
        dataItem.HighLightClass = ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
          && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
      } else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
        dataItem.HighLightClass = null;
      }

      if (dataItem.Level != 1) {
        dataItem.HighLightClass = ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
          && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
      }
    });
    //
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
    //console.log("gridDataSource = ", this.gridDataSource);

    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridParent != undefined) {
      this.gridParent._gridDataSource = { ...this.gridDataSource }
      this.gridParent.setDataSource();
      //this.cdRef.detectChanges();
    }
  }

  getSharedDataGoiDuyet() {
    let lstDataCheckBoxCurrent = this.gridParent.getAllDataFromDatasource();
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

  getSharedDataLuu() {
    return this.ketQuaXetNghiem;
  }

  updateDataSauKhiLuu(dataChilds) {
    let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
    lstDataCurrent.forEach(element => {
      let dataChild = dataChilds.find(o => o.Id == element.Id);
      if (dataChild) {
        element.ThoiDiemNhanKetQuaDisplay = dataChild.ThoiDiemNhanKetQuaDisplay;
      }
    });
    this.gridParent._gridDataSource = { ...lstDataCurrent }
    this.gridParent.setDataSource();
  }

  setUpDataTooltip(dataItem) {
    console.log("setUpDataTooltip = ", dataItem);
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

  CheckHighlight(dataItem: any, currentValue: string) {
    dataItem.GiaTriNhapTay = currentValue;
    dataItem.HighLightClass = dataItem.DaGoiDuyet == true && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '') ? 'bg-row-lightRed' : null;
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
      let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
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
      // lstDataCurrent.forEach(element => {
      //   if ((element.Level == 2 && element.DichVuXetNghiemChaId == dichVuXetNghiemId)
      //     || (element.Level == 3 && element.DichVuXetNghiemChaId == dichVuXetNghiemId)) {
      //     element.MayXetNghiemId = event;
      //   }
      // });
      this.gridParent._gridDataSource = { ...lstDataCurrent }
      this.gridParent.setDataSource();
    }
  }

  checkBoxChange(event: any, dataItem: any) {
    let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
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
    this.gridParent._gridDataSource = { ...lstDataCurrent }
    this.gridParent.setDataSource();
  }

  checkBoxAllChange(event: any) {
    let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
    this.checkAll = event;
    lstDataCurrent.forEach(element => {
      if (element.DaGoiDuyet != true) {
        element.CheckBox = event;
        element.CheckBoxParent = event;
      }
    });
    this.gridParent._gridDataSource = { ...lstDataCurrent }
    this.gridParent.setDataSource();
  }

  checkBoxNhomChange(event: any, data: any) {
    data.items.forEach(element => {
      if (element.Level == 1 && element.DaGoiDuyet == null) {
        element.CheckBox = event;
        element.CheckBoxParent = event;
      }
    });
    let lstDataCurrent = this.gridParent.getAllDataFromDatasource();
    if (lstDataCurrent.some(x => x.CheckBoxParent != true && x.Level == 1)) {
      this.checkAll = false;
    } else {
      this.checkAll = true;
    }
    this.gridParent._gridDataSource = { ...lstDataCurrent }
    this.gridParent.setDataSource();
  }
}
