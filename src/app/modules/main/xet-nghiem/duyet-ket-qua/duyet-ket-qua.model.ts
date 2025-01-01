export class Search {
    constructor(
        public SearchString: string = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        // tslint:disable-next-line: no-use-before-declare
        public RangeThucHien: RangeDate = new RangeDate(),
        // tslint:disable-next-line: no-use-before-declare
        public RangeDuyet: RangeDate = new RangeDate()
    ) { }
}

export class RangeDate {
    constructor(
        public StartDate: Date = null,
        public EndDate: Date = null,
    ) { }
}

export class PhieuDuyetKetQua {
    constructor(
        public Id: number = null,
        public HostingName: string = null,
        public Header: boolean = null,
        public PhienXetNghiemId: number = null,
        public YeuCauTiepNhanId: number = null,
        public NhomDichVuBenhVienIds: Array<number> = [],
        public LoaiIn: number = null,
        public ListIn :any[]=[]
    ) { }
}

export class DuyetKetQua {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public Barcode: string = null,
        public MaTn: string = null,
        public MaBn: string = null,
        public HoTen: string = null,
        public MaBhyt: string = null,
        public GioiTinhDisplay: string = null,
        public NamSinh: number = null,
        public DiaChi: string = null,
        public Tuoi: number = null,
        public Tuyen: string = null,
        public MucHuong: number = null,
        public DanToc: string = null,
        public NgheNghiep: string = null,
        public ChanDoanReadonly: string = null,
        public Khoa: string = null,
        public Phong: string = null,
        public NguoiThucHien: string = null,
        public NguoiThucHienId: number = null,
        public ChanDoan: string = null,
        public TrangThai: boolean = null,
        public TrangThaiDisplay: string = null,
        public GhiChu: string = null,
        public ChiTietKetQuaXetNghiems: ListDataChild[] = new Array<ListDataChild>(),

        //BVHD-3364
        public TenCongTy: string = null
    ) { }
}

export class ListDataChild {
    constructor(
        public DuyetNhom: boolean = false,
        public Ten: string = null,
        public GiaTriCu: string = null,
        public GiaTriTuMay: string = null,
        public GiaTriNhapTay: string = null,
        public GiaTriDuyet: string = null,
        public ToDamGiaTri: boolean = null,
        public Csbt: string = null,
        public DonVi: string = null,
        public ThoiDiemGuiYeuCau: Date = null,
        public ThoiDiemGuiYeuCauDisplay: string = null,
        public ThoiDiemNhanKetQua: Date = null,
        public ThoiDiemNhanKetQuaDisplay: string = null,
        public MayXetNghiemId: number = null,
        public TenMayXetNghiem: string = null,
        public ThoiDiemDuyetKetQua: Date = null,
        public ThoiDiemDuyetKetQuaDisplay: string = null,
        public NguoiDuyet: string = null,
        public LoaiMau: string = null,
        public DichVuXetNghiemId: number = null,
        public LoaiKetQuaTuMay: number = null,
        public IdChilds: number[] = new Array<number>(),
        public Id: number = null,
        public Level: number = null,
        public DanhSachLoaiMau: string[] = new Array<string>(),
        public YeuCauChayLai: boolean = null,
        public DaDuyet: boolean = null,
        public Duyet: boolean = false,
        public HighLightClass: string = null,
        public DaGoiDuyet: boolean = null,
        public IsParent: boolean = null,
        public NgayYeuCauDisplay: string = null,
        public LyDoYeuCau: string = null,
        public NgayDuyetDisplay: string = null,
        public NguoiYeuCau: string = null,
        public NguoiDuyetChayLai: string = null,
        public Nhom: string = null,
        public NhomId: number = null,
    ) { }
}

export class NhomDichVuDuyet {
    constructor(
        public IsCheck: boolean = true,
        public NhomDichVuBenhVienId: number = null,
        public TenNhomDichVu: string = null,
    ) { }


}
