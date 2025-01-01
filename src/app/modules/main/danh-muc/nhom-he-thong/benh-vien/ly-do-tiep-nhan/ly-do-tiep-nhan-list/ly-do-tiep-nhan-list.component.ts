import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LyDoTiepNhan } from '../ly-do-tiep-nhan.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-ly-do-tiep-nhan-list',
  templateUrl: './ly-do-tiep-nhan-list.component.html',
  styleUrls: ['./ly-do-tiep-nhan-list.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LyDoTiepNhanListComponent implements OnInit {
  lyDoTiepNhan = {} as LyDoTiepNhan;
  documentType: DocumentType;
  expression: boolean = false;
  public data: any[] = [];
  public field: Object = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'LyDoTiepNhanChildList' };
  public iconClass({ text, LyDoTiepNhanChildList }: any): any {
    return {
      'k-i-folder': LyDoTiepNhanChildList !== undefined,
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


  icDelete = icDelete;
  icSearch = icSearch;
  icEdit = icEdit;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  icFileExcel = icFileExcel;
  isShowView: boolean;
  searchCtrl = new FormControl();
  mySelection: number[] = [];

  @Input() searchPlaceHolder: string = "Nhập từ khóa...";
  @Input() gridDataSource: any;
  @Input() searchString: string = null;
  @Input() lazyLoadPage: boolean = false;
  @Input() useAddDeault: boolean = true;
  @Input() sort: SortDescriptor[] = null;
  @Input() formIsPopup: boolean = false;
  @Input() componentCreate: any = null;
  @Input() baseRoute: string;

  @Output() extOnSearch = new EventEmitter<any>();
  constructor(private baseService: BaseService, private apiService: ApiService,
    private router: Router, private authService: AuthService,
    private notificationService: NotificationService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhMucLyDoTiepNhan;
    this._gridDataSource = this.gridDataSource;
    this._isLoading = true;
    this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView").subscribe((resultData: any[]) => {
    // this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView2").subscribe((resultData: any[]) => { // test tìm kiếm con có theo kèm theo cha.

      this.data = resultData;
    })
    this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them';
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
      this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView")
      // this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView2") // test tìm kiếm con có theo kèm theo cha.

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

  add() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      if (this.formIsPopup) {
        this.dialog.open(this.componentCreate).afterClosed().subscribe(() => {

        });
      }
      else {
        this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them"]);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  Addchildren(id: number) {
    this.isShowView = true;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them/" + id + "/" + this.isShowView]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  edit(id: number) {
    this.isShowView = false;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/chinh-sua/" + id + "/" + this.isShowView]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  mySelectionAfterDelete(id: number) {
    this.mySelection.forEach(function (item, index, object) {
      if (item === id) {
        object.splice(index, 1);
      }
    });
  }

  delete(id: number) {
    var self = this;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessComfirmChildrenLyDoTiepNhan, ["xóa", "lý do tiếp nhận"]) }
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
}
