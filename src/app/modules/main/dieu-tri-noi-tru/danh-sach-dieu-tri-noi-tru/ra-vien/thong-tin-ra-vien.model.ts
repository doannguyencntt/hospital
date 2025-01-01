export class Common {
    public NoiKhoa = 1;
    public NhiKhoa = 2;
    public PhuKhoa = 3;
    public SanKhoaMo = 4;
    public SanKhoaThuong = 5;
    public NgoaiKhoa = 6;
    public ThamMy = 7;

    public Http = "http:";
    public DataTextUTF8 = "data:text/html;charset=utf-8,";
}

export class RaVienNoiTruKhoaNoiKhoaNhi {
    public constructor(
        public YeuCauTiepNhanId: number = null,

        public ChuanDoanNoiChuyenDenId: number = null,
        public TenChuanDoanNoiChuyenDen: string = null,
        public GhiChuChuanDoanNoiChuyenDen: string = null,

        public ChuanDoanKKBCapCuuId: number = null,
        public TenChuanDoanKKBCapCuu: string = null,
        public GhiChuChuanDoanKKBCapCuu: string = null,

        public NoiChuanDoanKhiVaoKhoaDieuTriId: number = null,
        public TenNoiChuanDoanKhiVaoKhoaDieuTri: string = null,
        public GhiChuNoiChuanDoanKhiVaoKhoaDieuTri: string = null,

        public ChuanDoanRaVienId: number = null,
        public TenChuanDoanRaVien: string = null,
        public GhiChuChuanDoanRaVien: string = null,
        public NguyenNhanRaVien: string = null,

        public SoNgayDieuTriBenhAnSoSinh: number = null,
        
        public TrieuChung: boolean = null,
        public DoPhauThuat: boolean = null,
        public DoThuThuat: boolean = null,
        public DoGayMe: boolean = null,
        public DoNhiemKhau: boolean = null,
        public Khac: boolean = null,
        public NguyenNhan: number = null,
        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],

        //=====================Ra viện==========================
        public KetQuaDieuTriId: number = null,
        public TenKetQuaDieuTri: string = null,

        public GiaPhauThuatId: number = null,
        public TenGiaPhauThuat: string = null,
        public ThoiGianRaVien: Date = new Date(),

        public HinhThucRaVienId: number = null,
        public TenHinhThucRaVien: string = null,
        public ThoiGianTuVong: Date = new Date(),

        public LyDoTuVongId: number = null,
        public TenLyDoTuVong: string = null,

        public NguyenNhanChinhTuVongId: number = null,
        public TenNguyenNhanChinhTuVong: string = null,

        public ChiTietChuanDoanTuVong: string = null,
        public KhamNghiemTuThi: boolean = null,

        public ChuanDoanTuThiId: number = null,
        public TenChuanDoanTuThi: string = null,
        public ChiTietChuanDoanTuThi: string = null,

        public HenTaiKham: boolean = null,
        public NgayHienTaiKham: Date = new Date(),
        public GhiChuTaiKham: string = null,

        public TongSoNgayDieuTri: number = null,
        public NguoiSuaCuoiCung: string = null,
        public NgaySuaCuoiCung: Date = new Date(),
        public NgaySuaCuoiCungDislay: string = null,

        public TuyenChuyenId: number = null,
        public TenTuyenChuyen: string = null,

        public BenhVienId: number = null,
        public TenBenhVien: string = null,
        public TinhTrangBenhNhanLucChuyenVien: string = null,

        public LyDoChuyenTuyenId: number = null,
        public TenLyDoChuyenTuyen: string = null,
        public ThoiGianChuyenVien: Date = new Date(),

        public NguoiHoTongId: number = null,
        public TenNguoiHoTong: string = null,

        public ChucVuNguoiHoTongId: number = null,
        public TenChucVuNguoiHoTong: string = null,

        public TrinhDoNguoiHoTongId: number = null,
        public TenTrinhDoNguoiHoTong: string = null,

        public PhuongTienNguoiHoTong: string = null,

        public loaiBenhAn: number = null,
    ) { }
}

