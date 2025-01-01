import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiDinhGoiDichVuTheoBenhNhan, ChiTietGoiDichVuChiDinhTheoBenhNhan } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-su-dung-goi-dich-vu-marketing-popup',
  templateUrl: './su-dung-goi-dich-vu-marketing-popup.component.html',
  styleUrls: ['./su-dung-goi-dich-vu-marketing-popup.component.scss']
})
export class SuDungGoiDichVuMarketingPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TenNhomGoiDichVu' }];
  documentType: DocumentType;
  benhNhanId: number = 0;
  isPTTT: boolean = false;
  strDichVuDaChon: string = null;
  arrChiTietDichVuDaXem: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuChiDinhTheoBenhNhan>();
  arrChiTietDichVuDaChon: Array<ChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<ChiTietGoiDichVuChiDinhTheoBenhNhan>();

  urlGetDataGoi: string = 'DieuTriNoiTru/GetGoiDichVuCuaBenhNhanDataForGrid';
  urlGetTotalDataGoi: string = 'DieuTriNoiTru/GetGoiDichVuCuaBenhNhanTotalPageForGrid';
  urlGetDataChiTietGoi: string = 'DieuTriNoiTru/GetChiTietGoiDichVuCuaBenhNhanDataForGrid';
  urlGetTotalDataChiTietGoi: string = 'DieuTriNoiTru/GetChiTietGoiDichVuCuaBenhNhanTotalPageForGrid';

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
  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SuDungGoiDichVuMarketingPopupComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    this.benhNhanId = this.data.BenhNhanId;
    // this.isPTTT = this.data.IsPTTT;

    // if(this.documentType == DocumentType.PhauThuatThuThuatTheoNgay)
    // {
    //   this.urlGetDataGoi = 'PhauThuatThuThuat/GetGoiDichVuCuaBenhNhanDataForGrid';
    //   this.urlGetTotalDataGoi = 'PhauThuatThuThuat/GetGoiDichVuCuaBenhNhanTotalPageForGrid';
    //   this.urlGetDataChiTietGoi = 'PhauThuatThuThuat/GetChiTietGoiDichVuCuaBenhNhanDataForGrid';
    //   this.urlGetTotalDataChiTietGoi = 'PhauThuatThuThuat/GetChiTietGoiDichVuCuaBenhNhanTotalPageForGrid';
    // }

    this.gridColumns = [
      { Field: "TenGoiDichVu", Title: "Tên Gói", Width: 600 , Sortable: true, Template: this.tenGoiTemplate }
    ];
    
    this.gridColumnsChild = [
      { Field: "CheckBox", Title: "", Width: 30 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "STT", Title: "#", Width: 20 , Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomGoiDichVu", Title: "" , Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate , Hidden: true},
      { Field: "MaDichVu", Title: "Mã", Width: 80 , Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 180 , Sortable: true },
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 100 , Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 60 , Sortable: true},
      { Field: "DonGia", Title: "Đơn giá", Width: 120 , Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120 , Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
      { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 120 , Sortable: true,  TemplateFooter: this.chietKhauFooterTemplate},
      { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120 , Sortable: false, Template: this.soLuongTemplate, TemplateFooter: this.giaGoiFooterTemplate  }
    ]
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
          true
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
            true
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
            element.IsActive
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
          var newElement = new ChiTietGoiDichVuChiDinhTheoBenhNhan(
            element,
            elementObj.YeuCauGoiDichVuId,
            elementObj.TenGoiDichVu,
            elementObj.ChuongTrinhGoiDichVuId,
            elementObj.ChuongTrinhGoiDichVuChiTietId,
            elementObj.DichVuBenhVienId,
            elementObj.TenDichVu,
            elementObj.NhomGoiDichVu,
            1
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

  luuDichVuChiDinh(){
    let yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan = new ChiDinhGoiDichVuTheoBenhNhan();
    yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
    yeuCauGoiMarketing.DichVus = this.arrChiTietDichVuDaChon;
    yeuCauGoiMarketing.IsKhamBenhDangKham = this.documentType == DocumentType.KhamBenhDangKham;
    let url = "KhamBenh/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    // if(this.documentType == DocumentType.PhauThuatThuThuatTheoNgay)
    // {
    //   url = "PhauThuatThuThuat/KiemTraValidationChiDinhDichVuTrongGoiMarketing";
    // }
    this.apiService.post<boolean>(url, yeuCauGoiMarketing)
      .subscribe(resultData => {
          this.dialogRef.close(yeuCauGoiMarketing);
      },
        (err: ApiError) => {
          this.notificationService.showError(err.Message);
        });
  }

  close() {
    this.dialog.closeAll();
  }

}
