export class LookupItemViTriVo {
    constructor(
      public KeyId: number,
      public DisplayName: string,
      public KhoMarkettingId: number
    ) {
    }
  }
  export class NhapKhoMarketting {
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
        public NhapKhoMarkettingChiTiets: NhapKhoMarkettingChiTiet[]=[],
        public NgayNhap: Date = new Date(),
        public DaXuatKho: boolean = null,

        public NgayDuyet: Date = null,
        public NhanVienDuyetId: number = null,
        
        public LyDoKhongDuyet: string = null,
        public DuocKeToanDuyet: boolean = null,
    ) { }
}
export class NhapKhoMarkettingChiTiet {
    constructor(
        public TiLeBHYTThanhToan: number = null,
        public Id: number =0,
        public IdView: number = Math.random(),
        public HopDongThauMarkettingId: number = null,
        public MarkettingBenhVienId: number = null,
        public LaMarkettingBHYT: boolean = false,
        public MarkettingBenhVienPhanNhomId: number = null,
        public Solo: string = null,
        public HanSuDung: Date = null,
        public MaVach: string = null,
        public SoLuongNhap: number = null,
        public DonGiaNhap: number = null,
        public VAT: number = null,
        public KhoViTriId: number = null,

        public DVT: string = null,

        //for grid
        public HopDongThauDisplay: string = null,
        public MarkettingDisplay: string = null,
        public LoaiDisplay: string = null,
        public NhomDisplay: string = null,
        public HanSuDungDisplay: string = null,
        public SoLuongNhapDisplay: string = null,
        public ViTriDisplay: string = null,
    ) { }
}

export class NhapKhoMarkettingSearch
{ 
    constructor(
        public DangChoDuyet: boolean = true,
        public TuChoiDuyet: boolean = true,
        public DaDuyet: boolean = true,
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