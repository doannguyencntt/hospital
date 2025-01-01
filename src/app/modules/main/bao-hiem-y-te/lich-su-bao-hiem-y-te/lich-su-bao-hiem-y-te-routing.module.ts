import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { PermisssionGuard } from "src/app/core/guards/permission-guard.service";
import { DsLichSuBaoHiemYTeComponent } from "./ds-lich-su-bao-hiem-y-te/ds-lich-su-bao-hiem-y-te.component";
import { ChiTietLichSuBaoHiemYTeComponent } from './chi-tiet-lich-su-bao-hiem-y-te/chi-tiet-lich-su-bao-hiem-y-te.component';

const routes: Routes = [
  {
    path: "",
    component: DsLichSuBaoHiemYTeComponent,
    data: {
      title: "Danh sách lịch sử bhyt",
      DocumentType: DocumentType.LichSuGuiBHYT,
      SecurityOperation: SecurityOperation.View,
    },
    canActivate: [PermisssionGuard],
  },
  {
    path: "thong-tin-chi-tiet-lich-su-bhyt/:id",
    component: ChiTietLichSuBaoHiemYTeComponent,
    data: {
      title: "Thông tin chi tiết lịch sử bảo hiểm y tế",
      DocumentType: DocumentType.LichSuGuiBHYT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LichSuBaoHiemYTeRoutingModule {}
