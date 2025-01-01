import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoHoatDongKhoaKhamBenhListComponent } from "./bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component";

const routes: Routes = [
    {
      path: '',
      component: BaoCaoHoatDongKhoaKhamBenhListComponent,
      data: {
        title: 'Báo cáo hoạt động khoa khám bệnh',
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
  export class BaoCaoHoatDongKhoaKhamBenhRoutingModule { }