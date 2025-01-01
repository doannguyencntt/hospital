import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanGoiKhamSucKhoeRoutingModule } from './kham-doan-goi-kham-suc-khoe-routing.module';
import { KhamDoanGoiKhamSucKhoeListComponent } from './kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component';
import { KhamDoanGoiKhamSucKhoeDetailPopupComponent } from './kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component';
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
import { KhamDoanGoiKhamSucKhoeChonFilePopupComponent } from './kham-doan-goi-kham-suc-khoe-chon-file-popup/kham-doan-goi-kham-suc-khoe-chon-file-popup.component';
import { GoiKhamViewPopupComponent } from './kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component';
import { KhamDoanGoiKhamSucKhoeChungComponent } from './kham-doan-goi-kham-suc-chung/kham-doan-goi-kham-suc-chung.component';

@NgModule({
  declarations: [
    KhamDoanGoiKhamSucKhoeListComponent, 
    KhamDoanGoiKhamSucKhoeDetailPopupComponent, 
    KhamDoanGoiKhamSucKhoeChonFilePopupComponent,
    GoiKhamViewPopupComponent,
    KhamDoanGoiKhamSucKhoeChungComponent
  ],
  imports: [
    CommonModule,
    KhamDoanGoiKhamSucKhoeRoutingModule,
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
    MatCheckboxModule
  ],
  entryComponents: [
    KhamDoanGoiKhamSucKhoeDetailPopupComponent,
    KhamDoanGoiKhamSucKhoeChonFilePopupComponent,
    GoiKhamViewPopupComponent
  ]
})
export class KhamDoanGoiKhamSucKhoeModule { }
