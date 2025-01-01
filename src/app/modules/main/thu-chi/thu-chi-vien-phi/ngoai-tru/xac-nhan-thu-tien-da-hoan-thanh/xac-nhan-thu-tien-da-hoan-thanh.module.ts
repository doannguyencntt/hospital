import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@visurel/iconify-angular';
import { XacNhanThuTienDaHoanThanhRoutingModule } from './xac-nhan-thu-tien-da-hoan-thanh-routing.module';
import { XacNhanThuTienHoanThanhListComponent } from './xac-nhan-thu-tien-hoan-thanh-list/xac-nhan-thu-tien-hoan-thanh-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { ChiTietThuTienDaHoanThanhComponent } from './chi-tiet-thu-tien-da-hoan-thanh/chi-tiet-thu-tien-da-hoan-thanh.component';
import { DanhSachLichSuDaThuComponent } from './danh-sach-lich-su-da-thu/danh-sach-lich-su-da-thu.component';
import { MiemGiamTheoDVComponent } from './ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component';

@NgModule({
  declarations: [XacNhanThuTienHoanThanhListComponent, ChiTietThuTienDaHoanThanhComponent , DanhSachLichSuDaThuComponent ,MiemGiamTheoDVComponent],
  imports: [
    CommonModule,
    XacNhanThuTienDaHoanThanhRoutingModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule, 
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    LayoutModule,    
    GridModule,
    MatCheckboxModule
  ],
  entryComponents: [
    MiemGiamTheoDVComponent
  ]
})
export class XacNhanThuTienDaHoanThanhModule { }
