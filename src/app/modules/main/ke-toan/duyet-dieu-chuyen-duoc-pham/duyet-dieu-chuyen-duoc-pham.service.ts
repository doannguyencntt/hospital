import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class DuyetDieuChuyenDuocPhamService extends BaseService {
  controllerName = 'XuatKhoDieuChuyenKhoNoiBoDuocPham';
  constructor(apiService: ApiService) {
      super(apiService);
  }
}
