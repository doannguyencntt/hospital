import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../../../app/core/services/base.service';
import { ApiService } from '../../../../../../../app/core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class VanBangChuyenMonService extends BaseService {
  controllerName = 'VanBangChuyenMon';
  constructor(apiService: ApiService) {
    super(apiService);
  }

}
