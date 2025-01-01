import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetNhapKhoListComponent } from './duyet-nhap-kho-list/duyet-nhap-kho-list.component';
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
import { DuyetNhapKhoChiTietComponent } from './duyet-nhap-kho-chi-tiet/duyet-nhap-kho-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: DuyetNhapKhoListComponent,
    data: {
      title: 'Danh Sách Duyệt Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.DuyetNhapKhoDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },

  {
    path: 'chi-tiet/:id',
    component: DuyetNhapKhoChiTietComponent,
    data: {
      title: 'Duyệt Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.DuyetNhapKhoDuocPham,
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
export class DuyetNhapKhoRoutingModule { }
