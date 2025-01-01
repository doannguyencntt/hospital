import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoThuocSapHetHanDungListComponent } from './bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaoCaoThuocSapHetHanDungRoutingModule } from './bao-cao-thuoc-sap-het-han-dung-routing.module';



@NgModule({
  declarations: [BaoCaoThuocSapHetHanDungListComponent],
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
    BaoCaoThuocSapHetHanDungRoutingModule
  ]
})
export class BaoCaoThuocSapHetHanDungModule { }
