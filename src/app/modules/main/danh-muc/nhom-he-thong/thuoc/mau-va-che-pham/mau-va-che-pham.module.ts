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

import { MauVaChePhamService } from './mau-va-che-pham.service';
import { MauVaChePhamRoutingModule } from './mau-va-che-pham-routing.module';

import { MauVaChePhamListComponent } from './mau-va-che-pham-list/mau-va-che-pham-list.component';
import { MauVaChePhamSharedComponent } from './mau-va-che-pham-shared/mau-va-che-pham-shared.component';
import { MauVaChePhamCreateComponent } from './mau-va-che-pham-create/mau-va-che-pham-create.component';
import { MauVaChePhamUpdateComponent } from './mau-va-che-pham-update/mau-va-che-pham-update.component';

@NgModule({
  declarations: [MauVaChePhamListComponent, MauVaChePhamSharedComponent, MauVaChePhamCreateComponent, MauVaChePhamUpdateComponent],
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
    MauVaChePhamRoutingModule
  ],
  providers: [
    MauVaChePhamService,
    { provide: BaseService, useClass: MauVaChePhamService },
]
})
export class MauVaChePhamModule { }
