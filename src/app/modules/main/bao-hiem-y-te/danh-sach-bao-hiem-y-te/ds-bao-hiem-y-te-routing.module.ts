import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DsBaoHiemYTeComponent } from './ds-bao-hiem-y-te/ds-bao-hiem-y-te.component';
import { ThongTinChiTietGoiBaoHiemYTeComponent } from './thong-tin-chi-tiet-goi-bao-hiem-y-te/thong-tin-chi-tiet-goi-bao-hiem-y-te.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: "",
    component: DsBaoHiemYTeComponent,
    data: {
      title: "Gửi bảo hiểm y tế trong ngày",
      DocumentType: DocumentType.GuiBaoHiemYTe,
      SecurityOperation: SecurityOperation.View
    },   
    canActivate: [PermisssionGuard] 
  },
  {
    path: "thong-tin-chi-tiet-goi-bhyt/:id",
    component: ThongTinChiTietGoiBaoHiemYTeComponent,
    data: {
      title: "Thông tin chi tiết gửi bảo hiểm y tế",
      DocumentType: DocumentType.GuiBaoHiemYTe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsBaoHiemYTeRoutingModule { }
