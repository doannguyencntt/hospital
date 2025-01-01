import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatTuYTeTaiBenhVienRoutingModule } from './vat-tu-y-te-tai-benh-vien-routing.module';
import { VatTuYTeTaiBenhVienListComponent } from './vat-tu-y-te-tai-benh-vien-list/vat-tu-y-te-tai-benh-vien-list.component';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { VatTuYTeTaiBenhVienService } from './vat-tu-y-te-tai-benh-vien.service';
import { VatTuYTeTaiBenhVienSharedComponent } from './vat-tu-y-te-tai-benh-vien-shared/vat-tu-y-te-tai-benh-vien-shared.component';
import { VatTuYTeTaiBenhVienUpdateComponent } from './vat-tu-y-te-tai-benh-vien-update/vat-tu-y-te-tai-benh-vien-update.component';
import { VatTuYTeTaiBenhVienCreateComponent } from './vat-tu-y-te-tai-benh-vien-create/vat-tu-y-te-tai-benh-vien-create.component';
@NgModule({
  declarations: [VatTuYTeTaiBenhVienListComponent, VatTuYTeTaiBenhVienSharedComponent, VatTuYTeTaiBenhVienUpdateComponent, VatTuYTeTaiBenhVienCreateComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    VatTuYTeTaiBenhVienRoutingModule,GridModule
  ],
  providers: [
    VatTuYTeTaiBenhVienService,
    { provide: BaseService, useClass: VatTuYTeTaiBenhVienService },
  ]
})
export class VatTuYTeTaiBenhVienModule { }
