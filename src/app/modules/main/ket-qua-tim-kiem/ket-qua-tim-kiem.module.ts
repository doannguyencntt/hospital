import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KetQuaTimKiemComponent } from './ket-qua-tim-kiem.component';
import { KetQuaTimKiemRoutingModule } from './ket-qua-tim-kiem-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    KetQuaTimKiemRoutingModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatButtonModule,
    ContainerModule,
    FormsModule,
    SharedModule
  ],
  declarations: [KetQuaTimKiemComponent]
})
export class KetQuaTimKiemModule { }
