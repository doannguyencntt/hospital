import { Sort } from "src/app/shared/models/common.model";

export class PhieuTheoDoiTruyenMau {
    constructor(
        public MaDonViMauTruyenId: number = null,
        public DisplayName: string = null,
        public MaDonViMauTruyen: string = null,
        public LanTruyenMauThu: number = 1,
        public DinhNhomDonViMauChePhamMau : string =null,
        public DinhNhomMauNguoiNhan: string =null,
        public PhanUngHoaHopTaiGiuong: string =null,
        public BatDauTruyenHoi : Date =null,
        public BatDauTruyenHoiStringUTC : string =null,
        public DachSachTruyenMauArr : DachSachTruyenMau[] =[],
        public NgungTruyenHoiStringUTC : string =null,
        public NgungTruyenHoi : Date =null,
        public SLMauTruyenThucTe : number = null,
        public BSDieuTri : string = null,
        public DDTruyenMau : string = null,
        public DDTruyenMauId : number = null,
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public NgayThucHien: string = null,
        public TaiKhoanDangNhap: string = null,
       ) { }
}  
export class DachSachTruyenMau {
    constructor(
        public Id : number =0,
        public ThoiGian: number = null,
        public TocDoTruyen: number = null,
        public MauSacDaNiemMac: number = null,
        public NhipTho: string = null,
        public ThanNhiet: number= null,
        public HuyetAp1: number= null,
        public HuyetAp2: number= null,
        public HuyetAp  = HuyetAp1 + '/' + HuyetAp2,
        public Mach: number= null,
        public DienBienKhac: string= null,
       ) { }
}  
export class FileChuKyModel {
    constructor(
        public Id: number = 0,
        public INoiTruHoSoKhacIdd: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichVatTu: number = null,
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
export class NoiTruHoSoKhacPhieuTheoDoiTruyenMau {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy : FileChuKyModel[]= [],
        public MaDonViMauTruyenId : number = 0,
        public DDTruyenMauId : number = null,
        public BatDauTruyenHoi : Date = null,
        public NgungTruyenHoi : Date = null,
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
export enum phieuTheoDoiTruyenMauMessage {
    MessageHuyetAp1NotEmpty = 'Huyết áp yêu cầu nhập',
    MessageHuyetAp2NotEmpty = 'Huyết áp yêu cầu nhập',
}