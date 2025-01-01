import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiepNhanNoiTruRoutingModule } from './tiep-nhan-noi-tru-routing.module';
import { TiepNhanNoiTruListComponent } from './tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component';
import { TiepNhanNoiTruBenhAnPopupComponent } from './tiep-nhan-noi-tru-benh-an-popup/tiep-nhan-noi-tru-benh-an-popup.component';
import { TiepNhanNoiTruChiDinhPopupComponent } from './tiep-nhan-noi-tru-chi-dinh-popup/tiep-nhan-noi-tru-chi-dinh-popup.component';
import { TiepNhanNoiTruSoDoGiuongPopupComponent } from './tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component';
import { TiepNhanNoiTruThongTinDoiTuongPopupComponent } from './tiep-nhan-noi-tru-thong-tin-doi-tuong-popup/tiep-nhan-noi-tru-thong-tin-doi-tuong-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TiepNhanNoiTruHuyNhapVienPopupComponent } from './tiep-nhan-noi-tru-huy-nhap-vien-popup/tiep-nhan-noi-tru-huy-nhap-vien-popup.component';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';


@NgModule({
  declarations: [
    TiepNhanNoiTruListComponent, 
    TiepNhanNoiTruBenhAnPopupComponent, 
    TiepNhanNoiTruChiDinhPopupComponent, 
    TiepNhanNoiTruSoDoGiuongPopupComponent, 
    TiepNhanNoiTruThongTinDoiTuongPopupComponent, TiepNhanNoiTruHuyNhapVienPopupComponent],
    exports:[
      TiepNhanNoiTruThongTinDoiTuongPopupComponent,
      TiepNhanNoiTruSoDoGiuongPopupComponent
    ],
  imports: [
    CommonModule,
    TiepNhanNoiTruRoutingModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    GridModule,
    IntlModule,
    PdfViewerModule,
    MatRadioModule,
    MatCheckboxModule,
    KhamBenhModule
  ],
  entryComponents: [
    TiepNhanNoiTruBenhAnPopupComponent, 
    TiepNhanNoiTruChiDinhPopupComponent, 
    TiepNhanNoiTruSoDoGiuongPopupComponent, 
    TiepNhanNoiTruThongTinDoiTuongPopupComponent,
    TiepNhanNoiTruHuyNhapVienPopupComponent
  ]
})
export class TiepNhanNoiTruModule { }
