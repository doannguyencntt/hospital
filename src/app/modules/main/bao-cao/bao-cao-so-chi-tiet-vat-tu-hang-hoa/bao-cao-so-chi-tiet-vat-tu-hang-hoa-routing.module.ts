import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoSoChiTietVatTuHangHoaListComponent } from './bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoSoChiTietVatTuHangHoaListComponent,
    data: {
      title: 'Báo cáo sổ chí tiết vật tư hàng hóa',
      DocumentType: DocumentType.BaoCaoSoChiTietVatTuHangHoa,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoSoChiTietVatTuHangHoaRoutingModule { }

