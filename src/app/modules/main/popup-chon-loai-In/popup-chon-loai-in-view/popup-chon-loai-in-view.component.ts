import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { EnumLoaiPhieuIn, QueryObjData, ListInChiDinh } from '../popup-chon-loai-In.model';
import { ApiService } from 'src/app/core/services/api.service';
import { InBangKhamBenhChiDinhComponent } from '../../kham-benh/kham-benh/lan-kham-hien-tai/in-bang-kham-benh-chi-dinh/in-bang-kham-benh-chi-dinh.component';
import { SelectAllCheckboxState } from '@progress/kendo-angular-grid';
import { PhieuDieuTriPopupInPhieuClsComponent } from '../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-popup-in-phieu-cls/phieu-dieu-tri-popup-in-phieu-cls.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PtttClsInChiDinhComponent } from '../../phau-thuat-thu-thuat/phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/pttt-cls-in-chi-dinh/pttt-cls-in-chi-dinh.component';
import icSearch from "@iconify/icons-ic/twotone-search";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-popup-chon-loai-in-view',
  templateUrl: './popup-chon-loai-in-view.component.html',
  styleUrls: ['./popup-chon-loai-in-view.component.scss']
})
export class PopupChonLoaiInViewComponent implements OnInit {

  hostingName: string;
  src = '';
  icClose = icClose;
  luaChon: number = 1;
  gridDataSource: any = {
    data: [],
    total: 0
  };
  ///---------------/////// --> in chỉ định
  loaiPhieu: any;
  modelPrint: any;
  gridColumnsNhom: any[] = [];
  gridColumnsDichVu: any[] = [];
  gridColumnsNhomNgoaiTru :any[] = [];
  gridColumnsDichVuNgoaiTru: any[] = [];
  listMySectionId: any[] = [];
  ChonKieuInChung: boolean = true;
  showLoaiPhieuIn: boolean = false; // kieu in
  phieuInDichVuKham: any[] = [];
  phieuInDichVuKyThuat: any[] = [];
  nhomChiDinhId: number = 0;
  dichVuChiDinhId: number = 0;
  listChonDichVuChiDinh: any[] = [];
  listChonDichVuChiDinhReLoad: any[] = [];
  public checkAll: boolean = null;
  checkchonDichVuIn : boolean = false;
  ///---------------///////
  public checkboxOnly: boolean = true;

  public selectAllState: SelectAllCheckboxState = 'unchecked';
  public isCheckAll: boolean = false;

  public isCheckXacNhanIn: boolean = false;
  listDataSelect = new Array<any>();

