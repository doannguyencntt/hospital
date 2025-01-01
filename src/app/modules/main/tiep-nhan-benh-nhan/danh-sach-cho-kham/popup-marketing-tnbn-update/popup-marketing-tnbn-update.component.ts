import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiDinhDichVuGridVo, DanhSachDichVuChonTrongLanPopup, DanhSachGoiChonTrongLanPopup, ThemChiDinhDichVu } from '../../tiep-nhan-benh-nhan.model';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CheckDuSoLuongTonTrongGoiListDichVu, GoiDichVuMarketingDangChonTiepNhan, modelUpdateView } from '../danh-sach-cho-kham.model';
import { TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { PopupMarketingCheckTrungUpdateComponent } from '../popup-marketing-check-trung-update/popup-marketing-check-trung-update.component';
import { GoiDichVuMarketingDangChon } from '../../../kham-benh/kham-benh.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-popup-marketing-tnbn-update',
  templateUrl: './popup-marketing-tnbn-update.component.html',
  styleUrls: ['./popup-marketing-tnbn-update.component.scss']
})
export class PopupMarketingTnbnUpdateComponent implements OnInit {

  documentType: DocumentType;

  validationErrors: any[] = [];

  icClose = icClose;
  icSearch = icSearch;
  searchCtrl = new FormControl;

