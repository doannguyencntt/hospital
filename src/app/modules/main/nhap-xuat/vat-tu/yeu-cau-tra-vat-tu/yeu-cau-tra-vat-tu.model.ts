export class YcTraVatTuSearch {
    constructor(
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = false,
        public DaDuyet: boolean = false,
        public SearchString: string = null,

        // tslint:disable-next-line: no-use-before-declare
        public RangeNhap: RangeDate = new RangeDate(),
        // tslint:disable-next-line: no-use-before-declare
        public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
}

export class YeuCauTraVatTu {
    constructor(
        public Id: number = 0,
        public SoPhieu: string = null,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,
        public KhoXuat: string = null,
        public KhoNhap: string = null,
        public NgayDuyet: Date = new Date(),
        public NgayYeuCau: Date = new Date(),
        public NhanVienDuyetId: number = null,
        public NhanVienYeuCauId: number = null,
        public NhanVienDuyet: string = null,
        public NhanVienYeuCau: string = null,
        public YeuCauTraVatTuChiTiets: YeuCauTraVatTuChiTiet[] = [],
        public GhiChu: string = null,
        public LyDoKhongDuyet: string = null,
        public DuocDuyet: boolean = null,
        public DuocDuyetDisplay: string = null,
    ) { }
}

export class YeuCauTraVatTuChiTiet {
    constructor(
        public Id: number = 0,
        public IdView: number = Math.random(),
        public HopDongThauVatTuId: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = false,
        public Solo: string = null,
        public HanSuDung: Date = null,
        public MaVach: string = null,
        public DonGiaNhap: number = null,
        public Vat: number = null,
        public VatTuBenhVienPhanNhomId: number = null,
        public NgayNhapVaoBenhVien: Date = new Date(),
        public SoLuongTra: number = null,

        // for grid
        public HopDong: string = null,
        public VatTu: string = null,
        public Loai: string = null,
        public Nhom: string = null,
        public NgayNhapBvText: string = null,
        public HsdText: string = null,
        public TiLeThapGia: number = null
    ) { }
}

export class YeuCauHoanTraVatTuViewModel {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public KhoNhapId: number = null,

        public NhanVienYeuCauId: number = null,
        public NhanVienYeuCau: string = null,

        public NgayYeuCau: Date = new Date(),
        public GhiChu: string = null,
        public KhoXuat: string = null,
        public KhoNhap: string = null,

        public YeuCauTraVatTuChiTiets: VatTuXuatGridVo[] = [],
    ) { }
}

export class VatTuXuatGridVo {
    constructor(
        public Id: string = null,
        public STT: number = null,
        public TenVatTu: string = null,
        public DVT: string = null,
        public LaVatTuBHYT: boolean = null,
        public Loai: string = null,
        public LoaiSuDung: number = null,
        public Nhom: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public VatTuBenhVienPhanNhomId: string = null,
        public TenNhom: string = null,
        public VatTu: string = null,
        public MaVatTu: string = null,
        public SoLo: string = null,
    ) { }
}


////UPDATE 06/1/2021

export class YeuCauHoanTraVT {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoXuat: string = null,
        public KhoNhapId: number = null,
        public TenKhoNhap: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        public DuocDuyet: boolean = null,
        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,
        public TenNhanVienDuyet: string = null,
        public LyDoKhongDuyet: string = null,
        public GhiChu: string = null,
        public LastModified: any = null,
        // public HienThiCaThuocHetHan: boolean = false,
        public YeuCauHoanTraVatTuChiTiets: YeuCauHoanTraVatTuChiTiet[] = [],
        public YeuCauHoanTraVatTuChiTietHienThis: YeuCauHoanTraVatTuChiTietHienThi[] = []
    ) {
    }
}

export class YeuCauHoanTraVatTuChiTiet {
    constructor(
        public Id: number = 0,
        public SoLuongTra: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = null,
        public KhoXuatId: number = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public Ten: string = null,
        public Ma: string = null,
        public WillDelete: boolean = null,
        public DonGiaNhap: number = null,
    ) {
    }
}



export class YeuCauHoanTraVatTuChiTietHienThi {
    constructor(
        public Id: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaVatTuBHYT: boolean = null,
        public Loai: string = null,
        public LoaiSuDung: number = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongTra: number = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public DonGiaNhap: number = null,
    ) {
    }
}



export class YeuCauHoanTraVatTuSearch {
    constructor(
        public YeuCauTraVatTuId: number = null,
        public IsCreate: boolean = true,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public VatTuBenhVienVos: VatTuBenhVienChiTietVo[] = [],
    ) {
    }
}

export class VatTuBenhVienChiTietVo {
    constructor(
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public LaVatTuBHYT: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public VAT: number = null,
        public TiLeThapGia: number = null,
        
        public DonGia: number = null,
        public DonGiaNhap: number = null,
    ) {
    }
}
export class YeuCauHoanTraVatTuGridDaDuyet {
    constructor(
        public XuatKhoVatTuId: number = null,
        public YeuCauTraVatTuId: number = null,
        public SearchString: string = null,
    ) {
    }
}