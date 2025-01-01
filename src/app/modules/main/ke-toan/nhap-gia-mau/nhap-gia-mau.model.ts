export class DuyetPhieuNhapKhoMau {
    public constructor(
        public SoPhieu: string = null,
        public SoHoaDon: string = null,
        public KyHieuHoaDon: string = null,
        public NgayHoaDon: Date = null,
        public LoaiNguoiGiao: number = 1,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public NhaThauId: number = null,
        public TenNhaThau: string = null,
        public NgayNhap: Date = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public DuocKeToanDuyet: boolean = null,
        public TenTrangThai: string = null,
        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,
        public GhiChu: string = null,
        public LastModified: any = null,
        public DuyetNhapKhoMauChiTiets: Array<DuyetNhapKhoMauChiTiet> = new Array<DuyetNhapKhoMauChiTiet>()
        ){}
}

export class DuyetNhapKhoMauChiTiet {
    public constructor(
        public MauVaChePhamId: number = null,
        public TenMauVaChePham: string = null,
        public MaTuiMau: string = null,
        public NgaySanXuat: Date = null,
        public HanSuDung: Date = null,
        public DonGiaNhap: number = null,
        public DonGiaBan: number = null,
        public DonGiaBaoHiem: number = null,
        public IsThanhToan: boolean = false
        ){}
}