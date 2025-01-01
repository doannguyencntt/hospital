import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoDuocChiTietXuatNoiBoListComponent } from './bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { BaoCaoDuocChiTietXuatNoiBoRoutingModule } from './bao-cao-duoc-chi-tiet-xuat-noi-bo-routing.module';



@NgModule({
  declarations: [BaoCaoDuocChiTietXuatNoiBoListComponent],
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
    MatCheckboxModule,
    BaoCaoDuocChiTietXuatNoiBoRoutingModule
  ]
})
export class BaoCaoDuocChiTietXuatNoiBoModule { }
