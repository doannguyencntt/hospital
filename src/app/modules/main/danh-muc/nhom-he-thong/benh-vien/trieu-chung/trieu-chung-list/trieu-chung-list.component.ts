import { Component, OnInit, ViewChild,Input,Output ,EventEmitter} from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl} from '@angular/forms';
import { TrieuChung} from '../trieu-chung.model';
import { BaseService } from 'src/app/core/services/base.service';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';

import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';


import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);

@Component({
  selector: 'app-trieu-chung-list',
  templateUrl: './trieu-chung-list.component.html',
  styleUrls: ['./trieu-chung-list.component.scss']
})
export class TrieuChungListComponent implements OnInit {
  trieuChung = {} as TrieuChung;
  documentType: DocumentType;
  expression: boolean = false;
  public data: any[] = [];
  public field: Object = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'TrieuChungChildren' };
  public iconClass({ text, TrieuChungChildren }: any): any {
  return {
      'k-i-folder': TrieuChungChildren !== undefined,
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
  mySelection: number[] = [];
  
  icDelete = icDelete; 
  icSearch = icSearch;
  icEdit = icEdit;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  searchCtrl = new FormControl();
  isShowView : boolean;

  @Input() formIsPopup: boolean = false;
  @Input() componentCreate: any = null;

  @Input() searchPlaceHolder: string = "Nhập từ khóa...";
  @Input() gridDataSource: any;
  @Input() searchString: string = null;
  @Input() lazyLoadPage: boolean = false;
  @Input() useAddDeault: boolean = true;
  @Input() sort: SortDescriptor[] = null;
  @Input() baseRoute: string ;

  @Output() extOnSearch = new EventEmitter<any>();
  @ViewChild(GridComponent, {static: false}) gridChild: GridComponent;
  constructor(private baseService : BaseService ,
              private router: Router,private authService: AuthService, 
              private notificationService: NotificationService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucTrieuChung;
    this._gridDataSource = this.gridDataSource;
    this._isLoading = true ;
    this.baseService.getDataForGrid(this._gridQueryInfo, "TrieuChung/GetDataTreeView").subscribe((resultData: any[]) => {
      this.data =  resultData;
    })
    this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/trieu-chung/them' ;
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
      this.baseService.getDataForGrid( this._gridQueryInfo,"TrieuChung/GetDataTreeView")
      .subscribe((resultData: any[]) => {
        this.data =  resultData;
        console.log("aaaaaaaaaaaaaaaa:",this.data);
      })
    }
    else {
      this.extOnSearch.emit(this.searchString);
    }
  }
  onKey(event: any)
  {
    if (event.key == "Enter" || this.searchString == "") {
    
      this.search();
    }
  }
  add() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      if (this.formIsPopup) {
        this.dialog.open(this.componentCreate).afterClosed().subscribe((result: any) => {

        });
      }
      else {
        this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them"]);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  Addchildren(id: number)
  {
    this.isShowView = true ;
    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them/" + id + "/" + this.isShowView]);
    // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
    //   this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them/" + id + "/" + this.isShowView]);
    // }
    // else {
    //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
  }
  edit(id: number) {
    this.isShowView = false;
    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/chinh-sua/" + id + "/" + this.isShowView]);
    // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
    //   this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/chinh-sua/" + id + "/" + this.isShowView]);
    // }
    // else {
    //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
  }
  mySelectionAfterDelete(id: number) {
    this.mySelection.forEach(function (item, index, object) {
      if (item === id) {
        object.splice(index, 1);
      }
    });
  }
  delete(id: number){
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessComfirmChildren, ["xóa"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          self.baseService.deleteById(id)
            .subscribe(
              () => {
                this.mySelectionAfterDelete(id);
                self.search();
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              },
              (err: any) => {
                self.notificationService.showError(err.Message);
              });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }
  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      this.search();
    }
  }
  }

