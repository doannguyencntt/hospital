import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetYeuCauLinhVatTuRoutingModule } from './duyet-yeu-cau-linh-vat-tu-routing.module';
import { DuyetYeuCauLinhVatTuBuComponent } from './duyet-yeu-cau-linh-vat-tu-bu/duyet-yeu-cau-linh-vat-tu-bu.component';
import { DuyetYeuCauLinhVatTuBuSharedComponent } from './duyet-yeu-cau-linh-vat-tu-bu-shared/duyet-yeu-cau-linh-vat-tu-bu-shared.component';
import { DuyetYeuCauLinhVatTuListComponent } from './duyet-yeu-cau-linh-vat-tu-list/duyet-yeu-cau-linh-vat-tu-list.component';
import { DuyetYeuCauLinhVatTuThuongComponent } from './duyet-yeu-cau-linh-vat-tu-thuong/duyet-yeu-cau-linh-vat-tu-thuong.component';
import { DuyetYeuCauLinhVatTuThuongSharedComponent } from './duyet-yeu-cau-linh-vat-tu-thuong-shared/duyet-yeu-cau-linh-vat-tu-thuong-shared.component';
import { DuyetYeuCauLinhVatTuTrucTiepComponent } from './duyet-yeu-cau-linh-vat-tu-truc-tiep/duyet-yeu-cau-linh-vat-tu-truc-tiep.component';
import { DuyetYeuCauLinhVatTuTrucTiepSharedComponent } from './duyet-yeu-cau-linh-vat-tu-truc-tiep-shared/duyet-yeu-cau-linh-vat-tu-truc-tiep-shared.component';
import { KhongDuyetComponent } from './khong-duyet-popup/khong-duyet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { PhieuXuatLinhVatTuPopupComponent } from './phieu-xuat-linh-vat-tu-popup/phieu-xuat-linh-vat-tu-popup.component';


@NgModule({
  declarations: [
    DuyetYeuCauLinhVatTuBuComponent, 
    DuyetYeuCauLinhVatTuBuSharedComponent, 
    DuyetYeuCauLinhVatTuListComponent, 
    DuyetYeuCauLinhVatTuThuongComponent, 
    DuyetYeuCauLinhVatTuThuongSharedComponent, 
    DuyetYeuCauLinhVatTuTrucTiepComponent, 
    DuyetYeuCauLinhVatTuTrucTiepSharedComponent, 
    KhongDuyetComponent, PhieuXuatLinhVatTuPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    DuyetYeuCauLinhVatTuRoutingModule
  ],
  entryComponents: [
    KhongDuyetComponent,
    PhieuXuatLinhVatTuPopupComponent
  ]
})
export class DuyetYeuCauLinhVatTuModule { }
