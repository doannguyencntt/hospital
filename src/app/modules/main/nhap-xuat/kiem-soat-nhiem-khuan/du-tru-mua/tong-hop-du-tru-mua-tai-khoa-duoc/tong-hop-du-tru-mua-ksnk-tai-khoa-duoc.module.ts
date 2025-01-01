import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { BaseService } from 'src/app/core/services/base.service';
import { TongHopDuTruMuaKSNKTaiKhoaDuocService } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc.service';
// import { TongHopDuTruMuaKSNKTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component';
// import { TongHopDuTruMuaKSNKTaiKhoaUpdateComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-update/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-update.component';
// import { TongHopDuTruMuaKSNKTaiKhoaDuocChoXuLyComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-cho-xu-ly.component';
// import { TongHopDuTruMuaKSNKTaiKhoaDuocDaXuLyComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-da-xu-ly.component';
// import { TongHopDuTruMuaKSNKTaiTuChoiComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-tu-choi.component';
import { DuyetDuTruMuaKSNKSharedComponent } from './duyet-du-tru-mua-ksnk-shared/duyet-du-tru-mua-ksnk-shared.component';
import { DuyetDuTruMuaKSNKUpdateComponent } from './duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component';
import { TuChoiDuyetKSNKPopupComponent } from './tu-choi-duyet-ksnk-popup/tu-choi-duyet-ksnk-popup.component';
import { GoiGiamDocDuTruMuaKSNKSharedComponent } from './goi-giam-doc-du-tru-mua-ksnk-shared/goi-giam-doc-du-tru-mua-ksnk-shared.component';
import { GoiGiamDocDuTruMuaKSNKUpdateComponent } from './goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component';
// import { GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-confirm.component';
import { PhieuMuaTruKSNKTaiKhoaDuocComponent } from './phieu-mua-tru-ksnk-tai-khoa-duoc/phieu-mua-tru-ksnk-tai-khoa-duoc.component';
import { TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-routing.module';

@NgModule({
    declarations:
        [
            // TongHopDuTruMuaKSNKTaiKhoaDuocListComponent,
            // TongHopDuTruMuaTaiKhoaDuocSharedComponent,
            // TongHopDuTruMuaKSNKTaiKhoaUpdateComponent,            
            // TongHopDuTruMuaKSNKTaiKhoaDuocChoXuLyComponent,
            // TongHopDuTruMuaKSNKTaiKhoaDuocDaXuLyComponent,
            // TongHopDuTruMuaKSNKTaiTuChoiComponent,
            DuyetDuTruMuaKSNKSharedComponent,
            DuyetDuTruMuaKSNKUpdateComponent,
            TuChoiDuyetKSNKPopupComponent,
            GoiGiamDocDuTruMuaKSNKSharedComponent,
            GoiGiamDocDuTruMuaKSNKUpdateComponent,
            // GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent,
            PhieuMuaTruKSNKTaiKhoaDuocComponent
        ],
    imports: [
        CommonModule,
        TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule,
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
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule,
        LayoutModule,
        MatCheckboxModule,
    ],
    providers: [
        TongHopDuTruMuaKSNKTaiKhoaDuocService,
        { provide: BaseService, useClass: TongHopDuTruMuaKSNKTaiKhoaDuocService },
    ],
    entryComponents: [
        TuChoiDuyetKSNKPopupComponent,
        PhieuMuaTruKSNKTaiKhoaDuocComponent,
        // GuiTongHopDuTruMuaKSNKTaiKhoaDuocConfirmComponent
    ]
})
export class TongHopDuTruKSNKMuaTaiKhoaDuocModule { }
