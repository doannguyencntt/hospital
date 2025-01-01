import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuKhuyenMaiRoutingModule } from './dich-vu-khuyen-mai-routing.module';
import { DichVuKhuyenMaiPopupComponent } from './dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';


import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LayoutModule } from 'src/@vex/layout/layout.module';
@NgModule({
  declarations: [DichVuKhuyenMaiPopupComponent],
  imports: [
    CommonModule,
    DichVuKhuyenMaiRoutingModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
  ],
  entryComponents: [
    DichVuKhuyenMaiPopupComponent
  ]
})
export class DichVuKhuyenMaiModule { }
