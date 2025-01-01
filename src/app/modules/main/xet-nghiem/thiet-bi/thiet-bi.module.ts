import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ThietBiXetNghiemService } from './thiet-bi.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThietBiXetNghiemRoutingModule } from './thiet-bi-routing.module';
import { ThietBiXetNghiemListComponent } from './thiet-bi-list/thiet-bi-list.component';
import { ThietBiXetNghiemCreateComponent } from './thiet-bi-create/thiet-bi-create.component';
import { ThietBiXetNghiemUpdateComponent } from './thiet-bi-update/thiet-bi-update.component';
import { ThietBiXetNghiemSharedComponent } from './thiet-bi-shared/thiet-bi-shared.component';
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
        ThietBiXetNghiemListComponent,
        ThietBiXetNghiemCreateComponent,
        ThietBiXetNghiemUpdateComponent,
        ThietBiXetNghiemSharedComponent
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
        ThietBiXetNghiemRoutingModule
    ],
    providers: [
        ThietBiXetNghiemService,
        { provide: BaseService, useClass: ThietBiXetNghiemService },
    ]
})

export class ThietBiXetNghiemModule { }
