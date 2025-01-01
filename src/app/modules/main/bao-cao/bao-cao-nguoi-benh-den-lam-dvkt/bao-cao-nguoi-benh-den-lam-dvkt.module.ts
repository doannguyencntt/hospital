import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';

import { BaoCaoNguoiBenhDenLamDvktRoutingModule } from './bao-cao-nguoi-benh-den-lam-dvkt-routing.module';
import { BaoCaoNguoiBenhDenLamDvktListComponent } from './bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component';


@NgModule({
  declarations: [BaoCaoNguoiBenhDenLamDvktListComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    GridModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    BaoCaoNguoiBenhDenLamDvktRoutingModule
  ]
})
export class BaoCaoNguoiBenhDenLamDvktModule { }
