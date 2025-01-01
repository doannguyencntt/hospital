import {
    EnumVaiTroBacSi,
    EnumVaiTroDieuDuong,
    EnumTrangThaiPhauThuatThuThuat,
    EnumTrangThaiTheoDoiSauPhauThuatThuThuat, EnumGiaiDoanPhauThuat, EnumLoaiNoiChiDinh
} from 'src/app/shared/enum/phau-thuat-thu-thuat.enum';
import { EnumNhomChucDanh } from 'src/app/shared/enum/nhom-chuc-danh-enum';
import { DateTime } from 'luxon';

export class PhauThuatThuThuat {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public DichVuKhamBenhBenhVienId: number = null,
        public YeuCauKhamBenhTruocId: number = null,
        public MaDichVu: string = null,
        public MaDichVuTT37: string = null,
        public TenDichVu: string = null,
        public LoiDanCuaBacSi: string = null,
        public Gia: number = null,
        public TiLeUuDai: number = null,
        public GhiChuTrieuChungLamSang: string = null,
        public GoiDichVuId: number = null,
        public TiLeChietKhau: number = null,
        public MoTa: string = null,
        public DuocHuongBaoHiem: boolean = false,
        public BaoHiemChiTra: boolean = null,
        public ThoiDiemDuyetBaoHiem: Date = null,
        public NhanVienDuyetBaoHiemId: number = null,
        public GiaBaoHiemThanhToan: number = null,
        public TrangThai: number = null, // cập nhật lại enum
        public NhanVienChiDinhId: number = null,
        public NoiChiDinhId: number = null,
        public NoiThucHien: string = null,
        public ThoiDiemChiDinh: Date = new Date(),
        public NoiThanhToanId: number = null,
        public NhanVienThanhToanId: number = null,
        public ThoiDiemThanhToan: Date = null,
        public ThoiDiemDangKy: Date = new Date(),
        public NoiDangKyId: number = 0,
        public BacSiDangKyId: number = 0,
        public ThoiDiemThucHien: Date = null,
        public NoiThucHienId: number = null,
        public BenhSu: string = null,
        public ThongTinKhamTheoKhoa: string = null,
        public IcdchinhId: number = null,
        public TenICDChinh: string = null,
        public ICDPhuIds: Array<number> = null,
        public TenBenh: string = null,
        public NoiKetLuanId: number = null,
        public BacSiKetLuanId: number = null,
        public TenDichVuDisplay: string = null,
        public TenNoiDangKyThucHien: string = null,
        public TenLoaiGia: string = null,
        public ThoiDiemHoanThanh: Date = null,
        public KetQuaDieuTri: number = null, // cần cập nhật lại enum
        public TenKetQuaDieuTri: string = null,
        public TinhTrangRaVien: number = null, // cần cập nhật lại enum
        public TenTinhTrangRaVien: string = null,
        public HuongDieuTri: string = null,
        public NgayTaiKham: Date = null,
        public GhiChuTaiKham: string = null,
        public QuayLaiYeuCauKhamBenhTruoc: boolean = null,
        public NhomGiaDichVuKhamBenhBenhVienId: number = null,
        public BacSiThucHienId: number = null,
        public CoTaiKham: boolean = null,
        public CoKhamChuyenKhoaTiepTheo: boolean = null,
        public CoKeToa: boolean = null,
        public CoNhapVien: boolean = null,
        public CoChuyenVien: boolean = null,
        public SoLuongs: number = 1,
        public DonGia: number = null,
        public TrangThaiThanhToan: number = null,
        public CheckValidator: boolean = null,
        public ThanhTien: number = null,
        public BacSiNoiDangKyId: string = null,
        public KhamToanThan: string = null,
        public TuanHoan: string = null,
        public HoHap: string = null,
        public TieuHoa: string = null,
        public ThanTietNieuSinhDuc: string = null,
        public ThanKinh: string = null,
        public CoXuongKhop: string = null,
        public TaiMuiHong: string = null,
        public RangHamMat: string = null,
        public NoiTietDinhDuong: string = null,
        public SanPhuKhoa: string = null,
        public DaLieu: string = null,
        public ChanDoanSoBoICDId: number = 0,
        public TenChanDoanSoBoICD: string = null,
        public ChanDoanSoBoGhiChu: string = null,
        public IsChangeKhamBenh: boolean = false,
    ) { }
}

