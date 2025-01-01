import { Sort } from "src/app/shared/models/common.model";

export class PhieuTheoDoiTruyenDich {
    constructor(
        public ChanDoan: string = null,
        public DachSachTruyenDichArr: DachSachTruyenDich[] = [],
        public DachSachTruyenDichArrDefault: any[] = [],
        public FileChuKy: Array<FileChuKyModel> = new Array<FileChuKyModel>(),
        public NgayThucHien: string = null,
        public TaiKhoanDangNhap: string = null,
       ) { }
}  
export class DuocPhamTruyenDich {
    constructor(
        public TenDuocPhamTruyenDich: string = null,
        public TotalSlTheoDuocPham : number = 0,
        public NgayThu: Date = null,
       ) { }
}  
export class DachSachTruyenDich {
    constructor(
        public Id : number =0,
        public Ngay: string = null,
        public TenDichTruyen: string = null,
        public SoLuong: number = null,
        public LoSoSX: string = null,
        public TocDo: number= null,
        public BatDau: number= null,
        public KetThuc: number= null,
        public BSChiDinh: string= null,
        public YTaThucHien: string= null
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
export class NoiTruHoSoKhacPhieuTheoDoiTruyenDich {
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
export class Thuoc  {
    constructor(
        public TotalSlTheoDuocPham: number =0 ,
        public NgayThu: Date =null,
        public TenDuocPhamTruyenDich: string ="",
    ) { }
}
export class TenThuoc  {
    constructor(
        public IdTruyenDich: number =0 ,
        public SL: number =0 ,
        public NgayThu: Date =null,
        public TenDuocPham: string ="",
    ) { }
}
export class TenThuocValidator  {
    constructor(
        public YeuCauTiepNhanId: number =0 ,
        public SoLuong: number =0 ,
        public NgayThu: string =null,
        public TenDuocPham: string ="",
        public DuocPhamId: string ="",
    ) { }
}
export class ListTenThuocValidator  {
    constructor(
        public listTruyenDich: TenThuocValidator[]=  [] ,
    ) { }
}

export class ListNgaySelectVos  {
    constructor(
        public ListNgay: NgaySelectVo []=  [] ,
    ) { }
}
export class NgaySelectVo  {
    constructor(
        public NgayThu: Date =null,
    ) { }
}