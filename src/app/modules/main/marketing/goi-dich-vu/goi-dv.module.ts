import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { GoiDvService } from './goi-dv.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { GoiDvSharedComponent } from './goi-dv-shared/goi-dv-shared.component';

import { GoiDvRoutingModule } from './goi-dv-routing.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { GoiDvListComponent } from './goi-dv-list/goi-dv-list.component';
import { GoiDvUpdateComponent } from './goi-dv-update/goi-dv-update.component';
import { GoiDvAddComponent } from './goi-dv-create/goi-dv-create.component';

@NgModule({
    declarations: [
        GoiDvListComponent,
        GoiDvUpdateComponent,
        GoiDvAddComponent,
        GoiDvSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatIconModule,
        IconModule,
        TooltipModule,
        MatMenuModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        GridModule,
        GoiDvRoutingModule
    ],
    providers: [
        GoiDvService,
        { provide: BaseService, useClass: GoiDvService },
    ]
})
export class GoiDvModule { }
