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

import { NhaSanXuatService } from './nha-san-xuat.service';
import { NhaSanXuatRoutingModule } from './nha-san-xuat-routing.module';

import { NhaSanXuatListComponent } from './nha-san-xuat-list/nha-san-xuat-list.component';
import { NhaSanXuatSharedComponent } from './nha-san-xuat-shared/nha-san-xuat-shared.component';
import { NhaSanXuatCreateComponent } from 'src/app/modules/main/danh-muc/nhom-he-thong/thuoc/nha-san-xuat/nha-san-xuat-create/nha-san-xuat-create.component';
import { NhaSanXuatUpdateComponent } from './nha-san-xuat-update/nha-san-xuat-update.component';

import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [NhaSanXuatListComponent, NhaSanXuatSharedComponent, NhaSanXuatCreateComponent, NhaSanXuatUpdateComponent],
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
    MatTableModule,
    NhaSanXuatRoutingModule
  ],
  providers: [
    NhaSanXuatService,
    { provide: BaseService, useClass: NhaSanXuatService },
  ]
})
export class NhaSanXuatModule { }
