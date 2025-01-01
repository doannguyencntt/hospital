import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayMauXetNghiemRoutingModule } from './lay-mau-xet-nghiem-routing.module';
import { LayMauXetNghiemListComponent } from './lay-mau-xet-nghiem-list/lay-mau-xet-nghiem-list.component';
import { LayMauXetNghiemCreateComponent } from './lay-mau-xet-nghiem-create/lay-mau-xet-nghiem-create.component';
import { LayMauXetNghiemDetailComponent } from './lay-mau-xet-nghiem-detail/lay-mau-xet-nghiem-detail.component';
import { LayMauXetNghiemInPhieuGuiMauComponent } from './lay-mau-xet-nghiem-in-phieu-gui-mau/lay-mau-xet-nghiem-in-phieu-gui-mau.component';
import { LayMauXetNghiemXacNhanHuyPopupComponent } from './lay-mau-xet-nghiem-xac-nhan-huy-popup/lay-mau-xet-nghiem-xac-nhan-huy-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '@visurel/iconify-angular';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LayMauXetNghiemInBarcodeComponent } from './lay-mau-xet-nghiem-in-barcode/lay-mau-xet-nghiem-in-barcode.component';
import { LayMauXetNghiemKetQuaPopupComponent } from './lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { DuyetKetQuaXetNghiemModule } from '../duyet-ket-qua/duyet-ket-qua.module';

@NgModule({
  declarations: [
    LayMauXetNghiemListComponent, 
    LayMauXetNghiemCreateComponent, 
    LayMauXetNghiemDetailComponent, 
    LayMauXetNghiemInPhieuGuiMauComponent, 
    LayMauXetNghiemXacNhanHuyPopupComponent, 
    LayMauXetNghiemInBarcodeComponent, LayMauXetNghiemKetQuaPopupComponent
  ],
  imports: [
    CommonModule,
    LayMauXetNghiemRoutingModule,
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
    LayoutModule,
    MatDialogModule,
    GridModule,
    IntlModule,
    PdfViewerModule,
    MatRadioModule,
    MatCheckboxModule,
    DuyetKetQuaXetNghiemModule
  ],
  entryComponents: [
    LayMauXetNghiemXacNhanHuyPopupComponent,
    LayMauXetNghiemInPhieuGuiMauComponent,
    LayMauXetNghiemInBarcodeComponent,
    LayMauXetNghiemKetQuaPopupComponent
  ]
})
export class LayMauXetNghiemModule { }
