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
import { BaseService } from 'src/app/core/services/base.service';
import { MatDialogModule } from '@angular/material';
import { BaoCaoBsDsKhamNgoaiTruComponent } from './bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component';
import { BaoCaoBsDsKhamNgoaiTruPopupComponent } from './bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component';
import { BaoCaoBenhNhanKhamNgoaiTruRoutingModule } from './bao-cao-benh-nhan-kham-ngoai-tru-routing.module';
import { BaoCaoBenhNhanKhamNgoaiTruService } from './bao-cao-benh-nhan-kham-ngoai-tru.service';



@NgModule({
  declarations: [BaoCaoBsDsKhamNgoaiTruComponent, BaoCaoBsDsKhamNgoaiTruPopupComponent],
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
    BaoCaoBenhNhanKhamNgoaiTruRoutingModule
  ],
  providers: [
    BaoCaoBenhNhanKhamNgoaiTruService,
    { provide: BaseService, useClass: BaoCaoBenhNhanKhamNgoaiTruService},
  ],
  entryComponents: [
    BaoCaoBsDsKhamNgoaiTruPopupComponent
  ]
})
export class BaoCaoBenhNhanKhamNgoaiTruModule { }
