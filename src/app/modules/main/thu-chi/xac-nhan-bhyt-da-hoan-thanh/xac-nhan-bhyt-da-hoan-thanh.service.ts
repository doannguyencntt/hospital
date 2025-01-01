import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
@Injectable({
    providedIn: 'root'
})
export class XacNhanBHYTDaHoanThanhService extends BaseService {
    controllerName = 'XacNhanBhytDaHoanThanh';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}
