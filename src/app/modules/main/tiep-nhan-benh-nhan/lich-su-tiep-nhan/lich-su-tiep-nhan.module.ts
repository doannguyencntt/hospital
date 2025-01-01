import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuTiepNhanRoutingModule } from './lich-su-tiep-nhan-routing.module';
import { LichSuTiepNhanListComponent } from './lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component';
import { LichSuTiepNhanChiTietComponent } from './lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatListModule } from '@angular/material';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LichSuTiepNhanService } from './lich-su-tiep-nhan.service';
import { InBangKeChiPhiLSKhamBenhComponent } from './popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component';
import { LichSuTiepNhanPopupComponent } from './lich-su-tiep-nhan-popup/lich-su-tiep-nhan-popup.component';
import { LichSuTaiKhamComponent } from './lich-su-tai-kham/lich-su-tai-kham.component';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ChoThuTienNoiTruModule } from '../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module';
import { TiepNhanBenhNhanModule } from '../tiep-nhan-benh-nhan.module';

@NgModule({
  declarations: [LichSuTiepNhanListComponent, LichSuTiepNhanChiTietComponent , InBangKeChiPhiLSKhamBenhComponent, LichSuTiepNhanPopupComponent, LichSuTaiKhamComponent, ],
  imports: [
    CommonModule,
    LichSuTiepNhanRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    KhamBenhModule,
    MatCheckboxModule,
    ChoThuTienNoiTruModule,
    GridModule,
    InputsModule,
    MatRadioModule,
    MatListModule,    
    DropDownsModule,
    TiepNhanBenhNhanModule

  ], providers: [
    LichSuTiepNhanService,
    { provide: BaseService, useClass: LichSuTiepNhanService },
  ],
  exports: [
    KhamBenhModule
  ],
  entryComponents: [
    InBangKeChiPhiLSKhamBenhComponent,
    LichSuTiepNhanPopupComponent
]
})
export class LichSuTiepNhanModule { }
