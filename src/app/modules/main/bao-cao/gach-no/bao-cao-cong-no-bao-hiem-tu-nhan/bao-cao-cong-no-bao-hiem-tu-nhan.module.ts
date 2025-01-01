import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoCongNoBaoHiemTuNhanRoutingModule } from './bao-cao-cong-no-bao-hiem-tu-nhan-routing.module';
import { BaoCaoCongNoBaoHiemTuNhanListComponent } from './bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@angular/cdk/layout';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [BaoCaoCongNoBaoHiemTuNhanListComponent],
  imports: [
    CommonModule,
    BaoCaoCongNoBaoHiemTuNhanRoutingModule,
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
    MatDialogModule,
    MatRadioModule,
    LayoutModule,
    MatCheckboxModule,
    GridModule
  ]
})
export class BaoCaoCongNoBaoHiemTuNhanModule { }
