import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChonGoiMarketing, GridGoiMarketingModel, Marketing } from '../../marketing.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icFind from '@iconify/icons-ic/search';
import { TextboxComponent } from 'src/app/shared/component/inputs/textbox/textbox.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BenhNhanTiepNhanBenhNhanViewModel, DataTimKiem, TimKiemBenhNhanGridVo } from '../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model';
import { PopupTimKiemBenhNhanComponent } from '../popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BaseService } from 'src/app/core/services/base.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DangKyGoiMarketingMessage } from 'src/app/shared/configdata/system-message';
import { XuatQuaInPhieuPopupComponent } from '../xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { debug } from 'console';

declare var $: any;

@Component({
  selector: 'app-marketing-shared',
  templateUrl: './marketing-shared.component.html',
  styleUrls: ['./marketing-shared.component.scss']
})
export class MarketingSharedComponent implements OnInit {
  documentType: DocumentType;
  id: number;

  marketing: Marketing = new Marketing();
  chonGoiMarketing: ChonGoiMarketing = new ChonGoiMarketing();

  dataGridMarketing: GridGoiMarketingModel = {
    data: [],
    total: 0
  };

  thongTinTaiKhoanBenhNhan: any;
  modelTimKiemBenhNhan: TimKiemBenhNhanGridVo = new TimKiemBenhNhanGridVo();
  lstBenhNhan: TimKiemBenhNhanGridVo[] = new Array<TimKiemBenhNhanGridVo>();

  totalBenhNhan: number = 0;
  icFind = icFind;

  benhNhanId: number = 0;

  validationErrors: any[] = [];

  gridColumns: any[] = [];
  gridDichVuColumns: any[] = [];
  gridChild2Columns: any[] = [];

  gridDaHoanThanhColumns: any[] = [];

  gridCacDichVuKhuyenMaiColumns: any[] = [];


  icSearch = icSearch;
  searchCtrl = new FormControl;

  urlGetDataGrid: string = "DanhMucMarketing/GetDataThongTinGoiForGridAsync";
  urlGetTotalPageGrid: string = "DanhMucMarketing/GetTotalThongTinGoiPageForGridAsync";

  urlGetDataDaHoanThanhGrid: string = "DanhMucMarketing/GetDataThongTinGoiDaHoanThanhForGridAsync";
  urlGetTotalDaHoanThanhPageGrid: string = "DanhMucMarketing/GetTotalThongTinGoiDaHoanThanhPageForGridAsync";

  urlGetDataGridChild1: string = "DanhMucMarketing/GetDataDichVuGoiForGridAsync";
  urlGetTotalPageGridChild1: string = "DanhMucMarketing/GetTotalDichVuGoiPageForGridAsync";

  urlGetDataGridChild2: string = "DanhMucMarketing/GetDataQuaTangGoiForGridAsync";
  urlGetTotalPageGridChild2: string = "DanhMucMarketing/GetTotalQuaTangGoiPageForGridAsync";


  //Grid bao gồm dv: Khám, Kỹ thuật, Giường
  urlGetDataGridChildDichVuKyThuat: string = "DanhMucMarketing/GetDataCacDichVuTrongGoiForGridAsync";
  urlGetTotalPageGridChildDichVuKyThuat: string = "DanhMucMarketing/GetTotalCacDichVuTrongGoiPageForGridAsync";
  sortChild1: SortDescriptor[] = [{
    field: 'STT',
    dir: 'desc'
  }];

  sort: SortDescriptor[] = [{
    field: 'NhomId',
    dir: 'asc'
  }];

  lstDaChon: number[] = new Array<number>();
  lstDaHoanThanh: number[] = new Array<number>();
  lstExpand: any = new Array<any>();
  lstAppend: any = new Array<number>();
  lstAppend2: any = new Array<number>();
  dataChildCurrent: any;

  dialogRef: any;

  searchStringDefault: string = null;
  searchStringDaHoanThanhDefault: string = null;
  dataToSumThanhTien: any[] = [];

