import { Component, Inject, IterableDiffers, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { TiemChungChiDinhGoiDichVuTheoBenhNhan, TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan, TiemChungGoiDichVuMarketingDangChon } from './tiem-chung-su-dung-goi-dich-vu-popup.model';
declare var $: any;

@Component({
  selector: 'app-lan-kham-hien-tai-su-dung-goi-dich-vu-popup',
  templateUrl: './tiem-chung-su-dung-goi-dich-vu-popup.component.html',
  styleUrls: ['./tiem-chung-su-dung-goi-dich-vu-popup.component.scss']
})
export class TiemChungSuDungGoiDichVuPopupComponent implements OnInit {
  icClose = icClose;
  icSearch = icSearch;

  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TenNhomGoiDichVu' }];
  documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
  benhNhanId: number = 0;
  isPTTT: boolean = false;
  isNoiTru: boolean = false;
  isCapGiuong: boolean = false;
  strDichVuDaChon: string = null;
  arrChiTietDichVuDaXem: Array<TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan>();
  arrChiTietDichVuDaChon: Array<TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan> = new Array<TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan>();
  arrGoiDangChon: Array<TiemChungGoiDichVuMarketingDangChon> = new Array<TiemChungGoiDichVuMarketingDangChon>();
  nhomDichVuGiuong: EnumNhomGoiDichVu = EnumNhomGoiDichVu.DichVuGiuongBenh;

  dsDichVuDaChon: any[] = [];

  urlGetDataGoi: string = 'TiemChung/GetGoiDichVuVacxinCuaBenhNhanDataForGrid';
  urlGetTotalDataGoi: string = 'TiemChung/GetGoiDichVuVacxinCuaBenhNhanTotalPageForGrid';
  urlGetDataChiTietGoi: string = 'TiemChung/GetChiTietGoiDichVuVacxinCuaBenhNhanDataForGrid';
  urlGetTotalDataChiTietGoi: string = 'TiemChung/GetChiTietGoiDichVuVacxinCuaBenhNhanTotalPageForGrid';
  
  iterableDiffer: any;
  popupLoadingData: any;

  @ViewChild('tenGoiTemplate', { static: true }) tenGoiTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomDichVuTemplate', { static: true }) nhomDichVuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('viTriTiemTemplate', { static: true }) viTriTiemTemplate: TemplateRef<any>;
  @ViewChild('muiSoTemplate', { static: true }) muiSoTemplate: TemplateRef<any>;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  @ViewChild('lieuLuongTemplate', { static: true }) lieuLuongTemplate: TemplateRef<any>;

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
  public dialogRef: MatDialogRef<TiemChungSuDungGoiDichVuPopupComponent>,
  private apiService: ApiService,
  private notificationService: NotificationService,
  private iterableDiffers: IterableDiffers) { 
    this.iterableDiffer = iterableDiffers.find([]).create(null);

    if(data.DanhSachDichVu && data.DanhSachDichVu.length > 0 ) {
      this.dsDichVuDaChon = data.DanhSachDichVu;
    }
  }

  ngOnInit() {
    this.benhNhanId = this.data.BenhNhanId;
    // this.isPTTT = this.data.IsPTTT;
    // this.isNoiTru = this.data.IsNoiTru;

    // dùng để ẩn checkbox chọn dịch vụ và show chức năng chọn giường
    // nếu là cấp giường thì chỉ cho phép chọn giường và đóng popup
    // this.isCapGiuong = this.data.IsCapGiuong == true; 
    //===============================================================

    this.gridColumns = [
      { Field: "TenGoiDichVu", Title: "Tên Gói", Width: 600 , Sortable: true, Template: this.tenGoiTemplate }
    ];
    
    this.gridColumnsChild = [
      { Field: "CheckBox", Title: "", Width: 30 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "STT", Title: "#", Width: 20 , Sortable: false, Template: this.sttTemplate },
      { Field: "TenNhomGoiDichVu", Title: "" , Width: 20, TemplateGroupHeader: this.nhomDichVuTemplate , Hidden: true},
      { Field: "MaDichVu", Title: "Mã", Width: 80 , Sortable: true },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150 , Sortable: true },
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 100 , Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 60 , Sortable: true},
      { Field: "DonGia", Title: "Đơn giá", Width: 100 , Sortable: true, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 100 , Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongFooterTemplate },
      { Field: "SoLuongDaDung", Title: "SL đã dùng", Width: 100 , Sortable: true}, //,  TemplateFooter: this.chietKhauFooterTemplate
      { Field: "SoLuongDungLanNay", Title: "SL dùng lần này", Width: 120 , Sortable: false, Template: this.soLuongTemplate } ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "ViTriTiem", Title: "Vị trí tiêm", Width: 100 , Sortable: false, Template: this.viTriTiemTemplate } ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "MuiSo", Title: "Mũi số", Width: 80 , Sortable: false, Template: this.muiSoTemplate } ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 140 , Sortable: false, Template: this.noiThucHienTemplate } ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "LieuLuong", Title: "Liều lượng", Width: 100 , Sortable: false, Template: this.lieuLuongTemplate } ,//, TemplateFooter: this.giaGoiFooterTemplate  
      { Field: "Action", Title: "", Width: 80, Template: this.actionChonGiuongTemplate }
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
        var newElement = new TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan(
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
          dataItem.DonGia,
          dataItem.ViTriTiem,
          dataItem.MuiSo,
          dataItem.NoiThucHienId,
          dataItem.LieuLuong
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
      dataItem.ViTriTiem = null;
      dataItem.MuiSo = null;
      dataItem.NoiThucHienId = null;
      dataItem.LieuLuong = null;

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
      let lstDichVuTrongGoi = this.arrChiTietDichVuDaXem.filter(x => x.YeuCauGoiDichVuId == yeuCauGoiDichVuId && x.IsActive && x.SoLuongConLai > 0);
      lstDichVuTrongGoi.forEach(element => {
        var indexDichVuDaChon = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element.Id);

        if (indexDichVuDaChon == -1) {
          var newElement = new TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan(
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
            element.DonGia,
            element.ViTriTiem,
            element.MuiSo,
            element.NoiThucHienId,
            element.LieuLuong
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
          // let soLuongConLaiDichVuDaChon = this.getSoLuongDaDungDichVuDangChon(element);
          // element.SoLuongDaDung += soLuongConLaiDichVuDaChon;
          // element.SoLuongConLai -= soLuongConLaiDichVuDaChon; 

          let soLuongFEDaLuu = this.getSoLuongDaDungDichVuDangChon(element, true);
          let soLuongFeChuaLuu = this.getSoLuongDaDungDichVuDangChon(element);
          let coChenhLechSoLuongDaLuu = soLuongFEDaLuu !== element.SoLuongDaDung;

          // xử lý trường hợp dv trong gói chỉ định từ yêu cầu khám sàng lọc khác => sai xử lý số lượng hiển thị
          let laVacXinKhacYeuCauSangLocHienTai = 
            this.dsDichVuDaChon.filter(p => p.YeuCauGoiDichVuId == element.YeuCauGoiDichVuId 
                                          && p.DichVuKyThuatBenhVienId == element.DichVuBenhVienId).length == 0;
          if (!laVacXinKhacYeuCauSangLocHienTai) {
            if (coChenhLechSoLuongDaLuu) {
              // element.SoLuongDaDung = soLuongFEDaLuu + soLuongFeChuaLuu;
              element.SoLuongDaDung = element.SoLuongDaDung + soLuongFeChuaLuu;
              element.SoLuongConLai = element.SoLuong - element.SoLuongDaDung;
            }
            else {
              element.SoLuongDaDung += soLuongFeChuaLuu;
              element.SoLuongConLai -= soLuongFeChuaLuu;
            }
          }

          var newElement = new TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan(
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
            element.DonGia,
            element.ViTriTiem,
            element.MuiSo,
            element.NoiThucHienId,
            element.LieuLuong,
            element.SoLuongConLai,
          );
          this.arrChiTietDichVuDaXem.push(newElement);
        });
      }
      else{
        let arrDichVuTheoGoiHienTai = this.arrChiTietDichVuDaXem.filter(x => x.YeuCauGoiDichVuId == dichVuChiTiet.YeuCauGoiDichVuId 
                                                                        && x.ChuongTrinhGoiDichVuId == dichVuChiTiet.ChuongTrinhGoiDichVuId);
        if(arrDichVuTheoGoiHienTai.length > 0)
        {
          event.Data.forEach(element => {
            var indexDichVuTheoGoiHienTai = arrDichVuTheoGoiHienTai.findIndex(x => x.Id == element.Id);
            if(indexDichVuTheoGoiHienTai != -1)
            {
              var dichVuTheoGoiHienTai = arrDichVuTheoGoiHienTai[indexDichVuTheoGoiHienTai];
              if(dichVuTheoGoiHienTai.SoLuongConLai != element.SoLuongConLai)
              {
                element.SoLuongConLai = dichVuTheoGoiHienTai.SoLuongConLai;
                element.SoLuongDaDung = element.SoLuong - dichVuTheoGoiHienTai.SoLuongConLai;
              }
            }
          });
        }
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
          this.arrGoiDangChon.push(new TiemChungGoiDichVuMarketingDangChon(
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
        var elementObj = JSON.parse(element);
        var indexDichVuDaChon = this.arrChiTietDichVuDaChon.findIndex(x => x.Id == element);
        if(indexDichVuDaChon == -1)
        {
          var newElement = new TiemChungChiTietGoiDichVuChiDinhTheoBenhNhan(
            element,
            elementObj.YeuCauGoiDichVuId,
            elementObj.TenGoiDichVu,
            elementObj.ChuongTrinhGoiDichVuId,
            elementObj.ChuongTrinhGoiDichVuChiTietId,
            elementObj.DichVuBenhVienId,
            elementObj.TenDichVu,
            elementObj.NhomGoiDichVu,
            1,
            element.DonGia,
            element.ViTriTiem,
            element.MuiSo,
            element.NoiThucHienId,
            element.LieuLuong
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

    let yeuCauGoiMarketing: TiemChungChiDinhGoiDichVuTheoBenhNhan = new TiemChungChiDinhGoiDichVuTheoBenhNhan();
    yeuCauGoiMarketing.YeuCauTiepNhanId = 0;
    yeuCauGoiMarketing.DichVus = this.arrChiTietDichVuDaChon;
    yeuCauGoiMarketing.IsKhamBenhDangKham = this.documentType == DocumentType.KhamBenhDangKham;
    let url = "TiemChung/KiemTraValidationChiDinhDichVuVacxinTrongGoiMarketing";

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

  getSoLuongDaDungDichVuDangChon(dataItem, laDataDaLuu: boolean = false) {
    let soLuongDichVuDaChon = this.dsDichVuDaChon.filter(p => ((laDataDaLuu && p.Id) || (!laDataDaLuu && !p.Id)) &&
                                                              p.YeuCauGoiDichVuId == dataItem.YeuCauGoiDichVuId &&
                                                              p.DichVuKyThuatBenhVienId == dataItem.DichVuBenhVienId)
                                                 .length;

    return soLuongDichVuDaChon;
    // return dataItem.SoLuongConLai - soLuongDichVuDaChon; 
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
