
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';


const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    data: {
      title: 'Khôi phục mật khẩu'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule { }
