import { Component, OnInit, Input, ViewChild, TemplateRef, ViewEncapsulation, Output, EventEmitter, ElementRef, SimpleChanges, NgZone, HostListener } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { YeuCauGoiDichVu, ChiDinhDichVuKyThuatMultiselectViewModel, GoiKhongChietKhau, ListInChiDinh, GridItemYeuCauDichVuKyThuat, XoaChiDinhViewModel, GoiDichVu, TrangThaiYeuCauKhamBenhObjEnum, TrangThaiYeuCauDichVuKyThuatObjEnum, LookupCheckItem, ChiDinhGoiDichVuTheoBenhNhan, ChiDinhGoiDichVuTheoBenhNhanDichVuLoi, PhieuInXetNghiemVo, GoiLaiYeuCauXetNghiem, ChiDinhGoiDichVuThuongDungDichVuLoi, ChiDinhGoiDichVuThuongDung, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham, XetNghiemCovid } from '../../../kham-benh/kham-benh.model';
import { ApiService } from 'src/app/core/services/api.service';
import { EnumTypeComponent, EnumTypeLoadingData, EnumNhomGoiDichVu } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage, PtttMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ThemChiDinhDichVu, GridUpdate, ChiDinhDichVuGridVo } from '../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model';
import { NhomDichVu } from 'src/app/shared/constants/nhom-dich-vu-constant';
import { PtttClsInChiDinhComponent } from './pttt-cls-in-chi-dinh/pttt-cls-in-chi-dinh.component';
import { LoaiDichVuKyThuat, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/dich-vu-ky-thuat.enum';
import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import { Http, RequestOptions, ResponseContentType } from '@angular/http';
import { PtttClsGoiDichVuPopupComponent } from './pttt-cls-goi-dich-vu-popup/pttt-cls-goi-dich-vu-popup.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { LayMauXetNghiemKetQuaPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { PttClsChayLaiXnPopupComponent } from './ptt-cls-chay-lai-xn-popup/ptt-cls-chay-lai-xn-popup.component';
import { XemKetQuaCdhaTdcnPopupComponent } from '../../../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';

import icCheck from '@iconify/icons-ic/twotone-check';
import icInfo from '@iconify/icons-ic/twotone-info';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import icDownward from "@iconify/icons-ic/baseline-cloud-download";
import icCancel from '@iconify/icons-ic/outline-cancel';
import { HuyDichVuHuyThanhToanPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { DichVuKhuyenMaiPopupComponent } from '../../../dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { PopupChonLoaiInViewComponent } from '../../../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { XnCovidSarscov2PopupComponent } from '../../../kham-benh/kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { XnSarsCov2PopupComponent } from '../../../kham-benh/kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';

declare var jQuery: any;

@Component({
    selector: 'app-phau-thuat-thu-thuat-can-lam-san',
    templateUrl: './phau-thuat-thu-thuat-can-lam-san.component.html',
    styleUrls: ['./phau-thuat-thu-thuat-can-lam-san.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PhauThuatThuThuatCanLamSanComponent implements OnInit {
    timeout = null;
    popupLoadingData: any;
    enumLoaiDichVuKyThuat = LoaiDichVuKyThuat;
    enumTrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat;
    themChiDinhDichVuModel = new ThemChiDinhDichVu();
    phieuInXetNghiemVo = new PhieuInXetNghiemVo;
    ListNoiThucHien: any;
    loaiTapTin = LoaiTapTin;
    dataPopup: any;
    isUpdating: boolean = false;

    checkAll: boolean = null;
    showComboboxNhomDichVuKyThuat: boolean = true;
    FlagDuocHuongBaoHiem: boolean = false;
    isCheckXacNhanIn: boolean = false;
    isChangeData: boolean = false;
    coDichVuKhuyenMai: boolean = false;

    tongthanhtien = 0;
    tongtienBNThanhToan = 0;
    tongThanhTienGoiChietKhau = 0;

    trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();
    trangThaiYeuCauDichVuKyThuat: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

    yeuCauGoiDichVu: YeuCauGoiDichVu = new YeuCauGoiDichVu();
    lstDichVuTheoGoiDangChon: Array<LookupCheckItem> = [];
    chiDinhDichVuKyThuatMultiselect: ChiDinhDichVuKyThuatMultiselectViewModel = new ChiDinhDichVuKyThuatMultiselectViewModel();
    goiKhongChietKhau: GoiKhongChietKhau[] = [];
    listChonDichVuChiDinh: any[] = [];
    listChonDichVuChiDinhReLoad: any[] = [];
    thongTinLichSuYeuCauChayLai: any[] = [];

    gridDataSource: any = [];
    gridColumns: any[] = [];
    groups: GroupDescriptor[] = [{
        field: 'NhomTheoPhienXetNghiem', dir: null, aggregates: [
            { field: 'ThanhTien', aggregate: 'sum' },
            { field: 'BHYTThanhToan', aggregate: 'sum' },
            { field: 'SoTienMG', aggregate: 'sum' },
            { field: 'BNThanhToan', aggregate: 'sum' }]
    }];

    documentType: DocumentType = DocumentType.PhauThuatThuThuatTheoNgay;
    validationErrors: any;
    coGoiDichVu: boolean = false;

    icCheck = icCheck;
    icInfo = icInfo;
    icDelete = icDelete;
    icRedEye = icRedEye;
    icDownward = icDownward;
    icCancel = icCancel;

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

    messVuotQuaTamUng: string = "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";

    showbuttonLuuVaInPhieuXetNghiem:boolean = false;
    dichVuSarsCoVs:number[]=[];
    loaiBenhPhamText:string =null;
    loaiBenhPham:number =null;
    bieuHienLamSang:string =null;
    dichTeSarsCoV2:string =null;

    @Input() benhNhanHienTai: any;
    @Input() currentAccessUser: any;
    @Output() valueChangeShowTuongTrinh: EventEmitter<any> = new EventEmitter<any>();
    @Output() outputPhauThuatThuThuatCLSDataChanged = new EventEmitter();
    @Output() outputIsGetDataCanLamSanDone = new EventEmitter();
    @Output() outputPhauThuatThuThuatCLSDataChangedAfterAddAndRemove = new EventEmitter();
    @Output() outputPhauThuatThuThuatCLSOutOfYeuCauDichVuKyThuats = new EventEmitter();
    @Output() outputSoDuTaiKhoanChanged = new EventEmitter();
    @Output() outputSoDuTaiKhoanUocLuongConLaiChanged = new EventEmitter();

    @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('congTienGroupFooterTemplate', { static: true }) congTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('tongTienFooterTemplate', { static: true }) tongTienFooterTemplate: TemplateRef<any>;
    @ViewChild('nhomGiaTemplate', { static: true }) nhomGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>; //note
    @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
    @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('duocHuongBaoHiemTemplate', { static: true }) duocHuongBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

    @ViewChild('GridChiDinh', { static: true }) gridChild: GridComponent;
    @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;
    @ViewChild('benhPhamTemplate', { static: true }) benhPhamTemplate: TemplateRef<any>;

    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;

    constructor(private apiService: ApiService, private authService: AuthService, private notificationService: NotificationService,
                private dialog: MatDialog, private el: ElementRef, private ngZone: NgZone, private http: Http) { }

    ngOnInit() {
        this.coDichVuKhuyenMai = this.benhNhanHienTai.CoDichVuKhuyenMai;
        this.gridColumns = [
            { Field: "Action", Title: "", Width: 70, Template: this.actionTemplate },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
            { Field: "STT", Title: "#", Width: 30, Template: this.sttTemplate },
            { Field: "Ma", Title: "Mã", Width: 50 },
            // { Field: "Nhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NhomTheoPhienXetNghiem", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate }, //cheat tách nhóm XN ra nhiều phiên
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", MinWidth: 100, ShowTooltip: true, Template: this.tenDichVuTemplate },
            { Field: "LaDichVuTrongGoi", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
            { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
            // { Field: "TenTT43", Title: "Tên TT43", Width: 100, ShowTooltip: true },
            { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, TemplateGroupFooter: this.congTienGroupFooterTemplate, TemplateFooter: this.tongTienFooterTemplate, Template: this.nhomGiaTemplate },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Template: this.donGiaTemplate, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Template: this.soLuongTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
            { Field: "DonGiaBaoHiem", Title: "DG BHYT", Width: 90, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Template: this.duocHuongBaoHiemTemplate },
            { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 120, Template: this.noiThucHienTemplate },
            { Field: "TenNguoiThucHien", Title: "Người thực hiện", Width: 80 },
            { Field: "TrangThaiDichVu", Title: "Tình trạng", Width: 80, Template: this.trangThaiTemplate },
            { Field: "BenhPhamXetNghiem", Title: "Bệnh phẩm", Width: 100, Template: this.benhPhamTemplate },
            { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 110 },
            { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 100 }
        ];
        //this.kiemTraGoiDichVuCuaBenhNhan();
        this.getListDichVuSarsCoVs();
        this.getInfoSarsCoVTheoYeuCauTiepNhans();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.benhNhanHienTai && changes.benhNhanHienTai.currentValue) {
            this.validationErrors = null;
            this.getDataGoiDichVuDefault();
        }
    }

    onDataChange() {
        if (!this.isChangeData) {
            this.isChangeData = true;
            this.outputPhauThuatThuThuatCLSDataChanged.emit(true);
        }
    }

    getDataGoiDichVuDefault() {
        // this.showPopupLoadingData(EnumTypeLoadingData.View); //có popup bên component cha
        if(this.isUpdating) {
            this.showPopupLoadingData(EnumTypeLoadingData.View);
        }

        this.tongthanhtien = 0;
        this.tongtienBNThanhToan = 0;
        this.tongThanhTienGoiChietKhau = 0;

        let url = `PhauThuatThuThuat/GetDataDefaultDichVuKyThuat?yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`;
        this.apiService.get<any>(url).subscribe(resultData => {
            this.kiemTraGoiDichVuCuaBenhNhan();
            if (resultData) {
                this.goiKhongChietKhau = [];
                this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);

                this.setDataGridView();
                this.SelectcheckAllboxIn(true);
            } else {
                this.closePopupLoadingData();
            }

            this.isUpdating = false;
        }, () => {
            this.closePopupLoadingData();
            this.isUpdating = false;
        });
    }

    changeNhomDichVuKyThuat(event) {
        this.onDataChange();

        if (!event) {
            this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
        }
    }

    changeMultiDichVuKyThuat(event) {
        this.onDataChange();
        this.validationErrors = null;

        if(event && event.length > 0) {
            if(!this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat)
            {
                this.closeChangeDichVuKyThuat(true);
            }
        } else {
            this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
        }
    }

    closeChangeDichVuKyThuat(event, xuLyThemDichVu: boolean = false) {
        var self = this;

        if(event && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0)
        {
            self.validationErrors = null;

            let nhomIdTemp: number = 0;
            let tenNhomTemp: string = "";

            let arrDichVu = self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.slice();

            for (let element of arrDichVu) {
                let elementObj = JSON.parse(element);
                if (nhomIdTemp != 0 && nhomIdTemp != elementObj.NhomId) {
                    self.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = false;
                    self.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = null;
                    self.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
                    nhomIdTemp = 0;
                    
                    if (xuLyThemDichVu) {
                        self.themDichVuKyThuatMultiselect();
                    }
                    return;
                }
                else {
                    nhomIdTemp = elementObj.NhomId;
                    tenNhomTemp = elementObj.TenNhom;
                }
            }

            if(nhomIdTemp != 0)
            {
                self.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
                self.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = nhomIdTemp;
                self.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = tenNhomTemp;

                if (xuLyThemDichVu) {
                    self.themDichVuKyThuatMultiselect();
                }
            }
        }
    }

    huyDichVuKyThuatMultiselect() {
        this.isChangeData = false;
        this.outputPhauThuatThuThuatCLSDataChanged.emit(false);

        this.autoFocusElementFirst();

        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.chiDinhDichVuKyThuatMultiselect = new ChiDinhDichVuKyThuatMultiselectViewModel();
        this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
    }

    themDichVuKyThuatMultiselect() {
        var self = this;
        self.validationErrors = [];
        
        if (self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {
            self.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;

            self.apiService.post<boolean>('KhamBenh/KiemTraChiDinhDichVuKyThuatDaCoTheoYeuCauTiepNhan', self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: 'Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?' }
                    }).afterClosed().subscribe(result => {
                        if (result == 'Yes') {
                            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                        }
                    });
                } else {
                    self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                }
            }, (err: ApiError) => {
                err.ValidationErrors === null ? self.notificationService.showError(err.Message) : self.validationErrors = err.ValidationErrors;
            });
        }
        else {
            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
        }
    }

    SelectcheckAllboxIn(event: any) {
        let gridDataIn: any[] = [];
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }
        else {

            gridDataIn = this.gridChild.getAllDataFromDatasource();
            this.listChonDichVuChiDinh = [];
        }
        if (event == true) {

            gridDataIn.forEach(element => {
                element.isCheckRowItem = true;
                this.checkAll = true;

                let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId );
                if (index == -1) {
                    var chiDinh = new ListInChiDinh();
                    chiDinh.nhomChiDinhId = element.NhomId;
                    chiDinh.dichVuChiDinhId = element.Id;
                    this.listChonDichVuChiDinh.push(chiDinh);
                }
            })
        }
        else {
            gridDataIn.forEach(element => {
                element.isCheckRowItem = false;
            });

            this.listChonDichVuChiDinh = [];
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    checkboxIn(event: any, dataItem: any) {
        if (this.gridChild.gridDataSource.data == undefined) {
            this.listChonDichVuChiDinh = [];
        }

        let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == dataItem.Id && x.nhomChiDinhId == dataItem.NhomId);
        if (event == true) {
            if (index == -1) {
                var chiDinh = new ListInChiDinh();
                chiDinh.nhomChiDinhId = dataItem.NhomId;
                chiDinh.dichVuChiDinhId = dataItem.Id;
                this.listChonDichVuChiDinh.push(chiDinh);

                if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=> sp.TrangThaiDichVuId != 6).length) {
                    this.checkAll = true;
                }
            }
            else {
                if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=> sp.TrangThaiDichVuId != 6).length) {
                    this.checkAll = true;
                }
                else {
                    this.checkAll = false;
                }
            }

            dataItem.isCheckRowItem = true;
        }
        else {
            this.checkAll = false;
            if (index >= 0) {
                this.listChonDichVuChiDinh.splice(index, 1)
            }
        }
        if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.data.filter(sp=> sp.TrangThaiDichVuId != 6).length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }

    CapNhatGridItemDichVuKyThuat(dataItem, event, loaiCapNhat) {
        let gridItem = new GridItemYeuCauDichVuKyThuat();
        gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        gridItem.YeuCauDichVuKyThuatId = dataItem.Id;

        var showLoading = true;
        var reloadGrid = true;
        switch (loaiCapNhat) {
            case 'NhomGia':
                gridItem.NhomGiaDichVuKyThuatBenhVienId = event;
                gridItem.IsUpdateLoaiGia = true; break;
            case 'SoLan':
                gridItem.SoLan = event;
                gridItem.IsUpdateSoLan = true; break;
            case 'NoiThucHien':
                gridItem.NoiThucHienId = event;
                gridItem.IsUpdateNoiThucHien = true;
                if (event == undefined || event == null) {
                    dataItem.NguoiThucHienId = null;
                    dataItem.TenNguoiThucHien = null;
                }
                break;
            case 'NguoiThucHien':
                if (event == undefined || event == null) {
                    return;
                }
                gridItem.NguoiThucHienId = event;
                gridItem.IsUpdateNguoiThucHien = true;
                break;
            case "BenhPhamXetNghiem":
                gridItem.BenhPhamXetNghiem = event;
                gridItem.IsUpdateBenhPhamXetNghiem = true;
                break;

            case "SwapDichVuGoi":
                gridItem.LaDichVuTrongGoi = event;
                gridItem.IsSwapDichVuGoi = true;
                break;

            case "SwapDichVuKhuyenMai":
                gridItem.LaDichVuKhuyenMai = event;
                gridItem.IsSwapDichVuKhuyenMai = true;
                if(dataItem.NhomId == 1)
                {
                    gridItem.IsDichVuKham = true;
                }
                break;
        }

        if (loaiCapNhat == 'SoLan' || loaiCapNhat == "BenhPhamXetNghiem") {
            var self = this;
            var timeDelay = loaiCapNhat == "SoLan" ? 1000 : 2000;
            // self.saveItemDichVuKyThuat(gridItem);

            //Cập nhật sau 1s
            clearTimeout(self.timeout);
            self.timeout = setTimeout(function () {
                self.saveItemDichVuKyThuat(gridItem);
            }, timeDelay);
        }
        else {
            this.saveItemDichVuKyThuat(gridItem, showLoading, reloadGrid);
        }
    }

    xoaGoiDichVuKhac(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá dịch vụ ${dataItem.TenDichVu} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                if(dataItem.TrangThaiDichVuId != this.trangThaiYeuCauDichVuKyThuat.ChuaThucHien) {
                    this.notificationService.showError(PtttMessage.MessageCLSChuaThucHien);
                    return;
                }
        
                if(dataItem.NhanVienTaoYeuCauDichVuKyThuatId != this.currentAccessUser.Id) {
                    this.notificationService.showError(PtttMessage.MessageCLSNhanVienTaoYeuCauDichVuKyThuat);
                    return;
                }
        
                // if(dataItem.DaThanhToan == true) {
                //     this.notificationService.showError(PtttMessage.MessageCLSDaThanhToan);
                //     return;
                // }
        
                this.showPopupLoadingData(EnumTypeLoadingData.Delete);
        
                // gridItem.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                // gridItem.YeuCauDichVuKyThuatId = dataItem.Id;
                // gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        
                let modelUpdate = new GridUpdate();
                modelUpdate.yeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
                modelUpdate.maDichVuId = dataItem.Id;
                modelUpdate.nhom = NhomDichVu.DichVuKyThuat;
                modelUpdate.mucHuong = this.benhNhanHienTai.MucHuong;
                // modelUpdate.model = this.tiepNhanBenhNhan;
        
                this.validationErrors = null;
                this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(res => {
                    this.apiService.get<any>(`PhauThuatThuThuat/GetSoDuTaiKhoan?yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`).subscribe((soDuRes) => {
                        let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá dịch vụ CLS"]);

                        if (soDuRes.IsVuotQuaSoDuTaiKhoan) {
                            mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                            this.notificationService.showWarning(mess);
                        }
                        else {
                            this.notificationService.showSuccess(mess);
                        }

                        if (soDuRes.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                            this.outputSoDuTaiKhoanChanged.emit({
                                SoDuTaiKhoan: soDuRes.SoDuTaiKhoan, 
                                SoDuTaiKhoanDisplay: soDuRes.SoDuTaiKhoanDisplay
                            })
                        }

                        if (soDuRes.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                            this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                                SoDuTaiKhoanUocLuongConLai: soDuRes.SoDuTaiKhoanConLai,
                                SoDuTaiKhoanUocLuongConLaiDisplay: soDuRes.SoDuTaiKhoanConLaiDisplay
                            })
                        }

                        this.apiService.get<any>(`PhauThuatThuThuat/KiemTraConYeuCauDichVuKyThuatTaiPhong?phongBenhVienId=${this.currentAccessUser.PhongBenhVienId}&yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`).subscribe((res) => {
                            // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá dịch vụ CLS"]));
                            
                            if(res) {
                                this.getDataUpdateGripViewGoiKhac(null, false);
                                this.closePopupLoadingData();
                            } else {
                                this.outputPhauThuatThuThuatCLSOutOfYeuCauDichVuKyThuats.emit(false);
                                this.closePopupLoadingData();
                            }
                        }, (err) => {
                            this.closePopupLoadingData();
                            this.notificationService.showError(err);
                        });
                    }, (err) => {
                        this.closePopupLoadingData();
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    });
                }, (err: any) => {
                    this.closePopupLoadingData();
                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                })
            }
        });
    }

    xuLyKiemTraDichVuKyThuatTrungTrongGoi(){
        this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = this.benhNhanHienTai.YeuCauTiepNhanId;
        if(this.documentType == DocumentType.KhamBenhDangKham)
        {
            this.chiDinhDichVuKyThuatMultiselect.IsKhamBenhDangKham = true;
        }
        var self = this;
        // cập nhật xử lý
        //1: kiểm tra có dịch vụ nào trùng trong gói ko -> hiện popup thông báo
        //2: xử lý thêm dịch vụ ko có trong gói và có trong gói(nếu có)

        // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
        self.xuLyThemDichVuKyThuatMultiselect();
        // self.apiService.post<any>("KhamBenh/KiemTraDichVuKyThuatChiDinhCoTrongGoiCuaBenhNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
        //     if (resultData.Message != null && resultData.Message != '' && resultData.DichVuChiDinhCoTrongGois.length > 0) {
        //         self.dialog.open(ConfirmComponent, {
        //             disableClose: false,
        //             width: '800px',
        //             data: { Title: "Xác nhận", Message: resultData.Message }
        //         }).afterClosed().subscribe(result => {
        //             if (result == "Yes") {
        //                 self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatTuGois = resultData.DichVuChiDinhCoTrongGois;
        //             }
        //             self.xuLyThemDichVuKyThuatMultiselect();
        //         });
        //     }
        //     else {
        //         self.xuLyThemDichVuKyThuatMultiselect();
        //     }
        // },
        // (err: ApiError) => {
        //     self.validationErrors = err.ValidationErrors;
        //     if (err.Message != "Validation Failed") {
        //         self.notificationService.showError(err.Message);
        //     }
        // });
    }

    xuLyThemDichVuKyThuatMultiselect() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        
        //BVHD-3761
        //=======================================================================================================
        let arrDichVu = this.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.slice();
        arrDichVu.forEach(element => {
            let elementObj = JSON.parse(arrDichVu[0]);
            this.showbuttonLuuVaInPhieuXetNghiem = this.dichVuSarsCoVs.includes(elementObj.DichVuId);
            
        });
       
        if(this.showbuttonLuuVaInPhieuXetNghiem == true)
        {
            
            this.apiService.post
            this.dialog
            .open(XnSarsCov2PopupComponent, {
                width: "600px",
                data: { LoaiMauXetNghiem:this.loaiBenhPham,LoaiMauXetNghiemText:this.loaiBenhPhamText,BieuHienLamSang:this.bieuHienLamSang,DichTeSarsCoV2:this.dichTeSarsCoV2}
            })
            .afterClosed()
            .subscribe((result) => {
                if (result != undefined) {
                     this.chiDinhDichVuKyThuatMultiselect.BieuHienLamSang = result.BieuHienLamSang;
                     this.chiDinhDichVuKyThuatMultiselect.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                     this.ThemDichVuSarsCov2();
                }
                else{
                    this.ThemDichVuSarsCov2();
                }

            });
        //=======================================================================================================
        }
        else{
            this.apiService.post<any>("PhauThuatThuThuat/ThemYeuCauDichVuKyThuatMultiSelect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
                this.huyDichVuKyThuatMultiselect();
    
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
                if (result.IsVuotQuaSoDuTaiKhoan) {
                    mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                    this.notificationService.showWarning(mess);
                }
                else {
                    this.notificationService.showSuccess(mess);
                }
    
                if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                    this.outputSoDuTaiKhoanChanged.emit({
                        SoDuTaiKhoan: result.SoDuTaiKhoan, 
                        SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                    })
                }
    
                if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                    this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                        SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                        SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                    })
                }
    
                this.getDataUpdateGripViewGoiKhac(null, false);
            }, (err: ApiError) => {
                err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                this.closePopupLoadingData();
            });
        }
       
    }

    autoFocusElementFirst(elementType: EnumTypeComponent = EnumTypeComponent.KInput) {
        let type = '';
        switch (elementType) {
            case EnumTypeComponent.KInput:
                type = '.k-input'; break;
            case EnumTypeComponent.KDropdown:
                type = '.k-dropdown-wrap'; break;
            default:
                type = '.k-input'; break;
        }

        const invalidControl = this.el.nativeElement.querySelector(type);
        if (invalidControl) {
            invalidControl.focus();
        }
    }

    saveItemDichVuKyThuat(gridItem, showLoading: boolean = true, reloadGrid: boolean = true) {
        this.apiService.post<any>("PhauThuatThuThuat/CapNhatGridItemDichVuKyThuat", gridItem).subscribe(resultData => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));

            if (reloadGrid) {
                this.getDataUpdateGripViewGoiKhac(null, showLoading); // false
            }
        }, (err: ApiError) => {
            this.focusElementById('txtSoLuongDVKT' + gridItem.YeuCauDichVuKyThuatId);
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
        });
    }

    focusElementById(tagId: string){
        var $focused = jQuery('#'+tagId).find(".k-input");
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);
    }

    getDataUpdateGripViewGoiKhac(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.Update, showLoadingPopup: boolean = true) {
        if (showLoadingPopup) {
            this.showPopupLoadingData(typeLoadingData);
        }

        this.kiemTraGoiDichVuCuaBenhNhan();

        let url = `PhauThuatThuThuat/GetDataDefaultDichVuKyThuat?yeuCauTiepNhanId=${this.benhNhanHienTai.YeuCauTiepNhanId}`;
        this.apiService.get<any>(url).subscribe(resultData => {
            if (resultData) {
                let goiDichVuModel = new GoiDichVu();
                this.listChonDichVuChiDinh = []; // mỗi lần f5 là listChonDichVuChiDinh = 0
                goiDichVuModel.GoiKhacs = resultData;

                this.goiKhongChietKhau.splice(0, this.goiKhongChietKhau.length);
                if (this.gridDataSource != undefined && this.gridDataSource != null && this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
                    this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
                }
                this.gridChild.setDataSource();
                 console.log("gridDataSource",this.gridDataSource)
                var self = this;
                this.ngZone.run(() => {
                    resultData.forEach(element => {
                        self.goiKhongChietKhau.push(element);
                        element.isCheckRowItem = true;
                    });

                    self.isCheckXacNhanIn = self.goiKhongChietKhau.length > 0;
                    self.setDataGridView();
                    self.SelectcheckAllboxIn(true);
                });

                this.outputPhauThuatThuThuatCLSDataChangedAfterAddAndRemove.emit(true);
            } else {
                this.closePopupLoadingData();
            }
        }, () => {
            this.closePopupLoadingData();
        });
    }

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
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
        this.outputIsGetDataCanLamSanDone.emit(true);

        this.dialog.afterAllClosed.subscribe(result => {
            this.autoFocusElementFirst();
        });
    }

    setDataGridView() {
        this.gridDataSource = {
            data: this.goiKhongChietKhau,
            total: this.goiKhongChietKhau.length
        };

        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();

        this.tinhthanhtien(this.goiKhongChietKhau);
        this.closePopupLoadingData();
    }

    tinhthanhtien(modelGoiKoChietKhau: any) {
        this.tongthanhtien = 0;
        this.tongtienBNThanhToan = 0;

        modelGoiKoChietKhau.forEach(element => {
            if (element.ThanhTien !== null)
                this.tongthanhtien += element.ThanhTien;
            if (element.BNThanhToan !== null)
                this.tongtienBNThanhToan += element.BNThanhToan;
        });
    }

    xemKetQuaCLS(dataItem) {
        // this.dialog.open(PtttClsKqPopupComponent, {
        //     disableClose: false,
        //     width: '1000px',
        //     height:'auto',   
        //     data: { KetQuaCanLamSanPTTT: dataItem.KetQuaCanLamSanPTTT }
        // });

        this.dialog.open(XemKetQuaCdhaTdcnPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: dataItem.Id
        }).afterClosed().subscribe(result => { });
    }

    xemKetQuaCLSXetNghiem(val) {
        if(val.items.every(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)) {
            this.phieuInXetNghiemVo.PhienXetNghiemId = val.items[0].PhienXetNghiemId;
            this.phieuInXetNghiemVo.NhomDichVuBenhVienId = val.items[0].NhomDichVuBenhVienId;
            this.phieuInXetNghiemVo.HostingName = window.location.protocol == "http:" ? `http://${window.location.host}` : `https://${window.location.host}`;

            this.apiService.post<Array<string>>('KhamBenh/ExportPdfKetQuaXetNghiem', this.phieuInXetNghiemVo).subscribe(res => {
                    this.dialog.open(LayMauXetNghiemKetQuaPopupComponent, {
                        disableClose: false,
                        width: '1000px',
                        data: res
                    }).afterClosed().subscribe(result => {
                });
                    this.closePopupLoadingData();
                }, (err: ApiError) => {
                    if (err.Message !== 'Validation Failed') {
                        this.notificationService.showError(err.Message);
                    }

                    this.closePopupLoadingData();
                });
        }
    }

    kiemTraCoKetQuaCLS(dataItem) {
        if(dataItem.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && (dataItem.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.ChuanDoanHinhAnh || 
                                                                                              dataItem.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.ThamDoChucNang)) {
            return true;
        }

        return false;
    }

    kiemTraCoKetQuaCLSXetNghiem(lstYeuCauDichVuKyThuat) {
        // let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)
        // return result.length > 0 && result[0].KetQuaCanLamSanPTTT.length > 0 ? true : false;
        
        return lstYeuCauDichVuKyThuat.every(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem);
    }
    
    XacNhanIn(kieuin) {
        this.listChonDichVuChiDinhReLoad = [];
        let gridData = this.gridChild.getAllDataFromDatasource();

        gridData.forEach(ele => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == ele.Id && lstChiDinh.nhomChiDinhId == ele.NhomId) {
                    this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
                }
            });
        })
        let listGridSelect :any[]= [];
        gridData.forEach(elements => {
           this.listChonDichVuChiDinh.forEach(lstChiDinh => {
               if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId && elements.TrangThaiDichVuId != 4) {
                   listGridSelect.push(elements);
               }
           });
       });
        let dataIn = {
            YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId,
            // YeuCauKhamBenhid: this.benhNhanHienTai.Id,
            ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad,
            InChungChiDinh : kieuin,   
            hosting: window.location.protocol + "//" + window.location.host,
            KieuInChung : true ,
            EnumInChiDinhKhamBenhNgoaiTru: 1 , // để tạm,
            Loai:3,
            listGridSelect: listGridSelect
        }
        
        
        let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
            width: '1000px',
            data: { Model: dataIn }
        });
    }

    suDungGoiDichVu() {
        let dialogRef = this.dialog.open(PtttClsGoiDichVuPopupComponent, {
            width: '1000px',
            data: 'test'
        }).afterClosed().subscribe(result => {

        });
    }

    kiemTraGoiDichVuCuaBenhNhan() {
        this.apiService.get<boolean>("PhauThuatThuThuat/KiemTraDangKyGoiDichVuTheoBenhNhan?benhNhanId=" + this.benhNhanHienTai.BenhNhanId).subscribe(result => {
                this.coGoiDichVu = result;
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
    }

    xemGoiDichVu(){
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanHienTai.BenhNhanId, IsPTTT: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.IsPTTT = true;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("PhauThuatThuThuat/KiemTraDichVuTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
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

    xuLyThemNhomDichVuMarketing(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("PhauThuatThuThuat/ThemChiDinhGoiDichVuTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: result.SoDuTaiKhoan, 
                    SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                })
            }

            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                })
            }
            this.getDataUpdateGripViewGoiKhac(null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    formatTenNhom(val) {
        return val.substring(0, val.lastIndexOf('@'))
    }

    yeuCauChayLaiXetNghiem(val) {
        if(val.items.every(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)) {
            let goiLaiYeuCauXetNghiem = new GoiLaiYeuCauXetNghiem();

            goiLaiYeuCauXetNghiem.DanhSachGoiXetNghiemLais.push({
                PhienXetNghiemId: val.items[0].PhienXetNghiemId,
                NhomDichVuBenhVienId: val.items[0].NhomDichVuBenhVienId,
                NhomDichVu: val.items[0].Nhom,
                LanThucHien: val.items[0].LanThucHien,
                GoiLai: true
            });

            this.dialog.open(PttClsChayLaiXnPopupComponent, {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn yêu cầu chạy lại xét nghiệm này không ?",
                    GoiLaiYeuCauXetNghiem: goiLaiYeuCauXetNghiem
                },
            }).afterClosed().subscribe((res) => {
                if(res) {
                    this.apiService.post<any>("KhamBenh/GoiYeuCauChayLaiXetNghiem", res).subscribe((result) => {
                        if (result) {
                            this.notificationService.showSuccess("Yêu cầu chạy lại xét nghiệm thành công.");
                        } else {
                            this.notificationService.showError("Yêu cầu chạy lại xét nghiệm không thành công.");
                        }

                        this.isUpdating = true;
                        this.getDataGoiDichVuDefault();
                    }, (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    });
                }
            });
        }
    }

    huyCauChayLaiXN(phienXetNghiemId: any, nhomDichVuBenhVienId: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn hủy yêu cầu chạy lại xét nghiệm này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (res !== undefined && res !== null) {
                    this.apiService.post<any>(`PhauThuatThuThuat/HuyYeuCauChayLaiXetNghiemTheoNhomDichVu?phienXetNghiemId=${phienXetNghiemId}&nhomDichVuBenhVienId=${nhomDichVuBenhVienId}`).subscribe(
                    (resultData) => {
                        if (resultData) {
                            this.notificationService.showSuccess("Yêu cầu hủy chạy lại xét nghiệm thành công.");
                        } else {
                            this.notificationService.showError("Yêu cầu hủy chạy lại xét nghiệm không thành công.");
                        }

                        this.isUpdating = true;
                        this.getDataGoiDichVuDefault();
                    },
                    (err: ApiError) => {
                        err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    });
                }
            }
        });
    }

    lichSuYeuCauChayLai(lichSuPhienXetNghiemIds: any, nhomDichVuBenhVienId: any) {
        if(lichSuPhienXetNghiemIds && lichSuPhienXetNghiemIds.length > 0) {
            let lichSuChayLaiXetNghiem = {
                NhomDichVuBenhVienId: nhomDichVuBenhVienId,
                LichSuPhienXetNghiemIds: lichSuPhienXetNghiemIds
            };
            
            this.apiService.post<any>(`PhauThuatThuThuat/LichSuYeuCauChayLaiXetNghiem`, lichSuChayLaiXetNghiem).subscribe((res) => {
                if(res) {
                    this.thongTinLichSuYeuCauChayLai = res;
                }
            });
        } else {
            this.thongTinLichSuYeuCauChayLai = [];
        }
    }

    huyDichVuDaHuyThanhToan(dataItem)
    {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.dialog.open(HuyDichVuHuyThanhToanPopupComponent, {
                disableClose: false,
                width: '600px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc hủy dịch vụ này không?" }
              }).afterClosed().subscribe(res => {
                    if (res) {
                        this.showPopupLoadingData(EnumTypeLoadingData.Cancel);
                        
                        let xoaDichVu = {
                            YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId,
                            DichVuId: dataItem.Id,
                            LyDoHuyDichVu: res
                        }
        
                        this.apiService.post<any>(`PhauThuatThuThuat/HuyDichVuKyThuat`, xoaDichVu).subscribe(result => {
                            this.closePopupLoadingData();

                            if (result) {
                                if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                                    this.outputSoDuTaiKhoanChanged.emit({
                                        SoDuTaiKhoan: result.SoDuTaiKhoan, 
                                        SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                                    })
                                }
                    
                                if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                                    this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                                        SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                                        SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                                    })
                                }
                            }
                            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy dịch vụ "]));
                            this.isUpdating = true;
                            this.getDataGoiDichVuDefault();
                        }, (err: ApiError) => {
                            this.notificationService.showError(err.Message);
                            this.closePopupLoadingData();
                        });
                    }
              });
        }
        else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    cacDichVuKM() {
        let documentType ="PhauThuatThuThuatTheoNgay";
        if(this.documentType == DocumentType.KhamBenhDangKham)
        {
            documentType ="KhamBenhDangKham";
        }
        this.dialog.open(DichVuKhuyenMaiPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.benhNhanHienTai.BenhNhanId, DocumentType: documentType }
        }).afterClosed().subscribe(() => {
        });
    }

    //===================================BVHD-3825==========================================
    xemGoiDichVuKhuyenMai() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            // self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
            self.dialog.open(DichVuKhuyenMaiPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.benhNhanHienTai.BenhNhanId, IsPTTT: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
                    yeuCauGoiMarketing.IsPTTT = true;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("TiepNhanBenhNhan/KiemTraDichVuKhuyenMaiTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: {arrDichVuCanhBao: resultData, DocumentType: this.documentType}
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiMarketing.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing);
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

    xuLyThemNhomDichVuKhuyenMai(yeuCauGoiMarketing: ChiDinhGoiDichVuTheoBenhNhan) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoBenhNhanPhauThuat", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: result.SoDuTaiKhoan,
                    SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                })
            }

            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                })
            }

            this.getDataUpdateGripViewGoiKhac(null, false);
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


    // update nhóm dịch vụ thường dùng
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.PTTT;        
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType , boPhan:boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if (yeuCauGoiThuongDung) {
                    // yeuCauGoiThuongDung.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
                    yeuCauGoiThuongDung.LaPhauThuatThuThuat = true;
                    if (self.documentType == DocumentType.KhamBenhDangKham) {
                        yeuCauGoiThuongDung.IsKhamBenhDangKham = true;
                    }
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoi>>("KhamBenh/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
                            }).afterClosed().subscribe(dichVuKhongThems => {
                                if (dichVuKhongThems) {
                                    yeuCauGoiThuongDung.DichVuKhongThems = dichVuKhongThems;
                                    self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
                                }
                            });
                        }
                        else {
                            self.xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung);
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

    xuLyThemNhomDichVuThuongDung(yeuCauGoiThuongDung: ChiDinhGoiDichVuThuongDung) {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("PhauThuatThuThuat/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.benhNhanHienTai.SoDuTaiKhoan = result.SoDuTaiKhoan;
                this.benhNhanHienTai.SoDuTaiKhoanDisplay = result.SoDuTaiKhoanDisplay;
            }
            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanConLai) {
                this.benhNhanHienTai.SoDuTaiKhoanConLai = result.SoDuTaiKhoanConLai;
                this.benhNhanHienTai.SoDuTaiKhoanConLaiDisplay = result.SoDuTaiKhoanConLaiDisplay;
            }
            this.getDataUpdateGripViewGoiKhac(null, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        // enter
        if (event.keyCode == 13) {
            if (this.dialog.openDialogs.length > 0) {
                return;
            }
            event.preventDefault();
            this.closeChangeDichVuKyThuat(true, true);
        }
    }
    //BVHD-3761
    //=======================================================================================================
    InPhieuXN(){

        
        let yeuCauDichVuKyThuatIds:any[] = [];
        let gridData = this.gridChild.getAllDataFromDatasource();
        gridData.forEach(elements => {
            this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                if (lstChiDinh.dichVuChiDinhId == elements.Id && 
                    lstChiDinh.nhomChiDinhId == elements.NhomId && 
                    lstChiDinh.nhomChiDinhId == 2) {
                        yeuCauDichVuKyThuatIds.push(lstChiDinh.dichVuChiDinhId);
                }
            });
        });
        
        let hosting = window.location.protocol + "//" + window.location.host;
        let model={
            YeuCauDichVuKyThuatIds:yeuCauDichVuKyThuatIds,
            Hosting:hosting,
            YeuCauTiepNhanId:this.benhNhanHienTai.YeuCauTiepNhanId
        };
        if(yeuCauDichVuKyThuatIds.length == 0)
        {
            let mess = "Chưa chọn dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
            this.notificationService.showError(mess);
        }
        else{
            this.apiService
            .post<any>(
              "TiepNhanBenhNhan/InPhieuXetNghiemCovidBacSiKhacChiDinh",model
            )
            
            .subscribe((resultData) => {
                if(resultData != null && resultData !="")
                {
                    let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
                        width: '1000px',
                        height: 'auto',
                        data: { Model: resultData }
                      }).afterClosed().subscribe(result => {
                      });
                }
                else{
                    let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                    this.notificationService.showError(mess);
                }
            });
        }
        // let hosting =window.location.protocol + "//" + window.location.host;
        // this.apiService
        // .get<any>(
        //   "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
        //   this.benhNhanHienTai.YeuCauTiepNhanId +
        //   "&hostingName=" +
        //    hosting
        // )
        
        // .subscribe((resultData) => {
        //     if(resultData != null && resultData !="")
        //     {
        //         let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
        //             width: '1000px',
        //             height: 'auto',
        //             data: { Model: resultData }
        //           }).afterClosed().subscribe(result => {
        //           });
        //     }
        //     else{
        //         let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
        //         this.notificationService.showError(mess);
        //     }
        // });
      }
      //=======================================================================================================
           // BVHD-3761
    //================================================================================================
    getListDichVuSarsCoVs(){
        this.apiService.get<DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham>("TiepNhanBenhNhan/GetSarsCoVs").subscribe(
            resultData => {
                this.dichVuSarsCoVs = [];
                this.dichVuSarsCoVs =resultData.Ids;
                this.loaiBenhPham = resultData.LoaiMauXetNghiem
                this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText
            });
    }
    getInfoSarsCoVTheoYeuCauTiepNhans(){
        this.apiService.get<XetNghiemCovid>("TiepNhanBenhNhan/GetInfoSarsCoVTheoYeuCauTiepNhanNoiTru?id=" +  this.benhNhanHienTai.YeuCauTiepNhanId).subscribe(
            resultData => {
                this.bieuHienLamSang = resultData.BieuHienLamSang;
                this.dichTeSarsCoV2 = resultData.DichTeSarsCoV2;
            });
    }
    ThemDichVuSarsCov2(){
        this.apiService.post<any>("PhauThuatThuThuat/ThemYeuCauDichVuKyThuatMultiSelect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
            this.huyDichVuKyThuatMultiselect();

            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm "]);
            this.getInfoSarsCoVTheoYeuCauTiepNhans();
            if (result.IsVuotQuaSoDuTaiKhoan) {
                mess += this.messVuotQuaTamUng; //"Chỉ định này đã vượt quá số tiền trong tài khoản của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else {
                this.notificationService.showSuccess(mess);
            }

            if (result.SoDuTaiKhoan != this.benhNhanHienTai.SoDuTaiKhoan) {
                this.outputSoDuTaiKhoanChanged.emit({
                    SoDuTaiKhoan: result.SoDuTaiKhoan, 
                    SoDuTaiKhoanDisplay: result.SoDuTaiKhoanDisplay
                })
            }

            if (result.SoDuTaiKhoanConLai != this.benhNhanHienTai.SoDuTaiKhoanUocLuongConLai) {
                this.outputSoDuTaiKhoanUocLuongConLaiChanged.emit({
                    SoDuTaiKhoanUocLuongConLai: result.SoDuTaiKhoanConLai,
                    SoDuTaiKhoanUocLuongConLaiDisplay: result.SoDuTaiKhoanConLaiDisplay
                })
            }

            this.getDataUpdateGripViewGoiKhac(null, false);
        }, (err: ApiError) => {
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }
    //================================================================================================
}