import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { KhoLinhTu, ThongTinLinhTuKho, LinhTrucTiepDuocPham, QueryInfoQueryInfo,LinhDuocPhamTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, KhoId, LinhDuocPhamTrucTiepViewModel,SearchDanhSachThongDuocPham, ListIds, DuocPhamTonKhoKhongDu } from '../yeu-cau-linh-thuoc.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { Converter } from 'showdown';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import data from '@iconify/icons-ic/twotone-keyboard-voice';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
declare var jQuery: any;

@Component({
  selector: 'app-phieu-linh-truc-tiep-cho-goi-shared',
  templateUrl: './phieu-linh-truc-tiep-cho-goi-shared.component.html',
  styleUrls: ['./phieu-linh-truc-tiep-cho-goi-shared.component.scss']
})
export class PhieuLinhTrucTiepChoGoiSharedComponent implements OnInit {
  documentType: DocumentType;
  linhTrucTiepDuocPhamObject = new LinhDuocPhamTrucTiep();
  searchDanhSachThongDuocPham = new  SearchDanhSachThongDuocPham();
  validationErrors: any;
  phieuLinhTrucTiep = {} as KhoLinhTu;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  gridColumnTuChois: any[] = [];
  gridDataSources: any = {};
  isShowChoGoi: boolean = false;
  phonglamViecId: any;
  getNhanVienId: any;
  gridDataSource: any = {};
  checkChild :boolean = false;
  yeuCauLinhDuocPhamId : number = 0;
  linhTrucTiepMasterName :string = "masterLinhTT";
  popupLoadingData: any = null;
  LinhVeKhoa = "";
  nguoiYeuCau = "";
  ngayYeuCau: Date;
  nguoiDuyet = "";
  ngayDuyet = null;
  ghiChu = "";
  lan :number = 0;
  @ViewChild('checkBoxChildTemplate', { static: true }) checkBoxChildTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('gridCha', { read: GridComponent, static: false }) gridCha: GridComponent;
  
  constructor(private notificationService: NotificationService, private cdRef: ChangeDetectorRef, private dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute, private baseService: BaseService, private authService: AuthService) { }

  ngOnInit() {
    this.phieuLinhTrucTiep = new KhoLinhTu();
    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamChiTiets = new Array<LinhTrucTiepDuocPham>();
    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 60 },
      { Field: "MaTN", Title: "Mã TN", Width: 100 },
      { Field: "MaBN", Title: "Mã NB", Width: 100 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SLYeuCau", Title: "Sl", Width: 120 },
    ];

