import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhomVatTuRoutingModule } from './nhom-vat-tu-routing.module';
import { NhomVatTuListComponent } from './nhom-vat-tu-list/nhom-vat-tu-list.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { NhomVatTuService } from './nhom-vat-tu.service';
@NgModule({
  declarations: [NhomVatTuListComponent],
  imports: [
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
    NhomVatTuRoutingModule
  ],
  providers: [
    NhomVatTuService,
    { provide: BaseService,    useClass: NhomVatTuService },
  ]
})
export class NhomVatTuModule { }
