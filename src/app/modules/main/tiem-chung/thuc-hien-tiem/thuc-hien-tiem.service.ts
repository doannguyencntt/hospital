import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class ThucHienTiemService extends BaseService {
    controllerName = 'TiemChung';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}