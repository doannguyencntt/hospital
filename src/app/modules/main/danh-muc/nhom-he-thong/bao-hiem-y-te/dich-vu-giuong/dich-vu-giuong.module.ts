import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichVuGiuongRoutingModule } from './dich-vu-giuong-routing.module';
import { DichVuGiuongListComponent } from './dich-vu-giuong-list/dich-vu-giuong-list.component';

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
import { DichVuGiuongService } from './dich-vu-giuong.service';
import { BaseService } from 'src/app/core/services/base.service';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [DichVuGiuongListComponent],
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
    DichVuGiuongRoutingModule,
    GridModule
  ],
  providers: [
    DichVuGiuongService,
    { provide: BaseService,    useClass: DichVuGiuongService },
  ]
})
export class DichVuGiuongModule { }
