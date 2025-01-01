import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BaseService } from 'src/app/core/services/base.service';
import { XuatKhoKhacKSNKService } from './xuat-kho-khac-ksnk.service';
import { XuatKhoKhacKSNKInPhieuPopupComponent } from './xuat-kho-khac-ksnk-in-phieu-popup/xuat-kho-khac-ksnk-in-phieu-popup.component';
import { XuatKhoKhacKSNKRoutingModule } from './xuat-kho-khac-ksnk-routing.module';
import { XuatKhoKhacKSNKSharedComponent } from './xuat-kho-khac-ksnk-shared/xuat-kho-khac-ksnk-shared.component';
import { XuatKhoKhacKSNKUpdateComponent } from './xuat-kho-khac-ksnk-update/xuat-kho-khac-ksnk-update.component';
import { XuatKhoKhacKSNKCreateComponent } from './xuat-kho-khac-ksnk-create/xuat-kho-khac-ksnk-create.component';
import { XuatKhoKhacKSNKListComponent } from './xuat-kho-khac-ksnk-list/xuat-kho-khac-ksnk-list.component';
import { XuatKhoKSNKInPhieuDPVTPopupComponent } from './xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component';

@NgModule({
  declarations: [
    XuatKhoKhacKSNKListComponent,
    XuatKhoKhacKSNKCreateComponent,
    XuatKhoKhacKSNKUpdateComponent,
    XuatKhoKhacKSNKSharedComponent,
    XuatKhoKhacKSNKInPhieuPopupComponent,
    XuatKhoKSNKInPhieuDPVTPopupComponent
  ],
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
    XuatKhoKhacKSNKRoutingModule
  ], entryComponents: [
    XuatKhoKhacKSNKInPhieuPopupComponent,
    XuatKhoKSNKInPhieuDPVTPopupComponent
  ],
  providers: [
    XuatKhoKhacKSNKService,
    { provide: BaseService, useClass: XuatKhoKhacKSNKService },
  ]
})
export class XuatKhoKhacKSNKModule { }
