import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaoCaoTongHopDoanhThuTheoKhoaPhongService } from './bao-cao-tong-hop-doanh-thu-theo-khoa-phong.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule } from './bao-cao-tong-hop-doanh-thu-theo-khoa-phong-routing.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent }
  from './bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component';

@NgModule({
  declarations: [BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
    BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule,
    GridModule,
    PDFModule,
    ExcelModule
  ],
  providers: [
    BaoCaoTongHopDoanhThuTheoKhoaPhongService,
    { provide: BaseService, useClass: BaoCaoTongHopDoanhThuTheoKhoaPhongService },
  ]
})
export class BaoCaoTongHopDoanhThuTheoKhoaPhongModule { }
