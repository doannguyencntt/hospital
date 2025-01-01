import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ThongTinError } from '../kham-doan-hop-dong-kham.model';

@Component({
  selector: 'thong-tin-nhan-vien-popup',
  templateUrl: './thong-tin-nhan-vien-popup.component.html',
  styleUrls: ['./thong-tin-nhan-vien-popup.component.scss']
})
export class ThongTinNhanVienPopupComponent implements OnInit {

  icClose = icClose;
  icClear = icClear;
  total: number;
  gridDanhSachNhanVienErrorColumns: any;
  ThongTinNhanVienError: ThongTinError[] = [];
  dataSourceDanhSachNhanVien: any = {
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
    this.ThongTinNhanVienError = this.data.thongTinNhanViens;
    this.dataSourceDanhSachNhanVien.data = this.ThongTinNhanVienError;
    this.total = this.ThongTinNhanVienError[0].TotalThanhCong;

    this.gridDanhSachNhanVienErrorColumns = [
      { Field: "TenNhanVien", Title: "Tên nhân viên", Width: 60 },
      { Field: "Error", Title: "Thông tin lỗi", Width: 150 }
    ];
  }
}
