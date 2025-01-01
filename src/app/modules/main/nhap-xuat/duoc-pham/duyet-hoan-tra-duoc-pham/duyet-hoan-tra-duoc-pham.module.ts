import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuyetHoanTraDuocPhamListComponent } from './duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component';
import { DuyetHoanTraDuocPhamChiTietComponent } from './duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component';
import { DuyetHoanTraDuocPhamRoutingModule } from './duyet-hoan-tra-duoc-pham-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCheckboxModule, MatInputModule,MatOptionModule, MatSelectModule, MatTabsModule,} from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { DuyetHoanTraDuocPhamService } from './duyet-hoan-tra-duoc-pham.service';
import { BaseService } from 'src/app/core/services/base.service';
import { TuChoiDuyetHoanTraDuocPhamComponent } from './tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component';
import { InPhieuHoanTraCompoment } from './in-phieu-hoan-tra/in-phieu-hoan-tra.component';
import { YeuCauTraThuocModule } from '../yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.module';

@NgModule({
  declarations: [DuyetHoanTraDuocPhamListComponent, DuyetHoanTraDuocPhamChiTietComponent, TuChoiDuyetHoanTraDuocPhamComponent,InPhieuHoanTraCompoment ],
  imports: [
    CommonModule,
    DuyetHoanTraDuocPhamRoutingModule,
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
  ],
  providers: [
    DuyetHoanTraDuocPhamService,
    { provide: BaseService, useClass: DuyetHoanTraDuocPhamService },
  ],
  entryComponents: [
    TuChoiDuyetHoanTraDuocPhamComponent,
    InPhieuHoanTraCompoment
  ]
})
export class DuyetHoanTraDuocPhamModule { }
