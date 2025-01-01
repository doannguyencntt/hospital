import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichSuCanLamSangRoutingModule } from './lich-su-can-lam-sang-routing.module';
import { LichSuDanhSachCanLamSangComponent } from './lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component';
import { ThongTinLichSuChiTietComponent } from './thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component';
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
import { ViewImagePdfListClsComponent } from './view-image-pdf-list-cls/view-image-pdf-list-cls.component';
import { XemKetQuaCdhaTdcnPopupComponent } from './xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';
import { CanLamSangModule } from '../danh-sach-ket-qua-can-lam-sang/can-lam-sang.module';

@NgModule({
  exports: [
    XemKetQuaCdhaTdcnPopupComponent
  ],
  declarations: [
    LichSuDanhSachCanLamSangComponent,
    ThongTinLichSuChiTietComponent, 
    ViewImagePdfListClsComponent, 
    XemKetQuaCdhaTdcnPopupComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    CommonModule,
    LichSuCanLamSangRoutingModule,
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
    MatCheckboxModule,
    CanLamSangModule
  ],
  entryComponents: [
    ViewImagePdfListClsComponent,
    XemKetQuaCdhaTdcnPopupComponent
  ],
})
export class LichSuCanLamSangModule { }
