import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyDoTiepNhanRoutingModule } from './ly-do-tiep-nhan-routing.module';
import { LyDoTiepNhanListComponent } from './ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component';


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
import { LyDoTiepNhanService } from './ly-do-tiep-nhan.service';
import { LyDoTiepNhanCreateComponent } from './ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component';
import { LyDoTiepNhanUpdateComponent } from './ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component';
import { LyDoTiepNhanSharedComponent } from './ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component';
@NgModule({
  declarations: [LyDoTiepNhanListComponent, LyDoTiepNhanCreateComponent, LyDoTiepNhanUpdateComponent, LyDoTiepNhanSharedComponent],
  imports: [
    CommonModule,
    LyDoTiepNhanRoutingModule,
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
  ],
  providers: [
    LyDoTiepNhanService,
    { provide: BaseService,    useClass: LyDoTiepNhanService },
  ]
})
export class LyDoTiepNhanModule { }
