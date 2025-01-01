import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { NhomDichVuBenhVien } from '../nhom-dich-vu-benh-vien.model';
import { SortDescriptor } from '@progress/kendo-data-query';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import { delay } from 'rxjs/operators';
import { BaseService } from 'src/app/core/services/base.service';
import { FormControl } from '@angular/forms';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
    selector: 'app-nhom-dich-vu-benh-vien-list',
    templateUrl: './nhom-dich-vu-benh-vien-list.component.html',
    styleUrls: ['./nhom-dich-vu-benh-vien-list.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class NhomDichVuBenhVienListComponent implements OnInit {
    nhomDichVuBenhVien: NhomDichVuBenhVien = new NhomDichVuBenhVien();
    documentType: DocumentType;
    isShowView: boolean;
    icSearch = icSearch;
    icEdit = icEdit;
    icAdd = icAdd;
    icDelete = icDelete;
    icMoreHoriz = icMoreHoriz;

    popupLoadingData: any;
    gridQueryInfo: GridQueryInfo;

    _gridQueryInfo: GridQueryInfo;
    _isLoading: boolean = false;
    _skip: number = 0;
    _pageSize: number = 10;
    _take: number;
    _gridDataSource: any;
    _additionalSearchString: string;
    searchCtrl = new FormControl();

    mySelection: number[] = [];
    gridColumns: any[] = [];
    expandedKeys: any[] = [];
    public data: any[] = [];

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
    @ViewChild("defaultTemplate", { static: true }) defaultTemplate: TemplateRef<any>;

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


    //function xử lý treeview
    public hasChildren = (item: any) => item.HasChildren == true;

    public fetchChildren = (dataItem: any) => {
        return this.fetchDichVuKhamBenhCons(dataItem);
    };

    public fetchDichVuKhamBenhCons(dataItem: any): any {
        this.expand(dataItem);
        var queryString = null;
        this.nhomDichVuBenhVien.Id = dataItem.Id;
        this.nhomDichVuBenhVien.CapNhomDichVuBenhVien = dataItem.CapNhomDichVuBenhVien;
        let idCaps = dataItem.IdCap.split(";");
        let nhom = idCaps[1];
        if (nhom === 'nhomCon') {
            this.nhomDichVuBenhVien.NhomDichVuBenhVienChaId = dataItem.Id;
        } else {
            this.nhomDichVuBenhVien.NhomDichVuBenhVienChaId = dataItem.NhomDichVuBenhVienChaId;
        }
        queryString = JSON.stringify(this.nhomDichVuBenhVien);
        this._skip = 0;
        var searchText = this.searchString != undefined ? this.searchString : "";
        searchText = CommonService.convertSpecialXML(searchText);
        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));

        this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: queryString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
        return this.apiService.post("NhomDichVuBenhVien/NhomDichVuBenhVienTreeViewCons", this._gridQueryInfo).pipe(delay(300));
    }

    private expandLogic(dataItem: any) {
        let index = this.expandedKeys.findIndex(key => key === dataItem.IdCap);
        if (index === -1 && dataItem.HasChildren) {
            this.expandedKeys.push(dataItem.IdCap);
        }
    }

    public iconClass(dataItem: any) {
        return {
            'k-i-folder': dataItem.HasChildren == true,
            'k-icon': true
        };
    }
    constructor(
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private baseService: BaseService,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhMucNhomDichVuBenhVien;
        this.getDataTreeView();
        // this.gridColumns = [
        //     { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
        //     { Field: "NhomDichVuBenhVienCha", Title: "Tên nhóm dịch vụ bệnh viện cha", Width: 220, Sortable: true },
        //     { Field: "Ten", Title: "Tên", Width: 180, Sortable: true },
        //     { Field: "MoTa", Title: "Mô Tả", MinWidth: 300, Sortable: true },
        //     { Field: "IsDefault", Title: "Mặc định", MinWidth: 300, Sortable: true,Template:this.defaultTemplate }
        // ];
    }

    // exportExcel() {
    //     this.dialog.open(LoadingComponent, {
    //         disableClose: true,
    //         width: '200px',
    //         height: '90px',
    //         data: { Title: 'Đang xuất excel...' }
    //     });

    //     if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
    //         this.apiService.postExportExcel<string>("NhomDichVuBenhVien/ExportNhomDichVuBenhVien", this.gridChild._gridQueryInfo).subscribe(res => {
    //             let dateTimeNow = new Date();
    //             CommonService.downLoadFile(res, "application/vnd.ms-excel", "NhomDichVuBenhVien" + dateTimeNow.getFullYear() + ".xlsx");
    //             this.dialog.closeAll();
    //         }, err => {
    //             this.notificationService.showError(err.Message);
    //             this.dialog.closeAll();
    //         })
    //     } else {
    //         this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //     }
    // }

    expand(dataItem: any) {
        this.expandLogic(dataItem);
    }

    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    getDataTreeView() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.loadingPage();
            this.baseService.getDataForGrid(this.gridQueryInfo, "NhomDichVuBenhVien/NhomDichVuBenhVienTreeViews")
                .subscribe((resultData: any[]) => {
                    this.closePopupLoadingData()
                    this.data = resultData;
                })
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }

    }

    searchChanges(dataItem: any) {
        if (dataItem != undefined && (dataItem == null || dataItem == "")) {
            this.nhomDichVuBenhVien.SearchString = null;
            this.expandedKeys = [];
            this.timKiem();
        }
    }

    onKey(event: any) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }

    timKiem() {
        var searchText = this.nhomDichVuBenhVien.SearchString != undefined ? this.nhomDichVuBenhVien.SearchString : "";
        searchText = CommonService.convertSpecialXML(searchText);
        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        var queryInfo = { searchString: searchText };
        this.baseService.getDataForGrid(queryInfo, "NhomDichVuBenhVien/NhomDichVuBenhVienTreeViews")
            .subscribe((resultData: any[]) => {
                this.data = resultData;
                this._isLoading = false;
            })
    }

    themNhomDichVu() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien/them"]);
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chinhSua(id: number) {
        this.isShowView = false;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien/chinh-sua/" + id + "/" + this.isShowView]);
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    themCon(id: number) {
        this.isShowView = true;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-benh-vien/them/" + id + "/" + this.isShowView]);
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

    xoaCon(id: number) {
        const self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(
                            () => {
                                self.expandedKeys = [];
                                self.mySelectionAfterDelete(id);
                                self.nhomDichVuBenhVien.SearchString = null;
                                self.timKiem();
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
}
