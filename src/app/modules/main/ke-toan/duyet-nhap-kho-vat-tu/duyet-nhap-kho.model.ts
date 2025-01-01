import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";

export class DuyetNhapKho {
}

export class NhapKhoVatTu {
    constructor(
        public Id: number =0,
        public KhoVatTuId: number = null,
        public TenKhoVatTu: string = null,
        public SoChungTu: string = null,
        public LoaiNhapKho: number = 1,
        public TenLoaiNhapKho: string = null,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public TenNguoiGiaoNgoai: string = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public LoaiNguoiGiao: number = 1,
        public NhapKhoVatTuChiTiets: NhapKhoVatTuChiTiet[]=[],
        public NgayNhap: Date = null,
        public DaXuatKho: boolean = null
    ) { }
}
export class NhapKhoVatTuChiTiet {
    constructor(
        public Id: number =0,
        public IdView : number =0,
        public NhapKhoVatTuId: number = 0,
        public VatTuBenhVienId: number = null,
        public TenVatTu: string = null,
        public HopDongThauVatTuId: number = 0,
        public TenHopDongThau: string = null,

        public KhoVatTuViTriId: number = null,
        public ViTri: string = null,
        public DatChatLuong: boolean = true,
        public TenDatChatLuong: string = "Đạt",
        public HanSuDung: Date = null,
        public TextHanSuDung: string = null,

        public Solo: string = null,
        public SoLuongNhap:  number = null,
        public SoLuongNhapTrongGrid: number = 0,
        public SoLuongHienTaiVatTuTheoHopDongThauDaLuu: number = 0,
        public DonGiaNhap: number = null,
        public DonGiaBan: number = null,
        public TextDonGiaNhap: string = null,
        public TextDonGiaBan: string  = null,
        public TextChietKhau: string = null,
        public TextSoLuongNhap: string = null,
        public TextVAT: string = null,
        public VAT: number = null,
        public ChietKhau: number = null,
        public MaVach: string = null,
        public NgayNhap: Date = null,
        
    ) { }
}

export class NhapKhoVatTuSearch
{ 
    constructor(
        public KhoVatTuId: number = 0,
        public TenKhoVatTu: string = null,
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public LoaiNhapKho: number = 0,
        public TenLoaiNhapKho: string = null,
        public SearchString: string = "",
        public RangeNhap: RangeDate = new RangeDate(),
        public RangeDuyet: RangeDate = new RangeDate(),  
    ) { }
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,        
    ){}
}

export class ThongTinDuyetKhoVatTu {
    constructor(
        public NguoiNhapId: number = 0,
        public SoChungTu: string = null,
        public TenNguoiNhap: string = null,
        public NgayNhap: Date = new Date(),
        public TinhTrangDuyet : string = null,
        public ClassTrangThai : string = null,
        public NguoiDuyetId: number = 0,
        public NguoiDuyet: string = null,
        public NgayDuyet: Date = new Date(),
    ) { }
}

export class ThongTinLyDoHuyNhapKhoVatTu{
    constructor(
        public YeuCauNhapKhoVatTuId: number = 0,
        public LyDoHuy : string = null
    ) { }
}