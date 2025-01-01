import { Component, OnInit, Inject, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SoDoGiuongFillter } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-lan-kham-hien-tai-so-do-giuong-popup',
  templateUrl: './lan-kham-hien-tai-so-do-giuong-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-so-do-giuong-popup.component.scss']
})
export class LanKhamHienTaiSoDoGiuongPopupComponent implements OnInit {

  icClose = icClose;
  soDoGiuong: any;
  soDoGiuongFillter: SoDoGiuongFillter = new SoDoGiuongFillter();

  dataYeuCau: any;

  gridColumns: any[] = [];
  dataSource = {
    data: [],
    total: 0
  }
  @ViewChild('giuongTemplate', { static: true }) giuongTemplate: TemplateRef<any>;//gridSoDoGiuong
  @ViewChild('gridSoDoGiuong', { static: true }) gridSoDoGiuong: GridComponent;
  constructor(private dialog: MatDialog, private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dataYeuCau = this.data;

    this.gridColumns = [
      { Field: "DisplayName", Title: "PHÒNG", Width: 150, Sortable: false, LockColumn: true },
      { Field: "Giuong", Title: "Giường trong phòng", MinWidth: 100, Sortable: false, Template: this.giuongTemplate }
    ];

    this.getSoDoGiuong();
  }

  isProcess: boolean = false;
  getSoDoGiuong() {
    // if(this.isProcess)
    // {
    //   return;
    // }
    var self = this;
    // self.isProcess = true;
    // var dialogRef = self.dialog.open(LoadingComponent, {
    //   disableClose: true,
    //   width: '200px',
    //   height: '90px',
    //   data: { Title: "Đang tải dữ liệu..." }
    // });

    var strParam ="?";
    if(self.soDoGiuongFillter.PhongBenhVienId != undefined && self.soDoGiuongFillter.PhongBenhVienId != null && self.soDoGiuongFillter.PhongBenhVienId != 0)
    {
      strParam += "phongBenhVienId=" + self.soDoGiuongFillter.PhongBenhVienId;
    }

    if(self.soDoGiuongFillter.GiuongTrong != null)
    {
      strParam += (strParam == "?" ? "" : "&") + "giuongTrong=" + self.soDoGiuongFillter.GiuongTrong;
    }

    if(self.soDoGiuongFillter.GiuongDangSuDung != null)
    {
      strParam += (strParam == "?" ? "" : "&") + "giuongDangSuDung=" + self.soDoGiuongFillter.GiuongDangSuDung;
    }

    if(self.dataYeuCau.DichVuGiuongBenhVienId != null && self.dataYeuCau.DichVuGiuongBenhVienId != undefined)
    {
      strParam += (strParam == "?" ? "" : "&") + "dichVuGiuongBenhVienId=" + self.dataYeuCau.DichVuGiuongBenhVienId;
    }

    if(self.dataYeuCau.NoiThucHienId != null && self.dataYeuCau.NoiThucHienId != undefined)
    {
      strParam += (strParam == "?" ? "" : "&") + "noiThucHienId=" + self.dataYeuCau.NoiThucHienId;
    }

    if(self.dataYeuCau.GiuongBenhId != null && self.dataYeuCau.GiuongBenhId != undefined)
    {
      strParam += (strParam == "?" ? "" : "&") + "giuongBenhId=" + self.dataYeuCau.GiuongBenhId;
    }

    self.apiService.get<any>("KhamBenh/GetSoDoGiuongBenhTheoPhongKham" + strParam).subscribe(
        resultData => {
          self.soDoGiuong = resultData;
          self.dataSource.data = resultData;
          if(self.dataYeuCau.NoiThucHienId != undefined && self.dataYeuCau.NoiThucHienId != null)
          {
            let phong = self.soDoGiuong.find(x => x.PhongBenhVienId == self.dataYeuCau.NoiThucHienId);
            if(phong != undefined && phong != null && (self.dataYeuCau.TenNoiThucHien == null || self.dataYeuCau.TenNoiThucHien == ''))
            {
              self.dataYeuCau.TenNoiThucHien = phong.DisplayName;
              if(self.dataYeuCau.GiuongBenhId != undefined && self.dataYeuCau.GiuongBenhId != null)
              {
                let giuong = phong.GiuongBenhs.find(x => x.GiuongBenhId == self.dataYeuCau.GiuongBenhId)
                if(giuong != undefined && giuong != null && (self.dataYeuCau.TenGiuongBenh == null || self.dataYeuCau.TenGiuongBenh == ''))
                {
                  self.dataYeuCau.TenGiuongBenh = giuong.TenGiuong;
                }
              }
            }
          }
          else
          {
            self.dataYeuCau.TenNoiThucHien = "";
            self.dataYeuCau.TenGiuongBenh = "";
          }
          //self.isProcess = false;
          //dialogRef.close();
        },
        () => {
          //self.isProcess = false;
          //dialogRef.close();
        });
}

  close(){
    this.dialog.closeAll();
  }

  chonGiuong(phong, giuong)
  {
    if(phong != undefined && giuong != undefined)
    {
      this.dataYeuCau.NoiThucHienId = phong.PhongBenhVienId;
      this.dataYeuCau.TenNoiThucHien = phong.DisplayName;
      this.dataYeuCau.GiuongBenhId = giuong.GiuongBenhId;
      this.dataYeuCau.TenGiuongBenh = giuong.TenGiuong;
    }
  }
}
