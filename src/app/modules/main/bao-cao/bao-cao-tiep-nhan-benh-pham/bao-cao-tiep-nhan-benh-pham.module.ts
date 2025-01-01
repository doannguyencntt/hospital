import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { MatDialogModule } from '@angular/material';
import { BaoCaoTiepNhanBenhPhamListComponent } from './bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component';
import { BaoCaoTiepNhanBenhPhamRoutingModule } from './bao-cao-tiep-nhan-benh-pham-routing.module';
import { BaoCaoTiepNhanBenhPhamService } from './bao-cao-tiep-nhan-benh-pham.service';

@NgModule({
  declarations: [BaoCaoTiepNhanBenhPhamListComponent],
  imports: [
    CommonModule,
    BaoCaoTiepNhanBenhPhamRoutingModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    GridModule,
  ],
  providers:[
    BaoCaoTiepNhanBenhPhamService,
    { provide: BaseService, useClass: BaoCaoTiepNhanBenhPhamService},
  ]
})
export class BaoCaoTiepNhanBenhPhamModule { }