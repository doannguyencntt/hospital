import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoHieuQuaCongViecListComponent } from './bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaoCaoHieuQuaCongViecRoutingModule } from './bao-cao-hieu-qua-cong-viec-routing.module';
import { IconModule } from '@visurel/iconify-angular';



@NgModule({
  declarations: [BaoCaoHieuQuaCongViecListComponent],
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
    BaoCaoHieuQuaCongViecRoutingModule,
    MatCheckboxModule,
  ]
})
export class BaoCaoHieuQuaCongViecModule { }
