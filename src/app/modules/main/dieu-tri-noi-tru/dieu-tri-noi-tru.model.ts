import { Sort } from "src/app/shared/models/common.model";
import { LoaiTapTin } from 'src/app/shared/enum/common-type.enums';
import { TrangThaiYeuCauDichVuKyThuat } from "src/app/shared/enum/kham-benh.enum";

export class DieuTriNoiTru {
}



export class YearModel {
    constructor(
        public Year: number = null,
        public Expands: boolean = false,
        public Months: Array<MonthModel> = new Array<MonthModel>(),
    ) {
    }
}

export class MonthModel {
    constructor(
        public Month: number = null,
        public Days: Array<DayModel> = new Array<DayModel>(),
        public DayCopies: Array<DayModel> = new Array<DayModel>(),
    ) {
    }
}
export class DayModel {
    constructor(
        public Day: number = null,

        public Year: number = null,
        public Month: number = null,
        public FullDate: Date = null,
        public FullDateDisplay: string = null,

        public FullDateNext: Date = null,
        public FullDateNextDisplay: string = null,
        public PhieuDieuTriIdNext: number = null,

        public FullDatePre: Date = null,
        public FullDatePreDisplay: string = null,
        public PhieuDieuTriIdPre: number = null,

        public KhoaId: number = null,
        public PhieuDieuTriId: number = null,
        public LaNgayDieuTriDauTien: boolean = null,
        public CoDonThuocNoiTru: boolean = null,
        public CoDonVTYTNoiTru: boolean = null,

    ) {
    }
}

export class LstYearOrderByModel {
    constructor(
        public Date: Date = null,
        public KhoaId: number = null,
        public PhieuDieuTriId: number = null,
        public LaNgayDieuTriDauTien: boolean = null,
        public LaNgayDieuTriTamThoi: boolean = null,
        public CoDonThuocNoiTru: boolean = null,
        public CoDonVTYTNoiTru: boolean = null,

    ) {
    }
}

export class rangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,

    ) { }
}

export class TrichBienBanHoiChan {
    constructor(
        public HoiChanLuc: Date = null,
        public HoiChanLucStringUTC: string = null,
        public ChuToa: string = null,
        public ThuKy: string = null,
        public ChuToaText: string = null,
        public ThuKyText: string = null,
        public NguoiThamGia: any[] = [],
        public ChanDoan: string = null,
        public TomTat: string = null,
        public KetLuan: string = null,
        public HuongDieuTriTiep: string = null,
        public TaiKhoanDangNhap: string = null,
        public NgayThucHien: string = null,
        public DaDieuTriTuNgay: Date = null,
        public DaDieuTriDenNgay: Date = null,
        public TaiSoGiuong: string = null,
        public Phong: string = null,
        public Khoa: string = null,
        public FileChuKy: FileChuKyModel[] = []
    ) { }
}
export class PhieuSoKet15NgayDieuTri {
    constructor(
        public DanhGiaKetQua: string = null,
        public HuongDieuTriVaTienLuong: string = null,
        public TaiKhoanDangNhap: string = null,
        public NgayThucHien: Date = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public NgayThucHienText: string = null,
        public BSDieuTri: string = null,
        public TruongKhoa: string = null,
        public BSDieuTriText: number = null,
        public TruongKhoaText: number = null,
        public SoYTe: string = null,
        public BV: string = null,
        public SoVaoVien: string = null,
        public HoTenNgBenh: string = null,
        public TuoiNgBenh: string = null,
        public GTNgBenh: string = null,
        public DiaChi: string = null,
        public Khoa: string = null,
        public Buong: string = null,
        public Giuong: string = null,
        public ChanDoan: string = null,
        public DienBienLS: string = null,
        public XetNghiemCLS: string = null,
        public QuaTrinhDieuTri: string = null,
        public DanhGiaKQ: string = null,
        public HuongDieuTriTiep: string = null,
        public HoTenTruongKhoa: string = null,
        public HoTenBacSi: string = null,
        public FileChuKy: FileChuKyModel[] = [],
    ) { }
}
export class DSNoiTruTimKiemTimKiemTrangThai {
    public constructor(
        public SearchString: string = null,
        public KhoaPhongId: number = null,
        public DangDieuTri: boolean = true,
        public ChuyenVien: boolean = false,
        public ChuyenKhoa: boolean = false,
        public DaRaVien: boolean = false,

        public TuNgayDenNgay: TiepNhanNoiTruTimKiemTimKiemDateRange = new TiepNhanNoiTruTimKiemTimKiemDateRange(),
        public TuNgayDenNgayRaVien: TiepNhanNoiTruTimKiemTimKiemDateRange = new TiepNhanNoiTruTimKiemTimKiemDateRange(),
    ) { }
}
export class TiepNhanNoiTruTimKiemTimKiemDateRange {
    public constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        // public TuNgay: string = null,
        // public DenNgay: string = null
    ) { }
}
export class ChiTietDieuTriNoiTruViewModel {
    constructor(
        public Id: number = null,
        public BenhNhanId: number = null,
        public MaYeuCauTiepNhan: string = null,
        public MaBenhNhan: string = null,
        public HoTen: string = null,
        public Tuoi: string = null,
        public GioiTinh: string = null,
        public DiaChi: string = null,
        public NgheNghiep: string = null,
        public SoBenhAn: string = null,
        public LoaiBenhAn: string = null,
        public LoaiBenhAnEnum: number = null,
        public Khoa: string = null,
        public KhoaId: number = null,
        public BacSiDieuTri: string = null,
        public Phong: string = null,
        public Giuong: string = null,
        public DoiTuong: string = null,
        public TrangThaiId: number = null,
        public TrangThai: string = null,
        public SoTaiKhoan: string = null,
        public SoDuTaiKhoan: string = null,
        public SoTienConLai: string = null,
        public CoBHYT: boolean = null,
        public KetThucBenhAn: boolean = null,
        public DaQuyetToan: boolean = false,
        public BenhAnCons: ThongTinBALink[] = [],
        public BenhAnMe: ThongTinBALink = null,
        public CoDichVuKhuyenMai: boolean = false,
        public CungKhoaDangNhap: boolean = true,
        public IsDaChiDinhBacSi: boolean = false,
        public IsDaChiDinhGiuong: boolean = false,
        public KhoaPhuSanId: number = null,
        public DaChiDinhGiuongVaBacSi: boolean = false,    

        // cập nhật 03/06/2021: lấy YeuCauTiepNhanId của ngoại trú -> hiện thông tin tin trong tab Dịch vụ chỉ định ngoại trú
        public YeuCauTiepNhanNgoaiTruId: number = null,
        //gói dịch vụ marketing
        public GoiDichVus: Array<any> = [],

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}
export class ThongTinBALink {
    constructor(
        public BenhAnId: number = 0,
        public SoBenhAn: string = null
    ) { }
}
export enum EnumTrangThaiDieuTriNoiTru {
    DangDieuTri = 1,
    DaRaVien = 2,
    ChuyenVien = 3
}
export class NoiTruHoSoKhacTrichBienBanHoiChan {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy: FileChuKyModel[] = [],
        public ThoiGianHoiChan: Date = null
    ) { }
}


export class KeToaThuocDieuTriNoiTru {
    constructor(
        public Id: number = 0,
        public KhoId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: number = null,
        public DungSang: string = null,
        public DungTrua: string = null,
        public DungChieu: string = null,
        public DungToi: string = null,
        public ThoiGianDungSang: number = null,
        public ThoiGianDungTrua: number = null,
        public ThoiGianDungChieu: number = null,
        public ThoiGianDungToi: number = null,
        public SoLanDungTrongNgay: number = null,
        public SoLanDungTrongNgayString: string = null,
        public SoLuong: number = null,
        public GhiChu: string = null,
        public YeuCauTiepNhanId: number = null,
        public TinhTrang: boolean = null,
        public SoLanTrenVien: number = null,
        public CachGioDungThuoc: number = null,
        public LieuDungTrenNgay: number = null,
        public LieuDungTrenNgayDisplay: string = null,
        //DỊCH TRUYỀN
        public LaDichTruyen: boolean = null,
        public TocDoTruyen: number = null,
        public DonViTocDoTruyen: number = null,
        public DonViTocDoTruyenDisplay: string = null,
        public ThoiGianBatDauTruyen: number = null,
        public CachGioTruyenDich: number = null,
        public GioSuDung: string = null,
        public TheTich: number = null,
        public PhieuDieuTriHienTaiId: number = null,
        public KhongTinhPhi: boolean = null,
        public LoaiKho: number = null,
        public IsDelete: boolean = false,
        public KhuVuc: number = null,
        public SoThuTu: number = null,
        public LaTangSTT: boolean = null,


    ) { }
}

