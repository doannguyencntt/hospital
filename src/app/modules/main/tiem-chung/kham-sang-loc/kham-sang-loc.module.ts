import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from 'src/app/core/services/base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KhamSangLocService } from './kham-sang-loc.service';
import { KhamSangLocRoutingModule } from './kham-sang-loc-routing.module';
import { TiemChungSharedModule } from '../tiem-chung-shared/tiem-chung-shared.module';

import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { KhamSangLocComponent } from './kham-sang-loc/kham-sang-loc.component';

@NgModule({
    declarations: [
        KhamSangLocComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        KhamSangLocRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TiemChungSharedModule,
        
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
        LayoutModule,
        MatDialogModule,
        MatTabsModule,
        SharedModule,
        GridModule,
        InputsModule,

        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        DropDownsModule,
        ChartsModule,
        MatSelectModule,
    ],
    entryComponents: [
    ],
    providers: [
        KhamSangLocService,
        { provide: BaseService, useClass: KhamSangLocService },
    ]
})

export class KhamSangLocModule { }