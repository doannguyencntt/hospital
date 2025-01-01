export class NhanMauXetNghiemSearch {
    public ChoNhanMau: boolean = true;
    public DaNhanMau: boolean = true;
    public SearchString: string = "";
    // public TuNgay: any;
    // public DenNgay: any;
    public RangeNgayGoiMau: rangeDate = new rangeDate();
}

// export class ThongTinPhieuNhanMauXetNghiem {
//     public Id: number = 0;
//     public SoPhieu: string = null;
//     public NguoiGoiMauId: number = 0;
//     public NguoiGoiMauDisplay: string = null;
//     public NoiTiepnhanId: number = 0;
//     public NoiTiepNhanDisplay: string = null;
//     public NguoiNhanMauId: number = 0;
//     public NguoiNhanMauDisplay: string = null;
//     public NgayGoiMau: any;
//     public NgayNhanMau: any;
//     public GhiChu: string = null;
//     public TinhTrang: number = 0;
//     public TinhTrangDisplay: string = null;
// }

export class MauXetNghiem {
    public Id: number = 0;
    // public DatChatLuong: boolean = true;
    public KhongDatChatLuong: boolean = false;
    public LyDoKhongDat: string = null;
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ){}
}