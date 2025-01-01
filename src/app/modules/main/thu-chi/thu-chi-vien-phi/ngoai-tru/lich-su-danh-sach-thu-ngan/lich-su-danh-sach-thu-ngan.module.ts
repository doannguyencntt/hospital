import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LichSuDanhSachThuNganRoutingModule } from "./lich-su-danh-sach-thu-ngan-routing.module";
import { LichSuDanhSachThuNganComponent } from "./lich-su-danh-sach-thu-ngan/lich-su-danh-sach-thu-ngan.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatCheckboxModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule,
} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import {
  MatIconModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatButtonModule,
  MatDialogModule,
} from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MatRadioModule } from "@angular/material/radio";
import { GridModule } from "@progress/kendo-angular-grid";
import { ChiTietLichSuThuNganComponent } from "./chi-tiet-lich-su-thu-ngan/chi-tiet-lich-su-thu-ngan.component";
import { DanhSachLichSuDaThuComponent } from "./danh-sach-lich-su-da-thu/danh-sach-lich-su-da-thu.component";
import { ViewFileCompoment } from "./view-file/view-file.component";
import { MiemGiamChoTungDichVuComponent } from './ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component';
@NgModule({
  declarations: [
    LichSuDanhSachThuNganComponent,
    ChiTietLichSuThuNganComponent,
    DanhSachLichSuDaThuComponent,
    ViewFileCompoment,
    MiemGiamChoTungDichVuComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    LichSuDanhSachThuNganRoutingModule,
    CommonModule,
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
    MatCheckboxModule
  ],
  entryComponents: [
    ViewFileCompoment,
    MiemGiamChoTungDichVuComponent
  ]
})
export class LichSuDanhSachThuNganModule {}
