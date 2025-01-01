import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DanhSachCanLamSangComponent } from "./danh-sach-can-lam-sang/danh-sach-can-lam-sang.component";
import { ThongTinChiTietComponent } from "./thong-tin-chi-tiet/thong-tin-chi-tiet.component";
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { KetQuaCdhaTdcnUpdateComponent } from "./ket-qua-cdha-tdcn-update/ket-qua-cdha-tdcn-update.component";
const routes: Routes = [
  {
    path: "",
    component: DanhSachCanLamSangComponent,
    data: {
      title: "Kết quả CĐHA, TDCN",
      DocumentType: DocumentType.CanLamSang,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  // {
  //   path: "thong-tin-chi-tiet/:id",
  //   component: ThongTinChiTietComponent,
  //   data: {
  //     title: "Thông tin chi tiết cận lâm sàng",
  //     DocumentType: DocumentType.CanLamSang,
  //     SecurityOperation: SecurityOperation.View
  //   },
  //   canActivate: [PermisssionGuard]
  // }, 
  {
    path: "chi-tiet/:id",
    component: KetQuaCdhaTdcnUpdateComponent,
    data: {
      title: "Chi tiết kết quả CĐHA, TDCN",
      DocumentType: DocumentType.CanLamSang,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanLamSangRoutingModule {}
