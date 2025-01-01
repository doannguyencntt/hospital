import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ChiTietDieuTriNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/chi-tiet-dieu-tri-noi-tru/chi-tiet-dieu-tri-noi-tru.component';
import { DanhSachDieuTriNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru.component';


const routes: Routes = [
  {
    path: '',
    component: DanhSachDieuTriNoiTruComponent,
    data: {
      title: "Danh sách điều trị nội trú",
      DocumentType: DocumentType.DanhSachDieuTriNoiTru,
      SecurityOperation: SecurityOperation.View
    }
  },
  {
    path: 'chi-tiet-dieu-tri/:id',
    component: ChiTietDieuTriNoiTruComponent,
    data: {
      title: "Chi tiết điều trị nội trú",
      DocumentType: DocumentType.DanhSachDieuTriNoiTru,
      SecurityOperation: SecurityOperation.Update
    }
  },
  {
    path: 'chi-tiet-dieu-tri/:id/:chuyenkhoa',
    component: ChiTietDieuTriNoiTruComponent,
    data: {
      title: "Chi tiết điều trị nội trú",
      DocumentType: DocumentType.DanhSachDieuTriNoiTru,
      SecurityOperation: SecurityOperation.Update
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DieuTriNoiTruRoutingModule { }
