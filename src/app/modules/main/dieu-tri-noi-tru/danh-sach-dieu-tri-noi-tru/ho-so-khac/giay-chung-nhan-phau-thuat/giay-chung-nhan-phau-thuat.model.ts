export class GiayChungNhanPhauThuat {
    constructor(
        public SoLuuTru : string  = null,
        public ChanDoan: string = null,
        public TinhTrangRaVienId: number = null,
        public TinhTrangRaVienText: string = null,
        public NgayThangNam: Date = null,
        public NgayThangNamText: string = null,
        public TruongKhoaId: string = null,
        public TruongKhoa: string = null,
        public GiamDocChuyenMonId:number= null,
        public GiamDocChuyenMon:string= null,
        public NoiTruHoSoKhacId:number= null,
        public DichVuPTTTId: number = null,
        public DichVuPTTTText: string = null,
        public PhauThuatNgay: Date = null,
        public PhauThuatNgayText: string = null,
        public PhuongThucVoCamId: number = null,
        public PhuongThucVoCamText: string = null,
        public PhauThuatVienId: number = null,
        public PhauThuatVienText: number = null,
        public PhuongThucPhauThuats: string[] = null,
        //public KetQuaGPB: string = null,
    ) {
    }
}
export class NoiTruHoSoKhacGiayChungNhanPhauThuat {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public DichVuPTTTId: number = null,
    ) { }
}
export class ThemTinhTrangRaVien {
    constructor(
        public Id: number= 0,
        public Text: string = null,
    ) { }
}
export class InfoYeuCauDichVuKyThuat {
    constructor(
        public KeyId : number  = null,
        public DisplayName: string = null,
        public PhauThuatNgay: Date = null,
        public PhuongThucVoCamId: number = null,
        public PhuongThucVoCamText: string = null,
        public PhauThuatVienId: number = null,
        public PhauThuatVienText: number = null,
        public PhuongThucPhauThuats: string[] = [],
    ) {
    }
}