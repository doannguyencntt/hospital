import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import icSearch from '@iconify/icons-ic/twotone-search';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from '@iconify/icons-ic/cancel';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icInfo from '@iconify/icons-ic/baseline-info';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { DuyetDuTruMuaVatTuViewModel, ListStatusSelectTabTHDTKhoa, ThongTinLyDoHuyDuyetTaiKhoa, TongHopDuTruMuaVatTuTaiKhoa, TongHopDuTruMuaVatTuTaiKhoaSreach } from '../tong-hop-du-tru-mua-ksnk-tai-khoa.model';
// import { TongHopDuTruMuaKSNKTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-khong-duyet.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-ds-tong-hop-du-tru-mua-ksnk-tai-khoa',
    templateUrl: './ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.html',
    styleUrls: ['./ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component.scss'],
    animations: [stagger60ms, fadeInUp400ms],
})

export class DsTongHopDuTruMuaKSNKTaiKhoaComponent implements OnInit {
    documentType: DocumentType;
    danhSachTongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoaSreach;
    lstStatusSelectTabTHDTKhoa: ListStatusSelectTabTHDTKhoa = new ListStatusSelectTabTHDTKhoa();
    icInfo = icInfo;
    baseRoute = '/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa';

    urlGetDataTuChoi = 'YeuCauMuaKSNK/GetDataDuTruMuaKSNKTuChoiTaiKhoaForGridAsync';
    urlGetTotalPageTuChoi = 'YeuCauMuaKSNK/GetTotalDuTruMuaKSNKTuChoiTaiKhoaForGridAsync';

    urlGetDataGridChildAsyncChoXuLy = "YeuCauMuaKSNK/GetDuTruMuaKSNKDangChoXuLyTaiKhoaChiTietForGridAsync";
    urlGetTotalPageGridChildChoXuLy: string = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKDangChoXuLyTaiKhoaChiTietForGridAsync";

    urlGetDataGridChildAsyncTuChoi = 'YeuCauMuaKSNK/GetDSTHDTTuChoiChildForGridAsync';
    urlGetTotalPageGridChildTuChoi = 'YeuCauMuaKSNK/GetTotalDSTHDTTuChoiChildForGridAsync';

    urlGetDataDaXuLyChiTietChild = "YeuCauMuaKSNK/GetDuTruMuaKSNKChiTietForGridAsyncChild";
    urlGetTotalDaXuLyChiTietChild = "YeuCauMuaKSNK/GetTotalDuTruMuaKSNKChiTietForGridAsyncChild";

    popupLoadingData: any = null;
    addtionStringDefault: string = null;
    addtionStringDefaultDaXuLy: string = null;
    addtionStringDefaultTuChoi: string = null;

    gridColumns: any[] = [];
    gridDaXuLyColumns: any[] = [];
    gridDaXuLyChiTietColumns: any[] = [];
    gridDaXuLyChiTietChildColumns: any[] = [];

    confrim: any;
    thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;
    duyetDuTruMuaVatTuViewModel = {} as DuyetDuTruMuaVatTuViewModel;
    tongHopDuTruMuaVatTuTaiKhoa: TongHopDuTruMuaVatTuTaiKhoa[] = [];

    gridChildThuocVacXinColumns: any[] = [];
    gridTuChoiXuLyColumns: any[] = [];

    gridChildTuChoiChildColumns: any[] = [];

    validationErrors: any[] = [];
    icClose = icClose;
    icCancel = icCancel;
    icDelete = icDelete;
    icMoreHoriz = icMoreHoriz;
    icFileExcel = icFileExcel;
    icEdit = icEdit;
    icAdd = icAdd;
    icPrint = icPrint;
    icSearch = icSearch;
    holdQuery: any = null;
    searchCtrl = new FormControl();
    searchCtrlDaXuLy = new FormControl();
    searchCtrlTuChoi = new FormControl();

    groupTuChois: GroupDescriptor[] = [{ field: 'Nhom' }];
    groupDaXuLyChiTiets: GroupDescriptor[] = [{ field: 'Nhom' }];
    khos: any[] = [];
    hdts: any[] = [];

    @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

