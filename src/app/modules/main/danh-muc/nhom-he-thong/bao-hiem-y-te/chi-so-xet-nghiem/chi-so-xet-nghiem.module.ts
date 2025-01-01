import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';


import { ChiSoXetNghiemRoutingModule } from './chi-so-xet-nghiem-routing.module';
import { ChiSoXetNghiemListComponent } from './chi-so-xet-nghiem-list/chi-so-xet-nghiem-list.component';
import { ChiSoXetNghiemService } from './chi-so-xet-nghiem.service';
import { MatIconModule, MatButtonToggleModule, MatTooltipModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { ChiSoXetNghiemShareComponent } from './chi-so-xet-nghiem-share/chi-so-xet-nghiem-share.component';
import { ChiSoXetNghiemCreateComponent } from './chi-so-xet-nghiem-create/chi-so-xet-nghiem-create.component';
import { ChiSoXetNghiemUpdateComponent } from './chi-so-xet-nghiem-update/chi-so-xet-nghiem-update.component';


@NgModule({
  declarations: [ChiSoXetNghiemListComponent, ChiSoXetNghiemShareComponent, ChiSoXetNghiemCreateComponent, ChiSoXetNghiemUpdateComponent],
  imports: [
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
    ChiSoXetNghiemRoutingModule
  ],
  providers: [
    ChiSoXetNghiemService,
    { provide: BaseService, useClass: ChiSoXetNghiemService },
  ]
})
export class ChiSoXetNghiemModule { }
