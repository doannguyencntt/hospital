import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter, SimpleChanges} from '@angular/core';
import { CommonService } from 'src/app/core/utilities/common.helper';
@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimepickerComponent implements OnInit {

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() modelIsNumber:boolean=false;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() format:string="HH:mm";
  @Input() formatOutput:string="MM/dd/yyyy HH:mm";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() tabindex: number = 0;
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() focus:EventEmitter<any> = new EventEmitter<any>();
  @Output() blur:EventEmitter<any> = new EventEmitter<any>();
  @Output() open:EventEmitter<any> = new EventEmitter<any>();
  @Output() close:EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit(){

  }
  ngOnChanges(changes: SimpleChanges) {
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if(changes.model!=undefined &&changes.model.currentValue!=null)
    {
      if(this.modelIsNumber==true && typeof changes.model.currentValue=="number")
      {        
        var now=new Date();
        this.model=new Date((now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear()+" "+CommonService.sec2time(changes.model.currentValue));
      }
      else{        
        this.model=new Date(changes.model.currentValue);
      }
    }
}
  emit(event:any){
    this.validationerror="";
    //var output = this.intl.formatDate(event, this.formatOutput);
    if(this.modelIsNumber==true)
    {
      this.modelChange.emit(CommonService.time2sec(event));
    }
    else{
      this.modelChange.emit(event);
    }    
  }
  onBlur(): void {
    this.blur.emit(true);
  }

  onFocus(): void {
    this.focus.emit(true);
  }

  onOpen(): void {
    this.open.emit(true);
  }

  onClose(): void {
    this.close.emit(true);
  }
}
