import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XetNghiemNhanMauRoutingModule } from './xet-nghiem-nhan-mau-routing.module';
import { XetNghiemNhanMauListComponent } from './xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component';
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
import { BaseService } from 'src/app/core/services/base.service';
import { XetNghiemNhanMauService } from './xet-nghiem-nhan-mau.service';

@NgModule({
  declarations: [XetNghiemNhanMauListComponent],
  imports: [
    CommonModule,
    XetNghiemNhanMauRoutingModule,
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
    MatCheckboxModule
  ],
  providers: [
    XetNghiemNhanMauService,
    { provide: BaseService, useClass: XetNghiemNhanMauService }
  ]
})
export class XetNghiemNhanMauModule { }
