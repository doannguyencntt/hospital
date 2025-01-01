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
import { MatRadioModule } from '@angular/material/radio';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { QuayThuocModule } from '../quay-thuoc.module';
import { LichSuHuyBanThuocService } from './danh-sach-lich-su-huy-ban-thuoc.service';
import { LichSuHuyBanThuocRoutingModule } from './danh-sach-lich-su-huy-ban-thuoc-routing.module';
import { LichSuHuyBanThuocListComponent } from './lich-su-huy-ban-thuoc-list/lich-su-huy-ban-thuoc-list.component';
import { LichSuHuyBanThuocDetailComponent } from './lich-su-huy-ban-thuoc-detail/lich-su-huy-ban-thuoc-detail.component';

@NgModule({
    declarations: [
        LichSuHuyBanThuocListComponent,
        LichSuHuyBanThuocDetailComponent,
    ], imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        LichSuHuyBanThuocRoutingModule,
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
        MatRadioModule,
        LayoutModule,
        GridModule,
        MatCheckboxModule,
        QuayThuocModule
    ],
    providers: [
        LichSuHuyBanThuocService,
        { provide: BaseService, useClass: LichSuHuyBanThuocService },
    ]
})
export class DanhSachHuyBanThuocModule { }
