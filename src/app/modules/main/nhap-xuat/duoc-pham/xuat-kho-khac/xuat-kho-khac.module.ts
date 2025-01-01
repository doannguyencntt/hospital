import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XuatKhoKhacRoutingModule } from './xuat-kho-khac-routing.module';
import { XuatKhoKhacListComponent } from './xuat-kho-khac-list/xuat-kho-khac-list.component';
import { XuatKhoKhacCreateComponent } from './xuat-kho-khac-create/xuat-kho-khac-create.component';
import { XuatKhoKhacSharedComponent } from './xuat-kho-khac-shared/xuat-kho-khac-shared.component';
import { XuatKhoKhacUpdateComponent } from './xuat-kho-khac-update/xuat-kho-khac-update.component';
import { XuatKhoKhacInPhieuPopupComponent } from './xuat-kho-khac-in-phieu-popup/xuat-kho-khac-in-phieu-popup.component';
import { XuatKhoKhacService } from './xuat-kho-khac.service';
import { BaseService } from 'src/app/core/services/base.service';
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
import { PhieuXuatKhoDpVtPopupComponent } from './phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component';


@NgModule({
  declarations: [XuatKhoKhacListComponent, XuatKhoKhacCreateComponent, XuatKhoKhacSharedComponent, XuatKhoKhacUpdateComponent, XuatKhoKhacInPhieuPopupComponent, PhieuXuatKhoDpVtPopupComponent],
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
    
    XuatKhoKhacRoutingModule,
  ], entryComponents: [
    XuatKhoKhacInPhieuPopupComponent,
    PhieuXuatKhoDpVtPopupComponent
  ],
  providers: [
    XuatKhoKhacService,
    { provide: BaseService, useClass: XuatKhoKhacService },
  ]
})
export class XuatKhoKhacModule { }
