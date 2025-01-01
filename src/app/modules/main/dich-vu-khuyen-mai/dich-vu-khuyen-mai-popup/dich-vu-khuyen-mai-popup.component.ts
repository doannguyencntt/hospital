import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ChiDinhGoiDichVuKhuyenMaiTheoBenhNhan, ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan, GoiDichVuKhuyenMaiMarketingDangChon } from '../dich-vu-khuyen-mai.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-dich-vu-khuyen-mai-popup',
  templateUrl: './dich-vu-khuyen-mai-popup.component.html',
  styleUrls: ['./dich-vu-khuyen-mai-popup.component.scss']
})
export class DichVuKhuyenMaiPopupComponent implements OnInit {
  gridColumns: any[] = [];
  gridColumnsDetail: any[] = [];
  additionalSearchString: string = null;
  icClose = icClose;
  documentType: DocumentType;
  sort: SortDescriptor[] = [
    {
      field: "Ten",
      dir: "asc",
    },
  ];
  urlGetData: string = 'TiepNhanBenhNhan/GetDataForGridAsyncDichVuKhuyenMai';
  urlGetTotalData: string = 'TiepNhanBenhNhan/GetTotalPageForGridAsyncDichVuKhuyenMai';
  urlGetDataChild: string = 'TiepNhanBenhNhan/GetDataForGridAsyncDichVuKhuyenMaiChild';
  urlGetTotalDataChild: string = 'TiepNhanBenhNhan/GetTotalPageForGridAsyncDichVuKhuyenMaiChild';

  @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhuyenMaiTemplate', { static: true }) donGiaKhuyenMaiTemplate: TemplateRef<any>;
  @ViewChild('donGiaCKTemplate', { static: true }) donGiaCKTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  // groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groups: GroupDescriptor[] = [{ field: 'TenNhomGoiDichVu' }];
  // sortChild: SortDescriptor[] = [{
  //   field: 'NhomId',
  //   dir: 'asc'
  // }];

  isFirstLoadGridGoiDv: boolean = true;
  benhNhanId: number = 0;
  isPTTT: boolean = false;
  isNoiTru: boolean = false;
  isCapGiuong: boolean = false;
  IsKhamBenhDangKham: boolean = false;
  isVacxin: boolean = false;
  strDichVuDaChon: string = null;
  arrChiTietDichVuDaXem: Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan>();
  arrChiTietDichVuDaChon: Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan>();
  arrGoiDangChon: Array<GoiDichVuKhuyenMaiMarketingDangChon> = new Array<GoiDichVuKhuyenMaiMarketingDangChon>();
  nhomDichVuGiuong: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuGiuongBenh;
  arrDichVuDangChon: Array<any> = [];

  popupLoadingData: any;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('hanSuDungTemplate', { static: true }) hanSuDungTemplate: TemplateRef<any>;

