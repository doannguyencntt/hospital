import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent } from './bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule } from './bao-cao-chi-tiet-mien-phi-tron-vien-routing.module';



@NgModule({
  declarations: [ BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    GridModule,
    MatCheckboxModule,
    BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule
  ]
})
export class BaoCaoTongHopDoanhThuThaiSanDaSinhModule { }
