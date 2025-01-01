import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
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

import { DanTocService } from './dan-toc.service';
import { DanTocRoutingModule } from './dan-toc-routing.module';
import { DanTocListComponent } from './dan-toc-list/dan-toc-list.component';
import { DanTocSharedComponent } from './dan-toc-shared/dan-toc-shared.component';
import { DanTocCreateComponent } from './dan-toc-create/dan-toc-create.component';
import { DanTocUpdateComponent } from './dan-toc-update/dan-toc-update.component';

@NgModule({
  declarations: [DanTocListComponent, DanTocSharedComponent, DanTocCreateComponent, DanTocUpdateComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    DanTocRoutingModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
  ],providers: [
    DanTocService,
    { provide: BaseService,    useClass: DanTocService },
  ]
})
export class DanTocModule { }
