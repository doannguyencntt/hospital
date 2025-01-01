import { Component, OnInit, ViewChild,Input,Output ,EventEmitter} from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl} from '@angular/forms';
import { NhomDichVuKyThuat} from '../nhom-dich-vu-ky-thuat.model';
import { BaseService } from 'src/app/core/services/base.service';

import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import { CommonService } from 'src/app/core/utilities/common.helper';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
  selector: 'app-nhom-dich-vu-ky-thuat-list',
  templateUrl: './nhom-dich-vu-ky-thuat-list.component.html',
  styleUrls: ['./nhom-dich-vu-ky-thuat-list.component.scss']
})
export class NhomDichVuKyThuatListComponent implements OnInit {
  nhomDichVuKyThuat = {} as NhomDichVuKyThuat;
  documentType: DocumentType;
  expression: boolean = false;
  public data: any[] = [];
  public field: Object = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'NhomDichVuKyThuatChildren' };
  public iconClass({ text, NhomDichVuKyThuatChildren }: any): any {
  return {
      'k-i-folder': NhomDichVuKyThuatChildren !== undefined,
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
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  constructor(private baseService : BaseService) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucNhomDichVuKyThuat;
    this._gridDataSource = this.gridDataSource;
    this._isLoading = true ;
    this.baseService.getDataForGrid(this._gridQueryInfo, "NhomDichVuKyThuat/GetDataTreeView").subscribe((resultData: any[]) => {
      this.data =  resultData;
     
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
      //this._additionalSearchString.toString();
      this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
      this.baseService.getDataForGrid( this._gridQueryInfo,"NhomDichVuKyThuat/GetDataTreeView")
      .subscribe((resultData: any[]) => {
        this.data =  resultData;
      })
    }
    else {
      this.extOnSearch.emit(this.searchString);
    }
  }
  onKey(event: any)
  {
    if (event.key == "Enter") {
    
      this.search();
    }
  }
  clearSearch() {
    if (this.searchString == null || this.searchString == "") {
      this.search();
    }
  }
}
