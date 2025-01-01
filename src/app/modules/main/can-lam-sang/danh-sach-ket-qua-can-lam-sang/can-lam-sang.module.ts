import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanLamSangRoutingModule } from './can-lam-sang-routing.module';
import { DanhSachCanLamSangComponent } from './danh-sach-can-lam-sang/danh-sach-can-lam-sang.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ThongTinChiTietComponent } from './thong-tin-chi-tiet/thong-tin-chi-tiet.component';
import { GridModule } from "@progress/kendo-angular-grid";
import { KetQuaCdhaTdcnSharedComponent } from './ket-qua-cdha-tdcn-shared/ket-qua-cdha-tdcn-shared.component';
import { KetQuaCdhaTdcnUpdateComponent } from './ket-qua-cdha-tdcn-update/ket-qua-cdha-tdcn-update.component';
import { KetQuaCdhaTdcnInPhieuPopupComponent } from './ket-qua-cdha-tdcn-in-phieu-popup/ket-qua-cdha-tdcn-in-phieu-popup.component';
import { KetQuaCdhaTdcnDanhSachMauPopupComponent } from './ket-qua-cdha-tdcn-danh-sach-mau-popup/ket-qua-cdha-tdcn-danh-sach-mau-popup.component';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { KetQuaCdhaTdcnThemHinhAnhPopupComponent } from './ket-qua-cdha-tdcn-them-hinh-anh-popup/ket-qua-cdha-tdcn-them-hinh-anh-popup.component';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { CĐHAGhiNhanVatTuThuocComponent } from './ghi-nhan-vat-tu-thuoc/ghi-nhan-vat-tu-thuoc.component';
import { PhauThuatThuThuatModule } from '../../phau-thuat-thu-thuat/phau-thuat-thu-thuat.module';
import { GhiNhanHoanTraPopupComponent } from './ghi-nhan-hoan-tra-popup/ghi-nhan-hoan-tra-popup.component';
import { GhiNhanCapNhatPopupComponent } from './ghi-nhan-cap-nhat-popup/ghi-nhan-cap-nhat-popup.component';
import { PtttDpVtTuGoiPopupComponent } from './pttt-dp-vt-tu-goi-popup/pttt-dp-vt-tu-goi-popup.component';

@NgModule({
  declarations: [
    DanhSachCanLamSangComponent, 
    ThongTinChiTietComponent, 
    KetQuaCdhaTdcnSharedComponent, 
    KetQuaCdhaTdcnUpdateComponent, 
    KetQuaCdhaTdcnInPhieuPopupComponent, 
    KetQuaCdhaTdcnDanhSachMauPopupComponent, 
    KetQuaCdhaTdcnThemHinhAnhPopupComponent,
    CĐHAGhiNhanVatTuThuocComponent,
    GhiNhanHoanTraPopupComponent,
    GhiNhanCapNhatPopupComponent,
    PtttDpVtTuGoiPopupComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    CommonModule,
    MatInputModule,
    CanLamSangRoutingModule,
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
    CommonModule,
    GridModule,
    MatCheckboxModule,
    ImageDrawingModule
  ],
  entryComponents: [
    KetQuaCdhaTdcnDanhSachMauPopupComponent,
    ViewImagePdfComponent,
    KetQuaCdhaTdcnThemHinhAnhPopupComponent,
    KetQuaCdhaTdcnInPhieuPopupComponent,
    GhiNhanHoanTraPopupComponent,
    GhiNhanCapNhatPopupComponent,
    PtttDpVtTuGoiPopupComponent
  ]
})
export class CanLamSangModule { }
