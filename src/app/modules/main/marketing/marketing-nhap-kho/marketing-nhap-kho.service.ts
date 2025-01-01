import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
@Injectable({
  providedIn: 'root'
})
export class MarketingNhapKhoService extends BaseService{

  controllerName = 'Marketing';

  constructor(apiService: ApiService) {
    super(apiService);
  }
}
