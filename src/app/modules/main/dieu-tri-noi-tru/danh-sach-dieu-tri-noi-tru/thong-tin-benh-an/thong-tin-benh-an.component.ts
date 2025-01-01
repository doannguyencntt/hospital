import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { ChiTietDieuTriNoiTruViewModel } from '../../dieu-tri-noi-tru.model';
import { Common } from './thong-tin-benh-an.model';
import { ThongTinBenhAnKhoaNhiComponent } from './thong-tin-khoa-nhi/thong-tin-khoa-nhi.component';
import { ThongTinBenhAnNgoaiKhoaComponent } from './thong-tin-ngoai-khoa/thong-tin-benh-an-ngoai-khoa.component';
import { ThongTinBenhAnNoiKhoaComponent } from './thong-tin-noi-khoa/thong-tin-noi-khoa.component';
import { ThongTinBenhAnPhuKhoaComponent } from './thong-tin-phu-khoa/thong-tin-benh-an-phu-khoa.component';
import { ThongTinBenhAnSanKhoaMoThuongComponent } from './thong-tin-san-khoa-mo-thuong/thong-tin-benh-an-san-khoa-mo-thuong.component';
import { ThongTinBenhAnTreEmSoSinhComponent } from './thong-tin-tre-em-so-sinh/thong-tin-tre-em-so-sinh.component';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { NotificationService } from 'src/app/core/services/notification.service';
import { PhieuKhamBenhNoiTruPopupComponent } from './phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-thong-tin-benh-an',
  templateUrl: './thong-tin-benh-an.component.html',
  styleUrls: ['./thong-tin-benh-an.component.scss']
})
export class ThongTinBenhAnComponent implements OnInit {
  yeuCauTiepNhanId: number = 0;
  loaiThongTinBenhAn: number = 0;
  validationErrors: any[] = [];

  loaiBenhAn = new Common();

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @ViewChild(ThongTinBenhAnNoiKhoaComponent, { static: false }) thongTinBenhAnNoiKhoaComponent: ThongTinBenhAnNoiKhoaComponent;
  @ViewChild(ThongTinBenhAnNgoaiKhoaComponent, { static: false }) thongTinBenhAnNgoaiKhoaComponent: ThongTinBenhAnNgoaiKhoaComponent;
  @ViewChild(ThongTinBenhAnKhoaNhiComponent, { static: false }) thongTinBenhAnKhoaNhiComponent: ThongTinBenhAnKhoaNhiComponent;
  @ViewChild(ThongTinBenhAnPhuKhoaComponent, { static: false }) thongTinBenhAnPhuKhoaComponent: ThongTinBenhAnPhuKhoaComponent;
  @ViewChild(ThongTinBenhAnSanKhoaMoThuongComponent, { static: false }) thongTinBenhAnSanKhoaMoThuongComponent: ThongTinBenhAnSanKhoaMoThuongComponent;
  @ViewChild(ThongTinBenhAnTreEmSoSinhComponent, { static: false }) thongTinBenhAnTreEmSoSinhComponent: ThongTinBenhAnTreEmSoSinhComponent;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,) { }

  ngOnInit() {
    this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
    this.getThongTinLoaiBenhAn(this.yeuCauTiepNhanId);
  }

  getThongTinLoaiBenhAn(id: any) {
    this.apiService.get<any>("DieuTriNoiTru/GetThongTinLoaiBenhAn/" + id)
      .subscribe((loaiBenhAn) => {
        this.loaiThongTinBenhAn = loaiBenhAn;
      });
  }

  luuBenhAn() {
    this.luuBenhAnVaInPhieu(false);
  }

  huyBenhAn() {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa) {
      this.thongTinBenhAnNoiKhoaComponent.HuyBenhAn();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinBenhAnNgoaiKhoaComponent.HuyBenhAn();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa) {
      this.thongTinBenhAnKhoaNhiComponent.HuyBenhAn();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinBenhAnPhuKhoaComponent.HuyBenhAn();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo || this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinBenhAnSanKhoaMoThuongComponent.HuyBenhAn();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinBenhAnTreEmSoSinhComponent.HuyBenhAn();
    }
  }

  luuBenhAnVaInPhieu(inPhieu: any) {
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa) {
      this.thongTinBenhAnNoiKhoaComponent.LuuThongTinBenhAnNoiKhoaKhoaNhi(inPhieu);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinBenhAnNgoaiKhoaComponent.LuuThongTinBenhAnNgoaiKhoa(inPhieu);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa) {
      this.thongTinBenhAnKhoaNhiComponent.LuuThongTinBenhAnKhoaNhi(inPhieu);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinBenhAnPhuKhoaComponent.LuuThongTinBenhAnNoiKhoaPhuKhoa(inPhieu);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo || this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinBenhAnSanKhoaMoThuongComponent.LuuThongTinBenhAnSanKhoa(inPhieu);
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinBenhAnTreEmSoSinhComponent.LuuThongTinBenhAnTreSoSinh(inPhieu);
    }
  }

  InPhieuKhamBenh() {

    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NoiKhoa) {
      this.thongTinBenhAnNoiKhoaComponent.luuBenhAnVaInPhieu();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NgoaiKhoa || this.loaiThongTinBenhAn === this.loaiBenhAn.ThamMy) {
      this.thongTinBenhAnNgoaiKhoaComponent.luuBenhAnVaInPhieu();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.NhiKhoa) {
      this.thongTinBenhAnKhoaNhiComponent.luuBenhAnVaInPhieu();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.PhuKhoa) {
      this.thongTinBenhAnPhuKhoaComponent.luuBenhAnVaInPhieu();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaMo || this.loaiThongTinBenhAn === this.loaiBenhAn.SanKhoaThuong) {
      this.thongTinBenhAnSanKhoaMoThuongComponent.luuBenhAnVaInPhieu();
    }
    if (this.loaiThongTinBenhAn === this.loaiBenhAn.TreSoSinh) {
      this.thongTinBenhAnTreEmSoSinhComponent.luuBenhAnVaInPhieu();
    }
  }
}
