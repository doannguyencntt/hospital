import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaoHiemYTeRoutingModule } from './bao-hiem-y-te-routing.module';
import { BaoHiemYTeSharedComponent } from './bao-hiem-y-te-shared/bao-hiem-y-te-shared.component';
import { BaoHiemYTeXemComponent } from './bao-hiem-y-te-xem/bao-hiem-y-te-xem.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material';
import { BaoHiemYTePopupComponent } from './bao-hiem-y-te-popup/bao-hiem-y-te-popup.component';
import { BaoHiemYTeDownloadPopupComponent } from './bao-hiem-y-te-download-popup/bao-hiem-y-te-download-popup.component';

@NgModule({
  declarations: [BaoHiemYTeSharedComponent, BaoHiemYTeXemComponent, BaoHiemYTePopupComponent, BaoHiemYTeDownloadPopupComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    BaoHiemYTeRoutingModule,
    MatButtonModule,
    SharedModule
  ],entryComponents: [
    BaoHiemYTePopupComponent,
    BaoHiemYTeDownloadPopupComponent
]
})
export class BaoHiemYTeModule { }
