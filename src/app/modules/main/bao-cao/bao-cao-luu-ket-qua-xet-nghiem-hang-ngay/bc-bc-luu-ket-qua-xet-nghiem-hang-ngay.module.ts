import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatDialogModule } from '@angular/material';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { BcLuuKetQuaXetNghiemHangNgayListComponent } from './bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component';
import { BcLuuKetQuaXetNghiemHangNgayService } from './bc-luu-ket-qua-xet-nghiem-hang-ngay.service';
import { BcBcLuuKetQuaXetNghiemHangNgayRoutingModule } from './bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-routing.module';
import { BcLuuKetQuaXetNghiemHangNgayPopupComponent } from './bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component';


@NgModule({
  declarations: [BcLuuKetQuaXetNghiemHangNgayListComponent, BcLuuKetQuaXetNghiemHangNgayPopupComponent],
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
    BcBcLuuKetQuaXetNghiemHangNgayRoutingModule,
  ],
  providers: [
    BcLuuKetQuaXetNghiemHangNgayService,
    { provide: BaseService, useClass: BcLuuKetQuaXetNghiemHangNgayService},
  ],
  entryComponents: [
    BcLuuKetQuaXetNghiemHangNgayPopupComponent
  ]
})
export class BcBcLuuKetQuaXetNghiemHangNgayModule { }
