import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})

export class LichSuPhauThuatThuThuatService extends BaseService {
    controllerName = 'PhauThuatThuThuatController';

    constructor(apiService: ApiService) {
        super(apiService);
    }
}