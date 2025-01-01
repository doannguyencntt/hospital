import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');
import { PhauThuatThuThuatRoutingModule } from './phau-thuat-thu-thuat-routing.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import {
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule
} from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PhauThuatThuThuatService } from './phau-thuat-thu-thuat.service';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { PhauThuatThuThuatTheoNgayComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-ngay.component';
import {
    PhauThuatThuThuatGhiNhanComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan/pttt-ghi-nhan.component';
import {
    PhauThuatThuThuatTuongTrinhPTTTComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-tuong-trinh-pttt/pttt-tuong-trinh-pttt.component';
import {
    PhauThuatThuThuatLuocDoPopupComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-luoc-do-popup/phau-thuat-thu-thuat-luoc-do-popup.component';
import {
    PhauThuatThuThuatEkipThucHienComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ekip-thuc-hien/pttt-ekip-thuc-hien.component';
import {
    PhauThuatThuThuatKetLuanComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-ket-luan/phau-thuat-thu-thuat-ket-luan.component';
import {
    PhauThuatThuThuatTheoDoiComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-doi/phau-thuat-thu-thuat-theo-doi.component';
import {
    PhauThuatThuThuatBenhNhanDaPhauThuatComponent
// tslint:disable-next-line: max-line-length
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-benh-nhan-da-phau-thuat/phau-thuat-thu-thuat-benh-nhan-da-phau-thuat.component';
import {
    PhauThuatThuThuatTheoDoiCoQuanComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-doi/pttt-theo-doi-co-quan/pttt-theo-doi-co-quan.component';
import {
    PhauThuatThuThuatTheoDoiSinhTonComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-doi/pttt-theo-doi-sinh-ton/pttt-theo-doi-sinh-ton.component';
import {
    PhauThuatThuThuatEkipThucHienNvComponent
// tslint:disable-next-line: max-line-length
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ekip-thuc-hien/pttt-ekip-thuc-hien-nv/pttt-ekip-thuc-hien-nv.component';
import {
    PhauThuatThuThuatCanLamSanComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/phau-thuat-thu-thuat-can-lam-san.component';
import {
    PhauThuatThuThuatTuVongPopupComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tu-vong-popup/phau-thuat-thu-thuat-tu-vong-popup.component';
import {
    PhauThuatThuThuatTuongTrinhComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/phau-thuat-thu-thuat-tuong-trinh.component';
import {
    PhauThuatThuThuatSinhTonComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-sinh-ton/pttt-sinh-ton.component';
import {
    PhauThuatThuThuatBnTiepTheoPopupComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-bn-tiep-theo-popup/phau-thuat-thu-thuat-bn-tiep-theo-popup.component';
import {
    PtttTheoDoiBoPhanKhacComponent
} from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-doi/pttt-theo-doi-bo-phan-khac/pttt-theo-doi-bo-phan-khac.component';
import {
    BenhNhanDaHoanThanhPtttPopupComponent
} from './phau-thuat-thu-thuat-theo-ngay/benh-nhan-da-hoan-thanh-pttt-popup/benh-nhan-da-hoan-thanh-pttt-popup.component';
import {
    PtttKetThucTuongTrinhPopupComponent
} from './phau-thuat-thu-thuat-theo-ngay/pttt-ket-thuc-tuong-trinh-popup/pttt-ket-thuc-tuong-trinh-popup.component';
import { KhongThucHienPtttPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/khong-thuc-hien-pttt-popup/khong-thuc-hien-pttt-popup.component';
import { PtttClsInChiDinhComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/pttt-cls-in-chi-dinh/pttt-cls-in-chi-dinh.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { KhongThucHienPtttListPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/khong-thuc-hien-pttt-list-popup/khong-thuc-hien-pttt-list-popup.component';
import { LichSuDvKhongThucHienComponent } from './phau-thuat-thu-thuat-theo-ngay/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component';
import { PtttClsKqPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/pttt-cls-kq-popup/pttt-cls-kq-popup.component';
import { PtttClsGoiDichVuPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/pttt-cls-goi-dich-vu-popup/pttt-cls-goi-dich-vu-popup.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from '../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { KhamBenhModule } from '../kham-benh/kham-benh.module';
import { PttClsChayLaiXnPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-can-lam-san/ptt-cls-chay-lai-xn-popup/ptt-cls-chay-lai-xn-popup.component';
import { DichVuKhuyenMaiModule } from '../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module';
import { PtttGhiNhanHoanTraPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan-hoan-tra-popup/pttt-ghi-nhan-hoan-tra-popup.component';
import { PtttGhiNhanCapNhatPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan-cap-nhat-popup/pttt-ghi-nhan-cap-nhat-popup.component';
import { LayMauXetNghiemModule } from '../xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module';
import { PtttDpVtTuGoiPopupComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-dp-vt-tu-goi-popup/pttt-dp-vt-tu-goi-popup.component';

@NgModule({
    declarations: [
        PhauThuatThuThuatTheoNgayComponent,
        PhauThuatThuThuatTuongTrinhPTTTComponent,
        PhauThuatThuThuatGhiNhanComponent,
        PhauThuatThuThuatEkipThucHienComponent,
        PhauThuatThuThuatKetLuanComponent,
        PhauThuatThuThuatTheoDoiComponent,
        PhauThuatThuThuatBenhNhanDaPhauThuatComponent,
        PhauThuatThuThuatTheoDoiCoQuanComponent,
        PhauThuatThuThuatTheoDoiSinhTonComponent,
        PhauThuatThuThuatEkipThucHienNvComponent,
        PhauThuatThuThuatCanLamSanComponent,
        PhauThuatThuThuatLuocDoPopupComponent,
        PhauThuatThuThuatTuVongPopupComponent,
        PhauThuatThuThuatTuongTrinhComponent,
        PhauThuatThuThuatSinhTonComponent,
        PhauThuatThuThuatBnTiepTheoPopupComponent,
        PtttTheoDoiBoPhanKhacComponent,
        BenhNhanDaHoanThanhPtttPopupComponent,
        PtttKetThucTuongTrinhPopupComponent,
        KhongThucHienPtttPopupComponent,
        PtttClsInChiDinhComponent,
        KhongThucHienPtttListPopupComponent,
        LichSuDvKhongThucHienComponent,
        PtttClsKqPopupComponent,
        PtttClsGoiDichVuPopupComponent,
        PttClsChayLaiXnPopupComponent,
        PtttGhiNhanHoanTraPopupComponent,
        PtttGhiNhanCapNhatPopupComponent,
        PtttDpVtTuGoiPopupComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        CommonModule,
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
        MatCheckboxModule,
        PhauThuatThuThuatRoutingModule,
        ScrollToModule.forRoot(),
        GridModule,
        IntlModule,
        MatRadioModule,
        ImageDrawingModule,
        PdfViewerModule,
        KhamBenhModule,
        DichVuKhuyenMaiModule,
        LayMauXetNghiemModule
    ],
    providers: [
        PhauThuatThuThuatService,
        {
            provide: PhauThuatThuThuatService, useClass: PhauThuatThuThuatService
        }
    ],
    entryComponents: [
        PhauThuatThuThuatLuocDoPopupComponent,
        PhauThuatThuThuatTuVongPopupComponent,
        PhauThuatThuThuatBnTiepTheoPopupComponent,
        BenhNhanDaHoanThanhPtttPopupComponent,
        PtttKetThucTuongTrinhPopupComponent,
        KhongThucHienPtttPopupComponent,
        PtttClsInChiDinhComponent,
        KhongThucHienPtttListPopupComponent,
        LichSuDvKhongThucHienComponent,
        PtttClsKqPopupComponent,
        PtttClsGoiDichVuPopupComponent,
        LanKhamHienTaiSuDungGoiDichVuPopupComponent,
        PttClsChayLaiXnPopupComponent,
        PtttGhiNhanHoanTraPopupComponent,
        PtttGhiNhanCapNhatPopupComponent,
        PtttDpVtTuGoiPopupComponent
    ]
})
export class PhauThuatThuThuatModule { }
