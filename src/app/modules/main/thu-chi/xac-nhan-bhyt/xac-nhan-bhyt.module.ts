import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XacNhanBhytRoutingModule } from './xac-nhan-bhyt-routing.module';
import { DanhSachChoXacNhanBhytComponent } from './danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component';
import { ChiTietXacNhanBhytComponent } from './chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatCheckboxModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DanhSachLichXacNhanComponent } from './danh-sach-lich-xac-nhan/danh-sach-lich-xac-nhan.component';
import { XacNhanBHYTService } from './xac-nhan-bhyt.service';
import { BaseService } from 'src/app/core/services/base.service';
import { MatRadioModule } from '@angular/material/radio';
import { BhytThongTinXacNhanComponent } from './bhyt-thong-tin-xac-nhan/bhyt-thong-tin-xac-nhan.component';
import { LichSuXacNhanBhytModule } from '../lich-su-xac-nhan-bhyt/lich-su-xac-nhan-bhyt.module';

@NgModule({
    declarations: [
        DanhSachChoXacNhanBhytComponent,
        ChiTietXacNhanBhytComponent,
        DanhSachLichXacNhanComponent,
        BhytThongTinXacNhanComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        XacNhanBhytRoutingModule,
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
        MatDialogModule,
        MatCheckboxModule,
        MatRadioModule,
        LayoutModule,
        LichSuXacNhanBhytModule
    ],
    providers: [
        XacNhanBHYTService,
        { provide: BaseService, useClass: XacNhanBHYTService },
    ],
    entryComponents: [
        DanhSachLichXacNhanComponent
    ]
})
export class XacNhanBhytModule { }
