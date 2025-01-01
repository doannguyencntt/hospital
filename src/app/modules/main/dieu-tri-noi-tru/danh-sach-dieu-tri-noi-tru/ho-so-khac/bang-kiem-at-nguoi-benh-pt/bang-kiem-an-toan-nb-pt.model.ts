import { Sort } from "src/app/shared/models/common.model";

export class BangKiemAnToanNguoiBenhPT {
    constructor(
        public KhamVaTuVanCuaPTV: boolean = true,
        public BenhChinh: boolean = true,
        public BenhKemTheo: boolean = true,
        public DaiThaoDuong: boolean = true,
        public TangHuyetAp: boolean = true,
        public Khac: boolean = true,
        public VeSinhTamGoi: boolean = true,
        public VatLieuCayGhep: boolean = true,
        public CatMongTayMongChan: boolean = true,
        public DoTrangSuc: boolean = true,
        public ThaoRangGia: boolean = true,
        public QuanAoSachMoiThay: boolean = true,
        public VetThuongHo: boolean = true,
        public VeSinhDaVungMo: boolean = true,
        public BangVoTrungDanhDauViTriPhauThuat: boolean = true,
        public KhamGayMe: boolean = true,
        public PTTTGMHS: boolean = true,
        public PhieuXetNghiemNhomMauDongMau: boolean = true,
        public PhimChupPhoiSoLuong: boolean = true,
        public CacLoaiPhimAnhKhacSoLuong: boolean = true,
        public DienTim: boolean = true,
        public XacNhanThanhVienGayMePhauThuat: boolean = true,
        public KhangSinhDuPhong: boolean = true,
        public DuyetPhauThuat: boolean = true,
        public ChiSoSinhTon: ChiSoSinhTon[] = [],
        public ThongSoKhac: string = null,
        public TiepXuc: string = null,
        public NguyCoSuyHoHapMatMau: string = null,
        public LamSangCLSCanLuuY: string = null,
        public NhungLuuYKhac: string = null,
        public NhacBenhNhanNhinAn: boolean = true,
        public ThuocTienMe: string = null,
        public NgayGioDuaBNDiPT: Date = null,
        public NgayGioDuaBNDiPTUTC: string = null,
        public NgayGioDuDinhGayMe: Date = null,
        public NgayGioDuDinhGayMeUTC: string = null,
        public YKienCuaNguoiNhanNguoiBenhTaiPhongGMHS: string = null,
        public DDChuanBiNBTruocPT: string = null,
        public DDChuanBiNBDenPhongPT: string = null,
        public DDNhanBNTaiPhongPTGMHS: string = null,
        public FileChuKy: FileChuKyModel[] = null,
        public TaiKhoanDangNhap : string = null,
        public NgayThucHien :string = null,
        public ChanDoanICDChinh :string = null,
        public ChanDoanICDPhu :string = null,
        public ListChiSoSinhTon : ChiSoSinhTon[] = [],
        public ThoiDiemKham: Date = null,
        public ThoiDiemKhamString: string = null,
        public PhieuCamDoanPTTT: boolean = true,
        public PhimChupPhoiSL: boolean = true,
        public CacLoaiPhimAnh: boolean = true,
        public KyCamKetSuDungKTCao: boolean = true,
        public TheDinhDanh: boolean = true,
        public PhieuXN: boolean = true,
        public TienSuDiUng :string = null,
        public ThuocDangDung:string = null,
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
export class ChiSoSinhTon {
    constructor(
        public Id : number = 0,
        public Mach: string = null,
        public NhietDo: string = null,
        public HuyetAp: string = null,
        public NhipTho: string = null,
        public CanNang: string = null,
        public ChieuCao: string = null,
        public BMI: string = null,
        public Glassgow: string = null,
        public SPO2: number = null,
        // public NgayThucHien: Date = null,
        public NgayThucHien: string = null,
        public Edit: boolean = null) { }
}   
export class NoiTruHoSoKhacBangAnToanNguoiBenhPT {
    constructor(
        public Id: number= 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy : FileChuKyModel[]= [],
        public ListChiSoSinhTon : ChiSoSinhTon[] = [],
        public  NgayGioDuaBNDiPT :Date = null,
        public  NgayGioDuDinhGayMe : Date = null,
        public  ThoiDiemKham : Date = null
    ) { }
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
export class LookupQueryInfo {
    constructor(
      public Take: number = 50,
      public Id: number = 0,
      public Query: string = null,
      public ParameterDependencies: string = null
    ) {
    }
  }