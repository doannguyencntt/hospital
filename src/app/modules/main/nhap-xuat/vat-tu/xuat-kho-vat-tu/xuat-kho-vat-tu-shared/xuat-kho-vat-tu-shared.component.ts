import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';

import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ThemVatTu, VatTuXuatGridVo, XuatKhoVatTu, XuatKhoVatTuChiTiet } from '../xuat-kho-vat-tu.model';
import { GroupDescriptor, State } from '@progress/kendo-data-query';
import { SelectAllCheckboxState } from '@progress/kendo-angular-grid';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { NhapXuatKhoMessage } from 'src/app/shared/configdata/system-message';
import { DaSuaSoLuongXuat, GetVatTuOnGroupModel } from '../../../duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';


@Component({
  selector: 'app-xuat-kho-vat-tu-shared',
  templateUrl: './xuat-kho-vat-tu-shared.component.html',
  styleUrls: ['./xuat-kho-vat-tu-shared.component.scss']
})
export class XuatKhoVatTuSharedComponent implements OnInit {

  icMoreHoriz = icMoreHoriz;
  icEdit = icEdit;
  icDelete = icDelete;

  icRight = icRight;
  icLeft = icLeft;
  icRightLast = icRightLast;
  icLeftLast = icLeftLast;

  documentType: DocumentType;
  id: number;
  isCreate = true;
  showFormDetail: boolean = false;

  xuatKho: XuatKhoVatTu;

  themVatTu: ThemVatTu;
  popupLoadingData: any = null;

  searchString: string = null;
  searchString2: string;
  searchCtrl = new FormControl;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridResultColumns: any[] = [];
  gridDataSource: any;

  isUpdateGrid: boolean = false;
  isIdNeedUpdate: number = null;

  dataForGrid: XuatKhoVatTuChiTiet[] = [];

  validationErrors: any[] = [];

  lstXuatKhoVatTuChiTietToUpdate: XuatKhoVatTuChiTiet[] = [];

  isValidateUpdate: boolean = true;

  urlGetData: string = "XuatKhoVatTu/GetAllVatTuData";
  urlGetTotal: string = "XuatKhoVatTu/GetAllVatTuTotal";

  //gridDataXuatKho: DataResult = null;
  gridDataXuatKho: any;

  dialogRef: any;


  public checkAll: boolean = null;

  theFistLoadKhoXuat: boolean = true;
  khoXuatIdValuePrevious: number = null;
  nhapKhoIdValuePrevious: number = null;

  groups: GroupDescriptor[] = [{ field: 'LoaiSuDungDisplay' }];

  lstDaChon: DaSuaSoLuongXuat[] = new Array<DaSuaSoLuongXuat>();

  // dataChecked:;

  public selectAllState: SelectAllCheckboxState = 'unchecked';

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;
  @ViewChild('gridResult', { static: true }) gridResult: GridComponent;
  @ViewChild('grid1', { static: true }) grid1: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('soLuongXuatTemplate', { static: true }) soLuongXuatTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;

