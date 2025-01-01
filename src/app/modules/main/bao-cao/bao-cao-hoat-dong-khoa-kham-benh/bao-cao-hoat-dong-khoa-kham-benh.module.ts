import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoHoatDongKhoaKhamBenhListComponent } from './bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { BaoCaoHoatDongKhoaKhamBenhRoutingModule } from './bao-cao-hoat-dong-khoa-kham-benh-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';



@NgModule({
  declarations: [BaoCaoHoatDongKhoaKhamBenhListComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    GridModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    BaoCaoHoatDongKhoaKhamBenhRoutingModule
  ]
})
export class BaoCaoHoatDongKhoaKhamBenhModule { }
