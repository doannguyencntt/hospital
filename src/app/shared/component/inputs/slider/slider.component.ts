import { Component,Input,OnInit,ViewEncapsulation ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

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
  @Input() incrementTitle:string="Increment";
  @Input() decrementTitle:string="Decrement";
  @Input() fixedTickWidth:number=10;
  @Input() min:number=0;
  @Input() max:number=100;
  @Input() smallStep:number=1;
  @Input() vertical:boolean=false;
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
