import { Sort } from 'src/app/shared/models/common.model';

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,

    ) { }
}

export class SearchNgay {
    constructor(
        public NgayYeuCauRangDate: rangeDate = new rangeDate,
        public NgayDuyetRangDate: rangeDate = new rangeDate,
        public DangChoGoi: boolean = true,
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = true,
        public DaDuyet: boolean = true,
    ) { }
}

export class YeuCauLinhDuocPham {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoXuat: string = null,
        public KhoNhapId: number = null,
        public TenKhoNhap: string = null,
        public LoaiPhieuLinh: number = null,
        public NhanVienYeuCauId: number = null,
        public HoTenNguoiYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public NhanVienDuyetId: number = null,
        public HoTenNguoiDuyet: string = null,
        public NgayDuyet: Date = null,
        public GhiChu: string = null,
        public DuocDuyet: boolean = null,
        public LyDoKhongDuyet: string = null,
        public DaGui: boolean = false,
        public IsDisable: boolean = null,
        public IsDisableGui: boolean = null,
        public IsLuu: boolean = false,
        public LaNguoiTaoPhieu: boolean = null,
        public LastModified: any = null,
        public YeuCauLinhDuocPhamChiTiets: YeuCauLinhDuocPhamChiTiet[] = [],
        public YeuCauDuocPhamBenhViens: YeuCauDuocPhamBenhVienViewModel[] = [],
        // public NhapKhoDuocPhams: NhapKhoDuocPham[] = [],
        // public XuatKhoDuocPhams: XuatKhoDuocPham[] = [],
    ) { }
}

export class YeuCauLinhDuocPhamChiTiet {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauLinhDuocPhamId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public SoLuong: number = null,
        public NgayYeuCau: Date = null,
        public HamLuong: number = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public DuongDungId: number = null,
        public DuongDung: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SLYeuCau: number = null,
        public SoLuongCoTheXuat: number = null,
        public LoaiDuocPham: number = null,
        public SLTon: number = null,
        public Nhom: string = null,
        public DuocPhamBenhViens: DuocPhamGridViewModelValidator[] = [],
        public DuocDuyet: boolean = null,
        public KhoXuatId: number = 0,
        public IsValidator: boolean = null,

        public MayXetNghiemTenVaIds: string[] = null,
        public DanhSachMayXetNghiemId: string = null,
        public DanhSachTenMayXetNghiem: string = null,
    ) { }
}

export class DuocPhamGridViewModelValidator {
    constructor(
        public DuocPhamBenhVienId: number = 0,
        public LaDuocPhamBHYT: boolean = null,
    ) { }
}
export class NhapKhoDuocPham {
    constructor(
        public Id: number = null,
        public YeuCauNhapKhoDuocPhamId: number = null,
        public KhoId: number = null,
        public YeuCauLinhDuocPhamId: number = null,
        public SoChungTu: string = null,
        public XuatKhoDuocPhamId: number = null,
        public TenNguoiGiao: string = null,
        public NguoiGiaoId: number = null,
        public NguoiNhapId: number = null,
        public DaHet: boolean = null,
        public LoaiNguoiGiao: number = null,
        public NgayNhap: Date = null
    ) { }
}

export class XuatKhoDuocPham {
    constructor(
        public Id: number = null,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,
        public YeuCauLinhDuocPhamId: number = null,
        public SoPhieu: string = null,
        public LoaiXuatKho: number = null,
        public LyDoXuatKho: string = null,
        public TenNguoiNhan: string = null,
        public NguoiNhanId: number = null,
        public NguoiXuatId: number = null,
        public LoaiNguoiNhan: number = null,
        public NgayXuat: Date = null
    ) { }
}

export class DuocPhamGridViewModel {
    constructor(
        public STT: number = null,
        public DuocPhamBenhVienId: number = 0,
        public YeuCauLinhDuocPhamId: number = null,
        public HamLuong: number = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public DuongDungId: number = null,
        public DuongDung: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SLYeuCau: number = null,
        public LoaiDuocPham: number = null,
        public SLTon: number = null,
        public Nhom: string = null
    ) {
    }
}

export class PhieuLinhThuocThuong {
    constructor(
        public YeuCauLinhDuocPhamId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null,
        public LoaiPhieuLinh: number = null,
        public TrangThai: boolean = null
    ) {
    }
}