export class ThongTinThuocPhieuDieuTri {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LoaiDuocPham: number = null,
        public KhoId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public KhuVuc: number = null,
    ) {
    }
}

export class HoanTraThuocVo {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public KhoId: number = null,
        public NoiTruChiDinhDuocPhamId: number = null,
        public LaDichTruyen: boolean = null,
        public LaDuocPhamBHYT: boolean = null,
        public CoYeuCauTraDuocPhamTuBenhNhanChiTiet: boolean = null,
        public LaTuTruc: boolean = null,
        public SoLuong: number = null,
        public LoaiKho: number = null,
    ) {
    }
}

export class ThongTinHoanTraThuocVo {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public DuocPhamBenhVienId: number = null,
        public LaDuocPhamBHYT: boolean = null,
        public Ten: string = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public LaDichTruyen: boolean = null,
        public NgayYeuCau: Date = null,
        public CoYeuCauTraDuocPhamTuBenhNhanChiTiet: boolean = null,
        public YeuCauDuocPhamBenhViens: ThongTinHoanTraThuocChiTietVo[] = [],
    ) {
    }
}

export class ThongTinHoanTraThuocChiTietVo {
    constructor(
        public YeuCauDuocPhamBenhVienId: number = null,
        public SoLuong: number = null,
        public SoLuongDisplay: string = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public SoLuongDaTra: number = null,
        public SoLuongTra: number = null,

    ) {
    }
}

export class KeVatTuDieuTriNoiTru {
    constructor(
        public Id: number = 0,
        public KhoId: number = null,
        public VatTuBenhVienId: number = null,
        public YeuCauDichVuKyThuatId: number = null,
        public LaVatTuBHYT: number = null,
        public LoaiKho: number = null,
        public SoLuong: number = null,
        public KhongTinhPhi: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public PhieuDieuTriHienTaiId: number = null,
        public Ids: any = null,
    ) {
    }
}

export class HoanTraVatTuVo {
    constructor(
        public Ids: Array<string> = [],
        public YeuCauTiepNhanId: number = null,
        public YeuCauVatTuBenhVienId: number = null,
        public KhoId: number = null,
        public LaVatTuBHYT: boolean = null,
        public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,
        public LaTuTruc: boolean = null,
        public SoLuong: number = null,

    ) {
    }
}

export class ThongTinHoanTraVTVo {
    constructor(
        public Id: number = null,
        public VatTuBenhVienId: number = null,
        public LaVatTuBHYT: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public Ten: string = null,
        public TenKho: string = null,
        public NhanVienYeuCauId: number = null,
        public TenNhanVienYeuCau: string = null,
        public NgayYeuCau: Date = null,
        // public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,
        public SoLuong: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public SoLuongDaTra: number = null,
        public SoLuongTra: number = null,
        public SoLuongDisplay: number = null,
        public YeuCauVatTuBenhViens: ThongTinHoanTraVatTuChiTietVo[] = [],
    ) {
    }
}


export class ThongTinHoanTraVatTuChiTietVo {
    constructor(
        public YeuCauVatTuBenhVienId: number = null,
        public SoLuong: number = null,
        public SoLuongDisplay: string = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public SoLuongDaTra: number = null,
        public SoLuongTra: number = null,

    ) {
    }
}


export class KeToaThuocTruyenDichDieuTriNoiTru {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public KhoId: number = null,
        public LaDuocPhamBHYT: number = null,
        public DuocPhamBenhVienId: number = null,
        public SoLanDungTrongNgay: number = null,
        public SoLuong: number = null,
        public TocDoTruyen: number = null,
        public DonViTocDoTruyen: number = null,
        public DonViTocDoTruyenDisplay: string = null,
        public ThoiGianBatDauTruyen: number = null,
        public CachGioTruyenDich: number = null,
        public GhiChu: string = null,
        public GioSuDung: string = null,
        public TheTich: number = null,
        public TinhTrang: boolean = null,
    ) { }
}

export class KeMauVaChePhamDieuTriNoiTru {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public MauVaChePhamId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public NhomMauDisplay: string = null,
        public NhomMauRH: string = null,
        public NhomMau: number = null,
        public YeuToRh: number = null,
        public TheTich: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public ThoiGianBatDauTruyen: number = null,
        public DonGiaBan: number = null,
        public DonGiaBaoHiem: number = null,
    ) { }
}

export class InPhieuCongKhaiThuocVatTu {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public LoaiThuocVatTu: number = null,
        public HostingName: string = null,
        public Ids: Array<number> = [],
    ) {
    }
}


export class XacNhanInPhieuTruyenMau {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public PhieuDieuTriId: number = null,
        public Hosting: string = null,
    ) {
    }
}

export class CapNhatKhongTinhPhi {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public KhongTinhPhi: boolean = null,
        public LaThuoc: boolean = null,
    ) {
    }
}


export class EkipDieuTriPhongGiuongBs {
    public constructor(
        public Id: number = null,
        public NoiTruBenhAnId: number = null,
        public BacSiId: number = null,
        public BacSiDisplay: string = null,
        public DieuDuongId: number = null,
        public DieuDuongDisplay: string = null,
        public TuNgay: Date = null,
        public DenNgay: Date = null,
        public NhanVienLapId: number = null,
        public NhanVienLapDisplay: string = null,
        public KhoaPhongDieuTriId: number = null
    ) { }
}

export class YeuCauDichVuGiuongBenhVienPhongGiuongBs {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public GiuongBenhId: number = null,
        public GiuongBenhDisplay: string = null,
        public LoaiGiuong: number = null,
        public LoaiGiuongDisplay: string = null,
        public BaoPhong: boolean = false,
        public ThoiDiemBatDauSuDung: Date = null,
        public ThoiDiemKetThucSuDung: Date = null,
        public DichVuGiuongBenhVienId: number = null,
        public DichVuGiuongBenhVienDisplay: string = null,
        public DoiTuongSuDung: number = null,
        public DoiTuongSuDungDisplay: string = null,
        public GhiChu: string = null,
        public LoaiGiaDichVuCoHieuLuc: number = null,
        public YeuCauGoiDichVuId: number = null
    ) { }
}

export class GiuongBenhPhongGiuongBs {
    constructor(
        public KhoaId: number = null,
        public TenKhoa: string = null,
        public BaoPhong: boolean = null,
        public GiuongId: number = null,
        public TenGiuong: string = null,
        public TenPhong: string = null,
        public Tang: number = null,
        public ThoiGianNhan: Date = null,
        public ThoiGianTra: Date = null,
        public YeuCauDichVuGiuongBenhVienId: number = null,
        public YeuCauTiepNhanNoiTruId: number = null
    ) { }
}

// export class GiuongBenhPhongGiuongBs {
//     public constructor(
//         public KhoaPhongId: number = 0,
//         public PhongBenhVienId: number = 0,
//         public GiuongTrong: boolean = false,
//         public GiuongDaCoBenhNhan: boolean = false
//     ) { }
// }

export class ChuyenKhoaPhongGiuongBs {
    public constructor(
        public Id: number = null,
        public NoiTruBenhAnId: number = null,
        public KhoaPhongChuyenDiId: number = null,
        public KhoaPhongChuyenDiDisplay: string = null,
        public KhoaPhongChuyenDenId: number = null,
        public KhoaPhongChuyenDenDisplay: string = null,
        public ThoiDiemRaKhoa: Date = null,
        public ThoiDiemVaoKhoa: Date = null,
        public ChanDoanVaoKhoaICDId: number = null,
        public ChanDoanVaoKhoaICDDisplay: string = null,
        public NhanVienChiDinhId: number = null,
        public NhanVienChiDinhDisplay: string = null,
        public ChanDoanVaoKhoaGhiChu: string = null,
        public LyDoChuyenKhoa: string = null,
        public BacSiDieuTriId: any = null,
        public BacSiDieuTriDisplay: string = null
    ) { }
}

