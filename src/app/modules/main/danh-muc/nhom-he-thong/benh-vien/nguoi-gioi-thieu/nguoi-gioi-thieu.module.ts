import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiGioiThieuRoutingModule } from './nguoi-gioi-thieu-routing.module';
import { NguoiGioiThieuListComponent } from './nguoi-gioi-thieu-list/nguoi-gioi-thieu-list.component';
import { NguoiGioiThieuCreateComponent } from './nguoi-gioi-thieu-create/nguoi-gioi-thieu-create.component';
import { NguoiGioiThieuUpdateComponent } from './nguoi-gioi-thieu-update/nguoi-gioi-thieu-update.component';
import { NguoiGioiThieuSharedComponent } from './nguoi-gioi-thieu-shared/nguoi-gioi-thieu-shared.component';
import { BaseService } from 'src/app/core/services/base.service';
import { NguoiGioiThieuService } from './nguoi-gioi-thieu.service';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NguoiGioiThieuListComponent, NguoiGioiThieuCreateComponent, NguoiGioiThieuUpdateComponent, NguoiGioiThieuSharedComponent],
  imports: [
    NguoiGioiThieuRoutingModule,
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
  ],
  providers: [
    NguoiGioiThieuService,
    { provide: BaseService,    useClass: NguoiGioiThieuService },
  ]
})
export class NguoiGioiThieuModule { }
