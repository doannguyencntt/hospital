import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LoaiPhongBenhNoiTruService } from './loai-phong-benh-noi-tru.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoaiPhongBenhNoiTruRoutingModule } from './loai-phong-benh-noi-tru-routing.module';
import { LoaiPhongBenhNoiTruListComponent } from './loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component';
import { LoaiPhongBenhNoiTruCreateComponent } from './loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component';
import { LoaiPhongBenhNoiTruUpdateComponent } from './loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component';
import { LoaiPhongBenhNoiTruSharedComponent } from './loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
  declarations: [
    LoaiPhongBenhNoiTruListComponent,
    LoaiPhongBenhNoiTruCreateComponent,
    LoaiPhongBenhNoiTruUpdateComponent,
    LoaiPhongBenhNoiTruSharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    LoaiPhongBenhNoiTruRoutingModule
  ],
  providers: [
    LoaiPhongBenhNoiTruService,
    { provide: BaseService, useClass: LoaiPhongBenhNoiTruService },
  ]
})
export class LoaiPhongBenhNoiTruModule { }
