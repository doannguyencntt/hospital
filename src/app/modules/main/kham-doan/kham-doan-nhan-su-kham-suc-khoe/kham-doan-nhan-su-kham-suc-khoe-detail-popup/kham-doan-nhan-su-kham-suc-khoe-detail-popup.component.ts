import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, YeuCauNhanSuMessage } from 'src/app/shared/configdata/system-message';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import {
    FileTaiLieu,
    YeuCauNhanSuKhamSucKhoeDetail,
    YeuCauNhanSuKhamSucKhoeChiTiet,
    CommandName,
    DoiTuongLamViec,
    DeleteDialog
} from '../kham-doan-nhan-su-kham-suc-khoe.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { HttpParams } from '@angular/common/http';
import { RequestOptions, ResponseContentType, Http } from '@angular/http';
import { debug } from 'console';
declare var $: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-nhan-su-kham-suc-khoe-detail-popup',
    templateUrl: './kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.html',
    styleUrls: ['./kham-doan-nhan-su-kham-suc-khoe-detail-popup.component.scss']
})
export class KhamDoanNhanSuKhamSucKhoeDetailPopupComponent implements OnInit {
    icClose = icClose;
    icDelete = icDelete;
    icClear = icClear;

    documentType: DocumentType;
    validationErrors: any = [];
    validationErrorsThemNhanSu: any = [];
    popupLoadingData: any;
    id: number;

    gridNhanSuColumns: any[] = [];
    gridDiaDiemKhamColumns: any[] = [];

    gridNhanSuDatasource: any = {
        data: [],
        total: 0
    };

    gridDiaDiemKhamDatasource: any = {
        data: [],
        total: 0
    };

    title = '';
    header = '';
    selection = 1;
    allowedExtensions: string[] = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.pdf', '.PDF'];
    invalidFileExtensionMess: string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
    fileTaiLieu: FileTaiLieu = null;
    khamDoanNhanSuDetail: YeuCauNhanSuKhamSucKhoeDetail = new YeuCauNhanSuKhamSucKhoeDetail();
    yeuCauNhanSuKhamSucKhoeChiTietCurrent: YeuCauNhanSuKhamSucKhoeChiTiet = new YeuCauNhanSuKhamSucKhoeChiTiet();
    diaDiemKhamDisplay = false;
    operationCommand = CommandName.Add;

