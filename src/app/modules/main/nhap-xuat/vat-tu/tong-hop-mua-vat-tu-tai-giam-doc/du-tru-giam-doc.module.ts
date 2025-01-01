import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuTruGiamDocRoutingModule } from './du-tru-giam-doc-routing.module';
import {
    MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule,
    MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconModule } from '@visurel/iconify-angular';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { TongHopDuTruMuaVatTuTaiGiamDocService } from './du-tru-giam-doc.service';
import { DuTruGiamDocListComponent } from './du-tru-giam-doc-list/du-tru-giam-doc-list.component';
import { DuTruGiamDocDetailedComponent } from './du-tru-giam-doc-detailed/du-tru-giam-doc-detailed.component';
import { DuTruGiamDocSharedComponent } from './du-tru-giam-doc-shared/du-tru-giam-doc-shared.component';
import { BaseService } from 'src/app/core/services/base.service';
import { DuTruGiamDocDeclinedPopupComponent } from './du-tru-giam-doc-declined-popup/du-tru-giam-doc-declined-popup.component';

@NgModule({
    declarations: [
        DuTruGiamDocListComponent,
        DuTruGiamDocDetailedComponent,
        DuTruGiamDocSharedComponent,
        DuTruGiamDocDeclinedPopupComponent
    ],
    imports: [
        CommonModule,
        DuTruGiamDocRoutingModule,
        CommonModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule,
        MatCheckboxModule,
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
        ReactiveFormsModule,
        MatRadioModule,
        DropDownButtonModule,
        LayoutModule
    ],
    providers: [
        TongHopDuTruMuaVatTuTaiGiamDocService,
        { provide: BaseService, useClass: TongHopDuTruMuaVatTuTaiGiamDocService },
    ],
    entryComponents: [
        DuTruGiamDocDeclinedPopupComponent
    ]
})
export class TongHopDuTruMuaVatTuTaiGiamDocModule { }
