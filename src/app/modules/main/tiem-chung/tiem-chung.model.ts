//  export class ThongTinBenhNhanTiemChung {
//     constructor (
//         public Id: number = null,
//         public YeuCauTiepNhanId: number = null,
//         public YeuCauDichVuKyThuatTiemChungId: number = null,

import { DateTime } from "luxon";
import { GioiTinh } from "src/app/shared/enum/common-type.enums";
import { LoaiKetLuanKhamSangLocTiemChung, LoaiPhanUngSauTiem, ViTriTiem, TrangThaiTiemChung, LaiHangDoiTiemVacxin } from "src/app/shared/enum/tiem-vacxin.enum";
import { TiemChungTheoDoiSauTiem } from "./tiem-chung-shared/thong-tin-tiem-chung-shared/theo-doi-sau-tiem/theo-doi-sau-tiem.model";

        
//         public MaTiepNhan: string = null,
//         public MaBenhNhan: string = null,
//         public HoTen: string = null,
//         public GioiTinh: number = null,
//         public GioiTinhDisplay: string = null,
//         public Tuoi: number = null,
//         public SoDienThoai: string = null,
//         public DanTocId: number = null,
//         public DanTocDisplay: string = null,
//         public DiaChi: string = null,
//         public NgheNghiepId: number = null,
//         public NgheNghiepDisplay: string = null,
//         public TuyenKham: boolean = null,
//         public TuyenKhamDisplay: string = null,
//         public SoBHYT: string = null,
//         public MucHuong: number = null,
//         public LyDoTiepNhan: string = null,
//         public NgayTiepNhan: Date = null,
//         public NgayTiepNhanDisplay: string = null,

//         public SoDuTaiKhoan: number = null,
//         public SoDuTaiKhoanDisplay: string = null,
//         public SoDuTaiKhoanUocLuongConLai: number = null,
//         public SoDuTaiKhoanUocLuongConLaiDisplay: string = null
//     ) { }
// }

export class NgheNghiep {
    constructor(
        public Id: number = null,
        public Ten: string = null,
        public TenVietTat: string = null,
        public MoTa: string = null,
        public IsDisabled: boolean = null
    ) { }
}

export class DanToc {
    constructor(
        public Id: number = null,
        public Ma: string = null,
        public Ten: string = null,
        public QuocGiaId: number = null,
        public IsDisabled: boolean = null
    ) { }
}

export class BenhNhanTiemVacxinTienSuBenh {
    constructor(
        public Id: number = 0,
        public BenhNhanId: number = 0,
        public LoaiTienSuBenh: number = null,
        public TenLoaiTienSuBenh: string = null,
        public TenBenh: string = null,
        // public BenhId: number = 0,
        // public NgayPhatHien: DateTime = null,
        // public TenTinhTrang: string = null

    ) { }
}

export class BenhNhanTiemVacxinDiUngThuoc {
    constructor(
        public Id: number = 0,
        // public ThuocId: number = 0,
        public BenhNhanId: number = 0,

        public TenDiUng: string = null,
        // public Ma: string = null,
        public BieuHienDiUng: string = null,
        public LoaiDiUng: number = null,
        public TenLoaiDiUng: string = null,
        public MucDo: number = null,
        public TenMucDo: string = null
    ) { }
}

export class BenhNhanTiemVacxin {
    constructor(
        public Id: number = 0,
        public MaBN: string = null,
        public HoTen: string = null,
        public BenhNhanTiemVacxinDiUngThuocs: BenhNhanTiemVacxinDiUngThuoc[] = [],
        public BenhNhanTiemVacxinTienSuBenhs: BenhNhanTiemVacxinTienSuBenh[] = []
    ) { }
}

