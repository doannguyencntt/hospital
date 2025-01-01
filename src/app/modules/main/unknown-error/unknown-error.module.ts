import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnknownErrorRoutingModule } from './unknown-error-routing.module';
import { UnknownErrorComponent } from './unknown-error.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [UnknownErrorComponent],
  imports: [
    CommonModule,
    UnknownErrorRoutingModule,
    MatButtonModule
  ]
})
export class UnknownErrorModule { }
