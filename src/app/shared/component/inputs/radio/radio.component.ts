import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter} from '@angular/core';
import icClear from '@iconify/icons-ic/twotone-clear';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent implements OnInit {

  @Input() id:string;
  @Input() name:string;
  @Input() label:string;
  @Input() labelTop:boolean=false;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() items:string;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() subLabel:string="";
  @Input() subLabelTop:boolean=false;
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  icClear = icClear;
  constructor() {
  }
  ngOnInit(){
  }
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }

}
