import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BaseService } from 'src/app/core/services/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';


import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { NoiDungMauPdfRoutingModule } from './noi-dung-mau-pdf-routing.module';
import { NoiDungMauPdfService } from './noi-dung-mau-pdf.service';
import { NoiDungMauPdfListComponent } from './noi-dung-mau-pdf-list/noi-dung-mau-pdf-list.component';
import { NoiDungMauPdfUpdateComponent } from './noi-dung-mau-pdf-update/noi-dung-mau-pdf-update.component';
import { NoiDungMauPdfShareComponent } from './noi-dung-mau-pdf-share/noi-dung-mau-pdf-share.component';

@NgModule({
  declarations: [NoiDungMauPdfListComponent, NoiDungMauPdfUpdateComponent, NoiDungMauPdfShareComponent],
  imports: [
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

    NoiDungMauPdfRoutingModule
  ],
  providers: [
    NoiDungMauPdfService,
    { provide: BaseService, useClass: NoiDungMauPdfService },
  ]
})
export class NoiDungMauPdfModule { }
