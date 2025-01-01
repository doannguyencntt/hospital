import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchComponent implements OnInit {

  @Input() id:string;
  @Input() label:string;
  @Input() labelTop:boolean=false;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input()  labelPosition:string="after";
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit(){

  }
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }

}
