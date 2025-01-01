export class TongHopYLenhTimKiem {
    public constructor(
        public SearchString: string = null,
        public KhoaId: number = null,
        public PhongId: number = null,
        public ChuaHoanThanh: boolean = false,
        public NgayYLenh: Date = null,
        public strNgayYLenh: string = null
        ){}
}

export class TongHopYLenhThongTinBenhAn {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public TenGioiTinh: string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public SoBenhAn: string = null,
        public LoaiBenhAn: string = null,
        public Khoa: string = null,
        public BacSiDieuTri: string = null,
        public Phong: string = null,
        public Giuong: string = null,
        public DoiTuong: number = null,
        public NgayDieuTri: Date = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
        ){}
}

export class TongHopYLenhThem {
    public constructor(
        //public NoiTruPhieuDieuTriId: number = null,
        public NoiTruBenhAnId: number = null,
        public NgayYLenh: string = null,
        public GioYLenh: number = null,
        public DienBien: string = null,
        public MoTaYLenh: string = null,
        public NhanVienXacNhanThucHienId: number = null,
        public NhanVienXacNhanThucHienDisplay: string = null,
        public ThoiDiemXacNhanThucHien: Date = null,
        public GioThucHien: number = null,
        public XacNhanThucHien: boolean = null
        ){}
}

export class TongHopYLenhPhieuDieuTri {
    public constructor(
        //public NoiTruPhieuDieuTriId: number = null,
        public NoiTruBenhAnId: number = null,
        public NgayYLenh: Date = null,
        public NgayYLenhDisplay: string = null,
        public IsDisableEdit: boolean = true,
        public CoYLenhThemMoi: boolean = null,
        public TongHopYLenhDienBiens: Array<TongHopYLenhDienBien> = Array<TongHopYLenhDienBien>()
    ) { }
}

export class TongHopYLenhDienBien {
    public constructor(
        public Id: number = null,
        public GioYLenh: number = null,
        public GioYLenhDisplay: string = null,
        public DienBien: string = null,

        public TongHopYLenhDienBienChiTiets: Array<TongHopYLenhDienBienChiTiet> = new Array<TongHopYLenhDienBienChiTiet>()
    ) { }
}

export class TongHopYLenhDienBienChiTiet {
    public constructor(
        public Id: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public MoTaYLenh: string = null,
        public GioYLenh: number = null,
        public NhanVienXacNhanThucHienId: number = null,
        public NhanVienXacNhanThucHienDisplay: string = null,
        public GioThucHien: number = null,
        public XacNhanThucHien: boolean = null,

        public NhanVienCapNhatId: number = null,
        public NhanVienCapNhatDisplay: string = null,
        public ThoiDiemCapNhat: Date = null,
        public ThoiDiemCapNhatDisplay: string = null,

        public NhanVienChiDinhId: number = null,
        public NhanVienChiDinhDisplay: string = null,
        public NoiChiDinhId: number = null
    ) { }
}