import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import { ViTriKhoDuocPhamService } from './vi-tri-kho-duoc-pham.service';
import { ViTriKhoDuocPhamRoutingModule } from './vi-tri-kho-duoc-pham-routing.module';

import { ViTriKhoDuocPhamListComponent } from './vi-tri-kho-duoc-pham-list/vi-tri-kho-duoc-pham-list.component';
import { ViTriKhoDuocPhamSharedComponent } from './vi-tri-kho-duoc-pham-shared/vi-tri-kho-duoc-pham-shared.component';
import { ViTriKhoDuocPhamCreateComponent } from './vi-tri-kho-duoc-pham-create/vi-tri-kho-duoc-pham-create.component';
import { ViTriKhoDuocPhamUpdateComponent } from './vi-tri-kho-duoc-pham-update/vi-tri-kho-duoc-pham-update.component';



@NgModule({
  declarations: [ViTriKhoDuocPhamListComponent, ViTriKhoDuocPhamSharedComponent, ViTriKhoDuocPhamCreateComponent, ViTriKhoDuocPhamUpdateComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    ViTriKhoDuocPhamRoutingModule
  ],
  providers: [
    ViTriKhoDuocPhamService,
    { provide: BaseService, useClass: ViTriKhoDuocPhamService },
]
})
export class ViTriKhoDuocPhamModule { }
