import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import icInfo from '@iconify/icons-ic/baseline-info';
import { Location } from '@angular/common';
import { DuTruMuaVatTuTaiKhoaChiTietVo, DuyetDuTruMuaVatTuViewModel, ThongTinLyDoHuyDuyetTaiKhoa, TongHopDuTruMuaVatTuTaiKhoa } from '../tong-hop-du-tru-mua-ksnk-tai-khoa.model';
// import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
import { PhieuMuaTruKSNKTaiKhoaComponent } from '../phieu-mua-du-tru-tai-khoa/phieu-mua-du-tru-tai-khoa.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-tong-hop-du-tru-mua-ksnk-tai-khoa-shared',
    templateUrl: './tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.html',
    styleUrls: ['./tong-hop-du-tru-mua-ksnk-tai-khoa-shared.component.scss']
})

export class TongHopDuTruMuaKSNKTaiKhoaSharedComponent implements OnInit {
    documentType: DocumentType;
    danhSachTongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa;
    duTruMuaVatTuTaiKhoaChiTietVo: DuTruMuaVatTuTaiKhoaChiTietVo[] = [];
    duyetDuTruMuaVatTuViewModel = {} as DuyetDuTruMuaVatTuViewModel;
    thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;

    confrim: any;
    popupSavingData: any = null;
    validationErrors: any = null;
    gridChildThuocVacXinColumns: any[] = [];
    sortDuTruChild: SortDescriptor[] =
        [{
            field: 'Id',
            dir: 'asc'
        }];
    gridColumns: any[] = [];
    gridColumnsChild: any[] = [];
    groups: GroupDescriptor[] = [{ field: 'Nhom', dir: 'asc', aggregates: [] }];
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
    khos: any[] = [];
    hdts: any[] = [];

    urlGetDataGridChildAsync = 'YeuCauMuaKSNK/GetDuTruMuaKSNKTaiKhoaChiTietForGridAsync';
    urlGetTotalPageGridChild = 'YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTaiKhoaChiTietForGridAsync';

    urlGetDataDaXuLy = "YeuCauMuaKSNK/GetDuTruMuaKSNKTHDTChiTietForGridAsync";
    urlGetTotalPageDaXuLy = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTHDTChiTietForGridAsync";

    urlGetDataDaXuLyChild = "YeuCauMuaKSNK/GetDuTruMuaKSNKTaiKhoaChiTietForGridAsyncChild";
    urlGetTotalPageDaXuLyChild = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTaiKhoaChiTietForGridAsyncChild";


    public duTruMuaVatTuId: any = 0;

    @ViewChild('nhomSLTKDuyet', { static: true }) nhomSLTKDuyet: TemplateRef<any>;
    @ViewChild(TongHopDuTruMuaKSNKTaiKhoaSharedComponent, { static: true }) shared: any;
    @Input() trangThaiVo: any;
    @Input() validationErrorsVatTu: any;
    @Input() isCreate: boolean;
    @Output() hideGuibtn: EventEmitter<any> = new EventEmitter<any>();
    @Input() tabSelected: any;

