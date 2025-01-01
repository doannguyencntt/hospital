import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DichVuGiuongBenhVienService } from './dich-vu-giuong-benh-vien.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DichVuGiuongBenhVienRoutingModule } from './dich-vu-giuong-benh-vien-routing.module';
import { DichVuGiuongBenhVienListComponent } from './dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component';
import { DichVuGiuongBenhVienCreateComponent } from './dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component';
import { DichVuGiuongBenhVienUpdateComponent } from './dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component';
import { DichVuGiuongBenhVienSharedComponent } from './dich-vu-giuong-benh-vien-shared/dich-vu-giuong-benh-vien-shared.component';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    declarations: [
        DichVuGiuongBenhVienListComponent,
        DichVuGiuongBenhVienCreateComponent,
        DichVuGiuongBenhVienUpdateComponent,
        DichVuGiuongBenhVienSharedComponent
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
        DichVuGiuongBenhVienRoutingModule,
        GridModule
    ],
    providers: [
        DichVuGiuongBenhVienService,
        { provide: BaseService, useClass: DichVuGiuongBenhVienService },
    ]
})

export class DichVuGiuongBenhVienModule { }
