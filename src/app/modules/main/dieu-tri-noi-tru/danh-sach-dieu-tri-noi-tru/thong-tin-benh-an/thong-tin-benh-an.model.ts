export class Common {
    public NoiKhoa = 1;
    public NhiKhoa = 2;
    public PhuKhoa = 3;
    public SanKhoaMo = 4;
    public SanKhoaThuong = 5;
    public NgoaiKhoa = 6;
    public ThamMy = 7;
    public TreSoSinh = 8;
    public Http = "http:";
    public DataTextUTF8 = "data:text/html;charset=utf-8,";
}
export class BoPhanTonThuong {
    constructor(
        public Id: number = 0,
        public MoTa: string = null,
        public HinhAnh: string = null
    ) { }
}
export class ThongTinBenhAnNoiKhoaNhi {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public QuaTrinhHoiBenh: string = null,

        public TienSuBenhBanThan: string = null,
        public TienSuBenhLienQuans: TienSuBenhLienQuan[] = [],

        public KyHieuDiUng: string = null,
        public ThoiGianDiUng: number = null,
        public KyHieuMaTuy: string = null,
        public ThoiGianMaTuy: number = null,
        public KyHieuRuouBia: string = null,
        public ThoiGianRuouBia: number = null,

        public KyHieuThuocLa: string = null,
        public ThoiGianThuocLa: number = null,
        public KyHieuThuocLao: string = null,
        public ThoiGianThuocLao: number = null,
        public KyHieuKhac: string = null,
        public ThoiGianKhac: number = null,

        public TienSuBenhGiaDinh: string = null,

        public KhamBenhToanThan: string = null,
        public ChiSoSinhTons: ChiSoSinhTon[] = [],

        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieu: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public Mat: string = null,
        public NoiTiet: string = null,
        public CacXetNghiemCanLam: string = null,
        public TomTatBenhAn: string = null,

        public ICDChinh: number = null,
        public TenICDChinh: string = null,
        public ChuanDoan: string = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],
        public ChuanDoanPhanBiets: ThongTinChuanDoanKemTheo[] = [],

        public TienLuong: string = null,
        public HuongDanDieuTri: string = null,
        public HuongXuLyLoiDanBs: string = null
    ) { }
}

export class TienSuBenhLienQuan {
    constructor(
        public KyHieu: string = null,
        public ThoiGian: number = 0
    ) { }
}

export class ChiSoSinhTon {
    constructor(
        public NhipTim: number = null,
        public NhipTho: number = null,
        public HuyetAp: string = null,
        public ThanNhiet: number = null,
        public ChieuCao: number = null,
        public CanNang: number = null,
        public BMI: number = null,
        public NhanVienThucHien: string = null,
        public NgayThucHien: string = null,
        public Glassgow: number = null,
        public SpO2: number = null,
        public HuyetApTamTruong: number = null,
        public HuyetApTamThu: number = null
    ) { }
}

export class ThongTinChuanDoanKemTheo {
    constructor(
        public ICD: number = null,
        public TenICD: string = null,
        public ChuanDoan: string = null,
    ) { }
}

export class DacDiemTreSoSinhSauSinh {
    constructor(
        public Diem: number = null,
        public SuGianNoLongNguc: string = null,
        public CoKeoCoLienSuon: string = null,
        public CoKeoMuiUc: string = null,
        public DapCanhMui: string = null,
        public Reni: string = null,
    ) { }
}


export class ThongTinBenhAnTreSoSinh {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public QuaTrinhHoiBenh: string = null,

        public NgayVoNuocOi: Date = null,
        public MauSac: string = null,
        public CachDe: boolean = null,
        public LyDoCanThiep: string = null,
        public DeLuc: Date = null,
        public TinhTrangSoSinh: number = null,

        public NhanVienId: number = null,
        public TenNhanVien: string = null,

        public Apgar1p: string = null,
        public Apgar5p: string = null,
        public Apgar10p: string = null,

        public TienThaiPara1: number = null,
        public TienThaiPara2: number = null,
        public TienThaiPara3: number = null,
        public TienThaiPara4: number = null,


        public CanNang: number = null,
        public TinhTrangDinhDuongSauSinh: string = null,
        public DacDiemTreSoSinhSauSinhs: DacDiemTreSoSinhSauSinh[] = [],

        public HutDich: boolean = null,
        public XoaBopTim: boolean = null,
        public ThoO2: boolean = null,
        public DatNoiKhiQuan: boolean = null,
        public BopBongO2: boolean = null,
        public Khac: boolean = null,

        public NhanVienChuyenSoSinhId: number = null,
        public TenNhanVienChuyenSoSinh: string = null,

        public ChucDanhNhanVienId: number = null,
        public TenNhanVienChucDan: string = null,

