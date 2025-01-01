import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LoiDanService } from './loi-dan.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoiDanRoutingModule } from './loi-dan-routing.module';
import { LoiDanListComponent } from './loi-dan-list/loi-dan-list.component';
import { LoiDanCreateComponent } from './loi-dan-create/loi-dan-create.component';
import { LoiDanUpdateComponent } from './loi-dan-update/loi-dan-update.component';
import { LoiDanSharedComponent } from './loi-dan-shared/loi-dan-shared.component';
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
        LoiDanListComponent,
        LoiDanCreateComponent,
        LoiDanUpdateComponent,
        LoiDanSharedComponent
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
        LoiDanRoutingModule
    ],
    providers: [
        LoiDanService,
        { provide: BaseService, useClass: LoiDanService },
    ]
})

export class LoiDanModule { }
