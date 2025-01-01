export class KhamDoanDSNhanVien{
    public constructor(
        public SearchString: string = null,
        public CongTyKhamSucKhoeId : number = null,
        public HopDongKhamSucKhoeId : number = null,
        public TenCongTyKhamSucKhoe: string = null,
        public TenHopDongKhamSucKhoe: string = null,
        public TrangThaiHopDong : boolean = null,
        public LaHopDongDaKetLuan: boolean = null,
        public TrangThai: KhamDoanDanhSachNhanVienTrangThai = new KhamDoanDanhSachNhanVienTrangThai()
        ){}
}
export class KhamDoanDSDNhanVienDaKl{
    public constructor(
        public SearchString: string = null,
        public CongTyKhamSucKhoeId : number = null,
        public HopDongKhamSucKhoeId : number = null,
        public TenCongTyKhamSucKhoe: string = null,
        public TenHopDongKhamSucKhoe: string = null,
        public TrangThaiHopDong : boolean = null,
        public LaHopDongDaKetLuan: boolean = null,
        public TrangThai: KhamDoanDanhSachNhanVienTrangThai = new KhamDoanDanhSachNhanVienTrangThai()
        ){}
}

export class KhamDoanDanhSachNhanVienTrangThai {
    public constructor(
        public ChuaKetLuan: boolean = true,
        public DaKetLuan : boolean = true
        ){}
}
export class KhamDoanDSketLuanCLSKhamSucKhoeDoanTimKiem {
    public constructor(
        public SearchString: string = null
        ){}
}
export class KetQuaMau {
    public constructor(
        public Id : number = 0,
        ){}
}
export class ListStatusSelectTab{
    constructor(
        public selectedTabChuaKL: boolean = true,
        public selectedTabDaKL: boolean = false,
    ) {
    }
}
export class PhieuInXetNghiemVo {
    constructor(
        public NhomDichVuBenhVienId: number = null,
        public PhienXetNghiemId: number = null,
        public HostingName: string = null,
        public Header: boolean = false
    ) { }
}
export class KhamDoanKetLuanCLS {
    constructor(
        public KSKKetQuaCanLamSang: string = "",
        public KSKDanhGiaCanLamSang: string = null,
        public Id: number = null,
        public HopDongKhamSucKhoeNhanVienId:number= null
    ) { }
}
export class ListStatusSelectTabKhamDoanKetLuanCLS {
    constructor(
        public selectedTabChuaKL: boolean = true,
        public selectedTabDaKL: boolean = false,
    ) {
    }
}
export class KetQuaMauRmove {
    public constructor(
        public KetQuaCLS : string = "",
        public IsCheck : boolean = true
        ){}
}

export class KhamDoanDaKetLuanSearch {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public TenCongTy: string = null,
        public HopDongKhamSucKhoeId: number = null,
        public TenSoHopDong: string = null,
        public ChuaKetLuan: boolean = true,
        public DaKetLuan: boolean = true,
        public LaHopDongDaKetLuan: boolean = null,
        public SearchString: string = null,
    ) {
    }
}