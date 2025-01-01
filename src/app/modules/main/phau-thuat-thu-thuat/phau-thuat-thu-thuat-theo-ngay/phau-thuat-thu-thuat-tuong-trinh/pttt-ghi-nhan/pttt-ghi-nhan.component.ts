import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, Input, SimpleChanges, ElementRef, Output, EventEmitter } from "@angular/core";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { MatDialog } from "@angular/material";
import { ScrollToService } from "ng2-scroll-to-el";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { ApiService } from "src/app/core/services/api.service";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { GroupDescriptor } from '@progress/kendo-data-query';
import { TrangThaiYeuCauKhamBenhObjEnum, TrangThaiYeuCauDichVuKyThuatObjEnum, ChiDinhGhiNhanVatTuThuocPTTT, GridItemGhiNhanVatTuThuocPTTT, PTTTHoanTraThuocVatTuVo, PTTTVatTuThuoc } from '../../../phau-thuat-thu-thuat.model';
import { ChiDinhGhiNhanVatTuThuoc, GoiKhongChietKhau, GridItemGhiNhanVTTHThuoc, YeuCauDichVuKyThuat } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { EnumNhomGoiDichVu, EnumTypeComponent, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";

import icCheck from '@iconify/icons-ic/twotone-check';
import icInfo from '@iconify/icons-ic/twotone-info';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icWarning from '@iconify/icons-ic/warning';
import icEdit from '@iconify/icons-ic/border-color';
import icReturn from '@iconify/icons-ic/arrow-upward';
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { PtttGhiNhanHoanTraPopupComponent } from "../pttt-ghi-nhan-hoan-tra-popup/pttt-ghi-nhan-hoan-tra-popup.component";
import { PtttGhiNhanCapNhatPopupComponent } from "../pttt-ghi-nhan-cap-nhat-popup/pttt-ghi-nhan-cap-nhat-popup.component";
import { EnumLoaiNoiChiDinh } from "src/app/shared/enum/phau-thuat-thu-thuat.enum";
import { PtttDpVtTuGoiPopupComponent } from "../pttt-dp-vt-tu-goi-popup/pttt-dp-vt-tu-goi-popup.component";

@Component({
    selector: "app-pttt-ghi-nhan",
    templateUrl: "./pttt-ghi-nhan.component.html",
    styleUrls: ["./pttt-ghi-nhan.component.scss"],
    animations: [stagger60ms, fadeInUp400ms],
})

export class PhauThuatThuThuatGhiNhanComponent implements OnInit {
    // isCheckXacNhanIn: boolean = false;
    checkAll: boolean = null;
    showGhiNhanCoBHYT: boolean = true;
    validationErrors: any;
    popupLoadingData: any;
    isDuocHuongBHYT: boolean = false;
    nhomGoiDichVu = EnumNhomGoiDichVu;
    currentLoaiKho: number;

    isCheckingDuocHuongBHYT: boolean = false;
    isGettingDataSource: boolean = false;
    isDeletingMeds: boolean = false;
    isAddingMeds: boolean = false;
    isExportingMeds: boolean = false;
    isChangingQuantity: boolean = false;
    isSelectingItem: boolean = false;
    isFirstTime: boolean = true;

    thongTinHoanTraThuocVatTu: PTTTHoanTraThuocVatTuVo = new PTTTHoanTraThuocVatTuVo();
    vatTuThuocEdit: PTTTVatTuThuoc = new PTTTVatTuThuoc();
    vatTuThuocDelete: PTTTVatTuThuoc = new PTTTVatTuThuoc();

    chiDinhGhiNhanVatTuThuoc: ChiDinhGhiNhanVatTuThuocPTTT = new ChiDinhGhiNhanVatTuThuocPTTT();
    goiKhongChietKhau: GoiKhongChietKhau[] = [];

    trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

    tongthanhtien: number = 0;
    tongtienBNThanhToan: number = 0;

    gridDataSourceVTTHThuoc: any = {};
    gridVTTHThuocColumns: any[] = [];

    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    format = "n2";

    groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'GiaiDoanPhauThuatDisplay', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
    gridVatTuYTeThuocColumns: any[] = [];
    dataSourceVatTuYTeThuoc = {
        data: [],
        total: 0,
    };

    radioVatTuThuoc = [
        { Value: 1, Text: 'Gây mê' },
        { Value: 2, Text: 'Phẫu thuật' },
        { Value: 3, Text: 'Hồi tỉnh' },
        { Value: 4, Text: 'Khác' }
    ]

    icCheck = icCheck;
    icInfo = icInfo;
    icDelete = icDelete;
    icWarning = icWarning;
    icEdit = icEdit;
    icReturn = icReturn;

    @Input() benhNhanHienTai: any;
    @Input() yeuCauDichVuKyThuatId: number = 0;
    @Output() outputSoDuTaiKhoanChanged = new EventEmitter();
    @Output() outputSoDuTaiKhoanConLaiChanged = new EventEmitter();

    @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;

    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('actionVTTHThuocTemplate', { static: true }) actionVTTHThuocTemplate: TemplateRef<any>;

    @ViewChild('lstVTTHThuocCombobox', { static: false }) lstVTTHThuocCombobox: ComboboxComponent;

    constructor(private dialog: MatDialog, private ref: ChangeDetectorRef, private scrollService: ScrollToService, private notificationService: NotificationService,
        private apiService: ApiService, private authService: AuthService, private el: ElementRef) { }

    ngOnInit() {
        console.log("benhNhanHienTai: ", this.benhNhanHienTai)
        this.gridVTTHThuocColumns = [
            { Field: "Action", Title: "", Width: 100, Template: this.actionVTTHThuocTemplate },
            { Field: "STT", Title: "#", Width: 40, Template: this.sttTemplate },
            // { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
            { Field: "GiaiDoanPhauThuatDisplay", Title: "GiaiDoanPhauThuat", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", Width: 120, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Kho sử dụng", Width: 100 },
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 60 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 90 },
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 90 },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 },
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.benhNhanHienTai && changes.benhNhanHienTai.currentValue) {
            this.validationErrors = null;
        }

        if (changes.yeuCauDichVuKyThuatId && changes.yeuCauDichVuKyThuatId.currentValue) {
            this.validationErrors = null;
            this.kiemTraDuocHuongBHYT(changes.yeuCauDichVuKyThuatId.currentValue);
        }

        this.getGridDataGhiNhanVTHHThuoc();
    }

    kiemTraDuocHuongBHYT(id: number) {
        this.isCheckingDuocHuongBHYT = true;

        this.apiService.get<any>(`PhauThuatThuThuat/CoDuocHuongBHYT?yeuCauDichVuKyThuatId=${id}`).subscribe(res => {
            this.isCheckingDuocHuongBHYT = false;
            this.isDuocHuongBHYT = res;

            if (this.benhNhanHienTai.CoBHYT && this.isDuocHuongBHYT) {
                this.showGhiNhanCoBHYT = true;
                if (this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT == null) {
                    this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = true;
                }
                // this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = true;
            } else {
                this.showGhiNhanCoBHYT = false;
                this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = false;
            }

            this.closePopupLoadingData();
        }, (err: ApiError) => {
            this.isCheckingDuocHuongBHYT = false;
            this.notificationService.showError(err.Message);
            this.closePopupLoadingData();
        });
    }

    chonDichVuTieuHao(event) {
        if (event) {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = event.DonViTinh;
        } else {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        }
    }

    themGhiNhanVatTuBenhVien(suaGhiNhan: boolean = false) {
        this.validationErrors = [];
        // this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.chiDinhGhiNhanVatTuThuoc.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId = this.yeuCauDichVuKyThuatId.toString();

        if (suaGhiNhan) {
            this.xuLyThemGhiNhanVatTuBenhVien();
        } else {
            var obj = {
                "YeuCauTiepNhanId": this.benhNhanHienTai.YeuCauTiepNhanId,
                "DichVuChiDinhId": JSON.stringify({ Id: this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId, NhomId: this.nhomGoiDichVu.DichVuKyThuat }),
                "DichVuGhiNhanId": this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId
            }

            this.apiService.post<boolean>("KhamBenh/KiemTraTrungGhiNhanVTTHThuoc", obj).subscribe(resultData => {
                if (resultData) {
                    this.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "VTTTH/Thuốc này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            this.xuLyThemGhiNhanVatTuBenhVien();
                        }
                        else {
                            this.huyGhiNhanVatTuBenhVien();
                        }
                    });
                }
                else {
                    this.xuLyThemGhiNhanVatTuBenhVien();
                }
            }, (err: ApiError) => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
    }
    dangXuLy:boolean=false;
    xuLyThemGhiNhanVatTuBenhVien() {
        if(this.dangXuLy)
            return;
        this.dangXuLy=true;
        this.isAddingMeds = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.chiDinhGhiNhanVatTuThuoc.LoaiNoiChiDinh = EnumLoaiNoiChiDinh.PhauThuatThuThuat;
        this.apiService.post<any>("PhauThuatThuThuat/ThemGhiNhanVatTuBenhVien", this.chiDinhGhiNhanVatTuThuoc).subscribe(result => {
            this.isAddingMeds = false;
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]));
            this.closePopupLoadingData();

            this.huyGhiNhanVatTuBenhVien();

            //Gộp vào xuất
            // this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.View, false);

            if (result && result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: result.SoDuTaiKhoan,
                    SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                })
            }

            if (result && result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                })
            }

            //Update xuất khi thêm
            this.xuatGhiNhanVatTuBenhVien();
            this.dangXuLy=false;
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.isAddingMeds = false;
            this.closePopupLoadingData();
            this.dangXuLy=false;
        });
    }

    huyGhiNhanVatTuBenhVien() {
        this.validationErrors = null;

        this.showPopupLoadingData(EnumTypeLoadingData.View);

        // let dichVuChiDinhId = this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId;
        // let dichVuChiDinhDisplay = this.chiDinhGhiNhanVatTuThuoc.TenDichVuChiDinh;
        // let khoId = this.chiDinhGhiNhanVatTuThuoc.KhoId;
        // let tenKho = this.chiDinhGhiNhanVatTuThuoc.TenKho;

        // this.chiDinhGhiNhanVatTuThuoc = new ChiDinhGhiNhanVatTuThuocPTTT();

        // this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId = this.yeuCauDichVuKyThuatId.toString();
        // this.chiDinhGhiNhanVatTuThuoc.TenDichVuChiDinh = dichVuChiDinhDisplay;
        // this.chiDinhGhiNhanVatTuThuoc.KhoId = khoId;
        // this.chiDinhGhiNhanVatTuThuoc.TenKho = tenKho;

        this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        this.chiDinhGhiNhanVatTuThuoc.TenDichVuGhiNhan = null;
        this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        this.chiDinhGhiNhanVatTuThuoc.SoLuong = null;

        this.kiemTraDuocHuongBHYT(this.yeuCauDichVuKyThuatId);
    }

    getGridDataGhiNhanVTHHThuoc(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.View, showLoadingPopup: boolean = true) {
        this.isGettingDataSource = true;

        if (showLoadingPopup && !this.isFirstTime) {
            this.showPopupLoadingData(typeLoadingData);
        } else {
            this.isFirstTime = false;
        }

        var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${this.yeuCauDichVuKyThuatId}`;
        this.apiService.get<any>(url).subscribe(res => {
            this.isGettingDataSource = false;

            if (res) {
                this.gridDataSourceVTTHThuoc = {
                    data: res,
                    total: res.length
                }
                this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc
                this.gridChildVTTHThuoc.setDataSource();
                this.closePopupLoadingData();
            }
            else {
                this.closePopupLoadingData();
            }
        }, (err: ApiError) => {
            this.isGettingDataSource = false;
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    xuatGhiNhanVatTuBenhVien() {
        this.isExportingMeds = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.yeuCauDichVuKyThuatId;

        this.apiService.post<any>("PhauThuatThuThuat/XuLyXuatYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(res => {
            this.isExportingMeds = false;
            //Xuất khi thêm
            // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xuất "]));
            this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.isExportingMeds = false;
            this.closePopupLoadingData();
            this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
        });
    }

    totalNotChietKhau(field: any) {
        switch (field) {
            case 'ThanhTien':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.ThanhTien, 0);
            case 'BHYTThanhToan':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BHYTThanhToan, 0);
            case 'SoTienMG':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.SoTienMG, 0);
            case 'BNThanhToan':
                return this.goiKhongChietKhau.reduce((sum, item) => sum + item.BNThanhToan, 0);
        }
    }

    XoaGhiNhanVTTHThuoc(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá ${dataItem.TenDichVuYeuCau} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                this.isDeletingMeds = true;
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);

                let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
                gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;

                this.apiService.post<any>("PhauThuatThuThuat/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
                    this.isDeletingMeds = false;

                    if (result && result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                        this.outputSoDuTaiKhoanChanged.emit({
                            SoDuTaiKhoan: result.SoDuTaiKhoan,
                            SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                        })
                    }

                    if (result && result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                        this.outputSoDuTaiKhoanConLaiChanged.emit({
                            SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                            SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                        })
                    }

                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa "]));
                    this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
                }, (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.isDeletingMeds = false;
                    this.closePopupLoadingData();
                });
            }
        });
    }

    XoaGhiNhanVTTHThuocKhiSuaSoLuong(dataItem, updateDetail) {
        this.isDeletingMeds = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;

        this.apiService.post<any>("PhauThuatThuThuat/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
            this.isDeletingMeds = false;

            if (result && result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: result.SoDuTaiKhoan,
                    SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                })
            }

            if (result && result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                })
            }

            // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa "]));
            let chiDinhGhiNhanVatTuThuocPTTT: ChiDinhGhiNhanVatTuThuocPTTT = new ChiDinhGhiNhanVatTuThuocPTTT();
            chiDinhGhiNhanVatTuThuocPTTT.DichVuChiDinhId = this.yeuCauDichVuKyThuatId.toString();
            chiDinhGhiNhanVatTuThuocPTTT.DichVuGhiNhanId = dataItem.DichVuGhiNhanId;
            chiDinhGhiNhanVatTuThuocPTTT.GiaiDoanPhauThuat = dataItem.GiaiDoanPhauThuat;
            chiDinhGhiNhanVatTuThuocPTTT.KhoId = dataItem.KhoId;
            chiDinhGhiNhanVatTuThuocPTTT.LaDuocPhamBHYT = dataItem.DuocHuongBaoHiem;
            chiDinhGhiNhanVatTuThuocPTTT.SoLuong = updateDetail.SoLuong;
            chiDinhGhiNhanVatTuThuocPTTT.TinhPhi = updateDetail.TinhPhi;
            chiDinhGhiNhanVatTuThuocPTTT.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
            chiDinhGhiNhanVatTuThuocPTTT.strDonViTinh = dataItem.DonViTinh;

            this.chiDinhGhiNhanVatTuThuoc = Object.assign({}, chiDinhGhiNhanVatTuThuocPTTT);
            this.themGhiNhanVatTuBenhVien(true);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.isDeletingMeds = false;
            this.closePopupLoadingData();
        });
    }

    // CapNhatGridItemGhiNhanVTTHThuoc(soluong: number, dataItem) {
    //     console.log(soluong)
    //     console.log(dataItem)
    //     //this.showPopupLoadingData(EnumTypeLoadingData.Update);

    //     let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
    //     gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
    //     gridItem.YeuCauDichVuKyThuatId = this.yeuCauDichVuKyThuatId;
    //     gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
    //     gridItem.SoLuong = soluong;

    //     // this.saveItemGhiNhanVatTuTieuHao(gridItem, true);
    // }

    timeoutVTTHThuoc = null;
    CapNhatGridItemGhiNhanVTTHThuoc(result, dataItem) {
        let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.yeuCauDichVuKyThuatId;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
        gridItem.IsCapNhatSoLuong = true;
        gridItem.IsCapNhatTinhPhi = true;
        gridItem.SoLuong = result.SoLuong;
        gridItem.TinhPhi = result.TinhPhi;

        var self = this;
        clearTimeout(self.timeoutVTTHThuoc);
        self.timeoutVTTHThuoc = setTimeout(function () {
            self.saveItemGhiNhanVatTuTieuHao(gridItem, true);
        }, 1000);
    }

    changeTinhPhiGhiNhanVTTH(tinhPhi: boolean, dataItem) {
        let gridItem = new GridItemGhiNhanVatTuThuocPTTT();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.yeuCauDichVuKyThuatId;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
        gridItem.IsCapNhatTinhPhi = true;
        gridItem.TinhPhi = tinhPhi;
        this.saveItemGhiNhanVatTuTieuHao(gridItem);
    }

    saveItemGhiNhanVatTuTieuHao(gridItem, showLoading: boolean = true) {
        this.isChangingQuantity = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.apiService.post<any>("PhauThuatThuThuat/CapNhatGridItemGhiNhanVTTHThuoc", gridItem).subscribe(res => {
            this.isChangingQuantity = false;

            if (res && res.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: res.SoDuTaiKhoan,
                    SoDuTaiKhoanDisplay: res.SoDuTaiKhoanDisplay
                })
            }

            if (res && res.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: res.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: res.SoDuTaiKhoanConLaiDisplay
                })
            }

            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));
            this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.isChangingQuantity = false;
            // this.closePopupLoadingData();
            this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
        });
    }

    totalGhiNhanVTTHThuoc(field: any) {
        if (this.gridDataSourceVTTHThuoc.data != undefined) {
            switch (field) {
                case 'ThanhTien':
                    return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }

        if (!this.popupLoadingData) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: mess }
            });
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData && !this.isCheckingDuocHuongBHYT && !this.isGettingDataSource && !this.isDeletingMeds && !this.isAddingMeds && !this.isExportingMeds && !this.isChangingQuantity) {
            this.popupLoadingData.close();
            this.popupLoadingData = null;
        }

        this.dialog.afterAllClosed.subscribe(result => {
            this.autoFocusElementFirst();
        });
    }

    autoFocusElementFirst() {
        if (!this.ref['destroyed']) {
            this.lstVTTHThuocCombobox.focusManual();
            this.ref.detectChanges();
        }

        // let type = "";

        // switch (elementType) {
        //     case EnumTypeComponent.KInput:
        //         type = ".k-input"; break;
        //     case EnumTypeComponent.KDropdown:
        //         type = ".k-dropdown-wrap"; break;
        //     default:
        //         type = ".k-input"; break;
        // }

        // const invalidControl = this.el.nativeElement.querySelector(type);
        // if (invalidControl) {
        //     invalidControl.focus();
        //     //invalidControl.blur();
        // }
    }

    changeKhoSuDung(evt) {
        this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        this.chiDinhGhiNhanVatTuThuoc.SoLuong = null;

        if (evt) {
            this.apiService.get<any>("KhamBenh/GetLoaiKhoAsync?khoId=" + evt).subscribe(resultData => {
                if (resultData !== undefined && resultData != null) {
                    this.currentLoaiKho = resultData;
                }
            })
        } else {
            this.currentLoaiKho = null;
        }
    }

    changeBHYT(evt) {
        this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
    }

    onKeyEnterAddItem(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                this.themGhiNhanVatTuBenhVien();
            }
            else {
                this.isSelectingItem = false;
            }
        }
    }

    openCombobox(event: any) {
        if (event) {
            this.isSelectingItem = true;
        }
        else {
            this.isSelectingItem = false;
        }
    }

    hoanTra(dataItem: any) {
        this.validationErrors = null;
        this.ref.detectChanges();

        this.thongTinHoanTraThuocVatTu.Id = dataItem.Id;

        this.thongTinHoanTraThuocVatTu.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        this.thongTinHoanTraThuocVatTu.KhoId = dataItem.KhoId;
        this.thongTinHoanTraThuocVatTu.SoLuong = dataItem.SoLuong;

        this.thongTinHoanTraThuocVatTu.CoYeuCauTraVTTuBenhNhanChiTiet = dataItem.CoYeuCauTraVTTuBenhNhanChiTiet;
        this.thongTinHoanTraThuocVatTu.DuocHuongBaoHiem = dataItem.DuocHuongBaoHiem;
        this.thongTinHoanTraThuocVatTu.YeuCauBenhVienId = dataItem.YeuCauId;
        this.thongTinHoanTraThuocVatTu.NhomYeuCauId = dataItem.NhomYeuCauId;
        // this.thongTinHoanTraThuocVatTu.LaTuTruc = dataItem.LaTuTruc;
        // this.thongTinHoanTraThuocVatTu.LaDichTruyen = dataItem.LaTuTruc;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.dialog.open(PtttGhiNhanHoanTraPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: this.thongTinHoanTraThuocVatTu,
            }).afterClosed().subscribe(() => {
                this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Update, false);
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    suaVatTuThuoc(dataItem: any) {
        this.validationErrors = null;
        this.ref.detectChanges();
        this.vatTuThuocEdit = Object.assign({}, dataItem);
        this.vatTuThuocEdit.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(PtttGhiNhanCapNhatPopupComponent, {
                disableClose: false,
                width: '600px',
                data: this.vatTuThuocEdit,
            }).afterClosed().subscribe((res) => {
                if (res) {
                    if (dataItem.LoaiKho == 5) {
                        this.XoaGhiNhanVTTHThuocKhiSuaSoLuong(dataItem, res);
                    } else {
                        this.CapNhatGridItemGhiNhanVTTHThuoc(res, dataItem);
                    }
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    themDuocPhamVatTuTuGoi() {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
            this.dialog.open(PtttDpVtTuGoiPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: { YeuCauDichVuKyThuatId: this.yeuCauDichVuKyThuatId, YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId }
            }).afterClosed().subscribe((result) => {
                this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.Add, false);
                if (result && result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                    this.outputSoDuTaiKhoanChanged.emit({
                        SoDuTaiKhoan: result.SoDuTaiKhoan,
                        SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                    })
                }

                if (result && result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                    this.outputSoDuTaiKhoanConLaiChanged.emit({
                        SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                        SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                    })
                }
            });
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
}
