import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ChuanDoanHinhAnhService } from './chuan-doan-hinh-anh.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChuanDoanHinhAnhRoutingModule } from './chuan-doan-hinh-anh-routing.module';
import { ChuanDoanHinhAnhListComponent } from './chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component';
import { ChuanDoanHinhAnhCreateComponent } from './chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component';
import { ChuanDoanHinhAnhUpdateComponent } from './chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component';
import { ChuanDoanHinhAnhSharedComponent } from './chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ChuanDoanHinhAnhListComponent,
        ChuanDoanHinhAnhCreateComponent,
        ChuanDoanHinhAnhUpdateComponent,
        ChuanDoanHinhAnhSharedComponent
    ],
    imports: [
        CommonModule,
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
        ChuanDoanHinhAnhRoutingModule
    ],
    providers: [
        ChuanDoanHinhAnhService,
        { provide: BaseService, useClass: ChuanDoanHinhAnhService },
    ]
})

export class ChuanDoanHinhAnhModule { }
