import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
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
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BaoCaoTonKhoRoutingModule } from './bao-cao-ton-kho-routing.module';
import { BaoCaoTonKhoListComponent } from './bao-cao-ton-kho-list/bao-cao-ton-kho-list.component';
import { BaoCaoTonKhoService } from './bao-cao-ton-kho.service';
import { BaoCaoTonKhoPopupComponent } from './bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component';


@NgModule({
  declarations: [BaoCaoTonKhoListComponent, BaoCaoTonKhoPopupComponent],
  imports: [
    CommonModule,
    BaoCaoTonKhoRoutingModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    GridModule,
    MatCheckboxModule
  ]
  ,
  providers: [
    BaoCaoTonKhoService,
    { provide: BaseService, useClass: BaoCaoTonKhoService},
  ],
  entryComponents: [
    BaoCaoTonKhoPopupComponent
  ]
})
export class BaoCaoTonKhoModule { }