export enum DoiTuongSuDung {
    BenhNhan = 1,
    NguoiNha = 2
}

export class KhoaPhongChuyenDen {
    public constructor(
        public Id: number = null,
        public DisplayName: string = null
    ) { }
}

export class ThoiDiemNhanGiuong {
    public constructor(
        public ThoiDiemNhanGiuong: Date = null,
        public MinThoiDiemNhanGiuong: Date = null
    ) { }
}

export class PhieuKhamThamKhamViewModel {
    constructor(
        public PhieuDieuTriId: number = 0,
        //public YeuCauTiepNhanId: number = null,
        public Id: number = 0,
        public KhoaChiDinh: string = null,
        public KhoaChiDinhId: number = null,
        public Phong: string = null,

        public Giuong: string = null,
        public BSDieuTri: string = null,

        public LaCapCuu: boolean = null,

        public DieuDuong: string = null,
        public NgayYLenh: string = null,

        public ChuanDoanNhapVien: string = null,
        public DienBien: string = null,

        public SoNgayDieuTriBenhAnSoSinh: number = null,
        public GhiChuChamSoc: string = null,
        public CheDoAnId: number = null,

        public ChanDoanChinhICDId: string = null,
        public ChanDoanChinhICDModelText: string = null,
        public ChanDoanChinhGhiChu: string = null,

        public ThoiDiemThamKham: Date = null,
        public ThoiDiemNhapVien: Date = null,


        public BenhNhanCapCuu: boolean = null,
        public CheDoChamSoc: number = null,

        public NoiTruThamKhamChanDoanKemTheos: NoiTruThamKhamChanDoanKemTheoViewModel[] = new Array<NoiTruThamKhamChanDoanKemTheoViewModel>(),
        public KetQuaSinhHieus: KetQuaSinhHieuViewModel[] = new Array<KetQuaSinhHieuViewModel>(),
        public DienBiens: DienBienViewModel[] = new Array<DienBienViewModel>(),
        public ThoiGianDieuTriSoSinhViewModels: ThoiGianDieuTriSoSinhViewModel[] = new Array<ThoiGianDieuTriSoSinhViewModel>()
    ) {
    }
}
export class ThoiGianDieuTriSoSinhRaVienViewModel {
    constructor(
        public ThoiGianDieuTriSoSinhViewModels: ThoiGianDieuTriSoSinhViewModel[] = new Array<ThoiGianDieuTriSoSinhViewModel>()
    ) { }
}

export class NoiTruThamKhamChanDoanKemTheoViewModel {
    constructor(
        // public Id: number = 0,
        // public IdView: number = Math.random(),
        // public ICDId: number = null,
        // public ICDModelText: string = null,
        // public GhiChu: string = null,
        // public NoiTruPhieuDieuId: number = 0,
        public Id: number = 0,
        public NoiTruPhieuDieuId: number = 0,
        public ICDId: number = null,
        public GhiChu: string = null,
        public TenICD: string = null,
    ) {
    }
}

export class KetQuaSinhHieuViewModel {
    constructor(
        public Id: number = 0,
        public IdView: number = Math.random(),
        public NhipTim: number = null,
        public NhipTho: number = null,
        public ThanNhiet: number = null,

        public HuyetApTamThu: number = null,
        public HuyetApTamTruong: number = null,
        public ChieuCao: number = null,

        public CanNang: number = null,
        public Bmi: number = null,
        public Glassgow: number = null,

        public SpO2: number = null,

        public ThoiDiemThucHien: Date = new Date(),
        public ThoiDiemNhapVien: Date = null,

    ) {
    }
}
export class ThoiGianDieuTriSoSinhViewModel {
    constructor(
        public Id: number = 0,
        public GioBatDau: number = null,
        public GioKetThuc: number = null,
        public GhiChuDieuTri: string = null
    ) {
    }
}
export class DienBienViewModel {
    constructor(
        public IdView: number = 0,
        public DienBien: string = null,
        public YLenh: string = null,
        public CheDoAnId: number = null,
        public CheDoChamSocId: number = null,
        public CheDoAn: string = null,
        public CheDoChamSoc: string = null,
        public ThoiGian: Date = new Date(),
        public ThoiGianDisplay: string = null

    ) {
    }
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
export class NoiTruHoSoKhacSoKet15NgayDieuTri {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy: FileChuKyModel[] = [],
    ) { }
}
// update 1/6/2021
export class DanhSachSoKet15NgayDieuTri {
    constructor(
        public TuNgay: string = null,
        public DenNgay: string = null,
        public NoiTruHoSoKhacId: number = null,
    ) { }
}
export class ExportQueryInfoQueryInfo {
    constructor(
        public Skip: number = 0,
        public Take: number = 50,
        public PageSize: number = 50,
        public SearchString: string = "",
        public AdditionalSearchString: string = "",
        // public searchTerms: string = "",
        public Sort: Sort[] = []
    ) { }
}
export class FileChuKyModel {
    constructor(
        public Id: number = 1,
        public INoiTruHoSoKhacIdd: number = null,
        public Uid: string = null,
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

export class DieuTriNoiTruThongTinHanhChinh {
    constructor(
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgaySinhDisplay: string = null,
        public Tuoi: number = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public DiaChi: string = null,
        public QuocTichId: number = null,
        public QuocTichDisplay: string = null,
        public DanTocId: number = null,
        public DanTocDisplay: string = null,
        public NgheNghiepId: number = null,
        public NgheNghiepDisplay: string = null,
        public NoiLamViec: string = null,
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeQuanHeNhanThanDisplay: string = null,
        public SoDienThoai: string = null,
        public SoDienThoaiDisplay: string = null,
        public CoBHYT: boolean = null,
        public CoBHYTDisplay: string = null,
        public BHYTMaSoThe: string = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHieuLucDisplay: string = null,
        public BHYTNgayHetHan: Date = null,
        public BHYTNgayHetHanDisplay: string = null,
        public BHYTMucHuong: number = null,
        public BHYTMucHuongDisplay: string = null,
        public TuyenKham: string = null,
        public NhomMau: number = null,
        public NhomMauDisplay: string = null,
        public YeuToRh: number = null,
        public YeuToRhDisplay: string = null,

        public ThoiDiemTiepNhan: Date = null,
        public ThoiDiemTiepNhanDisplay: string = null,
        public NoiTiepNhanId: number = null,
        public NoiTiepNhanDisplay: string = null,
        public NoiGioiThieuId: number = null,
        public NoiGioiThieuDisplay: string = null,
        public ThoiDiemNhapVien: Date = null,
        public ThoiDiemNhapVienDisplay: string = null,
        public ThoiDiemRaVien: Date = null,
        public ThoiDiemRaVienDisplay: string = null,
        public SoLanVaoVienDoBenhNay: number = null,
        public CoChuyenVien: boolean = null,
        public LoaiChuyenTuyen: number = null,
        public LoaiChuyenTuyenDisplay: string = null,
        public ChuyenDenBenhVienId: number = null,
        public ChuyenDenBenhVienDisplay: string = null,
        public HinhThucRaVien: number = null,
        public HinhThucRaVienDisplay: string = null,
        public NgayTaiKham: Date = null,
        public NgayTaiKhamDisplay: string = null,
        public IsTaiKham: boolean = null,
        public TongSoNgayDieuTri: number = null,
        public CoThuThuat: boolean = null,
        public CoPhauThuat: boolean = null,

        public YeuCauTiepNhanMeId: number = null,
        public YeuCauGoiDichVuId: number = null,
    ) { }
}


export class BienBanGayMeGayTe {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public ThongTinHoSo: string = null,
        public NhanVienGiaiThichId: number = null,
        public TenNhanVienGiaiThich: string = null,
        public TenNhanVienThucHien: string = null,
        public NhanVienThucHienId: number = null,
        public ThoiDiemThucHien: Date = null,
        public NhanVienDangNhap: string = null,
        public ThoiDiemThucHienDisplay: string = null,
        public IsDataChange: boolean = null,
        public LastModified: any = null,
        public NoiTruHoSoKhacFileDinhKems: NoiTruHoSoKhacFileDinhKemViewModel[] = [],
        public ThongTinQuanHeThanNhans: ThongTinQuanHeThanNhan[] = []
    ) {
    }
}

export class HoSoKhacGiayRaVienJSON {
    constructor(
        public ChanDoan: string = null,
        public PhuongPhapDieuTri: string = null,
        public GhiChu: string = null,
        public TruongKhoaId: number = null,
        public GiamDocChuyenMonId: number = null,
        public IdGhiChu: number = null,
    ) {
    }
}

export class HoSoKhacGiayRaVien {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public ThongTinHoSo: string = null,
        public ThoiDiemThucHien: Date = null,
        public NhanVienDangNhap: string = null,
        public ChanDoan: string = null,
        public ThoiDiemThucHienDisplay: string = null,
        public IsDataChange: boolean = null,
        public LastModified: any = null,
        public TenTruongKhoa: string = null,
        public TruongKhoaId: number = null,
        public TenGiamDocChuyenMon: string = null,
        public GiamDocChuyenMonId: number = null,
        public GhiChu: string = null,
        public PhuongPhapDieuTri: string = null,
        public IdGhiChu: number = null,
    ) {
    }
}

