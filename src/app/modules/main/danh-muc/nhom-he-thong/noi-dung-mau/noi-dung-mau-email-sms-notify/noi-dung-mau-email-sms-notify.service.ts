import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../../../app/core/services/base.service';
import { ApiService } from '../../../../../../../app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NoiDungMauEmailSmsNotifyService extends BaseService {
  controllerName = 'TemplateEmail';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