export class PhauThuatThuThuatTuongTrinh {
    constructor(
        public ChanDoanKhoa: string = null,
        public GhiChuChanDoanKhoa: string = null,
        public ThoiGianBatDauGayMe: any = null,
        public ThoiGianPt: Date = new Date(),
        public ThoiGianKetThucPt: any = null,
        public ICDTruocId: number = null,
        public ICDTruoc: string = null,
        public MoTaCDTruocPhauThuat: string = null,
        public ICDSauId: number = null,
        public ICDSau: string = null,
        public MoTaCDSauPhauThuat: string = null,
        public PhuongPhapPtttId: number = null,
        public PhuongPhapPttt: string = null,
        public MaPttt: string = null,
        public MaPtttFormat: string[] = [],
        public PtttVienChinh: string = null,
        // public LoaiPttt: number = null,
        // public LoaiPtttDisplay: string = null,
        public LoaiPhauThuatThuThuat: string = null, //Update loại PTTT
        public PpVoCamId: number = null,
        public PpVoCam: string = null,
        public TinhHinhPttt: number = null,
        public TinhHinHPtttDisplay: string = null,
        public TaiBienPttt: number = null,
        public TaiBienPtttDisplay: string = null,
        public TrinhTuPttt: string = null,
        public YeuCauDichVuKyThuatId: number = null,
        public LuocDoPhauThuats: LuocDoPhauThuatModel[] = []
    ) { }
}

export class ThongTinChiDinhDichVu {
    constructor(
        public NhanVienChiDinhId: number = null,
        public NhanVienChiDinhDisplay: string = null,
        public NoiChiDinhId: number = null,
        public NoiChiDinhDisplay: string = null
    ) { }
}

export class TuongTrinhTuVong {
    constructor(
        public TgTuVong: number = null,
        public TuVong: number = null,
        public TgTuVongDisplay: string = null,
        public TuVongDisplay: string = null,
        public IdDvkt: number = null,
        public YeuCauTiepNhanId: number = null,
        public TheoDoiSauPhauThuatThuThuatId: number = null,
        public NhanVienKetLuanId: number = null,
        public PhongBenhVienId: number = null
    ) { }
}

export class LuocDoPhauThuatModel {
    constructor(
        public IdYeuCauDichVuKyThuat: number = null,
        public LuocDoPhauThuat: string = null,
        public MoTa: string = null
    ) { }
}

export class TheoDoiSauPhauThuatThuThuat {
    public Id: number = 0;
    public YeuCauTiepNhanId: number = 0;
    public TrangThai: EnumTrangThaiTheoDoiSauPhauThuatThuThuat = EnumTrangThaiTheoDoiSauPhauThuatThuThuat.DangTheoDoi;
    public ThoiDiemBatDauTheoDoi: any = new Date();
    public ThoiDiemKetThucTheoDoi: any = new Date();
    public BacSiPhuTrachTheoDoiId: number = 0;
    public BacSiPhuTrachTheoDoiDisplay: string = '';
    public DieuDuongPhuTrachTheoDoiId: number = 0;
    public DieuDuongPhuTrachTheoDoiDisplay: string = '';
    public GhiChuTheoDoi: string = '';
    public TrangThaiPhauThuatThuThuat: EnumTrangThaiPhauThuatThuThuat = EnumTrangThaiPhauThuatThuThuat.TheoDoi;
    public NhanVienKetLuanId: number = 0;
    public PhongBenhVienId: number = 0;
    public IsChuyenGiaoTuTuongTrinh: boolean = false;
    public IsTuongTrinhLai: boolean = false;
}

