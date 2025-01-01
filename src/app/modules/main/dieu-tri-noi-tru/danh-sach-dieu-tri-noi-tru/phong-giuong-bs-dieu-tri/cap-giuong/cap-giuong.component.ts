import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ChiTietDieuTriNoiTruViewModel, DoiTuongSuDung, GiuongBenhPhongGiuongBs, KhoaPhongChuyenDen, ThoiDiemNhanGiuong, YeuCauDichVuGiuongBenhVienPhongGiuongBs } from '../../../dieu-tri-noi-tru.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { TiepNhanNoiTruSoDoGiuongPopupComponent } from '../../../tiep-nhan-noi-tru/tiep-nhan-noi-tru-so-do-giuong-popup/tiep-nhan-noi-tru-so-do-giuong-popup.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ChiTietSuDungPopupComponent } from '../chi-tiet-su-dung-popup/chi-tiet-su-dung-popup.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';

@Component({
    selector: 'app-cap-giuong',
    templateUrl: './cap-giuong.component.html',
    styleUrls: ['./cap-giuong.component.scss']
})

export class CapGiuongComponent implements OnInit {
    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    enumDoiTuongSuDung = DoiTuongSuDung;
    validationErrors: any[] = [];
    currentPhongLamViecId: any;
    currentKhoaChuyenDen: KhoaPhongChuyenDen = new KhoaPhongChuyenDen();
    // currentKhoaPhong: LookupItemVo = new LookupItemVo(0, '');
    yeuCauTiepNhanId: number = null;
    isEditing: boolean = false;
    isDichVuGiuongChangedWhileEditing: boolean = false;
    isDaChiDinhGiuong: boolean = false;
    isEditingFirstData: boolean = false;
    isBaoPhongDisabled: boolean = true;
    timeout: any = null;
    loadingPopup: any;
    thoiDiemNhanGiuong: ThoiDiemNhanGiuong = new ThoiDiemNhanGiuong();

    cbbDichVuGiuongOpened: boolean = false;
    cbbDoiTuongOpened: boolean = false;

    addDialog: any = null;
    editDialog: any = null;

    yeuCauDichVuGiuongBenhVienPhongGiuongBs: YeuCauDichVuGiuongBenhVienPhongGiuongBs = new YeuCauDichVuGiuongBenhVienPhongGiuongBs();
    capGiuongPhongGiuongBs: GiuongBenhPhongGiuongBs = new GiuongBenhPhongGiuongBs();
    dichVuGiuongQueryInfo: LookupQueryInfo = new LookupQueryInfo();

    urlGetDanhSachEkipDieuTriForGrid = `DieuTriNoiTru/GetDanhSachCapGiuongForGrid`;
	urlGetTotalPagesDanhSachEkipDieuTriForGrid = `DieuTriNoiTru/GetTotalPagesDanhSachCapGiuongForGrid`;

    gridColumns: any[] = [];
    sortDanhSachEkipDieuTri: SortDescriptor[] = [{ field: "ThoiGianNhan", dir: "desc" }]

    icEdit = icEdit;
    icDelete = icDelete;

    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Input() IsBenhAnSoSinh: boolean = false;

    @Output() outputCapGiuongChanged = new EventEmitter();
    