    @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
    @ViewChild('tuNgayTemplate', { static: true }) tuNgayTemplate: TemplateRef<any>;
    @ViewChild('denNgayTemplate', { static: true }) denNgayTemplate: TemplateRef<any>;
    @ViewChild('ngayTaiKhoaTemplate', { static: true }) ngayTaiKhoaTemplate: TemplateRef<any>;
    @ViewChild('ngayTaiKhoaDuocTemplate', { static: true }) ngayTaiKhoaDuocTemplate: TemplateRef<any>;
    @ViewChild('ngayTaiGiamDocTemplate', { static: true }) ngayTaiGiamDocTemplate: TemplateRef<any>;
    @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
    @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupDaXuLyChiTietHeaderTemplate', { static: true }) nhomGroupDaXuLyChiTietHeaderTemplate: TemplateRef<any>;
    @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
    @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
    @ViewChild('nhomGroupTuChoiHeaderTemplate', { static: true }) nhomGroupTuChoiHeaderTemplate: TemplateRef<any>;
    @ViewChild('soPhieuTuChoiTemplate', { static: true }) soPhieuTuChoiTemplate: TemplateRef<any>;
    @ViewChild('soPhieuDaXuLyChiTietTemplate', { static: true }) soPhieuDaXuLyChiTietTemplate: TemplateRef<any>;
    @ViewChild('soPhieuDaXuLyTemplate', { static: true }) soPhieuDaXuLyTemplate: TemplateRef<any>;
    @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauDaXuLyTemplate', { static: true }) ngayYeuCauDaXuLyTemplate: TemplateRef<any>;
    @ViewChild('ngayYeuCauDetailDaXuLyTemplate', { static: true }) ngayYeuCauDetailDaXuLyTemplate: TemplateRef<any>;
    @ViewChild('ngayGiamDocDaXuLyTemplate', { static: true }) ngayGiamDocDaXuLyTemplate: TemplateRef<any>;
    @ViewChild('ngayKhoDuocDaXuLyTemplate', { static: true }) ngayKhoDuocDaXuLyTemplate: TemplateRef<any>;

    @ViewChild('ngayYeuCauTuChoiTemplate', { static: true }) ngayYeuCauTuChoiTemplate: TemplateRef<any>;
    @ViewChild('ngayTuChoiTemplate', { static: true }) ngayTuChoiTemplate: TemplateRef<any>;

    @ViewChild('ngayTruongKhoaDaXuLyTemplate', { static: true }) ngayTruongKhoaDaXuLyTemplate: TemplateRef<any>;

    @ViewChild('gridChoDuyet', { read: GridComponent, static: false }) gridChoDuyet: GridComponent;

    @ViewChild('gridChildDaXuLy', { read: GridComponent, static: false }) gridChildDaXuLy: GridComponent;
    @ViewChild('gridChildTuChoi', { read: GridComponent, static: false }) gridChildTuChoi: GridComponent;

    @ViewChild('nhomChiTietTabChoGoiTemplate', { static: true }) nhomChiTietTabChoGoiTemplate: TemplateRef<any>;

    groupChiTietTabChoGoi: GroupDescriptor[] = [{ field: 'Nhom' }];
    @Input() sort: SortDescriptor[] = [
        {
            field: 'NgayYeuCau',
            dir: 'desc',
        },
    ];

    sortDuTruChild: SortDescriptor[] =
        [
            {
                field: 'Id',
                dir: 'asc'
            }];

    public groups: GroupDescriptor[] = [{
        field: 'TrangThai', aggregates: [
            { field: 'Nhom', aggregate: 'count' },
            { field: 'TrangThai', aggregate: 'count' },
        ]
    }];

    sortDuTruChoXuLy: SortDescriptor[] =
        [
            {
                field: "SoPhieu",
                dir: "asc"
            }];

    sortDaGoi: SortDescriptor[] =
        [{
            field: "TinhTrang",
            dir: "asc"
        }, {
            field: "NgayYeuCau",
            dir: "asc"
        }];

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private apiService: ApiService,
        private authService: AuthService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit() {
        this.documentType = DocumentType.THDTMuaTaiKSNK;
        this.danhSachTongHopDuTruMuaVatTuTaiKhoa = new TongHopDuTruMuaVatTuTaiKhoaSreach();
        this.backWithSearch();

        this.gridColumns = [
            { Field: 'TrangThai', Title: 'TrangThai', Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'TenKho', Title: 'Kho', Width: 150, Sortable: true },
            { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 160, Sortable: true },
            { Field: 'NgayYeuCauDisplay', Title: 'Ngày yêu cầu', Width: 150, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayTruongKhoaDuyetDisplay', Title: 'Ngày T.Khoa Duyệt', Width: 150, Sortable: true },
            { Field: 'Action', Title: '', Width: 150, Template: this.actionTemplate },
        ];

        // grid đã xữ lý
        this.gridDaXuLyColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuDaXuLyTemplate },
            { Field: "TenKhoa", Title: "Khoa", Width: 150, Sortable: true },
            { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160, Sortable: true },
            { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauDaXuLyTemplate },
            { Field: "TinhTrang", Title: "Tình Trạng", Width: 150, Template: this.tinhTrangTemplate },
            { Field: "NgayKhoDuocDuyet", Title: "Ngày K.Dược Duyệt", Width: 150, Sortable: true, Template: this.ngayKhoDuocDaXuLyTemplate },
            { Field: "NgayGiamDocDuyet", Title: "Ngày G.ĐỐC Duyệt", Width: 150, Sortable: true, Template: this.ngayGiamDocDaXuLyTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 150, Sortable: true },
        ];

        this.gridDaXuLyChiTietColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Template: this.soPhieuDaXuLyChiTietTemplate },
            { Field: "TenKho", Title: "Kho", Width: 150 },
            { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160 },
            { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Template: this.ngayYeuCauDetailDaXuLyTemplate },
            { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150 },
            { Field: "NgayTruongKhoaDuyet", Title: "Ngày T.Khoa Duyệt", Width: 150, Template: this.ngayTruongKhoaDaXuLyTemplate },
        ];

        this.gridDaXuLyChiTietChildColumns = [
            // { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupDaXuLyChiTietHeaderTemplate },
            { Field: 'TenVatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', Width: 52 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
            { Field: 'SoLuongDuTruTruongKhoaDuyet', Title: 'SL Dự Trù T.Khoa Duyệt', Width: 100 },
        ];

        // grid từ chối
        this.gridTuChoiXuLyColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTuChoiTemplate },
            { Field: 'TenKho', Title: 'Kho', Width: 150, Sortable: true },
            { Field: 'KyDuTru', Title: 'kỳ dự trù', Width: 160, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTuChoiTemplate },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayTuChoi', Title: 'Ngày Từ Chối', Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate },
            { Field: 'NguoiTuChoi', Title: 'Người từ chối', Width: 150, Sortable: true },
            { Field: 'LyDoTuChoi', Title: 'Lý Do', Width: 150, Sortable: true },
        ];

        this.gridChildTuChoiChildColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupTuChoiHeaderTemplate },
            { Field: "TenVatTu", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
            { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
            { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
            { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
            { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
        ];

        this.gridChildThuocVacXinColumns = [
            { Field: 'Nhom', Title: 'Loại', Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomChiTietTabChoGoiTemplate },
            { Field: 'VatTu', Title: 'Tên', Width: 100, ShowTooltip: true },
            { Field: 'DonViTinh', Title: 'ĐVT', Width: 50 },
            { Field: 'QuyCach', Title: 'Quy cách', ShowTooltip: true, Width: 52 },
            { Field: 'HangSanXuat', Title: 'Hãng SX', Width: 100 },
            { Field: 'NuocSanXuat', Title: 'Nước SX', Width: 100 },
            // { Field: 'NhomDuPhong', Title: 'Nhóm Đ.Trị/D.Phòng', Width: 80 },
            { Field: 'SoLuongDuTru', Title: 'SL Dự Trù', Width: 120 },
            { Field: 'SoLuongDuKienSuDung', Title: 'SL D.KIẾN S.DỤNG TRONG KỲ', Width: 120 },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù Tồn', Width: 80 },
            { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
        ];
    }

    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = LocalStorageHelper
                    .getItem<string>('additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa');
                if (additionalSearchString != null) {
                    this.danhSachTongHopDuTruMuaVatTuTaiKhoa = JSON.parse(additionalSearchString);

                    //Chờ duyệt
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate = null;
                    }

                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate);
                    } else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate = null;
                    }

                    // Đã xử lý
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate = null;
                    }

                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate);
                    } else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate = null;
                    }

                    //Từ chối
                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate);
                    }
                    else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate = null;
                    }

                    if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay != null
                        && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay != 'null' && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay != '') {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate = new Date(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate);
                    } else {
                        this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate = null;
                    }
                    //this.gridChoDuyet.additionalSearchString = additionalSearchString;


                    hasLocalSearchString = true;

                }
                var selectedTab = LocalStorageHelper.getItem<string>("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab");
                if (selectedTab != null) {
                    this.lstStatusSelectTabTHDTKhoa = JSON.parse(selectedTab);
                    if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
                        if (additionalSearchString != null && this.gridChoDuyet != undefined) {
                            this.gridChoDuyet._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefault = additionalSearchString;

                    } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                        if (additionalSearchString != null && this.gridChildDaXuLy != undefined) {
                            this.gridChildDaXuLy._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefaultDaXuLy = additionalSearchString;

                    } else {
                        if (additionalSearchString != null && this.gridChildTuChoi != undefined) {
                            this.gridChildTuChoi._additionalSearchString = additionalSearchString;
                        }
                        this.addtionStringDefaultTuChoi = additionalSearchString;

                    }
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            LocalStorageHelper.removeItem('additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa');
            LocalStorageHelper.removeItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTab");
        }
    }

    onKey(event: any) {
        if (event.key === 'Enter') {
            this.timKiem();
        }
    }


    TooltipCustom(duTruGiamDocDetail: any) {
        this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
        this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
    }

    searchChanges(event: any) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            if (self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
                if (self.gridChoDuyet != undefined) {
                    self.gridChoDuyet.searchString = null;
                }
            } else if (self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
                if (self.gridChildDaXuLy != undefined) {
                    self.gridChildDaXuLy.searchString = null;
                }
            } else {
                if (self.gridChildTuChoi != undefined) {
                    self.gridChildTuChoi.searchString = null;
                }
            }
            self.timKiem();
        }
    }

    theFirstValueFormat(str: string) {
        let strGroup = str.split('.');
        if (strGroup.length != 0) {
            return strGroup[0];
        }
    }

    theFirstValueFormatChuKy(str: string) {
        let strGroup = str.split('.');
        if (strGroup.length != 0) {
            if (strGroup[1] !== undefined) {
                return strGroup[1];
            }
        }
    }

    timKiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');

        //Chờ duyệt
        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.DenNgay = null;
        }

        //Đã xử lý

        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateDaXuLy.DenNgay = null;
        }

        //Từ chối

        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDate.TuNgay = null;
        }
        if (this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate != null) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.RangeFromDateTuChoi.DenNgay = null;
        }
        var queryString = JSON.stringify(this.danhSachTongHopDuTruMuaVatTuTaiKhoa);

        if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
            if (this.gridChoDuyet != undefined && this.gridChoDuyet != null) {
                this.gridChoDuyet._additionalSearchString = queryString;
                this.gridChoDuyet.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);

        } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
            if (this.gridChildDaXuLy != undefined && this.gridChildDaXuLy != null) {
                this.gridChildDaXuLy._additionalSearchString = queryString;
                this.gridChildDaXuLy.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);

        } else {
            if (this.gridChildTuChoi != undefined && this.gridChildTuChoi != null) {
                this.gridChildTuChoi._additionalSearchString = queryString;
                this.gridChildTuChoi.search();
            }
            this.unSelectedTab();
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
            let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryStringLstselectedTab);
        }

        LocalStorageHelper.setItem('additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK', queryString);
    }

    guiKhoaDuyetTatCa(val: any) {
        const kyDuTruMuaDuocPhamVatTuId = this.tongHopDuTruMuaVatTuTaiKhoa.
            filter(cc => cc.TrangThai === val).map(cc => cc.KyDuTruMuaDuocPhamVatTuId)[0];
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/gui/' + kyDuTruMuaDuocPhamVatTuId]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    tuChoiDuyet(id: number) { }

    huyDuyet(id: number) { }


    chiTiet(id: number, trangThai: any) {
        if (trangThai === 1 || trangThai === 0) { // Đã duyệt hoặc từ chối
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
                this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/' + id]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        } else { // Chưa duyệt
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/' + id + "/" + false]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }

    }

    chiTietTuChoi(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
            this.router.navigate(['/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/' + id]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    inPhieuLinh(id: number) {

    }


    loadingPage() {
        this.popupLoadingData = this.dialog.open(LoadingComponent, {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' },
        });
    }

    TuChoi(id: any) {
        if (
            this.authService.hasPermission(this.documentType, SecurityOperation.Update)
        ) {
            if (this.confrim != null) {
                this.dialog.closeAll();
                this.confrim = null;
            }
            this.confrim = this.dialog.open(null, {
                disableClose: true,
                width: '400px',
                height: '300px',
            }).afterClosed().subscribe((result) => {
                if (result !== '' && result) {
                    this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
                    this.thongTinLyDoHuyDuyetTaiKhoa.Id = id;
                    this.apiService.post<any>('YeuCauMuaKSNK/TuChoiDuyetTaiKhoa', this.thongTinLyDoHuyDuyetTaiKhoa)
                        .subscribe((resultData) => {
                            if (resultData !== null && resultData !== undefined) {
                                if (resultData) {
                                    this.gridChoDuyet.search();
                                    this.notificationService.showSuccess('Từ chối duyệt thành công.');
                                }
                            }
                        });
                }
            });

        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    PheDuyet(id: any) {
        this.duyetDuTruMuaVatTuViewModel.DuTruMuaVatTuId = id;
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
            }).afterClosed()
                .subscribe((result) => {
                    if (result === 'Yes') {
                        this.apiService.post<any>('YeuCauMuaKSNK/DuyetTaiKhoa/', this.duyetDuTruMuaVatTuViewModel)
                            .subscribe((resultData) => {
                                if (resultData !== null && resultData !== undefined) {
                                    if (resultData) {
                                        this.gridChoDuyet.search();
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
                                        this.gridChoDuyet.search();
                                        this.notificationService.showSuccess('Hủy duyệt thành công.');
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

    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }

    changeTabParent() {
    }

    CheckboxChange($event, choDuyet: boolean = false, daDuyet: boolean = false) {
        this.router.navigateByUrl('/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa?holdQuery=true');
        if (choDuyet) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet = $event;
        } else if (daDuyet) {
            this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet = $event;
        }
        this.timKiem();
    }


    onDataBound(event) {
        if (event && event.Data.length > 0) {
            this.tongHopDuTruMuaVatTuTaiKhoa = event.Data;
        }
    }


    chiTietDaXuLyParent(id: number) {
        if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
            this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/" + id + "/" + true]);
        } else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }

    chiTietDaXuLy(id: number, tinhTrang: number, isParent: number) {
        // tinh trang => 1 : đã duyệt, 2: từ chối, isParent => 0: Cha, 1: Con
        if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 0) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
        else if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 1) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
        else if (tinhTrang == 0 && isParent == 0) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/duyet/" + id + "/" + true]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
        else if (tinhTrang == 0 && isParent == 1) {
            if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
                this.router.navigate(["/nhap-xuat/ksnk/tong-hop-mua-ksnk-tai-khoa/chi-tiet/" + id]);
            } else {
                this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
            }
        }
    }

    unSelectedTab() {
        this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
        this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
    }

    chuyenDen(element: any, event: any) {
        console.log("lstStatusSelectTabTHDTKhoa: ", this.lstStatusSelectTabTHDTKhoa)
        var self = this;
        self.location.replaceState(self.baseRoute + '?holdQuery=true');
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringdanhSachTongHopDuTruMuaVatTuTaiKhoa");
        if (event.index == 0 || event.title == "CHỜ XỬ LÝ") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
            this.addtionStringDefault = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchString !== undefined && addtionTemp.SearchString !== null && addtionTemp.SearchString !== "") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchString = addtionTemp.SearchString;
            }
        }
        else if (event.index == 1 || event.title == "ĐÃ GỬI") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
            this.addtionStringDefaultDaXuLy = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchStringDaXuLy !== undefined && addtionTemp.SearchStringDaXuLy !== null && addtionTemp.SearchStringDaXuLy !== "") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringDaXuLy = addtionTemp.SearchStringDaXuLy;
            }
        }
        else if (event.index == 2 || event.title == "TỪ CHỐI") {
            self.unSelectedTab();
            self.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
            let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
            LocalStorageHelper.setItem("additionalSearchStringTHDTVatTuTaiKhoaSelectedTabNhomKSNK", queryString);
            this.addtionStringDefaultTuChoi = additionalSearchString;
            let addtionTemp = JSON.parse(additionalSearchString);
            if (addtionTemp != null && addtionTemp.SearchStringTuChoi !== undefined && addtionTemp.SearchStringTuChoi !== null && addtionTemp.SearchStringTuChoi !== "") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.SearchStringTuChoi = addtionTemp.SearchStringTuChoi;
            }
        }
    }


    trangThaiCheckBox(event: any, tinhTrang: any, tabSelected: any) {
        if (tabSelected == 1) {
            if (tinhTrang == "choduyet") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaGuiChoDuyet = event;
            }
            if (tinhTrang == "daduyet") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyetDaXuLy = event;
            }
            if (tinhTrang == "tuchoi") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.TuChoiDuyet = event;
            }
            this.timKiem();
        }
        else {
            if (tinhTrang == "choduyet") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.ChoDuyet = event;
            }
            if (tinhTrang == "chogoi") {
                this.danhSachTongHopDuTruMuaVatTuTaiKhoa.DaDuyet = event;
            }
            this.timKiem();
        }
    }
    blur() {
        this.timKiem();
    }
}
