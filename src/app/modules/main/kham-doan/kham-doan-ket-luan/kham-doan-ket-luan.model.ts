
export class ListStatusSelectTabKhamDoanKetLuan {
    constructor(
        public selectedTabChuaKetLuan: boolean = true,
        public selectedTabDaKetLuan: boolean = false,
    ) {
    }
}

export class KhamDoanChuaKetLuanSearch {
    constructor(
        public CongTyKhamSucKhoeId: number = null,
        public TenCongTy: string = null,
        public HopDongKhamSucKhoeId: number = null,
        public TenSoHopDong: string = null,
        public ChuaKetLuan: boolean = true,
        public DaKetLuan: boolean = true,
        public KetLuan: number = null,
        public LaHopDongDaKetLuan: boolean = null,
        public SearchString: string = null,
    ) {
    }
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


export class KhamDoanChuaKetLuan {
    constructor(
        public Id: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public PhanLoaiSucKhoeId: string = null,
        public KSKKetQuaCanLamSang: string = null,
        public KSKDanhGiaCanLamSang: string = null,
        public KSKKetLuanPhanLoaiSucKhoe: string = null,
        public KSKKetLuanGhiChu: string = null,
        public KSKKetLuanCacBenhTat: string = null,
        public IsEnableKetLuan: boolean = null,
        public IsHiddenKetLuan: boolean = null,
        public CoHienThiPhanLoai: boolean = null,
        public IsOnlySave: boolean = null,
        public CoDichVuChuaKham: boolean = null,
        public LaGetKetQuaMau: boolean = null,
        public DichVuKhamChuaKhams: Array<string> = null,
        public DichVuKyThuatChuaThucHiens: Array<string> = null,

        public LastModified: any = null,
        public TrangThaiYeuCauTiepNhan: number = null,
        public KetLuanKhamSucKhoeDoanDichVuKhamTemplates: KetLuanKhamSucKhoeDoanDichVuKhamTemplate[] = [],
        public CongTyKhamSucKhoeId:number=null
    ) {
    }
}


export class KetLuanKhamSucKhoeDoanDichVuKhamTemplate {
    constructor(
        public Type: number = null,
        public TypeTemplate: number = null,
        public Title: string = null,
        public ThongTinKhamTheoDichVuTemplate: string = null,
        public ThongTinKhamTheoDichVuData: string = null,
        public KetLuanKhamSucKhoeDoanDichVuKhamTemplateValues: KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue[] = []
    ) {
    }
}

export class KetLuanKhamSucKhoeDoanDichVuKhamTemplateValue {
    constructor(
        public Label: string = null,
        public Value: string = null,
    ) {
    }
}

export class InSoKhamSucKhoeVaKetQua {
    constructor(
        public Id: number = null,
        public HostingName: string = null,
        public Loai: number = null,
    ) {
    }
}

export class KhamDoanKetQuaMau {
    constructor(
        public IsCheck: boolean = true,
        public Value: string = null,
    ) {
    }
}
export class KetQuaKhamChuyenKhoaNoi {
    constructor(
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public ThanTietNieu: string = null,
        public NoiTiet: string = null,
        public TamThan: string = null,
    ) {
    }
}
export class KetQuaNgoaiDaLieuSanPhuKhoa {
    constructor(
        public value: string = null,
    ) {
    }
}
export class KetQuaKhamChuyenKhoaMat {
    constructor(
        public KhongKinhMatPhai: string = null,
        public KhongKinhMatTrai: string = null,
        public CoKinhMatPhai: string = null,
        public CoKinhMatTrai: string = null,
        public CacBenhVeMat: string = null,
    ) {
    }
}
export class KetQuaKhamChuyenKhoaTaiMuiHong {
    constructor(
        public TaiPhaiNoiThuong: string = null,
        public TaiPhaiNoiTham: string = null,
        public TaiTraiNoiThuong: string = null,
        public TaiTraiNoiTham: string = null,
        public CacBenhTaiMuiHong: string = null,
    ) {
    }
}
export class KetQuaKhamChuyenKhoaNoiRangHamMat {
    constructor(
        public HamTren: string = null,
        public HamDuoi: string = null,
        public CacBenhRangHamMat: string = null,
    ) {
    }
}
export enum LoaiChuyenKhoaVaDichVuKyThuat {
    ChuyenKhoaNoi = 1,
    ChuyenKhoaTaiMuiHong = 2,
    ChuyenKhoaRangHamMat = 3,
    ChuyenKhoaMat = 4,
    ChuyenSanPhuKhoa = 5,
    ChuyenDaLieu = 6,
    ChuyenNgoaiKhoa = 7,
    Dvkt = 8,
}

export class ItemEditKetQua {
    constructor(
        public Id: number = null,
        public Type: number = null,
        public value: string = null,
        public JsonValueEdit: string = null
    ) {
    }
}

export class KetQuaKhamSucKhoe {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public HopDongKhamSucKhoeId: number = null,
        public JsonKetQuaKSK:string  =null,
        public JsonKetLuan:string  =null,
    ) {
    }
}
export class KetQuaKhamSucKhoeModel {
    constructor(
        public DanhSachGridKhamSucKhoe: [] = [],
    ) {
    }
}
export class KetQuaSinhHieu {
    constructor(
        public Id: number = 0,
        public NhipTim: number = null,
        public NhipTho: number = null,
        public ThanNhiet: number = null,
        public HuyetAp: string = null,
        public HuyetApTamThu: number = null,
        public HuyetApTamTruong: number = null,
        public ChieuCao: number = null,
        public CanNang: number = null,
        public BMI: number = null,
        public Glassgow: number = null,
        public NoiThucHienId: number = null,
        public NhanVienThucHienId: number = null,
        public YeuCauTiepNhanId: number = 0,
        public NgayThucHien: string = null,
        public IsUpdate: boolean = false,
        public IsDelete: boolean = false
    ) { }
}