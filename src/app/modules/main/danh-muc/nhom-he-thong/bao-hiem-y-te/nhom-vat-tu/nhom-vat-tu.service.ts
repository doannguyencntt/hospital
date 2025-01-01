import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NhomVatTuService extends BaseService{
  controllerName = 'NhomVatTu';
  constructor(apiService: ApiService) { 
    super(apiService);
  }
}
