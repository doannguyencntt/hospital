import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XetNghiemCapCodeRoutingModule } from './xet-nghiem-cap-code-routing.module';
import { XetNghiemCapCodeListComponent } from './xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component';
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
import { LayMauXetNghiemModule } from '../lay-mau-xet-nghiem/lay-mau-xet-nghiem.module';
import { XetNghiemCapCodeService } from './xet-nghiem-cap-code.service';
import { BaseService } from 'src/app/core/services/base.service';
import { XetNghiemCapCodeFileExcelPopupComponent } from './xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component';
import { XetNghiemCapCodeFileExcelErrosPopupComponent } from './xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component';
@NgModule({
  declarations: [
    XetNghiemCapCodeListComponent, 
    XetNghiemCapCodeFileExcelPopupComponent, 
    XetNghiemCapCodeFileExcelErrosPopupComponent],
  imports: [
    CommonModule,
    XetNghiemCapCodeRoutingModule,
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
    LayMauXetNghiemModule
  ],
  entryComponents: [
    XetNghiemCapCodeFileExcelPopupComponent,
    XetNghiemCapCodeFileExcelErrosPopupComponent,
  ],
  providers: [
    XetNghiemCapCodeService,
    { provide: BaseService, useClass: XetNghiemCapCodeService }
  ]
})
export class XetNghiemCapCodeModule { }
