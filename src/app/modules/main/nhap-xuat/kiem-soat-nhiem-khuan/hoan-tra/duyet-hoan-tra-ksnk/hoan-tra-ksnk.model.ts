export class DuyetNhapKho {
}

export class NhapKhoVatTu {
    constructor(
        public Id: number = 0,
        public KhoVatTuId: number = null,
        public TenKhoVatTu: string = null,
        public SoChungTu: string = null,
        public LoaiNhapKho: number = 1,
        public TenLoaiNhapKho: string = null,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public TenNguoiGiaoNgoai: string = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public LoaiNguoiGiao: number = 1,
        public NhapKhoVatTuChiTiets: NhapKhoVatTuChiTiet[] = [],
        public NgayNhap: Date = null,
        public DaXuatKho: boolean = null
    ) { }
}
export class NhapKhoVatTuChiTiet {
    constructor(
        public Id: number = 0,
        public IdView: number = 0,
        public NhapKhoVatTuId: number = 0,
        public VatTuBenhVienId: number = null,
        public TenVatTu: string = null,
        public HopDongThauVatTuId: number = 0,
        public TenHopDongThau: string = null,

        public KhoVatTuViTriId: number = null,
        public ViTri: string = null,
        public DatChatLuong: boolean = true,
        public TenDatChatLuong: string = "Đạt",
        public HanSuDung: Date = null,
        public TextHanSuDung: string = null,

        public Solo: string = null,
        public SoLuongNhap: number = null,
        public SoLuongNhapTrongGrid: number = 0,
        public SoLuongHienTaiVatTuTheoHopDongThauDaLuu: number = 0,
        public DonGiaNhap: number = null,
        public DonGiaBan: number = null,
        public TextDonGiaNhap: string = null,
        public TextDonGiaBan: string = null,
        public TextChietKhau: string = null,
        public TextSoLuongNhap: string = null,
        public TextVAT: string = null,
        public VAT: number = null,
        public ChietKhau: number = null,
        public MaVach: string = null,
        public NgayNhap: Date = null,

    ) { }
}

export class HoanTraVatTuSearch {
    constructor(
        public KhoVatTuId: number = 0,
        public TenKhoVatTu: string = null,
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public LoaiNhapKho: number = 0,
        public TenLoaiNhapKho: string = null,
        public SearchString: string = "",
        public RangeNhap: rangeDate = new rangeDate,
        public RangeDuyet: rangeDate = new rangeDate,
    ) { }
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,

    ) { }
}

export class ThongTinHoanTraVatTu {
    constructor(
        public NguoiNhapId: number = 0,
        public GhiChu: string = '',

        public HoanTraTuKhoId: number = 0,
        public HoanTraTuKho: string = null,
        public HoanTraVeKhoId: number = 0,
        public HoanTraVeKho: string = null,

        public NguoiYeuCauId: number = 0,
        public TenNguoiYeuCau: string = null,        
        public NgayYeuCau: Date = new Date(),

        public TinhTrangDuyet: string = null,
        public ClassTrangThai: string = null,
        public NguoiDuyetId: number = 0,
        public NguoiDuyet: string = null,
        public NgayDuyet: Date = new Date(),

        public NguoiTraId: number = 0,
        public TenNguoiTra: string = null, 
        public NguoiNhanId: number = 0,
        public TenNguoiNhan: string = null, 
    ) { }
}

// export class ThongTinLyDoHuyHoanTraVatTu {
//     constructor(
//         public YeuCauTraVatTuId: number = 0,
//         public LyDoHuy: string = null
//     ) { }
// } 1

export class TuChoiDuyetHoanTraVatTu {
    public Id: number = 0;
    public LyDoHuy: string = null;
    public LoaiDuocPhamVatTu: number = null;
}

export class DuyetHoanTraVatTu {
    public Id: number = 0;
    public LoaiDuocPhamVatTu: number = null;
    public NguoiTraId: number = 0;
    public NguoiNhanId: number = 0;
}

export enum LoaiDuocPhamVatTu {
    LoaiDuocPham = 0,
    LoaiVatTu = 1    
}