import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PhongBenhVienService } from './phong-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { PhongBenhVienRoutingModule } from './phong-benh-vien-routing.module';
import { PhongBenhVienListComponent } from './phong-benh-vien-list/phong-benh-vien-list.component';
import { PhongBenhVienCreateComponent } from './phong-benh-vien-create/phong-benh-vien-create.component';
import { PhongBenhVienUpdateComponent } from './phong-benh-vien-update/phong-benh-vien-update.component';
import { PhongBenhVienSharedComponent } from './phong-benh-vien-shared/phong-benh-vien-shared.component';
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
        PhongBenhVienListComponent,
        PhongBenhVienCreateComponent,
        PhongBenhVienUpdateComponent,
        PhongBenhVienSharedComponent
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
        PhongBenhVienRoutingModule
    ],
    providers: [
        PhongBenhVienService,
        { provide: BaseService, useClass: PhongBenhVienService },
    ]
})
export class PhongBenhVienModule { }
