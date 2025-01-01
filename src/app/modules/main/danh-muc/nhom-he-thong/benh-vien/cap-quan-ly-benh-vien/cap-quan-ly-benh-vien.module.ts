import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { CapQuanLyBenhVienService } from './cap-quan-ly-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CapQuanLyBenhVienRoutingModule } from './cap-quan-ly-benh-vien-routing.module';
import { CapQuanLyBenhVienListComponent } from './cap-quan-ly-benh-vien-list/cap-quan-ly-benh-vien-list.component';
import { CapQuanLyBenhVienCreateComponent } from './cap-quan-ly-benh-vien-create/cap-quan-ly-benh-vien-create.component';
import { CapQuanLyBenhVienUpdateComponent } from './cap-quan-ly-benh-vien-update/cap-quan-ly-benh-vien-update.component';
import { CapQuanLyBenhVienSharedComponent } from './cap-quan-ly-benh-vien-shared/cap-quan-ly-benh-vien-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
    declarations: [
        CapQuanLyBenhVienListComponent,
        CapQuanLyBenhVienCreateComponent,
        CapQuanLyBenhVienUpdateComponent,
        CapQuanLyBenhVienSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        CapQuanLyBenhVienRoutingModule
    ],
    providers: [
        CapQuanLyBenhVienService,
        { provide: BaseService, useClass: CapQuanLyBenhVienService },
    ]
})
export class CapQuanLyBenhVienModule { }
