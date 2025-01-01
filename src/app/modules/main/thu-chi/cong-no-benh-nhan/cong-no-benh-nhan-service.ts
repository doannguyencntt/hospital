import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})

export class CongNoBenhNhanService extends BaseService {
    controllerName = 'CongNoBenhNhan';
    constructor(apiService: ApiService) {
        super(apiService);
    }
}