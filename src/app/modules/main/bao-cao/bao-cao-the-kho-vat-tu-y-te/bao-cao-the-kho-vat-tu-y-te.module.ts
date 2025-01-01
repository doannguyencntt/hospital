import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatCheckboxModule, MatDialogModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BaoCaoTheKhoVatTuListComponent } from './bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component';
import { BaoCaoTheKhoRoutingModule } from './bao-cao-the-kho-vat-tu-y-te-routing.module';
import { BaoCaoTheKhoVatTuService } from './bao-cao-the-kho-vat-tu-y-te.service';

@NgModule({
  declarations: [BaoCaoTheKhoVatTuListComponent],
  imports: [
    CommonModule,
    BaoCaoTheKhoRoutingModule,
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
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,
    DropDownButtonModule
  ],
  providers: [
    BaoCaoTheKhoVatTuService,
    { provide: BaseService, useClass: BaoCaoTheKhoVatTuService},
  ]
})
export class BaoCaoTheKhoModule { }
