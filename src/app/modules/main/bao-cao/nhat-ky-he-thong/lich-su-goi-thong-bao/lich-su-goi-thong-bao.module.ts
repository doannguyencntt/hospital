import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuThongBaoRoutingModule } from './lich-su-goi-thong-bao-routing.module';
import { LichSuThongBaoListComponent } from './lich-su-goi-thong-bao-list/lich-su-goi-thong-bao-list.component';
import { LichSuThongBaoService } from './lich-su-goi-thong-bao.service';
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
        LichSuThongBaoListComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        LichSuThongBaoRoutingModule,
        MatButtonModule,
        MatIconModule,
        IconModule
    ],
    providers: [
        LichSuThongBaoService,
        { provide: BaseService, useClass: LichSuThongBaoService },
    ]
})
export class LichSuThongBaoModule { }