    this.gridColumns = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate ,Hidden: this.isShowChoGoi},
      // { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 }, // nội trú => ngày điều trị ; ngoại trú => thời điểm chỉ định
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 }, // thời điểm chỉ định
      { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "Action", Title: "", Width: 80 }
    ];
    this.gridColumnTuChois = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 180 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "Action", Title: "", Width: 80 }
    ];
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isShowChoGoi = true;
      this.yeuCauLinhDuocPhamId =id;
    }
    this.phonglamViecId = this.authService.getPhongLamViecId();
    this.getNhanVienId = this.authService.getAccessUser();
  }
  setDataGridView() {
    this.gridChild.gridDataSource = this.gridDataSource;

    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();
  }
  setDataGridViewRefesh() {
    this.gridChild.gridDataSource = this.gridDataSource;
    if (this.gridChild !== undefined)
      this.gridChild.setDataSource();
  }
  getById(id: number) {
    this.linhTrucTiepDuocPhamObject.Id = id;
    this.apiService.get<LinhDuocPhamTrucTiep>("YeuCauLinhDuocPham/GetALL?id=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          let vo= {
             KhoLinhId :resultData.KhoXuatId,
             YeuCauLinhDuocPhamId : id,
             TuNgay: null,
             DenNgay : null
          };
          this.apiService.post<ThongTinLinhTuKho>('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(
            resultDatas => {
              this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetDataGridYeuCauLinhDuocPhamLuuTamThoi',vo).subscribe(
                resultData => {
                  this.gridDataSource = {
                    data: resultData,
                    total: resultData.length
                  };
                  
                  let STT = 1;
                  resultData.forEach(element => {
                    element.STT = STT;
                    STT++;
                  });
                  resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
                  this.setDataGridView();
                  let arrayNull: any[] = [];
                  if(this.gridDataSource.total != 0)
                  {
                    this.gridDataSource.data.forEach(element => {
                      if(element.IsCheckRowItem == true)
                      {
                        arrayNull.push(element.Id);
                      }
                    });
                  }
                  this.extCheckboxSelections(arrayNull);
                  this.selectCheckBox(arrayNull);
                },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                });
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
          
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  extCheckboxSelections(event) {
    this.lan++ ;
    this.cdRef.detectChanges();
    let tmpArray: any[] = event;
    let tmp: any[] = [];
    this.linhTrucTiepDuocPhamObject.CheckKhiTao = tmpArray;
    let gridCheckCu :any[]=[];
    if(this.linhTrucTiepDuocPhamObject.CheckKhiTao.length != 0)
    {
      let dataCheck :any[]=[];
      for (let i = 0; i < this.gridDataSource.data.length ; i++) {
        for (let j = 0; j < this.linhTrucTiepDuocPhamObject.CheckKhiTao.length; j++) {
           if(this.linhTrucTiepDuocPhamObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId)
           {
             if(this.checkChild == false)
             {
              this.gridDataSource.data[i].IsCheckRowItem = true;
              if(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
              {
                this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(elements => {
                  if(elements.SoLuongTon >= elements.SLYeuCau)
                  {
                    elements.IsCheckRowItem = true;
                  }
                });
              }
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
              break;
             }
             else{
               this.gridDataSource.data[i].IsCheckRowItem = true;
               if(this.gridDataSource.data[i].IsCheckRowItem == true)
               {
                if(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.length == this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
                {
                  this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens.forEach(elements => {
                    if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                  });
                }
               }
              
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauDuocPhamBenhViens);
              break;
             }
            
           }
           else{
             let index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == this.gridDataSource.data[i].YeuCauTiepNhanId);
             if(index == -1)
             {
              gridCheckCu.push(this.gridDataSource.data[i]);
             }
           }
        }
      }
      this.linhTrucTiepDuocPhamObject.CheckKhiTao.forEach(element => {
        var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
        if(index != -1)
        {
          let dd = gridCheckCu.filter(sp=>sp.YeuCauTiepNhanId ==element);//.IsCheckRowItem = false
          gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1)
        }
      });
      gridCheckCu.forEach(element => {
        element.IsCheckRowItem = false;
        element.ListYeuCauDuocPhamBenhViens.forEach(elements => {
            elements.IsCheckRowItem = false;
          });
          this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
      });
    }
    else{
      this.gridDataSource.data.forEach(element => {
       
         element.IsCheckRowItem = false;
         element.ListYeuCauDuocPhamBenhViens.forEach(elements => {
         elements.IsCheckRowItem = false;
         });
         this.getDataSourceChild(element.ListYeuCauDuocPhamBenhViens);
      });
    }

  
   
  }

  OnDataBound(dataChild) {
  }

  changeTuNgay(event){
    this.timkiem();
  }

  changeDenNgay(event){
    this.timkiem();
  }

  timkiem(){
    this.loadingPage();
    this.apiService.get<LinhDuocPhamTrucTiep>("YeuCauLinhDuocPham/GetALL?id=" + this.yeuCauLinhDuocPhamId).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          let vo= {
             KhoLinhId :resultData.KhoXuatId,
             YeuCauLinhDuocPhamId :this.yeuCauLinhDuocPhamId,
             TuNgay:  CommonService.formatDateTime(this.searchDanhSachThongDuocPham.TuNgay, "mm/dd/yyyy"),
             DenNgay : CommonService.formatDateTime(this.searchDanhSachThongDuocPham.DenNgay, "mm/dd/yyyy")
          };
          this.apiService.post<ThongTinLinhTuKho>('YeuCauLinhDuocPham/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + this.yeuCauLinhDuocPhamId).subscribe(
            resultDatas => {
              this.linhTrucTiepDuocPhamObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepDuocPhamObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.LinhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.apiService.post<Array<any>>('YeuCauLinhDuocPham/GetDataGridYeuCauLinhDuocPhamLuuTamThoi',vo).subscribe(
                resultData => {
                  this.gridDataSource = {
                    data: resultData,
                    total: resultData.length
                  };
                  // let arrayNull: any[] = [];
                  // this.extCheckboxSelections(arrayNull);
                  // this.gridCha.onSelectAllChange('unchecked');
                  let STT = 1;
                  resultData.forEach(element => {
                    element.STT = STT;
                    STT++;
                  });
                  resultData = resultData.sort((a, b) => (a.STT > b.STT) ? 1 : -1)
                  this.setDataGridView();
                  this.setDataGridView();
                  this.closePopupLoadingData();
                },
                (err: ApiError) => {
                  this.closePopupLoadingData();
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                });
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
          
        }
      },
      (err: ApiError) => {
        this.closePopupLoadingData();
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
  
  checkboxGridChild(event,dataItem){
    if(event == true)
    {
      dataItem.IsCheckRowItem = true;
    }
    else{
      dataItem.IsCheckRowItem = false;
    }
  //   let mySelection: number[] = [];
    this.gridDataSource.data.forEach(element => {
      if(dataItem.YeuCauTiepNhanId == element.Id)
      {
        let inxdex =element.ListYeuCauDuocPhamBenhViens.findIndex(sp=>sp.IsCheckRowItem ==true);
        if(inxdex != -1)
        {
          this.checkChild = true;
          let indexChange = element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.Id == dataItem.Id) ;
          if(indexChange.length == 1)
          {
            indexChange.forEach(element => {
              element.IsCheckRowItem = event;
            });
            
          }
          let inxdex =element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false);
          if(element.ListYeuCauDuocPhamBenhViens.length == inxdex.length)
          {
            if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('unchecked')) {
              jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
            }
          }
          if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('checked')) {
            jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
          }
          
          return;
        }
        else{
            this.checkChild = true;
            let inxdex =element.ListYeuCauDuocPhamBenhViens.filter(sp=>sp.IsCheckRowItem == false);
            if(element.ListYeuCauDuocPhamBenhViens.length == inxdex.length)
            {
              if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).prop('unchecked')) {
                jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element.Id).trigger('click');
              }
            }
          return ;
        }
      }
   });
   //this.checkChild = false;
  }
  selectCheckBox(arr :any){
    if(arr.length != 0)
    {
      arr.forEach(element => {
        if (!jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element).prop('checked')) {
          jQuery('#' + this.linhTrucTiepMasterName + 'selectCheckboxId'+element).trigger('click');
        }
      });
    }
  }

  checkboxGridCha(event,dataItem){
    if(event == true)
    {
      dataItem.IsCheckRowItem = true;
    }
  }

  getDataSourceChild(parentItem:any){    
    return {
      data: parentItem,
      total: parentItem.length
    };
  }

  gridDichVuDuocCheck(){
    let yeuCauDuocPhamBenhViens :any[]=[];
    this.gridDataSource.data.forEach(element => {
      if(element.IsCheckRowItem == true)
      {
        element.ListYeuCauDuocPhamBenhViens.forEach(item => {
          if(item.IsCheckRowItem == true)
          {
            let index = this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(sp=>sp == item.Id);
            if(index == -1)
            {
              yeuCauDuocPhamBenhViens.push(item);
            }
          }
          
        });
      }
    });
    return yeuCauDuocPhamBenhViens;
  }
  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  getSharedData() {
    //thong tin login 
    this.linhTrucTiepDuocPhamObject.YeuCauLinhDuocPhamId =this.yeuCauLinhDuocPhamId;
    this.validationErrors = [];
    this.linhTrucTiepDuocPhamObject.GhiChu = this.ghiChu;
    //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
    //----Từ ngày-------------------------------------------------------------//
    if(this.searchDanhSachThongDuocPham.TuNgay !=null)
    {
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay =this.searchDanhSachThongDuocPham.TuNgay;
    }
    else{
      let yeuCauDuocPhamBenhViens :any[]=[];

      yeuCauDuocPhamBenhViens = this.gridDichVuDuocCheck();

      if(yeuCauDuocPhamBenhViens.length != 0)
      {
        let listSortNhoNhatDenLonNhat = yeuCauDuocPhamBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1)


        this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopTuNgay =new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
      }
    }
    //----đến ngày-------------------------------------------------------------//
    if(this.searchDanhSachThongDuocPham.DenNgay !=null)
    {
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay =this.searchDanhSachThongDuocPham.DenNgay;
    }
    else{
      this.linhTrucTiepDuocPhamObject.ThoiDiemLinhTongHopDenNgay = null;
    }
    //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//


    if (this.phieuLinhTrucTiep.KeyId != null) {
      this.linhTrucTiepDuocPhamObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
    }

    // yeucau duoc pham benh vien
    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
      this.validationErrors = [];
    }
    else {
      this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhViensTT = new Array<KhoId>()
      this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds = new Array<ListIds>();
      this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus = new Array<DuocPhamTonKhoKhongDu>();
      this.gridDataSource.data.forEach(element => {
        if(element.IsCheckRowItem == true)
        {
          element.ListYeuCauDuocPhamBenhViens.forEach(item => {
            if(item.IsCheckRowItem == true)
            {
              let index = this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.findIndex(sp=>sp == item.Id);
              if(index == -1)
              {
                this.linhTrucTiepDuocPhamObject.YeuCauDuocPhamBenhIds.push(item.Id);
                let dpKhongDuTon ={
                    DuocPhamId:item.DuocPhamId,
                    TenDuocPham:item.TenDuocPham,
                    SoLuongTon:item.SoLuongTon,
                    SoLuongYeuCau:item.SLYeuCau
                };
                this.linhTrucTiepDuocPhamObject.DanhSachDuocPhamTonKhongDus.push(dpKhongDuTon);
              }
            }
          });
        }
        
      });
    }
  
    this.setDataGridView();
    return this.linhTrucTiepDuocPhamObject;
  }
}
