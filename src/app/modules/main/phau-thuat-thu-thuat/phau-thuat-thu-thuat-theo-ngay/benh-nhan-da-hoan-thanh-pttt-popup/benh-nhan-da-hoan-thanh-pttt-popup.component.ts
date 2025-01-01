import { Component, OnInit, Inject, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import icClose from "@iconify/icons-ic/twotone-close";
import icDownward from "@iconify/icons-ic/baseline-cloud-download";
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { TheoDoiSauPhauThuatThuThuat, KhamTheoDoi, TrangThaiYeuCauDichVuKyThuatObjEnum, TrangThaiYeuCauKhamBenhObjEnum, PtttComboboxModel, ComboboxPttt, DichVuKyThuatChuaHoanThanhTrenHoanThanh } from '../../phau-thuat-thu-thuat.model';
import { EnumTrangThaiPhauThuatThuThuat, EnumTrangThaiTheoDoiSauPhauThuatThuThuat } from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { ViewImagePdfComponent } from 'src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component';
import { GoiKhongChietKhau, PhieuInXetNghiemVo } from '../../../kham-benh/kham-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { EnumTypeComponent, EnumTypeLoadingData, EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';
import { process, State, GroupDescriptor } from "@progress/kendo-data-query";
import { AccessUser } from 'src/app/shared/models/access-user.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { HttpParams } from '@angular/common/http';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { saveFile } from 'src/app/core/utilities/file-download.helper';
import { LichSuDvKhongThucHienComponent } from '../lich-su-dv-khong-thuc-hien/lich-su-dv-khong-thuc-hien.component';
import { LoaiDichVuKyThuat, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/dich-vu-ky-thuat.enum';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { PtttClsKqPopupComponent } from '../phau-thuat-thu-thuat-can-lam-san/pttt-cls-kq-popup/pttt-cls-kq-popup.component';
import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import { LayMauXetNghiemKetQuaPopupComponent } from '../../../xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { XemKetQuaCdhaTdcnPopupComponent } from '../../../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../../../xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { InPhieuKetQuaLayMau } from '../../../xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model';

@Component({
    selector: 'app-benh-nhan-da-hoan-thanh-pttt-popup',
    templateUrl: './benh-nhan-da-hoan-thanh-pttt-popup.component.html',
    styleUrls: ['./benh-nhan-da-hoan-thanh-pttt-popup.component.scss']
})
export class BenhNhanDaHoanThanhPtttPopupComponent implements OnInit {
    format = 'n1';
    gridSinhHieuColumns: any;
    gridColumnCanLamSangs: any;
    benhNhanHienTai: any;
    yeuCauTiepNhanId: number = 0;
    soLan: number = 0;
    yeuCauDichVuKyThuatId: number = 0;
    icClose = icClose;
    icRedEye = icRedEye;
    icDownward = icDownward;
    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    dichVuKyThuatChuaHoanThanhTrenHoanThanh = new DichVuKyThuatChuaHoanThanhTrenHoanThanh();
    thongTinKhamKhacPTTT: any;
    dataPopup: any;
    thongTinKhamKhacPTTTTheoDoi: any;
    dataCanLamSang: any;
    loaiTapTin = LoaiTapTin;

    gridDataSourceVTTHThuoc: any = {};
    gridVTTHThuocColumns: any[] = [];

    gridDataSource: any = [];
    thongTinKetLuanPTTT: any = null;
    goiKhongChietKhau: GoiKhongChietKhau[] = [];
    enumLoaiDichVuKyThuat = LoaiDichVuKyThuat;
    enumTrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat;
    trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

    groups: GroupDescriptor[] = [{
        field: 'Nhom', dir: null, aggregates: [
            { field: 'ThanhTien', aggregate: 'sum' },
            { field: 'Nhom', aggregate: 'min' },
            { field: 'BHYTThanhToan', aggregate: 'sum' },
            { field: 'SoTienMG', aggregate: 'sum' },
            { field: 'BNThanhToan', aggregate: 'sum' }]
    }];

    //begin thông tin kết luận
    theoDoiSauPhauThuatThuThuat: TheoDoiSauPhauThuatThuThuat;
    enumTheoDoi = EnumTrangThaiPhauThuatThuThuat;
    enumTrangThaiPhauThuatThuThuat = EnumTrangThaiTheoDoiSauPhauThuatThuThuat;
    thongTinBenhNhan: any;
    enumBacSiPhuTrach: EnumNhomChucDanh = EnumNhomChucDanh.BacSi;
    enumDieuDuongPhuTrach: EnumNhomChucDanh = EnumNhomChucDanh.DieuDuong;
    radioKetLuan = [
        { Value: EnumTrangThaiPhauThuatThuThuat.TheoDoi, Text: 'Theo dõi' },
        { Value: EnumTrangThaiPhauThuatThuThuat.ChuyenGiao, Text: 'Chuyển giao NB ' }
    ];
    //end thông tin kết luận

    //Begin theo doi
    khamTheoDois: KhamTheoDoi[] = [];
    //End theo doi

    //================================================Thông tin cận lâm sàng =================================================================
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate1', { static: true }) trangThaiTemplate1: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaGhiNhanTemplate', { static: true }) donGiaGhiNhanTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanTemplate', { static: true }) bhytThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanGroupFooterTemplate', { static: true }) bhytThanhToanGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('bhytThanhToanFooterTemplate', { static: true }) bhytThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMGTemplate', { static: true }) soTienMGTemplate: TemplateRef<any>;
    @ViewChild('soTienMGFooterTemplate', { static: true }) soTienMGFooterTemplate: TemplateRef<any>;
    @ViewChild('soTienMGGroupFooterTemplate', { static: true }) soTienMGGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanTemplate', { static: true }) bnThanhToanTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanFooterTemplate', { static: true }) bnThanhToanFooterTemplate: TemplateRef<any>;
    @ViewChild('bnThanhToanGroupFooterTemplate', { static: true }) bnThanhToanGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('tLMGTemplate', { static: true }) tLMGTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('nguoiThucHienTemplate', { static: true }) nguoiThucHienTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('GridChiDinh', { static: true }) gridChild: GridComponent;
    @ViewChild('xemKetQuaActionTemplate', { static: true }) xemKetQuaActionTemplate: TemplateRef<any>;
    @ViewChild('NhomBenhVienGroupFooterTemplate', { static: true }) NhomBenhVienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('lstPtttCmb', { static: false }) lstPtttCmb: ComboboxComponent;

    //================================================Thông tin cận lâm sàng =================================================================

    //chỉ sô sinh tồn
    gridChiSoSinhTonColumns: any[] = [];
    validationErrors: any;
    huyetApTamTruong: number;
    huyetApTamThu: number;
    @ViewChild('huyetApTemplate', { static: true }) huyetApTemplate: TemplateRef<any>;
    @ViewChild('thanNhietTemplate', { static: true }) thanNhietTemplate: TemplateRef<any>;
    @ViewChild('nhipTimTemplate', { static: true }) nhipTimTemplate: TemplateRef<any>;
    @ViewChild('nhipThoTemplate', { static: true }) nhipThoTemplate: TemplateRef<any>;
    @ViewChild('canNangTemplate', { static: true }) canNangTemplate: TemplateRef<any>;
    @ViewChild('chieuCaoTemplate', { static: true }) chieuCaoTemplate: TemplateRef<any>;
    @ViewChild('BMITemplate', { static: true }) BMITemplate: TemplateRef<any>;
    @ViewChild('glassgowTemplate', { static: true }) glassgowTemplate: TemplateRef<any>;
    @ViewChild('sPO2Template', { static: true }) sPO2Template: TemplateRef<any>;
    @ViewChild('gridThucHien', { static: false }) grid: GridComponent;

    //Ghi nhận vật tư/ thuốc
    // @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderVTTemplate', { static: true }) nhomGroupHeaderVTTemplate: TemplateRef<any>;
    @ViewChild('donGiaVTTemplate', { static: true }) donGiaVTTemplate: TemplateRef<any>;
    @ViewChild('donGiaVTFooterTemplate', { static: true }) donGiaVTFooterTemplate: TemplateRef<any>;
    @ViewChild('soLuongGhiNhanVTTHThuocTemplate', { static: true }) soLuongGhiNhanVTTHThuocTemplate: TemplateRef<any>;
    @ViewChild('thanhTienVTTemplate', { static: true }) thanhTienVTTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGhiNhanVTTHThuocGroupFooterTemplate', { static: true }) thanhTienGhiNhanVTTHThuocGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemVTTemplate', { static: true }) donGiaBaoHiemVTTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemGhiNhanVHTTTemplate', { static: true }) duocHuongBaoHiemGhiNhanVHTTTemplate: TemplateRef<any>;
    @ViewChild('gridVTTHThuoc', { read: GridComponent, static: false }) gridChildVTTHThuoc: GridComponent;
    @ViewChild('tinhPhiGhiNhanVHTTTemplate', { static: true }) tinhPhiGhiNhanVHTTTemplate: TemplateRef<any>;
    groupsGhiNhanVTHHThuoc: GroupDescriptor[] = [{ field: 'GiaiDoanPhauThuatDisplay', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

    coDichVuHuy: boolean = null;
    popupLoadingData: any;
    thongTinKhamTheoDoiData: string = null;
    thongTinKhamTheoDoiTemplateObj: any = null;
    gridKhamKhacColumns: any[] = [];
    gridNguoiThucHienColumns: any;
    currentUser: AccessUser;
    queryInfo: LookupQueryInfo = new LookupQueryInfo();
    // end chỉ số sinh tồn
    yeuCauTiepNhanSoLanPT: any[] = [];
    ptttCombobox = {} as PtttComboboxModel;
    dichVuKyThuatTuongTrinh: any;

    dataThongTinLichSuEkipPTTT: any;

    //BVHD-3860
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: Http,
        private dialog: MatDialog,
        private apiService: ApiService,
        private authService: AuthService,
        private broadcastService: BroadcastService,
        private notificationService: NotificationService
    ) {

    }

    ngOnInit() {
        //================================================thông tin cận lâm sàng =================================================================
        this.gridColumnCanLamSangs = [
            // { Field: "STT", Title: "#", Width: 40 },
            { Field: "Ma", Title: "Mã", Width: 60 },
            { Field: "Nhom", Title: "Nhóm", Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 100, ShowTooltip: true },
            { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 50, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate },
            { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 50, Template: this.noiThucHienTemplate },
            { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 50 },
            { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 },
            { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 100 },
            { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 100, Template: this.trangThaiTemplate1 },
            { Field: "XemKetQua", Title: "Xem KQ", Width: 100, Sortable: true, Template: this.xemKetQuaActionTemplate, TemplateGroupFooter: this.NhomBenhVienGroupFooterTemplate }
        ];

        this.gridSinhHieuColumns = [
            { Field: 'NhipTim', Title: 'Mạch (nhịp/phút)', Width: 80 },
            { Field: 'ThanNhiet', Title: 'Nhiệt độ (°C)', Width: 80 },
            { Field: 'HuyetAp', Title: 'Huyết áp (mmHg)', Width: 112 },
            { Field: 'NhipTho', Title: 'Nhịp thở (lần/phút)', Width: 80 },
            { Field: 'CanNang', Title: 'Cân nặng (kg)', Width: 80 },
            { Field: 'ChieuCao', Title: 'Chiều cao (cm)', Width: 80 },
            { Field: 'BMI', Title: 'BMI (kg/m²)', Width: 80 },
            { Field: 'Glassgow', Title: 'Glassgow', Width: 80 },
            { Field: 'SpO2', Title: 'SpO2 (%)', Width: 80 },
            { Field: 'NgayThucHien', Title: 'Ngày thực hiện', Width: 150 },
            { Field: 'Action', Title: '', Width: 50 }
        ];

        this.gridChiSoSinhTonColumns = [
            { Field: "NhipTim", Title: "Mạch (nhịp/phút)", Width: 100, Template: this.nhipTimTemplate },
            { Field: "ThanNhiet", Title: "Nhiệt độ (°C)", Width: 100, Template: this.thanNhietTemplate },
            { Field: "HuyetAp", Title: "Huyết áp (mmHg)", Width: 100, Template: this.huyetApTemplate },
            { Field: "NhipTho", Title: "Nhịp thở (lần/phút)", Width: 100, Template: this.nhipThoTemplate },
            { Field: "CanNang", Title: "Cân nặng (kg)", Width: 100, Template: this.canNangTemplate },
            { Field: "ChieuCao", Title: "Chiều cao (cm)", Width: 100, Template: this.chieuCaoTemplate },
            { Field: "BMI", Title: "BMI (kg/m²)", Width: 91, Template: this.BMITemplate },
            { Field: "Glassgow", Title: "Glassgow", Width: 120, Template: this.glassgowTemplate },
            { Field: "SpO2", Title: "SpO2(%)", Width: 120, Template: this.sPO2Template },
            { Field: "NhanVienThucHien", Title: "Nhân viên thực hiện", Width: 100 },
            { Field: "NgayThucHien", Title: "Ngày thực hiện", Width: 100 }
        ];

        this.gridKhamKhacColumns = [
            { Field: "BoPhan", Title: "Bộ Phận", Width: 100 },
            { Field: "MoTa", Title: "Mô Tả", Width: 100 },
        ];

        this.gridNguoiThucHienColumns = [
            { Field: "ChucDanh", Title: "Chức danh", Sortable: false, Width: 120 },
            { Field: "HoTen", Title: "Họ tên", Sortable: false, Width: 120 },
            { Field: "VaiTro", Title: "Vai trò", Sortable: false, Width: 120 },
        ];

        //Ghi nhận vật tư/ thuốc
        this.gridVTTHThuocColumns = [
            // { Field: "STT", Title: "#", Width: 40, Template: this.sttTemplate },
            // { Field: "MaDichVuYeuCau", Title: "Mã", Width: 60 },
            { Field: "GiaiDoanPhauThuatDisplay", Title: "GiaiDoanPhauThuat", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDichVuYeuCau", Title: "Tên vật tư/thuốc", Width: 120, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 60 },
            { Field: "TenKho", Title: "Kho sử dụng", Width: 100 },
            { Field: "TenDuongDung", Title: "Đường dùng", Width: 60 },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaGhiNhanTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59 , Template: this.soLuongGhiNhanVTTHThuocTemplate},
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienGhiNhanVTTHThuocFooterTemplate, TemplateGroupFooter: this.thanhTienGhiNhanVTTHThuocGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 100, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemGhiNhanVHTTTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiGhiNhanVHTTTemplate },
            { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 90 },
            { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 90 },
            // { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 150, },
            { Field: "ThoiGianChiDinhDisplay", Title: "Thời gian chỉ định", Width: 150, },
        ];

        this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };
        this.soLan = this.data.soLan;
        this.yeuCauTiepNhanId = this.data.yeuCauTiepNhanId;
        this.yeuCauDichVuKyThuatId = this.data.yeuCauKyThuatId;
        this.currentUser = this.authService.getAccessUser();

        //BVHD-3860: trường hợp chỉ có 1 dv mà dịch đó không thực hiện
        this.coDichVuHuy = this.data.laKhongThucHien == true;

        if (this.yeuCauTiepNhanId != null && this.data.yeuCauKyThuatId != null) {
            this.getLoadPage();
        }
    }

    getLoadPage() {
        this.getBenhNhanDangKham(this.yeuCauTiepNhanId);
        this.thongTinKetLuan(this.data.yeuCauKyThuatId);
        this.getThongTinEkipDaHoanThanhPTTT(this.data.yeuCauKyThuatId);
        this.yeuCauTiepNhanSoLanPT.push(this.yeuCauTiepNhanId);
        this.yeuCauTiepNhanSoLanPT.push(this.soLan);
        this.getDichVuKyThuatChuaHoanThanhTrenHoanThanh();
        this.getTheoDoi(this.data.yeuCauKyThuatId);
        this.getGridDataGhiNhanVTHHThuoc(this.data.yeuCauKyThuatId);
        if (this.currentUser.PhongBenhVienId != null && this.soLan != null) {
            const url = 'PhauThuatThuThuat/GetDichVuHoanThanh?noiThucHienId=' + this.currentUser.PhongBenhVienId + '&yctnId=' + this.yeuCauTiepNhanId + '&soLan=' + this.soLan;
            this.LoadDsPttt(url);
        }
    }

    LoadDsPttt(url: string) {
        if (this.soLan != null) {
            const self = this;
            self.apiService.post<Array<ComboboxPttt>>(url, self.queryInfo).subscribe(
                resultData => {
                    if (resultData !== undefined && resultData != null) {
                        self.ptttCombobox.lstPttt = [...resultData];
                        if (self.ptttCombobox != null && self.ptttCombobox.lstPttt.some(x => x)) {
                            self.ptttCombobox.ptttId = self.ptttCombobox.lstPttt[0].KeyId;
                            self.ptttCombobox.TenDv = self.ptttCombobox.lstPttt[0].TenDv;
                        }
                    }
                },
                (err) => {
                    self.notificationService.showError(err.Message);
                });
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

    chonDichVu(ev: any) {
        if (ev != null) {
            this.getThongTinEkipDaHoanThanhPTTT(ev.KeyId);
            this.data.yeuCauKyThuatId = ev.KeyId;
            if (this.grid != null) {
                this.grid._additionalSearchString = ev.KeyId;
                this.grid.setDataSource();
            }
            this.getGridDataGhiNhanVTHHThuoc(ev.KeyId);
        } else {
            this.dataThongTinLichSuEkipPTTT = null;
        }
    }

    OnOpen(isOpen: boolean) {
        if (isOpen && this.soLan != null) {
            const url = 'PhauThuatThuThuat/GetDichVuHoanThanh?noiThucHienId=' + this.currentUser.PhongBenhVienId + '&yctnId=' + this.yeuCauTiepNhanId + '&soLan=' + this.soLan;
            if (this.lstPtttCmb != null) {
                this.lstPtttCmb.url = url;
                this.lstPtttCmb.data = null;
                this.lstPtttCmb.queryInfo.Query = null;
            }
            return;
        }
        this.lstPtttCmb.url = '';
    }

    getBenhNhanDangKham(yeuCauTiepNhanId: number) {
        if (yeuCauTiepNhanId === 0) {
            this.benhNhanHienTai.Id = 0;
            return;
        }
        let currentAccessUser = this.authService.getAccessUser();
        currentAccessUser.PhongBenhVienId = parseInt(this.authService.getPhongLamViecId());
        if (currentAccessUser.PhongBenhVienId != 0) {
            this.apiService.get<any>(`PhauThuatThuThuat/GetThongTinBenhNhanTheoYeuCauTiepNhan?yeuCauTiepNhanId=${yeuCauTiepNhanId}&phongKhamHienTai=${currentAccessUser.PhongBenhVienId}`).subscribe((res) => {
                if (res) {
                    this.benhNhanHienTai = res;
                    this.thongTinKhamKhacPTTT = res;
                } else {
                    this.benhNhanHienTai = { Id: 0, YeuCauTiepNhan: {} };
                }
            }, (err) => {
                //this.notificationService.showError(err);
            });
        }
    }

    close() {
        this.dialog.closeAll();
    }

    getTheoDoiSauPhauThuatThuThuat(yeuCauTiepNhanId: number) {
        this.apiService.get<any>(`PhauThuatThuThuat/GetTheoDoiSauPhauThuatThuThuatByYeuCauTiepNhan?yeuCauTiepNhanId=${yeuCauTiepNhanId}`).subscribe(res => {
            if (res) {
                this.theoDoiSauPhauThuatThuThuat = res;
            }
        }, (err) => {
            //this.notificationService.showError(err.Message);
        })
    }

    getThongTinKhamKhacChiTiets(index: number) {
        if (this.thongTinKhamKhacPTTTTheoDoi != undefined && this.thongTinKhamKhacPTTTTheoDoi[index] != undefined) {
            this.thongTinKhamTheoDoiTemplateObj = JSON.parse(this.thongTinKhamKhacPTTTTheoDoi[index].ThongTinKhamTheoDoiTemplate);
            this.thongTinKhamTheoDoiData = this.thongTinKhamKhacPTTTTheoDoi[index].ThongTinKhamTheoDoiData;
            if (this.thongTinKhamTheoDoiData == null) {
                this.thongTinKhamTheoDoiTemplateObj = undefined;
            }
            this.bindDataDynamicComponent();
        }
    }

    bindDataDynamicComponent() {
        let strData = this.thongTinKhamTheoDoiData;
        if (strData != undefined && strData != null) {
            let dataObj = JSON.parse(strData);
            let itemTemp = null;
            if (this.thongTinKhamTheoDoiTemplateObj !== null) {
                this.thongTinKhamTheoDoiTemplateObj.ComponentDynamics.forEach(item => {
                    if (item.groupItems != undefined && item.groupItems != null && item.groupItems.length > 0) {
                        item.groupItems.forEach(element => {
                            itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == element.Id);
                            if (itemTemp != null) {
                                element.Value = itemTemp.Value;
                            }
                        });
                    }
                    else {
                        itemTemp = dataObj.DataKhamTheoTemplate.find(x => x.Id == item.Id);
                        if (itemTemp != null) {
                            item.Value = itemTemp.Value;
                        }
                    }
                });
            }
        }
    }

    thongTinKetLuan(id: number) {
        this.apiService.get<any>("PhauThuatThuThuat/DanhSachHoanThanhPTTT?yeuCauDichVuKyThuatId=" + id).subscribe(
            resultData => {
                if (resultData != undefined && resultData != null) {
                    this.thongTinKetLuanPTTT = resultData;
                }
            },
            (err) => {
                //this.notificationService.showError(err.Message);
            });
    }

    getThongTinEkipDaHoanThanhPTTT(id: number) {
        this.apiService.get<any>("PhauThuatThuThuat/ThongTinLichSuEkipPTTT?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dataThongTinLichSuEkipPTTT = resultData;
                this.apiService.get<any>("PhauThuatThuThuat/KiemTraCoDichVuHuy?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId).subscribe(result => {
                    if (result != undefined && result != null) {
                        this.coDichVuHuy = result;
                    }
                })
            }
        },
            (err) => {
                //this.notificationService.showError(err);
            });
    }

    kiemTraCoPhauThuat: boolean;
    getTheoDoi(id: number) {
        this.showPopupLoadingData();
        this.apiService.get<any>("PhauThuatThuThuat/ThongTinBenhNhanPTTTHoanThanh?yeuCauDichVuKyThuatId=" + id).subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                if (resultData.ThongTinKhamKhacChiTiet.length > 0) {
                    this.kiemTraCoPhauThuat = resultData.CoPhauThuat;
                    this.thongTinKhamKhacPTTTTheoDoi = resultData.ThongTinKhamKhacChiTiet;
                    this.getThongTinKhamKhacChiTiets(0);
                    this.bindDataDynamicComponent();
                }

                let obj = {
                    YeuCauTiepNhanId: this.yeuCauTiepNhanId,
                    LanThucThien: this.soLan,
                    PhongBenhVienId: this.currentUser.PhongBenhVienId
                }
                this.apiService.post<any>("PhauThuatThuThuat/DichVuDaTuongTrinhPTTT", obj).subscribe(res => {
                    if (res != undefined && res != null) {
                        this.dichVuKyThuatTuongTrinh = res;
                    }
                }, (err) => {
                    this.notificationService.showError(err);
                });
            }
            this.closePopupLoadingData();
        }
            ,
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                    this.closePopupLoadingData();
                }
                this.closePopupLoadingData();
            });
    }

    onDataBoundChild(event: any) {
        if (event.Data != null) {
            this.goiKhongChietKhau = event.Data;
            this.dataSource.data = event.Data;
        }
    }
    onTabSelect(event: any) {
        this.getThongTinKhamKhacChiTiets(event.index);
    }

    public totalNotChietKhau(field: any) {
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
    };

    xemHinhAnhBoPhanTonThuong(dataItem) {
        this.dialog.open(ViewImagePdfComponent, {
            disableClose: false,
            width: '1000px',
            height: '600px',
            data: { Type: "Image", Title: "Xem ảnh", Description: (dataItem.MoTa != undefined ? dataItem.MoTa : ""), Src: dataItem.LuocDo }
        });
    }

    setDataGridView() {
        this.gridDataSource = {
            data: this.goiKhongChietKhau,
            total: this.goiKhongChietKhau.length
        };
        this.closePopupLoadingData();
    }

    public state: State = {
        group: this.groups,
    };

    showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
        let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";

        switch (typeLoading) {
            case EnumTypeLoadingData.View:
                mess = 'Đang tải dữ liệu...'; break;
            case EnumTypeLoadingData.Update:
                mess = 'Đang lưu dữ liệu...'; break;
            case EnumTypeLoadingData.Delete:
                mess = 'Đang xóa dữ liệu...'; break;
            default: mess = 'Đang tải dữ liệu...';
        }

        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }

    getDichVuKyThuatChuaHoanThanhTrenHoanThanh() {
        this.apiService.get<any>(`PhauThuatThuThuat/GetDichVuKyThuatChuaHoanThanhTrenHoanThanhCanLamSang?yeuCauTiepNhanId=${this.yeuCauTiepNhanId}`).subscribe(res => {
            if (res) {
                this.dichVuKyThuatChuaHoanThanhTrenHoanThanh = res;
            }
        }, (err) => {

        });
    }

    OpenClickPopupXemKetQuaNhomXetNghiemCLS(valueNhom: any) {
        let yeuCauDichVuKyThuat = valueNhom.items.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.Nhom == valueNhom.value);

        if (yeuCauDichVuKyThuat.length > 0) {
            this.OpenClickPopupXemKetQuaCLS(yeuCauDichVuKyThuat[0]);
        }
        // let yeuCauKyThuat = valueNhom.items.filter(w => w.TrangThaiDichVu === "Đã thực hiện" && w.Nhom === valueNhom.value);
        // if (yeuCauKyThuat.length > 0) {
        //     this.OpenClickPopupXemKetQuaCLS(yeuCauKyThuat[0]);
        // }
        // else {
        //     this.notificationService.showError("Nhóm này chưa có kết quả");
        // }
    }

    // downloadFileNhomXetNghiem(valueNhom: any) {
    //     let yeuCauDichVuKyThuat = valueNhom.items.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.Nhom == valueNhom.value);

    //     if (yeuCauDichVuKyThuat.length > 0) {
    //         this.downloadFile(yeuCauDichVuKyThuat[0]);
    //     }

    //     // let yeuCauKyThuat = valueNhom.items.filter(w => w.TrangThaiDichVu === "Đã thực hiện" && w.Nhom === valueNhom.value);
    //     // if (yeuCauKyThuat.length > 0) {
    //     //     this.downloadFile(yeuCauKyThuat[0]);
    //     // }
    //     // else {
    //     //     this.notificationService.showError("Nhóm này chưa có kết quả");
    //     // }
    // }

    kiemTraCoKetQuaCLS(dataItem) {
        if (dataItem.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && dataItem.LoaiDichVuKyThuat != this.enumLoaiDichVuKyThuat.XetNghiem && dataItem.KetQuaCanLamSanPTTT.length > 0) {
            return true;
        }

        return false;
    }

    kiemTraCoFileDownloadCLS(dataItem) {
        if (dataItem.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && dataItem.LoaiDichVuKyThuat != this.enumLoaiDichVuKyThuat.XetNghiem) {
            let files = dataItem.KetQuaCanLamSanPTTT.filter(p => p.LoaiTapTin == this.loaiTapTin.Khac).length;

            return files > 0 ? true : false;
        }

        return false;
    }

    OpenClickPopupXemKetQuaCLS(dataItem) {
        this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: dataItem.Id
        }).afterClosed().subscribe(result => {
        });
    }


    hienThiDichVuKhongThucHien() {
        var self = this;
        self.dialog
            .open(LichSuDvKhongThucHienComponent, {
                disableClose: true,
                width: "1200px",
                data: { YeuCauTiepNhanId: this.yeuCauTiepNhanId, LanThucHien: this.soLan },
            });
    }

    kiemTraCoKetQuaCLSXetNghiem(lstYeuCauDichVuKyThuat) {
        // let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)
        // return result.length > 0 ? true : false;

        let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)
        //&& result[0].KetQuaCanLamSanPTTT.length > 0 ? true : false;
        return result.length > 0;
        // return result.length > 0 ? true : false;
    }
    
    inPhieuDuyetKetQua: InPhieuKetQuaLayMau = new InPhieuKetQuaLayMau();
    dataSource: any = { data: [], total: 0 }
    InPhieuXn() {
        let dialogRef: any;
        let dataChiTietXetNghiem: any[] = [];
        var yeuCauTiepNhanId = this.yeuCauTiepNhanId;      
        if (this.dataSource != null && this.dataSource.data.length > 0) {           
            this.apiService.post<any>("DuyetKetQuaXetNghiem/GetDataXetNghiemKetQuaIn?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
                (result) => {
                    if (result != null) {
                        result.forEach(element => {
                            if (element.ChiTietKetQuaXetNghiems != null) {
                                element.ChiTietKetQuaXetNghiems.forEach(elements => {
                                    dataChiTietXetNghiem.push(elements);
                                });
                            }

                        });
                        dialogRef = this.dialog.open(ChonLoaiKetQuaXetNghiemPopupComponent, {
                            disableClose: true,
                            width: '1000px',
                            // height: '300px',
                            data: dataChiTietXetNghiem,
                        }).afterClosed().subscribe((result) => {
                            if (result != undefined && result != null && result != "") {
                                if (result == 'No') {
                                    this.closePopupLoadingData();
                                }
                                else {
                                    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
                                    this.inPhieuDuyetKetQua.Header = true;
                                    this.inPhieuDuyetKetQua.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                                    this.inPhieuDuyetKetQua.LoaiIn = result.LoaiIn;
                                    this.inPhieuDuyetKetQua.ListIn = result.ListIn;
                                    //this.apiService.postExportPdf<any>('XetNghiem/ExportPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                                    this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
                                        arrHtml => {
                                            // const dateTimeNow = new Date();
                                            // CommonService.downLoadFile(resData, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + '.pdf');
                                            //   this.closePopupLoadingData();
                                            this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
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
                                }
                            }
                        });
                    };
                },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
        }

    }


    //ghi nhận vật tư thuốc
    getGridDataGhiNhanVTHHThuoc(yeuCauDichVuKyThuatId: any) {
        var url = `PhauThuatThuThuat/GetGridDataGhiNhanVTTHThuoc?yeuCauDichVuKyThuatId=${yeuCauDichVuKyThuatId}`;
        this.apiService.get<any>(url).subscribe(res => {
            if (res) {
                this.gridDataSourceVTTHThuoc = {
                    data: res,
                    total: res.length
                }
                if (this.gridChildVTTHThuoc !== undefined) {
                    this.gridChildVTTHThuoc.gridDataSource = this.gridDataSourceVTTHThuoc;
                    this.gridChildVTTHThuoc.setDataSource();
                }
            }
        }, (err: ApiError) => {
            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

}
