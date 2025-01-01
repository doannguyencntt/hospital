import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { TrangChuComponent } from './trang-chu.component';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MatButtonModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from '@progress/kendo-angular-charts';


@NgModule({
  declarations: [TrangChuComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatButtonModule,
    ContainerModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,    
    FormsModule,
    DateInputsModule,
    SharedModule,
    ChartsModule
  ]
})
export class TrangChuModule { }
