import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XuatKhoVatTuRoutingModule } from './xuat-kho-vat-tu-routing.module';
import { XuatKhoVatTuListComponent } from './xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component';
import { XuatKhoVatTuCreateComponent } from './xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component';
import { XuatKhoVatTuUpdateComponent } from './xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component';
import { XuatKhoVatTuSharedComponent } from './xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatSelectModule, MatRadioModule, MatOptionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { XuatKhoVatTuService } from './xuat-kho-vat-tu.service';
import { BaseService } from 'src/app/core/services/base.service';
import { XuatKhoInPhieuPopupComponent } from './xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component';


@NgModule({
  declarations: [XuatKhoVatTuListComponent, XuatKhoVatTuCreateComponent, XuatKhoVatTuUpdateComponent, XuatKhoVatTuSharedComponent, XuatKhoInPhieuPopupComponent],
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

    XuatKhoVatTuRoutingModule,
    GridModule,
  ],entryComponents: [
    XuatKhoInPhieuPopupComponent
  ],
  providers: [
    XuatKhoVatTuService,
    { provide: BaseService, useClass: XuatKhoVatTuService },
  ]
})
export class XuatKhoVatTuModule { }
