import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatRadioModule } from '@angular/material/radio';
import { GridModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { LichSuCapThuocBHYTRoutingModule } from './lich-su-cap-thuoc-bhyt-routing.module';
import { LichSuCapThuocBHYTChiTietComponent } from './lich-su-cap-thuoc-bhyt-chi-tiet/lich-su-cap-thuoc-bhyt-chi-tiet.component';
import { QuayThuocModule } from '../../quay-thuoc.module';
import { LichSuCapThuocBHYTService } from './lich-su-cap-thuoc-bhyt.service';
import { LichSuCapThuocBHYTListComponent } from './lich-su-cap-thuoc-bhyt-list/lich-su-cap-thuoc-bhyt-list.component';
@NgModule({
  declarations: [
    LichSuCapThuocBHYTListComponent,
    LichSuCapThuocBHYTChiTietComponent    
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    LichSuCapThuocBHYTRoutingModule,
    CommonModule,
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
    QuayThuocModule
  ],
  entryComponents: [
  ], providers: [
    LichSuCapThuocBHYTService,
    { provide: BaseService, useClass: LichSuCapThuocBHYTService },
  ]
})
export class LichSuCapThuocBHYTModule { }
