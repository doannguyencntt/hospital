export class DuTruGiamDoc {
    constructor(
        public SoPhieu: string = null,
        public KyDuTruDisplay: string = null,
        public KyDuTru: string = null,
        public NguoiYeuCau: string = null,
        public NguoiDuyet: string = null,
        public NgayYeuCauDisplay: string = null,
        public Id: number = null,
        public NgayYeuCau: any = null,
        public NgayDuyetDisplay: string = null,
        public LyDoGiamDocTuChoi: string = null,
        public NgayDuyet: any = null,
        public GhiChu: string = null,
        public TrangThai: boolean = null, // null: chờ, true: đã duyệt, false: từ chối duyệt
        public TrangThaiDisplay: string = null,
        public DuTruGiamDocDetails: DuTruGiamDocDetail[] = []
    ) { }
}

export class DuTruGiamDocDetail {
    constructor(
        public Loai: string = null,
        public IsBhyt: boolean = null,
        public DuocPhamId: number = null,
        public DuocPham: string = null,
        public HoatChat: string = null,
        public Id: number = null,
        public NongDo: string = null,
        public Sdk: string = null,
        public Dvt: string = null,
        public DuongDung: string = null,
        public NhaSx: string = null,
        public NuocSx: string = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienTrongKy: number = null,
        public SoLuongDuTruTrKhoa: number = null,
        public SoLuongDuTruKhDuoc: number = null,
        public SoLuongDuTruDirector: number = null,
        public KhoDuTruTon: number = null,
        public KhoTongTon: number = null,
        public HdChuaNhap: number = null,
        public TongTonList: any[] = [],
        public HdChuaNhapList: any[] = []
    ) { }
}

export class DuTruTheoDuocPhamDetail {
    constructor(
        public Khoa: string = null,
        public Nhom: string = null,
        public Kho: string = null,
        public KyDuTruDisplay: string = null,
        public KyDuTru: number = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienTrongKy: number = null,
        public NhomDieuTri: string = null
    ) { }
}

export class Search {
    constructor(
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = false,
        public DaDuyet: boolean = false,
        public SearchString: string = null,
        // tslint:disable-next-line: no-use-before-declare
        public RangeYeuCau: RangeDate = new RangeDate(),
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

export class ApproveData {
    constructor(
        public Id: number = null,
        public LyDo: string = null,
        public ChiTietDuocPhamList: ChiTietDuocPham[] = []
    ) { }
}

export class ChiTietDuocPham {
    constructor(
        public Id: number = null,
        public SoLuongDuyet: number = null
    ) { }
}
