import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuSMSRoutingModule } from './lich-su-sms-routing.module';
import { LichSuSMSListComponent } from './lich-su-sms-list/lich-su-sms-list.component';
import { LichSuSMSService } from './lich-su-sms.service';
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
        LichSuSMSListComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        LichSuSMSRoutingModule,
        MatButtonModule,
        MatIconModule,
        IconModule
    ],
    providers: [
        LichSuSMSService,
        { provide: BaseService, useClass: LichSuSMSService },
    ]
})
export class LichSuSMSModule { }
