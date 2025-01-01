export class YcTraThuocSearch {
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

export class YeuCauHoanTraDuocPhamViewModel {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public TenKhoCanHoanTra: string = null,
        public KhoNhapId: number = null,
        public TenKhoNhanHoanTra: string = null,
        public NhanVienYeuCauId: number = null,

        public NgayYeuCau: Date = new Date(),
        public GhiChu: string = null,

        //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
        public YeuCauTraDuocPhamChiTiets: DuocPhamXuatGridVo[] = [],
    ) {
    }
}

export class DuocPhamXuatGridVo {
    constructor(
        public Id: string = null,
        public STT: number = null,
        public TenDuocPham: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public DuocPhamBenhVienPhanNhomId: string = null,
        public TenNhom: string = null,
        public MaDuocPham: string = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public DuocPhamBenhVienId: number = null,
        public HanSuDung: Date = null,
    ) { }
}

export class DuocPhamDaChonVo {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public MaDuocPham: string = null,
        public TenDuocPham: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
    ) { }
}

export class YeuCauTraDuocPhamChiTietViewModel {
    constructor(
        public Id: string = null,

    ) {
    }
}


export class DaSuaSoLuongXuat {
    constructor(
        public Id: string = null,
        public SoLuongXuat: number = null,
    ) {
    }
}

export class GetDuocPhamOnGroupModel {
    constructor(
        public Id: string = null,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public ListDaChon: DaSuaSoLuongXuat[] = null,
    ) {
    }
}

export class GetVatTuOnGroupModel {
    constructor(
        public Id: number = null,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public ListDaChon: DaSuaSoLuongXuat[] = null,
    ) {
    }
}

export class YeuCauTraThuoc {
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
        public YeuCauTraDuocPhamChiTiets: YeuCauTraThuocChiTiet[] = [],
        public GhiChu: string = null,
        public LyDoKhongDuyet: string = null,
        public DuocDuyet: boolean = null,
        public DuocDuyetDisplay: string = null,
    ) { }
}

export class YeuCauTraThuocChiTiet {
    constructor(
        public Id: number = 0,
        public IdView: number = Math.random(),
        public HopDongThauDuocPhamId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = false,
        public Solo: string = null,
        public HanSuDung: Date = null,
        public MaVach: string = null,
        public DonGiaNhap: number = null,
        public Vat: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public NgayNhapVaoBenhVien: Date = new Date(),
        public SoLuongTra: number = null,

        // for grid
        public HopDong: string = null,
        public DuocPham: string = null,
        public Loai: string = null,
        public Nhom: string = null,
        public NgayNhapBvText: string = null,
        public HsdText: string = null,
        public TiLeThapGia: number = null
    ) { }
}



////UPDATE 31/12/2021

export class YeuCauHoanTraDuocPham {
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
        public YeuCauHoanTraDuocPhamChiTiets: YeuCauHoanTraDuocPhamChiTiet[] = [],
        public YeuCauHoanTraDuocPhamChiTietHienThis: YeuCauHoanTraDuocPhamChiTietHienThi[] = []
    ) {
    }
}

export class YeuCauHoanTraDuocPhamChiTiet {
    constructor(
        public Id: number = 0,
        public SoLuongTra: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
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



export class YeuCauHoanTraDuocPhamChiTietHienThi {
    constructor(
        public Id: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongTra: number = null,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public TenNhom: string = null,
        public Ma: string = null,
        public SoDangKy: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public DonGiaNhap: number = null,
    ) {
    }
}



export class YeuCauHoanTraDuocPhamSearch {
    constructor(
        public YeuCauTraDuocPhamId: number = null,
        public IsCreate: boolean = true,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public DuocPhamBenhVienVos: DuocPhamBenhVienChiTietVo[] = [],
    ) {
    }
}

export class DuocPhamBenhVienChiTietVo {
    constructor(
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public LaDuocPhamBHYT: string = null,
        public SoLo: string = null,
        public HanSuDung: Date = null,
        public DonGia: number = null,
        public DonGiaNhap: number = null,
    ) {
    }
}
export class YeuCauHoanTraDuocPhamGridDaDuyet {
    constructor(
        public XuatKhoDuocPhamId: number = null,
        public YeuCauTraDuocPhamId: number = null,
        public SearchString: string = null,
    ) {
    }
}