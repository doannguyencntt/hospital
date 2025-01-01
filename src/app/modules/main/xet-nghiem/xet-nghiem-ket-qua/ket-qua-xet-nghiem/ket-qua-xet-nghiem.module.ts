import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KetQuaXetNghiemRoutingModule } from './ket-qua-xet-nghiem-routing.module';
import { KetQuaXetNghiemListComponent } from './ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component';
import { KetQuaXetNghiemUpdateComponent } from './ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component';
import { KetQuaXetNghiemDetailComponent } from './ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component';
import { KetQuaXetNghiemSharedComponent } from './ket-qua-xet-nghiem-shared/ket-qua-xet-nghiem-shared.component';
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
import { KetQuaXetNghiemService } from './ket-qua-xet-nghiem.service';
import { BaseService } from 'src/app/core/services/base.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { KetQuaXetNghiemPopupGoiDuyetComponent } from './ket-qua-xet-nghiem-popup-goi-duyet/ket-qua-xet-nghiem-popup-goi-duyet.component';
import { KetQuaPhieuPopupComponent } from './ket-qua-phieu-popup/ket-qua-phieu-popup.component';
import { DuyetKetQuaXetNghiemModule } from '../../duyet-ket-qua/duyet-ket-qua.module';


@NgModule({
  declarations: [KetQuaXetNghiemListComponent, KetQuaXetNghiemUpdateComponent, KetQuaXetNghiemDetailComponent, KetQuaXetNghiemSharedComponent, KetQuaXetNghiemPopupGoiDuyetComponent,KetQuaPhieuPopupComponent],
  imports: [
    CommonModule,
    KetQuaXetNghiemRoutingModule,
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
      KetQuaXetNghiemService,
      { provide: BaseService, useClass: KetQuaXetNghiemService },
  ],
  entryComponents: [
    KetQuaXetNghiemPopupGoiDuyetComponent,
    KetQuaPhieuPopupComponent
  ]
})
export class KetQuaXetNghiemModule { }
