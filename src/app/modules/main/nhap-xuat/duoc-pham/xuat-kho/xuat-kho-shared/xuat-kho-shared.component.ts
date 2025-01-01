import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, ViewRef, AfterContentInit, AfterViewInit, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { XuatKho, XuatKhoDuocPhamChiTiet, ThemDuocPham, DuocPhamXuatGridVo } from '../xuat-kho.model';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { XuatKhoDuocPham, EnumLoaiKhoDuocPham } from 'src/app/shared/enum/kho.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import { State, process, DataResult } from '@progress/kendo-data-query';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { SelectAllCheckboxState } from '@progress/kendo-angular-grid';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import icRight from '@iconify/icons-ic/chevron-right';
import icRightLast from '@iconify/icons-ic/last-page';
import icLeft from '@iconify/icons-ic/chevron-left';
import icLeftLast from '@iconify/icons-ic/first-page';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { NhapXuatKhoMessage, TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';
import { DaSuaSoLuongXuat, GetDuocPhamOnGroupModel } from '../../yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model';

declare var $: any;
@Component({
  selector: 'app-xuat-kho-shared',
  templateUrl: './xuat-kho-shared.component.html',
  styleUrls: ['./xuat-kho-shared.component.scss']
})
export class XuatKhoSharedComponent implements OnInit, AfterViewInit, AfterContentInit {


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

  xuatKho: XuatKho;

  themDuocPham: ThemDuocPham;

  searchString: string = null;
  searchString2: string;
  searchCtrl = new FormControl;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridResultColumns: any[] = [];
  gridDataSource: any;

  isUpdateGrid: boolean = false;
  isIdNeedUpdate: number = null;
  popupLoadingData: any = null;

  dataForGrid: XuatKhoDuocPhamChiTiet[] = [];

  validationErrors: any[] = [];

  lstXuatKhoDuocPhamChiTietToUpdate: XuatKhoDuocPhamChiTiet[] = [];

  isValidateUpdate: boolean = true;

  urlGetData: string = "XuatKhoDuocPham/GetAllDuocPhamData";
  urlGetTotal: string = "XuatKhoDuocPham/GetAllDuocPhamTotal";

  //gridDataXuatKho: DataResult = null;
  gridDataXuatKho: any;

  dialogRef: any;


  public checkAll: boolean = null;

  theFistLoadKhoXuat: boolean = true;
  khoXuatIdValuePrevious: number = null;
  nhapKhoIdValuePrevious: number = null;

  // groups: GroupDescriptor[] = [{ field: 'TenNhom' }];
  groups: GroupDescriptor[] = [{ field: 'TenNhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  lstDaChon: DaSuaSoLuongXuat[] = new Array<DaSuaSoLuongXuat>();

  // dataChecked:;

  public selectAllState: SelectAllCheckboxState = 'unchecked';

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('gridDuocPham', { static: true }) gridDuocPham: GridComponent;
  @ViewChild('gridResult', { static: true }) gridResult: GridComponent;

  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('tenNhom2GroupHeaderTemplate', { static: true }) tenNhom2GroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('soLuongXuatTemplate', { static: true }) soLuongXuatTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate', { static: true }) transferTemplate: TemplateRef<any>;
  @ViewChild('transferTemplate2', { static: true }) transferTemplate2: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid1Template', { static: true }) thanhTienFooterGrid1Template: TemplateRef<any>;
  @ViewChild('thanhTienFooterGrid2Template', { static: true }) thanhTienFooterGrid2Template: TemplateRef<any>;

  @ViewChild('soLuongXuatGrid1Template', { static: true }) soLuongXuatGrid1Template: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;

  public stateXuatKho: State = {
    skip: 0,
    take: 20000,
    group: [{ field: 'TenNhom' }]
  };

  lstXuatKho: DuocPhamXuatGridVo[] = new Array<DuocPhamXuatGridVo>();
  lstXuatKhoDisplay: DuocPhamXuatGridVo[] = new Array<DuocPhamXuatGridVo>();

  @Input() xemChiTiet: boolean = false;

  @Input() xuatKhac: boolean = false;

  constructor(private route: ActivatedRoute, private dialog: MatDialog
    , private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private authService: AuthService
    , private apiService: ApiService, private notificationService: NotificationService) { }

  ngAfterViewInit() {
    //$("#DpChecked1").prop('checked', true);
  }

  ngAfterContentInit() {
    //$("#DpChecked1").prop('checked', true);
  }
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


  ngOnInit() {


    this.id = this.route.snapshot.params.id;

    this.documentType = DocumentType.XuatKhoDuocPham;

    this.xuatKho = new XuatKho();
    this.xuatKho.HostingName = window.location.protocol + "//" + window.location.host;
    
    this.themDuocPham = new ThemDuocPham();
    //this.addToTest();


    this.gridColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "MaDuocPham", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "TenDuocPham", Title: "Dược phẩm", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
      { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
      { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },

      { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },

    ];


    this.gridResultColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
      { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
      { Field: "MaDuocPham", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "TenDuocPham", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
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

  onDataBoundChildGrid1(data: any) {
    this.dataToSumThanhTienGrid1 = data.Data;
  }

  setNhanVienId() {
    //vì user la nhân viên nên lấy id của nhau
    let user = this.authService.getAccessUser();
    this.xuatKho.NguoiXuatId = user.Id;
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
    if (this.gridDuocPham == undefined) return;
    let lstId: Array<string> = new Array<string>();
    for (let i = 0; i < this.lstXuatKho.length; i++) {
      lstId.push(this.lstXuatKho[i].Id);
    }
    this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + "|" + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
    this.gridDuocPham.setDataSource();
  }

  setDefaultNullForGrid() {
    //let dataNull = new XuatKho();
    //this.dataForGrid = new Array<XuatKhoDuocPhamChiTiet>();
    this.setDataXuatKho();

    //this.refreshGrid();
  }

  Them() {

    this.validationErrors = null;
    let check = this.dataForGrid.filter(obj => obj.DuocPhamId == this.themDuocPham.DuocPhamId);
    if (check.length == 0) {
      this.apiService.post<XuatKhoDuocPhamChiTiet>("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(
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

  refreshGrid() {
    if (!(this.cdRef as ViewRef).destroyed) {
      this.cdRef.detectChanges();
    }

    if (this.gridResult != undefined) {
      this.gridResult.setDataSource();
    }

    // if (this.gridChildDuocPham != undefined) {
    //   this.gridChildDuocPham.setDataSource();
    // }
  }

  getListDuocPham($event: any) {
    //console.log("getListDuocPham = ", $event, this.xuatKho.KhoDuocPhamNhapId);
    this.themDuocPham.DuocPhamId = $event;
    this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
    this.apiService.post<number>("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(
      resultData => {
        //console.log("GetSoLuongTon", resultData)
        this.themDuocPham.SoLuongTon = resultData;

      },
      () => {
        //console.log("error")
      });

    if (this.themDuocPham.loaiKhoDuocPhamXuat == 1 && this.themDuocPham.loaiXuatKho == 1) {
      this.apiService.post<number>("XuatKhoDuocPham/GetDonGiaBan/?duocPhamId=" + $event).subscribe(
        resultData => {
          //console.log("GetSoLuongTon", resultData)
          this.themDuocPham.DonGia = resultData;

        },
        () => {
          //console.log("error")
        });
    }
  }

  getById(id: number) {
    this.baseService.getById<XuatKho>(id).subscribe(resultData => {
      ;

    });
  }

  removeGrid(duocPhamId: number) {
    //console.log(duocPhamId);
    let index = this.dataForGrid.find(obj => obj.DuocPhamId == duocPhamId);
    this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1)
    //console.log(this.dataForGrid);
    this.gridDataSource = {
      data: this.dataForGrid,
      total: this.dataForGrid.length
    }
  }

  updateGrid(duocPhamId: number) {
    let item = this.dataForGrid.filter(obj => obj.DuocPhamId == duocPhamId);

    //console.log("UpdateGrid = ", item, duocPhamId);
    this.themDuocPham.DuocPhamId = item[0].DuocPhamId;
    this.themDuocPham.ChatLuong = item[0].DatChatLuong == true ? 1 : 0;
    this.themDuocPham.SoLuongXuat = item[0].TongSoLuongXuat;
    this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
    this.themDuocPham.DonGia = item[0].DonGiaBan;
    this.themDuocPham.VAT = item[0].VAT;
    this.themDuocPham.ChietKhau = item[0].ChietKhau;
    this.enableUpdateGird(duocPhamId);
    this.apiService.post<number>("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(
      resultData => {
        this.themDuocPham.SoLuongTon = resultData;
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

  disableUpdateGrid() {
    this.isUpdateGrid = false;
    this.isIdNeedUpdate = null;
    this.clearThongTinChiTiet();
  }

  clearThongTinChiTiet() {
    this.themDuocPham = new ThemDuocPham();
    this.themDuocPham.loaiKhoDuocPhamXuat = this.xuatKho.LoaiKhoDuocPhamXuat;
    this.themDuocPham.loaiXuatKho = this.xuatKho.LoaiXuatKho;
    //console.log("clearThongTinChiTiet = ", this.themDuocPham.loaiXuatKho, this.xuatKho.LoaiXuatKho);
  }

  Sua() {
    //console.log(this.isIdNeedUpdate);
    this.validationErrors = null;
    this.apiService.post<XuatKhoDuocPhamChiTiet>("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(
      resultData => {

        if (resultData != undefined && resultData != null) {
          let index = this.dataForGrid.find(obj => obj.DuocPhamId == this.isIdNeedUpdate);
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

  getSharedData() {
    this.xuatKho.IsXuatKhac = this.xuatKhac;
    this.xuatKho.XuatKhoDuocPhamChiTiets = this.lstXuatKho;
    return this.xuatKho;
  }

  nhapKhoChange($event) {
    //console.log("nhapKhoChange = ", $event, this.xuatKho.KhoDuocPhamXuatId,this.dialogRef);
    if (this.dialogRef == undefined || this.dialogRef == null) {
      this.nhapKhoIdValuePrevious = $event;
    }
  }

  xuatKhoChange($event) {
    //console.log("xuatKhoChange = ", $event, this.xuatKho, this.lstXuatKho, this.dialogRef);
    this.xuatKho.KhoDuocPhamNhapId = null;

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
            this.xuatKho.KhoDuocPhamXuatId = $event;
            this.lstXuatKho = new Array<DuocPhamXuatGridVo>();
            this.lstXuatKhoDisplay = new Array<DuocPhamXuatGridVo>();
            this.searchString2 = null;
            this.TimKiem2();
            if ($event != undefined) {
              this.apiService.post<EnumLoaiKhoDuocPham>("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(
                resultData => {
                  if (resultData != undefined && resultData != null) {
                    this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
                    this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
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
            this.xuatKho.KhoDuocPhamXuatId = khoXuatIdClone;
            this.xuatKho.KhoDuocPhamNhapId = this.nhapKhoIdValuePrevious;
          }

        });
      }


    }
    else {
      this.lstDaChon = new Array<DaSuaSoLuongXuat>();
      this.setDefaultNullForGrid();
      if ($event != undefined) {

        this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));

        this.apiService.post<EnumLoaiKhoDuocPham>("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(
          resultData => {
            if (resultData != undefined && resultData != null) {
              this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
              this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
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
      this.lstXuatKhoDisplay = this.lstXuatKho.filter(o => o.TenDuocPham.toLowerCase().trim().indexOf(search) != -1
        || o.DVT.toLowerCase().trim().indexOf(search) != -1 || o.Loai.toLowerCase().trim().indexOf(search) != -1
        || o.SoLuongTon.toString().toLowerCase().trim().indexOf(search) != -1 || o.SoLuongTonDisplay.toLowerCase().trim().indexOf(search) != -1
        || o.MaDuocPham.toLowerCase().trim().indexOf(search) != -1
        || o.SoDangKy.toLowerCase().trim().indexOf(search) != -1);
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
      this.gridDuocPham.searchString = "";
      this.gridDuocPham.search();
    }
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.TimKiem();
    }
  }

  TimKiem() {
    if (this.gridDuocPham == null) { return; }
    const lstId: Array<string> = new Array<string>();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.lstXuatKho.length; i++) {
      lstId.push(this.lstXuatKho[i].Id);
    }

    this.gridDuocPham.searchString = this.searchString;
    this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
    this.gridDuocPham.search();
  }

  addOn(dataItem: DuocPhamXuatGridVo) {
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

  removeOn(dataItem: DuocPhamXuatGridVo) {
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

  addOnGroup(dataItem) {
    //console.log("addOnGroup = ", dataItem);

    let model = new GetDuocPhamOnGroupModel();
    model.Id = dataItem.items[0].DuocPhamBenhVienPhanNhomId;
    model.KhoXuatId = this.xuatKho.KhoDuocPhamXuatId;
    model.SearchString = this.searchString;
    model.ListDaChon = dataItem.items;
    this.addingPage();
    this.apiService.post<DuocPhamXuatGridVo[]>("XuatKhoDuocPham/GetDuocPhamOnGroup", model).subscribe(
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

    this.lstXuatKho = this.lstXuatKho.filter(o => o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId);
    this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId);

    this.TimKiem2();
  }

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
}
