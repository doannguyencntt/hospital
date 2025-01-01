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
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BaseService } from 'src/app/core/services/base.service';
import { YeuCauTraKSNKListComponent } from './yeu-cau-tra-ksnk-list/yeu-cau-tra-ksnk-list.component';
import { YeuCauTraKSNKCreateComponent } from './yeu-cau-tra-ksnk-create/yeu-cau-tra-ksnk-create.component';
import { YeuCauTraKSNKSharedComponent } from './yeu-cau-tra-ksnk-shared/yeu-cau-tra-ksnk-shared.component';
import { YeuCauTraKSNKTuChoiDuyetComponent } from './yeu-cau-tra-ksnk-tu-choi-duyet/yeu-cau-tra-ksnk-tu-choi-duyet.component';
import { YeuCauTraKSNKDaDuyetComponent } from './yeu-cau-tra-ksnk-da-duyet/yeu-cau-tra-ksnk-da-duyet.component';
import { YeuCauTraKSNKOtherSharedComponent } from './yeu-cau-tra-ksnk-other-shared/yeu-cau-tra-ksnk-other-shared.component';
import { YeuCauTraKSNKUpdateComponent } from './yeu-cau-tra-ksnk-update/yeu-cau-tra-ksnk-update.component';
import { InPhieuHoanTraKSNKComponent } from './in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { YeuCauTraKSNKRoutingModule } from './yeu-cau-tra-ksnk-routing.module';
import { YeuCauTraKSNKService } from './yeu-cau-tra-ksnk.service';


@NgModule({
    declarations: [
        YeuCauTraKSNKListComponent,
        YeuCauTraKSNKCreateComponent,
        YeuCauTraKSNKSharedComponent,
        YeuCauTraKSNKTuChoiDuyetComponent,
        YeuCauTraKSNKDaDuyetComponent,
        YeuCauTraKSNKOtherSharedComponent,
        YeuCauTraKSNKUpdateComponent,
        InPhieuHoanTraKSNKComponent
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
        YeuCauTraKSNKRoutingModule,
        // DuyetHoanTraDuocPhamModule
    ],
    providers: [
        YeuCauTraKSNKService,
        { provide: BaseService, useClass: YeuCauTraKSNKService },
    ],
    entryComponents: [
         InPhieuHoanTraKSNKComponent
    ]
})
export class YeuCauTraKSNKModule { }
