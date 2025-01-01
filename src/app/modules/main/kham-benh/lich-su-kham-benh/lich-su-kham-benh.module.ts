import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LichSuKhamBenhRoutingModule } from './lich-su-kham-benh-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { LichSuKhamBenhListComponent } from './lich-su-kham-benh-list/lich-su-kham-benh-list.component';
import { KhamBenhModule } from '../kham-benh.module';
import { ToaThuocKhamBenhConfirmComponent } from './toa-thuoc-kham-benh-confirm/toa-thuoc-kham-benh-confirm.component';
import { ToaThuocKhamBenhPopupComponent } from './toa-thuoc-kham-benh-popup/toa-thuoc-kham-benh-popup.component';
import { PopupMessageKhongCoDichVuVuInComponent } from './popup-message-khong-co-dich-vu-vu-in/popup-message-khong-co-dich-vu-vu-in.component';
import { QuayThuocModule } from '../../quay-thuoc/quay-thuoc.module';

@NgModule({
  declarations:
    [
      LichSuKhamBenhListComponent,
      ToaThuocKhamBenhConfirmComponent,
      ToaThuocKhamBenhPopupComponent,
      PopupMessageKhongCoDichVuVuInComponent,
    ],
  imports: [
    CommonModule,
    LichSuKhamBenhRoutingModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
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
    ImageDrawingModule,
    KhamBenhModule,
    MatCheckboxModule,
    QuayThuocModule
  ],
  entryComponents: [
    ToaThuocKhamBenhConfirmComponent,
    ToaThuocKhamBenhPopupComponent,
    PopupMessageKhongCoDichVuVuInComponent
  ]
})
export class LichSuKhamBenhModule { }
