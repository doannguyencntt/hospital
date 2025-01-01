import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuuTruHoSoRoutingModule } from './luu-tru-ho-so-routing.module';
import { LuuTruHoSoListComponent } from './luu-tru-ho-so-list/luu-tru-ho-so-list.component';
import { DieuTriNoiTruModule } from '../dieu-tri-noi-tru.module';
import { MatCheckboxModule } from '@angular/material';
import { LuuTruHoSoUpdatePopupComponent } from './luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component';


@NgModule({
  declarations: [LuuTruHoSoListComponent, LuuTruHoSoUpdatePopupComponent],
  imports: [
    CommonModule,
    LuuTruHoSoRoutingModule,
    DieuTriNoiTruModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    LuuTruHoSoUpdatePopupComponent
  ]
})
export class LuuTruHoSoModule { }