export class KhamTheoDoi {
    public Id: number = 0;
    public TheoDoiSauPhauThuatThuThuatId: number = 0;
    public ThoiDiemBatDauKham: any = null;
    public ThoiDiemHoanThanhKham: any = null;
    public NoiThucHienId: number = null;
    public NhanVienThucHienId: number = null;
    public KhamToanThan: string = '';
    public ThongTinKhamTheoDoiTemplate: string = null;
    public ThongTinKhamTheoDoiData: string = null;
    public ThongTinKhamTheoDoiTemplateObj: any = null;
    public KhamTheoDoiBoPhanKhacs: KhamTheoDoiBoPhanKhac[] = [];
}

export class KhamTheoDoiBoPhanKhac {
    public Id: number = 0;
    public Ten: string = '';
    public NoiDung: string = '';
    public KhamTheoDoiId: number = 0;
}

export class ThongTinBoPhanCoThe {
    constructor(
        public KeyId: number = 0,
        public DisplayName: string = null,
        public Url: string = null
    ) { }
}

export class DanhSachThongTinAnh {
    constructor(
        public Url: string = null,
        public ImageUrl: string = null,
        public MoTa: string = null
    ) { }
}

export class ListStatusTabPhauThuatThuThuat {
    constructor(
        public selectedTabCanLamSan: boolean = true,
        public selectedTabTuongTrinh: boolean = false,
        public selectedTabKetLuan: boolean = false,
        public selectedTabTheoDoi: boolean = false,
    ) { }
}

export class ListStatusTabTuongTrinh {
    constructor(
        public selectedTabEkip: boolean = true,
        public selectedTabTuongTrinh: boolean = false,
        public selectedTabVtThuoc: boolean = false,
        public selectedTabCsst: boolean = false,
    ) { }
}

export class LookupCheckItem {
    constructor(
        public KeyId: string,
        public DisplayName: string,
        public IsCheck: boolean = false
    ) { }
}

export class TrangThaiYeuCauKhamBenhObjEnum {
    constructor(
        public ChuaKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.ChuaKham,
        public DangKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangKham,
        public DangLamChiDinh: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangLamChiDinh,
        public DangDoiKetLuan: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DangDoiKetLuan,
        public DaKham: TrangThaiYeuCauKhamBenh = TrangThaiYeuCauKhamBenh.DaKham
    ) { }
}

export class TrangThaiYeuCauDichVuKyThuatObjEnum {
    constructor(
        public ChuaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.ChuaThucHien,
        public DangThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DangThucHien,
        public DaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaThucHien
    ) { }
}

//temp
export enum TrangThaiYeuCauDichVuKyThuat {
    //ChuaDongTien = 0,
    ChuaThucHien = 1,
    DangThucHien = 2,
    DaThucHien = 3,
    DaHuy = 4
}

//temp
export enum TrangThaiYeuCauKhamBenh {
    ChuaKham = 1,
    DangKham = 2,
    DangLamChiDinh = 3,
    DangDoiKetLuan = 4,
    DaKham = 5,
    HuyKham = 6
}

export class Ekip {
    constructor(
        public NhomChucDanh: EnumNhomChucDanh = null,
        public NhomChucDanhDisplay: string = null,
        public UrlVaiTro: string = null,
        public BacSiId: number = null,
        public BacSi: string = null,
        public VaiTroBacSi: EnumVaiTroBacSi = null,
        public VaiTroDieuDuong: EnumVaiTroDieuDuong = null,
        public VaiTroBacSiDisplay: string = null,
        public VaiTroDieuDuongDisplay: string = null,
        public VaiTroId: number = null,
        public VaiTro: string = null,
        public Id: number = null,
        public IdDb: number = null
    ) { }
}

export class EkipDataSource {
    constructor(
        public data: Ekip[] = [],
        public total: number = 0
    ) { }
}

