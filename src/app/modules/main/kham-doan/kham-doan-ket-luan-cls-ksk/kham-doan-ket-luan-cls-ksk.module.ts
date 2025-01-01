import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { KhamDoanKetLuanClsKskListComponent } from './kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component';
import { KhamDoanKetLuanClsKskRoutingModule } from './kham-doan-ket-luan-cls-ksk-routing.module';
import { KhamDoanKetLuanClsKskDoanDetailComponent } from './kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component';
import { KetQuaMauPopupComponent } from './ket-qua-mau-popup/ket-qua-mau-popup.component';
import { KhamDoanThongTinHanhChinhModule } from '../kham-doan-thong-tin-hanh-chinh/kham-doan-thong-tin-hanh-chinh.module';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';
import { KhamDoanKetLuanModule } from '../kham-doan-ket-luan/kham-doan-ket-luan.module';
import { KhamDoanChuaKetLuanKskListComponent } from './kham-doan-chua-ket-luan-ksk-list/kham-doan-chua-ket-luan-ksk-list.component';
import { KhamDoanDaKetLuanKskListComponent } from './kham-doan-da-ket-luan-ksk-list/kham-doan-da-ket-luan-ksk-list.component';


@NgModule({
  declarations: [KhamDoanKetLuanClsKskListComponent, KhamDoanKetLuanClsKskDoanDetailComponent, KetQuaMauPopupComponent, KhamDoanChuaKetLuanKskListComponent, KhamDoanDaKetLuanKskListComponent],
  imports: [
    CommonModule,
    KhamDoanKetLuanClsKskRoutingModule,
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
    HttpClientModule,
    KhamDoanThongTinHanhChinhModule,
    KhamBenhModule,
    KhamDoanKetLuanModule
  ], entryComponents: [
    KetQuaMauPopupComponent
  ]
})
export class KhamDoanKetLuanClsKskModule { }
