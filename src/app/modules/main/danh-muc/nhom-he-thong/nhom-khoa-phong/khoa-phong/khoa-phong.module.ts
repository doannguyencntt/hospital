import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { KhoaPhongService } from './khoa-phong.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { KhoaPhongRoutingModule } from './khoa-phong-routing.module';
import { KhoaPhongListComponent } from './khoa-phong-list/khoa-phong-list.component';
import { KhoaPhongCreateComponent } from './khoa-phong-create/khoa-phong-create.component';
import { KhoaPhongUpdateComponent } from './khoa-phong-update/khoa-phong-update.component';
import { KhoaPhongSharedComponent } from './khoa-phong-shared/khoa-phong-shared.component';
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
        KhoaPhongListComponent,
        KhoaPhongCreateComponent,
        KhoaPhongUpdateComponent,
        KhoaPhongSharedComponent
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
        KhoaPhongRoutingModule
    ],
    providers: [
        KhoaPhongService,
        { provide: BaseService, useClass: KhoaPhongService },
    ]
})
export class KhoaPhongModule { }
