import {
    DuTruMuaVatTuTaiKhoaChiTietVo,
    DuyetDuTruMuaVatTuViewModel,
    TongHopDuTruMuaVatTuTaiKhoa
} from '../tong-hop-du-tru-mua-vat-tu-tai-khoa.model';
import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

import icInfo from '@iconify/icons-ic/baseline-info';
import {
    GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent
} from '../gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { PhieuMuaTruTaiKhoaComponent } from '../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet',
    templateUrl: './gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.html',
    styleUrls: ['./gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component.scss'],
    animations: [
        stagger60ms,
        fadeInUp400ms
    ]
})
export class GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent implements OnInit {
    documentType: DocumentType;
    thongTinGoiTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa;
    duyetDuTruMuaVatTuViewModel: DuyetDuTruMuaVatTuViewModel;
    duTruMuaVatTuTaiKhoaChiTietVo: DuTruMuaVatTuTaiKhoaChiTietVo[] = [];

    popupLoadingData: any = null;
    popupSavingData: any = null;
    icInfo = icInfo;
    validationErrors: any = null;
    kyDuTruMuaDuocPhamVatTuId = 0;
    sortDuTruTaiKhoa: SortDescriptor[] = [{ field: 'Id', dir: 'asc' }];

    gridColumns: any[] = [];
    gridChildColumns: any[] = [];

    @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
    @ViewChild('STTChildTemplate', { static: true }) STTChildTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

    @ViewChild('nhomChiTietTemplate', { static: true }) nhomChiTietTemplate: TemplateRef<any>;

    groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
    groupChiTiet: GroupDescriptor[] = [{ field: 'Nhom' }];
    
    urlGetDataGridChildAsync = 'YeuCauMuaVatTu/GetDuTruMuaVTTaiKhoaChiTietForGridAsync';
    urlGetTotalPageGridChild = 'YeuCauMuaVatTu/GetTotalDuTruMuaVTTaiKhoaChiTietForGridAsync';

    sortDuTruChild: SortDescriptor[] = [{ field: 'Id', dir: 'asc' }];


    constructor(
        private dialog: MatDialog,
        private router: Router,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location: Location,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa;
        this.thongTinGoiTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoa();
        this.duyetDuTruMuaVatTuViewModel = new DuyetDuTruMuaVatTuViewModel();
        this.kyDuTruMuaDuocPhamVatTuId = this.route.snapshot.params.id;
        this.gridColumns = [
            { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'VatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 50 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 50 },
            // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 80 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL DKiến S.Dung Trong Kỳ', Width: 100 },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100 }
        ];

        this.gridChildColumns = [
            // { Field: 'STT', Title: '#', Width: 25, Template: this.STTChildTemplate , TemplateGroupHeader: this.nhomChiTietTemplate },
            //{ Field: 'LoaiNhom', Title: 'Nhóm', Width: 100, Sortable: true },
            { Field: 'TenKho', Title: 'Kho', Width: 100, Sortable: true },
            { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 150, Sortable: true },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100, Sortable: true },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.kiến trong kỳ', Width: 100, Sortable: true },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Sortable: true },
        ];
        this.getThongTinTongHopDuTruMuaTaiKhoa();
    }

    getThongTinTongHopDuTruMuaTaiKhoa() {
        const phongBenhVienId = this.authService.getPhongLamViecId();
        this.apiService.get<any>('YeuCauMuaVatTu/GetThongTinGoiTaiKhoa/' + phongBenhVienId)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.thongTinGoiTaiKhoa = resultData;
                }
            });
    }

    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' },
        });
    }

    closepopupLoadingData() {
        if (this.popupLoadingData && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    savingPage() {
        this.popupSavingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang lưu dữ liệu...' },
        });
    }

    closePopupSavingData() {
        if (this.popupSavingData && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }

    onDataBound(event) {
        if (event && event.Data.length > 0) {
            this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
        }
    }

    guiTatCa() {
        const self = this;
        self.validationErrors = [];
        self.ref.detectChanges();

        // thông tin mua dư trù
        self.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = self.kyDuTruMuaDuocPhamVatTuId;
        self.duyetDuTruMuaVatTuViewModel.NhanVienYeuCauId = self.thongTinGoiTaiKhoa.NhanVienYeuCauId;
        self.duyetDuTruMuaVatTuViewModel.KhoaPhongId = self.thongTinGoiTaiKhoa.KhoaPhongId;
        self.duyetDuTruMuaVatTuViewModel.GhiChu = self.thongTinGoiTaiKhoa.GhiChu;
        self.duyetDuTruMuaVatTuViewModel.NgayYeuCau = self.thongTinGoiTaiKhoa.NgayYeuCau;
        self.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuTaiKhoaChiTietVos = self.duTruMuaVatTuTaiKhoaChiTietVo;

        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            self.dialog.open(GuiTongHopDuTruMuaVatTuTaiKhoaConfirmComponent, {
                disableClose: false,
                width: '500px',
                data: {
                    Title: 'Xác nhận',
                    Message: 'Bạn có chắc chắn muốn gửi duyệt phiếu dự trù này không ?',
                },
            }).afterClosed().subscribe((res) => {
                if (res === 'Yes') {
                    self.apiService.post<any>('YeuCauMuaVatTu/GoiThongTinTaiKhoa', self.duyetDuTruMuaVatTuViewModel)
                        .subscribe(
                            (resultData) => {
                                if (resultData) {
                                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                                    self.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                                    self.closePopupSavingData();
                                }
                            },
                            (err: ApiError) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message !== 'Validation Failed') {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupSavingData();
                            }
                        );
                } else if (res === 'YesAndPrint') {
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
                        self.savingPage();
                        self.apiService.post<any>('YeuCauMuaVatTu/GoiThongTinTaiKhoa', self.duyetDuTruMuaVatTuViewModel).subscribe(
                            (resultData) => {
                                if (resultData) {
                                    self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Lưu']));
                                    self.closePopupSavingData();
                                    self.dialog.open(PhieuMuaTruTaiKhoaComponent, {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Id: resultData },
                                    }).afterClosed().subscribe(() => {
                                        self.router.navigate(['/nhap-xuat/vat-tu/tong-hop-mua-vat-tu-tai-khoa']);
                                    });
                                }
                            },
                            (err: ApiError) => {
                                self.validationErrors = err.ValidationErrors;
                                if (err.Message !== 'Validation Failed') {
                                    self.notificationService.showError(err.Message);
                                }
                                self.closePopupSavingData();
                            });
                    } else {
                    }
                }
            });
        } else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    cancel() {
        this.location.back();
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 27 && !event.ctrlKey) {
            // esc
            this.cancel();
            event.preventDefault();
        }
    }
}
