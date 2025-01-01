import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  {
    path: 'danh-sach-thong-bao',
    component: NotificationListComponent,
    data: {
      title: 'Danh sách thông báo'
    }
  },
  {
    path: 'danh-sach-cong-viec',
    component: TaskListComponent,
    data: {
      title: 'Danh sách công việc'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationAndTaskRoutingModule { }
