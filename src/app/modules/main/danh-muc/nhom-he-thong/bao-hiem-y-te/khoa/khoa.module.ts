import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhoaRoutingModule } from './khoa-routing.module';
import { KhoaListComponent } from './khoa-list/khoa-list.component';
import { KhoaService } from './khoa.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    KhoaListComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    KhoaRoutingModule
  ],
  providers: [
    KhoaService,
    { provide: BaseService, useClass: KhoaService },
  ]
})
export class KhoaModule { }
