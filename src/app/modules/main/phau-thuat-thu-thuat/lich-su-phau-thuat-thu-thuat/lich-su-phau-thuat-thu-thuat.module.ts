import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichSuPhauThuatThuThuatRoutingModule } from './lich-su-phau-thuat-thu-thuat-routing.module';
import { LichSuPhauThuatThuThuatService } from './lich-su-phau-thuat-thu-thuat.service';
import { BaseService } from 'src/app/core/services/base.service';

import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { ImageDrawingModule } from 'ngx-image-drawing';

import { LichSuPhauThuatThuThuatListComponent } from './lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component';
import { LichSuPhauThuatThuThuatChiTietComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component';
import { LichSuPtttEkipThucHienComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-ekip-thuc-hien.component';
import { LichSuPtttTuongTrinhPtttComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh-pttt/lich-su-pttt-tuong-trinh-pttt.component';
import { LichSuPtttGhiNhanVtThuocComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ghi-nhan-vt-thuoc/lich-su-pttt-ghi-nhan-vt-thuoc.component';
import { LichSuPtttKetLuanComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ket-luan/lich-su-pttt-ket-luan.component';
import { LichSuPtttHoiTinhComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/lich-su-pttt-hoi-tinh.component';
import { LichSuPtttNthComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-ekip-thuc-hien/lich-su-pttt-nth/lich-su-pttt-nth.component';
import { LichSuPttCsSinhTonComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-hoi-tinh/ls-ptt-cs-sinh-ton/ls-ptt-cs-sinh-ton.component';
import { LichSuPtttTuongTrinhComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-tuong-trinh/lich-su-pttt-tuong-trinh.component';
import { LichSuPtttClsComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-pttt-cls/lich-su-pttt-cls.component';
import { LichSuDvKhongThucHienComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component';
import { LichSuHinhAnhClsPopupComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-hinh-anh-cls-popup/lich-su-hinh-anh-cls-popup.component';
import { LayMauXetNghiemModule } from '../../xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module';
import { LichSuCanLamSangModule } from '../../can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module';

@NgModule({
  declarations: [
    LichSuPhauThuatThuThuatListComponent,
    LichSuPhauThuatThuThuatChiTietComponent,
    LichSuPtttEkipThucHienComponent,
    LichSuPtttNthComponent,
    LichSuPtttTuongTrinhPtttComponent,
    LichSuPtttGhiNhanVtThuocComponent,
    LichSuPtttKetLuanComponent,
    LichSuPtttHoiTinhComponent,
    LichSuPttCsSinhTonComponent,
    LichSuPtttTuongTrinhComponent,
    LichSuPtttClsComponent,
    LichSuDvKhongThucHienComponent,
    LichSuHinhAnhClsPopupComponent,
  ],
  imports: [
    CommonModule,
    LichSuPhauThuatThuThuatRoutingModule,
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
    MatCheckboxModule,
    ScrollToModule.forRoot(),
    GridModule,
    IntlModule,
    MatRadioModule,
    ImageDrawingModule,
    LayMauXetNghiemModule,
    LichSuCanLamSangModule
  ],
  entryComponents: [
    LichSuDvKhongThucHienComponent,
    LichSuHinhAnhClsPopupComponent
  ],
  providers: [
    LichSuPhauThuatThuThuatService,
    {
      provide: BaseService, useClass: LichSuPhauThuatThuThuatService
    }
  ],
})

export class LichSuPhauThuatThuThuatModule { }