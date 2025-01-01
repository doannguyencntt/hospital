import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseService } from 'src/app/core/services/base.service';

import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { DichVuKyThuatRoutingModule } from './dich-vu-ky-thuat-routing.module';
import { DichVuKyThuatListComponent } from './dich-vu-ky-thuat-list/dich-vu-ky-thuat-list.component';
import { DichVuKyThuatService } from './dich-vu-ky-thuat.service';
import { DichVuKyThuatCreateComponent } from './dich-vu-ky-thuat-create/dich-vu-ky-thuat-create.component';
import { DichVuKyThuatUpdateComponent } from './dich-vu-ky-thuat-update/dich-vu-ky-thuat-update.component';
import { DichVuKyThuatSharedComponent } from './dich-vu-ky-thuat-shared/dich-vu-ky-thuat-shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { DichVuKyThuatChonFilePopupComponent } from './dich-vu-ky-thuat-chon-file-popup/dich-vu-ky-thuat-chon-file-popup.component';
import { ThongTinDichVuKyThuatPopupComponent } from './thong-tin-dich-vu-ky-thuat-popup/thong-tin-dich-vu-ky-thuat-popup.component';

@NgModule({
  declarations: [DichVuKyThuatListComponent, DichVuKyThuatCreateComponent, DichVuKyThuatUpdateComponent, DichVuKyThuatSharedComponent, DichVuKyThuatChonFilePopupComponent, ThongTinDichVuKyThuatPopupComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    DichVuKyThuatRoutingModule,
    MatDialogModule,
  ],
  providers: [
    DichVuKyThuatService,
    { provide: BaseService, useClass: DichVuKyThuatService },
  ],
  entryComponents:[
    DichVuKyThuatChonFilePopupComponent,
    ThongTinDichVuKyThuatPopupComponent
  ]
})
export class DichVuKyThuatModule { }
