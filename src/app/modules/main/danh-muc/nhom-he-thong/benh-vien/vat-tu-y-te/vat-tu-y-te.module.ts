import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatTuYTeRoutingModule } from './vat-tu-y-te-routing.module';
import { VatTuYTeListComponent } from './vat-tu-y-te-list/vat-tu-y-te-list.component';
import { VatTuYTeService } from './vat-tu-y-te.service';
import { BaseService } from 'src/app/core/services/base.service';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { VatTuYTeCreateComponent } from './vat-tu-y-te-create/vat-tu-y-te-create.component';
import { VatTuYTeSharedComponent } from './vat-tu-y-te-shared/vat-tu-y-te-shared.component';
import { VatTuYTeUpdateComponent } from './vat-tu-y-te-update/vat-tu-y-te-update.component';
import { VatTuYTeChonFilePopupComponent } from './vat-tu-y-te-chon-file-popup/vat-tu-y-te-chon-file-popup.component';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThongTinVatTuYTePopupComponent } from './thong-tin-vat-tu-y-te-popup/thong-tin-vat-tu-y-te-popup.component';
@NgModule({
  declarations: [
    VatTuYTeListComponent,
    VatTuYTeCreateComponent,
    VatTuYTeSharedComponent,
    VatTuYTeUpdateComponent,
    VatTuYTeChonFilePopupComponent,
    ThongTinVatTuYTePopupComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SharedModule,
    VatTuYTeRoutingModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    VatTuYTeService,
    { provide: BaseService,    useClass: VatTuYTeService },
  ],
  entryComponents:[VatTuYTeChonFilePopupComponent, ThongTinVatTuYTePopupComponent]
})
export class VatTuYTeModule { }
