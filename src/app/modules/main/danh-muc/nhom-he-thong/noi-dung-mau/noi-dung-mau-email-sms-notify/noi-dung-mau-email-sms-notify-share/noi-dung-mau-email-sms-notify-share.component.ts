import { Component, OnInit } from '@angular/core';
import { NoiDungMauEmailSmsNotify} from '../noi-dung-mau-email-sms-notify.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../../../../../../../app/core/services/base.service';

@Component({
  selector: 'app-noi-dung-mau-email-sms-notify-share',
  templateUrl: './noi-dung-mau-email-sms-notify-share.component.html',
  styleUrls: ['./noi-dung-mau-email-sms-notify-share.component.scss']
})
export class NoiDungMauEmailSmsNotifyShareComponent implements OnInit {

  template={} as NoiDungMauEmailSmsNotify;
  validationErrors: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);      
    }
  }
  
  getById(id: number) {
   this.baseService.getById<NoiDungMauEmailSmsNotify>(id).subscribe(resultData => {
     if(resultData !== null && resultData !== undefined)
     {
          this.template = resultData;
          console.log( this.template);
          console.log( resultData);
     }
  });
  }

  getSharedData() {
    return this.template;
  }


}
