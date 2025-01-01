import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoDuocChiTietXuatNoiBoListComponent } from "./bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component";

const routes: Routes = [
    {
      path: '',
      component: BaoCaoDuocChiTietXuatNoiBoListComponent,
      data: {
        title: 'Báo cáo chi tiết xuất nội bộ',
        DocumentType: DocumentType.BaoCaoDuocChiTietXuatNoiBo,
        SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BaoCaoDuocChiTietXuatNoiBoRoutingModule { }