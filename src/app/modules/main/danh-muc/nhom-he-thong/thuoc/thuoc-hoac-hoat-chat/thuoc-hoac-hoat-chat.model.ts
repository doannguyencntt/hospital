export class ThuocHoacHoatChat {
    constructor(
        public STTHoatChat: number = 0,
        public STTThuoc: number = 0,
        public Ma: string = null,
        public MaATC: string = null,
        public Ten: string = null,
        public DuongDungId: number = 0,
        public DuongDung: string = null,
        public HoiChan: boolean = false,
        public TyLeBaoHiemThanhToan: number = 0,
        public CoDieuKienThanhToan: boolean = false,
        public NhomThuocId: number = 0,
        public NhomThuoc: string = null,
        public BenhVienHang1: boolean = false,
        public BenhVienHang2: boolean = false,
        public BenhVienHang3: boolean = false,
        public BenhVienHang4: boolean = false,
        public MoTa: string = null
    ) { }
}
