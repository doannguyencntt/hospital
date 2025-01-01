import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { KhoLinhTu, ThongTinLinhTuKho, LinhTrucTiepVatTu, LinhVatTuTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, KhoId, SearchDanhSachThongVatTu, VatTuTonKhoKhongDu } from '../yeu-cau-linh-vat-tu.model';
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
import { ListIds } from '../../../duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

declare var jQuery: any;


@Component({
  selector: 'app-phieu-linh-vt-truc-tiep-cho-goi-shared',
  templateUrl: './phieu-linh-vt-truc-tiep-cho-goi-shared.component.html',
  styleUrls: ['./phieu-linh-vt-truc-tiep-cho-goi-shared.component.scss']
})
export class PhieuLinhVtTrucTiepChoGoiSharedComponent implements OnInit {
  linhTrucTiep = {} as LinhVatTuTrucTiep;
  linhTrucTiepVatTuObject = new LinhVatTuTrucTiep();
  searchDanhSachThongVatTu = new SearchDanhSachThongVatTu();
  documentType: DocumentType;
  phieuLinhTrucTiep = {} as KhoLinhTu;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  isShowChoGoi: boolean = false;
  yeuCauLinhVatTuId :number = null;
  phonglamViecId: any ;
  getNhanVienId: any ;
  gridDataSource: any = {};
  gridDataSourceCreate: any = {};
  linhVeKhoa = "";
  nguoiYeuCau = "";
  ngayYeuCau: Date;
  nguoiDuyet = "";
  ngayDuyet = null;
  ghiChu = "";
  linhTrucTiepMasterName :string = "masterLinhTT";
  validationErrors: any;
  checkChild :boolean = false;
  popupLoadingData: any = null;
    shareChoGoi :boolean = false;
  @ViewChild('slYeuCauTemplate', { static: true }) slYeuCauTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('checkBoxChildTemplate', { static: true }) checkBoxChildTemplate: TemplateRef<any>;
  @ViewChild('gridCreate', { read: GridComponent, static: false }) gridChild: GridComponent;
  @ViewChild('gridCha', { read: GridComponent, static: false }) gridCha: GridComponent;
  constructor(private notificationService: NotificationService, private cdRef: ChangeDetectorRef, private dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute, private baseService: BaseService, private authService: AuthService) { }

