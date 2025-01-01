import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoHieuQuaCongViecListComponent } from "./bao-cao-hieu-qua-cong-viec-list/bao-cao-hieu-qua-cong-viec-list.component";
const routes: Routes = [
    {
      path: '',
      component: BaoCaoHieuQuaCongViecListComponent,
      data: {
        title: 'Báo cáo hiệu quả công việc',
        DocumentType: DocumentType.BaoCaoHieuQuaCongViec,
        SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BaoCaoHieuQuaCongViecRoutingModule { }