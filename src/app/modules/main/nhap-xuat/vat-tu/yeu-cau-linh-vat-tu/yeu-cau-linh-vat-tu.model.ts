import { Sort } from 'src/app/shared/models/common.model';

export class SearchNgay {
    constructor(
        public NgayYeuCauRangDate: rangeDate = new rangeDate,
        public NgayDuyetRangDate: rangeDate = new rangeDate,
        public TrangThaiCheck: number = 4
    ) { }
}
export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
}
export class TrangThaiTaoPhieuLinh {
    constructor(
        public TrangThai: boolean = null,
        public Ten: string = null,
        public EnumTrangThaiPhieuLinh: number = null
    ) { }
}
export class YeuCauLinhVatTu {
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
        public TenNhanVienDuyet: string = null,
        public TenNhanVienYeuCau: string = null,
        public IsLuu: boolean = false,
        public LaNguoiTaoPhieu: boolean = null,
        public LastModified: any = null,
        public DaGui: boolean = false,
        public ThoiDiemChiDinhTu: any = null,
        public ThoiDiemChiDinhDen: any = null,
        public YeuCauLinhVatTuChiTiets: YeuCauLinhVatTuChiTiet[] = [],
        public YeuCauVatTuBenhViens: YeuCauVatTuBenhVienViewModel[] = [],
    ) { }
}

export class YeuCauVatTuBenhVienViewModel {
    constructor(
        public Id: number = 0,
        public YeuCauVatTuBenhVienIds: string = null,
        public VatTuBenhVienId: number = 0,
        public LaVatTuBHYT: boolean = null,
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


export class YeuCauLinhVatTuChiTiet {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public YeuCauLinhVatTuId: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = null,
        public SoLuong: number = null,
        public NgayYeuCau: Date = null,
        public Ma: string = null,
        public Ten: string = null,
        public DVT: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SLYeuCau: number = null,
        public SoLuongCoTheXuat: number = null,
        public LoaiVatTu: number = null,
        public SLTon: number = null,
        public SLCanBu: number = null,
        public Nhom: string = null,
        public VatTuBenhViens: VatTuGridViewModelValidator[] = [],
        public DuocDuyet: boolean = null,
        public KhoXuatId: number = null,
        public IsValidator: boolean = null,

    ) { }
}

export class VatTuGridViewModelValidator {
    constructor(
        public VatTuBenhVienId: number = 0,
        public LaVatTuBHYT: boolean = null,
    ) { }
}

export class PhieuLinhVatTuThuong {
    constructor(
        public YeuCauLinhVatTuId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null,
        public LoaiPhieuLinh: number = null,
        public TrangThai: boolean = null
    ) {
    }
}
export class VatTuCanBuSearch {
    constructor(
        public KhoLinhId: number = null,
        public KhoBuId: number = null
    ) { }
}

export class VatTuCanLinhTrucTiepSearch {
    constructor(
        public KhoLinhId: number = null,
        public PhongLinhVeId: number = null
    ) { }
}

export class LinhVatTuTrucTiep {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoXuat: string = null,
        public KhoNhapId: number = null,
        public LoaiPhieuLinh: number = null,
        public NhanVienYeuCauId: number = null,
        public NgayYeuCau: Date = null,

        public NguoiDuyet: number = null,
        public NgayDuyet: Date = null,
        public LyDoKhongDuyet: string = null,
        public GhiChu: string = null,
        // public ThongTinLinhTuKhoObject: ThongTinLinhTuKho = null,
        public YeuCauLinhVatTuChiTiets: LinhTrucTiepVatTu[] = [],
        public YeuCauVatTuBenhViensTT: KhoId[] = [],
        public YeuCauVatTuBenhVienIds: ListIds[] = [],
        public CheckKhiTao: any[] = [],
        public DanhSachVatTuTonKhongDus :VatTuTonKhoKhongDu[] =[],
        public ThoiDiemLinhTongHopTuNgay : Date = null,
        public ThoiDiemLinhTongHopDenNgay : Date = null,
        public YeuCauLinhVatTuId :number = null,
    ) {
    }
}
export class ListIds {
    constructor(
        public Id: number = 0,
    ) {
    }
}
export class LinhTrucTiepVatTu {
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
        public SoLuong : number = null,
        public Nhom: string = null,
        public VatTuBenhVienId: number = 0,
        public CheckKhiTao: any[] = [],
        public YeuCauLinhVatTuChiTiets: LinhTrucTiepVatTu[] = [],
        public YeuCauVatTuBenhViensTT: KhoId[] = [],
        public YeuCauVatTuBenhVienIds: any[] = [],
        public YeuCauTiepNhanId: number = 0,
        public DanhSachVatTuTonKhongDus :VatTuTonKhoKhongDu[] =[],
        public ThoiDiemLinhTongHopTuNgay : Date = null,
        public ThoiDiemLinhTongHopDenNgay : Date = null,
        public Goi :boolean = null
    ) {
    }
}
export class KhoId {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
    ) { }
}

export class KhoLinhTu {
    constructor(
        public KeyId: number = null,
        public DisplayName: string = "",
        public YeuCauVatTuBenhVienIds: KhoId[] = [],
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
export class PhieuLinhVatTuTrucTiep {
    constructor(
        public YeuCauLinhVatTuId: number = 0,
        public Hosting: string = null,
        public Header: boolean = null,
        public TrangThaiIn : boolean = null
    ) {
    }
}
export class XemTruocPhieuLinhVatTuTrucTiep {
    constructor(
       
        public Hosting: string = null,
        public YeuCauVatTuBenhVienIds: any[] = [],
        public KhoLinhId : number = 0,
        public ThoiDiemLinhTongHopTuNgay : Date = null,
        public ThoiDiemLinhTongHopDenNgay : Date = null,
    ) {
    }
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
}export class LinhVatTuGridVo  {
    constructor(
        public NgayYeuCauRangDateStartDate: string =null,
        public NgayYeuCauRangDateStartEnd: string =null,
        public NgayDuyetRangDateStartDate: string =null,
        public NgayDuyetRangDateStartEnd: string =null,
        public Searching: string =null,
        public TrangThaiCheck: number =null,
        public DangChoGoi: boolean = true,
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = null,
        public DaDuyet: boolean = null,
    ) { }
}
export class SearchDanhSachThongVatTu  {
    constructor(
        public TuNgay: Date = null,
        public DenNgay: Date = null
    ) { }
}
export class VatTuTonKhoKhongDu {
    constructor(
        public TenVatTu: string = null,
        public VatTuId: number = null,
        public SoLuongTon:number = null,
        public SoLuongYeuCau :number = null
    ) {
    }
}