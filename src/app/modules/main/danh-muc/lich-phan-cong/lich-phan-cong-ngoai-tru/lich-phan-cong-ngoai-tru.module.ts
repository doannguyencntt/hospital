import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LichPhanCongNgoaiTruRoutingModule } from './lich-phan-cong-ngoai-tru-routing.module';
import { LichPhanCongNgoaiTruPdfComponent } from './lich-phan-cong-ngoai-tru-pdf/lich-phan-cong-ngoai-tru-pdf.component';
import { LichPhanCongNgoaiTruTheoThangComponent } from './lich-phan-cong-ngoai-tru-theo-thang/lich-phan-cong-ngoai-tru-theo-thang.component';
import { LichPhanCongNgoaiTruTheoTuanComponent } from './lich-phan-cong-ngoai-tru-theo-tuan/lich-phan-cong-ngoai-tru-theo-tuan.component';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LichPhanCongNgoaiTruService } from './lich-phan-cong-ngoai-tru.service';
import { BaseService } from 'src/app/core/services/base.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatInputModule, MatOptionModule, MatSelectModule, MatCheckboxModule, MatButtonModule } from '@angular/material';

import { LichPhanCongTheoTuanChinhSuaLichComponent } from './lich-phan-cong-theo-tuan-chinh-sua-lich/lich-phan-cong-theo-tuan-chinh-sua-lich.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    declarations: [
        LichPhanCongNgoaiTruTheoTuanComponent,
        LichPhanCongNgoaiTruTheoThangComponent,
        LichPhanCongNgoaiTruPdfComponent,
        LichPhanCongTheoTuanChinhSuaLichComponent],
    imports: [
        CommonModule,
        PageLayoutModule,
        FlexLayoutModule,
        BreadcrumbsModule,
        SharedModule,
        MatIconModule,
        DateInputsModule,
        IconModule,
        MatMenuModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        LichPhanCongNgoaiTruRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        DateInputsModule,
        MatIconModule,
        IconModule,
        MatButtonToggleModule,
        GridModule
    ], providers: [
        LichPhanCongNgoaiTruService,
        { provide: BaseService, useClass: LichPhanCongNgoaiTruService },
    ]
})
export class LichPhanCongNgoaiTruModule { }