  @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', {read: TemplateRef, static: true}) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('chietKhauFooterTemplate', {read: TemplateRef, static: true}) chietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('giaGoiFooterTemplate', {read: TemplateRef, static: true}) giaGoiFooterTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', {read: TemplateRef, static: true}) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', {read: TemplateRef, static: true}) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('actionChonGiuongTemplate', { static: true }) actionChonGiuongTemplate: TemplateRef<any>;
  @ViewChild('viTriTiemTemplate', { static: true }) viTriTiemTemplate: TemplateRef<any>;
  @ViewChild('muiSoTemplate', { static: true }) muiSoTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('lieuLuongTemplate', { static: true }) lieuLuongTemplate: TemplateRef<any>;
  
  @ViewChild('gridNhomGoiDichVu', { read: GridComponent, static: false }) gridNhomGoiDichVu: GridComponent;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DichVuKhuyenMaiPopupComponent>,

    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.additionalSearchString = this.data.BenhNhanId;
    this.documentType = this.data.DocumentType;

    //BVHD-3825
    this.benhNhanId = this.data.BenhNhanId;
    this.isPTTT = this.data.IsPTTT != undefined && this.data.IsPTTT;
    this.isNoiTru = this.data.IsNoiTru != undefined && this.data.IsNoiTru;
    this.IsKhamBenhDangKham = this.data.IsKhamBenhDangKham != undefined && this.data.IsKhamBenhDangKham;
    this.isVacxin = this.data.IsVacxin != undefined && this.data.IsVacxin;
    this.arrDichVuDangChon = this.data.DichVuDangChons;

    // dùng để ẩn checkbox chọn dịch vụ và show chức năng chọn giường
    // nếu là cấp giường thì chỉ cho phép chọn giường và đóng popup
    this.isCapGiuong = this.data.IsCapGiuong == true; 
    //===============================================================

    this.gridColumns = [
      { Field: "Ten", Title: "Tên Gói", Width: 600, Sortable: false, Template: this.tenGoiTemplate }
    ];

    // this.gridColumnsDetail = [
    //   { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
    //   { Field: "Ten", Title: "Tên dịch vụ", Width: 70, Sortable: false, ShowTooltip: true },
    //   { Field: "NhomId", Title: "Nhóm Id", Width: 50, Sortable: true, Hidden: true },
    //   { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    //   { Field: "LoaiGia", Title: "Loại giá", Width: 50, Sortable: false },
    //   { Field: "SoLan", Title: "SL", Width: 30, Sortable: false },
    //   { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
    //   { Field: "DonGiaKhuyenMai", Title: "Đơn giá KM", Width: 80, Sortable: false, Template: this.donGiaCKTemplate },
    //   { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate },
    //   { Field: "GhiChu", Title: "Ghi chú", Width: 100, Sortable: false, ShowTooltip: true },
    //   { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 100, Sortable: false, ShowTooltip: true },
    //   { Field: "SoLanDaDung", Title: "SL Đã Sử Dụng", Width: 70, Sortable: false },

    // ]

    this.gridColumnsDetail = [
      { Field: "CheckBox", Title: "", Width: 30 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: this.isCapGiuong },
      { Field: "STT", Title: "#", Width: 20 , Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomGoiDichVu", Title: "" , Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate , Hidden: true},
      { Field: "MaDichVu", Title: "Mã", Width: 80 , Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 180 , Sortable: true },
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 100 , Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 60 , Sortable: true},
      { Field: "DonGia", Title: "Đơn giá", Width: 120 , Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
      { Field: "DonGiaKhuyenMai", Title: "Đơn giá khuyến mại", Width: 120 , Sortable: true, Template: this.donGiaKhuyenMaiTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120 , Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120 , Sortable: true, Template: this.hanSuDungTemplate },
      { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 120 , Sortable: true}, //,  TemplateFooter: this.chietKhauFooterTemplate
      { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120 , Sortable: false, Template: this.soLuongTemplate, Hidden: this.isCapGiuong} ,//, TemplateFooter: this.giaGoiFooterTemplate  
      // { Field: "Action", Title: "", Width: 80, Template: this.actionChonGiuongTemplate ,Hidden: !this.isCapGiuong }

      { Field: "ViTriTiem", Title: "Vị trí tiêm", Width: 100 , Sortable: false, Template: this.viTriTiemTemplate, Hidden: !this.isVacxin } ,
      { Field: "MuiSo", Title: "Mũi số", Width: 80 , Sortable: false, Template: this.muiSoTemplate, Hidden: !this.isVacxin } ,
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 140 , Sortable: false, Template: this.noiThucHienTemplate, Hidden: !this.isVacxin } ,
      { Field: "LieuLuong", Title: "Liều lượng", Width: 100 , Sortable: false, Template: this.lieuLuongTemplate, Hidden: !this.isVacxin } ,
    ]
  }


  // BVHD-3825
  onDataBoundGridParent(event)
  {
    var self = this;
    if (event.Data.length > 0) {
      if (event.Data.length == 1 && self.isFirstLoadGridGoiDv) {
        self.isFirstLoadGridGoiDv = false;
        self.gridNhomGoiDichVu.onExpandRowDetail(0);
      }
    }
  }

  onDataBoundGridChild(event)
  {
    var self = this;
    if (event.Data.length > 0 && this.arrDichVuDangChon != undefined && this.arrDichVuDangChon.length > 0) {
      event.Data.forEach(element => {
        var indexDichVuBenhVien = this.arrDichVuDangChon.findIndex(p => p.YeuCauGoiDichVuId == element.YeuCauGoiDichVuId &&
                                                                        p.DichVuBenhVienId == element.DichVuBenhVienId &&
                                                                        p.NhomId == element.NhomId &&
                                                                        p.NhomGiaId == element.NhomGiaId);
        if (indexDichVuBenhVien != - 1) {
          let soLuongFEDaLuu = this.getSoLuongDaDungDichVuDangChon(element, true);
          let soLuongFeChuaLuu = this.getSoLuongDaDungDichVuDangChon(element);
          let coChenhLechSoLuongDaLuu = soLuongFEDaLuu !== element.SoLuongDaDung;
          if (coChenhLechSoLuongDaLuu) {
            // element.SoLuongDaDung = soLuongFEDaLuu + soLuongFeChuaLuu;
            element.SoLuongDaDung = element.SoLuongDaDung + soLuongFeChuaLuu;
            element.SoLuongConLai = element.SoLuong - element.SoLuongDaDung;
          }
          else {
            element.SoLuongDaDung += soLuongFeChuaLuu;
            element.SoLuongConLai -= soLuongFeChuaLuu;
          }
          if (element.SoLuongConLai <= 0) {
            element.IsActive = false;
          }
        }
      });
    }
  }

  getSoLuongDaDungDichVuDangChon(dataItem, laDataDaLuu: boolean = false) {
    let soLuongDichVuDaChon = this.arrDichVuDangChon.filter(p => ((laDataDaLuu && p.Id != null && p.Id != 0) || (!laDataDaLuu && (p.Id == null || p.Id == 0))) &&
                                                              p.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId &&
                                                              p.DichVuBenhVienId == dataItem.DichVuBenhVienId &&
                                                              p.NhomId == dataItem.NhomId &&
                                                              p.NhomGiaId == dataItem.NhomGiaId)
                                                 .reduce((sum: any, item: { SoLuong: any; }) => sum + item.SoLuong, 0);

    return soLuongDichVuDaChon;
  }

  chonDichVu(event, dataItem)
  {
    if(event)
    {
      dataItem.SoLuongDungLanNay = 1;
      if(this.arrChiTietDichVuDaChon.findIndex(x => x.Id == dataItem.Id) == -1)
      {
        var newElement = new ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan(
          dataItem.Id,
          dataItem.YeuCauGoiDichVuId,
          dataItem.TenGoiDichVu,
          dataItem.ChuongTrinhGoiDichVuId,
          dataItem.ChuongTrinhGoiDichVuChiTietId,
          dataItem.DichVuBenhVienId,
          dataItem.TenDichVu,
          dataItem.NhomGoiDichVu,
          dataItem.SoLuongDungLanNay,
          true,
          dataItem.DonGia
        );
        this.arrChiTietDichVuDaChon.push(newElement);
      }

      let slDichVuDaChon = this.arrChiTietDichVuDaChon.filter(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId).length;
      let slDichVuTheoGoi = this.arrChiTietDichVuDaXem.filter(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId && x.IsActive).length;
      if(slDichVuDaChon == slDichVuTheoGoi)
      {
        var element = document.getElementById("ckbHeader-"+ dataItem.YeuCauGoiDichVuId);
        element['checked']=true;
      }
    }
    else
    {
      dataItem.SoLuongDungLanNay = 0;
      var index = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == dataItem.Id);
      if(index != -1)
      {
        this.arrChiTietDichVuDaChon.splice(index, 1);
        var element = document.getElementById("ckbHeader-"+ dataItem.YeuCauGoiDichVuId);
        element['checked']=false;
      }
    }
    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  chonTatCaDichVuTrongGoi(event, yeuCauGoiDichVuId: number) {
    if (event) {
      let lstDichVuTrongGoi = this.arrChiTietDichVuDaXem.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId && x.IsActive);
      lstDichVuTrongGoi.forEach(element => {
        var indexDichVuDaChon = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element.Id);

        if (indexDichVuDaChon == -1) {
          var newElement = new ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan(
            element.Id,
            element.YeuCauGoiDichVuId,
            element.TenGoiDichVu,
            element.ChuongTrinhGoiDichVuId,
            element.ChuongTrinhGoiDichVuChiTietId,
            element.DichVuBenhVienId,
            element.TenDichVu,
            element.NhomGoiDichVu,
            1,
            true,
            element.DonGia
          );
          this.arrChiTietDichVuDaChon.push(newElement);
        }
      });

      let name = 'ckbItem-' + yeuCauGoiDichVuId;
      let checkboxes = document.getElementsByName(name);
      checkboxes.forEach(element => {
        // element['value'] = true;
        // element['checked'] = true;
        // console.log('element - true',element['id']);

        // document.getElementById(element['id']).setAttribute("ng-reflect-model", "true");
        if(!element['checked']){
          document.getElementById(element['id']).click();
        }
      });
    }
    else {
      let arrDichVuDaChonTemp = this.arrChiTietDichVuDaChon.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
      if(arrDichVuDaChonTemp.length > 0)
      {
        arrDichVuDaChonTemp.forEach(element => {
          let index = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element.Id);
          this.arrChiTietDichVuDaChon.splice(index, 1);
        });

        let name = 'ckbItem-' + yeuCauGoiDichVuId;
        let checkboxes = document.getElementsByName(name);
        checkboxes.forEach(element => {
          if(element['checked']){
            document.getElementById(element['id']).click();
          }
        });
      }
    }
    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  xemChiTietDichVuTheoGoi(event)
  {
    if(event.Data.length > 0)
    {
      var dichVuChiTiet = event.Data[0];
      if(this.arrChiTietDichVuDaXem.length == 0 
        || this.arrChiTietDichVuDaXem.findIndex(x => x.YeuCauGoiDichVuId == dichVuChiTiet.YeuCauGoiDichVuId 
                                                && x.ChuongTrinhGoiDichVuId == dichVuChiTiet.ChuongTrinhGoiDichVuId) == -1)
      {
        event.Data.forEach(element => {
          var newElement = new ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan(
            element.Id,
            element.YeuCauGoiDichVuId,
            element.TenGoiDichVu,
            element.ChuongTrinhGoiDichVuId,
            element.ChuongTrinhGoiDichVuChiTietId,
            element.DichVuBenhVienId,
            element.TenDichVu,
            element.NhomGoiDichVu,
            0,
            element.IsActive,
            element.DonGia
          );
          this.arrChiTietDichVuDaXem.push(newElement);
        });
      }
    }
  }

  changeSoLuongDichVu(event, dataItem){
    var dichVuDaChon = this.arrChiTietDichVuDaChon.find(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId 
                                                          && x.ChuongTrinhGoiDichVuId == dataItem.ChuongTrinhGoiDichVuId
                                                          && x.ChuongTrinhGoiDichVuChiTietId == dataItem.ChuongTrinhGoiDichVuChiTietId
                                                          && x.NhomGoiDichVu == dataItem.NhomGoiDichVu);
    if(event == undefined || event == null)
    {
      dichVuDaChon.SoLuongSuDung = 0;
    }
    else
    {
      dichVuDaChon.SoLuongSuDung = event;
    }
    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  chonDichVuTrongGoi(arrSelected){
    if(arrSelected.length > 0)
    {
      // xử lý thêm
      var arrAdd = arrSelected.filter(x => this.arrChiTietDichVuDaChon.findIndex(a => a.Id == x) == -1);
      arrAdd.forEach(element => {
        console.log('element', element);
        var elementObj = JSON.parse(element);
        var indexDichVuDaChon = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element);
        if(indexDichVuDaChon == -1)
        {
          var newElement = new ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan(
            element,
            elementObj.YeuCauGoiDichVuId,
            elementObj.TenGoiDichVu,
            elementObj.ChuongTrinhGoiDichVuId,
            elementObj.ChuongTrinhGoiDichVuChiTietId,
            elementObj.DichVuBenhVienId,
            elementObj.TenDichVu,
            elementObj.NhomGoiDichVu,
            1,
            element.DonGia
          );
          this.arrChiTietDichVuDaChon.push(newElement);
        }
      });

      // xử lý xóa
      arrSelected.forEach(element => {
        var index = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element);
        this.arrChiTietDichVuDaChon.splice(index, 0);
      });
    }
    else
    {
      this.arrChiTietDichVuDaChon = [];
    }
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = "";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.Cancel:
        mess = "Đang hủy dữ liệu..."; break;
      default: mess = "Đang tải dữ liệu...";
    }
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: mess }
    });
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  luuDichVuChiDinh() {
    this.showPopupLoadingData(EnumTypeLoadingData.Add);
    let yeuCauGoiMarketing: ChiDinhGoiDichVuKhuyenMaiTheoBenhNhan = new ChiDinhGoiDichVuKhuyenMaiTheoBenhNhan();
    yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
    yeuCauGoiMarketing.DichVus = this.arrChiTietDichVuDaChon;
    yeuCauGoiMarketing.IsKhamBenhDangKham = this.documentType == DocumentType.KhamBenhDangKham || this.IsKhamBenhDangKham;
    yeuCauGoiMarketing.IsVacxin = this.isVacxin;
    
    let url = "TiepNhanBenhNhan/KiemTraValidationChiDinhDichVuKhuyenMaiTrongGoiMarketing";
    // if (this.documentType == DocumentType.PhauThuatThuThuatTheoNgay) {
    //   url = "PhauThuatThuThuat/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    // }
    // else if(this.documentType == DocumentType.DanhSachDieuTriNoiTru || this.isNoiTru)
    // {
    //   url = "DieuTriNoiTru/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    // }
    this.apiService.post<boolean>(url, yeuCauGoiMarketing)
      .subscribe(resultData => {
        this.closePopupLoadingData();
        this.dialogRef.close(yeuCauGoiMarketing);
      },
        (err: ApiError) => {
          this.notificationService.showError(err.Message);
          this.closePopupLoadingData();
        });
  }

  close() {
    this.dialog.closeAll();
  }

  getHtmlDichVuTheoGoiDangChon(yeuCauGoiDichVuId: number){
    let arraysDichVus = this.arrChiTietDichVuDaChon.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
    if(arraysDichVus == undefined || arraysDichVus == null || arraysDichVus.length == 0)
    {
      return "";
    }

    let style="<style>.text-right-td{text-align: right;}.text-left-td{text-align: left;}.text-red{color: red;}</style>"

    let html="<table fxFlex='100%'>";
    let tongTien = 0;
    let goiDangChon = this.arrGoiDangChon.find(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
    html += "<tr><th colspan='4' class='text-left-td'>" + goiDangChon.TenGoiDichVu + "</th></tr>";

    arraysDichVus.forEach(element => {
      html += "<tr>"
      html += "<td width='35%' class='reverse-ellipsis r'>- " + element.TenDichVu + "</td>"
      html += "<td width='5%' class='text-right-td'>" + element.SoLuongSuDung + "</td>"
      html += "<td width='20%' class='text-right-td'>" + element.DonGia + "</td>"
      html += "<td width='20%' class='text-right-td'>" + element.SoLuongSuDung * element.DonGia + "</td>"
      html += "</tr>"

      tongTien += element.SoLuongSuDung * element.DonGia;
    });

    // phần tổng tiền dịch vụ đang chọn
    html += "<tr>"
    html += "<td></td>"
    html += "<td></td>"
    html += "<td>Tổng: </td>"
    html += "<td class='text-right-td'><b>" + tongTien + "</b></td>"
    html += "</tr>"

    // kiểm tra số tiền còn có thể bảo lãnh theo gói
    if(goiDangChon.TongTienConBaoLanhDuoc < tongTien)
    {
      html += "<tr>"
      html += "<td colspan='4' class='text-right-td text-red'>Không đủ bảo lãnh</td>"
      html += "</tr>"
    }

    html += "</tr></table>";
    console.log('//============================== html', html);
    return html + style;
  }

  kiemTraGoiDichVuCoChonDichVu(yeuCauGoiDichVuId){
    let index = this.arrChiTietDichVuDaChon.findIndex(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId)
    return index != -1;
  }

  getArrayDichVuDaChonTheoGoi(yeuCauGoiDichVuId)
  {
    return this.arrChiTietDichVuDaChon.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
  }

  tinhTongTienDichVuDangChon(yeuCauGoiDichVuId: number){
    let tongTien = 0;
    this.arrChiTietDichVuDaChon.forEach(element => {
      if(element.YeuCauGoiDichVuId == yeuCauGoiDichVuId)
      {
        tongTien += element.SoLuongSuDung * element.DonGia;
      }
    });
    return tongTien;
  }

  chonDichVuGiuong(dataItem)
  {
    this.dialogRef.close(dataItem);
  }

  evtViTriTiemChange(evt, dataItem) {
    var dichVuDaChon = this.arrChiTietDichVuDaChon.find(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId 
                                                             && x.ChuongTrinhGoiDichVuId == dataItem.ChuongTrinhGoiDichVuId
                                                             && x.ChuongTrinhGoiDichVuChiTietId == dataItem.ChuongTrinhGoiDichVuChiTietId
                                                             && x.NhomGoiDichVu == dataItem.NhomGoiDichVu);

    if(!evt)
    {
      dichVuDaChon.ViTriTiem = null;
    }
    else
    {
      dichVuDaChon.ViTriTiem = evt.KeyId;
    }
    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  evtNoiThucHienChange(evt, dataItem) {
    var dichVuDaChon = this.arrChiTietDichVuDaChon.find(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId 
                                                             && x.ChuongTrinhGoiDichVuId == dataItem.ChuongTrinhGoiDichVuId
                                                             && x.ChuongTrinhGoiDichVuChiTietId == dataItem.ChuongTrinhGoiDichVuChiTietId
                                                             && x.NhomGoiDichVu == dataItem.NhomGoiDichVu);

    if(!evt)
    {
      dichVuDaChon.NoiThucHienId = null;
    }
    else
    {
      dichVuDaChon.NoiThucHienId = evt.KeyId;
    }

    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  evtMuiSoChange(evt, dataItem) {
    var dichVuDaChon = this.arrChiTietDichVuDaChon.find(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId 
                                                             && x.ChuongTrinhGoiDichVuId == dataItem.ChuongTrinhGoiDichVuId
                                                             && x.ChuongTrinhGoiDichVuChiTietId == dataItem.ChuongTrinhGoiDichVuChiTietId
                                                             && x.NhomGoiDichVu == dataItem.NhomGoiDichVu);

    if(!evt)
    {
      dichVuDaChon.MuiSo = 0;
    }
    else
    {
      dichVuDaChon.MuiSo = evt;
    }

    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }

  evtLieuLuongChange(evt, dataItem) {
    var dichVuDaChon = this.arrChiTietDichVuDaChon.find(x => x.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId 
                                                              && x.ChuongTrinhGoiDichVuId == dataItem.ChuongTrinhGoiDichVuId
                                                              && x.ChuongTrinhGoiDichVuChiTietId == dataItem.ChuongTrinhGoiDichVuChiTietId
                                                              && x.NhomGoiDichVu == dataItem.NhomGoiDichVu);

    dichVuDaChon.LieuLuong = evt;
    this.strDichVuDaChon = JSON.stringify(this.arrChiTietDichVuDaChon);
  }
}
