import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LichSuBaoHiemYTeRoutingModule } from './lich-su-bao-hiem-y-te-routing.module';
import { DsLichSuBaoHiemYTeComponent } from './ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component';
import { ChiTietLichSuBaoHiemYTeComponent } from './chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component';
import { DsBaoHiemYTeModule } from '../danh-sach-bao-hiem-y-te/ds-bao-hiem-y-te.module';


@NgModule({
  declarations: [DsLichSuBaoHiemYTeComponent, ChiTietLichSuBaoHiemYTeComponent],
  imports: [
    CommonModule,
    LichSuBaoHiemYTeRoutingModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,    
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
    MatCheckboxModule,
    DsBaoHiemYTeModule
  ]
})
export class LichSuBaoHiemYTeModule { }
