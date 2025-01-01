import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DieuChuyenKhoNoiBoDuocPhamRoutingModule } from './dieu-chuyen-kho-noi-bo-duoc-pham-routing.module';
import { DieuChuyenKhoNoiBoDuocPhamListComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component';
import { DieuChuyenKhoNoiBoDuocPhamCreateComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component';
import { DieuChuyenKhoNoiBoDuocPhamUpdateComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component';
import { DieuChuyenKhoNoiBoDuocPhamSharedComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component';



import { LayoutModule } from '@progress/kendo-angular-layout';
import {
  MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule
  , MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule
  , MatRadioModule,
  MatOptionModule
} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DieuChuyenKhoNoiBoDuocPhamPopupComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component';
@NgModule({
  declarations: [
    DieuChuyenKhoNoiBoDuocPhamListComponent,
    DieuChuyenKhoNoiBoDuocPhamCreateComponent,
    DieuChuyenKhoNoiBoDuocPhamUpdateComponent,
    DieuChuyenKhoNoiBoDuocPhamSharedComponent,
    DieuChuyenKhoNoiBoDuocPhamPopupComponent
  ],
  imports: [
    CommonModule,
    DieuChuyenKhoNoiBoDuocPhamRoutingModule,
    InputsModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatRadioModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    GridModule,

    DropDownButtonModule
  ],
  entryComponents: [
    DieuChuyenKhoNoiBoDuocPhamPopupComponent
  ],
  // providers: [
  //   DieuChuyenKhoNoiBoDuocPhamService,
  //   { provide: BaseService, useClass: DieuChuyenKhoNoiBoDuocPhamService },
  // ]
})
export class DieuChuyenKhoNoiBoDuocPhamModule { }
