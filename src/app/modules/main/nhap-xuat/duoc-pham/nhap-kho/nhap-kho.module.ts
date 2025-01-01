import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { NhapKhoRoutingModule } from './nhap-kho-routing.module';
import { NhapKhoListComponent } from './nhap-kho-list/nhap-kho-list.component';
import { NhapKhoCreateComponent } from './nhap-kho-create/nhap-kho-create.component';
import { NhapKhoUpdateComponent } from './nhap-kho-update/nhap-kho-update.component';
import { NhapKhoShareComponent } from './nhap-kho-share/nhap-kho-share.component';
import { NhapKhoService } from './nhap-kho.service';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NhapKhoTuChoiDuyetComponent } from './nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component';
import { NhapKhoTuDaDuyetComponent } from './nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component';
import { PhieuNhapKhoDuocPhamPopupComponent } from './phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import { DsDuocPhamTrungNccPopupComponent } from './ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component';


@NgModule({
  declarations: [
    NhapKhoListComponent,
    NhapKhoCreateComponent,
    NhapKhoUpdateComponent,
    NhapKhoShareComponent, NhapKhoTuChoiDuyetComponent, NhapKhoTuDaDuyetComponent, PhieuNhapKhoDuocPhamPopupComponent, DsDuocPhamTrungNccPopupComponent
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

    NhapKhoRoutingModule
  ],
  entryComponents: [
    PhieuNhapKhoDuocPhamPopupComponent,
    DsDuocPhamTrungNccPopupComponent
  ],
  providers: [
    NhapKhoService,
    { provide: BaseService, useClass: NhapKhoService },
  ]
})
export class NhapKhoModule { }
