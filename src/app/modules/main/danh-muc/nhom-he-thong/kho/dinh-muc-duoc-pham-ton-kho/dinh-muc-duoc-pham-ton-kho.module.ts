import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinhMucDuocPhamTonKhoRoutingModule } from './dinh-muc-duoc-pham-ton-kho-routing.module';
import { DinhMucDuocPhamTonKhoListComponent } from './dinh-muc-duoc-pham-ton-kho-list/dinh-muc-duoc-pham-ton-kho-list.component';

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
import { DinhMucDuocPhamTonKhoService } from './dinh-muc-duoc-pham-ton-kho.service';
import { DinhMucDuocPhamTonKhoCreateComponent } from './dinh-muc-duoc-pham-ton-kho-create/dinh-muc-duoc-pham-ton-kho-create.component';
import { DinhMucDuocPhamTonKhoUpdateComponent } from './dinh-muc-duoc-pham-ton-kho-update/dinh-muc-duoc-pham-ton-kho-update.component';
import { DinhMucDuocPhamTonKhoSharedComponent } from './dinh-muc-duoc-pham-ton-kho-shared/dinh-muc-duoc-pham-ton-kho-shared.component';
@NgModule({
  declarations: [DinhMucDuocPhamTonKhoListComponent, DinhMucDuocPhamTonKhoCreateComponent, DinhMucDuocPhamTonKhoUpdateComponent, DinhMucDuocPhamTonKhoSharedComponent],
  imports: [
    DinhMucDuocPhamTonKhoRoutingModule,
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
  ],
  providers: [
    DinhMucDuocPhamTonKhoService,
    { provide: BaseService,    useClass: DinhMucDuocPhamTonKhoService },
  ]
})
export class DinhMucDuocPhamTonKhoModule { }
