export class ToaThuocMau {
    constructor(
        public Id: number = 0,
        public Ten: string = null,
        public ICDId: number = null,
        public TenICD: string = null,
        public TrieuChungId: number = null,
        public TenTrieuChung: string = null,
        public ChuanDoanId: number = null,
        public BacSiKeToaId: number = null,
        public TenBacSiKeToa: string = null,
        public TenChuanDoan: string = null,
        public GhiChu: string = null,
        public IsDisabled: boolean = false,
        public ToaThuocMauChiTiets: ToaThuocMauChiTiet[] = [],
    ) { }
}
export class ToaThuocMauChiTiet {
    constructor(
        public Id: number = 0,
        public ToaThuocMauId: number = null,
        public DuocPhamId: number = null,
        public TenDuocPham: string = null,
        public SoLuong: number = null,
        public SoNgayDung: number = null,
        public DungSang: number = null,
        public DungTrua: number = null,
        public DungChieu: number = null,
        public DungToi: number = null,
        public DungSangDisplay: string = null,
        public DungTruaDisplay: string = null,
        public DungChieuDisplay: string = null,
        public DungToiDisplay: string = null,
        public ThoiGianDungSang: number = null,
        public ThoiGianDungTrua: number = null,
        public ThoiGianDungChieu: number = null,
        public ThoiGianDungToi: number = null,
        public IsDisabled: boolean = false,
    ) { }
}
