import { RangeDate } from '../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';

export class YeuCauMuaThuocGridVo {
    constructor(
        public SoPhieu: string = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public SearchString: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),

    ) {
    }
}



export class YeuCauMuaThuoc {
    constructor(
        public Id: number = 0,
        public SoPhieu: string = null,
        public KyDuTruMuaDuocPhamVatTuId: number = null,
        public NhomDuocPhamDuTru: number = null,
        public TenNhomDuTru: string = null,
        public TenKyDuTru: string = null,
        public KhoId: number = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: string = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public TruongKhoaId: number = null,
        public TruongKhoaDuyet: boolean = null,
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
        public GhiChu: string = null,
        public LyDoTruongKhoaTuChoi: string = null,
        public DuTruMuaDuocPhamChiTiets: YeuCauMuaThuocChiTiet[] = [],

    ) {
    }
}

export class YeuCauMuaThuocChiTiet {
    constructor(
        public STT: number = null,
        public Id: number = 0,
        public DuocPhamId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public SoLuongDuTruTaiKhoaDuyet: number = null,
        public NhomDieuTriDuPhong: number = null,
        public DuTruMuaDuocPhamTheoKhoaChiTietId: number = null,
        public DuTruMuaDuocPhamKhoDuocChiTietId: number = null,
        public GhiChu: string = null,
    ) {
    }
}
export class YeuCauMuaThuocChiTietValidator {
    constructor(
        public DuocPhamId: number = 0,
        public LaDuocPhamBHYT: boolean = null,
    ) { }
}

export class ThongTinThuocChiTiet {
    constructor(
        public STT: number = 0,
        public Id: number = 0,
        public DuocPhamId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public HoatChat: string = null,
        public SoDangKy: string = null,
        public NhomDuocPhamDuTru: number = null,
        public HamLuong: string = null,
        public DVT: string = null,
        public TenDuongDung: string = null,
        public DuongDungId: number = null,
        public DonViTinhId: number = null,
        public NhomDuTruId: number = null,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public NhomDuPhongId: number = null,
        public SoLuongTonDuTru: number = null,
        public SoLuongTonKhoTong: number = null,
        public SoLuongChuaNhapVeHDT: number = null, // Hợp đồng thầu
        public ThongTinChiTietTonKhoTongs: ThongTinChiTietTonKho[] = [],
        public ThongTinChiTietTonHDTs: ThongTinChiTietTonKho[] = [],
        public LoaiDuocPham: number = null,
        public TenLoaiDuocPham: string = null,
        public Ten: string = null,
        public NhomDieuTriDuPhong: number = null,
        public NhomDieuTriDuTru: string = null,
        public GhiChu: string = null,
        public SLTonDuTru: number = null,
        public SLTonKhoTong: number = null,
        public SLChuaNhapVeHDT: number = null,
        public SoLuongDuTruTaiKhoaDuyet: number = null,
        public SoLuongDuTruKhoaDuocDuyet: number = null,
        public SoLuongDuTruGiamDocDuyet: number = null,
        public NhomDuPhong: string = null,
        public KhoId: number = null,
        public IsThemDuocPham: boolean = false,
        public YeuCauMuaThuocChiTietValidators: YeuCauMuaThuocChiTietValidator[] = [],

    ) {
    }
}
export class ThongTinChiTietTonKho {
    constructor(
        public Ten: string = null,
        public SLTon: number = null,
        public SoLuongTon: string = null,
    ) {
    }
}

export class PhieuYeuCauMuaThuoc {
    constructor(
        public DuTruMuaDuocPhamId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null,
        public TrangThai: boolean = null
    ) {
    }
}
