import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToasterModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
    ],
})
export class  AuthModule { }
