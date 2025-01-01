import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MauRoutingModule } from './mau-routing.module';
import { NhapKhoMauListComponent } from './nhap-kho-mau-list/nhap-kho-mau-list.component';
import { NhapKhoMauSharedComponent } from './nhap-kho-mau-shared/nhap-kho-mau-shared.component';
import { NhapKhoMauCreateComponent } from './nhap-kho-mau-create/nhap-kho-mau-create.component';
import { NhapKhoMauUpdateComponent } from './nhap-kho-mau-update/nhap-kho-mau-update.component';
import { NhapKhoMauInPhieuPopupComponent } from './nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component';
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



@NgModule({
  declarations: [
    NhapKhoMauListComponent, 
    NhapKhoMauSharedComponent, 
    NhapKhoMauCreateComponent, 
    NhapKhoMauUpdateComponent, 
    NhapKhoMauInPhieuPopupComponent,
  ],
  imports: [
    CommonModule,
    MauRoutingModule,
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
  entryComponents: [
    NhapKhoMauInPhieuPopupComponent
  ]
})
export class MauModule { }