export class RaVienNoiTruNgoaiKhoaThamMy {
    public constructor(
        public YeuCauTiepNhanId: number = null,

        public ChuanDoanNoiChuyenDenId: number = null,
        public TenChuanDoanNoiChuyenDen: string = null,
        public GhiChuChuanDoanNoiChuyenDen: string = null,

        public ChuanDoanKKBCapCuuId: number = null,
        public TenChuanDoanKKBCapCuu: string = null,
        public GhiChuChuanDoanKKBCapCuu: string = null,

        public NoiChuanDoanKhiVaoKhoaDieuTriId: number = null,
        public TenNoiChuanDoanKhiVaoKhoaDieuTri: string = null,
        public GhiChuNoiChuanDoanKhiVaoKhoaDieuTri: string = null,

        public TrieuChung: boolean = null,

        public DoPhauThuat: boolean = null,
        public DoGayMe: boolean = null,
        public DoNhiemKhau: boolean = null,
        public Khac: boolean = null,

        public TongSoNgayDieuTriSauPT: number = null,
        public TongSoLanPT: number = null,

        public ChuanDoanRaVienId: number = null,
        public TenChuanDoanRaVien: string = null,
        public GhiChuChuanDoanRaVien: string = null,
        public NguyenNhan: number = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],

        public ChuanDoanTruocPhauThuatId: number = null,
        public TenChuanDoanTruocPhauThuat: string = null,
        public GhiChuChuanDoanTruocPhauThuat: string = null,

        public ChuanDoanSauPhauThuatId: number = null,
        public TenChuanDoanSauPhauThuat: string = null,
        public GhiChuChuanDoanSauPhauThuat: string = null,

        //=====================Ra viện==========================
        public KetQuaDieuTriId: number = null,
        public TenKetQuaDieuTri: string = null,

        public GiaPhauThuatId: number = null,
        public TenGiaPhauThuat: string = null,
        public ThoiGianRaVien: Date = new Date(),

        public HinhThucRaVienId: number = null,
        public TenHinhThucRaVien: string = null,
        public ThoiGianTuVong: Date = new Date(),

        public LyDoTuVongId: number = null,
        public TenLyDoTuVong: string = null,

        public NguyenNhanChinhTuVongId: number = null,
        public TenNguyenNhanChinhTuVong: string = null,

        public ChiTietChuanDoanTuVong: string = null,
        public KhamNghiemTuThi: boolean = null,

        public ChuanDoanTuThiId: number = null,
        public TenChuanDoanTuThi: string = null,
        public ChiTietChuanDoanTuThi: string = null,

        public HenTaiKham: boolean = null,
        public NgayHienTaiKham: Date = new Date(),
        public GhiChuTaiKham: string = null,

        public TongSoNgayDieuTri: number = null,
        public NguoiSuaCuoiCung: string = null,
        public NgaySuaCuoiCung: Date = new Date(),
        public NgaySuaCuoiCungDislay: string = null,

        public TuyenChuyenId: number = null,
        public TenTuyenChuyen: string = null,

        public BenhVienId: number = null,
        public TenBenhVien: string = null,
        public TinhTrangBenhNhanLucChuyenVien: string = null,

        public LyDoChuyenTuyenId: number = null,
        public TenLyDoChuyenTuyen: string = null,
        public ThoiGianChuyenVien: Date = new Date(),

        public NguoiHoTongId: number = null,
        public TenNguoiHoTong: string = null,

        public ChucVuNguoiHoTongId: number = null,
        public TenChucVuNguoiHoTong: string = null,

        public TrinhDoNguoiHoTongId: number = null,
        public TenTrinhDoNguoiHoTong: string = null,

        public PhuongTienNguoiHoTong: string = null
    ) { }
}

export class RaVienNoiTruPhuKhoa {
    public constructor(
        public YeuCauTiepNhanId: number = null,

        public ChuanDoanNoiChuyenDenId: number = null,
        public TenChuanDoanNoiChuyenDen: string = null,
        public GhiChuChuanDoanNoiChuyenDen: string = null,

        public ChuanDoanKKBCapCuuId: number = null,
        public TenChuanDoanKKBCapCuu: string = null,
        public GhiChuChuanDoanKKBCapCuu: string = null,

        public NoiChuanDoanKhiVaoKhoaDieuTriId: number = null,
        public TenNoiChuanDoanKhiVaoKhoaDieuTri: string = null,
        public GhiChuNoiChuanDoanKhiVaoKhoaDieuTri: string = null,

        public TrieuChung: boolean = null,

        public DoPhauThuat: boolean = null,
        public DoGayMe: boolean = null,
        public DoNhiemKhau: boolean = null,
        public Khac: boolean = null,

        public TongSoNgayDieuTriSauPT: number = null,
        public TongSoLanPT: number = null,

        public ChuanDoanRaVienId: number = null,
        public TenChuanDoanRaVien: string = null,
        public GhiChuChuanDoanRaVien: string = null,
        public NguyenNhan: number = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],

