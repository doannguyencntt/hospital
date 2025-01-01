import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichSuEmailRoutingModule } from './lich-su-email-routing.module';
import { LichSuEmailListComponent } from './lich-su-email-list/lich-su-email-list.component';
import { LichSuEmailService } from './lich-su-email.service';
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
        LichSuEmailListComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        LichSuEmailRoutingModule,
        MatButtonModule,
        MatIconModule,
        IconModule
    ],
    providers: [
        LichSuEmailService,
        { provide: BaseService, useClass: LichSuEmailService },
    ]
})
export class LichSuEmailModule { }
