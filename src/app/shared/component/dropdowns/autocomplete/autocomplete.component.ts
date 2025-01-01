import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, SimpleChanges, ViewEncapsulation, ViewChild } from '@angular/core';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ApiService } from 'src/app/core/services/api.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnInit {

  subscription: Subscription;
  _data: any;
  @Input() id: string;
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() moreClass: string;
  @Input() model: any;
  @Input() modelText: any;
  @Input() maxlength: number;
  @Input() readonly: boolean = false;
  @Input() placeHolder: string = "";
  @Input() type: string = "text";
  @Input() disabled: boolean = false;
  @Input() classLabel: string = "col-sm-2";
  @Input() classField: string = "col-sm-10";
  @Input() horizontalForm: boolean = false;
  @Input() filterable: boolean = true;
  @Input() valueField: string = null;
  @Input() valuePrimitive: boolean = true;
  @Input() url: string;
  @Input() queryInfo: LookupQueryInfo = new LookupQueryInfo();
  @Input() isAuthorize: boolean = true;
  @Input() hierarchyKeyToSend: any;
  @Input() hierarchyKeyToListen: any;
  @Input() bind: boolean = false;
  @Input() validationerror: string = "";
  @Input() title: string = "";
  @Input() dataList: any[] = null;
  @Input() dataListObject: any[] = null;
  @Input() templateHeader: any = null;
  @Input() template: any = null;
  @Input() focusIsOpen: boolean = false;
  @Input() popupSettings: any = { appendTo: 'component' };
  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() openCombobox: EventEmitter<any> = new EventEmitter<any>();
  @Output() blurChange: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('autocomplete', { static: true }) public autocomplete: any;
  constructor(private apiService: ApiService, private broadcastService: BroadcastService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.dataList != undefined && this.dataList != null) {
      this._data = this.dataList.slice(0, this.queryInfo.Take);
    }
    if (this.popupSettings == "null") {
      this.popupSettings = { appendTo: 'root', popupClass: "item-no-padding" };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataList'] && changes['dataList'].currentValue != changes['dataList'].previousValue
      && changes['dataList'].previousValue != undefined) {
      this._data = changes['dataList'].currentValue.slice(0, this.queryInfo.Take);
    }

    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    // if (changes.model != undefined && changes.model.currentValue != null) {
    //   if (this.bind.toString() == "false" && this.modelText != null && this.modelText != '' && (this.dataList == null || this.dataList == undefined)) {
    //     var self = this;
    //     setTimeout(function () {
    //       self._data = [{ "KeyId": changes.model.currentValue, "DisplayName": self.modelText }];
    //     }, 1);
    //   }
    //   if (this.hierarchyKeyToSend != undefined && this.hierarchyKeyToSend != null) {
    //     this.broadcastService.broadcast({
    //       name: this.hierarchyKeyToSend,
    //       message: changes.model.currentValue
    //     });
    //   }
    // }
    // if (changes.data != undefined && changes.data.currentValue != null) {
    //   this._data = changes.data.currentValue;
    //   this.setValueDefaultWhenUpdateDatasource();
    // }
  }

  emit(event: any) {
    this.validationerror = "";
    this.modelChange.emit(event);
  }
  ngAfterContentInit() {
    if (this.bind.toString() == "true") {
      this.getDataForLookup();
    }

    if (this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null) {
      var currentValueSend = null;
      this.subscription = this.broadcastService.on(this.hierarchyKeyToListen, (event) => {
        if (currentValueSend != event.message) {
          this.queryInfo.ParameterDependencies = "{" + this.hierarchyKeyToListen + ":" + event.message + "}";
          this._data = null;
          this.getDataForLookup();
          currentValueSend = event.message;
        }
      });
    }
    this.cdRef.detectChanges();
  }
  getDataForLookup() {
    if (this.url !== undefined && this.url != null && this.url !== '' && (this.dataList == null || this.dataList === undefined)) // hiện tại đang để tạm, chưa xử lý đúng
    {
      $("#" + this.id + " .k-select .k-icon").removeClass("k-i-arrow-s");
      $("#" + this.id + " .k-select .k-icon").addClass("k-i-loading");
      this.apiService.post<Array<string>>(this.url, this.queryInfo).subscribe(
        resultData => {
          if (resultData !== undefined && resultData != null) {
            this._data = resultData;
            if (this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null) {
              this.setValueDefaultWhenUpdateDatasource();
            }
          }
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        },
        () => {
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        });
    }
    else {
      if (this.dataList != undefined && this.dataList != null) {
        let query = CommonService.RemoveAccents(this.queryInfo.Query).toLowerCase().trim();
        this._data = this.dataList.filter((s) => CommonService.RemoveAccents(s != null ? s.toLowerCase() : null).trim().indexOf(query) !== -1)
          .slice(0, this.queryInfo.Take);
      }
    }
    this.bind = true;
  }

  setValueDefaultWhenUpdateDatasource() {
    if (this.model != undefined) {
      if (this._data != null && this._data.length > 0) {
        if (!CommonService.findObjectByKey(this._data, "KeyId", this.model)) {
          this.model = this._data[0];
          this.emit(this.model);
        }
      }
      else {
        this.model = null;
        this.emit(null);
      }
    }
  }
  valueChange(event: any) {
    this.onValueChange.emit(event);
  }

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }
  timer: any = null;
  filterChange(filter: any) {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.queryInfo.Query = filter;
      this.getDataForLookup();
    }, 500);
  }

  open() {
    this.openCombobox.emit(true);
    this._data = [{ "KeyId": 0, "DisplayName": "Đang tải dữ liệu...", Disabled: true }];
    this.getDataForLookup();
  }

  close() {
    let self = this;
    //tạm thời đóng lại (vì lỗi enter)
    setTimeout(function () {
    self.openCombobox.emit(false);
    }, 500);
  }

  focus() {
    if(this.focusIsOpen)
    {
      this.autocomplete.toggle(true);
    }    
  }

  blur() {
    this.blurChange.emit(true);
  }

  itemDisabled(itemArgs: { dataItem: any, index: number }) {
    return itemArgs.dataItem.Disabled; //disable the temp item
  }
}
