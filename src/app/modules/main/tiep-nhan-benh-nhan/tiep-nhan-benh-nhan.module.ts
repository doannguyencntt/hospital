import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiepNhanBenhNhanRoutingModule } from './tiep-nhan-benh-nhan-routing.module';
import { TiepNhanBenhNhanComponent } from './tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { TiepNhanBenhNhanService } from './tiep-nhan-benh-nhan.service';
import { BaseService } from 'src/app/core/services/base.service';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TiepNhanBenhNhanPopupComponent } from './tiep-nhan-benh-nhan-popup/tiep-nhan-benh-nhan-popup.component';
import { TiepNhanBenhNhanChoQuetComponent } from './tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component';
import { MatDialogModule, MatInputModule, MatListModule, MatOptionModule, MatRadioModule, MatTabsModule } from '@angular/material';
import { TiepNhanBenhNhanErrorComponent } from './tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TiepNhanBenhNhanPopupHetHieuLucComponent } from './tiep-nhan-benh-nhan-popup-het-hieu-luc/tiep-nhan-benh-nhan-popup-het-hieu-luc.component';
import { TiepNhanBenhNhanPopupKhongKiemTraDuocComponent } from './tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc/tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component';
import { TiepNhanBenhNhanLichSuComponent } from './tiep-nhan-benh-nhan-lich-su/tiep-nhan-benh-nhan-lich-su.component';
import { KhamBenhLichSuKhamListComponent } from '../kham-benh/kham-benh/kham-benh-lich-su-kham-list/kham-benh-lich-su-kham-list.component';
import { KhamBenhModule } from '../kham-benh/kham-benh.module';
import { TiepNhanBenhNhanPopupLichSuKcbComponent } from './tiep-nhan-benh-nhan-popup-lich-su-kcb/tiep-nhan-benh-nhan-popup-lich-su-kcb.component';
import { PopupTimKiemBenhNhanComponent } from './popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component';
import { TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent } from './tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt/tiep-nhan-benh-nhan-popup-lich-su-kiem-tra-the-bhyt.component';
import { TiepNhanBenhNhanTaiKhamComponent } from './tiep-nhan-benh-nhan-tai-kham/tiep-nhan-benh-nhan-tai-kham.component';
import { InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent } from './in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup/in-phieu-dang-ky-kham-tiep-nhan-benh-nhan-popup.component';
import { PopupMarketingTiepNhanBenhNhanComponent } from './popup-marketing-tiep-nhan-benh-nhan/popup-marketing-tiep-nhan-benh-nhan.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupMarketingCheckTrungComponent } from './popup-marketing-check-trung/popup-marketing-check-trung.component';
import { PopupDichVuCheckTrungComponent } from './popup-dich-vu-check-trung/popup-dich-vu-check-trung.component';
import { DichVuKhuyenMaiModule } from '../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module';
import { XemTruocBangKeChiPhiPopupComponent } from './xem-truoc-bang-ke-chi-phi-poup/xem-truoc-bang-ke-chi-phi-poup.component';
import { InPhieuXnCovidComponent } from './in-phieu-xn-covid/in-phieu-xn-covid.component';
import { XnCovidPopupComponent } from './xn-covid-popup/xn-covid-popup.component';

@NgModule({
  declarations: [TiepNhanBenhNhanComponent
    , TiepNhanBenhNhanPopupComponent, TiepNhanBenhNhanChoQuetComponent
    , TiepNhanBenhNhanErrorComponent, TiepNhanBenhNhanPopupHetHieuLucComponent
    , TiepNhanBenhNhanPopupKhongKiemTraDuocComponent,XemTruocBangKeChiPhiPopupComponent
    , TiepNhanBenhNhanLichSuComponent, TiepNhanBenhNhanPopupLichSuKcbComponent, 
    PopupTimKiemBenhNhanComponent, TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent, 
    TiepNhanBenhNhanTaiKhamComponent, InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent, PopupMarketingTiepNhanBenhNhanComponent, 
    PopupMarketingCheckTrungComponent, PopupDichVuCheckTrungComponent, InPhieuXnCovidComponent,XnCovidPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
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
    TiepNhanBenhNhanRoutingModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    GridModule,
    KhamBenhModule,
    InputsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatOptionModule,
    MatRadioModule,
    MatListModule,
    DropDownsModule,
    DichVuKhuyenMaiModule
  ],
  providers: [
    TiepNhanBenhNhanService,
    { provide: BaseService, useClass: TiepNhanBenhNhanService },
  ],
  exports: [
    KhamBenhModule
  ],
  entryComponents: [
    TiepNhanBenhNhanPopupComponent,
    TiepNhanBenhNhanChoQuetComponent,
    TiepNhanBenhNhanErrorComponent,
    TiepNhanBenhNhanPopupHetHieuLucComponent,
    TiepNhanBenhNhanPopupKhongKiemTraDuocComponent,
    TiepNhanBenhNhanPopupLichSuKcbComponent,
    PopupTimKiemBenhNhanComponent,
    TiepNhanBenhNhanPopupLichSuKiemTraTheBhytComponent,
    InPhieuDangKyKhamTiepNhanBenhNhanPopupComponent,
    PopupMarketingTiepNhanBenhNhanComponent,
    PopupMarketingCheckTrungComponent,
    PopupDichVuCheckTrungComponent,
    XemTruocBangKeChiPhiPopupComponent,
    XnCovidPopupComponent,
    InPhieuXnCovidComponent
  ],

})
export class TiepNhanBenhNhanModule { }
