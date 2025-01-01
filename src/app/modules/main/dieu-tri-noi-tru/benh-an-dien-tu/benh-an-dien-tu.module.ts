import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenhAnDienTuRoutingModule } from './benh-an-dien-tu-routing.module';
import { BenhAnDienTuListComponent } from './benh-an-dien-tu-list/benh-an-dien-tu-list.component';
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
import { BenhAnDienTuBenhAnPopupComponent } from './benh-an-dien-tu-benh-an-popup/benh-an-dien-tu-benh-an-popup.component';
import { DieuTriNoiTruModule } from '../dieu-tri-noi-tru.module';


@NgModule({
  declarations: [BenhAnDienTuListComponent, BenhAnDienTuBenhAnPopupComponent],
  imports: [
    CommonModule,
    BenhAnDienTuRoutingModule,
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
    DieuTriNoiTruModule
  ],
  entryComponents: [
    BenhAnDienTuBenhAnPopupComponent
  ]
})
export class BenhAnDienTuModule { }
