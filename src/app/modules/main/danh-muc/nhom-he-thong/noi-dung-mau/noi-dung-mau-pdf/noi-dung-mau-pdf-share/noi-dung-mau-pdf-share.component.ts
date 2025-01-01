import { Component, OnInit } from '@angular/core';
import { NoiDungMauPdf} from '../noi-dung-mau-pdf.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../../../../../../../app/core/services/base.service';

@Component({
  selector: 'app-noi-dung-mau-pdf-share',
  templateUrl: './noi-dung-mau-pdf-share.component.html',
  styleUrls: ['./noi-dung-mau-pdf-share.component.scss']
})
export class NoiDungMauPdfShareComponent implements OnInit {

  template={} as NoiDungMauPdf;
  validationErrors: any;
  constructor(private route: ActivatedRoute, private baseService: BaseService) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);      
    }
  }
  getById(id: number) {
   this.baseService.getById<NoiDungMauPdf>(id).subscribe(resultData => {
     if(resultData !== null && resultData !== undefined)
     {
          this.template = resultData;

     }
  });
  }

  getSharedData() {
    return this.template;
  }



}
