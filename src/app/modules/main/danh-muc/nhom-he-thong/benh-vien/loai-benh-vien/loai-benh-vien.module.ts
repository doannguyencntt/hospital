import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LoaiBenhVienService } from './loai-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoaiBenhVienRoutingModule } from './loai-benh-vien-routing.module';
import { LoaiBenhVienListComponent } from './loai-benh-vien-list/loai-benh-vien-list.component';
import { LoaiBenhVienCreateComponent } from './loai-benh-vien-create/loai-benh-vien-create.component';
import { LoaiBenhVienUpdateComponent } from './loai-benh-vien-update/loai-benh-vien-update.component';
import { LoaiBenhVienSharedComponent } from './loai-benh-vien-shared/loai-benh-vien-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';

@NgModule({
    declarations: [
        LoaiBenhVienListComponent,
        LoaiBenhVienCreateComponent,
        LoaiBenhVienUpdateComponent,
        LoaiBenhVienSharedComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        LoaiBenhVienRoutingModule
    ],
    providers: [
        LoaiBenhVienService,
        { provide: BaseService, useClass: LoaiBenhVienService },
    ]
})
export class LoaiBenhVienModule { }
