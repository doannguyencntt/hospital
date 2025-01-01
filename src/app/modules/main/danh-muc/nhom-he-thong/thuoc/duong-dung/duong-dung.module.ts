import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuongDungRoutingModule } from './duong-dung-routing.module';
import { DuongDungListComponent } from './duong-dung-list/duong-dung-list.component';
import { DuongDungCreateComponent } from './duong-dung-create/duong-dung-create.component';
import { DuongDungUpdateComponent } from './duong-dung-update/duong-dung-update.component';
import { DuongDungSharedComponent } from './duong-dung-shared/duong-dung-shared.component';
import { DuongDungService } from './duong-dung.service';

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
    DuongDungListComponent, 
    DuongDungCreateComponent, 
    DuongDungUpdateComponent, 
    DuongDungSharedComponent],
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
    DuongDungRoutingModule
  ],
  providers: [
    DuongDungService,
    { provide: BaseService,    useClass: DuongDungService },
  ]
})
export class DuongDungModule { }
