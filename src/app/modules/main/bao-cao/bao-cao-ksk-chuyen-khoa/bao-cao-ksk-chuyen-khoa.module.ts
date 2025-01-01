import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoKskChuyenKhoaRoutingModule } from './bao-cao-ksk-chuyen-khoa-routing.module';
import { BaoCaoKskChuyenKhoaListComponent } from './bao-cao-ksk-chuyen-khoa-list/bao-cao-ksk-chuyen-khoa-list.component';


import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { DieuTriNoiTruModule } from '../../dieu-tri-noi-tru/dieu-tri-noi-tru.module';

@NgModule({
  declarations: [BaoCaoKskChuyenKhoaListComponent],
  imports: [
    CommonModule,
    BaoCaoKskChuyenKhoaRoutingModule,
    FormsModule,
    SharedModule,
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
    GridModule,
    DieuTriNoiTruModule
  ]
})
export class BaoCaoKskChuyenKhoaModule { }
