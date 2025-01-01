import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {
  MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule
  , MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule
  , MatRadioModule,
  MatOptionModule
} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';


import { MarketingXuatKhoRoutingModule } from './marketing-xuat-kho-routing.module';
import { MarketingXuatKhoListComponent } from './marketing-xuat-kho-list/marketing-xuat-kho-list.component';
import { MarketingXuatKhoChiTietComponent } from './marketing-xuat-kho-chi-tiet/marketing-xuat-kho-chi-tiet.component';


@NgModule({
  declarations: [MarketingXuatKhoListComponent, MarketingXuatKhoChiTietComponent],
  imports: [
    CommonModule,
    MarketingXuatKhoRoutingModule,
    InputsModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    GridModule,

  ]
  , entryComponents: [

  ]
})
export class MarketingXuatKhoModule { }
