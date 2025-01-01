import { Sort } from "src/app/shared/models/common.model";

export class BangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu {
    constructor(
        public TinhTao: boolean = true,
        public KichThichVatVa: boolean = true,
        public DHSinhTonOnDinh: boolean = true,
        public NghiNgoChayMau: boolean = true,
        public SuyHoHap: boolean = true,
        public NonNac: boolean = true,
        public CauBangQuang: boolean = true,
        public VanTimTrenDa: boolean = true,
        public DauNhieu: boolean = true,
        public TruyenDich: boolean = true,
        public ViTri: string = null,
        public LuuThong: boolean = true,
        public Sach: boolean = true,
        public OngThongDaDay: boolean = true,
        public OngThongTieu: boolean = true,
        public DanLuu: boolean = true,
        public ApLuc: boolean = true,
        public BangKhoValue: string = null,
        public ThamDichValue: string = null,
        public TuTrangBenhNhan: boolean = true,
        public BAKhoaHoanThien: boolean = true,

        public HoTenPTV: string = null,
        public NoiCongTac: string = null,
        public CheDoAnUong: string = null,
        public GiaiPhauBenh: boolean = true,
        public SoMauBenhPham: number = null,
        public KetQuaFilm: string = null,
        public XetNghiemCanLam: string = null,
        public DaKyChonPhong: boolean = true,
        public CheDoChamSoc: string = null,
        public ChiDinhTheoDoi: string = null,
        public NgayNhan: Date = null,
        public NgayNhanUTC: string = null,
        public NguoiGiao: string = null,
        public NguoiNhan: string = null,
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public NgayThucHien: string = null,
        public TaiKhoanDangNhap: string = null,
        public SoLuongMauSacDaDay: number = null,
        public SoLuongMauSacOngThongTieu: number = null,
        public SoLuongMauSacDich: number = null,
        public MauSacDich: String = null,
        public MauSacDaDay: String = null,
        public MauSacOngThongTieu: String = null,
        public ViTriDanLuu: number = null,
        public NhapTuTrang :string =null,
        public KiemTraTruocKhiLenPM: boolean = true,
        public KiemTraTruocKhiRachDa: boolean = true,
        public BV: boolean = null,
        public HT: boolean = null,
        public ThuocDangDungValue :boolean = true,
        public ThuocBanGiaoValue:boolean = true,
        public Cap1:boolean = null,
        public Cap2:boolean = null,
        public Cap3:boolean = null,
        public CheDoChamSocString: string = null,


        public BangTheoDoiGMHS:boolean = true,
        public BangTheoDoiHoiTinh:boolean = true,
        public PhieuDemGac:boolean = true,
        public PhieuTheoDoiTeNMC:boolean = true,
        public PhieuVTNgoai:boolean = true,
        public PhieuVTTHGMPT:boolean = true,
        public SoLuongFilm:boolean = true,
        public QuanAoVay:string = null,
       ) { }
}  
export class FileChuKyModel {
    constructor(
        public Id: number = 0,
        public INoiTruHoSoKhacIdd: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
    ) {
    }
}
export enum LoaiTapTin {
    Image = 1,
    Pdf = 2,
    Khac = 10
}
export class NoiTruHoSoKhacBangKiemNhanBenhNhanTuPhongMoVeKhoaTriLieu {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy : FileChuKyModel[]= [],
        public NgayNhan: Date = null,
        public NguoiGiao: string = null,
        public NguoiNhan: string = null,
    ) { }
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
  export class ExportQueryInfoQueryInfo  {
    constructor(
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public SearchString: string ="",
        public AdditionalSearchString: string ="",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}