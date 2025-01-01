import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KetQuaTimKiemComponent } from './ket-qua-tim-kiem.component';


const routes: Routes = [
  {
    path: '',
    component: KetQuaTimKiemComponent,
    data: {
      title: 'Kết Quả Tìm Kiếm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KetQuaTimKiemRoutingModule { }
