import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XetNghiemKetQuaNEWRoutingModule } from './xet-nghiem-ket-qua-new-routing.module';
import { KetQuaXetNghiemNewListComponent } from './ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component';
import { KetQuaXetNghiemNewSharedComponent } from './ket-qua-xet-nghiem-new-shared/ket-qua-xet-nghiem-new-shared.component';
import { KetQuaXetNghiemNewDetailComponent } from './ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component';
import { KetQuaPhieuNewPopupComponent } from './ket-qua-phieu-new-popup/ket-qua-phieu-new-popup.component';
import { KetQuaXetNghiemNewUpdateComponent } from './ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component';
import { KetQuaXetNghiemNewPopupGoiDuyetComponent } from './ket-qua-xet-nghiem-new-popup-goi-duyet/ket-qua-xet-nghiem-new-popup-goi-duyet.component';
import { DuyetKetQuaXetNghiemModule } from '../duyet-ket-qua/duyet-ket-qua.module';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { SharedModule } from "src/app/shared/shared.module";
import { GridModule } from '@progress/kendo-angular-grid';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BaseService } from 'src/app/core/services/base.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { XetNghiemKetQuaNewService } from './xet-nghiem-ket-qua-new.service';
@NgModule({
  declarations: [
    KetQuaXetNghiemNewListComponent,
    KetQuaXetNghiemNewSharedComponent,
    KetQuaXetNghiemNewDetailComponent,
    KetQuaPhieuNewPopupComponent,
    KetQuaXetNghiemNewUpdateComponent,
    KetQuaXetNghiemNewPopupGoiDuyetComponent
  ],
  imports: [
    CommonModule,
    XetNghiemKetQuaNEWRoutingModule,
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
    InputsModule,
    DuyetKetQuaXetNghiemModule
  ],
  providers: [
    XetNghiemKetQuaNewService,
      { provide: BaseService, useClass: XetNghiemKetQuaNewService },
  ],
  entryComponents: [
    KetQuaXetNghiemNewPopupGoiDuyetComponent,
    KetQuaPhieuNewPopupComponent
  ]
})
export class XetNghiemKetQuaNEWModule { }
