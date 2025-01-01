import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ThongTinError} from '../kham-doan-hop-dong-kham.model';

@Component({
  selector: 'thong-tin-goi-kham-popup',
  templateUrl: './thong-tin-goi-kham-popup.component.html',
  styleUrls: ['./thong-tin-goi-kham-popup.component.scss']
})
export class ThongTinGoiKhamPopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;
  total: number;
  gridDanhSachNhanVienErrorColumns: any;
  ThongTinGoiKhamError: ThongTinError[] = [];
  dataSourceDanhSachGoiKham: any = {
    data: [],
    total: 0
  }
  constructor(
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ThongTinGoiKhamError = this.data.thongTinGoiKhams;
    this.dataSourceDanhSachGoiKham.data = this.ThongTinGoiKhamError;
    this.total = this.ThongTinGoiKhamError[0].TotalThanhCong;

    this.gridDanhSachNhanVienErrorColumns = [
      { Field: "MaGoi", Title: "Mã gói", Width: 60 },
      { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
    ];
  }
}
