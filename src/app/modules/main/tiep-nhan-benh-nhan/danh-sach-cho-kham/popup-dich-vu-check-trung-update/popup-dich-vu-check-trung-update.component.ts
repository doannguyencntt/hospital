import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-popup-dich-vu-check-trung-update',
  templateUrl: './popup-dich-vu-check-trung-update.component.html',
  styleUrls: ['./popup-dich-vu-check-trung-update.component.scss']
})
export class PopupDichVuCheckTrungUpdateComponent implements OnInit {

  icClose = icClose;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PopupDichVuCheckTrungUpdateComponent>,
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
