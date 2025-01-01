import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoBangKeXuatThuocTheoBenhNhanListComponent } from './bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list/bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaoCaoBangKeXuatThuocTheoBenhNhanRoutingModule } from './bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-routing.module';



@NgModule({
  declarations: [BaoCaoBangKeXuatThuocTheoBenhNhanListComponent],
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
    BaoCaoBangKeXuatThuocTheoBenhNhanRoutingModule
  ]
})
export class BaoCaoBangKeXuatThuocTheoBenhNhanModule { }
