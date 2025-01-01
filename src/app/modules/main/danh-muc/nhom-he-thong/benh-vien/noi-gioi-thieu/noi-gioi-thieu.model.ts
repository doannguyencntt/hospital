export class NoiGioiThieu {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public SoDienThoai: string = null,
        public SoDienThoaiDisplay: string = null,
        public NhanVienQuanLyId: number = null,
        public HoTenNguoiQuanLy: string = null,
        public DonVi: string = null,
        public DonViMauId: number = null,
        public TenDonViMau: string = null,
        public IsDisabled: boolean = null,
        public MoTa: string = null,
    ) { }
}

export class DonViMau {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public IsDefault: boolean = false,
    ) { }
}