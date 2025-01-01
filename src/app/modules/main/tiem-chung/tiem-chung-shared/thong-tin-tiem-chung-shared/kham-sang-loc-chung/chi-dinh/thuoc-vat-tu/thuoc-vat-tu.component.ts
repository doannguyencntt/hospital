import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { YeuCauDichVuKyThuat } from 'src/app/modules/main/tiem-chung/tiem-chung.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiDinhGhiNhanVatTuThuocTiemChung, GridItemGhiNhanVatTuThuocTiemChung, HoanTraThuocVatTuTiemChung, VatTuThuocTiemChung } from './thuoc-vat-tu.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { EnumLoaiNoiChiDinh } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ThuocVatTuCapNhatPopupComponent } from '../thuoc-vat-tu-cap-nhat-popup/thuoc-vat-tu-cap-nhat-popup.component';
import { ThuocVatTuHoanTraPopupComponent } from '../thuoc-vat-tu-hoan-tra-popup/thuoc-vat-tu-hoan-tra-popup.component';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import icReturn from '@iconify/icons-ic/arrow-upward';
import icAddCircle from '@iconify/icons-ic/add-circle';

@Component({
    selector: 'app-thuoc-vat-tu',
    templateUrl: './thuoc-vat-tu.component.html',
    styleUrls: ['./thuoc-vat-tu.component.scss']
})

export class ThuocVatTuComponent implements OnInit {
    validationErrors: any;
    popupLoadingData: any;
    isDuocHuongBHYT: boolean = false;
    currentLoaiKho: number;
    nhomGoiDichVu = EnumNhomGoiDichVu;
    format = "n2";

    isCheckingDuocHuongBHYT: boolean = false;
    isChangingQuantity: boolean = false;
    isGettingDataSource: boolean = false;
    isSelectingItem: boolean = false;
    isAddingMeds: boolean = false;
    isExportingMeds: boolean = false;
    isDeletingMeds: boolean = false;
    isFirstTime: boolean = true;
    showGhiNhanCoBHYT: boolean = true;

    chiDinhGhiNhanVatTuThuoc: ChiDinhGhiNhanVatTuThuocTiemChung = new ChiDinhGhiNhanVatTuThuocTiemChung();
    vatTuThuocEdit: VatTuThuocTiemChung = new VatTuThuocTiemChung();
    thongTinHoanTraThuocVatTu: HoanTraThuocVatTuTiemChung = new HoanTraThuocVatTuTiemChung();

    gridDataSourceVTTHThuoc: any = {
        data: [],
        total: 0
    };
    gridVTTHThuocColumns: any[] = [];

    icDelete = icDelete;
    icEdit = icEdit;
    icReturn = icReturn;
    icAddCircle = icAddCircle;

    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isThuocVatTuReadonly: boolean = false;
    @Input() isShowTitle: boolean = true;

    @Input() isShowHeaderAddItem: boolean = false;
    isShowAddDetail: boolean = false;

    @ViewChild('lstVTTHThuocCombobox', { static: false }) lstVTTHThuocCombobox: ComboboxComponent;
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
    
    constructor(private dialog: MatDialog, private ref: ChangeDetectorRef, 
                private notificationService: NotificationService, private apiService: ApiService, private authService: AuthService) { }

