import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icClear from '@iconify/icons-ic/twotone-clear';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanKhthDuyetTuChoiPopupComponent } from '../kham-doan-khth-duyet-tu-choi-popup/kham-doan-khth-duyet-tu-choi-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { YeuCauNhanSuKhamSucKhoeDetail } from '../kham-doan-khth-duyet.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-kham-doan-khth-duyet-detail-popup',
    templateUrl: './kham-doan-khth-duyet-detail-popup.component.html',
    styleUrls: ['./kham-doan-khth-duyet-detail-popup.component.scss']
})
export class KhamDoanKhthDuyetDetailPopupComponent implements OnInit {

    icClose = icClose;
    icDelete = icDelete;
    icClear = icClear;

    documentType: DocumentType;
    validationErrors: any = [];
    format = 'n2';
    popupLoadingData: any;
    id: number;

    gridDiaDiemKhamColumns: any[] = [];
    gridNhanSuColumns: any[] = [];

    title = 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe';
    gridDiaDiemKhamDatasource: any = {
        data: [],
        total: 0
    };
    gridNhanSuDatasource: any = {
        data: [],
        total: 0
    };
    // cần cập nhật lại theo mdel
    khamDoanNhanSuDetail: YeuCauNhanSuKhamSucKhoeDetail = new YeuCauNhanSuKhamSucKhoeDetail();
    diaDiemKhamDisplay = false;

    @ViewChild('ngayKhamTemplate', { static: true }) ngayKhamTemplate: TemplateRef<any>;
    @ViewChild('taiLieuTemplate', { static: true }) taiLieuTemplate: TemplateRef<any>;
    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private notificationService: NotificationService,
        private apiService: ApiService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth;
        this.id = this.route.snapshot.params.id;
        this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
        this.getData(this.id);

        this.gridDiaDiemKhamColumns = [
            { Field: 'DiaDiem', Title: 'Địa điểm khám', Width: 220 },
            { Field: 'CongViec', Title: 'Công việc', Width: 120 },
            { Field: 'Ngay', Title: 'Ngày', Width: 100, Template: this.ngayKhamTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 193 }
        ];

        this.gridNhanSuColumns = [
            { Field: 'HoTen', Title: 'Họ tên', Width: 120 },
            { Field: 'DonVi', Title: 'Đơn vị', Width: 244 },
            { Field: 'ViTriLamViec', Title: 'Vị trí làm việc', Width: 90 },
            { Field: 'SoDienThoai', Title: 'SĐT', Width: 90 },
            { Field: 'DoiTuongLamViecDisplay', Title: 'Đối tượng', Width: 90 },
            { Field: 'NguoiGioiThieu', Title: 'Người giới thiệu', Width: 120 },
            { Field: '', Title: 'Tài liệu ĐK', Width: 209, Template: this.taiLieuTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', Width: 100 }
        ];
    }

    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
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

    xuLyDuyet() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: 'Bạn có chắc chắn muốn duyệt yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed()
                // tslint:disable-next-line: deprecation
                .subscribe(result => {
                    if (result === 'Yes') {
                        this.apiService
                            .get<any>(`KhamDoan/DuyetKhth?id=${this.id}`)
                            // tslint:disable-next-line: deprecation
                            .subscribe(
                                () => {
                                    this.notificationService.showSuccess('Đã duyệt nhân sự thành công');
                                    this.quayLai();
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

    xuLyTuChoi() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(KhamDoanKhthDuyetTuChoiPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Title: 'Xác nhận', Message: 'Bạn chắc chắn muốn từ chối yêu cầu nhân sự khám sức khỏe này không?' }
            }).afterClosed()
                // tslint:disable-next-line: deprecation
                .subscribe(result => {
                    if (result) {
                        const requestTuChoi = {
                            Id: this.id,
                            LyDo: result
                        };
                        this.apiService
                            .post<any>('KhamDoan/TuChoiDuyetKhth', requestTuChoi)
                            // tslint:disable-next-line: deprecation
                            .subscribe(
                                () => {
                                    this.notificationService.showSuccess('Đã từ chối nhân sự thành công');
                                    this.quayLai();
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

    getTenTaiLieuDinhKem(dataItem) {
        return dataItem != null ?
            dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem != null && dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem.some(x => x) ?
                dataItem.NhanSuKhamSucKhoeTaiLieuDinhKem[0].Ten : '' : '';
    }

    quayLai() {
        this.router.navigateByUrl('/kham-doan/khth-duyet?holdQuery=true');
    }
}
