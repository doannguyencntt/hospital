import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import {MatIconModule,  MatMenuModule,  MatButtonToggleModule,  MatTooltipModule,  MatButtonModule,  MatDialogModule,  MatCheckboxModule } from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MatRadioModule } from "@angular/material/radio";
import {  MatInputModule,  MatOptionModule,  MatSelectModule,  MatTabsModule,} from "@angular/material";

import { DanhSachXuatChungTuExcelComponent } from "./danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component";
import { DanhSachXuatChungTuExcelRoutingModule } from "./danh-sach-xuat-excel-chung-tu-routing.module";
import { DieuTriNoiTruModule } from "../../dieu-tri-noi-tru/dieu-tri-noi-tru.module";


@NgModule({
  declarations: [DanhSachXuatChungTuExcelComponent],
  imports: [
    CommonModule,
    DanhSachXuatChungTuExcelRoutingModule,
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
    MatCheckboxModule,
    DieuTriNoiTruModule
  ]
})
export class DanhSachXuatChungTuExcelModule { }
