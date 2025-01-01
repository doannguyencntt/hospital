import { SuaDuocPhamTonKhoPopupComponent } from './sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuocPhamRoutingModule } from './duoc-pham-routing.module';
import { DuocPhamTonKhoListComponent } from './duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component';
import { DuocPhamService } from './duoc-pham.service';
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
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DuocPhamTonKhoPopupComponent } from './duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component';
import { DuocPhamTonKhoPopupTonKhoComponent } from './duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component';
import { DuocPhamNhapXuatTonKhoPopupComponent } from './duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component';
import { DuocPhamNhaXuatTonKhoXemChiTietComponent } from './duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
@NgModule({
  declarations: [DuocPhamTonKhoListComponent, DuocPhamTonKhoPopupComponent, DuocPhamTonKhoPopupTonKhoComponent, 
    DuocPhamNhapXuatTonKhoPopupComponent, DuocPhamNhaXuatTonKhoXemChiTietComponent,
  SuaDuocPhamTonKhoPopupComponent],
  imports: [
    ExcelExportModule,
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
    MatTabsModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    DuocPhamRoutingModule,GridModule,
    TooltipModule
  ],entryComponents: [
    DuocPhamTonKhoPopupComponent,
    DuocPhamTonKhoPopupTonKhoComponent,
    DuocPhamNhapXuatTonKhoPopupComponent,
    DuocPhamNhaXuatTonKhoXemChiTietComponent,
    SuaDuocPhamTonKhoPopupComponent
],
  providers: [
    DuocPhamService,
    { provide: BaseService, useClass: DuocPhamService },
  ]
})
export class DuocPhamModule { }
