import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icDetail from '@iconify/icons-ic/twotone-apps';
import icCopy from '@iconify/icons-ic/content-copy';
import icAdd from '@iconify/icons-ic/twotone-add';
import { ActivatedRoute, Router } from '@angular/router';
import {
    ChiTietSuDungChuongTrinhGoiDvComponent
} from '../chi-tiet-su-dung-chuong-trinh-goi-dv/chi-tiet-su-dung-chuong-trinh-goi-dv.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GoiDichVuChuongTrinhMarketingSearch } from '../goi-dv-marketing.model';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-goi-dv-marketing-list',
    templateUrl: './goi-dv-marketing-list.component.html',
    styleUrls: ['./goi-dv-marketing-list.component.scss']
})
export class GoiDvCtMarketingListComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router,
        private location: Location,
        private route: ActivatedRoute
    ) { }

    documentType: DocumentType;
    gridColumns: any[] = [];
    urlGetDataGridChild = 'GoiDichVu/GetDataForGridChiTietAsync';
    urlGetTotalPageGridChild = 'GoiDichVu/GetTotalPageForGridChiTietAsync';
    icicdone = icicdone;
    icClose = icClose;
    icMoreHoriz = icMoreHoriz;
    icDelete = icDelete;
    icCopy = icCopy;
    icDetail = icDetail;
    icSearch = icSearch;
    icFileExcel = icFileExcel;
    icFilterList = icFilterList;
    icAdd = icAdd;
    baseRoute = '/marketing/ct-marketing/goi-dv';
    searchCtrl = new FormControl();
    search = new GoiDichVuChuongTrinhMarketingSearch();
    firstRequest = false;
    secondRequest = false;
    query: string = null;
    holdQuery: any = null;
    additionalSearchString: string = null;
    @ViewChild(GridComponent, { static: false }) gridChild: GridComponent;
    @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
    @ViewChild('orderTemplate', { static: true }) orderTemplate: TemplateRef<any>;
    @ViewChild('giaTruocChietKhauTemplate', { static: true }) giaTruocChietKhauTemplate: TemplateRef<any>;
    @ViewChild('tiLeChietKhauTemplate', { static: true }) tiLeChietKhauTemplate: TemplateRef<any>;
    @ViewChild('giaSauChietKhauTemplate', { static: true }) giaSauChietKhauTemplate: TemplateRef<any>;
    @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
    @ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
    @ViewChild('gridGoiDv', { static: false }) gridGoiDv: GridComponent;
    groups: GroupDescriptor[] = [{ field: 'LoaiGoi' }];
    groupsChild: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

    ngOnInit() {
        this.documentType = DocumentType.GoiDichVuMarketing;

        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }

        if (
            this.holdQuery && LocalStorageHelper.getItem('additionalSearchStringChuongTrinhGoiDvMarketing')
        ) {
            this.additionalSearchString = LocalStorageHelper.getItem(
                'additionalSearchStringChuongTrinhGoiDvMarketing'
            );
            this.search = JSON.parse(this.additionalSearchString);
            if (this.search.RangeFromDate) {
                if (this.search.RangeFromDate.startDate) {
                    this.search.RangeFromDate.startDate = new Date(this.search.RangeFromDate.startDate);
                }
                if (this.search.RangeFromDate.endDate) {
                    this.search.RangeFromDate.endDate = new Date(this.search.RangeFromDate.endDate);
                }
            }
            if (this.search.RangeToDate) {
                if (this.search.RangeToDate.startDate) {
                    this.search.RangeToDate.startDate = new Date(this.search.RangeToDate.startDate);
                }
                if (this.search.RangeToDate.endDate) {
                    this.search.RangeToDate.endDate = new Date(this.search.RangeToDate.endDate);
                }
            }
        } else {
            LocalStorageHelper.setItem('additionalSearchStringChuongTrinhGoiDvMarketing', null);
            this.additionalSearchString = JSON.stringify(this.search);
        }

        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 100, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên Gói Theo Chương Trình', MinWidth: 150, Sortable: true },
            { Field: 'TenDv', Title: 'Nhóm DV', Width: 150, Sortable: true },
            { Field: 'GiaTruocChietKhau', Title: 'Giá Trước CK', Width: 150, Sortable: true, Template: this.giaTruocChietKhauTemplate },
            // { Field: 'TiLeChietKhau', Title: 'Chiết Khấu', Width: 150, Sortable: true, Template: this.tiLeChietKhauTemplate },
            { Field: 'GiaSauChietKhau', Title: 'Giá Sau CK', Width: 150, Sortable: true, Template: this.giaSauChietKhauTemplate },
            { Field: 'TuNgay', Title: 'Thời Gian Bắt Đầu', Width: 150, Sortable: true, Template: this.tuNgayTemplate },
            { Field: 'DenNgay', Title: 'Thời Gian Kết Thúc', Width: 150, Sortable: true, Template: this.denNgayTemplate },
            { Field: 'TamNgung', Title: 'Tình Trạng', Width: 150, Template: this.tinhTrangTemplate },
            { Field: 'Action', Title: '', Width: 50, Template: this.actionTemplate, HideFilter: true }
        ];
    }

    updateDichVu(id: number, isDisabled: boolean) {
        let confirm = 'ngừng sử dụng';
        if (isDisabled) { confirm = 'sử dụng'; }
        if (!isDisabled) { confirm = 'ngừng sử dụng'; }
        const self = this;
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessLockTemplate, [confirm, 'gói dịch vụ']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post('GoiDichVuChuongTrinhMarketing/KichHoatGoiDichVuMarketing?id=' + id).subscribe(
                        () => {
                            self.gridGoiDv.search();
                            if (isDisabled) {
                                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Sử dụng']));
                            } else {
                                self.notificationService.showSuccess
                                    (CommonService.format(SystemMessage.ActionSuccessfully, ['Ngừng sử dụng']));
                            }
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

    exportExcel() {
        this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.apiService.postExportExcel<string>('GoiDichVuChuongTrinhMarketing/ExportChuongTrinhGoiDichVuMarketing',
                this.gridGoiDv._gridQueryInfo).subscribe(res => {
                    const dateTimeNow = new Date();
                    CommonService.downLoadFile(res, 'application/vnd.ms-excel', 'ChuongTrinhGoiDichVuMarketing'
                        + dateTimeNow.getFullYear() + '.xlsx');
                    this.dialog.closeAll();
                }, err => {
                    this.notificationService.showError(err.Message);
                    this.dialog.closeAll();
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    copy(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate([this.baseRoute + '/them/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    delete(id: number) {
        this.gridGoiDv.delete(id);
    }

    detail(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.apiService.get(`GoiDichVuChuongTrinhMarketing/GetChiTietChuongTrinh?id=${id}`).subscribe(
                (resultData: any) => {
                    const dataPassing = {
                        data: resultData,
                    };
                    this.dialog.open(ChiTietSuDungChuongTrinhGoiDvComponent, {
                        disableClose: false,
                        width: '1200px',
                        height: '455px',
                        data: { Title: 'Xác nhận', Model: dataPassing }
                    }).afterClosed().subscribe(() => { });
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    clearSearch() {
        if (!this.search.SearchString) {
            setTimeout(() => {
                this.gridGoiDv.searchString = '';
                LocalStorageHelper.setItem('additionalSearchStringChuongTrinhGoiDvMarketing', JSON.stringify(this.search));
                if (this.firstRequest && this.secondRequest) {
                    this.gridGoiDv.search();
                }
                if (this.firstRequest) {
                    this.secondRequest = true;
                }
                this.firstRequest = true;
            }, 500);
        }
    }

    onKey(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    onKeyNgayBatDau(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    onKeyNgayKetThuc(event: any) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }

    changeNgayBatDauRange() {
        this.Timkiem();
    }

    changeNgayKetThucRange() {
        this.Timkiem();
    }

    blur() {
        this.Timkiem();
    }

    them() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.router.navigate([this.baseRoute + '/them']);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Timkiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        let QueryString = null;
        this.gridGoiDv._additionalSearchString = null;
        QueryString = this.search.SearchString;

        const searchClone: GoiDichVuChuongTrinhMarketingSearch = JSON.parse(JSON.stringify(this.search));
        if (searchClone.RangeFromDate.startDate) {
            const startDate = new Date(searchClone.RangeFromDate.startDate);
            searchClone.RangeFromDate.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.RangeFromDate.endDate) {
            const endDate = new Date(searchClone.RangeFromDate.endDate);
            searchClone.RangeFromDate.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        if (searchClone.RangeToDate.startDate) {
            const startDate = new Date(searchClone.RangeToDate.startDate);
            searchClone.RangeToDate.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth()
                , startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.RangeToDate.endDate) {
            const endDate = new Date(searchClone.RangeToDate.endDate);
            searchClone.RangeToDate.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }

        this.query = JSON.stringify(searchClone);

        const queryForHold = { ...searchClone };

        LocalStorageHelper.setItem(
            'additionalSearchStringChuongTrinhGoiDvMarketing',
            JSON.stringify(queryForHold)
        );

        this.gridGoiDv._additionalSearchString = this.query;
        this.gridGoiDv.searchString = QueryString;
        this.gridGoiDv.search();
    }
}
