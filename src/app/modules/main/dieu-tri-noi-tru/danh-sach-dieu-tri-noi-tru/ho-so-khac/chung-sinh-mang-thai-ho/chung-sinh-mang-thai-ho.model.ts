import { Sort } from "src/app/shared/models/common.model";

export class GiayChungSinhMangThaiHo {
    constructor(
        public So: string = null,
        public QuyenSo: string = null,
        // thông tin bên nhờ mang thai ho
        public HoTenVoNhoMangThaiHo: string = null,
        public NamSinhVoNhoMangThaiHo : number = null ,
        public CMNDHoChieuVoNhomangThaiHo : string = null ,
        public DanTocVoNhoMangThaiHo : string = null ,
        public NoiDangKyThuongTruVoNhoMangThaiHo : string = null ,
        
        public HoTenChongNhoMangThaiHo: string = null,
        public NamSinhChongNhoMangThaiHo : number = null ,
        public CMNDHoChieuChongNhomangThaiHo : string = null ,
        public DanTocChongNhoMangThaiHo : string = null ,
        public NoiDangKyThuongTruChongNhoMangThaiHo : string = null ,
        // thong tin mang thai hộ
        public HoTenVoMangThaiHo: string = null,
        public NamSinhVoMangThaiHo : number = null ,
        public CMNDHoChieuVomangThaiHo : string = null ,
        public DanTocVoMangThaiHo : string = null ,
        public NoiDangKyThuongTruVoMangThaiHo : string = null ,
        //
        public HoTenChongMangThaiHo: string = null,
        public NamSinhChongMangThaiHo : number = null ,
        public CMNDHoChieuChongmangThaiHo : string = null ,
        public DanTocChongMangThaiHo : string = null ,
        public NoiDangKyThuongTruChongMangThaiHo : string = null ,

        public GioiTinh : string = null,
        public CanNang : string = null ,
        public DuDinhDatTenCon : string = null ,
        public NgayThucHien: Date = null,
        public NgayThucHienDisplay: string = null,
        public TaiKhoanDangNhap: string = null,
        public NguoiDoDe : string = null ,
        public ThuTruongCSYT : string = null,
        public DacDiemTreSoSinhs: DacDiemTreSoSinh[] = [],
        public SoLanSinh : number = null ,
        public SoConHienSong : number = null,
        public NgayThucHienString: string = null,
       ) { }
}  
export class DacDiemTreSoSinh {
    constructor(
        public Id: number = null,
        public GioiTinh: string = null,
        public CanNang: number = null,
        public DuDinhDatTenCon: string = null,
        public TinhTrang :string = null,
        public DeLuc :Date = null,
        public DeLucString :string = null
    ) { }
}
export class NoiTruHoSoKhacGiayChungSinhMangThaiHo {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public NgayThucHien: Date = null,
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