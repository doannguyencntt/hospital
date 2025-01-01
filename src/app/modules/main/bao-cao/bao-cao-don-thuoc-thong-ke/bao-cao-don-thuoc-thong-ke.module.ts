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
import { MatDialogModule } from '@angular/material';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { BaoCaoDonThuocThongKeListComponent } from './bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component';
import { BaoCaoDonThuocThongKeRoutingModule } from './bao-cao-don-thuoc-thong-ke-routing.module';
import { BaoCaoDonThuocThongKeService } from './bao-cao-don-thuoc-thong-ke.service';



@NgModule({
  declarations: [BaoCaoDonThuocThongKeListComponent],
  imports: [
    CommonModule,
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
    BaoCaoDonThuocThongKeRoutingModule,
  ],
  providers: [
    BaoCaoDonThuocThongKeService,
    { provide: BaseService, useClass: BaoCaoDonThuocThongKeService},
  ]
  // ,
  //entryComponents: [
  // ]
})
export class BaoCaoDonThuocThongKeModule { }
