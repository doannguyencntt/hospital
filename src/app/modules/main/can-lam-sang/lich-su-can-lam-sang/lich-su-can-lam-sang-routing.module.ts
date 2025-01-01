import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LichSuDanhSachCanLamSangComponent } from "./lich-su-danh-sach-can-lam-sang/lich-su-danh-sach-can-lam-sang.component";
import { ThongTinLichSuChiTietComponent } from "./thong-tin-lich-su-chi-tiet/thong-tin-lich-su-chi-tiet.component";
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: "",
    component: LichSuDanhSachCanLamSangComponent,
    data: {
      title: "Lịch sử kết quả cận lâm sàng",
      DocumentType: DocumentType.LichSuCanLamSang,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: "chi-tiet/:id",
    component: ThongTinLichSuChiTietComponent,
    data: {
      title: "Thông tin lịch sử cận lâm sàng",
      DocumentType: DocumentType.LichSuCanLamSang,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LichSuCanLamSangRoutingModule {}
