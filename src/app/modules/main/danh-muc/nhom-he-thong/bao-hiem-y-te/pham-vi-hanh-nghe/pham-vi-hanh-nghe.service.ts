import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class PhamViHanhNgheService extends BaseService {
    controllerName = 'PhamViHanhNghe';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