  searchString: string = null;

  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];

  benhNhanId: number = null;


  duocHuongBHYT: boolean = false;

  yctnId: number = null;

  mucHuong: number = null;

  danhSachDichVuDaChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = new Array<DanhSachDichVuChonTrongLanPopup>();
  danhSachDichVuDaChonTrongLanPopupString: string = "";

  danhSachGoiDaChonTrongLanPopup: Array<DanhSachGoiChonTrongLanPopup> = new Array<DanhSachGoiChonTrongLanPopup>();

  danhSachDichVuDangCo: Array<ChiDinhDichVuGridVo> = new Array<ChiDinhDichVuGridVo>();

  urlGetDataGrid: string = "TiepNhanBenhNhan/GetDataThongTinGoiForGridAsync";
  urlGetTotalPageGrid: string = "TiepNhanBenhNhan/GetTotalThongTinGoiPageForGridAsync";
  searchStringDefault: string = null;

  tongSoTienThem: number = null;

  chuongTrinhGoiDichVuIdPopup: number = null;
  yeuCauGoiDichVuIdPopup: number = null;

  groups: GroupDescriptor[] = [{ field: 'TenNhomDichVu' }];
  arrGoiDangChon: Array<GoiDichVuMarketingDangChonTiepNhan> = new Array<GoiDichVuMarketingDangChonTiepNhan>();

  @ViewChild('parentGrid', { static: true }) gridChild: GridComponent;


  @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', { read: TemplateRef, static: true }) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('chietKhauFooterTemplate', { read: TemplateRef, static: true }) chietKhauFooterTemplate: TemplateRef<any>;
  @ViewChild('giaGoiFooterTemplate', { read: TemplateRef, static: true }) giaGoiFooterTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { read: TemplateRef, static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { read: TemplateRef, static: true }) checkBoxTemplate: TemplateRef<any>;

  popupLoadingData: any;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PopupMarketingTnbnUpdateComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService) {
    this.benhNhanId = this.data.benhNhanId;
    this.duocHuongBHYT = this.data.duocHuongBHYT;
    this.yctnId = this.data.yctnId;
    this.mucHuong = this.data.mucHuong;

    if (this.data.itemPopup != undefined && this.data.itemPopup != null) {
      // this.chuongTrinhGoiDichVuIdPopup = this.data.itemPopup.ChuongTrinhGoiDichVuId;
      this.yeuCauGoiDichVuIdPopup = this.data.itemPopup.YeuCauGoiDichVuId;
    }
    // this.searchStringDefault = this.benhNhanId + "|" + this.chuongTrinhGoiDichVuIdPopup;
    this.searchStringDefault = this.benhNhanId + "|" + this.yeuCauGoiDichVuIdPopup;

    this.danhSachDichVuDangCo = this.data.danhSachDichVuDangCo;

  }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachChoKham;

    this.gridColumns = [
      { Field: "TenGoi", Title: "Tên Gói", Width: 600, Sortable: false, Template: this.tenGoiTemplate }
    ];

    this.gridColumnsChild = [
      { Field: "CheckBox", Title: "", Width: 40, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomDichVu", Title: "", Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate, Hidden: true },
      { Field: "Ma", Title: "Mã", Width: 80, Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", MinWidth: 180, Sortable: true },
      { Field: "LoaiGiaDisplay", Title: "Loại giá", Width: 100, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 120, Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
      { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 100, Sortable: true}, //, TemplateFooter: this.chietKhauFooterTemplate },
      { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120, Sortable: false, Template: this.soLuongTemplate} //, TemplateFooter: this.giaGoiFooterTemplate }
    ]

    // if (this.chuongTrinhGoiDichVuIdPopup != null && this.chuongTrinhGoiDichVuIdPopup != undefined) {
    if (this.yeuCauGoiDichVuIdPopup != null && this.yeuCauGoiDichVuIdPopup != undefined) {
      let self = this;
      setTimeout(() => {
        self.gridChild.onExpandRowDetail(0);
      }, 500);
    }
  }

  onKeyGrid(event: any) {
    if (event.keyCode == 13) {
      this.Timkiem();
    }
  }

  Timkiem() {
    this.gridChild._additionalSearchString = this.searchStringDefault;
    this.gridChild.searchString = this.searchString;
    this.gridChild.search();
  }

  clearSearch() {
    if ((this.searchString == "" || this.searchString == null) && this.gridChild != undefined) {
      this.gridChild.searchString = "";
      this.gridChild.search();
    }
  }

  chonDichVu(event, dataItem) {
    console.log('chondichvu', dataItem);
    //console.log("chonDichVu = ", event, dataItem);
    if (event == true) {
      this.addDichVu(dataItem);
    }
    else {
      this.removeDichVu(dataItem);
    }
  }

  setSoTienTTThem() {
    return (this.danhSachGoiDaChonTrongLanPopup.filter(o => o.TrangThaiThanhToan != 2)
      .reduce((sum, item) => sum + item.GiaSauChietKhau, 0));
  }

  changeSoLuongDichVu(event, dataItem) {
    
    let item = JSON.parse(JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup.filter(o => o == dataItem)));

    //console.log("changeSoLuongDichVu = ", event, dataItem, item);
    if (item != undefined && item.length > 0) {
      item[0].SoLuongDungLanNay = event;
      item[0].SoLuongConLai = item[0].SoLan - event;
      this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(item);
    }
  }

  addDichVu(data: DanhSachDichVuChonTrongLanPopup) {
    let dataTemp = this.cloneItemDichVuChonTronLanNay(data);
    let indexTemp = -1;
    this.danhSachDichVuDaChonTrongLanPopup.forEach((element, index) => {
      let elementTemp = this.cloneItemDichVuChonTronLanNay(element);
      if (JSON.stringify(dataTemp) == JSON.stringify(elementTemp)) {
        indexTemp = index;
      }
    });
    if (indexTemp == -1) {
      this.danhSachDichVuDaChonTrongLanPopup.push(data);
      this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
      this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
    }

    // let item = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o == data);
    // if (item == undefined || item.length == 0) {
    //   this.danhSachDichVuDaChonTrongLanPopup.push(data);
    //   this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
    //   //
    //   // let goi = new DanhSachGoiChonTrongLanPopup();
    //   // goi.ThuocGoi = data.ThuocGoi;
    //   // goi.GiaSauChietKhau = data.GiaSauChietKhau;
    //   // goi.TrangThaiThanhToan = data.TrangThaiThanhToan;
    //   // goi.TrangThaiThanhToanDisplay = data.TrangThaiThanhToanDisplay;
    //   // this.danhSachGoiDaChonTrongLanPopup.push(goi);
    //   //
    //   this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
    // }
  }
  removeDichVu(data: DanhSachDichVuChonTrongLanPopup) {
    let dataTemp = this.cloneItemDichVuChonTronLanNay(data);
    let indexTemp = -1;
    this.danhSachDichVuDaChonTrongLanPopup.forEach((element, index) => {
      let elementTemp = this.cloneItemDichVuChonTronLanNay(element);
      if(JSON.stringify(dataTemp) == JSON.stringify(elementTemp)){
        indexTemp = index;
      }
    });
    if(indexTemp != -1)
    {
      this.danhSachDichVuDaChonTrongLanPopup.splice(indexTemp, 1);
    }

    // this.danhSachDichVuDaChonTrongLanPopup = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o != data);
    //
    this.capNhatThongTinGoiTuDanhSachDichVuDaChon();
    //
    this.danhSachDichVuDaChonTrongLanPopupString = JSON.stringify(this.danhSachDichVuDaChonTrongLanPopup);
    //console.log("removeDichVu = ", this.danhSachDichVuDaChonTrongLanPopup, this.danhSachDichVuDaChonTrongLanPopupString);
  }

  cloneItemDichVuChonTronLanNay(data){
    let dataTemp = new DanhSachDichVuChonTrongLanPopup();
    dataTemp.Id = data.Id;
    dataTemp.TenNhomDichVu = data.TenNhomDichVu;
    dataTemp.ChuongTrinhGoiDichVuId = data.ChuongTrinhGoiDichVuId;
    dataTemp.YeuCauGoiDichVuId = data.YeuCauGoiDichVuId;
    dataTemp.DichVuId = data.DichVuId;
    return dataTemp;
  }

  capNhatThongTinGoiTuDanhSachDichVuDaChon() {
    this.danhSachGoiDaChonTrongLanPopup = new Array<DanhSachGoiChonTrongLanPopup>();
    this.danhSachDichVuDaChonTrongLanPopup.forEach(o => {
      let item = this.danhSachGoiDaChonTrongLanPopup.filter(m => m.ThuocGoi == o.ThuocGoi);
      if (item.length == 0) {
        let goi = new DanhSachGoiChonTrongLanPopup();
        goi.ThuocGoi = o.ThuocGoi;
        goi.GiaSauChietKhau = o.GiaSauChietKhau;
        goi.GiaSauChietKhauDisplay = o.GiaSauChietKhauDisplay;
        goi.TrangThaiThanhToan = o.TrangThaiThanhToan;
        goi.TrangThaiThanhToanDisplay = o.TrangThaiThanhToanDisplay;
        this.danhSachGoiDaChonTrongLanPopup.push(goi);
      }
    });
    //console.log("capNhatThongTinGoiTuDanhSachDichVuDaChon = ", this.danhSachGoiDaChonTrongLanPopup);
  }
  // test(dataItemParent){
  //   console.log("dataItemParent = ", dataItemParent);
  // }

  luuDichVuChiDinh() {
    if (this.danhSachDichVuDaChonTrongLanPopup != undefined && this.danhSachDichVuDaChonTrongLanPopup.length > 0) {
      
      //check trung

      let danhSachDichVuTrung = new Array<DanhSachDichVuChonTrongLanPopup>();

      for(let i = 0; i < this.danhSachDichVuDaChonTrongLanPopup.length; i++){
        let daThem = false;

        let item = this.danhSachDichVuDaChonTrongLanPopup[i];
        let itemExist = this.danhSachDichVuDangCo.filter(o => o.MaDichVuId == item.DichVuId && o.Nhom == item.TenNhomDichVu);
        if(itemExist.length > 0){
          danhSachDichVuTrung.push(item);
          daThem = true;
        }

        //
        let itemPopupExist = this.danhSachDichVuDaChonTrongLanPopup.filter(o => o != item && o.DichVuId == item.DichVuId && o.TenNhomDichVu == item.TenNhomDichVu);
        if(itemPopupExist.length > 0 && !daThem){
          danhSachDichVuTrung.push(item);
        }
      }

      //console.log("danhSachDichVuTrung = ", danhSachDichVuTrung);

      //
      if(danhSachDichVuTrung.length > 0){
        this.openPopup(danhSachDichVuTrung);
      }
      else{
        //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
        let danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
        this.danhSachDichVuDaChonTrongLanPopup.forEach(e => {
          let item = new ThemChiDinhDichVu();
          item.LaGoi = true;
          item.TenNhomDichVu = e.TenNhomDichVu;
          item.MaDichVuId = e.DichVuId;
          item.SoLuong = e.SoLuongDungLanNay;
          item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
          item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
          item.LoaiGiaId=e.NhomGiaDichVuBenhVienId;
          //cheat cho lẹ
          item.DuocHuongBHYT = this.duocHuongBHYT;
          item.yeuCauTiepNhanId = this.yctnId;
          item.benhNhanId = this.benhNhanId;

          danhSachDichVuGoiDaChon.push(item);
        });

        let model = new modelUpdateView();
        model.Data = danhSachDichVuGoiDaChon;
        model.YeuCauTiepNhanId = this.yctnId;
        model.BenhNhanid = this.benhNhanId;
        model.MucHuongBHYT = this.mucHuong;
        // this.luuDichVu(model, danhSachDichVuGoiDaChon);

        //BVHD-3804
        this.kiemTraCoDichVuKhongBaoLanh(model, danhSachDichVuGoiDaChon);
      }
      
      //luu dich vu
      //this.luuDichVu(model, danhSachDichVuGoiDaChon);

      //console.log('openPopupGoiDichVu', danhSachDichVuGoiDaChon, model);
      //this.themChiDinhDichVuKhacKhamBenh(6, this.danhSachDichVuGoiDaChon);
    }

    else {

      this.notificationService.showError(TiepNhanBenhNhanMessage.MessageErrorMustHaveOneDVGoi);
    }
    //console.log("luuDichVuChiDinh = ", this.danhSachDichVuDaChonTrongLanPopup);
    //this.dialogRef.close(this.danhSachDichVuDaChonTrongLanPopup);
  }

  openPopup(danhSachDichVuTrung: Array<DanhSachDichVuChonTrongLanPopup>) {
    var self = this;
    self.dialog.open(PopupMarketingCheckTrungUpdateComponent, {
      disableClose: false,
      width: '950px',
      data: {
        data: danhSachDichVuTrung
      }
    }).afterClosed().subscribe(result => {
      console.log('danh sach khong chon = ', result);

      if(result == undefined){
        //khong them gi
        this.dialogRef.close();
      }
      else{
        let danhSach = new Array<DanhSachDichVuChonTrongLanPopup>();
        for(let i = 0; i < this.danhSachDichVuDaChonTrongLanPopup.length; i++){
          let itemThem = this.danhSachDichVuDaChonTrongLanPopup[i];
          let itemKhongThem = result.filter(o => o == itemThem);
          if(itemKhongThem.length == 0){
            danhSach.push(itemThem);
          }
        }
        //this.dialogRef.close(danhSach);
        //luu dich vu
        let danhSachDichVuGoiDaChon = new Array<ThemChiDinhDichVu>();
        danhSach.forEach(e => {
          let item = new ThemChiDinhDichVu();
          item.LaGoi = true;
          item.TenNhomDichVu = e.TenNhomDichVu;
          item.MaDichVuId = e.DichVuId;
          item.SoLuong = e.SoLuongDungLanNay;
          item.chuongTrinhGoiDichVuId = e.ChuongTrinhGoiDichVuId;
          item.YeuCauGoiDichVuId = e.YeuCauGoiDichVuId;
          item.LoaiGiaId=e.NhomGiaDichVuBenhVienId;
          //cheat cho lẹ
          item.DuocHuongBHYT = this.duocHuongBHYT;
          item.yeuCauTiepNhanId = this.yctnId;
          item.benhNhanId = this.benhNhanId;

          danhSachDichVuGoiDaChon.push(item);
        });

        let model = new modelUpdateView();
        model.Data = danhSachDichVuGoiDaChon;
        model.YeuCauTiepNhanId = this.yctnId;
        model.BenhNhanid = this.benhNhanId;
        model.MucHuongBHYT = this.mucHuong;
        //this.luuDichVu(model, danhSachDichVuGoiDaChon);

        //BVHD-3804
        this.kiemTraCoDichVuKhongBaoLanh(model, danhSachDichVuGoiDaChon);
      }
    });
  }

  luuDichVu(model:modelUpdateView, danhSachDichVuGoiDaChon){
    this.showPopupLoadingData();
    let modelCheck = new CheckDuSoLuongTonTrongGoiListDichVu();
      modelCheck.LstDichVuThem = danhSachDichVuGoiDaChon;
      model.ListDichVuCheckTruocDos =[];
      if(this.data.ListDichVuCheckTruocDos !=undefined && this.data.ListDichVuCheckTruocDos != null && this.data.ListDichVuCheckTruocDos !="")
      {
        model.ListDichVuCheckTruocDos = this.data.ListDichVuCheckTruocDos;
      }
      this.apiService.post<any>("TiepNhanBenhNhan/CheckDuSoLuongTonTrongGoiLstDichVu", modelCheck).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null && resultData) {
            //add goi
            this.apiService.post<any>("TiepNhanBenhNhan/ThemDichVuFromGoiUpdateView", model).subscribe(
              resultData => {
                this.closePopupLoadingData();
                this.dialogRef.close(resultData);
              },
              (err: any) => {
                this.closePopupLoadingData();
                if (err != undefined && err.ValidationErrors != null) {
                  this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                  this.notificationService.showError(err.Message);
                }
              });
          }
          else {
            this.closePopupLoadingData();
            //ex
            this.notificationService.showError(TiepNhanBenhNhanMessage.MessageErrorDVOnGoi);
          }
        },
        (err: any) => {
          this.closePopupLoadingData();
          if (err != undefined && err.ValidationErrors != null) {
            this.validationErrors = err.ValidationErrors;
          }
          else if (err != undefined && err.Errors == null) {
            this.notificationService.showError(err.Message);
          }
        });


  }

  close() {
    this.dialogRef.close();
  }


  // update gói marketing
  xemChiTietGoiDichVu(event) {
    if (event.Data.length > 0) {
      console.log('event.Data', event.Data);
      event.Data.forEach(element => {
        //xử lý thêm vào ds hiển thị dịch vụ đang chọn
        var indexGoiDangChon = this.arrGoiDangChon.findIndex(x => x.YeuCauGoiDichVuId == element.Id);
        if (indexGoiDangChon == -1) {
          this.arrGoiDangChon.push(new GoiDichVuMarketingDangChonTiepNhan(
            element.Id,
            0,
            element.TenDisplay,
            element.ConLai,
            element.IsChecked,
            []
          ));
        }
        else {
          var goiDangChon = this.arrGoiDangChon.find(x => x.YeuCauGoiDichVuId == element.Id);
          goiDangChon.TongTienConBaoLanhDuoc = element.ConLai;
        }
      });
    }
  }

  kiemTraGoiDichVuCoChonDichVu(yeuCauGoiDichVuId) {
    let index = this.danhSachDichVuDaChonTrongLanPopup.findIndex(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId)
    return index != -1;
  }

  getArrayDichVuDaChonTheoGoi(yeuCauGoiDichVuId) {
    return this.danhSachDichVuDaChonTrongLanPopup.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId);
  }

  tinhTongTienDichVuDangChon(yeuCauGoiDichVuId: number) {
    let tongTien = 0;
    this.danhSachDichVuDaChonTrongLanPopup.forEach(element => {
      if (element.YeuCauGoiDichVuId == yeuCauGoiDichVuId) {
        tongTien += element.SoLuongDungLanNay * element.DonGia;
      }
    });
    return tongTien;
  }


  // cập nhật BVHD-3423
  chonTatCaDichVuTrongGoi(event, yeuCauGoiDichVuId: number) {
    if (event) {
      let name = 'ckbItem-' + yeuCauGoiDichVuId;
      let checkboxes = document.getElementsByName(name);
      checkboxes.forEach(element => {
        if (!element['checked']) {
          document.getElementById(element['id']).click();
        }
      });

      let nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
      let checkboxGroups = document.getElementsByClassName(nameGroup);
      for (let index = 0; index < checkboxGroups.length; index++) {
        var element = <HTMLInputElement>document.getElementById(checkboxGroups[index].id);
        if (!element.checked) {
          element.checked = true;
        }
      }
    }
    else {
      let name = 'ckbItem-' + yeuCauGoiDichVuId;
      let checkboxes = document.getElementsByName(name);
      checkboxes.forEach(element => {
        if (element['checked']) {
          document.getElementById(element['id']).click();
        }
      });

      let nameGroup = 'ckbGroup-' + yeuCauGoiDichVuId;
      let checkboxGroups = document.getElementsByClassName(nameGroup);
      for (let index = 0; index < checkboxGroups.length; index++) {
        var element = <HTMLInputElement>document.getElementById(checkboxGroups[index].id);
        if (element.checked) {
          element.checked = false;
        }
      }
    }
  }

  chonTatCaDichVuTrongNhom(event, yeuCauGoiDichVuId: number, tenNhom: string) {
    let classItemInGroup = 'ckbItemInGroup-' + yeuCauGoiDichVuId + '-' + tenNhom;
    let checkboxItemGroups = document.getElementsByClassName(classItemInGroup);
    for (let index = 0; index < checkboxItemGroups.length; index++) {
      var element = <HTMLInputElement>document.getElementById(checkboxItemGroups[index].id);
      if (event.target.checked) {
        if (!element.checked) {
          document.getElementById(element.id).click();
        }
      }
      else {
        if (element.checked) {
          document.getElementById(element.id).click();
        }
      }
    }
  }

  //BVHD-3804
  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang lưu dữ liệu..." },
      });
    }

  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  kiemTraCoDichVuKhongBaoLanh(model: any, danhSach: any) {
    var self = this;
    let name = 'lbl-khong-du-bao-lanh';
    let lbls = document.getElementsByName(name);
    if (lbls != undefined && lbls.length > 0) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Thông báo", Message: "Số tiền tạm ứng gói của người bệnh chưa đủ để thực hiện dịch vụ này", IsDetail: true },

      }).afterClosed().subscribe(result => {
        self.luuDichVu(model, danhSach);
      });
    }
    else {
      self.luuDichVu(model, danhSach);
    }
  }
}