  // groupCacDichVu: GroupDescriptor[] = [{ field: 'Nhom' }];

  groupCacDichVu: GroupDescriptor[] = [
    {
      field: 'Nhom', aggregates: [
        { field: 'ThanhTienTruocCK', aggregate: 'sum' },
        { field: 'ThanhTienSauCK', aggregate: 'sum' }
      ]
    }
  ];

  searchString: string = null;

  @ViewChild('HoVaTenTextbox', { static: false }) HoVaTenTextbox: TextboxComponent;

  @ViewChild('comboboxQuanHuyen', { static: true }) comboboxQuanHuyen: ComboboxComponent;
  @ViewChild('comboboxPhuongXa', { static: true }) comboboxPhuongXa: ComboboxComponent;

  @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('tenGoiDaHoanThanhTemplate', { static: true }) tenGoiDaHoanThanhTemplate: TemplateRef<any>;

  @ViewChild('parentGrid', { static: false }) gridChild: GridComponent;

  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;

  @ViewChild('gridChild2', { static: false }) gridChild2: GridComponent;
  @ViewChild('gridCacDichVus', { static: false }) gridCacDichVus: GridComponent;

  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaCKTemplate', { static: true }) donGiaCKTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  @ViewChild('donGiaTruocCKTemplate', { static: true }) donGiaTruocCKTemplate: TemplateRef<any>;
  @ViewChild('donGiaSauCKTemplate', { static: true }) donGiaSauCKTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTruocCKTemplate', { static: true }) thanhTienTruocCKTemplate: TemplateRef<any>;
  @ViewChild('thanhTienSauCKTemplate', { static: true }) thanhTienSauCKTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTruocCKFooterTemplate', { static: true }) thanhTienTruocCKFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienSauCKFooterTemplate', { static: true }) thanhTienSauCKFooterTemplate: TemplateRef<any>;
  @ViewChild('tongChiFooterTemplate', { static: true }) tongChiFooterTemplate: TemplateRef<any>;

  @ViewChild('thanhTienTruocCKGroupFooterTemplate', { static: true }) thanhTienTruocCKGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienSauCKGroupFooterTemplate', { static: true }) thanhTienSauCKGroupFooterTemplate: TemplateRef<any>;


  @ViewChild('giaGoiTemplate', { static: true }) giaGoiTemplate: TemplateRef<any>;
  @ViewChild('daThuTemplate', { static: true }) daThuTemplate: TemplateRef<any>;
  @ViewChild('daDungTemplate', { static: true }) daDungTemplate: TemplateRef<any>;
  @ViewChild('chuaThuTemplate', { static: true }) chuaThuTemplate: TemplateRef<any>;
  @ViewChild('goiSoSinhTemplate', { static: true }) goiSoSinhTemplate: TemplateRef<any>;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @Input() isUpdate: any;

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTienTruocCK':
        if (this.dataToSumThanhTien.length > 0) {
          return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTienTruocCK: any; }) => sum + item.ThanhTienTruocCK, 0);
        }
      case 'ThanhTienSauCK':
        if (this.dataToSumThanhTien.length > 0) {
          return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTienSauCK: any; }) => sum + item.ThanhTienSauCK, 0);
        }
    }
  };
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private router: Router, private baseService: BaseService, private cdRef: ChangeDetectorRef
    , private notificationService: NotificationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentType = DocumentType.DanhSachMarketing;
    //Template: this.tinhTrangTemplate
    this.gridColumns = [
      { Field: "TenDisplay", Title: "Tên gói", Width: 300, Sortable: true, Template: this.tenGoiTemplate },
      { Field: "GoiSoSinh", Title: "Gói sơ sinh", Width: 100, Sortable: true, Template: this.goiSoSinhTemplate },
      { Field: "TrangThaiGoiDisplay", Title: "Tình Trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "GiaGoi", Title: "Giá Gói", Width: 100, Sortable: true, Template: this.giaGoiTemplate },
      { Field: "BenhNhanDaThanhToan", Title: "Đã Thu", Width: 200, Sortable: true, Template: this.daThuTemplate },
      { Field: "ChuaThu", Title: "Chưa Thu", Width: 150, Sortable: true, Template: this.chuaThuTemplate },
      { Field: "DaDung", Title: "Đã dùng", Width: 150, Sortable: true, Template: this.daDungTemplate },
      { Field: "NgayDangKyDisplay", Title: "Ngày Đăng ký", Width: 150, Sortable: true },
      { Field: "NguoiDangKy", Title: "Người đăng ký", Width: 150, Sortable: true },
      { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate },
    ];

    this.gridDichVuColumns = [
      { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
      { Field: "Nhom", Title: "Nhóm", Sortable: false, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 100, Sortable: false },
      { Field: "Ten", Title: "Tên Dịch Vụ", MinWidth: 150, Sortable: false, ShowTooltip: true },
      { Field: "LoaiGia", Title: "Loại Giá", Width: 150, Sortable: false },
      { Field: "SoLan", Title: "SL", Width: 100, Sortable: false },
      { Field: "DonGiaTruocCK", Title: "Đơn Giá trước CK", Width: 200, Sortable: false, Template: this.donGiaTruocCKTemplate },
      { Field: "DonGiaSauCK", Title: "Đơn Giá sau ck", Width: 200, Sortable: false, Template: this.donGiaSauCKTemplate, TemplateFooter: this.tongChiFooterTemplate },
      { Field: "ThanhTienTruocCK", Title: "Thành Tiền trước ck", Width: 150, Sortable: false, Template: this.thanhTienTruocCKTemplate, TemplateFooter: this.thanhTienTruocCKFooterTemplate, TemplateGroupFooter: this.thanhTienTruocCKGroupFooterTemplate },
      { Field: "ThanhTienSauCK", Title: "Thành Tiền sau ck", Width: 150, Sortable: false, Template: this.thanhTienSauCKTemplate, TemplateFooter: this.thanhTienSauCKFooterTemplate, TemplateGroupFooter: this.thanhTienSauCKGroupFooterTemplate },
    ];

    this.gridChild2Columns = [
      { Field: "Ten", Title: "Quà Tặng", MinWidth: 150, Sortable: false },
      { Field: "SoLuongTonDisplay", Title: "SL Tồn", Width: 100, Sortable: false },
      { Field: "SoLuongDisplay", Title: "SL Xuất", Width: 100, Sortable: false },
      { Field: "GhiChu", Title: "Ghi Chú", Width: 250, Sortable: false },
      { Field: "SoPhieuXuat", Title: "Phiếu Xuất", Width: 100, Sortable: false },
    ];

    this.gridDaHoanThanhColumns = [
      { Field: "TenGoi", Title: "Tên gói", MinWidth: 90, Sortable: true, Template: this.tenGoiDaHoanThanhTemplate },
    ];

    this.gridCacDichVuKhuyenMaiColumns = [
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên dịch vụ", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLan", Title: "SL", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
      { Field: "DonGiaKhuyenMai", Title: "Đơn giá KM", Width: 80, Sortable: false, Template: this.donGiaCKTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate },
      { Field: "GhiChu", Title: "Ghi chú", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 70, Sortable: false, ShowTooltip: true },
    ];

    if (this.id !== undefined && this.id !== null) {
      this.getById(this.id);
      //this.isCreate = false;
    }
  }

  changeSoLuongMarketing(event: any) {
    if (event !== undefined && event !== null) {
      this.chonGoiMarketing.SoLuong = event;
    } else {
      this.chonGoiMarketing.SoLuong = 1;
    }
  }

  themGoiMarketing() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.chonGoiMarketing.GoiMarketingId == undefined &&
      this.chonGoiMarketing.GoiMarketingId == null) {
      this.validationErrors.push({
        Message: "Vui lòng chọn marketing",
        Field: "GoiMarketingId",
      });

    }
    //Kiểm Tra this.chonGoiMarketing.GoiMarketingId lấy thông tin gói đó lên AddThongTinGoiMarketing
    if (this.validationErrors.length == 0) {
      this.apiService.post<any[]>("DanhMucMarketing/AddThongTinGoiMarketing", this.chonGoiMarketing).subscribe(
        resultData => {
          if (resultData.length > 0) {
            resultData.forEach(dataItem => {
              this.notificationService.showSuccess("Thêm gói thành công.");
              this.dataGridMarketing.data.push(dataItem);             
              this.chonGoiMarketing = new ChonGoiMarketing();
            });
            this.dataGridMarketing.total = this.dataGridMarketing.data.length;
          }
          this.gridChild.search();
        },
        (err: any) => {
          if (err != undefined && err.ValidationErrors != null) {
            this.validationErrors = err.ValidationErrors;
          }
          else if (err != undefined && err.Errors == null) {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }

  getThongGoiMRTBenhNhan(benhNhanId: any) {
    this.apiService.post<any>("DanhMucMarketing/GetThongGoiMRTBenhNhan?benhNhanId=" + benhNhanId).subscribe(
      resultData => {
        let dsChon = [];
        this.dataGridMarketing.data = resultData.Data;
        this.dataGridMarketing.total = resultData.TotalRowCount;
        if (resultData.length > 0) {
          resultData.forEach(dataItem => {
            dsChon.push(dataItem.Id);
          });
        }
        this.gridChild.search();
        this.marketing.LstDaChon = dsChon;
      }
      ,
      (err: any) => {
        if (err != undefined && err.ValidationErrors != null) {
          this.validationErrors = err.ValidationErrors;
        }
        else if (err != undefined && err.Errors == null) {
          this.notificationService.showError(err.Message);
        }
      });
  }

  onDataBoundGrid(dataItem: any) {
    this.dataToSumThanhTien = dataItem.Data;
  }

  XuatQua(dataItem: Event) {
    let elementId = (dataItem.currentTarget as Element).id;
    //console.log("XuatQua = ", elementId, dataItem);

    var self = this;

    if (this.dialogRef == undefined || this.dialogRef == null) {
      this.dialogRef = this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: DangKyGoiMarketingMessage.MessageConfirmXuatQua }
      }).afterClosed().subscribe(result => {
        this.dialogRef = null;
        if (result == "Yes") {

          self.apiService.post<any>("DanhMucMarketing/XuatQua?benhNhanId=" + self.id + "&chuongTrinhGoiDichVuId=" + elementId).subscribe(
            resultData => {

              if (resultData == null || resultData == undefined) {
                self.notificationService.showSuccess(DangKyGoiMarketingMessage.MessageDaXuat);
                //self.gridChild2.search();
              }
              else {
                self.dialog.open(XuatQuaInPhieuPopupComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: resultData,
                }).afterClosed().subscribe(() => {
                  self.gridChild2.search();
                });
              }

            },
            (err: any) => {
              //this.validationErrors = err.ValidationErrors;
              if (err != undefined && err.ValidationErrors != null) {
                self.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                self.notificationService.showError(err.Message);
              }
              //console.log("error = ", err)
            });

        }
        else {

        }

      });
    }

  }
  getById(id: number) {
    this.baseService.getById<Marketing>(id).subscribe(resultData => {
      this.marketing = resultData;
      this.marketing.LstDaChon = resultData.LstDaChon;
      this.marketing.LstDaHoanThanh = resultData.LstDaHoanThanh;
      this.lstDaChon = resultData.LstDaChon;
      this.lstDaHoanThanh = resultData.LstDaHoanThanh;

      if (this.marketing.BenhNhanId > 0) {
        this.getThongGoiMRTBenhNhan(this.marketing.BenhNhanId);
      }

      // let self = this;
      // setTimeout(function () {
      //   self.Timkiem();
      // }, 500);
      if (this.id !== undefined && this.id !== null) {
        this.searchStringDefault = this.id + "|" + JSON.stringify(this.lstDaChon);
        this.searchStringDaHoanThanhDefault = this.id + "|" + JSON.stringify(this.lstDaHoanThanh);
      }
      else {
        this.searchStringDefault = null + "|" + JSON.stringify(this.lstDaChon);
        this.searchStringDaHoanThanhDefault = this.id + "|" + JSON.stringify(this.lstDaHoanThanh);
      }

    });
  }

  getSharedData() {
    //this.marketing.LstDaChon = this.lstDaChon;
    //kiểm tra trong grid có bao nhiêu data dc chọn
    let danhSachDaChon = [];
    if (this.dataGridMarketing.data.length > 0) {
      this.dataGridMarketing.data.forEach(element => {
        danhSachDaChon.push(element.Id);
      });
    }
    this.marketing.LstDaChon = danhSachDaChon;
    return this.marketing;
  }



  extDetailExpand(event) {
    this.dataChildCurrent = event.dataItem;
  }

  checkedChange(event, dataItem) {
    if (event == true) {
      this.addListDaChon(dataItem.Id);
    }
    else {
      this.removeListDaChon(dataItem.Id);
    }
    //console.log("checkedChange = ", event, dataItem);
  }

  clearSearch() {
    if ((this.searchString == "" || this.searchString == null) && this.gridChild != undefined) {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
  }

  onKeyGrid(event: any) {
    if (event.keyCode == 13) {
      this.Timkiem();
    }
  }

  Timkiem() {
    if (this.id !== undefined && this.id !== null) {
      this.gridChild._additionalSearchString = this.id + "|" + JSON.stringify(this.lstDaChon);
    }
    else {
      this.gridChild._additionalSearchString = null + "|" + JSON.stringify(this.lstDaChon);
    }
    this.gridChild.searchString = this.searchString;
    this.gridChild.search();
  }


  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    }
  }

  postTimKiem: any = null;
  timeOutTimKiem: any = null;
  timKiemBenhNhan(model: TimKiemBenhNhanGridVo) {
    var self = this;
    if (self.timeOutTimKiem != null) {
      clearTimeout(self.timeOutTimKiem);
      self.timeOutTimKiem = null;
    }
    self.timeOutTimKiem = setTimeout(function () {
      self.setModelTimKiemBenhNhan();
      self.lstBenhNhan = new Array<TimKiemBenhNhanGridVo>();
      self.totalBenhNhan = 0;
      if (self.postTimKiem != null) {
        self.postTimKiem.unsubscribe();
        self.postTimKiem = null;
      }
      self.postTimKiem = self.apiService.post<Array<TimKiemBenhNhanGridVo>>("TiepNhanBenhNhan/GetBenhNhanTimKiem", model).subscribe(
        resultData => {
          //console.log("timKiemBenhNhan = ", resultData);
          self.lstBenhNhan = resultData;
          if (resultData != undefined && resultData != null) {
            self.totalBenhNhan = resultData.length;
            let index = 1;
            self.lstBenhNhan.forEach(obj => {
              obj.STT = index;
              index = index + 1;
            });
          }
          //console.log("timKiemBenhNhan = ", this.lstBenhNhan);
        },
        () => {
        });
    }, 500);
  }

  setModelTimKiemBenhNhan() {
    this.modelTimKiemBenhNhan.HoTen = this.marketing.HoTen;
    this.modelTimKiemBenhNhan.NgaySinhDisplay = this.marketing.NgayThangNamSinh;
    this.modelTimKiemBenhNhan.NamSinh = this.marketing.NamSinh;
    //this.modelTimKiemBenhNhan.GioiTinh = this.tiepNhanBenhNhan.GioiTinh;
    this.modelTimKiemBenhNhan.SoChungMinhThu = this.marketing.SoChungMinhThu;
    this.modelTimKiemBenhNhan.SoDienThoai = this.marketing.SoDienThoai;
    this.modelTimKiemBenhNhan.DiaChi = this.marketing.DiaChi;
  }
  changeHoTen(event){
    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
  }
  timKiemBenhNhanPopup() {
    let dataTimKiem = new DataTimKiem();
    dataTimKiem.searchBenhNhan = new TimKiemBenhNhanGridVo();
    dataTimKiem.searchBenhNhan = this.modelTimKiemBenhNhan; // lí do model gán == null không bt lý do
    
    // search 23062021 
    let dataSearch={
       MaBN:  null,
       MaBHYT:  null,
       BHYTMaSoThe:  null,
       HoTen:  this.marketing.HoTen,
       NgaySinh: this.marketing.NgaySinh,
       NgaySinhDisplay: this.marketing.NgaySinh == null ? this.modelTimKiemBenhNhan.NgaySinhDisplay:this.marketing.NgaySinh,
       GioiTinh:  null,
       GioiTinhDisplay:  null,
       SoChungMinhThu:  this.marketing.SoChungMinhThu,
       SoDienThoai:  this.marketing.SoDienThoai != null ? this.marketing.SoDienThoai  :this.modelTimKiemBenhNhan.SoDienThoai,
       DiaChi:  this.marketing.DiaChi,
       Id: null,
       STT:  null,
       ThangSinh: this.marketing.ThangSinh,
       NamSinh:  this.marketing.NamSinh,
       NgaySinhFormat:  this.marketing.NgaySinh != null &&
                        this.marketing.ThangSinh !=  null && 
                        this.marketing.NamSinh != null ? CommonService.formatDateTime(new Date(this.marketing.NgaySinh,this.marketing.ThangSinh,this.marketing.NamSinh), "dd/mm/yyyy")
                                                       :null
    };
    //
    dataTimKiem.searchBenhNhan = dataSearch;
    dataTimKiem.data = new Array<TimKiemBenhNhanGridVo>();
    dataTimKiem.searchBenhNhan
    let dialogRef = this.dialog.open(PopupTimKiemBenhNhanComponent, {
      disableClose: false,
      width: '1400px',
      height: '600px',
      data: dataTimKiem,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null && result != undefined) {
        this.checkExistYeuCauGoiDichVu(result.Id);
        this.validationErrors = null;
        this.setThongTinTaiKhoanBenhNhan(result.Id);

        //set benh nhan
        this.marketing.BenhNhanId = result.Id;
        this.benhNhanId = result.Id;
        this.setValueFromBenhNhanToYeuCauTiepNhan(result);

        this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
      }
    });
  }

  xoaChuongTrinh(dataItem) {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: `Bạn có muốn xoá gói ${dataItem.TenDisplay} không?` }
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.notificationService.showSuccess("Xóa gói thành công.");
        this.dataGridMarketing.data.splice(this.dataGridMarketing.data.findIndex((x: any) => x == dataItem), 1);
      }
    });
  }

  checkExistYeuCauGoiDichVu(id: number) {
    this.apiService.post<any>("DanhMucMarketing/GetYeuCauGoiDichVuOfBenhNhan?id=" + id).subscribe(
      resultData => {
        this.dialog.closeAll();
        if (resultData == true) {
          this.router.navigate(['marketing/dang-ky-goi-marketing/chinh-sua/' + id]);
        }
      },
      () => {
        //return null;
        //console.log("error")
      });
  }

  setThongTinTaiKhoanBenhNhan(id: number) {
    this.apiService.post<any>("TiepNhanBenhNhan/GetThongTinTaiKhoanBenhNhan?id=" + id).subscribe(
      resultData => {
        this.thongTinTaiKhoanBenhNhan = resultData;

      },
      () => {
        //return null;
        //console.log("error")
      });
  }

  setValueFromBenhNhanToYeuCauTiepNhan(benhNhan: BenhNhanTiepNhanBenhNhanViewModel) {
    this.marketing.NgaySinh = benhNhan.NgaySinh;
    this.marketing.NamSinh = benhNhan.NamSinh;
    this.marketing.ThangSinh = benhNhan.ThangSinh;

    this.marketing.NgayThangNamSinh = benhNhan.NgayThangNamSinh;
    this.marketing.HoTen = benhNhan.HoTen;

    this.marketing.PhuongXaId = benhNhan.PhuongXaId;
    this.marketing.TinhThanhId = benhNhan.TinhThanhId;
    this.marketing.QuanHuyenId = benhNhan.QuanHuyenId;
    this.marketing.QuocTichId = benhNhan.QuocTichId;
    //this.tiepNhanBenhNhan.DanTocId = benhNhan.DanTocId;
    this.marketing.DiaChi = benhNhan.DiaChi;
    this.marketing.SoDienThoai = benhNhan.SoDienThoai;
    this.marketing.SoChungMinhThu = benhNhan.SoChungMinhThu;
    this.marketing.Email = benhNhan.Email;
    this.marketing.NgheNghiepId = benhNhan.NgheNghiepId;
    this.marketing.GioiTinh = benhNhan.GioiTinh;
    //this.tiepNhanBenhNhan.BHYTMaKhuVuc = benhNhan.BHYTMaKhuVuc;
    this.marketing.NoiLamViec = benhNhan.NoiLamViec;

    //this.marketing.BenhNhanId = benhNhan.id
  }

  PhuongXaChange($event) {
    this.marketing.PhuongXaId = $event;
    if ($event != null && $event != undefined) {
      this.apiService.post<any>("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + $event).subscribe(
        resultData => {
          this.marketing.TinhThanhId = resultData.TinhThanhId;
          this.marketing.QuanHuyenId = resultData.QuanHuyenId;
          this.comboboxQuanHuyen.getDataForLookup();
        },
        () => {
        });
    }
    else {
      this.marketing.TinhThanhId = null;
      this.marketing.QuanHuyenId = null;
    }

  }

  QuanHuyenChange($event) {
    this.marketing.QuanHuyenId = $event;
    this.marketing.PhuongXaId = null;
  }

  TinhThanhPhoChange($event) {
    this.marketing.TinhThanhId = $event;
    this.marketing.QuanHuyenId = null;
    this.marketing.PhuongXaId = null;

  }

  addListDaChon(id: number) {
    if (this.lstDaChon != undefined) {
      let index = this.lstDaChon.filter(o => o == id);
      if (index == null || index == undefined || index.length == 0) {
        this.lstDaChon.push(id);
      }
    }
    //console.log("addListDaChon = ", this.lstDaChon);
  }

  removeListDaChon(id: number) {
    if (this.lstDaChon != undefined) {
      let index = this.lstDaChon.filter(o => o == id);
      if (index != null && index != undefined && index.length > 0) {
        this.lstDaChon = this.lstDaChon.filter(o => o != id);
      }

    }
    //console.log("removeListDaChon = ", this.lstDaChon);
  }

  ThongTinBenhNhanNgaySinhChange($event) {
    if (this.marketing.NgayThangNamSinh != null) {
      this.marketing.NamSinh = this.marketing.NgayThangNamSinh.getFullYear();
    }
    if ($event == null || $event == undefined) {
      this.marketing.NamSinh = null;
    }
    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
  }
  changeSDT(event) {
    if (this.marketing.SoDienThoai != null) {
      this.marketing.SoDienThoai = event + "";
    }
    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
  }
  changDiaChi(event) {
    if (this.marketing.DiaChi != null) {
      this.marketing.DiaChi = event + "";
    }
    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
  }
  changCMND(event) {
    if (this.marketing.SoChungMinhThu != null) {
      this.marketing.SoChungMinhThu = event + "";
    }
    this.timKiemBenhNhan(this.modelTimKiemBenhNhan);
    //console.log("ThongTinBenhNhanNgaySinhChange = ", $event, "type of: ", typeof($event));
  }
}
