import { Sort } from "src/app/shared/models/common.model";

export class GiayChungNhanNghiViecHuongBHXH {
    constructor(
        public MauSo: string = null,
        public SoSeri: string = null,
        public ChanDoanVaPhuongPhapDieuTri: string = null,
        public SoNgayNghi : number = 0 ,
        public NgayThucHienDisplay: string = null,
        public TaiKhoanDangNhap: string = null,
        public HoTenCha : string = null,
        public HoTenMe : string = null,
        public NgayThucHien: Date = null,
        public NghiTuNgay: Date =null,
        public NghiDenNgay: Date = null,
        public NguoiHanhNgheKBCB : string = null ,
        public ThuTruongDonVi : string = null,
        public MaHanhNgheKBCB : string = null ,
        // public MaHanhNgheThuTruongDonVi : string = null,
        public NghiTuNgayDisplay: string =null,
        public NghiDenNgayDisplay: string = null,
       ) { }
}  
export class NoiTruHoSoKhacGiayChungNhanNghiViecHuongBHXH {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public NgayThucHien: Date = null,
        public NghiTuNgay: Date =null,
        public NghiDenNgay: Date = null,
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
        public Sort: Sort[] = []
    ) { }
}