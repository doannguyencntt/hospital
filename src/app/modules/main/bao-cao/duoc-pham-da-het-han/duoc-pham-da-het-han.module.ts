import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuocPhamDaHetHanRoutingModule } from './duoc-pham-da-het-han-routing.module';
import { DuocPhamDaHetHanListComponent } from './duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component';
import { DuocPhamDaHetHanService } from './duoc-pham-da-het-han.service';
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
import { DuocPhamDaHetHanPopupComponent } from './duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component';

@NgModule({
    declarations: [
        DuocPhamDaHetHanListComponent,
        DuocPhamDaHetHanPopupComponent
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
        DuocPhamDaHetHanRoutingModule
    ],
    entryComponents: [
        DuocPhamDaHetHanPopupComponent
    ],
    providers: [
        DuocPhamDaHetHanService,
        { provide: BaseService, useClass: DuocPhamDaHetHanService },
    ]
})

export class DuocPhamDaHetHanModule { }
