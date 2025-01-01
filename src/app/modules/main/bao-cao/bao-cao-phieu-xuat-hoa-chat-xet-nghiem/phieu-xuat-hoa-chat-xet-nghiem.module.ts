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
import { BaoCaoPhieuXuatHoaChatXetNghiemListComponent } from './phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component';
import { PhieuXuatHoaChatXetNghiemChiTietPopupComponent } from './phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-xuat-hoa-chat-xet-nghiem-chi-tiet-popup.component';
import { BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule } from './phieu-xuat-hoa-chat-xet-nghiem-routing.module';
import { BaoCaoPhieuXuatHoaChatXetNghiemService } from './phieu-xuat-hoa-chat-xet-nghiem.service';

@NgModule({
  declarations: [BaoCaoPhieuXuatHoaChatXetNghiemListComponent, PhieuXuatHoaChatXetNghiemChiTietPopupComponent],
  imports: [
    CommonModule,
    BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule,
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
    BaoCaoPhieuXuatHoaChatXetNghiemService,
    { provide: BaseService, useClass: BaoCaoPhieuXuatHoaChatXetNghiemService },
  ],
  entryComponents: [PhieuXuatHoaChatXetNghiemChiTietPopupComponent]
})
export class BaoCaoPhieuXuatTonKhoXetNghiemModule { }
