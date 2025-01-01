import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../../../app/core/services/base.service';
import { ApiService } from '../../../../../../../app/core/services/api.service';


@Injectable()
export class QuocGiaService extends BaseService {
  controllerName = 'QuocGia';

  constructor(apiService: ApiService) {
    super(apiService);
  }
}
