export class KhamDoanChiSoSinhTonTimKiem {
    public constructor(
        public CongTyId: number = null,
        public HopDongId: number = null,
        public NgayHopDong: Date = null,
        public LoaiHopDong: number = null,
        public TrangThai: number = null,
        public SoBenhNhan: number = null,
        public NgayHieuLuc: Date = null,
        public NgayKetThuc: Date = null,
        public DaTaoYCTN:boolean=true
    ) { }
}

export class KhamDoanChiSoSinhTonTimKiemGrid {
    public constructor(
        public SearchString: string = null,
        // tslint:disable-next-line: no-use-before-declare
        public TrangThai: KhamDoanTrangThai = new KhamDoanTrangThai(),
        public CongTyId: number = null,
        public HopDongId: number = null
    ) { }
}

export class KhamDoanTrangThai {
    public constructor(
        public ChuaKham: boolean = true,
        public DangKham: boolean = true,
        public DaKham: boolean = true
    ) { }
}

export class KhamDoanChiSoSinhTon {
    public constructor(
        public MaNv: string = null,
        public TenNv: string = null,
        public Dv: string = null,
        public GioiTinh: string = null,
        public NamSinh: string = null,
        public Sdt: string = null,
        public Email: string = null,
        public Cmt: string = null,
        public Shc: string = null,
        public DanToc: string = null,
        public TinhThanh: string = null,
        public NhomKham: string = null,
        public GhiChu: string = null,
        public TinhTrang: string = null
    ) { }
}

export class KhamDoanChiSoSinhTonDetailed {
    public constructor(
        public MaNhanVien: string = null,
        public HoTen: string = null,
        public HoTenKhac: string = null,
        public NgayThangNamSinh: any = null,
        public Tuoi: number = null,
        public SoDienThoaiDisplay: string = null,
        public GioiTinh: number = null,
        public NgheNghiepId: number = null,
        public NgheNghiep: string = null,
        public QuocTichId: number = null,
        public QuocTich: string = null,
        public DanTocId: number = null,
        public DanToc: string = null,
        public TinhThanhId: number = null,
        public TinhThanh: string = null,
        public QuanHuyenId: number = null,
        public QuanHuyen: string = null,
        public PhuongXaId: number = null,
        public PhuongXa: string = null,
        public DiaChi: string = null,
        public SoChungMinhThu: string = null,
        public Email: string = null,
        public TenDonViHoacBoPhan: string = null,
        public NhomMau: number = null,
        public NhomMauDisplay: string = null,
        public YeuToRh: number = null,
        public YeuToRhDisplay: string = null,
        public DaLapGiaDinhDisplay: string = null,
        public CoMangThai: boolean = null,
        public NhomDoiTuongKhamSucKhoe: string = null,
        public GhiChuTienSuBenh: string = null,
        public GhiChuDiUngThuoc: string = null
    ) { }
}

export class KetQuaSinhHieu {
    constructor(
        public Id: number = 0,
        public NhipTim: number = null,
        public NhipTho: number = null,
        public ThanNhiet: number = null,
        public HuyetAp: string = null,
        public HuyetApTamThu: number = null,
        public HuyetApTamTruong: number = null,
        public ChieuCao: number = null,
        public CanNang: number = null,
        public BMI: number = null,
        public SpO2: number = null,
        public Glassgow: number = null,
        public NoiThucHienId: number = null,
        public NhanVienThucHienId: number = null,
        public YeuCauTiepNhanId: number = 0,
        public NgayThucHien: string = null,
        public IsUpdate: boolean = false,
        public IsDelete: boolean = false,
        public KSKPhanLoaiTheLuc: number = 0,
    ) { }
}
