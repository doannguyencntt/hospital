export class DichVuKhamBenh {
    constructor(
        public Ma: string = "",
        public MaChung: string = null,
        public MaTT37: string = "",
        public Ten: string = "",
        public TenChung: string = null,
        public KhoaId: number = null,
        public TenKhoa: string = "",
        public HangBenhVien: number = null,
        public TenHangBenhVien: string = "",
        public MoTa: string = "",
        public NgoaiQuyDinhBHYT: boolean = null,
        public DichVuKhamBenhThongTinGias: DichVuKhamBenhThongTinGiaBaoHiemYTe[] = []
    ) { }
}

export class DichVuKhamBenhThongTinGiaBaoHiemYTe {
    constructor(
        public Id: number = 0,
        public Gia: number = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public MoTa: string = null,
        public HieuLuc: boolean = null,
    ) { }
}
