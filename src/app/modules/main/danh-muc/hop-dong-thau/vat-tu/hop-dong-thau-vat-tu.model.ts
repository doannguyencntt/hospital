export class HopDongThauVatTu {
    constructor(
        public Id: number = 0,
        public NhaThauId: number = null,
        public CoNhapKho: boolean = null,
        public NhaThau: string = null,
        public SoHopDong: string = null,
        public SoQuyetDinh: string = null,
        public CongBo: Date = null,
        public NgayKy: Date = null,
        public NgayHieuLuc: Date = null,
        public NgayHetHan: Date = null,
        public LoaiThau: number = null,
        public TenLoaiThau: string = null,
        public LoaiThuocThau: number = null,
        public TenLoaiThuocThau: string = null,
        public NhomThau: string = null,
        public GoiThau: string = null,
        public Nam: number = null,
        public HopDongThauVatTuChiTiets: HopDongThauVatTuChiTiet[] = [],
        public NhapKhoVatTuChiTiets: NhapKhoVatTuChiTiet[] = []
    ) { }
}

export class NhapKhoVatTuChiTiet {
    constructor(
        public Id: number = null,
    ) { }
}

export class HopDongThauVatTuChiTiet {
    constructor(
        public HopDongThauVatTuId: number = null,
        public VatTuId: number = null,
        public VatTu: string = null,
        public Gia: number = null,
        public GiaDisplay: string = null,
        public SoLuong: number = null,
        public SoLuongDisplay: string = null,
        public SoLuongDaCap: number = null,
        public Id: number = 0,
        public IdGrid: number = null,
        public SuDungTaiBenhVien: boolean = false,
        public SuDungTaiBenhVienDisplay: string = null ,//SuDungTaiBenhVien ==true ?"Có":"Không",
        public MaVatTuBenhVien: string = null,
        public LoaiSuDungId: number = null,
        public LoaiSuDungText: string = null,

        // BVHD-3472
        public VatTuBenhVienId: number = null,
        public MaVatTuTemps: Array<string> = []
    ) { }
}