export class EkipForm {
    constructor(
        public ICDTruoc: string = null,
        public ICDTruocId: number = null,
        public Ekips: Ekip[] = [],
        public YcdvktId: number = null,
        public YctnId: number = null,
        public NoiThucHienId: number = null,
        public KhoaPhong: string = null,
        public ChanDoanKhoa: string = null,
        public GhiChuChanDoanKhoa: string = null,
        public IsPhauThuat: boolean = null,

        //BVHD-3877
        public GhiChuCaPTTT: string = null
    ) { }
}

export class ComboBox {
    constructor(
        public DisplayName: string = null,
        public KeyId: number = null
    ) { }
}

export class ComboboxPttt {
    constructor(
        public DisplayName: string = null,
        public KeyId: number = null,
        public BacSi: string = null,
        public IsDaTuongTrinh: boolean = null,
        public TenDv: string = null,
        public TuongTrinhDisplay: string = null,
        public TrangThaiYeuCauDichVuKyThuat: number = null
    ) { }
}

export class LichSuPTTT {
    constructor(
        public SearchString: string = null,
        public TenDichVu: number = null,
        public DoiTuong: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public DiaChi: string = null,
        public MaYeuCauTiepNhan: string = null,
        public ThoiDiemTiepNhan: DateTime = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public ThoiDiemTiepNhanTu: any = null,
        public ThoiDiemTiepNhanDen: any = null,
        public TrieuChungTiepNhan: string = null,
        public FromDate: any = null,
        public ToDate: any = null,

        //BVHD-3860
        public ThongTinThucHien: DanhSachKhamPTHoanThanhThucHien = new DanhSachKhamPTHoanThanhThucHien()
    ) { }
}

export class ThongTinBenhNhanPTTT {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public MaYeuCauTiepNhan: string = null,
        public BenhNhanId: number = null,
        public HoTen: string = null,
        public TenGioiTinh: string = null,
        public Tuoi: number = null,
        public SoDienThoai: number = null,
        public DanToc: string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public TuyenKham: string = null,
        public BHYTMucHuong: number = null,
        public TenLyDoTiepNhan: string = null,
        public ThoiDiemTiepNhanDisplay: string = null,
        public NamSinh: number = null,
        public ThangSinh: number = null,
        public NgaySinh: number = null,
        public TuoiThoiDiemHienTai: string = null,
        public TenLyDoKhamBenh: string = null,
        public MaBN: string = null,
        public TrangThai: number = null,
        public TheoDoiSauPhauThuatThuThuatId: number = null,
        public ThongTinKhamKhacChiTiet: ThongTinKhamKhacPTTT[] = [],
        public CoTuongTrinhPTTT: boolean = null,
        public LanThucThien: number = null,
        public TrangThaiTuVongTiepNhan: boolean = null,
        public TrangThaiTuVongTuongTrinh: boolean = null,
        public SoBHYT: string = null,
        public CoBHYT: boolean = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHetHan: string = null,
        public BHYTThoiGianHieuLucDisplay: string = null,
        public IsBHYTHetHan: boolean = null,
        public CoPhauThuat: boolean = null,

    ) { }
}


export class ThongTinKhamKhacPTTT {
    constructor(
        public KhamTheoDoiId: number = null,
        public KhamToanThan: string = null,
        public ThongTinKhamTheoDoiData: string = null,
        public ThongTinKhamTheoDoiTemplate: string = null,
        public ThongTinKhamTheoDoiTemplateObj: any = null
    ) { }
}

export class FileKetQuaCanLamSangs {
    constructor(
        public Url: string = null,
        public DuongDan: string = null,
        public TenGuid: string = null,
        public LoaiFile: number = null,
        public MoTa: string = null,
        public IsDownload: boolean = true,
    ) { }
}

export class DanhSachHoanThanhQueryInfo {
    constructor(
        public FromDate: Date = null,
        public ToDate: Date = null,
        public NhanVienId: number = 0,
        public PhongBenhVienId: number = 0,
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = '',
        public AdditionalSearchString: string = '',
    ) { }
}

