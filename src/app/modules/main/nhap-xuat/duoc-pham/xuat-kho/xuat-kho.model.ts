import { RangeDate } from "../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class DuocPhamXuatGridVo {
    constructor(
        public Id: string = null,
        public STT: number = null,
        public TenDuocPham: string = null,
        public DVT: string = null,
        public LaDuocPhamBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public DuocPhamBenhVienPhanNhomId: string = null,
        public TenNhom: string = null,
        public MaDuocPham: string = null,
        public SoDangKy: string = null
    ){
    }
}


export class XuatKho {
    constructor(
        public Id: number = 0,
        public KhoDuocPhamXuatId: number = null,
        public KhoDuocPhamXuatDisplay: string = null,
        public KhoDuocPhamNhapId: number = null,
        public KhoDuocPhamNhapDisplay: string = null,
        public SoPhieu: string = null,
        public LoaiXuatKho: number = null,
        public LoaiXuatKhoDisplay: string = null,
        public NguoiNhanId: number = null,
        public NguoiNhanDisplay: string = null,
        public NguoiXuatId: number = null,
        public NguoiXuatDisplay: string = null,
        public LoaiNguoiNhan: number = 1,
        public TenNguoiNhan: string = null,
        public LyDoXuatKho: string = null,
        public HostingName: string = null,

        
        public TraNCCDisplayTheoKho: boolean = null,
        public TraNCC: boolean = null,

        public LoaiKhoDuocPhamXuat: number = null,

        public NgayXuat: Date = new Date(),

        public IsXuatKhac: boolean = false,

        public NhaThauId: number = null,
        public TenNhaThau: string = null,

        public NhapKhoDuocPhamId: number = null,
        public SoHopDong: string = null,
        //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
        public XuatKhoDuocPhamChiTiets: DuocPhamXuatGridVo[]=[],
    ){
    }
}

export class XuatKhoDuocPhamChiTiet {
    constructor(
        public Id: number = 0,
        public DatChatLuong: boolean = null,
        public XuatKhoDuocPhamId: number = null,
        public DuocPhamBenhVienId: number = null,
        public TongSoLuongXuat: number = null,
        public XuatKhoDuocPhamChiTietViTris: XuatKhoDuocPhamChiTietViTri[]=[],

        public TenDuocPham: string = null,
        public ChatLuong: string = null,
        public DuocPhamId: number = null,
        public NgayXuat: Date = new Date(),

        public DonGiaBan: number = null,
        public VAT: number = null,
        public ChietKhau: number = null,
    ){
    }
}

export class XuatKhoDuocPhamChiTietViTri {
    constructor(
        public Id: number = 0,
        public XuatKhoDuocPhamChiTietId: number = null,
        public NhapKhoDuocPhamChiTietId: number = null,
        public SoLuongXuat: number = null,

        public ViTri: string = null,
        public SoLo: string = null,
        public HanSuDungDisplay: string = null,
        public NgayXuat: Date = new Date(),
    ){
    }
}

export class ThemDuocPham {
    constructor(
        public DuocPhamId: number = null,
        public ChatLuong: number = 1,
        public SoLuongTon: number = null,
        public SoLuongXuat: number = null,
        public KhoId: number = null,
        public DonGia: number = null,
        public VAT: number = null,
        public ChietKhau: number = null,
        public loaiKhoDuocPhamXuat: number = null,
        public loaiXuatKho: number = null
    ){
    }
}

export class XuatKhoDuocPhamSearch
{ 
    constructor(
        public SearchString: string = null,

        public RangeXuat: RangeDate = new RangeDate(),
    ) { }
}

export class rangeDate {
    constructor(
        public startDate:Date = new Date(),
        public endDate:Date = new Date(),
        
    ){}
}
