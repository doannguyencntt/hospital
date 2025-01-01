import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icCopy from '@iconify/icons-ic/outline-content-copy';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhamDoanCongTyTimKiem } from '../kham-doan-cong-ty.model';
import { KhamDoanCongTyDetailPopupComponent } from '../kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-cong-ty-list',
    templateUrl: './kham-doan-cong-ty-list.component.html',
    styleUrls: ['./kham-doan-cong-ty-list.component.scss']
})
export class KhamDoanCongTyListComponent implements OnInit {

    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icAdd = icAdd;
    icDelete = icDelete;
    icCopy = icCopy;

    searchCtrl = new FormControl();
    documentType: DocumentType;
    baseRoute = '/kham-doan/cong-ty';

    gridColumns: any[] = [];
    _gridColumnsFilter: any[] = [];
    _isCheckColumnFilter = true;
    strAdditionalSearchString = '';
    timKiemObj: KhamDoanCongTyTimKiem = new KhamDoanCongTyTimKiem();
    getDataForGridUrl = 'KhamDoan/GetDataListCongTyForGridAsync';
    getTotalForGridUrl = 'KhamDoan/GetTotalPageListCongTyForGridAsync';

    @ViewChild('maCongTyTemplate', { static: true }) maCongTyTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridParent', { static: true }) gridChild: GridComponent;
    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location: Location,
        private dialog: MatDialog,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanCongTy;

        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery) {
            const holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                const additionalSearchString = LocalStorageHelper.getItem<string>('additionalSearchStringKhamDoanDanhSachCongTy');
                if (additionalSearchString != null) {
                    this.timKiemObj = JSON.parse(additionalSearchString);
                    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            this.gridChild.additionalSearchString = null;
            LocalStorageHelper.removeItem('additionalSearchStringKhamDoanDanhSachCongTy');
        }

        this.gridColumns = [
            { Field: 'MaCongTy', Title: 'Mã công ty', Width: 80, Sortable: true, Template: this.maCongTyTemplate },
            { Field: 'TenCongTy', Title: 'Tên công ty', Width: 180, Sortable: true },
            { Field: 'LoaiCongTy', Title: 'Loại công ty', Width: 100, Sortable: true },
            { Field: 'DiaChi', Title: 'Địa chỉ', Width: 140, Sortable: true },
            { Field: 'DienThoai', Title: 'Điện thoại', Width: 100, Sortable: true },
            { Field: 'MaSoThue', Title: 'Mã số thuế', Width: 100, Sortable: true },
            { Field: 'TaiKhoanNganHang', Title: 'TK NH', Width: 100, Sortable: true },
            { Field: 'DaiDien', Title: 'Đại diện', Width: 120, Sortable: true },
            { Field: 'NguoiLienHe', Title: 'Người liên hệ', Width: 120, Sortable: true },
            { Field: 'TrangThai', Title: 'Trạng thái', Width: 100, Sortable: true, Template: this.trangThaiTemplate },
            { Field: 'Action', Title: '', Width: 40, Sortable: false, Template: this.actionTemplate }
        ];


        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title !== '');
    }

    searchChanges(event) {
        if ((event == null || event === '') && this.strAdditionalSearchString !== '') {
            this.timKiemNangCao();
        }
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.timKiemNangCao();
        }
    }

    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }

    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        const queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

        LocalStorageHelper.setItem('additionalSearchStringKhamDoanDanhSachCongTy', queryString);
        this.gridChild.search();
    }

    xuLyXuatExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            // tslint:disable-next-line: deprecation
            this.apiService.postExportExcel<string>('KhamDoan/ExportDanhSachCongTy', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'CongTy' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    showPopupChiTiet(id: number = null) {
        let securityOperation = SecurityOperation.Add;
        let url = '/them/';
        if (id != null) {
            securityOperation = SecurityOperation.Update;
            url = '/chi-tiet/';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
            // this.dialog.open(KhamDoanCongTyDetailPopupComponent, {
            //   disableClose: false,
            //   width: '1600px',
            //   data: { Id: id}
            // }).afterClosed().subscribe(result => {
            //   this.gridChild.search();
            // });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xoa(Id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
            // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    // tslint:disable-next-line: deprecation
                    this.apiService.delete('KhamDoan/XuLyXoaCongTy?id=' + Id).subscribe(_ => {
                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
                        this.gridChild.search();
                    }, err => {
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
