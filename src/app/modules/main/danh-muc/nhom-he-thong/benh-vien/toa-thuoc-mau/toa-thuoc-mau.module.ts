import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToaThuocMauRoutingModule } from './toa-thuoc-mau-routing.module';
import { ToaThuocMauListComponent } from './toa-thuoc-mau-list/toa-thuoc-mau-list.component';
import { ToaThuocMauCreateComponent } from './toa-thuoc-mau-create/toa-thuoc-mau-create.component';
import { ToaThuocMauUpdateComponent } from './toa-thuoc-mau-update/toa-thuoc-mau-update.component';
import { ToaThuocMauSharedComponent } from './toa-thuoc-mau-shared/toa-thuoc-mau-shared.component';

import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ToaThuocMauService } from './toa-thuoc-mau.service';

@NgModule({
  declarations: [ToaThuocMauListComponent, ToaThuocMauCreateComponent, ToaThuocMauUpdateComponent, ToaThuocMauSharedComponent],
  imports: [
    CommonModule,
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
    ReactiveFormsModule,
    ToaThuocMauRoutingModule
  ],
  providers: [
    ToaThuocMauService,
    { provide: BaseService,    useClass: ToaThuocMauService },
  ]
})
export class ToaThuocMauModule { }
