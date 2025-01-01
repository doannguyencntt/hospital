import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoKeToanNhapXuatTonChiTietListComponent } from './bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaoCaoKeToanNhapXuatTonChiTietRoutingModule } from './bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-routing.module';



@NgModule({
  declarations: [BaoCaoKeToanNhapXuatTonChiTietListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
    BaoCaoKeToanNhapXuatTonChiTietRoutingModule
  ]
})
export class BaoCaoKeToanNhapXuatTonChiTietModule { }
