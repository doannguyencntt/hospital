import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { LichSuTiemChungRoutingModule } from './lich-su-tiem-chung-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LichSuTiemChungService } from './lich-su-tiem-chung.service';
import { TiemChungSharedModule } from '../tiem-chung-shared/tiem-chung-shared.module';

import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { LichSuTiemChungComponent } from './lich-su-tiem-chung/lich-su-tiem-chung.component';
import { LichSuTiemChungChiTietComponent } from './lich-su-tiem-chung-chi-tiet/lich-su-tiem-chung-chi-tiet.component';

@NgModule({
    declarations: [
        LichSuTiemChungComponent,
        LichSuTiemChungChiTietComponent
    ],
    exports:[
    ],
    imports: [
        CommonModule,
        LichSuTiemChungRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TiemChungSharedModule,
        
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        IconModule,
        LayoutModule,
        SharedModule,
        GridModule,
        InputsModule,
        DropDownsModule,
        ChartsModule,

        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        MatSelectModule,
        MatDialogModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule
    ],
    entryComponents: [
    ],
    providers: [
        LichSuTiemChungService,
        { provide: BaseService, useClass: LichSuTiemChungService },
    ]
})

export class LichSuTiemChungModule { }