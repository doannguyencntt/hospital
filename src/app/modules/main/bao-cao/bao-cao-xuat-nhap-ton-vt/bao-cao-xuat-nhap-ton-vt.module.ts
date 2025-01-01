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
import { BaoCaoXuatNhapTonVtListComponent } from './bao-cao-xuat-nhap-ton-vt-list/bao-cao-xuat-nhap-ton-vt-list.component';
import { BaoCaoXuatNhapTonVtPopupComponent } from './bao-cao-xuat-nhap-ton-vt-popup/bao-cao-xuat-nhap-ton-vt-popup.component';
import { BaoCaoXuatNhapTonVtService } from './bao-cao-xuat-nhap-ton-vt.service';
import { BaoCaoXuatNhapTonVtRoutingModule } from './bao-cao-xuat-nhap-ton-vt-routing.module';



@NgModule({
  declarations: [BaoCaoXuatNhapTonVtListComponent, BaoCaoXuatNhapTonVtPopupComponent],
  imports: [
    CommonModule,
    BaoCaoXuatNhapTonVtRoutingModule,
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
    BaoCaoXuatNhapTonVtService,
    { provide: BaseService, useClass: BaoCaoXuatNhapTonVtService},
  ],
  entryComponents: [
    BaoCaoXuatNhapTonVtPopupComponent
  ]
})
export class BaoCaoXuatNhapTonVtModule { }
