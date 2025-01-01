import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetYeuCauChayLaiRoutingModule } from './duyet-yeu-cau-chay-lai-routing.module';
import { DuyetYeuCauChayLaiListComponent } from './duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component';
import { DuyetYeuCauChayLaiDuyetComponent } from './duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component';
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
import { DuyetYeuCauChayLaiTuChoiPopupComponent } from './duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component';
import { ResizableModule } from 'src/app/shared/directives/resizable/resizable/resizable.module';


@NgModule({
  declarations: 
  [
    DuyetYeuCauChayLaiListComponent, 
    DuyetYeuCauChayLaiDuyetComponent, 
    DuyetYeuCauChayLaiTuChoiPopupComponent
  ],
  imports: [
    CommonModule,
    DuyetYeuCauChayLaiRoutingModule,
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
    ResizableModule
  ],
  entryComponents: [
    DuyetYeuCauChayLaiTuChoiPopupComponent
  ]
})
export class DuyetYeuCauChayLaiModule { }
