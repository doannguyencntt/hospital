import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, } from "@angular/material";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { SharedModule } from "src/app/shared/shared.module";
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, } from "@angular/material";
import { IconModule } from "@visurel/iconify-angular";
import { MatRadioModule } from "@angular/material/radio";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { GridModule } from "@progress/kendo-angular-grid";
import { BaseService } from 'src/app/core/services/base.service';
import { DuyetHoanTraKSNKRoutingModule } from './duyet-hoan-tra-ksnk-routing.module';
import { DuyetHoanTraKSNKListComponent } from './duyet-hoan-tra-ksnk-list/duyet-hoan-tra-ksnk-list.component';
import { DuyetHoanTraKSNKChiTietComponent } from './duyet-hoan-tra-ksnk-chi-tiet/duyet-hoan-tra-ksnk-chi-tiet.component';
import { TuChoiDuyetKSNKComponent } from './tu-choi-duyet-ksnk/tu-choi-duyet-ksnk.component';
import { DuyetHoanTraKSNKService } from './duyet-hoan-tra-ksnk.service';
import { YeuCauTraKSNKModule } from '../yeu-cau-tra-ksnk/yeu-cau-tra-ksnk.module';

@NgModule({
  declarations: [
    DuyetHoanTraKSNKListComponent,
    DuyetHoanTraKSNKChiTietComponent,
    TuChoiDuyetKSNKComponent
  ],
  imports: [
    CommonModule,
    DuyetHoanTraKSNKRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    LayoutModule,
    GridModule,
    MatCheckboxModule,
    YeuCauTraKSNKModule
  ],
  entryComponents: [
    TuChoiDuyetKSNKComponent    
  ],
  providers: [
    DuyetHoanTraKSNKService,
    { provide: BaseService, useClass: DuyetHoanTraKSNKService },
  ]
})
export class DuyetHoanTraKSNKModule { }
