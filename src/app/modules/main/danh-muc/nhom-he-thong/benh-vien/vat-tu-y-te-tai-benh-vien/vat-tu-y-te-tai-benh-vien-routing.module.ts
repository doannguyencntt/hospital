import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { VatTuYTeTaiBenhVienListComponent } from './vat-tu-y-te-tai-benh-vien-list/vat-tu-y-te-tai-benh-vien-list.component';
import { VatTuYTeTaiBenhVienCreateComponent } from './vat-tu-y-te-tai-benh-vien-create/vat-tu-y-te-tai-benh-vien-create.component';
import { VatTuYTeTaiBenhVienUpdateComponent } from './vat-tu-y-te-tai-benh-vien-update/vat-tu-y-te-tai-benh-vien-update.component';

const routes: Routes = [ {
  path: '',
  component: VatTuYTeTaiBenhVienListComponent,
  data: {
    title: 'Danh sách vật tư y tế tại bệnh viện',
    DocumentType: DocumentType.DanhMucVatTuYTeTaiBenhVien,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},{
  path: 'them',
  component: VatTuYTeTaiBenhVienCreateComponent,
  data: {
    title: 'Thêm vật tư y tế tại bệnh viện',      
    DocumentType: DocumentType.DanhMucVatTuYTeTaiBenhVien,
    SecurityOperation:SecurityOperation.Add
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: VatTuYTeTaiBenhVienUpdateComponent,
  data: {
    title: 'Chỉnh sửa vật tư y tế tại bệnh viện',      
    DocumentType: DocumentType.DanhMucVatTuYTeTaiBenhVien,
    SecurityOperation:SecurityOperation.Update
  },

  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatTuYTeTaiBenhVienRoutingModule { }