export class HoSoKhacGiayChungSinh {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public NhanVienDangNhap: string = null,
        public IsDataChange: boolean = null,
        public LastModified: any = null,
        public HoTenCha: string = null,
        public HoTenCon: string = null,
        public GhiChu: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public TenNhanVienDoDe: string = null,
        public NhanVienDoDeId: number = null,
        public TenNhanVienGhiPhieu: string = null,
        public NhanVienGhiPhieuId: number = null,
        public TenGiamDocChuyenMon: string = null,
        public GiamDocChuyenMonId: number = null,
        public ThongTinHoSo: string = null,
        public So: string = null,
        public QuyenSo: string = null,
        public HoSoKhacTreSoSinhs: HoSoKhacTreSoSinh[] = [],
        public SoConHienTai: number = null,
    ) {
    }
}

export class HoSoKhacGiayChungSinhJSON {
    constructor(
        public So: string = null,
        public QuyenSo: string = null,
        public HoTenCha: string = null,
        public GhiChu: string = null,
        public NhanVienDoDeId: number = null,
        public NhanVienGhiPhieuId: number = null,
        public GiamDocChuyenMonId: number = null,
        public HoSoKhacTreSoSinhs: HoSoKhacTreSoSinh[] = []
    ) {
    }
}

export class HoSoKhacTreSoSinh {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public GioiTinh: string = null,
        public CanNang: string = null,
        public HoTen: string = null,
        public GhiChu: string = null,
        public DeLuc: Date = null,
        public TinhTrangId: number = null,
    ) {
    }
}

export class ThongTinQuanHeThanNhan {
    constructor(
        public Id: number = 0,
        public HoTen: string = null,
        public NamSinh: number = null,
        public CMND: number = null,
        public QuanHeThanNhanId: number = null,
        public TenQuanHeThanNhan: string = null,
        public DiaChi: string = null,
    ) {
    }
}

export class DieuTriNoiTruTaiNanThuongTich {
    constructor(
        public Id: number = null,
        public ThoiGianXayRaTaiNan: Date = null,
        public ThoiGianDenCapCuu: Date = null,
        public ThongTinTaiNanThuongTich: string = null
    ) { }
}

export class BanKiemTiemChungTreEm {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public ThongTinHoSo: string = null,
        public NhanVienThucHienId: number = null,
        public TenNhanVienThucHien: string = null,
        public ThoiDiemThucHien: Date = null,
        public NhanVienDangNhap: string = null,
        public ThoiDiemThucHienDisplay: string = null,
        public IsDataChange: boolean = null,
        public LastModified: any = null,
        public NoiTruHoSoKhacFileDinhKems: NoiTruHoSoKhacFileDinhKemViewModel[] = [],
        public DuocPhamIds: Array<number> = [],
        public SotHaThanNhiet: boolean = false,
        public NgheTimBatThuong: boolean = false,
        public NghePhoiBatThuong: boolean = false,
        public TriGiacBatThuong: boolean = false,
        public CanNangDuoi2000g: boolean = false,
        public CoCacChongChiDinhKhac: boolean = false,
        public DuDieuKienTiemChung: boolean = null,
        public TamHoanTiemChung: boolean = null,
    ) {
    }
}

export class BanKiemTiemChungTreEmJSON {
    constructor(
        public DuocPhamIds: Array<number> = [],
        public SotHaThanNhiet: boolean = null,
        public NgheTimBatThuong: boolean = null,
        public NghePhoiBatThuong: boolean = null,
        public TriGiacBatThuong: boolean = null,
        public CanNangDuoi2000g: boolean = null,
        public CoCacChongChiDinhKhac: boolean = null,
        public DuDieuKienTiemChung: boolean = null,
        public TamHoanTiemChung: boolean = null,
    ) { }
}

export class PhieuChamSocSoSinh {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public ThongTinHoSo: string = null,
        public NhanVienThucHienId: number = null,
        public TenNhanVienThucHien: string = null,
        public ThoiDiemThucHien: Date = null,
        public NhanVienDangNhap: string = null,
        public ThoiDiemThucHienDisplay: string = null,
        public ICDId: number = null,
        public TenICD: string = null,
        public IsDataChange: boolean = null,
        public LastModified: any = null,
        public ThongTinHoSoPhieuChamSocSoSinhs: ThongTinHoSoPhieuChamSocSoSinh[] = []
    ) { }
}

export class PhieuChamSocSoSinhJSON {
    constructor(
        public ICDId: number = null,
        public TenICD: string = null,
        public ThongTinHoSoPhieuChamSocSoSinhs: ThongTinHoSoPhieuChamSocSoSinh[] = []
    ) { }
}

export class ThongTinHoSoPhieuChamSocSoSinh {
    constructor(
        public Ngay: Date = null,
        public SLAn: number = null,
        public NonCho: boolean = false,
        public NuocTieu: boolean = false,
        public Phan: boolean = false,
        public VangDa: boolean = false,
        public XaTriChamSocDanhGia: string = null,
        public NhanVienDieuDuongId: number = null,
        public TenNhanVienDieuDuong: string = null,
    ) { }
}

export class ThongTinTaiNanThuongTich {
    constructor(
        public DiaDiemXayRaTaiNan: string = null,
        public ThoiGianXayRaTaiNan: Date = null,
        public ThoiGianDenCapCuu: Date = null,
        public SoCuuBanDau: boolean = null,
        public PhuongTienDuaNanNhanDenVien: string = null,
        public PhuongTienSuDungKhiBiTaiNan: string = null,
        public LoaiTaiNan: string = null,
        // public PhuongTienGayTaiNan: TaiNanThuongTichPhuongTienGayTaiNan = new TaiNanThuongTichPhuongTienGayTaiNan(),
        public PhuongTienGayTaiNan: number = null,
        public ThongTinKhac: string = null,

        public DoiMuBaoHiem: boolean = null,
        public DoiMuCoCaiQuai: boolean = null,
        public MuBaoHiemBiVo: boolean = null,
        public LoaiMuBaoHiem: string = null,

        public SuDungRuouBia: boolean = null,
        public TheoCamQuan: boolean = null,
        public NongDoConTrongMau: number = null,
        public KhongDoNongDoConTrongMau: boolean = null,
        public NongDoConTrongHoiTho: number = null,
        public KhongDoNongDoConTrongHoiTho: boolean = null,

        public ChanThuongSoNao: boolean = null,
        public Glassgow: number = null,
        public ChanThuongCotSongCo: boolean = null,
        public TonThuongKhac: TaiNanThuongTichTonThuongKhac = new TaiNanThuongTichTonThuongKhac(),

        public NhapVien: boolean = null,
        public MoCapCuu: boolean = null,
        // public TuVong: TaiNanThuongTichTuVong = new TaiNanThuongTichTuVong(),
        public TuVong: number = null,
        public NangXinVe: boolean = null,
        public NoiChuyenTuyen: string = null,
        public KhongChuyenTuyen: boolean = null
    ) { }
}

