import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { CauHinhHeThongService } from './cau-hinh-he-thong.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CauHinhHeThongRoutingModule } from './cau-hinh-he-thong-routing.module';
import { CauHinhHeThongListComponent } from './cau-hinh-he-thong-list/cau-hinh-he-thong-list.component';

import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { CauHinhHeThongSharedComponent } from './cau-hinh-he-thong-shared/cau-hinh-he-thong-shared.component';
import { CauHinhHeThongUpdateComponent } from './cau-hinh-he-thong-update/cau-hinh-he-thong-update.component';

@NgModule({
  declarations: [CauHinhHeThongListComponent, CauHinhHeThongSharedComponent, CauHinhHeThongUpdateComponent],
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
    ReactiveFormsModule,
    CauHinhHeThongRoutingModule
  ],
  providers: [
    CauHinhHeThongService,
    { provide: BaseService, useClass: CauHinhHeThongService },
  ]
})
export class CauHinhHeThongModule { }
