import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BaoCaoTinhHinhBenhTatTuVongRoutingModule } from './bao-cao-tinh-hinh-benh-tat-tu-vong-routing.module';
import { DanhSachBaoCaoTinhHinhBenhTatTuVongComponent } from './ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component';

@NgModule({
  declarations: [DanhSachBaoCaoTinhHinhBenhTatTuVongComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    BaoCaoTinhHinhBenhTatTuVongRoutingModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    GridModule,
  ]
})
export class BaoCaoTinhHinhBenhTatTuVongModule { }
