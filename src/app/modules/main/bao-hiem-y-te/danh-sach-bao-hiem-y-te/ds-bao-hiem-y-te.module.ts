import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
  MatCheckboxModule,
} from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MatRadioModule } from "@angular/material/radio";
import {
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule,
} from "@angular/material";
import { DsBaoHiemYTeRoutingModule } from "./ds-bao-hiem-y-te-routing.module";
import { DsBaoHiemYTeComponent } from "./ds-bao-hiem-y-te/ds-bao-hiem-y-te.component";
import { ThongTinChiTietGoiBaoHiemYTeComponent } from "./thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component";
import { ThemMaBenhKhacComponent } from "./tim-kiem-ma-benh-khac-popup/tim-kiem-ma-benh-khac-popup.component";
import { ThemMaBacSiComponent } from "./tim-kiem-ma-bac-si-popup/tim-kiem-ma-bac-si-popup.component";


@NgModule({
  declarations: [DsBaoHiemYTeComponent, ThongTinChiTietGoiBaoHiemYTeComponent, ThemMaBenhKhacComponent, ThemMaBacSiComponent],
  imports: [
    CommonModule,
    DsBaoHiemYTeRoutingModule,
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
    MatCheckboxModule
  ],
  entryComponents:
    [ThemMaBenhKhacComponent , ThemMaBacSiComponent]
})
export class DsBaoHiemYTeModule { }
