import { Component, OnInit, AfterContentInit, Input, EventEmitter, Output, ViewEncapsulation, SimpleChanges, ChangeDetectorRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { LookupQueryInfo, LookupItemVo } from 'src/app/shared/models/common.model';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Subscription } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboboxComponent implements OnInit, AfterContentInit, AfterViewInit,OnDestroy  {

  subscription:Subscription;
  _data: any;
  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() moreClass: string;
  @Input() model: any;
  @Input() modelText: any;
  @Input() readonly: boolean = false;
  @Input() placeHolder: string = "";
  @Input() type: string = "text";
  @Input() disabled: boolean = false;
  @Input() classLabel: string = "col-sm-2";
  @Input() classField: string = "col-sm-10";
  @Input() horizontalForm: boolean = false;
  @Input() data: any;
  @Input() filterable: boolean = true;
  @Input() textField: string = "DisplayName";
  @Input() valueField: string = "KeyId";
  @Input() valuePrimitive: boolean = true;
  @Input() url: string;
  @Input() queryInfo: LookupQueryInfo = new LookupQueryInfo();
  @Input() isAuthorize: boolean = true;
  @Input() hierarchyKeyToSend: any;
  @Input() hierarchyKeyToListen: any;
  @Input() bind: boolean = false;
  @Input() validationerror: string = "";
  @Input() title: string = "";
  @Input() template: any = null;
  @Input() templateHeader: any = null;
  @Input() popupSettings: any = { appendTo: 'component' };
  @Input() idWhere: number = 0;
  @Input() autoSelectFirstItem: boolean = false;
  @Input() isAutoFocus: boolean = false;

  @Input() reloadForGrid: boolean = false;
  @Input() hideDeleteButton: boolean = false;
  @Input() broadcastAfterLoaded: boolean = false;

  setItemDefault: boolean = null;
  currentValueSend: any = null;

  @Output() openCombobox: EventEmitter<any> = new EventEmitter<any>();

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() dataForLookupChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataBound: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiService: ApiService, private broadcastService: BroadcastService, private cdRef: ChangeDetectorRef) {
  }
  ngOnInit() {
    //console.log("ngOnInit : ", this.id, this.hierarchyKeyToListen, this.hierarchyKeyToSend);
    this._data = this.data;
    this.queryInfo.Take = 50;
    if (this.popupSettings == "null") {
      this.popupSettings = { appendTo: 'root', popupClass: "item-no-padding" };
    }
  }
  ngAfterViewInit() {

    // if(this.isAutoFocus)
    // {
    //   if(document.getElementById(this.id + "isAutoFocus") != undefined){
    //     document.getElementById(this.id + "isAutoFocus").focus();
    //     this.cdRef.detectChanges();
    //   }
    // }
  }
  onKeytoFocus() {
    if (this.isAutoFocus) {
      if ($("#" + this.id + "isAutoFocus input") != undefined) {
        $("#" + this.id + "isAutoFocus input").focus()
        this.cdRef.detectChanges();
      }
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    let self = this;
      if (self.reloadForGrid) {
        self.getDataForLookup();
      }
      if (self.hierarchyKeyToSend != undefined && self.hierarchyKeyToSend != null && changes.model != undefined) {
        if(self.broadcastAfterLoaded.toString() == "true")
        {
          setTimeout(function () {
            self.broadcastService.broadcast({
              name: self.hierarchyKeyToSend,
              message: changes.model.currentValue
            });
          });
        }
        else
        {
          self.broadcastService.broadcast({
            name: self.hierarchyKeyToSend,
            message: changes.model.currentValue
          });
        }
      }
      //remove filter when currentValue is null or undefined
      if (changes.model != undefined && (changes.model.currentValue == null || changes.model.currentValue == undefined)) {
        if(changes.model.previousValue != undefined && changes.model.previousValue != null)
        {
          self.setItemDefault = false;
        }
        this.queryInfo.Query="";
        //self.filterChange("");
      }

      // You can also use model.previousValue and
      // model.firstChange for comparing old and new values
      if (changes.model != undefined && changes.model.currentValue != null) {
        if (self.bind.toString() == "false" && self.modelText != null && self.modelText != '' && (self.data == null || self.data == undefined)) {
          var self1 = self;
          setTimeout(function () {
            self1._data = [{ "KeyId": changes.model.currentValue, "DisplayName": self1.modelText }];
            if ($("#" + self1.id).find("label.k-label") != undefined && $("#" + self1.id).find("label.k-label").length > 0) {
              $("#" + self1.id).find("label.k-label").addClass("label-intial-data");
            }

          }, 1);
        }

      }

      if (changes.data != undefined && changes.data.currentValue != null) {
        //console.log("ngOnChanges =", changes);
        self._data = changes.data.currentValue;
        self.setValueDefaultWhenUpdateDatasource();
      }
      //console.log("combobox = ", changes);
  }
  emit(event: any) {
    this.validationerror = "";
    //console.log("emit = ", event);
    this.modelChange.emit(event);
  }
  ngAfterContentInit() {
    //console.log("ngAfterContentInit: ", this.hierarchyKeyToListen)
    //console.log("ngAfterContentInit: ", this.hierarchyKeyToListen, this.queryInfo.ParameterDependencies)
    // if(this.id == "NguoiLienHeQuanHuyenId"){

    // }
    if (this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null) {
      this.currentValueSend = null;
      this.subscription=this.broadcastService.on(this.hierarchyKeyToListen, (event) => {
        //console.log("broadcastService = ", event, this.id);
        if (event.message!=null && event.message!="" && this.currentValueSend != event.message) {
          this.queryInfo.ParameterDependencies = "{" + this.hierarchyKeyToListen + ":" + event.message + "}";
          this._data = null;
          this.setItemDefault = event.message !== undefined;
          this.currentValueSend = event.message;
          this.getDataForLookup();
        }
        else{
          this.queryInfo.ParameterDependencies = "{" + this.hierarchyKeyToListen + ":null}";
          this._data = null;
          this.setItemDefault = false;
          this.currentValueSend = null;
          this.getDataForLookup();
        }
      });
    }
    else if(this.bind != undefined && this.bind.toString() == "true"){
      if(this.autoSelectFirstItem)
      {
        this.setItemDefault = true;
        this.currentValueSend = ""; // bật cờ
      }
      //console.log("ngAfterContentInit = ", this.bind, this.id);
      this.getDataForLookup();
    }

    // console.log("----- ", this.bind, this.bind == true, this.id);
    //   if (this.bind != undefined && this.bind.toString() == "true") {
    //     this.getDataForLookup();
    //   }


    this.cdRef.detectChanges();
  }
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      if(this.subscription!=undefined)
      {
        this.subscription.unsubscribe();
      }
  }
  getDataForLookup() {

    //console.log("getDataForLookup");
    //console.log("getDataForLookup: ", this.hierarchyKeyToListen, this.data, this._data)
    if (this.url !== undefined && this.url != null && this.url !== '' && (this.data == null || this.data === undefined))
    //  && this.queryInfo.Query !== null && this.queryInfo.Query !== '' )
    {
      // if (this.idWhere != 0)
      //   this.setFindWhereID();
      if(this.setItemDefault == null)
      {
        this.setItemDefault = true;
      }

      $("#" + this.id + " .k-select .k-icon").removeClass("k-i-arrow-s");
      $("#" + this.id + " .k-select .k-icon").addClass("k-i-loading");
      if(this.model!=null && parseInt(this.model)>0)
      {
        this.queryInfo.Id=parseInt(this.model);
      }
      else
      {
        this.queryInfo.Id = 0;
      }
      this.apiService.post<Array<LookupItemVo>>(this.url, this.queryInfo).subscribe(
        resultData => {
          if (resultData !== undefined && resultData != null) {
            this._data = resultData;
            this.dataBound.emit(this._data);
            if ((this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null)) {
              this.setValueDefaultWhenUpdateDatasource();
            }
            else if(this.autoSelectFirstItem && this.setItemDefault && this._data.length>0 && (this.model == undefined || this.model == null))
            {
              this.setItemDefault = false;
              this.emit(this._data[0].KeyId);
            }
          }

          //console.log("dataForLookupChange = ", resultData);
          this.dataForLookupChange.emit(resultData);
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        },
        () => {
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        });
      // this.baseService.getListLookupItem(this.url,this.queryInfo,this.isAuthorize).subscribe(
      //   resultData => {
      //     if (resultData != undefined && resultData != null) {
      //       this._data=resultData;
      //     }
      //   },
      //   (err: any) => {
      //   });
    }
    else {

      if (this.data != undefined && this.data != null) {
        this._data = this.data.filter((s) =>
          this.queryInfo.Query != undefined && this.queryInfo.Query != null && this.queryInfo.Query != "" && s!=undefined && s.DisplayName!=undefined?
          CommonService.removeVietnamese(s.DisplayName.toString()).toLowerCase().indexOf(
            CommonService.removeVietnamese(this.queryInfo.Query).toLowerCase()
            ) !== -1
            : true
        );
      }
    }
    this.bind = true;
    this.isfilterChange=false;
  }

  setValueDefaultWhenUpdateDatasource() {
    if (this.model != undefined || this.autoSelectFirstItem) {
      if (this._data != null && this._data.length > 0
        && (!this.autoSelectFirstItem || (this.autoSelectFirstItem && this.setItemDefault && this.currentValueSend != null))) {
        if (!CommonService.findObjectByKey(this._data, "KeyId", this.model)) {
          this.setItemDefault = false;
          this.model = this._data[0].KeyId;
          this.emit(this.model);
        }
      }
      else {
        if (this._data == null || this._data.length == 0 || this.currentValueSend == null) {
          this.model = this.model === undefined ? undefined : null;
          this.emit(this.model);
        }
      }
    }
    // if(this.model!=undefined)
    // {
    //   if(this._data!=null && this._data.length>0)
    //   {
    //     if(!CommonService.findObjectByKey(this._data,"KeyId",this.model))
    //     {
    //       this.model=this._data[0].KeyId;
    //       this.emit(this.model);
    //     }
    //   }
    //   else{
    //     this.model=null;
    //     this.emit(null);
    //   }
    // }
  }
  valueChange(event: any) {
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
  timer: any = null;
  isfilterChange:boolean=false;
  filterChange(filter: any) {
    this.isfilterChange=true;
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    var self=this;
    //console.log("filterChange = ", filter == null, filter == "", filter);
    this.timer = setTimeout(() => {
      self.queryInfo.Query = filter;
      self.getDataForLookup();
    }, 500);
  }

  open() {
    this.openCombobox.emit(true);
    this._data = [{ "KeyId": 0, "DisplayName": "Đang tải dữ liệu...", Disabled: true }];
    var self=this;
    setTimeout(() => {
      if(self.isfilterChange!=true)
      {
        self.getDataForLookup();
      }
    }, 500);
  }

  close() {
    let self = this;
    setTimeout(function () {
      //console.log("setTimeout = ", self.dichVuCombobox);

      self.openCombobox.emit(false);
  }, 500);
    //console.log("close");
  }

  focus() {
    //this._data=[{"KeyId":0,"DisplayName":"Đang tải dữ liệu...",Disabled:true}];
    //this.getDataForLookup();
  }

  focusManual(){
    if (document.getElementById(this.id) != undefined) {
      //console.log("focusManual = ", this.id, document.getElementById(this.id));
      let combobox = document.getElementById(this.id);
      if (combobox.getElementsByTagName("kendo-searchbar") != undefined &&
      combobox.getElementsByTagName("kendo-searchbar").length>0 &&
      combobox.getElementsByTagName("kendo-searchbar")[0]!=undefined&&
      combobox.getElementsByTagName("kendo-searchbar")[0].firstElementChild!=undefined) {
        let dropDownListId = combobox.getElementsByTagName("kendo-searchbar")[0].firstElementChild.id;
        document.getElementById(dropDownListId).focus();
        this.cdRef.detectChanges();
      }
    }
  }

  blur() {
  }
  itemDisabled(itemArgs: { dataItem: any, index: number }) {
    return itemArgs.dataItem.Disabled; //disable the temp item
  }

  setFindWhereID() {
    //this.queryInfo.Id = this.idWhere == null ? 0 : this.idWhere;
    //this.setItemDefault = this.setItemDefault == null ? true : this.setItemDefault;
  }

}
