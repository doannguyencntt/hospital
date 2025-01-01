import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';

import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import { CommonService } from 'src/app/core/utilities/common.helper';
import { NhomVatTu } from '../nhom-vat-tu.model';

@Component({
  selector: 'app-nhom-vat-tu-list',
  templateUrl: './nhom-vat-tu-list.component.html',
  styleUrls: ['./nhom-vat-tu-list.component.scss']
})
export class NhomVatTuListComponent implements OnInit {
  nhomVatTu = {} as NhomVatTu;
  documentType: DocumentType;
  expression: boolean = false;
  public data: any[] = [];
  public field: Object = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'ListNhomVatTuChildren' };
  public iconClass({ text, ListNhomVatTuChildren }: any): any {
    return {
      'k-i-folder': ListNhomVatTuChildren !== undefined,
      //'k-i-minimize': ListNhomVatTuChildren !== undefined,
      'k-icon': true
    };
  }
  _gridQueryInfo: GridQueryInfo;
  _isLoading: boolean = false;
  _skip: number = 0;
  _pageSize: number = 10;
  _take: number;
  _gridDataSource: any;
  _additionalSearchString: string;


  icSearch = icSearch;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  searchCtrl = new FormControl();

  @Input() searchPlaceHolder: string = "Nhập từ khóa...";
  @Input() gridDataSource: any;
  @Input() searchString: string = null;
  @Input() lazyLoadPage: boolean = false;
  @Input() useAddDeault: boolean = true;
  @Input() sort: SortDescriptor[] = null;

  @Output() extOnSearch = new EventEmitter<any>();
  constructor(private baseService: BaseService, private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucNhomVatTuYTe;
    this._gridDataSource = this.gridDataSource;
    this._isLoading = true;
    this.baseService.getDataForGrid(this._gridQueryInfo, "NhomVatTu/GetDataTreeView").subscribe((resultData: any[]) => {
      this.data = resultData;
      //console.log("this my data:",this.data);
    })
  }
  search() {
    this._skip = 0;
    if (this.gridDataSource == null) {
      var searchText = this.searchString != undefined ? this.searchString : "";
      searchText = CommonService.convertSpecialXML(searchText);
      searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
      searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

      this._isLoading = true;
      this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
      this.baseService.getDataForGrid(this._gridQueryInfo, "NhomVatTu/GetDataTreeView")
        .subscribe((resultData: any[]) => {
          this.data = resultData;
        })
    }
    else {
      this.extOnSearch.emit(this.searchString);
    }
  }
  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.searchString = "";
      this.search();
    }
  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.search();
    }
  }
  
}
