import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { GayBenhAnRoutingModule } from './gay-benh-an-routing.module';
import { GayBenhAnListComponent } from './gay-benh-an-list/gay-benh-an-list.component';
import { GayBenhAnCreateComponent } from './gay-benh-an-create/gay-benh-an-create.component';
import { GayBenhAnUpdateComponent } from './gay-benh-an-update/gay-benh-an-update.component';
import { GayBenhAnSharedComponent } from './gay-benh-an-shared/gay-benh-an-shared.component';


@NgModule({
  declarations: [
    GayBenhAnListComponent, 
    GayBenhAnCreateComponent, 
    GayBenhAnUpdateComponent, 
    GayBenhAnSharedComponent],
  imports: [
    CommonModule,
    GayBenhAnRoutingModule,
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
  ]
})
export class GayBenhAnModule { }
