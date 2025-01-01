import { Sort } from "src/app/shared/models/common.model";
import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { TrangThaiYeuCauKhamBenh } from "src/app/shared/enum/kham-benh.enum";
import { TrangThaiYeuCauTiepNhan } from "src/app/shared/enum/kham-doan.enum";
export class KhamDoanLSTiepNhanTimKiem {
    public constructor(
        public SearchString:  string= null,
        public FromToDate: SearchDateRange = new SearchDateRange(),
        public  NgayBatDau : string = null,
        public NgayKetThuc : string = null
        ){}
}
  export class SearchDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ) { }
  }
export class KhamDoanLSTiepNhanNhanVienTimKiem {
    public constructor(
        public SearchString:  string= null,
        public CongTyId: number = null,
        public HopDongId: number = null,
        public TrangThai: KhamDoanLSTiepNhanNhanVienTrangThai = new KhamDoanLSTiepNhanNhanVienTrangThai()
        ){}
}

export class KhamDoanLSTiepNhanNhanVienTrangThai {
    public constructor(
        public ChuaKham: boolean = true,
        public DangKham : boolean = true,
        public DaKham : boolean = true,
        public HuyKham : boolean = true
        ){}
}
export class TiepNhanNhanVienTheoHopDongTimKiemNangCapVo {
    public constructor(
        public CongTyId: number = null,
        public HopDongId : number = null,
        public IsDangKham: boolean = false,
        public IsLichSu : boolean = false,
        public TrangThai : KhamDoanLSTiepNhanNhanVienTrangThai = new KhamDoanLSTiepNhanNhanVienTrangThai(),
        public SearchString :string = null
        ){}
}
export class ExportQueryInfoQueryInfo  {
    constructor(
        public Skip: number =0,
        public Take: number =50 ,
        public PageSize: number =50,
        public Search:  string="",
        public AdditionalSearchString:  string="",
        // public searchTerms:  = "",
        public Sort: Sort[] = []
    ) { }
}
export class ChiTietHopDongKhamSucKhoe  {
    constructor(
        public TenCongTy: string ="",
        public CongTyId: number = null,
        public SoHopDong:  string="",
        public HopDongId: number = null,
        public NgayHopDong :Date = null,
        public LoaiHopDong : number = null,
        public TrangThai : number =null,
        public SoBenhNhan : number = null,
        public NgayHieuLuc: Date = null,
        public NgayKetThuc : Date = null
    ) { }
}
export class LookupQueryInfo {
    constructor(
      public Take: number = 50,
      public Id: number = 0,
      public Query: string = null,
      public ParameterDependencies:  string= null
    ) {
    }
  }
  export class TimKiemHopDongKhamTheoCongTy {
    constructor(
        public CongTyId: number = null,
        public HopDongId: number = null,
        public NgayHopDong: Date = null,
        public LoaiHopDong: number = null,
        public TrangThai: number = null,
        public SoBenhNhan: number = null,
        public NgayHieuLuc: Date = null,
        public NgayKetThuc: Date = null,
    ) { }
}

export class ChiTietKhamSucKhoeCuaNhanVien {
    constructor(
        public Id: number = 0,
        public HopDongKhamSucKhoeId: number = null,
        public BenhNhanId: number = null,
        public MaNhanVien: string = null,
        public HoTen: string = null,
        public HoTenKhac: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgayThangNamSinh: Date = null,
        public Tuoi: number = null,
        public SoDienThoai: string = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: GioiTinh = null,
        public NgheNghiepId: number = null,
        public QuocTichId: number = null,
        public DanTocId: number = null,
        public DiaChi: string = null,
        public PhuongXaId: number = null,
        public QuanHuyenId: number = null,
        public TinhThanhId: number = null,
        public NhomMau: number = null,
        public YeuToRh: number = null,
        public Email: string = null,
        public TenDonViHoacBoPhan: string = null,
        public NhomDoiTuongKhamSucKhoe: string = null,
        public GoiKhamSucKhoeId: number = null,
        public TenGoiKhamSucKhoe: string = null,
        public TinhTrangHonNhan: number = null,
        public CoMangThai: boolean = null,
        public GhiChuTienSuBenh: string = null,
        public GhiChuDiUngThuoc: string = null,
        public HuyKham: boolean = null,
        public YeuCauTiepNhan: YeuCauTiepNhanKhamSucKhoe = null
    ) { }
}

export class YeuCauTiepNhanKhamSucKhoe {
    constructor(
        public Id: number = 0,
        public HopDongKhamSucKhoeNhanVien: ChiTietKhamSucKhoeCuaNhanVien = null,
        public TrangThaiYeuCauTiepNhan: TrangThaiYeuCauTiepNhan = null
    ) { }
}