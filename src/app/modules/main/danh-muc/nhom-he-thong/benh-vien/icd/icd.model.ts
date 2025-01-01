export class ICD {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public TenTiengViet: string = null,
        public TenTiengAnh: string = null,
        public LoaiICDId: number = null,
        public TenLoaiICD: string = null,
        public ChuanDoanLamSan: string = null,
        public ThongTinThamKhaoChoBenhNhan: string = null,
        public TenGoiKhac: string = null,
        public HieuLuc: boolean = null,
        public LoiDanCuaBacSi: string = null,
        public ManTinh: boolean = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public BenhThuongGap: boolean = null,
        public BenhNam: boolean = null,
        public KhongBaoHiem: boolean = null,
        public NgoaiDinhSuat: boolean = null,
        public KhoaId: number = null,
        public TenKhoa: string = null,
        public MoTa: string = null,
        public MaChiTiet: string = null,
    ) {
    }
}
