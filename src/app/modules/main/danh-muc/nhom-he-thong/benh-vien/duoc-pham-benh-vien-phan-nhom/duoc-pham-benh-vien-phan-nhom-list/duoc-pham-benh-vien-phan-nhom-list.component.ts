import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { DuocPhamBenhVienPhanNhom } from '../duoc-pham-benh-vien-phan-nhom.model';
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
    // tslint:disable-next-line: component-selector
    selector: 'app-duoc-pham-benh-vien-phan-nhom-list',
    templateUrl: './duoc-pham-benh-vien-phan-nhom-list.component.html',
    styleUrls: ['./duoc-pham-benh-vien-phan-nhom-list.component.scss']
})
export class DuocPhamBenhVienPhanNhomListComponent implements OnInit {
    DuocPhamBenhVienPhanNhom = {} as DuocPhamBenhVienPhanNhom;
    documentType: DocumentType;
    expression = false;
    _gridQueryInfo: GridQueryInfo;
    _isLoading = false;
    _skip = 0;
    _pageSize = 10;
    _take: number;
    _additionalSearchString: string;
    mySelection: number[] = [];

    icDelete = icDelete;
    icSearch = icSearch;
    icEdit = icEdit;
    icAdd = icAdd;
    icMoreHoriz = icMoreHoriz;
    searchCtrl = new FormControl();
    isCreateChildren: boolean;
    timeoutSearchChange: any;
    formIsPopup = false;
    componentCreate: any = null;

    searchPlaceHolder = 'Nhập từ khóa...';
    searchString: string = null;
    lazyLoadPage = false;
    useAddDeault = true;
    sort: SortDescriptor[] = null;
    baseRoute: string;

    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    public data: any[] = [];
    originData: any[] = [];
    public field = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'DuocPhamBenhVienPhanNhomChildren' };
    public iconClass({ text, DuocPhamBenhVienPhanNhomChildren }: any): any {
        return {
            'k-i-folder': DuocPhamBenhVienPhanNhomChildren !== undefined,
            'k-icon': true
        };
    }

    constructor(
        private baseService: BaseService,
        private router: Router,
        private authService: AuthService,
        private notificationService: NotificationService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucDuocPhamBenhVienPhanNhom;
        this._isLoading = true;
        this.baseService.getDataForGrid(this._gridQueryInfo, 'DuocPhamBenhVienPhanNhom/GetDataTreeView').subscribe((resultData: any[]) => {
            this.data = [...resultData];
            this.originData = [...resultData];
        });
        this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/them';
    }
    search() {
        this._skip = 0;
        let searchText = this.searchString != null ? this.searchString : '';
        searchText = CommonService.convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

        this._isLoading = true;
        this._gridQueryInfo = {
            skip: this._skip,
            take: this._take,
            pageSize: this._pageSize,
            searchString: searchText,
            additionalSearchString: this._additionalSearchString,
            sort: this.sort,
            lazyLoadPage: this.lazyLoadPage
        };
        this.baseService.getDataForGrid(this._gridQueryInfo, 'DuocPhamBenhVienPhanNhom/GetDataTreeView')
            .subscribe((resultData: any[]) => {
                this.data = resultData;
            });
    }

    searchChanges(event: string) {
        const self = this;
        self.searchString = event;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }

        self.timeoutSearchChange = setTimeout(() => {
            if (self.searchString == null || self.searchString === '') {
                self.data = [...self.originData];
            }
        }, 100);
    }

    onKey(event: any) {
        if (event.key === 'Enter' || this.searchString === '') {
            this.search();
        }
    }
    add() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            if (this.formIsPopup) {
                this.dialog.open(this.componentCreate).afterClosed().subscribe();
            } else {
                this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/them']);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    Addchildren(id: number) {
        this.isCreateChildren = true;
        this.router.navigate
            (['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/chinh-sua/' + id + '/' + this.isCreateChildren]);
    }

    edit(id: number) {
        this.isCreateChildren = false;
        this.router.navigate
            (['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/chinh-sua/' + id + '/' + this.isCreateChildren]);
    }

    mySelectionAfterDelete(id: number) {
        this.mySelection.forEach((item, index, object) => {
            if (item === id) {
                object.splice(index, 1);
            }
        });
    }

    delete(id: number) {
        const self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {

            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessComfirmChildrenLyDoTiepNhan,
                        ['xóa', 'dược phẩm'])
                }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(
                            () => {
                                this.mySelectionAfterDelete(id);
                                self.search();
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                            },
                            (err: any) => {
                                self.notificationService.showError(err.Message);
                            });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}