// export class TaiNanThuongTichPhuongTienGayTaiNan {
//     constructor(
//         public OTo: boolean = null,
//         public TauHoa: boolean = null,
//         public MoToXeGanMay: boolean = null,
//         public XeTuChe: boolean = null,
//         public TuGayTaiNan: boolean = null
//     ) { }
// }

export class TaiNanThuongTichTonThuongKhac {
    constructor(
        public HamMat: boolean = null,
        public Chi: boolean = null,
        public NgucBung: boolean = null,
        public DaChanThuong: boolean = null
    ) { }
}

// export class TaiNanThuongTichTuVong {
//     constructor(
//         public TruocBV: boolean = null,
//         public TrongBV: boolean = null
//     ) { }
// }

export class ChiDinhDichVuKyThuatMultiselectViewModel {
    constructor(
        public NhomDichVuBenhVienId: number = null,
        public TenNhomDichVu: string = null,
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public DichVuKyThuatBenhVienChiDinhs: Array<string> = [],
        public ShowComboboxNhomDichVuKyThuat: boolean = true,
        public IsKhamBenhDangKham: boolean = false,
        public DichVuKyThuatTuGois: Array<DichVuChiDinhTrungTuGoi> = [],
        public PhieuDieuTriId: number = null,
        public KhongTinhPhi: boolean = null,
        public BieuHienLamSang: string = null,
        public DichTeSarsCoV2: string = null,
    ) { }
}

export class DichVuChiDinhTrungTuGoi {
    constructor(
        public Id: string = null,
        public YeuCauGoiDichVuId: number = null,
        public TenGoiDichVu: string = null,
        public ChuongTrinhGoiDichVuId: number = null,
        public ChuongTrinhGoiDichVuChiTietId: number = null,
        public DichVuBenhVienId: number = null,
        public TenDichVu: string = null,
        public NhomGoiDichVu: number = null,
        public SoLuongSuDung: number = 1
    ) { }
}

export class GoiDichVu {
    constructor(
        public GoiChietKhaus: GoiCoChietKhau[] = [],
        public GoiKhacs: GoiKhongChietKhau[] = []
    ) { }
}

export class GoiCoChietKhau {
    constructor(
        public Id: number = null,
        public Nhom: string = null,
        public NhomId: number = 0,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public TLChietKhau: string = null,
        public DonGiaTrongGoi: number = null,
        public ThanhTienTrongGoi: number = null,
        public NoiThucHien: string = null,
        public TongThanhTienTrongGoi: number = null,
        public TongThanhTien: number = null,
        public TrangThai: string = null,
        public NoiThucHienIdStr: string = null,
    ) { }
}

export class GoiKhongChietKhau {
    constructor(
        public Id: number = null,
        public Nhom: string = null,
        public NhomId: number = 0,
        public Ma: string = null,
        public TenDichVu: string = null,
        public LoaiGia: string = null,
        public SoLuong: number = 1,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BHYTThanhToan: number = null,
        public TLMG: string = null,
        public SoTienMG: number = null,
        public BNThanhToan: number = null,
        public NoiThucHien: string = null,
        public TrangThai: string = null,
        public NoiThucHienIdStr: string = null,
        public isCheckRowItem: boolean = false,

    ) { }
}

export class ListInChiDinh {
    constructor(
        public nhomChiDinhId: number = 0,
        public dichVuChiDinhId: number = 0,
    ) {
    }
}

export class BienBanGayMeGayTeJSON {
    constructor(
        public NhanVienGiaiThichId: number = null,
        public FileChuKy: FileChuKyModel[] = [],
        public ThongTinQuanHeThanNhans: ThongTinQuanHeThanNhan[] = []
    ) {
    }
}

export class GridItemYeuCauDichVuKyThuat {
    constructor(
        public YeuCauTiepNhanId: number = 0,
        public YeuCauKhamBenhId: number = 0,
        public YeuCauDichVuKyThuatId: number = 0,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public IsUpdateLoaiGia: boolean = false,
        public SoLan: number = null,
        public IsUpdateSoLan: boolean = false,
        public NguoiThucHienId: number = null,
        public IsUpdateNguoiThucHien: boolean = false,
        public NoiThucHienId: number = null,
        public IsUpdateNoiThucHien: boolean = false,
        public BenhPhamXetNghiem: string = null,
        public IsUpdateBenhPhamXetNghiem: boolean = false,

        public YeuCauKhamBenhLastModified: any = null,
        public IsKhamBenhDangKham: boolean = false,

        public GioBatDau: Date = null,
        public IsUpdateGioThucHien: boolean = false,

        public DuocHuongBaoHiem: boolean = null,
        public IsUpdateDuocHuongBaoHiem: boolean = false,

        public LaDichVuTrongGoi: boolean = null,
        public IsSwapDichVuGoi: boolean = false,

        public TinhPhi: boolean = null,
        public IsUpdateTinhPhi: boolean = false,

        //BVHD-3825
        public LaDichVuKhuyenMai: boolean = null,
        public IsSwapDichVuKhuyenMai: boolean = false,

        //BVHD-3575
        public IsDichVuKham: boolean = false
    ) {
    }
}

export class NoiTruHoSoKhacFileDinhKemViewModel {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public TenGuid: string = null,
        public KichThuoc: number = null,
        public DuongDan: string = null,
        public MoTa: string = null,
        public LoaiTapTin: LoaiTapTin = null,
        public DuongDanTmp: string = null,
        public Uid: string = null,
    ) {
    }
}
export class TrangThaiYeuCauDichVuKyThuatObjEnum {
    constructor(
        public ChuaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.ChuaThucHien,
        public DangThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DangThucHien,
        public DaThucHien: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaThucHien,
        public DaHuy: TrangThaiYeuCauDichVuKyThuat = TrangThaiYeuCauDichVuKyThuat.DaHuy
    ) { }
}
export class NoiTruHoSoKhac {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FilesChuKy: FileChuKyModel[] = [],
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null
    ) { }
}

export class ThongTinHoSoPhieuSangLocDinhDuong {
    constructor(
        public DungChoPhuNuMangThai: boolean = false,
        public NgayDanhGia: Date = null,
        public ChanDoan: string = null,

        public NguoiThucHienId: number = null,
        public NguoiThucHienName: string = null,

        //Không mang thai
        public CanNang: number = null,
        public ChieuCao: number = null,
        public BMI: number = null,
        public DaiThamChieuBMI: string = null,
        public MucDoBMI: string = null,
        public GiamCan: number = null,
        public GiamCanDisplay: string = null,
        public DiemGiamCan: number = null,
        public SoKgGiam: number = null,
        public SoKgGiamDisplay: string = null,
        public DiemSoKgGiam: number = null,
        public AnUongKem: number = null,
        public AnUongKemDisplay: string = null,
        public DiemAnUongKem: number = null,
        public BoSungDinhDuongDuongUong: boolean = null,
        public LoiKhuyenDinhDuongKhac: string = null,
        public TinhTrangBenhLyNang: number = null,
        public TinhTrangBenhLyNangDisplay: string = null,
        public TongDiemMST: number = 0,
        public ChanDoanMucDoSuyDinhDuong: string = null,

        public NhuCauKhacNangLuong: number = null,
        public NhuCauKhacDuong: number = null,
        public NhuCauKhacDam: number = null,
        public NhuCauKhacBeo: number = null,
        public KeHoachDinhDuong: number = null,
        public KeHoachDinhDuongDisplay: string = null,

        //Grid
        public lstNhuCauDinhDuong: NhuCauDinhDuong[] = new Array<NhuCauDinhDuong>(),

        //Mang thai
        public TuoiThai: number = null,
        public TheoKinhCuoiCung: boolean = null,
        public SieuAmBaThangDauThaiKy: boolean = null,
        public CanNangTruocMangThai: number = null,
        public ChieuCaoTruocMangThai: number = null,
        public BMITruocMangThai: number = null,
        public CanNangHienTai: number = null,
        public KhoangBMITruocMangThai: string = null,
        public DiemBMITruocMangThai: number = null,
        public TocDoTangCan: number = null,
        public TocDoTangCanDisplay: string = null,
        public DiemTocDoTangCan: number = null,
        public BenhKemTheo: number = null,
        public BenhKemTheoDisplay: string = null,
        public DiemBenhKemTheo: number = null,
        public TongDiemTruocMangThai: number = 0,
        public KetLuan: string = null
    ) { }
}