export class ChiSoSinhHieu {
    constructor(
        public NhipTim: number = null,
        public HuyetApTamThu: number = null,
        public HuyetApTamTruong: number = null,
        public HuyetAp: string = null,
        public NhipTho: number = null,
        public ThanNhiet: number = null,
        public CanNang: number = null,
        public ChieuCao: number = null,
        public Bmi: number = null,
        public Glassgow: number = null,
        public SpO2: number = null,
        public NgayThucHien: any = null,
        public NgayThucHienDisplay: string = null,
        public Id: number = null,
        public AllowModify: boolean = null
    ) { }
}

export class DataSourceChiSoSinhHieu {
    constructor(
        public data: ChiSoSinhHieu[] = [],
        public total: number = null
    ) { }
}

export class ChiSoSinhHieuRequestModel {
    constructor(
        public YctnId: number = null,
        public ChiSoSinhHieus: ChiSoSinhHieu[] = [],
    ) { }
}

export class RutTuongTrinhModel {
    constructor(
        public YcdvktId: number = null,
        public GhiChu: string = null,
        public XoaThuocVaTu: boolean = null
    ) { }
}

export class PtttComboboxModel {
    constructor(
        public lstPttt: ComboboxPttt[] = [],
        public ptttId: number = null,
        public TenDv: string = null,
        public ptttDisplay: string = null,
    ) { }
}

export class DisplayLogicModel {
    constructor(
        public IsDisplaySave: boolean = null,
        public IsDisplayReset: boolean = null,
    ) { }
}

export class HangDoiPhauThuatThuThuat {
    public YeuCauTiepNhanDangKhamId: number = 0;
    public YeuCauTiepNhanBatDauKhamId: number = 0;
    // public HoanThanhKham: boolean = false;
    public PhongBenhVienId: number = 0;
}

export class LichSuDichVuPTTTCombobox {
    constructor(
        public YeuCauDichVuKyThuatId: number = null,
        public DisplayName: string = null
    ) { }
}

export class DichVuKyThuatChuaHoanThanhTrenHoanThanh {
    public DichVuKyThuatDaHoanThanh: number = 0;
    public TongDichVuKyThuat: number = 0;
}

export class DanhSachKhamPTHoanThanh {
    constructor(
        public PhongBenhVienId: number = null,
        public SearchString: string = null,
        public TenDichVu: number = null,
        public DoiTuong: string = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public DiaChi: string = null,
        public MaYeuCauTiepNhan: string = null,
        public ThoiDiemTiepNhan: DateTime = null,
        public ThoiDiemTiepNhanTuFormat: any = null,
        public ThoiDiemTiepNhanDenFormat: any = null,
        public ThoiDiemTiepNhanTu: any = null,
        public ThoiDiemTiepNhanDen: any = null,
        public TrieuChungTiepNhan: string = null,
        public FromDate: any = null,
        public ToDate: any = null,

        //BVHD-3860
        public ThongTinThucHien: DanhSachKhamPTHoanThanhThucHien = new DanhSachKhamPTHoanThanhThucHien()
    ) { }
}

export class ChiDinhGhiNhanVatTuThuocPTTT {
    public YeuCauTiepNhanId: number = null;
    public DichVuChiDinhId: string = null;
    public TenDichVuChiDinh: string = null;
    public KhoId: number = null;
    public TenKho: string = null;
    public LaDuocPhamBHYT: boolean = true;
    public DichVuGhiNhanId: string = null;
    public TenDichVuGhiNhan: string = null;
    public strDonViTinh: string = null;
    public SoLuong: number = null;
    public TinhPhi: boolean = false;
    public GiaiDoanPhauThuat: EnumGiaiDoanPhauThuat = EnumGiaiDoanPhauThuat.GayMe;
    public LoaiNoiChiDinh: EnumLoaiNoiChiDinh;
}

export class GridItemGhiNhanVatTuThuocPTTT {
    public YeuCauGhiNhanVTTHThuocId: string = "";
    public YeuCauTiepNhanId: number = 0;
    public YeuCauDichVuKyThuatId: number = 0;
    public SoLuong: number = null;
    public TinhPhi: boolean = false;
    public IsCapNhatSoLuong: boolean = false;
    public IsCapNhatTinhPhi: boolean = false;
}

