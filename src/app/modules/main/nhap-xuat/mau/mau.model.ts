export class NhapKhoMauTimKiem {
    public constructor(
        public SearchString: string = null,
        public TrangThai: NhapKhoMauTimKiemTrangThai = new NhapKhoMauTimKiemTrangThai(),
        public TuNgayDenNgay: NhapKhoMauTimKiemDateRange = new NhapKhoMauTimKiemDateRange(),
        ){}
}

export class NhapKhoMauTimKiemTrangThai {
    public constructor(
        public ChoNhapGia: boolean = true,
        public DaNhapGia : boolean = true
        ){}
}

export class NhapKhoMauTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
        ){}
}


export class PhieuNhapKhoMau {
    public constructor(
        public SoPhieu: string = null,
        public SoHoaDon: string = null,
        public KyHieuHoaDon: string = null,
        public NgayHoaDon: Date = null,
        public LoaiNguoiGiao: number = 1,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public NhaThauId: number = null,
        public TenNhaThau: string = null,
        public NgayNhap: Date = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public DuocKeToanDuyet: boolean = null,
        public TenTrangThai: string = null,
        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,
        public GhiChu: string = null,
        public NhapKhoMauChiTiets: Array<NhapKhoMauChiTiet> = new Array<NhapKhoMauChiTiet>(),
        public InPhieu: boolean = false
        ){}
}

export class NhapKhoMauChiTiet {
    public constructor(
        public YeuCauTruyenMauId: number = null,
        public TenBenhNhanTruyenMau: string = null,
        public ThongTinYeuCauTruyenMau: any = null,
        public MauVaChePhamId: number = null,
        public TenMauVaChePham: string = null,
        public MaTuiMau: string = null,
        public MaDichVu: string = null,
        public TenDichVu: string = null,
        public PhanLoaiMau: number = null,
        public TheTich: number = null,
        public NhomMau: number = null,
        public TenNhomMau: string = null,
        public YeuToRh: number = null,
        public TenYeuToTh: string = null,
        public NgaySanXuat: Date = null,
        public HanSuDung: Date = null,
        public NgayLamXetNghiemHoaHop: Date = null,
        public NguoiLamXetNghiemHoaHopId: number = null,
        public NguoiLamXetNghiemHoaHop: string = null,        
        public NgayNhap: Date = null,
        public KetQuaXetNghiemSotRet: number = 1,
        public KetQuaXetNghiemGiangMai: number = 1,
        public KetQuaXetNghiemHCV: number = 1,
        public KetQuaXetNghiemHBV: number = 1,
        public KetQuaXetNghiemHIV: number = 1,
        public KetQuaPhanUngCheoOngI: number = 1,
        public KetQuaPhanUngCheoOngII: number = 1,
        public KetQuaXetNghiemMoiTruongMuoi: number = 1,
        public KetQuaXetNghiem37oCKhangGlubulin: number = 1,
        public KetQuaXetNghiemNAT: number = 1,
        public TenKetQuaXetNghiemSotRet: string = null,
        public TenKetQuaXetNghiemGiangMai: string = null,
        public TenKetQuaXetNghiemHCV: string = null,
        public TenKetQuaXetNghiemHBV: string = null,
        public TenKetQuaXetNghiemHIV: string = null,
        public TenKetQuaPhanUngCheoOngI: string = null,
        public TenKetQuaPhanUngCheoOngII: string = null,
        public TenKetQuaXetNghiemMoiTruongMuoi: string = null,
        public TenKetQuaXetNghiem37oCKhangGlubulin: string = null,
        public TenKetQuaXetNghiemNAT: string = null,
        public NguoiThucHien1: string = null,
        public NguoiThucHien2: string = null,

        public MaTuiMauDangNhaps: Array<string> = [],
        public YeuCauTruyenMauIdDangChons: Array<number> = [],
        public Index: number = null,
        public KetQuaXetNghiemKhacs: Array<KetQuaXetNghiemKhac> = new Array<KetQuaXetNghiemKhac>()
        ){}
}
export class KetQuaXetNghiemKhac {
    constructor(
        public LoaiXetNghiem: number = null,
        public TenLoaiXetNghiem: string = null,
        public KetQua: number = 1,
        public HienThiKetQuaKhac: string  = null
    ) { }
}

export class TrangThaiDuyetNhapKhoMau {
    constructor(
        public TenTrangThai: string = null,
        public DuocDuyet: boolean = null
    ) { }
}