        public DiTatBamSinh: boolean = null,
        public ChuThichDiTatBamSinh: string = null,
        public CoHauMon: boolean = null,

        public TinhHinhSoSinhKhiVaoKhoa: string = null,
        public TinhHinhToanThan: string = null,

        public TrangThaiMauSacDa: number = null,
        public ChuThichMauSacDa: string = null,
        public ChiSoSinhTons: ChiSoSinhTon[] = [],

        public HoHapNhiTho: number = null,
        public VongDauSoSinh: number = null,
        public HoHapNgheTho: string = null,
        public HoHapChiSoSilverman: number = null,

        public TimMachNhipTim: number = null,

        public Bung: string = null,
        public CacCoQuanSinhDucNgoai: string = null,
        public XuongKhop: string = null,

        public ThanKinhPhanXa: string = null,
        public ThanKinhTruongLucCo: string = null,

        public CacXetNghiemCanLam: string = null,
        public TomTatBenhAn: string = null,
        public ChiDinhTheoDoi: string = null,
        public HuongXuLyLoiDanBs: string = null
    ) { }
}

export class ThongTinBenhAnPhuKhoa {
    public constructor(
        public YeuCauTiepNhanId: number = null,

        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public QuaTrinhHoiBenh: string = null,

        public TienSuBenhBanThan: string = null,
        public TienSuBenhGiaDinh: string = null,

        public BatDauThayKinhNam: number = null,
        public TuoiCoKinh: number = null,
        public TinhChatKinhNghiem: string = null,
        public ChuKy: number = null,
        public SoNgayThayKinh: number = null,
        public LuongKinh: string = null,

        public KinhCuoiNgay: Date = null,
        public DauBung: boolean = null,
        public ThoiGianTruoc: boolean = null,
        public ThoiGianTrong: boolean = null,
        public ThoiGianSau: boolean = null,
        public LayChongNam: number = null,
        public TuoiLayChong: number = null,

        public NamHetKinh: number = null,
        public TuoiHetKinh: number = null,
        public BenhPhuKhoaDieuTri: string = null,

        //1:SinhDuThang , 2:SomDeNon , 3:SayNaoHut , 4:Song
        public TienThaiPara: number = null,
        public DaNienMac: string = null,
        public Hach: string = null,
        public Vu: string = null,

        public ChiSoSinhTons: ChiSoSinhTon[] = [],

        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public ThanTietNieu: string = null,
        public Khac: string = null,

        public CacDauHieuSinhDucThuPhat: string = null,
        public MoiLon: string = null,
        public MoiBe: string = null,
        public AmVat: string = null,
        public AmHo: string = null,
        public MangTrinh: string = null,
        public TangSinhMon: string = null,

        public AmDao: string = null,
        public CoTuCung: string = null,
        public ThanTuCung: string = null,
        public PhanPhu: string = null,
        public CacTuiCung: string = null,

        public CacXetNghiemCanLam: string = null,
        public TomTatBenhAn: string = null,

        public ICDChinh: number = null,
        public TenICDChinh: string = null,
        public ChuanDoan: string = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],
        public ChuanDoanPhanBiets: ThongTinChuanDoanKemTheo[] = [],

        public TienLuong: string = null,
        public HuongDanDieuTri: string = null,
        public NamSinh: number = null,
        public HuongXuLyLoiDanBs: string = null,
    ) { }
}

export class ThongTinBenhAnNoiNgoaiKhoa {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public QuaTrinhHoiBenh: string = null,

        public TienSuBenhBanThan: string = null,

        public KyHieuDiUng: string = null,
        public ThoiGianDiUng: number = null,
        public KyHieuMaTuy: string = null,
        public ThoiGianMaTuy: number = null,
        public KyHieuRuouBia: string = null,
        public ThoiGianRuouBia: number = null,

        public KyHieuThuocLa: string = null,
        public ThoiGianThuocLa: number = null,
        public KyHieuThuocLao: string = null,
        public ThoiGianThuocLao: number = null,
        public KyHieuKhac: string = null,
        public ThoiGianKhac: number = null,
        public TienSuBenhGiaDinh: string = null,

        public KhamBenhToanThan: string = null,
        public ChiSoSinhTons: ChiSoSinhTon[] = [],
        public BoPhanTonThuongs: BoPhanTonThuong[] = [],

        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieu: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public Mat: string = null,
        public NoiTiet: string = null,
        public CacXetNghiemCanLam: string = null,
        public TomTatBenhAn: string = null,

        public ICDChinh: number = null,
        public TenICDChinh: string = null,
        public ChuanDoan: string = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],
        public ChuanDoanPhanBiets: ThongTinChuanDoanKemTheo[] = [],

        public TienLuong: string = null,
        public HuongDanDieuTri: string = null,
        public HuongXuLyLoiDanBs: string = null,
    ) { }
}

