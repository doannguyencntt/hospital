import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongTinBenhAnComponent } from './thong-tin-benh-an.component';
import { ThongTinBenhAnNgoaiKhoaComponent } from './thong-tin-ngoai-khoa/thong-tin-benh-an-ngoai-khoa.component';

import { ThongTinBenhAnPhuKhoaComponent } from './thong-tin-phu-khoa/thong-tin-benh-an-phu-khoa.component';
import { ThongTinBenhAnSanKhoaMoThuongComponent } from './thong-tin-san-khoa-mo-thuong/thong-tin-benh-an-san-khoa-mo-thuong.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule,MatOptionModule, MatSelectModule, MatTabsModule,} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import {  MatIconModule,  MatMenuModule,  MatButtonToggleModule,  MatTooltipModule,  MatButtonModule,  MatDialogModule,} from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { ThongTinChiSoSinhTonComponent } from './thong-tin-chi-so-sinh-ton/thong-tin-chi-so-sinh-ton.component';
import { ThongTinTienSuSanKhoaComponent } from './thong-tin-tien-su-san-khoa/thong-tin-tien-su-san-khoa.component';
import { ThongTinTreSoSinhComponent } from './thong-tin-tre-so-sinh/thong-tin-tre-so-sinh.component';
import { ThongTinLanPhauThuatComponent } from './lan-phau-thuat/lan-phau-thuat.component';
import { ThongTinBenhAnKhoaNhiComponent } from './thong-tin-khoa-nhi/thong-tin-khoa-nhi.component';
import { ThongTinBenhAnNoiKhoaComponent } from './thong-tin-noi-khoa/thong-tin-noi-khoa.component';
import { BoPhanTonThuongComponent } from './bo-phan-ton-thuong/bo-phan-ton-thuong.component';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { ThongTinBenhAnTreEmSoSinhComponent } from './thong-tin-tre-em-so-sinh/thong-tin-tre-em-so-sinh.component';

@NgModule({
  imports: [
    CommonModule,
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
    MatMenuModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    LayoutModule,
    GridModule,
    ImageDrawingModule
  ]
})
export class ThongTinBenhAnModule { }
