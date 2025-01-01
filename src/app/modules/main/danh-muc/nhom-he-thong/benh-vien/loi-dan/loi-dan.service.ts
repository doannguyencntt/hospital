import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class LoiDanService extends BaseService {
    controllerName = 'LoiDan';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
