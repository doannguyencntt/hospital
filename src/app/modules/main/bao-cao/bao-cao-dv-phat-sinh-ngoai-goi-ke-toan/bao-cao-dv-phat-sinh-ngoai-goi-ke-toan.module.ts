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
import { BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent } from './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component';
import { BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule } from './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-routing.module';
import { BaoCaoDvPhatSinhNgoaiGoiKeToanService } from './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.service';



@NgModule({
  declarations: [BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent],
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
    BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule,
  ],
  providers: [
    BaoCaoDvPhatSinhNgoaiGoiKeToanService,
    { provide: BaseService, useClass: BaoCaoDvPhatSinhNgoaiGoiKeToanService},
  ],
  entryComponents: [
    
  ]
})
export class BaoCaoDvPhatSinhNgoaiGoiKeToanModule { }
