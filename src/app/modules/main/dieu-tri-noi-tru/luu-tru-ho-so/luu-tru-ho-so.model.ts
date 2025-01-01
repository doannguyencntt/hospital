export class LuuTruHoSo {
    public constructor(
        public MaTN: string = null,
        public SoBA : string = null,
        public MaBN: string = null,
        public HoTen : string = null,
        public KhoaNhapVien: string = null,
        public ChuaSapXep: boolean = true,
        public DaSapXep : boolean = true,
        public ThuTuSapXepLuuTru: string = null,
        public SearchString: string = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public TuNgayText: string = null,
        public DenNgaytext: string = null,
        public KhoaPhongId:number = 0,
        public CheckBHYT: boolean = true,
        public CheckVienPhi: boolean = true,
        ){}
}

export class ThongLuuTruHoSo {
    public constructor(
        public MaTN: string = null,
        public SoBA : string = null,
        public MaBN: string = null,
        public HoTen : string = null,
        public Tuoi : string = null,
        public GioiTinh : string = null,
        public GioiTinhDisplay : string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public SoBenhAn: string = null,
        public LoaiBenhAn: string = null,
        public KhoaNhapVien: string = null,
        public DoiTuong: string = null,
        public NhanVienThucHien: string = null,
        public NgayThucHien: string = null,
        public ThuTuSapXepLuuTru: string = null,
        public TrangThaiSapXep: string = null,
        public Khoa: string = null,
        public SoLuuTru: string = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
        ){}
}