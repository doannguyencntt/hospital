import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetNhapKhoRoutingModule } from './duyet-nhap-kho-routing.module';
import { DuyetNhapKhoListComponent } from './duyet-nhap-kho-list/duyet-nhap-kho-list.component';
import { DuyetNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet/duyet-nhap-kho-chi-tiet.component';
import { TuChoiDuyetDuocPhamComponent } from './tu-choi-duyet-duoc-pham/tu-choi-duyet-duoc-pham.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule,MatOptionModule, MatSelectModule, MatTabsModule,} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import {  MatIconModule,  MatMenuModule,  MatButtonToggleModule,  MatTooltipModule,  MatButtonModule,  MatDialogModule,} from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { NhapKhoModule } from '../../nhap-xuat/duoc-pham/nhap-kho/nhap-kho.module';

@NgModule({
  declarations: [DuyetNhapKhoListComponent, DuyetNhapKhoChiTietComponent, TuChoiDuyetDuocPhamComponent],
  imports: [
    CommonModule,
    DuyetNhapKhoRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
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
    NhapKhoModule,
  ],
  entryComponents: [
    TuChoiDuyetDuocPhamComponent
  ],
})
export class DuyetNhapKhoModule { }
