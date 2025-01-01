import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, SimpleChanges, ViewEncapsulation, ElementRef } from '@angular/core';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ApiService } from 'src/app/core/services/api.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Subscription } from 'rxjs';

declare var $: any;
// @Directive({
//   selector: '[clickOutside]'
// })

@Component({
  selector: 'app-combobox-tree',
  templateUrl: './combobox-tree.component.html',
  styleUrls: ['./combobox-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(document:click)': 'onClickOutSide($event)',
  },
})
export class ComboboxTreeComponent implements OnInit {

  subscription: Subscription;
  _data: any = [];
  _show: boolean = false;
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
  @Input() isExpandedITem: boolean = true;

  @Input() reloadForGrid: boolean = false;
  currentValueSend: any = null;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataForLookupChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() openCombobox: EventEmitter<any> = new EventEmitter<any>();
  selectedKeys: any[] = [];
  selectedKeyId: number = null;

  constructor(private apiService: ApiService, private broadcastService: BroadcastService, private cdRef: ChangeDetectorRef, private _eref: ElementRef) { }

  onClickOutSide(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this._show = false;
      if (this.selectedKeys == null || this.selectedKeys.length == 0) {
        this.modelText = null;
      }
    }
  }

  ngOnInit() {
    this._data = this.data;
    this.queryInfo.Take = 50;
    if (this.popupSettings == "null") {
      this.popupSettings = { appendTo: 'root', popupClass: "item-no-padding" };
    }
    if (this.model != undefined && this.model != null) {
      if (this.selectedKeys.length == 0)
        this.selectedKeys.push(this.model);
      else {
        this.selectedKeys[0] = this.model;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hierarchyKeyToSend != undefined && this.hierarchyKeyToSend != null && changes.model != undefined) {
      this.broadcastService.broadcast({
        name: this.hierarchyKeyToSend,
        message: changes.model.currentValue
      });
    }
    //remove filter when currentValue is null or undefined
    // if(changes.model!=undefined && (changes.model.currentValue==null || changes.model.currentValue==undefined) )
    // {
    //     this.filterChange("");
    // }

    if (changes.model != undefined && changes.model.currentValue != changes.model.previousValue) {
      this.selectedKeys[0] = changes.model.currentValue == undefined ? null : changes.model.currentValue;
    }

    // You can also use model.previousValue and
    // model.firstChange for comparing old and new values
    if (changes.model != undefined && changes.model.currentValue != null) {
      if (this.bind.toString() == "false" && this.modelText != null && this.modelText != '' && (this.data == null || this.data == undefined)) {
        var self = this;
        setTimeout(function () {
          self._data = [{ "KeyId": changes.model.currentValue, "DisplayName": self.modelText }];
          if ($("#" + self.id).find("label.k-label") != undefined && $("#" + self.id).find("label.k-label").length > 0) {
            $("#" + self.id).find("label.k-label").addClass("label-intial-data");
          }

        }, 1);
      }

    }

    if (changes.data != undefined && changes.data.currentValue != null) {
      this._data = changes.data.currentValue;
      this.setValueDefaultWhenUpdateDatasource();
    }

    //vu le cheat for when set model = null -> clear model text
    if (this._data != null && this._data.length > 0) {
      var item = CommonService.findObjectByKeyOnRecursive(this._data, "KeyId", this.model, "Items");
      if (item != null) {
        this.modelText = item.DisplayName;
      }
      else {
        this.modelText = null;
      }
    }
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
      this.currentValueSend = null;
      this.subscription = this.broadcastService.on(this.hierarchyKeyToListen, (event) => {
        if (this.currentValueSend != event.message) {
          this.queryInfo.ParameterDependencies = "{" + this.hierarchyKeyToListen + ":" + event.message + "}";
          this._data = null;
          this.getDataForLookup();
          this.currentValueSend = event.message;
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
  getDataForLookup() {
    if (this.url !== undefined && this.url != null && this.url !== '' && (this.data == null || this.data === undefined)) {
      if (this.idWhere != 0)
        this.setFindWhereID();
      $("#" + this.id + " .k-select .k-icon").removeClass("k-i-arrow-s");
      $("#" + this.id + " .k-select .k-icon").addClass("k-i-loading");
      this.apiService.post<Array<any>>(this.url, this.queryInfo).subscribe(
        resultData => {
          if (resultData !== undefined && resultData != null) {
            this._data = resultData;
            if ((this.hierarchyKeyToListen != undefined && this.hierarchyKeyToListen != null)||(this.model!=undefined && this.model!=null)) {
              this.setValueDefaultWhenUpdateDatasource();
            }
          }


          this.dataForLookupChange.emit(resultData);
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        },
        () => {
          $("#" + this.id + " .k-select .k-icon").addClass("k-i-arrow-s");
          $("#" + this.id + " .k-select .k-icon").removeClass("k-i-loading");
        });
    }
    else {
      // cần update
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
  }

  // cần update
  setValueDefaultWhenUpdateDatasource() {
    if (this.model != undefined) {
      var item = CommonService.findObjectByKeyOnRecursive(this._data, "KeyId", this.model, "Items");
      if (this._data != null && this._data.length > 0 && item != null) {
        //if (!CommonService.findObjectByKey(this._data, "KeyId", this.model)) {
        this.modelText = item.DisplayName;
        this.model = item.KeyId;
        this.selectedKeys[0] = this.model;
        this.emit(this.model);
      }
      else {
        this.modelText = null;
        this.model = null;
        this.selectedKeys = [];
        this.emit(null);
      }


    }
  }

  valueChange(event: any) {
  }

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }

  timer: any = null;
  filterChange(filter: any) {
    this.validationerror = "";
    if (this.timer != null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.queryInfo.Query = filter;
      if (!this._show && filter != "") {
        this._show = true;
      }

      this.selectedKeys = [];
      this.model = null;
      this.getDataForLookup();
    }, 500);
  }

  clearSearch() {
    this.queryInfo.Query = null;
    this.modelText = null;
    this.model = null;
    this.selectedKeys = [];
    this.emit(null);
    this.getDataForLookup();
  }

  open() {
    this.openCombobox.emit(true);
    this._data = [{ "KeyId": 0, "DisplayName": "Đang tải dữ liệu...", Disabled: true }];
    this.getDataForLookup();
  }

  close() {
    let self = this;
    setTimeout(function () {
      self.openCombobox.emit(false);
  }, 500);
  }

  focus() {
  }

  blur() {
    this._show = false;
  }

  itemDisabled(itemArgs: { dataItem: any, index: number }) {
    return itemArgs.dataItem.Disabled;
  }

  setFindWhereID() {
    this.queryInfo.Id = this.idWhere;
  }

  public onToggle(): void {
    this.validationerror = "";
    this._show = !this._show;
    if (this._show) {
      this.queryInfo.Query = null;
      this.getDataForLookup();
    }
  }

  public handleSelection(event: any): void {
    if (event.item.dataItem.IsDisabled) {
      var item = this.keys.findIndex(x => x == event.item.index);
      if (item != -1) {
        this.handleCollapse(event.item);
      }
      else {
        this.handleExpand(event.item);
      }
      this.selectedKeys[0] = this.selectedKeyId;
      return;
    }

    this.selectedKeyId = event.item.dataItem.KeyId;
    this.selectedKeys[0] = this.selectedKeyId;

    this.modelText = event.item.dataItem.DisplayName;
    this.model = event.item.dataItem.KeyId;

    this.selectionChange.emit(event.item.dataItem);
    this.modelChange.emit(this.model);
    this._show = false;
  }

  // public handleSelection(event: any): void {
  //   if(event.dataItem.IsDisabled)
  //   {
  //     this.selectedKeys[0] = this.selectedIndex;
  //     return;
  //   }

  //   this.selectedIndex = event.dataItem.DisplayName;
  //   this.selectedKeys[0] = event.dataItem.DisplayName;

  //   this.modelText = event.dataItem.DisplayName;
  //   this.model = event.dataItem.KeyId;

  //   this.selectionChange.emit(event.dataItem);
  //   this.modelChange.emit(this.model);
  //   this._show = false;
  // }

  public isDisabled = (dataItem: any) => {
    return dataItem.IsDisabled;
  }


  public keys: string[] = [];
  public isExpanded = (dataItem: any, index: string) => {
    return this.keys.indexOf(index) > -1;
  }

  public handleCollapse(node) {
    this.keys = this.keys.filter(k => k !== node.index);
  }

  public handleExpand(node) {
    this.keys = this.keys.concat(node.index);
  }

}
