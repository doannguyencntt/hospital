import { NgModule } from '@angular/core';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { NhapKhoListComponent } from './nhap-kho-list/nhap-kho-list.component';
import { NhapKhoCreateComponent } from './nhap-kho-create/nhap-kho-create.component';
import { NhapKhoShareComponent } from './nhap-kho-share/nhap-kho-share.component';
import { NhapKhoTuChoiDuyetComponent } from './nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component';
import { NhapKhoTuDaDuyetComponent } from './nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component';
import { NhapKhoUpdateComponent } from './nhap-kho-update/nhap-kho-update.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NhapKhoRoutingModule } from './nhap-kho-routing.module';
import { NhapKhoService } from './nhap-kho.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PhieuNhapKhoVatTuPopupComponent } from './phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component';
import { DsVatTuTrungNccPopupComponent } from './ds-vat-tu-trung-ncc-popup/ds-vat-tu-trung-ncc-popup.component';
import { XacNhanChonPhieuInVatTuPopupComponent } from './xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component';


@NgModule({
  declarations: [
    NhapKhoListComponent,
    NhapKhoCreateComponent,
    NhapKhoShareComponent,
    NhapKhoTuChoiDuyetComponent,
    NhapKhoTuDaDuyetComponent,
    NhapKhoUpdateComponent,
    PhieuNhapKhoVatTuPopupComponent,
    DsVatTuTrungNccPopupComponent,
    XacNhanChonPhieuInVatTuPopupComponent],
  imports: [
    CommonModule,
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
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,

    NhapKhoRoutingModule
  ],
  providers: [
    NhapKhoService,
    { provide: BaseService, useClass: NhapKhoService },
  ],
  entryComponents: [
    PhieuNhapKhoVatTuPopupComponent,
    DsVatTuTrungNccPopupComponent,
    XacNhanChonPhieuInVatTuPopupComponent,

  ]
})
export class NhapKhoModule { }
