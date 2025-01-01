import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationAndTaskRoutingModule } from './notification-and-task-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotificationListComponent, 
    TaskListComponent
  ],
  imports: [
    CommonModule,
    NotificationAndTaskRoutingModule,
    LayoutModule,
    FormsModule,
    SharedModule
  ]
})
export class NotificationAndTaskModule { }
