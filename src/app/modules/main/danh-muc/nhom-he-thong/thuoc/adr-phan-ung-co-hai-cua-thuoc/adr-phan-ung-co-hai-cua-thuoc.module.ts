import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdrPhanUngCoHaiCuaThuocRoutingModule } from './adr-phan-ung-co-hai-cua-thuoc-routing.module';
import { AdrPhanUngCoHaiCuaThuocListComponent } from './adr-phan-ung-co-hai-cua-thuoc-list/adr-phan-ung-co-hai-cua-thuoc-list.component';
import { AdrPhanUngCoHaiCuaThuocCreateComponent } from './adr-phan-ung-co-hai-cua-thuoc-create/adr-phan-ung-co-hai-cua-thuoc-create.component';
import { AdrPhanUngCoHaiCuaThuocUpdateComponent } from './adr-phan-ung-co-hai-cua-thuoc-update/adr-phan-ung-co-hai-cua-thuoc-update.component';
import { AdrPhanUngCoHaiCuaThuocSharedComponent } from './adr-phan-ung-co-hai-cua-thuoc-shared/adr-phan-ung-co-hai-cua-thuoc-shared.component';

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
import { AdrPhanUngCoHaiCuaThuocService } from './adr-phan-ung-co-hai-cua-thuoc.service';
@NgModule({
  declarations: [
    AdrPhanUngCoHaiCuaThuocListComponent,
    AdrPhanUngCoHaiCuaThuocCreateComponent,
    AdrPhanUngCoHaiCuaThuocUpdateComponent,
    AdrPhanUngCoHaiCuaThuocSharedComponent],
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
    AdrPhanUngCoHaiCuaThuocRoutingModule
  ],
  providers: [
    AdrPhanUngCoHaiCuaThuocService,
    { provide: BaseService, useClass: AdrPhanUngCoHaiCuaThuocService },
  ]
})
export class AdrPhanUngCoHaiCuaThuocModule { }
