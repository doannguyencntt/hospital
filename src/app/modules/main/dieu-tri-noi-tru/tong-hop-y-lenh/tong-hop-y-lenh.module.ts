import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TongHopYLenhRoutingModule } from './tong-hop-y-lenh-routing.module';
import { TongHopYLenhListComponent } from './tong-hop-y-lenh-list/tong-hop-y-lenh-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TongHopYLenhDetailComponent } from './tong-hop-y-lenh-detail/tong-hop-y-lenh-detail.component';
import { TongHopYLenhInPhieuPopupComponent } from './tong-hop-y-lenh-in-phieu-popup/tong-hop-y-lenh-in-phieu-popup.component';
import { TongHopYLenhDetailBackgroundComponent } from './tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component';


@NgModule({
  exports: [
    TongHopYLenhDetailComponent
  ],
  declarations: [
    TongHopYLenhListComponent,
    TongHopYLenhDetailComponent,
    TongHopYLenhInPhieuPopupComponent,
    TongHopYLenhDetailBackgroundComponent
  ],
  imports: [
    CommonModule,
    TongHopYLenhRoutingModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    GridModule,
    IntlModule,
    PdfViewerModule,
    MatRadioModule,
    MatCheckboxModule,
    DateInputsModule
  ],
  entryComponents: [
    TongHopYLenhInPhieuPopupComponent
  ]
})
export class TongHopYLenhModule { }
