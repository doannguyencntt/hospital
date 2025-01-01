import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeuCauLinhThuocRoutingModule } from './yeu-cau-linh-thuoc-routing.module';
import { DanhSachYeuCauLinhThuocComponent } from './danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component';
import { TaoPhieuLinhThuocThuongComponent } from './tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component';
import { TaoPhieuLinhThuocBuComponent } from './tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component';
import { PhieuLinhThuocBuSharedComponent } from './phieu-linh-thuoc-bu-shared/phieu-linh-thuoc-bu-shared.component';
import { PhieuLinhThuocThuongSharedComponent } from './phieu-linh-thuoc-thuong-shared/phieu-linh-thuoc-thuong-shared.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule,MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { PhieuLinhThuocThuongGuiLaiComponent } from './phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component';
import { PhieuLinhThuocBuGuiLaiComponent } from './phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaoPhieuLinhThuocTrucTiepComponent } from './tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component';
import { PhieuLinhThuocTrucTiepSharedComponent } from './phieu-linh-thuoc-truc-tiep-shared/phieu-linh-thuoc-truc-tiep-shared.component';
import { PhieuLinhThuocTrucTiepGuiLaiComponent } from './phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component';
import { PhieuLinhThuocThuongPopupComponent } from './phieu-linh-thuoc-thuong-popup/phieu-linh-thuoc-thuong-popup.component';
import { InLinhDuocPhamComponent } from './in-linh-duoc-pham/in-linh-duoc-pham.component';
import { PhieuLinhThuocBuPopupComponent } from './phieu-linh-thuoc-bu-popup/phieu-linh-thuoc-bu-popup.component';
import { PhieuLinhThuocTrucTiepPopupComponent } from './phieu-linh-thuoc-truc-tiep-popup/phieu-linh-thuoc-truc-tiep-popup.component';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { PopupThongBaoDpKhongTheTaoComponent } from './popup-thong-bao-dp-khong-the-tao/popup-thong-bao-dp-khong-the-tao.component';
import { PhieuLinhTrucTiepChoGoiSharedComponent } from './phieu-linh-truc-tiep-cho-goi-shared/phieu-linh-truc-tiep-cho-goi-shared.component';

@NgModule({
  declarations: [
    DanhSachYeuCauLinhThuocComponent, 
    TaoPhieuLinhThuocThuongComponent, 
    TaoPhieuLinhThuocBuComponent, 
    PhieuLinhThuocBuSharedComponent, 
    PhieuLinhThuocThuongSharedComponent, 
    PhieuLinhThuocThuongGuiLaiComponent, 
    PhieuLinhThuocBuGuiLaiComponent, TaoPhieuLinhThuocTrucTiepComponent, PhieuLinhThuocTrucTiepSharedComponent, PhieuLinhThuocTrucTiepGuiLaiComponent, InLinhDuocPhamComponent
   ,PhieuLinhThuocThuongPopupComponent, PhieuLinhThuocBuPopupComponent, PhieuLinhThuocTrucTiepPopupComponent, PopupThongBaoDpKhongTheTaoComponent, PhieuLinhTrucTiepChoGoiSharedComponent
  ],
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
    YeuCauLinhThuocRoutingModule,
    DropDownButtonModule
  ],
  exports:[
    PhieuLinhThuocBuSharedComponent, 
    PhieuLinhThuocThuongSharedComponent
  ],
  entryComponents: [
    ConfirmComponent,
    PhieuLinhThuocThuongPopupComponent,
    InLinhDuocPhamComponent,
    PhieuLinhThuocBuPopupComponent,
    PhieuLinhThuocTrucTiepPopupComponent,
    PopupThongBaoDpKhongTheTaoComponent
  ]
})
export class YeuCauLinhThuocModule { }
