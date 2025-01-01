import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanTatCaPhongRoutingModule } from './kham-doan-tat-ca-phong-routing.module';
import { KhamDoanTatCaPhongDetailComponent } from './kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component';
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
import { ImageDrawingModule } from 'ngx-image-drawing';
import { KhamBenhModule } from '../kham-benh.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KhamDoanKetLuanModule } from '../../kham-doan/kham-doan-ket-luan/kham-doan-ket-luan.module';
import { KhamDoanKetLuanClsKskModule } from '../../kham-doan/kham-doan-ket-luan-cls-ksk/kham-doan-ket-luan-cls-ksk.module';
import { KhamDoanTatCaPhongDvChuaThucHienPopupComponent } from './kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup/kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component';


@NgModule({
  declarations: [KhamDoanTatCaPhongDetailComponent, KhamDoanTatCaPhongDvChuaThucHienPopupComponent],
  imports: [
    CommonModule,
    KhamDoanTatCaPhongRoutingModule,
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
    ImageDrawingModule,
    KhamBenhModule,
    MatCheckboxModule,
    // KhamDoanKetLuanModule,
    KhamDoanKetLuanClsKskModule
  ],
  entryComponents: [
    KhamDoanTatCaPhongDvChuaThucHienPopupComponent
  ]
})
export class KhamDoanTatCaPhongModule { }
