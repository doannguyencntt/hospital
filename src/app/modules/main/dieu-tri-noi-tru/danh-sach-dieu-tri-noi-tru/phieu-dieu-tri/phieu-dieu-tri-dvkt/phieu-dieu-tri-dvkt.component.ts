import { Component, ElementRef, HostListener, Input, NgZone, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupDescriptor, State } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { PtttMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTypeComponent, EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ChiDinhDichVuKyThuatMultiselectViewModel, ChiTietDieuTriNoiTruViewModel, GoiDichVu, GoiKhongChietKhau, GridItemYeuCauDichVuKyThuat, ListInChiDinh, TrangThaiYeuCauDichVuKyThuatObjEnum, DataChiDinhTheoLoaiDichVuGroup } from '../../../dieu-tri-noi-tru.model';
import { LoaiDichVuKyThuat, TrangThaiYeuCauDichVuKyThuat } from 'src/app/shared/enum/dich-vu-ky-thuat.enum';
import icWarning from '@iconify/icons-ic/warning';
import icCheck from '@iconify/icons-ic/twotone-check';
import icInfo from '@iconify/icons-ic/twotone-info';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icRedEye from '@iconify/icons-ic/twotone-remove-red-eye';
import icDownward from "@iconify/icons-ic/baseline-cloud-download";
import { PhieuDieuTriDvktPopupClsComponent } from '../phieu-dieu-tri-dvkt-popup-cls/phieu-dieu-tri-dvkt-popup-cls.component';
import { NhomDichVu } from 'src/app/shared/constants/nhom-dich-vu-constant';
import { ChiDinhDichVuGridVo, GridUpdate } from 'src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { PopupChonPhieuInChiDinhComponent } from '../popup-chon-phieu-in-chi-dinh/popup-chon-phieu-in-chi-dinh.component';
import { PhieuDieuTriPopupInPhieuClsComponent } from '../phieu-dieu-tri-popup-in-phieu-cls/phieu-dieu-tri-popup-in-phieu-cls.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SuDungGoiDichVuMarketingPopupComponent } from '../su-dung-goi-dich-vu-marketing-popup/su-dung-goi-dich-vu-marketing-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ChiDinhGoiDichVuTheoBenhNhan, ChiDinhGoiDichVuTheoBenhNhanDichVuLoi, ChiDinhGoiDichVuThuongDung, ChiDinhGoiDichVuThuongDungDichVuLoi,DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham, ThongTinDichVuKhamTiepTheo, TrangThaiYeuCauKhamBenhObjEnum, XetNghiemCovid, YeuCauKhamBenh } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { DichVuKhuyenMaiPopupComponent } from 'src/app/modules/main/dich-vu-khuyen-mai/dich-vu-khuyen-mai-popup/dich-vu-khuyen-mai-popup.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { PopupChonLoaiInViewComponent } from 'src/app/modules/main/popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { MultiselectComponent } from 'src/app/shared/component/dropdowns/multiselect/multiselect.component';
import { XnCovidSarscov2PopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { XnSarsCov2PopupComponent } from 'src/app/modules/main/kham-benh/kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
import { DropdownlistComponent } from 'src/app/shared/component/dropdowns/dropdownlist/dropdownlist.component';
declare var jQuery: any;

@Component({
    selector: 'app-phieu-dieu-tri-dvkt',
    templateUrl: './phieu-dieu-tri-dvkt.component.html',
    styleUrls: ['./phieu-dieu-tri-dvkt.component.scss']
})
export class PhieuDieuTriDvktComponent implements OnInit {

    documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
    validationErrors: any;

    timeout = null;

    gridDichVuColumns: any[] = [];

    gridDataSourceDVKT: any;

    chiDinhDichVuKyThuatMultiselect: ChiDinhDichVuKyThuatMultiselectViewModel = new ChiDinhDichVuKyThuatMultiselectViewModel();
    isChangeData: boolean = false;
    listChonDichVuChiDinh: any[] = [];
    goiKhongChietKhau: GoiKhongChietKhau[] = [];
    gridDataSource: any = [];
    @ViewChild('GridChiDinh', { static: false }) gridChild: GridComponent;
    isCheckXacNhanIn: boolean = false;
    popupLoadingData: any;
    checkAll: boolean = null;
    enumTrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat;
    enumLoaiDichVuKyThuat = LoaiDichVuKyThuat;

    listChonDichVuChiDinhReLoad: any[] = [];
    icWarning = icWarning;
    icCheck = icCheck;
    icInfo = icInfo;
    icDelete = icDelete;
    icRedEye = icRedEye;
    icDownward = icDownward;
    coDichVuKhuyenMai: boolean = false;
    trangThaiYeuCauDichVuKyThuat: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();
    trangThaiYCDVKT: TrangThaiYeuCauDichVuKyThuatObjEnum = new TrangThaiYeuCauDichVuKyThuatObjEnum();

    isFocus: boolean = false;

    popupDeletingData: any = null;


    groups: GroupDescriptor[] = [{ field: 'Nhom' }];

    coGoiDichVu: boolean = false;

    showbuttonLuuVaInPhieuXetNghiem:boolean = false;
    dichVuSarsCoVs:number[]=[];
    loaiBenhPhamText:string =null;
    loaiBenhPham:number =null;
    bieuHienLamSang:string =null;
    dichTeSarsCoV2:string =null;

    @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
    @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;


    @ViewChild('loaiGiaTemplate', { static: true }) loaiGiaTemplate: TemplateRef<any>;
    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
    @ViewChild('dhBHYTTemplate', { static: true }) dhBHYTTemplate: TemplateRef<any>;
    @ViewChild('noiThucHienTemplate', { static: true }) noiThucHienTemplate: TemplateRef<any>;
    @ViewChild('gioBatDauTemplate', { static: true }) gioBatDauTemplate: TemplateRef<any>;

    @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('tenDichVuTemplate', { static: true }) tenDichVuTemplate: TemplateRef<any>;

    @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
    @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
    @ViewChild('donGiaBaoHiemTemplate', { static: true }) donGiaBaoHiemTemplate: TemplateRef<any>;
    @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
    @ViewChild('thoiDiemChiDinhTemplate', { static: true }) thoiDiemChiDinhTemplate: TemplateRef<any>;


    @ViewChild('gridDichVu', { static: false }) gridDichVu: GridComponent;
    @ViewChild('dichVuTrongGoiTemplate', { static: true }) dichVuTrongGoiTemplate: TemplateRef<any>;
    @ViewChild('dichVuKhuyenMaiTemplate', { static: true }) dichVuKhuyenMaiTemplate: TemplateRef<any>;
    @ViewChild('tinhPhiDVKTTemplate', { static: true }) tinhPhiDVKTTemplate: TemplateRef<any>;
    laKhoaKhamBenhChiDinh: boolean = true;

    @Input() phieuDieuTriId: number;
    @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
    @Input() id: number;
    @Input() khoaChiDinh: any;

    currentAccessUser: number;
    phongBenhVienHienTai: number;

    LuaChonChiDinh: number = 2; // gán mặc định chọn chỉ định dvkt  
    yeuCauKhamBenh: YeuCauKhamBenh = new YeuCauKhamBenh();
    thongTinDichVuKham: ThongTinDichVuKhamTiepTheo = new ThongTinDichVuKhamTiepTheo();
    FlagDuocHuongBaoHiem: boolean = false;
    trangThaiYCKB: TrangThaiYeuCauKhamBenhObjEnum = new TrangThaiYeuCauKhamBenhObjEnum();
    @ViewChild('dropdownLoaiGiaDVKham', { read: DropdownlistComponent, static: false }) dropdownLoaiGiaDVKham: DropdownlistComponent;

    constructor(private dialog: MatDialog
        , private authService: AuthService, private ngZone: NgZone, private el: ElementRef
        , private apiService: ApiService, private notificationService: NotificationService) {
        this.currentAccessUser = authService.getAccessUser().Id;
        this.phongBenhVienHienTai = +authService.getPhongLamViecId();
    }

    ngOnInit() {
        if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
            this.laKhoaKhamBenhChiDinh = true;
        }
        else {
            this.laKhoaKhamBenhChiDinh = false;
        }
        this.gridDichVuColumns = [
            { Field: "Action", Title: "", Width: 80, Sortable: false, Template: this.actionTemplate, Hidden: this.dieuTriNoiTruModel.KetThucBenhAn },
            { Field: "CheckBox", Title: "", Width: 35, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate, Hidden: this.dieuTriNoiTruModel.KetThucBenhAn },
            { Field: "Nhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 150, Sortable: false, ShowTooltip: true, Template: this.tenDichVuTemplate },
            { Field: "LaDichVuTrongGoi", Title: "DV Trong Gói", Width: 60, Template: this.dichVuTrongGoiTemplate },
            { Field: "LaDichVuKhuyenMai", Title: "DV Khuyến Mại", Width: 60, Template: this.dichVuKhuyenMaiTemplate },
            { Field: "TenLoaiGia", Title: "Loại Giá", Width: 80, Sortable: false, Template: this.loaiGiaTemplate },
            { Field: "DonGia", Title: "Đơn Giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuong", Title: "SL", Width: 59, Sortable: false, Template: this.slTemplate },
            { Field: "TinhPhi", Title: "Tính phí", Width: 60, Template: this.tinhPhiDVKTTemplate },
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 100, Sortable: false, Template: this.thanhTienTemplate },
            { Field: "DonGiaBaoHiem", Title: "ĐG BHYT", Width: 90, Sortable: false, Template: this.donGiaBaoHiemTemplate },
            { Field: "DuocHuongBaoHiem", Title: "ĐH BHYT", Width: 60, Sortable: false, Template: this.dhBHYTTemplate },
            { Field: "NoiThucHien", Title: "Nơi Thực Hiện", Width: 200, Sortable: false, Template: this.noiThucHienTemplate },
            { Field: "GioBatDau", Title: "Giờ Bắt Đầu", Width: 100, Sortable: false, Template: this.gioBatDauTemplate },
            { Field: "NguoiChiDinhDisplay", Title: "Người chỉ định", Width: 110 },
            { Field: "ThoiDiemChiDinh", Title: "Thời gian chỉ định", Width: 140, Sortable: false, Template: this.thoiDiemChiDinhTemplate, ShowTooltip: true },
            { Field: "TenNguoiThucHien", Title: "Người Thực Hiện", Width: 100, Sortable: false },
            { Field: "TrangThaiDichVu", Title: "Tình Trạng", Width: 140, Sortable: false, Template: this.trangThaiTemplate },
            { Field: "NgayYLenh", Title: "Ngày Y Lệnh", Width: 100, Sortable: false },

        ];
        this.coDichVuKhuyenMai = this.dieuTriNoiTruModel.CoDichVuKhuyenMai;
        this.chiDinhDichVuKyThuatMultiselect.KhongTinhPhi = true;
        this.getDataGoiDichVuDefault();


        this.chiDinhDichVuKyThuatMultiselect.PhieuDieuTriId = this.phieuDieuTriId;
        this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = this.id;

        // kiểm tra đăng ký gói dịch vụ người bệnh
        //this.kiemTraGoiDichVuCuaBenhNhan();

        this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.id, this.phieuDieuTriId);

        this.getListDichVuSarsCoVs();
        this.getInfoSarsCoVTheoYeuCauTiepNhans();

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['phieuDieuTriId'] && changes['phieuDieuTriId'].previousValue != null
            && changes['phieuDieuTriId'].previousValue != changes['phieuDieuTriId'].currentValue) {
            // kiểm tra đăng ký gói dịch vụ người bệnh
            this.kiemTraGoiDichVuCuaBenhNhan();
            this.loadingPage();
            let url = `PhauThuatThuThuat/GetDataDefaultDichVuKyThuat?yeuCauTiepNhanId=${this.id}&phieuDieuTriId=${changes.phieuDieuTriId.currentValue}`;
            this.phieuDieuTriId = changes.phieuDieuTriId.currentValue;
            this.chiDinhDichVuKyThuatMultiselect.PhieuDieuTriId = changes.phieuDieuTriId.currentValue;
            this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.id, changes.phieuDieuTriId.currentValue);

            this.apiService.get<any>(url).subscribe(resultData => {
                if (resultData) {
                    this.goiKhongChietKhau = [];
                    this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);

                    this.setDataGridView();
                    this.SelectcheckAllboxIn(true);
                } else {
                    this.closePopupLoadingData();
                    this.closePopupLoadingDa();
                }
            }, () => {
                this.closePopupLoadingData();
                this.closePopupLoadingDa();
            });
        }
    }


    kiemTraPhieuDieuTriTheoKhoaChiDinh(yeuCauTiepNhanId: number, phieuDieuTriId: number) {
        let params = {
            yeuCauTiepNhanId: yeuCauTiepNhanId,
            phieuDieuTriId: phieuDieuTriId
        };

        this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKham", params).subscribe(
            resultData => {
                if (resultData != null && resultData != undefined) {
                    this.khoaChiDinh = resultData.KhoaChiDinh;
                    if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
                        this.laKhoaKhamBenhChiDinh = true;
                    }
                    else {
                        this.laKhoaKhamBenhChiDinh = false;
                    }
                }
            },
            (err: ApiError) => {
            });
    }


    blurGioBatDau(event: any, dataItem) {
        //console.log("blurGioBatDau = ", $event, dataItem);
        this.CapNhatGridItemDichVuKyThuat(dataItem, dataItem.GioBatDau, 'GioThucHien')
    }

    getDataGoiDichVuDefault() {
        this.loadingPage();
        // kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();

        let url = `PhauThuatThuThuat/GetDataDefaultDichVuKyThuat?yeuCauTiepNhanId=${this.id}&phieuDieuTriId=${this.phieuDieuTriId}`;
        this.apiService.get<any>(url).subscribe(resultData => {
            if (resultData) {
                this.goiKhongChietKhau = [];
                this.goiKhongChietKhau = this.goiKhongChietKhau.concat(resultData);

                this.setDataGridView();
                this.SelectcheckAllboxIn(true);
            } else {
                this.closePopupLoadingData();
                this.closePopupLoadingDa();
            }
        }, () => {
            this.closePopupLoadingData();
            this.closePopupLoadingDa();
        });
    }


    changeMultiDichVuKyThuat(event) {
        this.onDataChange();
        this.validationErrors = null;

        if (event && event.length > 0) {
            if (!this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat) {
                this.closeChangeDichVuKyThuat(true);
            }
        } else {
            this.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
        }
    }

    kiemTraCoKetQuaCLS(dataItem) {
        if (dataItem.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien
            && dataItem.LoaiDichVuKyThuat != this.enumLoaiDichVuKyThuat.XetNghiem
            && dataItem.KetQuaCanLamSanPTTT.length > 0) {
            return true;
        }

        return false;
    }

    deletingPage() {
        this.popupDeletingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang xóa dữ liệu..." },
        });
    }

    closePopupDeletingData() {
        if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
            this.popupDeletingData.close();
        }
    }

    xoaGoiDichVuKhac(dataItem: any) {
        this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: `Bạn có muốn xoá dịch vụ ${dataItem.TenDichVu} không?` }
        }).afterClosed().subscribe(result => {
            if (result === "Yes") {
                // let dialog = this.dialog.open(LoadingComponent, {
                //     disableClose: true,
                //     width: "200px",
                //     height: "90px",
                //     data: { Title: "Đang xóa dữ liệu..." },
                // });

                if(dataItem.NhomId == 1)
                {
                    if (dataItem.TrangThaiDichVuId != this.trangThaiYCKB.ChuaKham) {
                        this.notificationService.showError("Chỉ được xoá YCDVKB chưa thực hiện");
                        return;
                    }
    
                    if (dataItem.NhanVienTaoYeuCauDichVuKyThuatId != this.currentAccessUser) {
                        this.notificationService.showError("Không được xoá YCDVKB của nhân viên khác");
                        return;
                    }
                }
                else
                {
                    if (dataItem.TrangThaiDichVuId != this.trangThaiYeuCauDichVuKyThuat.ChuaThucHien) {
                        this.notificationService.showError(PtttMessage.MessageCLSChuaThucHien);
                        return;
                    }
    
                    if (dataItem.NhanVienTaoYeuCauDichVuKyThuatId != this.currentAccessUser) {
                        this.notificationService.showError(PtttMessage.MessageCLSNhanVienTaoYeuCauDichVuKyThuat);
                        return;
                    }
                }
                

                this.showPopupLoadingData(EnumTypeLoadingData.Delete);

                let modelUpdate = new GridUpdate();
                if(dataItem.NhomId != 1)
                {
                    modelUpdate.yeuCauTiepNhanId = this.id;
                    modelUpdate.maDichVuId = dataItem.Id;
                    modelUpdate.nhom = NhomDichVu.DichVuKyThuat;
                }
                else
                {
                    modelUpdate.yeuCauTiepNhanId = dataItem.YeuCauTiepNhanNgoaiTruId;
                    modelUpdate.maDichVuId = dataItem.Id;
                    modelUpdate.nhom = NhomDichVu.DichVuKhamBenh;
                }
                //modelUpdate.mucHuong = this.benhNhanHienTai.MucHuong; --noted

                this.validationErrors = null;
                this.deletingPage();
                this.apiService.post<Array<ChiDinhDichVuGridVo>>("TiepNhanBenhNhan/RemoveDichVu", modelUpdate).subscribe(res => {
                    // this.apiService.get<any>(`DieuTriNoiTru/KiemTraConYeuCauDichVuKyThuatTaiPhong?phongBenhVienId=${this.phongBenhVienHienTai}&yeuCauTiepNhanId=${this.id}`).subscribe((res) => {

                    // }, (err) => {
                    //     this.closePopupLoadingData();
                    //     this.notificationService.showError(err);
                    // });
                    // dialog.close();
                    this.closePopupDeletingData();
                    this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xoá dịch vụ"]));

                    if (res) {
                        this.getDataUpdateGripViewGoiKhac(null, false);
                        this.closePopupDeletingData();

                    } else {
                        this.closePopupDeletingData();

                    }
                },
                    // (err: any) => {
                    //     dialog.close();
                    //     err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
                    // }
                    (err: ApiError) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        this.closePopupDeletingData();
                    }
                )
            }
        });
    }
    xemKetQuaCLS(dataItem) {
        this.dialog.open(PhieuDieuTriDvktPopupClsComponent, {
            disableClose: false,
            width: '1000px',
            height: 'auto',
            data: { KetQuaCanLamSanPTTT: dataItem.KetQuaCanLamSanPTTT }
        });
    }

    CapNhatGridItemDichVuKyThuat(dataItem, event, loaiCapNhat) {
        let gridItem = new GridItemYeuCauDichVuKyThuat();
        gridItem.YeuCauTiepNhanId = this.id;
        gridItem.YeuCauDichVuKyThuatId = dataItem.Id;
        // gridItem.YeuCauKhamBenhId = this.benhNhanHienTai.Id;
        //BVHD-3575
        if(dataItem.NhomId == 1){
            gridItem.IsDichVuKham = true;
            gridItem.YeuCauTiepNhanId = dataItem.YeuCauTiepNhanNgoaiTruId;
        }

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
                //showLoading = false;
                //reloadGrid = false;
                break;
            case "BenhPhamXetNghiem":
                gridItem.BenhPhamXetNghiem = event;
                gridItem.IsUpdateBenhPhamXetNghiem = true;
                break;
            case "GioThucHien":
                gridItem.GioBatDau = event;
                gridItem.IsUpdateGioThucHien = true;
                break;
            case "BaoHiem":
                gridItem.DuocHuongBaoHiem = event;
                gridItem.IsUpdateDuocHuongBaoHiem = true;
                break;
            case "SwapDichVuGoi":
                gridItem.LaDichVuTrongGoi = event;
                gridItem.IsSwapDichVuGoi = true;
                break;

            //BVHD-3654
            case "TinhPhi":
                gridItem.TinhPhi = event;
                gridItem.IsUpdateTinhPhi = true;
                break;

            case "SwapDichVuKhuyenMai":
                gridItem.LaDichVuKhuyenMai = event;
                gridItem.IsSwapDichVuKhuyenMai = true;
                break;
        }

        if (loaiCapNhat == 'SoLan' || loaiCapNhat == "BenhPhamXetNghiem" || loaiCapNhat == 'NoiThucHien') {
            var self = this;
            var timeDelay = 1000;
            if(loaiCapNhat == "BenhPhamXetNghiem")
            {
                timeDelay = 2000;
            }
            else if(loaiCapNhat == "NoiThucHien")
            {
                timeDelay = 500;
            }
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

    saveItemDichVuKyThuat(gridItem, showLoading: boolean = true, reloadGrid: boolean = true) {
        if (showLoading) {
            this.showPopupLoadingData(EnumTypeLoadingData.Update);
        }
        gridItem.PhieuDieuTri = this.phieuDieuTriId;
        console.log("saveItemDichVuKyThuat = ", gridItem);
        this.apiService.post<any>("DieuTriNoiTru/CapNhatGridItemDichVuKyThuat", gridItem).subscribe(() => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật "]));

            if (reloadGrid) {
                this.getDataUpdateGripViewGoiKhac(null, !showLoading); // false
            }
            else
            {
                this.closePopupLoadingData();
            }
        }, (err: ApiError) => {
            this.focusElementById('txtSoLuongDVKT' + gridItem.YeuCauDichVuKyThuatId);
            err.ValidationErrors === null ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            this.closePopupLoadingData();
        });
    }

    focusElementById(tagId: string) {
        var $focused = jQuery('#' + tagId).find(".k-input");
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);
    }

    onDataChange() {
        if (!this.isChangeData) {
            this.isChangeData = true;
            //this.outputPhauThuatThuThuatCLSDataChanged.emit(true);
        }
    }

    changeNhomDichVuKyThuat(event) {
        this.onDataChange();

        if (!event) {
            this.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = null;
        }
    }

    closeChangeDichVuKyThuat(event, xuLyThemDichVu: boolean = false) {
        var self = this;

        if (event && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {
            self.validationErrors = null;

            let nhomIdTemp: number = 0;
            let tenNhomTemp: string = "";

            let arrDichVu = self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.slice();
            // arrDichVu.forEach(element => {
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

            if (nhomIdTemp != 0) {
                self.chiDinhDichVuKyThuatMultiselect.ShowComboboxNhomDichVuKyThuat = true;
                self.chiDinhDichVuKyThuatMultiselect.NhomDichVuBenhVienId = nhomIdTemp;
                self.chiDinhDichVuKyThuatMultiselect.TenNhomDichVu = tenNhomTemp;

                if (xuLyThemDichVu) {
                    self.themDichVuKyThuatMultiselect();
                }
            }
        }
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
            case EnumTypeLoadingData.Add:
                mess = 'Đang thêm dữ liệu...'; break;
            default: mess = 'Đang tải dữ liệu...';
        }

        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: mess }
        });
    }

    getDataUpdateGripViewGoiKhac(typeLoadingData: EnumTypeLoadingData = EnumTypeLoadingData.Update, showLoadingPopup: boolean = true) {
        if (showLoadingPopup) {
            this.showPopupLoadingData(typeLoadingData);
        }

        //kiểm tra đăng ký gói dịch vụ người bệnh
        this.kiemTraGoiDichVuCuaBenhNhan();

        let url = `PhauThuatThuThuat/GetDataDefaultDichVuKyThuat?yeuCauTiepNhanId=${this.id}&phieuDieuTriId=${this.phieuDieuTriId}`;
        this.apiService.get<any>(url).subscribe(resultData => {
            if (resultData) {
                let goiDichVuModel = new GoiDichVu();
                this.listChonDichVuChiDinh = [];
                goiDichVuModel.GoiKhacs = resultData;

                this.goiKhongChietKhau.splice(0, this.goiKhongChietKhau.length);
                if (this.gridDataSource != undefined && this.gridDataSource != null && this.gridDataSource.data != undefined && this.gridDataSource.data != null) {
                    this.gridDataSource.data.splice(0, this.gridDataSource.data.length);
                }
                this.gridChild.setDataSource();

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

                //this.outputPhauThuatThuThuatCLSDataChangedAfterAddAndRemove.emit(true);
            } else {
                this.closePopupLoadingData();
            }
        }, () => {
            this.closePopupLoadingData();
        });
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

                let index = this.listChonDichVuChiDinh.findIndex(x => x.dichVuChiDinhId == element.Id && x.nhomChiDinhId == element.NhomId);
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

    setDataGridView() {
        this.gridDataSource = {
            data: this.goiKhongChietKhau,
            total: this.goiKhongChietKhau.length
        };

        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();

        //this.tinhthanhtien(this.goiKhongChietKhau);
        this.closePopupLoadingData();
    }

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
        //this.outputIsGetDataCanLamSanDone.emit(true);
        if (this.isFocus) {
            this.dialog.afterAllClosed.subscribe(() => {
                this.autoFocusElementFirst();
                this.isFocus = false;
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

    themDichVuKyThuatMultiselect() {
        //this.showPopupLoadingData(EnumTypeLoadingData.Update);
        if (this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId == 0 || this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId == undefined) {
            this.chiDinhDichVuKyThuatMultiselect.YeuCauTiepNhanId = this.id;
        }

        if (this.chiDinhDichVuKyThuatMultiselect.PhieuDieuTriId == 0 || this.chiDinhDichVuKyThuatMultiselect.PhieuDieuTriId == undefined) {
            this.chiDinhDichVuKyThuatMultiselect.PhieuDieuTriId = this.phieuDieuTriId;
        }
        //this.xuLyKiemTraDichVuKyThuatTrungTrongGoi();


        //BVHD-3809
        var self = this;
        if (self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != undefined
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs != null
            && self.chiDinhDichVuKyThuatMultiselect.DichVuKyThuatBenhVienChiDinhs.length > 0) {
            self.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = 0;
            self.apiService.post<boolean>("DieuTriNoiTru/KiemTraChiDinhDichVuKyThuatDaCoTheoYeuCauTiepNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó trong cùng ngày điều trị. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                        }
                    });
                }
                else {
                    self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
                }
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            self.xuLyKiemTraDichVuKyThuatTrungTrongGoi();
        }
    }

    xuLyKiemTraDichVuKyThuatTrungTrongGoi() {
        this.showPopupLoadingData(EnumTypeLoadingData.Add);
        var self = this;
        // cập nhật xử lý
        //1: kiểm tra có dịch vụ nào trùng trong gói ko -> hiện popup thông báo
        //2: xử lý thêm dịch vụ ko có trong gói và có trong gói(nếu có)
        self.chiDinhDichVuKyThuatMultiselect.YeuCauKhamBenhId = 0;
        // cập nhật ngày 02/06/2021: ko kiểm tra dịch vụ có trong gói nữa
        self.xuLyThemDichVuKyThuatMultiselect();
        // self.apiService.post<any>("DieuTriNoiTru/KiemTraDichVuKyThuatChiDinhCoTrongGoiCuaBenhNhan", self.chiDinhDichVuKyThuatMultiselect).subscribe(resultData => {
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
        //     (err: ApiError) => {
        //         self.validationErrors = err.ValidationErrors;
        //         if (err.Message != "Validation Failed") {
        //             self.notificationService.showError(err.Message);
        //         }
        //         this.closePopupLoadingDa();
        //     });
    }

    xuLyThemDichVuKyThuatMultiselect(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View, isShowPopupLoading: boolean = false) {
        if (isShowPopupLoading) {
            this.showPopupLoadingData(typeLoading);
        }
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
            this.apiService.post<any>("DieuTriNoiTru/ThemYeuCauDichVuKyThuatMultiSelect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
                this.huyDichVuKyThuatMultiselect();
                this.isFocus = true;
                let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
                this.notificationService.showSuccess(mess);
    
                this.getDataUpdateGripViewGoiKhac(EnumTypeLoadingData.View, false);
            },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closePopupLoadingData();
                });
        }

        
    }

    huyDichVuKyThuatMultiselect() {
        this.validationErrors = [];
        this.chiDinhDichVuKyThuatMultiselect = new ChiDinhDichVuKyThuatMultiselectViewModel();
        this.chiDinhDichVuKyThuatMultiselect.KhongTinhPhi = true;
    }

    kiemTraCoKetQuaCLSXetNghiem(lstYeuCauDichVuKyThuat) {
        let result = lstYeuCauDichVuKyThuat.filter(p => p.TrangThaiDichVuId == this.enumTrangThaiYeuCauDichVuKyThuat.DaThucHien
            && p.LoaiDichVuKyThuat == this.enumLoaiDichVuKyThuat.XetNghiem)

        return result.length > 0 && result[0].KetQuaCanLamSanPTTT.length > 0 ? true : false;
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

                if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
                    this.checkAll = true;
                }
            }
            else {
                if (this.listChonDichVuChiDinh.length == this.gridDataSource.total) {
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
        if (this.listChonDichVuChiDinh.length == this.gridChild.gridDataSource.total) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
    }


    public state: State = { skip: 0, take: 15, group: [{ field: 'LoaiDichVuKyThuatEnumDecription', aggregates: [] }] };
    XacNhanIn(kieuin: number = 0) {
        this.listChonDichVuChiDinhReLoad = [];
        let gridData = this.gridChild.getAllDataFromDatasource();

        console.log("XNI = ", this.listChonDichVuChiDinh, gridData);
        if (gridData == undefined || gridData.length == 0) {
            this.notificationService.showError("Không có dịch vụ nào để in");
        }
        else {
            gridData.forEach(ele => {
                this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                    if (lstChiDinh.dichVuChiDinhId == ele.Id && lstChiDinh.nhomChiDinhId == ele.NhomId) {
                        this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
                    }
                });
            })
            let listGridSelect: any[] = [];
            gridData.forEach(elements => {
                this.listChonDichVuChiDinh.forEach(lstChiDinh => {
                    if (lstChiDinh.dichVuChiDinhId == elements.Id && lstChiDinh.nhomChiDinhId == elements.NhomId) {
                        listGridSelect.push(elements);
                    }
                });
            });
            let dataIn = {
                YeuCauTiepNhanId: this.id,
                PhieuDieuTriId: this.phieuDieuTriId,
                ListDichVuChiDinh: this.listChonDichVuChiDinhReLoad,
                InChungChiDinh: kieuin,
                hosting: window.location.protocol + "//" + window.location.host,
                KieuInChung: true,
                ListChonLoaiPhieuIn: null,
                EnumInChiDinhKhamBenhNgoaiTru: 1, // để tạm,
                Loai: 2,
                listGridSelect: listGridSelect
            }

            let dialogRef = this.dialog.open(PopupChonLoaiInViewComponent, {
                width: '1000px',
                data: { Model: dataIn }
            });

            // let array = new Array<DataChiDinhTheoLoaiDichVuGroup>()

            // this.gridDataSource.data.forEach(element => {
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.ChuanDoanHinhAnh) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.ChuanDoanHinhAnh;
            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.Khac) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.Khac;
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;
            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.ThamDoChucNang) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.ThamDoChucNang;
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;

            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.TheoYeuCau) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.TheoYeuCau;
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;
            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.ThuThuatPhauThuat) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.ThuThuatPhauThuat;
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;
            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            //     if (element.LoaiDichVuKyThuatEnum == this.enumLoaiDichVuKyThuat.XetNghiem) {
            //         let arrayObj = new DataChiDinhTheoLoaiDichVuGroup()
            //         arrayObj.LoaiDichVuKyThuatEnum = this.enumLoaiDichVuKyThuat.XetNghiem;
            //         arrayObj.LoaiDichVuKyThuat = element.LoaiDichVuKyThuatEnumDecription;
            //         let index = array.findIndex(x => x.Id == arrayObj.Id && x.IsCheckPhieuIn == true && x.LoaiDichVuKyThuat == arrayObj.LoaiDichVuKyThuat);
            //         if (index == -1) {
            //             array.push(arrayObj);
            //         }
            //     }
            // });
            // let dialogRef = this.dialog.open(PopupChonPhieuInChiDinhComponent, {
            //     width: '500px',
            //     data: { Model: array }
            // }).afterClosed().subscribe(result => {
            //     if (result != undefined) {
            //         let listLoaiDichVuKyThuatEnum = new Array<number>();
            //         result.Model.forEach(element => {
            //             if (element.IsCheckPhieuIn == true) {
            //                 let data = 0;
            //                 data = element.LoaiDichVuKyThuatEnum;
            //                 listLoaiDichVuKyThuatEnum.push(data);
            //             }
            //         });
            //         dataIn.ListChonLoaiPhieuIn = listLoaiDichVuKyThuatEnum;

            //         let dialogRefa = this.dialog.open(PhieuDieuTriPopupInPhieuClsComponent, {
            //             width: '1000px',
            //             data: { Model: dataIn }
            //         }).afterClosed().subscribe(result => {
            //         });
            //     }
            // });
        }

    }


    xemKetQuaCLSXetNghiem(aggregates: any) {

    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }

    closePopupLoadingDa() {

        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }


    //===================================================================================
    // gói dịch vụ marketing
    // xemGoiDichVu() {
    //     var self = this;
    //     if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
    //         self.dialog.open(SuDungGoiDichVuMarketingPopupComponent, { // cân nhắc dùng chung component bên khám bệnh
    //             disableClose: false,
    //             width: '1800px',
    //             data: { DocumentType: self.documentType, BenhNhanId: 1, IsPTTT: false }
    //         }).afterClosed().subscribe(yeuCauGoiMarketing => {
    //             if (yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "") {

    //             }
    //         });
    //     }
    //     else {
    //         self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //     }
    // }

    xemGoiDichVu() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiSuDungGoiDichVuPopupComponent, {
                disableClose: false,
                width: '1800px',
                data: { DocumentType: self.documentType, BenhNhanId: self.dieuTriNoiTruModel.BenhNhanId, IsPTTT: false, IsNoiTru: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if (yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "") {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.dieuTriNoiTruModel.Id; // cờ phân biệt nội trú
                    yeuCauGoiMarketing.NoiTruPhieuDieuTriId = self.phieuDieuTriId;
                    self.apiService.post<Array<ChiDinhGoiDichVuTheoBenhNhanDichVuLoi>>("DieuTriNoiTru/KiemTraDichVuTrongGoiMarketingDaCoTheoYeuCauTiepNhan", yeuCauGoiMarketing).subscribe(resultData => {
                        if (resultData && resultData.length > 0) {
                            self.dialog.open(LanKhamHienTaiNhomDichVuLoiPopupComponent, {
                                disableClose: false,
                                width: '1200px',
                                data: { arrDichVuCanhBao: resultData, DocumentType: this.documentType }
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
        this.apiService.post<any>("DieuTriNoiTru/ThemChiDinhGoiDichVuTheoBenhNhan", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            if (result.IsVuotQuaBaoLanhGoi == true) {
                mess += "Chỉ định này đã vượt quá số tiền tạm ứng của người bệnh.";
                this.notificationService.showWarning(mess);
            }
            else
            {
                this.notificationService.showSuccess(mess);
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

    async kiemTraGoiDichVuCuaBenhNhan() {
        if (this.dieuTriNoiTruModel != null && this.dieuTriNoiTruModel.BenhNhanId != null) {
            this.apiService.get<boolean>("DieuTriNoiTru/KiemTraDangKyGoiDichVuTheoBenhNhan?benhNhanId=" + this.dieuTriNoiTruModel.BenhNhanId).subscribe(result => {
                this.coGoiDichVu = result;
            },
                (err: ApiError) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });

        }
    }

    cacDichVuKM() {
        this.dialog.open(DichVuKhuyenMaiPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { BenhNhanId: this.dieuTriNoiTruModel.BenhNhanId, DocumentType: "DanhSachDieuTriNoiTru" }
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
                data: { DocumentType: self.documentType, BenhNhanId: self.dieuTriNoiTruModel.BenhNhanId, IsPTTT: false, IsNoiTru: true }
            }).afterClosed().subscribe(yeuCauGoiMarketing => {
                if(yeuCauGoiMarketing != undefined && yeuCauGoiMarketing != null && yeuCauGoiMarketing != "")
                {
                    yeuCauGoiMarketing.YeuCauTiepNhanId = self.dieuTriNoiTruModel.Id;
                    yeuCauGoiMarketing.NoiTruPhieuDieuTriId = self.phieuDieuTriId;
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
        this.apiService.post<any>("TiepNhanBenhNhan/ThemChiDinhGoiDichVuKhuyenMaiTheoBenhNhanNoiTru", yeuCauGoiMarketing).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);
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

    //===================================================================================

    // update nhóm dịch vụ thường dùng
    xemNhomDichVuThuongDung() {
        var self = this;
        let boPhan = BoPhan.TiepNhanNoiTru;        
        if (self.authService.hasPermission(self.documentType, SecurityOperation.View)) {
            self.dialog.open(LanKhamHienTaiNhomDichVuThuongDungPopupComponent, {
                disableClose: false,
                width: '1500px',
                data: { DocumentType: self.documentType , boPhan : boPhan }
            }).afterClosed().subscribe(yeuCauGoiThuongDung => {
                if (yeuCauGoiThuongDung) {
                    // yeuCauGoiThuongDung.YeuCauKhamBenhId = self.benhNhanHienTai.Id;
                    yeuCauGoiThuongDung.YeuCauTiepNhanId = self.dieuTriNoiTruModel.Id; // cờ phân biệt nội trú
                    yeuCauGoiThuongDung.PhieuDieuTriId = self.phieuDieuTriId;
                    self.apiService.post<Array<ChiDinhGoiDichVuThuongDungDichVuLoi>>("DieuTriNoiTru/KiemTraDichVuTrongGoiDaCoTheoYeuCauTiepNhan", yeuCauGoiThuongDung).subscribe(resultData => {
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
        this.apiService.post<any>("DieuTriNoiTru/ThemYeuGoiDichVuThuongDung", yeuCauGoiThuongDung).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);

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
    XacNhanInXN(){
        
        // debugger
        // let hostingName = window.location.protocol + "//" + window.location.host;
        // this.apiService
        // .get<any>(
        //   "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
        //   this.id +
        //   "&hostingName=" +
        //   hostingName
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
        //   // resolve(resultData);
         
        // });
        
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
            YeuCauTiepNhanId:this.id
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
        this.apiService.get<XetNghiemCovid>("TiepNhanBenhNhan/GetInfoSarsCoVTheoYeuCauTiepNhanNoiTru?id=" + this.id).subscribe(
            resultData => {
                this.bieuHienLamSang = resultData.BieuHienLamSang;
                this.dichTeSarsCoV2 = resultData.DichTeSarsCoV2;
            });
    }
    ThemDichVuSarsCov2(){
        this.apiService.post<any>("DieuTriNoiTru/ThemYeuCauDichVuKyThuatMultiSelect", this.chiDinhDichVuKyThuatMultiselect).subscribe(result => {
            this.huyDichVuKyThuatMultiselect();
            this.isFocus = true;
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);

            this.getInfoSarsCoVTheoYeuCauTiepNhans();

            this.notificationService.showSuccess(mess);

            this.getDataUpdateGripViewGoiKhac(EnumTypeLoadingData.View, false);
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }
    //================================================================================================


    //======================================BVHD-3575=================================================
    selectLuaChonChiDinh(event) {
        if (event !== undefined && event != null) {
            switch (event) {
                case 1:
                    // this.nhomDichVuDangChon = EnumNhomGoiDichVu.DichVuKhamBenh;
                    // this.getDataUpdateGripViewGoiKhac(this.benhNhanHienTai.YeuCauTiepNhanId, this.benhNhanHienTai.Id, this.nhomDichVuDangChon, EnumTypeLoadingData.View);
                    this.huyDichVuKhamBenh(); 
                    // this.hienThiNutInChiDinh = true ;
                    break;
                case 2:
                    this.huyDichVuKyThuatMultiselect(); break;
            }
            //this.getDataUpdateGripViewGoiKhac(EnumTypeLoadingData.View, true);
        }
        this.validationErrors = [];
    }

    getThongTinThanhToan(event: any) {
        if (event != undefined && event != null && this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != null && this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != 0
            && this.yeuCauKhamBenh.NhomGiaDichVuKhamBenhBenhVienId != null) {

            this.thongTinDichVuKham = new ThongTinDichVuKhamTiepTheo(this.id, 0, this.yeuCauKhamBenh.DichVuKhamBenhBenhVienId, this.yeuCauKhamBenh.NhomGiaDichVuKhamBenhBenhVienId);

            this.apiService.post<any>("KhamBenh/GetDonGia", this.thongTinDichVuKham).subscribe(
                resultData => {
                    this.yeuCauKhamBenh.Gia = resultData.GiaDichVuKham;
                    // this.yeuCauKhamBenh.GiaBaoHiemThanhToan = resultData.GiaBHTT;
                    this.yeuCauKhamBenh.ThanhTien = this.yeuCauKhamBenh.Gia;
                    this.FlagDuocHuongBaoHiem = resultData.FlagDuocHuongBaoHiem;
                    this.yeuCauKhamBenh.DuocHuongBaoHiem = resultData.DuocHuongBaoHiem;

                    this.thongTinDichVuKham = new ThongTinDichVuKhamTiepTheo();
                });
        } else {
            this.yeuCauKhamBenh.Gia = null;
            this.yeuCauKhamBenh.GiaBaoHiemThanhToan = null;
            this.yeuCauKhamBenh.ThanhTien = null;
            this.yeuCauKhamBenh.DuocHuongBaoHiem = false;
        }
    }

    chonDichVuKham(event) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.MaDichVu = event.Ma;
            this.yeuCauKhamBenh.TenDichVu = event.Ten;
        }
        else {
            this.yeuCauKhamBenh.MaDichVu = null;
        }
    }

    onChangeDonGiaKhamBenh(event) {
        if (event != undefined && event != null) {
            this.yeuCauKhamBenh.ThanhTien = event * 1;
        }
        else {
            this.yeuCauKhamBenh.ThanhTien = null;
        }
    }

    autoHideShowTinhPhi(value, item) {
        item.TinhPhi = !value;
    }

    autoCheckDuocHuongBaoHiem(value, item) {
        item.DuocHuongBaoHiem = this.FlagDuocHuongBaoHiem && value;
    }

    huyDichVuKhamBenh() {
        this.autoFocusElementFirst();
        this.FlagDuocHuongBaoHiem = false;
        this.validationErrors = [];
        this.yeuCauKhamBenh = new YeuCauKhamBenh();
        this.yeuCauKhamBenh.TinhPhi = true;
        this.FlagDuocHuongBaoHiem = false;
        if (this.dropdownLoaiGiaDVKham != undefined) {
            this.dropdownLoaiGiaDVKham.getDataForLookup();
        }
    }

    resetFocus() {
        var $focused = jQuery(':focus');
        jQuery(".k-input").blur();
        setTimeout(function () {
            if ($focused.length > 0) {
                $focused.focus();
            }
        }, 100);
    }

    themDichVuKhamBenh() {
        var self = this;
        self.validationErrors = [];

        if (self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != undefined && self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != null && self.yeuCauKhamBenh.DichVuKhamBenhBenhVienId != 0) {
            self.yeuCauKhamBenh.YeuCauKhamBenhTruocId = 0;
            self.yeuCauKhamBenh.YeuCauTiepNhanId = self.id;
            self.yeuCauKhamBenh.PhieuDieuTriId = self.phieuDieuTriId;
            self.apiService.post<boolean>("DieuTriNoiTru/KiemTraChiDinhDichVuKhamBenhDaCoTheoYeuCauTiepNhan", self.yeuCauKhamBenh).subscribe(resultData => {
                if (resultData) {
                    self.dialog.open(ConfirmComponent, {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "Dịch vụ này đã được thêm vào trước đó. Bạn có chắc chắn muốn thêm dịch vụ này hay không?" }
                    }).afterClosed().subscribe(result => {
                        if (result == "Yes") {
                            self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
                        }
                        else
                        {
                            self.resetFocus();
                        }
                    });
                }
                else {
                    self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
                }
            },
                (err: ApiError) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
        }
        else {
            self.xuLyKiemTraDichVuKhamBenhTrungTrongGoi();
        }
    }

    xuLyKiemTraDichVuKhamBenhTrungTrongGoi() {
        this.yeuCauKhamBenh.YeuCauTiepNhanId = this.id;
        this.yeuCauKhamBenh.YeuCauKhamBenhTruocId = 0;
        var self = this;
        // cập nhật xử lý
        //1: kiểm tra có dịch vụ nào trùng trong gói ko -> hiện popup thông báo
        //2: xử lý thêm dịch vụ ko có trong gói và có trong gói(nếu có)
        self.apiService.post<any>("KhamBenh/KiemTraDichVuKhamBenhChiDinhCoTrongGoiCuaBenhNhan", self.yeuCauKhamBenh).subscribe(resultData => {
            if (resultData.Message != null && resultData.Message != '' && resultData.DichVuChiDinhCoTrongGois.length > 0) {
                self.dialog.open(ConfirmComponent, {
                    disableClose: false,
                    width: '800px',
                    data: { Title: "Xác nhận", Message: resultData.Message }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.yeuCauKhamBenh.DichVuKhamBenhTuGoi = resultData.DichVuChiDinhCoTrongGois[0];
                    }
                    self.xuLyThemDichVuKhamBenh();
                });
            }
            else {
                self.xuLyThemDichVuKhamBenh();
            }
        },
            (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
    }

    xuLyThemDichVuKhamBenh() {
        this.showPopupLoadingData(EnumTypeLoadingData.Update);
        this.apiService.post<any>("DieuTriNoiTru/ThemYeuCauKhamBenh", this.yeuCauKhamBenh).subscribe(result => {
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);
            this.getDataUpdateGripViewGoiKhac(EnumTypeLoadingData.View, false);
            this.huyDichVuKhamBenh();
        },
            (err: ApiError) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
    }
    //================================================================================================
}