  searchString : string ="";
  icSearch = icSearch;
  searchCtrl = new FormControl('');
  nhomLoaiInChiDinhKhamBenhNgoaiTru: EnumLoaiPhieuIn = EnumLoaiPhieuIn.InChiDinhKhamBenhNgoaiTru;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  dichVuKhacSarsCoVs:number[]=[];
  arrayLuaChon2s:any[]=[];
  arrayLuaChon3s:any[]=[];
  
  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  @ViewChild("gridTheoNhom", {read: GridComponent, static: false }) grid: GridComponent;
  @ViewChild("gridTheoDichVu", { read: GridComponent, static: false }) grids: GridComponent;

  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderGroupTemplate', { static: true }) checkBoxHeaderGroupTemplate: TemplateRef<any>;
  @ViewChild('checkBoxGroupTemplate', { static: true }) checkBoxGroupTemplate: TemplateRef<any>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupChonLoaiInViewComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService) {
  }
  ngOnInit() {
    this.gridColumnsNhomNgoaiTru = [
      { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxGroupTemplate, TemplateHeader: this.checkBoxHeaderGroupTemplate },
      { Field: 'Nhom', Title: 'Tên', Width: 120 }
    ];
    this.gridColumnsDichVuNgoaiTru = [
      { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      { Field: 'TenDichVu', Title: 'Tên', Width: 120 }
    ];
    this.gridColumnsNhom = [
      { Field: 'Nhom', Title: 'Tên', Width: 120 }
    ];
    this.gridColumnsDichVu = [
      { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      { Field: 'TenDichVu', Title: 'Tên', Width: 120 }
    ];
   
    if (this.luaChon == 1) {
      
      if(this.data.Model.ListDichVuChiDinh != null)
      {
       let numberArray:any[] =[];
        this.data.Model.ListDichVuChiDinh.forEach(element => {
          if(element.nhomChiDinhId == 2)
          {
          numberArray.push(element.dichVuChiDinhId);
          }
        });
        this.getListDichVuSarsCoVs(numberArray);
      }
      
    }
    
  }


  checkboxIn(event: any, dataItem: any) {
      if (this.grid.gridDataSource.data == undefined) {
          this.listChonDichVuChiDinh = [];
      }
      let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
      if (event == true) {
          if (index == -1) {
              var chiDinh = new ListInChiDinh();
              chiDinh.nhomChiDinhId = dataItem.NhomId;
              chiDinh.dichVuChiDinhId = dataItem.Id;
              this.listChonDichVuChiDinh.push(chiDinh);
              if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
                  this.checkAll = true;
              }
          }
          else {
              if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
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
      if (this.listChonDichVuChiDinh.length == this.grid.gridDataSource.total) {
          this.checkAll = true;
      }
      else {
          this.checkAll = false;
      }
      this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
  }

  SelectcheckAllboxIn(event: any) {
      let gridDataIn: any[] = [];
      if (this.grid.gridDataSource.data == undefined) {
          this.listChonDichVuChiDinh = [];
      }
      else {

          gridDataIn = this.grid.getAllDataFromDatasource();
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
  // group
  checkboxInGroup(event: any, dataItem: any) {
    if (this.grid.gridDataSource.data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
    if (event == true) {
        if (index == -1) {
            var chiDinh = new ListInChiDinh();
            chiDinh.nhomChiDinhId = dataItem.NhomId;
            chiDinh.dichVuChiDinhId = dataItem.Id;
            this.listChonDichVuChiDinh.push(chiDinh);
            if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
                this.checkAll = true;
            }
        }
        else {
            if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
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
    if (this.listChonDichVuChiDinh.length == this.grid.gridDataSource.total) {
        this.checkAll = true;
    }
    else {
        this.checkAll = false;
    }
    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
}

SelectcheckAllboxInGroup(event: any) {
    let gridDataIn: any[] = [];
    if (this.grid.gridDataSource.data == undefined) {
        this.listChonDichVuChiDinh = [];
    }
    else {

        gridDataIn = this.grid.getAllDataFromDatasource();
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
  changeLuaChon(event) {
    if (event == 1) {
      // this.listDataSelect = [...this.data.Model.ListDichVuChiDinh];
      if(this.data.Model.ListDichVuChiDinh != null)
      {
       let numberArray:any[] =[];
        this.data.Model.ListDichVuChiDinh.forEach(element => {
          numberArray.push(element.dichVuChiDinhId);
        });
        this.getListDichVuSarsCoVs(numberArray);
      }
    }
    if (event == 2) {
     
       let arr: any[] = [];

      this.data.Model.listGridSelect.forEach(element => {
        if(element.NhomId == 2)
        {
          let index = this.dichVuKhacSarsCoVs.findIndex(x => x == element.Id );
          if (index != -1) {
            arr.push(element);
          }
        }
        else{
          arr.push(element);
        }
        
      });
      // if(this.data.Model.listGridSelect != null)
      // {
      //  let numberArray:any[] =[];
      //  this.data.Model.listGridSelect.forEach(element => {
      //   if(element.NhomId == 2)
      //   {
      //     numberArray.push(element.Id);
      //   }
      //   });
      //   this.getListDichVuSarsCoVs(numberArray);
      // }

      let dataGrid = [...arr];
      let flags = [], outputNhom = [], l = dataGrid.length, i;
      for (i = 0; i < l; i++) {
        if (flags[dataGrid[i].Nhom]) continue;
        flags[dataGrid[i].Nhom] = true;
        outputNhom.push(dataGrid[i]);
      }
      let outputNhomXuLy :any[];
      outputNhomXuLy =[...outputNhom];
      let outputNhomGroupNhomVaId :any[] = new Array<any>(); // id dịch vụ kỹ thuật có thể trùng với yêu cầu khám bệnh
      if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {

        outputNhomXuLy.forEach(element => {
          let obj={
            Id:element.Id + ";" + element.Nhom + ";"+ element.NhomId,
            Nhom:element.Nhom
          };

          outputNhomGroupNhomVaId.push(obj)
        });
      }
      this.gridDataSource.data = this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru ? outputNhomGroupNhomVaId : outputNhom;
      this.gridDataSource.total = this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru ? outputNhomGroupNhomVaId.length : outputNhom.length;
      if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {
      this.SelectcheckAllboxIn(true);
      }
      this.grid.setDataSource();
    }
    if (event == 3) {
      // if(this.data.Model.listGridSelect != null)
      // {
      //  let numberArray:any[] =[];
      //  this.data.Model.listGridSelect.forEach(element => {
      //    if(element.NhomId == 2)
      //    {
      //     numberArray.push(element.Id);
      //    }
      //   });
      //   this.getListDichVuSarsCoVs(numberArray);
      // }
      
      let arr: any[] = [];

      this.data.Model.listGridSelect.forEach(element => {
        if (element.NhomId == 2) {
          let index = this.dichVuKhacSarsCoVs.findIndex(x => x == element.Id);
          if (index != -1) {
            arr.push(element);
          }
        }
        else {
          arr.push(element);
        }

      });

      let dataGrid = [...arr];
      this.gridDataSource.data = dataGrid;
      this.gridDataSource.total = dataGrid.length;
      if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {
        this.SelectcheckAllboxIn(true);
        }
        this.grids.setDataSource();
    }
  }
  extCheckboxSelection(event: any[]) {
    if (event.length > 0) {
      this.listMySectionId = event;
    }
  }

  huyCheckBoxSelection() {
    this.gridDataSource.data.forEach((element) => {
      {
        if ($('#' + 'marketingselectCheckboxId' + element.Id).prop('checked')) {
          $('#' + 'marketingselectCheckboxId' + element.Id).trigger('click');
        }
      }
    });
  }
  // khám ngoại trú
  InDichVuChiDinh(kieuin) {
    let listDataSelect = new Array<any>();
    this.listChonDichVuChiDinh;
    if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {
      if(this.luaChon == 2)
      {
        let dataGrid = [...this.data.Model.listGridSelect];
        this.listChonDichVuChiDinh.forEach(element => {
            if (element.dichVuChiDinhId != undefined && element.dichVuChiDinhId != null && element.dichVuChiDinhId != "") {
              let stringArrayListChonDichVuChiDinh = element.dichVuChiDinhId.split(";");
              if((stringArrayListChonDichVuChiDinh[1] != undefined && stringArrayListChonDichVuChiDinh[1] != null && stringArrayListChonDichVuChiDinh[1] != "")
                  && 
                (stringArrayListChonDichVuChiDinh[2] != undefined && stringArrayListChonDichVuChiDinh[2] != null && stringArrayListChonDichVuChiDinh[2] != ""))
              {
                dataGrid.forEach(elements => {
                  if (elements.Nhom == stringArrayListChonDichVuChiDinh[1] && elements.NhomId == stringArrayListChonDichVuChiDinh[2]) {
                    var chiDinh = new ListInChiDinh();
                    chiDinh.nhomChiDinhId = elements.NhomId;
                    chiDinh.dichVuChiDinhId = elements.Id;
                    listDataSelect.push(chiDinh);
                  }
                });
               
              }
            }
          });
        
      }
      if(this.luaChon == 1)
      {
        listDataSelect = this.data.Model.ListDichVuChiDinh;
      }
      if(this.luaChon == 3)
      {
        listDataSelect = this.listChonDichVuChiDinh;
      }
    }
    else{
      let listDataSelect = new Array<any>();
      let data = this.gridDataSource.data.findIndex(x => x.CheckedDefault == true);
      this.listMySectionId.forEach(element => {
        this.gridDataSource.data.forEach(elements => {
           if(elements.Id == element)
           {
            let obj = new ListInChiDinh();
            obj.dichVuChiDinhId = elements.Id;
            obj.nhomChiDinhId = elements.NhomId;
            listDataSelect.push(obj);
           }
        });
      });
    }
    if(listDataSelect.length == 0)
    {
      this.notificationService.showError("Chưa chọn dịch vụ in.")
    }
    else{
      let dataIn = {
        YeuCauTiepNhanId: this.data.Model.YeuCauTiepNhanId,
        YeuCauKhamBenhid: this.data.Model.YeuCauKhamBenhid,
        ListDichVuChiDinh: listDataSelect,
        InChungChiDinh: kieuin,
        hosting: window.location.protocol + "//" + window.location.host,
        KieuInChung: true,
        GhiChuCanLamSang: this.data.Model.GhiChuCanLamSang,
        IsKhamDoanTatCa: this.data.Model.IsKhamDoanTatCa,
        InDichVuBacSiChiDinh : this.data.Model.InDichVuBacSiChiDinh
      }
      let dialogRef = this.dialog.open(InBangKhamBenhChiDinhComponent, {
        width: '1000px',
        data: { Model: dataIn }
      }).afterClosed().subscribe(result => {
        this.dialogRef.close();
      });
    }
  }
  InChiDinhNoiTru(kieuIn){
    let listDataSelect = new Array<any>();
    this.listChonDichVuChiDinh;
    if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {
      if(this.luaChon == 2)
      {
        let dataGrid = [...this.data.Model.listGridSelect];
        this.listChonDichVuChiDinh.forEach(element => {
            if (element.dichVuChiDinhId != undefined && element.dichVuChiDinhId != null && element.dichVuChiDinhId != "") {
              let stringArrayListChonDichVuChiDinh = element.dichVuChiDinhId.split(";");
              if((stringArrayListChonDichVuChiDinh[1] != undefined && stringArrayListChonDichVuChiDinh[1] != null && stringArrayListChonDichVuChiDinh[1] != "")
                  && 
                (stringArrayListChonDichVuChiDinh[2] != undefined && stringArrayListChonDichVuChiDinh[2] != null && stringArrayListChonDichVuChiDinh[2] != ""))
              {
                dataGrid.forEach(elements => {
                  if (elements.Nhom == stringArrayListChonDichVuChiDinh[1] && elements.NhomId == stringArrayListChonDichVuChiDinh[2]) {
                    var chiDinh = new ListInChiDinh();
                    chiDinh.nhomChiDinhId = elements.NhomId;
                    chiDinh.dichVuChiDinhId = elements.Id;
                    listDataSelect.push(chiDinh);
                  }
                });
               
              }
            }
          });
        
      }
      if(this.luaChon == 1)
      {
        listDataSelect = this.data.Model.ListDichVuChiDinh;
      }
      if(this.luaChon == 3)
      {
        listDataSelect = this.listChonDichVuChiDinh;
      }
    }
    else{
      let listDataSelect = new Array<any>();
      let data = this.gridDataSource.data.findIndex(x => x.CheckedDefault == true);
      this.listMySectionId.forEach(element => {
        this.gridDataSource.data.forEach(elements => {
           if(elements.Id == element)
           {
            let obj = new ListInChiDinh();
            obj.dichVuChiDinhId = elements.Id;
            obj.nhomChiDinhId = elements.NhomId;
            listDataSelect.push(obj);
           }
        });
      });
    }
    if(listDataSelect.length == 0)
    {
      this.notificationService.showError("Chưa chọn dịch vụ in.")
    }
    else{
      let dataIn = {
        YeuCauTiepNhanId: this.data.Model.YeuCauTiepNhanId,
        YeuCauKhamBenhid: this.data.Model.YeuCauKhamBenhid,
        PhieuDieuTriId: this.data.Model.PhieuDieuTriId,
        ListDichVuChiDinh: listDataSelect,
        InChungChiDinh: kieuIn,
        hosting: window.location.protocol + "//" + window.location.host,
        KieuInChung: true,
        GhiChuCanLamSang: this.data.Model.GhiChuCanLamSang,
        IsKhamDoanTatCa: this.data.Model.IsKhamDoanTatCa,
      };
               let dialogRefa = this.dialog.open(PhieuDieuTriPopupInPhieuClsComponent, {
                          width: '1000px',
                          data: { Model: dataIn }
                      }).afterClosed().subscribe(result => {
                      });
    }
  }
  InChiDinhPTTT(kieuIn){
    let listDataSelect = new Array<any>();
    this.listChonDichVuChiDinh;
    if (this.data.Model.EnumInChiDinhKhamBenhNgoaiTru == this.nhomLoaiInChiDinhKhamBenhNgoaiTru) {
      if(this.luaChon == 2)
      {
        let dataGrid = [...this.data.Model.listGridSelect];
        this.listChonDichVuChiDinh.forEach(element => {
            if (element.dichVuChiDinhId != undefined && element.dichVuChiDinhId != null && element.dichVuChiDinhId != "") {
              let stringArrayListChonDichVuChiDinh = element.dichVuChiDinhId.split(";");
              if((stringArrayListChonDichVuChiDinh[1] != undefined && stringArrayListChonDichVuChiDinh[1] != null && stringArrayListChonDichVuChiDinh[1] != "")
                  && 
                (stringArrayListChonDichVuChiDinh[2] != undefined && stringArrayListChonDichVuChiDinh[2] != null && stringArrayListChonDichVuChiDinh[2] != ""))
              {
                dataGrid.forEach(elements => {
                  if (elements.Nhom == stringArrayListChonDichVuChiDinh[1] && elements.NhomId == stringArrayListChonDichVuChiDinh[2]) {
                    var chiDinh = new ListInChiDinh();
                    chiDinh.nhomChiDinhId = elements.NhomId;
                    chiDinh.dichVuChiDinhId = elements.Id;
                    listDataSelect.push(chiDinh);
                  }
                });
               
              }
            }
          });
        
      }
      if(this.luaChon == 1)
      {
        listDataSelect = this.data.Model.ListDichVuChiDinh;
      }
      if(this.luaChon == 3)
      {
        listDataSelect = this.listChonDichVuChiDinh;
      }
    }
    else{
      let listDataSelect = new Array<any>();
      let data = this.gridDataSource.data.findIndex(x => x.CheckedDefault == true);
      this.listMySectionId.forEach(element => {
        this.gridDataSource.data.forEach(elements => {
           if(elements.Id == element)
           {
            let obj = new ListInChiDinh();
            obj.dichVuChiDinhId = elements.Id;
            obj.nhomChiDinhId = elements.NhomId;
            listDataSelect.push(obj);
           }
        });
      });
    }
    if(listDataSelect.length == 0)
    {
      this.notificationService.showError("Chưa chọn dịch vụ in.")
    }
    else{
      let dataIn = {
        YeuCauTiepNhanId: this.data.Model.YeuCauTiepNhanId,
        YeuCauKhamBenhid: this.data.Model.YeuCauKhamBenhid,
        PhieuDieuTriId: this.data.Model.PhieuDieuTriId,
        ListDichVuChiDinh: listDataSelect,
        InChungChiDinh: kieuIn,
        hosting: window.location.protocol + "//" + window.location.host,
        KieuInChung: true,
        GhiChuCanLamSang: this.data.Model.GhiChuCanLamSang,
        IsKhamDoanTatCa: this.data.Model.IsKhamDoanTatCa,
      };
               let dialogRefa = this.dialog.open(PtttClsInChiDinhComponent, {
                          width: '1000px',
                          data: { Model: dataIn }
                      }).afterClosed().subscribe(result => {
                      });
    }
  }
  close(event) {
    this.dialogRef.close();
  }


  searchChanges(){
    if(this.searchString != undefined && this.searchString != null && this.searchString != "")
    {
      
    }
    else{
      this.timKiemGridDataSource(this.searchString);
    }
  }
  onKey(event:any){
    if (event.key == "Enter") {
      this.timKiemGridDataSource(this.searchString);
    }
  }
  timKiemGridDataSource(searching)
  {
    if(searching == undefined && searching == null && searching =="")
    {
      this.changeLuaChon(3);
    }
    else{
      this.changeLuaChon(3);
      if(this.gridDataSource.data.length != 0)
      {
        let queryStringSearch = JSON.stringify(this.gridDataSource.data);
        let modelSearch={
          DanhSachCanSearchs :queryStringSearch,
          Searching : searching
        };
        this.apiService.post<any>("KhamBenh/TimKiemGridPopUpInChiDinhKhamBenh", modelSearch).subscribe(
          (result) => {
            this.gridDataSource.data = result;
            this.gridDataSource.total = result.length;
          
            //this.grids.gridDataSource = this.gridDataSource;
            this.grids.setDataSource();
          },
          (err: ApiError) => {
              if (err.Message !== 'Validation Failed') {
                  this.notificationService.showError(err.Message);
              }
          });
       
      }
    }
  
  }
  // BVHD-3761
    //================================================================================================
  getListDichVuSarsCoVs(arr: any) {
    let obj = {
      YeuCauDichVuKyThuatIds: arr
    };
    this.apiService.post<Array<any>>("TiepNhanBenhNhan/GetKiemTraYeuCauDichVuKyThuatThuocNhomSarsCov2", obj).subscribe(
      resultData => {
        this.dichVuKhacSarsCoVs = [];
        this.dichVuKhacSarsCoVs = resultData;

        // lựa chọn 1
        //=========================================================================================
        let arr: any[] = [];

        this.data.Model.ListDichVuChiDinh.forEach(element => {
          if(element.nhomChiDinhId == 2)
          {
            let index = this.dichVuKhacSarsCoVs.findIndex(x => x == element.dichVuChiDinhId);
            if (index != -1) {
  
              arr.push(element);
            }
          }
          else{
            arr.push(element);
          }
          
        });
        this.listDataSelect = arr;
        //=========================================================================================

         // lựa chọn 2
        //=========================================================================================
        let arrLuaChon2: any[] = [];

        this.data.Model.listGridSelect.forEach(element => {
          if(element.NhomId == 2)
          {
            let index = this.dichVuKhacSarsCoVs.findIndex(x => x == element.Id );
            if (index != -1) {
  
              arrLuaChon2.push(element);
            }
          }
          else{
            arrLuaChon2.push(element);
          }
          
        });
        this.arrayLuaChon2s = arrLuaChon2;
        //=========================================================================================
        
        // lựa chọn 3
        //=========================================================================================
        let arrLuaChon3: any[] = [];

        this.data.Model.listGridSelect.forEach(element => {
          if(element.NhomId == 2)
          {
            let index = this.dichVuKhacSarsCoVs.findIndex(x => x == element.Id );
            if (index != -1) {
  
              arrLuaChon3.push(element);
            }
          }else{
            arrLuaChon3.push(element);
          }
        });
        this.arrayLuaChon3s = arrLuaChon3;
        //=========================================================================================
      });
  }
  //================================================================================================
}
