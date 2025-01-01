import { Sort } from "src/app/shared/models/common.model";

export class GiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT {
    constructor(
        public SelectBenhNhanHoacNguoiNha: boolean = true,
        public DanhSachArr: DanhSach[] = [],
        public DanhSachArrPrint: DanhSach[] = [],
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public NgayThucHien: string = null,
        public TaiKhoanDangNhap: string = null,
        public HoTen : string = null,
       ) { }
}  
export class DanhSach {
    constructor(
        public STT: number = null,
        public TenDichVu: string = null,
        public Nhom : string = null,
        public SoLuong: string= null,
        public DonGia: string= null,
        public TongTien: string= null,
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
export class NoiTruHoSoKhacGiayCamKetTuNguyenSuDungThuocDichVuNgoaiBHYT {
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