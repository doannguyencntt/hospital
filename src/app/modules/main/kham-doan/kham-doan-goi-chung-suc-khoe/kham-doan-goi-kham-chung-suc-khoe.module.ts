import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanGoiChungKhamSucKhoeRoutingModule } from './kham-doan-goi-kham-chung-suc-khoe-routing.module';
import { KhamDoanGoiKhamChungSucKhoeListComponent } from './kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component';
import { KhamDoanGoiKhamChungSucKhoeDetailPopupComponent } from './kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component';
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
import { KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent } from './kham-doan-goi-kham-chung-suc-khoe-chon-file-popup/kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component';

import { GoiKhamViewPopupComponent } from '../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-popup/kham-doan-goi-kham-popup.component';
// import { GoiKhamViewPopupComponent } from './kham-doan-goi-kham-popup/kham-doan-goi-kham-chung-popup.component';

@NgModule({
  declarations: [
    KhamDoanGoiKhamChungSucKhoeListComponent, 
    KhamDoanGoiKhamChungSucKhoeDetailPopupComponent, 
    KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent    
  ],
  imports: [
    CommonModule,
    KhamDoanGoiChungKhamSucKhoeRoutingModule,
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
    KhamDoanGoiKhamChungSucKhoeDetailPopupComponent,
    KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent
  ]
})
export class KhamDoanGoiKhamChungSucKhoeModule { }
