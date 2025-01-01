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

import { NoiDungMauEmailSmsNotifyRoutingModule } from './noi-dung-mau-email-sms-notify-routing.module';
import { NoiDungMauEmailSmsNotifyListComponent } from './noi-dung-mau-email-sms-notify-list/noi-dung-mau-email-sms-notify-list.component';
import { NoiDungMauEmailSmsNotifyShareComponent } from './noi-dung-mau-email-sms-notify-share/noi-dung-mau-email-sms-notify-share.component';
import { NoiDungMauEmailSmsNotifyUpdateComponent } from './noi-dung-mau-email-sms-notify-update/noi-dung-mau-email-sms-notify-update.component';
import { NoiDungMauEmailSmsNotifyService } from './noi-dung-mau-email-sms-notify.service';

@NgModule({
  declarations: [
    NoiDungMauEmailSmsNotifyListComponent, 
    NoiDungMauEmailSmsNotifyShareComponent, 
    NoiDungMauEmailSmsNotifyUpdateComponent
  ],
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

    NoiDungMauEmailSmsNotifyRoutingModule
  ],
  providers: [
    NoiDungMauEmailSmsNotifyService,
    { provide: BaseService, useClass: NoiDungMauEmailSmsNotifyService },
  ]
})
export class NoiDungMauEmailSmsNotifyModule { }
