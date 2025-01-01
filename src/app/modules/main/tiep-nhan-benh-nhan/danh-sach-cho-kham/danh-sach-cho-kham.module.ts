import { VongDeoTayPopupComponent } from './vong-deo-tay-popup/vong-deo-tay-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachChoKhamRoutingModule } from './danh-sach-cho-kham-routing.module';
import { DanhSachChoKhamListComponent } from './danh-sach-cho-kham-list/danh-sach-cho-kham-list.component';
import { DanhSachChoKhamCreateComponent } from './danh-sach-cho-kham-create/danh-sach-cho-kham-create.component';
import { DanhSachChoKhamUpdateComponent } from './danh-sach-cho-kham-update/danh-sach-cho-kham-update.component';
import { DanhSachChoKhamSharedComponent } from './danh-sach-cho-kham-shared/danh-sach-cho-kham-shared.component';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DanhSachChoKhamService } from './danh-sach-cho-kham.service';
import { BaseService } from 'src/app/core/services/base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatRadioModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { DanhSachChoKhamPdfComponent } from './danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component';
import { DanhSachChoKhamPopupComponent } from './danh-sach-cho-kham-popup/danh-sach-cho-kham-popup.component';
import { DanhSachChoKhamChoQuyetComponent } from './danh-sach-cho-kham-cho-quyet/danh-sach-cho-kham-cho-quyet.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DanhSachChoKhamErrorComponent } from './danh-sach-cho-kham-error/danh-sach-cho-kham-error.component';
import { PopupHetHieuLucComponent } from './popup-het-hieu-luc/popup-het-hieu-luc.component';
import { PopupKhongKiemTraDuocComponent } from './popup-khong-kiem-tra-duoc/popup-khong-kiem-tra-duoc.component';
import { PopupChoQuetComponent } from './popup-cho-quet/popup-cho-quet.component';
import { PopupErrorComponent } from './popup-error/popup-error.component';
import { PopupLichSuKhamChuaBenhComponent } from './popup-lich-su-kham-chua-benh/popup-lich-su-kham-chua-benh.component';
import { PopupThemGoiComponent } from './popup-them-goi/popup-them-goi.component';
import { PopupLichSuKiemTraBhytComponent } from './popup-lich-su-kiem-tra-bhyt/popup-lich-su-kiem-tra-bhyt.component';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';
import { TaiKhamComponent } from './tai-kham/tai-kham.component';
import { InBangKeChiPhiKhamBenhComponent } from './popup-in-bang-ke-chi-phi-kham-benh/popup-in-bang-ke-chi-phi-kham-benh.component';
import { HoSoBenhAnPopupComponent } from './ho-so-benh-an-popup/ho-so-benh-an-popup.component';
import { TheBenhNhanPopupComponent } from './the-benh-nhan-popup/the-benh-nhan-popup.component';
import { NghiHuongBhxhTiepNhanPopupComponent } from './nghi-huong-bhxh-tiep-nhan-popup/nghi-huong-bhxh-tiep-nhan-popup.component';
import { NghiHuongBhxhTiepNhanDetailPopupComponent } from './nghi-huong-bhxh-tiep-nhan-detail-popup/nghi-huong-bhxh-tiep-nhan-detail-popup.component';
import { InPhieuDangKyKhamPopupComponent } from './in-phieu-dang-ky-kham-popup/in-phieu-dang-ky-kham-popup.component';
import { PopupMarketingTnbnUpdateComponent } from './popup-marketing-tnbn-update/popup-marketing-tnbn-update.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupDichVuCheckTrungUpdateComponent } from './popup-dich-vu-check-trung-update/popup-dich-vu-check-trung-update.component';
import { PopupMarketingCheckTrungUpdateComponent } from './popup-marketing-check-trung-update/popup-marketing-check-trung-update.component';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { ChoThuTienNoiTruModule } from '../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module';
import { HuyDichVuHuyThanhToanPopupComponent } from './huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { DichVuKhuyenMaiModule } from '../../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module';
import { TiepNhanBenhNhanModule } from '../tiep-nhan-benh-nhan.module';

@NgModule({
  declarations: [
    DanhSachChoKhamListComponent,
    DanhSachChoKhamCreateComponent,
    DanhSachChoKhamUpdateComponent,
    DanhSachChoKhamSharedComponent,
    DanhSachChoKhamPdfComponent,
    DanhSachChoKhamChoQuyetComponent,
    DanhSachChoKhamPopupComponent,
    DanhSachChoKhamErrorComponent,
    PopupHetHieuLucComponent,
    PopupKhongKiemTraDuocComponent,
    PopupChoQuetComponent,
    PopupErrorComponent,
    PopupLichSuKhamChuaBenhComponent,
    PopupThemGoiComponent,
    PopupLichSuKiemTraBhytComponent,
    InBangKeChiPhiKhamBenhComponent,
    TaiKhamComponent,
    HoSoBenhAnPopupComponent,
    TheBenhNhanPopupComponent,
    NghiHuongBhxhTiepNhanPopupComponent,
    NghiHuongBhxhTiepNhanDetailPopupComponent,
    VongDeoTayPopupComponent,
    InPhieuDangKyKhamPopupComponent,
    PopupMarketingTnbnUpdateComponent,
    PopupDichVuCheckTrungUpdateComponent,
    PopupMarketingCheckTrungUpdateComponent,
    HuyDichVuHuyThanhToanPopupComponent     
  ],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    DanhSachChoKhamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    InputsModule,
    KhamBenhModule,
    ChoThuTienNoiTruModule,
    MatInputModule,
    MatOptionModule,
    MatRadioModule,
    MatListModule,    
    DropDownsModule,
    MatCheckboxModule,
    DropDownButtonModule,
    DichVuKhuyenMaiModule,
    TiepNhanBenhNhanModule
  ], providers: [
    DanhSachChoKhamService,
    { provide: BaseService, useClass: DanhSachChoKhamService },
  ],
  entryComponents: [
    DanhSachChoKhamPopupComponent,
    DanhSachChoKhamChoQuyetComponent,
    DanhSachChoKhamErrorComponent,
    PopupHetHieuLucComponent,
    PopupKhongKiemTraDuocComponent,
    PopupChoQuetComponent,
    PopupErrorComponent,
    PopupLichSuKhamChuaBenhComponent,
    PopupThemGoiComponent,
    InBangKeChiPhiKhamBenhComponent,
    PopupLichSuKiemTraBhytComponent,
    HoSoBenhAnPopupComponent,
    TheBenhNhanPopupComponent,
    NghiHuongBhxhTiepNhanPopupComponent,
    NghiHuongBhxhTiepNhanDetailPopupComponent,
    VongDeoTayPopupComponent,
    InPhieuDangKyKhamPopupComponent,
    PopupMarketingTnbnUpdateComponent,
    PopupDichVuCheckTrungUpdateComponent,
    PopupMarketingCheckTrungUpdateComponent,
    HuyDichVuHuyThanhToanPopupComponent
]
})
export class DanhSachChoKhamModule { }
