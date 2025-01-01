export class KhamDoanCongTyTimKiem {
    public constructor(
        public SearchString: string = null
    ) { }
}

export class KhamDoanCongTy {
    public constructor(
        public Ma: string = null,
        public Ten: string = null,
        public SoDienThoai: string = null,
        public DiaChi: string = null,
        public NguoiDaiDien: string = null,
        public NguoiLienHe: string = null,
        public MaSoThue: string = null,
        public SoTaiKhoanNganHang: string = null,
        public LoaiCongTy: number = 1,
        public CoHoatDong: boolean = true
    ) { }
}
