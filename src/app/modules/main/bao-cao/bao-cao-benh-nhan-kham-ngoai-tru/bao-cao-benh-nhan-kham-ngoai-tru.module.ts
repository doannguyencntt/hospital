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
import { BaoCaoBenhNhanKhamNgoaiTruRoutingModule } from './bao-cao-benh-nhan-kham-ngoai-tru-routing.module';
import { BaoCaoBenhNhanKhamNgoaiTruListComponent } from './bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component';
import { BaoCaoBenhNhanKhamNgoaiTruService } from './bao-cao-benh-nhan-kham-ngoai-tru.service';
import { BaoCaoBenhNhanKhamNgoaiPopupComponent } from './bao-cao-benh-nhan-kham-ngoai-popup/bao-cao-benh-nhan-kham-ngoai-popup.component';

@NgModule({
  declarations: [
    BaoCaoBenhNhanKhamNgoaiTruListComponent,
    BaoCaoBenhNhanKhamNgoaiPopupComponent
  ],
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
    BaoCaoBenhNhanKhamNgoaiPopupComponent
  ]
})
export class BaoCaoBenhNhanKhamNgoaiTruModule { }
