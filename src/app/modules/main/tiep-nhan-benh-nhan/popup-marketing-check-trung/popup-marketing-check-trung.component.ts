import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DanhSachDichVuChonTrongLanPopup, DanhSachGoiChonTrongLanPopup } from '../tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-popup-marketing-check-trung',
  templateUrl: './popup-marketing-check-trung.component.html',
  styleUrls: ['./popup-marketing-check-trung.component.scss']
})
export class PopupMarketingCheckTrungComponent implements OnInit {

  danhSachGoiDaChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = new Array<DanhSachDichVuChonTrongLanPopup>();

  gridColumns: any[] = [];

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('canhBaoTemplate', { static: true }) canhBaoTemplate: TemplateRef<any>;
  
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PopupMarketingCheckTrungComponent>,
  private apiService: ApiService,
  private notificationService: NotificationService) { 
    this.danhSachGoiDaChonTrongLanPopup = this.data.data;
    //console.log("PopupMarketingCheckTrungComponent = ", this.danhSachGoiDaChonTrongLanPopup);
  }

  ngOnInit() {
    this.gridColumns = [
      { Field: "ThuocGoi", Title: "Chương Trình", Width: 180 , Sortable: false },
      { Field: "TenDichVu", Title: "Dịch Vụ", Width: 180 , Sortable: true },
      { Field: "ThuocGoi", Title: "Cảnh Báo", Width: 80 , Sortable: true, Template: this.canhBaoTemplate },
      { Field: "ThuocGoi", Title: "", Width: 100 , Sortable: true, Template: this.actionTemplate },
    ];
  }

  Co(){
    let item = this.danhSachGoiDaChonTrongLanPopup.filter(o => o.KhongThem);
    //console.log("Co = ", item);
    this.dialogRef.close(item);
  }

  Khong(){
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }
  // khongThemChange($event, dataItem){
  //   console.log("khongThemChange = ", $event, dataItem);
  // }
}
