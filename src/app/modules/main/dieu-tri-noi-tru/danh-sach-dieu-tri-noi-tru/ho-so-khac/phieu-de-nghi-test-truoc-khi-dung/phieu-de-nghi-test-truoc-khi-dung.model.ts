import { Sort } from "src/app/shared/models/common.model";

export class PhieuDeNghiTestTruocKhiDungThuoc {
    constructor(
        public SelectBenhNhanHoacNguoiNha: boolean = true,
        public DongYDeNghiTest: boolean = false,
        public ChanDoan: string = null,
        public DanhSachThuocCanTestArr: DanhSachThuocCanTest[] = [],
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public NgayThucHien: string = null,
        public TaiKhoanDangNhap: string = null,
        public HoTen : string = null,
        public NamSinh : number = null ,
        public GioiTinh : boolean =true,
        public DanToc : string = null,
        public NgoaiKieu : string = null,
        public NgheNghiep : string =null,
        public NoiLamViec : string = null,
        public DiaChi : string = null
       ) { }
}  
export class DanhSachThuocCanTest {
    constructor(
        public NgayThu: Date = null,
        public NgayThuUTC: string = null,
        public Thuoc: string = null,
        public PhuongPhapThu: string = null,
        public BacSiChiDinh: string = null,
        public NguoiThu: string= null,
        public BSDocVaKiemTra: string= null,
        public NgayDocKQ: string= null,
        public NgayDocKQUTC: string= null,
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
export class NoiTruHoSoKhacPhieuDeNghiTestTruocKhiDungThuoc {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy : FileChuKyModel[]= [],
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