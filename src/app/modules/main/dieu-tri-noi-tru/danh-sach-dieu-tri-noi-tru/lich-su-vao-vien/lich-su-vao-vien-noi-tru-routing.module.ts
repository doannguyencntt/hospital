import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiTietKhamChuaBenhComponent } from './chi-tiet-kham-chua-benh/chi-tiet-kham-chua-benh.component';
import { LichSuVaoVienComponent } from './lich-su-vao-vien/lich-su-vao-vien.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuVaoVienNoiTruRoutingModule { }
