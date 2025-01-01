import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoHoatDongClsListComponent } from "./bao-cao-hoat-dong-cls-list/bao-cao-hoat-dong-cls-list.component";
const routes: Routes = [
    {
      path: '',
      component: BaoCaoHoatDongClsListComponent,
      data: {
        title: 'Báo cáo hoạt động cận lâm sàng',
        DocumentType: DocumentType.BaoCaoHoatDongKhoaKhamBenh,
        SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BaoCaoHoatDongClsRoutingModule { }