import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { KhachVangLai, ThongTinBenhNhan } from 'src/app/modules/main/quay-thuoc/quay-thuoc.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { DanhSachKhoaKham, ThongTinKhamBenhTheoKhoa } from '../lich-su-vao-vien.model';
import { LichSuKhamBenhNoiTruComponent } from './lich-su-kham-benh/lich-su-kham-benh-noi-tru.component';
@Component({
  selector: 'app-chi-tiet-kham-chua-benh',
  templateUrl: './chi-tiet-kham-chua-benh.component.html',
  styleUrls: ['./chi-tiet-kham-chua-benh.component.scss']
})
export class ChiTietKhamChuaBenhComponent implements OnInit {
  icClose = icClose;
  public yeuCauTiepNhanId: number = 0;
  public benhNhanId: number = 0;

  public maTiepNhan: string = "";
  public thongTinKhamBenhTheoKhoa = new ThongTinKhamBenhTheoKhoa();
  public lookupQueryInfo = new LookupQueryInfo();
  public danhSachKhoaKham = new DanhSachKhoaKham();

  @ViewChild(LichSuKhamBenhNoiTruComponent, { static: false }) LichSuVaoVienComponent: LichSuKhamBenhNoiTruComponent;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) { }
  ngOnInit() {
    this.yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
    this.maTiepNhan = this.data.maTiepNhan;
    this.benhNhanId = this.data.benhNhanId;
    this.lookupQueryInfo.Id = this.data.yeuCauTiepNhanId;
    this.lookupQueryInfo.Query = this.data.yeuCauTiepNhanId;
    this.bindFirstValue();
  }

  close() {
    this.dialog.closeAll();
  }

  bindFirstValue() {
    this.apiService.post<any>("DieuTriNoiTru/GetTenDichVuKhamBenh?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined && resultData.length > 0) {
          this.danhSachKhoaKham.KeyId = resultData[0].KeyId;
          this.chonkhamBenhChange(resultData[0].KeyId);
        }
      });
  }

  chonkhamBenhChange(ev: any) { 
    if (ev !== undefined) {
      this.apiService.get<any>("DieuTriNoiTru/GetThongTinTheoKhamBenh?khamBenhId=" + ev + "&yeuCauTiepNhanId=" + this.data.yeuCauTiepNhanId)
        .subscribe((resultData) => {
          if (resultData !== null && resultData !== undefined) {
            this.thongTinKhamBenhTheoKhoa = resultData;
            this.thongTinKhamBenhTheoKhoa.KhamBenhId = ev;
          }
        });
    } else {
      this.thongTinKhamBenhTheoKhoa = new ThongTinKhamBenhTheoKhoa();
    }
  }
}
