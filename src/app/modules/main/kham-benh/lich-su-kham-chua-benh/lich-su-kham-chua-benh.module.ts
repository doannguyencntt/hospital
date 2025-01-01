import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuKhamChuaBenhRoutingModule } from './lich-su-kham-chua-benh-routing.module';
import { LichSuKhamChuaBenhListComponent } from './lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component';
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
import { LichSuKhamChuaBenhNguoiBenhPopupComponent } from './lich-su-kham-chua-benh-nguoi-benh-popup/lich-su-kham-chua-benh-nguoi-benh-popup.component';


@NgModule({
  declarations: [LichSuKhamChuaBenhListComponent, LichSuKhamChuaBenhNguoiBenhPopupComponent],
  imports: [
    CommonModule,
    LichSuKhamChuaBenhRoutingModule,
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
    LichSuKhamChuaBenhNguoiBenhPopupComponent
  ]
})
export class LichSuKhamChuaBenhModule { }
