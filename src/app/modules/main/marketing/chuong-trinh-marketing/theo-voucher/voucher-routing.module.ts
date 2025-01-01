import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VoucherCreateComponent } from './voucher-create/voucher-create.component';
import { VoucherUpdateComponent } from './voucher-update/voucher-update.component';

const routes: Routes = [
    {
        path: '',
        component: VoucherListComponent,
        data: {
          title: 'Danh sách quà tặng',      
          DocumentType: DocumentType.VoucherMarketing,
          SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: VoucherCreateComponent,
        data: {
          title: 'Thêm voucher',      
          DocumentType: DocumentType.VoucherMarketing,
          SecurityOperation:SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: VoucherUpdateComponent,
        data: {
          title: 'Chỉnh sửa voucher',      
          DocumentType: DocumentType.VoucherMarketing,
          SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VoucherRoutingModule { }