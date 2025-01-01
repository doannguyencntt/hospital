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
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BaoCaoPhieuNhapHoaChatXetNghiemListComponent } from './phieu-nhap-hoa-chat-xet-nghiem-list/phieu-nhap-hoa-chat-xet-nghiem-list.component';
import { BaoCaoPhieuNhapHoaChatXetNghiemRoutingModule } from './phieu-nhap-hoa-chat-xet-nghiem-routing.module';
import { BaoCaoPhieuNhapHoaChatXetNghiemService } from './phieu-nhap-hoa-chat-xet-nghiem.service';
import { PhieuNhapHoaChatXetNghiemChiTietPopupComponent } from './phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup.component';

@NgModule({
  declarations: [BaoCaoPhieuNhapHoaChatXetNghiemListComponent,PhieuNhapHoaChatXetNghiemChiTietPopupComponent],
  imports: [
    CommonModule,
    BaoCaoPhieuNhapHoaChatXetNghiemRoutingModule,
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
    MatCheckboxModule
  ],
  providers: [
    BaoCaoPhieuNhapHoaChatXetNghiemService,
    { provide: BaseService, useClass: BaoCaoPhieuNhapHoaChatXetNghiemService },
  ],
  entryComponents: [PhieuNhapHoaChatXetNghiemChiTietPopupComponent]
})
export class BaoCaoPhieuNhapTonKhoXetNghiemModule { }
