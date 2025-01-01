import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhamDoanLsTiepNhanKhamSucKhoeListComponent } from './kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component';
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
import { KhamDoanLsTiepNhanKhamSucKhoeRoutingModule } from './kham-doan-ls-tiep-nhan-kham-suc-khoe-routing.module';
import { KhamDoanLsTiepNhanDetailPopupComponent } from './kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component';
import { KhamDoanLsTiepNhanInHoSoPopupComponent } from './kham-doan-ls-tiep-nhan-in-ho-so-popup/kham-doan-ls-tiep-nhan-in-ho-so-popup.component';
import { KhamDoanLsTiepNhanNhanVienDetailPopupComponent } from './kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component';
import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from '../kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component';
import { KhamDoanTiepNhanModule } from '../kham-doan-tiep-nhan/kham-doan-tiep-nhan.module';


@NgModule({
  declarations: [KhamDoanLsTiepNhanKhamSucKhoeListComponent, KhamDoanLsTiepNhanDetailPopupComponent, KhamDoanLsTiepNhanInHoSoPopupComponent, KhamDoanLsTiepNhanNhanVienDetailPopupComponent],
  imports: [
    CommonModule,
    KhamDoanLsTiepNhanKhamSucKhoeRoutingModule,
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
    KhamDoanLsTiepNhanDetailPopupComponent, 
    KhamDoanLsTiepNhanNhanVienDetailPopupComponent, 
    KhamDoanLsTiepNhanInHoSoPopupComponent,
    KhamDoanTiepNhanNhanVienDetailPopupComponent
  ]
})
export class KhamDoanLsTiepNhanKhamSucKhoeModule { }
