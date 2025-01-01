import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { TongHopDuTruMuaThuocTaiKhoa } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
import { TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent } from '../tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component';
import { PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from '../phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';
import { PhieuMuaDuocPhamComponent } from '../../yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component';
@Component({
  selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-detail',
  templateUrl: './tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class TongHopDuTruMuaThuocTaiKhoaDetailComponent implements OnInit {
  documentType: DocumentType;
  danhSachTongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoa;
  popupLoadingData: any = null;
  validationErrors: any = null;
  trangThaiVo: any = null;
  phieuMuaDuocPhamTaiKhoaId: number = null;
  // inPhieu: PhieuYeuCauMuaThuoc = new PhieuYeuCauMuaThuoc();
  @ViewChild(TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent, { static: true }) shared: any;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private location: Location,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private apiService: ApiService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
    this.danhSachTongHopDuTruMuaThuocTaiKhoa = new TongHopDuTruMuaThuocTaiKhoa();
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.GetTrangThaiPhieuMuaDuTru(id);
      this.phieuMuaDuocPhamTaiKhoaId = id;
    }
  }

  //long update trang thái
  GetTrangThaiPhieuMuaDuTru(id: number) {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
      self.apiService.get<any>("YeuCauMuaDuocPham/GetTrangThaiPhieuDuocPhamDuTru?phieuMuaDuocPhamId=" + id).subscribe(
        (result) => {
          this.trangThaiVo = result;
        })
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  inPhieu() {
    var self = this;
    self.danhSachTongHopDuTruMuaThuocTaiKhoa = self.shared.getSharedData();
    self.loadingPage();
    self.dialog.open(PhieuMuaDuocPhamComponent, {
      disableClose: false,
      width: '1200px',
      data: { Id: self.phieuMuaDuocPhamTaiKhoaId, Loai: self.danhSachTongHopDuTruMuaThuocTaiKhoa.LoaiDuTru },
    }).afterClosed().subscribe(() => {
      self.closepopupLoadingData();
    });
  }

  cancel() {
    this.location.back();
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 27 && !event.ctrlKey) {
      //esc
      this.cancel();
      event.preventDefault();
    }
  }
}
