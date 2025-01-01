import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation,AfterContentInit } from '@angular/core';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { addDays,firstDayInWeek,Day,lastDayOfMonth,firstDayOfMonth,addMonths} from '@progress/kendo-date-math';
import { NotificationService } from 'src/app/core/services/notification.service';
declare var jQuery: any;

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaterangepickerComponent implements OnInit,AfterContentInit {

  isOutFocus:boolean=true;
  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
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
  @Input() maxDate: Date = null;
  @Input() model:any;
  @Input() isHiden: boolean = true;
  @Input() isHidenCalendat: boolean = false;
  @Input() isSelectDate: number = 0;

  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() focus:EventEmitter<any> = new EventEmitter<any>();
  @Output() blur:EventEmitter<any> = new EventEmitter<any>();
  @Output() open:EventEmitter<any> = new EventEmitter<any>();
  @Output() close:EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChange:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("startDateModel",{static:true}) startDateModel:any;
  @ViewChild("endDateModel",{static:true}) endDateModel:any;
  @ViewChild("popup",{static:true}) popup:any;
  isdisableEndDate : boolean = false;
  notifier:any;
  constructor(private injector: Injector) {
  }
  ngOnInit(){
    this.notifier = this.injector.get(NotificationService);
  }
  ngAfterContentInit() {
    var self=this;
    jQuery(document).mouseup(function(e) 
    {
        var container = jQuery("#"+self.id+"-daterange-popup");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
           self.popup.toggle(false);
        }
    });
  }
  ngOnChanges(changes: SimpleChanges) {     
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if(changes.model!=undefined)
    {
        if(changes.model.currentValue!=null){
            this.model = changes.model.currentValue;
            if(changes.model.currentValue.startDate !=null)
              this.model.startDate =  new Date(changes.model.currentValue.startDate);
            if(changes.model.currentValue.endDate !=null)
                this.model.endDate =  new Date(changes.model.currentValue.endDate);
        }
        if(changes.model.previousValue!=null){
            this.model = changes.model.previousValue 
            if(changes.model.previousValue.startDate !=null)
                this.model.startDate =  new Date(changes.model.previousValue.startDate);
            if(changes.model.previousValue.endDate !=null)
                this.model.endDate =  new Date(changes.model.previousValue.endDate);
        } 
        this.addStateFocus(true); 
    }
  }

  emit(event:any){
    this.validationerror="";
    this.formatStartEndDate(this.model.startDate,this.model.endDate);
    this.modelChange.emit(event);
  }

  onView(){
    this.isHiden = false;
    this.isHidenCalendat = true;
  }
  formatStartEndDate(start:Date,end:Date){
    if(start!=null)
    {
      this.model.startDate = new Date(start.getFullYear(),start.getMonth(),start.getDate(),0,0,0);
    }
    if(end!=null)
    {
      this.model.endDate =new Date(end.getFullYear(),end.getMonth(),end.getDate(),23,59,59) ;      
    }
  }
 
  selectDateFor(dateNumber:number){
       var currentDate = new Date();
       this.formatStartEndDate(addDays(currentDate,-dateNumber),currentDate);
       this.modelChange.emit(this.model)
  }
   selectWeekFor(thisWeek: boolean){
     var currentDate = new Date()
     if(thisWeek)
     {
      this.formatStartEndDate(firstDayInWeek(currentDate, Day.Monday),firstDayInWeek(addDays(currentDate,7), Day.Sunday));
     }
     else
     {
      this.formatStartEndDate(firstDayInWeek(addDays(currentDate,-7), Day.Monday),firstDayInWeek(currentDate, Day.Sunday));
     }
     this.modelChange.emit(this.model)
  }
   selectMonthFor(thisMonth: boolean){
     var currentDate = new Date()
     if(thisMonth)
     {
      this.formatStartEndDate(firstDayOfMonth(currentDate),lastDayOfMonth(currentDate));
     }
     else
     {

       var lastMonth =  addMonths(currentDate,-1);
       this.formatStartEndDate(firstDayOfMonth(lastMonth),lastDayOfMonth(lastMonth));
     }
     this.modelChange.emit(this.model)
 
  }
  onStartDateBlur(){
    console.log("start blur: ",new Date());
    if(this.startDateModel.errors!=null)
    {
      this.notifier.showError("Từ ngày không đúng, từ ngày phải nhỏ hơn hoặc bằng đến ngày.");
      this.model.startDate=null;
      jQuery("#"+this.id+"Start").find("input").focus();
    }
    else
    {
      if((this.model.startDate!=null && this.model.endDate!=null)||(this.model.startDate==null && this.model.endDate==null)){
        this.onStartDateEnter();
      }
      else{
        this.isOutFocus=true;
        var self=this;
        setTimeout(function(){
          if(self.isOutFocus)
          {
            self.onStartDateEnter();
          }
        },500)
      }
    }
    this.addStateFocus(true); 
  }
  onEndDateBlur(){
    if(this.endDateModel.errors!=null)
    {
      this.notifier.showError("Đến ngày không đúng, đến ngày phải lớn hơn hoặc bằng từ ngày.");
      this.model.endDate=null;
      jQuery("#"+this.id+"End").find("input").focus();
    }    
    else
    {
      if((this.model.startDate!=null && this.model.endDate!=null)||(this.model.startDate==null && this.model.endDate==null)){
        this.onEndDateEnter();
      }
      else{
        this.isOutFocus=true;
        var self=this;
        setTimeout(function(){
          if(self.isOutFocus)
          {
            self.onEndDateEnter();
          }
        },500)
      }
    }
    this.removeStateFocus(); 
  }
  
  onStartDateMouseLeave(){
    if(this.startDateModel.errors!=null)
    {
      this.notifier.showError("Từ ngày không đúng, từ ngày phải nhỏ hơn hoặc bằng đến ngày.");
      this.model.startDate=null;
      jQuery("#"+this.id+"Start").find("input").focus();
    }
  }
  onEndDateMouseLeave(){
    if(this.endDateModel.errors!=null)
    {
      this.notifier.showError("Đến ngày không đúng, đến ngày phải lớn hơn hoặc bằng từ ngày.");
      this.model.endDate=null;
      jQuery("#"+this.id+"End").find("input").focus();
    }    
  }
  onStartDateEnter(){
    if(this.startDateModel.errors!=null)
    {
      this.notifier.showError("Từ ngày không đúng, từ ngày phải nhỏ hơn hoặc bằng đến ngày.");
      this.model.startDate=null;
      jQuery("#"+this.id+"Start").find("input").focus();
    }
    else{
      this.formatStartEndDate(this.model.startDate,this.model.endDate);
      this.modelChange.emit(this.model);
      this.blur.emit(true);
    }
  }
  onEndDateEnter(){
    if(this.endDateModel.errors!=null)
    {
      this.notifier.showError("Đến ngày không đúng, đến ngày phải lớn hơn hoặc bằng từ ngày.");
      this.model.endDate=null;
      jQuery("#"+this.id+"End").find("input").focus();
    } 
    else{
      this.formatStartEndDate(this.model.startDate,this.model.endDate);
      this.modelChange.emit(this.model);
      this.blur.emit(true);
    }   
  }
  onStartDateFocus(){
    this.isOutFocus=false;
  }
  onEndDateFocus(){
    this.isOutFocus=false;  
    this.addStateFocus(false); 
  }
  clear(){    
    this.model.startDate=null;
    this.model.endDate=null;
    this.onEndDateEnter();
    this.removeStateFocus();
   
  }
  addStateFocus(checkNull:boolean){
    var self=this;
    setTimeout(function(){
      if(checkNull!=true ||(checkNull==true && self.model.endDate!=null))
      { 
        if(jQuery("#"+self.id).find(".k-textbox-container").length>0 && !jQuery("#"+self.id).find(".k-textbox-container").hasClass("k-state-focused"))
        {
          jQuery("#"+self.id).find(".k-textbox-container").addClass("k-state-focused");  
        }  
      }
    });
  }
  removeStateFocus(){
    var self=this;
    setTimeout(function(){
      if(self.model.startDate==null && self.model.endDate==null)
      { 
        if(jQuery("#"+self.id).find(".k-textbox-container").length>0 && jQuery("#"+self.id).find(".k-textbox-container").hasClass("k-state-focused"))
        {
          jQuery("#"+self.id).find(".k-textbox-container").removeClass("k-state-focused");  
        }  
      }
    });
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
  onCellEnter(value: Date){
   //  console.log("onCellEnter",value)
  }

  onCellLeave(value: Date){
    // console.log("onCellLeave",value)
  } 

  onChange(): void {
     //console.log("onChange")
  }
  onBlur():void{
    this.isHiden = true;
    this.isHidenCalendat = false;
    this.formatStartEndDate(this.model.startDate,this.model.endDate);
    this.modelChange.emit(this.model);
    this.blur.emit(true);
  }
  onEnter():void{
    this.formatStartEndDate(this.model.startDate,this.model.endDate);
      this.modelChange.emit(this.model);
      this.blur.emit(true);
  }

  onActiveDateChange(value: Date){
    console.log("onActiveDateChange",value)
  }
  onStartPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text').trim();
    if(CommonService.isDateTimeVietNam(pastedText))
    {
      var arr=pastedText.split(" ");
      this.model.startDate=CommonService.FormatDateStringToDate(arr[0]);
      //this.emit(CommonService.FormatDateStringToDate(pastedText));
    }
    else
    {
      if(CommonService.isDateVietNam(pastedText))
      {
        this.model.startDate=CommonService.FormatDateStringToDate(pastedText);
        //this.emit(CommonService.FormatDateStringToDate(pastedText));
      }
    }
  }
  onEndPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text').trim();
    if(CommonService.isDateTimeVietNam(pastedText))
    {
      var arr=pastedText.split(" ");
      this.model.endDate=CommonService.FormatDateStringToDate(arr[0]);
      //this.emit(CommonService.FormatDateStringToDate(pastedText));
    }
    else
    {
      if(CommonService.isDateVietNam(pastedText))
      {
        this.model.endDate=CommonService.FormatDateStringToDate(pastedText);
        //this.emit(CommonService.FormatDateStringToDate(pastedText));
      }
    }
  }

}