export class NhapKhoDuocPham {
    constructor(
        public Id: number =0,
        public SoChungTu: string = null,
        //public LoaiNhapKho: number = 1,
        //public TenLoaiNhapKho: string = null,
        public NguoiGiaoId: number = null,
        public TenNguoiGiao: string = null,
        public NguoiNhapId: number = null,
        //public TenNguoiNhap: string = null,
        public LoaiNguoiGiao: number = 1,
        public NhapKhoDuocPhamChiTiets: NhapKhoDuocPhamChiTiet[]=[],
        public OldNhapKhoDuocPhamChiTiets: NhapKhoDuocPhamChiTiet[]=[],
        public NgayNhap: Date = new Date(),
        public NgayHoaDon: Date = new Date(),
        public DaXuatKho: boolean = null,

        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,
        public LyDoKhongDuyet: string = null,

        public KyHieuHoaDon: string = null,
        public DuocKeToanDuyet: boolean = null,
        public KhoNhapSauKhiDuyetId: number = null,
        public NguoiNhapSauKhiDuyetId: number = null,
    ) { }
}
export class NhapKhoDuocPhamChiTiet {
    constructor(
        public TiLeBHYTThanhToan: number = 100,
        public Id: number = 0,
        public IdView: number = Math.random(),
        public HopDongThauDuocPhamId: number = null,
        public NhaThauId: number = null,
        public NhaThauDisplay: string = null,
        public DuocPhamBenhVienId: number = null,
        public TenDuocPhamBenhVien: number = null,
        public LaDuocPhamBHYT: boolean = true,
        public DuocPhamBenhVienPhanNhomId: number = null,
        public Solo: string = null,
        public HanSuDung: Date = null,
        public MaVach: string = null,
        public SoLuongNhap: number = null,
        public DonGiaNhap: number = null,
        public GiaApThau: number = null,
        public VAT: number = 0,
        public KhoViTriId: number = null,
        public LoaiNhap: number = 1, // 1 là hdt, 2 là ncc
        public DVT: string = null,

        //for grid
        public HopDongThauDisplay: string = null,
        public DuocPhamDisplay: string = null,
        public LoaiDisplay: string = null,
        public NhomDisplay: string = null,
        public HanSuDungDisplay: string = null,
        public SoLuongNhapDisplay: string = null,
        public ViTriDisplay: string = null,
        
        public SoLuongNhapSoCap: number = null,
        public HeSoDinhMucDonViTinh: number = null,
        public MaRef: string = null,
        public KhoNhapSauKhiDuyetId: number = null,
        public NguoiNhapSauKhiDuyetId: number = null,
        public ThanhTienTruocVat: number = 0,
        public ThanhTienSauVat: number = 0,
        public ThueVatLamTron: number = 0,
        public GhiChu: string = null,

    ) { }
}

export class NhapKhoDuocPhamSearch
{
    constructor(
        // public KhoDuocPhamId: number = 0,
        // public TenKhoDuocPham: string = null,
        // public ChuaXepViTri : boolean = false,
        // public LoaiNhapKho : number = 0,
        // public TenLoaiNhapKho: string = null,
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = false,
        public DaDuyet: boolean = false,
        public SearchString: string = null,

        public RangeNhap: rangeDate = new rangeDate,
        public RangeDuyet: rangeDate = new rangeDate,
    ) { }
}

export class rangeDate {
    constructor(
        public startDate:Date = null,
        public endDate:Date = null,

    ){}
}

export class LookupItemViTriVo {
    constructor(
      public KeyId: number,
      public DisplayName: string,
      public KhoDuocPhamId: number
    ) {
    }
  }
