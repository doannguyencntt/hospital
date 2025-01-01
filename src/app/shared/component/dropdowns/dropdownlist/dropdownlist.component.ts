import { Component,Input,OnInit,AfterContentInit,Output,EventEmitter,ViewEncapsulation, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BroadcastService } from '../../../../core/services/broadcast.service';
import { LookupQueryInfo, LookupItemVo } from 'src/app/shared/models/common.model';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Subscription } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownlistComponent implements OnInit,AfterContentInit {
  subscription:Subscription;
  _data:any;

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() modelText:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() data:any;
  @Input() filterable:boolean=false;
  @Input() textField:string="DisplayName";
  @Input() valueField:string="KeyId";
  @Input() valuePrimitive:boolean=true;
  @Input() url:string;
  @Input() queryInfo:LookupQueryInfo=new LookupQueryInfo();
  @Input() isAuthorize:boolean=true;
  @Input() hierarchyKeyToSend:any;
  @Input() hierarchyKeyToListen:any;
  @Input() bind:boolean=false;
  @Input() validationerror:string="";
  @Input() title:string="";
  @Input() defaultItem:any;
  @Input() template:any=null;
  @Input() templateHeader:any=null;
  @Input() popupSettings:any={appendTo: 'component'};
  @Input() autoSelectFirstItem:boolean=false;
  @Input() isWhiteBackground:boolean=false;

  @Output() modelChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange:EventEmitter<any> = new EventEmitter<any>();
  @Output() openDropDownList: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiService: ApiService, private broadcastService:BroadcastService,private cdRef:ChangeDetectorRef) {
  }
  ngOnInit(){
    this._data=this.data;
    if(this.popupSettings=="null")
    {
      this.popupSettings={appendTo: 'root',popupClass:"item-no-padding"};
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if(changes.model!=undefined && changes.model.currentValue!=null)
    {
      if(this.bind.toString()=="false" && this.modelText!=null && this.modelText!='' && (this.data==null ||this.data==undefined))
      {
        var self=this;
        setTimeout(function(){
          self._data=[{"KeyId":changes.model.currentValue,"DisplayName":self.modelText}];
        },1);
      }
      if(this.hierarchyKeyToSend!=undefined && this.hierarchyKeyToSend!=null)
      {
        var self=this;
        setTimeout(function(){
          self.broadcastService.broadcast({
            name: self.hierarchyKeyToSend,
            message: changes.model.currentValue
          });
        },1);
      }      
    }
    if(changes.data!=undefined && changes.data.currentValue!=null)
    {
      this._data=changes.data.currentValue;
      this.setValueDefaultWhenUpdateDatasource();
        
    }
}
  emit(event:any){
    this.validationerror="";
    this.modelChange.emit(event);
  }
  ngAfterContentInit(){
    if(this.bind.toString()=="true")
    {
      this.getDataForLookup();
    }
    if(this.hierarchyKeyToListen!=undefined && this.hierarchyKeyToListen!=null)
    {
      var currentValueSend=null;
      this.subscription=this.broadcastService.on(this.hierarchyKeyToListen, (event) => {
        if(currentValueSend!=event.message)
        {
          this.queryInfo.ParameterDependencies="{"+this.hierarchyKeyToListen+":"+event.message+"}";
          this._data=null;
          this.getDataForLookup();
          currentValueSend=event.message;
        }
        else{
          this.queryInfo.ParameterDependencies =null;
          this._data = null;
          this.getDataForLookup();
        }
      });
    }
    this.cdRef.detectChanges();
    $("#"+this.id).closest('.k-dropdown').addClass('mandatory');
  }
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      if(this.subscription!=undefined)
      {
        this.subscription.unsubscribe();
      }      
  }
  getDataForLookup(){
    if(this.url!=undefined && this.url!=null && this.url!="" && (this.data==null ||this.data==undefined))
    {
      $("#"+this.id+" .k-select .k-icon").removeClass("k-i-arrow-s");
      $("#"+this.id+" .k-select .k-icon").addClass("k-i-loading");
      this.apiService.post<Array<LookupItemVo>>(this.url, this.queryInfo).subscribe(
        resultData => {
          if (resultData !== undefined && resultData != null) {
            this._data = resultData;            
            if(this.autoSelectFirstItem && this._data.length>0 && (this.model == undefined || this.model == null))
            {
              this.emit(this._data[0].KeyId);
            }
            if(this.hierarchyKeyToListen!=undefined && this.hierarchyKeyToListen!=null)
            {
              this.setValueDefaultWhenUpdateDatasource();
            }
          }
          $("#"+this.id+" .k-select .k-icon").addClass("k-i-arrow-s");
          $("#"+this.id+" .k-select .k-icon").removeClass("k-i-loading");
        },
        (err: any) => {
          $("#"+this.id+" .k-select .k-icon").addClass("k-i-arrow-s");
          $("#"+this.id+" .k-select .k-icon").removeClass("k-i-loading");
        });
    }
    else
    {
      if (this.data != undefined && this.data != null) {        
        this._data = this.data.filter((s) => 
          this.queryInfo.Query != undefined && this.queryInfo.Query != null && this.queryInfo.Query != "" && s!=undefined && s.DisplayName!=undefined? 
          CommonService.removeVietnamese(s.DisplayName.toString()).toLowerCase().indexOf(
            CommonService.removeVietnamese(this.queryInfo.Query).toLowerCase()
            ) !== -1 
            : true
        );
        if(this.autoSelectFirstItem && this._data.length>0)
        {
          this.defaultItem={DisplayName:this._data[0].DisplayName,KeyId:this._data[0].KeyId};
        }
      }
    }
    this.bind=true;
  }
  setValueDefaultWhenUpdateDatasource(){
    if(this.model!=undefined)
    { 
      if(this._data!=null && this._data.length>0)
      {
        if(!CommonService.findObjectByKey(this._data,"KeyId",this.model))
        {
          this.model=this._data[0].KeyId;
          this.emit(this.model);
        }
      }
      else{
        this.model=null;
        this.emit(null);
      }
    }
  }
  valueChange(value: any) {
  
    // if(this.hierarchyKeyToSend!=undefined && this.hierarchyKeyToSend!=null)
    // {
    //   this.broadcastService.broadcast({
    //     name: this.hierarchyKeyToSend,
    //     message: value
    //   });
    // }
  }

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);    
  }
  timer:any=null;
  filterChange(filter: any) {
    if(this.timer!=null)
    {
      clearTimeout(this.timer);
    }
    this.timer=setTimeout(() => {
      this.queryInfo.Query=filter;
      this.getDataForLookup();
    }, 500);
  }

  open() {
    this.openDropDownList.emit(true);
  }

  close() {
    let self = this;
    setTimeout(function () {
      self.openDropDownList.emit(false);
    }, 500);
  }

  focus() {
    if(this.bind.toString()=="false")
    {
      //this._data=[{"KeyId":0,"DisplayName":"Đang tải dữ liệu...",Disabled:true}];
      this.getDataForLookup();
    }
  }

  blur() {
  }
  itemDisabled(itemArgs: { dataItem: any, index: number }) {
    return itemArgs.dataItem.Disabled; //disable the temp item
  }
}
