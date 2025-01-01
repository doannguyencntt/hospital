import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongNoBaoHiemTuNhanRoutingModule } from './cong-no-bao-hiem-tu-nhan-routing.module';
import { CongNoBaoHiemTuNhanListComponent } from './cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component';
import { CongNoBaoHiemTuNhanThuNoPopupComponent } from './cong-no-bao-hiem-tu-nhan-thu-no-popup/cong-no-bao-hiem-tu-nhan-thu-no-popup.component';
import { CongNoBaoHiemTuNhanLichSuPopupComponent } from './cong-no-bao-hiem-tu-nhan-lich-su-popup/cong-no-bao-hiem-tu-nhan-lich-su-popup.component';
import { CongNoBaoHiemTuNhanCongTyPopupComponent } from './cong-no-bao-hiem-tu-nhan-cong-ty-popup/cong-no-bao-hiem-tu-nhan-cong-ty-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@angular/cdk/layout';
import { CongNoBaoHiemTuNhanBenhNhanPopupComponent } from './cong-no-bao-hiem-tu-nhan-benh-nhan-popup/cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component';


@NgModule({
  declarations: [
    CongNoBaoHiemTuNhanListComponent, 
    CongNoBaoHiemTuNhanThuNoPopupComponent, 
    CongNoBaoHiemTuNhanLichSuPopupComponent, 
    CongNoBaoHiemTuNhanCongTyPopupComponent, CongNoBaoHiemTuNhanBenhNhanPopupComponent],
  imports: [
    CommonModule,
    CongNoBaoHiemTuNhanRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    LayoutModule,
    MatCheckboxModule
  ],
  entryComponents: [
    CongNoBaoHiemTuNhanLichSuPopupComponent,
    CongNoBaoHiemTuNhanThuNoPopupComponent,
    CongNoBaoHiemTuNhanCongTyPopupComponent,
    CongNoBaoHiemTuNhanBenhNhanPopupComponent
  ]
})
export class CongNoBaoHiemTuNhanModule { }
