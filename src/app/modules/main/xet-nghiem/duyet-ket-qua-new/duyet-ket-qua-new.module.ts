import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetKetQuaNewRoutingModule } from './duyet-ket-qua-new-routing.module';
import { DuyetKetQuaNewPopupComponent } from './duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component';
import { DuyetKetQuaPhieuNewPopupComponent } from './duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component';
import { DuyetKetQuaNhomDvListNewPopupComponent } from './duyet-ket-qua-nhom-dv-list-new-popup/duyet-ket-qua-nhom-dv-list-new-popup.component';
import { DuyetKetQuaNewListComponent } from './duyet-ket-qua-new-list/duyet-ket-qua-new-list.component';
import { DuyetKetQuaInNhomDvListNewPopupComponent } from './duyet-ket-qua-in-nhom-dv-list-new-popup/duyet-ket-qua-in-nhom-dv-list-new-popup.component';
import { DuyetKetQuaNewDetailedComponent } from './duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component';
import { ChonLoaiKetQuaXetNghiemNewPopupComponent } from './chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component';
import { DichVuCanCapNhatPopupComponent } from './dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatDialogModule, MatMenuModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import { DuyetKetQuaNewService } from './duyet-ket-qua-new.service';
import { BaseService } from 'src/app/core/services/base.service';
@NgModule({
  declarations: [
    DuyetKetQuaNewPopupComponent,
    DuyetKetQuaPhieuNewPopupComponent,
    DuyetKetQuaNhomDvListNewPopupComponent,
    DuyetKetQuaNewListComponent,
    DuyetKetQuaInNhomDvListNewPopupComponent,
    DuyetKetQuaNewDetailedComponent,
    ChonLoaiKetQuaXetNghiemNewPopupComponent,
    DichVuCanCapNhatPopupComponent],
  imports: [
    CommonModule,
    DuyetKetQuaNewRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    MatCheckboxModule,
    IconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  providers: [
    DuyetKetQuaNewService,
    { provide: BaseService, useClass: DuyetKetQuaNewService },
  ],
  entryComponents: [
    DuyetKetQuaNewPopupComponent,
    DuyetKetQuaPhieuNewPopupComponent,
    DuyetKetQuaNhomDvListNewPopupComponent,
    DuyetKetQuaInNhomDvListNewPopupComponent,
    ChonLoaiKetQuaXetNghiemNewPopupComponent,
    DichVuCanCapNhatPopupComponent
  ]
})
export class DuyetKetQuaNewModule { }