export class NhuCauDinhDuong {
    constructor(
        public Id: number = null,
        public isCheck: boolean = false
    ) { }
}

export class ThongTinHoSoPhieuTheoDoiChucNangSong {
    constructor(
        public ChanDoan: string = null,
    ) { }
}

export class ThongTinHoSoGiayTuNguyenTrietSan {
    constructor(
        public NgayThucHien: Date = null,
        public BacSiThucHienId: number = null,
        public BacSiThucHienDisplay: string = null
    ) { }
}

export class NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FilesChuKy: FileChuKyModel[] = [],
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null,

        public BacSiGiaiThich: string = null,
        public NgayThucHien: Date = null,
        public BacSiGMHSId: number = null,
        public QuanHeThanNhans: ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo[] = new Array<ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo>(),
    ) { }
}

export class ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(
        public BacSiGiaiThich: string = null,
        public NgayThucHien: Date = null,
        public BacSiGMHSId: number = null,
        public BacSiGMHSDisplay: string = null,
        public QuanHeThanNhans: ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo[] = new Array<ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo>(),
    ) { }
}

export class ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(
        public Id: number = null,
        public HoTen: string = null,
        public NamSinh: number = null,
        public CMND: string = null,
        public QuanHeId: number = null,
        public QuanHeDisplay: string = null,
        public DiaChi: string = null
    ) { }
}

export class NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FilesChuKy: FileChuKyModel[] = [],
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null,

        public ChanDoan: string = null,
        public TienMe: string = null,
        public TacDung: string = null,
        public LoaiMo: string = null,
        public TuTheMo: string = null,
        public NguoiGayMe: string = null,
        public NguoiMo: string = null,
        public PhuongPhapVoCam: string = null,
        public NguoiThuCheo: string = null,
        public NgayThucHien: Date = null,
        public Nang: number = null,
        public Cao: number = null,
        public KetLuan: string = null,
        public MaSoThongTinVienPhi: string = null
    ) { }
}

export class ThongTinBangTheoDoiGayMeHoiSuc {
    constructor(
        public ChanDoan: string = null,
        public TienMe: string = null,
        public TacDung: string = null,
        public LoaiMo: string = null,
        public TuTheMo: string = null,
        public NguoiGayMe: string = null,
        public NguoiMo: string = null,
        public PhuongPhapVoCam: string = null,
        public NguoiThuCheo: string = null,
        public NgayThucHien: Date = null,
        public Nang: number = null,
        public Cao: number = null,
        public KetLuan: string = null,
        public MaSoThongTinVienPhi: string = null
    ) { }
}

export class NoiTruHoSoKhacGiayChuyenTuyen {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FilesChuKy: FileChuKyModel[] = [],
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null,

        public SoHoSo: string = null,
        public SoChuyenTuyenSo: string = null,
        public NguoiNhan: string = null,
        public DauHieuLamSan: string = null,
        public KetQuaXetNghiemCLS: string = null,
        public ChanDoan: string = null,
        public PhuongPhapSuDungTrongDieuTri: string = null,
        public TinhTrangNguoiBenh: string = null,
        public HuongDieuTri: string = null,
        public LyDoChuyenTuyen: number = null,
        public ChuyenTuyenHoi: Date = null,
        public PhuongTienVanChuyen: string = null,
        public HoTenNguoiHoTong: string = null,
        public ChucDanhNguoiHoTong: string = null,
        public TrinhDoChuyenMonNguoiHoTong: string = null,
        public NgayThucHien: Date = null,
        public NguoiCoThamQuyenId: number = null,
        public YBacSiKhamDieuTriId: number = null,
    ) { }
}

export class ThongTinGiayChuyenTuyen {
    constructor(
        public SoHoSo: string = null,
        public SoChuyenTuyenSo: string = null,
        public NguoiNhan: string = null,
        public DauHieuLamSan: string = null,
        public KetQuaXetNghiemCLS: string = null,
        public ChanDoan: string = null,
        public PhuongPhapSuDungTrongDieuTri: string = null,
        public TinhTrangNguoiBenh: string = null,
        public HuongDieuTri: string = null,
        public LyDoChuyenTuyen: number = null,
        public ChuyenTuyenHoi: Date = null,
        public PhuongTienVanChuyen: string = null,
        public HoTenNguoiHoTong: string = null,
        public ChucDanhNguoiHoTong: string = null,
        public TrinhDoChuyenMonNguoiHoTong: string = null,
        public NgayThucHien: Date = null,
        public NguoiCoThamQuyenId: number = null,
        public NguoiCoThamQuyenDisplay: string = null,
        public YBacSiKhamDieuTriId: number = null,
        public YBacSiKhamDieuTriDisplay: string = null
    ) { }
}

export class NoiTruHoSoKhacBieuDoChuyenDa {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FilesChuKy: FileChuKyModel[] = [],
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public ThoiDiemThucHien: Date = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null,

        public NgayGhiBieuDo: Date = null,
        public NguoiGhiBieuDoId: number = null,
        public NguoiGhiBieuDoDisplay: string = null
    ) { }
}

export class ThongTinBieuDoChuyenDa {
    constructor(
        public NgayGhiBieuDo: Date = null,
        public NguoiGhiBieuDoId: number = null,
        public NguoiGhiBieuDoDisplay: string = null,
        public TienThaiPara1: number = null,
        public TienThaiPara2: number = null,
        public TienThaiPara3: number = null,
        public TienThaiPara4: number = null
    ) { }
}

// phiếu PhieuKhaiThacTienSuDiUng ngày 8/1
export class PhieuKhaiThacTienSuDiUng {
    constructor(
        public STT: number = null,
        public Stt: number = null,
        public NoiDung: string = null,
        public TenThuoc: string = null,
        public DiNguyenGayDiUng: string = null,
        public CoKhong: boolean = null,
        public SoLan: number = 0,
        public BieuHienLamSang: string = null,
        public XuTri: string = null,
        public BSKhaiThac: string = null,
        public FileChuKy: FileChuKyModel[] = [],
        public NguoiThucHien: string = null,
        public NgayThucHien: string = null,
        public HoTenNguoiBenh: string = null,
        public Tuoi: string = null,
        public GioiTinh: string = null,
        public Khoa: string = null,
        public Buong: string = null,
        public Giuong: string = null,
        public TaiKhoanDangNhap: string = null,
        public TaiSoGiuong: string = null,
        public ChanDoan: string = null,
        public BSKhaiThacTienSuDiUng: string = null,
        public PhieuKhaiThacTienSuDiUngList: string = null
    ) { }
}
export class NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public LoaiHoSoDieuTriNoiTru: number = null,
        public ThongTinHoSo: string = null,
        public FileChuKy: FileChuKyModel[] = [],
        public BacSiKhaiThac: string = null
    ) { }
}
//

export class ThemSuatAn {
    constructor(
        public DichVuKyThuatBenhVienId: number = null,
        public SoLan: number = null,
        public DoiTuongSuDung: number = null,
        public YeuCauTiepNhanId: number = 0,
        public NoiTruPhieuDieuTriId: number = 0,
        public Ma: string = null,
        public Ten: string = null,
        public DoiTuong: number = null,
        public BuaAn : number = null,
        public BuaAnDisplay : string = null,
    ) {
    }
}

export class TaoBenhAnSoSinhKhacKhoa {
    constructor(
        public BenhAnSoSinhChiTietViewModel: ThongTinDoiTuongSoSinhTiepNhanKhoaKhac = null,
        public DacDiemTreSoSinh: DacDiemTreSoSinh = null,
    ) { }
}

export class ThongTinDoiTuongSoSinhTiepNhanKhoaKhac {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public KhoaNhapVienId: number = null,
        public KhoaNhapVien: string = null,
        public MaBenhAnMe: string = null,

