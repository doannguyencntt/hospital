import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoChiTietDoanhThuTheoBacSiListComponent } from './bao-cao-chi-tiet-doanh-thu-theo-bac-si-list/bao-cao-chi-tiet-doanh-thu-theo-bac-si-list.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
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
import { BaoCaoChiTietDoanhThuTheoBacSiRoutingModule } from './bao-cao-chi-tiet-doanh-thu-theo-bac-si-routing.module';
import { BaseService } from 'src/app/core/services/base.service';
import { BaoCaoChiTietDoanhThuTheoBacSiService } from './bao-cao-chi-tiet-doanh-thu-theo-bac-si.service';

@NgModule({
  declarations: [BaoCaoChiTietDoanhThuTheoBacSiListComponent],
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
    BaoCaoChiTietDoanhThuTheoBacSiRoutingModule,
    GridModule,
  ],
  providers: [
    BaoCaoChiTietDoanhThuTheoBacSiService,
    { provide: BaseService, useClass: BaoCaoChiTietDoanhThuTheoBacSiService },
  ]
})
export class BaoCaoChiTietDoanhThuTheoBacSiModule { }
