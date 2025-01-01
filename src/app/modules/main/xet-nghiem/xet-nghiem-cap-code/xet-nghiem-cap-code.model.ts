export class XetNghiemCapCodeTimKiem {
    public constructor(
        public SearchString: string = null,
        public HopDongKhamSucKhoeId: number = 0,
        public YeuCauTiepNhanId: number = null,
        public PhienXetNghiemId: number = null,
        public TrangThai: XetNghiemCapCodeTimKiemTrangThai = new XetNghiemCapCodeTimKiemTrangThai(),
        public TuNgayDenNgay: XetNghiemCapCodeTimKiemDateRange = new XetNghiemCapCodeTimKiemDateRange(),
        public ThoiDiemHienTai: Date = new Date(),
        public SoLuong: number = null,
        ) { }
}
export class XetNghiemCapCodeTimKiemTrangThai {
    public constructor(
        public ChuaCapCode: boolean = true,
        public DaCapCode: boolean = false
    ) { }
}

export class XetNghiemCapCodeTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ) { }
}

export class ThongTinYeuCauTiepNhanXetNghiem {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public MaBenhNhan: string = null,
        public MaTiepNhan: string = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NamSinhDisplay: string = null,
        public Tuoi: number = null,
        public TenGioiTinh: string = null,
        public SoDienThoai: string = null,
        public Tuyen: string = null,
        public SoTheBHYT: string = null,
        public DoiTuong: string = null,
        public DanToc: string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public IsTraKetQua: boolean = false,
        public TraKetQuaChoBenhNhan: string = null,
        public IsAutoBarcode: boolean = false,
        public IsCoDuKetQua: boolean = false,
        public IsCoPhienChiTietCoKetQua: boolean = false,
        public IsNhanVienKhoaXetNghiem: boolean = false,

        //BVHD-3364
        public TenCongTy: string = null,

        public SoLuongThem: number = null,
        public BarcodeNumber: number = null,
        public Barcode: string = null,
        // BVHD-3836
        public NhanVienLayMauId: number = null,
        public ThoiGianLayMau: Date = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class KiemTraBarcodeCapCodeDichVuXetNghiem {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BarcodeNumber: string = null,
        public IsInBarcode: boolean = false,
        public SoLuong: number = null,
        public SoLuongThem: number = null,
        public IsCapMoi: boolean = false,
        public BarcodeString = null,
        public IsCapBarcodeChoDichVu: boolean = null
    ) { }
}

export class CapBarcodeTheoDichVuXetNghiem {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public BarcodeNumber: number = null,
        public BarcodeId: string = null,
        public SoLuong: number = null,
        public SoLuongThem: number = null,
        public YeuCauDichVuKyThuatIds: Array<number> = new Array<number>(),
        // BVHD-3836
        public NhanVienLayMauId: number = null,
        public ThoiGianLayMau: Date = null,
    ) { }
}


export class InBarcodeDaCapCodeBenhNhan {
    public constructor(
        public HostingName: string = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public HopDongKhamSucKhoeId: number = null,
        public SoLuong: number = null,
        public SearchString: string = null,
    ) { }
}