    @ViewChild('ngayKhamTemplate', { static: true }) ngayKhamTemplate: TemplateRef<any>;
    @ViewChild('hoTenTemplate', { static: true }) hoTenTemplate: TemplateRef<any>;
    @ViewChild('taiLieuTemplate', { static: true }) taiLieuTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridNhanSu', { static: false }) gridNhanSu: GridComponent;
    @ViewChild('taiLieuDinhKiem', { static: false }) taiLieuDinhKiem: any;
    constructor(
        private dialog: MatDialog,
        private router: Router,
        private authService: AuthService,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private route: ActivatedRoute,
        private cdRef: ChangeDetectorRef,
        private http: Http
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanYeuCauNhanSuKhamSucKhoe;

        this.id = this.route.snapshot.params.id;
        this.id = (this.id == null) ? 0 : this.id;
        if (this.id === 0) {
            this.title = 'Tạo yêu cầu nhân sự khám sức khỏe';
            this.header = 'Tạo Yêu Cầu Nhân Sự Khám Sức Khỏe';
        } else {
            this.title = 'Chi tiết yêu cầu nhân sự khám sức khỏe';
            this.header = 'Chi Tiết Yêu Cầu Nhân Sự Khám Sức Khỏe';
            this.getData(this.id);
        }


        this.gridDiaDiemKhamColumns = [
            { Field: 'DiaDiem', Title: 'Địa điểm khám', Width: 220 },
            { Field: 'CongViec', Title: 'Công việc', Width: 120 },
            { Field: 'Ngay', Title: 'Ngày', Width: 100, Template: this.ngayKhamTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 193 }
        ];

        this.gridNhanSuColumns = [
            { Field: 'HoTen', Title: 'Họ tên', Width: 120, Template: this.hoTenTemplate },
            { Field: 'DonVi', Title: 'Đơn vị', Width: 244, ShowTooltip: true },
            { Field: 'ViTriLamViec', Title: 'Vị trí làm việc', Width: 90 },
            { Field: 'SoDienThoai', Title: 'SĐT', Width: 90 },
            { Field: 'DoiTuongLamViecDisplay', Title: 'Đối tượng', Width: 90 },
            { Field: 'NguoiGioiThieu', Title: 'Người giới thiệu', Width: 120 },
            { Field: '', Title: 'Tài liệu ĐK', Width: 209, Template: this.taiLieuTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 100 },
            { Field: 'Action', Title: '', Width: 40, Template: this.actionTemplate }
        ];
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = 1;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = DoiTuongLamViec.Fulltime;
    }

    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }

    DisplayContagiousInfo(currentEvent: any) {
        if (!currentEvent) {
            this.khamDoanNhanSuDetail.SoNguoiKham = null;
            this.khamDoanNhanSuDetail.NgayHieuLuc = null;
            this.khamDoanNhanSuDetail.NgayKetThuc = null;
            this.gridDiaDiemKhamDatasource.data = [];
            this.gridDiaDiemKhamDatasource.total = 0;
            this.diaDiemKhamDisplay = false;
        }
        if (currentEvent) {
            this.apiService
                .get<any>('KhamDoan/GetHdKhamVaDiaDiem?id=' + currentEvent)
                // tslint:disable-next-line: deprecation
                .subscribe(
                    (resultData) => {
                        this.khamDoanNhanSuDetail.SoNguoiKham = resultData.SoNguoiKham;
                        this.khamDoanNhanSuDetail.NgayHieuLuc = resultData.NgayHieuLuc;
                        this.khamDoanNhanSuDetail.NgayKetThuc = resultData.NgayKetThuc;
                        if (resultData.KhamDoanHopDongDiaDiems && resultData.KhamDoanHopDongDiaDiems.some(x => x)) {
                            this.diaDiemKhamDisplay = true;
                            this.gridDiaDiemKhamDatasource.data = Array.from(resultData.KhamDoanHopDongDiaDiems);
                            this.gridDiaDiemKhamDatasource.total = resultData.KhamDoanHopDongDiaDiems.length;
                        }
                    },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    }
                );
        }
    }

    DisplayNhanVienRelatedInfo(currentEvent: any) {
        if (!currentEvent) {
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = new YeuCauNhanSuKhamSucKhoeChiTiet();
        }
        if (currentEvent) {
            this.apiService
                .get<any>('KhamDoan/GetNhanVienRelatedInfo?id=' + currentEvent)
                // tslint:disable-next-line: deprecation
                .subscribe(
                    (resultData) => {
                        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DonVi = resultData.DonVi;
                        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.SoDienThoai = resultData.SoDienThoai;
                    },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    }
                );
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    getData(id: number) {
        this.showPopupLoadingData();
        this.apiService
            .get<any>('KhamDoan/GetThongTinYeuCauNhanSuKhamSucKhoe?id=' + id)
            // tslint:disable-next-line: deprecation
            .subscribe(
                (resultData) => {
                    if (resultData.HopDongKhamSucKhoeDiaDiems && resultData.HopDongKhamSucKhoeDiaDiems.some(x => x)) {
                        this.diaDiemKhamDisplay = true;
                        this.gridDiaDiemKhamDatasource.data = Array.from(resultData.HopDongKhamSucKhoeDiaDiems);
                        this.gridDiaDiemKhamDatasource.total = resultData.HopDongKhamSucKhoeDiaDiems.length;
                    }
                    this.khamDoanNhanSuDetail = JSON.parse(JSON.stringify(resultData));
                    this.selection = this.khamDoanNhanSuDetail.TrangThai === 1 ? 1 : null;
                    this.gridNhanSuDatasource.data = Array.from(resultData.YeuCauNhanSuKhamSucKhoeChiTiets);
                    this.gridNhanSuDatasource.total = resultData.YeuCauNhanSuKhamSucKhoeChiTiets.length;
                    this.closePopupLoadingData();
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message !== 'Validation Failed') {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                }
            );
    }

    getTenTaiLieuDinhKem(dataItem) {
        return dataItem != null ?
            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
    }

    ShowToControl(dataItem) {
        
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = JSON.parse(JSON.stringify(dataItem));
        this.operationCommand = CommandName.Update;
    }

    xuLyThem() {
        this.validateWhenThemNhanSu();
        if (this.validationErrorsThemNhanSu && this.validationErrorsThemNhanSu.some(x => x)) {
            return;
        }

        if (this.operationCommand === CommandName.Update) {
            const currentIndex = this.gridNhanSuDatasource.data.map(x => x.Id).indexOf(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.Id);
            this.gridNhanSuDatasource.data[currentIndex] = JSON.parse(JSON.stringify(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent));
            this.gridNhanSuDatasource.data[currentIndex].NguonNhanSu = this.selection;
            this.gridNhanSuDatasource.data[currentIndex].IsCreate =
                this.gridNhanSuDatasource.data[currentIndex].IsCreate === true ? true : null;
            this.gridNhanSuDatasource.data[currentIndex].IsUpdate =
                this.gridNhanSuDatasource.data[currentIndex].IsCreate === true ? null : true;
            this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKemId =
                this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                    this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKemId : null;
            this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem =
                this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                    this.gridNhanSuDatasource.data[currentIndex].NhanSuKhamSucKhoeTaiLieuDinhKem.reduce((a, v) => a.concat(v), []) : [];
            this.apiService
                .post<any>('KhamDoan/GetThongTinNhanSuConLai', this.gridNhanSuDatasource.data[currentIndex])
                // tslint:disable-next-line: deprecation
                .subscribe(
                    (resultData) => {
                        if (resultData.LoaiNhanVien) {
                            this.khamDoanNhanSuDetail.TongSoBs = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 1).length;
                            this.khamDoanNhanSuDetail.TongSoDd = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 2).length;
                            this.khamDoanNhanSuDetail.TongNvKhac = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 3).length;
                        }
                        this.gridNhanSuDatasource.data[currentIndex].DoiTuongLamViecDisplay =
                            resultData.DoiTuongLamViecDisplay;
                        this.gridNhanSuDatasource.data[currentIndex].NguoiGioiThieu =
                            resultData.NguoiGioiThieu;
                        this.gridNhanSuDatasource.data[currentIndex].HoTen =
                            resultData.HoTen;
                        this.khamDoanNhanSuDetail.YeuCauNhanSuKhamSucKhoeChiTiets
                            = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
                        this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
                        this.gridNhanSu.setDataSource();
                        this.Reset();
                    },
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    }
                );
            return;
        }

        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = this.selection;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.IsCreate = true;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.Id = Math.round(Math.random() * 1000000000);
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKemId =
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ? 0 : null;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem =
            this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem.reduce((a, v) => a.concat(v), []) : [];
        this.gridNhanSuDatasource.data.push(this.yeuCauNhanSuKhamSucKhoeChiTietCurrent);
        this.gridNhanSuDatasource.total++;
        this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
        this.gridNhanSu.setDataSource();
        this.apiService
            .post<any>('KhamDoan/GetThongTinNhanSuConLai', this.yeuCauNhanSuKhamSucKhoeChiTietCurrent)
            // tslint:disable-next-line: deprecation
            .subscribe(
                (resultData) => {
                    if (resultData.LoaiNhanVien) {
                        this.khamDoanNhanSuDetail.TongSoBs = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 1).length;
                        this.khamDoanNhanSuDetail.TongSoDd = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 2).length;
                        this.khamDoanNhanSuDetail.TongNvKhac = this.gridNhanSuDatasource.data.filter(x => x.LoaiNhanVien === 3).length;
                    }
                    this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].DoiTuongLamViecDisplay =
                        resultData.DoiTuongLamViecDisplay;
                    this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].NguoiGioiThieu =
                        resultData.NguoiGioiThieu;
                    this.gridNhanSuDatasource.data[this.gridNhanSuDatasource.data.length - 1].HoTen =
                        resultData.HoTen;
                    this.khamDoanNhanSuDetail.YeuCauNhanSuKhamSucKhoeChiTiets
                        = JSON.parse(JSON.stringify(this.gridNhanSuDatasource.data));
                    this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
                    this.gridNhanSu.setDataSource();
                    this.Reset();
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message !== 'Validation Failed') {
                        this.notificationService.showError(err.Message);
                    }
                }
            );
    }

    validateWhenThemNhanSu() {
        this.validationErrorsThemNhanSu = [];
        if (this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.ViTriLamViec == null) {
            const validate = {
                Field: 'ViTriLamViec',
                Message: YeuCauNhanSuMessage.MessageViTriLamViecNotNull
            };
            this.validationErrorsThemNhanSu.push(validate);
        }
        if (this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec == null) {
            const validate = {
                Field: 'DoiTuongLamViec',
                Message: YeuCauNhanSuMessage.MessageDoiTuongNotNull
            };
            this.validationErrorsThemNhanSu.push(validate);
        }
    }

    validateWhenYeuCauNhanSu() {
        this.validationErrors = [];
        if (this.khamDoanNhanSuDetail.CongTyId == null) {
            const validate = {
                Field: 'CongTyId',
                Message: YeuCauNhanSuMessage.MessageCongTyNotNull
            };
            this.validationErrors.push(validate);
        }
        if (this.khamDoanNhanSuDetail.HopDongKhamSucKhoeId == null) {
            const validate = {
                Field: 'HopDongKhamSucKhoeId',
                Message: YeuCauNhanSuMessage.MessageHopDongNotNull
            };
            this.validationErrors.push(validate);
        }
    }

    GuiYeuCauNhanSu() {
        this.validateWhenYeuCauNhanSu();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }
        this.khamDoanNhanSuDetail.Id = 0;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn gởi yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.apiService
                        .post<any>('KhamDoan/ThemYeuCauNhanSu', this.khamDoanNhanSuDetail)
                        // tslint:disable-next-line: deprecation
                        .subscribe(
                            () => {
                                this.notificationService.showSuccess(YeuCauNhanSuMessage.MessageXnThanhCong);
                                this.router.navigate(['/kham-doan/nhan-su-kham'], {
                                    queryParamsHandling: 'preserve',
                                });
                                return;
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            }
                        );
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Save() {
        this.validateWhenYeuCauNhanSu();
        if (this.validationErrors && this.validationErrors.some(x => x)) {
            return;
        }

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn gởi yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed().subscribe(result => {
                if (result == 'Yes') {
                    this.apiService
                        .post<any>('KhamDoan/UpdateYeuCauNhanSu', this.khamDoanNhanSuDetail)
                        // tslint:disable-next-line: deprecation
                        .subscribe(
                            () => {
                                this.notificationService.showSuccess(YeuCauNhanSuMessage.MessageCapNhatThanhCong);
                                this.router.navigate(['/kham-doan/nhan-su-kham'], {
                                    queryParamsHandling: 'preserve',
                                });
                                return;
                            },
                            (err: ApiError) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message !== 'Validation Failed') {
                                    this.notificationService.showError(err.Message);
                                }
                            }
                        );
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    Reset(currentEvent = null) {
        if (this.operationCommand === CommandName.Update && currentEvent != null) {
            if (currentEvent === 2) {
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = currentEvent;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.HoTen = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanVienId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DonVi = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.SoDienThoai = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = 2;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = DoiTuongLamViec.Parttime;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieuId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguoiGioiThieu = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKem = [];
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NhanSuKhamSucKhoeTaiLieuDinhKemId = null;
                this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.LoaiNhanVien = null;
            }
            return;
        }
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent = new YeuCauNhanSuKhamSucKhoeChiTiet();
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.NguonNhanSu = currentEvent;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViec = currentEvent === 2 ? 2 : 1;
        this.yeuCauNhanSuKhamSucKhoeChiTietCurrent.DoiTuongLamViecDisplay = currentEvent === 2 ? DoiTuongLamViec.Parttime : DoiTuongLamViec.Fulltime;

        if (currentEvent == null) {
            this.operationCommand = CommandName.Add;
        }
    }

    uploadFileDone(event) {
        this.fileTaiLieu = event;
        this.cdRef.detectChanges();
    }

    delete(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '500px',
            data: {
                Title: DeleteDialog.Title,
                Message: DeleteDialog.Message,
            },
        }).afterClosed()
            // tslint:disable-next-line: deprecation
            .subscribe((res) => {
                if (res === 'Yes') {
                    if (dataItem.IsCreate !== true) {
                        this.khamDoanNhanSuDetail.NhanSuBiLoaiBo.push(dataItem.Id);
                    }
                    this.gridNhanSuDatasource.data.splice(this.gridNhanSuDatasource.data.indexOf(dataItem), 1);
                    this.gridNhanSu._gridDataSource = JSON.parse(JSON.stringify(this.gridNhanSuDatasource));
                    this.gridNhanSu.setDataSource();
                }
            });
    }

    quayLai() {
        this.router.navigateByUrl('/kham-doan/nhan-su-kham?holdQuery=true');
    }

    viewFile(dataItem: any) {
        //console.log(file);
        var file = dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0];
        let duongDan = file.DuongDan;
        if (file.IsExistingFile !== true) { //save tmp
            duongDan = file.DuongDanTmp
        }
        const params = new HttpParams(
            {
                fromObject: {
                    tenGuid: file.TenGuid,
                    duongDan: duongDan,
                }
            });
        // let response = await this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).toPromise();
        this.apiService.get<any>('TaiLieuDinhKem/GetTaiLieuUrl', params).subscribe((resp) => {
            if (resp) {
                if (file.validationErrors == null || file.validationErrors.length <= 0) {
                    if (file.LoaiTapTin == 2) {
                        var html = "<div class=\"showFile\">";
                        html += "<div class=\"overlay\"></div>";
                        html += "<div class=\"middle\">";
                        html += "<div class=\"inner\">";
                        html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                        html += "<iframe src='" + resp + "' style=\"width:770px; height:570px;\" frameborder=\"0\"></iframe>";
                        html += "</div>";
                        html += "</div>";
                        html += "</div>"
                        $(html).appendTo('app-main');
                    }
                    else {
                        if (file.LoaiTapTin == 1) {
                            var html = "<div class=\"showFile\">";
                            html += "<div class=\"overlay\"></div>";
                            html += "<div class=\"middle\">";
                            html += "<div class=\"inner\">";
                            html += "<span class=\"close\" onclick=\"$('.showFile').detach();\">X</span>";
                            html += "<img src='" + resp + "' alt='' style=\"max-width: 770px;max-height: 570px;\"/>";
                            html += "</div>";
                            html += "</div>";
                            html += "</div>"
                            $(html).appendTo('app-main');
                        }
                        else {
                            this.downloadFile(resp, file.name);
                            // var a = document.createElement("a");
                            // a.href = resp;
                            // a.target = "_blank";
                            // //console.log(a)
                            // a.click();
                        }
                    }
                }
                else {
                    this.notificationService.showError("Tải file bị lỗi: " + file.error);
                }
            }
        })

    }

    downloadFile(url: string, fileName: string) {
        const options = new RequestOptions({ responseType: ResponseContentType.Blob });
        // Process the file downloaded
        this.http.get(url, options).subscribe(res => {
            //const fileName = getFileNameFromResponseContentDisposition(res);
            saveFile(res.blob(), fileName);
        });
    }
}
