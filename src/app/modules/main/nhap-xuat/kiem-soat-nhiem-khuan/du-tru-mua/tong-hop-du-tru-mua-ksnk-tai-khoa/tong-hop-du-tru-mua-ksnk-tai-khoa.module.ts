import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { DsTongHopDuTruMuaKSNKTaiKhoaComponent } from './ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component';
// import { GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';
import { TongHopDuTruMuaKSNKTaiKhoaDetailComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component';
import { TongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';
import { TongHopDuTruMuaKSNKTaiKhoaSharedComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-shared/tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component';
// import { GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent } from './gui-tong-hop-du-tru-mua-ksnk-khoa-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-confirm.component';
// import { TongHopDuTruMuaKSNKTaiKhoaChiTietSharedComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared/du-tru-mua-ksnk-tai-khoa-xem-chi-tiet-shared.component';
// import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
import { PhieuMuaTruKSNKTaiKhoaComponent } from './phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';
import { TongHopDuTruMuaKSNKTaiKhoaRoutingModule } from './tong-hop-du-tru-mua-ksnk-tai-khoa-routing.module';
import { YeuCauMuaKSNKSModule } from '../yeu-cau-mua-ksnk/yeu-cau-mua-ksnk.module';


@NgModule({
    declarations: [
        DsTongHopDuTruMuaKSNKTaiKhoaComponent,
        // GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
        TongHopDuTruMuaKSNKTaiKhoaDetailComponent,
        TongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
        TongHopDuTruMuaKSNKTaiKhoaSharedComponent,
        // GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent,
        // TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent,
        // TongHopDuTruMuaKSNKTaiKhoaChiTietSharedComponent,
        PhieuMuaTruKSNKTaiKhoaComponent
    ],
    imports: [
        CommonModule,
        TongHopDuTruMuaKSNKTaiKhoaRoutingModule,
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
        YeuCauMuaKSNKSModule
    ],
    entryComponents: [
        // GuiTongHopDuTruMuaKSNKTaiKhoaConfirmComponent,
        // TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent,
        PhieuMuaTruKSNKTaiKhoaComponent
    ]
})
export class TongHopDuTruMuaKSNKTaiKhoaModule { }
