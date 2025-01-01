import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhSachDieuTriNoiTruRoutingModule } from './danh-sach-dieu-tri-noi-tru-routing.module';
import { DieuTriNoiTruModule } from '../dieu-tri-noi-tru.module';
@NgModule({
  imports: [
    CommonModule,
    DieuTriNoiTruModule,
    DanhSachDieuTriNoiTruRoutingModule
  ],
  declarations: [],
})
export class DanhSachDieuTriNoiTruModule { }
