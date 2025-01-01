import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanTiepNhanRoutingModule } from './kham-doan-tiep-nhan-routing.module';
import { KhamDoanTiepNhanListComponent } from './kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component';
import { KhamDoanTiepNhanDetailPopupComponent } from './kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component';
import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from './kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component';
import { KhamDoanTiepNhanInHoSoPopupComponent } from './kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KhamDoanLsTiepNhanKhamSucKhoeModule } from '../kham-doan-ls-tiep-nhan-kham-suc-khoe/kham-doan-ls-tiep-nhan-kham-suc-khoe.module';
import { KhamDoanTiepNhanFilePopupComponent } from './kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component';
import { KetQuaKhamSucKhoePopupComponent } from './ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { PhieuDangKyKhamSucKhoePopupComponent } from './phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from './so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { BangHuongDanKhamSucKhoePopupComponent } from './bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';
import { InDichVuChiDinhNgoaiGoiComponent } from './in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component';


@NgModule({
  declarations: [
    KhamDoanTiepNhanListComponent, 
    KhamDoanTiepNhanDetailPopupComponent, 
    KhamDoanTiepNhanNhanVienDetailPopupComponent, 
    KhamDoanTiepNhanInHoSoPopupComponent, 
    KhamDoanTiepNhanFilePopupComponent,
    KetQuaKhamSucKhoePopupComponent,
    PhieuDangKyKhamSucKhoePopupComponent,
    SoKhamSucKhoeDinhKyPopupComponent,
    BangHuongDanKhamSucKhoePopupComponent,
    InDichVuChiDinhNgoaiGoiComponent
  ],
  imports: [
    CommonModule,
    KhamDoanTiepNhanRoutingModule,
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
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    GridModule,
    IntlModule,
    PdfViewerModule,
    MatRadioModule,
    MatCheckboxModule,
    KhamBenhModule
  ],
  entryComponents: [
    KhamDoanTiepNhanDetailPopupComponent, 
    KhamDoanTiepNhanNhanVienDetailPopupComponent, 
    KhamDoanTiepNhanInHoSoPopupComponent,
    KhamDoanTiepNhanFilePopupComponent,
    SoKhamSucKhoeDinhKyPopupComponent,
    KetQuaKhamSucKhoePopupComponent,
    PhieuDangKyKhamSucKhoePopupComponent,
    BangHuongDanKhamSucKhoePopupComponent,
    InDichVuChiDinhNgoaiGoiComponent
  ]
})
export class KhamDoanTiepNhanModule { }
