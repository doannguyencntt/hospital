import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuyetVatTuNhapKhoRoutingModule } from './duyet-nhap-kho-routing.module';
import { DuyetVatTuNhapKhoListComponent } from './duyet-nhap-kho-list/duyet-nhap-kho-list.component';
import { DuyetVatTuNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet/duyet-nhap-kho-chi-tiet.component';
import { TuChoiDuyetVatTuComponent } from './tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component';
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
import { NhapKhoModule } from '../../nhap-xuat/vat-tu/nhap-kho/nhap-kho.module';

@NgModule({
  declarations: [DuyetVatTuNhapKhoListComponent, DuyetVatTuNhapKhoChiTietComponent, TuChoiDuyetVatTuComponent],
  imports: [
    CommonModule,
    DuyetVatTuNhapKhoRoutingModule,
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
    NhapKhoModule
  ],
  entryComponents: [
    TuChoiDuyetVatTuComponent
  ],
})
export class DuyetVatTuNhapKhoModule { }
