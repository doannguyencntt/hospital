import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { HopDongThauVatTuService } from './hop-dong-thau-vat-tu.service';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HopDongThauVatTuRoutingModule } from './hop-dong-thau-vat-tu-routing.module';
import { HopDongThauVatTuListComponent } from './hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component';
import { HopDongThauVatTuCreateComponent } from './hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component';
import { HopDongThauVatTuUpdateComponent } from './hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component';
import { HopDongThauVatTuSharedComponent } from './hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component';
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
        HopDongThauVatTuListComponent,
        HopDongThauVatTuCreateComponent,
        HopDongThauVatTuUpdateComponent,
        HopDongThauVatTuSharedComponent
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
        HopDongThauVatTuRoutingModule
    ],
    providers: [
        HopDongThauVatTuService,
        { provide: BaseService, useClass: HopDongThauVatTuService },
    ]
})

export class HopDongThauVatTuModule { }
