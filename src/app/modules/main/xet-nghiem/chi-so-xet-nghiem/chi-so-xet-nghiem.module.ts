import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiSoXetNghiemRoutingModule } from './chi-so-xet-nghiem-routing.module';
import { ChiSoXetNghiemListComponent } from './chi-so-xet-nghiem-list/chi-so-xet-nghiem-list.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BaseService } from 'src/app/core/services/base.service';
import { MatCheckboxModule, MatDialogModule, MatInputModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ChiSoXetNghiemSharedComponent } from './chi-so-xet-nghiem-shared/chi-so-xet-nghiem-shared.component';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
@NgModule({
  declarations: [ChiSoXetNghiemListComponent, ChiSoXetNghiemSharedComponent],
  imports: [
    CommonModule,
    ChiSoXetNghiemRoutingModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    TreeViewModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,

    LayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    ScrollToModule.forRoot(),
    GridModule,
    IntlModule,
    MatRadioModule,
    PopupModule,
    ContextMenuModule
  ]
})
export class ChiSoXetNghiemModule { }