        public LyDoVaoVien: number = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public NgayThangNamSinh: Date = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: number = null,
        public GioiTinhDisplay: string = null,
        public NgheNghiepId: number = null,
        public QuocTichId: number = 1,
        public TinhThanhId: number = null,
        public QuanHuyenId: number = null,
        public PhuongXaId: number = null,
        public DiaChi: string = null,
        public SoDienThoai: string = null,
        public Email: string = null,
        public NoiLamViec: string = null,
        public TenKhaiSinh: string = null,
        public TenBanDau: string = null,
        public DanTocId: number = null,

        //người liên hệ
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,

        public IsCheckedBHYT: boolean = null,
        public TuNhap: boolean = false,

        public YeuCauGoiDichVuId: number = null,
        public KhoaChuyenBenhAnSoSinhVeId: number = null,
    ) { }
}
export class DacDiemTreSoSinh {
    constructor(
        public DeLuc: Date = null,
        public GioiTinhId: number = null,
        public GioiTinh: string = null,
        public TinhTrangId: number = null,
        public TenTinhTrang: string = null,
        public DiTat: string = null,
        public CanNang: number = null,
        public Cao: number = null,
        public VongDau: number = null,
        public CoHauMon: boolean = null,

        public ApGar: number = 1,
        public ChiSoApGar: number = null,

        public ApGar5: number = 2,
        public ChiSoApGar5: number = null,

        public ApGar10: number = 3,
        public ChiSoApGar10: number = null,

        public ChonTheoDoiSoSinh: number = null,
        public TinhTrang: string = null,
        public KetQuaXuLy: string = null,
    ) { }
}

export class LanPhauThuat {
    constructor(
        public IdView: number = Math.random(),
        public PTTTNgayGio: Date = null,
        public PTTTPhuongPhap: string = null,
        public PTTT: string = null,
        public VoCam: string = null,
        public PTTTPhauThuatVien: number = 0,
        public PTTTBacSyGayMe: number = 0,
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

export class DieuTriNoiTruTongKetBenhAnViewModel {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public QuaTrinhBenhLy: string = null,
        public XNMau: string = null,
        public XQuang: string = null,
        public XNTeBao: string = null,
        public SieuAm: string = null,
        public XNBLGP: string = null,
        public XNKhac: string = null,
        public PhuongPhapDieuTri: string = null,
        public TinhTrangNguoiBenhKhiRaVien: string = null,
        public HuongDieuTri: string = null,

        public SoToXQuang: number = 0,
        public SoToCTScanner: number = 0,
        public SoToSieuAm: number = 0,
        public SoToXetNghiem: number = 0,
        public SoToKhac: number = 0,

        public PhauThuatThuThuat: number = 0,
        public gridPhauThuatThuThuat: GridPhauThuatThuThuatViewModel[] = [],

        //============================== SẢN KHOA =================================================
        public VaoBuongDeLuc: Date = new Date,
        public NhanVienTheoDoiId: number = null,
        public TenNhanVienTheoDoi: string = null,
        public ChucDanhId: number = null,
        public TenChucDanh: string = null,

        public DacDiemTreSoSinhs: DacDiemTreSoSinh[] = [],

        public TinhTrangSauKhiDe: string = null,
        public XuLyKetQua: string = null,
        public ChiSoSinhTons: ChiSoSinhTon[] = [],

        public Boc: boolean = null,
        public So: boolean = null,
        public RauSoLuc: Date = null,
        public CachSoRau: string = null,
        public MatMang: string = null,
        public MatMui: string = null,
        public BanhRau: string = null,
        public CanNang: number = null,
        public RauCuonCo: boolean = null,
        public CuonRauDai: number = null,
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
    ) {
    }
}
export class ThongTinTheoDoiSoSinhDuocChon {
    constructor(
        public YeuCauTiepNhanMeId: number = null,
        public YeuCauTiepNhanConId: number = null,
        public DacDiemTreSoSinhs: DacDiemTreSoSinh[] = []
    ) {
    }
}
export class GridPhauThuatThuThuatViewModel {
    constructor(
        public IdView: number = Math.random(),
        public PTTTNgayGio: Date = null,
        public PTTTPhuongPhap: string = null,
        public PTTT: string = null,
        public VoCam: string = null,
        public PTTTPhauThuatVien: number = 0,
        public PTTTBacSyGayMe: number = 0,
    ) {
    }
}

export class ChiTietSuDungGiuongTheoNgay {
    constructor(
        public IsReadOnly: boolean = true,
        public SuDungGiuongTheoNgays: any[] = []
    ) { }
}

export class DataChiDinhTheoLoaiDichVuGroup {
    constructor(
        public Id: number = null,
        public LoaiDichVuKyThuat: string = null,
        public LoaiDichVuKyThuatEnum: number = null,
        public IsCheckPhieuIn: boolean = true
    ) { }
}


export class ListKetQuaXetNghiem {
    public Ten: string = null;
    public GiaTriCu: string = null;
    public GiaTriTuMay: string = null;
    public GiaTriNhapTay: string = null;
    public GiaTriDuyet: string = null;
    public ToDamGiaTri: boolean = null;
    public CSBT: string = null;
    public DonVi: string = null;

    public KetQuaCu: string = null;
    public KetQuaMoi: string = null;

    public ThoiDiemGuiYeuCau: Date = null;
    public ThoiDiemGuiYeuCauDisplay: string = null;
    public ThoiDiemNhanKetQua: Date = null;
    public ThoiDiemNhanKetQuaDisplay: string = null;
    public TenMayXetNghiem: string = null;
    public MayXetNghiemId: number = null;
    public ThoiDiemDuyetKetQua: Date = null;
    public ThoiDiemDuyetKetQuaDisplay: string = null;
    public NguoiDuyet: string = null;

    public LoaiMau: string = null;
    public DichVuXetNghiemId: number = null;

    public LoaiKetQuaTuMay: number = null;

    public IdChilds: number[] = new Array<number>();
    public Level: number = null;

    public DanhSachLoaiMau: string[] = new Array<string>();

    public YeuCauChayLai: boolean = null;
    public DaDuyet: boolean = null;
    public NgayYeuCauDisplay: string = null;
    public LyDoYeuCau: string = null;
    public NgayDuyetDisplay: string = null;

    public NguoiYeuCau: string = null;

    public NguoiDuyetChayLai: string = null;
    public Nhom: string = null;

    public DaDuyetChiTiet: boolean = null;

    public HighLightClass: string = null;
    public DaGoiDuyet: boolean = null;
    public CheckBox: boolean = null;

}

export class InPhieuXetNghiem {
    constructor(
        public HostingName: string = null,
        public Header: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public phieuDieuTriHienTaiId: number = null,        
        public YeuCauDichVuKyThuatId: number = null,
        public NhomDichVuBenhVienId: number = null
    ) { }
}
export class GridChiDinhDichVuNgoaiTruQueryInfoVo {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public NhomDichVuId: number = null
    ) { }
}

export class ChiDinhNgoaiTruCanXoa {
    constructor(
        public DichVuId: number = 0,
        public LyDoHuyDichVu: string = null
    ) { }
}

