import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ChiTietDieuTriNoiTruViewModel, InPhieuCongKhaiThuocVatTu } from '../../../dieu-tri-noi-tru.model';
import { LoaiBenhAn } from 'src/app/shared/enum/dieu-tri-noi-tru.enum';

@Component({
  selector: 'app-chi-tiet-dieu-tri-popup',
  templateUrl: './chi-tiet-dieu-tri-popup.component.html',
  styleUrls: ['./chi-tiet-dieu-tri-popup.component.scss']
})
export class ChiTietDieuTriPopupComponent implements OnInit {
  icClose = icClose;
  laBASanKhoa: boolean = false;
  tabChildPhieuDieutriId: number = 0;
  isDisabledIn: boolean = false;
  ngayDieuTriHienTai: Date;
  loaiBenhAnNoiKhoa: number = LoaiBenhAn.NoiKhoa;
  loaiBenhAnNhiKhoa: number = LoaiBenhAn.NhiKhoa;
  loaiBenhAnPhuKhoa: number = LoaiBenhAn.PhuKhoa;
  loaiBenhAnSanKhoaMo: number = LoaiBenhAn.SanKhoaMo;
  loaiBenhAnSanKhoaThuong: number = LoaiBenhAn.SanKhoaThuong;
  loaiBenhAnNgoaiKhoa: number = LoaiBenhAn.NgoaiKhoa;
  loaiBenhAnThamMy: number = LoaiBenhAn.ThamMy;
  loaiBenhAnTreSoSinh: number = LoaiBenhAn.TreSoSinh;
  dieuTriNoiTru: ChiTietDieuTriNoiTruViewModel = new ChiTietDieuTriNoiTruViewModel();
  inPhieuCongKhaiThuocVatTu: InPhieuCongKhaiThuocVatTu = new InPhieuCongKhaiThuocVatTu();
  @ViewChild("tabStrip", { static: true }) tabStrip: TabStripComponent;
  constructor(private dialog: MatDialog,private route: ActivatedRoute,private baseService: BaseService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dieuTriNoiTru.Id = data.yeuCauTiepNhanId;
  }

  ngOnInit() {
    
    if (this.dieuTriNoiTru.Id !== undefined && this.dieuTriNoiTru.Id !== null) {
      this.getById(this.dieuTriNoiTru.Id);
    }
  }
  getById(id: number) {
    var self=this;
    this.baseService.getById<ChiTietDieuTriNoiTruViewModel>(id).subscribe(resultData => {
      if (resultData !== null && resultData !== undefined) {
        this.dieuTriNoiTru = resultData;

        if(this.dieuTriNoiTru.LoaiBenhAnEnum == LoaiBenhAn.SanKhoaMo || this.dieuTriNoiTru.LoaiBenhAnEnum == LoaiBenhAn.SanKhoaThuong)
        {
          this.laBASanKhoa = true;
        }
      }
    });
  }


  close() {
    this.dialog.closeAll();
  }

  CheckHiddenBottom(id: number){
    //id start to 0 from .....
    //console.log("tabStrip = ", this.tabStrip.tabs.toArray().indexOf(this.tabStrip.tabs.filter(o => o.active)[0]));
    if(this.tabStrip == undefined) return true;
    if(id == this.tabStrip.tabs.toArray().indexOf(this.tabStrip.tabs.filter(o => o.active)[0])){
      return false;
    }
    return true;
  }
  
  isDaChiDinhBacSiVaGiuongChanged(evt) {
    this.dieuTriNoiTru.DaChiDinhGiuongVaBacSi = evt;
  }
  disabledInPhieuThuocVT(event: any) {
    if (event) {
      this.isDisabledIn = true;
    }
    else {
      this.isDisabledIn = false;
    }
  }
  ngayDieuTriHienTaiChange(event) {
    this.ngayDieuTriHienTai = event;
  }
  getPhieuDieuTriId(phieuDieuTriId: number) {
    this.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = phieuDieuTriId;
  }
  phieuDieuTriTabChange($event) {
    //console.log("phieuDieuTriTabChange = ", $event);
    this.tabChildPhieuDieutriId = $event.index;
  }

}