export class YeuCauTiepNhan {
    constructor(
        public Id: number = null,
        public BenhNhanId: number = null,
        public HoTen: string = null,
        public NgaySinh: number = null,
        public ThangSinh: number = null,
        public NamSinh: number = null,
        public Tuoi: number = null,
        public SoChungMinhThu: string = null,
        public GioiTinh: GioiTinh = null,
        public TenGioiTinh: string = null,
        public NhomMau: number = null,
        public NgheNghiepId: number = null,
        public NgheNghiep: NgheNghiep = null,
        public NoiLamViec: string = null,
        public QuocTichId: number = null,
        public DanTocId: number = null,
        public DanToc: DanToc = null,
        public DiaChi: string = null,
        public DiaChiDisplay: string = null,
        public PhuongXaId: number = null,
        public QuanHuyenId: number = null,
        public TinhThanhId: number = null,
        public SoDienThoai: string = null,
        public SoDienThoaiDisplay: string = null,
        public Email: string = null,
        public NoiGioiThieuId: number = null,
        public HinhThucDenId: number = null,
        public DuocUuDai: boolean = null,
        public DoiTuongUuDaiId: number = null,
        public CongTyUuDaiId: number = null,
        public NguoiLienHeHoTen: string = null,
        public NguoiLienHeQuanHeNhanThanId: number = null,
        public NguoiLienHeSoDienThoai: string = null,
        public NguoiLienHeEmail: string = null,
        public NguoiLienHeDiaChi: string = null,
        public NguoiLienHePhuongXaId: number = null,
        public NguoiLienHeQuanHuyenId: number = null,
        public NguoiLienHeTinhThanhId: number = null,
        public CoBHYT: boolean = null,
        public BHYTMaSoThe: string = null,
        public BHYTMucHuong: number = null,
        public BHYTMaDKBD: string = null,
        public BHYTNgayHieuLuc: Date = null,
        public BHYTNgayHetHan: Date = null,
        public BHYTThoiGianHieuLucDisplay: string = null,
        public IsBHYTHetHan: boolean = null,
        public TenLyDoTiepNhan: string = null,

        public TenNoiThucHien: string = null,
        public LoaiYeuCauTiepNhan: number = null,
        public MaYeuCauTiepNhan: string = null,
        public ThoiDiemTiepNhan: Date = null,
        public ThoiDiemTiepNhanDisplay: string = null,
        public NhanVienTiepNhanId: number = null,
        public NoiTiepNhanId: number = null,
        public LyDoVaoVien: number = null,
        public TenLyDoVaoVien: string = null,
        public TrieuChungTiepNhan: string = null,
        // public KetQuaSinhHieus: KetQuaSinhHieu[] = [],
        public BenhNhan: BenhNhanTiemVacxin = null,
        public SoDuTaiKhoan: number = null,
        public SoDuTaiKhoanDisplay: string = null,
        public SoDuTaiKhoanConLai: number = null,
        public SoDuTaiKhoanConLaiDisplay: string = null,

        public HopDongKhamSucKhoeNhanVienId: number = null,
        public HopDongKhamSucKhoeId: number = null,

        //BVHD-3800
        public LaCapCuu: boolean = null
    ) { }
}

export class YeuCauDichVuKyThuat {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = null,
        public YeuCauTiepNhan: YeuCauTiepNhan = null,
        public YeuCauKhamBenhId: number = null,
        public YeuCauKhamBenh: YeuCauKhamBenh = null,
        public YeuCauDichVuKyThuatKhamSangLocTiemChungId: number = null,
        public NoiTruPhieuDieuTriId: number = null,
        public KhamSangLocTiemChung: TiemChungYeuCauDichVuKyThuatKhamSangLoc = null,
        public TiemChung: TiemChungYeuCauDichVuKyThuatTiemChung = new TiemChungYeuCauDichVuKyThuatTiemChung(),

        public DichVuKyThuatBenhVienId: number = null,
        public DichVuKyThuatBenhVienDisplay: string = null,
        public NhomDichVuBenhVienId: number = null,
        public NoiThucHienId: number = null,
        public NoiThucHienDisplay: string = null,
        public BaoHiemChiTra: boolean = null,
        public DuocHuongBaoHiem : boolean = null,
        public MaDichVu: string = null,
        public TenDichVu: string = null,
        public Gia: number = null,
        public ThanhTien: number = null,
        public NhomGiaDichVuKyThuatBenhVienId: number = null,
        public NhomChiPhi: number = null,
        public SoLan: number = null,
        public TiLeUuDai: number = null,
        public TrangThaiThanhToan: number = null,
        public TrangThai: number = null,
        public TrangThaiDisplay: string = null,
        public NhanVienChiDinhId: number = null,
        public NhanVienChiDinhDisplay: string = null,
        public NoiChiDinhId: number = null,
        public NoiChiDinhDisplay: string = null,
        public ThoiDiemChiDinh: Date = null,
        public ThoiDiemChiDinhDisplay: string = null,
        public ThoiDiemDangKy: Date = null,
        public ThoiDiemDangKyDisplay: string = null,
        public LoaiDichVuKyThuat: number = null,
        public MaGiaDichVu: string = null,
        public TenGiaDichVu: string = null,
        public NhanVienThucHienId: number = null,
        public NhanVienThucHienDisplay: string = null,
        public DonGiaBaoHiem: number = null,
        public TiLeBaoHiemThanhToan: number = null,

        public IsDuoi6Tuoi: boolean = false,
        public Duoi6TuoiDisplay: string = null,

        public validationErrors: any = null,
        public isDataKhamSangLocChungChange: boolean = false,

        public CoDichVuKhuyenMai: boolean = false,
        public CoVacxinChuaTiem: boolean = true,

        public SoThangTuoi: number = null,

        public IsDichVuHuyThanhToan: boolean = null,
        public LyDoHuyDichVu: string = null,
        
