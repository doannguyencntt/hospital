import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { element } from 'protractor';
import { PopupChonLoaiInViewComponent } from 'src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ListInChiDinh } from '../../../kham-benh.model';
import { XnCovidSarscov2PopupComponent } from '../xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup',
  templateUrl: './lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component.scss']
})
export class LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent implements OnInit {

  icClose = icClose;

  urlGetData: string = "KhamBenh/GetChiDinhCuaBacSiKhacDataForGridAsync";
  urlGetTotalPage: string = "KhamBenh/GetChiDinhBacSiKhacTotalPageForGridAsync";
  // urlGetDataDetail: string = "KhamBenh/GetICDKhacDataForGridAsyncDetail";
  // urlGetTotalPageDetail: string = "KhamBenh/GetICDKhacTotalPageForGridAsyncDetail";

  yeuCauTiepNhanId: number;
  yeuCauKhamBenhId: number;
  ghiChuCanLamSang : string ="";
  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];
  listChonDichVuChiDinh: any[] = [];
  listChonDichVuChiDinhReLoad: any[] = [];
  dataIn : any;
  checkAll: boolean = null;
  isCheckXacNhanIn: boolean = false;
  groups: GroupDescriptor[] = [{ field: 'TenNhom', dir: null}];
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('GridChiDinhBSKhac', { read: GridComponent, static: false }) gridChild: GridComponent;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,private apiService: ApiService,
  
  private notificationService: NotificationService,) { }

  ngOnInit() {
    this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.yeuCauKhamBenhId = this.data.YeuCauKhamBenhId;
    this.ghiChuCanLamSang = this.data.GhiChuCanLamSang;
    this.gridColumns = [
      { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "Id", Title: "#", Width: 45 , Sortable: false, Template: this.sttTemplate },
      { Field: "MaDichVu", Title: "Mã dịch vụ", Width: 80 , Sortable: true },
      { Field: "TenNhom", Title: "", Width: 80 , Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150 , Sortable: true },
      { Field: "TenLoaiGia", Title: "Loại giá", Width: 80 , Sortable: true },
      { Field: "SoLuong", Title: "Số lượng", Width: 80 , Sortable: true },
      { Field: "TenNguoiChiDinh", Title: "Bác sĩ chỉ định", Width: 150 , Sortable: true }
    ];
  }
  SelectcheckAllboxIn(event){
    let gridDataIn: any[] = [];
    if (this.dataIn.Data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    else {

        gridDataIn = this.gridChild.getAllDataFromDatasource();
        this.listChonDichVuChiDinh = [];
    }
    if (event == true) {

        gridDataIn.forEach(element => {
            element.isCheckRowItem = true;
            this.checkAll = true;
            let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
            if (index == -1) {
                var chiDinh = new ListInChiDinh();
                chiDinh.nhomChiDinhId = element.NhomId;
                chiDinh.dichVuChiDinhId = element.Id;
                this.listChonDichVuChiDinh.push(chiDinh);
            }
        })
    }
    else {

        gridDataIn.forEach(element => {
            element.isCheckRowItem = false;
        });
        this.listChonDichVuChiDinh = [];
    }
    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
  }
  checkboxIn(event: any, dataItem: any) {
    if (this.dataIn.Data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
    if (event == true) {
        if (index == -1) {
            var chiDinh = new ListInChiDinh();
            chiDinh.nhomChiDinhId = dataItem.NhomId;
            chiDinh.dichVuChiDinhId = dataItem.Id;
            this.listChonDichVuChiDinh.push(chiDinh);
            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                this.checkAll = true;
            }
        }
        else {
            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                this.checkAll = true;
            }
            else {
                this.checkAll = false;
            }
        }

        dataItem.isCheckRowItem = true;
    }
    else {
        this.checkAll = false;
        if (index >= 0) {
            this.listChonDichVuChiDinh.splice(index, 1)
        }
    }
    if (this.listChonDichVuChiDinh.length == this.dataIn.Data.length) {
        this.checkAll = true;
    }
    else {
        this.checkAll = false;
    }
    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
}
  extOnDataBound(event){
    this.dataIn =event;
    
  }
  InChiDinhNoiTru(kieuin) {
    this.listChonDichVuChiDinhReLoad = [];
    let gridData = this.gridChild.getAllDataFromDatasource();
    gridData.forEach(elements => {
        this.listChonDichVuChiDinh.forEach(lstChiDinh => {
            if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId) {
                this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
            }
        });
    });
    let listGridSelect :any[]= [];
     gridData.forEach(elements => {
        this.listChonDichVuChiDinh.forEach(lstChiDinh => {
            if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId) {
                listGridSelect.push(elements);
            }
        });
    });
    let dataIn = {
            YeuCauTiepNhanId: this.yeuCauTiepNhanId,
            YeuCauKhamBenhid: this.yeuCauKhamBenhId,
            ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad, // grid
            InChungChiDinh: kieuin,
            hosting: window.location.protocol + "//" + window.location.host,
            KieuInChung: true,
            GhiChuCanLamSang: this.ghiChuCanLamSang,
            IsKhamDoanTatCa : false, // khám đoàn k có
            EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
            listGridSelect: listGridSelect,
            Loai: 1,
            InDichVuBacSiChiDinh : true
        };
    let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
        width: '1000px',
        data: { Model: dataIn }
    });
}
//   InChiDinhNoiTru(kieuIn){
//     let gridChiDinh :any[] = [];
//     this.dataIn.Data.forEach(elements => {
//       if(elements.NhomId == 1 || elements.NhomId == 2)
//       {
//         let obj = {
//           dichVuChiDinhId : elements.Id,
//           nhomChiDinhId : elements.NhomId
//         };
//         gridChiDinh.push(obj);
//       }
//       });
//     let dataIn = {
//       YeuCauTiepNhanId: this.yeuCauTiepNhanId,
//       YeuCauKhamBenhid: this.yeuCauKhamBenhId,
//       ListDichVuChiDinh: gridChiDinh, // grid
//       InChungChiDinh: kieuIn,
//       hosting: window.location.protocol + "//" + window.location.host,
//       KieuInChung: true,
//       GhiChuCanLamSang: this.ghiChuCanLamSang,
//       IsKhamDoanTatCa : false, // khám đoàn k có
//       EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
//       listGridSelect: this.dataIn.Data,
//       Loai: 1,
//       InDichVuBacSiChiDinh : true
//   };
//   let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
//     width: '1000px',
//     data: { Model: dataIn }
// });
//   }
  
  close() {
    this.dialog.closeAll();
  }
  //BVHD-3761
    //=======================================================================================================
    InPhieuXN(){
        let yeuCauDichVuKyThuatIds:any[] = [];
        let gridData = this.gridChild.getAllDataFromDatasource();
        gridData.forEach(elements => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == elements.Id && 
                    lstChiDinh.nhomChiDinhId == elements.NhomId && 
                    lstChiDinh.nhomChiDinhId == 2) {
                        yeuCauDichVuKyThuatIds.push(lstChiDinh.dichVuChiDinhId);
                }
            });
        });
        
        let hosting = window.location.protocol + "//" + window.location.host;
        let model={
            YeuCauDichVuKyThuatIds:yeuCauDichVuKyThuatIds,
            Hosting:hosting,
            YeuCauTiepNhanId:this.yeuCauTiepNhanId
        };
        if(yeuCauDichVuKyThuatIds.length == 0)
        {
            let mess = "Chưa chọn dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
            this.notificationService.showError(mess);
        }
        else{
            this.apiService
            .post<any>(
              "TiepNhanBenhNhan/InPhieuXetNghiemCovidBacSiKhacChiDinh",model
            )
            
            .subscribe((resultData) => {
                if(resultData != null && resultData !="")
                {
                    let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
                        width: '1000px',
                        height: 'auto',
                        data: { Model: resultData }
                      }).afterClosed().subscribe(result => {
                      });
                }
                else{
                    let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                    this.notificationService.showError(mess);
                }
            });
        }
        
      }
      //=======================================================================================================
}
