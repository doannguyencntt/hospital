import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { YeuCauDichVuKyThuat } from 'src/app/modules/main/tiem-chung/tiem-chung.model';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EnumNhomGoiDichVu, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/dich-vu-ky-thuat.enum';
import { HuyDichVuHuyThanhToanPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { EnumTrangThaiThanhToan } from 'src/app/shared/enum/trang-thai-thanh-toan.enum';
import { TiemChungSuDungGoiDichVuPopupComponent } from '../../../../tiem-chung-su-dung-goi-dich-vu-popup/tiem-chung-su-dung-goi-dich-vu-popup.component';
import { TiemChungChiDinhGoiDichVuTheoBenhNhan, TiemChungChiDinhGoiDichVuTheoBenhNhanDichVuLoi } from '../../../../tiem-chung-su-dung-goi-dich-vu-popup/tiem-chung-su-dung-goi-dich-vu-popup.model';
import { TiemChungNhomDichVuLoiPopupComponent } from '../../../../tiem-chung-nhom-dich-vu-loi-popup/tiem-chung-nhom-dich-vu-loi-popup.component';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import icCancel from '@iconify/icons-ic/outline-cancel';
import icInfo from '@iconify/icons-ic/twotone-info';
import { TrangThaiTiemChung } from 'src/app/shared/enum/tiem-vacxin.enum';
import { DichVuKhuyenMaiPopupComponent } from 'src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { ChiDinhGoiDichVuTheoBenhNhan } from 'src/app/modules/main/kham-benh/kham-benh.model';

@Component({
  selector: 'app-vac-xin',
  templateUrl: './vac-xin.component.html',
  styleUrls: ['./vac-xin.component.scss']
})

export class VacXinComponent implements OnInit {
    messVuotQuaTamUng: string = "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";
    validationErrors: any;
    loadingDataPopup: any;
    isEditing: boolean = false;
    isSelectingItem: boolean = false;
    coGoiDichVu: boolean = false;
    trangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat;
    trangThaiTiemChung = TrangThaiTiemChung;

    chiDinhVacxinTiemChung: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    currentDataItem: YeuCauDichVuKyThuat = null;
    coDichVuKhuyenMai: boolean = false;

    vacxinColumns: any[] = [];
    dataSourceVacxin = {
        data: [],
        total: 0,
    };

    icDelete = icDelete;
    icEdit = icEdit;
    icCancel = icCancel;
    icInfo = icInfo;

    @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
    @Input() thongTinBenhNhan: YeuCauDichVuKyThuat = new YeuCauDichVuKyThuat();
    @Input() isVacxinReadonly: boolean = false;

    @ViewChild('gridVacxin', { read: GridComponent, static: false }) gridVacxin: GridComponent;

    @ViewChild('actionVacxinTemplate', { static: true }) actionVacxinTemplate: TemplateRef<any>;
    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('tenVacxinTemplate', { static: true }) tenVacxinTemplate: TemplateRef<any>;
    @ViewChild('muiSoTemplate', { static: true }) muiSoTemplate: TemplateRef<any>;
    @ViewChild('viTriTiemTemplate', { static: true }) viTriTiemTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('lieuLuongTemplate', { static: true }) lieuLuongTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('nguoiChiDinhTemplate', { static: true }) nguoiChiDinhTemplate: TemplateRef<any>;
    @ViewChild('NguoiThucHienTemplate', { static: true }) NguoiThucHienTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('tongGiaFooterTemplate', { static: true }) tongGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;

    constructor(private dialog: MatDialog, private notificationService: NotificationService, private broadcastService: BroadcastService,
                private authService: AuthService, private apiService: ApiService) { }

    ngOnInit() {
        this.vacxinColumns = [
            { Field: "Action", Title: "", Width: 60, Template: this.actionVacxinTemplate, Hidden: this.isVacxinReadonly },
            { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
            { Field: "DichVuKyThuatBenhVienId", Title: "Tên Vắc xin", Width: 90, Template: this.tenVacxinTemplate, ShowTooltip: true },
            { Field: "YeuCauGoiDichVuKhuyenMaiId", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
            { Field: "MuiSo", Title: "Mũi", Width: 30, Template: this.muiSoTemplate },
            { Field: "ViTriTiem", Title: "Vị trí tiêm", Width: 90, Template: this.viTriTiemTemplate },
            { Field: "SoLuong", Title: "Số lượng", Width: 70, Template: this.soLuongTemplate },
            { Field: "LieuLuong", Title: "Liều lượng", Width: 70, Template: this.lieuLuongTemplate },
            { Field: "Gia", Title: "Đơn giá", Width: 90, Template: this.donGiaTemplate, TemplateFooter: this.tongTienFooterTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 90, Template: this.thanhTienTemplate, TemplateFooter: this.tongGiaFooterTemplate },
            { Field: "TrangThai", Title: "Trạng thái", Width: 90, Template: this.trangThaiTemplate },
            { Field: "NoiThucHienId", Title: "Nơi thực hiện", Width: 90, Template: this.noiThucHienTemplate },
            { Field: "NhanVienChiDinhId", Title: "Người chỉ định", Width: 100, Template: this.nguoiChiDinhTemplate },
            { Field: "NhanVienTiemId", Title: "Người thực hiện", Width: 100, Template: this.NguoiThucHienTemplate },
        ];

        this.coDichVuKhuyenMai = this.thongTinBenhNhan.CoDichVuKhuyenMai;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.thongTinBenhNhan && changes.thongTinBenhNhan.currentValue) {
            this.setDataForGrid();
        };
    }

    setDataForGrid() {
        this.dataSourceVacxin.data = this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.filter(p => p.TrangThaiThanhToan != EnumTrangThaiThanhToan.HuyThanhToan && !p.LyDoHuyDichVu);
        this.dataSourceVacxin.total = this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.filter(p => p.TrangThaiThanhToan != EnumTrangThaiThanhToan.HuyThanhToan && !p.LyDoHuyDichVu).length;
        this.kiemTraGoiDichVuCuaBenhNhan();
    }

    getTongGia() {
        if (this.dataSourceVacxin.data) {
            return this.dataSourceVacxin.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }

    themVacxin() {
        this.validationErrors = [];
        this.chiDinhVacxinTiemChung.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        this.chiDinhVacxinTiemChung.Id = this.thongTinBenhNhan.Id;
        this.chiDinhVacxinTiemChung.IsDichVuHuyThanhToan = false;

        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ['thêm']) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.showPopupLoadingData(EnumTypeLoadingData.Add);

                this.apiService.post<any>('TiemChung/GetThongTinDichVuKyThuatChoVacxin', this.chiDinhVacxinTiemChung).subscribe(res => {
                    this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.push(res);
                    this.setDataForGrid();
    
                    this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();
    
                    this.evtModelOnChange();
                    
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, [`Thêm vắcxin`]));
                    this.closePopupLoadingData();
                }, (err: any) => {
                    err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    this.closePopupLoadingData();
                });
            }
        });
    }

    suaVacxin(dataItem) {
        this.validationErrors = [];

        this.showPopupLoadingData(EnumTypeLoadingData.View);

        this.apiService.get<any>(`TiemChung/KiemTraXoaDichVuKyThuatChoVacxin?yeuCauDichVuKyThuatTiemChungId=${dataItem.Id}&IsSuaDichVuVacxin=true`).subscribe(res => {
            this.evtModelOnChange();
            this.closePopupLoadingData();

            this.isEditing = true;

            this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();

            this.cloneDataItem(dataItem, this.chiDinhVacxinTiemChung);

            this.currentDataItem = dataItem;
        }, (err: any) => {
            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    xoaVacxin(dataItem) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);

                this.apiService.get<any>(`TiemChung/KiemTraXoaDichVuKyThuatChoVacxin?yeuCauDichVuKyThuatTiemChungId=${dataItem.Id}`).subscribe(res => {
                    this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.splice(this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.findIndex(x => x === dataItem), 1);
                    // this.dataSourceVacxin.data.splice(this.dataSourceVacxin.data.findIndex(x => x === dataItem), 1);
                    this.setDataForGrid();

                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xoá']));
    
                    this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();
                    this.currentDataItem = null;
                    this.evtModelOnChange();
                    this.closePopupLoadingData();

                    this.broadcastService.broadcast({
                        name: 'XoaVacxinThanhCong',
                        message: true,
                    });
                }, (err: any) => {
                    err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    this.closePopupLoadingData();
                });

            }
        });
    }

    huyVacxin(dataItem) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(HuyDichVuHuyThanhToanPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
            }).afterClosed().subscribe(res => {
                if (res) {
                    dataItem.LyDoHuyDichVu = res;

                    let gridData = this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.filter(p => p.TrangThaiThanhToan != EnumTrangThaiThanhToan.HuyThanhToan && !p.LyDoHuyDichVu);

                    this.dataSourceVacxin.data = gridData;
                    this.dataSourceVacxin.total = gridData.length;

                    this.gridVacxin.setDataSource();
                    
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ "]));
                    this.evtModelOnChange();
                }
            });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    luuVacxin() {
        this.validationErrors = [];
        this.chiDinhVacxinTiemChung.YeuCauTiepNhanId = this.thongTinBenhNhan.YeuCauTiepNhanId;
        this.chiDinhVacxinTiemChung.Id = this.thongTinBenhNhan.Id;
        this.chiDinhVacxinTiemChung.IsDichVuHuyThanhToan = false;
        
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: CommonService.format(SystemMessage.MessConfirm, ['sửa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.showPopupLoadingData(EnumTypeLoadingData.Add);

                this.apiService.post<any>('TiemChung/GetThongTinDichVuKyThuatChoVacxin', this.chiDinhVacxinTiemChung).subscribe(res => {
                    this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.push(res);
                    this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.splice(this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.findIndex(x => x === this.currentDataItem), 1);

                    this.setDataForGrid();
    
                    this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();
                    this.currentDataItem = null;
                    this.isEditing = false;
    
                    this.evtModelOnChange();
                    
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Sửa']));
                    this.closePopupLoadingData();
                }, (err: any) => {
                    err.ValidationErrors == null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    this.closePopupLoadingData();
                });
            }
        });
    }

    cloneDataItem(src, des: YeuCauDichVuKyThuat) {
        des.Id = src.Id;
        des.YeuCauTiepNhanId = src.YeuCauTiepNhanId;
        des.YeuCauDichVuKyThuatKhamSangLocTiemChungId = src.YeuCauDichVuKyThuatKhamSangLocTiemChungId;
        des.DichVuKyThuatBenhVienId = src.DichVuKyThuatBenhVienId;
        des.DichVuKyThuatBenhVienDisplay = src.DichVuKyThuatBenhVienDisplay;
        des.TiemChung.DuocPhamBenhVienId = src.TiemChung.DuocPhamBenhVienId;
        des.TiemChung.MuiSo = src.TiemChung.MuiSo;
        des.TiemChung.ViTriTiem = src.TiemChung.ViTriTiem;
        des.TiemChung.ViTriTiemDisplay = src.TiemChung.ViTriTiemDisplay;
        des.TiemChung.SoLuong = src.TiemChung.SoLuong;
        des.Gia = src.Gia;
        des.ThanhTien = src.ThanhTien;
        des.TrangThai = src.TrangThai;
        des.TrangThaiDisplay = src.TrangThaiDisplay;
        des.NoiThucHienId = src.NoiThucHienId;
        des.NoiThucHienDisplay = src.NoiThucHienDisplay;
        des.NhanVienChiDinhId = src.NhanVienChiDinhId;
        des.NhanVienChiDinhDisplay = src.NhanVienChiDinhDisplay;
        des.TiemChung.NhanVienTiemId = src.TiemChung.NhanVienTiemId;
        des.TiemChung.NhanVienTiemDisplay = src.TiemChung.NhanVienTiemDisplay;
        des.TiemChung.ThoiDiemTiem = src.TiemChung.ThoiDiemTiem;
        des.TiemChung.ThoiDiemTiemDisplay = src.TiemChung.ThoiDiemTiemDisplay;
        des.TiemChung.LieuLuong = src.TiemChung.LieuLuong;

        des.YeuCauGoiDichVuId = src.YeuCauGoiDichVuId
        des.TenGoiDichVu = src.TenGoiDichVu;
        des.DonGiaTruocChietKhau = src.DonGiaTruocChietKhau;
        des.DonGiaSauChietKhau = src.DonGiaSauChietKhau;

        des.SoTienMienGiam = src.SoTienMienGiam;
        des.YeuCauGoiDichVuKhuyenMaiId = src.YeuCauGoiDichVuKhuyenMaiId;
        des.NhomGiaDichVuKyThuatBenhVienId = src.NhomGiaDichVuKyThuatBenhVienId;

        let arrMienGiam = [];
        src.MienGiamChiPhis.forEach(val => arrMienGiam.push(Object.assign({}, val)));
        des.MienGiamChiPhis = arrMienGiam;
    }

    huy() {
        this.isEditing = false;
        this.validationErrors = [];

        this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();
        this.currentDataItem = Object.assign({}, null);
    }

    evtVacxinChange(evt) {
        if(evt) {
            this.chiDinhVacxinTiemChung.DichVuKyThuatBenhVienDisplay = evt.DisplayName;
            this.chiDinhVacxinTiemChung.TiemChung.DuocPhamBenhVienId = evt.DuocPhamBenhVienId;
            this.chiDinhVacxinTiemChung.NhomDichVuBenhVienId = evt.NhomDichVuBenhVienId;
        } else {
            this.chiDinhVacxinTiemChung.DichVuKyThuatBenhVienDisplay = null;
            this.chiDinhVacxinTiemChung.TiemChung.DuocPhamBenhVienId = null;
            this.chiDinhVacxinTiemChung.NhomDichVuBenhVienId = null;
        }

        this.chiDinhVacxinTiemChung.NoiThucHienId = null;
        this.chiDinhVacxinTiemChung.NoiThucHienDisplay = null;
    }

    evtViTriTiemChange(evt) {
        this.chiDinhVacxinTiemChung.TiemChung.ViTriTiemDisplay = evt ? evt.DisplayName : null;
    }

    evtNoiThucHienChange(evt) {
        this.chiDinhVacxinTiemChung.NoiThucHienDisplay = evt ? evt.DisplayName : null;
    }

    evtModelOnChange() {
        this.thongTinBenhNhan.isDataKhamSangLocChungChange = true;
    }

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = "";
        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = "Đang tải dữ liệu..."; break;
            case EnumTypeLoadingData.Update:
                mess = "Đang lưu dữ liệu..."; break;
            case EnumTypeLoadingData.Delete:
                mess = "Đang xóa dữ liệu..."; break;
            case EnumTypeLoadingData.Cancel:
                mess = "Đang hủy dữ liệu..."; break;
            default: mess = "Đang tải dữ liệu...";
        }

        this.loadingDataPopup = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.loadingDataPopup) {
            this.loadingDataPopup.close();
        }
    }

    onKeyEnterAddItem(event: any) {
        if (event.key == "Enter" && !this.isSelectingItem) {
            if (this.isSelectingItem != true) {
                if(!this.isEditing) {
                    this.themVacxin();   
                } else {
                    this.luuVacxin();
                }
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

    kiemTraGoiDichVuCuaBenhNhan() {
        this.apiService.get<boolean>("TiemChung/KiemTraDangKyGoiDichVuVacxinTheoBenhNhan?benhNhanId=" + this.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId).subscribe(result => {
                this.coGoiDichVu = result;
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }

    xemGoiDichVu(){
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(TiemChungSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { 
                    DocumentType: self.documentType, 
                    BenhNhanId: self.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId,
                    DanhSachDichVu: this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats     
                }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.NoiTruPhieuDieuTriId = this.thongTinBenhNhan.NoiTruPhieuDieuTriId;

                    self.apiService.post<Array<TiemChungChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("TiemChung/KiemTraDichVuVacxinTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(TiemChungNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing);
                        }
                    },
                    (err: ApiError) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing: TiemChungChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);

        // yeuCauGoiMarketing.YeuCauDichVuKyThuatKhamSangLocTiemChungId = this.thongTinBenhNhan.KhamSangLocTiemChung.Id;

        yeuCauGoiMarketing.NoiTruPhieuDieuTriId = this.thongTinBenhNhan.NoiTruPhieuDieuTriId;
        this.apiService.post<any>("TiemChung/ThemChiDinhGoiDichVuVacxinTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            this.closePopupLoadingData();

            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi) {
                mess += ` ${this.messVuotQuaTamUng}`; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            if (result && result.YeuCauDichVuKyThuats) {
                result.YeuCauDichVuKyThuats.forEach(item => this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.push(item));
                this.setDataForGrid();

                this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();

                this.evtModelOnChange();
            }
            // this.broadcastService.broadcast({
            //     name: 'TiemChungThemChiDinhGoiDichVuTheoBenhNhanThanhCong',
            //     message: true,
            // });
            // this.getDataUpdateGripViewGoiKhac(null, false);
        }, (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;

            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
        });
    }


    //===================================BVHD-3825==========================================
    xemGoiDichVuKhuyenMai() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            let dichVuDangChons = [];
            this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.forEach(element => {
                if(element.YeuCauGoiDichVuKhuyenMaiId != null && element.YeuCauGoiDichVuKhuyenMaiId != 0)
                {
                    let dichVu = {
                        Id: element.Id,
                        DichVuBenhVienId: element.DichVuKyThuatBenhVienId,
                        NhomGiaId: element.NhomGiaDichVuKyThuatBenhVienId,
                        NhomId: EnumNhomGoiDichVu.DichVuKyThuat, // là nhóm dịch vụ kỹ thuật
                        YeuCauGoiDichVuId: element.YeuCauGoiDichVuKhuyenMaiId,
                        SoLuong: element.SoLan
                    };
                    dichVuDangChons.push(dichVu);
                }
            });
            self.dialog.open(DichVuKhuyenMaiPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.thongTinBenhNhan.YeuCauTiepNhan.BenhNhanId, DichVuDangChons: dichVuDangChons, IsVacxin: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.thongTinBenhNhan.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.NoiTruPhieuDieuTriId = self.thongTinBenhNhan.NoiTruPhieuDieuTriId;
                    yeuCauGoiMarketing.IsVacxin = true;
                    self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                }
            });
        }
        else {
            self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoKhamSangLoc", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan || result.IsVuotQuaBaoLanhGoi) {
                mess += ` ${this.messVuotQuaTamUng}`; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result && result.SoDuTaiKhoan != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoan) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoan;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanDisplay;
            }

            if (result && result.SoDuTaiKhoanConLai != this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai) {
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.thongTinBenhNhan.YeuCauTiepNhan.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }

            if (result && result.YeuCauDichVuKyThuats) {
                result.YeuCauDichVuKyThuats.forEach(item => this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats.push(item));
                this.setDataForGrid();

                this.chiDinhVacxinTiemChung = new YeuCauDichVuKyThuat();

                this.evtModelOnChange();
            }
            this.closePopupLoadingData();
            console.log(this.thongTinBenhNhan.KhamSangLocTiemChung.YeuCauDichVuKyThuats);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }
    //======================================================================================
}