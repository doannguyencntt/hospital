import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetYeuCauLinhKSNKRoutingModule } from './duyet-yeu-cau-linh-ksnk-routing.module';
import { DuyetYeuCauLinhKSNKBuComponent } from './duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component';
import { DuyetYeuCauLinhKSNKBuSharedComponent } from './duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component';
import { DuyetYeuCauLinhKSNKListComponent } from './duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component';
import { DuyetYeuCauLinhKSNKThuongComponent } from './duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component';
import { DuyetYeuCauLinhKSNKThuongSharedComponent } from './duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component';
import { KhongDuyetComponent } from './khong-duyet-popup/khong-duyet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { PhieuXuatLinhKSNKPopupComponent } from './phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component';


@NgModule({
  declarations: [
    DuyetYeuCauLinhKSNKBuComponent, 
    DuyetYeuCauLinhKSNKBuSharedComponent, 
    DuyetYeuCauLinhKSNKListComponent, 
    DuyetYeuCauLinhKSNKThuongComponent, 
    DuyetYeuCauLinhKSNKThuongSharedComponent, 
    KhongDuyetComponent, PhieuXuatLinhKSNKPopupComponent
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
    DuyetYeuCauLinhKSNKRoutingModule
  ],
  entryComponents: [
    KhongDuyetComponent,
    PhieuXuatLinhKSNKPopupComponent
  ]
})
export class DuyetYeuCauLinhKSNKModule { }
