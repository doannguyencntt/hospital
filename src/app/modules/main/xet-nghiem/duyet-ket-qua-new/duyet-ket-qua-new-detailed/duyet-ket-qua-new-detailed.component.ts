import { AfterContentInit, ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild, ViewRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
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
import { DuyetKetQuaNew, ListDataChildNew, PhieuDuyetKetQuaNew, SearchNew } from '../duyet-ket-qua-new.model';
import { DuyetKetQuaNewPopupComponent } from '../duyet-ket-qua-new-popup/duyet-ket-qua-new-popup.component';
import { DuyetKetQuaPhieuNewPopupComponent } from '../duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component';
import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';
import { DichVuCanCapNhatPopupComponent } from '../dich-vu-can-cap-nhat-popup/dich-vu-can-cap-nhat-popup.component';
import { TextboxComponent } from 'src/app/shared/component/inputs/textbox/textbox.component';
declare var $: any;

@Component({
    selector: 'app-duyet-ket-qua-new-detailed',
    templateUrl: './duyet-ket-qua-new-detailed.component.html',
    styleUrls: ['./duyet-ket-qua-new-detailed.component.scss']
})
export class DuyetKetQuaNewDetailedComponent implements OnInit, AfterContentInit {
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
    search: SearchNew = new SearchNew();
    duyetKqXetNghiemDetail = new DuyetKetQuaNew();
    popupLoadingData: any;
    validationErrors: any;
    inPhieuDuyetKetQua: PhieuDuyetKetQuaNew = new PhieuDuyetKetQuaNew();
    id = this.route.snapshot.params.id;
    gridDataSource: any;
    kqNhapTay: string = null;
    kqDuyet: string = null;
    ngayDuyet: string = null;

    searchString: string;
    modelQRCode: any;
    baseRoute = 'xet-nghiem/duyet-ket-qua-new';
    coDichVuDuocDuyet: boolean = false;
    checkAll: boolean = null;
    popupSavingData: any = null;
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
    ChiTietKetQuaXetNghiems: ListDataChildNew[] = new Array<ListDataChildNew>();

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
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;

    @ViewChild('gridChiTietDuyetKetQuaXn', { static: false }) gridChiTietDuyetKetQuaXn: GridComponent;

    ngOnInit() {
        this.gridColumns = [
            { Field: 'Nhom', Title: '', Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomTemplate },
            {
                Field: 'Duyet', Title: '', Width: 50, Sortable: false,
                Template: this.duyetTemplate, TemplateGroupHeaderColumn: this.duyetHeaderColumnTemplate,
                TemplateHeader: this.checkBoxHeaderTemplate
            },
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
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    GetById(id: number) {
        this.showPopupDownloadData();
        this.baseService.getById<DuyetKetQuaNew>(id).subscribe(resultData => {
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
                // this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.DaDuyet != true)
                //     .forEach(x => { x.HighLightClass = 'bg-row-palegoldenrod'; });

                this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.forEach(dataItem => {
                    if ((dataItem.GiaTriTuMay == null || dataItem.GiaTriTuMay == '')
                        && (dataItem.GiaTriNhapTay == null || dataItem.GiaTriNhapTay == '')
                        && (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')) {
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
                    } else {
                        if (dataItem.DaDuyet != true) {
                            dataItem.HighLightClass = 'bg-row-lightblue2';
                        }
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
        this.router.navigateByUrl('/xet-nghiem/duyet-ket-qua-new' + '?holdQuery=true');
    }

    savingPage() {
        this.popupSavingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }

    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }

    xuLyDuyet() {
        if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.every(z => !z.CheckBox)) {
            this.dialog.open(NotificationComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ muốn duyệt." }
            }).afterClosed().subscribe(result => {

            });
        }
        else {
            let dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                .filter(o => !o.DaDuyet
                    && o.CheckBox
                    && ((o.Level == 1 && o.IdChilds.length == 0) || (o.Level != 1 && o.IdChilds.length > 0))
                    && (o.GiaTriTuMay == null || o.GiaTriTuMay == '')
                    && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == '')
                    && (o.GiaTriDuyet == null || o.GiaTriDuyet == '')
                );
            const dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
            let dialogRef: any;
            if (dataNeedFillValue && dataNeedFillValue.some(x => x)) {
                dialogRef = this.dialog.open(DuyetKetQuaNewPopupComponent, {
                    disableClose: true,
                    width: '700px',
                    data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result) {
                        if (result != undefined && result != null && result != "") {
                            if (result === 'Yes') {
                                this.savingPage();
                                this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                                    () => {
                                        this.closepopupSavingData();
                                        this.GetById(this.id);
                                        this.duyetKqXetNghiemDetail.TrangThai = null;

                                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                        // location.reload();
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
                                        this.closepopupSavingData();
                                    });
                            }
                        }

                    }
                });
            }
            else {
                this.savingPage();
                this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                    () => {
                        this.closepopupSavingData();
                        this.GetById(this.id);
                        this.duyetKqXetNghiemDetail.TrangThai = null;

                        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                        // location.reload();
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
                        this.closepopupSavingData();
                    });
            }
            // else {
            //     dialogRef = this.dialog.open(DuyetKetQuaNewPopupComponent, {
            //         disableClose: true,
            //         width: '400px',
            //         data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
            //     });
            // }


        }

    }
    xuLyDuyetVaIn() {
        if (this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.every(z => !z.CheckBox)) {
            this.dialog.open(NotificationComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ muốn duyệt và in." }
            }).afterClosed().subscribe(result => {

            });
        }
        else {
            let dataNeedFillValue = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
                .filter(o => !o.DaDuyet && o.CheckBox
                    && ((o.Level == 1 && o.IdChilds.length == 0) || (o.Level != 1 && o.IdChilds.length > 0))
                    && (o.GiaTriTuMay == null || o.GiaTriTuMay == '')
                    && (o.GiaTriNhapTay == null || o.GiaTriNhapTay == '') && (o.GiaTriDuyet == null || o.GiaTriDuyet == '')
                );
            const dataChiTietXetNghiem = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems;
            let dialogRef: any;
            if (dataNeedFillValue && dataNeedFillValue.some(x => x)) {
                dialogRef = this.dialog.open(DuyetKetQuaNewPopupComponent, {
                    disableClose: true,
                    width: '700px',
                    data: { Model: dataNeedFillValue, DataChiTietXetNghiem: dataChiTietXetNghiem }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result) {
                        if (result != undefined && result != null && result != "") {
                            if (result === 'Yes') {
                                this.savingPage();
                                this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                                    () => {
                                        this.closepopupSavingData();
                                        this.duyetKqXetNghiemDetail.TrangThai = null;

                                        // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                                        // Xử lý in kết quả xn
                                        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                        this.inPhieuDuyetKetQua.Header = true;
                                        this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
                                        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                                        this.inPhieuDuyetKetQua.LoaiIn = 3;
                                        this.inPhieuDuyetKetQua.ListIn = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.CheckBox);
                                        // this.apiService.postExportPdf<Array<string>>
                                        //     ('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(
                                        //         arrHtml => {

                                        //             this.dialog.open(DuyetKetQuaPhieuNewPopupComponent, {
                                        //                 disableClose: false,
                                        //                 width: '1000px',
                                        //                 data: arrHtml
                                        //             }).afterClosed().subscribe(() => {
                                        //                 this.GetById(this.id);
                                        //                 // location.reload();
                                        //             });
                                        //             this.closePopupLoadingData();
                                        //         },
                                        //         (err: ApiError) => {
                                        //             if (err.Message !== 'Validation Failed') {
                                        //                 this.notificationService.showError(err.Message);
                                        //             }
                                        //             this.closePopupLoadingData();
                                        //         });
                                        let loading = this.showLoading("Đang in...");

                                        this.apiService.postExportPdf<any>('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(res => {

                                            if (res != undefined && res != null) {
                                                let newBlob = new Blob([res], { type: "application/pdf" });

                                                const blobUrl = URL.createObjectURL(newBlob);

                                                const iframe = document.createElement('iframe');

                                                iframe.style.display = 'none';

                                                iframe.src = blobUrl;

                                                document.body.appendChild(iframe);

                                                iframe.contentWindow.print();

                                                this.closeLoading(loading);
                                                this.closePopupLoadingData();

                                                this.GetById(this.id);
                                            }
                                        }, err => {

                                            if (err.Message != "Validation Failed") {

                                                this.notificationService.showError(err.Message);

                                            }

                                            this.closeLoading(loading);
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
                                        this.closepopupSavingData();
                                    });
                            }
                        }

                    }
                });
            }
            else {
                this.showPopupDownloadData();
                this.apiService.post<any>('DuyetKetQuaXetNghiem/DuyetKetQuaXetNghiem', this.duyetKqXetNghiemDetail).subscribe(
                    () => {
                        this.duyetKqXetNghiemDetail.TrangThai = null;
                        this.closePopupLoadingData();
                        // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Duyệt']));
                        // Xử lý in kết quả xn
                        this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                        this.inPhieuDuyetKetQua.Header = true;
                        this.inPhieuDuyetKetQua.PhienXetNghiemId = this.id;
                        this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.duyetKqXetNghiemDetail.YeuCauTiepNhanId;
                        this.inPhieuDuyetKetQua.LoaiIn = 3;
                        this.inPhieuDuyetKetQua.ListIn = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems.filter(x => x.CheckBox);
                        this.showPopupDownloadData();
                        // this.apiService.postExportPdf<Array<string>>
                        //     ('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(
                        //         arrHtml => {
                        //             this.closePopupLoadingData();
                        //             this.dialog.open(DuyetKetQuaPhieuNewPopupComponent, {
                        //                 disableClose: false,
                        //                 width: '1000px',
                        //                 data: arrHtml
                        //             }).afterClosed().subscribe(() => {
                        //                 this.GetById(this.id);
                        //                 // location.reload();
                        //                 this.closePopupLoadingData();
                        //             });
                        //         },
                        //         (err: ApiError) => {
                        //             if (err.Message !== 'Validation Failed') {
                        //                 this.notificationService.showError(err.Message);
                        //             }
                        //             this.closePopupLoadingData();
                        //         });
                        let loading = this.showLoading("Đang in...");

                        this.apiService.postExportPdf<any>('XetNghiem/GetAllHtmlPdfDuyetKetQuaXetNghiemDuocCheckGrid', this.inPhieuDuyetKetQua).subscribe(res => {

                            if (res != undefined && res != null) {
                                let newBlob = new Blob([res], { type: "application/pdf" });

                                const blobUrl = URL.createObjectURL(newBlob);

                                const iframe = document.createElement('iframe');

                                iframe.style.display = 'none';

                                iframe.src = blobUrl;

                                document.body.appendChild(iframe);

                                iframe.contentWindow.print();

                                this.closeLoading(loading);
                                this.closePopupLoadingData();

                                this.GetById(this.id);
                            }
                        }, err => {

                            if (err.Message != "Validation Failed") {

                                this.notificationService.showError(err.Message);

                            }

                            this.closeLoading(loading);
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
                            this.closePopupLoadingData();
                        }
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupLoadingData();
                    });
            }
        }
    }


    searchChanges($event) {
        this.searchString = $event;
        if (!this.searchString) {
            setTimeout(() => {
                this.setDataSourceForGrid();
            }, 0);
        }
    }



    onKey(event: any) {
        if (event.key == "Enter") {
            if (this.search.SearchStringBarCode != undefined && this.search.SearchStringBarCode != null && this.search.SearchStringBarCode != '') {
                this.TimkiemNangCao();
            } else {
                setTimeout(() => {
                    this.setDataSourceForGrid();
                }, 0);
            }

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

    CheckHighlight(dataItem: ListDataChildNew, currentValue: string) {
        dataItem.GiaTriDuyet = currentValue;
        // dataItem.HighLightClass = !dataItem.GiaTriDuyet && dataItem.Duyet === false && dataItem.Level !== 1 ? 'bg-row-lightRed' : '';
        dataItem.HighLightClass = (dataItem.GiaTriDuyet == null || dataItem.GiaTriDuyet == '')
            && dataItem.Duyet === false
            && dataItem.IsParent
            && dataItem.DaGoiDuyet == true ? 'bg-row-lightRed' : '';
    }



    processId(dataItem) {
        return dataItem.items.map(x => x.NhomId)[0];
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

    checkBoxNhomChange(event: any, data: any) {

        let lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
        lstDataCurrent = lstDataCurrent.filter(x => x.NhomDichVuBenhVienId == data.items[0].NhomDichVuBenhVienId);
        lstDataCurrent.forEach(element => {
            element.CheckBox = event;
            element.CheckBoxParent = event;
        });
        this.gridChiTietDuyetKetQuaXn._gridDataSource = { ...lstDataCurrent }
        this.gridChiTietDuyetKetQuaXn.setDataSource();
    }

    checkBoxDichVu(dataItem: any, event: any) {
        let lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
        let lstDataCurrentParent = lstDataCurrent.filter(x => x.Id == dataItem.Id);
        let lstDataCurrentLv2 = lstDataCurrent.filter(x => x.Level == 2);
        let lstDataCurrentLv3 = lstDataCurrent.filter(x => x.Level == 3);
        lstDataCurrentParent[0].IdChilds.forEach((parentId: any) => {
            if (lstDataCurrentLv2.length > 0) {
                lstDataCurrentLv2.forEach(element => {
                    if (element.Id == parentId) {
                        element.CheckBox = event;
                    }
                });
            }
            if (lstDataCurrentLv3.length > 0) {
                lstDataCurrentLv3.forEach(element => {
                    element.CheckBox = lstDataCurrentLv2.find(x => x.DichVuXetNghiemId == element.DichVuXetNghiemChaId) != null ? event : null;
                });
            }
        });
        if (lstDataCurrent.every(x => !x.CheckBox)) {
            lstDataCurrent.forEach(element => {
                element.CheckBoxParent = false;
            });
        }
        this.gridChiTietDuyetKetQuaXn._gridDataSource = { ...lstDataCurrent }
        this.gridChiTietDuyetKetQuaXn.setDataSource();
    }

    changeQR($event) {
        // if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
        //   this.modelQRCode = $event;
        //   var dataTimKiem = $event.split("|");
        //   if (dataTimKiem.length > 1) {
        //     this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
        //   } else {
        //     this.searchString = $event.slice(0, -1);
        //     this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
        //   }
        //   this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
        // } else {
        //   this.notificationService.showError(
        //     "Không tìm thấy thông tin cần tìm."
        //   );
        // }
        // this.isScanF1 = false;
    }

    QuetMaQRCodeClick() {
        let elementBarcode: HTMLElement = document.getElementById(
            "barcodeActive"
        ) as HTMLElement;
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }


    TimkiemNangCao() {
        if (this.search.ThoiDiemGoiDuyetTuFormat != null) {
            this.search.FromDate = CommonService.formatDateTime(
                this.search.ThoiDiemGoiDuyetTuFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.search.FromDate = null;
        }

        if (this.search.ThoiDiemGoiDuyetDenFormat != null) {
            this.search.ToDate = CommonService.formatDateTime(
                this.search.ThoiDiemGoiDuyetDenFormat,
                "dd/mm/yyyy"
            );
        } else {
            this.search.ToDate = null;
        }

        this.apiService.post<any>("DuyetKetQuaXetNghiem/TimKiemPhienXetNghiemGanNhat", this.search).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + resultData + '?holdQuery=true');
                    this.duyetKqXetNghiemDetail.Id = resultData;
                    this.id = resultData;
                    this.GetById(resultData);
                }
            }, (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            }
        )
    }

    searchChangesNangCao($event) {

    }

    capNhat() {
        let dataCapNhat = this.duyetKqXetNghiemDetail.ChiTietKetQuaXetNghiems
            .filter(o => o.DaDuyet && o.CheckBox);
        const dataCapNhatAssign = [];
        dataCapNhat.forEach(val => dataCapNhatAssign.push(Object.assign({}, val)));
        if (dataCapNhat.length > 0) {
            this.dialog.open(DichVuCanCapNhatPopupComponent, {
                disableClose: true,
                width: '1200px',
                data: { Model: this.duyetKqXetNghiemDetail, DataChiTiet: dataCapNhatAssign, Title: "Các dịch vụ cập nhật" }
            }).afterClosed().subscribe(result => {
                if (result === "OK") {
                    this.GetById(this.id);
                }
            });
        }
        else {
            this.dialog.open(NotificationComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: "THÔNG BÁO", Message: "Vui lòng chọn dịch vụ đã duyệt để cập nhật." }
            }).afterClosed().subscribe(result => {

            });
        }
    }

    TooltipCustom(dataItem: any) {
        if (dataItem != null && dataItem != '') {
            this.kqNhapTay = dataItem;
        }
        else {
            this.kqNhapTay = null;
        }
    }

    TooltipCustomKQD(dataItem: any) {
        if (dataItem != null && dataItem != '') {
            this.kqDuyet = dataItem;
        }
        else {
            this.kqDuyet = null;
        }
    }

    TooltipCustomNgayDuyet(dataItem: any) {
        if (dataItem != undefined && dataItem != null) {
            let valueObj = {
                YeuCauTiepNhanId: dataItem.YeuCauTiepNhanId,
                DichVuXetNghiemId: dataItem.DichVuXetNghiemId,
                DichVuXetNghiemTen: dataItem.Ten,
                KetQuaXetNghiemChiTietId: dataItem.Id
            };
            this.apiService.post<any>("DuyetKetQuaXetNghiem/GetNgayDuyetKetQuaCu", valueObj).subscribe(
                resultData => {
                    if (resultData != null && resultData != undefined) {
                        this.ngayDuyet = resultData;
                    }
                },
                () => {
                });
        }
        else {
            this.ngayDuyet = null;
        }
    }

    checkBoxAllChange(event: any) {
        let lstDataCurrent = this.gridChiTietDuyetKetQuaXn.getAllDataFromDatasource();
        this.checkAll = event;
        lstDataCurrent.forEach(element => {
            element.CheckBox = event;
            element.CheckBoxParent = event;
        });
        this.gridChiTietDuyetKetQuaXn._gridDataSource = { ...lstDataCurrent }
        this.gridChiTietDuyetKetQuaXn.setDataSource();
    }
    currentCellFocused: any = null;
    onKeydownGrid(obj: any) {
        var self = this;
        if (obj.FocusGridContent == true && obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter" || obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft'
            || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp'
        ) {
            setTimeout(function () {
                var cellFocused = obj.Sender.focusCell();
                if (obj.Event.code === "Enter" || obj.Event.code === "NumpadEnter") {
                    if (obj.Event.target.id.indexOf('GiaTriDuyet-') >= 0) {
                        let id = Number(obj.Event.target.id.replace('GiaTriDuyet-', ''));
                        let dataAll = [];
                        obj.Sender.data.data.forEach(item => {
                            item.items.filter(z => !z.DaDuyet).forEach(e => {
                                dataAll.push(e);
                            });
                        });
                        let index = dataAll.findIndex((z => z.Id == id))
                        let dataNext = dataAll[index + 1];
                        if (dataNext != undefined && dataNext != null) {
                            let idNext = null;
                            if (dataNext.IdChilds.length > 0 && dataNext.Level != 2 && dataNext.Level != 3) {
                                idNext = dataAll[index + 2].Id;
                            } else {
                                idNext = dataAll[index + 1].Id;
                            }
                            $(document).ready(function () {

                                //or if you want to be more efficient and use less characters, chain it
                                $("#GiaTriDuyet-" + idNext).focus().select();

                            });
                        }

                    }
                    //Action on Đậm KQ
                    if (cellFocused != undefined && cellFocused.dataItem != null) {
                        if (cellFocused.colIndex == 6) {
                            cellFocused.dataItem.ToDamGiaTri = cellFocused.dataItem.ToDamGiaTri == true ? false : true;
                        }
                    }
                }
                else {
                    if (obj.Event.code === 'ArrowRight' || obj.Event.code === 'ArrowLeft' || obj.Event.code === 'ArrowDown' || obj.Event.code === 'ArrowUp'
                    ) {
                        if (cellFocused != undefined && cellFocused.dataItem != null) {
                            //Action on KQ Duyệt
                            if (cellFocused.colIndex == 5) {
                                //Đang focus vào input mà di chuyển phím thì nó phải nhấn 2 lần mới ra khỏi input dc, chỗ này xứ lý vấn đề đó
                                if (self.currentCellFocused != null && (self.currentCellFocused.colIndex != cellFocused.colIndex || self.currentCellFocused.rowIndex != cellFocused.rowIndex)) {
                                    $("#GiaTriDuyet-" + cellFocused.dataItem.Id).focus().select();
                                }
                                else {
                                    var nextCellFocus = null;
                                    if (obj.Event.code === 'ArrowRight') {
                                        nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex + 1);
                                    }
                                    if (obj.Event.code === 'ArrowLeft') {
                                        nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex, cellFocused.colIndex - 1);
                                    }
                                    if (obj.Event.code === 'ArrowDown') {
                                        nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex + 1, cellFocused.colIndex);
                                    }
                                    if (obj.Event.code === 'ArrowUp') {
                                        nextCellFocus = self.gridChiTietDuyetKetQuaXn.grid.focusCell(cellFocused.rowIndex - 1, cellFocused.colIndex);
                                    }
                                    if (nextCellFocus != undefined && nextCellFocus.dataItem != null) {
                                        $("#GiaTriDuyet-" + nextCellFocus.dataItem.Id).focus().select();
                                        cellFocused = nextCellFocus;
                                    }
                                }
                            }
                        }

                    }
                }
                self.cdRef.detectChanges();
                self.currentCellFocused = cellFocused;
            });
        }
    }
    showLoading(title: string = 'Đang lưu dữ liệu...') {

        return this.dialog.open(LoadingComponent, {

            disableClose: true,

            width: '200px',

            height: '90px',

            data: { Title: title }

        });

    }
    closeLoading(loading: any) {
        loading.close();
    }

}
