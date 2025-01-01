import { Component, OnInit, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ThongTinBenhNhan } from '../quay-thuoc.model';
import { Router, ActivatedRoute } from '@angular/router';
import { QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent } from '../quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component';
import { MatDialog } from '@angular/material';
import { QuayThuocListComponent } from 'src/app/modules/main/quay-thuoc/quay-thuoc-list/quay-thuoc-list.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-quay-thuoc-cho-thanh-toan',
  templateUrl: './quay-thuoc-cho-thanh-toan.component.html',
  styleUrls: ['./quay-thuoc-cho-thanh-toan.component.scss']
})
export class QuayThuocChoThanhToanComponent implements OnInit {
  id: number = 0;
  benhNhan: ThongTinBenhNhan;
  typeDanhSachThanhToan: number = 0;
  xacNhanIn: boolean = false;
  queryStringSearchUuTien: string;
  dataQuayThuocSearch: any;
  hoquerySearch : boolean ;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(QuayThuocListComponent, { static: true }) gridQuayThuocList: QuayThuocListComponent;
  constructor(private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params.page;  // id là đã thanh toán
      this.hoquerySearch = params.hoQuerysearch;
    });
    if (this.id == undefined) {
      LocalStorageHelper.removeItem("additionalSearchStringChiTietNhaThuoc");
    }
    if (this.id == 1) {
      this.typeDanhSachThanhToan = 1;
      var searching = LocalStorageHelper.getItem<string>("additionalSearchStringChiTietNhaThuoc");
      this.queryStringSearchUuTien =searching;
    }
    if (this.id == 2) {
      this.typeDanhSachThanhToan = 2;
      var searching = LocalStorageHelper.getItem<string>("additionalSearchStringChiTietNhaThuoc");
      this.queryStringSearchUuTien =searching;
    }
    if (this.id == 3) {
      this.typeDanhSachThanhToan = 3;
      var searching = LocalStorageHelper.getItem<string>("additionalSearchStringChiTietNhaThuoc");
      this.queryStringSearchUuTien =searching;
    }
    if (this.id == 0) {
      this.typeDanhSachThanhToan = 0;
      var searching = LocalStorageHelper.getItem<string>("additionalSearchStringChiTietNhaThuoc");
      this.queryStringSearchUuTien =searching;
    }

  }

  getonHaddleDataSearch(event) {
    this.dataQuayThuocSearch = event;
  }
  ToKhachVangLai(typeDanhSachThanhToan: any) {
    //this.router.navigate(['nha-thuoc'], { queryParams: { page: type} });
    this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: typeDanhSachThanhToan } });
  }
  getkiemTraDonThuocThanhToan(event: any) {
    this.cd.detectChanges();
    // this.typeDanhSachThanhToan = event;
  }
  getonHaddleUuTienSearch(event: any) {
    // this.gridQuayThuocList.queryStringSearchUuTien = null;
    this.queryStringSearchUuTien = event;
    this.cd.detectChanges();
  }
  KiemTraeXportExel(event: any) {
    this.xacNhanIn = event;
  }
  getData(event: any) {
    this.benhNhan = event;
    // if (this.benhNhan.YeuCauTiepNhanId > 0) {
    //   this.router.navigate(['nha-thuoc/mua-thuoc/' + this.benhNhan.YeuCauTiepNhanId + '/' + this.benhNhan.MaBenhNhan + '/' + event.TrangThaiThanhToan + '/'+ this.typeDanhSachThanhToan]);
    // }
    // else {
    //   if(this.benhNhan.)
    //   this.router.navigate(['nha-thuoc/mua-toa-cu/' + this.benhNhan.MaBenhNhan + '/' + this.typeDanhSachThanhToan]);
    // }
    if (event.Id > 0) {
      // this.router.navigate(['nha-thuoc/mua-thuoc/' + event.Id + '/' + event.MaBN + '/' + event.TrangThaiThanhToan + '/'+ this.typeDanhSachThanhToan]);
      this.router.navigate(['nha-thuoc/mua-thuoc/' + event.Id + '/' + event.MaBN + '/' + event.TrangThai + '/' + this.typeDanhSachThanhToan]);
    }
    else {
      if (event.DonThuocThanhToanExits == true) {
        this.router.navigate(['nha-thuoc/mua-toa-cu/' + event.MaBN + '/' + this.typeDanhSachThanhToan]);
      }
      else {
        let dialogRef = this.dialog.open(QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent, {
          disableClose: true,
          width: '500px',
          data: { Model: event, KiemTraThanhToan: this.typeDanhSachThanhToan, Title: "XÁC NHẬN" }
        }).afterClosed().subscribe(result => {
        });
      }
    }
  }
}
