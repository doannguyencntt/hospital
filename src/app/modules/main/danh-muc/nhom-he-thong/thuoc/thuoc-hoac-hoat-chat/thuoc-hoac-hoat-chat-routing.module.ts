import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThuocHoacHoatChatListComponent } from './thuoc-hoac-hoat-chat-list/thuoc-hoac-hoat-chat-list.component';
import { ThuocHoacHoatChatCreateComponent } from './thuoc-hoac-hoat-chat-create/thuoc-hoac-hoat-chat-create.component';
import { ThuocHoacHoatChatUpdateComponent } from './thuoc-hoac-hoat-chat-update/thuoc-hoac-hoat-chat-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ThuocHoacHoatChatListComponent,
        data: {
            title: 'Danh Mục Thuốc Hoặc Hoạt Chất',
            DocumentType: DocumentType.DanhMucThuocHoacHoatChat,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: ThuocHoacHoatChatCreateComponent,
        data: {
            title: 'Thêm Thuốc Hoặc Hoạt Chất',
            DocumentType: DocumentType.DanhMucThuocHoacHoatChat,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: ThuocHoacHoatChatUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Thuốc Hoặc Hoạt Chất',
            DocumentType: DocumentType.DanhMucThuocHoacHoatChat,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThuocHoacHoatChatRoutingModule { }
