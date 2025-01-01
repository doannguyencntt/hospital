import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoiGioiThieuRoutingModule } from './noi-gioi-thieu-routing.module';
import { NoiGioiThieuListComponent } from './noi-gioi-thieu-list/noi-gioi-thieu-list.component';
import { NoiGioiThieuCreateComponent } from './noi-gioi-thieu-create/noi-gioi-thieu-create.component';
import { NoiGioiThieuUpdateComponent } from './noi-gioi-thieu-update/noi-gioi-thieu-update.component';
import { NoiGioiThieuSharedComponent } from './noi-gioi-thieu-shared/noi-gioi-thieu-shared.component';

import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { NoiGioiThieuService } from './noi-gioi-thieu.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NoiGioiThieuPopupComponent } from './noi-gioi-thieu-popup/noi-gioi-thieu-popup.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [NoiGioiThieuListComponent, NoiGioiThieuCreateComponent, NoiGioiThieuUpdateComponent, NoiGioiThieuSharedComponent, NoiGioiThieuPopupComponent],
  imports: [
    NoiGioiThieuRoutingModule,
    CommonModule,
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
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    LayoutModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [
    NoiGioiThieuService,
    { provide: BaseService, useClass: NoiGioiThieuService },
  ],
  entryComponents: [
    NoiGioiThieuPopupComponent
  ]
})
export class NoiGioiThieuModule { }
