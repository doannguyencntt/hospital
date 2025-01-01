import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { DuyetNhapKhoService } from './duyet-nhap-kho.service';
import { BaseService } from 'src/app/core/services/base.service';
import { DuyetVatTuNhapKhoListComponent } from './duyet-nhap-kho-list/duyet-nhap-kho-list.component';
import { DuyetVatTuNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet/duyet-nhap-kho-chi-tiet.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetVatTuNhapKhoListComponent,
    data: {
      title: 'Danh Sách Duyệt Nhập Kho Vật Tư',
      DocumentType: DocumentType.DuyetNhapKhoVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: DuyetVatTuNhapKhoChiTietComponent,
    data: {
      title: 'Duyệt Nhập Kho Vật Tư',
      DocumentType: DocumentType.DuyetNhapKhoVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    CommonModule,
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

    RouterModule],
  providers: [
    DuyetNhapKhoService,
    { provide: BaseService, useClass: DuyetNhapKhoService },
  ]
})
export class DuyetVatTuNhapKhoRoutingModule { }
