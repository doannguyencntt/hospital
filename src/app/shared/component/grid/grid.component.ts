import {
    OnDestroy,
    AfterContentInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
    ViewChild,
    SimpleChange,
    Renderer2,
    NgZone
} from '@angular/core';
import { Router } from '@angular/router';
import { PageChangeEvent, SelectAllCheckboxState, RowClassArgs } from '@progress/kendo-angular-grid';
import { SortDescriptor, CompositeFilterDescriptor, GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDragIndicator from '@iconify/icons-ic/twotone-drag-indicator';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';

import { GridQueryInfo } from './grid.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
// update 3/8
import { Observable, Subscription, fromEvent } from 'rxjs';
import { tap, take } from 'rxjs/operators';



declare var jQuery: any;

const tableRow = node => node.tagName.toLowerCase() === 'tr';

const closest = (node, predicate) => {
    while (node && !predicate(node)) {
        node = node.parentNode;
    }

    return node;
};


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class GridComponent implements OnInit, AfterContentInit, OnDestroy {
    _height: number;
    _gridDataSource: any;
    _gridColumns: any[] = [];
    _gridColumnsFilter: any[] = [];
    _skip: number = 0;
    _pageSize: number = 10;
    _take: number;
    _additionalSearchString: string;
    _masterName: string;
    _gridQueryInfo: GridQueryInfo;
    _headerTemplate: any = null;
    _useHeaderDefault: boolean;
    _useActionDefault: boolean;
    _pageable: boolean;
    _documentType: DocumentType;
    _isLoading: boolean = false;
    _isLoadingTotalPage: boolean = false;
    _useAddDeault: boolean = false;
    _filter: CompositeFilterDescriptor;
    mySelection: number[] = [];
    mySelectionInPage: number[] = [];
    selectAllState: SelectAllCheckboxState = 'unchecked';
    searchCtrl = new FormControl();
    hiddenColumns: string[] = [];
    formAdvangeSearch: FormGroup;
    _showDefaultPagerTemplate: boolean;
    clickedRowItem: any;
    focusGridContent:boolean=false;

    icEdit = icEdit;
    icSearch = icSearch;
    icDelete = icDelete;
    icAdd = icAdd;
    icFilterList = icFilterList;
    icMoreHoriz = icMoreHoriz;
    icDragIndicator = icDragIndicator;
    icFileExcel = icFileExcel;

    editedRowIndex: number = null;

    @Input() gridColumns: any[];
    @Input() gridDataSource: any;
    @Input() masterName: string;
    @Input() searchPlaceHolder: string = 'Nhập từ khóa...';
    @Input() baseRoute: string;
    @Input() searchString: string = null;
    @Input() keyCode: string = null;
    @Input() additionalSearchString: string = null;
    @Input() headerTemplate: any;
    @Input() useHeaderDefault: boolean = true;
    @Input() useActionDefault: boolean = true;
    @Input() pageable: boolean = true;
    @Input() autoHeight: boolean = false;
    @Input() height: number;
    @Input() maxHeight: number;
    @Input() heightToolbar: number = 140;
    @Input() inPopup: boolean = false;
    @Input() pageSize: number = 50;
    @Input() documentType: DocumentType;
    @Input() lazyLoadPage: boolean = false;
    @Input() useAddDeault: boolean = true;
    @Input() sort: SortDescriptor[] = null;
    @Input() detailTemplate: any = null;
    @Input() filterable: boolean = false;
    @Input() checkboxAble: boolean = true;
    @Input() keySelectBy: string = 'Id';
    @Input() showColumnVisibility: boolean = true;
    @Input() formIsPopup: boolean = false;
    @Input() componentCreate: any = null;
    @Input() componentUpdate: any = null;
    @Input() groups: GroupDescriptor[] = null;
    @Input() showDefaultPagerTemplate: boolean = true;
    @Input() triggerSelectAll: boolean = false;
    @Input() checkedByList: number[] = [];
    @Input() removeGroupFooterIfIsOnlyOne: boolean = false;
    @Input() reorderRowsMoveItemData: boolean = false;
    @Input() collapseGroup: boolean = false;
    @Input() buttonCount: number = 5;
    @Input() widthColumnSTT: number = 35;
    @Input() titleColumnSTT: string = "STT";

    @Input() urlGetData: string = '';
    @Input() urlGetTotalPage: string = '';
    @Input() isShowButtonEdit: boolean = false;
    @Input() allowSortDefault: boolean = true;
    @Input() autoRefreshDataSource: boolean = false;
    @Input() showExportExcel: boolean = false;
    @Input() HideCheckAll: boolean = false;
    @Input() HideHeader: boolean = false;
    @Input() dataItemParent: any = null;
    @Input() hideDetailSelectedCheckbox: boolean = false;
    @Input() showStt: boolean = false;


    @Output() extOnDataBound = new EventEmitter<any>();
    @Output() extOnPageChange = new EventEmitter<any>();
    @Output() extOnSearch = new EventEmitter<any>();
    @Output() extDetailExpand = new EventEmitter<any>();
    @Output() extDetailCollapse = new EventEmitter<any>();
    @Output() extCheckboxSelection = new EventEmitter<any>();
    @Output() extEnterChangePage = new EventEmitter<any>();
    @Output() extDoubleClick = new EventEmitter<any>();
    @Output() extExportExcel = new EventEmitter<any>();

    @Output() getDataSource: EventEmitter<any> = new EventEmitter<any>();
    @Output() extOnKeydownGrid = new EventEmitter<any>();


    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('grid', { static: true }) grid: any;
    constructor(private baseService: BaseService, private authService: AuthService, private router: Router,
        private notificationService: NotificationService, private cdRef: ChangeDetectorRef, private fb: FormBuilder,
        private dialog: MatDialog,
        private renderer: Renderer2, private zone: NgZone) {

    }
    ngOnInit() {
        //console.log("ngOnInit = ", this.additionalSearchString);
        this._gridColumns = this.gridColumns;
        // if (this._gridColumns != null && this._gridColumns.length > 0) {
        //   this._gridColumns.forEach(item=>{
        //       if(item.MinWidth!=null && item.MinWidth>0)
        //       {
        //           item.Width=this.getCellWidthAuto(item.Width,item.MinWidth);
        //       }
        //   });
        // }
        this._gridColumnsFilter = this._gridColumns.filter(p => p.Title != '');
        //console.log("ngOnInit = ", this._gridColumnsFilter);
        this._gridDataSource = this.gridDataSource;
        this._masterName = this.masterName == null || this.masterName == '' ? CommonService.makeRandom(6) : this.masterName;
        this._additionalSearchString = this.additionalSearchString;
        this._headerTemplate = this.headerTemplate;
        this._useHeaderDefault = this.useHeaderDefault;
        this._useActionDefault = this.useActionDefault;
        this._pageSize = this.pageSize;
        this._skip = 0;
        this._take = (this._pageSize * this._skip) + this._pageSize;
        this._pageable = this.pageable;
        this._height = this.height;
        this._documentType = this.documentType;
        this._documentType = this.documentType;
        this._useAddDeault = this.useAddDeault;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;

        if (this.allowSortDefault) {
            if (this._gridColumns != null && this._gridColumns.length > 0) {
                const check = this._gridColumns;
                if (this.sort == null) {
                    this.sort = [{
                        field: check[0].Field == 'ActionChose' ? check[1].Field
                            : ((check.filter(o => o.DefaultSort == true) != undefined && check.filter(o => o.DefaultSort == true) != null && check.filter(o => o.DefaultSort == true).length != 0) ? check.filter(o => o.DefaultSort == true)[0].Field
                                : (check.filter(o => o.Sortable == true) != null && check.filter(o => o.Sortable == true) != undefined && check.filter(o => o.Sortable == true).length != 0 ? check.filter(o => o.Sortable == true)[0].Field : '')),
                        dir: check.filter(o => o.Dir != undefined && o.Dir != null) != undefined && check.filter(o => o.Dir != undefined && o.Dir != null) != null && check.filter(o => o.Dir != undefined && o.Dir != null).length != 0
                            ? check.filter(o => o.Dir != undefined && o.Dir != null)[0].Dir : 'asc'
                    }];
                }
                this._gridColumns.forEach(column => {
                    if (column.Visible == null) {
                        column.Visible = true;
                    }
                });
            } else {

                this.sort = [{
                    field: 'Id',
                    dir: 'asc'
                }];
            }
        }
        this.formAdvangeSearch = this.fb.group({
        });
    }
    ngAfterContentInit() {
        const self = this;
        if (this.height == null && this.autoHeight != true) {
            if (this.maxHeight != null) {
                setTimeout(function () {
                    jQuery('#' + self._masterName).find('.k-grid-content').css({ 'max-height': self.maxHeight + 'px' });
                }, 500);
            } else {
                if (this.inPopup == true) {
                    jQuery(window).ready(function () {
                        self._height = jQuery('kendo-window').height() - self.heightToolbar;
                        if (self._height < 400) {
                            self._height = 400;
                        }
                    });
                    jQuery(window).resize(function () {
                        self._height = jQuery('kendo-window').height() - self.heightToolbar;
                        if (self._height < 400) {
                            self._height = 400;
                        }
                    });
                } else {
                    self._height = jQuery(window).height() - self.heightToolbar;
                    if (self._height < 400) {
                        self._height = 400;
                    }
                    jQuery(window).resize(function () {
                        self._height = jQuery(window).height() - self.heightToolbar;
                        if (self._height < 400) {
                            self._height = 400;
                        }
                    });
                }
            }
        }
        this.setDataSource();
        jQuery(document).click(function() {
            self.focusGridContent=false;
        });
        
        jQuery(".k-grid-aria-root").click(function(event) {
            self.focusGridContent=true;
            event.stopPropagation();
        });
        this.cdRef.detectChanges();


    }
    ngOnChanges(changes: SimpleChange) {
        // 09/04/2021: cập nhật lại trường hợp change datasource -> tự động gán lại data vào grid
        if (this.reorderRowsMoveItemData + "" == "true") {
            if (changes['gridDataSource'] && changes['gridDataSource'].currentValue != changes['gridDataSource'].previousValue
                && changes['gridDataSource'].previousValue != undefined && this._pageable) {
                this._skip = 0;
                this._gridDataSource.data = changes['gridDataSource'].currentValue.data.slice(0, this._pageSize);
                this._gridDataSource.total = changes['gridDataSource'].currentValue.total;
            }
        }
        else {
            if (changes['gridDataSource'] && changes['gridDataSource'].currentValue != changes['gridDataSource'].previousValue
                && changes['gridDataSource'].previousValue != undefined) {
                if (this._pageable) {
                    this._skip = 0;
                    this._gridDataSource.data = changes['gridDataSource'].currentValue.data.slice(0, this._pageSize);
                    this._gridDataSource.total = changes['gridDataSource'].currentValue.total;
                }
                else {
                    this._skip = 0;
                    this._gridDataSource.data = changes['gridDataSource'].currentValue.data;
                    this._gridDataSource.total = changes['gridDataSource'].currentValue.total;
                }
                this.setDataSource();
            }
        }
        if (this.autoRefreshDataSource && changes['searchString'] && changes['searchString'].currentValue != changes['searchString'].previousValue
            && changes['searchString'].previousValue != undefined) {
            this.search();
        }
        if (changes['additionalSearchString'] && changes['additionalSearchString'].currentValue != changes['additionalSearchString'].previousValue
            && changes['additionalSearchString'].previousValue != undefined) {
            this._additionalSearchString = changes['additionalSearchString'].currentValue;
            if((this.gridDataSource == undefined || this.gridDataSource == null) && this.autoRefreshDataSource == true)
            {
                this.search();
            }
        }
    }
    
    //set highlight for row
    rowCallback(context: RowClassArgs) {
        let hiddenChild ="isDisable-hidden-templateDetail"
        if (context != null && context.dataItem != null && context.dataItem.HighLightClass != null) {
            return context.dataItem.HighLightClass;
        }
        else if(context.dataItem.dragging!=undefined)
        {
            return {
                dragging: context.dataItem.dragging
            };
        }
        else if(context.dataItem.IsDisable == true)
        {
                return hiddenChild;
        }
    }
    detailExpand(event: any) {
        //console.log("detailExpand", event);
        this.extDetailExpand.emit(event);
    }

    detailCollapse(event: any) {
        //console.log("detailCollapse", event);
        this.extDetailCollapse.emit(event);
    }

    onEdit(rowIndexEdit: number, rowIndexClose: number = null) {
        if (rowIndexClose != null && rowIndexClose != undefined) {
            this.closeEditor(rowIndexClose);
        }
        this.grid.isShowButtonEdit = true;
        this.grid.editRow(rowIndexEdit);
    }

    closeEditor(index: number) {
        this.grid.closeRow(index);
        this.grid.isShowButtonEdit = false;
    }

    onExpandRowDetail(indexRow: number) {
        if (indexRow >= 0) {
            this.grid.expandRow(indexRow);
        }
    }

    onSelectedKeysChange(e) {
        const len = this.mySelectionInPage.length;
        const allData = this.getAllDataFromDatasource();
        const lenShowCheckbox = allData
            .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false))
            .length;
        if (len === 0) {
            this.selectAllState = 'unchecked';
        } else if (len > 0 && len < lenShowCheckbox) {
            this.selectAllState = 'indeterminate';
        } else {
            this.selectAllState = 'checked';
        }

        const dataHideCheckbox = allData.filter(obj => obj.HideCheckbox == true).map((item) =>
            item[this.keySelectBy]
        );
        if (dataHideCheckbox != null && dataHideCheckbox.length > 0) {
            dataHideCheckbox.forEach(obj => {
                const index = this.mySelection.findIndex(record => record === obj);
                if (index >= 0) {
                    this.mySelection.splice(index, 1);
                }

            });
        }
        this.extCheckboxSelection.emit(this.mySelection);
    }
    onSelectChangeCheckbox(e: any, val: any) {
        if (e.target.checked) {
            this.mySelectionInPage.push(val);
        } else {

            this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
        }
        const allData = this.getAllDataFromDatasource();
        const len = this.mySelectionInPage.length;
        if (len === 0) {
            this.selectAllState = 'unchecked';
        } else if (len > 0 && len < allData
            .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false))
            .length) {
            this.selectAllState = 'indeterminate';
        } else {
            this.selectAllState = 'checked';
        }
        this.extCheckboxSelection.emit(this.mySelection);
        //this.mySelection = this.mySelectionInPage;
        //console.log("onSelectChangeCheckbox = ", this.mySelectionInPage, this.mySelection, e, val);
        //this.cdRef.detectChanges();
    }
    setCheckedValue(checked: boolean, id: any){
        //let allData = this.getAllDataFromDatasource();
        //console.log("setCheckedValue = ", checked, this.mySelection, id);
        if(checked){
            let itemChecked = this.mySelection.find(p => p == id);
            if(itemChecked == undefined){
                this.mySelection.push(id);
            }
            //console.log("mySelection = ", checked, this.mySelection, id);
            //this.setCheckAllButton();
        }
        else{
            this.mySelection = this.mySelection.filter(o => o != id);
        }
    }
    onSelectAllChange(checkedState: SelectAllCheckboxState) {
        let allData = this.getAllDataFromDatasource();
        if (allData == undefined) {
            allData = [];
        }
        if (checkedState === 'checked') {
            this.mySelectionInPage = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) =>
                    item[this.keySelectBy]
                )
            this.mySelection.concat(this.mySelectionInPage);
            this.selectAllState = 'checked';
        } else {
            const mySelectionRemove = allData
                .filter(obj => obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false)).map((item) =>
                    item[this.keySelectBy]
                );
            if (mySelectionRemove != null && mySelectionRemove.length > 0) {
                mySelectionRemove.forEach(obj => {
                    this.mySelection.splice(this.mySelection.indexOf(obj), 1);
                });
            }
            this.mySelectionInPage = [];
            this.selectAllState = 'unchecked';
        }
        this.extCheckboxSelection.emit(this.mySelection);
        this.setCheckAllButton();
    }
    getAllDataFromDatasource() {
        let allData = [];
        if (this._gridDataSource != undefined) {
            if (this.groups != null) {
                this._gridDataSource.data.forEach(obj => {
                    obj.items.forEach(obj1 => {
                        allData.push(obj1);
                    })
                })
            } else {
                allData = this._gridDataSource.data;
            }
        }

        return allData;
    }
    setCheckAllButton() {
        let allData = [];
        if (this._gridDataSource != undefined) {
            if (this.groups != null) {
                this._gridDataSource.data.forEach(obj => {
                    obj.items.forEach(obj1 => {
                        allData.push(obj1);
                    })
                })
            } else {
                allData = this._gridDataSource.data;
            }
        }
        let totalRecordChecked = 0;
        if (allData == undefined) {
            allData = [];
        }
        allData.forEach(obj => {
            this.mySelection.forEach(value => {
                if (value == obj.Id) {
                    totalRecordChecked = totalRecordChecked + 1;
                }
            });
        })

        if (totalRecordChecked == allData.length && totalRecordChecked != 0) {
            this.selectAllState = 'checked';
        } else if (totalRecordChecked < allData.length && totalRecordChecked != 0) {
            this.selectAllState = 'indeterminate';
        } else {
            this.selectAllState = 'unchecked';
        }
    }

    filterChange(filter: CompositeFilterDescriptor): void {
        this._filter = filter;
    }
    filterChangeFromTemplate(filter: CompositeFilterDescriptor): void {
        this._filter = filter;
    }
    sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.search();
    }
    getCellWidthAuto(width: any, minWidth: any) {
        if (width == null) {
            if (this._gridColumns != null && this._gridColumns.length > 0) {
                const widthParent = jQuery('#' + this.masterName).parent().width();
                const widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
                const totalWidth = this._gridColumns.filter((item) => {
                    return item.Width != null;
                }).reduce((sum, item) => sum + item.Width, 0);
                if ((widthScreen < totalWidth + minWidth + 100)) {
                    return minWidth;
                } else {
                    return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                }
            }
        } else {
            return width;
        }
    }
    setDataSource() {
        if (this.gridDataSource == null) {
            this.getDataForGrid();
        }
        else {
            if (this.gridDataSource.data != undefined) {
                if (this.groups != null) {
                    var state: State = {
                        group: this.groups
                    };

                    //var d = process(this.gridDataSource.data, state);
                    let dataGrid;
                    if (this.pageable) {
                        var takeTo = +this._skip + +this._pageSize;
                        dataGrid = this.gridDataSource.data.slice(this._skip, takeTo);
                    }
                    else {
                        dataGrid = this.gridDataSource.data;
                    }
                    var d = process(dataGrid, state);
                    if (d != null) {
                        d.total = this.gridDataSource.total;
                        this._gridDataSource = d;
                    }
                    else {
                        this._gridDataSource = this.gridDataSource;
                    }
                }
                else {
                    if(this.pageable) // cập nhật phân trang cho trường hợp gán datasource
                    {
                        this._gridDataSource.data = this.gridDataSource.data.slice(this._skip, this._pageSize);
                        this._gridDataSource.total = this.gridDataSource.total;
                    }
                    else
                    {
                        this._gridDataSource = this.gridDataSource;
                    }
                }
            }
            // if (this._gridDataSource.total==undefined || this._gridDataSource.total/this._take<=1) {
            //   this._pageable = false;
            // }
            // else{
            //   this._pageable = true;

            // }
            if (this.triggerSelectAll == true) {
                this.setSelectAll();
            }
            if (this.removeGroupFooterIfIsOnlyOne == true) {
                this.setRemoveGroupFooterIfIsOnlyOne();
            }
            if (this.reorderRowsMoveItemData + "" == 'true') {

                this.currentSubscription = this.handleDragAndDrop();
            }
            if(this.collapseGroup && this.groups != null && this._gridDataSource!=null && this._gridDataSource.data!=null)
            {                            
                this._gridDataSource.data.forEach((_, index) => {
                    this.grid.collapseGroup(String(index));
                });
            }
        }
        
    }

    setSelectAll() {
        const self = this;
        setTimeout(function () {
            if(self.checkedByList!=null && self.checkedByList.length>0)
            {
                self.checkedByList.forEach(item=>{
                    if (!jQuery('#' + self._masterName + 'selectCheckboxId'+item).prop('checked')) {
                        jQuery('#' + self._masterName + 'selectCheckboxId'+item).trigger('click');
                    }
                });
            }
            else
            {
                if (!jQuery('#' + self._masterName + 'selectAllCheckboxId').prop('checked')) {
                    jQuery('#' + self._masterName + 'selectAllCheckboxId').trigger('click');
                }
            }
        }, 1000);
    }
    setRemoveGroupFooterIfIsOnlyOne() {
        const self = this;
        setTimeout(function () {
            if (jQuery('#' + self._masterName + ' .k-grid-content .k-group-footer').length == 1) {
                jQuery('#' + self._masterName + ' .k-grid-content .k-group-footer').hide();
            } else {
                jQuery('#' + self._masterName + ' .k-grid-content .k-group-footer').show();
            }
        }, 100);
        if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
        }
    }
    groupExpand(event: any) {
        if (this.removeGroupFooterIfIsOnlyOne == true) {
            this.setRemoveGroupFooterIfIsOnlyOne();
        }
    }
    setSelectCheckbox(id: any) {
        const self = this;
        setTimeout(function () {
            if (!jQuery('#' + self._masterName + 'selectCheckboxId' + id).prop('checked')) {
                jQuery('#' + self._masterName + 'selectCheckboxId' + id).trigger('click');
            }
        }, 100);
    }
    getDataForGrid() {
        let searchText = this.searchString != undefined ? this.searchString : '';
        searchText = CommonService.convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

        this._isLoading = true;

        // if (this._pageable === false) {
        //   this._take = 100;
        // }

        //this._additionalSearchString.toString();
        this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
        if (this._gridQueryInfo.additionalSearchString != undefined) {
            this._gridQueryInfo.additionalSearchString = this._gridQueryInfo.additionalSearchString.toString();
        }
        this.baseService.getDataForGrid(this._gridQueryInfo, this.urlGetData)
            .subscribe(
                (resultData: any) => {
                    if (resultData != undefined && resultData != null) {
                        if(resultData.Data==null)
                        {
                            resultData.Data=[];
                        }
                        if (this.groups != null) {
                            const state: State = {
                                group: this.groups
                            };
                            const d = process(resultData.Data, state);
                            if (d != null) {
                                d.total = resultData.TotalRowCount;
                                this._gridDataSource = d;
                            } else {
                                this._gridDataSource = {
                                    data: resultData.Data,
                                    total: resultData.TotalRowCount
                                };
                            }
                        } else {
                            this._gridDataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                        }

                        //set datasource emit
                        //console.log("data source emit = ", resultData);

                        this.getDataSource.emit(resultData.Data);
                        if(this.collapseGroup && this.groups != null && this._gridDataSource!=null && this._gridDataSource.data!=null)
                        {                            
                            this._gridDataSource.data.forEach((_, index) => {
                                this.grid.collapseGroup(String(index));
                            });
                        }
                    }
                    if (this.triggerSelectAll == true) {
                        this.setSelectAll();
                    }
                    if (this.removeGroupFooterIfIsOnlyOne == true) {
                        this.setRemoveGroupFooterIfIsOnlyOne();
                    }
                    this.extOnDataBound.emit(resultData);
                    this._isLoading = false;
                    if (resultData != undefined && resultData != null && this.lazyLoadPage == true) {
                        this.setCheckAllButton();
                        this._isLoadingTotalPage = true;
                        this.baseService.getTotalPageForGrid(this._gridQueryInfo, this.urlGetTotalPage)
                            .subscribe(
                                (resultData: any) => {
                                    if (resultData != undefined && resultData != null) {
                                        this._gridDataSource.total = resultData.TotalRowCount;

                                        // if (this._gridDataSource.total/this._take<=1) {
                                        //   this._pageable = false;
                                        // }
                                        // else{
                                        //   this._pageable = true;

                                        // }
                                    }
                                    this._isLoadingTotalPage = false;
                                },
                                () => {
                                    this._isLoadingTotalPage = false;
                                }
                            );
                    }
                    if (this.reorderRowsMoveItemData + "" == 'true') {

                        this.currentSubscription = this.handleDragAndDrop();
                    }
                },
                (err:any) => {
                    this._isLoading = false;
                    if(err.Message=="The wait operation timed out")
                    {
                        this.notificationService.showError("Có lỗi xảy ra trong quá trình trả về dữ liệu. Bạn hãy giới hạn tìm kiếm lại. Cảm ơn.");
                    }
                    else
                    {
                        console.log(err);
                        //this.notificationService.showError("Có lỗi xảy ra trong quá trình gửi yêu cầu lên server. Bạn hãy tải lại trang. Cảm ơn.");
                    }
                });
    }
    pageChange(event: PageChangeEvent): void {
        this._skip = event.skip;
        if (this.gridDataSource == null) {
            this.getDataForGrid();
        } else {
            if (this._pageable) {
                if(this.groups != null && !(this.reorderRowsMoveItemData + "" == "true"))
                {
                    this.setDataSource();
                }
                else
                {
                    var takeTo = +this._skip + +this._pageSize;
                    this._gridDataSource.data = this.gridDataSource.data.slice(this._skip, takeTo);
                }
            }
            this.extOnPageChange.emit(this._skip);
        }
    }
    onKey(event: any) {
        if (event.key == 'Enter') {
            this.search();
        }
    }
    search() {
        this._skip = 0;
        if (this.gridDataSource == null) {
            this.getDataForGrid();
        } else {
            this.extOnSearch.emit(this.searchString);
        }
        if (this._gridDataSource != undefined && this._gridDataSource != null) {
            if (this.groups != null) {
                let i = 0;
                this._gridDataSource.data.forEach((item, idx) => {
                    item.items.forEach((item1, idx1) => {
                        this.grid.collapseRow(i);
                        i++;
                    })
                })
            } else {
                this._gridDataSource.data.forEach((item, idx) => {
                    this.grid.collapseRow(idx);
                })
            }

        }
    }
    clearCheckBox() {
        this.mySelection = [];
        this.selectAllState = 'unchecked';
    }
    clearSearch() {
        this.searchString = '';
        this.search();
    }
    clearDataSource(){
        this._gridDataSource = {
            data: [],
            total: 0
        };
    }
    
    onKeydownGrid(sender: any, e: any) {
       var obj={Sender:sender,Event:e,FocusGridContent: this.focusGridContent};
       this.extOnKeydownGrid.emit(obj);
    }
    oldValue:string;
    searchChange(event) {
        if(this.oldValue != event && (this.searchString == null || this.searchString == '')) {
            this.search();
        }
        this.oldValue = event;
    }
    add() {
        if (this.authService.hasPermission(this._documentType, SecurityOperation.Add)) {
            if (this.formIsPopup) {
                this.dialog.open(this.componentCreate).afterClosed().subscribe((result: any) => {

                });
            } else {
                this.router.navigate([this.baseRoute + '/them']);
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    edit(id: number) {
        if (this.authService.hasPermission(this._documentType, SecurityOperation.Update)) {
            this.router.navigate([this.baseRoute + '/chinh-sua/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
    detail(id: number) {
        if (this.authService.hasPermission(this._documentType, SecurityOperation.View)) {
            this.router.navigate([this.baseRoute + '/xem-chi-tiet/' + id]);
        } else {
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
        const self = this;
        if (self.authService.hasPermission(self._documentType, SecurityOperation.Delete)) {

            self.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
            }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                if (result == 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(
                            () => {
                                self.mySelectionAfterDelete(id);
                                self.search();
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                            },
                            (err: any) => {
                                self.notificationService.showError(err.Message);
                            });
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }

    }

    deletes() {
        const self = this;
        if (this.authService.hasPermission(this._documentType, SecurityOperation.Delete)) {

            if (this.mySelection != null && this.mySelection.length > 0) {

                this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '400px',
                    data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
                }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
                    if (result == 'Yes') {

                        self.baseService.deleteByIds(this.mySelection)
                            .subscribe(
                                () => {
                                    this.mySelection = [];
                                    self.search();
                                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                                },
                                (err: any) => {
                                    self.notificationService.showError(err.Message);
                                });
                    }
                });
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }

    }

    toggleColumnVisibility(column, event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (column.HasFilter) {
            column.hidden = !column.hidden;
            if (column.hidden) {
                this.hiddenColumns.push(column.Field);
            } else {
                const index: number = this.hiddenColumns.indexOf(column.Field);
                if (index !== -1) {
                    this.hiddenColumns.splice(index, 1);
                }
            }
        }
    }

    public cellClick(event: any) {
        this.clickedRowItem = event.dataItem;
        if (this.keyCode != null && this.keyCode != "") {
            if (event.originalEvent.code === this.keyCode) {
                this.extEnterChangePage.emit(event.dataItem);
            }
        }
    }
    public onDblClick(event: any) {
        this.extDoubleClick.emit(this.clickedRowItem);
        this.clickedRowItem=null;
    }
    exportExcel() {
        this.extExportExcel.emit();
    }
    /// update 3/8
    private currentSubscription: Subscription;

    public ngOnDestroy(): void {
        if (this.reorderRowsMoveItemData + "" == 'true') {
            // this.currentSubscription.unsubscribe();
        }
    }


    private handleDragAndDrop(): Subscription {
        const sub = new Subscription(() => { });
        let draggedItemIndex;

        const tableRows = Array.from(document.querySelectorAll("#" + this.masterName +'.k-grid tr'));
        tableRows.forEach(item => {
            this.renderer.setAttribute(item, 'draggable', 'true');
            const dragStart = fromEvent<DragEvent>(item, 'dragstart');
            const dragOver = fromEvent(item, 'dragover');
            const dragEnd = fromEvent(item, 'dragend');

            sub.add(dragStart.pipe(
                tap(({ dataTransfer }) => {
                    try {
                        const dragImgEl = document.createElement('span');
                        dragImgEl.setAttribute('style', 'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;');
                        document.body.appendChild(dragImgEl);
                        dataTransfer.setDragImage(dragImgEl, 0, 0);
                    } catch (err) {
                    }
                    try {

                    } catch (err) {
                    }
                })
            ).subscribe(({ target }) => {
                const row: HTMLTableRowElement = <HTMLTableRowElement>target;
                draggedItemIndex = row.getAttribute("data-kendo-grid-item-index");
                var gridData: any[] = [];
                this._gridDataSource.data.forEach(element => {
                    if(element.items != undefined && element.items != null) // Nam update
                    {
                        element.items.forEach(elements => {
                            gridData.push(elements)
                        });
                    }
                    else
                    {
                        gridData.push(element)
                    }
                  
                });
                if (draggedItemIndex != null) {
                    const dataItem = gridData[draggedItemIndex];
                    dataItem.dragging = true;
                }
            }));
            sub.add(dragOver.subscribe((e: any) => {
                e.preventDefault();
                var gridData: any[] = [];
                this._gridDataSource.data.forEach(element => {
                    if (element.items != undefined && element.items != null) { // Nam update
                        element.items.forEach(elements => {
                            gridData.push(elements)
                        });
                    }
                    else {
                        gridData.push(element)
                    }
                });
               
                if (draggedItemIndex != null) {
                    const dropIndex = parseInt(closest(e.target, tableRow).getAttribute("data-kendo-grid-item-index"));
                    const dropItem = gridData[dropIndex];
                    
                    const dataItem = gridData.splice(draggedItemIndex, 1)[0];
                    if((dataItem != undefined && dropItem != undefined) || (dataItem != null && dropItem != null))
                    {
                        if (dataItem.NhomId === dropItem.NhomId && dataItem.Nhom === dropItem.Nhom) {
                            if (dataItem.NhomId == dropItem.NhomId) {
                                draggedItemIndex = dropIndex;
                                // this.zone.run(res => {
                                gridData.splice(dropIndex, 0, dataItem);
                                var state: State = {
                                    group: this.groups
                                };
    
                                this._gridDataSource = process(gridData, state);
                                let count = 0;
                                this._gridDataSource.data.forEach(elements => {
                                    if (elements.items != undefined && elements.items != null) { // Nam update
                                        elements.items.forEach(element => {
                                            count++;
                                            element.STT = count;
                                        });
                                    }
                                    else{
                                        count++;
                                        elements.STT = count;
                                    }
    
                                });
                                // }
                                // );
                            }
                        }
                        else {
                            this.notificationService.showError("Bạn chỉ được sắp xếp thứ tự các dịch vụ trong cùng 1 nhóm.")
                        }
                    }
                  

                }
            }));

            sub.add(dragEnd.subscribe((e: any) => {
                e.preventDefault();
                var gridData: any[] = [];
                this._gridDataSource.data.forEach(element => {
                    if (element.items != undefined && element.items != null) {
                        element.items.forEach(elements => {
                            gridData.push(elements)
                        });
                    }
                    else {
                        gridData.push(element)
                    }
                });
                const dataItem = gridData[draggedItemIndex];
                if (dataItem != undefined) {
                    dataItem.dragging = false;
                }
            }));
        });

        return sub;
    }
    dataStateChange(event: any) {

    }

    navigate(url: string,documentType:DocumentType,securityOperation:SecurityOperation) {
        if(documentType!=null && securityOperation!=null)
        {
            if (this.authService.hasPermission(documentType, securityOperation)) {
                this.router.navigate([url]);
              } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
              }
        }
        else
        {
            this.router.navigate([url]);
        }
    }
}
