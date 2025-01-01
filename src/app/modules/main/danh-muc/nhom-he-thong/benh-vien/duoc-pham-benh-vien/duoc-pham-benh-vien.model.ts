export class DuocPhamBenhVien {
    constructor(
        public Id: number = 0,
        public MaThuocBenhVien: string = null,
        public Ten: string = null,
        public TenTiengAnh: string = null,
        public SoDangKy: string = null,
        public STTHoatChat: number = null,
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public DuongDungId: number = null,
        public TenDuongDung: string = null,
        public HamLuong: string = null,
        public QuyCach: string = null,
        public TieuChuan: string = null,
        public DangBaoChe: string = null,
        public DonViTinhId: number = null,
        public TenDonViTinh: string = null,
        public HanSuDung: Date = null,
        public HieuLuc: boolean = true,
        public IsDisabled: boolean = false,
        public HuongDan: string = null,
        public MieuTa: string = null,
        public MoTa: string = null,
        public LoaiThuocHoacHoatChat: number = null,
        public TenLoaiThuocHoacHoatChat: string = null,
        public ChiDinh: string = null,
        public ChongChiDinh: string = null,
        public LieuLuongCachDung: string = null,
        public TacDungPhu: string = null,
        public ChuYDePhong: string = null,
        public LaThucPhamChucNang: boolean = null,
        public MaDuocPhamBenhVien: string = null,
        public DieuKienBaoHiemThanhToan: string = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public DuocPhamBenhVienPhanNhomConId: number = null,
        public TenDuocPhamBenhVienPhanNhomCon: string = null,
        public DuocPhamBenhVienPhanNhomChaId: number = null,
        public TenDuocPhamBenhVienPhanNhomCha: string = null,
        public TheTich: number = null,
        public HeSoDinhMucDonViTinh: number = null,
        public LaThuocHuongThanGayNghien: boolean = null,
        public LoaiThuocTheoQuanLy: number = null,
        public TenPhanLoaiThuocTheoQuanLy: string = null,
        public MaATC: string = null,
        public DuocPhamCoDau: boolean = null,

        public MayXetNghiemIds: number[] = null,
        public LoaiDieuKienBaoQuanDuocPham: number = null,
        public ThongTinDieuKienBaoQuanDuocPham: string = null,

    ) { }

}
export class DuocPhamBenhVienGiaBaoHiem {
    constructor(
        public DuocPhamBenhVienId: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public TiLeBaoHiemThanhToan: number = null
    ) {
    }
}