


import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { VersionincorrectRoutingModule } from "./versionincorrect-routing.module";
import { VersionincorrectComponent } from './versionincorrect.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
    imports: [
        CommonModule,
        VersionincorrectRoutingModule,
        FormsModule,
        SharedModule      
    ],
    declarations: [
        VersionincorrectComponent
    ]
})
export class  VersionincorrectModule { }