export class YeuCauLinhBuDuocPhamSearch {
    constructor(
        public LinhTuKhoId: number = null,
        public LinhVeKhoId: number = null,
        public YeuCauLinhDuocPhamId: number = null,
        public YeuCauLinhVatTuId: number = null,
        public IsCreate: boolean = null,
        public TrangThai: boolean = null,
        public ThoiDiemChiDinhTuFormat: any = null,
        public ThoiDiemChiDinhDenFormat: any = null,
        public ThoiDiemChiDinhTu: any = null,
        public ThoiDiemChiDinhDen: any = null,
    ) { }
}

export class YeuCauLinhBuDuocPham {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,
        public LoaiPhieuLinh: number = null,
        public NhanVienYeuCauId: number = null,
        public NgayYeuCau: Date = null,
        public GhiChu: string = null,
        public TenKhoXuat: string = null,
        public TenKhoNhap: string = null,
        public NhanVienDuyetId: number = null,
        public HoTenNguoiDuyet: string = null,
        public TenNhanVienDuyet: string = null,
        public TenNhanVienYeuCau: string = null,
        public NgayDuyet: Date = null,
        public DuocDuyet: boolean = null,
        public DaGui: boolean = false,
        public LyDoKhongDuyet: string = null,
        public HoTenNguoiYeuCau: string = null,
        public IsDisable: boolean = null,
        public IsDisableGui: boolean = null,
        public IsDisableInPhieu: boolean = null,
        public LastModified: any = null,
        public LaNguoiTaoPhieu: boolean = null,
        public ThoiDiemChiDinhTu: any = null,
        public ThoiDiemChiDinhDen: any = null,
        public YeuCauLinhDuocPhamChiTiets: YeuCauLinhBuDuocPhamChiTiet[] = [],
        public YeuCauDuocPhamBenhViens: YeuCauDuocPhamBenhVienViewModel[] = [],
    ) { }
}

export class YeuCauDuocPhamBenhVienViewModel {
    constructor(
        public Id: number = 0,
        public YeuCauDuocPhamBenhVienIds: string = null,
        public DuocPhamBenhVienId: number = 0,
        public LaDuocPhamBHYT: boolean = null,
        public KhoLinhTuId: number = null,
        public KhoLinhVeId: number = null,
        public SoLuongCanBu: number = null,
        public SoLuongTon: number = null,
        public SoLuongYeuCau: number = null,
        public SoLuongDaBu: number = null,
        public SLYeuCauLinhThucTe: number = null,
        public SLYeuCauLinhThucTeMax: number = null,
        public CheckBox: boolean = false,
    ) {
    }
}

export class YeuCauLinhBuDuocPhamChiTiet {
    constructor(
        public Id: number = 0,
        public YeuCauLinhDuocPhamId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public SoLuong: number = null,
        public NgayYeuCau: Date = null,
        public STT: number = null,
        public HamLuong: number = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public DuongDungId: number = null,
        public DuongDung: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SLYeuCau: number = null,
        public SLCanBu: number = null,
        public SLYeuCauLinhThucTe: number = null,
        public LoaiDuocPham: number = null,
        public SLTon: number = null,
        public Nhom: string = null,
        public LaBHYT: boolean = null,
        public YeuCauDuocPhamBenhVienIds: Array<number> = null,
    ) { }
}
export class KhoLinhTu {
    constructor(
        public KeyId: number = null,
        public DisplayName: string = "",
        public YeuCauDuocPhamBenhVienIds: KhoId[] = [],
    ) { }
}
export class KhoId {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
    ) { }
}
export class ThongTinLinhTuKho {
    constructor(
        public LinhVePhong: string = "",
        public NguoiYeuCau: string = "",
        public NgayYeuCau: string = "",
        public GhiChu: string = ""
    ) { }
}
export class LinhTrucTiepDuocPham {
    constructor(
        public Id: number = 0,
        public STT: number = null,
        public HamLuong: string = null,
        public Ten: string = null,
        public HoatChat: string = null,
        public DuongDung: string = null,
        public DVT: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SLYeuCau: number = null,
        public SoLuong: number = null,
        public Nhom: string = null,
        public DuocPhamBenhVienId: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public CheckKhiTao: number[] = [],
        public YeuCauLinhDuocPhamChiTiets: LinhTrucTiepDuocPham[] = [],
        public YeuCauDuocPhamBenhViensTT: KhoId[] = [],
        public YeuCauDuocPhamBenhIds: ListIds[] = [],
        public DanhSachDuocPhamTonKhongDus: DuocPhamTonKhoKhongDu[] = [],
        public ThoiDiemLinhTongHopTuNgay: Date = null,
        public ThoiDiemLinhTongHopDenNgay: Date = null,
        public Goi: boolean = null
    ) {
    }
}
export class LinhDuocPhamTrucTiep {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,
        public LoaiPhieuLinh: number = null,
        public NhanVienYeuCauId: number = null,
        public NgayYeuCau: Date = null,
        public GhiChu: string = null,
        public HoTenNguoiYeuCau: string = null,
        public NgayDuyet: Date = null,
        public NguoiDuyet: number = null,
        public LyDoKhongDuyet: string = null,
        public YeuCauLinhDuocPhamChiTiets: LinhTrucTiepDuocPham[] = [],
        public YeuCauDuocPhamBenhViensTT: KhoId[] = [],
        public YeuCauDuocPhamBenhIds: ListIds[] = [],
        public CheckKhiTao: any[] = [],
        public TenKhoXuat: string = null,
        public DanhSachDuocPhamTonKhongDus: DuocPhamTonKhoKhongDu[] = [],
        public ThoiDiemLinhTongHopTuNgay: Date = null,
        public ThoiDiemLinhTongHopDenNgay: Date = null,
        public YeuCauLinhDuocPhamId: number = null
    ) {
    }
}
export class ListIds {
    constructor(
        public Id: number = 0,
    ) {
    }
}
export class LinhDuocPhamTrucTiepViewModel {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,
        public LoaiPhieuLinh: number = null,
        public NhanVienYeuCauId: number = null,
        public NgayYeuCau: Date = null,
        public GhiChu: string = null,
        public HoTenNguoiYeuCau: string = null,
        public NgayDuyet: string = null,
        public NguoiDuyet: string = null,
        public TenKhoXuat: string = null

    ) {
    }
}

