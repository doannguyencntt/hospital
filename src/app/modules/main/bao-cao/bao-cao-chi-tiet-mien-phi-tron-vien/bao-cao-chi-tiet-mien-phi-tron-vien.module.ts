import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoChiTietMienPhiTronVienListComponent } from './bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaoCaoChiTietMienPhiTronVienRoutingModule } from './bao-cao-chi-tiet-mien-phi-tron-vien-routing.module';



@NgModule({
  declarations: [BaoCaoChiTietMienPhiTronVienListComponent],
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
    BaoCaoChiTietMienPhiTronVienRoutingModule,
    MatCheckboxModule
  ]
})
export class BaoCaoChiTietMienPhiTronVienModule { }
