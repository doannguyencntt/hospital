import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { KhamDoanKetLuanRoutingModule } from './kham-doan-ket-luan-routing.module';
import { KetLuanKhamSucKhoeDoanListComponent } from './ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component';
import { KetLuanKhamSucKhoeDoanChuaKetLuanListComponent } from './ket-luan-kham-suc-khoe-doan-chua-ket-luan-list/ket-luan-kham-suc-khoe-doan-chua-ket-luan-list.component';
import { KetLuanKhamSucKhoeDoanDaKetLuanListComponent } from './ket-luan-kham-suc-khoe-doan-da-ket-luan-list/ket-luan-kham-suc-khoe-doan-da-ket-luan-list.component';
import { KetLuanKhamSucKhoeDoanChiTietComponent } from './ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component';
import { KhamDoanThongTinHanhChinhModule } from '../kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module';
import { KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent } from './ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup/ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component';
import { KhamDoanTiepNhanModule } from '../kham-doan-tiep-nhan/kham-doan-tiep-nhan.module';
import { KetQuaKhamSucKhoePopupComponent } from '../kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component';
import { SoKhamSucKhoeDinhKyPopupComponent } from '../kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component';
import { KetLuanKskDoanDvChuaKhamListPopupComponent } from './ket-luan-ksk-doan-dv-chua-kham-list-popup/ket-luan-ksk-doan-dv-chua-kham-list-popup.component';
import { PopupKetQuaKskEditComponent } from './popup-ket-qua-ksk-edit/popup-ket-qua-ksk-edit.component';
import { PopupKetQuaKskSharedComponent } from './popup-ket-qua-ksk-shared/popup-ket-qua-ksk-shared.component';
import { PopupKetQuaKskKetLuanComponent } from './popup-ket-qua-ksk-ket-luan/popup-ket-qua-ksk-ket-luan.component';



@NgModule({
  declarations: [
    KetLuanKhamSucKhoeDoanListComponent,
    KetLuanKhamSucKhoeDoanChuaKetLuanListComponent,
    KetLuanKhamSucKhoeDoanDaKetLuanListComponent,
    KetLuanKhamSucKhoeDoanChiTietComponent,
    KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent,
    KetLuanKskDoanDvChuaKhamListPopupComponent,
    PopupKetQuaKskEditComponent,
    PopupKetQuaKskSharedComponent,
    PopupKetQuaKskKetLuanComponent
  ],
  imports: [
    CommonModule,
    KhamDoanKetLuanRoutingModule,
    CommonModule,
    KhamDoanThongTinHanhChinhModule,
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
    KhamDoanTiepNhanModule
  ],
  entryComponents: [
    KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent,
    KetQuaKhamSucKhoePopupComponent,
    SoKhamSucKhoeDinhKyPopupComponent,
    KetLuanKskDoanDvChuaKhamListPopupComponent,
    PopupKetQuaKskEditComponent,
    PopupKetQuaKskSharedComponent,
    PopupKetQuaKskKetLuanComponent
  ]
})
export class KhamDoanKetLuanModule { }
