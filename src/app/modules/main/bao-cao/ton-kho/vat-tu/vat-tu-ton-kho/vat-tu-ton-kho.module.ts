import { SuaVatTuTonKhoPopupComponent } from './sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { VatTuTonKhoService } from './vat-tu-ton-kho.service';
import { VatTuTonKhoListComponent } from './vat-tu-ton-kho-list/vat-tu-ton-kho-list.component';
import { VatTuTonKhoRoutingModule } from './vat-tu-ton-kho-routing.module';
import { VatTuTonKhoPopupComponent } from './vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component';
import { VatTuTonKhoChiTietComponent } from './vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

@NgModule({
  declarations: [VatTuTonKhoListComponent, VatTuTonKhoPopupComponent, VatTuTonKhoChiTietComponent,SuaVatTuTonKhoPopupComponent],
  imports: [
    ExcelExportModule,
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTabsModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    GridModule,
    VatTuTonKhoRoutingModule,
    TooltipModule
  ],
  providers: [
    VatTuTonKhoService,
    { provide: BaseService, useClass: VatTuTonKhoService }
  ],
  entryComponents: [
    VatTuTonKhoPopupComponent,
    VatTuTonKhoChiTietComponent,
    SuaVatTuTonKhoPopupComponent
  ]
})
export class VatTuTonKhoModule { }
