import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoCaoThucHienClsRoutingModule } from './bao-cao-thuc-hien-cls-routing.module';
import { BaoCaoThucHienClsListComponent } from './bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component';
import { BaoCaoThucHienClsService } from './bao-cao-thuc-hien-cls.service';
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
        BaoCaoThucHienClsListComponent
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
        BaoCaoThucHienClsRoutingModule
    ],
    entryComponents: [],
    providers: [
        BaoCaoThucHienClsService,
        { provide: BaseService, useClass: BaoCaoThucHienClsService },
    ]
})

export class BaoCaoThucHienClsModule { }
