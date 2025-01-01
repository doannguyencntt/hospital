import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThongTinHoSoCuaToiComponent } from './thong-tin-ho-so-cua-toi/thong-tin-ho-so-cua-toi.component';

const routes: Routes = [{
    path: '',
    component: ThongTinHoSoCuaToiComponent,
    data: {
      title: 'Hồ sơ của tôi', 
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoSoCuaToiRoutingModule { }
