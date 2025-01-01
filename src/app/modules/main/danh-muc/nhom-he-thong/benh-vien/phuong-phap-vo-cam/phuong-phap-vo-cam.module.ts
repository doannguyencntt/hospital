import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PhuongPhapVoCamService } from './phuong-phap-vo-cam.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhuongPhapVoCamRoutingModule } from './phuong-phap-vo-cam-routing.module';
import { PhuongPhapVoCamListComponent } from './phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component';
import { PhuongPhapVoCamCreateComponent } from './phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component';
import { PhuongPhapVoCamUpdateComponent } from './phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component';
import { PhuongPhapVoCamSharedComponent } from './phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
    declarations: [
        PhuongPhapVoCamListComponent,
        PhuongPhapVoCamCreateComponent,
        PhuongPhapVoCamUpdateComponent,
        PhuongPhapVoCamSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        PhuongPhapVoCamRoutingModule
    ],
    providers: [
        PhuongPhapVoCamService,
        { provide: BaseService, useClass: PhuongPhapVoCamService },
    ]
})

export class PhuongPhapVoCamModule { }
