import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinhMucVatTuTonKhoRoutingModule } from './dinh-muc-vat-tu-ton-kho-routing.module';
import { DinhMucVatTuTonKhoListComponent } from './dinh-muc-vat-tu-ton-kho-list/dinh-muc-vat-tu-ton-kho-list.component';

import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DinhMucVatTuTonKhoService } from './dinh-muc-vat-tu-ton-kho.service';
import { DinhMucVatTuTonKhoCreateComponent } from './dinh-muc-vat-tu-ton-kho-create/dinh-muc-vat-tu-ton-kho-create.component';
import { DinhMucVatTuTonKhoUpdateComponent } from './dinh-muc-vat-tu-ton-kho-update/dinh-muc-vat-tu-ton-kho-update.component';
import { DinhMucVatTuTonKhoSharedComponent } from './dinh-muc-vat-tu-ton-kho-shared/dinh-muc-vat-tu-ton-kho-shared.component';
@NgModule({
    declarations: [
        DinhMucVatTuTonKhoListComponent,
        DinhMucVatTuTonKhoCreateComponent,
        DinhMucVatTuTonKhoUpdateComponent,
        DinhMucVatTuTonKhoSharedComponent
    ],
    imports: [
        DinhMucVatTuTonKhoRoutingModule,
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    providers: [
        DinhMucVatTuTonKhoService,
        { provide: BaseService, useClass: DinhMucVatTuTonKhoService },
    ]
})
export class DinhMucVatTuTonKhoModule { }
