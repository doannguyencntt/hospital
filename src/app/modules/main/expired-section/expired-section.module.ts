import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpiredSectionRoutingModule } from './expired-section-routing.module';
import { ExpiredSectionComponent } from './expired-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ExpiredSectionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ExpiredSectionRoutingModule,
    SharedModule
  ]
})
export class ExpiredSectionModule { }