    @ViewChild('khoaChiDinhTemplate', { static: true }) khoaChiDinhTemplate: TemplateRef<any>;
    @ViewChild('giuongBenhTemplate', { static: true }) giuongBenhTemplate: TemplateRef<any>;
    @ViewChild('loaiGiuongTemplate', { static: true }) loaiGiuongTemplate: TemplateRef<any>;
    @ViewChild('dichVuGiuongBenhVienTemplate', { static: true }) dichVuGiuongBenhVienTemplate: TemplateRef<any>;
    @ViewChild('doiTuongSuDungTemplate', { static: true }) doiTuongSuDungTemplate: TemplateRef<any>;
    @ViewChild('thoiGianNhanTemplate', { static: true }) thoiGianNhanTemplate: TemplateRef<any>;
    @ViewChild('thoiGianTraTemplate', { static: true }) thoiGianTraTemplate: TemplateRef<any>;
    @ViewChild('baoPhongTemplate', { static: true }) baoPhongTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaBHYTTemplate', { static: true }) donGiaBHYTTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTamTinhTemplate', { static: true }) thanhTienTamTinhTemplate: TemplateRef<any>;
    @ViewChild('lyDoChuyenTemplate', { static: true }) lyDoChuyenTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('gridCapGiuong', { static: true }) gridCapGiuong: GridComponent;
    
    constructor(private route: ActivatedRoute, private dialog: MatDialog, 
                private authService: AuthService, private apiService: ApiService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.yeuCauTiepNhanId = this.dieuTriNoiTruModel.Id; 
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        this.currentPhongLamViecId = this.authService.getPhongLamViecId();
        // this.getCurrentKhoaPhong();
        this.getCurrentKhoaHienTaiBenhNhanChuyenDen();
        this.getIsDaChiDinhGiuong();

        this.gridColumns = [
            { Field: "KhoaChiDinhId", Title: "Khoa chỉ định", Width: 120, Template: this.khoaChiDinhTemplate },
            { Field: "GiuongBenhId", Title: "Giường chuyển", Width: 120, Template: this.giuongBenhTemplate },
            { Field: "LoaiGiuong", Title: "Loại giường", Width: 100, Template: this.loaiGiuongTemplate },
            { Field: "DichVuGiuongBenhVienId", Title: "Dịch vụ giường", Width: 120, Template: this.dichVuGiuongBenhVienTemplate },
            { Field: "DoiTuongSuDung", Title: "Đối tượng", Width: 100, Template: this.doiTuongSuDungTemplate },
            { Field: "ThoiGianNhan", Title: "Thời gian nhận", Width: 150, Template: this.thoiGianNhanTemplate },
            { Field: "ThoiGianTra", Title: "Thời gian trả", Width: 150, Template: this.thoiGianTraTemplate },
            { Field: "BaoPhong", Title: "Bao phòng", Width: 100, Template: this.baoPhongTemplate },
            { Field: "DonGia", Title: "Đơn giá", Width: 100, Template: this.donGiaTemplate },
            { Field: "DonGiaBHYT", Title: "Đơn giá BHYT", Width: 120, Template: this.donGiaBHYTTemplate },
            { Field: "ThanhTienTamTinh", Title: "Thành tiền tạm tính", Width: 170, Template: this.thanhTienTamTinhTemplate },
            { Field: "GhiChu", Title: "Lý do chuyển", Width: 130, Template: this.lyDoChuyenTemplate },
            { Field: "Action", Title: "", Width: 80, Template: this.actionTemplate }
        ];
    }

    // getCurrentKhoaPhong() {
    //     if (this.currentPhongLamViecId) {
    //         this.apiService.get(`PhongBenhVien/GetTenKhoaByPhong?phongId=${this.currentPhongLamViecId}`).subscribe((res: any) => {
    //             this.currentKhoaPhong = res;
    //         });
    //     }
    // }

    getCurrentKhoaHienTaiBenhNhanChuyenDen() {
        this.apiService.get(`DieuTriNoiTru/GetCurrentKhoaHienTaiBenhNhanChuyenDen?noiTruBenhAnId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
            this.currentKhoaChuyenDen = res;
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    getIsDaChiDinhGiuong() {
        this.apiService.get<any>(`DieuTriNoiTru/IsDaChiDinhGiuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
            this.isDaChiDinhGiuong = res;

            if(!this.isDaChiDinhGiuong) {
                this.getThoiDiemNhapVien();
                this.setDoiTuongSuDung();
            } else {
                // this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung = new Date();
                this.getThoiDiemChiDinhGiuong();
            }
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    getThoiDiemNhapVien() {
        this.apiService.get<any>(`DieuTriNoiTru/GetThoiDiemNhapVien?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res) => {
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung = res;
        }, (err: ApiError) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    setDoiTuongSuDung() {
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDung = this.enumDoiTuongSuDung.BenhNhan;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDungDisplay = 'Người Bệnh';

        this.evtDoiTuongSuDungChanged(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDung);
    }

    huy() {
        this.validationErrors = [];
        this.isEditing = false;
        this.isDichVuGiuongChangedWhileEditing = false;
        this.isEditingFirstData = false;
        this.isBaoPhongDisabled = true;

        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs = new YeuCauDichVuGiuongBenhVienPhongGiuongBs();
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.YeuCauTiepNhanId = this.yeuCauTiepNhanId;

        this.getIsDaChiDinhGiuong();
    }

    luu() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if(!this.editDialog) {
                this.editDialog = this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: "400px",
                    data: {
                      Title: "Xác nhận",
                      Message: CommonService.format(SystemMessage.MessConfirm, ["chỉnh sửa"])
                    },
                }).afterClosed().subscribe((res) => {
                    this.editDialog = null;
                    
                    if (res == "Yes") {
                        this.validationErrors = [];

                        if(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDung == this.enumDoiTuongSuDung.NguoiNha) {
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId = null;
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhDisplay = null;
                        }
                        
                        this.apiService.post<any>(`DieuTriNoiTru/SuaCapGiuong`, this.yeuCauDichVuGiuongBenhVienPhongGiuongBs).subscribe(() => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                            this.huy();
                            this.gridCapGiuong.search();
                            this.outputCapGiuongChanged.emit(true);
                            // this.dialog.closeAll();
                        }, (err: ApiError) => {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        });
                    }
                });
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chinhsua(dataItem) {
        this.isEditing = true;
        this.isBaoPhongDisabled = false;
        this.validationErrors = [];

        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.Id = dataItem.Id;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId = dataItem.GiuongBenhId;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhDisplay = dataItem.TenGiuong;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiuong = dataItem.LoaiGiuong;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiuongDisplay = dataItem.LoaiGiuongDisplay;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong = dataItem.BaoPhong;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung = dataItem.ThoiGianNhan;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemKetThucSuDung = dataItem.DoiTuongSuDung == this.enumDoiTuongSuDung.BenhNhan ? null : dataItem.ThoiGianTra;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId = dataItem.DichVuGiuongBenhVienId;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienDisplay = dataItem.DichVuGiuongBenhVienDisplay;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDung = dataItem.DoiTuongSuDung;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DoiTuongSuDungDisplay = dataItem.DoiTuongSuDungDisplay;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GhiChu = dataItem.GhiChu;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiaDichVuCoHieuLuc = dataItem.LoaiGiaDichVuCoHieuLuc;
        this.isEditingFirstData = dataItem.IsFirstData;
    }

    xoa(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.apiService.post<any>(`DieuTriNoiTru/XoaCapGiuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}&yeuCauDichVuGiuongBenhVienId=${dataItem.Id}`).subscribe(res => {
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá"]));
                    this.huy();
                    this.gridCapGiuong.search();
                    this.outputCapGiuongChanged.emit(true);
                }, (err: ApiError) => {
                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                })
            }
        });
    }

    themDichVuGiuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            if(!this.addDialog) {
                this.addDialog = this.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: "400px",
                    data: {
                      Title: "Xác nhận",
                      Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"])
                    },
                }).afterClosed().subscribe((res) => {
                    this.addDialog = null;
                    if (res == "Yes") {
                        this.validationErrors = [];
    
                        this.apiService.post<any>("DieuTriNoiTru/ThemCapGiuong", this.yeuCauDichVuGiuongBenhVienPhongGiuongBs).subscribe(() => {
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]));
                            this.huy();
                            this.gridCapGiuong.search();
                            this.outputCapGiuongChanged.emit(true);
                            // this.dialog.closeAll();
                        }, (err: ApiError) => {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                        });
                    }
                });
            }
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chonGiuong() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            if(!this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId) {
                this.notificationService.showError(`Vui lòng chọn dịch vụ giường`);
                return;
            }

            if(!this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung) {
                this.notificationService.showError(`Vui lòng chọn thời gian nhận`);
                return;
            }

            this.capGiuongPhongGiuongBs.GiuongId = this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId;
            this.capGiuongPhongGiuongBs.KhoaId = this.currentKhoaChuyenDen.Id;
            this.capGiuongPhongGiuongBs.TenKhoa = this.currentKhoaChuyenDen.DisplayName;
            this.capGiuongPhongGiuongBs.BaoPhong = this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong;
            this.capGiuongPhongGiuongBs.ThoiGianNhan = this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung;
            this.capGiuongPhongGiuongBs.ThoiGianTra = this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemKetThucSuDung;
            this.capGiuongPhongGiuongBs.YeuCauDichVuGiuongBenhVienId = this.isEditing ? this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.Id : null;
            this.capGiuongPhongGiuongBs.YeuCauTiepNhanNoiTruId = this.yeuCauTiepNhanId;
            // this.convertThongTinGetGiuongToUTCDateTime();

            this.dialog.open(TiepNhanNoiTruSoDoGiuongPopupComponent, {
                disableClose: false,
                width: '1200px',
                // data: this.capGiuongPhongGiuongBs
                data: Object.assign({}, this.capGiuongPhongGiuongBs)
            }).afterClosed().subscribe(res => {
                if(res) {
                    this.capGiuongPhongGiuongBs = res;
                    this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId = res.GiuongId;
                    this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhDisplay = `${res.TenGiuong} - ${res.TenPhong}`;

                    this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(p => p.Field.includes('GiuongBenhId'))[0]), 1);
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    evtDichVuGiuongChanged(evt) {
        if(evt) {
            if(this.isEditing) {
                this.isDichVuGiuongChangedWhileEditing = true;
            }
            
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiuong = evt.LoaiGiuong;
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong = evt.BaoPhong;
            this.isBaoPhongDisabled = evt.LoaiGiaCoHieuLuc <= 1; //!this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong || 

            let loaiGiuongError = this.validationErrors.find(p => p.Field.includes('LoaiGiuong'));
            if(loaiGiuongError) {
                this.validationErrors.splice(loaiGiuongError, 1);
            }
        } else {
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiuong = null;
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong = false;
        }

        //this.clearGiuongBenh();
    }

    chiTietSuDungGiuongTheoNgay() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ChiTietSuDungPopupComponent, {
                disableClose: false,
                width: '1600px',
                data: { yeuCauTiepNhanId: this.yeuCauTiepNhanId, benhNhanId: this.dieuTriNoiTruModel.BenhNhanId }
            }).afterClosed().subscribe(res => {
                
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    evtThemCapGiuong() {
        if(!this.isEditing && !this.cbbDichVuGiuongOpened && !this.cbbDoiTuongOpened) {
            this.themDichVuGiuong();
        }
    }

    evtSuaCapGiuong() {
        if(this.isEditing) {
            this.luu();
        }
    }

    clearGiuongBenh() {
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId = null;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhDisplay = null;
    }

    clearDichVuGiuongBenhVien() {
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId = null;
        this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienDisplay = null;
    }

    evtDoiTuongSuDungChanged(evt) {
        // if(evt && evt == this.enumDoiTuongSuDung.BenhNhan) {
        //     if(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemKetThucSuDung) {
        //         this.clearGiuongBenh();
        //     }

        //     this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemKetThucSuDung = null;
        // } else if (evt && evt == this.enumDoiTuongSuDung.NguoiNha) {
        //     this.clearGiuongBenh();
        // }
    }

    evtThoiDiemBatDauSuDungChanged(evt) {
        if(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId) {
            let self = this;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                self.showCheckingDichVuVaGiuongPopup();

                let kiemTraDichVuCapGiuong = {
                    ThoiGianNhan: evt,
                    ThoiGianTra: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemKetThucSuDung,
                    DichVuGiuongId: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId,
                    GiuongBenhId: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId,
                    YeuCauDichVuGiuongBenhVienId: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.Id
                }
    
                self.apiService.post(`DieuTriNoiTru/IsDichVuGiuongAvailable`, kiemTraDichVuCapGiuong).subscribe((res: any) => {
                    if(res) {
                        self.apiService.post(`DieuTriNoiTru/IsGiuongAvailable`, kiemTraDichVuCapGiuong).subscribe((result: any) => {
                            if(!result) {
                                self.clearGiuongBenh();
                            }
                            
                            self.closeAllDialogs();
                        }, (err: any) => {
                            self.closeAllDialogs();
                            self.notificationService.showError(err.Message);
                        });
                    } else {
                        self.closeAllDialogs();
                        self.clearGiuongBenh();
                        self.clearDichVuGiuongBenhVien();
                    }
                }, (err: any) => {
                    self.closeAllDialogs();
                    self.notificationService.showError(err.Message);
                });
            }, 1000);
        }
    }

    evtThoiDiemKetThucSuDungChanged(evt) {
        if(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId) {
            let self = this;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                self.showCheckingDichVuVaGiuongPopup();

                let kiemTraDichVuCapGiuong = {
                    ThoiGianNhan: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung,
                    ThoiGianTra: evt,
                    GiuongBenhId: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.GiuongBenhId,
                    YeuCauDichVuGiuongBenhVienId: self.yeuCauDichVuGiuongBenhVienPhongGiuongBs.Id
                };
    
                self.apiService.post(`DieuTriNoiTru/IsGiuongAvailable`, kiemTraDichVuCapGiuong).subscribe((result: any) => {
                    if(!result) {
                        self.clearGiuongBenh();
                    }
                    
                    self.closeAllDialogs();
                }, (err: any) => {
                    self.closeAllDialogs();
                    self.notificationService.showError(err.Message);
                });
            }, 1000);
        }
    }

    getDichVuGiuongQueryInfo() {
        let thoiGianNhanTemp = this.convertToUTCDateTime();

        this.dichVuGiuongQueryInfo.ParameterDependencies = JSON.stringify({
            ThoiGianNhan: thoiGianNhanTemp
        });

        return this.dichVuGiuongQueryInfo;
    }

    convertToUTCDateTime() {
        if(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung) {
			let thoiDiemBatDauSuDungTemp = new Date(this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung); 
			return new Date(Date.UTC(thoiDiemBatDauSuDungTemp.getFullYear(), thoiDiemBatDauSuDungTemp.getMonth(), thoiDiemBatDauSuDungTemp.getDate(), thoiDiemBatDauSuDungTemp.getHours(), thoiDiemBatDauSuDungTemp.getMinutes()));
		}
    }

    evtComboboxDichVuGiuongOpened(evt) {
        this.cbbDichVuGiuongOpened = evt;
    }

    evtComboboxDoiTuongOpened(evt) {
        this.cbbDoiTuongOpened = evt;
    }

    convertThongTinGetGiuongToUTCDateTime() {
        if(this.capGiuongPhongGiuongBs.ThoiGianNhan) {
			let thoiGianNhanTemp = new Date(this.capGiuongPhongGiuongBs.ThoiGianNhan); 
			this.capGiuongPhongGiuongBs.ThoiGianNhan = new Date(Date.UTC(thoiGianNhanTemp.getFullYear(), thoiGianNhanTemp.getMonth(), thoiGianNhanTemp.getDate(), thoiGianNhanTemp.getHours(), thoiGianNhanTemp.getMinutes()));
		}

        if(this.capGiuongPhongGiuongBs.ThoiGianTra) {
			let thoiGianTraTemp = new Date(this.capGiuongPhongGiuongBs.ThoiGianTra); 
			this.capGiuongPhongGiuongBs.ThoiGianTra = new Date(Date.UTC(thoiGianTraTemp.getFullYear(), thoiGianTraTemp.getMonth(), thoiGianTraTemp.getDate(), thoiGianTraTemp.getHours(), thoiGianTraTemp.getMinutes()));
		}
    }

    showCheckingDichVuVaGiuongPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '400px',
                height: '90px',
                data: { Title: 'Đang kiểm tra dịch vụ giường và giường chuyển đến' }
            });
        }
    }

    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }

    getThoiDiemChiDinhGiuong() {
        this.apiService.get(`DieuTriNoiTru/GetThoiDiemChiDinhGiuong?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe((res: any) => {
            this.thoiDiemNhanGiuong = res;
            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.ThoiDiemBatDauSuDung = this.thoiDiemNhanGiuong.ThoiDiemNhanGiuong;
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    // cập nhật xem giuonfg trong gói dv
    xemGoiDichVu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.dieuTriNoiTruModel.BenhNhanId, IsPTTT: false, IsNoiTru: true, IsCapGiuong: true }
            }).afterClosed().subscribe(dichVuGiuong => {
                if (dichVuGiuong) {
                    var query = this.getDichVuGiuongQueryInfo();
                    console.log('query', query);
                    this.apiService.post<Array<any>>("KhamBenh/GetDichVuGiuongBenhVien", query).subscribe(res => {
                        var dichVuBenhVien = res.find(x => x.KeyId == dichVuGiuong.DichVuBenhVienId);
                        console.log('dichVuBenhVien', dichVuBenhVien);
                        if(dichVuBenhVien)
                        {
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.YeuCauGoiDichVuId = dichVuGiuong.YeuCauGoiDichVuId;
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienId = dichVuBenhVien.KeyId;
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.DichVuGiuongBenhVienDisplay = dichVuBenhVien.DisplayName;

                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.LoaiGiuong = dichVuBenhVien.LoaiGiuong;
                            this.yeuCauDichVuGiuongBenhVienPhongGiuongBs.BaoPhong = dichVuBenhVien.BaoPhong;
                            this.isBaoPhongDisabled = dichVuBenhVien.LoaiGiaCoHieuLuc <= 1;

                            let loaiGiuongError = this.validationErrors.find(p => p.Field.includes('LoaiGiuong'));
                            if (loaiGiuongError) {
                                this.validationErrors.splice(loaiGiuongError, 1);
                            }
                        }
                        else
                        {
                            this.notificationService.showError("Dịch vụ giường này không còn sử dụng, hoặc không có giá có hiệu lực.");
                        }
                    }, (err: ApiError) => {
                        this.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
