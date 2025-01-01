import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiemChungSharedService } from './tiem-chung-shared.service';

import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { TheoDoiSauTiemComponent } from './thong-tin-tiem-chung-shared/theo-doi-sau-tiem/theo-doi-sau-tiem.component';
import { KhamSangLocChungComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/kham-sang-loc-chung.component';
import { ChiDinhComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/chi-dinh.component';
import { ChiSoSinhTonComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-so-sinh-ton/chi-so-sinh-ton.component';
import { DiUngComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/di-ung/di-ung.component';
import { MauSangLocComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/mau-sang-loc/mau-sang-loc.component';
import { TienSuBenhComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/tien-su-benh/tien-su-benh.component';
import { LichSuTiemComponent } from './thong-tin-tiem-chung-shared/lich-su-tiem/lich-su-tiem.component';
import { ThucHienTiemChungComponent } from './thong-tin-tiem-chung-shared/thuc-hien-tiem-chung/thuc-hien-tiem-chung.component';
import { ThongTinMuiTiemComponent } from './thong-tin-tiem-chung-shared/thuc-hien-tiem-chung/thong-tin-mui-tiem/thong-tin-mui-tiem.component';
import { DichVuComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/dich-vu/dich-vu.component';
import { ThuocVatTuComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/thuoc-vat-tu/thuoc-vat-tu.component';
import { VacXinComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/vac-xin/vac-xin.component';
import { LichSuTiemChungChiTietSharedComponent } from './lich-su-tiem-chung-chi-tiet-shared/lich-su-tiem-chung-chi-tiet-shared.component';
import { ThongTinTiemChungSharedComponent } from './thong-tin-tiem-chung-shared/thong-tin-tiem-chung-shared.component';
import { HangDoiSharedComponent } from './hang-doi-shared/hang-doi-shared.component';
import { LichSuTiemChungPopupSharedComponent } from './lich-su-tiem-chung-popup-shared/lich-su-tiem-chung-popup-shared.component';
import { ThuocVatTuCapNhatPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/thuoc-vat-tu-cap-nhat-popup/thuoc-vat-tu-cap-nhat-popup.component';
import { ThuocVatTuHoanTraPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/thuoc-vat-tu-hoan-tra-popup/thuoc-vat-tu-hoan-tra-popup.component';
import { DichVuChiDinhBacSiKhacPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/dich-vu-chi-dinh-bac-si-khac-popup/dich-vu-chi-dinh-bac-si-khac-popup.component';
import { DichVuNhomDvThuongDungPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/dich-vu-nhom-dv-thuong-dung-popup/dich-vu-nhom-dv-thuong-dung-popup.component';
import { DichVuNhomDichVuLoiPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/dich-vu-nhom-dich-vu-loi-popup/dich-vu-nhom-dich-vu-loi-popup.component';
import { DichVuKhuyenMaiPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { HuyDvDaHuyThanhToanPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/huy-dv-da-huy-thanh-toan-popup/huy-dv-da-huy-thanh-toan-popup.component';
import { SuDungGoiDichVuPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/su-dung-goi-dich-vu-popup/su-dung-goi-dich-vu-popup.component';
import { NhomDichVuLoiPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/nhom-dich-vu-loi-popup/nhom-dich-vu-loi-popup.component';
import { CapNhatTtThucHienDvktPopupComponent } from './thong-tin-tiem-chung-shared/kham-sang-loc-chung/chi-dinh/cap-nhat-tt-thuc-hien-dvkt-popup/cap-nhat-tt-thuc-hien-dvkt-popup.component';
import { KhamBenhModule } from '../../kham-benh/kham-benh.module';
import { PhauThuatThuThuatModule } from '../../phau-thuat-thu-thuat/phau-thuat-thu-thuat.module';
import { BenhNhanTiemChungTiepTheoPopupComponent } from './benh-nhan-tiem-chung-tiep-theo-popup/benh-nhan-tiem-chung-tiep-theo-popup.component';
import { HoanThanhKhamListSharedComponent } from './hoan-thanh-kham-list-shared/hoan-thanh-kham-list-shared.component';
import { HoanThanhKhamTiemChungDetailPopupComponent } from './hoan-thanh-kham-tiem-chung-detail-popup/hoan-thanh-kham-tiem-chung-detail-popup.component';
import { PopupInBanKiemTruocTiemComponent } from './thong-tin-tiem-chung-shared/popup-in-ban-kiem-truoc-tiem/popup-in-ban-kiem-truoc-tiem.component';
import { TiemChungSuDungGoiDichVuPopupComponent } from './tiem-chung-su-dung-goi-dich-vu-popup/tiem-chung-su-dung-goi-dich-vu-popup.component';
import { TiemChungNhomDichVuLoiPopupComponent } from './tiem-chung-nhom-dich-vu-loi-popup/tiem-chung-nhom-dich-vu-loi-popup.component';


@NgModule({
    declarations: [
        TheoDoiSauTiemComponent,
        KhamSangLocChungComponent,
        ChiDinhComponent,
        DichVuComponent,
        ThuocVatTuComponent,
        VacXinComponent,
        ChiSoSinhTonComponent,
        DiUngComponent,
        MauSangLocComponent,
        TienSuBenhComponent,
        LichSuTiemComponent,
        ThucHienTiemChungComponent,
        ThongTinMuiTiemComponent,
        LichSuTiemChungChiTietSharedComponent,
        ThongTinTiemChungSharedComponent,
        HangDoiSharedComponent,
        LichSuTiemChungPopupSharedComponent,
        ThuocVatTuCapNhatPopupComponent,
        ThuocVatTuHoanTraPopupComponent,
        DichVuChiDinhBacSiKhacPopupComponent,
        DichVuNhomDvThuongDungPopupComponent,
        DichVuNhomDichVuLoiPopupComponent,
        DichVuKhuyenMaiPopupComponent,
        HuyDvDaHuyThanhToanPopupComponent,
        SuDungGoiDichVuPopupComponent,
        NhomDichVuLoiPopupComponent,
        CapNhatTtThucHienDvktPopupComponent,
        BenhNhanTiemChungTiepTheoPopupComponent,
        HoanThanhKhamListSharedComponent,
        HoanThanhKhamTiemChungDetailPopupComponent,
        PopupInBanKiemTruocTiemComponent,
        TiemChungSuDungGoiDichVuPopupComponent,
        TiemChungNhomDichVuLoiPopupComponent
    ],
    exports:[
        TheoDoiSauTiemComponent,
        KhamSangLocChungComponent,
        LichSuTiemComponent,
        ThucHienTiemChungComponent,
        LichSuTiemChungChiTietSharedComponent,
        ThongTinTiemChungSharedComponent,
        HangDoiSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        LayoutModule,
        MatDialogModule,
        MatTabsModule,
        SharedModule,
        GridModule,
        InputsModule,

        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        DropDownsModule,
        ChartsModule,
        MatSelectModule,

        KhamBenhModule,
        PhauThuatThuThuatModule
    ],
    entryComponents: [
        LichSuTiemChungPopupSharedComponent,
        ThuocVatTuCapNhatPopupComponent,
        ThuocVatTuHoanTraPopupComponent,
        DichVuChiDinhBacSiKhacPopupComponent,
        DichVuNhomDvThuongDungPopupComponent,
        DichVuNhomDichVuLoiPopupComponent,
        DichVuKhuyenMaiPopupComponent,
        HuyDvDaHuyThanhToanPopupComponent,
        SuDungGoiDichVuPopupComponent,
        NhomDichVuLoiPopupComponent,
        CapNhatTtThucHienDvktPopupComponent,
        BenhNhanTiemChungTiepTheoPopupComponent,
        HoanThanhKhamTiemChungDetailPopupComponent,
        PopupInBanKiemTruocTiemComponent,
        TiemChungSuDungGoiDichVuPopupComponent,
        TiemChungNhomDichVuLoiPopupComponent
    ],
    providers: [
        TiemChungSharedService,
        { provide: BaseService, useClass: TiemChungSharedService },
    ]
})

export class TiemChungSharedModule { }