        public IsKhongTiemChung: boolean = null,
        public CoThongTinThanhToan: boolean = null,
        public IsDaTiem: boolean = null,

        public YeuCauGoiDichVuId: number = null,
        public Ma4350DichVu: string = null,
        public DonGiaTruocChietKhau: number = null,
        public DonGiaSauChietKhau: number = null,

        //BVHD-3733
        public TenGoiDichVu: string = null,

        //BVHD-3825
        public YeuCauGoiDichVuKhuyenMaiId: number = null,
        public SoTienMienGiam: number = null,
        public MienGiamChiPhis : Array<MienGiamChiPhi> = []
    ) { }
}

export class MienGiamChiPhi {
    constructor(
        public Id: number = 0,
        public YeuCauTiepNhanId: number = 0,
        public LoaiMienGiam: number = null,
        public LoaiChietKhau: number = null,
        public SoTien: number = null,
        public YeuCauGoiDichVuId: number = null,
        public DaHuy: boolean = null
    ) { }
}

export class YeuCauKhamBenh {
    constructor(
        public Id: number = 0,
        public GhiChuCanLamSang: string = null
    ) { }
}

export class YeuCauDichVuKyThuatKhamSangLocTiemChung {
    constructor(
        public Id: number = 0,
    ) { }
}

export class TiemChungYeuCauDichVuKyThuatKhamSangLoc {
    constructor (
        public Id: number = null,
        public ThongTinKhamSangLocTiemChungTemplate: string = null,
        public ThongTinKhamSangLocTiemChungData: string = null,
        public ThongTinKhamSangLocTiemChungTemplateObj: any = null,
        public BenhNhanDeNghi: boolean = null,
        public LyDoDeNghi: string = null,
        public KetLuan: LoaiKetLuanKhamSangLocTiemChung = null,
        public KetLuanDisplay: string = null,
        public GhiChuKetLuan: string = null,
        public SoNgayHenTiemMuiTiepTheo: number = null,
        public NgayHenTiemMuiTiepTheo: Date = null,
        public GhiChuHenTiemMuiTiepTheo: string = null,
        public NhanVienHoanThanhKhamSangLocId: number = null,
        public NhanVienHoanThanhKhamSangLocDisplay: string = null,
        public ThoiDiemHoanThanhKhamSangLoc: Date = null,
        public NoiTheoDoiSauTiemId: number = null,

        public TiemChungTheoDoiSauTiem: TiemChungTheoDoiSauTiem = null,
        public YeuCauDichVuKyThuats: YeuCauDichVuKyThuat[] = [],
        public KetQuaSinhHieus: KetQuaSinhHieu[] = [],
        // public TiemChungYeuCauDichVuKyThuatTiemChungs: TiemChungYeuCauDichVuKyThuatTiemChung[] = []

        public IsHoanThanhTiem: boolean = false
    ) { }
}

export class TiemChungYeuCauDichVuKyThuatTiemChung {
    constructor (
        public Id: number = 0,
        public DuocPhamBenhVienId: number = null,
        public TenDuocPham: string = null,
        public TenDuocPhamTiengAnh: string = null,
        public SoDangKy: string = null,
        public STTHoatChat: number = null,
        public MaHoatChat: string = null,
        public HoatChat: string = null,
        public LoaiThuocHoacHoatChat: number = null,
        public NhaSanXuat: string = null,
        public NuocSanXuat: string = null,
        public DuongDungId: number = null,
        public HamLuong: string = null,
        public QuyCach: string = null,
        public TieuChuan: string = null,
        public DangBaoChe: string = null,
        public DonViTinhId: number = null,
        public HuongDan: string = null,
        public MoTa: string = null,
        public ChiDinh: string = null,
        public ChongChiDinh: string = null,
        public LieuLuongCachDung: string = null,
        public TacDungPhu: string = null,
        public ChuYdePhong: string = null,
        public HopDongThauDuocPhamId: number = null,
        public NhaThauId: number = null,
        public SoHopDongThau: string = null,
        public SoQuyetDinhThau: string = null,
        public LoaiThau: number = null,
        public LoaiThuocThau: number = null,
        public NhomThau: string = null,
        public GoiThau: string = null,
        public NamThau: number = null,
        public SoLuong: number = 1,
        public XuatKhoDuocPhamChiTietId: number = null,
        public ViTriTiem: number = null,
        public ViTriTiemDisplay: string = null,
        public MuiSo: number = 1,
        public TrangThaiTiemChung: number = 1,
        public TrangThaiTiemChungDisplay: string = null,
        public NhanVienTiemId: number = null,
        public NhanVienTiemDisplay: string = null,
        public ThoiDiemTiem: Date = null,
        public ThoiDiemTiemDisplay: string = null,
        public LieuLuong: string = null,
        public IsDaTiem: boolean = false
    ) { }
}

