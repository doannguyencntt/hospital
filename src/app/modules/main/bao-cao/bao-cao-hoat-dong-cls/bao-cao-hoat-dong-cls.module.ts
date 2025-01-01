import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoHoatDongClsListComponent } from './bao-cao-hoat-dong-cls-list/bao-cao-hoat-dong-cls-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { BaoCaoHoatDongClsRoutingModule } from './bao-cao-hoat-dong-cls-routing.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BaoCaoHoatDongClsListComponent],
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
    BaoCaoHoatDongClsRoutingModule,
    MatDatepickerModule,
    InputsModule,
    DateInputsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class BaoCaoHoatDongClsModule { }
