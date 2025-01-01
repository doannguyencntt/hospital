import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuyetHoanTraVatTuListComponent } from './duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component';
import { DuyetHoanTraVatTuChiTietComponent } from './duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component';
import { DuyetHoanTraVatTuRoutingModule } from './duyet-hoan-tra-vat-tu-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, } from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, } from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { DuyetHoanTraVatTuService } from './duyet-hoan-tra-vat-tu.service';
import { BaseService } from 'src/app/core/services/base.service';
import { TuChoiDuyetVatTuComponent } from './tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component';
import { InPhieuHoanTraVatTuComponent } from './in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component';
import { DuyetHoanTraDuocPhamModule } from '../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module';

@NgModule({
  declarations: [DuyetHoanTraVatTuListComponent, DuyetHoanTraVatTuChiTietComponent, TuChoiDuyetVatTuComponent, InPhieuHoanTraVatTuComponent],
  imports: [
    CommonModule,
    DuyetHoanTraVatTuRoutingModule,
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
    MatCheckboxModule,
    DuyetHoanTraDuocPhamModule
  ],
  entryComponents: [
    TuChoiDuyetVatTuComponent,
    InPhieuHoanTraVatTuComponent
  ],
  providers: [
    DuyetHoanTraVatTuService,
    { provide: BaseService, useClass: DuyetHoanTraVatTuService },
  ]
})
export class DuyetHoanTraVatTuModule { }
