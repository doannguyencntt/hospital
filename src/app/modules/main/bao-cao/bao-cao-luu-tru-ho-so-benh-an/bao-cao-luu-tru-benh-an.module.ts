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
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BaoCaoLuuTruBenhAnComponent } from './bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component';
import { BaseService } from 'src/app/core/services/base.service';
import { BaoCaoLuuTruBenhAnService } from './bao-cao-luu-tru-benh-an.service';
import { BaoCaoLuuTruBenhAnRoutingModule } from './bao-cao-luu-tru-benh-an-routing.module';
import { BaoCaoLuuTruBenhAnPopupComponent } from './bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [BaoCaoLuuTruBenhAnComponent, BaoCaoLuuTruBenhAnPopupComponent],
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
    MatCheckboxModule,
    BaoCaoLuuTruBenhAnRoutingModule
  ],
  providers: [
    BaoCaoLuuTruBenhAnService,
    { provide: BaseService, useClass: BaoCaoLuuTruBenhAnService },
  ],
  entryComponents: [
    BaoCaoLuuTruBenhAnPopupComponent
  ]
})
export class BaoCaoLuuTruBenhAnModule { }
