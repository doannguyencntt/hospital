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

import { MarketingNhapKhoRoutingModule } from './marketing-nhap-kho-routing.module';
import { MarketingNhapKhoListComponent } from './marketing-nhap-kho-list/marketing-nhap-kho-list.component';
import { MarketingNhapKhoChiTietComponent } from './marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component';
import { MarketingNhapKhoSharedComponent } from './marketing-nhap-kho-shared/marketing-nhap-kho-shared.component';
import { MarketingNhapKhoUpdateComponent } from './marketing-nhap-kho-update/marketing-nhap-kho-update.component';
import { MarketingNhapKhoCreateComponent } from './marketing-nhap-kho-create/marketing-nhap-kho-create.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarketingNhapKhoService } from './marketing-nhap-kho.service';
import { BaseService } from 'src/app/core/services/base.service';
@NgModule({
  declarations: [MarketingNhapKhoListComponent,MarketingNhapKhoChiTietComponent, MarketingNhapKhoSharedComponent, MarketingNhapKhoUpdateComponent, MarketingNhapKhoCreateComponent],
  imports: [
    CommonModule,
    MarketingNhapKhoRoutingModule,
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

  ], providers: [
    MarketingNhapKhoService,
    { provide: BaseService, useClass: MarketingNhapKhoService },
  ],
})
export class MarketingNhapKhoModule { }