export class PhieuLinhThuocTrucTiep {
    constructor(
        public YeuCauLinhDuocPhamId: number = 0,
        public Hosting: string = null,
        public Header: boolean = null,
        public LoaiPhieuLinh: number = null,
        public TrangThaiIn: boolean = null
    ) {
    }
}
export class XemTruocPhieuLinhThuocTrucTiep {
    constructor(
        public Hosting: string = null,
        public YeuCauDuocPhamBenhVienIds: any[] = [],
        public KhoLinhId: number = 0,
        public ThoiDiemLinhTongHopTuNgay: Date = null,
        public ThoiDiemLinhTongHopDenNgay: Date = null,
    ) {
    }
}
export class TrangThaiDuyetYeuCauLinh {
    constructor(
        public TenTrangThai: string = null,
        public DuocDuyet: boolean = null
    ) { }
}

export class DaDuyet {
    constructor(
        public NguoiDuyet: string = null,
        public NgayDuyet: Date = null
    ) { }
}

export class ExportQueryInfoQueryInfo {
    constructor(
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}

export class DuocPhamCanBuSearch {
    constructor(
        public KhoLinhId: number = null,
        public KhoBuId: number = null
    ) { }
}
export class DuocPhamCanLinhTrucTiepSearch {
    constructor(
        public KhoLinhId: number = null,
        public PhongLinhVeId: number = null
    ) { }
}
export class LinhVatTuGridVo {
    constructor(
        public NgayYeuCauRangDateStartDate: string = null,
        public NgayYeuCauRangDateStartEnd: string = null,
        public NgayDuyetRangDateStartDate: string = null,
        public NgayDuyetRangDateStartEnd: string = null,
        public Searching: string = null,
        public TrangThaiCheck: number = null,
        public DangChoGoi: boolean = true,
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = null,
        public DaDuyet: boolean = null,
    ) { }
}
export class SearchDanhSachThongDuocPham {
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null
    ) { }
}
export class QueryInfoQueryInfo {
    constructor(
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class DuocPhamKhongTheTao {
    constructor(
        public TenDuocPham: string = null,
        public SoLuongTon: number = null,
        public SoLuongYeuCau: number = null,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class DuocPhamTonKhoKhongDu {
    constructor(
        public TenDuocPham: string = null,
        public DuocPhamId: number = null,
        public SoLuongTon: number = null,
        public SoLuongYeuCau: number = null
    ) {
    }
}

export enum ChangeDuocPhamBenhVienOrXetNghiem {  
    DuocPhamBenhVien = 1,
    XetNghiem = 2,
}