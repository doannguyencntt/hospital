import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BaseService } from 'src/app/core/services/base.service';
import { XuatKhoKSNKRoutingModule } from './xuat-kho-ksnk-routing.module';
import { XuatKhoKSNKInPhieuPopupComponent } from './xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component';
import { XuatKhoKSNKService } from './xuat-kho-ksnk.service';
import { XuatKhoKSNKListComponent } from './xuat-kho-ksnk-list/xuat-kho-ksnk-list.component';
import { XuatKhoKSNKSharedComponent } from './xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component';
import { XuatKhoKSNKUpdateComponent } from './xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component';
import { XuatKhoKSNKCreateComponent } from './xuat-kho-ksnk-create/xuat-kho-ksnk-create.component';
import { XuatKhoKSNKInPhieuDPVTPopupComponent } from './xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component';



@NgModule({
  declarations: [
    XuatKhoKSNKListComponent,
    XuatKhoKSNKCreateComponent,
    XuatKhoKSNKUpdateComponent,
    XuatKhoKSNKSharedComponent,
    XuatKhoKSNKInPhieuPopupComponent,
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
    XuatKhoKSNKRoutingModule,
    GridModule,
  ], entryComponents: [
    XuatKhoKSNKInPhieuPopupComponent,
    XuatKhoKSNKInPhieuDPVTPopupComponent
  ],
  providers: [
    XuatKhoKSNKService,
    { provide: BaseService, useClass: XuatKhoKSNKService },
  ]
})
export class XuatKhoKSNKModule { }
