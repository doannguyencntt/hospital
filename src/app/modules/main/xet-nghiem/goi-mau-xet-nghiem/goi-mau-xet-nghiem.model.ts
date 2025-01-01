export class GoiMauXetNghiemSearch {
    public ChoNhanMau: boolean = true;
    public DaNhanMau: boolean = true;
    public SearchString: string = "";
    // public TuNgay: any;
    // public DenNgay: any;
    public RangeNgayGoiMau: rangeDate = new rangeDate();
}

export class ThongTinPhieuGoiMauXetNghiem {
    public Id: number = 0;
    public SoPhieu: string = null;
    public NguoiGoiMauId: number = 0;
    public NguoiGoiMauDisplay: string = null;
    public NoiTiepNhanId: number = 0;
    public NoiTiepNhanDisplay: string = null;
    public NguoiNhanMauId: number = 0;
    public NguoiNhanMauDisplay: string = null;
    public NgayGoiMau: any;
    public NgayGoiMauDisplay: string = null;
    public NgayNhanMau: any;
    public NgayNhanMauDisplay: string = null;
    public GhiChu: string = null;
    public TinhTrang: number = 0;
    public TinhTrangDisplay: string = null;
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ){}
}