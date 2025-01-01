export class NhapKhoVatTuSearch {
    constructor(
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = false,
        public DaDuyet: boolean = false,
        public SearchString: string = null,

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

export class LookupItemViTriVo {
    constructor(
        public KeyId: number,
        public DisplayName: string,
        public KhoVatTuId: number
    ) {
    }
}

export class NhapKhoVatTu {
    constructor(
        public Id: number = 0,
        public SoChungTu: string = null,

        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,


        //public LoaiNhapKho: number = 1,
        //public TenLoaiNhapKho: string = null,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public NguoiNhapId: number = null,
        //public TenNguoiNhap: string = null,
        public LoaiNguoiGiao: number = 1,
        public NhapKhoVatTuChiTiets: NhapKhoVatTuChiTiet[] = [],
        public OldNhapKhoVatTuChiTiets: NhapKhoVatTuChiTiet[] = [],
        public NgayNhap: Date = new Date(),
        public NgayHoaDon: Date = new Date(),
        public DaXuatKho: boolean = null,

        public LyDoKhongDuyet: string = null,
        public DuocKeToanDuyet: boolean = null,

        public KyHieuHoaDon: string = null,

        public KhoVatTuYTeId: number = null,
        public KhoVatTuYTeDisplayName: string = null,
    ) { }
}

export class NhapKhoVatTuChiTiet {
    constructor(
        // public Id: number =0,
        // public IdView: number = Math.random(),
        // public NhapKhoVatTuId: number = 0,
        // public VatTuBenhVienId: number = null,
        // public TenVatTu: string = null,
        // public HopDongThauVatTuId: number = 0,
        // public TenHopDongThau: string = null,

        // public KhoVatTuViTriId: number = null,
        // public ViTri: string = null,
        // public DatChatLuong: boolean = true,
        // public TenDatChatLuong: string = "Đạt",
        // public HanSuDung: Date = null,
        // public TextHanSuDung: string = null,

        // public Solo: string = null,
        // public SoLuongNhap:  number = null,
        // public SoLuongNhapTrongGrid: number = 0,
        // public SoLuongHienTaiVatTuTheoHopDongThauDaLuu: number = 0,
        // public DonGiaNhap: number = null,
        // public DonGiaBan: number = null,
        // public TextDonGiaNhap: string = null,
        // public TextDonGiaBan: string  = null,
        // public TextChietKhau: string = null,
        // public TextSoLuongNhap: string = null,
        // public TextVAT: string = null,
        // public VAT: number = null,
        // public ChietKhau: number = null,
        // public MaVach: string = null,
        // public NgayNhap: Date = null,

        public TiLeBHYTThanhToan: number = null,
        public Id: number = 0,
        public IdView: number = Math.random(),
        public HopDongThauVatTuId: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = false,
        //public DuocPhamBenhVienPhanNhomId: number = null,
        public Solo: string = null,
        public HanSuDung: Date = null,
        public MaVach: string = null,
        public SoLuongNhapSoCap: number = null,
        public SoLuongNhap: number = null,
        public HeSoDinhMucDonViTinh: number = null,
        public GiaApThau: number = null,
        public DonGiaNhap: number = null,
        public VAT: number = 0,
        public KhoViTriId: number = null,
        public LoaiNhap: number = 1, // 1 là hdt, 2 là ncc

        public NhaThauId: number = null,
        public NhaThauDisplay: string = null,
        public DVT: string = null,

        public LoaiSuDung: number = null,

        //for grid
        public HopDongThauDisplay: string = null,
        public VatTuDisplay: string = null,
        public LoaiDisplay: string = null,
        public NhomDisplay: string = null,
        public HanSuDungDisplay: string = null,
        public SoLuongNhapDisplay: string = null,
        public ViTriDisplay: string = null,
        public MaRef: string = null,
        public KhoNhapSauKhiDuyetId: number = null,
        public KhoNhapSauKhiDuyetDisplayName: string = null,
        public NguoiNhapSauKhiDuyetId: number = null,
        public ThanhTienTruocVat: number = 0,
        public ThanhTienSauVat: number = 0,
        public ThueVatLamTron: number = 0,
        public GhiChu: string = null,

    ) { }

}

export class InPhieuNhapKhoVatTu {
    constructor(
        public YeuCauNhapKhoVatTuId: number = null,
        public CoTheoBenhVien: boolean = true,
        public CoTheoThongTu: boolean = true,
        public HostingName: string = null,
    ) { }
}


