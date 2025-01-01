import { Component, Inject, IterableDiffers, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ChiTietGoiDichVuChiDinhTheoBenhNhan, GoiDichVuMarketingDangChon } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiDinhGoiDichVuTheoBenhNhan } from '../../../kham-benh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
declare var $: any;

@Component({
  selector: 'app-lan-kham-hien-tai-su-dung-goi-dich-vu-popup',
  templateUrl: './lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component.scss']
})
export class LanKhamHienTaiSuDungGoiDichVuPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TenNhomGoiDichVu' }];
  documentType: DocumentType;
  benhNhanId: number = 0;
  isPTTT: boolean = false;
  isNoiTru: boolean = false;
  isCapGiuong: boolean = false;
  IsKhamBenhDangKham: boolean = false;
  strDichVuDaChon: string = null;
  arrChiTietDichVuDaXem: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuChiDinhTheoBenhNhan>();
  arrChiTietDichVuDaChon: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuChiDinhTheoBenhNhan>();
  arrGoiDangChon: Array<GoiDichVuMarketingDangChon> = new Array<GoiDichVuMarketingDangChon>();
  nhomDichVuGiuong: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuGiuongBenh;

  urlGetDataGoi: string = 'KhamBenh/GetGoiDichVuCuaBenhNhanDataForGrid';
  urlGetTotalDataGoi: string = 'KhamBenh/GetGoiDichVuCuaBenhNhanTotalPageForGrid';
  urlGetDataChiTietGoi: string = 'KhamBenh/GetChiTietGoiDichVuCuaBenhNhanDataForGrid';
  urlGetTotalDataChiTietGoi: string = 'KhamBenh/GetChiTietGoiDichVuCuaBenhNhanTotalPageForGrid';
  
  iterableDiffer: any;
  popupLoadingData: any;

  @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', {read: TemplateRef, static: true}) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('chietKhauFooterTemplate', {read: TemplateRef, static: true}) chietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('giaGoiFooterTemplate', {read: TemplateRef, static: true}) giaGoiFooterTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', {read: TemplateRef, static: true}) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', {read: TemplateRef, static: true}) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('actionChonGiuongTemplate', { static: true }) actionChonGiuongTemplate: TemplateRef<any>;

  @ViewChild('gridNhomGoiDichVu', { read: GridComponent, static: false }) gridNhomGoiDichVu: GridComponent;
  isFirstLoadGridGoiDv: boolean = true;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<LanKhamHienTaiSuDungGoiDichVuPopupComponent>,
  private apiService: ApiService,
  private notificationService: NotificationService,
  private iterableDiffers: IterableDiffers) { 
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    this.benhNhanId = this.data.BenhNhanId;
    this.isPTTT = this.data.IsPTTT;
    this.isNoiTru = this.data.IsNoiTru;
    this.IsKhamBenhDangKham = this.data.IsKhamBenhDangKham != undefined && this.data.IsKhamBenhDangKham;

    // dùng để ẩn checkbox chọn dịch vụ và show chức năng chọn giường
    // nếu là cấp giường thì chỉ cho phép chọn giường và đóng popup
    this.isCapGiuong = this.data.IsCapGiuong == true; 
    //===============================================================
    

    if(this.documentType == DocumentType.PhauThuatThuThuatTheoNgay)
    {
      this.urlGetDataGoi = 'PhauThuatThuThuat/GetGoiDichVuCuaBenhNhanDataForGrid';
      this.urlGetTotalDataGoi = 'PhauThuatThuThuat/GetGoiDichVuCuaBenhNhanTotalPageForGrid';
      this.urlGetDataChiTietGoi = 'PhauThuatThuThuat/GetChiTietGoiDichVuCuaBenhNhanDataForGrid';
      this.urlGetTotalDataChiTietGoi = 'PhauThuatThuThuat/GetChiTietGoiDichVuCuaBenhNhanTotalPageForGrid';
    }
    else if(this.documentType == DocumentType.DanhSachDieuTriNoiTru || this.isNoiTru)
    {
      this.urlGetDataGoi = 'DieuTriNoiTru/GetGoiDichVuCuaBenhNhanDataForGrid';
      this.urlGetTotalDataGoi = 'DieuTriNoiTru/GetGoiDichVuCuaBenhNhanTotalPageForGrid';
      this.urlGetDataChiTietGoi = 'DieuTriNoiTru/GetChiTietGoiDichVuCuaBenhNhanDataForGrid';
      this.urlGetTotalDataChiTietGoi = 'DieuTriNoiTru/GetChiTietGoiDichVuCuaBenhNhanTotalPageForGrid';
    }

    this.gridColumns = [
      { Field: "TenGoiDichVu", Title: "Tên Gói", Width: 600 , Sortable: true, Template: this.tenGoiTemplate }
    ];
    
    this.gridColumnsChild = [
      { Field: "CheckBox", Title: "", Width: 30 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: this.isCapGiuong },
      { Field: "STT", Title: "#", Width: 20 , Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomGoiDichVu", Title: "" , Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate , Hidden: true},
      { Field: "MaDichVu", Title: "Mã", Width: 80 , Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 180 , Sortable: true },
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 100 , Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 60 , Sortable: true},
      { Field: "DonGia", Title: "Đơn giá", Width: 120 , Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120 , Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
      { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 120 , Sortable: true}, //,  TemplateFooter: this.chietKhauFooterTemplate
      { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120 , Sortable: false, Template: this.soLuongTemplate, Hidden: this.isCapGiuong} ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "Action", Title: "", Width: 80, Template: this.actionChonGiuongTemplate ,Hidden: !this.isCapGiuong }
    ]
  }

  ngDoCheck() {
    // let changes = this.iterableDiffer.diff(this.arrChiTietDichVuDaChon);
    // if (changes) {
    //   this.arrChiTietDichVuDaChon.forEach(element => {
    //     var goiTheoDichVu = this.arrGoiDangChon.find(x => x.YeuCauGoiDichVuId == element.YeuCauGoiDichVuId);
    //     if (goiTheoDichVu) {
    //       var dichVuTrongGoi = goiTheoDichVu.DichVus.find(x => x.Id == element.Id);
    //       if (!dichVuTrongGoi) {
    //         goiTheoDichVu.DichVus.push(element);
    //       }
    //     }
    //   });
    //   this.arrGoiDangChon.forEach(element => {
    //     element.DichVus.forEach((elementChild, i) => {
    //       let index = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == elementChild.Id);
    //       if (index == -1) {
    //         let indexInGoi = element.DichVus.findIndex(x => x.Id == elementChild.Id);
    //         element.DichVus.splice(indexInGoi, 1);
    //       }
    //     });
    //   });
    //   console.log('arrGoiDangChon', this.arrGoiDangChon);
    // }
  }

  chonDichVu(event, dataItem)
  {
    if(event)
    {
      dataItem.SoLuongDungLanNay = 1;
      if(this.arrChiTietDichVuDaChon.findIndex(x => x.Id == dataItem.Id) == -1)
      {
        var newElement = new ChiTietGoiDichVuChiDinhTheoBenhNhan(
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
          var newElement = new ChiTietGoiDichVuChiDinhTheoBenhNhan(
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
          var newElement = new ChiTietGoiDichVuChiDinhTheoBenhNhan(
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

  xemChiTietGoiDichVu(event) {
    var self = this;
    if (event.Data.length > 0) {
      event.Data.forEach(element => {
        //xử lý thêm vào ds hiển thị dịch vụ đang chọn
        var indexGoiDangChon = this.arrGoiDangChon.findIndex(x => x.YeuCauGoiDichVuId == element.Id);
        if (indexGoiDangChon == -1) {
          this.arrGoiDangChon.push(new GoiDichVuMarketingDangChon(
            element.Id,
            element.TenGoiDichVu,
            element.ConLai,
            []
          ));
        }
        else {
          var goiDangChon = this.arrGoiDangChon.find(x => x.YeuCauGoiDichVuId == element.Id);
          goiDangChon.TongTienConBaoLanhDuoc = element.ConLai;
        }
      });
      
      //BVHD-3519
      if (event.Data.length == 1 && self.isFirstLoadGridGoiDv) {
        self.isFirstLoadGridGoiDv = false;
        self.gridNhomGoiDichVu.onExpandRowDetail(0);
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
          var newElement = new ChiTietGoiDichVuChiDinhTheoBenhNhan(
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
    let yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan = new ChiDinhGoiDichVuTheoBenhNhan();
    yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
    yeuCauGoiMarketing.DichVus = this.arrChiTietDichVuDaChon;
    yeuCauGoiMarketing.IsKhamBenhDangKham = this.documentType == DocumentType.KhamBenhDangKham || this.IsKhamBenhDangKham;
    let url = "KhamBenh/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    if (this.documentType == DocumentType.PhauThuatThuThuatTheoNgay) {
      url = "PhauThuatThuThuat/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    }
    else if(this.documentType == DocumentType.DanhSachDieuTriNoiTru || this.isNoiTru)
    {
      url = "DieuTriNoiTru/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    }
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
}
