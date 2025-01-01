import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuyetTraThuocTuBnRoutingModule } from './duyet-tra-tu-bn-routing.module';
import {
    MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule,
    MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconModule } from '@visurel/iconify-angular';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DuyetTraThuocTuBnService } from './duyet-tra-tu-bn.service';
import { DuyetTraThuocTuBnListComponent } from './duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component';
import { DuyetTraThuocTuBnDetailComponent } from './duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component';
import { DuyetTraThuocTuBnSharedComponent } from './duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component';
import { BaseService } from 'src/app/core/services/base.service';
import { DuyetHoanTraDuocPhamModule } from '../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';

@NgModule({
    declarations: [
        DuyetTraThuocTuBnListComponent,
        DuyetTraThuocTuBnDetailComponent,
        DuyetTraThuocTuBnSharedComponent
    ],
    imports: [
        CommonModule,
        DuyetTraThuocTuBnRoutingModule,
        CommonModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatRadioModule,
        DropDownButtonModule,
        LayoutModule,
        // YeuCauTraThuocTuBenhNhanModule,
        DuyetHoanTraDuocPhamModule
    ],
    providers: [
        DuyetTraThuocTuBnService,
        { provide: BaseService, useClass: DuyetTraThuocTuBnService },
    ]
})
export class DuyetTraThuocTuBnModule { }
