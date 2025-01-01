import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MatCheckboxModule, MatDialogModule, MatInputModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { TuDienDichVuKyThuatSharedComponent } from './tu-dien-dich-vu-ky-thuat-shared/tu-dien-dich-vu-ky-thuat-shared.component';
import { TuDienDichVuKyThuatListComponent } from './tu-dien-dich-vu-ky-thuat/tu-dien-dich-vu-ky-thuat-list.component';
import { TuDienDichVuKyThuatRoutingModule } from './tu-dien-dich-vu-ky-thuat-routing.module';
@NgModule({
  declarations: [TuDienDichVuKyThuatListComponent, TuDienDichVuKyThuatSharedComponent],
  imports: [
    CommonModule,
    TuDienDichVuKyThuatRoutingModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    TreeViewModule,
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,
    LayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    ScrollToModule.forRoot(),
    GridModule,
    IntlModule,
    MatRadioModule,
    PopupModule,
    ContextMenuModule
  ]
})
export class TuDienDichVuKyThuatModule { }
