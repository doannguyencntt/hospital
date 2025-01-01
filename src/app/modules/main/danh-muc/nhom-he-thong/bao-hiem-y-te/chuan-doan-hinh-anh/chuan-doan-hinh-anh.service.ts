import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class ChuanDoanHinhAnhService extends BaseService {
    controllerName = 'ChuanDoanHinhAnh';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
