export class DuyetYeuCauChayLaiXetNghiemTimKiem {
    public constructor(
        public SearchString: string = null,
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,    
        public TuNgayDenNgay: DuyetYeuCauChayLaiXetNghiemTimKiemDateRange = new DuyetYeuCauChayLaiXetNghiemTimKiemDateRange(),
        ){}
}


export class DuyetYeuCauChayLaiXetNghiemTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
        ){}
}

export class TuChoiYeuCauGoiLaiXetNghiem {
    public constructor(
        public LyDoTuChoi: string = null,
        public PhienXetNghiemId: number = null,
    ){}
}

export class DanhSachGoiXetNghiemLai {
    public constructor(   
        public DuyetYeuCauGoiLaiXetNghiems : DuyetYeuCauGoiLaiXetNghiem[] = [],
    ){}
}
export class DuyetYeuCauGoiLaiXetNghiem {
    public constructor(     
        public Id: number = null,
        public NhanVienYeuCauId: number = null,
    ){}
}

export class ThongTinHanhChinhXN {
    public constructor(
        public MaBarCode: string = null,
        public MaBN: string = null,
        public MaTN: string = null,
        public HoTen: string = null,
        public Tuoi: string = null,
        public GioiTinh: string = null,
        public DungTuyen: string = null,        
        public NgheNghiep: string = null,        
        public MucHuong: string = null,
        public DanToc: string = null,
        public DiaChi: string = null,
        public ChuanDoan: string = null,
        public KhoaChiDinh: string = null,
        public PhongKham: string = null,
        public TrangThai: boolean = null,
        public MaBhyt: string = null,
        
        //BVHD-3800
        public LaCapCuu: boolean = null
    ){}
}
