import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BaseService } from 'src/app/core/services/base.service';
import { MatRadioModule } from '@angular/material/radio';
import { XacNhanBhytDaHoanThanhListComponent } from './xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component';
import {
    XacNhanBhytDaHoanThanhDetailedComponent
} from './xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component';
import { XacNhanBHYTDaHoanThanhService } from './xac-nhan-bhyt-da-hoan-thanh.service';
import { XacNhanBhytDaHoanThanhRoutingModule } from './xac-nhan-bhyt-da-hoan-thanh-routing.module';
import { DaXacNhanBhytListComponent } from './da-xac-nhan-bhyt-list/da-xac-nhan-bhyt-list.component';
import { ChiTietLanXacNhanListComponent } from './chi-tiet-lan-xac-nhan-list/chi-tiet-lan-xac-nhan-list.component';
import { ListDuyetHistoryComponent } from './list-duyet-history/list-duyet-history.component';
import { LichSuXacNhanBhytModule } from '../lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module';

@NgModule({
    declarations: [
        XacNhanBhytDaHoanThanhListComponent,
        XacNhanBhytDaHoanThanhDetailedComponent,
        DaXacNhanBhytListComponent,
        ChiTietLanXacNhanListComponent,
        ListDuyetHistoryComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        XacNhanBhytDaHoanThanhRoutingModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        FormsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        LayoutModule,
        LichSuXacNhanBhytModule
    ],
    providers: [
        XacNhanBHYTDaHoanThanhService,
        { provide: BaseService, useClass: XacNhanBHYTDaHoanThanhService },
    ],
    entryComponents: [
        ListDuyetHistoryComponent
    ]
})
export class XacNhanBhytDaHoanThanhModule { }
