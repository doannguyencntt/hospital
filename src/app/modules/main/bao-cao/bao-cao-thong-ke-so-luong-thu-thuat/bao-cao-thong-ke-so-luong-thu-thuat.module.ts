import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoThongKeSoLuongThuThuatListComponent } from './bao-cao-thong-ke-so-luong-thu-thuat-list/bao-cao-thong-ke-so-luong-thu-thuat-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { BaoCaoThongKeSoLuongThuThuatRoutingModule } from './bao-cao-thong-ke-so-luong-thu-thuat-routing.module';



@NgModule({
  declarations: [BaoCaoThongKeSoLuongThuThuatListComponent],
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
    BaoCaoThongKeSoLuongThuThuatRoutingModule
  ]
})
export class BaoCaoThongKeSoLuongThuThuatModule { }
