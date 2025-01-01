import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoThongKeSoLuongThuThuatListComponent } from "./bao-cao-thong-ke-so-luong-thu-thuat-list/bao-cao-thong-ke-so-luong-thu-thuat-list.component";

const routes: Routes = [
    {
      path: '',
      component: BaoCaoThongKeSoLuongThuThuatListComponent,
      data: {
        title: 'Báo cáo thống kê số lượng thủ thuật',
        DocumentType: DocumentType.BaoCaoSoLuongThuThuat,
        SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BaoCaoThongKeSoLuongThuThuatRoutingModule { }