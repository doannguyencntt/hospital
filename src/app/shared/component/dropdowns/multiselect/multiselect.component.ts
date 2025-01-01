import { Component, Input, OnInit, AfterContentInit, Output, EventEmitter, ViewEncapsulation, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BroadcastService } from '../../../../core/services/broadcast.service';
import { LookupItemVo, MultiselectQueryInfo } from 'src/app/shared/models/common.model';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Subscription } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MultiselectComponent implements OnInit, AfterContentInit {
  subscription: Subscription;
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
  @Input() queryInfo: MultiselectQueryInfo = new MultiselectQueryInfo();
  @Input() isAuthorize: boolean = true;
  @Input() hierarchyKeyToSend: any;
  @Input() hierarchyKeyToListen: any;
  @Input() template: any = null;
  @Input() templateHeader: any = null;
  @Input() validationerror: string = "";
  @Input() title: string = "";
  @Input() idWhere: number = null;
  @Input() autoClose: boolean = true;
  @Input() popupSettings: any = { appendTo: 'component' };

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() openChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(private apiService: ApiService, private broadcastService: BroadcastService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this._data = this.data;
    if (this.popupSettings == "null") {
      this.popupSettings = { appendTo: 'root', popupClass: "item-no-padding" };
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if (changes.model != undefined && changes.model.currentValue != null) {
      if (this.hierarchyKeyToSend != undefined && this.hierarchyKeyToSend != null) {
        var self = this;
        setTimeout(function () {
          self.broadcastService.broadcast({
            name: self.hierarchyKeyToSend,
            message: changes.model.currentValue
          });
        }, 1);
      }
    }
    if (changes.data != undefined && changes.data.currentValue != null) {
      this._data = changes.data.currentValue;
      // this.setValueDefaultWhenUpdateDatasource();

    }
  }
  emit(event: any) {
    this.validationerror = "";

    if (typeof event === 'number') {
      let newArr: Array<any> = [];
      newArr[0] = event;
      this.modelChange.emit(newArr);
      return;
    }
    this.modelChange.emit(event);
  }
  ngAfterContentInit() {
    this.getDataForLookup();
    if (this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null) {
      var currentValueSend = null;
      this.subscription = this.broadcastService.on(this.hierarchyKeyToListen, (event) => {
        if (currentValueSend != event.message) {
          this.queryInfo.ParameterDependencies = "{" + this.hierarchyKeyToListen + ":" + event.message + "}";
          this._data = null;
          this.getDataForLookup();
          currentValueSend = event.message;
        }
        else {
          this.queryInfo.ParameterDependencies = null;
          this._data = null;
          this.getDataForLookup();
        }
      });
    }
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }
  setFindWhereID() {
    //this.queryInfo.Id = this.idWhere;
  }

  getDataForLookup() {
    if (this.url != undefined && this.url != null && this.url != "" && (this.data == null || this.data == undefined)) {
      if (this.idWhere != undefined && this.idWhere != null && this.idWhere != 0)
        this.setFindWhereID();
        if(this.model!=null)
        {
          this.queryInfo.SelectedItems=JSON.stringify(this.model);
        }
      this.apiService.post<Array<LookupItemVo>>(this.url, this.queryInfo).subscribe(
        resultData => {
          if (resultData !== undefined && resultData != null) {
            this._data = resultData;
            // if(this.hierarchyKeyToListen!=undefined && this.hierarchyKeyToListen!=null)
            // {
            //   this.setValueDefaultWhenUpdateDatasource();
            // }
          }
        },
        (err: any) => {
          //console.log(err);
        });
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
  }
  setValueDefaultWhenUpdateDatasource() {
    if (this.model != undefined) {
      if (this._data != null && this._data.length > 0) {
        if (!CommonService.findObjectByKey(this._data, "KeyId", this.model)) {
          this.model = this._data[0].KeyId;
          this.emit(this.model);
        }
      }
      else {
        this.model = null;
        this.emit(null);
      }
    }
  }
  onValueChange(value: any) {
    this.valueChange.emit(value);
    // if(this.hierarchyKeyToSend!=undefined && this.hierarchyKeyToSend!=null)
    // {
    //   this.broadcastService.broadcast({
    //     name: this.hierarchyKeyToSend,
    //     message: value
    //   });
    // }
  }

  timer: any = null;
  filterChange(filter: any) {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    var self = this;
    this.timer = setTimeout(() => {
      self.queryInfo.Query = filter;
      self.getDataForLookup();
    }, 500);
  }


  open() {
    if (this.data === undefined || this.data === null) {
      this._data = [{ "KeyId": 0, "DisplayName": "Đang tải dữ liệu...", Disabled: true }];
      this.getDataForLookup();
    }
    this.openChange.emit(true);
  }

  close() {
    this.closeChange.emit(true);
  }

  focus() {
    this.getDataForLookup();
  }

  blur() {
  }
}
