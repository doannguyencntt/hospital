import { RangeDate } from '../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model';

export class TongHopDuTruMuaVatTuTaiKhoaSreach {
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
    ) { }
}
export class TongHopDuTruMuaVatTuTaiKhoa {
    constructor(
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
        public TrangThai: string = null,
        public KhoaPhongId: number = null,
        public TenKhoaPhong: string = null,
        public KyDuTruMuaDuocPhamVatTuId: number = null,
        public LyDoTruongKhoaTuChoi: string = null,

        public TinhTrang : number = null,
        public TenNhanVienKhoDuocDuyet: string = null,
        public NgayKhoDuocDuyet: Date = null,
        public TenGiamDocDuyet: string = null,
        public NgayGiamDocDuyet:  Date = null,
        public LyDoGiamDocTuChoi: string = null,

    ) {
    }
}

export class DuyetDuTruMuaVatTuViewModel {
    constructor(
        public DuTruMuaVatTuId: any = null,
        public NhanVienYeuCauId: number = null,
        public KhoaPhongId: number = null,
        public GhiChu: string = null,
        public NgayYeuCau: Date = null,
        public DuTruMuaVatTuTaiKhoaChiTietVos: DuTruMuaVatTuTaiKhoaChiTietVo[] = []
    ) { }
}

export class ThongTinLyDoHuyDuyetTaiKhoa {
    constructor(
        public Id: number = 0,
        public LyDoHuy: string = null
    ) { }
}

export class DuTruMuaVatTuTaiKhoaChiTietVo {
    constructor(
        public Id: number = 0,
        public Nhom: string = null,
        public KeyId: number = null,
        public VatTuId: number = null,
        public TenVatTu: string = null,
        public LaBHYT: string = null,
        public QuyCach: string = null,
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
        public DuTruMuaVatTuIds: any,
        public DuTruMuaVatTuChiTietIds: any
    ) { }
}
export class PhieuInDuTruMuaTaiKhoa {
    constructor(
        public DuTruMuaVatTuTheoKhoaId: number = 0,
        public HostingName: string = null,
        public Header: boolean = null
    ) { }
}
