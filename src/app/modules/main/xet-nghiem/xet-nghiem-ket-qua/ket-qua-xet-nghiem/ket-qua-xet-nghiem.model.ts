export class KetQuaXetNghiem {
}


export class KetQuaXetNghiemSearch {
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

export class KetQuaXetNghiemViewKetQuaViewModel {
    public BarCodeID: string = null;
    public MaSoBHYT: string = null;
    public MaBN: string = null;
    public MaYeuCauTiepNhan: string = null;
    public HoTen: string = null;
    public Tuoi: number = null;
    public GioiTinhDisplay: string = null;
    public Tuyen: string = null;
    public BHYTMucHuong: number = null;
    public DanToc: string = null;
    public DiaChi: string = null;
    public NgheNghiep: string = null;
    public ChanDoan: string = null;
    public KhoaChiDinh: string = null;
    public Phong: string = null;

    public NhanVienThucHienId: number = null;
    public ChanDoanDuoi: string = null;
    public GhiChu: string = null;

    public YeuCauChayLai: boolean = null;
    public DaDuyet: boolean = null;
    public NgayYeuCauDisplay: string = null;
    public LyDoYeuCau: string = null;
    public NgayDuyetDisplay: string = null;
    public dataChild: ListDataChild[] = new Array<ListDataChild>();

    //BVHD-3364
    public TenCongTy: string = null

}


export class CheckBoxTheoNhom {
    public CheckBox: string = null;
    public NhomDichVuBenhVienId: number = null;


}


// export class KetQuaXetNghiemChiTietViewModel {
//     public TenNhomDichVuBenhVien: string = null;
//     public NhomDichVuBenhVienId: number = null;

//     public YeuCauChayLai: boolean = null;
//     public DaDuyet: boolean = null;
//     public NguoiYeuCau: string = null;
//     public NgayYeuCauDisplay: string = null;
//     public LyDoYeuCau: string = null;
//     public NguoiDuyet: string = null;
//     public NgayDuyetDisplay: string = null;
//     public DanhSachLoaiMauDaCoKetQua: string[] = new Array<string>();
//     public DanhSachLoaiMau: string[] = new Array<string>();
//     public datas: ListDataChild[] = new Array<ListDataChild>();

// }

export class ListDataChild {
    public Ten: string = null;
    public GiaTriCu: string = null;
    public GiaTriTuMay: string = null;
    public GiaTriNhapTay: string = null;
    public GiaTriDuyet: string = null;
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

export class PhieuDuyetKetQua {
    constructor(
        public HostingName: string = null,
        public Header: boolean = null,
        public PhienXetNghiemId: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiIn: number = null,
        public ListIn :any[]=[]
    ) { }
}

