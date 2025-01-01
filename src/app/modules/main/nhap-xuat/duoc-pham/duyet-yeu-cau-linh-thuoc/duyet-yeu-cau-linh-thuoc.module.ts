import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetYeuCauLinhThuocRoutingModule } from './duyet-yeu-cau-linh-thuoc-routing.module';
import { DuyetYeuCauLinhThuocListComponent } from './duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component';
import { DuyetYeuCauLinhThuocThuongComponent } from './duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component';
import { DuyetYeuCauLinhThuocBuComponent } from './duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { DuyetYeuCauLinhThuocThuongSharedComponent } from './duyet-yeu-cau-linh-thuoc-thuong-shared/duyet-yeu-cau-linh-thuoc-thuong-shared.component';
import { DuyetYeuCauLinhThuocBuSharedComponent } from './duyet-yeu-cau-linh-thuoc-bu-shared/duyet-yeu-cau-linh-thuoc-bu-shared.component';
import { KhongDuyetPopupComponent } from './khong-duyet-popup/khong-duyet-popup.component';
import { DuyetYeuCauLinhThuocTrucTiepSharedComponent } from './duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component';
import { DuyetYeuCauLinhThuocTrucTiepComponent } from './duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component';
import { PhieuXuatLinhThuocPopupComponent } from './phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component';


@NgModule({
  declarations: [
    DuyetYeuCauLinhThuocListComponent, 
    DuyetYeuCauLinhThuocThuongComponent, 
    DuyetYeuCauLinhThuocBuComponent, 
    DuyetYeuCauLinhThuocThuongSharedComponent, 
    DuyetYeuCauLinhThuocBuSharedComponent, 
    KhongDuyetPopupComponent, 
    DuyetYeuCauLinhThuocTrucTiepSharedComponent, 
    DuyetYeuCauLinhThuocTrucTiepComponent, 
    PhieuXuatLinhThuocPopupComponent
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
    DuyetYeuCauLinhThuocRoutingModule
  ],
  entryComponents: [
    KhongDuyetPopupComponent,
    PhieuXuatLinhThuocPopupComponent
  ]
})
export class DuyetYeuCauLinhThuocModule { }