export class TienSuSanKhoa {
    constructor(
        public SoLanCoThai: number = null,
        public Nam: number = null,
        public DeDuThang: boolean = null,
        public DeThieuThang: boolean = null,
        public Say: boolean = null,
        public Hut: boolean = null,
        public Nao: boolean = null,
        public CoCVat: boolean = null,
        public ChuaNgoaiTC: boolean = null,
        public ChuaTrung: boolean = null,
        public ThaiChetLuu: boolean = null,
        public ConHienSong: boolean = null,
        public CanNang: number = null,
        public PhuongPhapDe: string = null,
        public TaiBien: boolean = null
    ) { }
}

export class DacĐiemTreSoSinh {
    constructor(    
        public Id: number = null,
        public DeLuc: Date = new Date(),
        public GioiTinhId: number = null,
        public GioiTinh: string = null,
        public TinhTrangId: number = null,
        public TenTinhTrang: string = null,
        public DiTat: string = null,
        public CanNang: number = null,
        public Cao: number = null,
        public VongDau: number = null,
        public CoHauMon: boolean = null,
        public ApGar: number = null,
        public ChiSoApGar: number = null
    ) { }
}

export class LanPhauThuat {
    constructor(
        public NgayGio: Date = null,
        public NgayGioDisplay: string = null,
        public PhuongPhapPhauThuat: string = null,

        public PhauThuatVienId: number = null,
        public TenPhauThuatVien: string = null,

        public BacSiGayMeId: number = null,
        public TenBacSiGayMe: string = null
    ) { }
}

export class ThongTinBenhAnSanKhoa {
    public constructor(       
        public SoToXQuang: number = 0,
        public SoToCTScanner: number = 0,
        public SoToSieuAm: number = 0,
        public SoToXetNghiem: number = 0,
        public SoToKhac: number = 0,

        public YeuCauTiepNhanId: number = null,
        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public TuoiThai: number = null,
        public KhamLaiThai: string = null,
        public TiemChungUongVan: boolean = null,
        public DuocTiem: boolean = null,
        public BatDauChuyenDa: Date = new Date(),

        public KinhCuoiNgay: Date = null,
        public KinhCuoiNgayText: string = null,
        // public GhiChuPara: string = null,
        public Para: number = null,

        public DauHieuBanDau: string = null,
        public ChuyenBien: string = null,

        public TuNgayDenNgay: RangeDate = new RangeDate,

        public QuaTrinhHoiBenh: string = null,
        public TienSuBenhGiaDinh: string = null,
        public TienSuBenhBanThan: string = null,
        public BatDauThayKinhNam: number = null,
        public TuoiCoKinh: number = null,
        public TinhChatKinhNghiem: string = null,
        public ChuKy: number = null,
        public SoNgayThayKinh: number = null,
        public LuongKinh: string = null,
        public LayChongNam: number = null,
        public TuoiLayChong: number = null,
        public NamHetKinh: number = null,
        public TuoiHetKinh: number = null,
        public NhungBenhPhuKhoaDaDieuTri: string = null,
        public TienSuSanKhoas: TienSuSanKhoa[] = [],
        public ToanTrang: string = null,
        public Phu: boolean = null,
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieu: string = null,
        public CacBoPhanKhac: string = null,
        public ChiSoSinhTons: ChiSoSinhTon[] = [],
        public BungCoSoCu: boolean = null,
        public ChieuCaoTuCung: number = null,
        public VongBung: number = null,
        public TimThai: number = null,

        public HinhDangTuCung: string = null,
        public TuThe: string = null,
        public ConCoTC: string = null,
        public Vu: string = null,
        public ChiSoBiShop: number = null,
        public AmHo: string = null,
        public AmDao: string = null,
        public CoTuCung: string = null,
        public PhanPhu: string = null,

        public NgayVoNuocOi: Date = null,
        public MauSacNuocOi: string = null,
        public Ngoi: string = null,
        public The: string = null,
        public TangSinhMon: string = null,

        public DoLotId: number = null,
        public TenDoLot: string = null,
        public TinhTrangVoOiId: number = null,
        public TenTinhTrangVoOi: string = null,

        public VoOiId: number = null,
        public TenVoOi: string = null,

        public NuocOiNhieuHayIt: string = null,
        public KieuThe: string = null,
        public DuongKinhNhoHaVe: string = null,
        public CacXetNghiemCanLam: string = null,

        public ICDChinh: number = null,
        public TenICDChinh: string = null,
        public ChuanDoan: string = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],
        public ChuanDoanPhanBiets: ThongTinChuanDoanKemTheo[] = [],

