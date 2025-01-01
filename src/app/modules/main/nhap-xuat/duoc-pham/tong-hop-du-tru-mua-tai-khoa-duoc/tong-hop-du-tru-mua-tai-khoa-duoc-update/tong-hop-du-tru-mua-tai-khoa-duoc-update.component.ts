import { Component, OnInit } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { TongHopDuTruMuaTaiKhoaDuoc ,TrangThaiDuyet,TongHopDuTruTuaTaiKhoaDuocSearch,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc,ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild} from '../tong-hop-du-tru-mua-tai-khoa-duoc.model';
@Component({
  selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-update',
  templateUrl: './tong-hop-du-tru-mua-tai-khoa-duoc-update.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-tai-khoa-duoc-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TongHopDuTruMuaTaiKhoaDuocUpdateComponent implements OnInit {
  trangThai: TrangThaiDuyet;
  isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
      if (this.trangThai.DuocDuyet == true) {
        this.isShow = false;
      }
      else if (this.trangThai.DuocDuyet == false) {
        this.isShow = false;
      }
      else {
        this.isShow = true;
      }
    }
  }
}
