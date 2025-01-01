import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeuCauLinhVatTuRoutingModule } from './yeu-cau-linh-vat-tu-routing.module';
import { DanhSachYeuCauLinhVatTuComponent } from './danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component';
import { PhieuLinhVatTuBuGuiLaiComponent } from './phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component';
import { PhieuLinhVatTuBuGuiLaiSharedComponent } from './phieu-linh-vat-tu-bu-gui-lai-shared/phieu-linh-vat-tu-bu-gui-lai-shared.component';
import { PhieuLinhVatTuThuongGuiLaiComponent } from './phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component';
import { PhieuLinhVatTuThuongSharedComponent } from './phieu-linh-vat-tu-thuong-shared/phieu-linh-vat-tu-thuong-shared.component';
import { PhieuLinhVatTuTrucTiepGuiLaiComponent } from './phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component';
import { PhieuLinhVatTuTrucTiepSharedComponent } from './phieu-linh-vat-tu-truc-tiep-shared/phieu-linh-vat-tu-truc-tiep-shared.component';
import { TaoPhieuLinhVatTuBuComponent } from './tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component';
import { TaoPhieuLinhVatTuThuongComponent } from './tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component';
import { TaoPhieuLinhVatTuTrucTiepComponent } from './tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { InLinhVatTuComponent } from './in-linh-vat-tu/in-linh-vat-tu.component';
import { PhieuLinhVatTuThuongPopupComponent } from './phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';
import { InPhieuLinhTrucTiepVatTuPopupComponent } from './in-phieu-linh-truc-tiep-vat-tu-popup/in-phieu-linh-truc-tiep-vat-tu-popup.component';
import { PopupThongBaoVtKhongTheTaoComponent } from './popup-thong-bao-vt-khong-the-tao/popup-thong-bao-vt-khong-the-tao.component';
import { PhieuLinhVtTrucTiepChoGoiSharedComponent } from './phieu-linh-vt-truc-tiep-cho-goi-shared/phieu-linh-vt-truc-tiep-cho-goi-shared.component';


@NgModule({
  declarations: [
    DanhSachYeuCauLinhVatTuComponent, 
    PhieuLinhVatTuBuGuiLaiComponent, 
    PhieuLinhVatTuBuGuiLaiSharedComponent, 
    PhieuLinhVatTuThuongGuiLaiComponent, 
    PhieuLinhVatTuThuongSharedComponent, 
    PhieuLinhVatTuTrucTiepGuiLaiComponent, 
    PhieuLinhVatTuTrucTiepSharedComponent, 
    TaoPhieuLinhVatTuBuComponent, 
    TaoPhieuLinhVatTuThuongComponent, 
    TaoPhieuLinhVatTuTrucTiepComponent, InLinhVatTuComponent, PhieuLinhVatTuThuongPopupComponent, InPhieuLinhTrucTiepVatTuPopupComponent, PopupThongBaoVtKhongTheTaoComponent, PhieuLinhVtTrucTiepChoGoiSharedComponent],
  imports: [
    CommonModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
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
    ReactiveFormsModule,
    MatRadioModule,
    YeuCauLinhVatTuRoutingModule
  ],
  entryComponents: [
    ConfirmComponent,
    PhieuLinhVatTuThuongPopupComponent,
    InPhieuLinhTrucTiepVatTuPopupComponent,
    InLinhVatTuComponent,
    PopupThongBaoVtKhongTheTaoComponent
  ]
})
export class YeuCauLinhVatTuModule { }
