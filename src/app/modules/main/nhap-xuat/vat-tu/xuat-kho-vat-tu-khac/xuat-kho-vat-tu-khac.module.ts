import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XuatKhoVatTuKhacRoutingModule } from './xuat-kho-vat-tu-khac-routing.module';
import { XuatKhoVatTuKhacListComponent } from './xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component';
import { XuatKhoVatTuKhacCreateComponent } from './xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component';
import { XuatKhoVatTuKhacUpdateComponent } from './xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component';
import { XuatKhoVatTuKhacSharedComponent } from './xuat-kho-vat-tu-khac-shared/xuat-kho-vat-tu-khac-shared.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatSelectModule, MatRadioModule, MatOptionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { XuatKhoInPhieuPopupComponent } from './xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component';
import { BaseService } from 'src/app/core/services/base.service';
import { XuatKhoVatTuKhacService } from './xuat-kho-vat-tu-khac.service';
import { XuatKhoKhacModule } from '../../duoc-pham/xuat-kho-khac/xuat-kho-khac.module';


@NgModule({
  declarations: [XuatKhoVatTuKhacListComponent, XuatKhoVatTuKhacCreateComponent, XuatKhoVatTuKhacUpdateComponent, XuatKhoVatTuKhacSharedComponent, XuatKhoInPhieuPopupComponent],
  imports: [
    CommonModule,

    InputsModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,

    MatInputModule,
    MatCheckboxModule,
    GridModule,
    
    XuatKhoVatTuKhacRoutingModule,
    XuatKhoKhacModule
  ],entryComponents: [
    XuatKhoInPhieuPopupComponent
  ],
  providers: [
    XuatKhoVatTuKhacService,
    { provide: BaseService, useClass: XuatKhoVatTuKhacService },
  ]
})
export class XuatKhoVatTuKhacModule { }
