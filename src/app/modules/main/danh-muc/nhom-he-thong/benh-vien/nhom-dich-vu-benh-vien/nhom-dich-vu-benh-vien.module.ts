import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NhomDichVuBenhVienService } from './nhom-dich-vu-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';

import { NhomDichVuBenhVienRoutingModule } from './nhom-dich-vu-benh-vien-routing.module';
import { NhomDichVuBenhVienListComponent } from './nhom-dich-vu-benh-vien-list/nhom-dich-vu-benh-vien-list.component';
import { NhomDichVuBenhVienCreateComponent } from './nhom-dich-vu-benh-vien-create/nhom-dich-vu-benh-vien-create.component';
import { NhomDichVuBenhVienUpdateComponent } from './nhom-dich-vu-benh-vien-update/nhom-dich-vu-benh-vien-update.component';
import { NhomDichVuBenhVienSharedComponent } from './nhom-dich-vu-benh-vien-shared/nhom-dich-vu-benh-vien-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

@NgModule({
    declarations: [
        NhomDichVuBenhVienListComponent,
        NhomDichVuBenhVienCreateComponent,
        NhomDichVuBenhVienUpdateComponent,
        NhomDichVuBenhVienSharedComponent
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
        NhomDichVuBenhVienRoutingModule,
        ReactiveFormsModule,
        TreeViewModule,
    ],
    providers: [
        NhomDichVuBenhVienService,
        { provide: BaseService, useClass: NhomDichVuBenhVienService },
    ]
})
export class NhomDichVuBenhVienModule { }