export class PTTTHoanTraThuocVatTuVo {
    constructor(
        public Id: string = null,
        public YeuCauTiepNhanId: number = null,
        public KhoId: number = null,
        // public LaDichTruyen: boolean = null,
        // public LaTuTruc: boolean = null,
        public SoLuong: number = null,

        public NoiTruChiDinhDuocPhamId: number = null,
        public YeuCauBenhVienId: number = null, //YeuCauDuocPhamBenhVien, YeuCauVatTuBenhVien
        public NhomYeuCauId: number = null, //EnumNhomGoiDichVu
        public DuocHuongBaoHiem: boolean = null,

        public CoYeuCauTraDuocPhamTuBenhNhanChiTiet: boolean = null,
        public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,

        public LaDuocPham : boolean = false
    ) {
    }
}

export class ThongTinHoanTraVatTuThuocPTTTVo {
    constructor(
        public Id: number = null,
        public VatTuThuocBenhVienId: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public NhomYeuCauId: number = null,
        public Ten: string = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        // public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,
        // public SoLuong: number = null,
        // public DonGia: number = null,
        // public ThanhTien: number = null,
        // public SoLuongDaTra: number = null,
        // public SoLuongTra: number = null,
        // public SoLuongDisplay: number = null,
        public YeuCauDuocPhamVatTuBenhViens: any = null
    ) { }
}

export class PTTTVatTuThuoc {
    constructor(
        public Id: number = null,
        public KhoId: number = null,
        public VatTuBenhVienId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public DuocHuongBaoHiem: boolean = null,
        public LoaiKho: number = null,
        public SoLuong: number = null,
        public KhongTinhPhi: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public NhomYeuCauId: number = null
    ) { }
}


export class TuongTrinhLai {
    constructor(
        public TuongTrinhLaiTheoYeuCauDichVuKyThuatId: any[] = [],
        public PhongBenhVienId: number = null,
    ) { }
}

export class PTTTVatTuThuocTonKho {
    constructor(
        public Id: number = 0,
        public LoaiDuocPhamHoacVatTu: number = null,
        public DonViTinh: string = null,
        public DVT: string = null,
        public TonKho: number = 0,
        public TonKhoFormat: string = null,
        public HSD: string = null,
        public FlagVatTuDaKe: boolean = false,
        public FlagVatTuDaKeTrungKho: boolean = false,
        public NhaSX: string = null,
        public NuocSX: string = null,
        public Ma: string = null,
        public Ten: string = null,
        public VatTuDaKe: string = null,
    ) { }
}

export class GhiNhanGoiDuocPhamVatTuPTTTVo {
    constructor(
        public YeuCauDichVuKyThuatId: number = 0,
        public KhoLuaChonId: number = 0,
    ) { }
}


export class ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKT {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public ChiDinhGhiNhanVatTuThuocPTTTChiTiets: ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet[] = [],
    ) { }
}

export class ChiDinhGhiNhanVatTuThuocPTTTTuGoiDVKTChiTiet {
    public Id: number = null;
    public YeuCauTiepNhanId: number = null;
    public YeuCauDichVuKyThuatId: string = null;
    public KhoId: number = null;
    public LaDuocPhamBHYT: boolean = true;
    public DichVuGhiNhanId: string = null;
    public SoLuong: number = null;
    public KhongTinhPhi: boolean = false;
    public GiaiDoanPhauThuat: EnumGiaiDoanPhauThuat = EnumGiaiDoanPhauThuat.GayMe;
    public LoaiNoiChiDinh: EnumLoaiNoiChiDinh = EnumLoaiNoiChiDinh.PhauThuatThuThuat;
}

//BVHD-3860
export class DanhSachKhamPTHoanThanhThucHien {
    public constructor(
        public ThucHien: boolean = true,
        public KhongThucHien: boolean = true
    ) { }
}