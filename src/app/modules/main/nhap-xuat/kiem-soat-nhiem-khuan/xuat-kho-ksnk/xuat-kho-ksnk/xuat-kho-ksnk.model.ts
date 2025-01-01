import { DaSuaSoLuongXuat } from "../../../duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model";

export class XuatKhoKSNK {
    constructor(
        public Id: number = 0,
        public KhoXuatId: number = null,
        public KhoXuatDisplay: string = null,
        public KhoNhapId: number = null,
        public KhoNhapDisplay: string = null,
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
        public LoaiKhoVatTuXuat: number = null,
        public IsXuatKhac: boolean = false,
        public NgayXuat: Date = new Date(),
        public XuatKhoVatTuChiTiets: KSNKXuatGridVo[] = [],
    ) {
    }
}

export class KSNKXuatGridVo {
    constructor(
        public Id: string = null,
        public STT: number = null,
        public TenVatTu: string = null,
        public DVT: string = null,
        public LaVatTuBHYT: boolean = null,
        public Loai: string = null,
        public SoLuongTon: number = null,
        public SoLuongTonDisplay: string = null,
        public SoLuongXuat: number = null,
        public LoaiSuDung: number = null,
        public TenNhom: string = null,
        public MaVatTu: string = null,
    ) {
    }
}

export class XuatKhoKSNKChiTiet {
    constructor(
        public Id: number = 0,
        public DatChatLuong: boolean = null,
        public XuatKhoVatTuId: number = null,
        public VatTuBenhVienId: number = null,
        public TongSoLuongXuat: number = null,
        public XuatKhoVatTuChiTietViTris: XuatKhoKSNKChiTietViTri[] = [],
        public TenVatTu: string = null,
        public ChatLuong: string = null,
        public VatTuId: number = null,
        public NgayXuat: Date = new Date(),
        public DonGiaBan: number = null,
        public VAT: number = null,
        public ChietKhau: number = null,
    ) {
    }
}

export class XuatKhoKSNKChiTietViTri {
    constructor(
        public Id: number = 0,
        public XuatKhoVatTuChiTietId: number = null,
        public NhapKhoVatTuChiTietId: number = null,
        public SoLuongXuat: number = null,
        public ViTri: string = null,
        public SoLo: string = null,
        public HanSuDungDisplay: string = null,
        public NgayXuat: Date = new Date(),
    ) {
    }
}

export class ThemKSNK {
    constructor(
        public VatTuId: number = null,
        public ChatLuong: number = 1,
        public SoLuongTon: number = null,
        public SoLuongXuat: number = null,
        public KhoId: number = null,
        public DonGia: number = null,
        public VAT: number = null,
        public ChietKhau: number = null,
        public loaiKhoVatTuXuat: number = null,
        public loaiXuatKho: number = null
    ) {
    }
}

export class XuatKhoKSNKSearch {
    constructor(
        public SearchString: string = null,
        public RangeXuat: RangeDate = new RangeDate(),
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: any = null,
        public DenNgay: any = null,
    ) { }
}

export class GetKSNKOnGroupModel {
    constructor(
        public TenNhom: string = null,
        public KhoXuatId: number = null,
        public SearchString: string = null,
        public ListDaChon: DaSuaSoLuongXuat[] = null,
    ) {
    }
}

export enum LoaiDuocPhamVatTu {
    LoaiDuocPham = 0,
    LoaiVatTu = 1    
}
