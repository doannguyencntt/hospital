import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDialogModule, MatTabsModule, MatIconModule, MatMenuModule, MatButtonToggleModule
  , MatTooltipModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule
  , MatRadioModule, 
  MatOptionModule} from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { BaseService } from 'src/app/core/services/base.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TongHopDuTruMuaTaiKhoaDuocRoutingModule } from './tong-hop-du-tru-mua-tai-khoa-duoc-routing.module';
import { TongHopDuTruMuaTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component';
import { TongHopDuTruMuaTaiKhoaDuocService } from './tong-hop-du-tru-mua-tai-khoa-duoc.service';
import { TongHopDuTruMuaTaiKhoaDuocSharedComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component';
import { TongHopDuTruMuaTaiKhoaDuocUpdateComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component';
import { TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component';
import { TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component';
import { TongHopDuTruMuaTaiKhoaDuocTuChoiComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component';
import { DuyetDuTruMuaDuocPhamSharedComponent } from './duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component';
import { DuyetDuTruMuaDuocPhamUpdateComponent } from './duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component';
import { TuChoiDuyetPopupComponent } from './tu-choi-duyet-popup/tu-choi-duyet-popup.component';
import { GoiGiamDocDuTruMuaDuocPhamSharedComponent } from './goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component';
import { GoiGiamDocDuTruMuaDuocPhamUpdateComponent } from './goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component';
import { GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component';
import { PhieuMuaTruTaiKhoaDuocComponent } from './phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component'; 

@NgModule({
  declarations: [TongHopDuTruMuaTaiKhoaDuocListComponent, TongHopDuTruMuaTaiKhoaDuocSharedComponent, TongHopDuTruMuaTaiKhoaDuocUpdateComponent, TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent, TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent, TongHopDuTruMuaTaiKhoaDuocTuChoiComponent, DuyetDuTruMuaDuocPhamSharedComponent, DuyetDuTruMuaDuocPhamUpdateComponent, TuChoiDuyetPopupComponent, GoiGiamDocDuTruMuaDuocPhamSharedComponent, GoiGiamDocDuTruMuaDuocPhamUpdateComponent, GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent, PhieuMuaTruTaiKhoaDuocComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    TongHopDuTruMuaTaiKhoaDuocRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    LayoutModule,
    MatCheckboxModule,
  ],
  providers: [
    TongHopDuTruMuaTaiKhoaDuocService, 
    { provide: BaseService, useClass: TongHopDuTruMuaTaiKhoaDuocService },
  ],
  entryComponents: [
    TuChoiDuyetPopupComponent,
    PhieuMuaTruTaiKhoaDuocComponent,
    GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent
  ]
})
export class TongHopDuTruMuaTaiKhoaDuocModule { }
