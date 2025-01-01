import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoClsSoThongKeRoutingModule } from './bao-cao-cls-so-thong-ke-routing.module';
import { BaoCaoClsSoThongKeListComponent } from './bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component';

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
import { BaoCaoClsSoThongKeService } from './bao-cao-cls-so-thong-ke.service';

@NgModule({
  declarations: [BaoCaoClsSoThongKeListComponent],
  imports: [
    CommonModule,
    BaoCaoClsSoThongKeRoutingModule,
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
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    GridModule,
  ],
  providers: [
    BaoCaoClsSoThongKeService,
    { provide: BaseService, useClass: BaoCaoClsSoThongKeService },
  ]
})
export class BaoCaoClsSoThongKeModule { }
