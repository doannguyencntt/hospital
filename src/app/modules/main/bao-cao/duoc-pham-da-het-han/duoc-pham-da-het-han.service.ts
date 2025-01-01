import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class DuocPhamDaHetHanService extends BaseService {
    controllerName = 'DuocPhamDaHetHan';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
