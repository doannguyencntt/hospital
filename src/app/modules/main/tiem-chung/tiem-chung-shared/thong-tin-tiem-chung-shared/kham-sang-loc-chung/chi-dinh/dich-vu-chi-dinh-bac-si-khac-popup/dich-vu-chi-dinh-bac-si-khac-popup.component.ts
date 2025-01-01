import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ListInChiDinhTiemChung } from '../dich-vu/dich-vu.model';
import { PopupChonLoaiInViewComponent } from 'src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';

import icClose from '@iconify/icons-ic/twotone-close';

@Component({
    selector: 'app-dich-vu-chi-dinh-bac-si-khac-popup',
    templateUrl: './dich-vu-chi-dinh-bac-si-khac-popup.component.html',
    styleUrls: ['./dich-vu-chi-dinh-bac-si-khac-popup.component.scss']
})

export class DichVuChiDinhBacSiKhacPopupComponent implements OnInit {
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

    constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

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
                    var chiDinh = new ListInChiDinhTiemChung();
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
                var chiDinh = new ListInChiDinhTiemChung();
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
}