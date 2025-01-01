import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import { QuocGiaRoutingModule } from './quoc-gia-routing.module';
import { QuocGiaListComponent } from './quoc-gia-list/quoc-gia-list.component';


import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { QuocGiaService } from './quoc-gia.service';
import { QuocGiaCreateComponent } from './quoc-gia-create/quoc-gia-create.component';
import { QuocGiaShareComponent } from './quoc-gia-share/quoc-gia-share.component';
import { QuocGiaUpdateComponent } from './quoc-gia-update/quoc-gia-update.component';

@NgModule({
  declarations: [
    QuocGiaListComponent,
    QuocGiaCreateComponent,
    QuocGiaShareComponent,
    QuocGiaUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    QuocGiaRoutingModule
  ],
  providers: [
    QuocGiaService,
    { provide: BaseService, useClass: QuocGiaService },
  ]
})
export class QuocGiaModule { }