  ngOnInit() {
   
    this.gridChildColumns = [
      { Field: "STT", Title: "#", Width: 60 },
      { Field: "MaTN", Title: "Mã TN", Width: 100 },
      { Field: "MaBN", Title: "Mã NB", Width: 100 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "SLYeuCau", Title: "SL", Width: 120 },
      { Field: "Action", Title: "", Width: 80 }
    ]

    this.gridColumns = [
      { Field: "CheckBox", Title: "", Width: 40, Template: this.checkBoxChildTemplate, Hidden: this.isShowChoGoi },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSX", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL tồn", Width: 100 },
      { Field: "SLYeuCau", Title: "SL Yêu cầu", Width: 100 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSyKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
    ];
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isShowChoGoi = true;
      this.yeuCauLinhVatTuId =id;
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
    this.linhTrucTiepVatTuObject.Id = id;
    this.apiService.get<LinhVatTuTrucTiep>("YeuCauLinhVatTu/GetALL?id=" + id).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          let vo= {
             KhoLinhId :resultData.KhoXuatId,
             YeuCauLinhVatTuId : id,
             TuNgay: null,
             DenNgay : null
          };
          this.apiService.post<ThongTinLinhTuKho>('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + id).subscribe(
            resultDatas => {
              this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetDataGridYeuCauLinhVatTuLuuTamThoi',vo).subscribe(
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
  changeTuNgay(event){
    this.timkiem();
  }
  changeDenNgay(event){
    this.timkiem();
  }
  blur() {
    this.timkiem();
  }
  timkiem() {
    this.loadingPage();
    this.apiService.get<LinhVatTuTrucTiep>("YeuCauLinhVatTu/GetALL?id=" + this.yeuCauLinhVatTuId).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.phieuLinhTrucTiep.KeyId = resultData.KhoXuatId;
          this.phieuLinhTrucTiep.DisplayName = resultData.TenKhoXuat;
          let vo= {
             KhoLinhId :resultData.KhoXuatId,
             YeuCauLinhVatTuId :this.yeuCauLinhVatTuId,
             TuNgay:  CommonService.formatDateTime(this.searchDanhSachThongVatTu.TuNgay, "mm/dd/yyyy"),
             DenNgay : CommonService.formatDateTime(this.searchDanhSachThongVatTu.DenNgay, "mm/dd/yyyy")
          };
          this.apiService.post<ThongTinLinhTuKho>('YeuCauLinhVatTu/ThongTinLinhTuKhoDaTao?idYeuCauLinhDP=' + this.yeuCauLinhVatTuId).subscribe(
            resultDatas => {
              this.linhTrucTiepVatTuObject.NhanVienYeuCauId = resultDatas[0].NhanVienYeuCauId;
              this.linhTrucTiepVatTuObject.KhoNhapId = resultDatas[0].LinhVePhongId;
              this.linhVeKhoa = resultDatas[0].LinhVeKhoa;
              this.nguoiYeuCau = resultDatas[0].NguoiYeuCau;
              let dataTime = resultDatas[0].NgayYeuCau;
              this.ngayYeuCau = dataTime;
              this.ghiChu = resultDatas[0].GhiChu;
              this.apiService.post<Array<any>>('YeuCauLinhVatTu/GetDataGridYeuCauLinhVatTuLuuTamThoi',vo).subscribe(
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

  extCheckboxSelections(event) {
    this.cdRef.detectChanges();
    let tmpArray: any[] = event;
    let tmp: any[] = [];
    this.linhTrucTiepVatTuObject.CheckKhiTao = tmpArray;
    let gridCheckCu :any[]=[];
    if(this.linhTrucTiepVatTuObject.CheckKhiTao.length != 0)
    {
      let dataCheck :any[]=[];
      for (let i = 0; i < this.gridDataSource.data.length ; i++) {
        for (let j = 0; j < this.linhTrucTiepVatTuObject.CheckKhiTao.length; j++) {
           if(this.linhTrucTiepVatTuObject.CheckKhiTao[j] == this.gridDataSource.data[i].YeuCauTiepNhanId)
           {
             if(this.checkChild == false)
             {
              this.gridDataSource.data[i].IsCheckRowItem = true;
              if(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
              {
                this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                  if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                });
              }
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
              break;
             }
             else{
               this.gridDataSource.data[i].IsCheckRowItem = true;
               if(this.gridDataSource.data[i].IsCheckRowItem == true)
               {
                if(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.length == this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false).length)
                {
                  this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
                    if(elements.SoLuongTon >= elements.SLYeuCau)
                    {
                      elements.IsCheckRowItem = true;
                    }
                  });
                }
               }
              
              this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
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
          //  else{
            
          //   this.gridDataSource.data[i].IsCheckRowItem = false;
          //   this.gridDataSource.data[i].ListYeuCauVatTuBenhViens.forEach(elements => {
          //       elements.IsCheckRowItem = false;
          //     });
          //     this.getDataSourceChild(this.gridDataSource.data[i].ListYeuCauVatTuBenhViens);
          //  }
        }
      }
      this.linhTrucTiepVatTuObject.CheckKhiTao.forEach(element => {
        var index = gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element);
        if(index != -1)
        {
          let dd = gridCheckCu.filter(sp=>sp.YeuCauTiepNhanId ==element);//.IsCheckRowItem = false
          gridCheckCu.splice(gridCheckCu.findIndex(x => x.YeuCauTiepNhanId == element), 1)
        }
      });
      gridCheckCu.forEach(element => {
        element.IsCheckRowItem = false;
        element.ListYeuCauVatTuBenhViens.forEach(elements => {
            elements.IsCheckRowItem = false;
          });
          this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
      });
    }
    else{
      this.gridDataSource.data.forEach(element => {
       
         element.IsCheckRowItem = false;
         element.ListYeuCauVatTuBenhViens.forEach(elements => {
         elements.IsCheckRowItem = false;
         });
         this.getDataSourceChild(element.ListYeuCauVatTuBenhViens);
      });
    }

  
   
  }
  // grid item con 
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
        let inxdex =element.ListYeuCauVatTuBenhViens.findIndex(sp=>sp.IsCheckRowItem ==true);
        if(inxdex != -1)
        {
          this.checkChild = true;
          let indexChange = element.ListYeuCauVatTuBenhViens.filter(sp=>sp.Id == dataItem.Id) ;
          if(indexChange.length == 1)
          {
            indexChange.forEach(element => {
              element.IsCheckRowItem = event;
            });
            
          }
          let inxdex =element.ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false);
          if(element.ListYeuCauVatTuBenhViens.length == inxdex.length)
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
            let inxdex =element.ListYeuCauVatTuBenhViens.filter(sp=>sp.IsCheckRowItem == false);
            if(element.ListYeuCauVatTuBenhViens.length == inxdex.length)
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

  getDataSourceChild(parentItem: any) {
    return {
      data: parentItem,
      total: parentItem.length
    };
  }
  gridDichVuDuocCheck(){
    let yeuCauVatTuBenhViens :any[]=[];
    this.gridDataSource.data.forEach(element => {
      if(element.IsCheckRowItem == true)
      {
        element.ListYeuCauVatTuBenhViens.forEach(item => {
          if(item.IsCheckRowItem == true)
          {
            let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp=>sp == item.Id);
            if(index == -1)
            {
              yeuCauVatTuBenhViens.push(item);
            }
          }
          
        });
      }
    });
    return yeuCauVatTuBenhViens;
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
  getSharedData() {
    //thong tin login 
    this.validationErrors = [];
    this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
       //thong tin login 
       this.validationErrors = [];
       this.linhTrucTiepVatTuObject.GhiChu = this.ghiChu;
       //-----------------xử lý phiếu linh từ ngày - đến ngày---------------------//
       //----Từ ngày-------------------------------------------------------------//
       if(this.searchDanhSachThongVatTu.TuNgay !=null)
       {
         this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay =this.searchDanhSachThongVatTu.TuNgay;
       }
       else{
         let yeuCauVatTuBenhViens :any[]=[];
   
         yeuCauVatTuBenhViens = this.gridDichVuDuocCheck();
   
         if(yeuCauVatTuBenhViens.length != 0)
         {
           let listSortNhoNhatDenLonNhat = yeuCauVatTuBenhViens.sort((a, b) => (new Date(a.NgayDieuTri) > new Date(b.NgayDieuTri)) ? 1 : -1)
   
   
           this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopTuNgay =new Date(listSortNhoNhatDenLonNhat[0].NgayDieuTri);
         }
       }
       //----đến ngày-------------------------------------------------------------//
       if(this.searchDanhSachThongVatTu.DenNgay !=null)
       {
         this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay =this.searchDanhSachThongVatTu.DenNgay;
       }
       else{
        this.linhTrucTiepVatTuObject.ThoiDiemLinhTongHopDenNgay = null;
       }
       //--------------end xử lý phiếu linh từ ngày - đến ngày---------------------//

    if (this.phieuLinhTrucTiep.KeyId != null) {
      this.linhTrucTiepVatTuObject.KhoXuatId = this.phieuLinhTrucTiep.KeyId;
    }

    // yeucau vat tu benh vien
    if (this.gridDataSource.data == null || this.gridDataSource.data == undefined) {
      // this.validationErrors = [];
    }
    else {
      this.linhTrucTiepVatTuObject.YeuCauVatTuBenhViensTT = new Array<KhoId>();
      this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds = new Array<ListIds>();
      this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus = new Array<VatTuTonKhoKhongDu>();
      this.gridDataSource.data.forEach(element => {
        if (element.IsCheckRowItem == true) {
          element.ListYeuCauVatTuBenhViens.forEach(item => {
            if (item.IsCheckRowItem == true) {
              let index = this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.findIndex(sp=>sp == item.Id);
              if(index == -1)
              {
                this.linhTrucTiepVatTuObject.YeuCauVatTuBenhVienIds.push(item.Id);
                let vtKhongDuTon ={
                  VatTuId:item.VatTuId,
                  TenVatTu:item.TenVatTu,
                  SoLuongTon:item.SoLuongTon,
                  SoLuongYeuCau:item.SLYeuCau
              };
              this.linhTrucTiepVatTuObject.DanhSachVatTuTonKhongDus.push(vtKhongDuTon);
              }
             
            }
          });
        }
      });
    }
    this.linhTrucTiepVatTuObject.YeuCauLinhVatTuId = this.yeuCauLinhVatTuId;
    this.setDataGridView();
    return this.linhTrucTiepVatTuObject;
  }
}
