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

import { LichSuQuayThuocService } from './lich-su-quay-thuoc.service';
import { LichSuQuayThuocRoutingModule } from './lich-su-quay-thuoc-routing.module';

import { LichSuQuayXuatThuocListComponent } from './lich-su-quay-xuat-thuoc-list/lich-su-quay-xuat-thuoc-list.component';
import { LichSuQuayXuatThuocDetailComponent } from './lich-su-quay-xuat-thuoc-detail/lich-su-quay-xuat-thuoc-detail.component';
import { InLichSuBanThuocComponent } from './in-lich-su-ban-thuoc-pop-up/in-lich-su-ban-thuoc-pop-up.component';
import { QuayThuocModule } from '../quay-thuoc.module';

@NgModule({
    declarations: [
        LichSuQuayXuatThuocListComponent,
        LichSuQuayXuatThuocDetailComponent,
        InLichSuBanThuocComponent
    ], imports: [
        ReactiveFormsModule,
        MatInputModule, MatOptionModule, MatSelectModule,
        MatTabsModule,
        LichSuQuayThuocRoutingModule,
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
    ], entryComponents: [
        InLichSuBanThuocComponent
    ], providers: [
        LichSuQuayThuocService,
        { provide: BaseService, useClass: LichSuQuayThuocService },
    ]
})
export class LichSuQuayThuocModule { }
