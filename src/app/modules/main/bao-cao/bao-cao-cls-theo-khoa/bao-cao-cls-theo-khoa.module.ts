import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoClsTheoKhoaRoutingModule } from './bao-cao-cls-theo-khoa-routing.module';
import { BaoCaoClsTheoKhoaListComponent } from './bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component';
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
import { MatTabsModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BaoCaoClsTheoKhoaService } from './bao-cao-cls-theo-khoa.service';


@NgModule({
  declarations: [BaoCaoClsTheoKhoaListComponent],
  imports: [
    CommonModule,
    BaoCaoClsTheoKhoaRoutingModule,
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
    MatCheckboxModule
  ],
  providers: [
    BaoCaoClsTheoKhoaService,
    { provide: BaseService, useClass: BaoCaoClsTheoKhoaService },
  ]
})
export class BaoCaoClsTheoKhoaModule { }
