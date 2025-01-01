export class GoiDichVu {
    constructor(
        public Id: number = 0,
        public TenGoiDv: string = null,
        public IsDisabled: boolean = false,
        public MoTa: string = null,
        public LoaiGoiDichVu: number = 2,
        public BoPhanId: number = null,
        public TenBoPhan: string = null,
        public DvTrongGois: DvTrongGoi[] = []
    ) { }
}

export class DvTrongGoi {
    constructor(
        public Id: number = null,
        public MaDv: string = null,
        public TenDv: string = null,
        public DvId: number = null,
        public LoaiGia: number = 1,
        public GoiDichVuId: number = null,
        public LoaiGiaDisplay: string = null,
        public SoLuong: number = null,
        public IdDatabase: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public GhiChu: string = null,
        public Nhom: number = null, // 1 là khám bệnh, 2 là kỹ thuật, 3 là giường bệnh
        public NhomDisplay: string = null,
    ) { }
}
export class LoaiGiaGiuongBenhVien {
    constructor(public KeyId: number, public DisplayName: string = "") { }
}