export class GoiDichVuChuongTrinhMarketing {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public GoiDvId: number = null,
        public GoiDv: string = null,
        public GoiDichVu: number = null,
        public GiaTruocChietKhau: number = null,
        public TiLeChietKhau: number = null,
        public GiaSauChietKhau: number = null,
        public TuNgay: any = new Date(),
        public TuNgayDisplay: string = null,
        public DenNgay: any = null,
        public CongTyBaoHiemTuNhanId: any = null,
        public DenNgayDisplay: string = null,
        public TamNgung: boolean = null,
        public MoTaGoiDichVu: string = null,
        public CoYeuCauSuDung: boolean = null,
        public GoiDvIdCu: number = null,
        public GoiSoSinh: boolean = null,
        public LoaiGoiDichVuId: number = null,
        public TenLoaiGoiDichVu: string = null,
        public QuaTangKems: QuaTangKem[] = [],
        public YeuCauSuDungChuongTrinhs: any[] = [],
        public KhuyenMaiKems: KhuyenMaiKem[] = [],
        public NhomDichVus: NhomDichVu[] = []
    ) { }
}

export class NhomDichVu {
    constructor(
        public Id: number = null,
        public DvId: number = null,
        public MaDv: string = null,
        public TenDv: string = null,
        public NhomDisplay: string = null, 
        public LoaiGiaDisplay: string = null,
        public SoLuong: number = 1,
        public DonGiaBenhVien: number = null,
        public DonGiaTruocChietKhau: number = null,
        public DonGiaSauChietKhau: number = null,
        public ThanhTienBenhVien: number = null,
        public ThanhTienTruocChietKhau: number = null,
        public ThanhTienSauChietKhau: number = null
    ) { }
}
export class QuaTangKem {
    constructor(
        public Id: number = null,
        public IdSys: number = null,
        public QuaTangId: number = null,
        public QuaTang: string = null,
        public SoLuong: number = null,
        public GhiChu: string = null,
        public GoiDvChuongTrinhMarketingId: number = null
    ) { }
}

export class KhuyenMaiKem {
    constructor(
        public Id: number = null,
        public MaDv: string = null,
        public TenDv: string = null,
        public DvId: number = null,
        public LoaiGia: number = null,
        public GoiDichVuId: number = null,
        public LoaiGiaDisplay: string = null,
        public SoLuong: number = 1,
        public IdDatabase: number = null,
        public DonGia: number = null,
        public DonGiaKhuyenMai:number=0,
        public ThanhTien: number = null,
        public GhiChu: string = null,
        public Nhom: number = null, // 1 là khám bệnh, 2 là kỹ thuật, 3 là giường bệnh
        public NhomDisplay: string = null,        
        public SoNgaySuDung: number = 30,
    ) { }
}

export class GoiDichVuChuongTrinhMarketingSearch {
    constructor(
        public SearchString: string = null,
        // tslint:disable-next-line: no-use-before-declare
        public RangeFromDate: RangeDate = new RangeDate(),
        // tslint:disable-next-line: no-use-before-declare
        public RangeToDate: RangeDate = new RangeDate()
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null
    ) { }
}
export class LoaiGiaBenhVien {
    constructor(public KeyId: number, public DisplayName: string = "") { }
}
export class TruocChietKhau {
    constructor(public ChietKhau: number, public LoaiChietKhau: number = 1) { }
}


export class LoaiGoiDichVu {
    constructor(
        public Id: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public IsDefault: boolean = false,
    ) { }
}