    icInfo = icInfo;
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService,
        private location: Location,

    ) { }

    ngOnInit() {
        this.documentType = DocumentType.THDTMuaTaiKSNK;
        this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoa();
        let id = this.route.snapshot.params.id;
        if (id != undefined && id != null) {
            this.duTruMuaVatTuId = id;
            console.log("tabSelected: ", this.tabSelected)
            if (this.tabSelected == "DaXuLy") {
                this.getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id);

            } else {
                this.getThongTinTongHopDuTruMuaTaiKhoa(id);
            }
        }
        this.duTruMuaVatTuId = id;
        this.gridChildThuocVacXinColumns = [
            {
                Field: 'Nhom',
                Title: 'Loại',
                Width: 100,
                ShowTooltip: true,
                Hidden: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            },
            { Field: 'VatTu', Title:'kiểm soát nhiễm khuẩn', Width: 100, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 100 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 100 },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 100 },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 100, Template: this.khoTongTonTemplate },
            { Field: 'HDChuaNhap', Title: 'HĐ Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'T.Khoa Duyệt', Width: 100, Template: this.nhomSLTKDuyet },
        ];

        this.gridColumns = [
            { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'TenVatTu', Title: 'Tên', Width: 50, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80 },
            { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 80 },
            { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "T.Khoa Duyệt", Width: 100 },
        ];

        this.gridColumnsChild = [
            { Field: "Nhom", Title: "Loại", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenKho", Title: "Kho", Width: 100 },
            { Field: "KyDuTruDisplay", Title: "Kỳ dự trù", Width: 120 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100 },
            { Field: "SoLuongDuKienSuDung", Title: "SL Dự Kiến Trong Kỳ", Width: 100 },
        ];
    }

    getThongTinTongHopDuTruMuaTaiKhoa(id: any) {
        this.apiService.get<any>('YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoa/' + id)
            .subscribe((resultData) => {
                if (resultData) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                }
            });
    }

    HuyDuyet(id: any) {
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.Update)
        ) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: CommonService.format(SystemMessage.MessConfirm, [
                        'Hủy Duyệt',
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                    /* result is a string:Yes,No,No answer*/
                    if (result === 'Yes') {
                        this.apiService.post<any>('YeuCauMuaKSNK/HuyDuyetTaiKhoa/' + id)
                            .subscribe((resultData) => {
                                if (resultData !== null && resultData !== undefined) {
                                    if (resultData) {                                       
                                        this.notificationService.showSuccess('Hủy duyệt thành công.');
                                        this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa']);
                                    } else {
                                        this.notificationService.showError('Hủy không thành công.');
                                    }
                                }
                            });
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    getThongTinTongHopDuTruMuaTaiKhoaDaXuLy(id: any) {
        this.apiService.get<any>("YeuCauMuaKSNK/GetThongTinDuTruKSNKTaiKhoaDaXuLy/" + id)
            .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = resultData;
                }
            });
    }
    onDataBound(event) {
        if (event && event.Data.length > 0) {
            this.duTruMuaVatTuTaiKhoaChiTietVo = event.Data;
        }
    }

    PheDuyet(id: any) {
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.Update)
        ) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(ConfirmComponent, {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận',
                    Message: CommonService.format(SystemMessage.MessConfirm, [
                        'Duyệt',
                    ]),
                },
            })
                .afterClosed()
                .subscribe((result) => {
                    if (result === 'Yes') {
                        this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
                        this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuTaiKhoaChiTietVos = this.duTruMuaVatTuTaiKhoaChiTietVo;
                        this.apiService.post<any>('YeuCauMuaKSNK/DuyetTaiKhoa/', this.duyetDuTruMuaVatTuViewModel)
                            .subscribe((resultData) => {
                                if (resultData !== null && resultData !== undefined) {
                                    if (resultData) {
                                        this.cancel();
                                        this.notificationService.showSuccess('Duyệt thành công.');
                                    } else {
                                        this.notificationService.showError('Duyệt không thành công.');
                                    }
                                }
                            });
                    }
                });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    TuChoi() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(null, {
                disableClose: true,
                width: '400px',
                height: '300px',
            }).afterClosed().subscribe((result) => {
                if (result) {
                    this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                    this.thongTinLyDoHuyDuyetTaiKhoa.Id = this.duTruMuaVatTuId;
                    this.apiService.post<any>('YeuCauMuaKSNK/TuChoiDuyetTaiKhoa', this.thongTinLyDoHuyDuyetTaiKhoa)
                        .subscribe((resultData) => {
                            if (resultData) {
                                this.cancel();
                                this.notificationService.showSuccess('Từ chối duyệt thành công.');
                            }
                        });
                }
            });

        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    cancel() {     
        this.location.back();
    }

    TooltipCustom(duTruGiamDocDetail: any) {
        this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
        this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
    }

    InPhieuTongHopTaiKhoa() {
        const id = this.route.snapshot.params.id;
        this.dialog.open(PhieuMuaTruKSNKTaiKhoaComponent, {
            disableClose: false,
            width: '1200px',
            data: { Id: id },
        }).afterClosed().subscribe(() => {            
        });
    }
}
