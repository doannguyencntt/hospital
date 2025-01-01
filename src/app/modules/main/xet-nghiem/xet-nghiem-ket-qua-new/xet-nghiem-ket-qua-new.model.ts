export class KetQuaXetNghiemNew {
}


export class KetQuaXetNghiemNewSearch {
    constructor(
        public ChoKetQua: boolean = true,
        public ChoDuyetKetQua: boolean = false,
        public DaCoKetQua: boolean = false,
        public SearchString: string = "",
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
    ) {
    }
}

export class KetQuaXetNghiemViewKetQuaNewViewModel {
    public BarCodeID: string = null;
    public MaSoBHYT: string = null;
    public MaBN: string = null;
    public MaYeuCauTiepNhan: string = null;
    public HoTen: string = null;
    public NamSinhDisplay: string = null;
    public GioiTinhDisplay: string = null;
    public BHYTMucHuong: number = null;
    public DiaChi: string = null;
    public ChanDoan: string = null;
    public KhoaChiDinh: string = null;
    public Phong: string = null;
    public SoDienThoai: string = null;
    public NhanVienThucHienId: number = null;
    public ChanDoanDuoi: string = null;
    public GhiChu: string = null;
    public DoiTuong: string = null;

    
    public YeuCauChayLai: boolean = null;
    public DaDuyet: boolean = null;
    public NgayYeuCauDisplay: string = null;
    public LyDoYeuCau: string = null;
    public NgayDuyetDisplay: string = null;
    public dataChild: ListDataChildNew[] = new Array<ListDataChildNew>();

    public LaCapCuu: boolean = null
}


export class ListDataChildNew {
    public Ten: string = null;
    public GiaTriCu: string = null;
    public GiaTriTuMay: string = null;
    public GiaTriNhapTay: string = null;
    public GiaTriDuyet: string = null;
    public GiaTriMin: string = null;
    public GiaTriMax: string = null;
    public ToDamGiaTri: boolean = null;
    public CSBT: string = null;
    public DonVi: string = null;

    public ThoiDiemGuiYeuCau: Date = null;
    public ThoiDiemGuiYeuCauDisplay: string = null;
    public ThoiDiemNhanKetQua: Date = null;
    public ThoiDiemNhanKetQuaDisplay: string = null;
    public TenMayXetNghiem: string = null;
    public MayXetNghiemId: number = null;
    public ThoiDiemDuyetKetQua: Date = null;
    public ThoiDiemDuyetKetQuaDisplay: string = null;
    public NguoiDuyet: string = null;


    //structure tree
    
    public LoaiMau: string = null;
    public DichVuXetNghiemId: number = null;

    public LoaiKetQuaTuMay: number = null;

    //update
    public IdChilds: number[] = new Array<number>();
    public Level: number = null;

    public DanhSachLoaiMau: string[] = new Array<string>();

    public YeuCauChayLai: boolean = null;
    public DaDuyet: boolean = null;
    public NgayYeuCauDisplay: string = null;
    public LyDoYeuCau: string = null;
    public NgayDuyetDisplay: string = null;
    
    public NguoiYeuCau: string = null;
    
    public NguoiDuyetChayLai: string = null;
    public Nhom: string = null;

    public DaDuyetChiTiet: boolean = null;

    public HighLightClass: string = null;
    public DaGoiDuyet: boolean = null;
    public CheckBox: boolean = null;

}

export class PhieuDuyetKetQuaNew {
    constructor(
        public HostingName: string = null,
        public Header: boolean = null,
        public PhienXetNghiemId: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiIn: number = null,
        public ListIn :any[]=[]
    ) { }
}

