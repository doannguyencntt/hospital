export class Search {
    constructor(
        public TuNgayDenNgay: SearchDateRange = new SearchDateRange(),
        public SearchString: string = null,
        public HostingName: string = null
    ) { }
}

export class SearchDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}

export class DoanhThuNhaThuocVo {
    public constructor(
        public Id: number = null,
        public ThanhTien: number = null,
        public TienMat: number = null,
        public ChuyenKhoan: number = null,
        public Pos: number = null,
        public CongNo: number = null,
    ) { }
}
