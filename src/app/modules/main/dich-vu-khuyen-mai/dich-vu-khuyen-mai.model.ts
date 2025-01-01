export class GoiDichVuKhuyenMaiMarketingDangChon {
    constructor(
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public TongTienConBaoLanhDuoc: number = 0,
        public DichVus: Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan> = []
    ) { }
}
export class ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan {
    constructor(
        public Id: string = null,
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public DichVuBenhVienId: number = null,
        public TenDichVu: string = null,
        public NhomGoiDichVu: number = null,
        public SoLuongSuDung: number = null,
        public IsActive: boolean = false,
        public DonGia: number = 0,

        public ViTriTiem: number = null,
        public MuiSo: number = null,
        public NoiThucHienId: number = null,
        public LieuLuong: string = null,
        public SoLuongConLai: number = null
    ) { }
}

export class ChiDinhGoiDichVuKhuyenMaiTheoBenhNhan {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public YeuCauKhamBenhId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public DichVus: Array<ChiTietGoiDichVuKhuyenMaiChiDinhTheoBenhNhan> = [],
        public DichVuKhongThems: Array<ChiDinhGoiDichVuKhuyenMaiTheoBenhNhanDichVuLoi> = [],
        public IsKhamBenhDangKham: boolean = false,
        public IsPTTT: boolean = false,
        public IsVacxin: boolean = false
    ) { }
}

export class ChiDinhGoiDichVuKhuyenMaiTheoBenhNhanDichVuLoi {
    constructor(
        public YeuCauGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public NhomGoiDichVuValue: number = null,
        public DichVuId: number = null,
        public LoaiLoi: number = null,
        public TenLoi: string = null,
        public KhongThem: boolean = false
    ) { }
}