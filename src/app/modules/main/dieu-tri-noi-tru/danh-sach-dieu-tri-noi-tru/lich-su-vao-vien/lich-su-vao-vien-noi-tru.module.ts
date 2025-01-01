import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichSuVaoVienComponent } from './lich-su-vao-vien/lich-su-vao-vien.component';
import { ChiTietKhamChuaBenhComponent } from './chi-tiet-kham-chua-benh/chi-tiet-kham-chua-benh.component';
import { LichSuVaoVienNoiTruRoutingModule } from './lich-su-vao-vien-noi-tru-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule,MatOptionModule, MatSelectModule, MatTabsModule,} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import {  MatIconModule,  MatMenuModule,  MatButtonToggleModule,  MatTooltipModule,  MatButtonModule,  MatDialogModule,} from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { LichSuKhamBenhNoiTruComponent } from './chi-tiet-kham-chua-benh/lich-su-kham-benh/lich-su-kham-benh-noi-tru.component';
import { LichSuChiDinhComponent } from './chi-tiet-kham-chua-benh/lich-su-chi-dinh/lich-su-chi-dinh.component';
import { LichSuChuanDoanComponent } from './chi-tiet-kham-chua-benh/lich-su-chuan-doan/lich-su-chuan-doan.component';
import { LichSuKetQuaClsComponent } from './chi-tiet-kham-chua-benh/lich-su-ket-qua-cls/lich-su-ket-qua-cls.component';
import { ChiTietDieuTriPopupComponent } from './chi-tiet-dieu-tri-popup/chi-tiet-dieu-tri-popup.component';
import { LichSuKhamBenhChiSoSinhTonNoiTruComponent } from './chi-tiet-kham-chua-benh/lich-su-kham-benh-chi-so-sinh-ton/lich-su-kham-benh-chi-so-sinh-ton.component';
import { LichSuKhamBenhBoPhanTonThuongNoiTruComponent } from './chi-tiet-kham-chua-benh/lich-su-kham-benh-bo-phan-ton-thuong/lich-su-kham-benh-bo-phan-ton-thuong.component';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { ViewImagePdfListComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/view-image-pdf-list/view-image-pdf-list.component';
import { LichSuKhamBenhKeToaNoiTruComponent } from './chi-tiet-kham-chua-benh/lich-su-kham-benh-ke-toa/lich-su-kham-benh-ke-toa.component';
import { LayMauXetNghiemKetQuaPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { XemKetQuaCdhaTdcnPopupComponent } from '../../../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LichSuVaoVienNoiTruRoutingModule ,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    LayoutModule,
    GridModule,
  ],
  entryComponents: [
    ChiTietKhamChuaBenhComponent,
    ViewImagePdfComponent,
    ViewImagePdfListComponent,
    LayMauXetNghiemKetQuaPopupComponent,
    XemKetQuaCdhaTdcnPopupComponent
  ]
})
export class LichSuVaoVienNoiTruModule { }
