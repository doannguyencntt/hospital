import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcdRoutingModule } from './icd-routing.module';
import { IcdListComponent } from './icd-list/icd-list.component';
import { IcdCreateComponent } from './icd-create/icd-create.component';
import { IcdUpdateComponent } from './icd-update/icd-update.component';
import { IcdSharedComponent } from './icd-shared/icd-shared.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { IcdService } from './icd.service';
import { BaseService } from 'src/app/core/services/base.service';

@NgModule({
  declarations: [IcdListComponent, IcdCreateComponent, IcdUpdateComponent, IcdSharedComponent],
  imports: [
    CommonModule,
    IcdRoutingModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
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
    ReactiveFormsModule,
    MatRadioModule,
    DropDownButtonModule
  ]
  ,
  providers: [
    IcdService,
    { provide: BaseService, useClass: IcdService },
  ]
})
export class IcdModule { }
