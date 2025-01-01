import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';

import { DuocPhamService } from './duoc-pham.service';
import { DuocPhamRoutingModule } from './duoc-pham-routing.module';
import { DuocPhamSharedComponent } from './duoc-pham-shared/duoc-pham-shared.component';
import { DuocPhamCreateComponent } from './duoc-pham-create/duoc-pham-create.component';
import { DuocPhamUpdateComponent } from './duoc-pham-update/duoc-pham-update.component';
import { DuocPhamListComponent } from './duoc-pham-list/duoc-pham-list.component';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatButtonToggleModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { DuocPhamChonFilePopupComponent } from './duoc-pham-chon-file-popup/duoc-pham-chon-file-popup.component';
import { ThongTinDuocPhamPopupComponent } from './thong-tin-duoc-pham-popup/thong-tin-duoc-pham-popup.component';


@NgModule({
  declarations: [
    DuocPhamSharedComponent, 
    DuocPhamCreateComponent, 
    DuocPhamUpdateComponent, 
    DuocPhamListComponent, DuocPhamChonFilePopupComponent, ThongTinDuocPhamPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TooltipModule,
    PageLayoutModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    DuocPhamRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    IconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    DuocPhamService,
    {provide: BaseService, useClass: DuocPhamService}, 
  ],
  entryComponents:[DuocPhamChonFilePopupComponent, ThongTinDuocPhamPopupComponent]
})
export class DuocPhamModule { }
