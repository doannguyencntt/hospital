import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DanhSachDichVuChonTrongLanPopup } from '../../tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-popup-marketing-check-trung-update',
  templateUrl: './popup-marketing-check-trung-update.component.html',
  styleUrls: ['./popup-marketing-check-trung-update.component.scss']
})
export class PopupMarketingCheckTrungUpdateComponent implements OnInit {

  danhSachGoiDaChonTrongLanPopup: Array<DanhSachDichVuChonTrongLanPopup> = new Array<DanhSachDichVuChonTrongLanPopup>();

  gridColumns: any[] = [];

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('canhBaoTemplate', { static: true }) canhBaoTemplate: TemplateRef<any>;
  
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PopupMarketingCheckTrungUpdateComponent>,
  private apiService: ApiService,
  private notificationService: NotificationService) { 
    this.danhSachGoiDaChonTrongLanPopup = this.data.data;

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
  
}
