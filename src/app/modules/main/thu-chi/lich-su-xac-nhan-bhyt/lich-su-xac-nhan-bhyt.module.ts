import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichSuXacNhanBhytRoutingModule } from './lich-su-xac-nhan-bhyt-routing.module';
import { LichSuXacNhanBhytListComponent } from './lich-su-xac-nhan-bhyt-list/lich-su-xac-nhan-bhyt-list.component';
import { LichSuXacNhanBhytDetailComponent } from './lich-su-xac-nhan-bhyt-detail/lich-su-xac-nhan-bhyt-detail.component';
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
import { LichSuXacNhanBHYTService } from './lich-su-xac-nhan-bhyt.service';
import { BaseService } from 'src/app/core/services/base.service';
import { ThongTinPhieuBHYTPdfPopupComponent } from './thong-tin-phieu-linh-thuoc-pdf-popup/thong-tin-phieu-linh-thuoc-pdf-popup.component';

@NgModule({
    declarations: [LichSuXacNhanBhytListComponent, LichSuXacNhanBhytDetailComponent, ThongTinPhieuBHYTPdfPopupComponent],
    imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        LichSuXacNhanBhytRoutingModule,
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
        MatCheckboxModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        LayoutModule
    ],
    providers: [
        LichSuXacNhanBHYTService,
        { provide: BaseService, useClass: LichSuXacNhanBHYTService },
    ],
    entryComponents: [
        LichSuXacNhanBhytListComponent,
        ThongTinPhieuBHYTPdfPopupComponent
    ]
})
export class LichSuXacNhanBhytModule { }
