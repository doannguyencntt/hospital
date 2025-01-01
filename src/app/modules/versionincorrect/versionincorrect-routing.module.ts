


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersionincorrectComponent } from './versionincorrect.component';


const routes: Routes = [
  {
    path: 'version-incorrect',
    component: VersionincorrectComponent,
    data: {
      title: 'Version Incorrect'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionincorrectRoutingModule { }
