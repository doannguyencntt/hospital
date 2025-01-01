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
import { MatDialogModule } from '@angular/material';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { BaseService } from 'src/app/core/services/base.service';
import { BaoCaoVienPhiThuTienListComponent } from './bao-cao-vien-phi-thu-tien-list/bao-cao-vien-phi-thu-tien-list.component';
import { BaoCaoVienPhiThuTienPopupComponent } from './bao-cao-vien-phi-thu-tien-popup/bao-cao-vien-phi-thu-tien-popup.component';
import { BaoCaoVienPhiThuTienRoutingModule } from './bao-cao-vien-phi-thu-tien-routing.module';
import { BaoCaoVienPhiThuTienService } from './bao-cao-vien-phi-thu-tien.service';



@NgModule({
  declarations: [BaoCaoVienPhiThuTienListComponent, BaoCaoVienPhiThuTienPopupComponent],
  imports: [
    CommonModule,
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
    BaoCaoVienPhiThuTienRoutingModule,
  ],
  providers: [
    BaoCaoVienPhiThuTienService,
    { provide: BaseService, useClass: BaoCaoVienPhiThuTienService},
  ],
  entryComponents: [
    BaoCaoVienPhiThuTienPopupComponent
  ]
})
export class BaoCaoVienPhiThuTienModule { }
