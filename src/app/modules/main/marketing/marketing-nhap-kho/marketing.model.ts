import { GioiTinh } from 'src/app/shared/enum/common-type.enums';
import { Sort } from 'src/app/shared/models/common.model';

export class Marketing {
    constructor(
        public HoTen: string = null,
        public NgayThangNamSinh: Date = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,

        public SoDienThoai: string = null,
        public GioiTinh: GioiTinh = null,
        public NgheNghiepId: number = null,
        public QuocTichId: number = 1,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,

        public SoChungMinhThu: string = null,
        public Email: string = null,
        public NoiLamViec: string = null,
        public DanTocId: number = null,

        public BenhNhanId: number = null,

        public LstDaChon: Array<number> = null,
        public LstDaHoanThanh: Array<number> = null,
    ) { }
}

export class DanhSachMarketingSearch {
    constructor(
        public SearchString: string = null,

        public DangChoNhanTien: boolean = true,
        public DangChoThanhToan: boolean = true,
        public DaThanhToan: boolean = true,

        public TuNgay: Date = null,
        public DenNgay: Date = null,
    ) { }
}

export class MarketingXuatKho {
    constructor(
        //public Id: number = 0,
        public SearchString: string = null,
        public SoPhieu: string = null,
        public NguoiXuatId: number = 0,
        public NhanVienXuat: string = null,
        public HoTenBenhNhan: string = null,
        public NgayXuat: Date = null,
        public NgayXuatDisplay: string = null,
        public NgayXuatFormat: any = null,
        public NgayXuatTuFormat: any = null,
        public NgayXuatDenFormat: any = null,
        public GhiChu: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) { }
}

export class MarketingXuatKhoChiTiet {
    constructor(
        public Id: number = 0,
        public SoPhieu: string = null,
        public KhoXuatId: number = 1,
        public TenKhoXuat: string = "Kho Marketing",
        public NguoiXuatId: number = 0,
        public NhanVienXuat: string = null,
        public BenhNhanId: number = 0,
        public NguoiNhan: string = null,
        public NgayXuat: Date = null,
        public NgayXuatFormat: any = null,
        public NgayXuatTuFormat: any = null,
        public NgayXuatDenFormat: any = null,
        public GhiChu: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) { }
}

export class MarketingNhapKho {
    constructor(
        //public Id: number = 0,
        public SearchString: string = null,
        public SoPhieu: string = null,
        public NguoiNhapId: number = 0,
        public NhanVienNhap: string = null,
        public HoTenBenhNhan: string = null,
        public NgayNhap: Date = null,
        public NgayNhapDisplay: string = null,
        public NgayNhapFormat: any = null,
        public NgayNhapTuFormat: any = null,
        public NgayNhapDenFormat: any = null,
        public GhiChu: string = null,
        public FromDate: any = null,
        public ToDate: any = null,
    ) { }
}
export class MarketingNhapKhoChiTiet {
    constructor(
        public Id: number = 0,
        public SoChungTu: string = null,
        public LoaiNguoiGiao: number = null,
        public TenNguoiGiao: string = "",
        public NguoiGiaoId: number = null,
        public TenNguoiNhap: string = "",
        public NguoiNhapId: number = null,
        public NhaCungCap: string = null,
        public QuaTang:string = null,
        public QuaTangId:number = null,
        public DonViTinh: string = null,
        public SoLuongNhap: number = null,
        public DonGiaNhap: number = null,
        public ThanhTien: number = null,
        public SoLuongDaXuat : number = null,
        public NhapKhoQuaTangId : number = 0,
        public NgayNhap: Date = null,
        public DanhSachQuaTangDuocThemList: DanhSachCanThemMarketing[] = [],
    ) { }
}
export class DanhSachCanThemMarketing {
    constructor(
        public Id : number = 0 ,
        public STT : number = 0,
        public NhaCungCap: string = null,
        public QuaTang:string = null,
        public QuaTangId:number = null,
        public DonViTinh: string = null,
        public SoLuongNhap: number = null,
        public DonGiaNhap: number = null,
        public ThanhTien: number = null,
        public SoLuongDaXuat : number = null,
        public NhapKhoQuaTangId : number = 0
    ) { }
}
export class ThongTinNhanVienLogin {
    constructor(
        public KeyId : number = 0 ,
        public DisplayName : string =""
    ) { }
}
export class ExportQueryInfoQueryInfo  {
    constructor(
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}