        public ChuanDoanTruocPhauThuatId: number = null,
        public TenChuanDoanTruocPhauThuat: string = null,
        public GhiChuChuanDoanTruocPhauThuat: string = null,

        public ChuanDoanSauPhauThuatId: number = null,
        public TenChuanDoanSauPhauThuat: string = null,
        public GhiChuChuanDoanSauPhauThuat: string = null,

        //=====================Ra viện==========================
        public KetQuaDieuTriId: number = null,
        public TenKetQuaDieuTri: string = null,

        public GiaPhauThuatId: number = null,
        public TenGiaPhauThuat: string = null,
        public ThoiGianRaVien: Date = new Date(),

        public HinhThucRaVienId: number = null,
        public TenHinhThucRaVien: string = null,
        public ThoiGianTuVong: Date = new Date(),

        public LyDoTuVongId: number = null,
        public TenLyDoTuVong: string = null,

        public NguyenNhanChinhTuVongId: number = null,
        public TenNguyenNhanChinhTuVong: string = null,

        public ChiTietChuanDoanTuVong: string = null,
        public KhamNghiemTuThi: boolean = null,

        public ChuanDoanTuThiId: number = null,
        public TenChuanDoanTuThi: string = null,
        public ChiTietChuanDoanTuThi: string = null,

        public HenTaiKham: boolean = null,
        public NgayHienTaiKham: Date = new Date(),
        public GhiChuTaiKham: string = null,

        public TongSoNgayDieuTri: number = null,
        public NguoiSuaCuoiCung: string = null,
        public NgaySuaCuoiCung: Date = new Date(),
        public NgaySuaCuoiCungDislay: string = null,

        public TuyenChuyenId: number = null,
        public TenTuyenChuyen: string = null,

        public BenhVienId: number = null,
        public TenBenhVien: string = null,
        public TinhTrangBenhNhanLucChuyenVien: string = null,

        public LyDoChuyenTuyenId: number = null,
        public TenLyDoChuyenTuyen: string = null,
        public ThoiGianChuyenVien: Date = new Date(),

        public NguoiHoTongId: number = null,
        public TenNguoiHoTong: string = null,

        public ChucVuNguoiHoTongId: number = null,
        public TenChucVuNguoiHoTong: string = null,

        public TrinhDoNguoiHoTongId: number = null,
        public TenTrinhDoNguoiHoTong: string = null,

        public PhuongTienNguoiHoTong: string = null

    ) { }
}

