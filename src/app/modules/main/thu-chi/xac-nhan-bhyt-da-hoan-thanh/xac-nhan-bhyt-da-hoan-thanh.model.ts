export class ThongTinXacNhanBhyt {
    constructor(
        public Id: number = null,
        public MaYeuCauTiepNhan: string = null,
        public BenhNhanId: number = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public GioiTinh: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public DoiTuongUuDai: string = null,
        public CongTyUuDai: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTngayHieuLucStr: string = null,
        public BHYTngayHetHanStr: string = null,
        public DKBD: string = null,
        public LyDoVaoVienDisplay: string = null,
        public GiayChuyenVienDisplay: string = null,
        public GiayChuyenVienId: number = null,
        public GiayMienCungChiTraDisplay: string = null,
        public BHYTGiayMienCungChiTraId: number = null,
        public BHYTMucHuong: number = null
    ) { }
}

export class DaXacNhanBhytList {
    constructor(
        public STT: number = null,
        public Nhom: string = null,
        public MaDichVu: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public SoLuong: number = null,
        public DonGiaBenhVien: number = null,
        public ThanhTienBenhVien: number = null,
        public DgbhytThamKhao: number = null,
        public ThanhTienBhytThamKhao: number = null,
        public TiLeBhyt: number = null,
        public DgbhytChiTra: number = null,
        public TtbhytChiTra: number = null,
        public BnThanhToan: number = null
    ) { }
}

export class LanXacNhanLogList {
    constructor(
        public Id: number = null,
        public DaXacNhanBhyt: DaXacNhanBhytList[] = []
    ) { }
}

export class Search {
    constructor(
        public SearchString: string = null,
        public ThoiDiemDuyetBaoHiemTu: any = null,
        public ThoiDiemDuyetBaoHiemDen: any = null,
        public FromDate: any = null,
        public ToDate: any = null
        ) { }
}
