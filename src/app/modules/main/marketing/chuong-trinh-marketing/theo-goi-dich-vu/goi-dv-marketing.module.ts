import { NhapSauChietKhauPopupComponent } from './nhap-sau-chiet-khau-popup/nhap-sau-chiet-khau-popup.component';
import { NhapTruocChietKhauPopupComponent } from './nhap-truoc-chiet-khau-popup/nhap-truoc-chiet-khau-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { GoiDvChuongTrinhMarketingService } from './goi-dv-marketing.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { GoiDvCtMarketingSharedComponent } from './goi-dv-marketing-shared/goi-dv-marketing-shared.component';

import { GoiDvChuongTrinhMarketingRoutingModule } from './goi-dv-marketing-routing.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { GoiDvCtMarketingListComponent } from './goi-dv-marketing-list/goi-dv-marketing-list.component';
import { GoiDvCtMarketingUpdateComponent } from './goi-dv-marketing-update/goi-dv-marketing-update.component';
import { GoiDvCtMarketingAddComponent } from './goi-dv-marketing-create/goi-dv-marketing-create.component';
import {
    ChiTietSuDungChuongTrinhGoiDvComponent
} from './chi-tiet-su-dung-chuong-trinh-goi-dv/chi-tiet-su-dung-chuong-trinh-goi-dv.component';
import { LoaiDichVuPopupComponent } from './loai-dich-vu-popup/loai-dich-vu-popup.component';

import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    declarations: [
        GoiDvCtMarketingListComponent,
        GoiDvCtMarketingUpdateComponent,
        GoiDvCtMarketingAddComponent,
        GoiDvCtMarketingSharedComponent,
        ChiTietSuDungChuongTrinhGoiDvComponent,
        NhapTruocChietKhauPopupComponent,
        NhapSauChietKhauPopupComponent,
        LoaiDichVuPopupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatIconModule,
        IconModule,
        TooltipModule,
        MatMenuModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        GridModule,
        GoiDvChuongTrinhMarketingRoutingModule,

        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        LayoutModule,
        MatDialogModule,
        MatCheckboxModule,
    ],
    providers: [
        GoiDvChuongTrinhMarketingService,
        { provide: BaseService, useClass: GoiDvChuongTrinhMarketingService },
    ],
    entryComponents: [
        ChiTietSuDungChuongTrinhGoiDvComponent,
        NhapTruocChietKhauPopupComponent,
        NhapSauChietKhauPopupComponent,
        LoaiDichVuPopupComponent
    ]
})
export class GoiDvMarketingModule { }
