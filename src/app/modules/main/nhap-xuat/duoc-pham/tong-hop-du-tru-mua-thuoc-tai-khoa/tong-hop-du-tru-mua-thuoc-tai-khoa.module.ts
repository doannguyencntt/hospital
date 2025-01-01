import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TongHopDuTruMuaThuocTaiKhoaRoutingModule } from './tong-hop-du-tru-mua-thuoc-tai-khoa-routing.module';
import { DsTongHopDuTruMuaThuocTaiKhoaComponent } from './ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconModule } from '@visurel/iconify-angular';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';
import { TongHopDuTruMuaThuocTaiKhoaDetailComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component';
import { TongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';
import { TongHopDuTruMuaThuocTaiKhoaSharedComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-shared/tong-hop-du-tru-mua-thuoc-tai-khoa-shared.component';
import { PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';
import { GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component';
import { TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component';
import { TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared/du-tru-mua-thuoc-tai-khoa-xem-chi-tiet-shared.component';
import { PhieuMuaTruTaiKhoaComponent } from './phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';
import { YeuCauMuaThuocModule } from '../yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module';

@NgModule({
  declarations: [
    DsTongHopDuTruMuaThuocTaiKhoaComponent,
    GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    TongHopDuTruMuaThuocTaiKhoaDetailComponent,
    TongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    TongHopDuTruMuaThuocTaiKhoaSharedComponent,
    PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent,
    TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent,
    TongHopDuTruMuaThuocTaiKhoaChiTietSharedComponent,
    PhieuMuaTruTaiKhoaComponent
  ],
  imports: [
    CommonModule,
    TongHopDuTruMuaThuocTaiKhoaRoutingModule,
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
    DropDownButtonModule,
    LayoutModule,
    YeuCauMuaThuocModule
  ],
  entryComponents: [
    PhieuTongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent,
    TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent,
    PhieuMuaTruTaiKhoaComponent
  ]
})
export class TongHopDuTruMuaThuocTaiKhoaModule { }
