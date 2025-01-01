import { NgModule } from '@angular/core';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { YeuCauTraVatTuListComponent } from './yeu-cau-tra-vat-tu-list/yeu-cau-tra-vat-tu-list.component';
import { YeuCauTraVatTuCreateComponent } from './yeu-cau-tra-vat-tu-create/yeu-cau-tra-vat-tu-create.component';
import { YeuCauTraVatTuSharedComponent } from './yeu-cau-tra-vat-tu-shared/yeu-cau-tra-vat-tu-shared.component';
import { YeuCauTraVatTuTuChoiDuyetComponent } from './yeu-cau-tra-vat-tu-tu-choi-duyet/yeu-cau-tra-vat-tu-tu-choi-duyet.component';
import { YeuCauTraVatTuDaDuyetComponent } from './yeu-cau-tra-vat-tu-da-duyet/yeu-cau-tra-vat-tu-da-duyet.component';
import { YeuCauTraVatTuUpdateComponent } from './yeu-cau-tra-vat-tu-update/yeu-cau-tra-vat-tu-update.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { YeuCauTraVatTuRoutingModule } from './yeu-cau-tra-vat-tu-routing.module';
import { YeuCauTraVatTuService } from './yeu-cau-tra-vat-tu.service';
import { BaseService } from 'src/app/core/services/base.service';
import { YeuCauTraVatTuOtherSharedComponent } from './yeu-cau-tra-vat-tu-other-shared/yeu-cau-tra-vat-tu-other-shared.component';
import { DuyetHoanTraVatTuModule } from '../duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.module';
import { InPhieuHoanTraVatTuComponent } from '../duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component';
import { DuyetHoanTraDuocPhamModule } from '../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';


@NgModule({
    declarations: [
        YeuCauTraVatTuListComponent,
        YeuCauTraVatTuCreateComponent,
        YeuCauTraVatTuSharedComponent,
        YeuCauTraVatTuTuChoiDuyetComponent,
        YeuCauTraVatTuDaDuyetComponent,
        YeuCauTraVatTuOtherSharedComponent,
        YeuCauTraVatTuUpdateComponent
    ],
    imports: [
        CommonModule,
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

        YeuCauTraVatTuRoutingModule,
        DuyetHoanTraDuocPhamModule
    ],
    providers: [
        YeuCauTraVatTuService,
        { provide: BaseService, useClass: YeuCauTraVatTuService },
    ],
    entryComponents: [
        // InPhieuHoanTraVatTuComponent
    ]
})
export class YeuCauTraVatTuModule { }
