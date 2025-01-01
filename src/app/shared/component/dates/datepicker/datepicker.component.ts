import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {

 
  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() format:string="dd/MM/yyyy";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() minDate: Date = null;
  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() focus:EventEmitter<any> = new EventEmitter<any>();
  @Output() blur:EventEmitter<any> = new EventEmitter<any>();
  @Output() open:EventEmitter<any> = new EventEmitter<any>();
  @Output() close:EventEmitter<any> = new EventEmitter<any>();
  constructor(private cdRef: ChangeDetectorRef) {
  }
  ngOnInit(){
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    //this.cdRef.detectChanges();
    if(changes.model!=undefined &&changes.model.currentValue!=null)
    {
      this.model=new Date(changes.model.currentValue);
      this.cdRef.detectChanges();
    }
}
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }
  onBlur(): void {
    this.blur.emit(true);
    if(this.model!=undefined && !CommonService.isValidDate(this.model))
    {
      this.model=null;
      this.modelChange.emit(null);
    }
    if(this.model==undefined||this.model==null)
    {
      jQuery("#"+this.id).find("input").val("");
      this.model=null;
      this.modelChange.emit(null);
    }
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
  onEnter(){
    this.onBlur();
  }

  focusManual(){
    // if(document.getElementById(this.id + "item") != undefined){
    //   let test = document.getElementById(this.id + "item");
    //   
    //   console.log("focusManual = ", this.id, document.getElementById(this.id + "item")
    //   ,  document.getElementById(this.id + "item").children[0].children[0].children[0].children[0] );
    //   let inputId = document.getElementById(this.id + "item").children[0].children[0].children[0].children[0].id;
    //   document.getElementById(inputId).focus();
    //   this.cdRef.detectChanges();
    // }
  }
  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text').trim();
    if(CommonService.isDateTimeVietNam(pastedText))
    {
      var arr=pastedText.split(" ");
      this.model=CommonService.FormatDateStringToDate(arr[0]);
      this.emit(CommonService.FormatDateStringToDate(arr[0]));
    }
    else
    {
      if(CommonService.isDateVietNam(pastedText))
      {
        this.model=CommonService.FormatDateStringToDate(pastedText);
        this.emit(CommonService.FormatDateStringToDate(pastedText));
      }
    }
  }
}
