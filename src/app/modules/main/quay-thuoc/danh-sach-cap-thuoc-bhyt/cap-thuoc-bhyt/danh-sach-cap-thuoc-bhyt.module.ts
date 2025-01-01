import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatRadioModule } from '@angular/material/radio';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { DanhSachCapThuocBHYTRoutingModule } from './danh-sach-cap-thuoc-bhyt-routing.module';
import { DanhSachDonThuocChoCapThuocComponent } from './danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component';
import { DanhSachCapThuocBHYTService } from './danh-sach-cap-thuoc-bhyt.service';
import { ChoCapThuocBHYTChiTietComponent } from './don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component';
import { QuayThuocModule } from '../../quay-thuoc.module';

@NgModule({
    declarations: [   
        DanhSachDonThuocChoCapThuocComponent,
        ChoCapThuocBHYTChiTietComponent
    ], imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        DanhSachCapThuocBHYTRoutingModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        FormsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        LayoutModule,
        GridModule,
        MatCheckboxModule,
        QuayThuocModule
    ], providers: [
        DanhSachCapThuocBHYTService,
        { provide: BaseService, useClass: DanhSachCapThuocBHYTService },
    ]
})
export class DanhSachCapThuocBHYTModule { }
