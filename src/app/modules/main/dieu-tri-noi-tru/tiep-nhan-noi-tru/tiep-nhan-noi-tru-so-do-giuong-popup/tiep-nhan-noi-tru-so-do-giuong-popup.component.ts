import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SoDoGiuongTiepNhanNoiTruFillter, TiepNhanNoiTruChiDinhChonGiuong } from '../tiep-nhan-noi-tru.model';

@Component({
  selector: 'app-tiep-nhan-noi-tru-so-do-giuong-popup',
  templateUrl: './tiep-nhan-noi-tru-so-do-giuong-popup.component.html',
  styleUrls: ['./tiep-nhan-noi-tru-so-do-giuong-popup.component.scss']
})
export class TiepNhanNoiTruSoDoGiuongPopupComponent implements OnInit {

  icClose = icClose;

  dataYeuCau: TiepNhanNoiTruChiDinhChonGiuong = new TiepNhanNoiTruChiDinhChonGiuong();
  gridColumns: any[] = [];
  soDoGiuongFillter: SoDoGiuongTiepNhanNoiTruFillter = new SoDoGiuongTiepNhanNoiTruFillter();
  additionalSearchString: string = null;

  //UTC
  thoiGianNhanTemp: any;
  thoiGianTraTemp: any;

  @ViewChild('baoPhongTemplate', { static: true }) baoPhongTemplate: TemplateRef<any>;
  @ViewChild('giuongTemplate', { static: true }) giuongTemplate: TemplateRef<any>;
  @ViewChild('gridSoDoGiuong', { static: true }) gridSoDoGiuong: GridComponent;
  constructor(private dialog: MatDialog, private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<TiepNhanNoiTruSoDoGiuongPopupComponent>) { }

  ngOnInit() {
    this.dataYeuCau = this.data;
    this.soDoGiuongFillter.KhoaPhongId = this.data.KhoaId;
    this.soDoGiuongFillter.ThoiGianNhan = this.data.ThoiGianNhan;
    this.soDoGiuongFillter.ThoiGianTra = this.data.ThoiGianTra;
    this.soDoGiuongFillter.YeuCauDichVuGiuongBenhVienId = this.data.YeuCauDichVuGiuongBenhVienId;
    this.soDoGiuongFillter.BaoPhong = this.data.BaoPhong;
    this.soDoGiuongFillter.YeuCauTiepNhanNoiTruId = this.data.YeuCauTiepNhanNoiTruId;

    this.gridColumns = [
      { Field: "Tang", Title: "TẦNG", Width: 80, Sortable: true, LockColumn: true },
      { Field: "Phong", Title: "PHÒNG", Width: 160, Sortable: true, LockColumn: true },
      //{ Field: "BaoPhong", Title: "BAO PHÒNG", Width: 80, Sortable: false, LockColumn: true, Template: this.baoPhongTemplate },
      { Field: "Giuong", Title: "GIƯỜNG", MinWidth: 100, Sortable: false, Template: this.giuongTemplate }
    ];

    this.getSoDoGiuong();
  }

  getSoDoGiuong(){
    this.convertToUTC();
    var queryString = JSON.stringify(this.soDoGiuongFillter);
    this.reverseFromUTC();

    this.gridSoDoGiuong._additionalSearchString = this.additionalSearchString = queryString;
    this.gridSoDoGiuong.search();
  }

  convertToUTC() {
    if(this.soDoGiuongFillter.ThoiGianNhan) {
			this.thoiGianNhanTemp = new Date(this.soDoGiuongFillter.ThoiGianNhan); 
			this.soDoGiuongFillter.ThoiGianNhan = new Date(Date.UTC(this.thoiGianNhanTemp.getFullYear(), this.thoiGianNhanTemp.getMonth(), this.thoiGianNhanTemp.getDate(), this.thoiGianNhanTemp.getHours(), this.thoiGianNhanTemp.getMinutes()));
		}

    if(this.soDoGiuongFillter.ThoiGianTra) {
			this.thoiGianTraTemp = new Date(this.soDoGiuongFillter.ThoiGianTra); 
			this.soDoGiuongFillter.ThoiGianTra = new Date(Date.UTC(this.thoiGianTraTemp.getFullYear(), this.thoiGianTraTemp.getMonth(), this.thoiGianTraTemp.getDate(), this.thoiGianTraTemp.getHours(), this.thoiGianTraTemp.getMinutes()));
		}
  }

  reverseFromUTC() {
    if(this.soDoGiuongFillter.ThoiGianNhan) {
			this.soDoGiuongFillter.ThoiGianNhan = new Date(this.thoiGianNhanTemp.getFullYear(), this.thoiGianNhanTemp.getMonth(), this.thoiGianNhanTemp.getDate(), this.thoiGianNhanTemp.getHours(), this.thoiGianNhanTemp.getMinutes());
		}

		if(this.soDoGiuongFillter.ThoiGianTra) {
			this.soDoGiuongFillter.ThoiGianTra = new Date(this.thoiGianTraTemp.getFullYear(), this.thoiGianTraTemp.getMonth(), this.thoiGianTraTemp.getDate(), this.thoiGianTraTemp.getHours(), this.thoiGianTraTemp.getMinutes());
		}
  }

  chonGiuong(phong, giuong)
  {
    if(phong != undefined && giuong != undefined)
    {
      this.dataYeuCau.PhongId = phong.Id;
      this.dataYeuCau.TenPhong = phong.Phong;
      this.dataYeuCau.Tang = phong.Tang;
      this.dataYeuCau.GiuongId = giuong.GiuongId;
      this.dataYeuCau.TenGiuong = giuong.TenGiuong;
      
      phong.BaoPhong = this.dataYeuCau.BaoPhong;
      // this.gridSoDoGiuong._gridDataSource.data.forEach(element => {
      //   if(element.Id != phong.Id)
      //   {
      //     element.BaoPhong = false;
      //   }
      // });
    }
  }

  onDataBoundSoDoGiuong(event) {
    if (event != undefined && event != null && this.dataYeuCau.PhongId != undefined && this.dataYeuCau.PhongId != null && this.dataYeuCau.BaoPhong) {
      event.Data.forEach(element => {
        if (element.Id == this.dataYeuCau.PhongId) {
          element.BaoPhong = true;
        }
      });
    }
  }

  xuLyChonGiuong() {
    this.apiService.post("DieuTriNoiTru/KiemTraPhongChiDinhTiepNhanNoiTru", 
          {
            "GiuongId": this.dataYeuCau.GiuongId, 
            "BaoPhong": this.dataYeuCau.BaoPhong, 
            "ThoiGianNhan": this.dataYeuCau.ThoiGianNhan,
            "ThoiGianTra": this.dataYeuCau.ThoiGianTra,
            "YeuCauDichVuGiuongBenhVienId": this.dataYeuCau.YeuCauDichVuGiuongBenhVienId,
            "YeuCauTiepNhanNoiTruId": this.data.YeuCauTiepNhanNoiTruId
          })
      .subscribe(
        () => {
          this.dialogRef.close(this.dataYeuCau);
        },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        }
      );
  }

  close(){
    this.dialogRef.close(null);
  }
}
