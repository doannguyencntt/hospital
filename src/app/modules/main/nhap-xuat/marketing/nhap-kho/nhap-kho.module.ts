import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhapKhoRoutingModule } from './nhap-kho-routing.module';
import { NhapKhoListComponent } from './nhap-kho-list/nhap-kho-list.component';


@NgModule({
  declarations: [NhapKhoListComponent],
  imports: [
    CommonModule,
    NhapKhoRoutingModule
  ]
})
export class NhapKhoModule { }
