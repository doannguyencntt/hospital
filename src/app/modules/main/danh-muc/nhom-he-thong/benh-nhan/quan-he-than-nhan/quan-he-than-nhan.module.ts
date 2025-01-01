import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { QuanHeThanNhanService } from './quan-he-than-nhan.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuanHeThanNhanRoutingModule } from './quan-he-than-nhan-routing.module';
import { QuanHeThanNhanListComponent } from './quan-he-than-nhan-list/quan-he-than-nhan-list.component';
import { QuanHeThanNhanCreateComponent } from './quan-he-than-nhan-create/quan-he-than-nhan-create.component';
import { QuanHeThanNhanUpdateComponent } from './quan-he-than-nhan-update/quan-he-than-nhan-update.component';
import { QuanHeThanNhanSharedComponent } from './quan-he-than-nhan-shared/quan-he-than-nhan-shared.component';
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
        QuanHeThanNhanListComponent,
        QuanHeThanNhanCreateComponent,
        QuanHeThanNhanUpdateComponent,
        QuanHeThanNhanSharedComponent
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
        QuanHeThanNhanRoutingModule
    ],
    providers: [
        QuanHeThanNhanService,
        { provide: BaseService, useClass: QuanHeThanNhanService },
    ]
})

export class QuanHeThanNhanModule { }
