import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NgheNghiepService } from './nghe-nghiep.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgheNghiepRoutingModule } from './nghe-nghiep-routing.module';
import { NgheNghiepListComponent } from './nghe-nghiep-list/nghe-nghiep-list.component';
import { NgheNghiepCreateComponent } from './nghe-nghiep-create/nghe-nghiep-create.component';
import { NgheNghiepUpdateComponent } from './nghe-nghiep-update/nghe-nghiep-update.component';
import { NgheNghiepSharedComponent } from './nghe-nghiep-shared/nghe-nghiep-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NgheNghiepListComponent,
    NgheNghiepCreateComponent,
    NgheNghiepUpdateComponent,
    NgheNghiepSharedComponent
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
    NgheNghiepRoutingModule
  ],
  providers: [
    NgheNghiepService,
    { provide: BaseService, useClass: NgheNghiepService },
  ]
})

export class NgheNghiepModule { }
