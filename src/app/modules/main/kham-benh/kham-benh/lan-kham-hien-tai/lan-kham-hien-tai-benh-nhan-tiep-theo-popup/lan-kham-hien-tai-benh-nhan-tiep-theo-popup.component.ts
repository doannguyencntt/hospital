import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BenhVienHangDoi } from '../../../kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-lan-kham-hien-tai-benh-nhan-tiep-theo-popup',
  templateUrl: './lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component.scss']
})
export class LanKhamHienTaiBenhNhanTiepTheoPopupComponent implements OnInit {

  icClose=icClose;
  phongKhamId: number = null;
  hangDoiHienTaiId: number = null;
  benhNhanTiepTheo: BenhVienHangDoi;
  benhNhanTiepTheoId: number = null;
  conBenhNhanTrongHangDoi: boolean = null;
  chuyenKham: boolean = false;
  laKhamDoan: boolean = false;
  IsKhamDoanTatCa: boolean = false;
  searchStringHangDoiHienTai: string = "";
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) { }

  ngOnInit() {
    this.phongKhamId = this.data.phongKhamHienTaiId;
    this.hangDoiHienTaiId = this.data.hangDoiHienTaiId;
    if(this.data.chuyenKham != undefined && this.data.chuyenKham != null)
    {
      this.chuyenKham = this.data.chuyenKham;
    }
    if(this.data.laKhamDoan != undefined && this.data.laKhamDoan != null)
    {
      this.laKhamDoan = this.data.laKhamDoan;
    }
    if(this.data.IsKhamDoanTatCa != undefined && this.data.IsKhamDoanTatCa != null)
    {
      this.IsKhamDoanTatCa = this.data.IsKhamDoanTatCa;
    }
    if(this.data.searchBenhNhan != undefined && this.data.searchBenhNhan != null)
    {
      this.searchStringHangDoiHienTai = this.data.searchBenhNhan;
    }

    if(this.IsKhamDoanTatCa)
    {
      this.getThongTinBenhNhanTiepTheoKhamDoaTatCa(this.data.QueryInfo);
    }
    else
    {
      this.getThongTinBenhNhanTiepTheo(this.phongKhamId);
    }
  }

  getThongTinBenhNhanTiepTheo(phongKhamId: number){
    this.apiService.get<BenhVienHangDoi>("KhamBenh/GetThongTinBenhNhanTiepTheoTrongHangDoi?phongKhamId=" + phongKhamId + "&laKhamDoan="+this.laKhamDoan + "&searchBenhNhan="+this.searchStringHangDoiHienTai)
      .subscribe(resultData => {
        // get người bệnh tiếp theo
        this.benhNhanTiepTheo = resultData;
        if(resultData != null)
        {
          this.benhNhanTiepTheoId = resultData.Id;
          this.conBenhNhanTrongHangDoi = true;
        }
        else 
        {
          this.benhNhanTiepTheoId = null;
          this.conBenhNhanTrongHangDoi = false;
        }
      });
  }

  getThongTinBenhNhanTiepTheoKhamDoaTatCa(timKiemObj: any) {
    this.apiService.post<BenhVienHangDoi>("KhamBenh/GetThongTinBenhNhanTiepTheoTrongHangDoiKhamDoanTatCa", timKiemObj)
      .subscribe((resultData) => {
        this.benhNhanTiepTheo = resultData;
        if (resultData != null) {
          this.benhNhanTiepTheoId = resultData.Id;
          this.conBenhNhanTrongHangDoi = true;
        }
        else {
          this.benhNhanTiepTheoId = null;
          this.conBenhNhanTrongHangDoi = false;
        }
      });
  }

  close(){
    this.dialog.closeAll();
  }
}
