import { NgModule } from '@angular/core';
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

import { CommonModule } from '@angular/common';
import { YeuCauTraThuocListComponent } from './yeu-cau-tra-thuoc-list/yeu-cau-tra-thuoc-list.component';
import { YeuCauTraThuocTuChoiDuyetComponent } from './yeu-cau-tra-thuoc-tu-choi-duyet/yeu-cau-tra-thuoc-tu-choi-duyet.component';
import { YeuCauTraThuocDaDuyetComponent } from './yeu-cau-tra-thuoc-da-duyet/yeu-cau-tra-thuoc-da-duyet.component';
// import { YeuCauTraThuocCreateComponent } from './yeu-cau-tra-thuoc-create/yeu-cau-tra-thuoc-create.component';
// import { YeuCauTraThuocShareComponent } from './yeu-cau-tra-thuoc-share/yeu-cau-tra-thuoc-share.component';
// import { YeuCauTraThuocUpdateComponent } from './yeu-cau-tra-thuoc-update/yeu-cau-tra-thuoc-update.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { YeuCauTraThuocRoutingModule } from './yeu-cau-tra-thuoc-routing.module';
import { YeuCauTraThuocService } from './yeu-cau-tra-thuoc.service';
import { BaseService } from 'src/app/core/services/base.service';
import { YeuCauTraThuocCreateComponent } from './yeu-cau-tra-thuoc-create/yeu-cau-tra-thuoc-create.component';
import { YeuCauTraThuocSharedComponent } from './yeu-cau-tra-thuoc-shared/yeu-cau-tra-thuoc-shared.component';
import { YeuCauTraThuocOtherSharedComponent } from './yeu-cau-tra-thuoc-other-shared/yeu-cau-tra-thuoc-other-shared.component';
import { YeuCauTraThuocUpdateComponent } from './yeu-cau-tra-thuoc-update/yeu-cau-tra-thuoc-update.component';
import { DuyetHoanTraDuocPhamModule } from '../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';
import { InPhieuHoanTraCompoment } from '../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    declarations: [
        YeuCauTraThuocListComponent,
        YeuCauTraThuocCreateComponent,
        YeuCauTraThuocSharedComponent,
        YeuCauTraThuocTuChoiDuyetComponent,
        YeuCauTraThuocDaDuyetComponent,
        YeuCauTraThuocOtherSharedComponent,
        // YeuCauTraThuocUpdateComponent
        // YeuCauTraThuocTuChoiDuyetComponent,
        // YeuCauTraThuocTuDaDuyetComponent,
        YeuCauTraThuocUpdateComponent
    ],
    imports: [
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        TooltipModule,
        SharedModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule,
        LayoutModule,
        MatCheckboxModule,

        YeuCauTraThuocRoutingModule,
        DuyetHoanTraDuocPhamModule,


        InputsModule,
        MatRadioModule,
        GridModule,
    ],
    providers: [
        YeuCauTraThuocService,
        { provide: BaseService, useClass: YeuCauTraThuocService },
    ],
    entryComponents: [
        InPhieuHoanTraCompoment
    ]
})
export class YeuCauTraThuocModule { }
