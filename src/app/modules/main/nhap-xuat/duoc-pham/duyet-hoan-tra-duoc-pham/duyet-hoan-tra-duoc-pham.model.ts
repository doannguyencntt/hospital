export class ThongTinDuyetHoanTraDuocPham {
    public Id: number = 0;
    public SoPhieu: string = null;
    public NhanVienYeuCauId: number = 0;
    public TenNhanVienYeuCau: string = null;
    public KhoCanHoanTraId: number = 0;
    public TenKhoCanHoanTra: string = null;
    public KhoNhanHoanTraId: number = 0;
    public TenKhoNhanHoanTra: string = null;
    public NgayYeuCau: Date = new Date();
    public NgayYeuCauDisplay: string = null;
    public TinhTrang: boolean = true;
    public TinhTrangDuyet: string = null;
    public ClassTrangThai: string = null;
    public NhanVienDuyetId: number = 0;
    public TenNhanVienDuyet: string = null;
    public NgayDuyet: Date = new Date();
    public NgayDuyetDisplay: string = null;
    public GhiChu: string = null;

    public NhanVienTraId: number = 0;
    public TenNhanVienTra: string = null;
    public NhanVienNhanId: number = 0;
    public TenNhanVienNhan: string = null;
}

export class TuChoiDuyetHoanTraDuocPham {
    public Id: number = 0;
    public LyDoHuy: string = null;
}

export class HoanTraDuocPhamSearch {
    constructor(
        public KhoDuocPhamId: number = 0,
        public TenKhoDuocPham: string = null,
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public LoaiNhapKho: number = 0,
        public TenLoaiNhapKho: string = null,
        public SearchString: string = "",
        public RangeYeuCau: rangeDate = new rangeDate(),
        public RangeDuyet: rangeDate = new rangeDate(),
    ) { }
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
}

export class PhieuHoanTraDuocPhamVatTu {
    constructor(
        public YeuCauHoanTraDuocPhamVatTuId: number = 0,
        public LaDuocPham: boolean = null,
        public LaTuTruc: boolean = null,
        public DuocDuyet: boolean = false,
    ) { }
}