export class NoiTruKeToaItem {
    constructor(
        public Id: number = 0,
        public DuocPhamId: number = null,
        public Duoc: string = null,
        public HoatChat: string = null,
        public DVTId: number = null,
        public DVT: string = null,
        public DungSang: number = 0,
        public ThoiGianDungSang: number = null,
        public SangDisplay: string = "",
        public DungTrua: number = 0,
        public ThoiGianDungTrua: number = null,
        public TruaDisplay: string = "",
        public DungChieu: number = 0,
        public ThoiGianDungChieu: number = null,
        public ChieuDisplay: string = "",
        public DungToi: number = 0,
        public ThoiGianDungToi: number = null,
        public ToiDisplay: string = "",
        public SoNgayDung: number = null,
        public SoLuong: number = null,
        public TenDuongDung: string = null,
        public DuongDungId: number = null,
        public DonGia: number = null,
        public ThanhTien: number = null,
        public BNChiTra: number = null,
        public ThuocBHYT: boolean = false,
        public TuongTacThuoc: string = null,
        public DiUngThuoc: boolean = false,
        public GhiChu: string = null,
        public GhiChuDonThuoc: string = null,
        public KhoThuoc: number = 0,
        public YeuCauKhamBenhDonThuocId: number = 0,
        public Gia: number = 0,
        public LoaiKhoThuoc: number = 0,
        public NoiKeDonId: number = null,
        public Ten: string = null,
        public ToaMauLichSuKeToa: number = 3,
        public DonThuocChiTietId: number = 0,
        public LoaiDonThuoc: number = 0,
        public KhoThuocKhongBHYT: number = 0,
        public ThoiGianDungSangDisplay: string = "",
        public ThoiGianDungTruaDisplay: string = "",
        public ThoiGianDungChieuDisplay: string = "",
        public ThoiGianDungToiDisplay: string = "",
        public LieuDung: string = null,
        public DiUngThuocDisplay: string = null,
        public LastModified: any = null,
        public TongThanhTien: number = null,
        public LaDuocPhamBenhVien: boolean = null,
        public YeuCauTiepNhanId: number = null,
        public SoLanDungTrongNgayString: string = null,
        public KhuVuc: number = null,

    ) { }
}

export class InThuocRaVienVo {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public HostingName: string = null,
        public GhiChu: string = null,
        public Header: boolean = false,
        public Ids: Array<number> = [],
    ) { }
}

export class XacNhanInPhieuAn {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public Hosting: string = null,
        public PhieuDieuTriId: number = null,
        public DichVuDuocChon: Array<number> = []  
    ) { }
}


export class NoiTruChiDinhPhaThuocTiem {
    constructor(
        public Id: number = 0,
        public NoiTruChiDinhPhaThuocTiemId: number = null,
        public YeuCauTiepNhanId: number = null,
        public NoiTruBenhAnId: number = null,
        public PhieuDieuTriHienTaiId: number = null,
        public ThoiGianBatDauTiem: number = null,
        public SoLanTrenMui: number = null,
        public SoLanTrenNgay: number = null,
        public CachGioTiem: number = null,
        public LaThuocTiem: boolean = false,
        public LaDichTruyen: boolean = true,
        public LoaiKho: number = null,
        public LaThuocTruyen: boolean = false,
        public GioSuDung: string = null,
        public GhiChu: string = null,
        public KhongTinhPhi: boolean = null,
        public IsDelete: boolean = false,
        public KhuVuc: number = null,
        public SoThuTu: number = null,
        public NoiTruChiDinhDuocPhams: NoiTruChiDinhDuocPham[] = [],

    ) { }
}

export class NoiTruChiDinhPhaThuocTruyen {
    constructor(
        public Id: number = 0,
        public NoiTruChiDinhPhaThuocTruyenId: number = null,
        public YeuCauTiepNhanId: number = null,
        public NoiTruBenhAnId: number = null,
        public PhieuDieuTriHienTaiId: number = null,
        public TocDoTruyen: number = null,
        public DonViTocDoTruyen: number = null,
        public LaDichTruyen: boolean = true,
        public DonViTocDoTruyenDisplay: string = null,
        public ThoiGianBatDauTruyen: number = null,
        public CachGioTruyen: number = null,
        public SoLanTrenNgay: number = null,
        public GioSuDung: string = null,
        public LoaiKho: number = null,
        public GhiChu: string = null,
        public KhuVuc: number = null,
        public IsDelete: boolean = false,
        public SoThuTu: number = null,
        public KhongTinhPhi: boolean = null,
        public NoiTruChiDinhDuocPhams: NoiTruChiDinhDuocPham[] = []
    ) { }
}

export class NoiTruChiDinhDuocPham {
    constructor(
        public LoaiKho: number = null,
        public KhoId: number = null,
        public LaDuocPhamBHYT: number = null,
        public LaDuocPhamBHYTNumber: number = null,
        public DuocPhamBenhVienId: number = null,
        public SoLuong: number = null,
        public KhuVuc: number = null,
        public SoThuTu: number = null,
    ) { }
}

export class CapNhatKhongTinhPhiTiemHoacTruyen {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public KhongTinhPhi: boolean = null,
        public LaThuocTiem: boolean = null,
        public Ids: Array<number> = [],
    ) {
    }
}
export class LookupItemVoGhiChuGiayRaVien {
    constructor(
        public KeyId: number = null,
        public DisplayName: string = null,
    ) {
    }
}


export class NoiTruDonThuocTongHopVo {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public KhoaId: number = null,
        public Dates: Array<Date> = [],
        public NoiTruDonThuocTongHopChiTietVos: NoiTruDonThuocTongHopChiTietVo[] = [],
        public NoiTruDonThuocTuVanChiTietVos: NoiTruDonThuocTongHopChiTietVo[] = [],
    ) { }
}

export class NoiTruDonThuocTongHopChiTietVo {
    constructor(
        public Id: number = 0,
        public KhoId: number = null,
        public DuocPhamBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public TenDuongDung: string = null,
        public HoatChat: string = null,
        public LaDuocPhamBHYT: number = null,
        public DungSang: string = null,
        public DungTrua: string = null,
        public DungChieu: string = null,
        public DungToi: string = null,
        public ThoiGianDungSang: number = null,
        public ThoiGianDungTrua: number = null,
        public ThoiGianDungChieu: number = null,
        public ThoiGianDungToi: number = null,
        public SoLanDungTrongNgay: number = null,
        public SoLanDungTrongNgayString: string = null,
        public SoLuong: number = null,
        public GhiChu: string = null,
        public YeuCauTiepNhanId: number = null,
        public TinhTrang: boolean = null,
        public SoLanTrenVien: number = null,
        public CachGioDungThuoc: number = null,
        public LieuDungTrenNgay: number = null,
        public LieuDungTrenNgayDisplay: string = null,
        //DỊCH TRUYỀN
        public LaDichTruyen: boolean = null,
        public TocDoTruyen: number = null,
        public DonViTocDoTruyen: number = null,
        public DonViTocDoTruyenDisplay: string = null,
        public ThoiGianBatDauTruyen: number = null,
        public CachGioTruyenDich: number = null,
        public GioSuDung: string = null,
        public TheTich: number = null,
        public PhieuDieuTriHienTaiId: number = null,
        public KhongTinhPhi: boolean = null,
        public LoaiKho: number = null,
        public IsDelete: boolean = false,
        public KhuVuc: number = null,
        public SoThuTu: number = null,
        public LaTangSTT: boolean = null,
        public NoiTruChiDinhPhaThuocTiemId: number = null,
        public ThoiGianBatDauTiem: number = null,
        public SoLanTrenMui: number = null,
        public CachGioTiem: number = null,
        public LaThuocTiem: boolean = false,
        public LaThuocTruyen: boolean = false,
        public NoiTruChiDinhPhaThuocTruyenId: number = null,
        public NoiTruBenhAnId: number = null,
        public CachGioTruyen: number = null,
        public SoLanTrenNgay: number = null,


    ) { }
}


export class NoiTruDonVTYTTongHopVo {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public KhoaId: number = null,
        public Dates: Array<Date> = [],
        public NoiTruDonVTYTTongHopChiTietVos: NoiTruDonVTYTTongHopChiTietVo[] = [],
    ) { }
}

export class NoiTruDonVTYTTongHopChiTietVo {
    constructor(
        public Id: number = 0,
        public KhoId: number = null,
        public VatTuBenhVienId: number = null,
        public Ten: string = null,
        public Ma: string = null,
        public DVT: string = null,
        public LaVatTuBHYT: boolean = null,
        public YeuCauDichVuKyThuatId: number = null,
        public KhongTinhPhi: boolean = null,
        public LoaiKho: number = null,
        public SoLuong: number = null,
        public YeuCauTiepNhanId: number = null,
        public PhieuDieuTriHienTaiId: number = null,
    ) { }
}

export class NgayDieuTriDauTien {
    constructor(
        public KhoaChiDinhId: number = 0,
        public LaNgayDieuTriDauTien: boolean = false,
        public LaKhoaChiDinh: boolean = false,

    ) { }
}