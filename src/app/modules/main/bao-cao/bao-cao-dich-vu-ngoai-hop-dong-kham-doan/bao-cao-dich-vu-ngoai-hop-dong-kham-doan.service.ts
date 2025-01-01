import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class BaoCaoDichVuNgoaiHopDongKhamDoanService extends BaseService {
  controllerName = 'BaoCaoKhamDoanHopDong';

  constructor(apiService: ApiService) {
      super(apiService);
  }
}