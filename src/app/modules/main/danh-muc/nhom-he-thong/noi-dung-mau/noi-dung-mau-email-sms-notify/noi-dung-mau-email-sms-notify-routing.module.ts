import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from '../../../../../../shared/enum/security-operation.enum';
import { DocumentType } from '../../../../../../shared/enum/document-type.enum';
import { PermisssionGuard } from '../../../../../../core/guards/permission-guard.service';

import { NoiDungMauEmailSmsNotifyListComponent } from './noi-dung-mau-email-sms-notify-list/noi-dung-mau-email-sms-notify-list.component';
import { NoiDungMauEmailSmsNotifyUpdateComponent } from './noi-dung-mau-email-sms-notify-update/noi-dung-mau-email-sms-notify-update.component';


const routes: Routes = [ 
  {
  path: '',
  component: NoiDungMauEmailSmsNotifyListComponent,
  data: {
    title: 'Danh sách nội dung mẫu Email, SMS, Thông Báo',
    DocumentType: DocumentType.QuanLyCacMessagingTemplate,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: NoiDungMauEmailSmsNotifyUpdateComponent,
  data: {
    title: 'Chỉnh sửa nội dung mẫu Email, SMS, Thông Báo',
    DocumentType: DocumentType.QuanLyCacMessagingTemplate,
    SecurityOperation: SecurityOperation.Update
  },
  canActivate: [PermisssionGuard]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoiDungMauEmailSmsNotifyRoutingModule { }
