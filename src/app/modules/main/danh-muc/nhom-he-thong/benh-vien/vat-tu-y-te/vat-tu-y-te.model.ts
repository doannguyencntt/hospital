import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class VatTuYTe {
    constructor(
        public Ten: string = null,
        public Ma: string = null,
        public NhomVatTuId: number = null,
        public NhomVatTuModelText: string = null,
        public DonViTinh: string = null,
        public TyLeBaoHiemThanhToan: number = null,
        public QuyCach: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = false,
        public SuDungVatTuBenhVien : boolean = true,
        public LoaiSuDung: number = null,
        public LoaiSuDungText: string = null,
        public MaVatTuBenhVien: string = null,
        public DieuKienBaoHiemThanhToan : string = null,
        public HeSoDinhMucDonViTinh : number = null,
        public VatTuBenhViewModel : VatTuBenhViewModel = null,

        //BVHD-3472
        public ChuaTaoVatTuBenhVien: boolean = true
    ) { }
}
export class VatTuBenhViewModel {
  constructor(
    public Id: number = 0,
    public MaVatTuBenhVien: string = null,
    public LoaiSuDung: number = null,
  ) {
  }
}
export class LookupQueryInfo {
    constructor(
      public Take: number = 50,
      public Id: number = 0,
      public Query: string = null,
      public ParameterDependencies: string = null
    ) {
    }
  }

  export class FileExcelVatTu {
    constructor(
      public Id: number = 0,
      public Ma: string = null,
      public Ten: string = null,
      public TenGuid: string = null,
      public DuongDan: string = null,
      public MoTa: string = null,
      public KichThuoc: number = 0,
      public LoaiTapTin: LoaiTapTin = null
    ) { }
}

export class ThongTinError {
    constructor(
      public Ma: string = null,
      public Ten: string = null,
      public TotalThanhCong: number = null,
      public Error: string = null
    ) { }
}

