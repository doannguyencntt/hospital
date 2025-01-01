import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class SearchNew {
    constructor(
        public SearchString: string = null,
        public SearchStringBarCode: string = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public DangThucHien: boolean = false,
        public FromDate: any = null,
        public ToDate: any = null,
        public ThoiDiemGoiDuyetTuFormat: any = null,
        public ThoiDiemGoiDuyetDenFormat: any = null,
        public RangeThucHien: RangeDate = new RangeDate(),
        public RangeDuyet: RangeDateNew = new RangeDateNew()
    ) { }
}

export class RangeDateNew {
    constructor(
        public StartDate: Date = null,
        public EndDate: Date = null,
    ) { }
}

export class PhieuDuyetKetQuaNew {
    constructor(
        public Id: number = null,
        public HostingName: string = null,
        public Header: boolean = null,
        public PhienXetNghiemId: number = null,
        public YeuCauTiepNhanId: number = null,
        public NhomDichVuBenhVienIds: Array<number> = [],
        public LoaiIn: number = null,
        public ListIn: any[] = []
    ) { }
}

export class DuyetKetQuaNew {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public BarCodeID: string = null,
        public MaSoBHYT: string = null,
        public MaBN: string = null,
        public MaYeuCauTiepNhan: string = null,
        public HoTen: string = null,
        public NamSinhDisplay: string = null,
        public GioiTinhDisplay: string = null,
        public BHYTMucHuong: number = null,
        public DiaChi: string = null,
        public ChanDoan: string = null,
        public KhoaChiDinh: string = null,
        public Phong: string = null,
        public SoDienThoai: string = null,
        public NhanVienThucHienId: number = null,
        public ChanDoanDuoi: string = null,
        public GhiChu: string = null,
        public DoiTuong: string = null,
        public NguoiThucHien: string = null,
        public NguoiThucHienId: number = null,
        public TrangThai: boolean = null,
        public TrangThaiDisplay: string = null,
        public ChiTietKetQuaXetNghiems: ListDataChildNew[] = new Array<ListDataChildNew>(),
        
        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class ListDataChildNew {
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
        public HighLightCellClass: string = null,
        public DaGoiDuyet: boolean = null,
        public IsParent: boolean = null,
        public NgayYeuCauDisplay: string = null,
        public LyDoYeuCau: string = null,
        public NgayDuyetDisplay: string = null,
        public NguoiYeuCau: string = null,
        public NguoiDuyetChayLai: string = null,
        public Nhom: string = null,
        public NhomId: number = null,
        public CheckBox: boolean = false,
        public LaDichVuSarCovid2: boolean = false,
        public LoaiKitThuId: number = null,
        public LoaiKitThu: string = null,

    ) { }
}

export class NhomDichVuDuyetNew {
    constructor(
        public IsCheck: boolean = true,
        public NhomDichVuBenhVienId: number = null,
        public TenNhomDichVu: string = null,
    ) { }


}
