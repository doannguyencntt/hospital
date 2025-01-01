import { ThongTinChiTietTonKho } from '../../duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model';

export class YeuCauMuaVatTuGridVo {
    constructor(
        public SoPhieu: string = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public RangeFromDate: RangeDate = new RangeDate(),
        public FromDate: any = null,
        public ToDate: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public SearchString: string = null,
    ) {
    }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: any = null,
        public DenNgay: any = null,
    ) { }
}

export class YeuCauMuaVatTu {
    constructor(
        public Id: number = 0,
        public SoPhieu: string = null,
        public KhoId: number = null,
        public NhanVienYeuCauId: string = null,
        public NgayYeuCau: Date = null,
        public KyDuTruMuaDuocPhamVatTuId: number = null,
        public GhiChu: string = null,
        public TruongKhoaId: number = null,
        public TruongKhoaDuyet: boolean = null,
        public TenKho: string = null,
        public TenNhanVienYeuCau: string = null,
        public TenNhomDuTru: string = null,
        public TenKyDuTru: string = null,
        public NgayTaiKhoa: Date = null,
        public NgayKhoDuoc: Date = null,
        public NgayGiamDoc: Date = null,
        public TrangThai: number = null,
        public TenTruongKhoa: string = null,
        public NgayTruongKhoaDuyet: Date = null,
        public TenNhanVienKhoDuoc: string = null,
        public NgayKhoDuocDuyet: Date = null,
        public TenGiamDoc: string = null,
        public NgayGiamDocDuyet: Date = null,
        public LyDoTruongKhoaTuChoi: string = null,
        public DuTruMuaVatTuChiTiets: YeuCauMuaVatTuChiTiet[] = [],

    ) {
    }
}

export class YeuCauMuaVatTuChiTiet {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public VatTuId: number = null,
        public LaVatTuBHYT: boolean = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public SoLuongDuTruTaiKhoaDuyet: number = null,
        public NhomDieuTriDuPhong: number = null,
        public GhiChu: string = null,
        public DuTruMuaVatTuTheoKhoaChiTietId: number = null,
        public DuTruMuaVatTuKhoDuocChiTietId: number = null,
    ) {
    }
}

export class PhieuYeuCauMuaVatTu {
    constructor(
        public DuTruMuaVatTuId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null,
        public TrangThai: boolean = null
    ) {
    }
}

export class ThongTinVatTuChiTiet {
    constructor(
        public STT: number = 0,
        public Id: number = 0,
        public NhomVatTuId: number = null,
        public VatTuId: number = null,
        public LaVatTuBHYT: boolean = null,
        public Ma: string = null,
        public DVT: string = null,
        public QuyCach: string = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public SoLuongTonDuTru: number = null,
        public SoLuongTonKhoTong: number = null,
        public SoLuongChuaNhapVeHDT: number = null, // Hợp đồng thầu
        public ThongTinChiTietTonKhoTongs: ThongTinChiTietTonKho[] = [],
        public ThongTinChiTietTonHDTs: ThongTinChiTietTonKho[] = [],
        public LoaiVatTu: number = null,
        public TenLoaiVatTu: string = null,
        public Ten: string = null,
        public SLTonDuTru: number = null,
        public SLTonKhoTong: number = null,
        public SLChuaNhapVeHDT: number = null,
        public SoLuongDuTruTaiKhoaDuyet: number = null,
        public SoLuongDuTruKhoaDuocDuyet: number = null,
        public SoLuongDuTruGiamDocDuyet: number = null,
        public KhoId: number = null,
        public IsThemVatTu: boolean = false,
        public GhiChu: string = null,
        public YeuCauMuaVatTuChiTietValidators: YeuCauMuaVatTuChiTietValidator[] = [],

    ) {
    }
}

export class YeuCauMuaVatTuChiTietValidator {
    constructor(
        public VatTuId: number = 0,
        public LaVatTuBHYT: boolean = null,
    ) { }
}