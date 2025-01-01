import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { DuyetKetQua, ListDataChild, PhieuDuyetKetQua, Search } from '../duyet-ket-qua.model';
import { DuyetKetQuaXetNghiemPopupComponent } from '../duyet-ket-qua-popup/duyet-ket-qua-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { BaseService } from 'src/app/core/services/base.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ErrorService } from 'src/app/core/error/error.service';
import { MatDialog, MatMenuTrigger } from '@angular/material';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetKetQuaPhieuPopupComponent } from '../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
declare var jQuery: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-duyet-ket-qua-detailed',
    templateUrl: './duyet-ket-qua-detailed.component.html',
    styleUrls: ['./duyet-ket-qua-detailed.component.scss']
})
export class DuyetKetQuaXetNghiemDetailedComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private notificationService: NotificationService,
        private dialog: MatDialog,
        private baseService: BaseService,
        private authService: AuthService,
        private apiService: ApiService,
        private errorService: ErrorService,
        private cdRef: ChangeDetectorRef,
        private renderer: Renderer2
    ) { }

    icSearch = icSearch;
    searchCtrl = new FormControl();
    search: Search = new Search();
    duyetKqXetNghiemDetail = new DuyetKetQua();
    popupLoadingData: any;
    validationErrors: any;
    inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();
    id = this.route.snapshot.params.id;
    gridDataSource: any;
    searchString: string;
    coDichVuDuocDuyet: boolean = false;

    sort: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }];
    documentType: DocumentType = DocumentType.DuyetKetQuaXetNghiem;
    groups: GroupDescriptor[] = [{ field: 'Nhom' }];
    gridColumns: any[] = [];
    displayToolTipGridNguoiYeuCau: string = null;
    displayToolTipGridNgayYeuCau: string = null;
    displayToolTipGridLyDoYeuCau: string = null;
    displayToolTipGridNguoiDuyet: string = null;
    displayToolTipGridNgayDuyet: string = null;
    showToastNotifyError = false;
    ChiTietKetQuaXetNghiems: ListDataChild[] = new Array<ListDataChild>();

    @ViewChild('menuTrigger', { read: MatMenuTrigger, static: false }) trigger: MatMenuTrigger;
    @ViewChild('nhomTemplate', { static: true }) nhomTemplate: TemplateRef<any>;
    @ViewChild('tenTemplate', { static: true }) tenTemplate: TemplateRef<any>;
    @ViewChild('kqCuTemplate', { static: true }) kqCuTemplate: TemplateRef<any>;
    @ViewChild('kqTuMayTemplate', { static: true }) kqTuMayTemplate: TemplateRef<any>;
    @ViewChild('kqNhapTayTemplate', { static: true }) kqNhapTayTemplate: TemplateRef<any>;
    @ViewChild('kqDuyetTemplate', { static: true }) kqDuyetTemplate: TemplateRef<any>;
    @ViewChild('damKQTemplate', { static: true }) damKQTemplate: TemplateRef<any>;
    @ViewChild('chiSoBinhThuongTemplate', { static: true }) chiSoBinhThuongTemplate: TemplateRef<any>;
    @ViewChild('donViTinhTemplate', { static: true }) donViTinhTemplate: TemplateRef<any>;
    @ViewChild('gioTiepNhanTemplate', { static: true }) gioTiepNhanTemplate: TemplateRef<any>;
    @ViewChild('gioNhanMauTemplate', { static: true }) gioNhanMauTemplate: TemplateRef<any>;
    @ViewChild('mayXNTemplate', { static: true }) mayXNTemplate: TemplateRef<any>;
    @ViewChild('nguoiDuyetTemplate', { static: true }) nguoiDuyetTemplate: TemplateRef<any>;
    @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
    @ViewChild('duyetTemplate', { static: true }) duyetTemplate: TemplateRef<any>;
    @ViewChild('duyetHeaderColumnTemplate', { static: true }) duyetHeaderColumnTemplate: TemplateRef<any>;

    @ViewChild('gridChiTietDuyetKetQuaXn', { static: false }) gridChiTietDuyetKetQuaXn: GridComponent;

    ngOnInit() {
        this.gridColumns = [
            { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
            { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: false, Template: this.tenTemplate, ShowTooltip: true },
            { Field: 'GiaTriCu', Title: 'KQ Cũ', Width: 100, Sortable: false, Template: this.kqCuTemplate },
            { Field: 'GiaTriTuMay', Title: 'KQ Từ Máy', Width: 100, Sortable: false, Template: this.kqTuMayTemplate },
            { Field: 'GiaTriNhapTay', Title: 'KQ Nhập Tay', Width: 70, Sortable: false, Template: this.kqNhapTayTemplate },
            { Field: 'GiaTriDuyet', Title: 'KQ Duyệt', Width: 100, Sortable: false, Template: this.kqDuyetTemplate },
            { Field: 'ToDamGiaTri', Title: 'Đậm KQ', Width: 60, Sortable: false, Template: this.damKQTemplate },
            { Field: 'Csbt', Title: 'CSBT', Width: 90, Sortable: false, Template: this.chiSoBinhThuongTemplate },
            { Field: 'DonVi', Title: 'ĐVT', Width: 50, Sortable: false, Template: this.donViTinhTemplate },
            {
                Field: 'ThoiDiemGuiYeuCauDisplay',
                Title: 'Giờ Tiếp Nhận Mẫu',
                Width: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.gioTiepNhanTemplate
            },
            {
                Field: 'ThoiDiemNhanKetQuaDisplay',
                Title: 'Giờ Nhận KQ',
                Width: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.gioNhanMauTemplate
            },
            { Field: 'MayXetNghiemId', Title: 'Máy XN', Width: 100, Sortable: false, Template: this.mayXNTemplate },
            {
                Field: 'Duyet', Title: 'Duyệt', Width: 50, Sortable: false,
                Template: this.duyetTemplate, TemplateGroupHeaderColumn: this.duyetHeaderColumnTemplate
            },
            {
                Field: 'ThoiDiemDuyetKetQua',
                Title: 'Ngày Duyệt',
                Width: 100,
                Sortable: false,
                ShowTooltip: true,
                Template: this.ngayDuyetTemplate
            },
            { Field: 'NguoiDuyet', Title: 'Người Duyệt', Width: 99, Sortable: false, Template: this.nguoiDuyetTemplate }
        ];
        if (this.id) {
            this.GetById(this.id);
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    GetById(id: number) {
        this.showPopupDownloadData();
        this.baseService.getById<DuyetKetQua>(id).subscribe(resultData => {
            this.closePopupLoadingData();
            let nhomIds = [];
            if (resultData) {
                this.duyetKqXetNghiemDetail = { ...resultData };
                // console.log("chi tiet: ", this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.Level === 1 && x.DaGoiDuyet == true))
                console.log("resultData Duyet: ", resultData)
                if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.some(x => x.DaDuyet)) {
                    this.coDichVuDuocDuyet = true;
                } else {
                    this.coDichVuDuocDuyet = false;
                }
                this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.DaGoiDuyet != true)
                    .forEach(x => { x.HighLightClass = 'bg-row-lightgray'; });

                this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.DaGoiDuyet == true).forEach(dataItem => {
                    if (dataItem.Level == 1 && dataItem.IdChilds.length == 0) {
                        dataItem.HighLightClass =
                            ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                                && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                    } else if (dataItem.Level == 1 && dataItem.IdChilds.length > 0) {
                        dataItem.HighLightClass = null;
                    }
                    if (dataItem.Level != 1) {
                        dataItem.HighLightClass =
                            ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                                && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                    }
                });
                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }
                nhomIds = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.map(x => x.NhomId).filter(onlyUnique);
                this.SetDataSourceForGrid();
            }
            nhomIds.forEach(nhomId => {
                if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.NhomId === nhomId)
                    .every(x => x.Duyet === true)) {
                    this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.NhomId === nhomId).forEach(x => x.DuyetNhom = true);
                } else {
                    this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.NhomId === nhomId).forEach(x => x.DuyetNhom = false);
                }
            });
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            }
        );
    }

    SetDataSourceForGrid() {
        this.gridDataSource = null;
        this.gridDataSource = {
            data: [...this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems],
            total: this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.length
        };

        if (this.gridChiTietDuyetKetQuaXn) {
            this.gridChiTietDuyetKetQuaXn._gridDataSource = { ...this.gridDataSource };
            this.gridChiTietDuyetKetQuaXn.setDataSource();
        }
    }

    quayLai() {
        this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua' + '?holdQuery=true');
    }

    xuLyDuyet() {
        let dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
            .filter(o => o.DaGoiDuyet && !o.Duyet);
        const dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
        let dialogRef: any;
        if (dataNeedFillValue && dataNeedFillValue.some(x => x)) {
            dialogRef = this.dialog.open(DuyetKetQuaXetNghiemPopupComponent, {
                disableClose: true,
                width: '700px',
                data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
            });
        } else {
            dialogRef = this.dialog.open(DuyetKetQuaXetNghiemPopupComponent, {
                disableClose: true,
                width: '400px',
                data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
            });
        }

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result != undefined && result != null && result != "") {
                    if (result.LoaiIn != null) {
                        this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(z => !z.DaDuyet && z.DaGoiDuyet == true);
                        this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetPhienXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                            () => {
                                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                this.duyetKqXetNghiemDetail.TrangThai = null;
                                this.showPopupDownloadData();
                                this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                this.inPhieuDuyetKetQua.Header = true;
                                this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
                                this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                                this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                                this.apiService.post<Array<string>>
                                    ('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                                        arrHtml => {

                                            this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
                                                disableClose: false,
                                                width: '1000px',
                                                data: arrHtml
                                            }).afterClosed().subscribe(() => {
                                                location.reload();
                                            });
                                            this.closePopupLoadingData();
                                        },
                                        (err: ApiError) => {
                                            if (err.Message !== 'Validation Failed') {
                                                this.notificationService.showError(err.Message);
                                            }
                                            this.closePopupLoadingData();
                                        });
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (this.showToastNotifyError === true) {
                                    const mess = this.errorService.getValidationErrors(err);
                                    if (mess != null) {
                                        this.notificationService.showError(mess);
                                    }
                                }
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            });
                    }
                    if (result === 'Yes') {
                        this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(z => !z.DaDuyet && z.DaGoiDuyet == true);
                        this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetPhienXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                            () => {
                                this.duyetKqXetNghiemDetail.TrangThai = null;
                                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                location.reload();
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (this.showToastNotifyError === true) {
                                    const mess = this.errorService.getValidationErrors(err);
                                    if (mess != null) {
                                        this.notificationService.showError(mess);
                                    }
                                }
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            });
                    }
                }

            }
        });
    }

    searchChanges($event) {
        this.searchString = $event;
        if (!this.searchString) {
            setTimeout(() => {
                this.setDataSourceForGrid();
            }, 0);
        }
    }

    onKeySearchChanges($event) {
        if ($event.keyCode === 13) {
            setTimeout(() => {
                this.setDataSourceForGrid();
            }, 0);
        }
    }

    setDataSourceForGrid() {
        this.ChiTietKetQuaXetNghiems = [];
        if (this.searchString == null || this.searchString === '') {
            this.ChiTietKetQuaXetNghiems = [...this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems];
        } else {
            const search = CommonService.removeVietnamese(this.searchString).toLowerCase().trim().replace(/đ/g, 'd');
            this.ChiTietKetQuaXetNghiems = [...this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems].filter(o =>
                (o.GiaTriCu != null && CommonService.removeVietnamese(o.GiaTriCu).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.Ten != null && CommonService.removeVietnamese(o.Ten).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.GiaTriTuMay != null && CommonService.removeVietnamese(o.GiaTriTuMay).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.GiaTriNhapTay != null && CommonService.removeVietnamese(o.GiaTriNhapTay).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.Csbt != null && CommonService.removeVietnamese(o.Csbt).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.DonVi != null && CommonService.removeVietnamese(o.DonVi).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.ThoiDiemGuiYeuCauDisplay != null &&
                    CommonService.removeVietnamese(o.ThoiDiemGuiYeuCauDisplay).toLowerCase().replace(/đ/g, 'd')
                        .indexOf(search) >= 0)
                || (o.ThoiDiemNhanKetQuaDisplay != null &&
                    CommonService.removeVietnamese(o.ThoiDiemNhanKetQuaDisplay).toLowerCase().replace(/đ/g, 'd')
                        .indexOf(search) >= 0)
                || (o.TenMayXetNghiem != null && CommonService.removeVietnamese(o.TenMayXetNghiem).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.NguoiDuyet != null && CommonService.removeVietnamese(o.NguoiDuyet).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
                || (o.NgayDuyetDisplay != null && CommonService.removeVietnamese(o.NgayDuyetDisplay).toLowerCase().replace(/đ/g, 'd')
                    .indexOf(search) >= 0)
            );
        }

        this.gridDataSource = null;
        this.gridDataSource = {
            data: this.ChiTietKetQuaXetNghiems,
            total: this.ChiTietKetQuaXetNghiems.length
        };

        if (!(this.cdRef as ViewRef).destroyed) {
            this.cdRef.detectChanges();
        }

        if (this.gridChiTietDuyetKetQuaXn) {
            this.gridChiTietDuyetKetQuaXn._gridDataSource = { ...this.gridDataSource };
            this.gridChiTietDuyetKetQuaXn.setDataSource();
        }
    }

    checkHiddenIcon(item, danhSachLoaiMau) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < danhSachLoaiMau.length; i++) {
            if (item === danhSachLoaiMau[i]) {
                return true;
            }
        }

        return false;
    }

    setUpDataTooltip(dataItem) {
        this.displayToolTipGridNguoiYeuCau = dataItem.items[0].NguoiYeuCau;
        this.displayToolTipGridNgayYeuCau = dataItem.items[0].NgayYeuCauDisplay;
        this.displayToolTipGridLyDoYeuCau = dataItem.items[0].LyDoYeuCau;
        this.displayToolTipGridNguoiDuyet = dataItem.items[0].NguoiDuyetChayLai;
        this.displayToolTipGridNgayDuyet = dataItem.items[0].NgayDuyetDisplay;
    }

    CheckHighlight(dataItem: ListDataChild, currentValue: string) {
        dataItem.GiaTriDuyet = currentValue;
        // dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 ? 'bg-row-lightRed' : '';
        dataItem.HighLightClass = (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')
            && dataItem.Duyet === false
            && dataItem.IsParent
            && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
    }

    Approve(dataItem: ListDataChild, currentValue: boolean) {

        dataItem.Duyet = currentValue;
        dataItem.HighLightClass = dataItem.DaGoiDuyet != true ? '' : 'bg-row-lightgray';
        dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
        let chiTietKetQuaXetNghiems = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(z => z.DaGoiDuyet == true);
        // console.log("data detail: ", dataDetail)
        let data =
        {
            Id: this.duyetKqXetNghiemDetail.Id,
            ChiTietKetQuaXetNghiems: chiTietKetQuaXetNghiems,
            GhiChu: this.duyetKqXetNghiemDetail.GhiChu,
            ChanDoan: this.duyetKqXetNghiemDetail.ChanDoan,
        }
        this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetOnGrid?currentId=' +
            dataItem.Id + '&&currentCheck=' + currentValue, data)
            .subscribe((res: ListDataChild[]) => {
                if (res.some(x => x.Duyet)) {
                    this.coDichVuDuocDuyet = true;
                } else {
                    this.coDichVuDuocDuyet = false;
                }
                if (res && res.some(x => x)) {
                    res.forEach(data => {
                        this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.Id === data.Id).forEach(q => {
                            q.Duyet = data.Duyet;
                            q.GiaTriDuyet = data.GiaTriDuyet;
                            q.ToDamGiaTri = data.ToDamGiaTri;
                            q.NguoiDuyet = data.NguoiDuyet;
                            q.ThoiDiemDuyetKetQua = data.ThoiDiemDuyetKetQua;
                            q.ThoiDiemDuyetKetQuaDisplay = data.ThoiDiemDuyetKetQuaDisplay;
                            // q.HighLightClass = dataItem.DaGoiDuyet == true? 'bg-row-lightgray' : null;
                            if (q.DaGoiDuyet != true) {
                                q.HighLightClass = 'bg-row-lightgray';
                            } else {
                                if (q.Level == 1 && q.IdChilds.length == 0) {
                                    q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                        && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                } else if (q.Level == 1 && q.IdChilds.length > 0) {
                                    q.HighLightClass = null;
                                }

                                if (q.Level != 1) {
                                    q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                        && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                }
                            }
                        });
                    });
                    const currentNhomId = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                        filter(x => x.Id === dataItem.Id).map(x => x.NhomId)[0];
                    if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.NhomId === currentNhomId)
                        .every(x => x.Duyet === true)) {
                        this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                            filter(x => x.NhomId === currentNhomId).forEach(x => x.DuyetNhom = true);
                    } else {
                        this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.
                            filter(x => x.NhomId === currentNhomId).forEach(x => x.DuyetNhom = false);
                    }

                    this.SetDataSourceForGrid();
                }
            },
                (err: ApiError) => {
                  var gridItem = this.gridDataSource.data.find(o=>o.Id === dataItem.Id)
                  if(gridItem != undefined){
                    dataItem.Duyet = gridItem.DaDuyet;
                    dataItem.HighLightClass = dataItem.DaGoiDuyet != true ? '' : 'bg-row-lightgray';
                    dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
                  }

                    if (this.showToastNotifyError === true) {
                        const mess = this.errorService.getValidationErrors(err);
                        if (mess != null) {
                            this.notificationService.showError(mess);
                        }
                    }
                    if (err.Message !== 'Validation Failed') {
                      this.notificationService.showError(err.Message);
                  }
                });
    }

    ApproveOnGroup(currentValue: boolean, dataItem) {
        const duyetKetQuaTheoNhom = {
            Id: this.id,
            ChiTietKetQuaXetNghiems: dataItem.items
        };
        this.apiService.post<any>('DuyetKetQuaXetNghiem/ApproveOnGroup?currentNhomId=' + dataItem.items.map(x => x.NhomId)[0] +
            '&&currentCheck=' + currentValue, duyetKetQuaTheoNhom)
            .subscribe(
                (res: ListDataChild[]) => {
                    if (res.some(x => x.Duyet)) {
                        this.coDichVuDuocDuyet = true;
                    } else {
                        this.coDichVuDuocDuyet = false;
                    }
                    if (res && res.some(x => x)) {
                        res.forEach(data => {

                            this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.Id === data.Id).forEach(q => {
                                q.Duyet = data.Duyet;
                                q.GiaTriDuyet = data.GiaTriDuyet;
                                q.ToDamGiaTri = data.ToDamGiaTri;
                                q.NguoiDuyet = data.NguoiDuyet;
                                q.ThoiDiemDuyetKetQua = data.ThoiDiemDuyetKetQua;
                                q.ThoiDiemDuyetKetQuaDisplay = data.ThoiDiemDuyetKetQuaDisplay;
                                if (q.DaGoiDuyet != true) {
                                    q.HighLightClass = 'bg-row-lightgray';
                                } else {
                                    if (q.Level == 1 && q.IdChilds.length == 0) {
                                        q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                            && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                    } else if (q.Level == 1 && q.IdChilds.length > 0) {
                                        q.HighLightClass = null;
                                    }

                                    if (q.Level != 1) {
                                        q.HighLightClass = ((q.GiaTriTuMay == null || q.GiaTriTuMay == '')
                                            && (q.GiaTriNhapTay == null || q.GiaTriNhapTay == '')) ? 'bg-row-lightRed' : null;
                                    }
                                }
                            });

                            if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                .filter(x => x.Id === data.Id).every(x => x.Duyet === true)) {
                                this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                    .filter(x => x.Id === data.Id).forEach(x => x.DuyetNhom = true);
                            } else {
                                this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                                    .filter(x => x.Id === data.Id).forEach(x => x.DuyetNhom = false);
                            }
                        });

                        this.SetDataSourceForGrid();
                    }
                },
                (err: ApiError) => {
                    if (this.showToastNotifyError === true) {
                        const mess = this.errorService.getValidationErrors(err);
                        if (mess != null) {
                            this.notificationService.showError(mess);
                        }
                    }
                    if (err.Message !== 'Validation Failed') {
                      this.notificationService.showError(err.Message);
                  }
                });
    }

    processId(dataItem) {
        return dataItem.items.map(x => x.NhomId)[0];
    }

    Print() {

        let dialogRef: any;
        let dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.DaGoiDuyet == true && (x.DaDuyet || x.Duyet));
        dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
            disableClose: true,
            width: '1000px',
            // height: '300px',
            data: dataChiTietXetNghiem,
        }).afterClosed().subscribe((result) => {
            if (result != undefined && result != null && result != "") {
                if (result == 'No') {
                    // dialogRef.close();
                }
                else {
                    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
                        this.showPopupDownloadData();
                        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                        this.inPhieuDuyetKetQua.Header = true;
                        this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
                        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                        this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                        this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                        this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                            arrHtml => {

                                this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
                                    disableClose: false,
                                    width: '1000px',
                                    data: arrHtml
                                }).afterClosed().subscribe(result => {
                                });
                                this.closePopupLoadingData();
                            },
                            (err: ApiError) => {
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                                this.closePopupLoadingData();
                            });
                        // this.apiService.post<Array<string>>('DuyetKetQuaXetNghiem/InPhieuDuyetKetQua', this.inPhieuDuyetKetQua).subscribe(
                        //     resData => {
                        //         if (resData) {
                        //             this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
                        //                 disableClose: false,
                        //                 width: '1000px',
                        //                 data: resData
                        //             }).afterClosed().subscribe(result => {
                        //             });
                        //             this.closePopupLoadingData();
                        //         }
                        //     },
                        //     (err: ApiError) => {
                        //         if (err.Message !== 'Validation Failed') {
                        //             this.notificationService.showError(err.Message);
                        //         }
                        //         this.closePopupLoadingData();
                        //     }
                        // );
                    } else {
                        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    }
                }
            }
        });

    }

    showPopupDownloadData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }

    isMauKhongDat(mau, danhSachMauKhongDat) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < danhSachMauKhongDat.length; i++) {
            if (mau === danhSachMauKhongDat[i]) {
                return true;
            }
        }

        return false;
    }
}
