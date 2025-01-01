import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachBenhNhanPhauThuatRoutingModule } from './danh-sach-benh-nhan-phau-thuat-routing.module';
import {
    DanhSachBenhNhanPhauThuatListComponent
} from './danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component';
import { DanhSachBenhNhanPhauThuatService } from './danh-sach-benh-nhan-phau-thuat.service';
import { BaseService } from 'src/app/core/services/base.service';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
    declarations: [
        DanhSachBenhNhanPhauThuatListComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        PageLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        LayoutModule,
        MatButtonModule,
        ReactiveFormsModule,
        GridModule,
        DanhSachBenhNhanPhauThuatRoutingModule
    ],
    entryComponents: [],
    providers: [
        DanhSachBenhNhanPhauThuatService,
        { provide: BaseService, useClass: DanhSachBenhNhanPhauThuatService },
    ]
})

export class DanhSachBenhNhanPhauThuatModule { }
