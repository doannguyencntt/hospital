import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BangKeThuocVaVatTuPhauThuatListComponent } from './bang-ke-thuoc-va-vat-tu-phau-thuat-list/bang-ke-thuoc-va-vat-tu-phau-thuat-list.component';


const routes: Routes = [
  {
    path: '',
    component: BangKeThuocVaVatTuPhauThuatListComponent,
    data: {
      title: 'Bảng kê thuốc và vật tư phẩu thuật thủ thuật',
      DocumentType: DocumentType.BangKeThuocVatTuPhauThuat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangKeThuocVatTuRoutingModule { }

