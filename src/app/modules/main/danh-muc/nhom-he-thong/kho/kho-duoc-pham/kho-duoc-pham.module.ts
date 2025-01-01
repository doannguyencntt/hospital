import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
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

import { KhoDuocPhamService } from './kho-duoc-pham.service';
import { KhoDuocPhamRoutingModule } from './kho-duoc-pham-routing.module';
import { KhoDuocPhamListComponent } from './kho-duoc-pham-list/kho-duoc-pham-list.component';
import { KhoDuocPhamShareComponent } from './kho-duoc-pham-share/kho-duoc-pham-share.component';
import { KhoDuocPhamCreateComponent } from './kho-duoc-pham-create/kho-duoc-pham-create.component';
import { KhoDuocPhamUpdateComponent } from './kho-duoc-pham-update/kho-duoc-pham-update.component';


@NgModule({
  declarations: [
    KhoDuocPhamListComponent, 
    KhoDuocPhamShareComponent, 
    KhoDuocPhamCreateComponent, 
    KhoDuocPhamUpdateComponent
  ],
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
    KhoDuocPhamRoutingModule,
],
providers: [
  KhoDuocPhamService,
    { provide: BaseService, useClass: KhoDuocPhamService },
]
})
export class KhoDuocPhamModule { }
