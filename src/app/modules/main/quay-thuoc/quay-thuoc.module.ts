import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuayThuocRoutingModule } from './quay-thuoc-routing.module';
import { QuayThuocTimBenhNhanComponent } from './quay-thuoc-tim-benh-nhan/quay-thuoc-tim-benh-nhan.component';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { QuayThuocTimBenhNhanPopUpComponent } from './quay-thuoc-tim-benh-nhan-pop-up/quay-thuoc-tim-benh-nhan-pop-up.component';
import { QuayThuocChoThanhToanComponent } from './quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component';
import { QuayThuocMuaThuocComponent } from './quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component';
import { QuayThuocListComponent } from './quay-thuoc-list/quay-thuoc-list.component';
import { QuayThuocThongTinHanhChinhComponent } from './quay-thuoc-thong-tin-hanh-chinh/quay-thuoc-thong-tin-hanh-chinh.component';
import { QuayThuocToaThuocCuComponent } from './quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component';
import { QuayThuocThongTinBaoHiemTuNhanComponent } from './quay-thuoc-thong-tin-bao-hiem-tu-nhan/quay-thuoc-thong-tin-bao-hiem-tu-nhan.component';
import { QuayThuocHinhThucThanhToanComponent } from './quay-thuoc-hinh-thuc-thanh-toan/quay-thuoc-hinh-thuc-thanh-toan.component';
import { QuayThuocXacNhanPopUpComponent } from './quay-thuoc-xac-nhan-pop-up/quay-thuoc-xac-nhan-pop-up.component';
import { QuayThuocXacNhanInPopUpComponent } from './quay-thuoc-xac-nhan-in-pop-up/quay-thuoc-xac-nhan-in-pop-up.component';
import { QuayThuocChoXuatThuocComponent } from './quay-thuoc-cho-xuat-thuoc/quay-thuoc-cho-xuat-thuoc.component';
import { InBangThuTienPopUpComponent } from './in-bang-thu-tien-pop-up/in-bang-thu-tien-pop-up.component';
import { QuayThuocKhachVangLaiComponent } from './quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component';
import { QuayThuocKhachVangLaiChoThanhToanComponent } from './quay-thuoc-khach-vang-lai-cho-thanh-toan/quay-thuoc-khach-vang-lai-cho-thanh-toan.component';
import { QuayThuocKhachVangLaiChoXuatThuocComponent } from './quay-thuoc-khach-vang-lai-cho-xuat-thuoc/quay-thuoc-khach-vang-lai-cho-xuat-thuoc.component';
import { QuayThuocKhachVangLaiThongTinHanhChinhComponent } from './quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh/quay-thuoc-khach-vang-lai-thong-tin-hanh-chinh.component';
import { QuayThuocService } from './quay-thuoc.service';
import { QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent } from './quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up/quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component';
import { InDonThuocPopUpComponent } from './in-don-thuoc-pop-up/in-don-thuoc-pop-up.component';
import { ApDungMiemGiamThemPopupComponent } from './ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component';
import { ApDungMiemGiamChoTungLoaiThuocPopupComponent } from './ap-dung-miem-giam-cho-tung-loai-thuoc-popup/ap-dung-miem-giam-cho-tung-loai-thuoc-popup.component';
import { ThongTinPhieuPdfPopupComponent } from './thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { ThongTinPhieuThuThuoc } from './thong-tin-phieu-da-thu/thong-tin-phieu-da-thu.component';
import { XacNhanHuyThuComponent } from './xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component';
import { XacNhanHuyThuBanThuocComponent } from './xac-nhan-phieu-huy-thu-ban-thuoc/xac-nhan-phieu-huy-thu-ban-thuoc.component';

@NgModule({
  declarations: [
    QuayThuocTimBenhNhanComponent,
    QuayThuocTimBenhNhanPopUpComponent,
    QuayThuocChoThanhToanComponent, QuayThuocMuaThuocComponent,
    QuayThuocListComponent,
    QuayThuocThongTinHanhChinhComponent,
    QuayThuocToaThuocCuComponent,
    QuayThuocThongTinBaoHiemTuNhanComponent,
    QuayThuocHinhThucThanhToanComponent,
    QuayThuocXacNhanPopUpComponent,
    QuayThuocXacNhanInPopUpComponent,
    QuayThuocChoXuatThuocComponent,
    InBangThuTienPopUpComponent,
    QuayThuocKhachVangLaiComponent,
    QuayThuocKhachVangLaiChoThanhToanComponent,
    QuayThuocKhachVangLaiChoXuatThuocComponent,
    QuayThuocKhachVangLaiThongTinHanhChinhComponent,
    QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent,
    InDonThuocPopUpComponent,
    ApDungMiemGiamThemPopupComponent,
    ApDungMiemGiamChoTungLoaiThuocPopupComponent,
    ThongTinPhieuPdfPopupComponent,
    ThongTinPhieuThuThuoc,
    XacNhanHuyThuComponent ,
    XacNhanHuyThuBanThuocComponent   
  ],
  imports: [
    CommonModule,
    QuayThuocRoutingModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    GridModule,
    MatRadioModule,
  ], entryComponents: [
    ApDungMiemGiamChoTungLoaiThuocPopupComponent,
    ApDungMiemGiamThemPopupComponent,
    InDonThuocPopUpComponent,
    QuayThuocTimBenhNhanPopUpComponent,
    QuayThuocXacNhanPopUpComponent,
    QuayThuocXacNhanInPopUpComponent,
    InBangThuTienPopUpComponent,
    QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent,
    ThongTinPhieuPdfPopupComponent,
    XacNhanHuyThuComponent,
    XacNhanHuyThuBanThuocComponent
  ],
  providers: [
    QuayThuocService,
    { provide: BaseService, useClass: QuayThuocService },
  ]
})
export class QuayThuocModule { }
