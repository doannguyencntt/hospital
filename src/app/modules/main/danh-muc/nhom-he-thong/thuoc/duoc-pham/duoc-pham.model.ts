import { LoaiThuocHoacHoatChat } from 'src/app/shared/enum/thuoc.enum';
import { LoaiTapTin } from "src/app/shared/enum/common-type.enums";

export class DuocPham {
    constructor(
        public Id: number = 0,
        public MaThuocBenhVien: string = null,
        public Ten: string = null,
        public TenTiengAnh: string = null,
        public SoDangKy: string = null,
        public STTHoatChat: number = null,
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public DuongDungId: number = null,
        public TenDuongDung: string = null,
        public HamLuong: string = null,
        public QuyCach: string = null,
        public TieuChuan: string = null,
        public BaoChe: string = null,
        public DonViTinhId: number = null,
        public TenDonViTinh: string = null,
        public HanSuDung: Date = null,
        public HieuLuc: boolean = true,
        public IsDisabled: boolean = false,
        public HuongDan: string = null,
        public MieuTa: string  = null,
        public MoTa: string  = null,
        public LoaiThuocHoacHoatChat: LoaiThuocHoacHoatChat = null,
        public TenLoaiThuocHoacHoatChat: string = null,
        public ChiDinh: string  = null,
        public ChongChiDinh: string = null,
        public LieuLuongCachDung: string = null,
        public TacDungPhu: string = null,
        public ChuYDePhong: string = null,
        public LaThucPhamChucNang: boolean = false,
        public SuDungThuocBenhVien: boolean = false,
        public MaDuocPhamBenhVien : string = null,
        public DieuKienBaoHiemThanhToan : string = null,
        public DuocPhamBenhVienPhanNhomId : number = 0  ,
        public DuocPhamBenhVienPhanNhomModelText: string = null,
        public DuocPhamBenhVienModel : DuocPhamBenhVienModel = null,
        public TheTich: number = null,
        public HeSoDinhMucDonViTinh : number = null,
        public LaThuocHuongThanGayNghien: boolean = false,

        //BVHD-3454
        public ChuaTaoDuocPhamBenhVien: boolean = true
        
    ){}
}
export class DuocPhamBenhVienModel {
  constructor(
    public Id: number = 0,
    public MaDuocPhamBenhVien: string = null,
    public DuocPhamBenhVienPhanNhomId: number = null
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

export class FileExcelDuocPham {
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
      public Ten: string = null,
      public TotalThanhCong: number = null,
      public Error: string = null
    ) { }
}