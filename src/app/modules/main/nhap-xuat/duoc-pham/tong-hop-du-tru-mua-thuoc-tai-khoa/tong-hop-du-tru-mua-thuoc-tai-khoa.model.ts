import { RangeDate } from '../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';

export class TongHopDuTruMuaThuocTaiKhoaSreach {
    constructor(
        public Id: number = 0,
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public DaDuyetDaXuLy: boolean = true,
        public DaGuiChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = true,
        public SearchString: string = null,
        public SearchStringDaXuLy: string = null,
        public SearchStringTuChoi: string = null,
        public RangeFromDate: RangeDate = new RangeDate(),
        public RangeFromDateDaXuLy: RangeDate = new RangeDate(),
        public RangeFromDateTuChoi: RangeDate = new RangeDate(),

    ) {
    }
}

export class TongHopDuTruMuaThuocTuChoiTaiKhoaSreach {
    constructor(
        public Id: number = 0,
        public NgayYeuCauTuFormat: any = null,
        public NgayYeuCauDenFormat: any = null,
        public FromDate: any = null,
        public ToDate: any = null,
        public ChoDuyet: boolean = true,
        public DaDuyet: boolean = true,
        public SearchString: string = null,
    ) {
    }
}


export class TongHopDuTruMuaThuocTaiKhoa {
    constructor(
        public TinhTrang : number = null,
        public SoPhieu: string = null,
        public TenNhanVienYeuCau: string = null,
        public KyDuTru: string = null,
        public Id: number = 0,
        public LoaiDuTru: number = null,
        public TenLoaiDuTru: string = null,
        public KhoNhapId: number = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: number = null,
        public NhanVienYeuDuyetId: string = null,
        public NgayYeuCau: Date = null,
        public GhiChu: string = null,
        public TenNhanVienDuyet: string = null,
        public LyDoTruongKhoaTuChoi: string = null,
        public TrangThai: number = null,
        public KhoaPhongId: number = null,
        public TenKhoaPhong: string = null,
        public KyDuTruMuaDuocPhamVatTuId: number = null,

        public TenNhanVienKhoDuocDuyet: string = null,
        public NgayKhoDuocDuyet: Date = null,
        public TenGiamDocDuyet: string = null,
        public NgayGiamDocDuyet:  Date = null,
        public LyDoGiamDocTuChoi: string = null,
    ) {
    }
}

export class DuyetDuTruMuaDuocPhamViewModel {
    constructor(
        public DuTruMuaDuocPhamId: any = null,
        public NhanVienYeuCauId: number = null,
        public KhoaPhongId: number = null,
        public GhiChu: string = null,
        public NgayYeuCau: Date = null,
        public DuTruMuaDuocPhamTaiKhoaChiTietVos: DuTruMuaDuocPhamTaiKhoaChiTietVo[] = []
    ) { }
}

export class ThongTinLyDoHuyDuyetTaiKhoa {
    constructor(
        public Id: number = 0,
        public LyDoHuy: string = null
    ) { }
}

export class DuTruMuaDuocPhamTaiKhoaChiTietVo {
    constructor(
        public Id: number = 0,
        public Nhom: string = null,
        public KeyId: number = null,
        public DuocPhamId: number = null,
        public TenDuocPham: string = null,
        public LaBHYT: string = null,
        public HoatChat: string = null,
        public DuongDung: string = null,
        public DonViTinh: string = null,
        public HangSanXuat: string = null,
        public SoLuongDuTru: number = null,
        public SoLuongDuKienSuDung: number = null,
        public NhomDuPhong: string = null,
        public KhoDuTruTon: number = null,
        public KhoTongTon: number = null,
        public HDChuaNhap: number = null,
        public NongDoHamLuong: string = null,
        public SoLuongDuTruTruongKhoaDuyet: number = null,
        public DuTruMuaDuocPhamIds: any,
        public DuTruMuaDuocPhamChiTietIds: any
    ) { }
}
export class PhieuInDuTruMuaTaiKhoa {
    constructor(
        public DuTruMuaDuocPhamTheoKhoaId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null      
    ) {
    }
}

export class ListStatusSelectTabTHDTKhoa {
    constructor(
        public selectedTabChoXuLy: boolean = true,
        public selectedTabDaXuLy: boolean = false,
        public selectedTabTuChoi: boolean = false,
    ) {
    }
}
