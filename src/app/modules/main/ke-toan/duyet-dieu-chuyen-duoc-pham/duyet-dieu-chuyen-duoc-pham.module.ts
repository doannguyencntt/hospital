import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetDieuChuyenDuocPhamRoutingModule } from './duyet-dieu-chuyen-duoc-pham-routing.module';
import { DuyetDieuChuyenDuocPhamListComponent } from './duyet-dieu-chuyen-duoc-pham-list/duyet-dieu-chuyen-duoc-pham-list.component';
import { DuyetDieuChuyenDuocPhamChiTietComponent } from './duyet-dieu-chuyen-duoc-pham-chi-tiet/duyet-dieu-chuyen-duoc-pham-chi-tiet.component';

import { LayoutModule } from '@progress/kendo-angular-layout';
import {
  MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule
  , MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule
  , MatRadioModule,
  MatOptionModule
} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DuyetYeuCauLinhThuocModule } from '../../nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc/duyet-yeu-cau-linh-thuoc.module';
import { DieuChuyenKhoNoiBoDuocPhamModule } from '../../nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.module';

@NgModule({
  declarations: [DuyetDieuChuyenDuocPhamListComponent, DuyetDieuChuyenDuocPhamChiTietComponent],
  imports: [
    CommonModule,
    DuyetDieuChuyenDuocPhamRoutingModule,
    InputsModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    GridModule,

    DropDownButtonModule,
    DuyetYeuCauLinhThuocModule,
    DieuChuyenKhoNoiBoDuocPhamModule
  ],
  entryComponents: [
  ],
})
export class DuyetDieuChuyenDuocPhamModule { }