    ngOnInit() {
        this.isShowAddDetail = this.isShowHeaderAddItem == false;
        this.gridVTTHThuocColumns = [
            { Field: "Action", Title: "", Width: 100, Template: this.actionVTTHThuocTemplate, Hidden: this.isThuocVatTuReadonly },
            { Field: "STT", Title: "#", Width: 40, Template: this.sttTemplate },
            // { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
            { Field: "GiaiDoanPhauThuatDisplay", Title: "GiaiDoanPhauThuat", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", Width: 120, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Kho sử dụng", Width: 100},
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 60 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongGhiNhanVTTHThuocTemplate},
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate},
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 90 },
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 90 },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 },
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.validationErrors = null;
            // this.kiemTraDuocHuongBHYT(changes.thongTinBenhNhan.Id);
            this.kiemTraDuocHuongBHYT(this.thongTinBenhNhan.Id);
        };

        this.getGridDataGhiNhanVTHHThuoc();
    }

    getGridDataGhiNhanVTHHThuoc(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.View, showLoadingPopup: boolean = true) {
        this.isGettingDataSource = true;

        if (showLoadingPopup && !this.isFirstTime) {
            this.showPopupLoadingData(typeLoadingData);
        } else {
            this.isFirstTime = false;
        }

        var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${this.thongTinBenhNhan.Id}`;
        this.apiService.get<any>(url).subscribe(res => {
            this.isGettingDataSource = false;

            if (res && res.length > 0) {
                this.gridDataSourceVTTHThuoc = {
                    data: res,
                    total: res.length
                }
                this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc;
                this.gridChildVTTHThuoc.setDataSource();
                this.closePopupLoadingData();
            }
            else {
                this.gridDataSourceVTTHThuoc.data = [],
                this.gridDataSourceVTTHThuoc.total = 0;

                this.closePopupLoadingData();
            }
        }, (err: ApiError) => {
            this.isGettingDataSource = false;
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    kiemTraDuocHuongBHYT(id: number) {
        this.isCheckingDuocHuongBHYT = true;

        this.apiService.get<any>(`PhauThuatThuThuat/CoDuocHuongBHYT?yeuCauDichVuKyThuatId=${id}`).subscribe(res => {
            this.isCheckingDuocHuongBHYT = false;
            this.isDuocHuongBHYT = res;

            if(this.thongTinBenhNhan.YeuCauTiepNhan.CoBHYT && this.isDuocHuongBHYT) {
                this.showGhiNhanCoBHYT = true;
                if(this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT == null) {
                    this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = true;
                }
            } else {
                this.showGhiNhanCoBHYT = false;
                this.chiDinhGhiNhanVatTuThuoc.LaDuocPhamBHYT = false;
            }

            this.closePopupLoadingData();
        },(err: ApiError) => {
            this.isCheckingDuocHuongBHYT = false;
            this.notificationService.showError(err.Message);
            this.closePopupLoadingData();
        });
    }

    themGhiNhanVatTuBenhVien(suaGhiNhan: boolean = false) {
        this.validationErrors = [];
        // this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.chiDinhGhiNhanVatTuThuoc.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId = this.thongTinBenhNhan.Id.toString();

        if(suaGhiNhan) {
            this.xuLyThemGhiNhanVatTuBenhVien();
        } else {
            var obj = {
                "YeuCauTiepNhanId": this.thongTinBenhNhan.YeuCauTiepNhanId,
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
                        else
                        {
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
        this.showPopupLoadingData(EnumTypeLoadingData.Add);
        this.chiDinhGhiNhanVatTuThuoc.LoaiNoiChiDinh = EnumLoaiNoiChiDinh.TiemChung;
        
        this.apiService.post<any>("PhauThuatThuThuat/ThemGhiNhanVatTuBenhVien", this.chiDinhGhiNhanVatTuThuoc).subscribe(result => {
            this.isAddingMeds = false;
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]));
            this.closePopupLoadingData();

            this.huyGhiNhanVatTuBenhVien();
            
            //Gộp vào xuất
            // this.getGridDataGhiNhanVTHHThuoc(EnumTypeLoadingData.View, false);

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            //Update xuất khi thêm
            this.xuatGhiNhanVatTuBenhVien();
            this.dangXuLy=false;
        },(err: ApiError) => {
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

        // this.chiDinhGhiNhanVatTuThuoc = new ChiDinhGhiNhanVatTuThuocTiemChung();

        // this.chiDinhGhiNhanVatTuThuoc.DichVuChiDinhId = this.yeuCauDichVuKyThuatId.toString();
        // this.chiDinhGhiNhanVatTuThuoc.TenDichVuChiDinh = dichVuChiDinhDisplay;
        // this.chiDinhGhiNhanVatTuThuoc.KhoId = khoId;
        // this.chiDinhGhiNhanVatTuThuoc.TenKho = tenKho;

        this.chiDinhGhiNhanVatTuThuoc.DichVuGhiNhanId = null;
        this.chiDinhGhiNhanVatTuThuoc.TenDichVuGhiNhan = null;
        this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
        this.chiDinhGhiNhanVatTuThuoc.SoLuong = null;

        this.isShowAddDetail = this.isShowTitle ? false : true;

        this.kiemTraDuocHuongBHYT(this.thongTinBenhNhan.Id);
    }

    xuatGhiNhanVatTuBenhVien(){
        this.isExportingMeds = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        let gridItem = new GridItemGhiNhanVatTuThuocTiemChung();
        gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.thongTinBenhNhan.Id;

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

    XoaGhiNhanVTTHThuoc(dataItem){
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá ${dataItem.TenDichVuYeuCau} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                this.isDeletingMeds = true;
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);

                let gridItem = new GridItemGhiNhanVatTuThuocTiemChung();
                gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
                gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;

                this.apiService.post<any>("PhauThuatThuThuat/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
                    this.isDeletingMeds = false;

                    if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
                    }
        
                    if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                        this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
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

    XoaGhiNhanVTTHThuocKhiSuaSoLuong(dataItem, updateDetail){
        this.isDeletingMeds = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        let gridItem = new GridItemGhiNhanVatTuThuocTiemChung();
        gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;

        this.apiService.post<any>("PhauThuatThuThuat/XuLyXoaYeuCauGhiNhanVTTHThuoc", gridItem).subscribe(result => {
            this.isDeletingMeds = false;

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa "]));
            let chiDinhGhiNhanVatTuThuocTiemChung: ChiDinhGhiNhanVatTuThuocTiemChung = new ChiDinhGhiNhanVatTuThuocTiemChung();
            chiDinhGhiNhanVatTuThuocTiemChung.DichVuChiDinhId = this.thongTinBenhNhan.Id.toString();
            chiDinhGhiNhanVatTuThuocTiemChung.DichVuGhiNhanId = dataItem.DichVuGhiNhanId;
            chiDinhGhiNhanVatTuThuocTiemChung.KhoId = dataItem.KhoId;
            chiDinhGhiNhanVatTuThuocTiemChung.LaDuocPhamBHYT = dataItem.DuocHuongBaoHiem;
            chiDinhGhiNhanVatTuThuocTiemChung.SoLuong = updateDetail.SoLuong;
            chiDinhGhiNhanVatTuThuocTiemChung.TinhPhi = updateDetail.TinhPhi;
            chiDinhGhiNhanVatTuThuocTiemChung.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
            chiDinhGhiNhanVatTuThuocTiemChung.strDonViTinh = dataItem.DonViTinh;

            this.chiDinhGhiNhanVatTuThuoc = Object.assign({}, chiDinhGhiNhanVatTuThuocTiemChung);
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

    suaVatTuThuoc(dataItem: any) {
        this.validationErrors = null;
        this.ref.detectChanges();
        this.vatTuThuocEdit = Object.assign({}, dataItem);
        this.vatTuThuocEdit.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(ThuocVatTuCapNhatPopupComponent, {
                disableClose: false,
                width: '600px',
                data: this.vatTuThuocEdit,
            }).afterClosed().subscribe((res) => {
                if(res) {
                    if(dataItem.LoaiKho == 5) {
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

    timeoutVTTHThuoc = null;
    CapNhatGridItemGhiNhanVTTHThuoc(result, dataItem) {
        let gridItem = new GridItemGhiNhanVatTuThuocTiemChung();
        gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.thongTinBenhNhan.Id;
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

    hoanTra(dataItem: any) {
        this.validationErrors = null;
        this.ref.detectChanges();

        this.thongTinHoanTraThuocVatTu.Id = dataItem.Id;

        this.thongTinHoanTraThuocVatTu.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        this.thongTinHoanTraThuocVatTu.KhoId = dataItem.KhoId;
        this.thongTinHoanTraThuocVatTu.SoLuong = dataItem.SoLuong;

        this.thongTinHoanTraThuocVatTu.CoYeuCauTraVTTuBenhNhanChiTiet = dataItem.CoYeuCauTraVTTuBenhNhanChiTiet;
        this.thongTinHoanTraThuocVatTu.DuocHuongBaoHiem = dataItem.DuocHuongBaoHiem;
        this.thongTinHoanTraThuocVatTu.YeuCauBenhVienId = dataItem.YeuCauId;
        this.thongTinHoanTraThuocVatTu.NhomYeuCauId = dataItem.NhomYeuCauId;
        // this.thongTinHoanTraThuocVatTu.LaTuTruc = dataItem.LaTuTruc;
        // this.thongTinHoanTraThuocVatTu.LaDichTruyen = dataItem.LaTuTruc;

        if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
            this.dialog.open(ThuocVatTuHoanTraPopupComponent, {
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

    totalGhiNhanVTTHThuoc(field: any) {
        if (this.gridDataSourceVTTHThuoc.data != undefined) {
            switch (field) {
                case 'ThanhTien':
                    return this.gridDataSourceVTTHThuoc.data.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }

    changeTinhPhiGhiNhanVTTH(tinhPhi: boolean, dataItem) {
        let gridItem = new GridItemGhiNhanVatTuThuocTiemChung();
        gridItem.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = this.thongTinBenhNhan.Id;
        gridItem.YeuCauGhiNhanVTTHThuocId = dataItem.Id;
        gridItem.IsCapNhatTinhPhi = true;
        gridItem.TinhPhi = tinhPhi;
        this.saveItemGhiNhanVatTuTieuHao(gridItem);
    }

    saveItemGhiNhanVatTuTieuHao(gridItem, showLoading: boolean = true) {
        this.isChangingQuantity = true;
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        this.apiService.post<any>("PhauThuatThuThuat/CapNhatGridItemGhiNhanVTTHThuoc", gridItem).subscribe(result => {
            this.isChangingQuantity = false;

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
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
        if(event){
            this.isSelectingItem = true;
        }
        else{
            this.isSelectingItem = false;
        }
    }

    chonDichVuTieuHao(event){
        if(event) {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = event.DonViTinh;
        } else {
            this.chiDinhGhiNhanVatTuThuoc.strDonViTinh = null;
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

        if(!this.popupLoadingData) {
            this.popupLoadingData = this.dialog.open(LoadingComponent, {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: mess }
            });
        }
    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    chonHienThiThongTinThemGhiNhan(){
        this.isShowAddDetail = true;
    }
}