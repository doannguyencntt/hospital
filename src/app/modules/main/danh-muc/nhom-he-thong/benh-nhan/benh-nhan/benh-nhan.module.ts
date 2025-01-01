import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatIconModule, MatButtonToggleModule, MatCheckboxModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatTooltipModule, MatMenuModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BenhNhanBhytComponent } from './benh-nhan-bhyt/benh-nhan-bhyt.component';
// import { BenhNhanBhytErrorComponent } from './benh-nhan-bhyt-error/benh-nhan-bhyt-error.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatTabsModule } from '@angular/material';


import { BenhNhanRoutingModule } from './benh-nhan-routing.module';
import { BenhNhanListComponent } from './benh-nhan-list/benh-nhan-list.component';
import { BenhNhanUpdateComponent } from './benh-nhan-update/benh-nhan-update.component';
import { BenhNhanSharedComponent } from './benh-nhan-shared/benh-nhan-shared.component';
import { BenhNhanCreateComponent } from './benh-nhan-create/benh-nhan-create.component';
import { BenhNhanService } from './benh-nhan.service';
import { TheBenhNhanBenhNhanPopupComponent } from './the-benh-nhan-benh-nhan-popup/the-benh-nhan-benh-nhan-popup.component';


@NgModule({
  declarations: [BenhNhanListComponent, BenhNhanUpdateComponent, BenhNhanSharedComponent, BenhNhanCreateComponent, TheBenhNhanBenhNhanPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    BenhNhanRoutingModule,
    DateInputsModule,
    MatIconModule,
    IconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    SharedModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    TooltipModule,
    MatMenuModule,
    LayoutModule,
    MatDialogModule,
    MatTabsModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
  ],
  providers: [
    BenhNhanService,
    { provide: BaseService, useClass: BenhNhanService },
  ],
  entryComponents: [
    TheBenhNhanBenhNhanPopupComponent]
})
export class BenhNhanModule { }
