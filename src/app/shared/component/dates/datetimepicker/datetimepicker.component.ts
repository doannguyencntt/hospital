import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/core/utilities/common.helper';
import icClear from '@iconify/icons-ic/twotone-clear';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatetimepickerComponent implements OnInit {
  icClear=icClear;

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() formatDate:string="dd/MM/yyyy HH:mm";
  @Input() formatTime:string="HH:mm";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() minDate: Date = null;
  @Input() maxDate: Date = null;
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
      this.model=new Date(changes.model.currentValue);
    }
  }
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }
  clear(){
    this.validationerror="";
    this.modelChange.emit(null);
  }
  onBlur(): void {
    this.blur.emit(true);
    if(this.model!=undefined && !CommonService.isValidDate(this.model))
    {
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
  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text').trim();
    if(CommonService.isDateTimeVietNam(pastedText))
    {
      this.model=CommonService.FormatDateStringToDateTime(pastedText);
      this.emit(CommonService.FormatDateStringToDateTime(pastedText));
    }
  }
}
