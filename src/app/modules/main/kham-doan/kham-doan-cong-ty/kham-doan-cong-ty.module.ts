import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhamDoanCongTyRoutingModule } from './kham-doan-cong-ty-routing.module';
import { KhamDoanCongTyListComponent } from './kham-doan-cong-ty-list/kham-doan-cong-ty-list.component';
import { KhamDoanCongTyDetailPopupComponent } from './kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule
} from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KhamDoanCongTyPhongPopupComponent } from './kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component';


@NgModule({
    declarations: [
        KhamDoanCongTyListComponent,
        KhamDoanCongTyDetailPopupComponent,
        KhamDoanCongTyPhongPopupComponent
    ],
    imports: [
        CommonModule,
        KhamDoanCongTyRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        FormsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        LayoutModule,
        MatDialogModule,
        GridModule,
        IntlModule,
        PdfViewerModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    entryComponents: [
        KhamDoanCongTyDetailPopupComponent,
        KhamDoanCongTyPhongPopupComponent
    ]
})
export class KhamDoanCongTyModule { }
