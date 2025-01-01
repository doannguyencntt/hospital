import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { KhoaPhongNhanVienService } from './khoa-phong-nhan-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { KhoaPhongNhanVienRoutingModule } from './khoa-phong-nhan-vien-routing.module';
import { KhoaPhongNhanVienListComponent } from './khoa-phong-nhan-vien-list/khoa-phong-nhan-vien-list.component';
import { KhoaPhongNhanVienCreateComponent } from './khoa-phong-nhan-vien-create/khoa-phong-nhan-vien-create.component';
import { KhoaPhongNhanVienUpdateComponent } from './khoa-phong-nhan-vien-update/khoa-phong-nhan-vien-update.component';
import { KhoaPhongNhanVienSharedComponent } from './khoa-phong-nhan-vien-shared/khoa-phong-nhan-vien-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';

@NgModule({
    declarations: [
        KhoaPhongNhanVienListComponent,
        KhoaPhongNhanVienCreateComponent,
        KhoaPhongNhanVienUpdateComponent,
        KhoaPhongNhanVienSharedComponent
    ],
    imports: [
        DropDownsModule,
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
        KhoaPhongNhanVienRoutingModule
    ],
    providers: [
        KhoaPhongNhanVienService,
        { provide: BaseService, useClass: KhoaPhongNhanVienService },
    ]
})
export class KhoaPhongNhanVienModule { }
