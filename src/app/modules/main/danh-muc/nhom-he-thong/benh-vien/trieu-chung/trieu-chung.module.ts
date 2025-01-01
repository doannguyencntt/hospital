import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import {  TrieuChungService } from './trieu-chung.service';
import {  TrieuChungRoutingModule } from './trieu-chung-routing.module';

import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { TrieuChungListComponent } from './trieu-chung-list/trieu-chung-list.component';
import { TrieuChungSharedComponent } from './trieu-chung-shared/trieu-chung-shared.component';
import { TrieuChungCreateComponent } from './trieu-chung-create/trieu-chung-create.component';
import { TrieuChungUpdateComponent } from './trieu-chung-update/trieu-chung-update.component';



@NgModule({
  declarations: [TrieuChungListComponent, TrieuChungSharedComponent, TrieuChungCreateComponent, TrieuChungUpdateComponent],
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
    TrieuChungRoutingModule
  ],
  providers: [
    TrieuChungService,
    { provide: BaseService, useClass: TrieuChungService },
]
})
export class TrieuChungModule { }