  @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;


  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid1Template', { static: true }) thanhTienFooterGrid1Template: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid2Template', { static: true }) thanhTienFooterGrid2Template: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;

  public stateXuatKho: State = {
    skip: 0,
    take: 20000,
    group: [{ field: 'LoaiSuDungDisplay' }]
  };

  lstXuatKho: VatTuXuatGridVo[] = new Array<VatTuXuatGridVo>();
  lstXuatKhoDisplay: VatTuXuatGridVo[] = new Array<VatTuXuatGridVo>();
  dataToSumThanhTienGrid1: any[] = [];
  dataToSumThanhTienGrid2: any[] = [];
  public totalThanhTien(field: any, gridNumber: number) {
    if (gridNumber == 1) {
      switch (field) {
        case 'ThanhTien':
          return this.dataToSumThanhTienGrid1.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
      }
    } else {
      switch (field) {
        case 'ThanhTien':
          return this.dataToSumThanhTienGrid2.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
      }
    }

  };
  @Input() xemChiTiet: boolean = false;

  @Input() xuatKhac: boolean = false;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.id;

    this.documentType = DocumentType.XuatKhoVatTu;

    this.xuatKho = new XuatKhoVatTu();
    this.xuatKho.HostingName = window.location.protocol + "//" + window.location.host;

    this.themVatTu = new ThemVatTu();
    //this.addToTest();



    this.gridColumns = [
      { Field: "LoaiSuDungDisplay", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },

      { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },

    ];


    this.gridResultColumns = [
      { Field: "LoaiSuDungDisplay", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
      { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
      { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatTemplate },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid2Template, },

    ];

    this.setNhanVienId();

    this.setDefaultNullForGrid();

    if (this.id !== undefined && this.id !== null) {
      //this.getById(this.id);
      this.isCreate = false;
    }

  }

  setNhanVienId() {
    //vì user la nhân viên nên lấy id của nhau
    let user = this.authService.getAccessUser();
    this.xuatKho.NguoiXuatId = user.Id;
  }

  setDefaultNullForGrid() {
    this.setDataXuatKho();
  }

  setDataXuatKho() {
    this.gridDataXuatKho = null;
    this.setDataGrid1();
    let dataGrid = this.lstXuatKhoDisplay;
    this.dataToSumThanhTienGrid2 = this.lstXuatKhoDisplay;

    //this.gridDataXuatKho = process(dataGrid, this.stateXuatKho);
    this.gridDataXuatKho = {
      data: dataGrid,
      total: dataGrid.length,
    }
    //console.log("setDataXuatKho = ", this.gridDataXuatKho, this.gridResult);
    // this.gridResult.setDataSource();
    this.refreshGrid();
  }

  setDataGrid1() {
    if (this.grid1 == undefined) return;
    let lstId: Array<string> = new Array<string>();
    for (let i = 0; i < this.lstXuatKho.length; i++) {
      lstId.push(this.lstXuatKho[i].Id);
    }

    this.grid1._additionalSearchString = this.xuatKho.KhoXuatId + "|" + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
    this.grid1.setDataSource();
  }

  refreshGrid() {
    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridResult != undefined) {
      this.gridResult.setDataSource();
    }
  }

  getSharedData() {
    this.xuatKho.IsXuatKhac = this.xuatKhac;
    this.xuatKho.XuatKhoVatTuChiTiets = this.lstXuatKho;
    return this.xuatKho;
  }

  nhapKhoChange($event) {
    //console.log("nhapKhoChange = ", $event, this.xuatKho.KhoDuocPhamXuatId,this.dialogRef);
    if (this.dialogRef == undefined || this.dialogRef == null) {
      this.nhapKhoIdValuePrevious = $event;
    }
  }

  clearSearch2() {
    if (this.searchString2 == "" || this.searchString2 == null) {
      this.lstXuatKhoDisplay = JSON.parse(JSON.stringify(this.lstXuatKho));
      this.setDataXuatKho();
    }
  }

  TimKiem2() {
    if (this.searchString2 == undefined || this.searchString2 == null) {
      this.setDataXuatKho();
    }
    else {
      let search = this.searchString2.toLowerCase().trim();
      this.lstXuatKhoDisplay = this.lstXuatKho.filter(o => o.TenVatTu.toLowerCase().trim().indexOf(search) != -1
        || o.DVT.toLowerCase().trim().indexOf(search) != -1 || o.Loai.toLowerCase().trim().indexOf(search) != -1
        || o.SoLuongTon.toString().toLowerCase().trim().indexOf(search) != -1
        || o.SoLuongTonDisplay.toLowerCase().trim().indexOf(search) != -1
        || o.MaVatTu.toLowerCase().trim().indexOf(search) != -1);
      this.setDataXuatKho();
    }
  }

  capNhatGrid2() {
    this.gridDataXuatKho = null;
    let dataGrid = this.lstXuatKhoDisplay;

    this.gridDataXuatKho = {
      data: dataGrid,
      total: dataGrid.length,
    }
    this.refreshGrid();
  }

  onKey2(event: any) {
    if (event.keyCode == 13) {
      this.TimKiem2();
    }
  }

  clearSearch() {
    if (this.searchString == "" || this.searchString == null) {
      this.gridVatTu.searchString = "";
      this.gridVatTu.search();
    }
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.TimKiem();
    }
  }

  TimKiem() {
    if (this.gridVatTu == null) { return; }
    const lstId: Array<string> = new Array<string>();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.lstXuatKho.length; i++) {
      lstId.push(this.lstXuatKho[i].Id);
    }

    this.gridVatTu.searchString = this.searchString;
    this.gridVatTu._additionalSearchString = this.xuatKho.KhoXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);

    this.gridVatTu.search();
  }

  xuatKhoChange($event) {
    //console.log("xuatKhoChange = ", $event, this.xuatKho, this.lstXuatKho, this.dialogRef);
    this.xuatKho.KhoNhapId = null;

    if (this.lstXuatKho != null && this.lstXuatKho != undefined && this.lstXuatKho.length > 0) {
      let khoXuatIdClone = JSON.parse(JSON.stringify(this.khoXuatIdValuePrevious));

      if (this.dialogRef == undefined || this.dialogRef == null) {
        this.dialogRef = this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: NhapXuatKhoMessage.MessageConfirmKhoXuatChange }
        }).afterClosed().subscribe(result => {
          this.dialogRef = null;
          if (result == "Yes") {
            this.lstDaChon = new Array<DaSuaSoLuongXuat>();
            this.khoXuatIdValuePrevious = $event;
            this.xuatKho.KhoXuatId = $event;
            this.lstXuatKho = new Array<VatTuXuatGridVo>();
            this.lstXuatKhoDisplay = new Array<VatTuXuatGridVo>();
            this.searchString2 = null;
            this.TimKiem2();
            if ($event != undefined) {
              this.apiService.post<any>("XuatKhoVatTu/GetLoaiKhoVatTu/?id=" + $event).subscribe(
                resultData => {
                  if (resultData != undefined && resultData != null) {
                    this.themVatTu.loaiKhoVatTuXuat = resultData;
                    this.xuatKho.LoaiKhoVatTuXuat = resultData;
                  }
                },
                () => {
                });
            }
            else {
              this.xuatKho.LoaiXuatKho = null;
              this.clearThongTinChiTiet();
            }
          }
          else {
            this.xuatKho.KhoXuatId = khoXuatIdClone;
            this.xuatKho.KhoNhapId = this.nhapKhoIdValuePrevious;
          }

        });
      }


    }
    else {
      this.lstDaChon = new Array<DaSuaSoLuongXuat>();
      this.setDefaultNullForGrid();
      if ($event != undefined) {

        this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));

        this.apiService.post<any>("XuatKhoVatTu/GetLoaiKhoVatTu/?id=" + $event).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.themVatTu.loaiKhoVatTuXuat = resultData;
              this.xuatKho.LoaiKhoVatTuXuat = resultData;
            }
          },
          () => {
          });
      }
      else {
        this.khoXuatIdValuePrevious = null;
      }
    }

  }

  Them() {
    this.validationErrors = null;
    let check = this.dataForGrid.filter(obj => obj.VatTuId == this.themVatTu.VatTuId);
    if (check.length == 0) {
      this.apiService.post<XuatKhoVatTuChiTiet>("XuatKhoVatTu/GetVatTu", this.themVatTu).subscribe(
        resultData => {
          //this.themDuocPham.soLuongTon = resultData;
          if (resultData != undefined && resultData != null) {
            this.clearThongTinChiTiet();
            this.dataForGrid.push(resultData);
            //console.log("GetDuocPham", this.dataForGrid, this.dataForGrid.length)

            this.gridDataSource = {
              data: this.dataForGrid,
              total: this.dataForGrid.length
            }
          }

        },
        (err: any) => {
          //this.validationErrors = err.ValidationErrors;
          if (err != undefined && err.ValidationErrors != null) {
            this.validationErrors = err.ValidationErrors;
          }
          else if (err != undefined && err.Errors == null) {
            //self.validationErrors.push({ "Message": err.Message });
            this.notificationService.showError(err.Message);
          }
          //console.log("error = ", err)
        });

    }


  }


  Sua() {
    //console.log(this.isIdNeedUpdate);
    this.validationErrors = null;
    this.apiService.post<XuatKhoVatTuChiTiet>("XuatKhoVatTu/GetVatTu", this.themVatTu).subscribe(
      resultData => {

        if (resultData != undefined && resultData != null) {
          let index = this.dataForGrid.find(obj => obj.VatTuId == this.isIdNeedUpdate);
          this.dataForGrid[this.dataForGrid.indexOf(index)] = resultData
          //console.log(this.dataForGrid);
          this.gridDataSource = {
            data: this.dataForGrid,
            total: this.dataForGrid.length
          }
          this.disableUpdateGrid();
        }

      },
      (err: any) => {
        //this.validationErrors = err.ValidationErrors;
        if (err != undefined && err.ValidationErrors != null) {
          this.validationErrors = err.ValidationErrors;
        }
        else if (err != undefined && err.Errors == null) {
          //self.validationErrors.push({ "Message": err.Message });
          this.notificationService.showError(err.Message);
        }
        //console.log("error = ", err)
      });
  }

  huy() {
    this.showFormDetail = false;
    this.disableUpdateGrid();
  }

  disableUpdateGrid() {
    this.isUpdateGrid = false;
    this.isIdNeedUpdate = null;
    this.clearThongTinChiTiet();
  }

  clearThongTinChiTiet() {
    this.themVatTu = new ThemVatTu();
    this.themVatTu.loaiKhoVatTuXuat = this.xuatKho.LoaiKhoVatTuXuat;
    this.themVatTu.loaiXuatKho = this.xuatKho.LoaiXuatKho;
    //console.log("clearThongTinChiTiet = ", this.themDuocPham.loaiXuatKho, this.xuatKho.LoaiXuatKho);
  }


  addOn(dataItem: VatTuXuatGridVo) {
    //console.log("addOn = ", dataItem);
    let itemExists = this.lstXuatKho.find(o => o.Id == dataItem.Id);
    if (itemExists == undefined) {

      //set sl xuat
      //dataItem.SoLuongXuat = dataItem.SoLuongTon;

      this.lstXuatKhoDisplay.push(dataItem);
      this.lstXuatKho.push(dataItem);

      this.TimKiem2();
    }
  }

  removeOn(dataItem: VatTuXuatGridVo) {
    this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
    this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o != dataItem);
    this.removeSoLuongDaChon(dataItem.Id);
    this.TimKiem2();
  }

  SoLuongXuatGrid1Change(soLuong: number, dataItem: any) {
    if (soLuong != undefined && soLuong != null) {
      dataItem.ThanhTien = soLuong * dataItem.DonGia;
    }
    else {
      dataItem.ThanhTien = 0;
    }
    this.updateSoLuongDaChon(dataItem.Id, soLuong);
  }

  updateSoLuongDaChon(id, soLuong) {
    if (this.lstDaChon != undefined) {
      let index = this.lstDaChon.filter(o => o.Id == id);
      if (index != null && index != undefined && index.length > 0) {
        index[0].SoLuongXuat = soLuong;
      }
      else {
        let data: DaSuaSoLuongXuat = new DaSuaSoLuongXuat();
        data.SoLuongXuat = soLuong;
        data.Id = id;
        this.lstDaChon.push(data);
      }
    }

    //console.log("updateSoLuongDaChon = ", this.lstDaChon);
  }

  removeSoLuongDaChon(id) {
    if (this.lstDaChon != undefined) {
      this.lstDaChon = this.lstDaChon.filter(o => o.Id != id);
    }

    //console.log("removeSoLuongDaChon = ", this.lstDaChon);
  }

  addingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  addOnGroup(dataItem: any) {
    //console.log("addOnGroup = ", dataItem);

    let model = new GetVatTuOnGroupModel();
    model.Id = dataItem.items[0].LoaiSuDung;
    model.KhoXuatId = this.xuatKho.KhoXuatId;
    model.SearchString = this.searchString;
    model.ListDaChon = this.lstDaChon;
    this.addingPage();
    this.apiService.post<VatTuXuatGridVo[]>("XuatKhoVatTu/GetVatTuOnGroup", model).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.closepopupLoadingData();
          resultData.forEach(e => {
            let itemExists = this.lstXuatKho.find(o => o.Id == e.Id);
            if (itemExists == undefined) {

              //set sl xuat
              //e.SoLuongXuat = e.SoLuongTon;

              this.lstXuatKho.push(e);
              this.lstXuatKhoDisplay.push(e);
            }
          });
          this.TimKiem2();
        }
        else {
        }
      },
      (err: any) => {
        if (err != undefined && err.ValidationErrors != null) {
          this.validationErrors = err.ValidationErrors;
        }
        else if (err != undefined && err.Errors == null) {
          this.notificationService.showError(err.Message);
        }
        this.closepopupLoadingData();
      });
  }

  removeOnGroup(dataItem) {

    dataItem.items.forEach(e => {
      this.removeSoLuongDaChon(e.Id);
    });

    this.lstXuatKho = this.lstXuatKho.filter(o => o.LoaiSuDung != dataItem.items[0].LoaiSuDung);
    this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o.LoaiSuDung != dataItem.items[0].LoaiSuDung);

    this.TimKiem2();
  }

  // SoLuongXuatChange(event, data) {
  //   //console.log("SoLuongXuatChange = ", event, data);
  //   let itemDisplay = this.lstXuatKhoDisplay.filter(o => o == data);
  //   let item = this.lstXuatKhoDisplay.filter(o => o == data);
  //   if (itemDisplay != undefined) {
  //     itemDisplay[0].SoLuongXuat = event;
  //   }
  //   if (item != undefined) {
  //     item[0].SoLuongXuat = event;
  //   }
  // }

  SoLuongXuatChange(soLuong: number, dataItem: any) {
    // //console.log("SoLuongXuatChange = ", event, data);
    // let itemDisplay = this.lstXuatKhoDisplay.filter(o => o == data);
    // let item = this.lstXuatKhoDisplay.filter(o => o == data);
    // if (itemDisplay != undefined) {
    //   itemDisplay[0].SoLuongXuat = event;
    // }
    // if (item != undefined) {
    //   item[0].SoLuongXuat = event;
    // }
    if (soLuong != undefined && soLuong != null) {
      dataItem.ThanhTien = soLuong * dataItem.DonGia;
    }
    else {
      dataItem.ThanhTien = 0;
    }
  }

  updateGrid(vatTuId: number) {
    let item = this.dataForGrid.filter(obj => obj.VatTuId == vatTuId);

    //console.log("UpdateGrid = ", item, duocPhamId);
    this.themVatTu.VatTuId = item[0].VatTuId;
    this.themVatTu.ChatLuong = item[0].DatChatLuong == true ? 1 : 0;
    this.themVatTu.SoLuongXuat = item[0].TongSoLuongXuat;
    this.themVatTu.KhoId = this.xuatKho.KhoXuatId;
    this.themVatTu.DonGia = item[0].DonGiaBan;
    this.themVatTu.VAT = item[0].VAT;
    this.themVatTu.ChietKhau = item[0].ChietKhau;
    this.enableUpdateGird(vatTuId);
    this.apiService.post<number>("XuatKhoVatTu/GetSoLuongTon", this.themVatTu).subscribe(
      resultData => {
        // console.log("GetSoLuongTon", resultData)
        this.themVatTu.SoLuongTon = resultData;
        this.showFormDetail = true;
      },
      () => {
        //console.log("error")
      });
  }

  enableUpdateGird(id: number) {
    this.isUpdateGrid = true;
    this.isIdNeedUpdate = id;
  }

  removeGrid(vatTuId: number) {
    //console.log(duocPhamId);
    let index = this.dataForGrid.find(obj => obj.VatTuId == vatTuId);
    this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1)
    //console.log(this.dataForGrid);
    this.gridDataSource = {
      data: this.dataForGrid,
      total: this.dataForGrid.length
    }
  }

  onDataBoundChildGrid1(data: any) {
    this.dataToSumThanhTienGrid1 = data.Data;
  }

}
