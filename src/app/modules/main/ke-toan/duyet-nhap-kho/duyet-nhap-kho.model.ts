import { RangeDate } from "../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model";


export class DuyetNhapKho {
}

export class NhapKhoDuocPham {
    constructor(
        public Id: number = 0,
        public KhoDuocPhamId: number = null,
        public TenKhoDuocPham: string = null,
        public SoChungTu: string = null,
        public LoaiNhapKho: number = 1,
        public TenLoaiNhapKho: string = null,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public TenNguoiGiaoNgoai: string = null,
        public NguoiNhapId: number = null,
        public TenNguoiNhap: string = null,
        public LoaiNguoiGiao: number = 1,
        public NhapKhoDuocPhamChiTiets: NhapKhoDuocPhamChiTiet[] = [],
        public NgayNhap: Date = null,
        public DaXuatKho: boolean = null
    ) { }
}
export class NhapKhoDuocPhamChiTiet {
    constructor(
        public Id: number = 0,
        public IdView: number = 0,
        public NhapKhoDuocPhamId: number = 0,
        public DuocPhamBenhVienId: number = null,
        public TenDuocPham: string = null,
        public HopDongThauDuocPhamId: number = 0,
        public TenHopDongThau: string = null,

        public KhoDuocPhamViTriId: number = null,
        public ViTri: string = null,
        public DatChatLuong: boolean = true,
        public TenDatChatLuong: string = "Đạt",
        public HanSuDung: Date = null,
        public TextHanSuDung: string = null,

        public Solo: string = null,
        public SoLuongNhap: number = null,
        public SoLuongNhapTrongGrid: number = 0,
        public SoLuongHienTaiDuocPhamTheoHopDongThauDaLuu: number = 0,
        public DonGiaNhap: number = null,
        public DonGiaBan: number = null,
        public TextDonGiaNhap: string = null,
        public TextDonGiaBan: string = null,
        public TextChietKhau: string = null,
        public TextSoLuongNhap: string = null,
        public TextVAT: string = null,
        public VAT: number = null,
        public ChietKhau: number = null,
        public MaVach: string = null,
        public NgayNhap: Date = null,

    ) { }
}

export class NhapKhoDuocPhamSearch {
    constructor(
        public DangChoDuyet: boolean = true,
        public DaDuyet: boolean = false,
        public TuChoiDuyet: boolean = false,
        public SearchString: string = null,
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
export class ThongTinDuyetKhoDuocPham {
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


export class ThongTinLyDoHuyNhapKhoDuocPham{
    constructor(
        public YeuCauNhapKhoDuocPhamId: number = 0,
        public LyDoHuy : string = null
    ) { }
}