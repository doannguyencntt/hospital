import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NoiGioiThieuService extends BaseService{
  controllerName = 'NoiGioiThieu';
  constructor(apiService: ApiService) { 
    super(apiService);
  }
}
