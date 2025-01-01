import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';


import { HocViHocHamService } from './hoc-vi-hoc-ham.service';
import { HocViHocHamRoutingModule } from './hoc-vi-hoc-ham-routing.module';
import { HocViHocHamListComponent } from './hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component';
import { HocViHocHamShareComponent } from './hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component';
import { HocViHocHamCreateComponent } from './hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component';
import { HocViHocHamUpdateComponent } from './hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component';


@NgModule({
  declarations: [HocViHocHamListComponent, HocViHocHamShareComponent, HocViHocHamCreateComponent, HocViHocHamUpdateComponent],
  imports: [
    CommonModule, 
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,

    HocViHocHamRoutingModule
  ],
  providers: [
    HocViHocHamService,
    { provide: BaseService, useClass: HocViHocHamService },
  ]
})
export class HocViHocHamModule { }
