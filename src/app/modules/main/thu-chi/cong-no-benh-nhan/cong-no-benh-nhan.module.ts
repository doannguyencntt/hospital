import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseService } from 'src/app/core/services/base.service';
import { CongNoBenhNhanService } from './cong-no-benh-nhan-service';
import { CongNoBenhNhanRoutingModule } from './cong-no-benh-nhan-routing.module';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatListModule, MatRadioModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { CongNoBenhNhanListComponent } from './cong-no-benh-nhan-list/cong-no-benh-nhan-list.component';
import { CongNoBenhNhanConNoComponent } from './cong-no-benh-nhan-list/cong-no-benh-nhan-con-no/cong-no-benh-nhan-con-no.component';
import { CongNoBenhNhanHetNoComponent } from './cong-no-benh-nhan-list/cong-no-benh-nhan-het-no/cong-no-benh-nhan-het-no.component';
import { CongNoBenhNhanChiTietComponent } from './cong-no-benh-nhan-chi-tiet/cong-no-benh-nhan-chi-tiet.component';
import { CongNoBenhNhanChuaThuComponent } from './cong-no-benh-nhan-chi-tiet/cong-no-benh-nhan-chua-thu/cong-no-benh-nhan-chua-thu.component';
import { CongNoBenhNhanDaThuComponent } from './cong-no-benh-nhan-chi-tiet/cong-no-benh-nhan-da-thu/cong-no-benh-nhan-da-thu.component';
import { CongNoBenhNhanTraNoPopupComponent } from './cong-no-benh-nhan-chi-tiet/cong-no-benh-nhan-tra-no-popup/cong-no-benh-nhan-tra-no-popup.component';
import { ChoThuTienNoiTruModule } from '../thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module';
import { ThongTinPhieuPdfPopupComponent } from '../thu-chi-vien-phi/common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';

@NgModule({
    declarations: [ 
        CongNoBenhNhanListComponent, 
        CongNoBenhNhanConNoComponent, 
        CongNoBenhNhanHetNoComponent, 
        CongNoBenhNhanChiTietComponent, 
        CongNoBenhNhanChuaThuComponent, 
        CongNoBenhNhanDaThuComponent, 
        CongNoBenhNhanTraNoPopupComponent
    ],
    imports: [
        CommonModule,        
        FormsModule,
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
        ReactiveFormsModule,

        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        MatSelectModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule,
        DropDownsModule,
        ChartsModule,     
        CongNoBenhNhanRoutingModule,
        ChoThuTienNoiTruModule,
    ],
    providers: [
        CongNoBenhNhanService,
        { provide: BaseService, useClass: CongNoBenhNhanService },
    ],
    entryComponents: [
        CongNoBenhNhanTraNoPopupComponent,
        ThongTinPhieuPdfPopupComponent
    ]
})

export class CongNoBenhNhanModule { }