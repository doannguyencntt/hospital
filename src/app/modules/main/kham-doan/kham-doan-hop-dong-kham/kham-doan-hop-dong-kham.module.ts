import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanHopDongKhamRoutingModule } from './kham-doan-hop-dong-kham-routing.module';
import { KhamDoanHopDongKhamListComponent } from './kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component';
import { KhamDoanHopDongKhamDetailPopupComponent } from './kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component';
import { KhamDoanHopDongKhamListNhanVienPopupComponent } from './kham-doan-hop-dong-kham-list-nhan-vien-popup/kham-doan-hop-dong-kham-list-nhan-vien-popup.component';
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
import { KhamDoanHopDongKhamChonFilePopupComponent } from './kham-doan-hop-dong-kham-chon-file-popup/kham-doan-hop-dong-kham-chon-file-popup.component';
import { KhamDoanGoiKhamSucKhoeModule } from '../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.module';
import { KhamDoanHopDongKhamTimNhanVienPopupComponent } from './kham-doan-hop-dong-kham-tim-nhan-vien-popup/kham-doan-hop-dong-kham-tim-nhan-vien-popup.component';
import { HopDongKhamChonGoiKhamFilePopupComponent } from './goi-kham-suc-khoe-chon-file-popup/goi-kham-suc-khoe-chon-file-popup.component';
import { DanhSachPhongKhamCongTyComponent } from './danh-sach-phong-kham-cong-ty-popup/danh-sach-phong-kham-cong-ty-popup.component';
import { ThongTinNhanVienPopupComponent } from './thong-tin-nhan-vien-popup/thong-tin-nhan-vien-popup.component';
import { ThongTinGoiKhamPopupComponent } from './thong-tin-goi-kham-popup/thong-tin-goi-kham-popup.component';
import { ThongTinKetThucHopDongPopupComponent } from './thong-tin-ket-thuc-hop-popup/thong-tin-ket-thuc-hop-popup.component';
import { KhamDoanDvThongKePopupComponent } from './kham-doan-dv-thong-ke-popup/kham-doan-dv-thong-ke-popup.component';
import { KhamDoanDvGoiKhamPopupComponent } from './kham-doan-dv-goi-kham-popup/kham-doan-dv-goi-kham-popup.component';
import { MoLaiHopDongKhamComponent } from './mo-lai-hop-dong-kham-popup/mo-lai-hop-dong-kham-popup.component';


@NgModule({
  declarations: [
    KhamDoanHopDongKhamListComponent, 
    KhamDoanHopDongKhamDetailPopupComponent, 
    KhamDoanHopDongKhamListNhanVienPopupComponent, 
    KhamDoanHopDongKhamChonFilePopupComponent, 
    KhamDoanHopDongKhamTimNhanVienPopupComponent,
    HopDongKhamChonGoiKhamFilePopupComponent,
    ThongTinNhanVienPopupComponent ,
    ThongTinGoiKhamPopupComponent,
    DanhSachPhongKhamCongTyComponent,
    ThongTinKetThucHopDongPopupComponent,
    KhamDoanDvThongKePopupComponent,
    KhamDoanDvGoiKhamPopupComponent,
    MoLaiHopDongKhamComponent
  ],
  imports: [
    CommonModule,
    KhamDoanHopDongKhamRoutingModule,
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
    KhamDoanGoiKhamSucKhoeModule
  ],
  entryComponents: [
    KhamDoanHopDongKhamDetailPopupComponent, 
    KhamDoanHopDongKhamListNhanVienPopupComponent,
    KhamDoanHopDongKhamChonFilePopupComponent,
    KhamDoanHopDongKhamTimNhanVienPopupComponent,
    HopDongKhamChonGoiKhamFilePopupComponent,
    ThongTinNhanVienPopupComponent,
    ThongTinGoiKhamPopupComponent,
    DanhSachPhongKhamCongTyComponent,
    ThongTinKetThucHopDongPopupComponent,
    KhamDoanDvThongKePopupComponent,
    KhamDoanDvGoiKhamPopupComponent,
    MoLaiHopDongKhamComponent
  ]
})
export class KhamDoanHopDongKhamModule { }
