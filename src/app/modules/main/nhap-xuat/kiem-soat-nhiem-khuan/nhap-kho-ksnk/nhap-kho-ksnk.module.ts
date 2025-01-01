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
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BaseService } from 'src/app/core/services/base.service';
import { NhapKhoKSNKListComponent } from './nhap-kho-ksnk-list/nhap-kho-ksnk-list.component';
import { NhapKhoKSNKCreateComponent } from './nhap-kho-ksnk-create/nhap-kho-ksnk-create.component';
import { NhapKhoKSNKTuChoiDuyetComponent } from './nhap-kho-ksnk-tu-choi-duyet/nhap-kho-tu-choi-duyet.component';
import { NhapKhoKSNKTuDaDuyetComponent } from './nhap-kho-ksnk-tu-da-duyet/nhap-kho-tu-da-duyet.component';
import { NhapKhoKSNKUpdateComponent } from './nhap-kho-ksnk-update/nhap-kho-ksnk-update.component';
import { PhieuNhapKhoVatTuKSNKPopupComponent } from './phieu-nhap-kho-vat-tu-ksnk-popup/phieu-nhap-kho-vat-tu-ksnk-popup.component';
import { DsVatTuKSNKTrungNccPopupComponent } from './ds-vat-tu-ksnk-trung-ncc-popup/ds-vat-tu-ksnk-trung-ncc-popup.component';
import { XacNhanChonPhieuInVatTuKSNKPopupComponent } from './xac-nhan-chon-phieu-in-vat-tu-ksnk-popup/xac-nhan-chon-phieu-in-vat-tu-ksnk-popup.component';
import { NhapKhoKSNKService } from './nhap-kho-ksnk.service';
import { NhapKhoKSNKRoutingModule } from './nhap-kho-ksnk-routing.module';
import { NhapKhoKSNKShareComponent } from './nhap-kho-ksnk-share/nhap-kho-ksnk-share.component';

@NgModule({
  declarations: [
    NhapKhoKSNKListComponent,
    NhapKhoKSNKCreateComponent,
    NhapKhoKSNKShareComponent,
    NhapKhoKSNKTuChoiDuyetComponent,
    NhapKhoKSNKTuDaDuyetComponent,
    NhapKhoKSNKUpdateComponent,
    PhieuNhapKhoVatTuKSNKPopupComponent,
    DsVatTuKSNKTrungNccPopupComponent,
    XacNhanChonPhieuInVatTuKSNKPopupComponent
  ],
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
    NhapKhoKSNKRoutingModule
  ],
  providers: [
    NhapKhoKSNKService,
    { provide: BaseService, useClass: NhapKhoKSNKService },
  ],
  entryComponents: [
    PhieuNhapKhoVatTuKSNKPopupComponent,
    DsVatTuKSNKTrungNccPopupComponent,
    XacNhanChonPhieuInVatTuKSNKPopupComponent
  ]
})
export class NhapKhoKSNKModule { }
