import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuHoatDongRoutingModule } from './lich-su-hoat-dong-routing.module';
import { LichSuHoatDongListComponent } from './lich-su-hoat-dong-list/lich-su-hoat-dong-list.component';
import { LichSuHoatDongService } from './lich-su-hoat-dong.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
    declarations: [
        LichSuHoatDongListComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        LichSuHoatDongRoutingModule,
        MatButtonModule,
        MatIconModule,
        IconModule
    ],
    providers: [
        LichSuHoatDongService,
        { provide: BaseService, useClass: LichSuHoatDongService },
    ]
})
export class LichSuHoatDongModule { }
