import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XuatKhoRoutingModule } from './xuat-kho-routing.module';
import { XuatKhoListComponent } from './xuat-kho-list/xuat-kho-list.component';
import { XuatKhoCreateComponent } from './xuat-kho-create/xuat-kho-create.component';
import { XuatKhoUpdateComponent } from './xuat-kho-update/xuat-kho-update.component';
import { XuatKhoSharedComponent } from './xuat-kho-shared/xuat-kho-shared.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule
  , MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule
  , MatRadioModule, 
  MatOptionModule} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { XuatKhoService } from './xuat-kho.service';
import { BaseService } from 'src/app/core/services/base.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { XuatKhoInPhieuPopupComponent } from './xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component';

@NgModule({
  declarations: [XuatKhoListComponent, XuatKhoCreateComponent, XuatKhoUpdateComponent, XuatKhoSharedComponent, XuatKhoInPhieuPopupComponent],
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
    XuatKhoRoutingModule,
    GridModule,
  ], entryComponents: [
    XuatKhoInPhieuPopupComponent
  ],
  providers: [
    XuatKhoService,
    { provide: BaseService, useClass: XuatKhoService },
  ]
})
export class XuatKhoModule { }