export class ListParentTabStatusTiemChung {
    constructor(
        public tabHangDoiSelected: boolean = true,
        public tabDanhSachHoanThanhKhamSelected: boolean = false
    ) { }
}

export class ListTabStatusKhamTiemChung {
    constructor(
        public tabKhamSangLocChungSelected: boolean = true,
        public tabLichSuTiemSelected: boolean = false,
        public tabThucHienTiemSelected: boolean = false,
        public tabTheoDoiSelected: boolean = false
    ) { }
}

// export class TienSuBenh {
//     constructor(
//         public Id: number = null,
//         public LoaiTienSu: number = null,
//         public LoaiTienSuDisplay: string = null,
//         public TenBenh: string = null,
//         public IsEditable: boolean = null
//     ) { }
// }

export class DataSourceTienSuBenh {
    constructor(
        public data: BenhNhanTiemVacxinTienSuBenh[] = [],
        public total: number = null
    ) { }
}

// export class DiUng {
//     constructor(
//         public Id: number = null,
//         public LoaiDiUng: number = null,
//         public LoaiDuUngDisplay: string = null,
//         public TenDiUng: string = null,
//         public BieuHienDiUng: string = null,
//         public MucDo: number = null,
//         public MucDoDisplay: string = null,
//         public IsEditable: boolean = null
//     ) { }
// }

export class DataSourceDiUng {
    constructor(
        public data: BenhNhanTiemVacxinDiUngThuoc[] = [],
        public total: number = null
    ) { }
}

export class KetQuaSinhHieu {
    constructor(
        public Id: number = null,
        public YeuCauTiepNhanId: number = null,
        public YeuCauDichVuKyThuatKhamSangLocTiemChungId: number = null,
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
        public ThoiDiemThucHien: any = null,
        public ThoiDiemThucHienDisplay: string = null,
        public NoiThucHienId: number = null,
        public NhanVienThucHienId: number = null,
        public IsEditable: boolean = null
    ) { }
}

export class DataSourceChiSoSinhTon {
    constructor(
        public data: KetQuaSinhHieu[] = [],
        public total: number = null
    ) { }
}

// export class ChiDinhVacxinTiemChung {
//     constructor(
//         public YeuCauTiepNhanId: number = null,
//         public YeuCauDichVuKyThuatId: number = null,
//         // public YeuCauDichVuKyThuatTiemChungId: number = null,
//         // public YeuCauDichVuKyThuatTiemChungDisplay: string = null,
//         public DichVuKyThuatBenhVienId: number = null,
//         public DichVuKyThuatBenhVienDisplay: string = null,
//         public DuocPhamBenhVienId: number = null,
//         public KhoId: number = null,
//         public SoLuong: number = 1,
//         public DonGia: number = null,
//         public ThanhTien: number = null,
//         public TrangThai: number = null,
//         public TrangThaiDisplay: string = null,
//         public ViTriTiem: number = null,
//         public ViTriTiemDisplay: string = null,
//         public MuiSo: number = 1,
//         public NoiThucHienId: number = null,
//         public NoiThucHienDisplay: string = null,
//         public NguoiChiDinhId: number = null,
//         public NguoiChiDinhDisplay: string = null,
//         public NguoiThucHienId: number = null,
//         public NguoiThucHienDisplay: string = null,
//     ) { }
// }

export class LichSuTiemChungSearch {
    constructor(
        public YeuCauTiepNhanId: number = null,
        public BenhNhanId: number = null,
        public YeuCauDichVuKyThuatKhamSangLocId: number = null,
        public SearchString: string = null,
        public ThoiDiemKham: RangeDate = new RangeDate(),
        public ThoiGianCachLichHen: number = null,
        public PhongBenhVienId: number = null
    ) { }
}

export class RangeDate {
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
    ){}
}

export class HangDoTiemChungInputViewModel{
    constructor(
        public HangDoiDangKhamId: number = null,
        public HangDoiBatDauKhamId: number = null,
        public HangDoiVacXinId: number = null,
        public HoanThanhKham: boolean = null,
        public LoaiHangDoi: LaiHangDoiTiemVacxin = null
    ){}
}

export class HoanThanhKhamTiemChungTimKiemNangCao {
    constructor(
        public SearchString: string = null,
        public VacxinId: number = null,
        public LoaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.KhamSangLoc,
        public TuNgayDenNgay: HoanThanhKhamTiemChungTimKiemTuNgayDenNgay = new HoanThanhKhamTiemChungTimKiemTuNgayDenNgay()
    ){}
}

export class HoanThanhKhamTiemChungTimKiemTuNgayDenNgay{
    constructor(
        public startDate: Date = null,
        public endDate: Date = null,
        public TuNgay: string = null,
        public DenNgay: string = null
    ){}
}
