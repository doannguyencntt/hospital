import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TongHopDuTruMuaVatTuTaiKhoaRoutingModule } from './tong-hop-du-tru-mua-vat-tu-tai-khoa-routing.module';
import {
    DsTongHopDuTruMuaVatTuTaiKhoaComponent
} from './ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component';
import {
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconModule } from '@visurel/iconify-angular';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import {
    GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent
} from './gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaDetailComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaDuyetComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaSharedComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-shared/tong-hop-du-tru-mua-vat-tu-tai-khoa-shared.component';
import {
    PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent
} from './phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/phieu-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component';
import {
    GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent
} from './gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-khong-duyet.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared/du-tru-mua-vat-tu-tai-khoa-xem-chi-tiet-shared.component';
import {
    PhieuMuaTruTaiKhoaComponent
} from './phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';
import { YeuCauMuaVatTuModule } from '../yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.module';

@NgModule({
    declarations: [
        DsTongHopDuTruMuaVatTuTaiKhoaComponent,
        GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        TongHopDuTruMuaVatTuTaiKhoaDetailComponent,
        TongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        TongHopDuTruMuaVatTuTaiKhoaSharedComponent,
        PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent,
        TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent,
        TongHopDuTruMuaVatTuTaiKhoaChiTietSharedComponent,
        PhieuMuaTruTaiKhoaComponent
    ],
    imports: [
        CommonModule,
        TongHopDuTruMuaVatTuTaiKhoaRoutingModule,
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
        YeuCauMuaVatTuModule

    ],
    entryComponents: [
        PhieuTongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent,
        TongHopDuTruMuaVatTuTaiKhoaKhongDuyetComponent,
        PhieuMuaTruTaiKhoaComponent
    ]
})
export class TongHopDuTruMuaVatTuTaiKhoaModule { }