export class RaVienNoiTruSanKhoaThuong {
    public constructor(
        public YeuCauTiepNhanId: number = null,

        public ChuanDoanNoiChuyenDenId: number = null,
        public TenChuanDoanNoiChuyenDen: string = null,
        public GhiChuChuanDoanNoiChuyenDen: string = null,

        public ChuanDoanKKBCapCuuId: number = null,
        public TenChuanDoanKKBCapCuu: string = null,
        public GhiChuChuanDoanKKBCapCuu: string = null,

        public NoiChuanDoanKhiVaoKhoaDieuTriId: number = null,
        public TenNoiChuanDoanKhiVaoKhoaDieuTri: string = null,
        public GhiChuNoiChuanDoanKhiVaoKhoaDieuTri: string = null,

        public NoiChuanDoanLucVaoDeId: number = null,
        public TenNoiChuanDoanLucVaoDe: string = null,
        public GhiChuNoiChuanDoanLucVaoDe: string = null,

        public NgayDe: Date = new Date(),
        public NgoiThai: string = null,

        public CachThucDe: string = null,
        public KiemXoatTuCung: string = null,

        public TrieuChung: boolean = null,
        public TaiBien: boolean = null,
        public BienChung: boolean = null,

        public DoPhauThuat: boolean = null,
        public DoGayMe: boolean = null,
        public DoNhiemKhau: boolean = null,
        public Khac: boolean = null,

        public TinhTrangCapCuuChuDong: boolean = null,
        public CapCuu: boolean = null,
        public ChuDong: boolean = null,

        public PhuongPhapPhauThuat: string = null,
        public DanhSachTreSoSinhs: DanhSachTreSoSinh[] = [],

        public TongSoNgayDieuTriSauPT: number = null,
        public TongSoLanPT: number = null,

        public ChuanDoanTruocPhauThuatId: number = null,
        public TenChuanDoanTruocPhauThuat: string = null,
        public GhiChuChuanDoanTruocPhauThuat: string = null,

        public ChuanDoanSauPhauThuatId: number = null,
        public TenChuanDoanSauPhauThuat: string = null,
        public GhiChuChuanDoanSauPhauThuat: string = null,

        //=====================Ra viện==========================
        public KetQuaDieuTriId: number = null,
        public TenKetQuaDieuTri: string = null,

        public GiaPhauThuatId: number = null,
        public TenGiaPhauThuat: string = null,
        public ThoiGianRaVien: Date = new Date(),

        public HinhThucRaVienId: number = null,
        public TenHinhThucRaVien: string = null,
        public ThoiGianTuVong: Date = new Date(),

        public LyDoTuVongId: number = null,
        public TenLyDoTuVong: string = null,

        public NguyenNhanChinhTuVongId: number = null,
        public TenNguyenNhanChinhTuVong: string = null,

        public ChiTietChuanDoanTuVong: string = null,
        public KhamNghiemTuThi: boolean = null,

        public ChuanDoanTuThiId: number = null,
        public TenChuanDoanTuThi: string = null,
        public ChiTietChuanDoanTuThi: string = null,

        public HenTaiKham: boolean = null,
        public NgayHienTaiKham: Date = new Date(),
        public GhiChuTaiKham: string = null,

        public TongSoNgayDieuTri: number = null,
        public NguoiSuaCuoiCung: string = null,
        public NgaySuaCuoiCung: Date = new Date(),
        public NgaySuaCuoiCungDislay: string = null,

        public TuyenChuyenId: number = null,
        public TenTuyenChuyen: string = null,

        public BenhVienId: number = null,
        public TenBenhVien: string = null,
        public TinhTrangBenhNhanLucChuyenVien: string = null,

        public LyDoChuyenTuyenId: number = null,
        public TenLyDoChuyenTuyen: string = null,
        public ThoiGianChuyenVien: Date = new Date(),

        public NguoiHoTongId: number = null,
        public TenNguoiHoTong: string = null,

        public ChucVuNguoiHoTongId: number = null,
        public TenChucVuNguoiHoTong: string = null,

        public TrinhDoNguoiHoTongId: number = null,
        public TenTrinhDoNguoiHoTong: string = null,

        public PhuongTienNguoiHoTong: string = null,

        //câp nhât 29/01/2021
        public ChonThai: boolean = null,
        public ChonTraiGai: boolean = null,
        public ChonSongChet: boolean = null,

        public ChonTrai: boolean = null,
        public SoLuongTrai: number = null,
        public ChonTraiSong: boolean = null,
        public SoLuongTraiSong: number = null,
        public ChonTraiChet: boolean = null,
        public SoLuongTraiChet: number = null,

        public ChonGai: boolean = null,
        public SoLuongGai: number = null,
        public ChonGaiSong: boolean = null,
        public SoLuongGaiSong: number = null,
        public ChonGaiChet: boolean = null,
        public SoLuongGaiChet: number = null,

        public DiTatThai: string = null,
        public CanNang: number = null,
    ) { }
}

export class ThongTinChuanDoanKemTheo {
    constructor(
        public ICD: number = null,
        public TenICD: string = null,
        public ChuanDoan: string = null,
    ) { }
}

export class DanhSachTreSoSinh {
    constructor(
        public GioiTinhId: number = null,
        public GioiTinh: string = null,

        public TinhTrangId: number = null,
        public TenTinhTrang: string = null,

        public DiTat: string = null,
        public CanNang: number = null,
    ) { }
}
export class UpdateDieuTriSoSinhRaVienViewModel {
    constructor(       
        public ThoiGianDieuTriSoSinhRaVienViewModel: ThoiGianDieuTriSoSinhRaVienViewModel[] = new Array<ThoiGianDieuTriSoSinhRaVienViewModel>()      
    ) { }
}

export class ThoiGianDieuTriSoSinhRaVienViewModel {
    constructor(
        public NgayDieuTriString: string = null,
        public NoiTruBenhAnId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public ThoiGianDieuTriSoSinhViewModels: ThoiGianDieuTriSoSinhViewModel[] = new Array<ThoiGianDieuTriSoSinhViewModel>()      
    ) { }
}

export class ThoiGianDieuTriSoSinhViewModel {
    constructor(
        public Id: number = 0,
        public NgayDieuTriString: string = null,
        public GioBatDau: number = null,
        public GioKetThuc: number = null,
        public GhiChuDieuTri: string = null,
        public NoiTruBenhAnId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
    ) {
    }
}      