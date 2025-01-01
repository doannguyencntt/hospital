import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-popup-thong-bao-dp-khong-the-tao',
  templateUrl: './popup-thong-bao-dp-khong-the-tao.component.html',
  styleUrls: ['./popup-thong-bao-dp-khong-the-tao.component.scss']
})
export class PopupThongBaoDpKhongTheTaoComponent implements OnInit {
  icClose = icClose;
  gridDataSource :any= {
    data:[],
    total:0
  };
  gridColumns: any[] = [];


	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
	   private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
    if(this.data !=undefined)
    {
      this.data.forEach(element => {
        
      });
      this.gridDataSource={
        data:this.data,
        total:this.data.length
        };
    }
    this.gridColumns = [
      { Field: "TenDuocPham", Title: "Tên", Width: 100 },
      { Field: "SoLuongTon", Title: "Tồn", Width: 100 },
      { Field: "SoLuongYeuCau", Title: "SL yêu cầu", Width: 100 },
    ];
   
	}
  Khong(item){
    if(item != undefined && item !=null && item !="")
    {
      this.close();
    }
  }
	close() {
		this.dialogRef.close();
	}
  Co(item){
    if(item != undefined && item !=null && item !="")
    {
      this.dialogRef.close(item);
    }
  }
}
