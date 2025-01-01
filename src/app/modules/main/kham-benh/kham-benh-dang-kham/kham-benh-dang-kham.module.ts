import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamBenhDangKhamRoutingModule } from './kham-benh-dang-kham-routing.module';
import { KhamBenhDangKhamListComponent } from './kham-benh-dang-kham-list/kham-benh-dang-kham-list.component';
import { KhamBenhDangKhamTheoPhongKhamComponent } from './kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component';
import { KhamBenhDangKhamTheoPhongKhamChiTietComponent } from './kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component';
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
import { ImageDrawingModule } from 'ngx-image-drawing';
import { KhamBenhModule } from '../kham-benh.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [
    KhamBenhDangKhamListComponent, 
    KhamBenhDangKhamTheoPhongKhamComponent, 
    KhamBenhDangKhamTheoPhongKhamChiTietComponent
  ],
  imports: [
    CommonModule,
    KhamBenhDangKhamRoutingModule,
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
    ImageDrawingModule,
    KhamBenhModule,
    MatCheckboxModule
  ],
  entryComponents: [
    //KhamBenhDangKhamTheoPhongKhamComponent
  ]
})
export class KhamBenhDangKhamModule { }
