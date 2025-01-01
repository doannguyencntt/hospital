import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { CheDoAnRoutingModule } from './che-do-an-routing.module';
import { CheDoAnSharedComponent } from './che-do-an-shared/che-do-an-shared.component';
import { CheDoAnListComponent } from './che-do-an-list/che-do-an-list.component';
import { CheDoAnCreateComponent } from './che-do-an-create/che-do-an-create.component';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { CheDoAnUpdateComponent } from './che-do-an-update/che-do-an-update.component';

import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';
import { CheDoAnService } from './che-do-an.service';





@NgModule({
  declarations: [CheDoAnSharedComponent, CheDoAnListComponent, CheDoAnCreateComponent, CheDoAnUpdateComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    CheDoAnRoutingModule
  ],providers: [
    CheDoAnService,
    { provide: BaseService,    useClass: CheDoAnService },
  ]
})
export class CheDoAnModule { }
