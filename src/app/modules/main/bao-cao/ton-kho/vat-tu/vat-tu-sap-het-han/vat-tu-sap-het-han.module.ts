import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { VatTuSapHetHanService } from './vat-tu-sap-het-han.service';
import { VatTuSapHetHanRoutingModule } from './vat-tu-sap-het-han-routing.module';
import { VatTuSapHetHanListComponent } from './vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component';
import { VatTuSapHetHanPopupComponent } from './vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component';

@NgModule({
  declarations: [VatTuSapHetHanListComponent, VatTuSapHetHanPopupComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    GridModule,
    VatTuSapHetHanRoutingModule
  ],
  providers: [
    VatTuSapHetHanService,
    { provide: BaseService, useClass: VatTuSapHetHanService }
  ],
  entryComponents: [
    VatTuSapHetHanPopupComponent
  ]
})
export class VatTuSapHetHanModule { }
