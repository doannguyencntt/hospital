import { Component, OnInit, Inject, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { GoiDichVuNoiThucHienValidation, GoiDichVuChiTietNoiThucHienValidation } from '../../../kham-benh.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-lan-kham-hien-tai-kham-benh-goi-dich-vu-popup',
  templateUrl: './lan-kham-hien-tai-kham-benh-goi-dich-vu-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-kham-benh-goi-dich-vu-popup.component.scss']
})
export class LanKhamHienTaiKhamBenhGoiDichVuPopupComponent implements OnInit {

  icClose = icClose;
  gridDataSource: any = {
    data: [],
    total: 0
  };
  gridColumns: any[] = [];
  validationErrors: any;
  loadedGrid: boolean = false;
  @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService,
  private notificationService: NotificationService, public dialogRef: MatDialogRef<LanKhamHienTaiKhamBenhGoiDichVuPopupComponent>) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 120},
      { Field: "Nhom", Title: "Nhóm", Width: 200, Hidden: true, TemplateGroupHeader: this.data.nhomGroupHeaderTemplate },
      { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 300},
      { Field: "LoaiGia", Title: "Loại Giá", Width: 120},
      { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 400, Template: this.noiThucHienTemplate},
    ];

    this.getChiTietGoiDichVu(this.data.goiDichVuId);
  }

  getChiTietGoiDichVu(goiDichVuId: number) {
    this.apiService.get<GoiDichVuNoiThucHienValidation>("KhamBenh/GetChiTietGoiDichVu?goiDichVuId=" + goiDichVuId).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.gridDataSource.data = resultData.GoiDichVuChiTietNoiThucHiens;
        this.gridDataSource.total = resultData.Total;
        this.loadedGrid = true;
      }
    });
  }

  kiemTraValiDationNoiThucHien(){
    this.validationErrors = [];
    let dataChiTietDichVu = new GoiDichVuNoiThucHienValidation();
    dataChiTietDichVu.GoiDichVuChiTietNoiThucHiens = this.gridDataSource.data;
    this.apiService.post<any>("KhamBenh/KiemTraValiDationNoiThucHien",  dataChiTietDichVu).subscribe(() =>{
      console.log('asfdasf', this.gridDataSource.data);

      this.dialogRef.close(this.gridDataSource.data);
    },
    (err: ApiError) => { 
          this.validationErrors = err.ValidationErrors;
    });
  }

  close(){
    this.dialog.closeAll();
  }
}