        public TienLuong: string = null,
        public HuongDanDieuTri: string = null,

        public VaoBuongDeLuc: Date = new Date,
        public NhanVienTheoDoiId: number = null,
        public TenNhanVienTheoDoi: string = null,
        public ChucDanhId: number = null,
        public TenChucDanh: string = null,

        public DacĐiemTreSoSinhs: DacĐiemTreSoSinh[] = [],


        public TinhTrangSauKhiDe: string = null,
        public XuLyKetQua: string = null,

        public Boc: boolean = null,
        public So: boolean = null,
        public RauSoLuc: Date = null,
        public CachSoRau: string = null,
        public MatMang: string = null,
        public MatMui: string = null,
        public BanhRau: string = null,

        public CanNang: number = null,
        public RauCuonCo: boolean = null,
        public CuonRauDai: string = null,
        public CoChayMauSauSo: boolean = null,
        public LuongMauMat: number = null,
        public KiemSoatTuCung: boolean = null,
        public XuLyKetQuaSoRau: string = null,

        public DaMienMac: string = null,
        public PhuongPhapDeId: number = null,
        public TenPhuongPhapDe: string = null,
        public LyDoCanThiep: string = null,

        public TangSinhMonId: number = null,
        public TenTangSinhMon: string = null,

        public PhuongPhapKhauVaLoaiChi: string = null,
        public SoMuiKhau: number = null,
        public CoTuCungId: number = null,
        public TenCoTuCung: string = null,
        public ChanDoanTruocPhauThuat: number = null,
        public ChanDoanSauPhauThuat: number = null,


        public LanPhauThuats: LanPhauThuat[] = [],
        public TrieuChung: boolean = null,

        public DoPhauThuat: boolean = null,
        public DoGayMe: boolean = null,
        public DoViKhuan: boolean = null,
        public Khac: boolean = null,
        public NamSinh: number = null,

        public HuongDieuTriCacCheDoTiepTheo: string = null,
        public HuongXuLyLoiDanBs: string = null,
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
    ) { }
}

export class ThongTinBenhAnKhoaNhi {
    public constructor(
        public YeuCauTiepNhanId: number = null,
        public LyDoVaoVien: string = null,
        public ThuMayVaoVien: string = null,
        public QuaTrinhHoiBenh: string = null,
        public TienSuBenhBanThan: string = null,
        public TienSuBenhGiaDinh: string = null,

        public ConThuMay: number = null,
        public TienThaiPara1: number = null,
        public TienThaiPara2: number = null,
        public TienThaiPara3: number = null,
        public TienThaiPara4: number = null,

        public TinhTrangKhiSinh: number = null,
        public DeThuong: boolean = null,
        public Forceps: boolean = null,
        public GiacHut: boolean = null,
        public DeChiHuy: boolean = null,

        public Khac: boolean = null,

        public CanNangLucSinh: number = null,

        public DiTatBamSinh: boolean = null,
        public ThongTinDiTatBamSinh: string = null,
        public PhatTrienVeTinhThan: string = null,
        public PhatTrienVeVanDong: string = null,
        public CacBenhLyKhac: string = null,

        public NuoiDuong: number = null,
        public CaiSuaThangThu: number = null,
        public ChamSoc: number = null,

        // //Đã tiêm chủng
        public Lao: boolean = null,
        public BaiLiet: boolean = null,
        public Soi: boolean = null,
        public HoGa: boolean = null,
        public UonVang: boolean = null,
        public BachHau: boolean = null,
        public TiemChungKhac: boolean = null,
        public NoiDungTiemChungKhac: string = null,

        //toàn thân và 
        public ChieuCao: number = null,
        public VongNguc: number = null,
        public VongDau: number = null,
        public KhamBenhToanThan: string = null,

        public ChiSoSinhTons: ChiSoSinhTon[] = [],
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieu: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public Mat: string = null,
        public NoiTiet: string = null,
        public CacXetNghiemCanLam: string = null,
        public TomTatBenhAn: string = null,

        public ICDChinh: number = null,
        public TenICDChinh: string = null,
        public ChuanDoan: string = null,

        public ChuanDoanKemTheos: ThongTinChuanDoanKemTheo[] = [],
        public ChuanDoanPhanBiets: ThongTinChuanDoanKemTheo[] = [],

        public TienLuong: string = null,
        public HuongDanDieuTri: string = null,
        public HuongXuLyLoiDanBs: string = null,

    ) { }
}

export class NoiDungMauLoiDanBacSi {
    public constructor(
      public Id: number = 0,
      public Ma: string = null,
      public Ten: string = null,
      public HuongXuLyLoiDanBacSi: string = null,
      public LoaiBenhAn: number = null
    ) { }
  }