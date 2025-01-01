import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-popup-dich-vu-check-trung',
  templateUrl: './popup-dich-vu-check-trung.component.html',
  styleUrls: ['./popup-dich-vu-check-trung.component.scss']
})
export class PopupDichVuCheckTrungComponent implements OnInit {

  icClose = icClose;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PopupDichVuCheckTrungComponent>,
  private apiService: ApiService,
  private notificationService: NotificationService) { }

  ngOnInit() {
  }

  Co(){
    this.dialogRef.close(true);
  }
  Khong(){
    this.dialogRef.close(false);
  }
}
