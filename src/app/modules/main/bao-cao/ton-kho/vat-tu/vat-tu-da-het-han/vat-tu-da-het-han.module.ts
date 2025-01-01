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
import { VatTuDaHetHanService } from './vat-tu-da-het-han.service';
import { VatTuDaHetHanRoutingModule } from './vat-tu-da-het-han-routing.module';
import { VatTuDaHetHanListComponent } from './vat-tu-da-het-han-list/vat-tu-da-het-han-list.component';
import { VatTuDaHetHanPopupComponent } from './vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component';

@NgModule({
  declarations: [VatTuDaHetHanListComponent, VatTuDaHetHanPopupComponent],
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
    VatTuDaHetHanRoutingModule
  ],
  providers: [
    VatTuDaHetHanService,
    { provide: BaseService, useClass: VatTuDaHetHanService },
  ],
  entryComponents: [
    VatTuDaHetHanPopupComponent
  ]
})
export class VatTuDaHetHanModule { }
