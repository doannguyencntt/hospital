import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

import { HoSoNhanVienRoutingModule } from './ho-so-nhan-vien-routing.module';
import { HoSoNhanVienService } from './ho-so-nhan-vien.service';
import { HoSoNhanVienListComponent } from './ho-so-nhan-vien-list/ho-so-nhan-vien-list.component';
import { HoSoNhanVienShareComponent } from './ho-so-nhan-vien-share/ho-so-nhan-vien-share.component';
import { HoSoNhanVienCreateComponent } from './ho-so-nhan-vien-create/ho-so-nhan-vien-create.component';
import { HoSoNhanVienUpdateComponent } from './ho-so-nhan-vien-update/ho-so-nhan-vien-update.component';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
     HoSoNhanVienListComponent,
     HoSoNhanVienShareComponent, 
     HoSoNhanVienCreateComponent, 
     HoSoNhanVienUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSelectModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    InputsModule,
    MatRadioModule,
    HoSoNhanVienRoutingModule
  ],
  providers: [
    HoSoNhanVienService,
    { provide: BaseService, useClass: HoSoNhanVienService },
  ]
})
export class HoSoNhanVienModule { }
