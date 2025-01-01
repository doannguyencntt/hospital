import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ResultSoDoPopup } from '../so-do-giuong-benh.model';

@Component({
  selector: 'app-so-do-giuong-popup',
  templateUrl: './so-do-giuong-popup.component.html',
  styleUrls: ['./so-do-giuong-popup.component.scss']
})
export class SoDoGiuongPopupComponent implements OnInit {

  icClose = icClose;
  khoaId: number;
  tenKhoa: string = "";
  phongId: number;

  //
  giuongTrong: boolean = true;
  giuongDaCoBenhNhan: boolean = true;

  modelGiuong: ResultSoDoPopup = new ResultSoDoPopup();

  resultGiuong: ResultSoDoPopup = new ResultSoDoPopup();

  constructor(@Inject(MAT_DIALOG_DATA) public data: number
    , private dialog: MatDialog, private apiService: ApiService) {
    this.khoaId = data;
    this.modelGiuong.KhoaId = data;
  }

  ngOnInit() {
    //console.log("khoa id = ", this.khoaId);
    this.getTenKhoa(this.khoaId).then(obj => {
      this.tenKhoa = obj;
    });
  }

  giuongTrongChange($event){
    this.giuongTrong = $event;
    //this.getListGiuongBenhFollowPhong(this.phongId);
  }

  giuongDaCoBenhNhanChange($event){
    this.giuongDaCoBenhNhan = $event;
    //this.getListGiuongBenhFollowPhong(this.phongId);
  }

  phongChange($event) {
    //console.log("phongChange = ", $event);
    this.getListGiuongBenhFollowPhong($event);
  }
  close() {
    this.dialog.closeAll();
  }

  getTenKhoa(id: number) {
    return this.apiService.post<string>("SoDoGiuongBenh/GetTenKhoa?khoaId=" + id).toPromise().catch(() => "");
  }

  getListGiuongBenhFollowPhong(phongId: number){
    this.modelGiuong.PhongId = phongId;
    this.modelGiuong.TenKhoa = this.tenKhoa;
    this.modelGiuong.GiuongDaCoBenhNhan = this.giuongDaCoBenhNhan;
    this.modelGiuong.GiuongTrong = this.giuongTrong;

    this.apiService.post<ResultSoDoPopup>("SoDoGiuongBenh/GetDanhSachGiuongKhoaPopup", this.modelGiuong).subscribe(
      resultData => {
          if (resultData != undefined && resultData != null) {
            console.log("ResultSoDoPopup = ", resultData);
            this.resultGiuong = resultData;
          }
          else {
          }
      },
      (err: any) => {
      });
  }
}
