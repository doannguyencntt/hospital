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
import { BaoCaoXuatNhapTonRoutingModule } from './bao-cao-xuat-nhap-ton-routing.module';
import { BaoCaoXuatNhapTonListComponent } from './bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component';
import { BaoCaoXuatNhapTonService } from './bao-cao-xuat-nhap-ton.service';
import { BaoCaoXuatNhapTonPopupComponent } from './bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component';


@NgModule({
  declarations: [BaoCaoXuatNhapTonListComponent, BaoCaoXuatNhapTonPopupComponent],
  imports: [
    CommonModule,
    BaoCaoXuatNhapTonRoutingModule,
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
    BaoCaoXuatNhapTonService,
    { provide: BaseService, useClass: BaoCaoXuatNhapTonService},
  ],
  entryComponents: [
    BaoCaoXuatNhapTonPopupComponent
  ]
})
export class BaoCaoXuatNhapTonModule { }
