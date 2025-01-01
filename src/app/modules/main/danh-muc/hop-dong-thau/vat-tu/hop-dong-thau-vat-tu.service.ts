import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class HopDongThauVatTuService extends BaseService {
    controllerName = 'HopDongThauVatTu';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
