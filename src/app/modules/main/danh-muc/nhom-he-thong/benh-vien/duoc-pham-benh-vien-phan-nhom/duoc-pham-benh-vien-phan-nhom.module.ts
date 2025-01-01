import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DuocPhamBenhVienPhanNhomService } from './duoc-pham-benh-vien-phan-nhom.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DuocPhamBenhVienPhanNhomRoutingModule } from './duoc-pham-benh-vien-phan-nhom-routing.module';
import { DuocPhamBenhVienPhanNhomListComponent } from './duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component';
import {
    DuocPhamBenhVienPhanNhomCreateComponent
} from './duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component';
import {
    DuocPhamBenhVienPhanNhomUpdateComponent
} from './duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component';
import {
    DuocPhamBenhVienPhanNhomSharedComponent
} from './duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DuocPhamBenhVienPhanNhomListComponent,
        DuocPhamBenhVienPhanNhomCreateComponent,
        DuocPhamBenhVienPhanNhomUpdateComponent,
        DuocPhamBenhVienPhanNhomSharedComponent
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
        ReactiveFormsModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        TreeViewModule,
        DuocPhamBenhVienPhanNhomRoutingModule
    ],
    providers: [
        DuocPhamBenhVienPhanNhomService,
        { provide: BaseService, useClass: DuocPhamBenhVienPhanNhomService },
    ]
})

export class DuocPhamBenhVienPhanNhomModule { }
