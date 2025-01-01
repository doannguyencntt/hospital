import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingListComponent } from './marketing-list/marketing-list.component';
import { MarketingCreateComponent } from './marketing-create/marketing-create.component';
import { MarketingUpdateComponent } from './marketing-update/marketing-update.component';
import { MarketingSharedComponent } from './marketing-shared/marketing-shared.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatSelectModule, MatRadioModule, MatOptionModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MarketingService } from './marketing.service';
import { BaseService } from 'src/app/core/services/base.service';
import { MarketingDetailComponent } from './marketing-detail/marketing-detail.component';
import { PopupTimKiemBenhNhanComponent } from './popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component';
import { XuatQuaInPhieuPopupComponent } from './xuat-qua-in-phieu-popup/xuat-qua-in-phieu-popup.component';
import { ChoThuTienNoiTruModule } from '../../thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module';


@NgModule({
  declarations: [MarketingListComponent, MarketingCreateComponent, MarketingUpdateComponent, MarketingSharedComponent, MarketingDetailComponent, PopupTimKiemBenhNhanComponent, XuatQuaInPhieuPopupComponent],
  imports: [
    CommonModule,

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
    MarketingRoutingModule,
    ChoThuTienNoiTruModule
  ],
  providers: [
    MarketingService,
    { provide: BaseService, useClass: MarketingService },
  ],
  entryComponents: [
    PopupTimKiemBenhNhanComponent,
    XuatQuaInPhieuPopupComponent
],
})
export class MarketingModule { }
