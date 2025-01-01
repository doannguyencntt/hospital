import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

import { DonViTinhService } from './don-vi-tinh.service';
import { DonViTinhRoutingModule } from './don-vi-tinh-routing.module';

import { DonViTinhListComponent } from './don-vi-tinh-list/don-vi-tinh-list.component';
import { DonViTinhSharedComponent } from './don-vi-tinh-shared/don-vi-tinh-shared.component';
import { DonViTinhCreateComponent } from './don-vi-tinh-create/don-vi-tinh-create.component';
import { DonViTinhUpdateComponent } from './don-vi-tinh-update/don-vi-tinh-update.component';


@NgModule({
  declarations: [DonViTinhListComponent, DonViTinhSharedComponent, DonViTinhCreateComponent, DonViTinhUpdateComponent],
  imports: [
    CommonModule,
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
    DonViTinhRoutingModule
  ],
  providers: [
    DonViTinhService,
    { provide: BaseService, useClass: DonViTinhService },
]
})
export class DonViTinhModule { }
