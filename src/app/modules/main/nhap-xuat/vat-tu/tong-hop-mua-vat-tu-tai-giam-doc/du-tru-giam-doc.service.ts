import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()

export class TongHopDuTruMuaVatTuTaiGiamDocService extends BaseService {
  controllerName = 'TongHopDuTruMuaVatTuTaiGiamDoc';

  constructor(apiService: ApiService) {
    super(apiService);
  }
}
