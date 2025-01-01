import { Component, OnInit, Inject,ViewChild, TemplateRef, ChangeDetectorRef, ViewRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { FormControl } from '@angular/forms';
import icSearch from "@iconify/icons-ic/twotone-search";
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-chon-loai-ket-qua-xet-nghiem-popup',
  templateUrl: './chon-loai-ket-qua-xet-nghiem-popup.component.html',
  styleUrls: ['./chon-loai-ket-qua-xet-nghiem-popup.component.scss']
})
export class ChonLoaiKetQuaXetNghiemPopupComponent implements OnInit {

  hostingName: string;
  src = '';
  icClose = icClose;
  luaChon: number = 1;
  gridDataSource: any={
    data:[],
    total:0
  };
  gridColumnsNhom: any[] = [];
  gridColumnsDichVu: any[] = [];
  listMySectionId: any[]=[];
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  searchString : string ="";
  icSearch = icSearch;
  searchCtrl = new FormControl('');
  @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
  @ViewChild("gridTheoNhom", { static: true }) grid: GridComponent;
  @ViewChild("gridTheoDichVu", { static: true }) grids: GridComponent;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, 
  public dialog: MatDialog,
   public dialogRef: MatDialogRef<ChonLoaiKetQuaXetNghiemPopupComponent>,
   public apiService: ApiService,public notificationService: NotificationService,
   private cdRef: ChangeDetectorRef) {
  }
  ngOnInit() {
    
    this.gridColumnsNhom = [
      { Field: 'Nhom', Title: 'Tên', Width: 120 }
    ];
    this.gridColumnsDichVu = [
      { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
      { Field: 'Ten', Title: 'Tên', Width: 120 }
    ];

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
        this.apiService.post<any>("XetNghiem/TimKiemGridPopUpXetNghiem", modelSearch).subscribe(
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
  changeLuaChon(event){
     if(event == 2)
     {
       let flags = [], output = [], l = this.data.length, i;
       for (i = 0; i < l; i++) {
         if (flags[this.data[i].Nhom]) continue;
         flags[this.data[i].Nhom] = true;
         output.push(this.data[i]);
       }
       let outputCoKetQuaDuyetKetQua = [];
       output.forEach(element => {
           if(element.ThoiDiemDuyetKetQua != null)
           {
            outputCoKetQuaDuyetKetQua.push(element);
           }
       });
       let sortOutputCoKetQuaDuyetKetQua = [];
       if(outputCoKetQuaDuyetKetQua.length == 1)
       {
        sortOutputCoKetQuaDuyetKetQua = outputCoKetQuaDuyetKetQua;
       }
       else{
        for(let i = 0 ; i < outputCoKetQuaDuyetKetQua.length-1;i++)
        {
          for(let j = 1 ; j < outputCoKetQuaDuyetKetQua.length ;j++)
          {
             if(outputCoKetQuaDuyetKetQua[i].NhomId > outputCoKetQuaDuyetKetQua[j].NhomId)
             {
              sortOutputCoKetQuaDuyetKetQua = this.swapArray(outputCoKetQuaDuyetKetQua,i,j);
             }
          }
        }
       }
      
      this.gridDataSource.data = sortOutputCoKetQuaDuyetKetQua;
      this.gridDataSource.total = sortOutputCoKetQuaDuyetKetQua.length;
      this.grid.setDataSource();
     }
     if(event == 3)
     {
       let output= [];
       this.data.forEach(element => {
          if(element.Level == 1)
          {
            output.push(element);
          }
       });
       let outputCoKetQuaDuyetKetQua = [];
       output.forEach(element => {
           if(element.ThoiDiemDuyetKetQua != null)
           {
            outputCoKetQuaDuyetKetQua.push(element);
           }
       });
       
     this.gridDataSource.data = outputCoKetQuaDuyetKetQua;
     this.gridDataSource.total = outputCoKetQuaDuyetKetQua.length;
      this.grids.setDataSource();
     }
  }
  swapArray(Array:any,Swap1:any,Swap2:any) : any
{
    var temp = Array[Swap1];
    Array[Swap1] = Array[Swap2]
    Array[Swap2] = temp
    return Array;
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
  close(result) {
    if (result == 'Yes') {
      let listDataSelect = new Array<any>();
      let data = this.gridDataSource.data.findIndex(x => x.CheckedDefault == true);
      this.listMySectionId.forEach(element => {
        this.gridDataSource.data.forEach(elements => {
           if(elements.Id == element)
           {
            listDataSelect.push(elements);
           }
        });
      });
      
      let objKetQuaChonIn = {
          LoaiIn:this.luaChon,
          ListIn:  listDataSelect
      };
      this.dialogRef.close(objKetQuaChonIn);
    }
    if (result == 'No') {
      this.dialogRef.close(result);
    }
  }

}
