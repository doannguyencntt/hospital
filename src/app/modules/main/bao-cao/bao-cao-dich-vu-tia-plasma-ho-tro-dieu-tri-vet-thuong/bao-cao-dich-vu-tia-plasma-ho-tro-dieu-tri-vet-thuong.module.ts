import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
// import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.component';
// import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongRoutingModule } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-routing.module';
import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.service';

@NgModule({
  // declarations: [BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent],
  imports: [
    CommonModule,
    // BaoCaoDichVuPLASMAHoTroDieuTruVetThuongRoutingModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    GridModule,
    MatCheckboxModule
  ],
  providers: [
    BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService,
    { provide: BaseService, useClass: BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService },
  ]
})

export class BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule { }
