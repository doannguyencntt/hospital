export class LichSuDanhSachThuNgan {
    constructor(
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public SearchString: any = null,
    ) { }
}
export class TagItem {
    constructor(
        public Key: string = null,
        public Value: string = null,
        public ValueDisplay: string = null,
        public Title: string = null
    ) { }
}

export class ThongTinBenhNhan {
    constructor(
        public Id: number = 0,
        public MaYeuCauTiepNhan: string = null,
        public BenhNhanId: string = null,
        public MaBN: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public TenGioiTinh: string = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public DoiTuongUuDai: string = null,
        public CongTyUuDai: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTngayHieuLuc: string = null,
        public BHYTNgayHetHan: string = null,
        public BHYTDiaChi: string = null,
        public BHYTMucHuong: string = null,
        public TuyenKham: string = null,
        public TenGiayChuyenVien: string = null,
        public CongTyUuDaiId: number = null,
        public NgayHieuLucStr: string = null,
        public NgayHetHanStr: string = null,
        public GiayChuyenVienId: number = null,
        public DuocHuongBHYT: boolean,
        public CoBHYT: boolean,
        public BHYTgiayMienCungChiTraId: number = null,
        public TenGiayMiemCungTriTra: string = null,
        public ThongTinCongTyBaoHiemTuNhans: ThongTinCongTyBaoHiemTuNhans[] = [],
        public TenBHYTgiayMienCungChiTra: string = null,
        public TaiLieuDinhKemGiayChuyenVien: TaiLieuDinhKemGiayChuyenVien[] = [],
        public TaiLieuDinhKemGiayMiemCungChiTra: TaiLieuDinhKemGiayMiemCungChiTra[] = [],

    ) { }
}

export class ThongTinCongTyBaoHiemTuNhans {
    constructor(
        public TenCongTy: string = null,
        public MaSoThe: string = null,
        public TuNgayStr: string = null,
        public DenNgayStr: string = null,
        public SoDienThoaiStr: string = null,
        public DiaChi: string = null,

        public Id: string = null,
        public SoTienCongNo: number = null,
    ) { }
}

export class TaiLieuDinhKemGiayChuyenVien {
    constructor(
        public Id: number = 0,
        public GiayChuyenVienId: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public MoTa: string = null,
        public KichThuoc: number = 0,
        public DuongDan: string = null,
        public LoaiTapTin: number = 0,
        public TenTapTin: string = null
    ) { }
}

export class TaiLieuDinhKemGiayMiemCungChiTra {
    constructor(
        public Id: number = 0,
        public GiayChuyenVienId: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public MoTa: string = null,
        public KichThuoc: number = 0,
        public DuongDan: string = null,
        public LoaiTapTin: number = 0,
        public TenTapTin: string = null
    ) { }
}
export class DanhSachChiPhiKhamChuaBenh {
    constructor(
        public Id: number = 0,
        public LoaiNhom: number = null,
        public Nhom: string = null,
        public STT: number = null,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public Soluong: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public KiemTraBHYTXacNhan: boolean = null,
        public BHYTThanhToan: number = null,
        public TLMG: number = null,
        public SoTienMG: number = null,
        public DaThanhToan: number = null,
        public BNConPhaiThanhToan: number = null,
        public NoiThucHien: string = null,
        public CheckedDefault: boolean = null,
        public CapNhatThanhToan: boolean = false,
        public HighLightCapNhatThanhToanClass: string = null,
        public KiemTraTienSoTienItemDichVu: boolean = false,
        public TongCongNo: number = null,
        public SoTienMGThem: number = 0,

        public SoPhieu: number = null,
        public NguoiThu: string = null,
        public ThoiGianThuStr: string = null,
        public HuyDichVu: boolean = null,
        public SoTienCongNo: number = null,        
    ) { }
}
export class ThongTinThanhToan {
    constructor(
        public ThuChiTienBenhNhanStr: string = null,
        public NgayThuStr: string = null,
        public TienMat: number = 0,
        public ChuyenKhoan: number = 0,
        public POS: number = 0,
        public SoTienGiam: string = null,
        public SoTienCongNo: number = 0,
        public NoiDungThu: string = null
    ) { }
}
